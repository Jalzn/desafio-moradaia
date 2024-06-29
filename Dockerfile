# syntax=docker/dockerfile:1

ARG NODE_VERSION=22.3.0

FROM node:${NODE_VERSION}-alpine as base
WORKDIR /usr/src/app
EXPOSE 5000

COPY . .

RUN npm install

RUN npm run build

CMD ["npm", "start"]
