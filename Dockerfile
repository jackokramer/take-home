FROM node:14.1.0-alpine
WORKDIR /repo
COPY /src ./src
RUN ls