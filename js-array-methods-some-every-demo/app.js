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

words.some((word) => {
	return word.length > 25;
});

words.some((word) => {
	return word.indexOf('thyroid') != -1;
});

words.every((w) => {
	return w.length >= 5;
})

function allStrings(arr){
	return arr.every((el) => {
		return typeof el === 'string';
	})
};

const btn = document.querySelector('button');
btn.addEventListener('click', (e) => {
	const checkboxes = document.querySelectorAll('input[type="checkbox"]');
	const allChecked = Array.from(checkboxes).every((checkbox) => {
		return checkbox.checked;
	})
	if(!allChecked) alert('PLEASE AGREE TO EVERYTHING!');
});

//mySome(arr, function())

function mySome(arr, callback){
	for(let i =0; i < arr.length; i++){
		if(callback(arr[i],i,arr)) return true;
	}
	return false;
}

mySome([4,5,6,7], (n) => {
	return n > 5;
})


//myEvery(arr, function())

function myEvery(arr, callback){
	for(let i =0; i < arr.length; i++){
		if(!callback(arr[i],i,arr)) return false;
	}
	return true;
}

myEvery([5,6,7,8], (n) => {
	return n > 5;
})