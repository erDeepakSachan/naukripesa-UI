# Use official Nginx image
FROM nginx:latest

# Install envsubst (part of gettext)
RUN apt-get update && apt-get install -y gettext-base && rm -rf /var/lib/apt/lists/*

# Copy website files
COPY ./dist/app/browser/ /usr/share/nginx/html/
RUN ls -la /usr/share/nginx/html/*

# Copy startup script
COPY ./.buildx/entrypoint.sh /entrypoint.sh

# Ensure the script is executable
RUN chmod +x /entrypoint.sh

# Set the entrypoint to our script
CMD ["sh","/entrypoint.sh"]
