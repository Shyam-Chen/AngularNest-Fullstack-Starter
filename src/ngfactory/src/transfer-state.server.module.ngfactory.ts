/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core';
import * as import1 from '../../transfer-state.server.module';
import * as import2 from '../../transfer-state';
class ServerTransferStateModuleInjector extends import0.ɵNgModuleInjector<import1.ServerTransferStateModule> {
  _ServerTransferStateModule_0:import1.ServerTransferStateModule;
  __TransferState_1:import2.TransferState;
  constructor(parent:import0.Injector) {
    super(parent,([] as any[]),([] as any[]));
  }
  get _TransferState_1():import2.TransferState {
    if ((this.__TransferState_1 == null)) { (this.__TransferState_1 = new import2.TransferState()); }
    return this.__TransferState_1;
  }
  createInternal():import1.ServerTransferStateModule {
    this._ServerTransferStateModule_0 = new import1.ServerTransferStateModule();
    return this._ServerTransferStateModule_0;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import1.ServerTransferStateModule)) { return this._ServerTransferStateModule_0; }
    if ((token === import2.TransferState)) { return this._TransferState_1; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const ServerTransferStateModuleNgFactory:import0.NgModuleFactory<import1.ServerTransferStateModule> = new import0.NgModuleFactory<any>(ServerTransferStateModuleInjector,import1.ServerTransferStateModule);