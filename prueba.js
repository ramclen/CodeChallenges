process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
process.stdin.on("data", function (chunk) {
  input += chunk;
});
process.stdin.on("end", function () {

  function processIntegerSequence() {

    var integerSequence = input.split(',')
      .filter(function (x) {
        return x.length > 0;
      })
      .map(Number);

    let accumulator = [];

    for (let i = 0; i < integerSequence.length; i++) {
      let nextSlice = integerSequence.slice(i + 1, integerSequence.length);
      let sliceLength = sliceLengthFor(integerSequence[i], nextSlice);
      accumulator.push(sliceLength);
    }

    function sliceLengthFor(value, slice){
      const values = [value];
      let counter = 1;
      for (let j = 0; j < slice.length; j++) {
        counter++;
        if (!values.includes(slice[j])) {
          if (values.length !== 2) {
            values.push(slice[j]);
          } else {
            return counter-1;
          }
        }
      }
      return counter;
    }

    console.log(accumulator.sort((a, b) => b - a)[0]);
  }

  processIntegerSequence();
});
