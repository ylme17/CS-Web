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
    function Company(id, name, password, email) {
        this.id = id;
        this.name = name;
        this.password = password;
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
    function Customer(id, name, password) {
        this.id = id;
        this.name = name;
        this.password = password;
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
/* harmony import */ var _components_create_company_create_company_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/create-company/create-company.component */ "./src/app/components/create-company/create-company.component.ts");
/* harmony import */ var _components_get_all_companies_get_all_companies_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/get-all-companies/get-all-companies.component */ "./src/app/components/get-all-companies/get-all-companies.component.ts");
/* harmony import */ var _components_create_customer_create_customer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/create-customer/create-customer.component */ "./src/app/components/create-customer/create-customer.component.ts");
/* harmony import */ var _components_get_all_customers_get_all_customers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/get-all-customers/get-all-customers.component */ "./src/app/components/get-all-customers/get-all-customers.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_update_company_update_company_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/update-company/update-company.component */ "./src/app/components/update-company/update-company.component.ts");
/* harmony import */ var _components_update_customer_update_customer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/update-customer/update-customer.component */ "./src/app/components/update-customer/update-customer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
    },
    {
        path: 'createcompany',
        component: _components_create_company_create_company_component__WEBPACK_IMPORTED_MODULE_2__["CreateCompanyComponent"]
    },
    {
        path: 'getallcompanies',
        component: _components_get_all_companies_get_all_companies_component__WEBPACK_IMPORTED_MODULE_3__["GetAllCompaniesComponent"]
    },
    {
        path: 'updatecompany/:id',
        component: _components_update_company_update_company_component__WEBPACK_IMPORTED_MODULE_7__["UpdateCompanyComponent"]
    },
    {
        path: 'createcustomer',
        component: _components_create_customer_create_customer_component__WEBPACK_IMPORTED_MODULE_4__["CreateCustomerComponent"]
    },
    {
        path: 'getallcustomers',
        component: _components_get_all_customers_get_all_customers_component__WEBPACK_IMPORTED_MODULE_5__["GetAllCustomersComponent"]
    },
    {
        path: 'updatecustomer/:id',
        component: _components_update_customer_update_customer_component__WEBPACK_IMPORTED_MODULE_8__["UpdateCustomerComponent"]
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--navigation bar-->\n<nav class=\"navbar fixed-top navbar-expand-lg bg-dark navbar-dark\">\n    <a class=\"navbar-brand\" routerLink=\"/\"><i class=\"fas fa-home\"></i> Home</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item dropdown active\">\n                <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                Company\n                </a>\n                <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n                <a class=\"dropdown-item\" routerLink=\"/createcompany\"><i class=\"fas fa-plus\"></i>Add Company</a>\n                <a class=\"dropdown-item\" routerLink=\"/getallcompanies\"><i class=\"fas fa-list-ul\"></i> Get All Companies</a>\n                </div>\n            </li>\n            <li class=\"nav-item dropdown active\">\n                <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    Customer\n                </a>\n                <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n                    <a class=\"dropdown-item\" routerLink=\"/createcustomer\"><i class=\"fas fa-plus\"></i>Add Customer</a>\n                    <a class=\"dropdown-item\" routerLink=\"/getallcustomers\"><i class=\"fas fa-list-ul\"></i> Get All Customers</a>\n                </div>\n            </li>\n            <li class=\"nav-item active\">\n            <a class=\"nav-link\" (click)=\"logOut()\">log out <i class=\"fas fa-sign-out-alt\"></i></a>\n            </li>\n        </ul>\n    </div>\n</nav>\n<br><br>\n<br><br>\n<router-outlet></router-outlet>\n<br><br>\n<br><br>\n"

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
/* harmony import */ var _services_shared_company_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/shared-company-data.service */ "./src/app/services/shared-company-data.service.ts");
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
    //provide SharedCompanyDataService for service
    function AppComponent(_sharedDataService) {
        this._sharedDataService = _sharedDataService;
        this.title = 'CouponSystem';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    //log out method, send the client to login page
    AppComponent.prototype.logOut = function () {
        var _this = this;
        this._sharedDataService.logOut(this.request, this.response).
            subscribe(function (resp) {
            window.location.href = _this._sharedDataService.loginPageURL;
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_shared_company_data_service__WEBPACK_IMPORTED_MODULE_1__["SharedCompanyDataService"]])
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_create_company_create_company_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/create-company/create-company.component */ "./src/app/components/create-company/create-company.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _components_get_all_companies_get_all_companies_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/get-all-companies/get-all-companies.component */ "./src/app/components/get-all-companies/get-all-companies.component.ts");
/* harmony import */ var _components_create_customer_create_customer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/create-customer/create-customer.component */ "./src/app/components/create-customer/create-customer.component.ts");
/* harmony import */ var _components_get_all_customers_get_all_customers_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/get-all-customers/get-all-customers.component */ "./src/app/components/get-all-customers/get-all-customers.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _services_shared_company_data_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/shared-company-data.service */ "./src/app/services/shared-company-data.service.ts");
/* harmony import */ var _services_shared_customer_data_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/shared-customer-data.service */ "./src/app/services/shared-customer-data.service.ts");
/* harmony import */ var _components_update_company_update_company_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/update-company/update-company.component */ "./src/app/components/update-company/update-company.component.ts");
/* harmony import */ var _components_update_customer_update_customer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/update-customer/update-customer.component */ "./src/app/components/update-customer/update-customer.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pipes/filter.pipe */ "./src/app/pipes/filter.pipe.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_create_company_create_company_component__WEBPACK_IMPORTED_MODULE_6__["CreateCompanyComponent"],
                _components_get_all_companies_get_all_companies_component__WEBPACK_IMPORTED_MODULE_8__["GetAllCompaniesComponent"],
                _components_create_customer_create_customer_component__WEBPACK_IMPORTED_MODULE_9__["CreateCustomerComponent"],
                _components_get_all_customers_get_all_customers_component__WEBPACK_IMPORTED_MODULE_10__["GetAllCustomersComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _components_update_company_update_company_component__WEBPACK_IMPORTED_MODULE_14__["UpdateCompanyComponent"],
                _components_update_customer_update_customer_component__WEBPACK_IMPORTED_MODULE_15__["UpdateCustomerComponent"],
                _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_17__["FilterPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"].withConfig({ warnOnNgModelWithFormControl: 'never' }),
                _angular_http__WEBPACK_IMPORTED_MODULE_7__["HttpModule"]
            ],
            providers: [_services_shared_company_data_service__WEBPACK_IMPORTED_MODULE_12__["SharedCompanyDataService"],
                _services_shared_customer_data_service__WEBPACK_IMPORTED_MODULE_13__["SharedCustomerDataService"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_16__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_16__["HashLocationStrategy"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/create-company/create-company.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/create-company/create-company.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form{\r\n    margin-left: 20%;\r\n    width: 30%;\r\n}\r\ntable{\r\n    margin-left: 20%;\r\n    width: 60%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmVhdGUtY29tcGFueS9jcmVhdGUtY29tcGFueS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7Q0FDZDtBQUNEO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7Q0FDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3JlYXRlLWNvbXBhbnkvY3JlYXRlLWNvbXBhbnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm17XHJcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gICAgd2lkdGg6IDMwJTtcclxufVxyXG50YWJsZXtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgICB3aWR0aDogNjAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/create-company/create-company.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/create-company/create-company.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--form for add company-->\n<form novalidate [formGroup]=\"myForm\">\n  <legend>Create Company</legend>\n\n  <!--input field for name-->\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" class=\"form-control\" formControlName=\"name\" placeholder=\"Name\" [(ngModel)]=\"companyAdd.name\" \n      [ngClass]=\"{ 'is-invalid': myForm.controls.name.errors && (myForm.controls.name.touched || myForm.controls.name.dirty) }\">\n    <div *ngIf=\"myForm.controls.name.errors && (myForm.controls.name.touched || myForm.controls.name.dirty)\" class=\"invalid-feedback\">\n      <small *ngIf=\"myForm.controls.name.errors.required\">Name is required</small>\n    </div>\n  </div>\n\n  <!--input field for password-->\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"Password\" [(ngModel)]=\"companyAdd.password\" \n      [ngClass]=\"{ 'is-invalid': myForm.controls.password.errors && (myForm.controls.password.touched || myForm.controls.password.dirty) }\">\n    <div *ngIf=\"myForm.controls.password.errors && (myForm.controls.password.touched || myForm.controls.password.dirty)\" class=\"invalid-feedback\">\n      <small *ngIf=\"myForm.controls.password.errors.required\">Password is required</small>\n      <small *ngIf=\"myForm.controls.password.errors.minlength\">Password must be at least 5 characters</small>\n      <small *ngIf=\"myForm.controls.password.errors.maxlength\">Password must be maximum 8 characters</small>\n    </div>\n  </div>\n\n  <!--input field for email-->\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"email\" class=\"form-control\" formControlName=\"email\" placeholder=\"Email\" [(ngModel)]=\"companyAdd.email\" \n      [ngClass]=\"{ 'is-invalid': myForm.controls.email.errors && (myForm.controls.email.touched || myForm.controls.email.dirty) }\">\n    <div *ngIf=\"myForm.controls.email.errors && (myForm.controls.email.touched || myForm.controls.email.dirty)\" class=\"invalid-feedback\">\n      <small *ngIf=\"myForm.controls.email.errors.required\">Email is required</small>\n      <small *ngIf=\"myForm.controls.email.errors.email\">Email must be a valid email address</small>\n    </div>\n  </div>\n\n  <!--button become enable only when the form valid-->\n  <button (click)=\"addCompany()\" [disabled]=\"!myForm.valid\" class=\"btn btn-success\">ADD COMPANY</button>\n</form>\n\n<br>\n<!--table shows the company the admin added with the generated id-->\n<table class=\"table table-striped table-bordered\" *ngIf=\"showTable\">\n  <thead>\n    <tr>\n      <th>ID</th>\n      <th>Name</th>\n      <th>Password</th>\n      <th>Email</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>{{companyAdded.id}}</td>\n      <td>{{companyAdded.name}}</td>\n      <td>{{companyAdded.password}}</td>\n      <td>{{companyAdded.email}}</td>\n    </tr>\n  </tbody>\n</table>\n"

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
/* harmony import */ var _services_shared_company_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/shared-company-data.service */ "./src/app/services/shared-company-data.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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
        this.companyAdd = new _Common_Company__WEBPACK_IMPORTED_MODULE_1__["Company"](0, "", "", "");
        this.companyAdded = new _Common_Company__WEBPACK_IMPORTED_MODULE_1__["Company"](0, "", "", "");
        this.showTable = false;
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
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(8)]]
        });
    };
    //add company to DB
    CreateCompanyComponent.prototype.addCompany = function () {
        var _this = this;
        this._sharedDataService.addCompany(this.companyAdd).
            subscribe(function (resp) {
            _this.companyAdded = resp.json();
            _this.showTable = true;
            _this.companyAdd = new _Common_Company__WEBPACK_IMPORTED_MODULE_1__["Company"](0, "", "", "");
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                type: 'success',
                title: 'Company created',
                showConfirmButton: false,
                timer: 1500
            });
        }, function (err) {
            if (err.status == 403) {
                window.location.href = _this._sharedDataService.loginPageURL;
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                    type: 'error',
                    title: 'Oops...',
                    text: err._body
                });
            }
        });
    };
    CreateCompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-company',
            template: __webpack_require__(/*! ./create-company.component.html */ "./src/app/components/create-company/create-company.component.html"),
            styles: [__webpack_require__(/*! ./create-company.component.css */ "./src/app/components/create-company/create-company.component.css")]
        }),
        __metadata("design:paramtypes", [_services_shared_company_data_service__WEBPACK_IMPORTED_MODULE_2__["SharedCompanyDataService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
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

module.exports = "form{\r\n    margin-left: 20%;\r\n    width: 30%;\r\n}\r\ntable{\r\n    margin-left: 25%;\r\n    width: 50%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmVhdGUtY3VzdG9tZXIvY3JlYXRlLWN1c3RvbWVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztDQUNkO0FBQ0Q7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztDQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jcmVhdGUtY3VzdG9tZXIvY3JlYXRlLWN1c3RvbWVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3Jte1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICAgIHdpZHRoOiAzMCU7XHJcbn1cclxudGFibGV7XHJcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xyXG4gICAgd2lkdGg6IDUwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/create-customer/create-customer.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/create-customer/create-customer.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--form for add customer-->\n<form novalidate [formGroup]=\"myForm\">\n  <legend>Create Customer</legend>\n\n  <!--input field for name-->\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" class=\"form-control\" formControlName=\"name\" placeholder=\"Name\" [(ngModel)]=\"customerAdd.name\" \n      [ngClass]=\"{ 'is-invalid': myForm.controls.name.errors && (myForm.controls.name.touched || myForm.controls.name.dirty) }\">\n    <div *ngIf=\"myForm.controls.name.errors && (myForm.controls.name.touched || myForm.controls.name.dirty)\" class=\"invalid-feedback\">\n      <small *ngIf=\"myForm.controls.name.errors.required\">Name is required</small>\n    </div>\n  </div>\n\n  <!--input field for password-->\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"Password\" [(ngModel)]=\"customerAdd.password\" \n      [ngClass]=\"{ 'is-invalid': myForm.controls.password.errors && (myForm.controls.password.touched || myForm.controls.password.dirty) }\">\n    <div *ngIf=\"myForm.controls.password.errors && (myForm.controls.password.touched || myForm.controls.password.dirty)\" class=\"invalid-feedback\">\n      <small *ngIf=\"myForm.controls.password.errors.required\">Password is required</small>\n      <small *ngIf=\"myForm.controls.password.errors.minlength\">Password must be at least 5 characters</small>\n      <small *ngIf=\"myForm.controls.password.errors.maxlength\">Password must be maximum 8 characters</small>\n    </div>\n  </div>\n\n  <!--button become enable only when the form valid-->\n  <button (click)=\"addCustomer()\" [disabled]=\"!myForm.valid\" class=\"btn btn-success\">ADD CUSTOMER</button>\n</form>\n\n<br>\n<!--table shows the customer the admin added with the generated id-->\n<table  class=\"table table-striped table-bordered\" *ngIf=\"showTable\">\n  <thead>\n    <tr>\n      <th>ID</th>\n      <th>Name</th>\n      <th>Password</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>{{customerAdded.id}}</td>\n      <td>{{customerAdded.name}}</td>\n      <td>{{customerAdded.password}}</td>\n    </tr>\n  </tbody>\n</table>\n"

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
/* harmony import */ var _services_shared_customer_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/shared-customer-data.service */ "./src/app/services/shared-customer-data.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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
        this.customerAdd = new _Common_Customer__WEBPACK_IMPORTED_MODULE_1__["Customer"](0, "", "");
        this.customerAdded = new _Common_Customer__WEBPACK_IMPORTED_MODULE_1__["Customer"](0, "", "");
        this.showTable = false;
    }
    //initialize form validation
    CreateCustomerComponent.prototype.ngOnInit = function () {
        this.formValidation();
    };
    //form validation conditions
    CreateCustomerComponent.prototype.formValidation = function () {
        this.myForm = this._formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(8)]]
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
            _this.customerAdded = resp.json();
            _this.showTable = true;
            _this.customerAdd = new _Common_Customer__WEBPACK_IMPORTED_MODULE_1__["Customer"](0, "", "");
        }, function (err) {
            if (err.status == 403) {
                window.location.href = _this._sharedDataService.loginPageURL;
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                    type: 'error',
                    title: 'Oops...',
                    text: err._body
                });
            }
        });
    };
    CreateCustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-customer',
            template: __webpack_require__(/*! ./create-customer.component.html */ "./src/app/components/create-customer/create-customer.component.html"),
            styles: [__webpack_require__(/*! ./create-customer.component.css */ "./src/app/components/create-customer/create-customer.component.css")]
        }),
        __metadata("design:paramtypes", [_services_shared_customer_data_service__WEBPACK_IMPORTED_MODULE_2__["SharedCustomerDataService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], CreateCustomerComponent);
    return CreateCustomerComponent;
}());



/***/ }),

