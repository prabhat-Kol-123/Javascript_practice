let count = 0; //initialize count to 0
function increaseCount() {
    count++; //increment the count by 1
    displayCount(); //display the count
    checkCountValue() //check count value and display messages
}
function displayCount(){
    document.getElementById('countDisplay').innerHTML=count; //display the count in the html

}
function checkCountValue() {
    if(count === 10) {
        alert("Your Instagram post gained 10 followers! Congratulations!");
    }else if(count === 20) {
        alert("Your Instagram post gained 20 followers! keep it up!");
    }
}