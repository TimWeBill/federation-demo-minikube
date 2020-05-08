FROM node:latest

RUN mkdir gateway
COPY package.json ./package.json
COPY gateway.js ./gateway.js
RUN npm i

CMD node gateway.js
