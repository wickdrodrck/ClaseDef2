import { Component, OnInit } from '@angular/core';
import { ISerie } from '../interfaces';
import { MultimediaService } from '../multimedia.service';
import { SeriesService } from '../series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent {

  Series:ISerie[]=[];

  constructor(ds:SeriesService){
    this.Series = ds.GetSeries();
  }
}
