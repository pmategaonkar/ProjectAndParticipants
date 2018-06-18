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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/addcontacttoproject/addcontacttoproject.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/addcontacttoproject/addcontacttoproject.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/addcontacttoproject/addcontacttoproject.component.html":
/*!************************************************************************!*\
  !*** ./src/app/addcontacttoproject/addcontacttoproject.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Add contact to project</h1>\r\n<form [formGroup]=\"addContactToProjectForm\">\r\n  <div mat-dialog-content>\r\n\r\n    <mat-form-field style=\"width:90%\">\r\n      <input matInput readonly formControlName=\"projectName\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <mat-select placeholder=\"Select contact\" formControlName=\"selectedContact\" name=\"selectedContact\">\r\n        <mat-option *ngFor=\"let eachContact of contacts\" [value]=\"eachContact.id\">\r\n          {{eachContact.firstName}}-{{eachContact.lastName}}\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\" style=\"text-align:right\">\r\n      <div mat-dialog-actions style=\"width:90%\">\r\n        <button mat-button (click)=\"onCancelClick()\">Cancel</button>\r\n        <button mat-button (click)=\"onSaveClick()\" cdkFocusInitial>Save</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/addcontacttoproject/addcontacttoproject.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/addcontacttoproject/addcontacttoproject.component.ts ***!
  \**********************************************************************/
/*! exports provided: AddcontacttoprojectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddcontacttoprojectComponent", function() { return AddcontacttoprojectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/contact.service */ "./src/app/services/contact.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/project.service */ "./src/app/services/project.service.ts");
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






