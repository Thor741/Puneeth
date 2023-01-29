const accountSid = 'AC0eb4e560d3cf3037380b870b3d8f8c14'; 
const authToken = '864495c4844a02b5699beaac93d29c25'; 
const client = require('twilio')(accountSid, authToken); 
 
client.messages 
      .create({ 
         body: 'Your Twilio code is 1238432', 
         from: 'whatsapp:+14155238886',       
         to: 'whatsapp:+917416699775' 
       }) 
      .then(message => console.log(message.sid)) 
      .done();