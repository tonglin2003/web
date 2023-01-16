export default class UpdateUserData{

	static UpdateUser(body){
		return fetch(`/api/update_user`,{
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