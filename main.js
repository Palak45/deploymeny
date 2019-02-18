(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ul {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n    background-color: #ffffff;\r\n    \r\n}\r\n\r\nli {\r\n    float: right;\r\n}\r\n\r\nli a {\r\n    display: inline-block;\r\n    color: black;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n}\r\n\r\nli a:hover {\r\n    background: linear-gradient(90deg, #FF6633 0%, #FF3333 100%);\r\n    color: #111;\r\n}\r\n\r\nbody {\r\n    font-family: \"Lato\", sans-serif;\r\n}\r\n\r\n.sidenav {\r\n    height: 100%;\r\n    width: 0;\r\n    position: fixed;\r\n    z-index: 1;\r\n    top: 0;\r\n    left: 0;\r\n    color: #111;\r\n    background-color: white;\r\n    overflow-x: hidden;\r\n    transition: 0.5s;\r\n    padding-top: 60px;\r\n}\r\n\r\n.sidenav a {\r\n    padding: 8px 8px 8px 32px;\r\n    text-decoration: none;\r\n    font-size: 25px;\r\n    color: black;\r\n    display: block;\r\n    transition: 0.3s;\r\n}\r\n\r\n.sidenav a:hover {\r\n    color: #ff6600;\r\n}\r\n\r\n.sidenav .closebtn {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 25px;\r\n    font-size: 36px;\r\n    margin-left: 50px;\r\n}\r\n.badge-notify{\r\n    background:red;\r\n    position:relative;\r\n    top: -20px;\r\n    left: -35px;\r\n}\r\n@media screen and (max-height: 450px) {\r\n    .sidenav {padding-top: 15px;}\r\n    .sidenav a {font-size: 18px;}\r\n}\r\n\r\n.img{\r\n    margin-left: 43%;\r\n    margin-top: 2%;\r\n} */\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <img class=\"img\" src=\"../../assets/light_mm_logo.png\"  [@bounceInLeft]=\"{ value: bounceInLeft }\"> -->\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var ng_animate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-animate */ "./node_modules/ng-animate/fesm5/ng-animate.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.menu = {};
        this.sideMenu = {};
        this.menu = [{ name: "Mentorship", path: 'mentor' },
            { name: "Interviews", path: 'interview' },
            { name: "Job Offer", path: 'job' },
            { name: "Rate Your Skill", path: 'rating' },
            { name: "Document Vault", path: 'document' },
            { name: "Professional Profile", path: 'professional' },
        ];
        this.sideMenu = [{ name: "Home", class: 'glyphicon glyphicon-home' },
            { name: "Profile", class: 'glyphicon glyphicon-user' },
            { name: "Share", class: 'glyphicon glyphicon-share' },
            { name: "Settings", class: 'material-icon' },
        ];
    }
    AppComponent.prototype.openNav = function () {
        document.getElementById("mySidenav").style.width = "250px";
    };
    AppComponent.prototype.closeNav = function () {
        document.getElementById("mySidenav").style.width = "0";
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('bounceInLeft', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('*=> *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["useAnimation"])(ng_animate__WEBPACK_IMPORTED_MODULE_2__["bounceInLeft"], {}))])
            ],
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_file_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-file-size */ "./node_modules/ng2-file-size/index.js");
/* harmony import */ var ng2_file_size__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_file_size__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var angular_particle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-particle */ "./node_modules/angular-particle/index.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_tabs_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular-tabs-component */ "./node_modules/angular-tabs-component/dist/index.js");
/* harmony import */ var ngx_speech__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-speech */ "./node_modules/ngx-speech/ngx-speech.es5.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var _services_talk_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/talk.service */ "./src/app/services/talk.service.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _validations_no_whitespace_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./validations/no-whitespace.directive */ "./src/app/validations/no-whitespace.directive.ts");
/* harmony import */ var ngx_countdown__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-countdown */ "./node_modules/ngx-countdown/esm5/countdown.js");
/* harmony import */ var angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! angular-confirmation-popover */ "./node_modules/angular-confirmation-popover/fesm5/angular-confirmation-popover.js");
/* harmony import */ var ngx_bar_rating__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-bar-rating */ "./node_modules/ngx-bar-rating/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var ngx_show_hide_password__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-show-hide-password */ "./node_modules/ngx-show-hide-password/ngx-show-hide-password.umd.js");
/* harmony import */ var ngx_show_hide_password__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(ngx_show_hide_password__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/forgot-password/forgot-password.component.ts");
/* harmony import */ var _services_deactivate_guard_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./services/deactivate-guard.service */ "./src/app/services/deactivate-guard.service.ts");
/* harmony import */ var ngx_popover__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ngx-popover */ "./node_modules/ngx-popover/index.js");
/* harmony import */ var ngx_popover__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(ngx_popover__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var angular_file_uploader__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! angular-file-uploader */ "./node_modules/angular-file-uploader/fesm5/angular-file-uploader.js");
/* harmony import */ var _services_sharedata_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./services/sharedata.service */ "./src/app/services/sharedata.service.ts");
/* harmony import */ var _speechtestreport_speechtestreport_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./speechtestreport/speechtestreport.component */ "./src/app/speechtestreport/speechtestreport.component.ts");
/* harmony import */ var _speechfeedback_speechfeedback_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./speechfeedback/speechfeedback.component */ "./src/app/speechfeedback/speechfeedback.component.ts");
/* harmony import */ var _instruction_instruction_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./instruction/instruction.component */ "./src/app/instruction/instruction.component.ts");
/* harmony import */ var _starttest_starttest_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./starttest/starttest.component */ "./src/app/starttest/starttest.component.ts");
/* harmony import */ var _services_block_copy_paste_directive__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./services/block-copy-paste.directive */ "./src/app/services/block-copy-paste.directive.ts");
/* harmony import */ var _services_changecolor_directive__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./services/changecolor.directive */ "./src/app/services/changecolor.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











































function tokenGetter() {
    return localStorage.getItem('access_token');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _validations_no_whitespace_directive__WEBPACK_IMPORTED_MODULE_22__["NoWhitespaceDirective"],
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"],
                _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_31__["ForgotPasswordComponent"],
                _speechtestreport_speechtestreport_component__WEBPACK_IMPORTED_MODULE_36__["SpeechtestreportComponent"],
                _speechfeedback_speechfeedback_component__WEBPACK_IMPORTED_MODULE_37__["SpeechfeedbackComponent"],
                _instruction_instruction_component__WEBPACK_IMPORTED_MODULE_38__["InstructionComponent"],
                _starttest_starttest_component__WEBPACK_IMPORTED_MODULE_39__["StarttestComponent"],
                _services_block_copy_paste_directive__WEBPACK_IMPORTED_MODULE_40__["BlockCopyPasteDirective"],
                _services_changecolor_directive__WEBPACK_IMPORTED_MODULE_41__["ChangecolorDirective"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"],
                ngx_bar_rating__WEBPACK_IMPORTED_MODULE_25__["BarRatingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_10__["HttpModule"],
                angular_file_uploader__WEBPACK_IMPORTED_MODULE_34__["AngularFileUploaderModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_26__["FileUploadModule"],
                angular_tabs_component__WEBPACK_IMPORTED_MODULE_17__["TabModule"],
                ng2_file_size__WEBPACK_IMPORTED_MODULE_2__["Ng2FileSizeModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
                ngx_speech__WEBPACK_IMPORTED_MODULE_18__["SpeechModule"],
                ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_13__["GooglePlaceModule"],
                ngx_popover__WEBPACK_IMPORTED_MODULE_33__["PopoverModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                angular2_notifications__WEBPACK_IMPORTED_MODULE_11__["SimpleNotificationsModule"].forRoot(),
                ngx_show_hide_password__WEBPACK_IMPORTED_MODULE_27__["ShowHidePasswordModule"].forRoot(),
                angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_24__["ConfirmationPopoverModule"].forRoot({
                    confirmButtonType: 'danger' // set defaults here
                }),
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_19__["BsDatepickerModule"].forRoot(),
                ngx_pagination__WEBPACK_IMPORTED_MODULE_21__["NgxPaginationModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                ngx_countdown__WEBPACK_IMPORTED_MODULE_23__["CountdownModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_15__["ToastrModule"].forRoot({
                    timeOut: 1000,
                    positionClass: 'toast-top-right',
                    preventDuplicates: true,
                }),
                ngx_toastr__WEBPACK_IMPORTED_MODULE_15__["ToastContainerModule"],
                angular_particle__WEBPACK_IMPORTED_MODULE_4__["ParticlesModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_30__["NgMultiSelectDropDownModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_29__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: tokenGetter,
                        whitelistedDomains: ['localhost:4200'],
                        blacklistedRoutes: ['localhost:4200/auth/'],
                    }
                }),
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot([
                    {
                        path: '',
                        component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                    },
                    {
                        path: 'login',
                        component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                    },
                    {
                        path: 'signup',
                        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"],
                    },
                    {
                        path: 'start/:id',
                        component: _starttest_starttest_component__WEBPACK_IMPORTED_MODULE_39__["StarttestComponent"],
                        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_28__["AuthGuardService"]],
                    },
                    {
                        path: 'instruction',
                        component: _instruction_instruction_component__WEBPACK_IMPORTED_MODULE_38__["InstructionComponent"],
                        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_28__["AuthGuardService"]]
                    },
                    {
                        path: 'forgot',
                        component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_31__["ForgotPasswordComponent"],
                    },
                    {
                        path: 'speechreport',
                        component: _speechtestreport_speechtestreport_component__WEBPACK_IMPORTED_MODULE_36__["SpeechtestreportComponent"],
                        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_28__["AuthGuardService"]]
                    },
                    {
                        path: 'feedback',
                        component: _speechfeedback_speechfeedback_component__WEBPACK_IMPORTED_MODULE_37__["SpeechfeedbackComponent"],
                        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_28__["AuthGuardService"]]
                    },
                ])
            ],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"], _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_28__["AuthGuardService"], _services_talk_service__WEBPACK_IMPORTED_MODULE_20__["TalkService"], _services_deactivate_guard_service__WEBPACK_IMPORTED_MODULE_32__["CanDeactivateGuard"], _services_sharedata_service__WEBPACK_IMPORTED_MODULE_35__["SharedataService"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["DatePipe"],
                { provide: 'SPEECH_LANG', useValue: 'en-US' },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.css":
/*!***************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img{\r\n    margin-left: 43%;\r\n    margin-top: 2%;\r\n    margin-bottom:2%;\r\n}\r\ninput.ng-invalid.ng-touched{\r\n    border: 1px solid red;\r\n}\r\n.help-block\r\n{\r\n    color: red;\r\n}"

/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.html":
/*!****************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\r\n<!-- \r\n<div style=\"background-color: #ff6600;height: 50px;\">\r\n    <div style=\"margin-left:0px\" ><img style=\"height:30px;margin-top: 1% !important;\" class=\"img\" src=\"../../assets/light_mm_logo.png\"\r\n            routerLink=\"/home\">\r\n    </div>\r\n    <div>\r\n        <h3 style=\"color:white;margin-top:-60px;margin-left: 800px\">Candidate Portal</h3>\r\n    </div>\r\n</div> -->\r\n<form [formGroup]=\"myform\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <h2> Forgot Password </h2>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                &nbsp;\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <div class=\"form-group\">\r\n                    <!-- <h2>First, let's find your account</h2>-->\r\n                    <h4>Please enter email address</h4>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-8\">\r\n                            <!-- <span>Email </span> -->\r\n                            <label for=\"email\" class=\"control-label\">Email</label>\r\n                            <span style=\"color: red\">*</span><br>\r\n                            <input type=\"text\" placeholder=\"Enter Email Address \" class=\"form-control\" [(ngModel)]=\"forgotPassword.to\"\r\n                                formControlName=\"email\">\r\n                            <span class=\"help-block\" *ngIf=\"myform.get('email').touched && myform.get('email').invalid\">Email\r\n                                is Required!</span>\r\n                        </div>\r\n                        <div class=\"col-md-4\" style=\"margin-top:40px;\">\r\n                            <label><a class=\"pointer-cursor\" style=\"color:#F24540\" (click)=\"otp()\">click here</a> get\r\n                                OTP</label>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                    <!-- <button class=\"btn btn-default\">Cancel</button> -->\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-8\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"otp\" class=\"control-label\">Enter OTP</label>\r\n                            <input type=\"number\" class=\"form-control\" id=\"otp\" placeholder=\"Enter 4 digit OTP\"\r\n                                [(ngModel)]=\"forgotPassword.otp\" name=\"otp\" formControlName=\"otp\">\r\n                            <span class=\"help-block\" *ngIf=\"myform.get('otp').touched && myform.get('otp').invalid\">Enter\r\n                                OTP\r\n                                is Required!</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <button class=\"btn btn-primary\" [disabled]=\"!myform.valid\" style=\"width:179px;height:40px;margin-left:13%;background-color: #F24540;border-radius: 25px;\"\r\n                            (click)=\"proceed()\">Proceed</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                &nbsp;\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>\r\n\r\n\r\n<footer class=\"app-footer\" style=\"font-size:16px;color:black;font-family: sans-serif;text-align: center;\">\r\n        <a>Powered By</a> &copy; <a style=\"color:black;font-size: 16px;\">MineMark Solutions Private Limited</a> 2018 </footer>\r\n      "

/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.ts ***!
  \**************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_sharedata_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/sharedata.service */ "./src/app/services/sharedata.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(auth, toastr, share, router) {
        this.auth = auth;
        this.toastr = toastr;
        this.share = share;
        this.router = router;
        this.forgotPassword = { to: "", otp: "" };
        this.token = localStorage.getItem('token');
        this.remove = 'otp is not correct';
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        this.myform = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
            otp: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[0-9]*$"),]),
        });
    };
    ForgotPasswordComponent.prototype.proceed = function () {
        var _this = this;
        //  debugger;
        console.log(this.forgotPassword);
        console.log(this.accesstoken);
        this.auth.postDetail('/verify_password', this.accesstoken, { email: this.forgotPassword.to, email_otp: this.forgotPassword.otp })
            .then(function (data) {
            // console.log("email", this.data.candi_email);
            _this.otpVerify = data.json().message;
            console.log(_this.otpVerify);
            // if (this.otpVerify == "OTP matched successfuly") {
            _this.share.setData(data);
            console.log("this data print", data);
            _this.router.navigateByUrl('/newpassword');
            // }
            // else{
            //   this.toastr.remove(this.remove);
            // }
        }).catch(function (err) {
            console.log(err.json().message);
            if (err.json().error === 'Failed to authenticate token.') {
                _this.toastr.error('Please enter correct OTP');
            }
        });
    };
    ForgotPasswordComponent.prototype.otp = function () {
        var _this = this;
        this.auth.postDetail('/forgot_password', " ", { email: this.forgotPassword.to }).then(function (data) {
            _this.accesstoken = data.json().token;
            console.log("Response token for forget password " + _this.accesstoken);
            localStorage.setItem("token", _this.accesstoken);
            _this.otpData = data.json().message;
            console.log(_this.otpData);
            // this.Id = this.data.id;
            _this.toastr.success(_this.otpData);
        }).catch(function (err) {
            console.log(err);
        });
    };
    ForgotPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.component.html */ "./src/app/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/forgot-password/forgot-password.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _services_sharedata_service__WEBPACK_IMPORTED_MODULE_4__["SharedataService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/instruction/instruction.component.css":
/*!*******************************************************!*\
  !*** ./src/app/instruction/instruction.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2{\r\n    font-family: sans-serif;font-size: 20px;\r\n}\r\nfieldset \r\n{\r\n    border: 1px solid #ddd !important;\r\n    margin: 0;\r\n    xmin-width: 0;\r\n    padding: 10px;       \r\n    position: relative;\r\n    border-radius:4px;\r\n    background-color:#f5f5f5;\r\n    padding-left:10px!important;\r\n}\r\nlegend\r\n    {\r\n        font-size:20px;\r\n        font-weight:bold;\r\n        margin-bottom: 0px; \r\n        text-align: center;\r\n        width: 90%; \r\n        height: 70px;\r\n        border: 1px solid #ddd;\r\n        border-radius: 4px; \r\n        color: #FFFFFF;\r\n        font-family: sans-serif;\r\n\r\n        padding: 22px 5px 5px 10px; \r\n        background-color: #FF4F33;\r\n    }\r\nli{\r\n        font-size: 18px;\r\n        font-family: sans-serif ;\r\n        color: #000000;\r\n        padding: 5px;\r\n        text-align: justify;\r\n    }\r\nbtnstart{\r\n        width: 179px;\r\n        font-size: 16px;\r\n        height: 40px;\r\n        color: #ffffff;\r\n        background-color: #FF4F33;\r\n        border-radius: 25px;\r\n        box-shadow: 0 2px 16px 6px #CCCCCC;\r\n    }"

/***/ }),

