
const ulElem = document.querySelectorAll(".item");

console.log(`Number of categories: ${ulElem.length}`);

ulElem.forEach(elem => {
    
    const titleElem = elem.querySelector("h2").textContent;
    const countElem = elem.querySelectorAll("li").length;
    
    console.log(`Category: ${titleElem}`);
    console.log(`Elements: ${countElem}`);
});
