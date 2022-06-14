const selector = document.getElementById("selector");
const product_img = document.getElementById("product_img");
let model = document.getElementById("model");
let year = document.getElementById("year");
let manufacturer = document.getElementById("manufacturer");
let price = document.getElementById("price");


selector.addEventListener('change',get_img);

function get_img(){
    const option = selector.value;

    switch (option) {
        case "meriva" :
        product_img.setAttribute('src','./assets/img/meriva.webp');
        model.innerHTML = "Modelo: Chevrolet Meriva SS";
        year.innerHTML = "Ano: 2022"
        manufacturer.innerHTML = "Fabricante: Chevrolet"
        price.innerHTML = "R$ 32mil"
        break;

        case "corolla" :
        product_img.setAttribute('src','./assets/img/corolla.webp');
        model.innerHTML = "Modelo: Toyota Corolla XRS";
        year.innerHTML = "Ano: 2022"
        manufacturer.innerHTML = "Fabricante: Toyota"
        price.innerHTML = "R$ 153mil"
        break;

        case "sandero" :
        product_img.setAttribute('src','./assets/img/sandero.webp');
        model.innerHTML = "Modelo: Renault Sandero S-Edition";
        year.innerHTML = "Ano: 2021"
        manufacturer.innerHTML = "Fabricante: Renault"
        price.innerHTML = "R$ 75mil"
        break;

        case "idea" :
        product_img.setAttribute('src','./assets/img/idea.webp');
        model.innerHTML = "Modelo: Fiat Idea Sporting";
        year.innerHTML = "Ano: 2021"
        manufacturer.innerHTML = "Fabricante: Fiat"
        price.innerHTML = "R$ 43mil"
        break;

        case "mercedes" :
        product_img.setAttribute('src','./assets/img/mercedes.webp');
        model.innerHTML = "Modelo: Mercedes-Benz C200 AMG Line";
        year.innerHTML = "Ano: 2022"
        manufacturer.innerHTML = "Fabricante: Mercedes-Benz"
        price.innerHTML = "R$ 350mil"
        break;

    }
}
