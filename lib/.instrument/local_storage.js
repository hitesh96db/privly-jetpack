
var __cov_Eqwnvcz47L2WFx8Uw4SlNw = (Function('return this'))();
if (!__cov_Eqwnvcz47L2WFx8Uw4SlNw.__coverage__) { __cov_Eqwnvcz47L2WFx8Uw4SlNw.__coverage__ = {}; }
__cov_Eqwnvcz47L2WFx8Uw4SlNw = __cov_Eqwnvcz47L2WFx8Uw4SlNw.__coverage__;
if (!(__cov_Eqwnvcz47L2WFx8Uw4SlNw['/home/hitesh96db/Documents/privly-jetpack/lib/local_storage.js'])) {
   __cov_Eqwnvcz47L2WFx8Uw4SlNw['/home/hitesh96db/Documents/privly-jetpack/lib/local_storage.js'] = {"path":"/home/hitesh96db/Documents/privly-jetpack/lib/local_storage.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0},"b":{},"f":{},"fnMap":{},"statementMap":{"1":{"start":{"line":8,"column":0},"end":{"line":8,"column":98}},"2":{"start":{"line":10,"column":0},"end":{"line":10,"column":37}},"3":{"start":{"line":12,"column":0},"end":{"line":12,"column":31}},"4":{"start":{"line":14,"column":0},"end":{"line":16,"column":51}},"5":{"start":{"line":18,"column":0},"end":{"line":18,"column":16}}},"branchMap":{}};
}
__cov_Eqwnvcz47L2WFx8Uw4SlNw = __cov_Eqwnvcz47L2WFx8Uw4SlNw['/home/hitesh96db/Documents/privly-jetpack/lib/local_storage.js'];
__cov_Eqwnvcz47L2WFx8Uw4SlNw.s['1']++;var {ls}=require('../chrome/content/privly-applications/shared/javascripts/local_storage.js');__cov_Eqwnvcz47L2WFx8Uw4SlNw.s['2']++;const {Cc,Ci}=require('chrome');__cov_Eqwnvcz47L2WFx8Uw4SlNw.s['3']++;ls.localStorageDefined=false;__cov_Eqwnvcz47L2WFx8Uw4SlNw.s['4']++;ls.preferences=Cc['@mozilla.org/preferences-service;1'].getService(Ci.nsIPrefService).getBranch('extensions.privly.');__cov_Eqwnvcz47L2WFx8Uw4SlNw.s['5']++;exports.ls=ls;
