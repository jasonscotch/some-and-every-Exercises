const words = [
	'immunoelectrophoretically',
	'rotavator',
	'tsktsk',
	'psychophysicotherapeutics',
	'squirrelled',
	'crypt',
	'uncopyrightable',
	'cysts',
	'pseudopseudohypoparathyroidism',
	'unimaginatively'
];

const containsVowel = (word) => {
	for(let char of word){
		if(isVowel(char)) return true;
	}
	return false;
};

const isVowel = (char) => {
	return 'aeiou'.indexOf(char) !== -1;
}

const longWords = words.filter(function(word){
	return word.length >= 20;
});

const cOrUWords = words.filter( (w) => {
	return w[0] === 'u' || w[0] === 'c';
});

const containsVowels = words.filter(containsVowel);

const noVowels = words.filter((word) => {
	return !containsVowel(word);
});



const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');

const checked = Array.from(allCheckboxes).filter( (box) => {
	return box.checked;
});

const completedItems = checked.map((checkbox) => {
	return checkbox.parentElement.innerText;
})

function extractCompletedTodos() {
	const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
	return Array.from(allCheckboxes)
		.filter( (box) => {
			return box.checked;
		})
		.map((checkbox) => {
			return checkbox.parentElement.innerText;
		});
}


//myFilter(arr,callback)

function myFilter(arr, callback){
	const filteredArray = [];
	for(let i = 0; i < arr.length; i++){
		if(callback(arr[i], i, arr)){
			filteredArray.push(arr[i])
		}
	}
	return filteredArray;
}

const shorties = myFilter(words, (word) => {
	return word.length <= 10;
});

const everyOtherWord = myFilter(words, (word,i) => {
	return i % 2 === 0;
});