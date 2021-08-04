import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusinessUrl } from 'src/business/constant/url-constant';

/**
 * AAA01X01Component
 *
 * @export
 * @class AAA01X01Component
 * @implements {OnInit}
 */
@Component({
  selector: 'AAA01X01',
  templateUrl: './AAA01X01.component.html',
})
export class AAA01X01Component implements OnInit {
  public emailPlaceHolder: string = 'Email';
  public oldPwdPlaceHolder: string = 'old password';
  public newPwdPlaceHolder: string = 'new password';

  constructor(private router: Router) {}

  /**
   * Angular life-cycle
   *
   * @memberof AAA01X01Component
   */
  public ngOnInit(): void {
    console.log('successful!');
  }

  /**
   * 确认
   *
   * @memberof AAA01X01Component
   */
  public confirm(): void {
    this.router.navigate([BusinessUrl.AAA01X02]);
  }
}
