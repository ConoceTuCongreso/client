FROM node:8.12-alpine

RUN apk add --no-cache ca-certificates

RUN set -eux;                                   \
    apk add --no-cache --virtual .build-deps    \
    curl                                        \
    openssl

RUN npm install -g http-server

WORKDIR /app

COPY dist   /app/dist

CMD [ "http-server", "-p", "3000", "dist" ]
