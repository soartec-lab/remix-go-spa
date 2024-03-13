package main

import (
	"flag"
	"log"
	"net"
	"net/http"

	"github.com/gin-gonic/gin"

	"github.com/soartec-lab/remix-go-spa/api"
)

func main() {
	port := flag.String("port", "8808", "Port for test HTTP server")
	flag.Parse()

	r := gin.Default()

	petStore := api.NewPetStore()
	petStoreStrictHandler := api.NewStrictHandler(petStore, nil)
	api.RegisterHandlers(r, petStoreStrictHandler)

	s := &http.Server{
		Handler: r,
		Addr:    net.JoinHostPort("0.0.0.0", *port),
	}

	log.Fatal(s.ListenAndServe())
}
