import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusinessUrl } from 'src/business/constant/url-constant';

/**
 * AAA01X03Component
 *
 * @export
 * @class AAA01X03Component
 * @implements {OnInit}
 */
@Component({
  selector: 'AAA01X03',
  templateUrl: './AAA01X03.component.html',
})
export class AAA01X03Component implements OnInit {
  constructor(private router: Router) {}

  public ngOnInit(): void {
    console.log('successful!');
  }

  /**
   * 确认按钮按下
   *
   * @memberof AAA01X03Component
   */
  public confirm(): void {
    this.router.navigate([BusinessUrl.AAA01X01]);
  }

  /**
   * 返回按钮按下
   *
   * @memberof AAA01X03Component
   */
  public back(): void {
    this.router.navigate([BusinessUrl.AAA01X02]);
  }
}
