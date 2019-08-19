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
# CMD node app.js
# CMD ["npm", "start"]
# FROM node:carbon

# COPY ./docker/entrypoint.sh /entrypoint/

# RUN ["chmod", "+x", "entrypoint/entrypoint.sh"]

# WORKDIR /data/
# EXPOSE 5000

# ENTRYPOINT ["/entrypoint/entrypoint.sh"]

# CMD ["node", "start"]


FROM node:alpine

# COPY all the files from Current Directory into the Container
COPY ./ ./

# Install the Project Dependencies like Express Framework
RUN npm install

# Tell that this image is going to Open a Port 
EXPOSE 5000

# Default Command to launch the Application
CMD ["npm", "start"]