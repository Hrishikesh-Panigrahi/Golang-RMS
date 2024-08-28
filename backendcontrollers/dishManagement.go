package backendcontrollers

import (
	"net/http"
	"strconv"

	"github.com/Hrishikesh-Panigrahi/Golang-RMS/connections"
	"github.com/Hrishikesh-Panigrahi/Golang-RMS/models"
	"github.com/gin-gonic/gin"
)

func CreateDish(c *gin.Context) {
	var DishInput struct {
		Name        string  `json:"name"`
		Price       float64 `json:"price"`
		Description string  `json:"description"`
		Ingredients string  `json:"ingredients"`
		Tag         string  `json:"tag"`
		Available   bool    `json:"available"`
	}

	if err := c.Bind(&DishInput); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	dish := models.Dish{
		Name:        DishInput.Name,
		Price:       DishInput.Price,
		Description: DishInput.Description,
		Ingredients: DishInput.Ingredients,
		Tag:         DishInput.Tag,
		Available:   DishInput.Available,
	}

	result := connections.DB.Create(&dish)

	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": result.Error})
	} else {
		c.JSON(http.StatusOK, gin.H{"data": dish})
	}
}

func GetDishes(c *gin.Context) {
	var dishes []models.Dish
	connections.DB.Find(&dishes)

	c.JSON(http.StatusOK, gin.H{"data": dishes})
}

func RecentlyAddedDish(c *gin.Context) {
	var dishes []models.Dish
	connections.DB.Unscoped().Order("id").Find(&dishes)

	c.JSON(http.StatusOK, gin.H{"data": dishes})
}

func GetDish(c *gin.Context) {
	id := c.Param("id")
	var Dish models.Dish
	connections.DB.First(&Dish, id)

	c.JSON(http.StatusOK, gin.H{"data": Dish})
}

func UpdateDish(c *gin.Context) {
	id := c.Param("id")
	var Dish models.Dish
	connections.DB.First(&Dish, id)

	Name := c.PostForm("name")
	Price, err := strconv.ParseFloat(c.PostForm("price"), 64)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid Salary"})
		return
	}
	Description := c.PostForm("description")
	Ingredients := c.PostForm("ingredients")
	Tag := c.PostForm("tag")
	Available, err := strconv.ParseBool(c.PostForm("available"))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid boolean value"})
		return
	}

	result := connections.DB.Model(&Dish).Updates(models.Dish{Name: Name, Price: Price, Description: Description, Ingredients: Ingredients, Tag: Tag, Available: Available})
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": result.Error})
	} else {
		c.JSON(http.StatusOK, gin.H{"data": Dish})
	}
}

func DeleteDish(c *gin.Context) {
	id := c.Param("id")
	result := connections.DB.Delete(&models.Dish{}, id)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": result.Error})
	} else {
		c.JSON(http.StatusOK, gin.H{"data": "Dish Deleted"})
	}
}

func DishSearch(c *gin.Context) {
	var dishes []models.Dish
	search := c.PostForm("search")
	connections.DB.Where("name LIKE ?", "%"+search+"%").Find(&dishes)

	c.JSON(http.StatusOK, gin.H{"data": dishes})
}
