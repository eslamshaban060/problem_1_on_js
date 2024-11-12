// !!!!!!!!!!!!!!!!!!!!!!!!!! PROBLEM _ ONE !!!!!!!!!!!!!!!!!!!!!!!!!!

// https://www.codewars.com/kata/65128732b5aff40032a3d8f0


// ========================= METHODE ONE =====================


// function neutralise(s1, s2) {
//     let array_of_s1 = s1.split("")
//     let array_of_s2 = s2.split("")
//     let result = ""

//     // ===================== condtions ====================

//     for(let i = 0 ; i < array_of_s1.length ; i++ ){


//         let x = array_of_s1[i]
//         let y = array_of_s2[i]


//         if(x === y ){
            
//             result += x

//         }else{
//             result +=0
//         }


//     }

//     // ===================== condtions ====================

//     return result;
// }



// ========================= METHODE TOW =====================

// function neutralise(s1, s2){

//     let result = ""
//     // ======================= condation =======================

//         for(let i = 0 ; i< s1.length ; i++){

//             x = s1.charAt([i])
//             y = s2.charAt([i])
//             if(x === y ){
//                 result += x
//             }else{
//                 result += 0
//             }
      
            
//         }

//     // ======================= condation =======================


//     return result 

// }



// =========================== METHOD 3 =========================


// function neutralise(s1, s2){
//     let result = ""

//    let out_object = {

//     "++" : "+",
//     "--" : "-",
//     "+-" : "0",
//     "-+" : "0",
//    }



// //    ==================== conditon ==================
//    for(let x = 0 ; x < s1.length ; x++ ){

//         value = s1[x] + s2[x]


//         result += out_object[value]
    
//    }



// return result

// //    ==================== conditon ==================

// }


// console.log(neutralise("-+-+-+", "-+-+-+"))
