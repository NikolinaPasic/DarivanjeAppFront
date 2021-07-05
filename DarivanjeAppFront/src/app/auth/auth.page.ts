import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserAuth } from '../shared/models/user-authorization';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
    let userAuth: UserAuth = null;
    const code = this.route.snapshot.queryParamMap.get('code');
    this.authService.getAccessToken(code)
    .subscribe(
      (res) => {
        userAuth = res;
        this.authService.sendAccessToken(userAuth).subscribe(
          (response) => {
            localStorage.setItem('token', response.token);
            this.router.navigate(['/influenser-pocetna']);
          },
          (error)=>{
            console.log('error with authentification 2');
            this.router.navigate(['/login']);
          }
        );
      },
      (error) => {
        console.log('error with authentification');
        this.router.navigate(['/login']);
      }
    );
  }

}
