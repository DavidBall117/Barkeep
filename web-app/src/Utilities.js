import Beer from "./assets/icons/beer.svg";
import Martini from "./assets/icons/martini.svg";
import Cocoa from "./assets/icons/cocoa.svg";
import Coffee from "./assets/icons/coffee.svg";
import Liqueur from "./assets/icons/liqueur.svg";
import Shake from "./assets/icons/shake.svg";
import Punch from "./assets/icons/punch.svg";
import Shot from "./assets/icons/shot.svg";
import Soda from "./assets/icons/soda.svg";
import Drink from "./assets/icons/drink.svg";
import Bottles from "./assets/icons/bottles.svg";

const doesContain = (str1, str2) => {
	return str1.toLocaleLowerCase().includes(str2.toLocaleLowerCase());
};

export const getIconSrc = (category) => {
	if (doesContain(category, "beer")) {
		return Beer;
	} else if (doesContain(category, "cocktail")) {
		return Martini;
	} else if (doesContain(category, "cocoa")) {
		return Cocoa;
	} else if (doesContain(category, "coffee")) {
		return Coffee;
	} else if (doesContain(category, "liqueur")) {
		return Liqueur;
	} else if (doesContain(category, "shake")) {
		return Shake;
	} else if (doesContain(category, "party drink")) {
		return Punch;
	} else if (doesContain(category, "shot")) {
		return Shot;
	} else if (doesContain(category, "soft drink")) {
		return Soda;
	} else if (doesContain(category, "drink")) {
		return Drink;
	} else {
		return Bottles;
	}
};
