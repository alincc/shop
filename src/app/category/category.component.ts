import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Category, ErrorResponse, Message } from '../model/interface';
import { CategoryService } from '../services';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  private errorMsg: Message;
  private category: Category = null;
  isFinished: boolean = false;

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) =>
        this.categoryService.getCategory(params['id'])
          .finally(() => this.isFinished = true)
      )
      .subscribe(
        category => this.category = category,
        err => this.handleError(err),
      )
  }

  handleError(error: ErrorResponse) {
    this.errorMsg = new Message('negative', error.message, 'Ooops..');
  }

  getCategory() {
    return this.category;
  }

  getErrorMsg(): Message {
    return this.errorMsg;
  }

}
