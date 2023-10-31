var node = uaInterface.getNodeValue('node4i/IO/MQTT/online-AI-tests/TAG/helmet-data/Property/value');
uaInterface.sendMessageToMqtt('online-AI-tests', 'helmet-output-data', node);