init_number()
const request_ele = document.querySelector('#request')
const number_list = [... document.querySelectorAll('.number')]
const mover = document.querySelector('.mover')

let centers = []
let pos = 0
let request = 1

request_ele.textContent = 'Find: '+request

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

function init_number() {
    const numbers = document.querySelector('#numbers')
    let numbers_str = ``
    for (let i = 0; i < 100; i++) {    
        numbers_str += /*html*/ `
            <div class="number" data-i="${zeros(i)}">
                ${zeros(rand[i])}
            </div>
        `
    }
    numbers.innerHTML = numbers_str
}


onkeydown = e => {
    const arrowKeys = {
        ArrowUp: () => (pos < 10)? pos+=90:pos-=10,
        ArrowDown: () => (pos > 89)? pos-=90:pos+=10,
        ArrowLeft: () => (zeros(pos)[1] == 0)? pos+=9:pos-=1,
        ArrowRight: () => (zeros(pos)[1] == 9)? pos-=9:pos+=1,
        Enter: () => {
            if (rand[pos]==request) {
                request++
                request_ele.textContent = 'Find: '+request
                number_list[pos].style.color = '#d70000'
            }
        }
    };
    if (arrowKeys[e.key]) arrowKeys[e.key]();
    slide(pos, centers)
}


onresize = number_location
number_location()
function number_location() {
    console.log('mmm');
    centers = []
    number_list.forEach(num => {
        let properties = num.getBoundingClientRect()
        centers.push({
            x: properties.left+(properties.width/2),
            y: properties.top+(properties.height/2)
        })
    })
    slide(pos, centers)   
}

function slide(pos, centers) {
    mover.style.top = centers[pos].y+'px'
    mover.style.left = centers[pos].x+'px'
}
  
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (i=0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
  