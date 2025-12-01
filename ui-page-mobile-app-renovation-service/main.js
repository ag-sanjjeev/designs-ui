/*
 ________________________________________________
(    Mobile App Renovation Services Screen     ()
\-----------------------------------------------\
|                                               |
|   Copyright 2024 ag-sanjjeev                  |
|                                               |
|-----------------------------------------------|
|   The source code is licensed under           |
|   MIT-style License.                          |
|                                               |
|-----------------------------------------------|
|                                               |
|   The usage, permission and condition         |
|   are applicable to this source code          |
|   as per license.                             |
|                                               |
|-----------------------------------------------|
|                                               |
|   That can be found in LICENSE file           |
|   or at https://opensource.org/licenses/MIT.  |
(_______________________________________________(

*/

const theme = document.getElementById('theme');
const toggleTheme = document.getElementById('toggle-theme');
const themeIcon = document.getElementById('theme-icon');
// Event Listeners
toggleTheme.addEventListener('click', function() {
	if (this.dataset.theme == 'light') {
		theme.href = './dark-theme.css';
		this.dataset.theme = 'dark';
		themeIcon.innerText = 'light_mode';
	} else {
		theme.href = './light-theme.css';
		this.dataset.theme = 'light';
		themeIcon.innerText = 'dark_mode';
	}
});