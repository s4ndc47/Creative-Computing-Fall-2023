sampleText = "this is the text I want to replace the element with";

makeElement("123test", 'div');

function makeElement(txt, elementType) {

    let newParagraph = document.createElement("p");

    newParagraph.innerHTML = txt;

    newParagraph.classList.add("new-text-element");

    let container = document.querySelector(".container");

    container.appendChild(newParagraph);
}

makeElement("123text", 'div');

function makeElement(txt, elementType) {
    let newParagraph = 
}

for (let i=0; i<100; i++){
    makeElement("123text", 'div');
}
