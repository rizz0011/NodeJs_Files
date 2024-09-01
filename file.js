const  fs = require('fs')


//sync
fs.writeFileSync("./test.txt", "First node js file")

//async
fs.writeFile('./test.txt', 'new file with async', (err) => console.log(err))

//sync
const result = fs.readFileSync("./contact.txt", "utf-8")
console.log(result)

//async

fs.readFile("./contact.txt", "utf-8", (err, res) => {
    if(err){
        console.log(err)
    }
    else{
        console.log(res)
    }
})



//sync 

fs.appendFileSync('./test.txt', `new line`)

fs.unlinkSync("./contact.txt")



// Blocking operation and non Blocking operation

// Blocking / sync

console.log('1')
const result1 = fs.readFileSync('./test.txt', 'utf-8')
console.log(result1)
console.log('2')


// Non- Blocking / async

console.log('1')
fs.readFile("./test.txt", 'utf-8', (err, res) => {
    console.log(res)
})
console.log('2')
