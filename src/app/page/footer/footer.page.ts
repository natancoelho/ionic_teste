import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/dataBase/database.service';
import { UtilityService } from 'src/app/dataBase/Utility.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.page.html',
  styleUrls: ['./footer.page.scss'],
})
export class FooterPage implements OnInit {

  constructor(

    private databse: DatabaseService,

    private alertctrl:AlertController,

    private utilidades: UtilityService,


  ) { }

  ngOnInit() {
  }

}
