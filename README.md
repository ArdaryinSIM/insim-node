# solo-api-node.js
# Installation
npm install apisolo@1.0.0
# Usage
## Sending SMS
```node.js
const apisolo=require('apisolo');
var api =new apisolo()

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
const apisolo=require('apisolo');
var api =new apisolo();
var response=api.addContactApi(contacts);
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

