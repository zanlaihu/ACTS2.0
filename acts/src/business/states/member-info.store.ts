import { Injectable } from '@angular/core';
import { EntityStore, StoreConfig } from '@datorama/akita';
import { MemberInfo } from './member-info.model';

const initialState = {};

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'App.MemberInfo', resettable: true })
export class MemberInfoStore extends EntityStore<MemberInfo> {
  constructor() {
    super(initialState);
  }
}
