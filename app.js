let txtName = document.getElementById("txt-name");
let txtComment = document.getElementById("txt-comment");
let pCounter = document.getElementById("p-counter");
const btnPublish = document.getElementById("btn-publish");
let pComment = document.getElementById("p-comment");
let pName = document.getElementById("p-name");
const pInitial = document.getElementById("p-initial");
const btnConvert = document.getElementById("btn-convert");


btnPublish.addEventListener("click", sendComment);
btnPublish.addEventListener("keypress",sendComment);
txtName.addEventListener("keypress",sendComment);
txtComment.addEventListener("keypress",sendComment);
btnConvert.addEventListener("click",convertUpperAndLowerCase);

function sendComment(event) {
    let maxCharacters = 280;
    let remaining = (maxCharacters-txtComment.value.length);
    let firstLetter = txtName.value.charAt(0).toUpperCase(0);
    if(remaining <= 50){
        pCounter.style.color = "red"
   }else{
       pCounter.style.color = "green"
   }
    pCounter.textContent = "caracteres ➡️ " + remaining ;
    if(event.code === "Enter" || event.pointerId === 1){
        pName.textContent = txtName.value;
        pComment.textContent = txtComment.value;
        pInitial.textContent = firstLetter;
    }
}

function convertUpperAndLowerCase() {
    if(btnConvert.value === "true"){
      txtComment.value = txtComment.value.toUpperCase();
      btnConvert.textContent = "Lower case";
      btnConvert.value = false;
    }else{
      txtComment.value = txtComment.value.toLowerCase();
      btnConvert.textContent = "Upper case";
      btnConvert.value = true;
    }
  }


