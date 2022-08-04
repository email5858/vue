FROM node:latest

WORKDIR /app

COPY ./ /app

CMD rm -rf node_modules && npm install && npm run dev

EXPOSE 8080
