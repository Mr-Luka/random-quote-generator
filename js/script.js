const famousButton = document.querySelector("#famous-quotes");
const inspButton = document.querySelector("#inspirational");
const h1 = document.querySelector("h1.the-quote");
const author = document.querySelector("h2")

const getData = async function () {
    try {
        const getQuotes = await fetch("https://api.quotable.io/random");
        const data = await getQuotes.json();
        return {quote: data.content, author:data.author}
    }   catch (error) {
        console.error("Error fetching the quote", error);
    }
}
getData();
