  
class Sms {
  constructor(id_sms_api, date_to_send,phone_number,message) {
    this.id_sms_api = id_sms_api;
    this.date_to_send = date_to_send;
    this.phone_number = phone_number;
    this.message = message;  
  }
  getIdSmsApi(){
   return this.id_sms_api;
  }
  getDateToSend(){
    return this.date_to_send;
  }
   getPhoneNumber(){
    return this.phone_number;
  }
   getmessage(){
    return this.message;
  }
  setmessage(message) {
    this.message = message;
  }
  setIdSmsApi(id_sms_api) {
    this.id_sms_api = id_sms_api;
  }
  setDateToSend(date_to_send) {
    this.date_to_send = date_to_send;
  }
  setPhoneNumber(phone_number) {
    this.phone_number = phone_number;
  }
  generateSmsArray(){
    var sms_array=[];
    sms_array.push(this.id_sms_api,this.date_to_send,this.phone_number,this.message)
  return sms_array;
  }
   sendSmsApi(data,callback){
var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://www.ardary-sms.com/api/sendSmsSolo',
  'headers': {
    'Content-Type': 'application/json'
  },
  body:data

};
request(options, function (error, response) {
  //console.log(response)
  if (error) throw new Error(error);
  return callback(response.body);
});
    }
       addContactApi(data,callback){
var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://www.ardary-sms.com/api/addcontactSolo',
  'headers': {
    'Content-Type': 'application/json'
  },
  body:data

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  return callback(response.body);
});
    }
}
 
module.exports = Sms; 