/***/ "./src/app/components/get-all-companies/get-all-companies.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/get-all-companies/get-all-companies.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#searchAndTable{\r\n    margin-left: 20%;\r\n    width: 60%;\r\n}\r\n#column{\r\n    width: 8%;\r\n}\r\n#email{\r\n    width: 30%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nZXQtYWxsLWNvbXBhbmllcy9nZXQtYWxsLWNvbXBhbmllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7Q0FDZDtBQUNEO0lBQ0ksVUFBVTtDQUNiO0FBQ0Q7SUFDSSxXQUFXO0NBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dldC1hbGwtY29tcGFuaWVzL2dldC1hbGwtY29tcGFuaWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2VhcmNoQW5kVGFibGV7XHJcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gICAgd2lkdGg6IDYwJTtcclxufVxyXG4jY29sdW1ue1xyXG4gICAgd2lkdGg6IDglO1xyXG59XHJcbiNlbWFpbHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/get-all-companies/get-all-companies.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/get-all-companies/get-all-companies.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--input for search-->\n<input class=\"form-control\" type=\"text\" name=\"serachString\" [(ngModel)]=\"searchString\" placeholder=\"Search..\" id=\"searchAndTable\">\n\n<!--table for all companies-->\n<table class=\"table table-hover\" id=\"searchAndTable\">\n  <thead class=\"thead-dark\">\n    <tr>\n      <th id=\"column\">ID</th>\n      <th>Name</th>\n      <th>Password</th>\n      <th id=\"email\">Email</th>\n      <th id=\"column\">Delete</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor = \"let comp of companies | filter : 'name' : searchString\">\n      <td (click)=\"routeToUpdate(comp.id)\">{{comp.id}}</td>\n      <td (click)=\"routeToUpdate(comp.id)\">{{comp.name}}</td>\n      <td (click)=\"routeToUpdate(comp.id)\">{{comp.password}}</td>\n      <td (click)=\"routeToUpdate(comp.id)\">{{comp.email}}</td>\n      <td class=\"text-center\"><button type=\"button\" (click)=\"deleteCompany(comp.id)\" class=\"btn btn-danger btn-sm\">\n          <i class=\"fas fa-trash-alt\"></i>\n        </button></td>\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/components/get-all-companies/get-all-companies.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/get-all-companies/get-all-companies.component.ts ***!
  \*****************************************************************************/
