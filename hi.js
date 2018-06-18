////////////////// Map() vs map vs Set() vs set

let mappy = new Map() 
// not array.map
// a data structure similar to an object that holds key:value pairs

mappy.set('name', 'Greg')
mappy.get('name') // returns 'Greg'
mappy.delete('Greg')
mappy.size // returns the number of elements in the Map
mappy.clear() // clears the Map
mappy.has('Greg') // returns a boolean


/* What's the point? */
// pairs are always in order like an array.
// has some other quirks like the fact the element's key can be any value such as
// a function or another object, as compared to only being able to use strings or symbols
// you can get the size of the map easily with mappy.size, as opposed to counting the props manually


let setOfThings = new Set()
// data structure similar to an array that ignores duplicates
// node stuff

setOfThings.add(1)
setOfThings.size // returns the number of elements in the Set. 
setOfThings.length // = 0 for some reason
setOfThings.delete(1)
setOfThings.clear() // clears the set
setOfThings.has(1) // returns a boolean