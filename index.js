function shout(string) {
  return string.toUpperCase()
  
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log('HELLO')
}

function logWhisper(string) {
  console.log('hello')
}
function sayHiToGrandma(string) {
  var lowerCase = 'hello'
  var upperCase = 'HELLO'
  var mixedCase = 'Hi there'
  if ((string = lowerCase))
    return "I can't hear you!"


  if ((string = upperCase))
     return "YES INDEED!"

  if ((string = mixedCase))
    return "I love you, too."
}