/*! exports provided: GetAllCompaniesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAllCompaniesComponent", function() { return GetAllCompaniesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shared_company_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/shared-company-data.service */ "./src/app/services/shared-company-data.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
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




var GetAllCompaniesComponent = /** @class */ (function () {
    //in the constructor we provide SharedCompanyDataService for service and Router for routing to another components
    function GetAllCompaniesComponent(_sharedDataService, _router) {
        this._sharedDataService = _sharedDataService;
        this._router = _router;
    }
    //load the companies list
    GetAllCompaniesComponent.prototype.ngOnInit = function () {
        this.getCompanies();
    };
    //get companies
    GetAllCompaniesComponent.prototype.getCompanies = function () {
        var _this = this;
        this._sharedDataService.getAllCompanies().
            subscribe(function (resp) {
            _this.companies = resp.json();
        }, function (err) {
            if (err.status == 403) {
                window.location.href = _this._sharedDataService.loginPageURL;
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()({
                    type: 'error',
                    title: 'Oops...',
                    text: err._body
                });
            }
        });
    };
    //method for delete company by id
    GetAllCompaniesComponent.prototype.deleteCompany = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()({
            title: 'Are you sure you want to delete company?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No'
        }).then(function (result) {
            if (result.value) {
                _this._sharedDataService.deleteCompany(id).
                    subscribe(function (resp) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()({
                        title: 'Deleted!',
                        text: 'Company has been deleted.',
                        type: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    _this.getCompanies();
                }, function (err) {
                    if (err.status == 403) {
                        window.location.href = _this._sharedDataService.loginPageURL;
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()({
                            type: 'error',
                            title: 'Oops...',
                            text: err._body
                        });
                    }
                });
            }
        });
    };
    //this method routing to updateCompanyComponent by click on company in the table and pass its id in URL
    GetAllCompaniesComponent.prototype.routeToUpdate = function (id) {
        this._router.navigate(['updatecompany', id]);
    };
    GetAllCompaniesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-get-all-companies',
            template: __webpack_require__(/*! ./get-all-companies.component.html */ "./src/app/components/get-all-companies/get-all-companies.component.html"),
            styles: [__webpack_require__(/*! ./get-all-companies.component.css */ "./src/app/components/get-all-companies/get-all-companies.component.css")]
        }),
        __metadata("design:paramtypes", [_services_shared_company_data_service__WEBPACK_IMPORTED_MODULE_1__["SharedCompanyDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], GetAllCompaniesComponent);
    return GetAllCompaniesComponent;
}());



/***/ }),

