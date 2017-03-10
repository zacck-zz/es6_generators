function* create3to4Counter() {
  yield 3
  yield 4
}


function* createCounter() {
  yield 1
  yield 2
  yield* create3to4Counter() //so here we hand over control to the other generator ... //img loading 
  yield 5
}




//iterate
for(let i of createCounter()) {
  console.log(i)
}
