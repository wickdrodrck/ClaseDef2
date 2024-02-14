import { Component } from '@angular/core';
import { ISerie } from '../interfaces';
import { MultimediaService } from '../multimedia.service';
import { ActivatedRoute } from '@angular/router';
import { SeriesService } from '../series.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent {
  Seriee:ISerie[]=[];

  pos:any;
  nombre:any;
  Serii:any;

  constructor(ds:SeriesService, private router:ActivatedRoute){
    this.pos = this.router.snapshot.paramMap.get("pos");
    this.Serii = ds.GetSerie(this.pos);
    
  }
}
