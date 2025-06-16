FROM cypress/browsers:node-22.16.0-chrome-137.0.7151.68-1-ff-139.0.1-edge-137.0.3296.62-1

# Install VNC and desktop environment
RUN apt-get update && apt-get install -y \
    x11vnc xvfb fluxbox xterm wget net-tools \
    && apt-get clean

EXPOSE 5901

COPY start.sh /start.sh
RUN chmod +x /start.sh

CMD ["/start.sh"]
