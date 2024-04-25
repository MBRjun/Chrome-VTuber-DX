let images = document.getElementsByTagName('img');
let hostname = window.location.hostname;

if (hostname == 'maimaidx.jp') {
	window.addEventListener('DOMContentLoaded', function() {
		let image = document.querySelector('img[src="https://maimaidx.jp/maimai-mobile/img/logo.png"]');
		if (image) {
			image.addEventListener('load', function(event) {
				event.preventDefault();
			});
		}
	});
	for (let i = 0; i < images.length; i++) {
		if (images[i].src === "https://maimaidx.jp/maimai-mobile/img/logo.png") {
			images[i].src = chrome.runtime.getURL("/src/assets/netJPfix2.webp");
		}
	}
} else if (hostname == 'maimaidx-eng.com') {
	window.addEventListener('DOMContentLoaded', function() {
		let image = document.querySelector('img[src="https://maimaidx-eng.com/maimai-mobile/img/logo.png"]');
		if (image) {
			image.addEventListener('load', function(event) {
				event.preventDefault();
			});
		}
	});
	for (let i = 0; i < images.length; i++) {
		if (images[i].src === "https://maimaidx-eng.com/maimai-mobile/img/logo.png") {
			images[i].src = chrome.runtime.getURL("/src/assets/netJPfix2.webp");
		}
	}
} else if (hostname == 'maimai.wahlap.com') {
	window.addEventListener('DOMContentLoaded', function() {
		let image = document.querySelector('img[src="https://maimaidx-eng.com/maimai-mobile/img/logo.png"]');
		if (image) {
			image.addEventListener('load', function(event) {
				event.preventDefault();
			});
		}
	});
	for (let i = 0; i < images.length; i++) {
		if (images[i].src === "https://maimai.wahlap.com/maimai-mobile/img/logo.png") {
			images[i].src = chrome.runtime.getURL("/src/assets/netCN23.webp");
		}
	}
}
