const menuItems = document.querySelectorAll('.menu-item');

const messagesNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.message');
const message = messages.querySelectorAll('.messag');
const messageSearch = document.querySelector('#message-search');

const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');

const fontsize = document.querySelectorAll('.choose-size span');

var root = document.querySelector(':root');

const colorPallette = document.querySelectorAll('.choose-color span');

const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');


const changeActive = () =>{
	menuItems.forEach(item => {
			item.classList.remove('active');
	})
}

menuItems.forEach(item => {
	item.addEventListener('click', () =>{
		changeActive();
		item.classList.add('active');
		if (item.id != 'notifications') {
			document.querySelector('.notifications-popup').style.display = 'none';
		}else{
			document.querySelector('.notifications-popup').style.display = 'block';
			document.querySelector('#notifications .notifications-count').style.display = 'none';					
		}
	})
})

const searchMesaage = () => {
	const vale = messageSearch.value.toLowerCase();
	message.forEach(chat => {
		let name = chat.querySelector('h5').textContent.toLowerCase();
		if (name.indexOf(vale) != -1) {
			chat.style.display = 'flex';
		}else{
			chat.style.display = 'none';
		}
	})
}

messageSearch.addEventListener('keyup', searchMesaage);

messagesNotification.addEventListener('click', () => {
	messages.style.boxShadow = '0 0 1rem var(--color-primary)';
	messagesNotification.querySelector(".notifications-count").style.display = 'none';
	setTimeout(() => {
		messages.style.boxShadow = 'none';
	}, 2200);
})

const openThemeModal = () =>{
	themeModal.style.display = 'grid';
}

const closeThemeModal = (e) =>{
	if(e.target.classList.contains('customize-theme')){
		themeModal.style.display = 'none';
	}
}

themeModal.addEventListener('click', closeThemeModal);

theme.addEventListener('click', openThemeModal);

const removeSizeSelector = () => {
	fontsize.forEach(size => {
		size.classList.remove('active');
	})
} 

fontsize.forEach(size => {


	size.addEventListener('click', () => {
		removeSizeSelector();
	let fontsiz;
	size.classList.toggle('active');
	if(size.classList.contains('font-size-1')){
		fontsiz = '0.625rem';
		root.style.setProperty('--sticky-top-left',' 5.4rem');
		root.style.setProperty('--sticky-top-right',' 5.4rem');
	}else if(size.classList.contains('font-size-2')){
		fontsiz = '0.813rem';
		root.style.setProperty('--sticky-top-left',' 5.4rem');
		root.style.setProperty('--sticky-top-right',' -7rem');		
	}else if(size.classList.contains('font-size-3')){
		fontsiz = '1rem';
		root.style.setProperty('--sticky-top-left',' -2rem');
		root.style.setProperty('--sticky-top-right',' -17rem');		
	}
	else if(size.classList.contains('font-size-4')){
		fontsiz = '1.188rem';
		root.style.setProperty('--sticky-top-left',' -5rem');
		root.style.setProperty('--sticky-top-right',' -25rem');		
	}
	else if(size.classList.contains('font-size-5')){
		fontsiz = '1.375rem';
		root.style.setProperty('--sticky-top-left',' -12rem');
		root.style.setProperty('--sticky-top-right',' -35rem');		
	}

	document.querySelector('html').style.fontSize = fontsiz;
	})

})

const removeColorSelector = () => {
	colorPallette.forEach(colors => {
		colors.classList.remove('active');
	})
} 

colorPallette.forEach(color => {
	color.addEventListener('click', () => {
		removeColorSelector();
		color.classList.toggle('active');
		let primary;
		if(color.classList.contains('color-1')){
			primaryHue = '#88abc2';
		}else if(color.classList.contains('color-2')){
			primaryHue = '#d88a8a';
		}else if(color.classList.contains('color-3')){
			primaryHue = '#e8c8a1';
		}else if(color.classList.contains('color-4')){
			primaryHue = '#ff667c';
		}else if(color.classList.contains('color-5')){
			primaryHue = '#c6e5d9';
		}
		root.style.setProperty('--color', primaryHue);
	})
})

let dark, normal, light;

const changeBG = () => {
	root.style.setProperty('--dark-porc',dark);
	root.style.setProperty('-ligh-por',light);
	root.style.setProperty('--normal-porc',normal);

}

Bg1.addEventListener('click', () => {
	dark = '17%';
	normal = '100%';
	light = '95%';	
	
	Bg1.classList.add('active');
	Bg2.classList.remove('active');
	Bg3.classList.remove('active');
	changeBG();

})

Bg2.addEventListener('click', () => {
	dark = '33%';
	normal = '85%';
	light = '1%';

	Bg2.classList.add('active');
	Bg1.classList.remove('active');
	Bg3.classList.remove('active');
	changeBG();

})

Bg3.addEventListener('click', () => {
	dark = '95%';
	normal = '10%';
	light = '0%';

	Bg3.classList.add('active');
	Bg2.classList.remove('active');
	Bg1.classList.remove('active');
	changeBG();

})