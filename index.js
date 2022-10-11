// function checkStorage(available, ordered) {
// 	// Change code below this line
// 	let message;

// 	if (ordered === 0) {
// 		message = "Your order is empty!";
// 	} else if (ordered > available) {
// 		message = "Your order is too large, not enough goods in stock!";
// 	} else {
// 		message = "The order is accepted, our manager will contact you";
// 	}

// 	return message;
// 	// Change code above this line
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));

// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const lastElementIndex = fruits.length - 1;
// console.log(lastElementIndex);
// const lastElement = fruits[fruits.length - 1];
// console.log(lastElement);

// const string = "The quick brown fox jumped over the lazy dog";
// console.log(string);

// const words = string.split(" ");
// console.log(words);

// let biggestWord = words[0];

// for (const word of words) {
// 	if (word.length > biggestWord.length) {
// 		biggestWord = word;
// 	}
// }
// console.log(biggestWord);

// const numbers = [];
// const min = 1;
// const max = 5;

// for (let i = min; i <= max; i += 1) {
// 	numbers.push(i);
// }
// console.log(numbers);

// #23/2
// const numbers = [1, 2, 3, 4, 5, 7];
// const value = 3;
// let newArray = [];
// for (const number of numbers) {
// 	console.log(number);
// 	if (number > value) {
// 		newArray.push(number);
// 	}
// }
// console.log(newArray);

// #25/2
// const array1 = [2, 3, 4, 5, 6];
// const array2 = [7, 2, 5];
// let commonElements = [];

// for (const number of array1) {
// 	if (array2.includes(number)) {
// 		commonElements.push(number);
// 	}
// }
// console.log(commonElements);
// #29/2
// const start = 3;
// const end = 8;
// let numbers = [];

// for (let i = start; i <= end; i += 1) {
// 	if (i % 2 === 0) {
// 		numbers.push(i);
// 		continue;
// 	}
// }
// console.log(numbers);

//  ---------------------третий модуль------------
// -----method hasOwnProperty()-------------
// const animal = {
// 	legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Манго";

// console.log(dog); // {name: 'Манго'}
// console.log(dog.name); // 'Манго'
// console.log(dog.legs);
//
//
// const book = {
// 	title: "The Last Kingdom",
// 	author: "Bernard Cornwell",
// 	genres: ["historical prose", "adventure"],
// 	rating: 8.38,
// };

// for (const key in book) {
// 	// Ключ
// 	console.log(key);
// 	// Значение свойства с таким ключом
// 	console.log(book[key]);
// }
//
//
// const book = {
// 	title: "The Last Kingdom",
// 	author: "Bernard Cornwell",
// 	genres: ["historical prose", "adventure"],
// 	rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'genres', 'rating']
//
//
// const book = {
// 	title: "The Last Kingdom",
// 	author: "Bernard Cornwell",
// 	genres: ["historical prose", "adventure"],
// 	rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
// 	// Ключ
// 	console.log(key);
// 	// Значение свойства
// 	console.log(book[key]);
// }
//
//
// const book = {
// 	title: "The Last Kingdom",
// 	author: "Bernard Cornwell",
// 	rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'rating']

// const values = Object.values(book);
// console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]
//
//
// const book = {
// 	title: "The Last Kingdom",
// 	author: "Bernard Cornwell",
// 	rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'rating']

// const values = Object.values(book);
// console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

// const entries = Object.entries(book);
// console.log(entries);
// // [["title", "The Last Kingdom"], ["author", "Bernard Cornwell"], ["rating", 8.38]]
//
//
// ------------массив обьектов-------
// const books = [
// 	{
// 		title: "The Last Kingdom",
// 		author: "Bernard Cornwell",
// 		rating: 8.38,
// 	},
// 	{
// 		title: "На берегу спокойных вод",
// 		author: "Роберт Шекли",
// 		rating: 8.51,
// 	},
// 	{
// 		title: "Сон смешного человека",
// 		author: "Федор Достоевский",
// 		rating: 7.75,
// 	},
// ];

// for (const book of books) {
// 	// Объект книги
// 	console.log(book);
// 	// Название
// 	console.log(book.title);
// 	// Автор
// 	console.log(book.author);
// 	// Рейтинг
// 	console.log(book.rating);
// }
//
//
// const bookNames = [];

// for (const book of books) {
// 	bookNames.push(book.title);
// }

// console.log(bookNames); // ["The Last Kingdom", "На берегу спокойных вод", "Сон смешного человека"]
//
//
// let totalRating = 0;

// for (const book of books) {
// 	totalRating += book.rating;
// }

// const averageRating = (totalRating / books.length).toFixed(1);
// console.log(averageRating); // 8.2
//
//
//
// const temps = [14, -4, 25, 8, 11];

// // В консоли будет массив
// console.log(temps);
// // ❌ Так не сработает, потому что передаём целый массив
// console.log(Math.max(temps)); // NaN

// // В консоли будет набор отдельных чисел
// console.log(...temps);
// // ✅ Распылим коллекцию элементов как отдельные аргументы
// console.log(Math.max(...temps)); // 25
//
//
// const temps = [14, -4, 25, 8, 11];

// // Это точная, но независимая копия массива temps
// const copyOfTemps = [...temps];
// console.log(copyOfTemps); // [14, -4, 25, 8, 11]
//
// ------------объединение массивов------------------
// const lastWeekTemps = [14, 25, 11];
// const currentWeekTemps = [23, 17, 18];
// const allTemps = [...lastWeekTemps, ...currentWeekTemps];
// console.log(allTemps); // [14, 25, 11, 23, 17, 18]
//
//
// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15, propD: 20 };

// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

// const fourth = { ...second, ...first };
// console.log(fourth); // { propC: 50, propD: 20, propA: 5, propB: 10 }
//
//
// const book = {
// 	title: "The Last Kingdom",
// 	author: "Bernard Cornwell",
// 	genres: ["historical prose", "adventure"],
// 	isPublic: true,
// 	rating: 8.38,
// };

// // Деструктуризируем
// const { title, author, isPublic, rating, coverImage } = book;
// console.log(coverImage); // undefined

// const accessType = isPublic ? "публичном" : "закрытом";
// const message = `Книга ${title} автора ${author} с рейтингом ${rating} находится в ${accessType} доступе.`;
// console.log(book);
// console.log(message);
//
//
// const books = [
// 	{
// 		title: "The Last Kingdom",
// 		author: "Bernard Cornwell",
// 		rating: 8.38,
// 	},
// 	{
// 		title: "На берегу спокойных вод",
// 		author: "Роберт Шекли",
// 		rating: 8.51,
// 	},
// ];

// for (const book of books) {
// 	console.log(book.title);
// 	console.log(book.author);
// 	console.log(book.rating);
// }
// // -----или-----
// for (const book of books) {
// 	const { title, author, rating } = book;

// 	console.log(title);
// 	console.log(author);
// 	console.log(rating);
// }
