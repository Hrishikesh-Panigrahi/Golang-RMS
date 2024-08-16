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
	if c.Request.Method == "POST" {
		employeeName := c.PostForm("employeeName")
		employeeSalary, err := strconv.ParseFloat(c.PostForm("employeeSalary"), 64)

		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid Salary"})
			return
		}

		employeeShift := c.PostForm("employeeShift")
		employeeDesgination := c.PostForm("employeeDesgination")
		employeeGender := c.PostForm("employeeGender")

		employee := models.Employee{Name: employeeName, Salary: employeeSalary, Shift: employeeShift, Desgination: employeeDesgination, Gender: employeeGender}

		result := connections.DB.Create(&employee)

		if result.Error != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": result.Error})
		} else {
			c.JSON(http.StatusOK, gin.H{"data": employee})
		}
	}
}
