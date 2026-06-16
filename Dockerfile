FROM cgr.dev/chainguard/nginx:latest

USER nginx
WORKDIR /app

COPY nginx.conf /etc/nginx/nginx.conf
COPY storybook-static/ ./

EXPOSE 8080
