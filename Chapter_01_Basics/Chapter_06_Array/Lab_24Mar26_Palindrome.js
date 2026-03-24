let Str= "Madam";
let reversedStr = Str.split("").reverse().join("");
if(Str.toLocaleLowerCase() == reversedStr.toLocaleLowerCase()){
    console.log(Str + " is a palindrome."); 
}else{
    console.log(Str + " is not a palindrome.");
}

