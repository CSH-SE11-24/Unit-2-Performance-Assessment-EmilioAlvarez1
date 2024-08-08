const prompt = require('prompt-sync')()


//Values
let NVIDIAgpu = ["RTX 4090","RTX 4080 TI","RTX 4080","RTX 4070 TI","RTX 4060 TI","RTX 4060", "RTX 4050 TI", "RTX 4050"]

let RADEONgpu = ["RX 7900 XT","RX 7800 XT","RX 7700 XT","RX 7600 XT","RX 7500 XT","RX 6900 XT","RX 6800 XT","RX 6700 XT"]

let user4 = []

let cost = []

//array of objects
let GPU1 = [{
  name: NVIDIAgpu[0],
  price : 1599,
  reqpower: "850w",
  memory: "24gb",
  speed: "4020MHz",
  frequency: "4GHz"
},
{
  name: NVIDIAgpu[1],
  price: 1199,
  reqpower: "850w",
  memory: "20gb",
  speed: "2400MHz" ,
  frequency: "3.6GHz"
},
{
  name: NVIDIAgpu[2],
  price: 1199,
  reqpower: "850w",
  memory: "16gb",
  speed: "2505 MHz",
  frequency:"3.6GHZ"
},
{
  name: NVIDIAgpu[3],
  price: 700,
  reqpower: "700w",
  memory: "",
  speed:"" ,
  frequency: ""
},
{
  name: NVIDIAgpu[4],
  price:89 ,
  reqpower:"" ,
  memory:"" ,
  speed:"" ,
  frequency:""
},
{
  name: NVIDIAgpu[5],
  price: 89,
  reqpower:"" ,
  memory: "",
  speed: "",
  frequency:""
},
{
  name: NVIDIAgpu[6],
  price: 89,
  reqpower: "",
  memory:"" ,
  speed:"" ,
  frequency:""
},
{
  name: NVIDIAgpu[7],
  price: 89,
  reqpower: "",
  memory: "",
  speed: "",
  frequency:""
}]
//array of object
let GPU2 = [{
  name:RADEONgpu[0],
  price:499,
  reqpower: "700w",
  memory: "16gb",
  speed:"2430MHz",
  frequency:""
}]

//function
function components(mode){
  //responsible for NVIDIA inventory
  if(mode == "NVIDIAG"){
    console.log("GPU models are below")
    //Reponsible for showing NVIDIA Inventory
    for(let k = 0; k < GPU1.length; k++){
      console.log(GPU1[k].name)
    }
    //responsible for asking user
    let user = prompt("Choose the GPU you like to know about")
    //responsible for outputing user's choice
    for(k = 0; k < GPU1.length; k++){
      if(GPU1[k].name == user){
        console.log("here's your Information")
        console.log(GPU1[k])
      }
      
    //responsible for asking user question
    let user5 = prompt("What GPU would you like to store in your inventory")
    //responsible for adding the user's response to their inventory  
   for(k=0; k < GPU1.length; k++){
    if(GPU1[k].name == user5){
      user4.push(GPU1[k].name)
      console.log("here is your inventory")
      console.log(user4)
     }else if(user5 == "No"){
      console.log("Alright")
     }
    }
   }

    //responsible for AMD inventory
  }else if(mode == "AMDG"){
    console.log("GPU models are below")
    //responsible for showing the options
    for(let h = 0; h < GPU2.length; h++){
      console.log(GPU2[h].name)
    }
    //responsible for asking the user
    let user2 = prompt("Choose the GPU you like to know about")
    //responsible for outputing the user's response
    for(h = 0; h < GPU2.length; h++){
      console.log("here's your Information")
      console.log(GPU2[h])
    }
    //responsible for asking user question
    let user6 = prompt("Would you like to store this GPU in your inventory")
    //responsible for adding user's response to their inventory
    for(h=0;h<GPU2.length;h++){
      if(GPU2[h].name == user6){
        user4.push(GPU2[h].name)
        console.log("here is your inventory")
        console.log(user4)
      }
    }
    //responsible for when the user says No
    while(user6 !== "No"){
      console.log("Alright")
    }
  }
}
//Title
console.log("GPU SPECS")
console.log("Know more about AMD and NVIDIA GPU")
console.log("You also have an inventory for each GPU manufactor")
//instructions
console.log("To access the NVIDIA inventory type,'NVIDIAG'.")
console.log("To access the AMD inventory type, 'AMDG'.")
//question
let user3 = prompt("Choose between AMD and NVIDIA")

components(user3)