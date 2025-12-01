/*
	 ___________________________________________________
	()                                                  )
	 +==================================================+	
	 |  Copyright 2022 ag-sanjjeev                      |
	 |                                                  |
	 |  The source code is licensed under MIT-style     |
	 |  License. The usage, permission and condition    |
	 |  are applicable to this source code as per       |
	 |  license. That can be found in LICENSE file or   |
	 |  at https://opensource.org/licenses/MIT.         |
	 (__________________________________________________(

*/

$(document).ready(function() {
	
	init_theme();

	document.querySelectorAll('li.theme').forEach(function(element) { 
		element.addEventListener('click', function(e) { 
			let themeName = e.target.getAttribute('data-theme');
			set_CurrentTheme(themeName);
			refresh_theme();
		}); 
	});

	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(event) {
		if (event.matches) {
			set_CurrentTheme('theme-dark');
			refresh_theme();
		}
	});
});

function init_theme() {
	var theme = document.querySelectorAll('link#theme');

	if (theme.length <= 0) {
		theme = document.createElement('link');
		theme.rel = 'stylesheet';
		theme.type = 'text/css';
		theme.id = 'theme';
		let themeName = get_CurrentTheme();
		theme.href = './src/css/' + themeName + '.css';
		theme.media = 'all';
		document.head.appendChild(theme);	
	}
}

function refresh_theme() {
	var theme = document.querySelectorAll('link#theme');

	if (theme.length <= 0) {
		init_theme();
	} else {		
		let themeName = get_CurrentTheme();
		theme[0].href = './src/css/' + themeName + '.css';
	}	
}

function get_CurrentTheme() {
	var themeName = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'theme-default';
	if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		themeName = 'theme-dark';
	}
	return themeName;
}

function set_CurrentTheme(value) {
	localStorage.setItem('theme', value);
}

