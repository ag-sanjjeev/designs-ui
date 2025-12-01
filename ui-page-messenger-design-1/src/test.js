/**
 * Test Js used to apply some logic to the design 
 * and not for main design
 */

var chat = document.querySelectorAll('.recent-chats > .chat');
var chat_container = document.getElementsByClassName('chat-container')[0];
var content_side = document.getElementById('content-side');
var chat_area = document.getElementById('chat-area');
var blank_page = document.getElementById('blank-page');
var profiles_side = document.getElementById('profiles-side');
var profile_name = document.getElementsByClassName('profile-name')[0];
var chat_profile_img = document.querySelector('.chat-profile-img');
var chat_profile_name = document.querySelector('.chat-profile-name');
var chat_back_button = document.querySelector('.chat-back-button');

var chat_opponent_name = document.querySelectorAll('.popup-rtl > .chatter-name');
var chat_your_name = document.querySelectorAll('.popup-ltr > .chatter-name');

chat.forEach(function(i) { i.addEventListener('click', function(e) { 
	chat.forEach(function(j) {
		j.classList.remove('active');
	});
	i.classList.add('active');		

	children = [].slice.call(i.children);
	
	for (let a = 0; a < children.length; a++) {
		if (children[a].className.indexOf('contact-img') !== -1) {
			chat_profile_img.src = children[a].src;
		}

		if (children[a].className.indexOf('contact-recent-message') !== -1) {
			for(let b = 0; b < children[a].children.length; b++) {
				if (children[a].children[b].className.indexOf('contact-name') !== -1) {
					chat_profile_name.innerText = children[a].children[b].innerText;			
				}
			}			
		}		
	}

	if (profiles_side.className.indexOf('active') != -1) {
		profiles_side.classList.remove('active');
	}

	if (content_side.className.indexOf('active') == -1) {
		content_side.classList.add('active');
	}	

	if (chat_area.className.indexOf('active') == -1) {
		chat_area.classList.add('active');
	}

	if (blank_page.className.indexOf('active') != -1) {
		blank_page.classList.remove('active');
	}

	chat_opponent_name.forEach(function(a) {
		a.innerText = chat_profile_name.innerText;
	});

	chat_your_name.forEach(function(a) {
		a.innerText = profile_name.innerText;
	});

	chat_container.scrollTo(0,chat_container.scrollHeight);


}); } );

chat_back_button.addEventListener('click', function (e) {
	content_side.classList.remove('active');
	profiles_side.classList.add('active');

	if (chat_area.className.indexOf('active') != -1) {
		chat_area.classList.remove('active');
	}

	if (blank_page.className.indexOf('active') == -1) {
		blank_page.classList.add('active');
	}

	chat.forEach(function(j) {
		j.classList.remove('active');
	});
});

console.log(chat);