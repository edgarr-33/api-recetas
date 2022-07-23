FROM node:16
RUN mkdir /my_app
COPY server.js /my_app
COPY routes.js /my_app
COPY package.json /my_app
WORKDIR /my_app
RUN npm install
EXPOSE 3000
CMD ["node" ,"server.js" ]