/***/ "./src/app/instruction/instruction.component.html":
/*!********************************************************!*\
  !*** ./src/app/instruction/instruction.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-full-layout></app-full-layout> -->\r\n<div class=\"container\" style=\"margin-left: 12%;\">\r\n  <div class=\"col-md-12\" style=\"margin-top:40px;\">\r\n    <!-- <img style=\"display:table-cell;margin: auto; vertical-align:middle; text-align:center\" src=\"../../assets/Mangalam-Jobs-logo.png\"> -->\r\n    <img style=\"display:table-cell;margin: auto; vertical-align:middle; text-align:center\" \r\n    src=\"https://s3.us-east-2.amazonaws.com/mmsdevrepo/assets/Mangalam-Jobs-logo.png\">\r\n\r\n  </div>\r\n\r\n  <div class=\"card\" style=\"margin-top:20px;\">\r\n    <div class=\"card-body\">\r\n      <form [formGroup]=\"myform\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <p style=\"text-align: center;font-size: 20px;color: #000000;font-weight: bold;\">CS - Assessment Test</p>\r\n          </div>\r\n          <!-- <div class=\"col-md-12\">\r\n            <p style=\"text-align: center;color: #FF4F33;\">Skill Rating Test</p>\r\n          </div> -->\r\n\r\n        </div>\r\n        <!-- <form [formGroup]=\"myform\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <label>question ID</label>\r\n<input type=\"text\" class=\"form-control\" [(ngModel)]=\"nextqueId\" formControlName=\"nextqueId\" placeholder=\"\">\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <label>percentage score</label>\r\n<input type=\"text\" placeholder=\"\" [(ngModel)]=\"Marks\" formControlName=\"Marks\" class=\"form-control\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row\" style=\"margin-top: 20px;\">\r\n            <div class=\"col-md-12 offset-4\">\r\n              <button class=\"btn btnsubmit\" style=\"margin-left:7%;\" value=\"submit\" (click)=\"submit($event.target.value)\">Submit</button>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\" style=\"margin-top:10px;\">\r\n            <div class=\"col-md-12 offset-5\">\r\n              <a style=\"color:#FF4F33;font-size: 16px;\" value=\"skip\" (click)=\"skip($event.target.value)\">Skip the\r\n                question</a>\r\n            </div>\r\n          </div>\r\n        </form> -->\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\" style=\"margin-top: 50px;\">\r\n            <p style=\"font-size: 20px;font-weight: bold;\">Instructions</p>\r\n            <br>\r\n            <ul style=\"margin-left: 20px;\">\r\n              <li>Once you click on the “Start Test” button at the bottom of this screen, new screen with a question & a\r\n                box for writing answer will appear.\r\n                On top of the screen, question will be displayed, and below that a box for writing answer will appear.\r\n                </li>\r\n              <li>Timer will start countdown immediately & it is displayed on top right hand side of the screen. It\r\n                will display the remaining time for finishing the test.</li>\r\n              <li>You can skip a question and you will be able to revisit all skipped questions at the end</li>\r\n\r\n              <li>Once you submit an answer you cannot modify the same</li>\r\n              <li>There will not be negative marking</li>\r\n              <li>If you do not complete all your answers within the allocated time; at the end of the allocated time\r\n                period; system will auto submit all answers as it is. One cannot make any changes after that.</li>\r\n\r\n            </ul>\r\n          </div>\r\n          <hr>\r\n          <div class=\"col-md-6\">\r\n            <h4><a style=\"font-weight: bold;\">Total Questions :</a> 31</h4>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <h4><a style=\"font-weight: bold;\">Total Marks :</a> 60</h4>\r\n          </div>\r\n          <hr>\r\n          <div class=\"col-md-12\">\r\n            <h4><a style=\"font-weight: bold;\">Total Time Allocation :</a> 45 mins</h4>\r\n          </div>\r\n          <hr>\r\n        </div>\r\n        <div class=\"row\">\r\n          <!-- <div class=\"col-md-12\" style=\"text-align: center;margin-top: 30px;\">\r\n            <label style=\"font-size:16px;\"><input type=\"checkbox\" value=\"\" formControlName=\"term\" *ngIf=\"!isActive\"\r\n                required>&nbsp; I agree and have read al the information mentioned above and I am ready\r\n              to take the test</label>\r\n          </div> -->\r\n          <div class=\"col-md-12\" style=\"text-align: center;margin-top: 20px;\">\r\n            <label><button (click)=\"navigate()\" style=\"width: 179px;font-size: 16px;height: 40px;color: #ffffff;;background-color: #FF4F33;border-radius: 25px;box-shadow: 0 2px 16px 6px #CCCCCC;\">Start\r\n                Test</button></label>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"col-md-12\" style=\"margin-top:10px;\">\r\n  <!-- <img style=\"display:table-cell;margin: auto; vertical-align:middle; text-align:center\" src=\"../../assets/MineMark Logo-Orange.svg\"> -->\r\n  <img style=\"display:table-cell;margin: auto; vertical-align:middle; text-align:center;width:7%;\" \r\n  src=\"https://s3.us-east-2.amazonaws.com/mmsdevrepo/assets/MineMark+Logo-Orange.svg\">\r\n</div>\r\n<strong><footer class=\"app-footer\" style=\"margin-top:40px;color:black;font-family: sans-serif;text-align: center;font-size:20px;\">\r\n  <a>Powered By</a> &copy; <a style=\"color:black;font-size:20px;\">Minemark Solutions Private Limited </a> 2019 </footer>\r\n</strong>\r\n\r\n\r\n\r\n<!-- <div class=\"modal fade\" id=\"myModal2\" role=\"dialog\">\r\n      <div class=\"modal-dialog modal-md\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\"></button>\r\n    \r\n            <div class=\"row\">\r\n              <div class=\"col-md-12 offset-4\">\r\n                <h4>\r\n                  <i class=\"glyphicon glyphicon-warning-sign\" style=\"color:red;\"></i><a style=\"font-size: 18px;font-family: sans-serif;\">\r\n                    &nbsp; Caution!</a>\r\n                </h4>\r\n              </div>\r\n              <div class=\"col-md-12\">\r\n                <p class=\"warn\">1) Please check your continuous power supply.</p>\r\n                <p class=\"warn\">2) Please check your internet connection.</p>\r\n                <p class=\"warn\">3) Please close other browsers running in background.</p>\r\n                <p class=\"warn\">4) Answers once skipped can not be revisited.</p>\r\n              </div>\r\n              <div class=\"col-md-12 offset-3\">\r\n                <button type=\"button\" class=\"btn btn-default btntest\"  data-dismiss=\"modal\" [routerLink]=\"['/starttest']\" >Start your test</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div> \r\n\r\n -->\r\n"

/***/ }),

/***/ "./src/app/instruction/instruction.component.ts":
/*!******************************************************!*\
  !*** ./src/app/instruction/instruction.component.ts ***!
  \******************************************************/
