import { Component } from '@angular/core';
import { 
			faCoffee, 
		 	faAd,
		 	faAdd,
			faAddressBook,
			faA,
			faAddressCard,
			faArrowAltCircleRight
	   } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
  	title = 'font-awesome';
	faA = faA;
	faCoffee = faCoffee;
	faAd = faAd;
	faAdd = faAdd;
	faAddressBook = faAddressBook;
	faAddressCard = faAddressCard;
	faArrowAltCircleRight = faArrowAltCircleRight;
}
