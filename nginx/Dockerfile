# nginx/Dockerfile

FROM nginx:1.23.3-alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY gta5dm.pro.crt /etc/nginx/ssl/gta5dm.pro.crt
COPY gta5dm.pro.key /etc/nginx/ssl/gta5dm.pro.key

EXPOSE 80
EXPOSE 443
