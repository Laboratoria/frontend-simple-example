import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Movie } from 'src/app/shared/interfaces/Movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movieList: Movie[] | undefined;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.dataService.getAllMovies().subscribe((resp) => this.movieList = resp.films);
  }
}
