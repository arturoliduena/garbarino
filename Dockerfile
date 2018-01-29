FROM node:alpine
RUN mkdir back
WORKDIR back
ADD ./garbarinoAPI/package.json package.json
RUN npm install
ADD ./garbarinoAPI/app.js app.js
EXPOSE 3000