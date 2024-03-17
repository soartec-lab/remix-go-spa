package main

import (
	"flag"
	"log"
	"net"
	"net/http"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
  "gorm.io/driver/mysql"

	"github.com/soartec-lab/remix-go-spa/api"
)

func main() {
	port := flag.String("port", "8808", "Port for test HTTP server")
	flag.Parse()

	r := gin.Default()

	dsn := "root:password@tcp(mysql:3306)/main?charset=utf8mb4&parseTime=True&loc=Local"
  db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	r.Use(func(c *gin.Context) {
		c.Set("db", db)
		c.Next()
	})

	controller := api.NewController()
	strictHandler := api.NewStrictHandler(controller, nil)
	api.RegisterHandlers(r, strictHandler)

	s := &http.Server{
		Handler: r,
		Addr:    net.JoinHostPort("0.0.0.0", *port),
	}

	log.Fatal(s.ListenAndServe())
}