/***/ "./src/app/components/get-all-customers/get-all-customers.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/get-all-customers/get-all-customers.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#searchAndTable{\r\n    margin-left: 30%;\r\n    width: 40%;\r\n}\r\n#id{\r\n    width: 15%;\r\n}\r\n#password{\r\n    width: 40%;\r\n}\r\n#delete{\r\n    width: 8%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nZXQtYWxsLWN1c3RvbWVycy9nZXQtYWxsLWN1c3RvbWVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7Q0FDZDtBQUNEO0lBQ0ksV0FBVztDQUNkO0FBQ0Q7SUFDSSxXQUFXO0NBQ2Q7QUFDRDtJQUNJLFVBQVU7Q0FDYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2V0LWFsbC1jdXN0b21lcnMvZ2V0LWFsbC1jdXN0b21lcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzZWFyY2hBbmRUYWJsZXtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XHJcbiAgICB3aWR0aDogNDAlO1xyXG59XHJcbiNpZHtcclxuICAgIHdpZHRoOiAxNSU7XHJcbn1cclxuI3Bhc3N3b3Jke1xyXG4gICAgd2lkdGg6IDQwJTtcclxufVxyXG4jZGVsZXRle1xyXG4gICAgd2lkdGg6IDglO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/get-all-customers/get-all-customers.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/get-all-customers/get-all-customers.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--input for search-->\n<input class=\"form-control\" type=\"text\" name=\"serachString\" [(ngModel)]=\"searchString\" placeholder=\"Search..\" id=\"searchAndTable\">\n\n<!--table for all customers-->\n<table id=\"searchAndTable\" class=\"table table-hover\">\n  <thead class=\"thead-dark\">\n    <tr>\n      <th id=\"id\">ID</th>\n      <th>Name</th>\n      <th id=\"password\">Password</th>\n      <th id=\"delete\">Delete</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor = \"let cust of customers | filter : 'name' : searchString\">\n      <td (click)=\"routeToUpdate(cust.id)\">{{cust.id}}</td>\n      <td (click)=\"routeToUpdate(cust.id)\">{{cust.name}}</td>\n      <td (click)=\"routeToUpdate(cust.id)\">{{cust.password}}</td>\n      <td class=\"text-center\"><button type=\"button\" (click)=\"deleteCustomer(cust.id)\" class=\"btn btn-danger btn-sm\">\n          <i class=\"fas fa-trash-alt\"></i>\n        </button></td>\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/components/get-all-customers/get-all-customers.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/get-all-customers/get-all-customers.component.ts ***!
  \*****************************************************************************/
