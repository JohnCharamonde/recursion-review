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


// var getElementsByClassName = function (className) {
//   var matchingElements = [];

//   // if (document.body !== null && document.body !== undefined) {
//     var allDivs = Object.entries(document.body.getElementsByTagName('div'));
//   // }
//   console.log(allDivs)
//   if (allDivs.length !== 0 && allDivs !== undefined) {
//     for (let i = 0; i < allDivs.length; i++) {
//       if (allDivs[i].childNodes.length > 0) {
//         getElementsByClassName(allDivs[i]);
//       } else if (allDivs[i].className === className) {
//         matchingElements.push(allDivs[i]);
//       }
//     }
//   }

//   return matchingElements;
// };

// console.log(getElementsByClassName('targetClassList'))

var getElementsByClassName = function (className) {
  var matchingElements = [];

   if (document.body !== null && document.body !== undefined) {
    var allDivs = Object.entries(document.body.getElementsByTagName('div'));
   }
  // console.log(allDivs)
  // if (allDivs.length !== 0 && allDivs !== undefined) {
  //   for (let i = 0; i < allDivs.length; i++) {
  //     if (allDivs[i].childNodes.length > 0) {
  //       getElementsByClassName(allDivs[i]);
  //     } else if (allDivs[i].className === className) {
  //       matchingElements.push(allDivs[i]);
  //     }
  //   }
  // }

  for (var i=0; i<allDivs.length; i++) {
    // console.log(allDivs[i])
  //  for (var j=0; j<allDivs[i].length; j++) {
     if(allDivs[i][1].classList.contains('targetClassName') === true) {
       console.log(allDivs[i][1])
    //  console.log(allDivs[i][1].className)
     matchingElements.push(allDivs[i][1])
    //  }

   }



  }

  // return matchingElements;
  console.log(matchingElements)
};

console.log(getElementsByClassName('targetClassList'))