var AddcontacttoprojectComponent = /** @class */ (function () {
    function AddcontacttoprojectComponent(dialogRef, _contactService, _projectService, _fb, data) {
        this.dialogRef = dialogRef;
        this._contactService = _contactService;
        this._projectService = _projectService;
        this._fb = _fb;
        this.data = data;
        this.newProjectContactCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.contacts = new Array();
        this.project = data.project;
    }
    AddcontacttoprojectComponent.prototype.ngOnInit = function () {
        this.createForm();
        this.loadContacts();
    };
    Object.defineProperty(AddcontacttoprojectComponent.prototype, "f", {
        get: function () { return this.addContactToProjectForm; },
        enumerable: true,
        configurable: true
    });
    AddcontacttoprojectComponent.prototype.onCancelClick = function () {
        this.dialogRef.close();
    };
    AddcontacttoprojectComponent.prototype.onSaveClick = function () {
        var _this = this;
        if (this.addContactToProjectForm.controls.selectedContact.value != null) {
            this._projectService.assignContactToProject(this.project.id, this.addContactToProjectForm.controls.selectedContact.value).subscribe(function (assignContactToProjectResponse) {
                _this.newProjectContactCreated.emit();
                _this.dialogRef.close();
            });
        }
    };
    AddcontacttoprojectComponent.prototype.createForm = function () {
        this.addContactToProjectForm = this._fb.group({
            selectedContact: [''],
            projectName: this.project.name
        });
    };
    AddcontacttoprojectComponent.prototype.loadContacts = function () {
        var _this = this;
        this._contactService.getContacts().subscribe(function (contactsResponse) {
            if (contactsResponse != undefined) {
                _this.contacts = contactsResponse;
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AddcontacttoprojectComponent.prototype, "newProjectContactCreated", void 0);
    AddcontacttoprojectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addcontacttoproject',
            template: __webpack_require__(/*! ./addcontacttoproject.component.html */ "./src/app/addcontacttoproject/addcontacttoproject.component.html"),
            styles: [__webpack_require__(/*! ./addcontacttoproject.component.css */ "./src/app/addcontacttoproject/addcontacttoproject.component.css")]
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"],
            src_app_services_project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], Object])
    ], AddcontacttoprojectComponent);
    return AddcontacttoprojectComponent;
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
/* harmony import */ var src_app_projectlist_projectlist_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/projectlist/projectlist.component */ "./src/app/projectlist/projectlist.component.ts");
/* harmony import */ var src_app_contactlist_contactlist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/contactlist/contactlist.component */ "./src/app/contactlist/contactlist.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: '/projects', pathMatch: 'full' },
    { path: 'projects', component: src_app_projectlist_projectlist_component__WEBPACK_IMPORTED_MODULE_2__["ProjectlistComponent"] },
    { path: 'contacts', component: src_app_contactlist_contactlist_component__WEBPACK_IMPORTED_MODULE_3__["ContactlistComponent"] },
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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <ul class=\"nav\">\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" routerLink=\"/projects\">Projects</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" routerLink=\"/contacts\">Contacts</a>\r\n    </li>\r\n  </ul>\r\n\r\n  <div style=\"margin-top:50px\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n\r\n</div>\r\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: DemoMaterialModule, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoMaterialModule", function() { return DemoMaterialModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _projectlist_projectlist_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projectlist/projectlist.component */ "./src/app/projectlist/projectlist.component.ts");
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/project.service */ "./src/app/services/project.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _projectadd_projectadd_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./projectadd/projectadd.component */ "./src/app/projectadd/projectadd.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _contactlist_contactlist_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contactlist/contactlist.component */ "./src/app/contactlist/contactlist.component.ts");
/* harmony import */ var src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/contact.service */ "./src/app/services/contact.service.ts");
/* harmony import */ var _contactadd_contactadd_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./contactadd/contactadd.component */ "./src/app/contactadd/contactadd.component.ts");
/* harmony import */ var _addcontacttoproject_addcontacttoproject_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./addcontacttoproject/addcontacttoproject.component */ "./src/app/addcontacttoproject/addcontacttoproject.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var DemoMaterialModule = /** @class */ (function () {
    function DemoMaterialModule() {
    }
    DemoMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTreeModule"],
            ],
            declarations: []
        })
    ], DemoMaterialModule);
    return DemoMaterialModule;
}());

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                DemoMaterialModule,
                src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _projectlist_projectlist_component__WEBPACK_IMPORTED_MODULE_5__["ProjectlistComponent"],
                _projectadd_projectadd_component__WEBPACK_IMPORTED_MODULE_8__["ProjectaddComponent"],
                _contactlist_contactlist_component__WEBPACK_IMPORTED_MODULE_12__["ContactlistComponent"],
                _contactadd_contactadd_component__WEBPACK_IMPORTED_MODULE_14__["ContactaddComponent"],
                _addcontacttoproject_addcontacttoproject_component__WEBPACK_IMPORTED_MODULE_15__["AddcontacttoprojectComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            providers: [_services_project_service__WEBPACK_IMPORTED_MODULE_6__["ProjectService"], src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_13__["ContactService"]],
            entryComponents: [_projectadd_projectadd_component__WEBPACK_IMPORTED_MODULE_8__["ProjectaddComponent"], _contactadd_contactadd_component__WEBPACK_IMPORTED_MODULE_14__["ContactaddComponent"], _addcontacttoproject_addcontacttoproject_component__WEBPACK_IMPORTED_MODULE_15__["AddcontacttoprojectComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contactadd/contactadd.component.css":
/*!*****************************************************!*\
  !*** ./src/app/contactadd/contactadd.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".invalid-feedback {\r\n  display:block;\r\n}\r\n"

/***/ }),

/***/ "./src/app/contactadd/contactadd.component.html":
/*!******************************************************!*\
  !*** ./src/app/contactadd/contactadd.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Create contact</h1>\r\n<form [formGroup]=\"contactForm\">\r\n  <div mat-dialog-content>\r\n    <mat-form-field style=\"width:90%\">\r\n      <input matInput formControlName=\"firstName\" placeholder=\"Enter first name\">\r\n    </mat-form-field>\r\n    <div *ngIf=\"submitted &&\r\n                f.controls.firstName.errors != null &&\r\n                f.controls.firstName.errors.required == true\">\r\n      <div class=\"invalid-feedback\">\r\n        First Name is required\r\n      </div>\r\n    </div>\r\n\r\n    <mat-form-field style=\"width:90%\">\r\n      <input matInput formControlName=\"lastName\" placeholder=\"Enter last name\">\r\n    </mat-form-field>\r\n    <div *ngIf=\"submitted &&\r\n                f.controls.lastName.errors != null &&\r\n                f.controls.lastName.errors.required == true\">\r\n      <div class=\"invalid-feedback\">\r\n        Last Name is required\r\n      </div>\r\n    </div>\r\n\r\n    <mat-form-field style=\"width:90%\">\r\n      <input matInput formControlName=\"email\" placeholder=\"Enter email\">\r\n    </mat-form-field>\r\n\r\n    <div *ngIf=\"submitted && f.controls.email.errors != null\">\r\n      <div class=\"invalid-feedback\" *ngIf=\"f.controls.email.errors.required\">\r\n        Email is required\r\n      </div>\r\n      <div class=\"invalid-feedback\" *ngIf=\"f.controls.email.errors.email\">\r\n        Invalid email format\r\n      </div>\r\n    </div>\r\n\r\n    <mat-form-field style=\"width:90%\">\r\n      <textarea rows=\"3\" matInput formControlName=\"address\" placeholder=\"Enter address\"></textarea>\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\" style=\"text-align:right\">\r\n      <div mat-dialog-actions style=\"width:90%\">\r\n        <button mat-button (click)=\"onCancelClick()\">Cancel</button>\r\n        <button mat-button (click)=\"onSaveClick()\" cdkFocusInitial>Save</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n</form>\r\n"

/***/ }),

