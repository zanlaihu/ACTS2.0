import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusinessUrl } from 'src/business/constant/url-constant';

/**
 * AAA01X02Component
 *
 * @export
 * @class AAA01X02Component
 * @implements {OnInit}
 */
@Component({
  selector: 'AAA01X02',
  templateUrl: './AAA01X02.component.html',
})
export class AAA01X02Component implements OnInit {
  constructor(private router: Router) {}

  /**
   * Angular life-cycle
   *
   * @memberof AAA01X02Component
   */
  public ngOnInit(): void {
    console.log('successful!');
  }

  /**
   * 确认按钮按下
   *
   * @memberof AAA01X02Component
   */
  public confirm(): void {
    this.router.navigate([BusinessUrl.AAA01X03]);
  }

  /**
   * 返回按钮按下
   *
   * @memberof AAA01X02Component
   */
  public back(): void {
    this.router.navigate([BusinessUrl.AAA01X01]);
  }
}
