const quoteDisplay = document.querySelector(".ranQuoteGoesHere");
const fullNameDisplay = document.querySelector(".fullName");
const buttonDisplay = document.querySelector("#newQuote");
const parQuoteDisplay = document.createElement("p");
const parNameDisplay = document.createElement("p");

const quotes = [{
    quote: `"In a gentle way, you can shake the world."`,
    name: `Mahatma Gandhi`
}, {
    quote: `"The first principle is that you must not fool yourself, and you are the easiest person to fool."`,
    name: `Richard Feynman`
}, {
    quote: `"Compare yourself to who you were yesterday, not to who someone else is today."`,
    name: `Jordan B. Peterson`
}, {
    quote: `"What you most want to be found will be found where you least want to look."`,
    name: `Carl G. Jung`
}, {
    quote: `"Twenty years from now you will be more disappointed by the things that you didn't do than by the things you did."`,
    name: `Mark Twain`
}, {
    quote: `"Aim at something. Discipline yourself. Or suffer the consequence. And What is that consequence? All the suffering of life. With
    none of the meaning. Is there a better description of HELL?."`,
    name: `Jordan B. Peterson`
}, {
    quote: `"Many men go fishing all of their lives without knowing that it is not fish they are after."`,
    name: `Henry D. Thoreau`
}, {
    quote: `"You're going to pay a price for every bloody thing you do and everything you don't do. You don't get to choose
    to not pay a price. You get to choose which poison you're going ot take. That's it."`,
    name: `Jordan B. Peterson`
}, {
    quote: `"It seems, in fact, as though the second half of a man's life is made up of nothing,
    but the habits he has accumulated during the first half."`,
    name: `Fyodor Dostoyevsky`
}, {
    quote: `"How big would you dream if you knew you couldn't fail?."`,
    name: `Unknown`
}, {
    quote: `"A seed grows with no sound but a tree falls with huge noise. Destruction has noise,
    but creation is quiet. This is power of silence... Grow Silently."`,
    name: `Confucius`
}, {
    quote: `"A harmless man is not a good man. A good man is dangerous man, who has that under control."`,
    name: `Jordan B. Peterson`
}, {
    quote: `"People take different roads seeking fulfillment and happiness. Just because they're not on your road
    does not mean they are lost."`,
    name: `Dalai Lama`
}, {
    quote: `"It is not knowledge, but the act of learining, not possession, but the act of getting there which 
    generates the greatest satisfaction."`,
    name: `Carl F. Gauss`
}, {
    quote: `"I cannot remember the books I've read any more than the meals I have eaten; even so, they have made me."`,
    name: `Ralph W. Emerson`
}, {
    quote: `"Education is not the filling of a pail, but the lightight of a fire."`,
    name: `W.B. Yeats`
}, {
    quote: `"Would you rather be at war with the world & at peace within, or be at peace with the world & at war with yourself?."`,
    name: `Unknown`
}, {
    quote: `"Sometimes people don't want to hear the truth because they don't want their illusions destroyed."`,
    name: `Friedrich Nietzsche`
}, {
    quote: `"He who has a why to live for can bear almost any how."`, 
    name: `Friedrich Nietzsche`
}, {
    quote: `"No tree can grow to Heaven, Unless its roots reach down to Hell."`,
    name: `Carl G. Jung`
}];

buttonDisplay.addEventListener("click", () => {

    let random = Math.floor(Math.random() * quotes.length);

    quoteDisplay.style.margin = 0
    parQuoteDisplay.style.margin = 0;
    quoteDisplay.textContent = quotes[random].quote;
    quoteDisplay.appendChild(parQuoteDisplay)

    parNameDisplay.style.fontWeight = 550;
    parNameDisplay.style.margin = 0;
    parNameDisplay.textContent = quotes[random].name;
    fullNameDisplay.appendChild(parNameDisplay)
})