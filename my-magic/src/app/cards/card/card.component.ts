import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CardListModel } from 'src/app/shared/models/magicthegathering/card-list.model';
import { CardModel } from 'src/app/shared/models/magicthegathering/card-model';
import { MagicTheGatheringService } from 'src/app/shared/services/magic-the-gathering.service';

@Component({
  selector: 'my-magic-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnChanges {

  @Input() idCard: string;
  public card: CardModel

  constructor(private magicTheGatheringService : MagicTheGatheringService)
  {  }

  ngOnInit() { }

  ngOnChanges() {

    if (this.idCard) {
      this.magicTheGatheringService.getCardsById(this.idCard).subscribe(
        (data: CardListModel) => this.card = data.cards[0],
        () => { }
      );
    }

  }

}
