ARG GO_IMAGE=golang:1.22.1-bullseye

FROM $GO_IMAGE

RUN set -x curl -sL https://deb.nodesource.com/setup_20.x | bash - 
RUN apt-get update -qq && apt-get install -y \
    zip \
    nodejs
RUN npm install -g pnpm
CMD sh -c "/bin/bash"
