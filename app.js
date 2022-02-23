let list = [
    {
        name: "Caution",
        sound: 1
    },
    {
        name: "Dying Breed",
        sound: 3
    },
    {
        name: "Human",
        sound: 8
    },
    {
        name: "Spaceman",
        sound: 7
    },
    {
        name: "Sam's Town",
        sound: 5
    },
    {
        name: "Bright side",
        sound: 4
    }
];


for(let i=0; i<list.length; i++){
    let ele = document.createElement("div");
    let nameEle = document.createElement("h1");
    let soundEle = document.createElement("h3");
    nameEle.innerHTML=list[i].name;
    soundEle.innerHTML=list[i].sound;
    ele.appendChild(nameEle);
    ele.appendChild(soundEle);
    document.body.appendChild(ele);
}


let number = 10;
let alert;

let button= document.createElement("button");
button.innerHTML="click"+number;
button.addEventListener("click", function(){
   number=number+1;
   button.innerHTML="click"+number;
    if (number === 15){
        alert = "we hit the number"
    }
})



document.body.appendChild(button);
document.body.appendChild(alert);
