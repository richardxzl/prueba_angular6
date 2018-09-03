import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-notas-list',
  templateUrl: './notas-list.component.html',
  styleUrls: ['./notas-list.component.css']
})
export class NotasListComponent implements OnInit {

  private notas: Array<object> = [];
  constructor(
    private apiService: APIService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getNotas();
  }

  public getNotas(){
    this.apiService.getNotas().subscribe((res: Array<object>) => {
      this.notas = res.data;
    });
  }

  public deleteNotas(id){
    this.apiService.deleteNotas(id).subscribe((res: Array<object>) => {
      console.log(res);
    });
  }

  public getNotaById(id){
    this.apiService.getNotaById(id).subscribe((res: Array<object>) => {
      localStorage.removeItem("editNotasId");
      localStorage.setItem("editNotasId", id.toString());
      this.router.navigate(['/update-nota']);
    });
  }


}