/***/ "./src/app/contactadd/contactadd.component.ts":
/*!****************************************************!*\
  !*** ./src/app/contactadd/contactadd.component.ts ***!
  \****************************************************/
/*! exports provided: ContactaddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactaddComponent", function() { return ContactaddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/contact.service */ "./src/app/services/contact.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_models_Contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/Contact */ "./src/app/models/Contact.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ContactaddComponent = /** @class */ (function () {
    function ContactaddComponent(_contactService, dialogRef, _fb) {
        this._contactService = _contactService;
        this.dialogRef = dialogRef;
        this._fb = _fb;
        this.submitted = false;
        this.newContactCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.createForm();
    }
    ContactaddComponent.prototype.ngOnInit = function () {
        this.submitted = false;
    };
    Object.defineProperty(ContactaddComponent.prototype, "f", {
        get: function () { return this.contactForm; },
        enumerable: true,
        configurable: true
    });
    ContactaddComponent.prototype.createForm = function () {
        this.contactForm = this._fb.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            address: [''],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]]
        });
    };
    ContactaddComponent.prototype.onCancelClick = function () {
        this.dialogRef.close();
    };
    ContactaddComponent.prototype.onSaveClick = function () {
        var _this = this;
        this.submitted = true;
        if (this.contactForm.invalid == true) {
            return;
        }
        var newContact = new src_app_models_Contact__WEBPACK_IMPORTED_MODULE_4__["Contact"]();
        newContact.address = this.contactForm.controls["address"].value;
        newContact.firstName = this.contactForm.controls["firstName"].value;
        newContact.lastName = this.contactForm.controls["lastName"].value;
        newContact.email = this.contactForm.controls["email"].value;
        this.
            _contactService.
            create(newContact).
            subscribe(function (newContact) {
            _this.newContactCreated.emit(newContact);
            _this.dialogRef.close();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ContactaddComponent.prototype, "newContactCreated", void 0);
    ContactaddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contactadd',
            template: __webpack_require__(/*! ./contactadd.component.html */ "./src/app/contactadd/contactadd.component.html"),
            styles: [__webpack_require__(/*! ./contactadd.component.css */ "./src/app/contactadd/contactadd.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_1__["ContactService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], ContactaddComponent);
    return ContactaddComponent;
}());



