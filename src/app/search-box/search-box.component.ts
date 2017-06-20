import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchService } from '../services';
import { Product } from '../model/interface';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  @Output()
  searchEmitter: EventEmitter<any> = new EventEmitter<any>();

  isFinished: boolean = false;
  term = new FormControl();
  items: Product[];

  constructor(private searchService: SearchService) {
  }

  ngOnInit() {
    this.handleTermChanges();
  }

  handleTermChanges(): void {
    this.term.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => {
        this.isFinished = false;
        return this.searchService.search(term).finally(() => {
          this.isFinished = true
        })
      })
      .subscribe(items => this.items = items);
  }

  close(): void {
    this.searchEmitter.emit({ action: 'close' });
  }

  onSubmit(): void {
    this.searchEmitter.emit({ action: 'search', data: this.term.value });
  }
}
