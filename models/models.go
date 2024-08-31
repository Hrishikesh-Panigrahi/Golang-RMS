package models

import (
	"time"

	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	Name     string `json:"name"`
	Email    string `json:"email"`
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
	Designation string         `json:"designation"`
	Shift       string         `json:"shift"`
	Gender      string         `json:"gender"`
	CreatedAt   time.Time      `json:"createdAt"`
	UpdatedAt   time.Time      `json:"updatedAt"`
	DeletedAt   gorm.DeletedAt `json:"deleted_at" gorm:"index"`
}

type OrderDetails struct {
	ID          uint     `json:"id" gorm:"primaryKey"`
	Dish        []Dish   `json:"Dishes" gorm:"many2many:order_dishes;"`
	EmployeeID  uint     `json:"employeeID" null:"true"`
	Employee    Employee `json:"employee" gorm:"foreignKey:EmployeeID" null:"true"`
	Quantity    int      `json:"quantity"`
	TotalAmount float64  `json:"totalAmount"`
}

type OnlineOrder struct {
	ID           uint           `json:"id" gorm:"primaryKey"`
	OrderDetails []OrderDetails `json:"orderDetails" gorm:"foreignKey:OnlineOrderID"`
	TotalAmount  float64        `json:"totalAmount"`
	CreatedAt    time.Time      `json:"createdAt"`
	UpdatedAt    time.Time      `json:"updatedAt"`
}

type Tables struct {
	ID          uint `json:"id" gorm:"primaryKey"`
	TableNumber int  `json:"tableNumber"`
	Capacity    int  `json:"capacity"`
}

type Reservations struct {
	ID              uint      `json:"id" gorm:"primaryKey"`
	TableID         uint      `json:"tableId"`
	Table           Tables    `json:"table" gorm:"foreignKey:TableID"`
	Guests          int       `json:"guests"`
	ReservationDate time.Time `json:"date"`
	ReservationTime time.Time `json:"time"`
	EndTime         time.Time `json:"endTime"`
}
