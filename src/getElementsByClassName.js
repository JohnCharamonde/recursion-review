// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
// var getElementsByClassName = function(className // div
// ) {
//   // your code here
//   var classList = document.body.element.classList;


//   document.body, element.childNodes, and element.classList
// };

// body

// input: string;
// output: array-like Object of all child elements;


// function

// variable = output - empty array

// function () {

//   modifies the output pushing corrct values to output
//   or calling itself on smaller portion
// }

// call inside function (className)

// retuern output


var getElementsByClassName = function(className) {
    var matchingElements = [];
    var classList = document.body.querySelectorAll('div')

    var inner = function(element) {
      if(Array.isArray(element)) {
        getElementsByClassName(element)
      }

      if(element.className === className) {
        matchingElements.push(element);
      }
    }

    for(let i = 0; i < classList.length; i++) {
      inner(element);
    }

    return matchingElements;
  };

  console.log(getElementsByClassName("targetClassName"));