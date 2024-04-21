ARG GO_IMAGE=golang:1.22.1-bullseye

FROM $GO_IMAGE

RUN set -x && curl -sL https://deb.nodesource.com/setup_20.x | bash -
RUN apt-get update -qq && apt-get install -y \
    zip \
    nodejs \
    default-mysql-client
RUN curl -fsSL https://bun.sh/install | bash
RUN export PATH=$PATH:~/.bun/bin
RUN bun install --frozen-lockfile
RUN make install 
CMD sh -c "/bin/bash"
