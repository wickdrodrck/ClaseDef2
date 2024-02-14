import { Component } from '@angular/core';
import { ISerie } from '../Interfaces';
import { SeriesComponent } from '../series/series.component';
import { SerieMediaService } from '../serie-media.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent {
  pos:any;
  Seriecul:any;
  
  constructor(ds:SerieMediaService, private router:ActivatedRoute){
    this.pos = this.router.snapshot.paramMap.get("pos");
    this.Seriecul = ds.GetSerie(this.pos);
  }
}
