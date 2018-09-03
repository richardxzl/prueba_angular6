import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nota-create',
  templateUrl: './notas-create.component.html',
  styleUrls: ['./notas-create.component.css']
})
export class NotasCreateComponent implements OnInit {

  constructor(
    private apiService: APIService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  model: any = {};
 
  onSubmit() {
    this.apiService.createNotas(this.model).subscribe((response) => {
      this.router.navigate(['/notas']);
      console.log(response);
    });
  }

}
