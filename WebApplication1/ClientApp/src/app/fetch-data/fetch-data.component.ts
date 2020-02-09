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

  test = {
    title: "Test title",
    author: "Test author"
  }


  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {

    http.get<Book[]>(baseUrl + 'api/book').subscribe(result => {
      console.log(result);
      this.books = result;
    }, error => console.error(error));

  }

  addBook(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    console.log("!");
    this.http.post(baseUrl + 'api/book', this.test)
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