/*! exports provided: InstructionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructionComponent", function() { return InstructionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InstructionComponent = /** @class */ (function () {
    function InstructionComponent(router, auth, toast) {
        this.router = router;
        this.auth = auth;
        this.toast = toast;
        this.data = 50;
        this.QuestionCount = 105;
        this.responseNextData = [];
        this.nextqueId = null;
        this.responseNextData1 = [];
        this.collectskip = [];
        this.submitData = [];
        this.SkippedData = [];
        this.getData = [];
        this.msg = '';
        this.comment = '';
        this.context = '';
        this.token = localStorage.getItem('token');
        this.p = 1;
        this.started = false;
        this.keystart = false;
        this.visible = false;
        this.question_id = "M1";
        this.resData = [];
        this.responseData = [];
        /* clock variables */
        this.timeLeft = 100 * 27;
        this.Marks = null;
    }
    InstructionComponent.prototype.ngOnInit = function () {
        this.myform = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            nextqueId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            Marks: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
    };
    InstructionComponent.prototype.navigate = function () {
        var _this = this;
        var d = new Date().toLocaleString();
        console.log(d);
        this.auth.postDetail('/start_test', this.token, { start_time: d }).then(function (data) {
            if (data.json().error == 'Assessment already Performed') {
                _this.toast.warning('Assessment already Performed');
            }
            else {
                _this.router.navigateByUrl('/start/' + _this.data);
            }
        });
    };
    InstructionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-instruction',
            template: __webpack_require__(/*! ./instruction.component.html */ "./src/app/instruction/instruction.component.html"),
            styles: [__webpack_require__(/*! ./instruction.component.css */ "./src/app/instruction/instruction.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], InstructionComponent);
    return InstructionComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nbody, html {\r\n    height:100%;\r\n      background: #e9ecf0;\r\n        overflow-x: hidden;\r\n      font-family: 'Dosis', sans-serif;\r\n  }\r\n  \r\n  btn {\r\n      border-radius: 10px\r\n  \r\n    \r\n  }\r\n  \r\n  .btn:focus, .btn:active, .btn.active, .btn:active:focus {\r\n      outline: 0;\r\n    border-radius: 0\r\n  }\r\n  \r\n  .help-block{font-family: sans-serif;}\r\n  \r\n  .btn-larger {\r\n      padding: 15px 40px !important;\r\n      /* border:2px solid #F7CA18 !important;; */\r\n      border-radius: 25px;\r\n      \r\n      font-family: 'Dosis', sans-serif;\r\n      font-size: 18px;\r\n      font-weight: 300;\r\n      color: #F7CA18;\r\n      background-color: transparent;\r\n      transition: all .6s;\r\n    \r\n  \r\n  }\r\n  \r\n  .btn-larger:hover, .btn-larger:focus, .btn-larger:active, .btn-larger.active, .open .dropdown-toggle.btn-larger {\r\n      border-color: #F24540;\r\n      color: #fff;\r\n      background-color: #F24540;\r\n      border-radius: 25px;\r\n  }\r\n  \r\n  .btn-larger:active, .btn-larger.active, .open .dropdown-toggle.btn-larger {\r\n      background-image: none;\r\n  }\r\n  \r\n  .btn-larger.disabled, .btn-larger[disabled], fieldset[disabled] .btn-larger, .btn-larger.disabled:hover, .btn-larger[disabled]:hover, fieldset[disabled] .btn-larger:hover, .btn-larger.disabled:focus, .btn-larger[disabled]:focus, fieldset[disabled] .btn-larger:focus, .btn-larger.disabled:active, .btn-larger[disabled]:active, fieldset[disabled] .btn-larger:active, .btn-larger.disabled.active, .btn-larger[disabled].active, fieldset[disabled] .btn-larger.active {\r\n      border-color:#F24540;\r\n      background-color: #F24540;\r\n  }\r\n  \r\n  .btn-larger .badge {\r\n      color: #AEA8D3;\r\n      background-color: #fff;\r\n  }\r\n  \r\n  ul {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n    background-color: #ff6600;\r\n}\r\n  \r\n  div#form {\r\n      color: #fff;\r\n      \r\n      background-attachment: scroll;\r\n      /* background: #1c1e21 url(https://static.pexels.com/photos/8819/warsaw.jpg); */\r\n      background-position: center center;\r\n      background-repeat: none;\r\n      background-size: cover;\r\n      -o-background-size: cover;\r\n    min-height:100%;\r\n  \r\n  }\r\n  \r\n  #userform p {\r\n      font-size: 14px;\r\n      margin-bottom: 5px;\r\n  }\r\n  \r\n  #userform ul {\r\n      list-style-type: none;\r\n      padding: 0;\r\n      \r\n      margin-bottom: 0px;\r\n  }\r\n  \r\n  #userform {\r\n      background: rgba(0,0,0,0.8);\r\n      margin: 20px 0 20px 0\r\n  }\r\n  \r\n  @media (min-width: 768px) {\r\n  #userform {\r\n      /* background: rgba(0,0,0,0.8); */\r\n      /* margin: 50px 0 20px 0 */\r\n  }\r\n\r\n  }\r\n  \r\n  #userform .nav-tabs.nav-justified > li > a {\r\n     \r\n      font-size: 20px;\r\n      color: #F7CA18;\r\n      background-color: #fff;\r\n  }\r\n  \r\n  #userform .nav-tabs.nav-justified > .active > a, #userform .nav-tabs.nav-justified > .active > a:hover, #userform .nav-tabs.nav-justified > .active > a:focus {\r\n      border: 0;\r\n      /* background: #F7CA18; */\r\n      color: white;\r\n      border-radius: 0;\r\n  }\r\n  \r\n  #userform .nav-justified > li > a {\r\n      margin-bottom: 0;\r\n      transition: all .6s;\r\n  }\r\n  \r\n  #userform .nav-justified > li > a:hover {\r\n      background: #AEA8D3;\r\n      color: #FFF;\r\n  }\r\n  \r\n  #userform .nav-tabs > li > a {\r\n      border: 0px solid transparent;\r\n      border-radius: 0\r\n  }\r\n  \r\n  #userform .nav-tabs.nav-justified > li > a:hover {\r\n      background: #F7CA18;\r\n      color: #FFF;\r\n      border-radius: 0;\r\n      border: 0;\r\n      transition: all .6s;\r\n  }\r\n  \r\n  #userform .nav-tabs > li.active > a, #userform .nav-tabs > li.active > a:hover, #userform .nav-tabs > li.active > a:focus {\r\n      color: #F24540;\r\n      cursor: default;\r\n      background-color: transparent;\r\n      border: 0;\r\n      transition: all .6s;\r\n  }\r\n  \r\n  @media (min-width: 768px) {\r\n  #userform .nav-tabs.nav-justified > li > a {\r\n      border: 0;\r\n      transition: all .6s;\r\n  }\r\n  #userform .nav-tabs.nav-justified > li > a:hover {\r\n      background-color: #F24540;\r\n      border-color: transparent;\r\n      border: 0;\r\n      transition: all .6s;\r\n  }\r\n  }\r\n  \r\n  @media (max-width: 768px) {\r\n  .nav-justified > li {\r\n      display: table-cell !important;\r\n      width: 1% !important;\r\n  }\r\n  }\r\n  \r\n  #userform .nav-tabs {\r\n      border-bottom: 0px solid #ddd;\r\n  }\r\n  \r\n  #userform .tab-pane h2 {\r\n      margin: 10px 0;\r\n      color: #FFF;\r\n  }\r\n  \r\n  #userform .tab-pane p.lead {\r\n      margin-top: 20px;\r\n  }\r\n  \r\n  #userform .tab-content {\r\n      padding: 30px;\r\n      background-color: #FFF;\r\n      border: 1px solid lightgray;\r\n      box-shadow: #ddd;\r\n      \r\n      \r\n  }\r\n  \r\n  #userform .form-group {\r\n      margin-bottom: 0px;\r\n      color: #FFF;\r\n      \r\n  }\r\n  \r\n  @media(min-width:400px)\r\n  {\r\n    #userform .nav-tabs{\r\n        font-size: 12px;\r\n    }\r\n   \r\n  }\r\n  \r\n  .icon{\r\n    background-color: linear-gradient(90deg, #FF6633 0%, #FF3333 100%) !important;\r\n    \r\n    border-color: #007bff;\r\n  }\r\n  \r\n  /* #userform .form-group input, #userform .form-group textarea {\r\n      padding: 10px;\r\n  } */\r\n  \r\n  /* #userform .form-group input.form-control {\r\n      height: auto;\r\n      background-color: rgba(120, 110, 184, 0.932);\r\n      color: #FFF;\r\n  } */\r\n  \r\n  /* #userform .form-control {\r\n      border-radius: 0;\r\n      border: 1px solid #fff;\r\n  }\r\n  #userform .form-control:focus {\r\n      border-color: #F7CA18;\r\n      box-shadow: none;\r\n  } */\r\n  \r\n  /* #userform::-webkit-input-placeholder {\r\n  \r\n  font-family: 'Dosis', sans-serif;\r\n  font-weight: 700;\r\n   color: #bbb;\r\n  } */\r\n  \r\n  /* #userform #signup {\r\n      position: relative;\r\n      -webkit-transform: translateY(35px);\r\n      -ms-transform: translateY(35px);\r\n      transform: translateY(35px);\r\n      left: 10px;\r\n      top: 0px;\r\n      color: rgba(255, 255, 255, 0.5);\r\n      -webkit-transition: all 0.25s ease;\r\n      transition: all 0.25s ease;\r\n      -webkit-backface-visibility: hidden;\r\n      pointer-events: none;\r\n      font-size: 12px;\r\n      font-weight: 300\r\n  }\r\n  #userform #signup  .req {\r\n      margin: 2px;\r\n      color: #F7CA18;\r\n  }\r\n  #userform #signup.active {\r\n      -webkit-transform: translateY(0px);\r\n      -ms-transform: translateY(0px);\r\n      transform: translateY(0px);\r\n      left: 2px;\r\n      font-size: 12px;\r\n  }\r\n  #userform #signup  .req {\r\n      opacity: 0;\r\n  }\r\n  #userform label.highlight {\r\n      color: #ffffff;\r\n  }\r\n  #userform #login {\r\n      position: relative;\r\n      -webkit-transform: translateY(35px);\r\n      -ms-transform: translateY(35px);\r\n      transform: translateY(35px);\r\n      left: 10px;\r\n      top: 0px;\r\n      color: rgba(255, 255, 255, 0.5);\r\n      -webkit-transition: all 0.25s ease;\r\n      transition: all 0.25s ease;\r\n      -webkit-backface-visibility: hidden;\r\n      pointer-events: none;\r\n      font-size: 12px;\r\n      font-weight: 300\r\n  }\r\n  #userform #login .req {\r\n      margin: 2px;\r\n      color: #F7CA18;\r\n  }\r\n  #userform #login.active {\r\n      -webkit-transform: translateY(0px);\r\n      -ms-transform: translateY(0px);\r\n      transform: translateY(0px);\r\n      left: 2px;\r\n      font-size: 12px;\r\n  }\r\n  #userform #login.req {\r\n      opacity: 0;\r\n  }\r\n   */\r\n  \r\n  .mrgn-30-top {\r\n      margin-top: 30px\r\n  }\r\n  \r\n  label{\r\n      color: #000000;\r\n      font-family: sans-serif;\r\n  }\r\n  \r\n  input{\r\n      font-family: sans-serif;\r\n  }\r\n  \r\n  h2{\r\n    font-family: sans-serif;\r\n}\r\n  \r\n  .container {\r\n   \r\n    overflow-x: hidden;\r\n    overflow-y:hidden; \r\n  }"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\" style=\"margin-top:40px;\">\r\n    <!-- <img style=\"display:table-cell;margin: auto; vertical-align:middle; text-align:center\" src=\"../../assets/Mangalam-Jobs-logo.png\"> -->\r\n    <img style=\"display:table-cell;margin: auto; vertical-align:middle; text-align:center\" src=\"https://s3.us-east-2.amazonaws.com/mmsdevrepo/assets/Mangalam-Jobs-logo.png\">\r\n\r\n  </div>\r\n</div>\r\n<!-- <div class=\"row\">\r\n  <div class=\"col-md-12\" style=\"text-align: center\">\r\n    <h2>Minemark Solutions Private Limited </h2>\r\n  </div>\r\n</div> -->\r\n\r\n<div id=\"form\">\r\n  <div class=\"container\" style=\"margin-top:20px;\">\r\n    <div class=\"col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-md-8 col-md-offset-2\">\r\n      <div id=\"userform\">\r\n        <ul class=\"nav nav-tabs nav-justified\" role=\"tablist\">\r\n          <li class=\"active\" style=\"width:266px\"><a href=\"#signup\" role=\"tab\" data-toggle=\"tab\">Sign up</a></li>\r\n          <li><a href=\"#login\" style=\"width:260px\" role=\"tab\" data-toggle=\"tab\">Login</a></li>\r\n        </ul>\r\n        <div class=\"tab-content\">\r\n\r\n          <div class=\"tab-pane fade in active\" id=\"signup\">\r\n            <!-- <h2 class=\"text-uppercase text-center\"> Sign Up</h2> -->\r\n            <!-- <form id=\"signup\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-12\">\r\n                      <div class=\"form-group\">\r\n                        <label>Email Id<span class=\"req\">*</span> </label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"first_name\" required data-validation-required-message=\"Please enter your name.\"\r\n                          autocomplete=\"off\">\r\n                        <p class=\"help-block text-danger\"></p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                      <div class=\"form-group\">\r\n                        <label>Mobile number<span class=\"req\">*</span> </label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"last_name\" required data-validation-required-message=\"Please enter your name.\"\r\n                          autocomplete=\"off\">\r\n                        <p class=\"help-block text-danger\"></p>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                          <label><a href=\"#\">click here</a> to get OTP </label>\r\n                          <br/>\r\n                        </div>\r\n                      </div>\r\n                  </div>\r\n            \r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Enter 4 digit OTP<span class=\"req\">*</span> </label>\r\n                            <input type=\"email\" class=\"form-control\" id=\"email\" required data-validation-required-message=\"Please enter your email address.\"\r\n                              autocomplete=\"off\">\r\n                            <p class=\"help-block text-danger\"></p>\r\n                          </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                       \r\n                    </div>\r\n                  </div>\r\n            \r\n                  <div class=\"form-group\">\r\n                    <label> Password<span class=\"req\">*</span> </label>\r\n                    <input type=\"password\" class=\"form-control\" id=\"password\" required data-validation-required-message=\"Please enter your password\"\r\n                      autocomplete=\"off\">\r\n                    <p class=\"help-block text-danger\"></p>\r\n                  </div>\r\n                  <div class=\"form-group checkbox\">\r\n                      <label><input type=\"checkbox\" value=\"\"> &nbsp; By selecting with Minemark, you to our <a href=\"#\">Terms</a> and <a href=\"#\"> Privacy Policy</a></label>\r\n                    </div>\r\n                    <br/>\r\n                  <div class=\"mrgn-30-top\">\r\n                    <button type=\"submit\" class=\"btn btn-larger btn-block\" style=\" border-radius: 25px;\">\r\n                      Sign up\r\n                    </button>\r\n                  </div>\r\n                </form> -->\r\n            <div class=\"conatainer\">\r\n              <form class=\"form-horizontal\" [formGroup]=\"myformsignup\" novalidate>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"text\" class=\" control-label\">Name</label>\r\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"signup.name\" placeholder=\"Enter Name\"\r\n                        formControlName=\"name\" [ngClass]=\"{ 'is-invalid': submitted && name.errors }\" required pattern=\"[a-zA-Z\\s]+\">\r\n\r\n                      <div class=\"help-block\" *ngIf=\"myformsignup.get('name').touched && myformsignup.get('name').invalid\">\r\n                        <p *ngIf=\"name.errors.required\">Name is required</p>\r\n                        <p *ngIf=\"name.errors?.pattern\">Name should only contain lowercase or uppercase letters. e.g. John</p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"email\" class=\" control-label\">Email Id</label>\r\n                      <input i type=\"email\" class=\"form-control\" [(ngModel)]=\"signup.email\" placeholder=\"Enter Email\"\r\n                        formControlName=\"email\" [ngClass]=\"{ 'is-invalid': submitted && email1.errors }\" required\r\n                        autocomplete=\"false\" pattern=\"[a-zA-Z0-9.!#$%&amp;’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)+\">\r\n\r\n                      <div class=\"help-block\" *ngIf=\"myformsignup.get('email').touched && myformsignup.get('email').invalid\">\r\n                        <p *ngIf=\"email1.errors.required\">Valid Email is required</p>\r\n                        <p *ngIf=\"email1.errors?.pattern\">Email valid is required</p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <!-- <div class=\"row\">\r\n                    <div class=\"col-md-8\">\r\n                      <div class=\"form-group\">\r\n                        <label for=\"mobileno\" class=\" control-label\">Mobile No</label>\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter Mobile No\" [(ngModel)]=\"signup.mobileno\"\r\n                          name=\"mobileno\" formControlName=\"mobileno\" autocomplete=\"false\" maxlength=\"10\" pattern=\"^[6-9]\\d{9}$\">\r\n                        <span class=\"help-block\" *ngIf=\"myformsignup.get('mobileno').touched && myformsignup.get('mobileno').invalid\">\r\n                          Mobile Number is Required</span>\r\n                     \r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-md-4\" style=\"margin-top:40px;\">\r\n                      <label><a class=\"pointer-cursor\" style=\"color:#F24540\" (click)=\"otp()\">click here</a> get OTP</label>\r\n                    </div>\r\n                  </div> -->\r\n                <!-- <div class=\"row\">\r\n                    <div class=\"col-md-8\">\r\n                      <div class=\"form-group\">\r\n                        <label for=\"otp\" class=\"control-label\">Enter OTP</label>\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter 4 digit OTP\" [(ngModel)]=\"signup.otp\"\r\n                          name=\"otp\" formControlName=\"otp\" autocomplete=\"false\" maxlength=\"4\" pattern=\"[0-9 ]*\">\r\n                        <span class=\"help-block\" *ngIf=\"myformsignup.get('otp').touched && myformsignup.get('otp').invalid\">Enter\r\n                          OTP is Required</span>\r\n                      </div>\r\n                    </div>\r\n                  </div> -->\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-12\">\r\n\r\n                    <div class=\"form-group\">\r\n                      <label for=\"password\" class=\"control-label\">Password</label>\r\n\r\n\r\n                      <input type=\"password\" class=\"form-control\" id=\"password1\" placeholder=\"Enter password\"\r\n                        [(ngModel)]=\"signup.password\" name=\"password\" autocomplete=\"false\" formControlName=\"password\" minlength=\"8\">\r\n                      <label  style=\"color:red\">Password length should be 8 characters</label>\r\n                      <!-- <span class=\"help-block\" *ngIf=\"myformsignup.get('password').touched && myformsignup.get('password').invalid\">Password\r\n                        is Required</span> -->\r\n\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <br />\r\n                <!-- <div class=\"row\">\r\n                    <div class=\"checkbox\">\r\n                      <label><input type=\"checkbox\" value=\"\" *ngIf=\"!isActive\" required [(ngModel)]=\"signup.term\"\r\n                          formControlName=\"term\"><span style=\"font-size:14px;font-family: sans-serif\">By\r\n                          selecting with Minemark, you agree to our <a style=\"color:#F24540\">Terms</a> and <a style=\"color:#F24540\">Privacy\r\n                            Policy</a></span></label>\r\n            \r\n                    </div>\r\n                  </div> -->\r\n                <br />\r\n                <div class=\"form-group\">\r\n                  <div class=\"col-md-8 col-md-offset-4\">\r\n                    <button type=\"submit\" [disabled]=\"!myformsignup.valid\" class=\"btn btn-larger btn-primary\" (click)=\"Signup()\">\r\n                      <i class=\"fa fa-btn fa-sign-in\"></i> Signup\r\n                    </button>\r\n                    <!-- <a routerLink=\"/skill-update\" style=\"margin-left:10px;\">Register Here</a> -->\r\n                  </div>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n          <div class=\"tab-pane fade  in\" id=\"login\">\r\n\r\n            <div class=\"conatainer\">\r\n              <form class=\"form-horizontal\" [formGroup]=\"myform\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"email\" class=\"control-label\">Email Id</label>\r\n                      <input type=\"email\" class=\"form-control\" [(ngModel)]=\"user.email\" placeholder=\"Enter Email\"\r\n                        formControlName=\"email\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\">\r\n                      <!-- <span class=\"help-block\" *ngIf=\"myform.get('email').touched && myform.get('email').invalid\">Email\r\n                        is\r\n                        Required</span> -->\r\n                      <div class=\"help-block\" *ngIf=\"myform.get('email').touched && myform.get('email').invalid\">\r\n                        <p *ngIf=\"email.errors.required\">Valid Email is required</p>\r\n                        <!-- <p *ngIf=\"email.errors?.pattern\">Please provide a valid email address</p>   -->\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <!-- <div class=\"col-md-2\">\r\n                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n                  </div> -->\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-11\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"password\" class=\"control-label\">Password</label>\r\n                      <show-hide-password icon=\"fontawesome\" btnStyle=\"primary\" [btnOutline]=\"false\">\r\n                        <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Enter password\"\r\n                          [(ngModel)]=\"user.password\" name=\"password\" formControlName=\"password\" minlength=\"8\">\r\n                      </show-hide-password>\r\n                      <label  style=\"color:red\">Password length should be 8 characters</label>\r\n                      <span class=\"help-block\" *ngIf=\"myform.get('password').touched && myform.get('password').invalid\">Password\r\n                        is Required</span>\r\n                    </div>\r\n                    <!-- <div class=\"col-md-2\">\r\n\r\n                    </div> -->\r\n                  </div>\r\n\r\n                </div><br />\r\n                <div class=\"form-group\">\r\n                  <div class=\"col-md-12\">\r\n                    <div class=\"checkbox\" style=\"float:right\">\r\n                      <a class=\"pointer-cursor\" routerLink=\"/forgot\">Forgot Password</a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <div class=\"col-md-8 col-md-offset-4\">\r\n                    <button type=\"submit\" class=\"btn btn-larger btn-primary\" [disabled]=\"!myform.valid\" (click)=\"onLogin()\">\r\n                      <i class=\"fa fa-btn fa-sign-in\"></i> Login\r\n                    </button>\r\n                    <!-- New User? <a routerLink=\"/signup\">Register Here</a> -->\r\n                  </div>\r\n                </div>\r\n              </form>\r\n\r\n\r\n            </div>\r\n\r\n          </div>\r\n          <!-- <h2 class=\"text-uppercase text-center\"> Log in</h2>\r\n            <form id=\"login\">\r\n              <div class=\"form-group\">\r\n                <label> Your Email<span class=\"req\">*</span> </label>\r\n                <input type=\"email\" class=\"form-control\" id=\"email\" required data-validation-required-message=\"Please enter your email address.\" autocomplete=\"off\">\r\n                <p class=\"help-block text-danger\"></p>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label> Password<span class=\"req\">*</span> </label>\r\n                <input type=\"password\" class=\"form-control\" id=\"password\" required data-validation-required-message=\"Please enter your password\" autocomplete=\"off\">\r\n                <p class=\"help-block text-danger\"></p>\r\n              </div>\r\n              <div class=\"mrgn-30-top\">\r\n                <button type=\"submit\" class=\"btn btn-larger btn-block\">\r\n                Log in\r\n                </button>\r\n              </div>\r\n            </form> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <!-- <p>\r\n  login\r\n</p>\r\n<div class=\"conatainer\">\r\n  <ul class=\"nav nav-tabs\">\r\n    <li role=\"presentation\" class=\"active\"><a href=\"#\">Home</a></li>\r\n    <li role=\"presentation\"><a  routerLink='/sign-up' routerLinkActive='active'>Profile</a></li>\r\n    <li role=\"presentation\"><a routerLink='/sign-in' routerLinkActive='active'>Sign InMessages</a></li>\r\n    \r\n  </ul>\r\n </div> -->\r\n  <!--<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col s8 offset-s2\">\r\n      <div class=\"card grey lighten-2\">\r\n        <div class=\"card-tabs\">\r\n          <ul class=\"tabs tabs-fixed-width tabs-transparent\">\r\n            <li class=\"tab\">\r\n              <a routerLink='/sign-in' routerLinkActive='active'>Sign In</a>\r\n            </li>\r\n            <li class=\"tab\">\r\n              <a  routerLink='/sign-up' routerLinkActive='active'>Sign Up</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"card-content white\">\r\n          <div class=\"row\">\r\n            <router-outlet></router-outlet>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div> -->\r\n\r\n  <!-- <link href=\"//netdna.bootstrapcdn.com/font-awesome/4.0.0/css/font-awesome.css\" rel=\"stylesheet\">\r\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" integrity=\"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm\" crossorigin=\"anonymous\">\r\n<div  style=\"background-color: #ff6600\">\r\n  <img class=\"img\" src=\"../../assets/light_mm_logo.png\">\r\n<br><br>\r\n</div>\r\n<p class=\"text-center\">\r\n<a class=\"btn btn-primary social-login-btn social-facebook\"  routerLink=\"/login\" ><i class=\"fa fa-facebook\"></i></a>\r\n<a class=\"btn btn-primary social-login-btn social-linkedin\" href=\"\"><i class=\"fa fa-linkedin\"></i></a>\r\n  <a class=\"btn btn-primary social-login-btn social-google\" href=\"\"><i class=\"fa fa-google-plus\"></i></a>\r\n\r\n</p>\r\n<div class=\"container\" style=\"padding-top:47px; position: center\">\r\n    <div class=\"row\">\r\n      <style>\r\n        .panel-default>.myLoginHeading {\r\n          color: #efebeb;\r\n          background-color: #ff6600;\r\n          border-color: #ddd;\r\n          text-align: center;\r\n          font-size: 31px;\r\n          padding: 3px 15px;\r\n        }\r\n        @media only screen and (max-width: 300px) {\r\n          .panel-default>.myLoginHeading {\r\n            font-size: 19px;\r\n            padding: 9px 15px;\r\n          }\r\n        }\r\n      </style>\r\n      <div class=\"col-md-12\">\r\n      </div>\r\n      <div class=\"col-md-3\"></div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"panel panel-default\">\r\n          <div class=\"panel-heading myLoginHeading\">Login</div>\r\n          <div class=\"panel-body\">\r\n            <form class=\"form-horizontal\" role=\"form\" [formGroup] = \"myform\"  >\r\n              <div class=\"form-group\">\r\n                <label for=\"email\" class=\"col-md-4 control-label\">E-Mail</label>\r\n\r\n                <div class=\"col-md-8\">\r\n                  <input  id=\"email\" type=\"email\" class=\"form-control\" name=\"email\" value=\"\" [(ngModel)]=\"user.email\" placeholder=\"Enter Email\" formControlName=\"email\">\r\n                  <span class=\"help-block\" *ngIf=\"myform.get('email').touched && myform.get('email').invalid\">Email is Required!</span>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"password\" class=\"col-md-4 control-label\">Password</label>\r\n\r\n                <div class=\"col-md-8\">\r\n                  <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Enter password\"  [(ngModel)]=\"user.password\" name=\"password\" formControlName=\"password\">\r\n                  <span class=\"help-block\" *ngIf=\"myform.get('password').touched && myform.get('password').invalid\">Password is Required!</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <div class=\"col-md-8 col-md-offset-4\">\r\n                  <div class=\"checkbox\">\r\n                    <label>\r\n                      <input type=\"checkbox\" name=\"remember\"> Remember Me\r\n                    </label><br>\r\n                     <a routerLink=\"/forgot\">Forgot Password?</a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <div class=\"col-md-8 col-md-offset-4\">\r\n                  <button type=\"submit\" [disabled]=\"!myform.valid\" class=\"btn btn-primary\" (click)=\"onLogin()\">\r\n                    <i class=\"fa fa-btn fa-sign-in\"></i> Login\r\n                  </button>\r\n                  New User? <a routerLink=\"/signup\">Register Here</a>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3\"></div>\r\n    </div>\r\n  </div> -->\r\n\r\n  <div class=\"col-md-12\" style=\"margin-top:10px;\">\r\n      <!-- <img style=\"display:table-cell;margin: auto; vertical-align:middle; text-align:center\" src=\"../../assets/MineMark Logo-Orange.svg\"> -->\r\n  \r\n      <img style=\"display:table-cell;margin: auto; vertical-align:middle; text-align:center;width:5%;\"\r\n       src=\"https://s3.us-east-2.amazonaws.com/mmsdevrepo/assets/MineMark+Logo-Orange.svg\">\r\n  \r\n    </div>\r\n    <strong><footer class=\"app-footer\" style=\"margin-top:40px;color:black;font-family: sans-serif;text-align: center;font-size:20px;\">\r\n      <a>Powered By</a> &copy; <a style=\"color:black;font-size:20px;\">Minemark Solutions Private Limited </a> 2019 </footer>\r\n    </strong>\r\n    "

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, activatedRoute, toastr, router, http, auth) {
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.toastr = toastr;
        this.router = router;
        this.http = http;
        this.auth = auth;
        this.isActive = false;
        this.parentMessage = "message from parent";
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Content-Type': 'application/json' });
        this.user = { email: "", password: "" };
        this.signup = { name: "", email: "", password: "" };
    }
    LoginComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            $('.tab a').on('click', function (e) {
                e.preventDefault();
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
                var href = $(this).attr('href');
                $('.forms > form').hide();
                $(href).fadeIn(500);
            });
        });
        this.myform = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.myformsignup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    };
    Object.defineProperty(LoginComponent.prototype, "email", {
        get: function () {
            return this.myform.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "password", {
        get: function () {
            return this.myform.get('password');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "email1", {
        get: function () {
            return this.myformsignup.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "password1", {
        get: function () {
            return this.myformsignup.get('password');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "name", {
        get: function () {
            return this.myformsignup.get('name');
        },
        enumerable: true,
        configurable: true
    });
    // Login Api binding function
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        console.log("login", this.user);
        this.auth.login({ email: this.user.email, password: this.user.password }).then(function (result) {
            console.log("Message", result.json().message);
            _this.user = result.json();
            console.log(_this.user.candi_fullname);
            localStorage.setItem('token', result.json().token);
            _this.token = localStorage.getItem('token');
            _this.userId = localStorage.getItem(_this.user.id);
            console.log(_this.userId);
            console.log("token =>", _this.token);
            console.log(result.json());
            // this.toastr.success('Welcome!!!');
            _this.router.navigateByUrl('/instruction');
        }).catch(function (err) {
            // debugger;
            if (err.json().error === 'Email id not registered, please register first.') {
                _this.toastr.error('Email id not registered, please register first.');
            }
            if (err.json().error === "Authantication failed please enter correct password") {
                _this.toastr.error('Authantication failed please enter correct password');
            }
            if (err.json().error === "Authantication failed please check password") {
                _this.toastr.error('Authantication failed please check password');
            }
            if (err.json().error === "Authantication failed") {
                _this.toastr.error('Authantication failed');
            }
            console.log(err);
        });
    };
    //signup Api binding function
    LoginComponent.prototype.Signup = function () {
        var _this = this;
        console.log(this.signup);
        this.auth.SignuppostDetail('/signup', { email: this.signup.email, password: this.signup.password, fullname: this.signup.name }).then(function (data) {
            console.log(data);
            // debugger;
            if (data) {
                _this.signup = data.json().message;
                console.log("dataSigup", _this.signup.id);
                console.log("dataSigup", _this.signup);
                _this.toastr.success(_this.signup);
                _this.reset();
            }
            else {
                _this.toastr.error('OTP is not verfied');
            }
        }).catch(function (err) {
            if (err.json().error === 'User already exists.') {
                _this.toastr.error('User already exists.');
            }
        });
    };
    LoginComponent.prototype.otp = function () {
        var _this = this;
        if (this.signup.mobileno != '') {
            this.auth.postDetail('/candi_sendotp', this.token, { mobile_no: this.signup.mobileno }).then(function (data) {
                _this.data = data.json().result;
                _this.otpData = data.json().message;
                console.log(_this.otpData);
                _this.Id = _this.data.id;
                _this.toastr.success("The OTP is sent to your registered Mobile Number");
            });
        }
        else {
            this.toastr.error('Please Enter Mobile Number');
        }
    };
    LoginComponent.prototype.reset = function () {
        this.myformsignup.reset();
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (!this.auth.isAuthenticated()) {
            this.router.navigateByUrl('/login');
            return false;
        }
        return true;
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var AuthService = /** @class */ (function () {
    // private selectedFile: File = null;
    // private fb: any = new FormData();
    function AuthService(jwtHelper, http, router) {
        this.jwtHelper = jwtHelper;
        this.http = http;
        this.router = router;
        //private BASE_URL: string = 'http://localhost:3003'; 
        this.BASE_URL = 'http://18.223.249.160:3003'; // api url
        //private BASE_URL: string = 'http://52.14.69.51:3003';   // api url
        this.Speech = ' http://13.233.39.240:3002/getfirstquestion'; // speech api url
        this.evaluate = ' http://13.233.39.240:3002'; // speech api url
        this.NextSpeech = 'http://13.233.39.240:3002/getnextquestion'; // speech api url
        this.URL = 'http://localhost:1997/api/candiusers/forgot'; //Forgot Passwword
        //token :any;
        this.Authid = localStorage.getItem('Authid');
        this.token = localStorage.getItem('token');
        this.candi_id = localStorage.getItem('candi_id');
        this.user_name = localStorage.getItem('user_name');
        this.loggedIn = false;
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' }); // For CORS HTTP
        if (localStorage.getItem('token')) {
            this.headers.set('x-access-token', "" + localStorage.getItem('token')); // Set The Token And Authorization
        }
        if (localStorage.getItem('Authid')) {
            this.headers.set('Authid', "" + localStorage.getItem('Authid')); // Set The Token And Authorization
            console.log(this.Authid);
        }
        if (localStorage.getItem('candi_id')) {
            this.headers.set('candi_id', "" + localStorage.getItem('Authid')); // Set The Token And Authorization
            console.log(this.candi_id);
        }
        if (localStorage.getItem('user_name')) {
            this.headers.set('user_name', "" + localStorage.getItem('Authid')); // Set The Token And Authorization
            console.log(this.user_name);
        }
    }
    // Forgot Password
    AuthService.prototype.forgot = function (user) {
        console.log(user);
        var url = this.URL + "/password";
        return this.http.post(url, user, { headers: this.headers }).toPromise();
    };
    AuthService.prototype.menuList = function (p1, Authid) {
        var url = "" + this.BASE_URL + p1;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            'Content-Type': 'application/json',
            'Authid': "" + localStorage.getItem('Authid'),
        });
        return this.http.post(url, { headers: headers }).toPromise();
    };
    // For Login And Authenticate
    AuthService.prototype.login = function (user) {
        console.log(user);
        var url = this.BASE_URL + "/signin";
        return this.http.post(url, user, { headers: this.headers }).toPromise();
    };
    // check the authentication and token
    AuthService.prototype.isAuthenticated = function () {
        var token = localStorage.getItem('token');
        console.log(token);
        return !this.jwtHelper.isTokenExpired(token);
    };
    // get and Post Data (Both)
    AuthService.prototype.getList = function (p1, method, data) {
        if (method === void 0) { method = 'get'; }
        if (data === void 0) { data = ''; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var url, headers;
            return __generator(this, function (_a) {
                url = "" + this.BASE_URL + p1;
                headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
                    ' Content-Type': 'application/json',
                });
                if (method == 'get') {
                    return [2 /*return*/, this.http.get(url, { headers: headers }).toPromise().then(function (res) {
                            return res;
                        }).catch(function (error) { return _this.handleError(error); })];
                }
                else {
                    return [2 /*return*/, this.http.post(url, data, { headers: headers }).toPromise().then(function (res) {
                            return res;
                        }).catch(function (error) { return _this.handleError(error); })];
                }
                return [2 /*return*/];
            });
        });
    };
    // store the data
    AuthService.prototype.get = function (p1, token) {
        var url = "" + this.BASE_URL + p1;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            'Content-Type': 'application/json',
            'x-access-token': "" + localStorage.getItem('token'),
        });
        return this.http.get(url, { headers: headers }).toPromise();
    };
    // update for update
    AuthService.prototype.update = function (p1, token, data) {
        if (data === void 0) { data = ''; }
        var url = "" + this.BASE_URL + p1;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            'Content-Type': 'application/json',
            'x-access-token': "" + token
        });
        return this.http.post(url, data, { headers: headers }).toPromise();
    };
    //     //upload for 
    //     onUploadImg(p1, fb: any = '', token): any {
    //         let url: string = `${this.BASE_URL}` + p1;
    //         const httpHeader = new HttpHeaders().set('x-access-token', `${token}`);
    //     return this.httpClient.post(url, fb).subscribe(err => {
    //         console.log(err);
    //     });
    // }
    // for get the data
    AuthService.prototype.postDetail = function (p1, token, data) {
        if (data === void 0) { data = ''; }
        var url = "" + this.BASE_URL + p1;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            'Content-Type': 'application/json',
            'x-access-token': "" + token,
        });
        return this.http.post(url, data, { headers: headers }).toPromise();
    };
    //speech post data
    AuthService.prototype.postspeech = function (data) {
        if (data === void 0) { data = ''; }
        var url = "" + this.Speech;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            'Content-Type': 'application/json'
        });
        return this.http.post(url, data, { headers: headers }).toPromise();
    };
    //speech post data
    AuthService.prototype.postspeechEvaluate = function (data) {
        if (data === void 0) { data = ''; }
        var url = "" + this.evaluate;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            'Content-Type': 'application/json'
        });
        return this.http.post(url, data, { headers: headers }).toPromise();
    };
    //speech post data Next
    AuthService.prototype.postspeechNext = function (data) {
        if (data === void 0) { data = ''; }
        var url = "" + this.NextSpeech;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            'Content-Type': 'application/json'
        });
        return this.http.post(url, data, { headers: headers }).toPromise();
    };
    // For delete operation
    AuthService.prototype.delete = function (p1, token) {
        var url = "" + this.BASE_URL + p1;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + token
        });
        return this.http.delete(url, { headers: headers }).toPromise();
    };
    AuthService.prototype.handleError = function (error) {
        if (error.status === 401) {
        }
    };
    AuthService.prototype.putResult = function (p1, data, token) {
        if (data === void 0) { data = ''; }
        var url = "" + this.BASE_URL + p1;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            'Content-Type': 'application/json',
            'x-access-token': "" + localStorage.getItem('token'),
        });
        return this.http.put(url, data, { headers: headers }).toPromise();
    };
    // for get the data
    AuthService.prototype.SignuppostDetail = function (p1, data) {
        if (data === void 0) { data = ''; }
        var url = "" + this.BASE_URL + p1;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            'Content-Type': 'application/json',
        });
        return this.http.post(url, data, { headers: headers }).toPromise();
    };
    AuthService.prototype.dataShare = function (data) {
        if (data === void 0) { data = ''; }
        return (data).toPromise();
    };
    AuthService.prototype.Logout = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('Authid');
        this.router.navigateByUrl('/');
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"], _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/block-copy-paste.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/services/block-copy-paste.directive.ts ***!
  \********************************************************/
