FROM node:21-alpine AS build

ARG TOKEN
WORKDIR /usr/app/frontend

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.24.0-alpine AS nginx
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/app/frontend/dist /usr/share/nginx/html
