FROM node:current-alpine 
WORKDIR /app
RUN npm install 
COPY . .
EXPOSE 8080
CMD ["npm", "start"]