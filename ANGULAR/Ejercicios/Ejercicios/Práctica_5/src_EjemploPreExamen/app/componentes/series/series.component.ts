import { Component } from '@angular/core';
import { ISerie } from '../Interfaces';
import { SerieMediaService } from '../serie-media.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent {

  Series:ISerie[]=[];
  dss:any;

  constructor(ds:SerieMediaService){
    this.dss = ds;
    this.Series = this.dss.GetSeries();
  }
}
