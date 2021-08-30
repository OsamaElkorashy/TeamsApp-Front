import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  constructor(private authService: AuthService,private _router:Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email':new FormControl('',Validators.required),
      'password':new FormControl('',Validators.required),
    })
  }
  submit(){
    this.loginForm.markAllAsTouched()
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(res=>{
        if (res.token) {
          localStorage.setItem('token', res.token);
          localStorage.setItem('role', res.roles);
          this._router.navigate(['/teams'])
        }
      })
    }
  }

}
