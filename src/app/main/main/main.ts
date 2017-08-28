import { Component, Inject } from "@angular/core";
import { Http } from "@angular/http";

@Component({
    selector: "k-main",
    templateUrl: "./main.html"
})
export class Main {
    Copyright: string = "KAIZEN";
    constructor( @Inject(Http) protected http: Http) {
        this.services1.forEach((val, index) => {

        }, this);
        for (let x in this.services1) {

        }
    }

    public get MailSent():boolean{
        return this.mailSent;
    }
    
    mailSent: boolean = false;

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
        titulo: "PLC ",
        descripcion: " ",
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
        descripcion: " ",
        icon: "fa-check-circle"
    },
    {
        titulo: "ADECUACION TECNOLOGICA DE PLANTAS INDUSTRIALES   ",
        descripcion: " ",
        icon: "fa-check-circle"
    }
    ];


    menus = [{
        href: "home", class: "smoothScroll", titulo: "HOME"
    }, {
        href: "contact", class: "smoothScroll", titulo: "CONTACT"
    }];

  

    enviar(txtName: HTMLInputElement, txtEmail: HTMLInputElement, txtMessage: HTMLTextAreaElement): void {
        console.log(txtName.value, txtEmail.value, txtMessage.value)
        this.http.post("http://www.kaizeningenieria.com.uy/KApi/api/Email/sendMail", {
            sender: txtEmail.value,
            subject: txtName.value,
            message: txtMessage.value
        }).subscribe((message: any) => {
            this.mailSent = <string>message === "SUCCESS";
        });
    }
}