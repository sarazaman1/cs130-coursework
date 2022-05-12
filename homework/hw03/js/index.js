/**
 * 
 * -------------------------------------
 * DOM Manipulation / Traversal Activity
 * -------------------------------------
 * 
 * 1. Create and attach an event handler (function) to each ".image" 
 * element so that when the ".image" element is clicked, the corresponding 
 * image loads in the .featured image element.
 * 
 * 2. Create event handlers for the next and previous buttons. The next button should
 *    show the next image in the thumbnail list. The previous should show the previous.
 * 
 * 3. If you get to the end, start at the beginning. 
 * 
 * 4. If you get to the beginning, loop around to the end.
 * 
 * 
 */
let currentIndex = 0;

const images = [
    'images/field1.jpg',
    'images/purple.jpg',
    'images/jar.jpg',
    'images/green.jpg',
    'images/green1.jpg',
    'images/purple1.jpg',
    'images/magnolias.jpg',
    'images/daisy1.jpg'
];

const initScreen = () => {
    images.forEach((image, idx) => {
        document.querySelector('.cards').innerHTML += `
        <li class="card">
            <button onclick="showImage(event)" class="image" 
                style="background-image:url('${image}')"
                data-index=${idx}"
                aria-label="Displays image ${idx} in the main panel."></button>
        </li>`;
    });

    document.querySelector('.next').onclick = showNext;
    document.querySelector('.prev').onclick = showPrev;
    document.querySelector('.featured_image').onclick = showNext;


};

const showImage = (ev) => {
    console.log(ev);
    const elem = ev.currentTarget;
    console.log(elem.style.backgroundImage);
    document.querySelector('.featured_image').style.backgroundImage = elem.style.backgroundImage;
    currentIndex = parseInt(elem.dataset.index);
};

const showNext = (ev) => {
    currentIndex += 1;
    console.log("currentIndex:", currentIndex);
    console.log(images[currentIndex])
    let image = "url('" + images[currentIndex % 8] + "')"
    console.log(image)
    document.querySelector('.featured_image').style.backgroundImage = image
};

const showPrev = (ev) => {
    currentIndex -= 1;
    if (currentIndex < 0) currentIndex += 8
    console.log("currentIndex:", currentIndex);
    console.log(images[currentIndex])
    let image = "url('" + images[currentIndex % 8] + "')"
    console.log(image)
    document.querySelector('.featured_image').style.backgroundImage = image
};




initScreen();