.PHONY: install
install:
	go install github.com/deepmap/oapi-codegen/v2/cmd/oapi-codegen@latest

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
