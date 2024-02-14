import { Component, OnInit } from '@angular/core';
import { ISerie } from '../interfaces';
import { MultimediaService } from '../multimedia.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent {

  Series:ISerie[]=[];

  constructor(ds:MultimediaService){
    this.Series = ds.GetSeries();
  }
}
