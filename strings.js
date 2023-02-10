// let exampleString = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32." 

//an example of escaping qoutes
// let ex_string = "This is a random string with no qoutes";
// ex_string = "This is a random string with \"double qoutes\" qoutes";
// ex_string = "This is a random string with \'double qoutes\' qoutes";
// // ex_string = 'This is a random string with \"double qoutes\" qoutes';
// console.log(ex_string);

// console.log(exampleString.length);//length of string , notice how this is not a function or method

// console.log(exampleString[-2]);// this returns undefined, therefore use this methos in that case:
// console.log(exampleString.at(-2));//string.at() returns character in reverse order on negative input, i.e. -2 gets second last character

// for(let char of exampleString){ //we can loop through each character in a string using for..of loop
//     console.log(char);
// }

//STRINGS ARE IMMUTABLE
//example
// exampleString[0] = 'ZZZZZ'// doesn't work
// console.log(exampleString);// it will return the same string

// console.log(exampleString.toUpperCase());// returns the string with each character in upperCase

//SUBSTRING

// console.log(exampleString.indexOf('psum'));

//////////////////////////////////////////////////////////////////////////////////////////////////////
//JS string questions

//1. Write a JavaScript function to check whether an `input` is a string or not.
//first solution
// function isString(input){
//   let a = "abc";
//   if(typeof(input) == typeof(a)){
//     return true;
//   }else{
//     return false;
//   }
// };
//second solution
// function is_string(input) {
//   if (Object.prototype.toString.call(input) === '[object String]')
//     return true;
//   else
//     return false;   
//     };

// let result = isString([2,4,1]);
// console.log(result);

//2. Write a JavaScript function to check whether a string is blank or not.
// function isBlank(input){
//   if(input.length == 0){
//     return true;
//   }else{
//     return false;
//   }
// }

// let result = isBlank(" ");
// console.log(result);

//3. Write a JavaScript function to split a string and convert it into an array of words.
// function splitToArrayOfWords(input){
//   let splittedString = input.trim().split(" ");
//   return splittedString;
// } 

// let result = splitToArrayOfWords("Robin Singh");
// console.log(result);

// Write a JavaScript function to extract a specified number of characters from a string.
// function truncateString(input, numberOfChar){
//   let truncated = input.slice(0,numberOfChar);
//   return truncated;
// }

// let result = truncateString("thewhite", 3);
// console.log(result);

//5. Write a JavaScript function to convert a string in abbreviated form.
// function abbreviateString(name){
//   let splitNames = name.trim().split(" ");
//   console.log("splitNames", splitNames);
//   if(splitNames.length > 0 ){
//     return splitNames[0] + " " + splitNames[1].charAt(0)+ "."
//   }

//   return splitNames[0];
// }

// let result = abbreviateString("Robin Singh");
// console.log(result);

//6. Write a JavaScript function to hide email addresses to protect from unauthorized user.
//name123@example.com
// function hideEmail(email){
//   let emailName = email.trim().slice(0, email.indexOf('@'));
//   let avgLength = (emailName.length)/2;
//   let truncatedEmail = email.trim().slice(0, email.indexOf('@') - avgLength)
//   let newEmail = truncatedEmail + "..." + email.slice(email.indexOf('@'))
//   return newEmail
// }

// console.log(hideEmail("acd@sb.com"));

//7. Write a JavaScript function to parameterize a string.
//parameterize example: Robin Singh from USA --> robin-singh-from-usa
// function parameterizedString(input){
//   let newInput = input.toLowerCase().split(" ").join("-")
//   console.log(newInput);
// }

// console.log(parameterizedString("Robin Singh from USA"));

//9. Write a JavaScript function to capitalize the first letter of each word in a string.
//first solution
// function capitalizeFirstLetter(input){
//   return input.replace(/\w\S*/g, function(txt){
//     return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
// }

//second solution
// function capitalizeFirstLetter(input){
//   let splitArray = input.split(" ");
//   let arrayInput = splitArray.map((word) => {
//     let first_letter = word[0].toUpperCase();
//     let new_word = word.replace(word[0], first_letter)
//     return new_word
//   })
//   arrayInput = arrayInput.join(" ");
//   return arrayInput
// }

// console.log(capitalizeFirstLetter("mera joota hai japani"));

//10. Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and 
//converts upper case letters to lower case, and lower case letters to upper case.

// function swapcase(input){
//   let new_string = "";
//   for(let letter of input){
//     if(letter == letter.toUpperCase()){
//       letter = letter.toLowerCase();
//     }else{
//       letter = letter.toUpperCase();
//     }
//     new_string += letter
//   };
//   return new_string;
// };

// console.log(swapcase("AaBbcvcvcvWWWW"));

//11. Write a JavaScript function to convert a string into camel case
// function camelize(input){
//   let arrayOfInput = input.split(" ");
//   arrayOfInput[]
// }

// console.log(camelize("JavaScript Exercises"));

//12. 12. Write a JavaScript function to uncamelize a string.
// function unCamelize(input, separator){
// for(letter of input){
//     if(!separator){
//         if(letter.toUpperCase()){
//             console.log("input after joining",input);
//             input = input.toLowerCase();
//         }
//     }
// }
// }

// console.log(unCamelize("JavaScriptExercises"));

//13. Write a JavaScript function to concatenates a given string n times (default is 1).
// function repeat(input,n){
//     for(let i = 0; i < n; i++){
//         input += input;
//         i++;
//     }
//     return input;
// }

// console.log(repeat("JS",2));

//14. Write a JavaScript function to insert a string within a string at a particular position (default is 1).

// function insert(input, insertInput, position){
//     if(!position){
//         position = 0;
//     }
//     if(!insertInput){
//         insertInput = " ";
//     }
//     let inputSliced = input.slice(0, position);
//     console.log("inputSliced ->",inputSliced);
//     let b = inputSliced + insertInput;
//     console.log("b ->", b);
//     let c = input.slice(position);
//     console.log("c ->",c);   
//     return c;
// }

// console.log(insert("JS","I love", 1));


//15. Write a JavaScript function to humanized number (Formats a number to a human-readable string)
// with the correct suffix such as 1st, 2nd, 3rd or 4th

// function humanize_format(number){
//     let suffix;
//     number = number.toString();
//     let last_digit = number.slice(-1);
//     console.log(last_digit);
//     if(last_digit == 2){
//         suffix = "nd"
//     }else if(last_digit == 1){
//         suffix = "st";
//     }else if(last_digit == 3){
//         suffix = "rd";
//     }else{
//         suffix = "th";
//     }
//     return number+suffix;
// }
// console.log(humanize_format(324231));

// Write a JavaScript function to truncates a string if it is longer than the specified number of characters.
//Truncated strings will end with a translatable ellipsis sequence ("…") (by default) or specified characters



