const numbers = [ 21, 37, 64, -99, 142 ];
const negatives = numbers.map(function(num) {
	return num * -1;
});

const doubles = numbers.map(function(num){
	console.log(num *2);
});

const todos = [
	{
		id: 1,
		text: 'walk the dog',
		priority: 'high'
	},
	{
		id: 2,
		text: 'walk the chickens',
		priority: 'medium'
	},
	{
		id: 3,
		text: 'feed the cats',
		priority: 'low'
	},
	{
		id: 4,
		text: 'put out dumpster fire in my garage',
		priority: 'very high'
	}
];

const todoText = todos.map((todo) => {
	return todo.text;
});

const links = Array.from(document.querySelectorAll('a'));
const urls = links.map((a) => {
	return a.href;
});

//myMap([1,2,3], function(val, i, arr){
	// return val * 3
// })
//my map function attempt:

function myMap(arr, func){
	let newArr = [];
	for(let x of arr){
		newArr.push(func(x));
	}
	return newArr;
};

const todosText = myMap(todos, (todo) => {
	return todo.text;
})


//Colts map function
function myMap2(arr, func){
	const mappedArray = [];
	for(let i = 0; i < arr.length; i++){
		const val = func(arr[i], i, arr);
		mappedArray.push(val);
	}
	return mappedArray;
}

const priorityMap = myMap2(todos, function(todo){
	return todo.priority;
})

const repeatedStrings = myMap2(['a','b','c','d','e'], (str, idx) => {
	return str.repeat(idx);
})