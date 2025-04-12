import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { NeoContextService } from '../shared/services/neo-context.service';
import { AppSettings } from '../shared/objects/app-settings';
import { AuthService } from './../shared/services/auth.service';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'app';
  appSettings: AppSettings;

  constructor(private titleService: Title, private neoContextSrv: NeoContextService, private authService: AuthService) {
    this.appSettings = neoContextSrv.context.AppSettings!;
  }

  ngOnInit() {
    // this.authService.checkAuth().subscribe();
  }
}
