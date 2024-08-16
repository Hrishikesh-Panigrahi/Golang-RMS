package main

import (
	"fmt"

	"github.com/Hrishikesh-Panigrahi/Golang-RMS/connections"
	"github.com/gin-gonic/gin"
)

func init() {
	connections.LoadEnv()
	connections.ConnectDB()
	connections.AutoMigrate()
}
func main() {
	r := gin.Default()
	r.GET("/", func(c *gin.Context) {
		fmt.Println("Hello World")
	})
	r.Run()
}
