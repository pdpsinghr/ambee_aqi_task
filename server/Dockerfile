# FROM node:carbon

# # COPY ./docker/entrypoint.sh /entrypoint/

# # RUN ["chmod", "+x", "entrypoint/entrypoint.sh"]
# # RUN mkdir /client
# WORKDIR /server/


# COPY package.json /server/
# RUN npm cache clean --force
# RUN npm install
# EXPOSE 5000

# # ENTRYPOINT ["/entrypoint/entrypoint.sh"]

# CMD ["npm", "start"]
FROM node:carbon

COPY ./docker/entrypoint.sh /entrypoint/

RUN ["chmod", "+x", "entrypoint/entrypoint.sh"]

# Copy or mount node app here
WORKDIR /data/
EXPOSE 5000

COPY ./server 
ENTRYPOINT ["/entrypoint/entrypoint.sh"]

CMD ["node", "app"]