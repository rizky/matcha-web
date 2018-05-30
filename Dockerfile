# base image
FROM node

# install modules
RUN npm install -g concurrently
# static server 
RUN npm install -g serve

# set working directory
RUN mkdir /usr/src/app/
RUN mkdir /usr/src/app/web
RUN mkdir /usr/src/app/api
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/web/node_modules/.bin:$PATH
ENV PATH /usr/src/app/api/node_modules/.bin:$PATH

# install and cache app dependencies
COPY web/package.json /usr/src/app/web/package.json
COPY api/package.json /usr/src/app/api/package.json
COPY package.json /usr/src/app/package.json
RUN npm run install --silent

# docker build -t rizkyario/42-matcha .
# docker push rizkyario/42-matcha