package main

import (
	"github.com/Hrishikesh-Panigrahi/Golang-RMS/connections"
	"github.com/Hrishikesh-Panigrahi/Golang-RMS/routes"
	"github.com/gin-gonic/gin"
)

func init() {
	connections.LoadEnv()
	connections.ConnectDB()
	connections.AutoMigrate()
}
func main() {
	r := gin.Default()

	router := r.Group("/")
	routes.AddRoutes(router)

	r.Run()
}
