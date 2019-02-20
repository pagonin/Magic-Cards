import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TypesService } from '../../shared/services/types.service';

@Component({
  selector: 'my-magic-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.scss']
})
export class TypeListComponent implements OnInit {
@Output() onTypeSelected: EventEmitter<string>; 

  public types: string[];

  constructor(private typeService: TypesService) { 

    this.onTypeSelected = new EventEmitter();
  }

  ngOnInit() {
    this.typeService.getTypes().subscribe(
      (data: string[]) => this.types = data
      );
  }
  onClickType(clickedType: string){

    this.onTypeSelected.emit(clickedType)
  }
}