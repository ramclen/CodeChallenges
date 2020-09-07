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

    const maxSliceLength = integerSequence.reduce((prevResult, element, i) => {
      let nextSlice = integerSequence.slice(i + 1, integerSequence.length);
      let sliceLength = sliceLengthFor(element, nextSlice);
      return (prevResult < sliceLength)? sliceLength : prevResult;
    }, 0)

    function sliceLengthFor(value, slice){
      const values = [value];
      let counter = 1;
      for (let i = 0; i < slice.length; i++) {
        if (!values.includes(slice[i])) {
          values.push(slice[i]);
        }
        if(values.length === 3) {
          break;
        } 
        counter ++;
      }
      return counter;
    }

    console.log(maxSliceLength);
  }

processIntegerSequence();
});
