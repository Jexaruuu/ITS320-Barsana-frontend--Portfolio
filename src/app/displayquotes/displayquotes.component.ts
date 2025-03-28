import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotesService } from '../quote.service';

type Quotes = {
  _id: string;
  quote: string;
  author: string;
  title: string;
  published: string;
  isSpecial?: boolean; // Flag for a special quote
};

@Component({
  selector: 'displayquotes',
  standalone: true,
  imports: [CommonModule],
  providers: [QuotesService],
  templateUrl: './displayquotes.component.html',
  styleUrls: ['./displayquotes.component.css']
})
export class DisplayquotesComponent {
  quotes: Quotes[] = [];

  constructor(private newQuotes: QuotesService) {}

  async ngOnInit() {
    this.newQuotes.Get().subscribe({
      next: (quotes: Quotes[]) => {
        console.log("Fetched quotes:", quotes);
        this.quotes = quotes.map((quote, index) => ({
          ...quote,
          isSpecial: index === 2 // Example: Highlight the third quote
        }));
      },
      error: err => console.error("Error fetching quotes:", err)
    });
  }
}
