package backendcontrollers

import (
	"net/http"
	"time"

	"github.com/Hrishikesh-Panigrahi/Golang-RMS/connections"
	"github.com/Hrishikesh-Panigrahi/Golang-RMS/models"
	"github.com/gin-gonic/gin"
)

func CheckAvailableTables(c *gin.Context) {
	var QueryTable struct {
		Date      time.Time `json:"date"`
		StartTime time.Time `json:"startTime"`
		Guests    int       `json:"guests"`
	}

	if err := c.Bind(&QueryTable); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Query to get available tables
	query := connections.DB.Table("tables").Where("id NOT IN (?)", connections.DB.Table("reservations").
		Select("tableId").
		Where("date = ? AND time = ?", QueryTable.Date, QueryTable.StartTime))

	var availableTables []models.Tables

	if err := query.Find(&availableTables).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": availableTables})

}