/*! exports provided: GetAllCustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAllCustomersComponent", function() { return GetAllCustomersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shared_customer_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/shared-customer-data.service */ "./src/app/services/shared-customer-data.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
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




var GetAllCustomersComponent = /** @class */ (function () {
    //in the constructor we provide SharedCustomerDataService for service and Router for routing to another components
    function GetAllCustomersComponent(_sharedDataService, _router) {
        this._sharedDataService = _sharedDataService;
        this._router = _router;
    }
    //load the customers list
    GetAllCustomersComponent.prototype.ngOnInit = function () {
        this.getCustomers();
    };
    //get customers
    GetAllCustomersComponent.prototype.getCustomers = function () {
        var _this = this;
        this._sharedDataService.getAllCustomers().
            subscribe(function (resp) {
            _this.customers = resp.json();
        }, function (err) {
            if (err.status == 403) {
                window.location.href = _this._sharedDataService.loginPageURL;
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()({
                    type: 'error',
                    title: 'Oops...',
                    text: err._body
                });
            }
        });
    };
    //method for delete customer by id
    GetAllCustomersComponent.prototype.deleteCustomer = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No'
        }).then(function (result) {
            if (result.value) {
                _this._sharedDataService.deleteCustomer(id).
                    subscribe(function (resp) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()({
                        title: 'Deleted!',
                        text: 'Customer has been deleted.',
                        type: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    _this.getCustomers();
                }, function (err) {
                    if (err.status == 403) {
                        window.location.href = _this._sharedDataService.loginPageURL;
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()({
                            type: 'error',
                            title: 'Oops...',
                            text: err._body
                        });
                    }
                });
            }
        });
    };
    //this method routing to updateCustomerComponent by click on customer in the table and pass its id in URL
    GetAllCustomersComponent.prototype.routeToUpdate = function (id) {
        this._router.navigate(['updatecustomer', id]);
    };
    GetAllCustomersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-get-all-customers',
            template: __webpack_require__(/*! ./get-all-customers.component.html */ "./src/app/components/get-all-customers/get-all-customers.component.html"),
            styles: [__webpack_require__(/*! ./get-all-customers.component.css */ "./src/app/components/get-all-customers/get-all-customers.component.css")]
        }),
        __metadata("design:paramtypes", [_services_shared_customer_data_service__WEBPACK_IMPORTED_MODULE_1__["SharedCustomerDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], GetAllCustomersComponent);
    return GetAllCustomersComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3{\r\n    margin-left: 20%;\r\n    margin-top:5%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0NBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgze1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICAgIG1hcmdpbi10b3A6NSU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>\r\n    Hello Admin<br>\r\n    welcome to Coupon System\r\n</h3>\r\n"

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
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/update-company/update-company.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/update-company/update-company.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form{\r\n    margin-left: 20%;\r\n    width: 30%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91cGRhdGUtY29tcGFueS91cGRhdGUtY29tcGFueS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7Q0FDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXBkYXRlLWNvbXBhbnkvdXBkYXRlLWNvbXBhbnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm17XHJcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gICAgd2lkdGg6IDMwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/update-company/update-company.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/update-company/update-company.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--form for update company-->\n<form [formGroup]=\"myForm\">\n    <button class=\"btn btn-outline-success\" (click)=\"backToCompanies()\"><i class=\"fas fa-long-arrow-alt-left\"></i> Back</button>\n  <legend>Update Company</legend>\n\n  <div class=\"form-group\">\n    <label>ID</label>\n    <input type=\"number\" class=\"form-control\" formControlName=\"id\" disabled [(ngModel)]=\"companyUpdate.id\">\n  </div>\n\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" class=\"form-control\" formControlName=\"name\" disabled [(ngModel)]=\"companyUpdate.name\">\n  </div>\n\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"Password\" [(ngModel)]=\"companyUpdate.password\" \n      [ngClass]=\"{ 'is-invalid': myForm.controls.password.errors && (myForm.controls.password.touched || myForm.controls.password.dirty) }\">\n    <div *ngIf=\"myForm.controls.password.errors && (myForm.controls.password.touched || myForm.controls.password.dirty)\" class=\"invalid-feedback\">\n      <small *ngIf=\"myForm.controls.password.errors.required\">Password is required</small>\n      <small *ngIf=\"myForm.controls.password.errors.minlength\">Password must be at least 5 characters</small>\n      <small *ngIf=\"myForm.controls.password.errors.maxlength\">Password must be maximum 8 characters</small>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"email\" class=\"form-control\" formControlName=\"email\" placeholder=\"Email\" [(ngModel)]=\"companyUpdate.email\" \n      [ngClass]=\"{ 'is-invalid': myForm.controls.email.errors && (myForm.controls.email.touched || myForm.controls.email.dirty) }\">\n    <div *ngIf=\"myForm.controls.email.errors && (myForm.controls.email.touched || myForm.controls.email.dirty)\" class=\"invalid-feedback\">\n      <small *ngIf=\"myForm.controls.email.errors.required\">Email is required</small>\n      <small *ngIf=\"myForm.controls.email.errors.email\">Email must be a valid email address</small>\n    </div>\n  </div>\n\n  <!--button become enable only when the form valid-->\n  <button (click)=\"updateCompany()\" [disabled]=\"!myForm.valid\" class=\"btn btn-success\">UPDATE COMPANY</button>\n</form>\n"

/***/ }),

/***/ "./src/app/components/update-company/update-company.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/update-company/update-company.component.ts ***!
  \***********************************************************************/
/*! exports provided: UpdateCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateCompanyComponent", function() { return UpdateCompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shared_company_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/shared-company-data.service */ "./src/app/services/shared-company-data.service.ts");
/* harmony import */ var _Common_Company__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Common/Company */ "./src/app/Common/Company.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UpdateCompanyComponent = /** @class */ (function () {
    //in the constructor we provide SharedCompanyDataService for service and Router for routing to another components
    //ActivatedRoute to contain the company id that sent from allCompaniesComponent and FormBuilder for form validation
    function UpdateCompanyComponent(_sharedDataService, _router, _route, _formBuilder) {
        this._sharedDataService = _sharedDataService;
        this._router = _router;
        this._route = _route;
        this._formBuilder = _formBuilder;
        this.companyUpdate = new _Common_Company__WEBPACK_IMPORTED_MODULE_2__["Company"](0, "", "", "");
    }
    //load the company by id from DB and inject it to the form
    //load form validation
    UpdateCompanyComponent.prototype.ngOnInit = function () {
        this.getCompanyByIdParam();
        this.formValidation();
    };
    //get the company by id that gets in URL
    UpdateCompanyComponent.prototype.getCompanyByIdParam = function () {
        var _this = this;
        this._route.params.
            subscribe(function (params) {
            _this._sharedDataService.getCompany(params["id"]).
                subscribe(function (resp) {
                _this.companyUpdate = resp.json();
            }, function (err) {
                if (err.status == 403) {
                    window.location.href = _this._sharedDataService.loginPageURL;
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
                        type: 'error',
                        title: 'Oops...',
                        text: err._body
                    });
                }
            });
        });
    };
    //form validation conditions
    UpdateCompanyComponent.prototype.formValidation = function () {
        this.myForm = this._formBuilder.group({
            id: [],
            name: [],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(8)]]
        });
    };
    //route back to all companies component
    UpdateCompanyComponent.prototype.backToCompanies = function () {
        this._router.navigate(['getallcompanies']);
    };
    //send the update request and route back to all companies
    UpdateCompanyComponent.prototype.updateCompany = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
            title: 'Are you sure you want to update?',
            type: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'
        }).then(function (result) {
            if (result.value) {
                _this._sharedDataService.updateCompany(_this.companyUpdate).
                    subscribe(function (resp) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
                        title: 'Updated!',
                        type: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    _this.companyUpdate = new _Common_Company__WEBPACK_IMPORTED_MODULE_2__["Company"](0, "", "", "");
                    _this._router.navigate(['getallcompanies']);
                }, function (err) {
                    if (err.status == 403) {
                        window.location.href = _this._sharedDataService.loginPageURL;
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
                            type: 'error',
                            title: 'Oops...',
                            text: err._body
                        });
                    }
                });
            }
        });
    };
    UpdateCompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update-company',
            template: __webpack_require__(/*! ./update-company.component.html */ "./src/app/components/update-company/update-company.component.html"),
            styles: [__webpack_require__(/*! ./update-company.component.css */ "./src/app/components/update-company/update-company.component.css")]
        }),
        __metadata("design:paramtypes", [_services_shared_company_data_service__WEBPACK_IMPORTED_MODULE_1__["SharedCompanyDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], UpdateCompanyComponent);
    return UpdateCompanyComponent;
}());



/***/ }),

