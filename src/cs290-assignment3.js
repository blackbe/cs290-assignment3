var originalGistList = [];
var fetchData = function() {
	//Do the XMLHttpRequest here and keep the result in the originalGistList
	//When you got the data, you need to iterate over them and call the function from the next step inside it per gist to generate the html content (generateGistHtml)
	var gistList = new XMLHttpRequest();
	if(!originalGistList){
		throw 'Unable to create HttpRequest.';
	} //I think I need to loop an array here.  I'm completely lost on this assignement.  :(
	var urlSelect = document.getElementsByName('url-select')[0];
	var url = 'https://api.github.com/gists/public';
	var params = {
		url: urlSelect.options[urlSelect.selectedIndex].value; //I don't think this is what I need.
	};
	url += '?' + urlStringify(params);
	originalGistList.onreadystatechange = function() {
		if(this.readyState===4){
			console.log(this.responseText);
		}
	};
	originalGistList.open('GET', url);
	originalGistList.send();
}

function urlStringify(obj) {
	var str = []
	for (var prop in obj){
		var s = encodeURIComponent(prop) + '=' + encodeURIComponent(obj[prop]);
		str.push(s);
	}
	return str.join('&');
}

window.onload = function() {
	var settingsStr = localStorage.getItem('userSettings');
	if(settingStr===null) {
		settings = {'urls':[]};
	}
	else {
		settings = JSON.parse(settingStr);
	}
	createGistList(document.getElementById('gist-list'));
}
	