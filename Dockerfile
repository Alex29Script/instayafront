FROM node:lts-alpine
WORKDIR /user/src/app
COPY ./package.json ./
RUN npm install
RUN npm install react-client-session --force
COPY . .
EXPOSE 3000

CMD ["npm", "start"]