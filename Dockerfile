FROM node:12-alpine

WORKDIR /app

COPY package.json /app

RUN npm install --unsafe-perm

COPY . /app

EXPOSE 3001

CMD ["npm", "run", "start"]