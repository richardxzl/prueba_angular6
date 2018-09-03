import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { APIService } from '../api.service';

@Component({
  selector: 'app-notas-update',
  templateUrl: './notas-update.component.html',
  styleUrls: ['./notas-update.component.css']
})
export class NotasUpdateComponent implements OnInit {

  model: any = {};

  constructor(
    private apiService: APIService,
    private router: Router, 
  ) { }

  ngOnInit() {
    let userId = localStorage.getItem("editNotasId");
    if(!userId) {
      console.log("Invalid action.")
      this.router.navigate(['notas']);
      return;
    }
    this.apiService.getNotaById(userId).subscribe((res: Array<object>) => {
      this.model.id = res.data.id;
      this.model.title = res.data.title;
      this.model.content = res.data.content;
    });
  }

  onSubmit() {
    this.apiService.updateNotas(this.model).subscribe((response) => {
      this.router.navigate(['/notas']);
      console.log(response);
    });
  }

}
