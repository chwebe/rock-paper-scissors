FROM node:23-slim

# Install basic development tools
RUN apt update && apt install -y less git procps

# Ensure default node user has access to /usr/local/
RUN mkdir -p /usr/local/share/npm-global && \
    chown -R node:node /usr/local/share/npm-global

# Set up non-root user
USER node

# Set up npm global directory
ENV NPM_CONFIG_PREFIX=/usr/local/share/npm-global
ENV PATH=$PATH:/usr/local/share/npm-global/bin

# Set the working directory
WORKDIR /workspaces

# Install global packages
RUN npm install -g eslint prettier

# Default command
CMD [ "sleep", "infinity" ]
