package connections

import (
	"log"

	"github.com/Hrishikesh-Panigrahi/Golang-RMS/models"
	"github.com/joho/godotenv"
)

func AutoMigrate() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
	err = DB.AutoMigrate(&models.Dish{}, &models.Employee{}, &models.OrderDetails{})
	if err != nil {
		log.Fatal("Error migrating the database")
	}
}