/***/ "./src/app/components/update-customer/update-customer.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/update-customer/update-customer.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form{\r\n    margin-left: 20%;\r\n    width: 30%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91cGRhdGUtY3VzdG9tZXIvdXBkYXRlLWN1c3RvbWVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztDQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91cGRhdGUtY3VzdG9tZXIvdXBkYXRlLWN1c3RvbWVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3Jte1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICAgIHdpZHRoOiAzMCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/update-customer/update-customer.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/update-customer/update-customer.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--form for update customer-->\n<form [formGroup]=\"myForm\">\n  <button class=\"btn btn-outline-success\" (click)=\"backToCustomers()\"><i class=\"fas fa-long-arrow-alt-left\"></i> Back</button>\n  <legend>Update Customer</legend>\n\n  <div class=\"form-group\">\n    <label>ID</label>\n    <input type=\"number\" class=\"form-control\" formControlName=\"id\" disabled [(ngModel)]=\"customerUpdate.id\">\n  </div>\n\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" class=\"form-control\" formControlName=\"name\" disabled [(ngModel)]=\"customerUpdate.name\">\n  </div>\n\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"Password\" [(ngModel)]=\"customerUpdate.password\" \n      [ngClass]=\"{ 'is-invalid': myForm.controls.password.errors && (myForm.controls.password.touched || myForm.controls.password.dirty) }\">\n    <div *ngIf=\"myForm.controls.password.errors && (myForm.controls.password.touched || myForm.controls.password.dirty)\" class=\"invalid-feedback\">\n      <small *ngIf=\"myForm.controls.password.errors.required\">Password is required</small>\n      <small *ngIf=\"myForm.controls.password.errors.minlength\">Password must be at least 5 characters</small>\n      <small *ngIf=\"myForm.controls.password.errors.maxlength\">Password must be maximum 8 characters</small>\n    </div>\n  </div>\n\n  <!--button become enable only when the form valid-->\n  <button (click)=\"updateCustomer()\" [disabled]=\"!myForm.valid\" class=\"btn btn-success\">UPDATE CUSTOMER</button>\n</form>\n"

