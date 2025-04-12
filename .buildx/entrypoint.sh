#!/bin/sh

# Replace placeholders with actual environment variable values
envsubst < /usr/share/nginx/html/app-config.js.template > /usr/share/nginx/html/app-config.js
echo '111'

# Start Nginx
exec nginx -g "daemon off;"
