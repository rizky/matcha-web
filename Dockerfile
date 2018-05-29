# base image
FROM node

# install modules
RUN npm install -g concurrently
# static server 
RUN npm install -g serve

# set working directory
RUN mkdir /usr/src/app/
RUN mkdir /usr/src/app/client
RUN mkdir /usr/src/app/server
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/client/node_modules/.bin:$PATH
ENV PATH /usr/src/app/server/node_modules/.bin:$PATH

# install and cache app dependencies
COPY client/package.json /usr/src/app/client/package.json
COPY server/package.json /usr/src/app/server/package.json
COPY package.json /usr/src/app/package.json
RUN npm run install --silent

# docker build -t rizkyario/42-matcha .
# docker push rizkyario/42-matcha