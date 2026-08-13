#!/bin/bash
# Capture screenshots at multiple device widths using chromium headless
set -e
mkdir -p /home/ubuntu/mobile_shots
cd /home/ubuntu/mobile_shots
for w in 375 390 414 768 1280; do
  chromium --headless --disable-gpu --no-sandbox \
    --window-size=$w,844 --hide-scrollbars \
    --screenshot=w${w}_top.png --virtual-time-budget=8000 \
    http://localhost:4173/ >/dev/null 2>&1 &
done
wait
ls -la /home/ubuntu/mobile_shots/
