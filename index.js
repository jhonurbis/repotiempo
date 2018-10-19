// Dependencies 
const express = require('express');
const bodyparser = require('body-parser');

// Configuration
const app = express();
app.use(bodyparser.json());



app.post('/',(req,res)=>{
let response = "This is a sample response from your webhook!";//Default response from the webhook to show it’s working
let responseObj={
     "fulfillmentText":response
    ,"fulfillmentMessages":[
        {
            "text": {
                "text": [
                    "Hello I m Responding to intent"
                ]
            }
        }
    ]
    ,"source":""
}
return res.json(responseObj);});
