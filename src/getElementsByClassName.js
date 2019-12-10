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

// var getElementsByClassName = function (className) {
//   var matchingElements = [];

//  if (document.body !== null && document.body !== undefined) {
//   var allDivs = Object.entries(document.body.getElementsByTagName('div'));
//  }

//   // if (allDivs.length !== 0 && allDivs !== undefined) {
//   //   for (let i = 0; i < allDivs.length; i++) {
//   //     if (allDivs[i].childNodes.length > 0) {
//   //       getElementsByClassName(allDivs[i]);
//   //     } else if (allDivs[i].className === className) {
//   //       matchingElements.push(allDivs[i]);
//   //     }
//   //   }
//   // }

//   for (var i=0; i<allDivs.length; i++) {
//     // console.log(allDivs[i])
//   //  for (var j=0; j<allDivs[i].length; j++) {
//     console.log('in question', allDivs[i][1].classList)


//      if(allDivs[i][1] && allDivs[i][1].classList.contains('targetClassName') === true) {
//      matchingElements.push(allDivs[i][1])
//     } else if (allDivs[i].hasChildNodes()) {
//       console.log('hi')
//     }
//   }
//   // return matchingElements;
//   console.log(matchingElements)
// };









// var getElementsByClassName = function (className) {
//   var matchingElements = [];

// if (document.body !== null && document.body !== undefined) {
//   var allDivs = Object.entries(document.body.getElementsByTagName('div'))
//   var allSpans = Object.entries(document.body.getElementsByTagName('span'))
// }


//   // if (allDivs.length !== 0 && allDivs !== undefined) {
//   //   for (let i = 0; i < allDivs.length; i++) {
//   //     if (allDivs[i].childNodes.length > 0) {
//   //       getElementsByClassName(allDivs[i]);
//   //     } else if (allDivs[i].className === className) {
//   //       matchingElements.push(allDivs[i]);
//   //     }
//   //   }
//   // }

//   // console.log(allDivs)

//   // console.log(allDivs)
//   // console.log(allDivs[2][1])
//   // console.log(allDivs[2][1].className)

//   for (var i = 0; i < allDivs.length; i++) {
//      if(allDivs[i][1] && allDivs[i][1].classList.contains(className) === true) {
//       if (allDivs[i][1].className !== className) {
//         getElementsByClassName(allDivs[i][1])
//       } else {
//         matchingElements.push(allDivs[i][1]);
//       }
//     }
//   }

//   for (var i = 0; i < allSpans.length; i++) {
//     if(allSpans[i][1] && allSpans[i][1].classList.contains(className) === true) {
//      if (allSpans[i][1].className !== className) {
//        getElementsByClassName(allSpans[i][1])
//      } else {
//        matchingElements.push(allSpans[i][1]);
//      }
//    }
//  }
//   console.log(matchingElements)

//   return matchingElements;
// };

// getElementsByClassName('targetClassList')

var getElementsByClassName = function (className) {
  var matchingElements = [];

  var pushElements = function (element) {

    if (element.classList && element.classList.contains(className)) {
      matchingElements.push(element);
    }

    if (element.hasChildNodes()) {
      for (let i = 0; i < element.childNodes.length; i++) {
        pushElements(element.childNodes[i]);
      }
    }
  }

  pushElements(document.body);

  return matchingElements;

}

