# insim-node.js
# Installation
npm i insim
# Usage
## Sending SMS
```node.js
const insim=require('insim');
var api =new insim()

var data=JSON.stringify({
    "header": {
      "login": "user@gmail.com",
      "accessKey": "xYGt5Dl9wKvz+#RGGU!PjVB+KfiJAYnh%z4&q7oLL3xHRJ1KiN",
      "mode": "prod",
      "priority": 1
    },
    "messages": [
      {
        "phone_number": "+33******",
        "message": "Hi Cassandra, can you confirm our appointement?",
        "url": "https://www.my-link.com/",
        "priorite": 1,
        "date_to_send": "2022-10-29 14:12:10"
      }
    ]
  })
api.sendSmsApi(data,function(rep){
console.log(rep)
});
```

```
[
    {
        "id_sms_api": "Pf7v16XZ38oT02s",
        "sms_per_message": 1,
        "user": "user@gmail.com",
        "sent_time": "2022-10-29T14:12:53.996Z",
        "phone_number": "+336**",
        "message": "Hi Cassandra, can you confirm our appointement https://arsms.co/oloe00F6Vvsa \n \nSent for free from PC via arsms.co/free",
        "sent": 1
    }
]
```
## Adding Contact
```node.js
var contacts=JSON.stringify({
    "header": {
      "login": "user@gmail.com",
      "password": "*******",
      "api": true
    },
    "contacts": [
      {
        "first_name": "Joe",
        "last_name": "",
        "phone_number": "654*******",
        "country_code": "FR",
        "email": ""
      }
    ]
  });
const insom=require('insim');
var api =new insim();
 api.addContactApi(contacts,function(contact){
   console.log(contact)
 });
```
```
Result example:
 {  

        "data":{  

        "contact":[  

        {

        "phone_number": "+33XXXXXXXXXX",     // international format

        "first_name": "Doe",

        "last_name": "Joe",

        "adress": "contact adress"

        "email": "contact_email@gmail.com",

        "result":"success"

        }

        ]

        }

        }
```        
## Urls Callback (You do not need to install api solo to use it)
To use urls callbacks in order to get incoming Sms ,Sms delivery status ...You just need to have in your callback url :
### Case Message delivery status :
```node.js
var status_message =JSON.parse(req.query.status);
status_message is an object like this:
{
  "user":"SENDER_LOGIN",

   "phone_number":"RECIPIENT",

   "status":"received",      // values : "sent" or "received"

   "date_status":"2019-08-09T12:50:54.211Z",

   "id_sms_api":"YOUR_ID_SMS"      // or the one we provide you if empty when sending

 }
```
### Case GET INCOMING MESSAGE :
```node.js
var message =JSON.parse(req.query.message);

message is an object like this:
{
  "title":"incoming sms",

    "from":"+1XXXXXXXXXX",    // phone number (international format)

    "message":"Hello world !",

    "date":"2020-01-21 10:01:38"

 }
 ```
 ### Case GET Clicked link :
```node.js
var click =JSON.parse(req.query.click);
click is an object like this:
{  

    "title":"clicked link",

    "phonenumber":"+1XXXXXXXXXX",    // phone number (international format)

    "link":"https:\/\/www.my-link.com\/",

    "date":"2019-07-08 15:07:03",

    "id_sms_api":"YOUR_ID_SMS"      // or the one we provide you if empty when sending

 }
 ```
  ### Case GET CALL LOGS :
```node.js
var call  =JSON.parse(req.query.call);

call  is an object like this:
{  

    "TITLE":"INCOMING CALL", // or "OUTGOING CALL" or "MISSED"

    "PHONE_NUMBER":"+1XXXXXXXXXX",

    "CALL_TIME":"2019-07-05",

    "DURATION": "15:11:04"

 }
 ```
   ### Case GET CALL QUALIFICATION :
```node.js
var qualification  =JSON.parse(req.query.calls);


qualification is an object like this:
{

"title":"Call qualification From Mobile",// or title can be "Call qualification From Interface"

"from":"+1XXXXXXXXXX", // phone number (international format)

"qualification":"Hello world !",

"date":"2020-01-21 10:01:38"

}
 ```
