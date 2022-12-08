let quote = document.querySelector(".quote");

let author = document.querySelector(".author");

const url = `https://zenquotes.io/api/quotes/[your_key]`;

const getQuote = async () => {
    try{
        const response = await fetch(url);

        if(response.ok){
            const jsonResponse = await response.json();
            return JSON.parse(jsonResponse);
        }
    }catch(err){
        console.log(err);
    }
};

console.log(getQuote());

quote.innerHTML = "“Do what you can, with what you have, where you are.”";
author.textContent =  ` ―Theodore Roosevelt.`;