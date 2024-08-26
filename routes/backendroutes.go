package routes

import (
	"github.com/Hrishikesh-Panigrahi/Golang-RMS/backendcontrollers"
	"github.com/gin-gonic/gin"
)

// ApiRoutes function to add all the routes for the API
func ApiRoutes(superRoute *gin.RouterGroup) {
	ApiRoutes := superRoute.Group("api/")
	{
		Employee := ApiRoutes.Group("employee/")
		{
			Employee.GET("", backendcontrollers.GetEmployees)                                   // Get all employees
			Employee.POST("", backendcontrollers.CreateEmployee)                                // Create an employee
			Employee.GET("/recentlyadded", backendcontrollers.RecentlyAddedEmployee)            // Get recently added employee
			Employee.DELETE("/:id", backendcontrollers.DeleteEmployee)                          // Delete an employee
			Employee.POST("/batchdelete", backendcontrollers.BatchDeleteEmployee)               // Batch delete employees
			Employee.GET("/recentlydeleted", backendcontrollers.RecentlyDeletedEmployee)        // Update an employee
			Employee.POST("/restore/:id", backendcontrollers.RestoreEmployee)                   // Restore deleted employee
			Employee.DELETE("/permanatlydelete", backendcontrollers.PermanaentlyDeleteEmployee) // permanatly an employee
			Employee.GET("/:id", backendcontrollers.GetEmployee)                                // Get an employee
			Employee.PUT("/:id", backendcontrollers.UpdateEmployee)                             // Update an employee
			Employee.POST("/search", backendcontrollers.EmployeeSearch)                         // Search an employee
		}

		Dish := ApiRoutes.Group("dish/")
		{
			Dish.POST("", backendcontrollers.CreateDish)                     // Create a dish
			Dish.GET("", backendcontrollers.GetDishes)                       // Get all dishes
			Dish.GET("/recentlyadded", backendcontrollers.RecentlyAddedDish) // Get recently added dish
			Dish.GET("/:id", backendcontrollers.GetDish)                     // Get a dish
			Dish.PUT("/:id", backendcontrollers.UpdateDish)                  // Update a dish
			Dish.DELETE("/:id", backendcontrollers.DeleteDish)               // Delete a dish
			Dish.POST("/search", backendcontrollers.DishSearch)              // Search a dish
		}

		Invoices := ApiRoutes.Group("invoice/")
		{
			Invoices.POST("", backendcontrollers.CreateInvoice)       // Create an invoice
			Invoices.GET("", backendcontrollers.GetInvoices)          // Get all invoices
			Invoices.GET("/:id", backendcontrollers.GetInvoice)       // Get an invoice
			Invoices.PUT("/:id", backendcontrollers.UpdateInvoice)    // Update an invoice
			Invoices.DELETE("/:id", backendcontrollers.DeleteInvoice) // Delete an invoice
		}
	}

}
