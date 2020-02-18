const multiples = [
  {multiple: 3, value: 'Fizz'}, 
  {multiple: 5, value: 'Buzz'}
]

function isMultiple(multiple, number) {
  return number % multiple === 0;
}

function fizzbuzz(number) {
  const result = multiples.reduce((prev, current)=> {
    return prev + isMultiple(current.multiple, number)?current.value : '';
  }, '')
  return result===''? number : result;
}

