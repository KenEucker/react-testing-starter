FROM node:15-alpine

COPY . /bin/app
WORKDIR /bin/app

EXPOSE 8080
RUN npm install
