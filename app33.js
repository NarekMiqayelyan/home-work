//1 grel function vor@ stanum e a, b,u   callback function  ogtagorcel callback function@ et functioni mej. is callback function@ sum hashviox function a.

function f(a, b, cb) {
  return cb(a, b);
}

console.log(
  f(15, 25, function (a, b) {
    return a + b;
  })
);

//2unenq 2array grel function vor@ kveradarnci dranc tarberarutyunner@.
//arr1 = [5, 6, 7], arr2 = [10, 5, 7, 11]  veradarcni => [10, 11]

// function difference(arr1, arr2) {
//   let result = [];
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr2.indexOf(arr1[i]) === -1) {
//       result.push(arr1[i]);
//     }
//   }
//   for (i = 0; i < arr2.length; i++) {
//     if (arr1.indexOf(arr2[i]) === -1) {
//       result.push(arr2[i]);
//     }
//   }
//   return result;
// }
// console.log(difference([5, 6, 7], [10, 5, 7, 11]));

// //tarberak2 filtrov u include-ov grel

// function difference1(arr3, arr4) {
//   let res = [];
//   for (let i = 0; i < arr3.length; i++) {
//     for (let j = 0; j < arr4.length; j++) {
//       if (arr3[i] === arr4[j]) {
//       res.push(arr4[j]);
//       }
//       console.log(arr3[i], arr4[j])
//     }
//   }

//   return res;
// }
// console.log(difference1([5, 6, 7], [10, 5, 7, 11]));

//тарберак 3
// function difference2(arr5, arr6) {
//   return arr5.concat(arr6).filter(function (res) {
//       if (!(arr5.includes(res) && arr6.includes(res)))
//           return res;
//   });
// }

// console.log(difference2([5, 6, 7], [10, 5, 7, 11]))

//3 grel for cikl sovorakan 10 erkarutyamb u mej@ nenc cod grel vor 2vayrkyan@ mek tpi fori index@. setTimout pti gres, voch te setinterval.debug kanes ete chashxati. hsihi vor setTimout@ verjum a asxhatum.

// for(let i = 1; i < 10; i++) {
//   setTimeout(function() {
//      console.log(i);
//   },1000*i);
// }

// promise

//   const p = new Promise(function(resolve, reject){
//     setTimeout(function(){
//       resolve(8)
//       //reject(new Error('mi ban en chi'))
//     }, 1000)
//   })

// console.log(p)

// p.then(function(result){
//   console.log(result)
// })

// p.catch(function(error){
//   console.log(error)
// })

//fetch

//1.  "https://jsonplaceholder.typicode.com/todos" es API in fetch anel u stacac data lscnel diveri mej.
// nenc vor senc lini <div> data.title </div>
//<div> data.title </div>
//<div> data.title </div>
//<div> data.title </div>
//<div> data.title </div>
//pti fetch anes datan console anes tesnes. nor mnacac gorcoxutyun@  hishi for fetch@ promise a veradarcnum.
//2.  fetch arac datani mej ete completed : false a title sarqel "none"

fetch("https://jsonplaceholder.typicode.com/todos")
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    console.log(response);
    response.forEach(el => {
      const div = document.createElement('div')
      document.body.appendChild(div) 
       div.innerText = el.title
    });
// map-ov

let newResponse = response.filter(item => item.completed === false)
 console.log(newResponse)

 newResponse.forEach(el => {
    el.title = 'none'  
 })
 console.log(newResponse)

});
 
 


