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
  constructor(private router: Router) {}

  public ngOnInit(): void {
    console.log('successful!');
  }

  public confirm(): void {
    this.router.navigate([BusinessUrl.AAA01X02]);
  }
}
