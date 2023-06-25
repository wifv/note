// import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';

let id = 0;
let data = []

document.getElementById('add-button').onclick = function addNote() {
    let text = document.getElementById("textarea");

    if(text.value != ""){
        document.getElementById("note-list").innerHTML += `<li id="${id}">${text.value}</li>`;
        let dataJson = {text : text.value};
        data.push(dataJson);
        text.value = "";
        id++;
        console.log(data)
    }
}


document.getElementById('undo-button').onclick = function undoNote() {
    if(id>0) {
        document.getElementById(id-1).remove();
        id--;
    }
}
