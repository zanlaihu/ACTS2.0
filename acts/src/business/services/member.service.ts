import { Injectable } from '@angular/core';
import { MemberInfo } from '../states/member-info.model';
import { MemberInfoStore } from '../states/member-info.store';

@Injectable({ providedIn: 'root' })
export class MemberService {
  constructor(private memberInfoStore: MemberInfoStore) {}

  public updateMemberInfo(newState: Partial<MemberInfo>): void {
    const preState: MemberInfo = this.memberInfoStore.getValue();
    const targetState: MemberInfo = {
      ...{},
      ...preState,
      ...newState,
    };
    this.memberInfoStore.update(targetState);
  }
}
