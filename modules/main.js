function changeURL() {
	let select = document.getElementById('mySelect').selectedIndex;
	let options = document.getElementById('mySelect').options;
	
	let discord, telegram, vkontakte;

	if ( options[select].value == "0" ) {
		discord = "youp1xxx#0808";
		telegram = "https://t.me/youp1xxx";
		vkontakte = "https://vk.com/youp1xxxvk";
		document.getElementById('vkontakte').style.display = "block";
		document.getElementById('yop').style.display = "block";
		document.getElementById('veles').style.display = "none";
		document.getElementById('artem').style.display = "none";
	}
	else if ( options[select].value == "1" ) {
		discord = "Велес#0924";
		telegram = "https://t.me/veleseses";
		vkontakte = "https://vk.com/skripa3";
		document.getElementById('vkontakte').style.display = "block";
		document.getElementById('veles').style.display = "block";
		document.getElementById('artem').style.display = "none";
		document.getElementById('yop').style.display = "none";
	}
	else if ( options[select].value == "2" ) {
		discord = "Artem Bay#0547";
		telegram = "https://t.me/artembay2";
		document.getElementById('vkontakte').style.display = "none";
		document.getElementById('artem').style.display = "block";
		document.getElementById('yop').style.display = "none";
		document.getElementById('veles').style.display = "none";
		vkontakte = "#";
	}

	document.getElementById('discord').innerHTML = discord;
	document.getElementById('telegram').href = telegram;
	document.getElementById('vkontakte').href = vkontakte;
}


