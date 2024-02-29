// ? Object freeze vs Seal

const user = {
  name: "Kamil",
  age: 25,
  phone: "090-450-12-12",
};

//? Freeze olunmush obyekte ne yeni data elave etmek olur, nede ki var olan datani ypdate etmek olmur.

// Object.freeze(user);

// console.log(user);
// user.age=26;
// console.log(user);

// user.surname="Memmedov";
// console.log(user.surname)

// ? Seal funk Objectde yeni data elvae etmeye qoymur, ama datani update ede bilir.
// Object.seal(user);
// console.log(user);
// user.username="01Salam";
// console.log(user)
// user.name ="Kamran";
// user.age=35;
// console.log(user);

let number = -20;

// abs menfini musbet qaytarir.
// console.log(Math.abs(number));
// kesrli ededin en yaxin oldugu ededin  1vahid ashagi salir
// console.log(Math.floor(4.8));

// kesrli ededin en yaxin oldugu ededin  1vahid yuxari salir
// console.log(Math.ceil(3.1))

// normal yuvarlaqlashdirma kimi calishir.
// console.log(Math.round(3.5))

// console.log(Math.pow(2,3))
// console.log(Math.pow(3,3))
// console.log(Math.round(Math.sqrt(45)))

// let num = [12,32,43,54,10,65,100,203,-10];

// let maxNum = Math.max(...num);
// let minNum = Math.min(...num);
// console.log(maxNum);
// console.log(minNum);

// let randomNum = Math.random();
// console.log(randomNum)

// ? CBA sozleri duzdur nizamla
// const cities = ["Baku","Agdash", "Qax","Zaqatala","Ganja"];
// cities.sort();
// cities.reverse();

// console.log(cities)

// const numbers = [20,10,30,40,50]

// numbers.sort((a,b)=>a-b);
// numbers.reverse()

// console.log(numbers)

const product = [
  {
    id: 1,
    name: "Computer",
    model: "Asus",
    price: 2000,
    ram: 16,
  },
  {
    id: 2,
    name: "Computer",
    model: "HP",
    price: 2300,
    ram: 8,
  },
  {
    id: 3,
    name: "Computer",
    model: "Acer",
    price: 1500,
    ram: 24,
  },
  {
    id: 4,
    name: "Computer",
    model: "Dell",
    price: 2800,
    ram: 64,
  },
];

// console.log(product);
// const sortByPrice= product.sort((a, b) => {
//   return a.price - b.price;
// });

// const sortByRam= product.sort((a, b) => {
//    return  a.ram - b.ram;
//   });
// console.log("-----Sort By Price-------")
// console.log(sortByPrice);

// console.log("------Sort By Ram------");
// console.log(sortByRam);


// const arrayNum = [12,32,43,54,60,32,40];

// const num1 = arrayNum.map((num)=>num/3);
// console.log(num1);
// ?Date
// const birthday = new Date('Febuary 29, 2024 23:15:30');
// const day = birthday.getDate();
// const weekDay =birthday.getDay();
// const year = birthday.getFullYear();
// const time = birthday.getHours();
// const second = birthday.getSeconds();
// const minute = birthday.getMinutes();

// console.log(minute);

// const date = Date();
// console.log(date);

// ? DOM
// Select HTML Element

// ? Query Selectors

// const button = document.querySelector("button");
// const btnPrimary = document.querySelector(".btn-primary")
// const btnOpen = document.querySelector("#open");


// // ? QuerySelectorAll

// const btns = document.querySelectorAll("button");
// const lists = document.querySelectorAll("ul li");


// // ? GetElement
// const pTag = document.getElementsByTagName("p");
// const pById = document.getElementById("text");
// const pByClass =document.getElementsByClassName("title")

// console.log(pTag)
// console.log(pById)
// console.log(pByClass)


// const btn =document.querySelector(".btn");
// btn.innerText ="Salam 123";
// btn.setAttribute("id","yellow");
// btn.style.color="red";
// btn.style.fontSize="40px";
// btn.style.border="none";
// btn.style.margin ="20px";
// btn.style.borderRadius="10px"

// ? Create Element

const div = document.createElement("div");
const button = document.createElement("button");

document.body.appendChild(div);
document.body.appendChild(button);

button.innerText="Click Me"
button.style.color="green"

div.innerText="I am a div";
div.setAttribute("class","title");
div.style.width="200px";
div.style.height="300px";
div.style.border="1px solid black"
