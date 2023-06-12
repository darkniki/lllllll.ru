#FROM node:14-alpine as builder
#WORKDIR /
#ENV PATH /node_modules/.bin:$PATH
#
#COPY package.json yarn.lock vue.config.js babel.config.js ./
#COPY src ./src
#
#RUN yarn install
#RUN yarn run build

FROM nginx:stable-alpine
#COPY --from=builder /dist /usr/share/nginx/html
COPY /dist /usr/share/nginx/html
COPY .ops/docker/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
