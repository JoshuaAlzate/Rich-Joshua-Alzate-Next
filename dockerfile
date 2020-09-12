FROM node:14.9.0-alpine3.10 AS build-step
WORKDIR /app
RUN apk update
RUN apk add --no-cache \ 
    autoconf \
    automake \
    bash \
    mesa-gl \ 
    libxi \
    g++ \
    libc6-compat \
    libjpeg-turbo-dev \
    libpng-dev \
    make \
    nasm
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:14.9.0-alpine3.10 AS serve-step
COPY --from=build-step /app /app 
WORKDIR /app
RUN rm -r node_modules && npm install --prod
EXPOSE 3000
CMD [ "npm", "start" ]