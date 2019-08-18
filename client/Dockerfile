FROM node:carbon

# COPY ./docker/entrypoint.sh /entrypoint/

# RUN ["chmod", "+x", "entrypoint/entrypoint.sh"]

WORKDIR /client/
COPY package.json /client/
RUN npm cache clean --force
RUN npm install
# RUN npm audit fix
EXPOSE 8080

# ENTRYPOINT ["/entrypoint/entrypoint.sh"]

CMD ["npm", "start"]