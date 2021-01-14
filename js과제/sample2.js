/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Question 1:
Which value does x have after
execution of the following code?
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
 
let x = "Pooh";
let y = "Tigger";
let z = y;
y = x;
x = z;

answer : x = tigger;
 
/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Question 2:
Write a function secondIndexOf, taking two strings
and determining the second occurrence of the second
string in the first string. If the search string
does not occur twice, -1 should be returned.
 
Example: secondIndexOf('White Rabbit', 'it') should return 10.
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
 
function secondIndexOf(s1, s2) {
 // Use indexOf twice.
 console.log(s1.indexOf(s2,s1.indexOf(s2)+1));
}
secondIndexOf('White Rabbit' , 'it');
 
/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Question 3:
Write a function equals that checks two values
for strict equality. If the two values are equal,
the string 'EQUAL' should be returned. If they
are unequal, you should get 'UNEQUAL'.
 
Example: equals(1, 1) should return 'EQUAL' and equals(1, 2)
should return 'UNEQUAL'.
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
 
function equals(a, b) {
 // Initialize a variable with 'UNEQUAL'.
 // Use 'if' to set the variable to 'EQUAL' if necessary.
 // Return the variable.
 if(a !== b ){
     console.log('unequal');
 }else if ( a === b ){
     console.log('equal');
 }
}
equals(1,2);
 
/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Question 4:
Write an if/else statement with the following condition:
 
If the variable age is greater than 18, output "Old enough",
otherwise output "Too young".
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
 
function age(a){
    if(a > 18){
        console.log("Old enough");
    }else{
        console.log("Too young");
    }
}
age(20);
/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Question 5:
Write a function repdigit that determines whether a two-digit
decimal is a repdigit or not. If the decimal is a repdigit,
'Repdigit!' should be returned, otherwise 'No Repdigit!'.
 
Example: repdigit(22) should return 'Repdigit!' and repdigit(23)
should return 'No Repdigit!'.
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
 
function repdigit(n) {
    let a = n % 10;
    let b = Math.floor(n / 10);
    if(a !== b){
        console.log("NO Repdigit");
    }else{
        console.log("Repdigit");
    }
 // Calculate the ones digit
 // of n with modulo 10.
 // Calculate the tens digit
 // of n by dividing by 10
 // and rounding down.
 // Compare ones and tens digits.
}
repdigit(78);
 
/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Question 6:
Write a function unequal that checks 3 values for strict inequality.
The function should return true if all three parameters are strict
unequal. Otherwise false.
 
Example: unequal(1, 2, 3) should return true and unequal(1, 1, 2)
should return false.
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
 
function unequal(a, b, c) {
 //return a !== b && ...
 if(a !== b && b !== c && a !== c){
     return true;
 }
 return false;
}
unequal(1,2,3);
 
/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Question 7:
Which of these alerts are going to execute?
 
What will the results of the expressions be inside if(...)?
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
 
if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );
 
anseawr : first, third;
 
/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Question 8:
Write the code which asks for a login with prompt.
 
If the visitor enters "Admin", then prompt for a password,
if the input is an empty line – show “Canceled”, if it’s
another string – then show “I don’t know you”.
 
The password is checked as follows:
 
If it equals “TheMaster”, then show “Welcome!”,
Another string – show “Wrong password”,
For an empty string or cancelled input, show “Canceled”
 
Refer to the schema below:
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
let user = prompt("enter user id","");
if(user === "Admin"){
    let password = prompt("enter to password");
    if(password === "TheMaster"){
        alert("Welcome");
    }else if(password === null || password === ""){
        alert("Canceled");
    }
    else{
        alert("Wrong password");
    }
}else if(user === "" || user === null){
    alert("Canceled");
}else{
    alert("I don't know");
}


