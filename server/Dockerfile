FROM node:carbon

# COPY ./docker/entrypoint.sh /entrypoint/

# RUN ["chmod", "+x", "entrypoint/entrypoint.sh"]
# RUN mkdir /client
WORKDIR /server/


COPY package.json /server
RUN npm install

EXPOSE 5000

# ENTRYPOINT ["/entrypoint/entrypoint.sh"]

CMD ["npm", "start"]
