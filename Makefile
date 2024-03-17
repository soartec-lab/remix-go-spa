.PHONY: install
install:
	go install github.com/deepmap/oapi-codegen/v2/cmd/oapi-codegen@latest \
		&& go install -tags mysql github.com/golang-migrate/migrate/v4/cmd/migrate@latest

.PHONY: openapi-merge
openapi-merge:
	docker run --rm -v "$(PWD):/workspace" \
		openapitools/openapi-generator-cli generate \
		-i workspace/openapi/openapi.yml \
		-g openapi-yaml \
		-o workspace/openapi/merged

.PHONY: oapi-gen
oapi-gen:
	oapi-codegen -config config/oapi-codegen/types.yml ./openapi/merged/openapi/openapi.yaml \
		&& oapi-codegen -config config/oapi-codegen/server.yml ./openapi/merged/openapi/openapi.yaml

.PHONY: db-login
db-login:
	mysql -h mysql -u root -ppassword

.PHONY: g-migrate
g-migrate:
	migrate create -ext sql -dir db/migrate -tz Asia/Tokyo $(name)

.PHONY: db-create
db-create:
	mysql -h mysql -u root -ppassword -e "CREATE DATABASE main;"

.PHONY: db-drop
db-drop:
	mysql -h mysql -u root -ppassword -e "DROP DATABASE main;"

.PHONY: db-migrate
db-migrate:
	migrate -path db/migrate -database "mysql://root:password@tcp(mysql:3306)/main" -verbose up

.PHONY: db-rollback
db-rollback:
	migrate -path db/migrate -database "mysql://root:password@tcp(mysql:3306)/main" -verbose down

.PHONY: db-reset
db-reset:
	make db-drop && make db-create && make db-migrate
