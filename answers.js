'use strict'

const ps = require("prompt-sync");

const prompt = ps({sigint: true});


let testNumber = prompt("Choose test number : ");


function testNumber1(){
    let number = prompt("Input a number : ");

    if(number % 3 == 0 && number % 5 == 0){
        console.log("Hello World")
    } else if(number % 3 == 0){
        console.log("Hello")
    } else if(number % 5 == 0){
        console.log("World")
    }
}

function testNumber2(){
    let email = prompt("Input email : ");

    let split = email.split('@');
    let name = split[0];
    let domain = split[1];

    if(email.indexOf("@") == -1){
        console.log("Wajib menggunakan '@'");
    }
    if(name.length > 20){
        console.log("Panjang email maksimum 20 karakter sebelum ‘@’");
    }
    if(domain.indexOf(".") == -1){
        console.log("Wajib menggunakan tanda titik '.' setelah '@'");
    } else if(domain != ".co.id" || domain !== ".id"){
        console.log("Domain yang diperbolehkan hanya “.co.id” dan “.id”");
    }

}

function testNumber3(){
    let time = prompt("Input waktu : ");

    let split = time.split(':');
    let split2 = split[split.length-1].split(" ")
    split[split.length-1] = split2[0]
    let meridiem = split2[1];

    if(parseInt(split[0]) == 12 && meridiem == "AM")
        split[0] = "00"
    else if(meridiem == "PM")
        split[0] = 12 + parseInt(split[0])

    console.log(split[0] + ":" + split[1]);
}

function testNumber4(){
    let sentence = prompt("Input Sentence or Word : ")

    let reverse = ''
    for (let i = sentence.length-1; i >= 0; i--) {
        reverse += sentence[i]
    }

    console.log(reverse)
}

function testNumber5(){
    let sentence = prompt("Input Sentence / Word : ")
    sentence = sentence.trim();
    sentence = sentence.split(" ").join("");

    let isPalindrome = true;
    for (let i = 0; i < sentence.length /2; i++) {
        if(sentence[i].toLowerCase() != sentence[sentence.length-1-i].toLowerCase()){
            isPalindrome = false;
            break;
        }
    }
    console.log(isPalindrome)
}

switch (parseInt(testNumber)) {
    case 1:
        testNumber1();
        break;
    case 2:
        testNumber2();
        break;
    case 3:
        testNumber3();
        break;
    case 4:
        testNumber4();
        break;
    case 5:
        testNumber5();
        break;
    default:
        break;
}


