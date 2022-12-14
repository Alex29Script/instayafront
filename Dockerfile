FROM node:14-slim
WORKDIR /user/src/app
COPY ./package.json ./
RUN npm install
RUN npm install react-client-session --save
COPY . .
EXPOSE 3000

CMD ["npm", "start"]