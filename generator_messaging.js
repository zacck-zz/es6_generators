function* createHello() {
  //message from generator to our instance from our creatore
  //yield 'first response'
  const word = yield
  console.log(word)
}

const hello = createHello()
console.log(hello.next())
console.log(hello.next('Zacck'))
