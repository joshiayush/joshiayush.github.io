const DEVELOPER_EMAIL = 'ayush854032@gmail.com';
const EMAIL_SUBJECT_LINE = "I'm Interested to work together";

const form = document.querySelector('form#contactForm');

const nameInput = form.querySelector('input#name');
const emailInput = form.querySelector('input#email');
const messageInput = form.querySelector('textarea#message');

/**
 * @TODO: handleContactFormSubmit() requires a passwordless email submittion
 * that will allow one email address to contact another email address without
 * any credentials in between. 
 */ 
const handleContactFormSubmit = (e) => {
	e.preventDefault();

	const modifiedEmailSubject = `[${nameInput.value}] ${EMAIL_SUBJECT_LINE}`;
	window.open(
		`mailto:${DEVELOPER_EMAIL}?subject=${modifiedEmailSubject}&body=${messageInput.value}`
	);
};

const submitInput = form.querySelector('input#submit');
submitInput.addEventListener('click', handleContactFormSubmit);
