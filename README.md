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
      "login": "salaymen@gmail.com",
      "accessKey": "xYGt5Dl9wKvz+#RGGU!PjVB+KfiJAYnh%z4&q7oLL3xHRJ1KiN",
      "mode": "prod",
      "priority": 1
    },
    "messages": [
      {
        "phone_number": "+21629512239",
        "message": "un autre test from api [Lien_Tracking]",
        "url": "https://beautifier.io/",
        "priorite": 1,
        "date_to_send": "2019-10-29 10:16:10"
      }
    ]
  })

```
