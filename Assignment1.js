//1
// function convert(min){
//     return min*60;
// }

// console.log(convert(5));
// console.log(convert(3));
// console.log(convert(2));


//2
// function dividesEvenly(a,b){
//      if(a%b == 0){
//          return true;
//      }else{
//          return false;
//      }
// }

// console.log(dividesEvenly(98,7));
// console.log(dividesEvenly(85,4));

                 /* EASY */

//1
// function charCount(char, str){

//       return str.split(char).length-1;
// }

// console.log(charCount("a", "edabit"));
// console.log(charCount("c", "Chamber of secrets"));
// console.log(charCount("b", "big fat bubble"));


//2
// function addUp(num){

//     if(num>1 && num<1000)
//     {
//         var count=0;
//         for(var i=1;i<=num;i++){
//            count+=i;
//         }
//         return count;
//     }
// }

// console.log(addUp(600));

//3
// function replaceVowel(str){

//     var s= str.split('');

//     for( var i=0; i< s.length ; i++){

//         switch (s[i]) {
//             case 'a':
//                 s[i]=1;
//                 break;
//             case 'e':
//                 s[i]=2;
//                 break;
//             case 'i':
//                 s[i]=3;
//                 break;
//             case 'o':
//                 s[i]=4;
//                 break;
//             case 'u':
//                 s[i]=5;
//                 break;
//             default:
//                 break;
//         }
//     }

//     console.log(s.join(''));
// }

// replaceVowel("karachi");
// replaceVowel("chembur");
// replaceVowel("Khandbari");

            /* MEDIUM */

//1 NOT dont****
// function specialReverse(str, char){
//      let  arr=[];
//      arr= str.split(" ");

//      for(var i=0 ;i< arr.length ; i++)
//      {
//          if(arr[i].substr(0,1) == char){
//              let newarr = arr[i].split("");
//              arr[i]=newarr.reverse().join("");
//          }
//      }
//    return arr.join(" ");
    
       
// }
// console.log(specialReverse("word searches are super fun", "s"));
// console.log(specialReverse("first man to walk on the moon", "m"));
// console.log(specialReverse("peter piper picked pickled peppers", "p"));


//2
// function testJackpot(arr){

    
//     for(var i=0;i<arr.length-1;i++)
//     {
//         if(arr[i]!=arr[i+1])
//         {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(testJackpot(["@","@","@","@"]));
// console.log(testJackpot(["abc","abc","abc","abc"]));
// console.log(testJackpot(["SS","SS","SS","SS"]));
// console.log(testJackpot(["&&","&","&&&","&&&&"]));
// console.log(testJackpot(["SS","SS","SS","Ss"]));

//3
// function removeDups(arr){
//   return arr.filter((value,index) => arr.indexOf(value) === index);
//   return [...new Set(arr)]
  
// }

// console.log(removeDups([1,0,1,0]));
// console.log(removeDups(["The","big","cat"]));
// console.log(removeDups(["John","Taylor","John"]));

               /* HARD */
// function realType(value){
//     var toString = Object.prototype.toString.call(value); 
//     return toString.replace("[object","").replace("]","");
  
// }

// console.log(realType(1));
// console.log(realType("a"));
// console.log(realType(true));
// console.log(realType([]));
// console.log(realType(null));

//console.log(Object.prototype.toString.call(null));

//2 Not done


function numInStr(arrStr){
    let newArr=[];
  for(var i=0;i< arrStr.length;i++)
  {
      var tempArr=arrStr[i].split("");

      for(var j=0; j< tempArr.length ;j++)
      {
          if(tempArr[j] >= 0 && tempArr[j] <= 9){
                 newArr.push(tempArr.join("")); 
                 break;  
          }
      }
  }
  return newArr; 

}
console.log(numInStr(["1a","a","2b","b"]));
console.log(numInStr(["abc","abc10"]));
console.log(numInStr(["this is a test","test1"]));