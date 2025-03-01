# build stage
#FROM node:16-alpine as build-stage
#WORKDIR /app
#COPY . .
#RUN npm install
#RUN npm run build

# production stage
FROM nginx:1.17-alpine as production-stage
#COPY --from=build-stage /app/build /usr/share/nginx/html
COPY . /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]

#docker build . -t nguyensy/maze:0.1.2