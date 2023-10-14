import { Component ,OnInit } from '@angular/core';
import { FoodServiceService } from 'src/app/services/food-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

 foodList:any[]=[];
  constructor(private service:FoodServiceService){}

  ngOnInit(): void {
    this.foodList = this.service.getList()
  }

}
