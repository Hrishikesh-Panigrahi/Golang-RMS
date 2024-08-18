package backendcontrollers

import (
	"net/http"
	"strconv"

	"github.com/Hrishikesh-Panigrahi/Golang-RMS/connections"
	"github.com/Hrishikesh-Panigrahi/Golang-RMS/models"
	"github.com/gin-gonic/gin"
)

func CreateDish(c *gin.Context) {
	Name := c.PostForm("name")
	Price, err := strconv.ParseFloat(c.PostForm("price"), 64)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid Salary"})
		return
	}
	Description := c.PostForm("description")
	Ingredients := c.PostForm("ingredients")
	Tag := c.PostForm("tag")
	Available := true

	dish := models.Dish{Name: Name, Price: Price, Description: Description, Ingredients: Ingredients, Tag: Tag, Available: Available}
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
