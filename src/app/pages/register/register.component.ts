import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { AuthService } from '../../shared/services/auth.service';
import { User } from '../../shared/models/User'
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    rePassword: new FormControl(''),
    streetAddress: new FormGroup({
      street: new FormControl(''),
      number: new FormControl('')
    }),
    name: new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl('')
    })
  });

  constructor(private location: Location, private authService: AuthService, private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.signup(this.registerForm.get('email')?.value, this.registerForm.get('password')?.value).then(cred => {
      const user: User = {
        id: cred.user?.uid as string,
        email: this.registerForm.get('email')?.value,
        name: {
          firstname: this.registerForm.get('name.firstname')?.value,
          lastname: this.registerForm.get('name.lastname')?.value
        },
        streetAddress: {
          street: this.registerForm.get('streetAddress.street')?.value,
          number: this.registerForm.get('streetAddress.number')?.value
        }

      }
      this.userService.create(user).then(_ => {
        console.log('User added successfully.');
      }).catch(error => {
        console.error(error);
      })
    }).catch(error => {
      console.error(error);
    });
  }

  goBack() {
    this.location.back();
  }

}
