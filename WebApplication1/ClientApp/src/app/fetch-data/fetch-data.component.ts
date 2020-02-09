import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

interface Book {
  id: number;
  title: string;
  author: string;
}

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})

export class BookService {
    [x: string]: any;

  public books: Book[];
  public http: HttpClient;
  public baseUrl: string;

  test = {
    title: "Test title",
    author: "Test author"
  }


  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {

    this.http = http;
    this.baseUrl = baseUrl;

    this.http.get<Book[]>(baseUrl + 'api/book').subscribe(result => {
      console.log(result);
      this.books = result;
    }, error => console.error(error));

  }

  addBook() {
    console.log("!");
    this.http.post<Book>(this.baseUrl + 'api/book', this.test)
      .subscribe(
        data => {
          console.log("POST Request is successful ", data);
        },
        error => {

          console.log("Error", error);

        }

      );
  }

}







