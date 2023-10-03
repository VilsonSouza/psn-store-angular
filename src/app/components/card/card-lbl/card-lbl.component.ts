import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-card-lbl',
  templateUrl: './card-lbl.component.html',
  styleUrls: ['./card-lbl.component.css']
})
export class CardLblComponent implements OnInit {

	@Input()
	gameLabel:string = ""
  constructor() { }

  ngOnInit(): void {
  }

}
