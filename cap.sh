#!/bin/bash
mkdir -p /home/ubuntu/mobile_shots
cd /home/ubuntu/mobile_shots
for w in 390 768; do
  for sec in about contact work; do
    chromium --headless --disable-gpu --no-sandbox \
      --window-size=$w,844 --hide-scrollbars \
      --screenshot=w${w}_${sec}.png --virtual-time-budget=8000 \
      "http://localhost:4173/#${sec}" >/dev/null 2>&1
  done
done
ls -la /home/ubuntu/mobile_shots/
