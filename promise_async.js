'use strict'
//url for resource
const url = 'http//api.forismatic.com/api/1.0/?method=getQoute&lang=en&format=json'

//for fetch
const fetch = require('node-fetch')

function createQuoteFetcher() {
  //fetch a quote pause until fetch completes
  const response = yield fetch(url)
  //consume the quote
  const quote = yield response.json()
  return `${quote.quoteText} - ${quote.qouteAuthor}`
}


const coroutine =  (gen) => {
  const generator = gen()
  const handle = (result)=> {
    //is our generator done?
    if(result.done) return Promise.resolve(result.value)
    //no keep walking through
    return Promise.resolve(result.value)
    .then(res => handle(generator.next(res)))
  }
  //start generator
  return handle(generator.next())
}

//run promise on generator
const quoteFetcher = coroutine(createQuoteFetcher)
quoteFetcher.then(quote => console.log(quote))
