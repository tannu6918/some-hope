// const employes = {
//     calcTax () {
//         console.log("Tax rate is 10 %");
//     },
// };

// const KaranArjun ={
//     salary:5000 , 
// };

// KaranArjun.__proto__ = employes;

 // class 
// class toycar{

//     constructor(brand){
//         console.log("creat new object")
//  this.brand = brand
//     }
//     start(){
//                console.log("start")
//     }

//     stop(){
//         console.log("stop")
//     }
//     // setBrand(brand){
//     //     this.brand = brand;
//     // }
// }


// class work extends toycar {
//     engineer(){
//         console.log("Do some work");
//     }
// }

// let fortune = new work;
// //console.log(fortune);
// //fortune.setBrand("fortune")

// class person{
//     constructor(){
//    this.spacies = "homo spaces"
//    console.log("tannu")
//     }
//     Sleep (){
//         console.log("sleep");
//     }
//     Eat (){
//         console.log("eat")
//     }
// }

// class engineer extends person {
  
//     constructor( branch){
//         console.log("hellow")
//         super();
//         console.log("hellow2")
// this.branch = branch
//     }
//     work(){
//         super.Eat();
//         console.log("solve problems.build somthing");
//     }
// }

// let Tannu =new engineer("computer enginner");

// let Data = "some Website related information"
//  class user{

//     constructor(name,email){
//         this.name = name;
//         this.email = email;
//     }

//     ViewData(){
//         console.log("Data:-",Data)
//     }
//  }

//  class Admin extends user{
//     constructor(name,email){
//        super(name,email)
//     }

//     editdata(){
//     Data = "Some new value"
//     }
//  }

// //  let studant1 = new user("Ram" , "tannu@7");
// //  let studant2 = new user("Krishna","tannu6919");

// let admin2 = new Admin ("tannu","Tannu68")



// let a = 10;
// let b = 70;
// console.log(a+b);
// console.log(a*b);
// try{
// console.log(a+c)
// }
// catch(err){
//  console.log(err)
// }
// console.log(a*2);
// console.log(b-a);

// promises
// let promise = new Promise((resolve,reject)=>{
//    console.log("hii i give you a promise");
//    reject("123");
// });



function getData(DataId,getnextData){
   return  new Promise ((resolve,reject)=>{
     setTimeout(()=>{
        console.log("Data",DataId);
        resolve("sucess");
        if(getnextData){
            getnextData();
        }
     },5000);
   });

};
