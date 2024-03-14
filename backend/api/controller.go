package api

import (
	"context"
)

type Controller struct {}

func NewController() *Controller {
	return &Controller{}
}

func (c *Controller) ListPets(ctx context.Context, request ListPetsRequestObject) (ListPetsResponseObject, error) {
	pets := Pets{
		{
			Id:   1,
			Name: "Fido",
			Tag:  nil,
		},
		{
			Id:   2,
			Name: "Fifi",
			Tag:  nil,
		},
	}

	res := ListPets200JSONResponse{
		Body: pets,
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
