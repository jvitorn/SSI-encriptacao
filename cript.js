var btn = document.getElementById('btn');

btn.addEventListener('click',encrypt);

function encrypt(){
	let type 	= document.getElementById('type').value;
	let key 	= document.getElementById('key').value;
	let text 	= document.getElementById('text').value;

	text = window[type](text,key);

	document.getElementById('result').textContent = text;
}

function cesar(text, key){
	// document.getElementById('key').value 	= "";
	document.getElementById('key').type 	= "number";

	
	let init 	= 97; //a
	let final 	= 122; //z
	let res 	= "";

	for(var i = 0; i < text.length; i++ ){
		let char = text.substr(i,1);
		char = eval(char.charCodeAt(0)) + eval(key);

		if(char > 122){
			char = char - 122;
			char = init + char;
		}

		char = String.fromCharCode(char);
		res += char;
	}

	return res;
}

function zenitPolar(text){

}