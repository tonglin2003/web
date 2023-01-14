import React from 'react'
import axios from "axios";

export default class ProductPosting {
    static PostProduct(body){
        console.log("The body in the short function is: " + JSON.stringify(body))
        return fetch("/post%product/success", {
            'method': "POST",
            headers: {
                // Requesting the information in JSON file form
                'Content-Type':'application/json'
            },
            // Does the body means the whole information in Dictionary/JSON in the input being sent?
            body: JSON.stringify(body)
        })
            .then(response => response.json())
            .catch(error => console.log("In the error report: " + error))
    }
}