/*! exports provided: BlockCopyPasteDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockCopyPasteDirective", function() { return BlockCopyPasteDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlockCopyPasteDirective = /** @class */ (function () {
    function BlockCopyPasteDirective() {
    }
    BlockCopyPasteDirective.prototype.blockPaste = function (e) {
        e.preventDefault();
    };
    BlockCopyPasteDirective.prototype.blockCopy = function (e) {
        e.preventDefault();
    };
    BlockCopyPasteDirective.prototype.blockCut = function (e) {
        e.preventDefault();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('paste', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], BlockCopyPasteDirective.prototype, "blockPaste", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('copy', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], BlockCopyPasteDirective.prototype, "blockCopy", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('cut', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], BlockCopyPasteDirective.prototype, "blockCut", null);
    BlockCopyPasteDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appBlockCopyPaste]'
        }),
        __metadata("design:paramtypes", [])
    ], BlockCopyPasteDirective);
    return BlockCopyPasteDirective;
}());



/***/ }),

/***/ "./src/app/services/changecolor.directive.ts":
/*!***************************************************!*\
  !*** ./src/app/services/changecolor.directive.ts ***!
  \***************************************************/
/*! exports provided: ChangecolorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangecolorDirective", function() { return ChangecolorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChangecolorDirective = /** @class */ (function () {
    function ChangecolorDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    ChangecolorDirective.prototype.onClick = function () {
        this.ChangeBgColor('black');
    };
    ChangecolorDirective.prototype.ChangeBgColor = function (color) {
        this.renderer.setElementStyle(this.el.nativeElement, 'color', color);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ChangecolorDirective.prototype, "onClick", null);
    ChangecolorDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appChangecolor]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"]])
    ], ChangecolorDirective);
    return ChangecolorDirective;
}());



/***/ }),

/***/ "./src/app/services/deactivate-guard.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/deactivate-guard.service.ts ***!
  \******************************************************/
/*! exports provided: CanDeactivateGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanDeactivateGuard", function() { return CanDeactivateGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CanDeactivateGuard = /** @class */ (function () {
    function CanDeactivateGuard() {
    }
    CanDeactivateGuard.prototype.canDeactivate = function (component, route, state) {
        var url = state.url;
        console.log('Url: ' + url);
        return component.canDeactivate ? component.canDeactivate() : true;
    };
    CanDeactivateGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], CanDeactivateGuard);
    return CanDeactivateGuard;
}());



/***/ }),

/***/ "./src/app/services/sharedata.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/sharedata.service.ts ***!
  \***********************************************/
/*! exports provided: SharedataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedataService", function() { return SharedataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//import {Observable}  from 'rxjs;'
var SharedataService = /** @class */ (function () {
    function SharedataService() {
        this.modals = [];
    }
    SharedataService.prototype.setData = function (data) {
        this.data = data;
    };
    SharedataService.prototype.getData = function () {
        var temp = this.data;
        this.clearData();
        return temp;
    };
    SharedataService.prototype.clearData = function () {
        this.data = undefined;
    };
    SharedataService.prototype.open = function (id) {
        // open modal specified by id
        var modal = this.modals.filter(function (x) { return x.id === id; })[0];
        // modal.open();
    };
    SharedataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], SharedataService);
    return SharedataService;
}());



/***/ }),

/***/ "./src/app/services/talk.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/talk.service.ts ***!
  \******************************************/