/***/ }),

/***/ "./src/app/contactlist/contactlist.component.css":
/*!*******************************************************!*\
  !*** ./src/app/contactlist/contactlist.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 100%;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/contactlist/contactlist.component.html":
/*!********************************************************!*\
  !*** ./src/app/contactlist/contactlist.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table [dataSource]=\"tableDs\" class=\"mat-elevation-z8\">\r\n  <!-- Id Column -->\r\n  <ng-container matColumnDef=\"id\">\r\n    <th mat-header-cell *matHeaderCellDef> Id </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\r\n  </ng-container>\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"firstName\">\r\n    <th mat-header-cell *matHeaderCellDef> First name </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.firstName}} </td>\r\n  </ng-container>\r\n  <ng-container matColumnDef=\"lastName\">\r\n    <th mat-header-cell *matHeaderCellDef> Last name </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.lastName}} </td>\r\n  </ng-container>\r\n  <ng-container matColumnDef=\"email\">\r\n    <th mat-header-cell *matHeaderCellDef> Email </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\r\n  </ng-container>\r\n  <ng-container matColumnDef=\"address\">\r\n    <th mat-header-cell *matHeaderCellDef> Address </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.address}} </td>\r\n  </ng-container>\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n<div class=\"row\" style=\"margin-top:15px;\">\r\n  <div class=\"col-md-12\" style=\"text-align:right\">\r\n    <button mat-fab color=\"primary\" style=\"font-size:30px\" (click)=\"openCreateContact()\" title=\"Add new contact\">+</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/contactlist/contactlist.component.ts":
/*!******************************************************!*\
  !*** ./src/app/contactlist/contactlist.component.ts ***!
  \******************************************************/
/*! exports provided: ContactlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactlistComponent", function() { return ContactlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/contact.service */ "./src/app/services/contact.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _contactadd_contactadd_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contactadd/contactadd.component */ "./src/app/contactadd/contactadd.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactlistComponent = /** @class */ (function () {
    function ContactlistComponent(_contactService, _dialog) {
        this._contactService = _contactService;
        this._dialog = _dialog;
        this.displayedColumns = ['id', 'firstName', 'lastName', 'email', 'address'];
    }
    ContactlistComponent.prototype.ngOnInit = function () {
        this.tableDs = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.loadData();
    };
    ContactlistComponent.prototype.openCreateContact = function () {
        var _this = this;
        var dialogRef = this._dialog.open(_contactadd_contactadd_component__WEBPACK_IMPORTED_MODULE_3__["ContactaddComponent"], {
            width: '600px',
            height: '450px'
        });
        var addContactComponent = dialogRef.componentInstance;
        addContactComponent.newContactCreated.subscribe(function (newContact) {
            _this.loadData();
        });
    };
    ContactlistComponent.prototype.loadData = function () {
        var _this = this;
        this._contactService.getContacts().subscribe(function (contacts) {
            _this.tableDs.data = contacts;
        });
    };
    ContactlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contactlist',
            template: __webpack_require__(/*! ./contactlist.component.html */ "./src/app/contactlist/contactlist.component.html"),
            styles: [__webpack_require__(/*! ./contactlist.component.css */ "./src/app/contactlist/contactlist.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_1__["ContactService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], ContactlistComponent);
    return ContactlistComponent;
}());



/***/ }),

/***/ "./src/app/models/Contact.ts":
/*!***********************************!*\
  !*** ./src/app/models/Contact.ts ***!
  \***********************************/
/*! exports provided: Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
var Contact = /** @class */ (function () {
    function Contact() {
    }
    return Contact;
}());



/***/ }),

/***/ "./src/app/models/Project.ts":
/*!***********************************!*\
  !*** ./src/app/models/Project.ts ***!
  \***********************************/
/*! exports provided: Project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
var Project = /** @class */ (function () {
    function Project() {
    }
    return Project;
}());



