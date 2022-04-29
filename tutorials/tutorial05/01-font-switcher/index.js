let currentFont = 1.3;


const makeBigger = (content) => {
   currentFont += 0.2;
   setFont();
};

const makeSmaller = (content) => {
   currentFont -= 0.2;
   setFont();
};

const setFont = () => {
   document.querySelector("div.content").style.fontSize = `${currentFont}em`;
   document.querySelector("h1").style.fontSize = `${currentFont+0.4}em`;
};

document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);
