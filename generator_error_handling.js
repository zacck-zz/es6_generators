function* createHello() {
  //get input
  //use a try block
  try {
    const word = yield
    console.log(`Hello ${word}`)
  } catch(err) {
    console.log('ERROR', err)
  }
}

const hello = createHello();
hello.next()
hello.throw('something big broke')
hello.next('Zacck')
