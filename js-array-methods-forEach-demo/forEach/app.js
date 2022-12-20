const colors = ['teal', 'cyan', 'peach', 'black'];

function yell(val, i){
	const caps = (val.toUpperCase());
	console.log(`At index ${i}, ${caps}`);
};

colors.forEach(yell);

// const prices = [30.99, 19.99, 2.50, 99.00];

// let total = 0;

// prices.forEach(function(price){
// 	total += price;
// });
// console.log(total);


const prices = [30.99, 19.99, 2.50, 99.00];

let total = 0;

for(let price of prices){
	total += price;
}
console.log(total);

function plus1(x){
	return x+1;
};

const nums = [1,2,3,4,5,6];

 let newNums = [];

function myForEach(arr,func){
	for(let x of arr){
		newNums.push(func(x));
	};
	return newNums;
};

function forEach(arr,callback){
	for(let i =0; i < arr.length; i++){
		callback(arr[i],i, arr);
	}
}

forEach(colors, function(color, i){
	console.log(color.toUpperCase(), 'at index of:',i);
});

