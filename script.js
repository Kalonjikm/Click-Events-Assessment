const fooButton = document.querySelector("#foo");
const barButton = document.querySelector("#bar");
const foobarButton = document.querySelector("#foobar");


const main = document.querySelector("main");


fooButton.addEventListener('click', function(event) {
    const fooResponse = document.createElement('h3');
    fooResponse.textContent = "Foo";
    main.appendChild(fooResponse);
});

barButton.addEventListener('click', function(event) {
    const barResponse = document.createElement('h3');
    barResponse.textContent = "Bar";
    main.appendChild(barResponse);
});

foobarButton.addEventListener('click', function(event) {
    const foobarResponse = document.createElement('h2');
    foobarResponse.textContent = "FooBar";
    main.appendChild(foobarResponse);
});
