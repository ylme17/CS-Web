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

/***/ "./src/app/Common/Company.ts":
/*!***********************************!*\
  !*** ./src/app/Common/Company.ts ***!
  \***********************************/
/*! exports provided: Company */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Company", function() { return Company; });
var Company = /** @class */ (function () {
    function Company(id, name, password, confirmPassword, email) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.email = email;
    }
    return Company;
}());



/***/ }),

/***/ "./src/app/Common/Customer.ts":
/*!************************************!*\
  !*** ./src/app/Common/Customer.ts ***!
  \************************************/
/*! exports provided: Customer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
var Customer = /** @class */ (function () {
    function Customer(id, name, password, confirmPassword) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }
    return Customer;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_create_customer_create_customer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/create-customer/create-customer.component */ "./src/app/components/create-customer/create-customer.component.ts");
/* harmony import */ var _components_create_company_create_company_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/create-company/create-company.component */ "./src/app/components/create-company/create-company.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'home',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    },
    {
        path: '',
        component: _components_create_customer_create_customer_component__WEBPACK_IMPORTED_MODULE_2__["CreateCustomerComponent"]
    },
    {
        path: 'company',
        component: _components_create_company_create_company_component__WEBPACK_IMPORTED_MODULE_3__["CreateCompanyComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#signInButton{\r\n    margin-left: 5%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzaWduSW5CdXR0b257XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--buttons to route between components-->\n<br>\n<button class=\"btn btn-dark\" id=\"signInButton\" (click)=\"routeToSignIn()\">Go to SignIn</button>\n<br><br>\n\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/shared-data.service */ "./src/app/services/shared-data.service.ts");
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
    function AppComponent(_sharedDataService) {
        this._sharedDataService = _sharedDataService;
        this.title = 'CouponSystem';
    }
    AppComponent.prototype.routeToSignIn = function () {
        window.location.href = this._sharedDataService.loginPageURL;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_shared_data_service__WEBPACK_IMPORTED_MODULE_1__["SharedDataService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/shared-data.service */ "./src/app/services/shared-data.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_create_customer_create_customer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/create-customer/create-customer.component */ "./src/app/components/create-customer/create-customer.component.ts");
/* harmony import */ var _components_create_company_create_company_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/create-company/create-company.component */ "./src/app/components/create-company/create-company.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_create_customer_create_customer_component__WEBPACK_IMPORTED_MODULE_9__["CreateCustomerComponent"],
                _components_create_company_create_company_component__WEBPACK_IMPORTED_MODULE_10__["CreateCompanyComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"].withConfig({ warnOnNgModelWithFormControl: 'never' }),
                _angular_http__WEBPACK_IMPORTED_MODULE_6__["HttpModule"]
            ],
            providers: [_services_shared_data_service__WEBPACK_IMPORTED_MODULE_7__["SharedDataService"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_8__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_8__["HashLocationStrategy"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common/custom-validators.ts":
/*!*********************************************!*\
  !*** ./src/app/common/custom-validators.ts ***!
  \*********************************************/
/*! exports provided: CustomValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomValidators", function() { return CustomValidators; });
var CustomValidators = /** @class */ (function () {
    function CustomValidators() {
    }
    CustomValidators.patternValidator = function (regex, error) {
        return function (control) {
            if (!control.value) {
                // if control is empty return no error
                return null;
            }
            // test the value of the control against the regexp supplied
            var valid = regex.test(control.value);
            // if true, return no error, else return error passed in the second parameter
            return valid ? null : error;
        };
    };
    CustomValidators.passwordMatchValidator = function (control) {
        var password = control.get('password').value; // get password from our password form control
        var confirmPassword = control.get('confirmPassword').value; // get password from our confirmPassword form control
        // compare is the password math
        if (password !== confirmPassword) {
            // if they don't match, set an error in our confirmPassword form control
            control.get('confirmPassword').setErrors({ passwordNotMatch: true });
        }
    };
    return CustomValidators;
}());



/***/ }),

/***/ "./src/app/components/create-company/create-company.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/create-company/create-company.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form{\r\n    margin-left: 20%;\r\n    width: 30%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmVhdGUtY29tcGFueS9jcmVhdGUtY29tcGFueS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7Q0FDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3JlYXRlLWNvbXBhbnkvY3JlYXRlLWNvbXBhbnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm17XHJcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gICAgd2lkdGg6IDMwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/create-company/create-company.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/create-company/create-company.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--form for add company-->\n<form novalidate [formGroup]=\"myForm\">\n  <legend>Hello Guest,<br> please fill the fields</legend>\n\n  <!--input field for name-->\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" class=\"form-control\" formControlName=\"name\" placeholder=\"Name\" [(ngModel)]=\"companyAdd.name\" \n      [ngClass]=\"{ 'is-invalid': myForm.controls.name.errors && (myForm.controls.name.touched || myForm.controls.name.dirty) }\">\n    <div *ngIf=\"myForm.controls.name.errors && (myForm.controls.name.touched || myForm.controls.name.dirty)\" class=\"invalid-feedback\">\n      <small *ngIf=\"myForm.controls.name.errors.required\">Name is required</small>\n    </div>\n  </div>\n\n  <!--input field for password-->\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"Password\" [(ngModel)]=\"companyAdd.password\" \n      [ngClass]=\"{ 'is-invalid': myForm.controls.password.errors && (myForm.controls.password.touched || myForm.controls.password.dirty) }\">\n    <div *ngIf=\"myForm.controls.password.errors && (myForm.controls.password.touched || myForm.controls.password.dirty)\" class=\"invalid-feedback\">\n      <small *ngIf=\"myForm.controls.password.errors.required\">Password is required</small>\n      <small *ngIf=\"myForm.controls.password.errors.minlength\">Password must be at least 5 characters</small>\n      <small *ngIf=\"myForm.controls.password.errors.maxlength\">Password must be maximum 8 characters</small>\n    </div>\n  </div>\n  \n  <!--input field for confirm password-->\n  <div class=\"form-group\">\n    <label>Retype Password</label>\n    <input type=\"password\" class=\"form-control\" formControlName=\"confirmPassword\" placeholder=\"Confirm Password\" [(ngModel)]=\"companyAdd.confirmPassword\"\n      [ngClass]=\"{ 'is-invalid': myForm.controls.confirmPassword.errors && (myForm.controls.confirmPassword.touched || myForm.controls.confirmPassword.dirty) }\">\n    <div *ngIf=\"myForm.controls.confirmPassword.errors && (myForm.controls.confirmPassword.touched || myForm.controls.confirmPassword.dirty)\" class=\"invalid-feedback\">\n      <small *ngIf=\"myForm.controls.confirmPassword.errors.required\">Confirm Password is required</small>\n      <small *ngIf=\"myForm.controls.confirmPassword.errors.passwordNotMatch\">Password not match</small>\n    </div>\n  </div>\n\n  <!--input field for email-->\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"email\" class=\"form-control\" formControlName=\"email\" placeholder=\"Email\" [(ngModel)]=\"companyAdd.email\" \n      [ngClass]=\"{ 'is-invalid': myForm.controls.email.errors && (myForm.controls.email.touched || myForm.controls.email.dirty) }\">\n    <div *ngIf=\"myForm.controls.email.errors && (myForm.controls.email.touched || myForm.controls.email.dirty)\" class=\"invalid-feedback\">\n      <small *ngIf=\"myForm.controls.email.errors.required\">Email is required</small>\n      <small *ngIf=\"myForm.controls.email.errors.email\">Email must be a valid email address</small>\n    </div>\n  </div>\n\n  <!--button become enable only when the form valid-->\n  <button (click)=\"addCompany()\" [disabled]=\"!myForm.valid\" class=\"btn btn-success\">Sign Up <i class=\"fas fa-user-plus\"></i></button>\n</form>\n"

/***/ }),

/***/ "./src/app/components/create-company/create-company.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/create-company/create-company.component.ts ***!
  \***********************************************************************/
/*! exports provided: CreateCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCompanyComponent", function() { return CreateCompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Common_Company__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Common/Company */ "./src/app/Common/Company.ts");
/* harmony import */ var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/shared-data.service */ "./src/app/services/shared-data.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _common_custom_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../common/custom-validators */ "./src/app/common/custom-validators.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CreateCompanyComponent = /** @class */ (function () {
    //in the constructor we provide SharedCompanyDataService for service and FormBuilder for form validation
    function CreateCompanyComponent(_sharedDataService, _formBuilder) {
        this._sharedDataService = _sharedDataService;
        this._formBuilder = _formBuilder;
        this.companyAdd = new _Common_Company__WEBPACK_IMPORTED_MODULE_1__["Company"](0, "", "", "", "");
    }
    //initialize form validation
    CreateCompanyComponent.prototype.ngOnInit = function () {
        this.formValidation();
    };
    //form validation conditions
    CreateCompanyComponent.prototype.formValidation = function () {
        this.myForm = this._formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(8)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])]
        }, {
            validator: _common_custom_validators__WEBPACK_IMPORTED_MODULE_5__["CustomValidators"].passwordMatchValidator
        });
    };
    //add company to DB
    CreateCompanyComponent.prototype.addCompany = function () {
        var _this = this;
        this._sharedDataService.addCompany(this.companyAdd).
            subscribe(function (resp) {
            _this.companyAdd = new _Common_Company__WEBPACK_IMPORTED_MODULE_1__["Company"](0, "", "", "", "");
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                type: 'success',
                title: 'Company created',
                showConfirmButton: false,
                timer: 1500
            });
        }, function (err) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                type: 'error',
                title: 'Oops...',
                text: err._body
            });
        });
    };
    CreateCompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-company',
            template: __webpack_require__(/*! ./create-company.component.html */ "./src/app/components/create-company/create-company.component.html"),
            styles: [__webpack_require__(/*! ./create-company.component.css */ "./src/app/components/create-company/create-company.component.css")]
        }),
        __metadata("design:paramtypes", [_services_shared_data_service__WEBPACK_IMPORTED_MODULE_2__["SharedDataService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], CreateCompanyComponent);
    return CreateCompanyComponent;
}());



/***/ }),

