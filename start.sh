#!/bin/bash
# Start virtual framebuffer and VNC
Xvfb :99 -screen 0 1280x1024x16 &
export DISPLAY=:99
fluxbox &

# Optional: auto-start Cypress GUI or debug tools
# npx cypress open &

# Start VNC server
x11vnc -forever -usepw -create
