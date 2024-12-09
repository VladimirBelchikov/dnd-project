FROM node:alpine

WORKDIR /usr/src/app

COPY . .

ENTRYPOINT ["tail", "-f", "/dev/null"]