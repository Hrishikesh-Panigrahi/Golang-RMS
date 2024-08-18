package models

import (
	"time"

	"gorm.io/gorm"
)

type User struct{
	gorm.Model
	Name string `json:"name"`
	Email string `json:"email"`
	Password string `json:"password"`
}

type Dish struct {
	ID          uint    `json:"id" gorm:"primaryKey"`
	Name        string  `json:"name"`
	Price       float64 `json:"price"`
	Description string  `json:"description"`
	Ingredients string  `json:"ingredients"`
	Tag         string  `json:"tag"`
	Available   bool    `json:"available"`
}

type Employee struct {
	ID          uint           `json:"id" gorm:"primaryKey"`
	Name        string         `json:"name"`
	Salary      float64        `json:"salary"`
	Desgination string         `json:"designation"`
	Shift       string         `json:"shift"`
	Gender      string         `json:"Gender"`
	CreatedAt   time.Time      `json:"createdAt"`
	UpdatedAt   time.Time      `json:"updatedAt"`
	DeletedAt   gorm.DeletedAt `json:"deleted_at" gorm:"index"`
}

type Order struct {
	ID          uint    `json:"id" gorm:"primaryKey"`
	Quantity    int     `json:"quantity"`
	TotalAmount float64 `json:"totalAmount"`
}

type OrderDetails struct {
	ID         uint     `json:"id" gorm:"primaryKey"`
	OrderID    uint     `json:"orderID"`
	Oder       Order    `json:"order" gorm:"foreignKey:OrderID"`
	Dish       []Dish   `json:"Dishes" gorm:"many2many:order_dishes;"`
	EmployeeID uint     `json:"employeeID"`
	Employee   Employee `json:"employee" gorm:"foreignKey:EmployeeID"`
}
