FROM cypress/browsers:node-18.16.0-chrome-113-ff-112-edge-113

# Install VNC and desktop environment
RUN apt-get update && apt-get install -y \
    x11vnc xvfb fluxbox xterm wget net-tools \
    && apt-get clean

# Expose VNC port
EXPOSE 5901

# Startup script
COPY start.sh /start.sh
RUN chmod +x /start.sh

CMD ["/start.sh"]