/***/ "./src/app/components/create-customer/create-customer.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/create-customer/create-customer.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form{\r\n    margin-left: 20%;\r\n    width: 30%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmVhdGUtY3VzdG9tZXIvY3JlYXRlLWN1c3RvbWVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztDQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jcmVhdGUtY3VzdG9tZXIvY3JlYXRlLWN1c3RvbWVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3Jte1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICAgIHdpZHRoOiAzMCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/create-customer/create-customer.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/create-customer/create-customer.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--form for add customer-->\n<form novalidate [formGroup]=\"myForm\">\n  <legend>Hello Guest,<br> please fill the fields</legend>\n\n  <!--input field for name-->\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" class=\"form-control\" formControlName=\"name\" placeholder=\"Name\" [(ngModel)]=\"customerAdd.name\" \n      [ngClass]=\"{ 'is-invalid': myForm.controls.name.errors && (myForm.controls.name.touched || myForm.controls.name.dirty) }\">\n    <div *ngIf=\"myForm.controls.name.errors && (myForm.controls.name.touched || myForm.controls.name.dirty)\" class=\"invalid-feedback\">\n      <small *ngIf=\"myForm.controls.name.errors.required\">Name is required</small>\n    </div>\n  </div>\n\n  <!--input field for password-->\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"Password\" [(ngModel)]=\"customerAdd.password\" \n      [ngClass]=\"{ 'is-invalid': myForm.controls.password.errors && (myForm.controls.password.touched || myForm.controls.password.dirty) }\">\n    <div *ngIf=\"myForm.controls.password.errors && (myForm.controls.password.touched || myForm.controls.password.dirty)\" class=\"invalid-feedback\">\n      <small *ngIf=\"myForm.controls.password.errors.required\">Password is required</small>\n      <small *ngIf=\"myForm.controls.password.errors.minlength\">Password must be at least 5 characters</small>\n      <small *ngIf=\"myForm.controls.password.errors.maxlength\">Password must be maximum 8 characters</small>\n    </div>\n  </div>\n\n  <!--input field for confirm password-->\n  <div class=\"form-group\">\n    <label>Retype Password</label>\n    <input type=\"password\" class=\"form-control\" formControlName=\"confirmPassword\" placeholder=\"Confirm Password\" [(ngModel)]=\"customerAdd.confirmPassword\"\n      [ngClass]=\"{ 'is-invalid': myForm.controls.confirmPassword.errors && (myForm.controls.confirmPassword.touched || myForm.controls.confirmPassword.dirty) }\">\n    <div *ngIf=\"myForm.controls.confirmPassword.errors && (myForm.controls.confirmPassword.touched || myForm.controls.confirmPassword.dirty)\" class=\"invalid-feedback\">\n      <small *ngIf=\"myForm.controls.confirmPassword.errors.required\">Confirm Password is required</small>\n      <small *ngIf=\"myForm.controls.confirmPassword.errors.passwordNotMatch\">Password not match</small>\n    </div>\n  </div>\n\n  <!--button become enable only when the form valid-->\n  <button (click)=\"addCustomer()\" [disabled]=\"!myForm.valid\" class=\"btn btn-success\">Sign Up <i class=\"fas fa-user-plus\"></i></button>\n</form>"

