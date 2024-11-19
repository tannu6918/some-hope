//  let a = document.querySelector('h2');
//  console.dir(a.innerText);
//  //document.querySelector('h2').innerText = document.querySelector('h2') 
//  a.innerText = a. innerText + " " +"From Apna College"

//  console.dir (a.innerText);

// let div = document.querySelectorAll('.box')
// console.log(div[0])
// div[0].innerText = "Add uniqe valu"

// div[1].innerText = "Add uniqe valu"

// div[2].innerText = "Add uniqe valu"

//  let dives = document.querySelectorAll('.box')
// let idx = 1;
// for(div of dives){
//     div.innerText = `new value ${idx}`
//     idx++
// }

// let buttonnew = document.createElement("button");
// buttonnew.innerText = "click me"
// buttonnew.style.backgroundColor = "red";
// buttonnew.style.color = "white";
// document.querySelector("body").prepend(buttonnew);
  let btn = document.querySelector('.btn')
// // btn.innerHTML = "tannu";
// // console.log (bt
btn.onclick = (e) =>{
    console.log(e.client )
}


// btn.addEventListener("click",(evt)=>{
//     console.log("hellow");
// });


//  let mode = document.querySelector("#mode");
//   let currMode = "light";

//  mode.addEventListener("click",()=>{
//    // console.log("hellow")

//    if(currMode === "light"){
//     currMode = "dark";

//     document.querySelector("body").style.backgroundColor = "black";
//    }else{
//     currMode = "light";
    
//     document.querySelector("body").style.backgroundColor = "white";
//    }
//    console.log(currMode);
//  })