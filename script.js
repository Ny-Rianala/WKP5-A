const recipes = [
	{
		title: 'Eggs',
		picture: 'https://bit.ly/2ZXyiKI',
		author: 'Loïc',
		difficulty: 'easy',
		timing: '15',
		ingredients: ['eggs', 'salt', 'water'],
		steps: [
			'Put a pan on the fire',
			'Crack the eggs on it',
			'Wait, put them out',
			'Add some salt on it',
		],
		id: "first",
	},
	{
		title: 'Rice',
		picture: 'https://bit.ly/2ZXyiKI',
		author: 'Loïc',
		difficulty: 'medium',
		timing: '15',
		ingredients: ['eggs', 'salt', 'water'],
		steps: [
			'Put a pan on the fire',
			'Crack the eggs on it',
			'Wait, put them out',
			'Add some salt on it',
		],	
		id: "second",
	},
];

const cards = document.querySelector(".container");
const generateButton = document.querySelector('button.generate');
const outerModal = document.querySelector('.outer-modal');
const innerModal = document.querySelector('.inner-modal');



const renderCard = (event) => {
		for (let i = 0; i < recipes.length; i++) {
		let title = recipes[i].title;
		let picture = recipes[i].picture;
		let difficulty = recipes[i].difficulty; 
		let timing = recipes[i].timing;
	recipes.forEach(recipe => {
// generate the HTML
		const generateHTML = `
	<div class="cards"
		data-id = ${recipe.id}; 
	>
		<h1 class= "recipe-name">${title}</h1>
		<img src=${picture}/>
		<p class="difficulty">${difficulty}</p>
		<p class="timing">${timing}</p>
	</div>
	<button class= "more-info">More info</button>
	`;
	// put it in the DOM
	cards.insertAdjacentHTML("beforeend", generateHTML);
	})			

};
};

const openModal = event => {
	outerModal.classList.add('open');
	// grab the info
	const card = event.target.closest('.cards');
	let author = recipes[i].author;
	const { title, picture, timing, ingredients, steps } = card.dataset;
	// use modal
	const showDetailHTML = `
	<div>
		<h1>${title}by${author}</h1>
		<img src = ${picture}/>
		<p>${timing}</p>
		<p>ingredients:${ingredients}</p>
		<ul>steps:${steps}</ul>	
    </div>		
    `;
	innerModal.innerHTML = showDetailHTML;
};

const closeModal = event => {
	const isOutside = !event.target.closest('.inner-modal');
	if (isOutside) {
		outerModal.classList.remove('open');
	}
};

const closeModalWithEscapeKey = event => {
	if (event.key === 'Escape') {
		outerModal.classList.remove('open');
	}
};

const handleModalClick = event => {
	console.log(event);
};


// Listeners
generateButton.addEventListener('click', renderCard);
window.addEventListener('keydown', closeModalWithEscapeKey);
outerModal.addEventListener('click', closeModal);
moreInfo.forEach(button => button.addEventListener('click', openModal));
window.addEventListener('click', handleClick);

// event delegation
const handleClick = e => {
	if (e.target.matches('button.more-info')) {
		const parent = e.target.closest('.cards');
		const id = parent.dataset.id;
		const recipe = recipes.find(recipe => recipe.id === id);
		openModal(recipe);
		const moreInfo = document.querySelector('button.more-info');
		console.log("Hello world");
}
};

