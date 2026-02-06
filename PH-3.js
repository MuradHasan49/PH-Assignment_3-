//   /*function signature/sample */
//   function newPrice(currentPrice, discount) {

//       let isValid = (typeof currentPrice === 'number' && typeof discount === 'number' && discount >= 0 && discount < 100);

//       if (!isValid) {
//           return "Invalid"
//       } else {
//           let cal = (currentPrice * discount) / 100;
//           let result = currentPrice - cal;
//           return result.toFixed(3);
//       }
//   }

//   let result = newPrice(2000, 15)
//   console.log(result)






//  /*function signature/sample */
//  function validOtp(otp) {
//      let isOk = (typeof otp == 'string' && otp.length <= 9 )
//      if (!isOk) {
//          return "Invalid"
//      } else if ( otp.startsWith("ph-") == false || otp.length < 8) {
//          return false
//      }else{
//          return true
//      }
//  }

//  let re = validOtp("ph-12345")
//  console.log(re)





// /*function signature/sample */
// function finalScore(omr) {
//     let add = omr.wrong + omr.right + omr.skip
//     let rightAnsMark = omr.right * 1
//     let worngMark = omr.wrong * 0.5
//     let resultIs = rightAnsMark - worngMark

//     let con = (typeof omr == 'object' && add == 100)
//     if (!con) {
//         return "Invalid"
//     } else {
//         return Math.round(resultIs)
//     }
// }


// let omrResult = finalScore({ right: 80, wrong: 25, skip: 0 })
// console.log(omrResult)
