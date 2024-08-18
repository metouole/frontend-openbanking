import { RouterOutlet } from '@angular/router';




import { Component, OnInit } from '@angular/core';
import { KeycloakProfile } from 'keycloak-js';
import { AssuranceAuthService } from './assurance-auth.service';
import { PiggyAuthService } from './piggy-auth.service';
import { MobileAuthService } from './mobile-auth.service';
import { MicrofinanceAuthService } from './microfinance-auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend-openbanking';
  public isLoggedIn = false;
  public userProfile: KeycloakProfile | null = null;

  constructor(
    private piggyAuthService: PiggyAuthService,
    private assuranceAuthService: AssuranceAuthService,
    private mobileAuthService: MobileAuthService,
    private microfinanceAuthService: MicrofinanceAuthService
  ) {}

  public async ngOnInit() {
    this.isLoggedIn = await this.piggyAuthService.isLoggedIn();
  }

  public loginPiggyBank() {
    this.piggyAuthService.login();
  }

  public loginMobileBank() {
    this.mobileAuthService.login();
  }

  public loginAssurance() {
    this.assuranceAuthService.login();
  }

  public loginMicroFinance() {
    this.microfinanceAuthService.login();
  }

  public logout() {
    //this.keycloak.logout();
  }
}