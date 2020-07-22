import { Component } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

employees: string[];

constructor(public homeService: HomeService) {}
ngOnInit() {
  this.getEnployees();
}

getEnployees(): void {
  this.homeService.getEmployee()
      .subscribe(result => this.employees = result);
}

}
