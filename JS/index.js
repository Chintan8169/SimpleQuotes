let text = document.getElementById("text");
let author = document.getElementById("author");
let res = "";
let data = "";
let tweetText = "";
let btn = document.querySelector(".newQuote");
let tweetMe = document.querySelector(".tw");
tweetMe.addEventListener('click', () => {
	url = `https://twitter.com/intent/tweet?text=${tweetText}`;
	window.open(url);
});

const getRandomQuote = () => {
	let rno = Math.round(Math.random() * data.length);
	// rno=1535;
	text.innerText = data[rno].text;
	tweetText = data[rno].text;
	if (data[rno].author == null) {
		author.innerText = `By Unknown`;

	} else {
		author.innerText = `By ${data[rno].author}`;
	}
};

const getQuote = async () => {
	const api = "https://type.fit/api/quotes";
	try {
		res =await fetch(api);
		data =await res.json();
		getRandomQuote();
	} catch (error) {
		console.log(`cant fetch data due to some ${error}`);
	}
};

getQuote();
btn.addEventListener('click', getQuote);