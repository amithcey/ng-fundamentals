import { Component, OnInit, Inject } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { Toastr, TOASTR_TOKEN } from '../common/toastr.service';
import { AuthService } from './auth.service';

@Component({
  templateUrl: './profile.component.html',
  styles: [`
        em { float: right; color: red; padding-left: 10px }
        .error input { background-color: red }
    `]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;

  constructor(private auth: AuthService,
    private route: Router,
    @Inject(TOASTR_TOKEN) private toastr: Toastr) { }
    
  ngOnInit() {
    this.firstName = new FormControl(this.auth.currentUser.firstname, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.auth.currentUser.lastname, Validators.required);

    this.profileForm = new FormGroup({
      firstname: this.firstName,
      lastname: this.lastName
    });
  }

  saveProfile(profileFormValues) {
    if (this.profileForm.valid) {
      this.auth.updateCurrentUser(profileFormValues.firstname, profileFormValues.lastname);
      this.toastr.successs('Profile Saved');
    }
  }

  validatefirstname() {
    return this.firstName.valid || this.firstName.untouched;
  }

  validatelastname() {
    return this.lastName.valid || this.lastName.untouched;
  }
  
  cancel() {
    this.route.navigate(['events'])
  }

}