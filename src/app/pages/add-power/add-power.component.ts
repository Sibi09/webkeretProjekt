import { Component, OnInit } from '@angular/core';
import { Power } from '../../shared/models/Power';
import { FormBuilder, Validators } from '@angular/forms';
import { PowerService } from '../../shared/services/power.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-add-power',
  templateUrl: './add-power.component.html',
  styleUrls: ['./add-power.component.scss']
})
export class AddPowerComponent implements OnInit {

  uid: string = ''

  addPowerForm = this.createForm({
    id: '',
    dateFrom: '',
    dateTo: '',
    level: 0,
    street: '',
    number: 0,
    uid: ''
  });

  constructor(private fb: FormBuilder,
    private authService: AuthService, 
    private powerService: PowerService,) { }

  ngOnInit(): void {
    this.authService.isUserLoggedIn().subscribe(loggedUser => {
      this.addPowerForm.get('uid')?.setValue(loggedUser?.uid);
    }, error => {
      console.error(error);
    });
  }

  createForm(model: Power) {
    let formGroup = this.fb.group(model);
    formGroup.get('dateFrom')?.addValidators([Validators.required]);
    formGroup.get('dateTo')?.addValidators([Validators.required]);
    formGroup.get('level')?.addValidators([Validators.required]);
    formGroup.get('street')?.addValidators([Validators.required]);
    formGroup.get('number')?.addValidators([Validators.required]);
    formGroup.get('uid')?.addValidators([Validators.required]);

    return formGroup;
  }

  onSubmit() {
    if (this.addPowerForm.valid) {
      if (this.addPowerForm.get('dateFrom')
       && this.addPowerForm.get('dateTo')
       && this.addPowerForm.get('level')
       && this.addPowerForm.get('street')
       && this.addPowerForm.get('number')
       && this.addPowerForm.get('uid')) {
        this.powerService.create(this.addPowerForm.value);
        alert("Hozzáadás sikeres!");
      }
    }
  }
}
