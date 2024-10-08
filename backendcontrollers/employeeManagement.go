package backendcontrollers

import (
	"net/http"
	"strconv"

	"github.com/Hrishikesh-Panigrahi/Golang-RMS/connections"
	"github.com/Hrishikesh-Panigrahi/Golang-RMS/models"
	"github.com/gin-gonic/gin"
)

func GetEmployees(c *gin.Context) {
	var employees []models.Employee
	connections.DB.Find(&employees)

	c.JSON(http.StatusOK, gin.H{"data": employees})
}

func CreateEmployee(c *gin.Context) {
	var EmployeeRegisterInput struct {
		Name        string  `json:"name"`
		Salary      float64 `json:"salary"`
		Designation string  `json:"designation"`
		Shift       string  `json:"shift"`
		Gender      string  `json:"gender"`
	}

	if err := c.Bind(&EmployeeRegisterInput); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	employee := models.Employee{
		Name:        EmployeeRegisterInput.Name,
		Salary:      EmployeeRegisterInput.Salary,
		Designation: EmployeeRegisterInput.Designation,
		Shift:       EmployeeRegisterInput.Shift,
		Gender:      EmployeeRegisterInput.Gender,
	}

	result := connections.DB.Create(&employee)

	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": result.Error.Error()})
	} else {
		c.JSON(http.StatusOK, gin.H{"data": employee})
	}
}

func RecentlyAddedEmployee(c *gin.Context) {
	var employees []models.Employee
	connections.DB.Unscoped().Order("id").Find(&employees)

	c.JSON(http.StatusOK, gin.H{"data": employees})
}

func DeleteEmployee(c *gin.Context) {
	id := c.Param("id")
	result := connections.DB.Delete(&models.Employee{}, id)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": result.Error})
	} else {
		c.JSON(http.StatusOK, gin.H{"data": "Employee Deleted"})
	}
}

func BatchDeleteEmployee(c *gin.Context) {
	ids := c.PostFormArray("ids")

	var users []models.Employee
	connections.DB.Where("id IN (?)", ids).Find(&users)
	result := connections.DB.Delete(&users)

	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": result.Error})
	} else {
		c.JSON(http.StatusOK, gin.H{"data": "Employee Deleted"})
	}
}

func RecentlyDeletedEmployee(c *gin.Context) {
	var employees []models.Employee
	connections.DB.Unscoped().Find(&employees)

	c.JSON(http.StatusOK, gin.H{"data": employees})
}

func RestoreEmployee(c *gin.Context) {
	id := c.Param("id")
	result := connections.DB.Unscoped().Model(&models.Employee{}).Where("id = ?", id).Update("deleted_at", nil)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": result.Error})
	} else {
		c.JSON(http.StatusOK, gin.H{"data": "Employee Restored"})
	}
}

func PermanaentlyDeleteEmployee(c *gin.Context) {
	id := c.Param("id")
	result := connections.DB.Unscoped().Delete(&models.Employee{}, id)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": result.Error})
	} else {
		c.JSON(http.StatusOK, gin.H{"data": "Employee Deleted Permanatly"})
	}
}

func GetEmployee(c *gin.Context) {
	id := c.Param("id")
	var employee models.Employee
	connections.DB.First(&employee, id)

	c.JSON(http.StatusOK, gin.H{"data": employee})
}

func UpdateEmployee(c *gin.Context) {
	id := c.Param("id")
	var employee models.Employee

	employeeName := c.PostForm("employeeName")
	employeeSalary, err := strconv.ParseFloat(c.PostForm("employeeSalary"), 64)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid Salary"})
		return
	}

	employeeShift := c.PostForm("employeeShift")
	employeeDesgination := c.PostForm("employeeDesgination")
	employeeGender := c.PostForm("employeeGender")

	connections.DB.First(&employee, id)

	result := connections.DB.Model(&employee).Updates(models.Employee{Name: employeeName, Salary: employeeSalary,
		Shift: employeeShift, Designation: employeeDesgination,
		Gender: employeeGender})

	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": result.Error})
	} else {
		c.JSON(http.StatusOK, gin.H{"data": employee})
	}
}

func EmployeeSearch(c *gin.Context) {
	var employee []models.Employee
	search := c.PostForm("search")
	connections.DB.Where("name LIKE ?", "%"+search+"%").Find(&employee)

	c.JSON(http.StatusOK, gin.H{"data": employee})
}
