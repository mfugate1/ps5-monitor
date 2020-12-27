FROM node:latest

RUN git clone https://github.com/iharosi/ps5-wake.git
WORKDIR ps5-wake
RUN make install

WORKDIR /ps5-monitor
COPY . /ps5-monitor
RUN npm ci

ENTRYPOINT ["node", "app.js"]