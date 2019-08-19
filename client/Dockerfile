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

# FROM node:carbon

# COPY ./docker/entrypoint.sh /entrypoint/

# RUN ["chmod", "+x", "entrypoint/entrypoint.sh"]

# # Copy or mount node app here
# WORKDIR /data/

# EXPOSE 8080

# ENTRYPOINT ["/entrypoint/entrypoint.sh"]

# CMD ["npm", "start"]