/*! exports provided: TalkService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TalkService", function() { return TalkService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var DEFAULT_GRAMMAR = "#JSGF V1.0; grammar Digits;\npublic <Digits> = ( <digit> ) + ;\n<digit> = ( zero | one | two | three | four | five | six | seven | eight | nine );";
var TalkService = /** @class */ (function () {
    function TalkService(zone, lang) {
        var _this = this;
        this.zone = zone;
        this.lang = lang;
        this.message = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.command = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.commands = {};
        this.context = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.refreshGrammar = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.started = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        var webkitSpeechRecognition = window.webkitSpeechRecognition;
        this.recognition = new webkitSpeechRecognition();
        if (this.recognition == 'undefined') {
            alert('undefine');
        }
        // const SpeechRecognition = window['SpeechRecognition'] || window['webkitSpeechRecognition'];
        this.recognition.lang = lang;
        this.recognition.interimResults = false;
        this.recognition.continuous = true;
        this.recognition.onresult = function (event) {
            var message = {};
            var word = '';
            var finalTranscript = '';
            if (event.results) {
                var result = event.results[event.resultIndex];
                var firstAlternative = result[0];
                if (result.isFinal) {
                    finalTranscript = firstAlternative.transcript;
                    message = { success: true, message: finalTranscript };
                }
                else {
                    word += result[0].transcript.trim().toLowerCase();
                    message = { success: true, message: word };
                }
            }
            _this.zone.run(function () {
                if (message['error']) {
                    _this.message.error(message);
                }
                else {
                    _this.message.next(message);
                    var context = _this.getContextForWord(word);
                    if (context) {
                        _this.context.next(context);
                    }
                    else {
                        var isCommand = _this.commands[_this.context.value] && _this.commands[_this.context.value][word];
                        if (isCommand) {
                            _this.command.next({ context: _this.context.value, command: word });
                        }
                        else {
                            // try to match a global context command
                            var isGlobalCommand = _this.commands[''] && _this.commands[''][word];
                            if (isGlobalCommand) {
                                _this.command.next({ context: '', command: word });
                            }
                        }
                    }
                }
            });
        };
        this.recognition.onerror = function (error) {
            _this.zone.run(function () {
                _this.message.error(error);
            });
        };
        this.recognition.onstart = function () {
            _this.zone.run(function () {
                _this.started.next(true);
            });
        };
        this.recognition.onend = function () {
            _this.zone.run(function () {
                _this.started.next(false);
            });
        };
        this.refreshGrammar.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(0)).subscribe(function () {
            _this.setGrammar();
        });
    }
    TalkService.prototype.start = function () {
        this.recognition.start();
    };
    TalkService.prototype.stop = function () {
        this.recognition.stop();
    };
    TalkService.prototype.declareContext = function (context) {
        var contextKey = context.map(function (w) { return w.toLowerCase(); }).join('/');
        if (!this.commands[contextKey]) {
            this.commands[contextKey] = {};
        }
        this.refreshGrammar.next(true);
    };
    TalkService.prototype.declareCommand = function (command, context) {
        var contextKey = context.map(function (w) { return w.toLowerCase(); }).join('/');
        if (!this.commands[contextKey]) {
            this.commands[contextKey] = {};
        }
        this.commands[contextKey][command.toLowerCase()] = true;
        this.refreshGrammar.next(true);
    };
    TalkService.prototype.setContext = function (context) {
        var contextKey = context.map(function (w) { return w.toLowerCase(); }).join('/');
        this.context.next(contextKey);
    };
    TalkService.prototype.getContextForWord = function (word) {
        // first try to match a subcontext of the current context
        var context = this.context.value ? this.context.value + '/' + word : word;
        if (this.commands[context]) {
            return context;
        }
        // then try top-level context
        if (this.commands[word]) {
            return word;
        }
    };
    TalkService.prototype.setGrammar = function () {
        var _this = this;
        var SpeechGrammarList = window['SpeechGrammarList'] || window['webkitSpeechGrammarList'];
        var words = {};
        Object.keys(this.commands).forEach(function (context) {
            context.split('/').forEach(function (word) {
                words[word] = true;
            });
            Object.keys(_this.commands[context]).forEach(function (command) { return words[command] = true; });
        });
        var grammar = DEFAULT_GRAMMAR + ' public <command> = ' + Object.keys(words).join(' | ') + ' ;';
        var speechRecognitionList = new SpeechGrammarList();
        speechRecognitionList.addFromString(grammar, 1);
        this.recognition.grammars = speechRecognitionList;
    };
    TalkService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('SPEECH_LANG')),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], String])
    ], TalkService);
    return TalkService;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n .panel-heading{\r\n    background-color: #ddd;\r\n}\r\n\r\ninput.ng-invalid.ng-touched{\r\n    border: 1px solid red;\r\n}\r\n\r\n.help-block\r\n{\r\n    color: red;\r\n}\r\n\r\n.container{\r\n    border: 1px solid #ff6600;\r\n}\r\n\r\n/* brandico */\r\n\r\n[class*=\"brandico-\"]:before {\r\n    font-family: 'brandico', sans-serif;\r\n}\r\n\r\ninput.ng-invalid.ng-touched{\r\n    border: 1px solid red;\r\n}\r\n\r\n.help-block\r\n{\r\n    color: red;\r\n}\r\n\r\n/* entypo */\r\n\r\n[class*=\"entypo-\"]:before {\r\n    font-family: 'entypo', sans-serif;\r\n}\r\n\r\n/* openwebicons */\r\n\r\n[class*=\"openwebicons-\"]:before {\r\n    font-family: 'OpenWeb Icons', sans-serif;\r\n}\r\n\r\n/* zocial */\r\n\r\n[class*=\"zocial-\"]:before {\r\n    font-family: 'zocial', sans-serif;\r\n}\r\n\r\n.form-signin{\r\n    max-width: 330px;\r\n    padding: 15px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.login-input {\r\n    margin-bottom: -1px;\r\n    border-bottom-left-radius: 0;\r\n    border-bottom-right-radius: 0;\r\n}\r\n\r\n.login-input-pass {\r\n    margin-bottom: 10px;\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n}\r\n\r\n.signup-input {\r\n    margin-bottom: -1px;\r\n    border-bottom-left-radius: 0;\r\n    border-bottom-right-radius: 0;\r\n}\r\n\r\n.signup-input-confirm {\r\n    margin-bottom: 10px;\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n}\r\n\r\n.create-account {\r\n    text-align: center;\r\n    width: 100%;\r\n    display: block;\r\n}\r\n\r\n.form-signin .form-control {\r\n    position: relative;\r\n    font-size: 16px;\r\n    height: auto;\r\n    padding: 10px;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.btn-center{\r\n    width: 50%;\r\n    text-align: center;\r\n    margin: inherit;\r\n}\r\n\r\n.social-login-btn {\r\n    margin: 5px;\r\n    width: 5%;\r\n    font-size: 250%;\r\n    padding: 0;\r\n}\r\n\r\n.social-login-more {\r\n    width: 45%;\r\n}\r\n\r\n.social-google {\r\n    background-color: #da573b;\r\n    border-color: #be5238;\r\n    \r\n}\r\n\r\n.social-google:hover{\r\n    background-color: #be5238;\r\n    border-color: #9b4631;\r\n}\r\n\r\n.social-twitter {\r\n    background-color: #1daee3;\r\n    border-color: #3997ba;\r\n}\r\n\r\n.social-twitter:hover {\r\n    background-color: #3997ba;\r\n    border-color: #347b95;\r\n}\r\n\r\n.social-facebook {\r\n    background-color: #4c699e;\r\n    border-color: #47618d;\r\n}\r\n\r\n.social-facebook:hover {\r\n    background-color: #47618d;\r\n    border-color: #3c5173;\r\n}\r\n\r\n.social-linkedin {\r\n    background-color: #4875B4;\r\n    border-color: #466b99;\r\n    \r\n}\r\n\r\n.social-linkedin:hover {\r\n    background-color: #466b99;\r\n    border-color: #3b5a7c;\r\n}\r\n\r\n.img{\r\n    margin-left: 43%;\r\n    margin-top: 2%;\r\n}"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//netdna.bootstrapcdn.com/font-awesome/4.0.0/css/font-awesome.css\" rel=\"stylesheet\">\r\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" integrity=\"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm\"\r\n        crossorigin=\"anonymous\">\r\n<div style=\"background-color: #ff6600\">\r\n        <img class=\"img\" src=\"../../assets/light_mm_logo.png\">\r\n        <br><br>\r\n</div>\r\n<p class=\"text-center\">\r\n        <a class=\"btn btn-primary social-login-btn social-facebook\" routerLink=\"/login\"><i class=\"fa fa-facebook\"></i></a>\r\n        <a class=\"btn btn-primary social-login-btn social-linkedin\" href=\"\"><i class=\"fa fa-linkedin\"></i></a>\r\n        <a class=\"btn btn-primary social-login-btn social-google\" href=\"\"><i class=\"fa fa-google-plus\"></i></a>\r\n\r\n</p>\r\n<div class=\"container\" style=\"padding-top:47px; position: center\">\r\n        <div class=\"row\">\r\n                <style>\r\n                        .panel-default>.myLoginHeading {\r\n          color: #efebeb;\r\n          background-color: #ff6600;\r\n          border-color: #ddd;\r\n          text-align: center;\r\n          font-size: 31px;\r\n          padding: 3px 15px;\r\n        }\r\n        @media only screen and (max-width: 300px) {\r\n          .panel-default>.myLoginHeading {\r\n            font-size: 19px;\r\n            padding: 9px 15px;\r\n          }\r\n        }\r\n      </style>\r\n                <div class=\"col-md-12\">\r\n                </div>\r\n                <div class=\"col-md-3\"></div>\r\n                <div class=\"col-md-6\">\r\n                        <div class=\"panel panel-default\">\r\n                                <div class=\"panel-heading myLoginHeading\">Signup</div>\r\n                                <div class=\"panel-body\">\r\n                                        <form class=\"form-horizontal\" role=\"form\" [formGroup]=\"myform\">\r\n                                                <div class=\"form-group\">\r\n                                                        <label for=\"email\" class=\"col-md-4 control-label\">E-Mail</label>\r\n\r\n                                                        <div class=\"col-md-8\">\r\n                                                                <input id=\"email\" type=\"email\" class=\"form-control\"\r\n                                                                        name=\"email\" value=\"\" [(ngModel)]=\"user.email\"\r\n                                                                        placeholder=\"Enter Email\" formControlName=\"email\">\r\n                                                                <span class=\"help-block\" *ngIf=\"myform.get('email').touched && myform.get('email').invalid\">Email\r\n                                                                        is Required!</span>\r\n                                                        </div>\r\n                                                </div>\r\n\r\n                                                <div class=\"form-group\">\r\n                                                        <label for=\"password\" class=\"col-md-4 control-label\">Password</label>\r\n\r\n                                                        <div class=\"col-md-8\">\r\n                                                                <input type=\"password\" class=\"form-control\" id=\"password\"\r\n                                                                        placeholder=\"Enter password\" [(ngModel)]=\"user.password\"\r\n                                                                        name=\"password\" formControlName=\"password\">\r\n                                                                <span class=\"help-block\" *ngIf=\"myform.get('password').touched && myform.get('password').invalid\">Password\r\n                                                                        is Required!</span>\r\n                                                        </div>\r\n                                                </div>\r\n                                                <div class=\"form-group\">\r\n                                                        <label for=\"password\" class=\"col-md-4 control-label\">Mobile No</label>\r\n\r\n                                                        <div class=\"col-md-8\">\r\n                                                                <input type=\"text\" class=\"form-control\" id=\"mobileno\"\r\n                                                                        placeholder=\"Enter Mobile No\" [(ngModel)]=\"user.mobileno\"\r\n                                                                        name=\"mobileno\" formControlName=\"mobileno\">\r\n                                                                <span class=\"help-block\" *ngIf=\"myform.get('mobileno').touched && myform.get('mobileno').invalid\">Mobile Number\r\n                                                                        is Required!</span>\r\n                                                        </div>\r\n                                                </div>\r\n                                                <div class=\"form-group\">\r\n                                                                <label for=\"password\" class=\"col-md-4 control-label\">Enter OTP</label>\r\n        \r\n                                                                <div class=\"col-md-8\">\r\n                                                                        <input type=\"text\" class=\"form-control\" id=\"otp\"\r\n                                                                                placeholder=\"Enter Mobile No\" [(ngModel)]=\"user.otp\"\r\n                                                                                name=\"otp\" formControlName=\"otp\">\r\n                                                                        <span class=\"help-block\" *ngIf=\"myform.get('otp').touched && myform.get('otp').invalid\">Enter OTP\r\n                                                                                is Required!</span>\r\n                                                                </div>\r\n                                                        </div>\r\n                                                \r\n                                                <div class=\"form-group\">\r\n                                                        <div class=\"col-md-8 col-md-offset-4\">\r\n                                                                <button type=\"submit\" [disabled]=\"!myform.valid\" class=\"btn btn-primary\"\r\n                                                                        (click)=\"onLogin()\">\r\n                                                                        <i class=\"fa fa-btn fa-sign-in\"></i> Signup\r\n                                                                </button>\r\n                                                         <a routerLink=\"/skill-update\">Register Here</a>\r\n                                                        </div>\r\n                                                </div>\r\n                                        </form>\r\n                                </div>\r\n                                <button (click)=\"getRandomNum(4)\" class=\"btn btn-primary\"> click</button>\r\n                        </div>\r\n                </div>\r\n                <div class=\"col-md-3\"></div>\r\n        </div>\r\n</div>"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignupComponent = /** @class */ (function () {
    function SignupComponent(toastr, router, http, auth) {
        this.toastr = toastr;
        this.router = router;
        this.http = http;
        this.auth = auth;
        this.parentMessage = "message from parent";
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.user = { email: "", password: "", mobileno: '', otp: '' };
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.myform = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            mobileno: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            otp: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)])
        });
    };
    Object.defineProperty(SignupComponent.prototype, "email", {
        get: function () {
            return this.myform.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignupComponent.prototype, "password", {
        get: function () {
            return this.myform.get('password');
        },
        enumerable: true,
        configurable: true
    });
    SignupComponent.prototype.onLogin = function () {
        var _this = this;
        this.auth.login(this.user).then(function (data) {
            console.log(data);
            if (data) {
                _this.userData = data.json();
                localStorage.setItem('token', data.json().token);
                _this.token = localStorage.getItem('token');
                console.log(_this.token);
                _this.toastr.success('Welcome Palak!!!');
                _this.router.navigateByUrl('/home');
            }
        }).catch(function (err) {
            console.log(err);
        });
    };
    SignupComponent.prototype.getRandomNum = function (length) {
        var randomNum = (Math.pow(10, length).toString().slice(length - 1) +
            Math.floor((Math.random() * Math.pow(10, length)) + 1).toString()).slice(-length);
        console.log(randomNum);
        return randomNum;
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/speechfeedback/speechfeedback.component.css":
/*!*************************************************************!*\
  !*** ./src/app/speechfeedback/speechfeedback.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a:hover {\r\n\r\n    cursor:pointer;\r\n    color: red;\r\n}\r\ntextarea.ng-invalid {\r\n    background-color: pink;\r\n}\r\n/* The container */\r\n.container {\r\n    display: block;\r\n    position: relative;\r\n    padding-left: 35px;\r\n    margin-bottom: 12px;\r\n    cursor: pointer;\r\n    font-size: 18px;;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n    font-family: sans-serif;\r\n}\r\n/* Hide the browser's default radio button */\r\n.container input {\r\n    position: absolute;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n}\r\n/* Create a custom radio button */\r\n.checkmark {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 25px;\r\n    width: 25px;\r\n    background-color: #eee;\r\n    border-radius: 50%;\r\n}\r\n/* On mouse-over, add a grey background color */\r\n.container:hover input ~ .checkmark {\r\n    background-color: #ccc;\r\n}\r\n/* When the radio button is checked, add a blue background */\r\n.container input:checked ~ .checkmark {\r\n    background-color: #FF4F33;\r\n}\r\n/* Create the indicator (the dot/circle - hidden when not checked) */\r\n.checkmark:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    display: none;\r\n}\r\n/* Show the indicator (dot/circle) when checked */\r\n.container input:checked ~ .checkmark:after {\r\n    display: block;\r\n}\r\n.checked {\r\n    color: #FF4F33;\r\n  }\r\n/* Style the indicator (dot/circle) */\r\n.container .checkmark:after {\r\n \ttop: 9px;\r\n\tleft: 9px;\r\n\twidth: 8px;\r\n\theight: 8px;\r\n\tborder-radius: 50%;\r\n\tbackground: white;\r\n}\r\n.btnsubmit{\r\n    background-color: #FF4F33;width: 179px;font-size: 18px;\r\n              height: 50px;color: #ffffff;border-radius: 25px;\r\n}"

/***/ }),

/***/ "./src/app/speechfeedback/speechfeedback.component.html":
/*!**************************************************************!*\
  !*** ./src/app/speechfeedback/speechfeedback.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\" style=\"margin-left: 12%;\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\" style=\"text-align:center;\">\r\n      <h3 class=\"text-center\">ThankYou!!</h3>\r\n      <h3 class=\"text-center\" style=\"font-weight:bold;font-family: sans-serif \">Share your feedback!!</h3>\r\n    </div>\r\n  </div>\r\n  <!-- <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card bg-light\" style=\"background-color: #FFFFFF;\">\r\n        <div class=\"card-body\">\r\n          <p style=\"font-family: sans-serif;font-weight: bold;font-size: 20px;\">How would you like to rate this test</p>\r\n          <p style=\"font-family: sans-serif;font-size: 16px;\">Please select your rating choice</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div> -->\r\n  <br>\r\n  <form [formGroup]=\"myform\">\r\n    <!-- <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"card bg-light\">\r\n          <div class=\"card-body\">\r\n            <label class=\"container\">\r\n              <p>Mind boggling</p>\r\n              <input type=\"radio\" checked=\"checked\" [(ngModel)]=\"give_star\" formControlName=\"give_star\" [value]=5 name=\"give_star\">\r\n              <span class=\"checkmark\"></span>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12 offset-6\" style=\"margin-top:-30px;\">\r\n                  <span class=\"fa fa-star checked\"></span>\r\n                  <span class=\"fa fa-star checked\"></span>\r\n                  <span class=\"fa fa-star checked\"></span>\r\n                  <span class=\"fa fa-star checked\"></span>\r\n                  <span class=\"fa fa-star checked\"></span>\r\n                </div>\r\n              </div>\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"card bg-light\">\r\n          <div class=\"card-body\">\r\n            <label class=\"container\">\r\n              <p>Excellent</p>\r\n              <input type=\"radio\" checked=\"checked\" [(ngModel)]=\"give_star\" formControlName=\"give_star\" [value]=4 name=\"give_star\">\r\n              <span class=\"checkmark\"></span>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12 offset-6\" style=\"margin-top:-30px;\">\r\n                  <span>&nbsp;&nbsp;&nbsp;</span>\r\n                  <span class=\"fa fa-star checked\"></span>\r\n                  <span class=\"fa fa-star checked\"></span>\r\n                  <span class=\"fa fa-star checked\"></span>\r\n                  <span class=\"fa fa-star checked\"></span>\r\n                </div>\r\n              </div>\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"card bg-light\">\r\n          <div class=\"card-body\">\r\n            <label class=\"container\">\r\n              <p>Good</p>\r\n              <input type=\"radio\" checked=\"checked\" [(ngModel)]=\"give_star\" formControlName=\"give_star\" [value]=3 name=\"give_star\">\r\n              <span class=\"checkmark\"></span>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12 offset-6\" style=\"margin-top:-30px;\">\r\n                  <span>&nbsp;&nbsp;&nbsp;</span>\r\n                  <span>&nbsp;&nbsp;&nbsp;</span>\r\n                  <span class=\"fa fa-star checked\"></span>\r\n                  <span class=\"fa fa-star checked\"></span>\r\n                  <span class=\"fa fa-star checked\"></span>\r\n                </div>\r\n              </div>\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"card bg-light\">\r\n          <div class=\"card-body\">\r\n            <label class=\"container\">\r\n              <p>Okay-ish</p>\r\n              <input type=\"radio\" checked=\"checked\" [(ngModel)]=\"give_star\" formControlName=\"give_star\" [value]=2 name=\"give_star\">\r\n              <span class=\"checkmark\"></span>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12 offset-6\" style=\"margin-top:-30px;\">\r\n                  <span>&nbsp;&nbsp;&nbsp;</span>\r\n                  <span>&nbsp;&nbsp;&nbsp;</span>\r\n                  <span>&nbsp;&nbsp;&nbsp;</span>\r\n                  <span class=\"fa fa-star checked\"></span>\r\n                  <span class=\"fa fa-star checked\"></span>\r\n                </div>\r\n              </div>\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"card bg-light\">\r\n          <div class=\"card-body\">\r\n            <label class=\"container\">\r\n              <p>Need Improvement</p>\r\n              <input type=\"radio\" checked=\"checked\" [(ngModel)]=\"give_star\" formControlName=\"give_star\" [value]=1 name=\"give_star\">\r\n              <span class=\"checkmark\"></span>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12 offset-6\" style=\"margin-top:-30px;\">\r\n                  <span>&nbsp;&nbsp;&nbsp;</span>\r\n                  <span>&nbsp;&nbsp;&nbsp;</span>\r\n                  <span>&nbsp;&nbsp;&nbsp;</span>\r\n                  <span>&nbsp;&nbsp;&nbsp;</span>\r\n                  <span class=\"fa fa-star checked \"></span>\r\n                </div>\r\n              </div>\r\n            </label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div> -->\r\n\r\n    <!-- <div class=\"row\" style=\"margin-top:5px;margin-left: 2px;\"> -->\r\n      <!-- <div class=\"card\"> -->\r\n        <!-- <div class=\"card-body\"> -->\r\n          <!-- <div class=\"col-md-12 bg-light\">\r\n           \r\n          </div> -->\r\n          <div class=\"col-md-12\">\r\n            <textarea type=\"text\" class=\"form-group\" rows=5 style=\"width:100%;\" formControlName=\"give_comment\" name=\"give_comment\" [(ngModel)]=\"give_comment\" maxlength=\"200\">\r\n              <span> max 200 characters</span>\r\n\r\n\r\n          </textarea>\r\n          </div>\r\n\r\n        <!-- </div> -->\r\n      <!-- </div> -->\r\n\r\n    <!-- </div> -->\r\n    <!-- <div class=\"row\"> -->\r\n      <div class=\"col-md-12\" style=\"margin-top:5px;text-align:center\">\r\n        <button type=\"button\" style=\"height: 60px;width: 130px;border-radius: 25px;background-color: #FF4F33;\" (click)=\"done()\">DONE</button>\r\n      <!-- </div> -->\r\n\r\n    </div>\r\n  </form>\r\n</div>\r\n<div class=\"col-md-12\" style=\"margin-top:10px;\">\r\n  <!-- <img style=\"display:table-cell;margin: auto; vertical-align:middle; text-align:center\" src=\"../../assets/MineMark Logo-Orange.svg\"> -->\r\n  <img style=\"display:table-cell;margin: auto; vertical-align:middle; text-align:center;width:7%;\" \r\n  src=\"https://s3.us-east-2.amazonaws.com/mmsdevrepo/assets/MineMark+Logo-Orange.svg\">\r\n</div>\r\n<strong><footer class=\"app-footer\" style=\"margin-top:40px;color:black;font-family: sans-serif;text-align: center;font-size:20px;\">\r\n  <a>Powered By</a> &copy; <a style=\"color:black;font-size:20px;\">Minemark Solutions Private Limited </a> 2019 </footer>\r\n</strong>\r\n"

/***/ }),