/***/ }),

/***/ "./src/app/projectadd/projectadd.component.css":
/*!*****************************************************!*\
  !*** ./src/app/projectadd/projectadd.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/projectadd/projectadd.component.html":
/*!******************************************************!*\
  !*** ./src/app/projectadd/projectadd.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Create project</h1>\r\n<div mat-dialog-content>\r\n\t<p>Enter the name of project</p>\r\n\t<mat-form-field style=\"width:90%\">\r\n\t\t<input matInput [(ngModel)]=\"name\">\r\n\t</mat-form-field>\r\n</div>\r\n<div mat-dialog-actions style=\"width:90%\" class=\"pull-right\">\r\n\t<button mat-button (click)=\"onCancelClick()\">Cancel</button>\r\n\t<button mat-button [mat-dialog-close]=\"name\" (click)=\"onSaveClick()\" cdkFocusInitial>Save</button>\r\n</div>"

/***/ }),

/***/ "./src/app/projectadd/projectadd.component.ts":
/*!****************************************************!*\
  !*** ./src/app/projectadd/projectadd.component.ts ***!
  \****************************************************/
/*! exports provided: ProjectaddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectaddComponent", function() { return ProjectaddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/project.service */ "./src/app/services/project.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectaddComponent = /** @class */ (function () {
    function ProjectaddComponent(dialogRef, _projectService) {
        this.dialogRef = dialogRef;
        this._projectService = _projectService;
        this.newProjectCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ProjectaddComponent.prototype.ngOnInit = function () {
    };
    ProjectaddComponent.prototype.onCancelClick = function () {
        this.dialogRef.close();
    };
    ProjectaddComponent.prototype.onSaveClick = function () {
        var _this = this;
        if (this.name) {
            this._projectService.create(this.name).subscribe(function (newProject) {
                _this.newProjectCreated.emit(newProject);
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProjectaddComponent.prototype, "newProjectCreated", void 0);
    ProjectaddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projectadd',
            template: __webpack_require__(/*! ./projectadd.component.html */ "./src/app/projectadd/projectadd.component.html"),
            styles: [__webpack_require__(/*! ./projectadd.component.css */ "./src/app/projectadd/projectadd.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"]])
    ], ProjectaddComponent);
    return ProjectaddComponent;
}());



/***/ }),

/***/ "./src/app/projectlist/projectlist.component.css":
/*!*******************************************************!*\
  !*** ./src/app/projectlist/projectlist.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 100%;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/projectlist/projectlist.component.html":
/*!********************************************************!*\
  !*** ./src/app/projectlist/projectlist.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table [dataSource]=\"tableDs\" class=\"mat-elevation-z8\">\r\n\r\n  <!-- Id Column -->\r\n  <ng-container matColumnDef=\"id\">\r\n    <th mat-header-cell *matHeaderCellDef> Id </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"name\">\r\n    <th mat-header-cell *matHeaderCellDef> Name </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"contacts\">\r\n    <th mat-header-cell *matHeaderCellDef> contacts </th>\r\n    <td mat-cell *matCellDef=\"let element\">\r\n      <ul *ngFor=\"let eachContact of element.contacts\">\r\n        <li>{{eachContact.firstName}}-{{eachContact.lastName}}</li>\r\n      </ul>\r\n    </td> \r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"actions\">\r\n    <th mat-header-cell *matHeaderCellDef> Action </th>\r\n    <td mat-cell *matCellDef=\"let element\">\r\n      <button mat-button color=\"primary\" (click)=\"onAddContactToProjectClick(element)\">Add contact</button>\r\n    </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n\r\n<div class=\"row\" style=\"margin-top:15px;\">\r\n  <div class=\"col-md-12\" style=\"text-align:right\">\r\n    <button mat-fab color=\"primary\" style=\"font-size:30px\" (click)=\"openCreateProject()\" title=\"Add new project\">+</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/projectlist/projectlist.component.ts":
/*!******************************************************!*\
  !*** ./src/app/projectlist/projectlist.component.ts ***!
  \******************************************************/
