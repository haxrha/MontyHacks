// Temp data for mobile display
const foodBankSearchData = [
	"dodson house\r\ndodson way\r\nfengate\r\npe1 5xg peterborough",
	"c/o the bridge church\r\nunit 1a critchcraft buildin…rk industrial estate\r\nchepstow\r\nnp16 5qz chepstow",
	"wisbech baptist church\r\nhill street\r\nwisbech\r\ncambridgeshire\r\npe13 1bd wisbech",
	"vestry hall\nneasden lane\nlondon\r\nnw10 2ts brent",
	"cromer methodist church hall\r\ncorner of west st and hall road\r\ncromer\r\nnr27 9dt north norfolk",
	"charities house\r\nno 1 quintet\r\nchurchfield road\r\nwalton on thames\r\nsurrey\r\nkt12 2tz walton & hersham",
	"the parish rooms\r\nchurch street\r\nmarket drayton\r\ntf9 1af market drayton",
	"george whitfield centre\r\n107 great western road\r\ngloucester\r\ngl1 3nf gloucester",
	"unit 3\r\n55 brampton road\r\neastbourne\r\nbn22 9af eastbourne",
	"albion street\r\nbrierley hill\r\ndy5 3ee black country",
];
const foodBankDisplayData = [
	{
		address: "Dodson House\r\nDodson Way\r\nFengate\r\nPE1 5XG",
		email: "info@peterborough.foodbank.org.uk",
		excess: "Baked Beans\nPulses\nPasta",
		foodbank: "Peterborough",
		id: "270e6fcf",
		needs:
			"Tinned Soup\nPasta Sauce Ie Pasta Bake And Bolognese Sauces\nTinned Vegetables\nInstant Mash\nTinned Fruit\nTinned Meat (Meatballs ,Sausages In Beans , Chilli Con Carne )\nCereals 500gm Or 375gm Not Porridge Oats Please\nTea Bags Boxes Of 40 Or 80 Tea Bags\nUHT Milk\nLong Life Fruit Juice\nPuddings -Desserts\nRice Pudding\nTinned Fish\nToiletries , Deodorant And Shower Gel\nBottles Of Squash 1tr\nToilet Rolls",
		phone: "01733575083",
		url: "https://peterborough.foodbank.org.uk",
	},
	{
		address:
			"c/o The Bridge Church\r\nUnit 1a Critchcraft Buildings\r\nBulwark Industrial Estate\r\nChepstow\r\nNP16 5QZ",
		email: "info@chepstow.foodbank.org.uk",
		excess: "Pulses",
		foodbank: "Chepstow",
		id: "33901741",
		needs:
			"Pasta\nTinned Soup\nJam\nTinned Vegetables\nTinned Fruit\nCustard And Rice Pudding\nPasta Sauces\nTinned Meat\nInstant Coffee\nWashing-up-liquid, Washing Powder And Toilet Roll\nShower Gel And Deodorants",
		phone: "07931911869",
		url: "https://chepstow.foodbank.org.uk",
	},
	{
		address:
			"Wisbech Baptist Church\r\nHill Street\r\nWisbech\r\nCambridgeshire\r\nPE13 1BD",
		email: "info@wisbech.foodbank.org.uk",
		excess: "",
		foodbank: "Wisbech",
		id: "45b50439",
		needs:
			"Tinned Meat\nTinned Vegetables\nLong Life Fruit Juice\nUHT Milk\nTinned Soup\nTinned Fruit\nTinned Custard/rice Pudding\nDeodorant\nToothpaste\nShower Gel",
		phone: "07933572054",
		url: "https://wisbech.foodbank.org.uk",
	},
	{
		address: "Vestry Hall\nNeasden Lane\nLondon\r\nNW10 2TS",
		email: "info@brent.foodbank.org.uk",
		excess: "Pasta\nBiscuits\nSnacks/crisps",
		foodbank: "Brent",
		id: "1f3846af",
		needs:
			"Jam & Spread\nTinned Veg\nBaby Wipes\nDeodorant\nTinned Puddings\nPlastic Bags/bags For Life",
		phone: "02037455972",
		url: "https://brent.foodbank.org.uk",
	},
	{
		address:
			"Cromer Methodist Church Hall\r\nCorner of West St and Hall Road\r\nCromer\r\nNR27 9DT",
		email: "info@northnorfolk.foodbank.org.uk",
		excess: "Tea Bags\nBaked Beans\nOats + Porridge\nBreakfast Cereals",
		foodbank: "North Norfolk",
		id: "45df90e0",
		needs:
			"Long Life Milk (UHT)\nSquash / Fruit Juice\nTinned Meat\nTinned Fish\nTinned Tomatoes\nTinned Fruit\nJam / Marmalade\nNappies (Size 5 And 7)\nMicrowave Rice\nTinned Vegetables\nTinned Rice Pudding\nTinned Or Boxed Custard\nCereal Bars\nCoffee\nSugar\nShampoo\nPull-ups (Size 6)\nBleach",
		phone: "07826376343",
		url: "https://northnorfolk.foodbank.org.uk",
	},
	{
		address:
			"Charities House\r\nNo 1 Quintet\r\nChurchfield Road\r\nWalton on Thames\r\nSurrey\r\nKT12 2TZ",
		email: "info@waltonhersham.foodbank.org.uk",
		excess:
			"Cereal\nSoup\nTea Bags\nTinned Meat\nTinned Fruit\nTinned Carrots And Peas\nRice Pudding\nSanitary Items\nToilet Roll\nNappies, Sizes 1-5",
		foodbank: "Walton & Hersham",
		id: "ac87743d",
		needs:
			"Pasta Sauce / Tinned Tomatoes\nRice / Pasta\nInstant / Pot Noodles\nTinned Sweetcorn\nBiscuits\nCrisps /Savoury Snacks\nLong-life Juice Or Squash\nHot Chocolate / Decaf Coffee\nLong-life Sponge Puddings + Custard\nMayonnaise\nKitchen Roll\nDeodorant\nToothbrushes\nLaundry Pods\nDog Food",
		phone: "07884046665",
		url: "https://waltonhersham.foodbank.org.uk",
	},
	{
		address: "The Parish Rooms\r\nChurch Street\r\nMarket Drayton\r\nTF9 1AF",
		email: "info@marketdrayton.foodbank.org.uk",
		excess: "Cereals\nRice\nTea\nPasta\nBaked Beans\nTinned Tomatoes",
		foodbank: "Market Drayton",
		id: "f67ce42c",
		needs: "Large Jars Of Coffee\nSoup\nBleach & Cleaning Sprays",
		phone: "01630654007",
		url: "https://marketdrayton.foodbank.org.uk",
	},
	{
		address:
			"George Whitfield Centre\r\n107 Great Western Road\r\nGloucester\r\nGL1 3NF",
		email: "info@gloucester.foodbank.org.uk",
		excess: "Baked Beans\nDry Spaghetti\nDry Rice\nTea",
		foodbank: "Gloucester",
		id: "676483b8",
		needs:
			"Sugar\nCooking Oil\nTinned Fruit\nBaby Wipes\nNappies (Sizes 5 + 6)\nDeoderant (Male And Female)\nTinned Custard\nTinned Fish\nShampoo + Conditioner\nTinned Dog & Cat Food\nSanitary Pads (Not Tampons)",
		phone: "01452309683",
		url: "https://gloucester.foodbank.org.uk",
	},
	{
		address: "Unit 3\r\n55 Brampton Road\r\nEastbourne\r\nBN22 9AF",
		email: "admin@eastbourne.foodbank.org.uk",
		excess: "Baked Beans\nTinned Soup\nPasta\nPorridge",
		foodbank: "Eastbourne",
		id: "e0326e03",
		needs:
			"Tuna And Other Tinned Fish\nJam And Other Spreads\nNappies (Size 5, 6, 7 And Pull Ups)\nPasta Sauce\nRice\nToilet Rolls\nSugar\nTinned Ham, Corned Beef And Spam\nTinned Carrots\nDeodorant",
		phone: "01323409925",
		url: "https://eastbourne.foodbank.org.uk",
	},
	{
		address: "Albion Street\r\nBrierley Hill\r\nDY5 3EE",
		email: "admin@blackcountryfoodbank.org.uk",
		excess: "",
		foodbank: "Black Country",
		id: "6d561797",
		needs:
			"Long Life Milk\n1ltr Cartons Of Long Life Fruit Juice\nInstant Noodles\nJars Of Pasta Sauce/cooking Sauce\nTinned Custard\nTinned Rice Pudding\nTinned Chilli Con Carne\nTinned Macaroni Cheese\nTinned Vegetables\nBars Of Soap\nToilet Roll\nShampoo\nShower Gel",
		phone: "01384671250",
		url: "https://www.blackcountryfoodbank.org.uk",
	},
];

