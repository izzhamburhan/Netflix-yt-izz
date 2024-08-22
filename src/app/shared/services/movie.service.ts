import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const options = {
  params: {
    include_adult: 'false',
    include_video: 'true',
    language: 'en-US',
    page: '1',
    sort_by: 'popularity.desc'
  },
  headers: {
    accept: 'application/json',
    // Authorization: 'Bearer ' + process.env['TMDB_API_KEY'] 
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZDkwMzQ3MWU1MzhiYWI0YmZkOTBkNTVkYjVmZWZmNSIsIm5iZiI6MTcyNDI1Mzk1Mi4zNTg2OTEsInN1YiI6IjY2YzQwNzdhMTBiNDM0OGRkMzk3MDI2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mn8vYrJ7CjrRETIjqBTuo0W-ME50P6-BiuP0pkgwOjw'
  }
}
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  http = inject(HttpClient);
  constructor() { }

  getMovies() {
    return this.http.get<any>('https://api.themoviedb.org/3/discover/movie', options);
  }
}
