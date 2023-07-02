let ordered = Array.from(Array(100).keys(), i=>i+1)
let random = []

for (let i = 0; i < 100; i++) {
    let index = Math.floor(Math.random()*ordered.length)
    random.push(ordered[index])
    ordered.splice(index,1)
}

console.log(random)