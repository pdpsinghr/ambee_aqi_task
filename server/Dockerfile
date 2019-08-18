FROM node:carbon

# COPY ./docker/entrypoint.sh /entrypoint/

# RUN ["chmod", "+x", "entrypoint/entrypoint.sh"]
# RUN mkdir /client
WORKDIR /server/
# Copy or mount node app here
# WORKDIR /data/

COPY package.json /server
RUN npm install --quiet

EXPOSE 5000

# ENTRYPOINT ["/entrypoint/entrypoint.sh"]

CMD ["node", "app"]
