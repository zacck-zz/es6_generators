//to create a generator we put an asterisk after the function key word
function* createLogger() {
  //start computing
  console.log('start')
  //long calc
  //pause
  yield
  console.log('block pause')
  yield
  //end computing
  console.log('end')
}
//when you call a generator it creates an instance of itself
const logger  = createLogger()

//to execute we call .next on the generator

logger.next()
logger.next()
