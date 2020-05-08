FROM node:latest

RUN mkdir accounts
COPY package.json ./package.json
COPY lerna.json ./lerna.json
COPY services/accounts ./services/accounts
RUN npm i

CMD cd services/accounts && node index.js
