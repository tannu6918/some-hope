let URL = "https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all"
//const  factspara = document.querySelector("#para")
 

const getfacts = async ()=>{
    console.log("getfacts data....")
let response =  await fetch(URL)
console.log(response);

let data = await  response.json();
 // factspara.innerText = data[0].text;
console.log(data[0].text);
};