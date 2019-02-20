import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'my-magic-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  public title: string;
  public types: string[];
  public query: string;
  public isLoading:boolean;

  constructor(

    private route: ActivatedRoute) {
    this.query = null;
    this.title = "KIND OF MAGIC";
    this.isLoading = false;
  }

  toggleLoading(){
    this.isLoading = !this.isLoading;
  }

  ngOnInit() {
    // if (null === this.query) {
    this.route.url.subscribe(
      () => {

        // ecouter que l'URL change
        this.query = this.route.snapshot.params["query"];
      }
    );

  }
}

