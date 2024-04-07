import Kafka from 'react-native-kafka';

const kafkaHost = 'your-kafka-host:9092';
const topic = 'sample_data';
const clientId = 'u-n9oov3';

const kafka = new Kafka(clientId, kafkaHost);

const producer = kafka.producer();

producer.connect()
 .then(() => {
    console.log('Producer connected');

    producer.send({
      topic,
      messages: ['Hello, Kafka!'],
    })
     .then(() => {
        console.log('Message sent');
      })
     .catch((error) => {
        console.error('Error sending message:', error);
      });
  })
 .catch((error) => {
    console.error('Error connecting producer:', error);
  });