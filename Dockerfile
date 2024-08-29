FROM node:lts-alpine

WORKDIR /usr/src

COPY . .

RUN npm i && npm run build

EXPOSE 3000

CMD ["npm", "start"]