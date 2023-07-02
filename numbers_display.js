const numbers = document.querySelector('#numbers')
for (const rand of random) {
    numbers.innerHTML += `
        <div class="number">${rand}</div>
    `
}