import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CardModel } from 'src/app/shared/models/magicthegathering/card-model';
import { CardListModel } from 'src/app/shared/models/magicthegathering/card-list.model';
import { MagicTheGatheringService } from 'src/app/shared/services/magic-the-gathering.service';
import { TypesService } from 'src/app/shared/services/types.service';
import { Router } from '@angular/router';



@Component({
  selector: 'my-magic-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit, OnChanges {

  @Input() type: string;
  @Output() onBeforeCards: EventEmitter<boolean>;
  @Output() onCards: EventEmitter<boolean>;

  public cards: CardModel[];


  constructor(private magicTheGatheringService: MagicTheGatheringService,
    private typeService: TypesService,
    private router: Router
  ) {
    this.cards = [];
    this.onBeforeCards = new EventEmitter(true);
    this.onCards = new EventEmitter(true);
  }

  ngOnInit() { }

  ngOnChanges() {
    if (!this.type) {

      return;
    }
    if (!this.typeService.isType(this.type)) {
      this.router.navigate(['/cards']);
      return;

    }
    this.loadCards();
  }

  loadCards() {
    this.onBeforeCards.emit(true);
    this.magicTheGatheringService.getCardsByType(this.type).subscribe(
      (data: CardListModel) => {
        this.cards = data.cards;
        this.onCards.emit(true);
        
      },
      () => { }
    );
  }

}
