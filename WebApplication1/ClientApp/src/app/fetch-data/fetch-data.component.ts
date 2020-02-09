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

  public books: Book[];
  public http: HttpClient;
  public baseUrl: string;
  public index: Number;
  public i = 0;

  //test = {
  //  title: "Pricipia",
  //  author: "Newton"
  //}


  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {

    this.http = http;
    this.baseUrl = baseUrl;
    this.index = 0;

    this.http.get<Book[]>(baseUrl + 'api/book').subscribe(result => {
      console.log(result);
      this.books = result;
    }, error => console.error(error));

  }

  addBook() {
    this.http.post<Book>(this.baseUrl + 'api/book', {
      title: "Pricipia" + this.i,
      author: "Newton"
    })
      .subscribe(
        data => {
          console.log("POST Request is successful ", data);
          this.books.push(data);
        },
        error => {

          console.log("Error", error);

        }

    );
    this.i++;
  }

  deleteBook(data) {    

    this.http.delete<Book>(this.baseUrl + 'api/book/' + data.id)
      .subscribe(
        data => {
          for (let i = 0; this.books.length; i++) {
            if (this.books[i].id == data.id) {
              this.books.splice(i, 1);              
            }
          }
        }

      );
  }

}







