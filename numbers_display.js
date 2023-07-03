const numbers = document.querySelector('#numbers')

function zeros(number) {
    const numberString = number.toString();
  
    if (numberString.length >= 2) {
      return numberString;
    } else {
      const zerosToAdd = 2 - numberString.length;
      const paddedNumber = '0'.repeat(zerosToAdd) + numberString;
      return paddedNumber;
    }
}
  
let numbers_str = ``
for (let i = 0; i < 100; i++) {    
    numbers_str += /*html*/ `
        <div class="number" data-i="${zeros(i)}">
            ${zeros(rand[i])}
        </div>
    `
}
numbers.innerHTML = numbers_str

let pos = 0

onkeydown = e => {
    const arrowKeys = {
        ArrowUp: () => pos-=10,
        ArrowDown: () => pos+=10,
        ArrowLeft: () => pos-=1,
        ArrowRight: () => pos+=1,
    };
    if (arrowKeys[e.key]) arrowKeys[e.key]();
    slide(pos, centers)
    console.log(pos);
}

const number_list = [... document.querySelectorAll('.number')]
let centers = []
number_list.forEach(num => {
    let properties = num.getBoundingClientRect()
    centers.push({
        x: properties.left+(properties.width/2),
        y: properties.top+(properties.height/2)
    })
});
console.log(number_list);
console.log(centers);

let mover = document.querySelector('.mover')
function slide(pos, centers) {
    mover.setAttribute('style', `
        top: ${centers[pos].y}px;
        left: ${centers[pos].x}px
    `)
}