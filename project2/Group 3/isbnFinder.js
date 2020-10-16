//This will handle getting infomation from the 2 databases

let sentence = "ISBN: 000TEST000 ";
var newPara = document.createElement("P");

for(let i = 0; i < isbnlist.length; i++){
    sentence = sentence +"ISBN: "+isbnlist[i]+" ";
}

newPara.innerText = sentence;
document.body.appendChild(newPara);