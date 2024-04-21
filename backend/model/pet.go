package model

import (
	"gorm.io/gorm"
)

type Pet struct {
	gorm.Model
	Name string
	Tag  string
}