/*! exports provided: ProjectlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectlistComponent", function() { return ProjectlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/project.service */ "./src/app/services/project.service.ts");
/* harmony import */ var _projectadd_projectadd_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../projectadd/projectadd.component */ "./src/app/projectadd/projectadd.component.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var src_app_addcontacttoproject_addcontacttoproject_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/addcontacttoproject/addcontacttoproject.component */ "./src/app/addcontacttoproject/addcontacttoproject.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProjectlistComponent = /** @class */ (function () {
    function ProjectlistComponent(_projectService, _dialog) {
        this._projectService = _projectService;
        this._dialog = _dialog;
        this.displayedColumns = ['id', 'name', 'contacts', 'actions'];
    }
    ProjectlistComponent.prototype.ngOnInit = function () {
        this.tableDs = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        this.loadData();
    };
    ProjectlistComponent.prototype.openCreateProject = function () {
        var _this = this;
        var dialogRef = this._dialog.open(_projectadd_projectadd_component__WEBPACK_IMPORTED_MODULE_3__["ProjectaddComponent"], {
            width: '400px',
            height: '250px'
        });
        var addProjectComponent = dialogRef.componentInstance;
        addProjectComponent.newProjectCreated.subscribe(function (newProject) {
            _this.loadData();
        });
    };
    ProjectlistComponent.prototype.onAddContactToProjectClick = function (project) {
        var _this = this;
        var dialogRef = this._dialog.open(src_app_addcontacttoproject_addcontacttoproject_component__WEBPACK_IMPORTED_MODULE_5__["AddcontacttoprojectComponent"], {
            width: '450px',
            height: '300px',
            data: {
                project: project
            }
        });
        var addContactToProjComponent = dialogRef.componentInstance;
        addContactToProjComponent.newProjectContactCreated.subscribe(function () {
            _this.loadData();
        });
    };
    ProjectlistComponent.prototype.loadData = function () {
        var _this = this;
        this._projectService.getProjects().subscribe(function (projects) {
            _this.tableDs.data = projects;
        });
    };
    ProjectlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projectlist',
            template: __webpack_require__(/*! ./projectlist.component.html */ "./src/app/projectlist/projectlist.component.html"),
            styles: [__webpack_require__(/*! ./projectlist.component.css */ "./src/app/projectlist/projectlist.component.css")]
        }),
        __metadata("design:paramtypes", [_services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], ProjectlistComponent);
    return ProjectlistComponent;
}());



/***/ }),

/***/ "./src/app/services/contact.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/contact.service.ts ***!
  \*********************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactService = /** @class */ (function () {
    function ContactService(_http) {
        this._http = _http;
    }
    ContactService.prototype.getContacts = function () {
        return this._http.get("/api/contacts");
    };
    ContactService.prototype.create = function (contact) {
        return this._http.post("/api/contacts", contact);
    };
    ContactService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ContactService);
    return ContactService;
}());



/***/ }),

/***/ "./src/app/services/project.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/project.service.ts ***!
  \*********************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/Project */ "./src/app/models/Project.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectService = /** @class */ (function () {
    function ProjectService(_http) {
        this._http = _http;
    }
    ProjectService.prototype.getProjects = function () {
        return this._http.get("/api/Projects");
    };
    ProjectService.prototype.create = function (name) {
        var newProject = new _models_Project__WEBPACK_IMPORTED_MODULE_2__["Project"]();
        newProject.name = name;
        return this._http.post("/api/projects", newProject);
    };
    ProjectService.prototype.assignContactToProject = function (projectId, contactId) {
        return this._http.get("/api/ProjectContacts?projectId=" + projectId + "&contactId=" + contactId);
    };
    ProjectService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProjectService);
    return ProjectService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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

module.exports = __webpack_require__(/*! C:\ProjectsAndParticipants\ProjAndParticipants\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map