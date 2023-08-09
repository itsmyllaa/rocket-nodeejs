const express = require('express');

const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    const items = [
        { 
            title: "Express JS",
            message: "É um framework para o desenvolvimento de aplicações JavaScript com o uso do Node.JS"
        },
        {
            title:"React JS",
            message:"É uma biblioteca JavaScript usada no desenvolvimento Front-end"
        },
        {
            title:"Node JS",
            message:"É um ambiente de execução do JavaScript voltado para o Server Side Render (SSR), não dependendo de um navegador."
        },
        {
            title:"EJS",
            message:"Embedded JavaScript templating (EJS) e é uma linguagem de modelagem simples que permite gerar marcação HTML com JavaScript simples, simples para desenvolver aplicações/serviços."
        },
        {
            title:"JS",
            message:"JavaScript é uma linguagem de programação, leve, interpretada, orientada a objetos, baseada em protótipos e em first-class functions (funções de primeira classe), mais conhecida como a linguagem de script da internet. "
        },
        {
            title:"Redux",
            message:"Redux é uma biblioteca para armazenamento de estados de aplicações JavaScript. Ele funciona em qualquer camada de interface e abrange um grande ecossistema de complementos para atender às demandas dos desenvolvedores. Considerado um contêiner de estado previsível para aplicativos JavaScript, Redux serve para escrever aplicativos que se comportam de maneira consistente e podem ser executados em diferentes ambientes, como cliente, servidor e nativo. "
        },
        {
            title:"Bootstrap",
            message:" Pode-se classificar bootstrap como um framework front-end para desenvolvimento HTML, CSS e JavaScript, de código aberto. Portanto, ele é utilizado para criar aplicações web com foco em mobile-first."
        },
    ];
    const subtitle = "Uma linguage de modelagem para criação de páginas HTML utilizando JavaScript"
    res.render("pages/index", {
        qualitys: items,
        subtitle: subtitle,
    });
})

app.get("/sobre", function (req, res) {
    res.render("pages/about");
})

app.listen(8080);
console.log("Servidor funcionando");