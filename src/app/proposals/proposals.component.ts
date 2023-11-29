import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.scss']
})
export class ProposalsComponent implements OnInit {
  names = ["Jeff", "Kevin", "John", "joe"];
  texts = ["hamster king", "realest hamster", "got a hamsterghini", "i woke up in a new bughatti"];
  images = ["docs/assets/img/hamster/5.jpg", "docs/assets/img/hamster/4.jpg", "docs/assets/img/hamster/7.jpg", "docs/assets/img/hamster/8.jpg"];

  constructor() {}

  ngOnInit(): void {
      
  }
}
