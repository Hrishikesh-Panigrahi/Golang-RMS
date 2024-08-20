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
			Employee.POST("/restore/:id", backendcontrollers.RestoreEmployee)                   // Restore deleted employee
			Employee.DELETE("/permanatlydelete", backendcontrollers.PermanaentlyDeleteEmployee) // permanatly an employee
			Employee.GET("/:id", backendcontrollers.GetEmployee)                                // Get an employee
			Employee.PUT("/:id", backendcontrollers.UpdateEmployee)                             // Update an employee
		}
	}

	// todo: Employee Search
	// EmployeeSearch := superRoute.Group("api/employeesearch")

	DishRoutes := superRoute.Group("api/dish")
	{
		Dish := DishRoutes.Group("")
		{
			Dish.POST("", backendcontrollers.CreateDish)                     // Create a dish
			Dish.GET("", backendcontrollers.GetDishes)                       // Get all dishes
			Dish.GET("/recentlyadded", backendcontrollers.RecentlyAddedDish) // Get recently added dish
			Dish.GET("/:id", backendcontrollers.GetDish)                     // Get a dish
			Dish.PUT("/:id", backendcontrollers.UpdateDish)                  // Update a dish
			Dish.DELETE("/:id", backendcontrollers.DeleteDish)               // Delete a dish
		}
	}

	// todo: DISH Search
	// DishSearch := superRoute.Group("api/dishsearch")

}
