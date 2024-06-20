const container = document.querySelector(".container");
const famousButton = document.querySelector("#famous-quotes");
const inspButton = document.querySelector("#inspirational");
const h1 = document.querySelector("h1.the-quote");
const author = document.querySelector("h2")
const copy = document.querySelector("img.copy");
const share = document.querySelector("img.share");

const getData = async function () {
    try {
        const getQuotes = await fetch("https://api.quotable.io/random");
        const data = await getQuotes.json();
        return {quote: data.content, author:data.author}
    }catch (error) {
        console.error("Error fetching the quote", error);
    }
}
getData();

const getInspo = async function () {
    try {
        const getInspoQuote = await fetch ("https://api.quotable.io/random");
        const data = await getInspoQuote.json();
        return {quote: data.content, author: data.author}
    }catch (error) {
        console.error("Error fetching the inspirational quote", error);
    }
}
getInspo();

const handleClick = async function() {
    const data = await getInspo();
    if (data) {
        h1.textContent = `"${data.quote}"`;
        author.textContent = `${data.author}`;
    }
}
famousButton.addEventListener("click", handleClick);
inspButton.addEventListener("click", handleClick);

const copyToClipboard = async function () {
    try {
        await navigator.clipboard.writeText(h1.textContent);
        alert("Quote copied to clipboard!");
    } catch (error){
        console.error("Error copying to clipboard", error);
    }
}
function removeShake() {
    container.classList.remove("sharePressed")
}
function shakeShare() {
    container.classList.add("sharePressed")
    setTimeout(removeShake, 400);
}

share.addEventListener("click", shakeShare)
copy.addEventListener("click", copyToClipboard);
