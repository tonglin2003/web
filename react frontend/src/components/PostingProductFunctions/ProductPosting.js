import React from 'react'
import axios from "axios";

export default class ProductPosting{

	// Insert an article
	static PostProduct(body){

		return fetch(`/post%product/success`,{
      		'method':'POST',
      		 headers : {
      		'Content-Type':'application/json'
      },
      body:JSON.stringify(body)
    })
	.then(response => response.json())
	.catch(error => console.log(error))
	}

}