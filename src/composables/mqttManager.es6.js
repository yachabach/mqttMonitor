const connections = require('../data/connections.js')
const fs = require('fs')
const mqtt = require('mqtt');

const aws = connections[0]
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`
const connectUrl = `${aws.protocol}://${aws.host}:${aws.mqttPort}`
const options = {
  clientId,
  clean: true,
  connectTimeout: 4000,
  reconnectPeriod: 1000,

  // Enable the SSL/TLS
  rejectUnauthorized: true,
  // Two-way authentication
  ca: fs.readFileSync(aws.tls.ca),
  key: fs.readFileSync(aws.tls.key),
  cert: fs.readFileSync(aws.tls.cert),  
}

const client = mqtt.connect(connectUrl, options)

client.on("connect", () => {
  console.log('Connected...attempting to subscribe...')
  client.subscribe("Devices/phys/#", (err) => {
    if (!err) {
      console.log('Subscribed!')
      client.publish("presence", "Hello mqtt");
    } else {
      console.log('connection error: ', err)
    }
  });
});

client.on("message", (topic, payload, packet) => {
  // message is Buffer
  console.log(`Topic: ${topic}, Message: ${payload.toString()}, QoS: ${packet.qos}`)
  // client.end();
});

const testMQTT = () => {
  console.log('starting testMqtt')
  setTimeout(() => {
    client.end()
    console.log('timeout...')
  }, 10000)}

  module.exports(testMQTT)