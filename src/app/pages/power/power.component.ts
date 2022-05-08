import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { PowerService } from 'src/app/shared/services/power.service';
import { Power } from '../../shared/models/Power';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.scss']
})
export class PowerComponent implements OnInit {

  uid: string = ''

  powers: Array<Power> = [];

  constructor(
    private powerService: PowerService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.isUserLoggedIn().subscribe(loggedUser => {
      if(loggedUser)
      this.uid = loggedUser.uid;
      console.log(this.uid);
      this.powerService.getPowerByUserId(this.uid).subscribe(powers => {
        this.powers = powers;
      });
    }, error => {
      console.error(error);
    });
  }

  onDelete(id: string) {
    this.powerService.delete(id);
  }

  onUpdate(power: Power) {
      this.powerService.update(power)
  }
}