/***/ "./src/app/speechfeedback/speechfeedback.component.ts":
/*!************************************************************!*\
  !*** ./src/app/speechfeedback/speechfeedback.component.ts ***!
  \************************************************************/
/*! exports provided: SpeechfeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeechfeedbackComponent", function() { return SpeechfeedbackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_sharedata_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/sharedata.service */ "./src/app/services/sharedata.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { ResultTestComponent } from '../Dashboard/result-test/result-test.component';
var SpeechfeedbackComponent = /** @class */ (function () {
    function SpeechfeedbackComponent(router, share, auth) {
        this.router = router;
        this.share = share;
        this.auth = auth;
        this.token = localStorage.getItem('token');
    }
    SpeechfeedbackComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.get('/candi_details', this.token).then(function (data) {
            _this.result = data.json().user;
            _this.candi_id = _this.result.candi_id;
            _this.user_name = _this.result.candi_fullname;
        });
        this.myform = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            give_star: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            give_comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
    };
    SpeechfeedbackComponent.prototype.done = function () {
        var d = new Date().toLocaleString();
        console.log(d);
        this.auth.postDetail('/start_test', this.token, { end_time: d }).then(function (data) {
        });
        console.log(this.candi_id, this.user_name);
        this.auth.postDetail('/report_xlxs', this.token, { candi_id: this.candi_id, user_name: this.user_name }).then(function (report) {
        });
        this.router.navigateByUrl('/speechreport');
    };
    SpeechfeedbackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-speechfeedback',
            template: __webpack_require__(/*! ./speechfeedback.component.html */ "./src/app/speechfeedback/speechfeedback.component.html"),
            styles: [__webpack_require__(/*! ./speechfeedback.component.css */ "./src/app/speechfeedback/speechfeedback.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_sharedata_service__WEBPACK_IMPORTED_MODULE_3__["SharedataService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], SpeechfeedbackComponent);
    return SpeechfeedbackComponent;
}());



/***/ }),

/***/ "./src/app/speechtestreport/speechtestreport.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/speechtestreport/speechtestreport.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h4{\r\n    color: #FF4F33;\r\n    font-weight: bold;\r\n    font-size: 24px;\r\n}\r\n.adone{\r\n    color: #FF4F33 !important;\r\n    font-size: 20px;\r\n    float:right;\r\n    margin-top:-30px;\r\n}\r\n.btnfoundation{\r\n    background-color: #FFFFFF;\r\n    border: 1px solid #FF4F33;\r\n    height: 30px;\r\n    color: black;\r\n    width: 179px;\r\n    border-radius: 25px;\r\n}\r\n.btnreq{\r\n    color: #ffffff;\r\n    background-color: #111111;\r\n    width: 179px;\r\n    border-radius: 25px;\r\n}\r\nfieldset \r\n{\r\n    border: 1px solid #ddd !important;\r\n    margin: 0;\r\n    width:500px;\r\n    padding: 10px; \r\n    height: 360px;      \r\n    position: relative;\r\n    border-radius:4px;\r\n    background-color:#f5f5f5;\r\n    padding-left:10px!important;\r\n}\r\nhr{\r\n    margin: 0px !important;\r\n}\r\nlegend\r\n    {\r\n        font-size:24px;\r\n        font-family: sans-serif;\r\n        margin-bottom: 0px; \r\n        text-align: center;\r\n        width: 90%; \r\n        height: 50px;\r\n        border: 1px solid #ddd;\r\n        border-radius: 4px; \r\n        color: #FFFFFF;\r\n        font-family: sans-serif;\r\n\r\n        padding: 10px 5px 5px 10px; \r\n        background: linear-gradient(109deg, #FF6633 0%, #FF3333 100%);\r\n    }\r\n.btnbottom{\r\n    height: 40px;\r\n    width: 150px;\r\n    font-size: 20px;\r\n    background: linear-gradient(109deg, #FF6633 0%, #FF3333 100%);\r\n    border-radius: 25px;\r\n    text-align: center;\r\n    color: #ffffff;\r\n}\r\ntable {\r\n    font-family: arial, sans-serif;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n  }\r\ntd, th {\r\n    border: 1px solid #dddddd;\r\n    text-align: center;\r\n    padding: 8px;\r\n    font-size: 16px;\r\n  }\r\n/* tr:nth-child(even) {\r\n    background-color: #dddddd;\r\n  } */"

/***/ }),

/***/ "./src/app/speechtestreport/speechtestreport.component.html":
/*!******************************************************************!*\
  !*** ./src/app/speechtestreport/speechtestreport.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-full-layout></app-full-layout> -->\r\n<div class=\"row\">\r\n  <div class=\"col-md-12\" style=\"margin-top:40px;\">\r\n    <img style=\"display:table-cell;margin: auto; vertical-align:middle; text-align:center\" \r\n    src=\"https://s3.us-east-2.amazonaws.com/mmsdevrepo/assets/Mangalam-Jobs-logo.png\">\r\n\r\n  </div>\r\n</div>\r\n<div class=\"container\" style=\"margin-top: 40px;\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\" style=\"text-align: center;\">\r\n      <h4>Result of the Test</h4>\r\n      <button class=\"adone pointer-cursor btnbottom\" (click)=\"logout()\"><a style=\"color:white;text-align: center\">Done</a></button>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" style=\"margin-top:5px;\">\r\n    <div class=\"col-md-4\">\r\n      <div class=\"card bg-light\" style=\"background-color: #FFFFFF;\">\r\n        <div class=\"card-body\">\r\n          <p style=\"text-align: center; font-weight: bold;font-family: sans-serif;color: #FF4F33;font-size: 20px;\">You\r\n            have Scored</p>\r\n          <p style=\"text-align: center;font-weight: bold;font-family: sans-serif;color: #FF4F33;font-size: 20px;\">{{totalmarks.MARKS_OBTAINED\r\n            | number:'1.2-2'}}</p>\r\n          <p style=\"text-align: center;font-weight: bold;font-family: sans-serif;color: #999999;font-size: 20px;\">Out\r\n            of {{totalmarks.OUT_OF_MARKS}}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-8\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"card bg-light\" style=\"background-color: #FFFFFF;\">\r\n            <div class=\"card-body\">\r\n              <div class=\"col-md-6\">\r\n                <p style=\"font-weight: bold;font-family: sans-serif;color: black;font-size: 20px;\">Congratulations !!<br/>\r\n                  {{candidateData.user_name |uppercase}}\r\n                </p>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <p style=\"color:#FF4F33;\">{{'Start Time:'}} {{start_time}}  </p>\r\n                <p style=\"color:#FF4F33;\">{{'End Time:'}} {{end_time}}</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" style=\"margin-top:10px;\">\r\n    <div class=\"col-md-12\">\r\n      <table border=\"1\">\r\n        <thead>\r\n          <tr>\r\n            <th>Sr.No</th>\r\n            <th>Question No</th>\r\n            <th>Total Marks</th>\r\n            <th>Marks Obtained</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let data of listusermarks;let i=index\">\r\n            <td>{{i+1}}</td>\r\n            <td>{{data.QUESTION_ID}}</td>\r\n            <td>{{data.OUT_OF_MARKS}}</td>\r\n            <td>{{data.MARKS_OBTAINED | number:'1.2-2'}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=\"2\" style=\"font-weight: bold\">Total Marks</td>\r\n\r\n            <td style=\"font-weight: bold\">{{totalmarks.OUT_OF_MARKS}}</td>\r\n            <td style=\"font-weight: bold\">{{totalmarks.MARKS_OBTAINED | number:'1.2-2'}}</td>\r\n          </tr>\r\n\r\n\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n\r\n\r\n  </div>\r\n  <div class=\"row\" style=\"margin-top: 40px;\">\r\n    \r\n  <div class=\"col-md-12\">\r\n      <!-- <img style=\"display:table-cell;margin: auto; vertical-align:middle; text-align:center\" src=\"../../assets/MineMark Logo-Orange.svg\"> -->\r\n      <img style=\"display:table-cell;margin: auto; vertical-align:middle; text-align:center;width:7%;\" \r\n      src=\"https://s3.us-east-2.amazonaws.com/mmsdevrepo/assets/MineMark+Logo-Orange.svg\">\r\n  \r\n    </div>\r\n    <div class=\"col-md-12\">\r\n\r\n      <strong><footer class=\"app-footer\" style=\"margin-top:20px;color:black;font-family: sans-serif;text-align: center;font-size:20px;\">\r\n        <a>Powered By</a> &copy; <a style=\"color:black;font-size:20px;\">Minemark Solutions Private Limited </a> 2019 </footer>\r\n      </strong>\r\n      \r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/speechtestreport/speechtestreport.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/speechtestreport/speechtestreport.component.ts ***!
  \****************************************************************/
/*! exports provided: SpeechtestreportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeechtestreportComponent", function() { return SpeechtestreportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_sharedata_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/sharedata.service */ "./src/app/services/sharedata.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var SpeechtestreportComponent = /** @class */ (function () {
    function SpeechtestreportComponent(share, auth, activatedRoute, router) {
        this.share = share;
        this.auth = auth;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.candidateData = [];
        this.listusermarks = [];
        this.totalmarks = [];
        if (this.data) {
            // do whatever needed
            console.log(this.data);
        }
        else {
            // this.router.navigateByUrl('/sender');
            console.log("hello");
        }
    }
    SpeechtestreportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.token = localStorage.getItem('token');
        console.log(this.token);
        setTimeout(function () {
            _this.auth.get('/assessment_result', _this.token).then(function (list) {
                _this.candidateData = list.json();
                console.log("Candidate Info", _this.candidateData);
                _this.start_time = _this.candidateData.user[0].start_time;
                _this.end_time = _this.candidateData.user[0].end_time;
                _this.listusermarks = _this.candidateData.user;
                _this.totalmarks = _this.candidateData.total;
                // console.log("Candidate Info", this.totalmarks);
                // console.log("Candidate Info", this.listusermarks);
            }).catch(function (err) { });
        }, 1000);
    };
    SpeechtestreportComponent.prototype.logout = function () {
        // this.auth.get('/report_xlxs',this.token).then((data)=>{
        // })  
        //  this.auth.get('/candi_logout', this.token);
        localStorage.removeItem('token');
        this.router.navigateByUrl('/');
        //  });
    };
    SpeechtestreportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-speechtestreport',
            template: __webpack_require__(/*! ./speechtestreport.component.html */ "./src/app/speechtestreport/speechtestreport.component.html"),
            styles: [__webpack_require__(/*! ./speechtestreport.component.css */ "./src/app/speechtestreport/speechtestreport.component.css")]
        }),
        __metadata("design:paramtypes", [_services_sharedata_service__WEBPACK_IMPORTED_MODULE_1__["SharedataService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SpeechtestreportComponent);
    return SpeechtestreportComponent;
}());

function delay(ms) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve) { return setTimeout(resolve, ms); })];
        });
    });
}


/***/ }),

/***/ "./src/app/starttest/starttest.component.css":
/*!***************************************************!*\
  !*** ./src/app/starttest/starttest.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* a:hover {\r\n\r\n    cursor:pointer;\r\n    color: red;\r\n}\r\ntextarea.ng-invalid {\r\n    background-color: pink;\r\n} */\r\na:hover {\r\n\r\n    cursor:pointer;\r\n    color: red;\r\n}\r\ntextarea.ng-invalid {\r\n    background-color: pink;\r\n}\r\n/* The container */\r\n.container {\r\n    display: block;\r\n    position: relative;\r\n    padding-left: 35px;\r\n    margin-bottom: 12px;\r\n    cursor: pointer;\r\n    font-size: 18px;;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n    font-family: sans-serif;\r\n}\r\n/* Hide the browser's default radio button */\r\n.container input {\r\n    position: absolute;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n}\r\n/* Create a custom radio button */\r\n.checkmark {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 25px;\r\n    width: 25px;\r\n    background-color: #eee;\r\n    border-radius: 50%;\r\n}\r\n/* On mouse-over, add a grey background color */\r\n.container:hover input ~ .checkmark {\r\n    background-color: #ccc;\r\n}\r\n/* When the radio button is checked, add a blue background */\r\n.container input:checked ~ .checkmark {\r\n    background-color: #FF4F33;\r\n}\r\n/* Create the indicator (the dot/circle - hidden when not checked) */\r\n.checkmark:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    display: none;\r\n}\r\n/* Show the indicator (dot/circle) when checked */\r\n.container input:checked ~ .checkmark:after {\r\n    display: block;\r\n}\r\n/* Style the indicator (dot/circle) */\r\n.container .checkmark:after {\r\n \ttop: 9px;\r\n\tleft: 9px;\r\n\twidth: 8px;\r\n\theight: 8px;\r\n\tborder-radius: 50%;\r\n\tbackground: white;\r\n}\r\n.btnsubmit{\r\n    background-color: #FF4F33;width: 179px;font-size: 18px;\r\n              height: 50px;color: #ffffff;border-radius: 25px;\r\n}\r\n/* 14-02-19 */\r\n.si-wrapper {\r\n\tdisplay: inline-block;\r\n\tposition: relative;\r\n}\r\n.speech-input {\r\n\tmargin: 0;\r\n}\r\n.si-wrapper button {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tright: 0;\r\n\theight: 18px;\r\n\twidth: 18px;\r\n\tmargin: 0;\r\n\tborder: 0;\r\n\tpadding: 0;\r\n\tbackground: none;\r\n\tfont: 0/0 a;\r\n}\r\n.si-mic,\r\n.si-mic:after,\r\n.si-holder,\r\n.si-holder:before,\r\n.si-holder:after {\r\n\tposition: absolute;\r\n\tbackground: #333;\r\n}\r\n/* Microphone icon */\r\n.si-mic {\r\n\tdisplay: block;\r\n\theight: 25%; /* 8px / 32px */\r\n\ttop: 9.375%; /* 3px / 32px */\r\n\tleft: 37.5%; /* 12px / 32px */\r\n\tright: 37.5%; /* 12px / 32px */\r\n\tborder-radius: 99px 99px 0 0;\r\n}\r\n.si-mic:before,\r\n.si-mic:after,\r\n.si-holder {\r\n\tborder-radius: 0 0 99px 99px;\r\n}\r\n.si-mic:before {\r\n\tposition: absolute;\r\n\tz-index: 1;\r\n\tcontent: '';\r\n\twidth: 150%; /* 12px / 8px */\r\n\theight: 137.5%; /* 11px / 8px */\r\n\ttop: 100%; /* 8px / 8px */\r\n\tleft: -25%; /* -2px / 8px */\r\n\tbackground: #fff;\r\n}\r\n.si-mic:after {\r\n\tz-index: 1;\r\n\tcontent: '';\r\n\twidth: 100%; /* 10px / 10px */\r\n\theight: 100%; /* 10px / 10px */\r\n\ttop: 110%; /* 11px / 10px */\r\n\tleft: 0;\r\n}\r\n.si-holder {\r\n\tdisplay: block;\r\n\theight: 40.625%; /* 13px / 32px */\r\n\twidth: 50%; /* 16px / 32px */\r\n\tleft: 25%; /* 8px / 32px */\r\n\ttop: 37.5%; /* 12px / 32px */\r\n}\r\n.si-holder:after {\r\n\tcontent: '';\r\n\twidth: 66.666%; /* 8px / 16px */\r\n\theight: 18.182%; /* 2px / 13px */\r\n\tbottom: -30.769%; /* -4px / 13px */\r\n\tleft: 16.667%; /* 2px / 16px */\r\n}\r\n.si-holder:before {\r\n\tcontent: '';\r\n\twidth: 33.333%; /* 4px / 16px */\r\n\theight: 27.273%; /* 3px / 13px */\r\n\ttop: 92.308%; /* 12px / 13px */\r\n\tleft: 33.333%; /* 4px / 16px */\r\n}\r\nbody {\r\n\tmargin-left: 9%;\r\n\tmin-width: 479px;\r\n}\r\nh1, h2, h3, h4, h5, h6 {\r\n\tfont-size: 1.5em;\r\n\tmargin: 1.5em 0 0.4em;\r\n\tfont-family: sans-serif;\r\n\tfont-weight: normal;\r\n}\r\nh1 {\r\n\tfont-size: 2.8em;\r\n\tmargin: 1.0em 0;\r\n\tmax-width: 800px;\r\n}\r\na.github-button {\r\n    display: inline-block;\r\n    width: 100px;\r\n}\r\n@media (min-width: 900px) {\r\n\th1 {\r\n\t\tfont-size: 4.0em;\r\n\t\tmargin: 1.0em 0;\r\n\t\tmax-width: 800px;\r\n\t}\r\n\th1 iframe {\r\n\t\t-webkit-transform: scale(1.5) translate(25%,-14%);\r\n\t\t        transform: scale(1.5) translate(25%,-14%);\r\n\t}\r\n}\r\n.tag-name {\r\n\tcolor: crimson;\r\n}\r\n.tag-marker {\r\n\tcolor: #0000f0;\r\n}\r\n.speech-input {\r\n\twidth: 620px;\r\n\tmax-width: 100%;\r\n\tfont-size: 1em;\r\n\tpadding: 0.4em;\r\n\tbox-sizing: border-box;\r\n}\r\ntextarea {\r\n\theight: 160px;\r\n}"

/***/ }),

