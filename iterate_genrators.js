function* createCounter() {
  yield 1
  yield 2
  yield 3
  yield 4
}

const counter = createCounter()

//iteration using for of loop
// for of loop pauses and resumes the generator automagically
for(let i of counter) {
  console.log(i)
}
