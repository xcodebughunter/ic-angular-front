#stage 1
FROM node:latest as node
WORKDIR /app
COPY . .

#/mnt/space/work/{git-repo-name}
RUN npm install
RUN npm run build --prod

#stage 2
FROM nginx:alpine
WORKDIR /app
COPY --from=node /app/dist/empresa /usr/share/nginx/html
EXPOSE 80
