package api

import (
	"context"

	"gorm.io/gorm"

	"github.com/soartec-lab/remix-go-spa/model"
)

type Controller struct{}

func NewController() *Controller {
	return &Controller{}
}

func (c *Controller) ListPets(ctx context.Context, request ListPetsRequestObject) (ListPetsResponseObject, error) {
	db := ctx.Value("db")
	gormDB := db.(*gorm.DB)

	var pets []model.Pet
	result := gormDB.Find(&pets)
	if result.Error != nil {
		panic(result.Error)
	}

	var responsePets Pets
	for _, pet := range pets {
		responsePets = append(responsePets, Pet{
			Id:   int64(pet.ID),
			Name: pet.Name,
			Tag:  &pet.Tag,
		})
	}

	res := ListPets200JSONResponse{
		Body:    responsePets,
		Headers: ListPets200ResponseHeaders{},
	}

	return res, nil
}

func (c *Controller) CreatePets(ctx context.Context, request CreatePetsRequestObject) (CreatePetsResponseObject, error) {
	return nil, nil
}

func (c *Controller) ShowPetById(ctx context.Context, request ShowPetByIdRequestObject) (ShowPetByIdResponseObject, error) {
	return nil, nil
}
