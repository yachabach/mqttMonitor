import './assets/main.css'
import { createApp } from 'vue'
import { createPahoMqttPlugin } from 'vue-paho-mqtt';
import { mqttOptions } from '@/data/mqttConfig.js'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const mqttPlugin = createPahoMqttPlugin({
    PluginOptions: {
      autoConnect: true,
      showNotifications: true,
    },
    MqttOptions: mqttOptions
  })

app.use(router).use(mqttPlugin)

app.mount('#app')
