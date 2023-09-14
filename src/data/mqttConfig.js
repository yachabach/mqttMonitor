import ca from '@/privateData/AmazonRootCA1.pem'
import key from '@/privateData/547e42f7d374d8391941bf31376d7671659d40a23e941a3b6ced9ba17e6fbad7-public.pem.key'
import cert from '@/privateData/certificate.pem'

export const mqttOptions = Object.freeze({
    host: 'atbwkuozvbuys-ats.iot.us-east-1.amazonaws.com',
    port: 8883,
    clientId: `MyID-${Math.random() * 9999}`,
    mainTopic: 'MAIN',
    ca: ca,
    cert: cert,
    key: key
  })