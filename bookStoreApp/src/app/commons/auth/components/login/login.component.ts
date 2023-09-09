import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginName: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParam) => {
      console.log(queryParam);
      this.loginName = queryParam['name'];
    });
  }

  goToSignUp() {
    this.router.navigate(['/auth/signup']);
  }

  goToBookDetails(bookId: number, authorId: number) {
    this.router.navigate(
      ['/public/book-details/', bookId, 'author', authorId],
      { queryParams: { authorName: 'davids' } }
    );
  }
}
