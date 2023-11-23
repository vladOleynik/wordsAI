FROM node:latest
LABEL authors="vladoleynik"
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm install
COPY . /usr/src/app
EXPOSE 3009
CMD ["npm", "run", "start:debug"]
