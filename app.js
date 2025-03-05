let box=document.querySelectorAll(".box");
let rst=document.querySelector("#resetbutton");
let win=document.querySelector(".win");
const winner=()=>{
win.innerHTML="winner is x";
}
 let turn =true;
 const winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
 ]
 box.forEach((bo)=>{
    bo.addEventListener("click",()=>{
console.log("bwc");
if (turn){
    bo.innerHTML="x";
    turn=false;
}
else{
    bo.innerHTML="o";
    turn=true;
}
bo.disabled=true;
checkwinner();

    })
 });
 const checkwinner=()=>{
    for (let pattern of winpatterns){
        let ps1=box[pattern[0]].innerText;
        let ps2=box[pattern[1]].innerText;
        let ps3=box[pattern[2]].innerText;
if( ps1!="" && ps2!="" && ps3!=""){
if (ps1===ps2 && ps2===ps3){
    console.log(`winner ${ps1}`);
    winner()
}
}
    }
 };