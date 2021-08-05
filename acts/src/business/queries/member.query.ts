import { Injectable } from '@angular/core';
import { MemberInfo } from '../states/member-info.model';
import { MemberInfoStore } from '../states/member-info.store';
import { Query } from '@datorama/akita';

@Injectable({ providedIn: 'root' })
export class MemberInfoQuery extends Query<MemberInfo> {
  constructor(protected store: MemberInfoStore) {
    super(store);
  }
}