/***/ "./src/app/starttest/starttest.component.html":
/*!****************************************************!*\
  !*** ./src/app/starttest/starttest.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div oncontextmenu=\"return false\">\r\n  <div class=\"container\" style=\"margin-top: 30px\">\r\n    <div class=\"row\" style=\"float: right\">\r\n      <div class=\"col-md-12 offset-4\">\r\n        <button class=\"btn btnsubmit\" style=\"background-color: red;margin-right: 150px;\" value=\"submit\" (click)=\"end()\">End\r\n          Test</button>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        &nbsp;\r\n      </div>\r\n      <!-- <div class=\"col-md-6\" value=\"submit\" (click)=\"cancel()\" style=\"text-align: center; margin-top:4%; color: #FF4F33;font-size: 18px;\">Cancel\r\n        Test</div> -->\r\n      <div *ngIf=\"timeLeft>120\" class=\"col-md-6\" style=\"text-align: center; color: black;font-size: 18px; margin-top:3%;\"><img\r\n          src=\"https://s3.us-east-2.amazonaws.com/mmsdevrepo/assets/if_1-09_511570.jpg\" style=\"width: 50px;height: 45px;\">\r\n        <countdown id=\"countdown\" [config]=\"{leftTime: 100 * 27, notify: [1,300]}\"   (notify)=\"onNotify($event)\">$!m!:$!s!</countdown> \r\n        <!-- <p (notify)=\"onNotify($event)\">\r\n          {{counterTime}}\r\n        </p> -->\r\n      </div>\r\n      <!-- <div *ngIf=\"timeLeft<=120\" class=\"col-md-6\" style=\"text-align: center; color: red;font-size: 18px; margin-top:3%;\"><img\r\n          src=\"https://s3.us-east-2.amazonaws.com/mmsdevrepo/assets/if_1-09_511570.jpg\" style=\"width: 50px;height: 45px;\">\r\n        <countdown id=\"countdown\" [config]=\"{leftTime: 100 * 27, notify: [1,300]}\"  (notify)=\"onNotify($event)\">$!m!:$!s!</countdown> \r\n         <p (notify)=\"onNotify($event)\">\r\n          {{counterTime}}\r\n        </p> -->\r\n      <!-- </div>  -->\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"card bg-light\">\r\n          <div class=\"card-body\">\r\n\r\n            <div class=\"row\" style=\"margin-top: 40px;\">\r\n              <div class=\"col-md-12\" style=\"background-color:lightblue;color:black;padding:20px;\" *ngIf=\"!responseNextData1.question_text\">\r\n                <p>Question\r\n                  {{responseNextData.question_text}}</p>\r\n              </div>\r\n              <div class=\"col-md-12\" style=\"background-color:lightblue;color:black;padding:20px;\" *ngIf=\"responseNextData1.question_text \">\r\n                <p>Question\r\n                  {{responseNextData1.question_text}} </p>\r\n              </div>\r\n              <!-- <div class=\"col-md-12\" style=\"background-color:lightblue;color:black;padding:20px;\"  *ngIf=\"skillNextData.question_text\">\r\n                <p>Question \r\n                  {{skillNextData.question_text}} </p>\r\n              </div> -->\r\n\r\n            </div>\r\n            <div class=\"row\" style=\"margin-top: 20px;\">\r\n              <div class=\"col-md-12\">\r\n                <p> {{valueData}}</p>\r\n              </div>\r\n            </div>\r\n            <form>\r\n              <!-- 11-02-2019 -->\r\n              <!-- <div class=\"text-center\">\r\n                    <textarea [(ngModel)]=\"msg\" [ngModelOptions]=\"{standalone: true}\" disabled [ngStyle]=\"{'width.%': 60}\"\r\n                      rows=\"6\" placeholder=\"Speak here?\"></textarea>\r\n                    <div class=\"pull-right\"></div>\r\n                  </div> -->\r\n              <div class=\"text-center\" >\r\n\r\n                <!-- <textarea [(ngModel)]=\"msg\" appBlockCopyPaste [ngModelOptions]=\"{standalone: true}\" [ngStyle]=\"{'width.%': 60}\"\r\n                 rows=\"6\"  maxlength=\"1000\" placeholder=\"Write here?\"> -->\r\n                 <!-- appBlockCopyPaste -->\r\n                <!-- </textarea> -->\r\n                <!-- <br>\r\n                <span   class=\"text-center\" >\r\n                  The maximum length for an answer is 1000 characters.\r\n                </span> -->\r\n                 \r\n                  \r\n                \r\n                    \r\n                </div>\r\n            \r\n              <div class=\"text-center\" >\r\n                <div class=\"si-wrapper\">\r\n                  <textarea class=\"speech-input\" rows=\"6\"  maxlength=\"1000\" placeholder=\"Speak here?\" #firstNameInput name=\"eng-textarea\" style=\"padding-right: 25px;\" [(ngModel)]=\"msg\"></textarea>\r\n                  <button type=\"button\" class=\"si-btn\" style=\"cursor: pointer; top: 3.25px; width: 26px; height: 26px;\" (click)=\"speechStart()\">speech input\r\n                      <span class=\"si-mic\"></span><span class=\"si-holder\">\r\n      \r\n                      </span>\r\n                  </button>\r\n          </div>\r\n          <!-- <div class=\"button\">\r\n            <button class=\"btn btn-success\"  (click)=submit()>Submit</button>  \r\n          </div> -->\r\n                <!-- <textarea [(ngModel)]=\"msg\" [ngModelOptions]=\"{standalone: true}\" appBlockCopyPaste disabled [ngStyle]=\"{'width.%': 60}\"\r\n                  rows=\"6\" placeholder=\"Speak here?\"></textarea>\r\n                <div class=\"pull-right\"></div> -->\r\n              </div>\r\n              \r\n                <!-- <ng-template #speakBlock>\r\n                    <div class=\"text-center\">\r\n                  <textarea [(ngModel)]=\"msg\" [ngModelOptions]=\"{standalone: true}\" appBlockCopyPaste  [ngStyle]=\"{'width.%': 60}\"\r\n                    rows=\"6\" placeholder=\"Speak here?\"></textarea>\r\n                  \r\n                  <div class=\"pull-right\"></div>\r\n                </div>\r\n              </ng-template> -->\r\n              \r\n              <!-- <div class=\"text-center\">\r\n                <span   class=\"text-center\" >\r\n                  The maximum length for an answer is 1000 characters.\r\n                </span>\r\n              </div> -->\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12 \">\r\n                  <div class=\"col-md-12\">\r\n                    <div style=\"margin-left:20%\">\r\n                      <!-- 11-02-19 -->\r\n                      \r\n                      <span  >\r\n                            The maximum length for an answer is 1000 characters.\r\n                      </span>\r\n\r\n                      <!-- <button style=\"margin-left:20%;\" (click)=\"toggleVoiceRecognition('Speak')\"\r\n                        value=\"Speak\"> \r\n                        <i class=\"fa fa-microphone\" style=\"color:red;\" >\r\n\r\n                        </i>\r\n                      </button> -->\r\n                      <!-- <button [className]=\"started ? 'btn btn-danger' : 'btn btn-success'\" (click)=\"toggleVoiceRecognition($event.target.value)\"\r\n                        value=\"Speak\">{{started ? 'Stop' : 'Speak' }} <i class=\"fa fa-microphone\"></i></button> -->\r\n                      <div>\r\n                        <!-- <div *ngIf=\"keystart==false;else falseBlock\">\r\n                          <button class=\"btn btn-success\" (click)=\"toggleVoiceRecognition2($event.target.value)\" value=\"Keyboard\">Keyboard\r\n                            <i class=\"fa fa-keyboard-o\" aria-hidden=\"true\"></i></button>\r\n                        </div>\r\n                        <ng-template #falseBlock>\r\n                          <button class=\"btn btn-danger\" (click)=\"toggleVoiceRecognition2($event.target.value)\" value=\"Stop\">Stop\r\n                            <i class=\"fa fa-keyboard-o\" aria-hidden=\"true\"></i></button>\r\n                        </ng-template> -->\r\n\r\n                        <!-- 11-02-19 -->\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </form>\r\n\r\n            <div class=\"row\" style=\"margin-top: 20px;\">\r\n              <div class=\"col-md-6 offset-4\" *ngIf=\"this.QuestionCount < 136\">\r\n                <button class=\"btn btn-success\" style=\"margin-left:5%;\" value=\"submit\" (click)=\"submit($event.target.value,firstNameInput)\">Submit</button>\r\n              <!-- </div> -->\r\n            <!-- </div> -->\r\n            <!-- <div class=\"row\" style=\"margin-top:10px;\" *ngIf=\"this.QuestionCount < 136\"> -->\r\n              <!-- <div class=\"col-md-12 offset-5\"> -->\r\n                <button class=\"btn btn-primary\" style=\"font-size: 14px;margin-left:1%;\" value=\"skip\" (click)=\"submit($event.target.value)\">\r\n                  Skip</button>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\" style=\"margin-top: 20px;\" *ngIf=\"this.QuestionCount >135\">\r\n              <div class=\"col-md-6 offset-4\">\r\n                <button class=\"btn btn-sucess\" style=\"margin-left:5%;\" value=\"skipsubmit\" (click)=\"skipsubmit(firstNameInput)\">Submit</button>\r\n              <!-- </div>\r\n            </div>\r\n            <div class=\"row\" style=\"margin-top:10px;\" *ngIf=\"this.QuestionCount > 135\">\r\n              <div class=\"col-md-12 offset-5\"> -->\r\n                <button class=\"btn btn-primary\" value=\"skipupdate\" style=\"font-size: 14px;margin-left:1%;\" (click)=\"skipupdate()\">Skip the question</button>\r\n              </div>\r\n            </div>\r\n           \r\n          </div>\r\n          <br><br>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/starttest/starttest.component.ts":
/*!**************************************************!*\
  !*** ./src/app/starttest/starttest.component.ts ***!
  \**************************************************/
