import { Injectable } from "@angular/core";
import { LoadingController, ToastController } from "@ionic/angular";
@Injectable({
    providedIn: "root"
})

export class UtilityService{
    constructor(
        // Ferramenta do carregando
        private loading: LoadingController,

        // Ferramenta do Toast(mensagem)
         private toast: ToastController
    ){}

    // Método de loading

    async carregando(message: string, duration:number){

        const load = this.loading.create({

            mode: 'ios',
            message,
            duration
        });

        (await load).present();
    }
}