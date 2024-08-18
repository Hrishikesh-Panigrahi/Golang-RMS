package routes

import (
	"github.com/Hrishikesh-Panigrahi/Golang-RMS/backendcontrollers"
	"github.com/gin-gonic/gin"
)

func EmployeeRoutes(superRoute *gin.RouterGroup) {
	EmployeeRoutes := superRoute.Group("api/employee")
	{
		Employee := EmployeeRoutes.Group("")
		{
			Employee.GET("", backendcontrollers.GetEmployees)                                   // Get all employees
			Employee.POST("", backendcontrollers.CreateEmployee)                                // Create an employee
			Employee.GET("/recentlyadded", backendcontrollers.RecentlyAddedEmployee)            // Get recently added employee
			Employee.DELETE("/:id", backendcontrollers.DeleteEmployee)                          // Delete an employee
			Employee.POST("/batchdelete", backendcontrollers.BatchDeleteEmployee)               // Batch delete employees
			Employee.GET("/recentlydeleted", backendcontrollers.RecentlyDeletedEmployee)        // Update an employee
			Employee.POST("/restore/:id", backendcontrollers.RestoreEmployee)                       // Restore deleted employee
			Employee.DELETE("/permanatlydelete", backendcontrollers.PermanaentlyDeleteEmployee) // permanatly an employee

			Employee.PUT("/:id", backendcontrollers.UpdateEmployee) // Update an employee
		}
	}
}
