import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusinessUrl } from 'src/business/constant/url-constant';
import { MemberInfoQuery } from 'src/business/queries/member.query';
import { MemberInfo } from 'src/business/states/member-info.model';

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
  private memberInfo!: MemberInfo;

  public webId: string = '';
  public pwd: string = '';

  constructor(
    private router: Router,
    private memberInfoQuery: MemberInfoQuery
  ) {}

  /**
   * Angular life-cycle
   *
   * @memberof AAA01X02Component
   */
  public ngOnInit(): void {
    this.getMemberInfoStore();
  }

  /**
   * 获取memberInfoStore的值
   *
   * @private
   * @memberof AAA01X02Component
   */
  private getMemberInfoStore(): void {
    this.memberInfo = this.memberInfoQuery.getValue();
    if (this.memberInfo) {
      this.webId = this.memberInfo.webId;
      this.pwd = this.memberInfo.pwd;
    }
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
