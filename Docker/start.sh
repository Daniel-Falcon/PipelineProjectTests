#!/bin/bash

# Start VNC
vncserver :1 -geometry 1280x720 -depth 24

# Set DISPLAY so Cypress uses the virtual screen
export DISPLAY=:1

# Start Cypress in headed mode
npx cypress run --headed --browser chrome
