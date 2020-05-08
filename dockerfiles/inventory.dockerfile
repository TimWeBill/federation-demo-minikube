FROM node:latest

RUN mkdir inventory
COPY package.json ./package.json
COPY lerna.json ./lerna.json
COPY services/inventory ./services/inventory
RUN npm i

CMD cd services/inventory && node index.js
