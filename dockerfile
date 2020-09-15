# build environment
FROM node:13.12.0-alpine as build

# set working directory
WORKDIR /usr/src/app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
COPY appspec.yaml ./
RUN npm ci --silent

#add app
COPY . ./
RUN npm run build

# production environment
FROM nginx:1.12-alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g"]