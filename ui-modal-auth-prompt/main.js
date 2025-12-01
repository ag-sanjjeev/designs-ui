/*
 ________________________________________________
(             Login Sign up Prompt             ()
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

// Bootstrap Modal options
const modalOptions = {
	backdrop: true,
	keyboard: false,
	focus: true
};

/* Accessing via JavaScript. That is easy to add modal dialog for unauthorized click events. */
function init_Modal(domReference) {
	return new bootstrap.Modal(domReference, modalOptions);
}

// Document ready event
$(document).ready(function() {

	// new modal instance
	let auth_modalPrompt = init_Modal($('#auth-prompt-dialog')); console.log($('#auth-prompt-dialog'));
	
	// Iterate through anchor tag
	$('a.like-button').each(function() {
		$(this).on('click', function() {
			// Show modal when click
			auth_modalPrompt.show();
		});
	});
	
});