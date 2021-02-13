const theElements = ["rock","paper","scissors"];
let random = Math.floor(Math.random()*theElements.length);
let randomElements = theElements[random];
let mypoints=0;
let pcpoints=0;

function theGame(object){
    let image1 = document.getElementById("whe1")
    let image2 = document.getElementById("whe2")
//=======ROCK==========
    //if you and pc chose rock
    if(object == "rock" && randomElements =="rock"){
        image1.src = "https://i.imgur.com/iBCtfP8.png";
        image2.src = "https://i.imgur.com/iBCtfP8.png";
        document.getElementById("explain").innerHTML = "PC has chosen rock </br> Tied!"
        document.getElementById("explain").style.color ="lightblue"
        random = Math.floor(Math.random()*theElements.length);
        randomElements = theElements[random];
        console.log(randomElements)
    }
    //if you chose rock, but pc chose paper
    else if(object == "rock" && randomElements =="paper"){
        pcpoints++
        image1.src = "https://i.imgur.com/iBCtfP8.png";
        image2.src = "https://i.imgur.com/bHQrxtj.png";
        document.getElementById("explain").innerHTML = "PC has chosen paper </br> You lost!"
        document.getElementById("explain").style.color ="crimson"
        document.getElementById("hispoints").innerHTML = pcpoints
        random = Math.floor(Math.random()*theElements.length);
        randomElements = theElements[random];
        console.log(randomElements)
    }
    //if you chose rock,but pc chose scissors
    else if(object == "rock" && randomElements =="scissors"){
        mypoints++
        image1.src = "https://i.imgur.com/iBCtfP8.png";
        image2.src = "https://i.imgur.com/luLLjnv.png";
        document.getElementById("explain").innerHTML = "PC has chosen scissors </br> You won!"
        document.getElementById("explain").style.color ="lightgreen"
        document.getElementById("urpoints").innerHTML = mypoints
        random = Math.floor(Math.random()*theElements.length);
        randomElements = theElements[random];
        console.log(randomElements)
    }
//=====PAPER===========
//if you and pc chose paper
if(object == "paper" && randomElements =="paper"){
    image1.src = "https://i.imgur.com/bHQrxtj.png";
    image2.src = "https://i.imgur.com/bHQrxtj.png";
    document.getElementById("explain").innerHTML = "PC has chosen paper </br> Tied!"
    document.getElementById("explain").style.color ="lightblue"
    random = Math.floor(Math.random()*theElements.length);
    randomElements = theElements[random];
    console.log(randomElements)
}
//if you chose paper, but pc chose scissors
else if(object == "paper" && randomElements =="scissors"){
    pcpoints++
    image1.src = "https://i.imgur.com/bHQrxtj.png";
    image2.src = "https://i.imgur.com/luLLjnv.png";
    document.getElementById("explain").innerHTML = "PC has chosen scissors </br> You lost!"
    document.getElementById("explain").style.color ="crimson"
    document.getElementById("hispoints").innerHTML = pcpoints
    random = Math.floor(Math.random()*theElements.length);
    randomElements = theElements[random];
    console.log(randomElements)
}
//if you chose paper,but pc chose rock
else if(object == "paper" && randomElements =="rock"){
    mypoints++
    image1.src = "https://i.imgur.com/bHQrxtj.png";
    image2.src = "https://i.imgur.com/iBCtfP8.png";
    document.getElementById("explain").innerHTML = "PC has chosen rock </br> You won!"
    document.getElementById("explain").style.color ="lightgreen"
    document.getElementById("urpoints").innerHTML = mypoints
    random = Math.floor(Math.random()*theElements.length);
    randomElements = theElements[random];
    console.log(randomElements)
}
//============SCISSORS==============
    //if you and pc chose scissors
if(object == "scissors" && randomElements =="scissors"){
    image1.src = "https://i.imgur.com/luLLjnv.png";
    image2.src = "https://i.imgur.com/luLLjnv.png";
    document.getElementById("explain").innerHTML = "PC has chosen scissors </br> Tied!"
    document.getElementById("explain").style.color ="lightblue"
    random = Math.floor(Math.random()*theElements.length);
    randomElements = theElements[random];
    console.log(randomElements)
}
//if you chose scissors, but pc chose rock
else if(object == "scissors" && randomElements =="rock"){
    pcpoints++
    image1.src = "https://i.imgur.com/luLLjnv.png";
    image2.src = "https://i.imgur.com/iBCtfP8.png";
    document.getElementById("explain").innerHTML = "PC has chosen rock </br> You lost!"
    document.getElementById("explain").style.color ="crimson"
    document.getElementById("hispoints").innerHTML = pcpoints
    random = Math.floor(Math.random()*theElements.length);
    randomElements = theElements[random];
    console.log(randomElements)
}
//if you chose scissors,but pc chose paper
else if(object == "scissors" && randomElements =="paper"){
    mypoints++
    image1.src = "https://i.imgur.com/luLLjnv.png";
    image2.src = "https://i.imgur.com/bHQrxtj.png";
    document.getElementById("explain").innerHTML = "PC has chosen paper </br> You won!"
    document.getElementById("explain").style.color ="lightgreen"
    document.getElementById("urpoints").innerHTML = mypoints
    random = Math.floor(Math.random()*theElements.length);
    randomElements = theElements[random];
    console.log(randomElements)
}
}
