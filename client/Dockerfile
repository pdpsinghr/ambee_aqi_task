FROM node:carbon

# # COPY ./docker/entrypoint.sh /entrypoint/

# # RUN ["chmod", "+x", "entrypoint/entrypoint.sh"]

WORKDIR /app
COPY package*.json ./
RUN npm install -g webpack-dev-server
RUN npm install
COPY . .
# RUN npm audit fix
EXPOSE 8081
# RUN npm run build
# ENTRYPOINT ["/entrypoint/entrypoint.sh"]

CMD ["npm", "start"]
