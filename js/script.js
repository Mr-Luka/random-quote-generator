const famousButton = document.querySelector("#famous-quotes");
const inspButton = document.querySelector("#inspirational");
const h1 = document.querySelector("h1.the-quote");

const getData = async function () {
    const getQuotes = await fetch("https://api.quotable.io/random");
    const data = await getQuotes.json();
    console.log(data)

}
getData();
