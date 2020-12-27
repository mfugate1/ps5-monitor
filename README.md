ps5-monitor
===========

Get your PS5 status as JSON with a REST API

This is a docker container that uses the [ps5-wake](https://github.com/iharosi/ps5-wake) utility within an express app

### Requirements
- A PS5 with a static IP address
- Docker

### Usage
To start the docker container:
```shell
docker run -d --network host --name ps5-monitor -e PS5_MONITOR_PORT=1234 -e PS5_IP_ADDRESS=192.168.1.10 mfugate/ps5-monitor:latest
```

To build the container yourself:
```shell
git clone https://github.com/mfugate1/ps5-monitor.git
cd ps5-monitor
docker build -t my-ps5-monitor:latest
```

To get the PS5 status once the container is running:
```shell
curl http://192.168.1.2:1234/status
```
