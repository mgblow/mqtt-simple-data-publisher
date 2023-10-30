const mqtt = require('mqtt');

const MQTT_BROKER_URL = 'mqtt://185.232.153.20:1883'; 
const MQTT_TOPIC = 'device1'; 

const client = mqtt.connect(MQTT_BROKER_URL);

let messageCount = 0;

client.on('connect', () => {
  console.log('Connected to MQTT broker');
  setInterval(() => {
    const data = {
      position: getRandomPositionData(),
      helmetHealth: getRandomHelmetHealthData(),
    };

    const payload = JSON.stringify(data);
    client.publish(MQTT_TOPIC, payload);
    console.log(`Published message #${messageCount++}: ${payload}`);
  }, 2000); // Publish data every 2 seconds
});

function getRandomPositionData() {
    const position = {
      latitude: getRandomFloat(-90, 90),
      longitude: getRandomFloat(-180, 180),
      altitude: getRandomInt(0, 500),
      speed: getRandomFloat(0, 100),
    };
  
    return position;
  }
  
  function getRandomHelmetHealthData() {
    const helmetHealth = {
      batteryLevel: getRandomInt(0, 100),
      temperature: getRandomFloat(15, 35),
      heartRate: getRandomInt(60, 120),
      oxygenLevel: getRandomInt(90, 100),
    };
  
    return helmetHealth;
  }
  
  function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
