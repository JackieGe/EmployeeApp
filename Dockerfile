FROM node

RUN mkdir -p /WebServer/dist
WORKDIR /WebServer

COPY package.json .
RUN npm install --registry "https://registry.npm.taobao.org/" --production

COPY server.js .

COPY dist ./dist

EXPOSE 8081

CMD ["npm", "start"]