/***/ }),

/***/ "./src/app/components/create-customer/create-customer.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/create-customer/create-customer.component.ts ***!
  \*************************************************************************/
/*! exports provided: CreateCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCustomerComponent", function() { return CreateCustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Common_Customer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Common/Customer */ "./src/app/Common/Customer.ts");
/* harmony import */ var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/shared-data.service */ "./src/app/services/shared-data.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _common_custom_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../common/custom-validators */ "./src/app/common/custom-validators.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CreateCustomerComponent = /** @class */ (function () {
    //in the constructor we provide SharedCustomerDataService for service and FormBuilder for form validation
    function CreateCustomerComponent(_sharedDataService, _formBuilder) {
        this._sharedDataService = _sharedDataService;
        this._formBuilder = _formBuilder;
        this.customerAdd = new _Common_Customer__WEBPACK_IMPORTED_MODULE_1__["Customer"](0, "", "", "");
    }
    //initialize form validation
    CreateCustomerComponent.prototype.ngOnInit = function () {
        this.formValidation();
    };
    //form validation conditions
    CreateCustomerComponent.prototype.formValidation = function () {
        this.myForm = this._formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(8)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])]
        }, {
            validator: _common_custom_validators__WEBPACK_IMPORTED_MODULE_5__["CustomValidators"].passwordMatchValidator
        });
    };
    //add customer to DB
    CreateCustomerComponent.prototype.addCustomer = function () {
        var _this = this;
        this._sharedDataService.addCustomer(this.customerAdd).
            subscribe(function (resp) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                type: 'success',
                title: 'Customer created',
                showConfirmButton: false,
                timer: 1500
            });
            _this.customerAdd = new _Common_Customer__WEBPACK_IMPORTED_MODULE_1__["Customer"](0, "", "", "");
        }, function (err) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                type: 'error',
                title: 'Oops...',
                text: err._body
            });
        });
    };
    CreateCustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-customer',
            template: __webpack_require__(/*! ./create-customer.component.html */ "./src/app/components/create-customer/create-customer.component.html"),
            styles: [__webpack_require__(/*! ./create-customer.component.css */ "./src/app/components/create-customer/create-customer.component.css")]
        }),
        __metadata("design:paramtypes", [_services_shared_data_service__WEBPACK_IMPORTED_MODULE_2__["SharedDataService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], CreateCustomerComponent);
    return CreateCustomerComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".buttons{\r\n    margin-left: 36%;\r\n    width: 29%;\r\n}\r\n#button{\r\n    margin: 10px\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0NBQ2Q7QUFDRDtJQUNJLFlBQVk7Q0FDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uc3tcclxuICAgIG1hcmdpbi1sZWZ0OiAzNiU7XHJcbiAgICB3aWR0aDogMjklO1xyXG59XHJcbiNidXR0b257XHJcbiAgICBtYXJnaW46IDEwcHhcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br>\n<br><br>\n<div class=\"buttons\">\n  <button class=\"btn btn-success\" id=\"button\" (click)=\"routeToCustomer()\">Register as Customer</button>\n  <button class=\"btn btn-success\" id=\"button\" (click)=\"routeToCompany()\">Register as Company</button>\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(_router) {
        this._router = _router;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.routeToCustomer = function () {
        this._router.navigate(['']);
    };
    HomeComponent.prototype.routeToCompany = function () {
        this._router.navigate(['company']);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/services/shared-data.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/shared-data.service.ts ***!
  \*************************************************/
/*! exports provided: SharedDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedDataService", function() { return SharedDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SharedDataService = /** @class */ (function () {
    function SharedDataService(_http) {
        this._http = _http;
        this.signUpURL = "https://coupon-system-course-project.herokuapp.com/signup";
        this.loginPageURL = "https://coupon-system-course-project.herokuapp.com/login.html";
    }
    SharedDataService.prototype.addCompany = function (company) {
        return this._http.post(this.signUpURL + "/company", company);
    };
    SharedDataService.prototype.addCustomer = function (customer) {
        return this._http.post(this.signUpURL + "/customer", customer);
    };
    SharedDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], SharedDataService);
    return SharedDataService;
}());



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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\PC\Desktop\Angular\CouponSystem\SignUp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map