/***/ }),

/***/ "./src/app/components/update-customer/update-customer.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/update-customer/update-customer.component.ts ***!
  \*************************************************************************/
/*! exports provided: UpdateCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateCustomerComponent", function() { return UpdateCustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shared_customer_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/shared-customer-data.service */ "./src/app/services/shared-customer-data.service.ts");
/* harmony import */ var _Common_Customer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Common/Customer */ "./src/app/Common/Customer.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UpdateCustomerComponent = /** @class */ (function () {
    //in the constructor we provide SharedCustomerDataService for service and Router for routing to another components
    //ActivatedRoute to contain the customer id that sent from allCustomersComponent and FormBuilder for form validation
    function UpdateCustomerComponent(_sharedDataService, _router, _route, _formBuilder) {
        this._sharedDataService = _sharedDataService;
        this._router = _router;
        this._route = _route;
        this._formBuilder = _formBuilder;
        this.customerUpdate = new _Common_Customer__WEBPACK_IMPORTED_MODULE_2__["Customer"](0, "", "");
    }
    //load the customer by id from DB and inject it to the form
    //load form validation
    UpdateCustomerComponent.prototype.ngOnInit = function () {
        this.getCustomerByIdParam();
        this.formValidation();
    };
    //get the customer by id that gets in URL
    UpdateCustomerComponent.prototype.getCustomerByIdParam = function () {
        var _this = this;
        this._route.params.
            subscribe(function (params) {
            _this._sharedDataService.getCustomer(params["id"]).
                subscribe(function (resp) {
                _this.customerUpdate = resp.json();
            }, function (err) {
                if (err.status == 403) {
                    window.location.href = _this._sharedDataService.loginPageURL;
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
                        type: 'error',
                        title: 'Oops...',
                        text: err._body
                    });
                }
            });
        });
    };
    //form validation conditions
    UpdateCustomerComponent.prototype.formValidation = function () {
        this.myForm = this._formBuilder.group({
            id: [],
            name: [],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(8)]]
        });
    };
    //route back to all customers component
    UpdateCustomerComponent.prototype.backToCustomers = function () {
        this._router.navigate(['getallcustomers']);
    };
    //send the update request and route back to all customers
    UpdateCustomerComponent.prototype.updateCustomer = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
            title: 'Are you sure you want to update?',
            type: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'
        }).then(function (result) {
            if (result.value) {
                _this._sharedDataService.updateCustomer(_this.customerUpdate).
                    subscribe(function (resp) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
                        title: 'Updated!',
                        type: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    _this.customerUpdate = new _Common_Customer__WEBPACK_IMPORTED_MODULE_2__["Customer"](0, "", "");
                    _this._router.navigate(['getallcustomers']);
                }, function (err) {
                    if (err.status == 403) {
                        window.location.href = _this._sharedDataService.loginPageURL;
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
                            type: 'error',
                            title: 'Oops...',
                            text: err._body
                        });
                    }
                });
            }
        });
    };
    UpdateCustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update-customer',
            template: __webpack_require__(/*! ./update-customer.component.html */ "./src/app/components/update-customer/update-customer.component.html"),
            styles: [__webpack_require__(/*! ./update-customer.component.css */ "./src/app/components/update-customer/update-customer.component.css")]
        }),
        __metadata("design:paramtypes", [_services_shared_customer_data_service__WEBPACK_IMPORTED_MODULE_1__["SharedCustomerDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], UpdateCustomerComponent);
    return UpdateCustomerComponent;
}());



/***/ }),

