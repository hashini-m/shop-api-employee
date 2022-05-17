FROM node:18-alpine3.14

WORKDIR /app

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]