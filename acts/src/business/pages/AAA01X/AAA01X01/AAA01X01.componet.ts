import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusinessUrl } from 'src/business/constant/url-constant';
import { MemberService } from 'src/business/services/member.service';

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
  public oldPwdPlaceHolder: string = '输入当前的密码';
  public newPwdPlaceHolder: string = '输入新的密码';

  public email: string = '';
  public oldPwd: string = '';
  public newPwd: string = '';

  constructor(private router: Router, private memberService: MemberService) {}

  /**
   * Angular life-cycle
   *
   * @memberof AAA01X01Component
   */
  public ngOnInit(): void {}

  private updateMemberInfoStore(): void {
    this.memberService.updateMemberInfo({
      webId: this.email,
      pwd: this.newPwd,
    });
  }

  /**
   * 确认
   *
   * @memberof AAA01X01Component
   */
  public confirm(): void {
    if (this.newPwd === this.oldPwd) {
      this.updateMemberInfoStore();
      this.router.navigate([BusinessUrl.AAA01X02]);
    }
  }
}
