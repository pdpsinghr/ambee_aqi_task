FROM node:carbon

# COPY ./docker/entrypoint.sh /entrypoint/

# RUN ["chmod", "+x", "entrypoint/entrypoint.sh"]

# Copy or mount node app here
WORKDIR /client/
COPY package.json /client
RUN npm install --quiet
# RUN npm audit fix
EXPOSE 8080

# ENTRYPOINT ["/entrypoint/entrypoint.sh"]

CMD ["npm", "run", "dev"]