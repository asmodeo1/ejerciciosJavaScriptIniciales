const nombres = ["laura", "sergio", "eva", "eduardo", "luis", "sandra", "sonia", "roberto"];
const apellidos = ["alonso", "garcía", "sanchez", "olivo", "romero", "silva", "sarabia"];

for (let i = 0; i < 100; i++) {
    const div = document.createElement("div");
    div.classList.add("bg-info", "m-3", "p-2");
    document.querySelector("main").appendChild(div)
    //document.getElementsByTagName("main")[0].appendChild(div)
    //Math.floor(Math.random() * (max - min + 1) + min);
    //Math.floor(Math.random() * (nombres.length - 1  - 0 + 1) + 0);
    const numero = Math.floor(Math.random() * (nombres.length));
    div.textContent = nombres[numero];


}

