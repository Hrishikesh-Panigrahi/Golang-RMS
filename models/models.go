package models

type Menu struct {
	ID          uint    `json:"id" gorm:"primaryKey"`
	Name        string  `json:"name"`
	Price       float64 `json:"price"`
	Description string  `json:"description"`
	Ingredients string  `json:"ingredients"`
}

type Employee struct {
	ID          uint    `json:"id" gorm:"primaryKey"`
	Name        string  `json:"name"`
	Salary      float64 `json:"salary"`
	Desgination string  `json:"designation"`
	Shift       string  `json:"shift"`
	Gender      string  `json:"Gender"`
}
