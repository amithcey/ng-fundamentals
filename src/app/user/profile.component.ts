import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private auth: AuthService,
    private route: Router) { }
    
  ngOnInit() {
    let firstName = new FormControl(this.auth.currentUser.firstname);
    let lastName = new FormControl(this.auth.currentUser.lastname);

    this.profileForm = new FormGroup({
      firstname: firstName,
      lastname: lastName
    });
  }

  saveProfile(profileFormValues) {
    this.auth.updateCurrentUser(profileFormValues.firstname, profileFormValues.lastname);
    this.route.navigate(['events'])
  }
  
  cancel() {
    this.route.navigate(['events'])
  }

}