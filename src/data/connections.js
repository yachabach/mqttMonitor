/**
 * TODO: Convert this into a json text file to be retrieved by the startup and config functions
 */
export const connections = [{
    name: "RTA",
    protocol: 'mqtts',
    host: 'atbwkuozvbuys-ats.iot.us-east-1.amazonaws.com',
    mqttPort: '8883',
    tls: {
        ca: 'C:/Users/yacha/Git Projects/MQTT/Certs/AmazonRootCA1.pem',
        key: 'C:/Users/yacha/Git Projects/MQTT/Certs/547e42f7d374d8391941bf31376d7671659d40a23e941a3b6ced9ba17e6fbad7-private.pem.key',
        cert: 'C:/Users/yacha/Git Projects/MQTT/Certs/certificate.pem'
    },
    topics: [
        'Pulse/leafs/00:00:a3:bf:ed:12:ttyAMA0',
        'Pulse/leafs/12:34:a3:bf:ed:12:ttyAMA3',
        'Pulse/leafs/12:34:a3:bf:ed:12:ttyAMA0',
        'Pulse/leafs/00:00:a3:bf:ed:12:ttyAMA3',
        'Pulse/nodes/00:00:a3:bf:ed:12',
        'Pulse/nodes/12:34:a3:bf:ed:12',
        'test/node/e4:5f:01:db:9e:8c',
        'test/node/e4:5f:01:db:e6:94',
        'Devices/phys/12:34:a3:bf:ed:12:ttyAMA3',
        'Devices/phys/00:00:a3:bf:ed:12:ttyAMA3',
        'Devices/settings/12:34:a3:bf:ed:12:ttyAMA0',
        'Devices/settings/00:00:a3:bf:ed:12:ttyAMA0',
        'Devices/vitals/12:34:a3:bf:ed:12:ttyAMA0',
        'Devices/vitals/00:00:a3:bf:ed:12:ttyAMA0'
    ]
}]