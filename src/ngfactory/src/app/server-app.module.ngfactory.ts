/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core';
import * as import1 from '../../../app/server-app.module';
import * as import2 from '@angular/http';
import * as import3 from '@angular/common';
import * as import4 from '@angular/platform-browser';
import * as import5 from '@angular/platform-server';
import * as import6 from '../../../transfer-state.server.module';
import * as import7 from '@angular/router';
import * as import8 from '../../../app/app.module';
import * as import9 from '../../../transfer-state';
<<<<<<< HEAD
import * as import10 from './app.module.ngfactory';
import * as import11 from './app.component.ngfactory';
=======
import * as import10 from './home-view.component.ngfactory';
import * as import11 from './app.component.ngfactory';
import * as import12 from '../../../app/home-view.component';
>>>>>>> dc4570b... 211th Commit
class ServerAppModuleInjector extends import0.ɵNgModuleInjector<import1.ServerAppModule> {
  _HttpModule_0:import2.HttpModule;
  _CommonModule_1:import3.CommonModule;
  _ApplicationModule_2:import0.ApplicationModule;
  _BrowserModule_3:import4.BrowserModule;
  _ServerModule_4:import5.ServerModule;
  _ServerTransferStateModule_5:import6.ServerTransferStateModule;
  _ɵa_6:any;
  _RouterModule_7:import7.RouterModule;
  _AppModule_8:import8.AppModule;
  _ServerAppModule_9:import1.ServerAppModule;
  __BrowserXhr_10:import5.ɵe;
  __ResponseOptions_11:import2.BaseResponseOptions;
  __XSRFStrategy_12:import5.ɵf;
  __XHRBackend_13:import2.XHRBackend;
  __RequestOptions_14:import2.BaseRequestOptions;
  __Http_15:any;
  __LOCALE_ID_16:any;
  __NgLocalization_17:import3.NgLocaleLocalization;
  _ErrorHandler_18:any;
  _APP_INITIALIZER_19:any[];
  _ApplicationInitStatus_20:import0.ApplicationInitStatus;
  _Testability_21:import0.Testability;
  _ɵf_22:import0.ɵf;
  __ApplicationRef_23:any;
  __Compiler_24:import0.Compiler;
  __APP_ID_25:any;
  __ɵd_26:import5.ɵd;
  __ɵSharedStylesHost_27:any;
  __AnimationDriver_28:any;
  __ɵb_29:import5.ɵb;
  __RootRenderer_30:any;
  __DomSanitizer_31:import4.ɵf;
  __Sanitizer_32:any;
  __ɵz_33:import0.ɵz;
  __ɵViewUtils_34:import0.ɵViewUtils;
  __IterableDiffers_35:any;
  __KeyValueDiffers_36:any;
  __HAMMER_GESTURE_CONFIG_37:import4.HammerGestureConfig;
  __EVENT_MANAGER_PLUGINS_38:any[];
  __EventManager_39:import4.EventManager;
  _ɵDomSharedStylesHost_40:import4.ɵDomSharedStylesHost;
  __ɵDomRootRenderer_41:import4.ɵDomRootRenderer_;
  __ɵDomRendererFactoryV2_42:import4.ɵDomRendererFactoryV2;
  __ɵc_43:import5.ɵc;
  __RendererFactoryV2_44:any;
  __Meta_45:import4.Meta;
  __Title_46:import4.Title;
  __TransferState_47:import9.TransferState;
  __APP_BASE_HREF_48:any;
  __ROUTER_CONFIGURATION_49:any;
  __LocationStrategy_50:any;
  __Location_51:import3.Location;
  __UrlSerializer_52:import7.DefaultUrlSerializer;
  __RouterOutletMap_53:import7.RouterOutletMap;
  __NgModuleFactoryLoader_54:import0.SystemJsNgModuleLoader;
  __ROUTES_55:any[];
  __Router_56:any;
  __ActivatedRoute_57:any;
  _NoPreloading_58:import7.NoPreloading;
  _PreloadingStrategy_59:any;
  _RouterPreloader_60:import7.RouterPreloader;
  __PreloadAllModules_61:import7.PreloadAllModules;
  __NgProbeToken_62:any[];
  __ROUTER_INITIALIZER_63:any;
  __APP_BOOTSTRAP_LISTENER_64:any[];
  constructor(parent:import0.Injector) {
    super(parent,[
<<<<<<< HEAD
      import10.HomeComponentNgFactory,
      import10.AboutComponentNgFactory,
=======
      import10.HomeViewNgFactory,
>>>>>>> dc4570b... 211th Commit
      import11.AppComponentNgFactory
    ]
    ,[import11.AppComponentNgFactory]);
  }
  get _BrowserXhr_10():import5.ɵe {
    if ((this.__BrowserXhr_10 == null)) { (this.__BrowserXhr_10 = new import5.ɵe()); }
    return this.__BrowserXhr_10;
  }
  get _ResponseOptions_11():import2.BaseResponseOptions {
    if ((this.__ResponseOptions_11 == null)) { (this.__ResponseOptions_11 = new import2.BaseResponseOptions()); }
    return this.__ResponseOptions_11;
  }
  get _XSRFStrategy_12():import5.ɵf {
    if ((this.__XSRFStrategy_12 == null)) { (this.__XSRFStrategy_12 = new import5.ɵf()); }
    return this.__XSRFStrategy_12;
  }
  get _XHRBackend_13():import2.XHRBackend {
    if ((this.__XHRBackend_13 == null)) { (this.__XHRBackend_13 = new import2.XHRBackend(this._BrowserXhr_10,this._ResponseOptions_11,this._XSRFStrategy_12)); }
    return this.__XHRBackend_13;
  }
  get _RequestOptions_14():import2.BaseRequestOptions {
    if ((this.__RequestOptions_14 == null)) { (this.__RequestOptions_14 = new import2.BaseRequestOptions()); }
    return this.__RequestOptions_14;
  }
  get _Http_15():any {
    if ((this.__Http_15 == null)) { (this.__Http_15 = import5.ɵg(this._XHRBackend_13,this._RequestOptions_14)); }
    return this.__Http_15;
  }
  get _LOCALE_ID_16():any {
    if ((this.__LOCALE_ID_16 == null)) { (this.__LOCALE_ID_16 = import0.ɵo(this.parent.get(import0.LOCALE_ID,(null as any)))); }
    return this.__LOCALE_ID_16;
  }
  get _NgLocalization_17():import3.NgLocaleLocalization {
    if ((this.__NgLocalization_17 == null)) { (this.__NgLocalization_17 = new import3.NgLocaleLocalization(this._LOCALE_ID_16)); }
    return this.__NgLocalization_17;
  }
  get _ApplicationRef_23():any {
    if ((this.__ApplicationRef_23 == null)) { (this.__ApplicationRef_23 = this._ɵf_22); }
    return this.__ApplicationRef_23;
  }
  get _Compiler_24():import0.Compiler {
    if ((this.__Compiler_24 == null)) { (this.__Compiler_24 = new import0.Compiler()); }
    return this.__Compiler_24;
  }
  get _APP_ID_25():any {
    if ((this.__APP_ID_25 == null)) { (this.__APP_ID_25 = import0.ɵg()); }
    return this.__APP_ID_25;
  }
  get _ɵd_26():import5.ɵd {
    if ((this.__ɵd_26 == null)) { (this.__ɵd_26 = new import5.ɵd(this.parent.get(import4.DOCUMENT),this.parent.get(import4.ɵTRANSITION_ID,(null as any)))); }
    return this.__ɵd_26;
  }
  get _ɵSharedStylesHost_27():any {
    if ((this.__ɵSharedStylesHost_27 == null)) { (this.__ɵSharedStylesHost_27 = this._ɵd_26); }
    return this.__ɵSharedStylesHost_27;
  }
  get _AnimationDriver_28():any {
    if ((this.__AnimationDriver_28 == null)) { (this.__AnimationDriver_28 = import4.ɵc()); }
    return this.__AnimationDriver_28;
  }
  get _ɵb_29():import5.ɵb {
    if ((this.__ɵb_29 == null)) { (this.__ɵb_29 = new import5.ɵb(this.parent.get(import4.DOCUMENT),this._ɵSharedStylesHost_27,this._AnimationDriver_28,this._APP_ID_25,this.parent.get(import0.NgZone))); }
    return this.__ɵb_29;
  }
  get _RootRenderer_30():any {
    if ((this.__RootRenderer_30 == null)) { (this.__RootRenderer_30 = import5.ɵa(this._ɵb_29)); }
    return this.__RootRenderer_30;
  }
  get _DomSanitizer_31():import4.ɵf {
    if ((this.__DomSanitizer_31 == null)) { (this.__DomSanitizer_31 = new import4.ɵf(this.parent.get(import4.DOCUMENT))); }
    return this.__DomSanitizer_31;
  }
  get _Sanitizer_32():any {
    if ((this.__Sanitizer_32 == null)) { (this.__Sanitizer_32 = this._DomSanitizer_31); }
    return this.__Sanitizer_32;
  }
  get _ɵz_33():import0.ɵz {
    if ((this.__ɵz_33 == null)) { (this.__ɵz_33 = new import0.ɵz(this.parent.get(import0.NgZone))); }
    return this.__ɵz_33;
  }
  get _ɵViewUtils_34():import0.ɵViewUtils {
    if ((this.__ɵViewUtils_34 == null)) { (this.__ɵViewUtils_34 = new import0.ɵViewUtils(this._RootRenderer_30,this._Sanitizer_32,this._ɵz_33)); }
    return this.__ɵViewUtils_34;
  }
  get _IterableDiffers_35():any {
    if ((this.__IterableDiffers_35 == null)) { (this.__IterableDiffers_35 = import0.ɵm()); }
    return this.__IterableDiffers_35;
  }
  get _KeyValueDiffers_36():any {
    if ((this.__KeyValueDiffers_36 == null)) { (this.__KeyValueDiffers_36 = import0.ɵn()); }
    return this.__KeyValueDiffers_36;
  }
  get _HAMMER_GESTURE_CONFIG_37():import4.HammerGestureConfig {
    if ((this.__HAMMER_GESTURE_CONFIG_37 == null)) { (this.__HAMMER_GESTURE_CONFIG_37 = new import4.HammerGestureConfig()); }
    return this.__HAMMER_GESTURE_CONFIG_37;
  }
  get _EVENT_MANAGER_PLUGINS_38():any[] {
    if ((this.__EVENT_MANAGER_PLUGINS_38 == null)) { (this.__EVENT_MANAGER_PLUGINS_38 = [
      new import4.ɵDomEventsPlugin(this.parent.get(import4.DOCUMENT)),
      new import4.ɵKeyEventsPlugin(this.parent.get(import4.DOCUMENT)),
      new import4.ɵHammerGesturesPlugin(this.parent.get(import4.DOCUMENT),this._HAMMER_GESTURE_CONFIG_37)
    ]
    ); }
    return this.__EVENT_MANAGER_PLUGINS_38;
  }
  get _EventManager_39():import4.EventManager {
    if ((this.__EventManager_39 == null)) { (this.__EventManager_39 = new import4.EventManager(this._EVENT_MANAGER_PLUGINS_38,this.parent.get(import0.NgZone))); }
    return this.__EventManager_39;
  }
  get _ɵDomRootRenderer_41():import4.ɵDomRootRenderer_ {
    if ((this.__ɵDomRootRenderer_41 == null)) { (this.__ɵDomRootRenderer_41 = new import4.ɵDomRootRenderer_(this.parent.get(import4.DOCUMENT),this._EventManager_39,this._ɵDomSharedStylesHost_40,this._AnimationDriver_28,this._APP_ID_25)); }
    return this.__ɵDomRootRenderer_41;
  }
  get _ɵDomRendererFactoryV2_42():import4.ɵDomRendererFactoryV2 {
    if ((this.__ɵDomRendererFactoryV2_42 == null)) { (this.__ɵDomRendererFactoryV2_42 = new import4.ɵDomRendererFactoryV2(this._EventManager_39,this._ɵDomSharedStylesHost_40)); }
    return this.__ɵDomRendererFactoryV2_42;
  }
  get _ɵc_43():import5.ɵc {
    if ((this.__ɵc_43 == null)) { (this.__ɵc_43 = new import5.ɵc(this.parent.get(import0.NgZone),this.parent.get(import4.DOCUMENT),this._ɵSharedStylesHost_27)); }
    return this.__ɵc_43;
  }
  get _RendererFactoryV2_44():any {
    if ((this.__RendererFactoryV2_44 == null)) { (this.__RendererFactoryV2_44 = this._ɵc_43); }
    return this.__RendererFactoryV2_44;
  }
  get _Meta_45():import4.Meta {
    if ((this.__Meta_45 == null)) { (this.__Meta_45 = new import4.Meta(this.parent.get(import4.DOCUMENT))); }
    return this.__Meta_45;
  }
  get _Title_46():import4.Title {
    if ((this.__Title_46 == null)) { (this.__Title_46 = new import4.Title(this.parent.get(import4.DOCUMENT))); }
    return this.__Title_46;
  }
  get _TransferState_47():import9.TransferState {
    if ((this.__TransferState_47 == null)) { (this.__TransferState_47 = new import9.TransferState()); }
    return this.__TransferState_47;
  }
  get _APP_BASE_HREF_48():any {
    if ((this.__APP_BASE_HREF_48 == null)) { (this.__APP_BASE_HREF_48 = '/'); }
    return this.__APP_BASE_HREF_48;
  }
  get _ROUTER_CONFIGURATION_49():any {
    if ((this.__ROUTER_CONFIGURATION_49 == null)) { (this.__ROUTER_CONFIGURATION_49 = {}); }
    return this.__ROUTER_CONFIGURATION_49;
  }
  get _LocationStrategy_50():any {
    if ((this.__LocationStrategy_50 == null)) { (this.__LocationStrategy_50 = import7.ɵc(this.parent.get(import3.PlatformLocation),this._APP_BASE_HREF_48,this._ROUTER_CONFIGURATION_49)); }
    return this.__LocationStrategy_50;
  }
  get _Location_51():import3.Location {
    if ((this.__Location_51 == null)) { (this.__Location_51 = new import3.Location(this._LocationStrategy_50)); }
    return this.__Location_51;
  }
  get _UrlSerializer_52():import7.DefaultUrlSerializer {
    if ((this.__UrlSerializer_52 == null)) { (this.__UrlSerializer_52 = new import7.DefaultUrlSerializer()); }
    return this.__UrlSerializer_52;
  }
  get _RouterOutletMap_53():import7.RouterOutletMap {
    if ((this.__RouterOutletMap_53 == null)) { (this.__RouterOutletMap_53 = new import7.RouterOutletMap()); }
    return this.__RouterOutletMap_53;
  }
  get _NgModuleFactoryLoader_54():import0.SystemJsNgModuleLoader {
    if ((this.__NgModuleFactoryLoader_54 == null)) { (this.__NgModuleFactoryLoader_54 = new import0.SystemJsNgModuleLoader(this._Compiler_24,this.parent.get(import0.SystemJsNgModuleLoaderConfig,(null as any)))); }
    return this.__NgModuleFactoryLoader_54;
  }
  get _ROUTES_55():any[] {
      if ((this.__ROUTES_55 == null)) { (this.__ROUTES_55 = [[
        {
          path: '',
<<<<<<< HEAD
          component: import8.HomeComponent,
=======
          component: import12.HomeView,
>>>>>>> dc4570b... 211th Commit
          pathMatch: 'full'
        }
        ,
        {
<<<<<<< HEAD
          path: 'about',
          component: import8.AboutComponent,
          pathMatch: 'full'
=======
          path: 'lazy',
          loadChildren: './lazy.module#LazyModule'
>>>>>>> dc4570b... 211th Commit
        }

      ]
    ]); }
    return this.__ROUTES_55;
  }
  get _Router_56():any {
    if ((this.__Router_56 == null)) { (this.__Router_56 = import7.ɵe(this._ApplicationRef_23,this._UrlSerializer_52,this._RouterOutletMap_53,this._Location_51,this,this._NgModuleFactoryLoader_54,this._Compiler_24,this._ROUTES_55,this._ROUTER_CONFIGURATION_49,this.parent.get(import7.UrlHandlingStrategy,(null as any)),this.parent.get(import7.RouteReuseStrategy,(null as any)))); }
    return this.__Router_56;
  }
  get _ActivatedRoute_57():any {
    if ((this.__ActivatedRoute_57 == null)) { (this.__ActivatedRoute_57 = import7.ɵf(this._Router_56)); }
    return this.__ActivatedRoute_57;
  }
  get _PreloadAllModules_61():import7.PreloadAllModules {
    if ((this.__PreloadAllModules_61 == null)) { (this.__PreloadAllModules_61 = new import7.PreloadAllModules()); }
    return this.__PreloadAllModules_61;
  }
  get _NgProbeToken_62():any[] {
    if ((this.__NgProbeToken_62 == null)) { (this.__NgProbeToken_62 = [import7.ɵb()]); }
    return this.__NgProbeToken_62;
  }
  get _ROUTER_INITIALIZER_63():any {
    if ((this.__ROUTER_INITIALIZER_63 == null)) { (this.__ROUTER_INITIALIZER_63 = import7.ɵg(this._Router_56,this._ApplicationRef_23,this._RouterPreloader_60,this._ROUTER_CONFIGURATION_49)); }
    return this.__ROUTER_INITIALIZER_63;
  }
  get _APP_BOOTSTRAP_LISTENER_64():any[] {
    if ((this.__APP_BOOTSTRAP_LISTENER_64 == null)) { (this.__APP_BOOTSTRAP_LISTENER_64 = [this._ROUTER_INITIALIZER_63]); }
    return this.__APP_BOOTSTRAP_LISTENER_64;
  }
  createInternal():import1.ServerAppModule {
    this._HttpModule_0 = new import2.HttpModule();
    this._CommonModule_1 = new import3.CommonModule();
    this._ApplicationModule_2 = new import0.ApplicationModule();
    this._BrowserModule_3 = new import4.BrowserModule(this.parent.get(import4.BrowserModule,(null as any)));
    this._ServerModule_4 = new import5.ServerModule();
    this._ServerTransferStateModule_5 = new import6.ServerTransferStateModule();
    this._ɵa_6 = import7.ɵd(this.parent.get(import7.Router,(null as any)));
    this._RouterModule_7 = new import7.RouterModule(this._ɵa_6);
    this._AppModule_8 = new import8.AppModule();
    this._ServerAppModule_9 = new import1.ServerAppModule();
    this._ErrorHandler_18 = import4.ɵa();
    this._APP_INITIALIZER_19 = [import0.ɵp];
    this._ApplicationInitStatus_20 = new import0.ApplicationInitStatus(this._APP_INITIALIZER_19);
    this._Testability_21 = new import0.Testability(this.parent.get(import0.NgZone));
    this._ɵf_22 = new import0.ɵf(this.parent.get(import0.NgZone),this.parent.get(import0.ɵConsole),this,this._ErrorHandler_18,this,this._ApplicationInitStatus_20,this.parent.get(import0.TestabilityRegistry,(null as any)),this._Testability_21);
    this._ɵDomSharedStylesHost_40 = new import4.ɵDomSharedStylesHost(this.parent.get(import4.DOCUMENT));
    this._NoPreloading_58 = new import7.NoPreloading();
    this._PreloadingStrategy_59 = this._NoPreloading_58;
    this._RouterPreloader_60 = new import7.RouterPreloader(this._Router_56,this._NgModuleFactoryLoader_54,this._Compiler_24,this,this._PreloadingStrategy_59);
    return this._ServerAppModule_9;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.HttpModule)) { return this._HttpModule_0; }
    if ((token === import3.CommonModule)) { return this._CommonModule_1; }
    if ((token === import0.ApplicationModule)) { return this._ApplicationModule_2; }
    if ((token === import4.BrowserModule)) { return this._BrowserModule_3; }
    if ((token === import5.ServerModule)) { return this._ServerModule_4; }
    if ((token === import6.ServerTransferStateModule)) { return this._ServerTransferStateModule_5; }
    if ((token === import7.ɵa)) { return this._ɵa_6; }
    if ((token === import7.RouterModule)) { return this._RouterModule_7; }
    if ((token === import8.AppModule)) { return this._AppModule_8; }
    if ((token === import1.ServerAppModule)) { return this._ServerAppModule_9; }
    if ((token === import2.BrowserXhr)) { return this._BrowserXhr_10; }
    if ((token === import2.ResponseOptions)) { return this._ResponseOptions_11; }
    if ((token === import2.XSRFStrategy)) { return this._XSRFStrategy_12; }
    if ((token === import2.XHRBackend)) { return this._XHRBackend_13; }
    if ((token === import2.RequestOptions)) { return this._RequestOptions_14; }
    if ((token === import2.Http)) { return this._Http_15; }
    if ((token === import0.LOCALE_ID)) { return this._LOCALE_ID_16; }
    if ((token === import3.NgLocalization)) { return this._NgLocalization_17; }
    if ((token === import0.ErrorHandler)) { return this._ErrorHandler_18; }
    if ((token === import0.APP_INITIALIZER)) { return this._APP_INITIALIZER_19; }
    if ((token === import0.ApplicationInitStatus)) { return this._ApplicationInitStatus_20; }
    if ((token === import0.Testability)) { return this._Testability_21; }
    if ((token === import0.ɵf)) { return this._ɵf_22; }
    if ((token === import0.ApplicationRef)) { return this._ApplicationRef_23; }
    if ((token === import0.Compiler)) { return this._Compiler_24; }
    if ((token === import0.APP_ID)) { return this._APP_ID_25; }
    if ((token === import5.ɵd)) { return this._ɵd_26; }
    if ((token === import4.ɵSharedStylesHost)) { return this._ɵSharedStylesHost_27; }
    if ((token === import4.AnimationDriver)) { return this._AnimationDriver_28; }
    if ((token === import5.ɵb)) { return this._ɵb_29; }
    if ((token === import0.RootRenderer)) { return this._RootRenderer_30; }
    if ((token === import4.DomSanitizer)) { return this._DomSanitizer_31; }
    if ((token === import0.Sanitizer)) { return this._Sanitizer_32; }
    if ((token === import0.ɵz)) { return this._ɵz_33; }
    if ((token === import0.ɵViewUtils)) { return this._ɵViewUtils_34; }
    if ((token === import0.IterableDiffers)) { return this._IterableDiffers_35; }
    if ((token === import0.KeyValueDiffers)) { return this._KeyValueDiffers_36; }
    if ((token === import4.HAMMER_GESTURE_CONFIG)) { return this._HAMMER_GESTURE_CONFIG_37; }
    if ((token === import4.EVENT_MANAGER_PLUGINS)) { return this._EVENT_MANAGER_PLUGINS_38; }
    if ((token === import4.EventManager)) { return this._EventManager_39; }
    if ((token === import4.ɵDomSharedStylesHost)) { return this._ɵDomSharedStylesHost_40; }
    if ((token === import4.ɵDomRootRenderer)) { return this._ɵDomRootRenderer_41; }
    if ((token === import4.ɵDomRendererFactoryV2)) { return this._ɵDomRendererFactoryV2_42; }
    if ((token === import5.ɵc)) { return this._ɵc_43; }
    if ((token === import0.RendererFactoryV2)) { return this._RendererFactoryV2_44; }
    if ((token === import4.Meta)) { return this._Meta_45; }
    if ((token === import4.Title)) { return this._Title_46; }
    if ((token === import9.TransferState)) { return this._TransferState_47; }
    if ((token === import3.APP_BASE_HREF)) { return this._APP_BASE_HREF_48; }
    if ((token === import7.ROUTER_CONFIGURATION)) { return this._ROUTER_CONFIGURATION_49; }
    if ((token === import3.LocationStrategy)) { return this._LocationStrategy_50; }
    if ((token === import3.Location)) { return this._Location_51; }
    if ((token === import7.UrlSerializer)) { return this._UrlSerializer_52; }
    if ((token === import7.RouterOutletMap)) { return this._RouterOutletMap_53; }
    if ((token === import0.NgModuleFactoryLoader)) { return this._NgModuleFactoryLoader_54; }
    if ((token === import7.ROUTES)) { return this._ROUTES_55; }
    if ((token === import7.Router)) { return this._Router_56; }
    if ((token === import7.ActivatedRoute)) { return this._ActivatedRoute_57; }
    if ((token === import7.NoPreloading)) { return this._NoPreloading_58; }
    if ((token === import7.PreloadingStrategy)) { return this._PreloadingStrategy_59; }
    if ((token === import7.RouterPreloader)) { return this._RouterPreloader_60; }
    if ((token === import7.PreloadAllModules)) { return this._PreloadAllModules_61; }
    if ((token === import0.NgProbeToken)) { return this._NgProbeToken_62; }
    if ((token === import7.ROUTER_INITIALIZER)) { return this._ROUTER_INITIALIZER_63; }
    if ((token === import0.APP_BOOTSTRAP_LISTENER)) { return this._APP_BOOTSTRAP_LISTENER_64; }
    return notFoundResult;
  }
  destroyInternal():void {
    this._ɵf_22.ngOnDestroy();
    this._ɵDomSharedStylesHost_40.ngOnDestroy();
    this._RouterPreloader_60.ngOnDestroy();
  }
}
export const ServerAppModuleNgFactory:import0.NgModuleFactory<import1.ServerAppModule> = new import0.NgModuleFactory<any>(ServerAppModuleInjector,import1.ServerAppModule);