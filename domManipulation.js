const container = document.querySelector('#container');
const paragraph = document.createElement("p");
const header3 = document.createElement("h3");
const blackDiv = document.createElement('div');
const header1 = document.createElement('h1');
const paragraph2 = document.createElement('p');

header3.textContent = 'I\'m a blue h3!';
header3.style.color = 'blue';
paragraph.textContent = 'Hey Im red!';
paragraph.style.color = 'red';
blackDiv.style.borderColor = 'black';
blackDiv.style.backgroundColor = 'pink';
header1.textContent = 'I\'m in a div!';
paragraph2.textContent ='ME TOO!';

blackDiv.appendChild(header1);
blackDiv.appendChild(paragraph2);
container.appendChild(blackDiv);
container.appendChild(header3);
container.appendChild(paragraph);