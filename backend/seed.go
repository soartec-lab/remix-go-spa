package main

import (
	"gorm.io/driver/mysql"
	"gorm.io/gorm"

	"github.com/soartec-lab/remix-go-spa/model"
)

func main() {
	dsn := "root:password@tcp(mysql:3306)/main?charset=utf8mb4&parseTime=True&loc=Local"
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	pets := []model.Pet{
		model.Pet{Name: "pochi", Tag: "dog"},
		model.Pet{Name: "tama", Tag: "cat"},
	}
	db.Create(pets)
}
