FROM cypress/browsers:node-20.10.0-chrome-124-ff-124-edge-124

# Install VNC and desktop environment
RUN apt-get update && apt-get install -y \
    x11vnc xvfb fluxbox xterm wget net-tools \
    && apt-get clean

EXPOSE 5901

COPY start.sh /start.sh
RUN chmod +x /start.sh

CMD ["/start.sh"]
