//string questions
// 344. Reverse String
//reverse string
function firstReverse(str) {
    let backwordString = "";
    let splitString = str.split("")
    for (var i = splitString.length - 1; i >= 0; i--) {
        backwordString += splitString[i]
    }
    return backwordString
}
console.log(firstReverse("hello world"))
