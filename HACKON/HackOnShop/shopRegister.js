var databaseRef = firebase.database().ref();

function registerShop(){
 	var state = document.getElementById('shopState').value.toUpperCase();
 	var city = document.getElementById('shopCity').value.toUpperCase();
	var name = document.getElementById('shopName').value;
	var location = document.getElementById('shopLocation').value;
	var password = document.getElementById('shopPassword').value;
	var contactNumber = document.getElementById('shopContactNumber').value;
	var email = document.getElementById('shopEmail').value;

	setUser(state , city , name , location , password ,contactNumber , email);

	alert("you have successfully registered");
	window.location.href = "shop.html";
	
}

function setUser(state , city , name , location , password ,contactNumber , email ){
	var newUser = databaseRef.child(state).child(city).push();
	newUser.set({
	    "name": name,
	    "location": location,
	    "password": password,
	    "contactNumber": contactNumber ,
	    "email" : email
	 });
}
	
