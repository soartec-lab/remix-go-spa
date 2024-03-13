package api

import (
	"sync"
	"context"

	"github.com/gin-gonic/gin"
)

type PetStore struct {
	Pets   map[int64]Pet
	NextId int64
	Lock   sync.Mutex
}

func NewPetStore() *PetStore {
	return &PetStore{
		Pets:   make(map[int64]Pet),
		NextId: 1000,
	}
}

func (p *PetStore) ListPets(ctx context.Context, request ListPetsRequestObject) (ListPetsResponseObject, error) {	
	return nil, nil
}

func (p *PetStore) CreatePets(ctx context.Context, request CreatePetsRequestObject) (CreatePetsResponseObject, error) {
	return nil, nil
}

func (p *PetStore) ShowPetById(ctx context.Context, request ShowPetByIdRequestObject) (ShowPetByIdResponseObject, error) {	
	return nil, nil
}