/***/ "./src/app/pipes/filter.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/filter.pipe.ts ***!
  \**************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, field, value) {
        if (!items) {
            return [];
        }
        if (!field || !value) {
            return items;
        }
        return items.filter(function (singleItem) {
            return singleItem[field].toLowerCase().includes(value.toLowerCase());
        });
    };
    FilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filter',
        })
        //in this class there is a logic to filter for search function
        ,
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/services/shared-company-data.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/shared-company-data.service.ts ***!
  \*********************************************************/
/*! exports provided: SharedCompanyDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedCompanyDataService", function() { return SharedCompanyDataService; });
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


var SharedCompanyDataService = /** @class */ (function () {
    //provide Http for server requests
    function SharedCompanyDataService(_http) {
        this._http = _http;
        this.adminURL = "https://coupon-system-course-project.herokuapp.com/admin/company";
        this.loginPageURL = "https://coupon-system-course-project.herokuapp.com/login.html";
    }
    SharedCompanyDataService.prototype.addCompany = function (company) {
        return this._http.post(this.adminURL, company);
    };
    SharedCompanyDataService.prototype.getAllCompanies = function () {
        return this._http.get(this.adminURL);
    };
    SharedCompanyDataService.prototype.deleteCompany = function (id) {
        return this._http.delete(this.adminURL + "/" + id);
    };
    SharedCompanyDataService.prototype.updateCompany = function (company) {
        return this._http.put(this.adminURL + "/" + company.id, company);
    };
    SharedCompanyDataService.prototype.getCompany = function (id) {
        return this._http.get(this.adminURL + "/" + id);
    };
    SharedCompanyDataService.prototype.logOut = function (request, response) {
        return this._http.post("https://coupon-system-course-project.herokuapp.com/logout", request, response);
    };
    SharedCompanyDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], SharedCompanyDataService);
    return SharedCompanyDataService;
}());



/***/ }),

/***/ "./src/app/services/shared-customer-data.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/services/shared-customer-data.service.ts ***!
  \**********************************************************/
/*! exports provided: SharedCustomerDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedCustomerDataService", function() { return SharedCustomerDataService; });
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


var SharedCustomerDataService = /** @class */ (function () {
    //provide Http for server requests
    function SharedCustomerDataService(_http) {
        this._http = _http;
        this.adminURL = "https://coupon-system-course-project.herokuapp.com/admin/customer";
        this.loginPageURL = "https://coupon-system-course-project.herokuapp.com/login.html";
    }
    SharedCustomerDataService.prototype.addCustomer = function (customer) {
        return this._http.post(this.adminURL, customer);
    };
    SharedCustomerDataService.prototype.deleteCustomer = function (id) {
        return this._http.delete(this.adminURL + "/" + id);
    };
    SharedCustomerDataService.prototype.getAllCustomers = function () {
        return this._http.get(this.adminURL);
    };
    SharedCustomerDataService.prototype.updateCustomer = function (customer) {
        return this._http.put(this.adminURL + "/" + customer.id, customer);
    };
    SharedCustomerDataService.prototype.getCustomer = function (id) {
        return this._http.get(this.adminURL + "/" + id);
    };
    SharedCustomerDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], SharedCustomerDataService);
    return SharedCustomerDataService;
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

module.exports = __webpack_require__(/*! C:\Users\PC\Desktop\Angular\CouponSystem\adminspa\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map