import { Component } from "@angular/core";

@Component({
    selector: "k-main",
    templateUrl: "./main.html"
})
export class Main {
    Copyright: string = "KAIZEN";
    constructor() {
        this.services1.forEach((val, index) => {

        }, this);
        for (let x in this.services1) { 
            
        }
    }
    aboutUs() {
        alert("asdasd");
    }
    services1 = [{
        titulo: "ARQUITECTURA ",
        descripcion: " PROYECTO-CONSTRUCCION Y REFORMAS",
        icon: "fa-check-circle"
    }, {
        titulo: "ELECTRICIDAD  ",
        descripcion: "",
        icon: "fa-check-circle"
    },
    {
        titulo: "ILUMINACION   ",
        descripcion: "",
        icon: "fa-check-circle"
    },
    {
        titulo: "EFICIENCIA ENERGETICA   ",
        descripcion: "",
        icon: "fa-check-circle"
    },
    {
        titulo: "HERRERIA DE OBRA   ",
        descripcion: "REJAS CARPINTERIA METALICA MADERA -  ",
        icon: "fa-check-circle"
    },
    {
        titulo: "SANITARIA - DECKS- BARBACOAS - PORTONES   ",
        descripcion: " ",
        icon: "fa-check-circle"
    }

    ];




    services2 = [{
        titulo: "EJECUCION DE PROYECTOS ELECTROMECANICOS ",
        descripcion: " ",
        icon: "fa-check-circle"
    }, {
        titulo: "EFICIENCIA ENERGETICA  ",
        descripcion: "",
        icon: "fa-check-circle"
    },
    {
        titulo: "ARQUITECTURA ELECTRICA   ",
        descripcion: " INSTALACIONES NUEVAS Y EN USO",
        icon: "fa-check-circle"
    }, {
        titulo: "INVERSORES DE FRECUENCIA   ",
        descripcion: " ",
        icon: "fa-check-circle"
    },
    {
        titulo: "SOFT STARTER   ",
        descripcion: " ",
        icon: "fa-check-circle"
    },
    {
        titulo: "ELECTRONICA INDUSTRIAL   ",
        descripcion: " ",
        icon: "fa-check-circle"
    },
    {
        titulo: "AUTOMATISMOS INDUSTRIALES   ",
        descripcion: "PLC ",
        icon: "fa-check-circle"
    },
    {
        titulo: "ADECUACION TECNOLOGICA DE PLANTAS INDUSTRIALES   ",
        descripcion: "PLC ",
        icon: "fa-check-circle"
    }


    ];
    menus = [{
        href: "home", class: "smoothScroll", titulo: "HOME"
    }, {
        href: "contact", class: "smoothScroll", titulo: "CONTACT"
    }];
}