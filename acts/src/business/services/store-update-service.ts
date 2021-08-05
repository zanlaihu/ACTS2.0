import { Injectable } from '@angular/core';
import { EntityStore } from '../../../node_modules/@datorama/akita';

/**
 * ストア更新用Service
 *
 * @export
 * @class StoreUpdateService
 * @extends {BaseService}
 */
@Injectable({ providedIn: 'root' })
export class StoreUpdateService {
  constructor() {}

  /**
   * ストアの全量更新
   *
   * @param {EntityStore<any>} targetStore
   * @param {*} newState
   * @memberof StoreUpdateService
   */
  public insertStore(targetStore: EntityStore<any>, newState: any): void {
    if (targetStore && newState) {
      targetStore.update(newState);
    }
  }

  /**
   * ストアの増量更新
   *
   * @param {EntityStore<any>} targetStore
   * @param {Partial<any>} newState
   * @memberof StoreUpdateService
   */
  public updateStore(
    targetStore: EntityStore<any>,
    newState: Partial<any>
  ): void {
    if (targetStore && newState) {
      targetStore.update({
        ...{},
        ...targetStore.getValue(),
        ...newState,
      });
    }
  }

  /**
   * ストアのクリア
   *
   * @param {EntityStore<any>} targetStore
   * @memberof StoreUpdateService
   */
  public clearStore(targetStore: EntityStore<any>): void {
    if (targetStore) {
      targetStore.reset();
    }
  }

  /**
   * ストアの削除
   *
   * @param {EntityStore<any>} targetStore
   * @memberof StoreUpdateService
   */
  public destroyStore(targetStore: EntityStore<any>): void {
    if (targetStore) {
      targetStore.destroy();
    }
  }

  /**
   * Sessionストアの増量更新
   *
   * @param {EntityStore<any>} targetStore
   * @param {Partial<any>} newState
   * @memberof StoreUpdateService
   */
  // public updateSessionStore(targetStore: string, newState: Partial<any>): void {
  //   if (targetStore && newState) {
  //     SessionStorageUtil.SET(targetStore, {
  //       ...{},
  //       ...SessionStorageUtil.GET(targetStore),
  //       ...newState,
  //     });
  //   }
  // }
}
