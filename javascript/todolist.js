// Create a close button (kapat düğmesi oluşturma)
let myNodelist = document.getElementsByTagName("LI");
let i;
for (i = 0; i < myNodelist.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// to hide the list item (liste öğesini gizlemek için)

let close = document.getElementsByClassName("close");
let a;
for (a = 0; i < close.length; a++) {
  close[a].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

// create a new list item -- add element (yeni bir liste öğesi ekleme)

function newElement() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("task").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    document.getElementById("list").appendChild(li);
    document.getElementById("task").value = "";
  
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
      }
    }
  }