function shout(string) {
    return string.toUpperCase();
}


function whisper(string2) {
    return string2.toLowerCase();
}


function logShout(string3) {
    console.log(string3.toUpperCase());
}


function logWhisper(string4) {
    console.log(string4.toLowerCase());
}


function sayHiToGrandma(string5) {
    if(string5 === string5.toLowerCase()) {
        return "I can\'t hear you!";
    }
    else if(string5 === string5.toUpperCase()) {
        return"YES INDEED!";
    }
    else if(string5 === "I love you, Grandma.") {
        return("I love you, too.");
    }

}

console.log(sayHiToGrandma("hi there"));
