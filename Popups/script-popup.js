function npyCreatePopups(boxes, popups, closebtns){
	

const npyPopupBoxes = Array.from(document.querySelectorAll(boxes));
const npyPopups = Array.from(document.querySelectorAll(popups));
const npyPopupsClose= Array.from(document.querySelectorAll(closebtns));

//Apparition des popups au clic sur les avantages
npyPopupBoxes.forEach(element => element.addEventListener('click', function(e){
	for(i=0;i<npyPopups.length;i++){
		npyPopups[i].style.display="none";
	}
	document.querySelector(`#npy-popup-${this.dataset.popup}`).style.display='block';

	}));

// Fermeture des popups au clic sur la croix
npyPopupsClose.forEach(element => element.addEventListener('click', function(e){

	this.parentNode.style.display='none';
	
	}));
}

npyCreatePopups('.npy_popupbox','.npy_popup','.npy_popup_close');