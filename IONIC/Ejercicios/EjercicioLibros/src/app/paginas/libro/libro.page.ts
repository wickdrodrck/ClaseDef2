import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Libro } from '../../libro';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.page.html',
  styleUrls: ['./libro.page.scss'],
})
export class LibroPage implements OnInit {
  id:any;
  libro:any;

  constructor(private r: ActivatedRoute, private router: Router) {

      this.id = this.r.snapshot.params['id'];
      this.libro = this.libros.find((l: { id: any; }) => l.id == this.id);
  }

  vuelta(){
    this.router.navigate(['/home']);
  }

  ngOnInit() {

  }

}
