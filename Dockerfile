FROM cypress/browsers:node-18.12.0-chrome-107

# Install VNC and desktop environment
RUN apt-get update && apt-get install -y \
  xfce4 xfce4-goodies \
  tightvncserver \
  xterm

# Set up a user
RUN useradd -m cypressuser
USER cypressuser
WORKDIR /home/cypressuser

# Set VNC password
RUN mkdir ~/.vnc && \
    echo "vncpassword" | vncpasswd -f > ~/.vnc/passwd && \
    chmod 600 ~/.vnc/passwd

# Start script
COPY start.sh /home/cypressuser/start.sh
RUN chmod +x /home/cypressuser/start.sh

CMD ["./start.sh"]
