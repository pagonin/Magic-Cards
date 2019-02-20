import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CardListModel } from '../models/magicthegathering/card-list.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MagicTheGatheringService {

  constructor(private http: HttpClient) { }



  getCardsById(idCard: string): Observable<CardListModel> {
    return this.http.get<CardListModel>(`https://api.magicthegathering.io/v1/cards?id=${idCard}`);
  }

  getCardsByType(type: string): Observable<CardListModel> {
    return this.http.get<CardListModel>(`https://api.magicthegathering.io/v1/cards?type=${type}`);
  }

  getCard(type: string): Observable<CardListModel> {
    return this.http.get<CardListModel>(`https://api.magicthegathering.io/v1/cards}`);
  }

}

