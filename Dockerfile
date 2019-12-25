FROM node:12.13.1 as builder

MAINTAINER black

# add files to container
ADD . /app

# specify the working directory
WORKDIR app

# build process
RUN npm install
RUN npm run build
RUN npm prune --production

FROM node:12.13.1-alpine3.10

COPY --from=builder /app /app

# create a specific user to run this container
RUN adduser -S -D user-app
RUN chmod -R 777 /app
# run the container using a specific user
USER user-app

EXPOSE 8080

WORKDIR app

# run application
CMD ["npm", "start"]

#docker image build -t app:v1 .