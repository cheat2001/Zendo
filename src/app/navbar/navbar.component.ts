import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  action:boolean=false;
   screenWidth:any;
   screenHeight:any;
  ngOnInit(): void {
    this.screenWidth=window.innerWidth;
    this.screenHeight=window.innerHeight;
  }

  actionEvent():void{
    this.action=!this.action;
  }

  searchAction:boolean=false;
  searchActionEvent():void{
    this.searchAction=!this.searchAction;
  }
  settingAction:boolean=false;
  settingActionEvent():void{
   this.settingAction=!this.settingAction;
  }

}
