
let btn1=document.getElementById("btn")
let inp=document.getElementById("inp1")
let pg2=document.getElementById("page2")
let now = new Date();

// Get the current time components
let hours = now.getHours();
let minutes = now.getMinutes();

function fun(){
    pg2.style.display="block"
    let cityname=inp.value
 let apiket="ea6510a7f946fb2f44ab3be10e62c518"
let pr=fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apiket}`)
pr
.then((data)=>{
    // console.log(data.json());    
    return data.json();
})
.then((data1)=>{
    document.getElementById("time").textContent=`${hours}:${minutes}`
    document.getElementById("city").textContent=cityname
    document.getElementById("1").textContent=`feels like:${Math.round(data1.main.feels_like-273)}°C`
    document.getElementById("2").textContent=`Temperature:${Math.round(data1.main.temp-273)}°C`
    document.getElementById("3").textContent=`humidity:${data1.main.humidity}%`
    document.getElementById("4").textContent=`Weather:${data1.weather[0].description}`
//  console.log(data1.main.temp);
//  console.log(data1.weather[0].description)
}).catch((err)=>{
    document.getElementById("6").textContent=err
})
}
   


// btn1.addEventListener("click",fun())
// async function fun(){
//     console.log(inp);
//     let cityname=inp
//     let apiket="ea6510a7f946fb2f44ab3be10e62c518"
//     let response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apiket}`);
//     return response; 
// }
// fun()
// .then((data)=>{
//     // console.log(data.json());    
//     return data.json();
// })
// .then((data1)=>{
//  console.log(data1.main.temp);
// })

