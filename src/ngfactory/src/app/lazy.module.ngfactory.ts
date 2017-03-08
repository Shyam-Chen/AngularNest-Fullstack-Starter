/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core';
import * as import1 from '../../../app/lazy.module';
import * as import2 from '@angular/router';
class LazyModuleInjector extends import0.ɵNgModuleInjector<import1.LazyModule> {
  _RouterModule_0:import2.RouterModule;
  _LazyModule_1:import1.LazyModule;
  __ROUTES_2:any[];
  constructor(parent:import0.Injector) {
    super(parent,[LazyViewNgFactory],([] as any[]));
  }
  get _ROUTES_2():any[] {
        if ((this.__ROUTES_2 == null)) { (this.__ROUTES_2 = [[{
          path: '',
          component: import1.LazyView,
          pathMatch: 'full'
        }
    ]]); }
    return this.__ROUTES_2;
  }
  createInternal():import1.LazyModule {
    this._RouterModule_0 = new import2.RouterModule(this.parent.get(import2.ɵa,(null as any)));
    this._LazyModule_1 = new import1.LazyModule();
    return this._LazyModule_1;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.RouterModule)) { return this._RouterModule_0; }
    if ((token === import1.LazyModule)) { return this._LazyModule_1; }
    if ((token === import2.ROUTES)) { return this._ROUTES_2; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const LazyModuleNgFactory:import0.NgModuleFactory<import1.LazyModule> = new import0.NgModuleFactory<any>(LazyModuleInjector,import1.LazyModule);
const styles_LazyView:any[] = ([] as any[]);
export const RenderType_LazyView:import0.RendererTypeV2 = import0.ɵcreateRendererTypeV2({
  encapsulation: 2,
  styles: styles_LazyView,
  data: {animation: ([] as any[])}
}
);
export function View_LazyView_0():import0.ɵViewDefinition {
  return import0.ɵviewDef(0,[
    import0.ɵelementDef(0,(null as any),(null as any),1,'h3',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['i\'m lazy'])
  ]
  ,(null as any),(null as any));
}
const RenderType_LazyView_Host:import0.RendererTypeV2 = import0.ɵcreateRendererTypeV2({
  encapsulation: 2,
  styles: ([] as any[]),
  data: {animation: ([] as any[])}
}
);
function View_LazyView_Host_0():import0.ɵViewDefinition {
  return import0.ɵviewDef(0,[
    import0.ɵelementDef(0,(null as any),(null as any),1,'lazy-view',([] as any[]),(null as any),(null as any),(null as any),View_LazyView_0,RenderType_LazyView),
    import0.ɵdirectiveDef(1024,(null as any),0,import1.LazyView,([] as any[]),(null as any),(null as any))
  ]
  ,(null as any),(null as any));
}
export const LazyViewNgFactory:import0.ComponentFactory<import1.LazyView> = import0.ɵcreateComponentFactory('lazy-view',import1.LazyView,View_LazyView_Host_0);