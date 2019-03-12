function showMessage(from,text = sorry()){
	console.log(from,'how are you',`here is your text ${text}`);
}

function sorry(){
	return ('mat you have not provided the message oops');
}

showMessage('Rishav','how are you my love');
showMessage('Rishav');
showMessage();