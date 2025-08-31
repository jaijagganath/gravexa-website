# Simple Nginx container for Gravexa Agrow static site
FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
