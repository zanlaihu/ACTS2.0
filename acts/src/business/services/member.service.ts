import { Injectable } from '@angular/core';
import { HttpApiService } from 'src/shared/services/http-api.service';
import {
  GetMemberInfoRequest,
  GetMemberInfoResponse,
  MemberInfo,
  UpdatePwdRequest,
  UpdatePwdResponse,
} from '../states/member-info.model';
import { MemberInfoStore } from '../states/member-info.store';

@Injectable({ providedIn: 'root' })
export class MemberService {
  constructor(
    private memberInfoStore: MemberInfoStore,
    private http: HttpApiService
  ) {}

  // public getMemberInfo(
  //   getMemberInfoRequest: GetMemberInfoRequest
  // ): Promise<GetMemberInfoResponse> {
  //   return this.http.post().pipe().toPromise();
  // }

  // public updatePwd(
  //   updatePwdRequest: UpdatePwdRequest
  // ): Promise<UpdatePwdResponse> {}

  /**
   * 增量更新
   *
   * @param {Partial<MemberInfo>} newState
   * @memberof MemberService
   */
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
