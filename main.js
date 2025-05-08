let foodArr = [
    {
        name:"Samarqand osh",
        type:"1-chi taom",
        price:"$5.29",
        availability:"20 Bowls available",
        img_link:'./img/osh img.png'
    },
    {
        name:"Qo'virilgan baliq",
        type:"2-chi taom",
        price:"$9.50",
        availability:"45 available",
        img_link:'./img/baliq img.png'
    },
    {
        name:"Pepsi ichimligi",
        type:"Ichimliklar",
        price:"$1.50",
        availability:"50 available",
        img_link:'./img/pepsi img.png'
    },
    {
        name:"Shirinlik",
        type:"Shirinliklar",
        price:"$7.25",
        availability:"20 Bowls available",
        img_link:'./img/shirinlik img.png'
    },
    {
        name:"Tort",
        type:"Shirinliklar",
        price:"$13.75",
        availability:"6 available",
        img_link:'./img/tort.png'
    },
    {
        name:"Coca Cola",
        type:"Ichimliklar",
        price:"$1.75",
        availability:"26 available",
        img_link:'./img/coca cola.png'
    },
    {
        name:"Shashlik",
        type:"2-chi taom",
        price:"$2.15",
        availability:"15 available",
        img_link:'./img/shashlyk-iz-baraniny-Photoroom.png'
    },
    {
        name:"Sho'rva",
        type:"1-chi taom",
        price:"$4.25",
        availability:"10 available",
        img_link:'./img/shurpa-Photoroom.png'
    },
]



const ul = document.getElementById("heroListJs")
function createFoods(data){
    ul.innerHTML=""
    for(let i = 0;i<data.length;i++){
        let li = document.createElement("li")
        li.innerHTML=`<div class="card">
        <img height="150" width="150" src="${data[i].img_link}">
        <div class="dish-info">
        <h2>${data[i].name}</h2>
        <span>${data[i].type}</span>
        <p class="price">${data[i].price}</p>
        <p class="price">${data[i].availability}</p>
        </div>
        </div>`
        ul.appendChild(li)
    }
}

createFoods(foodArr)


let btns = [...document.querySelectorAll(".btns button")]

btns.forEach(btn =>{
    btn.addEventListener("click",()=>{
        if(btn.textContent==="All"){
            createFoods(foodArr)
        }
        else{
            let filteredArr = foodArr.filter(food=>food.type===btn.textContent)
            createFoods(filteredArr)
        }
    })
})