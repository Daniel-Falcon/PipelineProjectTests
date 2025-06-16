FROM cypress/browsers:node-18.16.1-chrome-114

# Install VNC and desktop environment
RUN apt-get update && apt-get install -y \
    x11vnc xvfb fluxbox xterm wget net-tools \
    && apt-get clean

EXPOSE 5901

COPY start.sh /start.sh
RUN chmod +x /start.sh

CMD ["/start.sh"]