fetch("needs.json")
	.then((data) => data.json())
	.then((data) => {
		// Actual code
		for (let i = 0; i < data.length; i++) {
			const searchStr = `${data[i].address} ${data[i].foodbank}`;
			foodBankSearchData.push(searchStr.toLowerCase());
			foodBankDisplayData.push(data[i]);
		}
		search();
	});

const input = document.getElementsByClassName("search")[0];

function search() {
	const resultsContainer = document.getElementsByClassName("search-results")[0];
	const cards = [];
	for (let i = 0; i < foodBankSearchData.length; i++) {
		if (!foodBankSearchData[i].includes(input.value.toLowerCase())) {
			continue;
		}

		cards.push(dataToCard(foodBankDisplayData[i]));
	}
	resultsContainer.innerHTML = cards.join("");
}

[...document.getElementsByTagName("button")]
	.at(-1)
	.addEventListener("click", search);

function dataToCard(data) {
	return `
  <div class="card">
    <div class="container">
      <div class="card-title"><b><a href="${data.url}">${data.foodbank}</a></b></div>
      <div>
        <div id="address" class="section-header">Address</div>
        ${data.address}
      </div>
      <div>
        <div class="section-header">Needs:</div>
        <ul id="needs">
          ${data.needs
						.split("\n")
						.map((el) => `<li>${el}</li>`)
						.join("\n")}
        </ul>
      </div>
      <div>
        <div class="section-header">Excess:</div>
        <ul id="excess">
          ${data.excess
						.split("\n")
						.map((el) => `<li>${el}</li>`)
						.join("\n")}
        </ul>
      </div>
      <div>
        <div class="section-header">Contact:</div>
        <div id="phone">Phone: ${data.phone}</div>
        <div id="email">Email: <a href="mailto:${data.email}" target="blank">${
					data.email
				}</a></div>
      </div>

      <div class="button-container"><button class="donate">Donate Now</button></div>

    </div>
  </div>`;
}

document.getElementsByTagName("button")[0].addEventListener("click", search);
document.getElementsByTagName("input")[0].addEventListener("keypress", (e) => {
	if (e.code === "Enter") {
		search();
	}
});

search();
