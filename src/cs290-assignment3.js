var fakeJson = [{
    "url": "https://api.github.com/gists/873e55f810be0721792b",
    "forks_url": "https://api.github.com/gists/873e55f810be0721792b/forks",
    "commits_url": "https://api.github.com/gists/873e55f810be0721792b/commits",
    "id": "873e55f810be0721792b",
    "git_pull_url": "https://gist.github.com/873e55f810be0721792b.git",
    "git_push_url": "https://gist.github.com/873e55f810be0721792b.git",
    "html_url": "https://gist.github.com/873e55f810be0721792b",
    "files": {
      "gistfile1.md": {
        "filename": "gistfile1.md",
        "type": "text/plain",
        "language": "Markdown",
        "raw_url": "https://gist.githubusercontent.com/KellyD813/873e55f810be0721792b/raw/a7bb56489ba412c5fc0d34100e86011fd3730c31/gistfile1.md",
        "size": 1351
      }
    },
    "public": true,
    "created_at": "2015-04-28T01:35:03Z",
    "updated_at": "2015-04-28T01:35:04Z",
    "description": "",
    "comments": 0,
    "user": null,
    "comments_url": "https://api.github.com/gists/873e55f810be0721792b/comments",
    "owner": {
      "login": "KellyD813",
      "id": 6502599,
      "avatar_url": "https://avatars.githubusercontent.com/u/6502599?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/KellyD813",
      "html_url": "https://github.com/KellyD813",
      "followers_url": "https://api.github.com/users/KellyD813/followers",
      "following_url": "https://api.github.com/users/KellyD813/following{/other_user}",
      "gists_url": "https://api.github.com/users/KellyD813/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/KellyD813/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/KellyD813/subscriptions",
      "organizations_url": "https://api.github.com/users/KellyD813/orgs",
      "repos_url": "https://api.github.com/users/KellyD813/repos",
      "events_url": "https://api.github.com/users/KellyD813/events{/privacy}",
      "received_events_url": "https://api.github.com/users/KellyD813/received_events",
      "type": "User",
      "site_admin": false
    }
  },
  {
    "url": "https://api.github.com/gists/873e55f810be0721792b",
    "forks_url": "https://api.github.com/gists/873e55f810be0721792b/forks",
    "commits_url": "https://api.github.com/gists/873e55f810be0721792b/commits",
    "id": "873e55f810be0721792b",
    "git_pull_url": "https://gist.github.com/873e55f810be0721792b.git",
    "git_push_url": "https://gist.github.com/873e55f810be0721792b.git",
    "html_url": "https://gist.github.com/873e55f810be0721792b",
    "files": {
      "gistfile1.md": {
        "filename": "gistfile1.md",
        "type": "text/plain",
        "language": "Markdown",
        "raw_url": "https://gist.githubusercontent.com/KellyD813/873e55f810be0721792b/raw/a7bb56489ba412c5fc0d34100e86011fd3730c31/gistfile1.md",
        "size": 1351
      }
    },
    "public": true,
    "created_at": "2015-04-28T01:35:03Z",
    "updated_at": "2015-04-28T01:35:04Z",
    "description": "",
    "comments": 0,
    "user": null,
    "comments_url": "https://api.github.com/gists/873e55f810be0721792b/comments",
    "owner": {
      "login": "KellyD813",
      "id": 6502599,
      "avatar_url": "https://avatars.githubusercontent.com/u/6502599?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/KellyD813",
      "html_url": "https://github.com/KellyD813",
      "followers_url": "https://api.github.com/users/KellyD813/followers",
      "following_url": "https://api.github.com/users/KellyD813/following{/other_user}",
      "gists_url": "https://api.github.com/users/KellyD813/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/KellyD813/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/KellyD813/subscriptions",
      "organizations_url": "https://api.github.com/users/KellyD813/orgs",
      "repos_url": "https://api.github.com/users/KellyD813/repos",
      "events_url": "https://api.github.com/users/KellyD813/events{/privacy}",
      "received_events_url": "https://api.github.com/users/KellyD813/received_events",
      "type": "User",
      "site_admin": false
    }
  }];

var favoritesArray = [];

function liGists (data) {
	for(var i = 0; i < data.length; i++){
		var li = document.createElement('li');
		var a = document.createElement('a');
		var ul = document.getElementById("gistList");
		var star = document.createElement('a');
		li.appendChild(a);
		li.appendChild(star);
		ul.appendChild(li);
		a.href = data[i].html_url;
		star.href = "#"
		a.innerHTML = data[i].html_url;
		star.innerHTML = " ★"
		star.setAttribute('data-url', data[i].html_url);
		star.onclick = favorite;
		a.href.onclick = favorite;
	}

}

function favorite(){

	var ul = document.getElementById("gistFavs");
	var star = document.createElement('a');
	var li = document.createElement('li');
	var a = document.createElement('a');
	li.appendChild(a);
	ul.appendChild(li);
	var url = this.getAttribute('data-url');
	a.href = url;
	a.innerHTML = url;
	favoritesArray.push(url);
	localStorage.setItem('userSettings', JSON.stringify(favoritesArray));
}

function fetchData() {
	var request = new XMLHttpRequest();
	request.open('GET', 'https://api.github.com/gists', true);

	request.onload = function() {
	  if (request.status >= 200 && request.status < 400) {
	    // Success!
	    var data = JSON.parse(request.responseText);
	    liGists(data);
	  } else {
	  	liGists(fakeJson);
	  }
	};

	request.onerror = function() {
	  // There was a connection error of some sort
	};

	request.send();
}

function createFavoriteList(urls, ul) {
	console.log(favorite);
	for(var i = 0; i < urls.length; i++){
		var li = document.createElement('li');
		var a = document.createElement('a');
		li.appendChild(a);
		ul.appendChild(li);
		a.href = urls[i];
		a.innerHTML = urls[i];
	}
}
 window.onload = function() {
 	var urlStr = localStorage.getItem('userSettings');
 	if(urlStr===null) {
 		urls = {};
 	}
 	else {
 		urls = JSON.parse(urlStr);
 	}
 	createFavoriteList(urls,document.getElementById('gistFavs'));
 }
 	