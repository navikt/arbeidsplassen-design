# Storybook bygges i CI — Docker-imagen inneholder kun de statiske filene
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY storybook-static/ /usr/share/nginx/html/
EXPOSE 8080
