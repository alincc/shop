import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Order, ShippingStatus, ErrorResponse, Message } from '../model/interface';
import { CheckoutService } from '../services';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  @Input() order: Order;

  private isFinished: boolean = false;
  private errorMsg: Message;
  private ShippingStatus: typeof ShippingStatus = ShippingStatus

  constructor(
    private route: ActivatedRoute,
    private checkoutService: CheckoutService,
  ) { }

  ngOnInit() {
    this.fetchOrder();
  }

  fetchOrder(): void {
    this.route.params
      .switchMap((params: Params) =>
        this.checkoutService.getOrder(params['id'])
          .finally(() => this.isFinished = true)
      )
      .subscribe(
        order => this.order = new Order(order),
        err => this.handleError(err),
      )
  }

  handleError(error: ErrorResponse) {
    this.errorMsg = new Message('negative', error.message, 'Ooops..');
  }

}