/*! exports provided: StarttestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarttestComponent", function() { return StarttestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_talk_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/talk.service */ "./src/app/services/talk.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var webkitSpeechRecognition = window.webkitSpeechRecognition;
var StarttestComponent = /** @class */ (function () {
    function StarttestComponent(http, activatedRoute, auth, speech, route, toast) {
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.auth = auth;
        this.speech = speech;
        this.route = route;
        this.toast = toast;
        this.popoverTitle = 'Are You Sure?';
        this.popoverMessage = 'After Cancel Test You will not appear for Re-Assesment For 1 Month';
        this.value = 'lightblue';
        this.response = '';
        this.msg = '';
        this.comment = '';
        this.context = '';
        this.token = localStorage.getItem('token');
        this.p = 1;
        this.started = false;
        this.keystart = false;
        this.visible = false;
        this.question_id = "M1";
        this.resData = [];
        this.responseData = [];
        /* clock variables */
        this.timeLeft = 27 * 100;
        this.QuestionCount = 105;
        this.responseNextData = [];
        this.responseNextData1 = [];
        this.collectskip = [];
        this.submitData = [];
        this.submitData1 = [];
        this.SkippedData = [];
        this.getData = [];
    }
    StarttestComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.getFirstQuestion();
        this.startTimer();
        // $(document).on('keydown', function (e) {
        //   alert(e);
        //   if (e.keyCode === 116 ||(e.ctrlKey && e.keycode ==82)) {
        //     window.event.returnValue =false;
        //   }
        // });
        // this.auth.get('/first_question_get', this.token).then((data) => {
        //   this.firstQuestion = data.json().result;
        //     this.firstQuestionCount=this.firstQuestion.Question_count; 
        //     this.Value=this.firstQuestionCount;
        //     console.log(this.firstQuestionCount);
        // if(this.firstQuestionCount==1){
        //   alert(this.firstQuestionCount);
        // this.QuestionCount = 105;
        this.speech.started.subscribe(function (started) { return _this.started = started; });
        console.log("this.started=>", this.started);
        if (this.started == false) {
            this.activatedRoute.params.subscribe(function (option) {
                _this.candi_skillset = option['id'];
                _this.auth.postspeechNext({ Next_question_id: _this.QuestionCount, Next_question_Set_id: _this.question_id, Next_skill_id: _this.candi_skillset })
                    .then(function (data) {
                    _this.responseNextData = data.json();
                    console.log("ResPonse Data", _this.responseNextData);
                });
            });
        }
        //  }
        //  else{
        //    alert('else')
        //    let value;
        //    this.submit(value);
        //  }
        // this.started = true;
        //  })
    };
    StarttestComponent.prototype.speak = function () {
    };
    StarttestComponent.prototype.startTimerHHMMSS = function (d) {
        d = Number(d);
        var h = Math.floor(d / 3600);
        var m = Math.floor(d % 3600 / 60);
        var s = Math.floor(d % 3600 % 60);
        var hDisplay = h > 0 ? h + (h === 1 ? "" : "") : "";
        var mDisplay = m > 0 ? m + (m === 1 ? "" : "") : "";
        var sDisplay = s > 0 ? s + (s === 1 ? "" : "") : "";
        this.counterTime = this.GetPaddedIntString(hDisplay, 2) + ":" + this.GetPaddedIntString(mDisplay, 2) + ":" + this.GetPaddedIntString(sDisplay, 2);
        return this.counterTime;
    };
    StarttestComponent.prototype.startTimer = function () {
        var _this = this;
        if (!this.interval) {
            this.interval = setInterval(function () {
                if (_this.timeLeft === 0) {
                    _this.route.navigateByUrl('/feedback');
                }
                if (_this.timeLeft >= 0) {
                    _this.startTimerHHMMSS(_this.timeLeft);
                    _this.timeLeft--;
                }
                else if (_this.timeLeft < 120) {
                    _this.startTimerHHMMSS(_this.timeLeft);
                    _this.timeLeft--;
                }
            }, 1000);
        }
    };
    StarttestComponent.prototype.pauseTimer = function () {
        clearInterval(this.interval);
    };
    StarttestComponent.prototype.GetPaddedIntString = function (n, numDigits) {
        var nPadded = n;
        for (; nPadded.length < numDigits;) {
            nPadded = "0" + nPadded;
        }
        return nPadded;
    };
    StarttestComponent.prototype.toggleVoiceRecognition = function (data) {
        var _this = this;
        this.http.get('https://westus.api.cognitive.microsoft.com/sts/v1.0').subscribe(function (data) {
            console.log("==============>", data);
        });
        // alert(data);
        //  this.visible=!this.visible;
        console.log("data", data);
        console.log("this.started", this.started);
        if (data == 'Speak') {
            if (this.started) {
                console.log("started true=>", this.keystart);
                this.visible = false;
                this.speech.stop();
                this.subscription.unsubscribe();
            }
            else {
                this.visible = true;
                console.log("started false=>", this.keystart);
                this.speech.start();
                this.subscription = this.speech.message.subscribe(function (data) {
                    console.log("data", data.message);
                    console.log("data", data.message.length);
                    _this.msg += data.message;
                    //  console.log("temp",temp);
                });
                //  this.visible=false;
                this.msg = '';
            }
        }
    };
    StarttestComponent.prototype.toggleVoiceRecognition2 = function (data) {
        var _this = this;
        // console.log(data);
        if (data === "Keyboard") {
            this.keystart = true;
            console.log("data=>", data);
            console.log("keystart true=>", this.keystart);
            this.visible = true;
            // this.speech.stop();
            // this.subscription.unsubscribe();
        }
        if (data === "Stop") {
            console.log("data=>", data);
            this.visible = false;
            this.keystart = false;
            console.log("keystart true=>", this.keystart);
            //this.speech.start();
            this.subscription = this.speech.message.subscribe(function (data) {
                _this.msg += data.message + ' ';
            });
        }
    };
    StarttestComponent.prototype.toggleVoiceRecognition3 = function (data) {
    };
    StarttestComponent.prototype.end = function () {
        var ask;
        ask = confirm('Are you sure?');
        if (ask == true) {
            this.route.navigateByUrl('/feedback');
        }
        else {
            console.log(ask);
        }
    };
    //14-02-2019
    StarttestComponent.prototype.speechStart = function () {
        if (!('webkitSpeechRecognition' in window))
            return;
        var talkMsg = 'Speak now';
        // seconds to wait for more input after last
        var defaultPatienceThreshold = 6;
        function capitalize(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }
        var inputEls = document.getElementsByClassName('speech-input');
        [].forEach.call(inputEls, function (inputEl) {
            var patience = parseInt(inputEl.dataset.patience, 6) || defaultPatienceThreshold;
            var micBtn, micIcon, holderIcon, newWrapper;
            var shouldCapitalize = true;
            // gather inputEl data
            var nextNode = inputEl.nextSibling;
            var parent = inputEl.parentNode;
            var inputRightBorder = parseInt(getComputedStyle(inputEl).borderRightWidth, 10);
            var buttonSize = 0.8 * (inputEl.dataset.buttonsize || inputEl.offsetHeight);
            // default max size for textareas
            if (!inputEl.dataset.buttonsize && inputEl.tagName === 'TEXTAREA' && buttonSize > 26) {
                buttonSize = 26;
            }
            // create wrapper if not present
            var wrapper = inputEl.parentNode;
            if (!wrapper.classList.contains('si-wrapper')) {
                wrapper = document.createElement('div');
                wrapper.classList.add('si-wrapper');
                wrapper.appendChild(parent.removeChild(inputEl));
                newWrapper = true;
            }
            // create mic button if not present
            micBtn = wrapper.querySelector('.si-btn');
            if (!micBtn) {
                micBtn = document.createElement('button');
                micBtn.type = 'button';
                micBtn.classList.add('si-btn');
                micBtn.textContent = 'speech input';
                micIcon = document.createElement('span');
                holderIcon = document.createElement('span');
                micIcon.classList.add('si-mic');
                holderIcon.classList.add('si-holder');
                micBtn.appendChild(micIcon);
                micBtn.appendChild(holderIcon);
                wrapper.appendChild(micBtn);
                // size and position mic and input
                micBtn.style.cursor = 'pointer';
                micBtn.style.top = 0.125 * buttonSize + 'px';
                micBtn.style.height = micBtn.style.width = buttonSize + 'px';
                inputEl.style.paddingRight = buttonSize - inputRightBorder + 'px';
            }
            // append wrapper where input was
            if (newWrapper)
                parent.insertBefore(wrapper, nextNode);
            // setup recognition
            var prefix = '';
            var isSentence;
            var recognizing = false;
            var timeout;
            var finalTranscript = '';
            var oldPlaceholder = null;
            var recognition = new webkitSpeechRecognition();
            recognition.continuous = true;
            recognition.interimResults = true;
            // if lang attribute is set on field use that
            // (defaults to use the lang of the root element)
            if (inputEl.lang)
                recognition.lang = inputEl.lang;
            function restartTimer() {
                timeout = setTimeout(function () {
                    recognition.stop();
                }, patience * 1000);
            }
            recognition.onstart = function () {
                oldPlaceholder = inputEl.placeholder;
                inputEl.placeholder = inputEl.dataset.ready || talkMsg;
                recognizing = true;
                micBtn.classList.add('listening');
                restartTimer();
            };
            recognition.onend = function () {
                recognizing = false;
                clearTimeout(timeout);
                micBtn.classList.remove('listening');
                if (oldPlaceholder !== null)
                    inputEl.placeholder = oldPlaceholder;
                // If the <input> has data-instant-submit and a value,
                if (inputEl.dataset.instantSubmit !== undefined && inputEl.value) {
                    // submit the form it's in (if it is in one).
                    if (inputEl.form)
                        inputEl.form.submit();
                    // console.log(inputEl.form);
                }
            };
            recognition.onresult = function (event) {
                clearTimeout(timeout);
                // get SpeechRecognitionResultList object
                var resultList = event.results;
                // go through each SpeechRecognitionResult object in the list
                // var finalTranscript = '';
                var interimTranscript = '';
                for (var i = event.resultIndex; i < resultList.length; ++i) {
                    var result = resultList[i];
                    // get this result's first SpeechRecognitionAlternative object
                    var firstAlternative = result[0];
                    console.log("firstAlternative[0]", firstAlternative.transcript);
                    if (result.isFinal) {
                        finalTranscript += firstAlternative.transcript;
                        console.log("finalTranscript", finalTranscript);
                    }
                    else {
                        interimTranscript += firstAlternative.transcript;
                    }
                }
                // console.log("this.msg1",this.msg);
                // capitalize transcript if start of new sentence
                var transcript = finalTranscript || interimTranscript;
                transcript = !prefix || isSentence ? capitalize(transcript) : transcript;
                // console.log("this.msg1",this.msg);
                // append transcript to cached input value
                inputEl.value = prefix + transcript;
                this.msg = finalTranscript;
                // set cursur and scroll to end
                inputEl.focus();
                if (inputEl.tagName === 'INPUT') {
                    inputEl.scrollLeft = inputEl.scrollWidth;
                }
                else {
                    inputEl.scrollTop = inputEl.scrollHeight;
                }
                // console.log("this.msg2",this.msg);
                console.log("this.MSG", this.msg);
                restartTimer();
            };
            //  debugger;
            //console.log("this.msg",this.msg);
            micBtn.addEventListener('click', function (event) {
                event.preventDefault();
                // stop and exit if already going
                if (recognizing) {
                    recognition.stop();
                    return;
                }
                // Cache current input value which the new transcript will be appended to
                var endsWithWhitespace = inputEl.value.slice(-1).match(/\s/);
                prefix = !inputEl.value || endsWithWhitespace ? inputEl.value : inputEl.value + ' ';
                // check if value ends with a sentence
                isSentence = prefix.trim().slice(-1).match(/[\.\?\!]/);
                // restart recognition
                recognition.start();
            }, false);
        });
    };
    //14-02-2019
    StarttestComponent.prototype.onNotify = function (e) {
        this.value = "red";
        if (e) {
            return this.toast.error('You have only 5 mins left');
        }
    };
    StarttestComponent.prototype.submit = function (value, firstNameInput) {
        // alert(this.QuestionCount);
        // this.duration=this.leftTime;
        var _this = this;
        this.counterTime;
        // let submitData = { candi_skillset: this.candi_skillset, time_taken: this.counterTime, given_answer: this.given_answer, question_content_id: this.question_content_id };
        // console.log("submitDATA", submitData);
        if (value == 'submit') {
            //this.nextqueId = 105;
            this.msg = firstNameInput.value;
            console.log(value);
            if (this.msg === '') {
                this.toast.info('Please give the answer');
            }
            if (this.msg !== '') {
                this.submitButton = value;
                console.log('before msg :', this.msg);
                this.ans = this.msg.split('\n').join(' ');
                // debugger;
                this.auth.postspeechEvaluate({ question_id: this.QuestionCount, skill_id: this.candi_skillset, Question_Set_id: this.question_id, Answer: this.msg })
                    .then(function (data) {
                    _this.responseData = data.json();
                    _this.auth.postDetail('/submit', _this.token, { question_no: _this.QuestionCount, answer: _this.ans, percent_marks: _this.responseData.Marks, time_taken: 0 }).then(function (data) {
                        _this.submitData = data.json().error;
                        _this.toast.success(data.json().message);
                        _this.nextqueId = ++_this.QuestionCount;
                        console.log('inside submit count  ', _this.nextqueId);
                        if (_this.nextqueId != 136 && _this.nextqueId < 136) {
                            _this.auth.postspeechNext({ Next_question_id: _this.nextqueId, Next_question_Set_id: _this.question_id, Next_skill_id: _this.candi_skillset })
                                .then(function (data) {
                                _this.responseNextData1 = data.json();
                                console.log('postspeechNext outside submit', _this.responseNextData1);
                            });
                        }
                        // debugger;
                        console.log(_this.collectskip.length);
                        if (_this.QuestionCount > 135 && _this.collectskip.length != 0) {
                            var box = confirm("Do you want to perform skipped Question?");
                            console.log("box", box);
                            if (box == true) {
                                _this.auth.get('/skipped_questions', _this.token).then(function (skipdata) {
                                    _this.skipquestion = skipdata.json().question_id;
                                    _this.skipcount = skipdata.json().skipped_count;
                                    _this.newValue = _this.skipquestion[0];
                                    console.log('skipp question count ++++', _this.skipcount);
                                    console.log('skipped question count ', _this.skipquestion.length);
                                    if (_this.skipquestion.length) {
                                        _this.nextqueId = _this.skipquestion[0];
                                        console.log('submit Inside for each Condition', _this.skipquestion[0]);
                                        _this.auth.postspeechNext({ Next_question_id: _this.nextqueId, Next_question_Set_id: _this.question_id, Next_skill_id: _this.candi_skillset })
                                            .then(function (data) {
                                            _this.responseNextData1 = data.json();
                                            console.log('postspeechNext submit', _this.responseNextData1);
                                        });
                                    }
                                });
                                // this.skipsubmit();
                            }
                            else {
                                _this.route.navigateByUrl('/feedback');
                            }
                        }
                    });
                });
                // while (this.QuestionCount > 135) {
                //   debugger;
                //     debugger;
                //     console.log("this.collectskip",this.collectskip);
                //      let i=0;
                //      let skipValue=this.collectskip[i];
                //      ++this.QuestionCount;
                //      this.collectskip.shift(); 
                //      console.log(this.collectskip.shift());   
                //     }
                this.msg = null;
                firstNameInput.value = '';
            }
            // this.speech.stop();
            this.visible = true;
        }
        if (value == 'skip') {
            // alert(value);
            this.ans = this.msg;
            console.log('skip question number', this.QuestionCount);
            this.collectskip.push(this.nextqueId);
            console.log('Collection Skip', this.collectskip);
            // debugger;
            this.auth.postDetail('/skipped', this.token, { question_no: this.QuestionCount, time_taken: 0 })
                .then(function (data) {
                _this.SkippedData = data.json();
                console.log('else skipped', _this.SkippedData);
                _this.toast.info(data.json().message);
                console.log('else message', data.json().message);
            });
            this.nextqueId = ++this.QuestionCount;
            console.log('skip question number', this.nextqueId);
            if (this.nextqueId != 136 && this.nextqueId < 136) {
                this.auth.postspeechNext({ Next_question_id: this.nextqueId, Next_question_Set_id: this.question_id, Next_skill_id: this.candi_skillset })
                    .then(function (data) {
                    _this.responseNextData1 = data.json();
                    console.log('postspeechNext outside Data', _this.responseNextData1);
                });
            }
            console.log('Skip Count', this.QuestionCount);
            this.msg = '';
            if (this.QuestionCount > 135 && this.collectskip.length != 0) {
                var box = confirm("Do you want to perform skipped Question?");
                console.log("skipbox", box);
                // debugger;
                if (box == true) {
                    this.auth.get('/skipped_questions', this.token).then(function (data1) {
                        _this.skipquestion = data1.json().question_id;
                        _this.skipcount = data1.json().skipped_count;
                        console.log('skipped_questions ++++', _this.skipcount);
                        console.log('SKIPPQUESTION IDs', _this.skipquestion.length);
                        _this.newValue = _this.skipquestion[0];
                        // this.QuestionCount = this.skipquestion[0];
                        console.log('Inside for each Condition', _this.skipquestion[0]);
                        // console.log('Inside for each Condition', this.skipquestion.length);
                        _this.auth.postspeechNext({ Next_question_id: _this.skipquestion[0], Next_question_Set_id: _this.question_id, Next_skill_id: _this.candi_skillset })
                            .then(function (data1) {
                            _this.responseNextData1 = data1.json();
                            console.log("ResPonse Data skipped postspeechNext", _this.responseNextData1);
                            _this.auth.postDetail('/update_submit', _this.token, { question_no: _this.skipquestion[0], percent_marks: _this.responseData.Marks, time_taken: 0 }).then(function (data) {
                                _this.submitData1 = data.json();
                                console.log("update_skipped", _this.submitData1);
                                _this.toast.info("Question skipped successfully");
                                _this.newValue = _this.skipquestion[0];
                            });
                        });
                    });
                    //this.skipupdate();
                }
                else {
                    this.route.navigateByUrl('/feedback');
                }
            }
        }
    };
    StarttestComponent.prototype.skipsubmit = function (firstNameInput) {
        var _this = this;
        if (this.msg === '') {
            this.toast.info('Please give the answer');
        }
        else {
            this.msg = firstNameInput.value;
            this.ans = this.msg.split('\n').join(' ');
            // debugger;
            if (this.newValue != this.skipquestion[0]) {
                this.auth.postspeechEvaluate({ question_id: this.skipquestion[0], skill_id: this.candi_skillset, Question_Set_id: this.question_id, Answer: this.msg })
                    .then(function (data1) {
                    _this.responseData = data1.json();
                    // console.log('postspeechEvaluate submit ', this.responseData);
                    _this.auth.postDetail('/update_submit', _this.token, { question_no: _this.skipquestion[0], answer: _this.ans, percent_marks: _this.responseData.Marks, time_taken: 0 }).then(function (data) {
                        _this.submitData1 = data.json();
                        console.log('update_submit Data', _this.submitData1);
                        _this.toast.success("Answer submitted successfully");
                        _this.auth.get('/skipped_questions', _this.token).then(function (skipdata) {
                            _this.skipquestion = skipdata.json().question_id;
                            _this.skipcount = skipdata.json().skipped_count;
                            console.log('skipp question count ++++', _this.skipcount);
                            console.log('skipped question count ', _this.skipquestion.length);
                            if (_this.skipquestion.length) {
                                _this.nextqueId = _this.skipquestion[0];
                                console.log('submit Inside for each Condition', _this.skipquestion[0]);
                                _this.auth.postspeechNext({ Next_question_id: _this.skipquestion[0], Next_question_Set_id: _this.question_id, Next_skill_id: _this.candi_skillset })
                                    .then(function (data) {
                                    _this.responseNextData1 = data.json();
                                    console.log('postspeechNext submit', _this.responseNextData1);
                                });
                            }
                        });
                    });
                    _this.msg = '';
                    firstNameInput.value = '';
                    console.log('ARRAY VALUE AFTER SPLICE OF SKIPPQUESTION', _this.skipquestion);
                });
                if (this.skipquestion.length == 0) {
                    // debugger;
                    this.route.navigateByUrl('/feedback');
                }
                this.visible = false;
            }
            else {
                // debugger;
                this.auth.postspeechEvaluate({ question_id: this.skipquestion[0], skill_id: this.candi_skillset, Question_Set_id: this.question_id, Answer: this.msg })
                    .then(function (data1) {
                    _this.responseData = data1.json();
                    // console.log('postspeechEvaluate submit ', this.responseData);
                    //  this.ans.split('\n').join(' ');
                    _this.auth.postDetail('/update_submit', _this.token, { question_no: _this.skipquestion[0], answer: _this.ans, percent_marks: _this.responseData.Marks, time_taken: 0 }).then(function (data) {
                        _this.submitData1 = data.json();
                        console.log('update_submit Data', _this.submitData1);
                        _this.toast.success("Answer submitted successfully");
                        _this.auth.get('/skipped_questions', _this.token).then(function (skipdata) {
                            _this.skipquestion = skipdata.json().question_id;
                            _this.skipcount = skipdata.json().skipped_count;
                            console.log('skipp question count ++++', _this.skipcount);
                            console.log('skipped question count ', _this.skipquestion.length);
                            _this.nextqueId = _this.skipquestion[0];
                            console.log('==>>>', _this.skipquestion);
                            _this.auth.postspeechNext({ Next_question_id: _this.skipquestion[0], Next_question_Set_id: _this.question_id, Next_skill_id: _this.candi_skillset })
                                .then(function (data) {
                                _this.responseNextData1 = data.json();
                                // console.log('postspeechNext submit', this.responseNextData1);
                            });
                        });
                    });
                });
            }
            this.visible = 'false';
            this.msg = '';
        }
    };
    StarttestComponent.prototype.skipupdate = function () {
        var _this = this;
        // debugger;
        this.auth.postDetail('/update_submit', this.token, { question_no: this.skipquestion[0], percent_marks: this.responseData.Marks, time_taken: 0 }).then(function (data) {
            _this.submitData1 = data.json();
            console.log("update_skipped", _this.submitData1);
            _this.auth.get('/skipped_questions', _this.token).then(function (data1) {
                _this.skipquestion = data1.json().question_id;
                _this.skipcount = data1.json().skipped_count;
                console.log('skipped_questions ++++', _this.skipcount);
                console.log('SKIPPQUESTION IDs', _this.skipquestion.length);
                if (_this.skipquestion.length) {
                    // this.QuestionCount = this.skipquestion[0];
                    console.log('Inside for each Condition', _this.skipquestion[0]);
                    // console.log('Inside for each Condition', this.skipquestion.length);
                    _this.auth.postspeechNext({ Next_question_id: _this.skipquestion[0], Next_question_Set_id: _this.question_id, Next_skill_id: _this.candi_skillset })
                        .then(function (data1) {
                        _this.responseNextData1 = data1.json();
                        console.log("ResPonse Data skipped postspeechNext", _this.responseNextData1);
                        _this.toast.info("Question skipped successfully");
                        // this.newValue=this.skipquestion[0];
                    });
                }
            });
            _this.msg = '';
            console.log('ARRAY VALUE AFTER SPLICE OF SKIPPQUESTION', _this.skipquestion);
            if (_this.skipquestion.length == 0) {
                // debugger;
                _this.route.navigateByUrl('/speechreport');
            }
            _this.msg = '';
        });
    };
    StarttestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-starttest',
            template: __webpack_require__(/*! ./starttest.component.html */ "./src/app/starttest/starttest.component.html"),
            styles: [__webpack_require__(/*! ./starttest.component.css */ "./src/app/starttest/starttest.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _services_talk_service__WEBPACK_IMPORTED_MODULE_1__["TalkService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], StarttestComponent);
    return StarttestComponent;
}());



/***/ }),

/***/ "./src/app/validations/no-whitespace.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/validations/no-whitespace.directive.ts ***!
  \********************************************************/
/*! exports provided: NoWhitespaceDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoWhitespaceDirective", function() { return NoWhitespaceDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _no_whitespace_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./no-whitespace.validator */ "./src/app/validations/no-whitespace.validator.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/**
 * This validator works like "required" but it does not allow whitespace either
 *
 * @export
 * @class NoWhitespaceDirective
 * @implements {Validator}
 */
var NoWhitespaceDirective = /** @class */ (function () {
    function NoWhitespaceDirective() {
        this.valFn = Object(_no_whitespace_validator__WEBPACK_IMPORTED_MODULE_1__["NoWhitespaceValidator"])();
    }
    NoWhitespaceDirective_1 = NoWhitespaceDirective;
    NoWhitespaceDirective.prototype.validate = function (control) {
        return this.valFn(control);
    };
    NoWhitespaceDirective = NoWhitespaceDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appNoWhitespace]',
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], useExisting: NoWhitespaceDirective_1, multi: true }]
        })
    ], NoWhitespaceDirective);
    return NoWhitespaceDirective;
    var NoWhitespaceDirective_1;
}());



/***/ }),

/***/ "./src/app/validations/no-whitespace.validator.ts":
/*!********************************************************!*\
  !*** ./src/app/validations/no-whitespace.validator.ts ***!
  \********************************************************/
/*! exports provided: NoWhitespaceValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoWhitespaceValidator", function() { return NoWhitespaceValidator; });
function NoWhitespaceValidator() {
    return function (control) {
        var isWhitespace = (control.value || '').match(/\s/g);
        var isValid = !isWhitespace;
        return isValid ? null : { 'whitespace': true };
    };
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Angular\SpeechTextMangalam\Mangalam_Poc_Angular-25-01-19\speechtextmangalam\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map