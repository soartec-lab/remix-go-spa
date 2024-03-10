.PHONY: openapi-merge
openapi-merge:
	docker run --rm -v "$(PWD):/workspace" \
		openapitools/openapi-generator-cli generate \
		-i workspace/openapi/openapi.yml \
		-g openapi-yaml \
		-o workspace/openapi/merged
