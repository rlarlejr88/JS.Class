function indexOfIgnoreCase(s1, s2) {
    console.log(s1.toLowerCase().indexOf(s2.toLowerCase()));
}
indexOfIgnoreCase("bit","IT");
    

function firstChar(text) {
    console.log(text.trim().charAt());
}
firstChar(" Rosa Parks ");

function normalize(){
    let date = "20-08-2020";
    let newDate = date.replace(/-/g,'/');
    console.log(newDate);
}
normalize();