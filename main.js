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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <app-nav-bar></app-nav-bar>\n  <router-outlet></router-outlet>\n</div>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
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
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _search_box_search_box_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search-box/search-box.component */ "./src/app/search-box/search-box.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pagination/pagination.component */ "./src/app/pagination/pagination.component.ts");
/* harmony import */ var _single_user_single_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./single-user/single-user.component */ "./src/app/single-user/single-user.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__["NavBarComponent"],
                _search_box_search_box_component__WEBPACK_IMPORTED_MODULE_8__["SearchBoxComponent"],
                _users_users_component__WEBPACK_IMPORTED_MODULE_9__["UsersComponent"],
                _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_10__["PaginationComponent"],
                _single_user_single_user_component__WEBPACK_IMPORTED_MODULE_11__["SingleUserComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot([
                    { path: "search", component: _search_box_search_box_component__WEBPACK_IMPORTED_MODULE_8__["SearchBoxComponent"] },
                    { path: "users/:id", component: _users_users_component__WEBPACK_IMPORTED_MODULE_9__["UsersComponent"] },
                    { path: "singleUser/:id", component: _single_user_single_user_component__WEBPACK_IMPORTED_MODULE_11__["SingleUserComponent"] },
                    { path: "", pathMatch: "full", redirectTo: "/search" },
                    { path: "**", pathMatch: "full", redirectTo: "/search" }
                ])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav a {\r\n  font-weight: bold;\r\n  color: white;\r\n}\r\n\r\nnav {\r\n  margin-bottom: 25px;\r\n}\r\n\r\nnav a:hover {\r\n  color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtDQUNkOztBQUVEO0VBQ0Usb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UsYUFBYTtDQUNkIiwiZmlsZSI6InNyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXYgYSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5uYXYge1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbm5hdiBhOmhvdmVyIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.html":
/*!************************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-dark\">\n  <a class=\"navbar-brand\">Github Search App</a>\n</nav>\n"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/nav-bar/nav-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/pagination/pagination.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pagination/pagination.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pagination-div {\r\n  padding: 10px;\r\n}\r\n\r\n.pagination-div {\r\n  position: fixed;\r\n  left: 0;\r\n  bottom: 1px;\r\n  width: 100%;\r\n  background-color: red;\r\n  color: white;\r\n  text-align: center;\r\n}\r\n\r\n.pagination > .active > a,\r\n.pagination > .active > a:focus,\r\n.pagination > .active > a:hover,\r\n.pagination > .active > span,\r\n.pagination > .active > span:focus,\r\n.pagination > .active > span:hover {\r\n  background-color: goldenrod;\r\n  border-color: goldenrod;\r\n}\r\n\r\n.pagination a {\r\n  cursor: pointer;\r\n  padding: 10px;\r\n  color: white;\r\n  background: rgb(109, 109, 247);\r\n}\r\n\r\n.pagination li {\r\n  margin-left: 2px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0NBQ2Y7O0FBRUQ7RUFDRSxnQkFBZ0I7RUFDaEIsUUFBUTtFQUNSLFlBQVk7RUFDWixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixtQkFBbUI7Q0FDcEI7O0FBRUQ7Ozs7OztFQU1FLDRCQUE0QjtFQUM1Qix3QkFBd0I7Q0FDekI7O0FBRUQ7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGFBQWE7RUFDYiwrQkFBK0I7Q0FDaEM7O0FBRUQ7RUFDRSxpQkFBaUI7Q0FDbEIiLCJmaWxlIjoic3JjL2FwcC9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdpbmF0aW9uLWRpdiB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLnBhZ2luYXRpb24tZGl2IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDFweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnBhZ2luYXRpb24gPiAuYWN0aXZlID4gYSxcclxuLnBhZ2luYXRpb24gPiAuYWN0aXZlID4gYTpmb2N1cyxcclxuLnBhZ2luYXRpb24gPiAuYWN0aXZlID4gYTpob3ZlcixcclxuLnBhZ2luYXRpb24gPiAuYWN0aXZlID4gc3BhbixcclxuLnBhZ2luYXRpb24gPiAuYWN0aXZlID4gc3Bhbjpmb2N1cyxcclxuLnBhZ2luYXRpb24gPiAuYWN0aXZlID4gc3Bhbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ29sZGVucm9kO1xyXG4gIGJvcmRlci1jb2xvcjogZ29sZGVucm9kO1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbiBhIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZDogcmdiKDEwOSwgMTA5LCAyNDcpO1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbiBsaSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDJweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pagination/pagination.component.html":
/*!******************************************************!*\
  !*** ./src/app/pagination/pagination.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pagination-div bg-dark\">\n  <nav class=\"back\">\n    <ul class=\"pagination\">\n      <li (click)=\"changeToAnotherPage(-1, $event)\">\n        <a aria-label=\"Previous\">\n          First\n        </a>\n      </li>\n      <!-- numbered buttons -->\n      <li\n        *ngFor=\"let page of pages\"\n        (click)=\"changePage(page, $event)\"\n        [class.active]=\"currentPage === page\"\n      >\n        <a id=\"page\">{{ page }}</a>\n      </li>\n      <!-- next button -->\n      <li (click)=\"changeToAnotherPage(1, $event)\">\n        <a aria-label=\"Next\"> Last: {{ totalPages }} </a>\n      </li>\n    </ul>\n  </nav>\n</div>\n"

/***/ }),

/***/ "./src/app/pagination/pagination.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pagination/pagination.component.ts ***!
  \****************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
        this.pages = [];
        this.currentPage = 1;
        this.window = 10;
        this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(PaginationComponent.prototype, "pageSize", {
        get: function () {
            return this._pagerPageSize;
        },
        set: function (value) {
            this._pagerPageSize = value;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "totalItems", {
        get: function () {
            return this._pagerTotalItems;
        },
        set: function (value) {
            this._pagerTotalItems = value;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    PaginationComponent.prototype.update = function () {
        if (this._pagerPageSize && this._pagerTotalItems) {
            this.pages = [];
            this.totalPages = Math.ceil(this._pagerTotalItems / this.pageSize);
            var maxLeft = this.currentPage - Math.floor(this.window / 2);
            console.log(maxLeft);
            var maxRight = this.currentPage + Math.floor(this.window / 2);
            if (maxLeft < 1) {
                maxLeft = 1;
                maxRight = this.window;
            }
            if (maxRight > this.totalPages) {
                maxRight = this.totalPages - (this.window - 1);
                maxRight = this.totalPages;
                if (maxLeft < 1) {
                    maxLeft = 1;
                }
            }
            if (this.totalItems >= this.pageSize) {
                for (var i = maxLeft; i < maxRight + 1; i++) {
                    // console.log(i);
                    this.pages.push(i);
                }
            }
            return;
        }
        this.isVisible = false;
    };
    PaginationComponent.prototype.changePage = function (page, event) {
        if (event) {
            event.preventDefault();
        }
        if (this.currentPage === page) {
            return;
        }
        this.currentPage = page;
        this.update();
        this.pageChanged.emit(page);
    };
    PaginationComponent.prototype.changeToAnotherPage = function (direction, event) {
        console.log("herre");
        var page = this.currentPage;
        console.log(page);
        if (direction === -1) {
            if (page > 1) {
                page = 1;
            }
        }
        else {
            if (page < this.totalPages) {
                page = this.totalPages;
            }
        }
        this.update();
        this.changePage(page, event);
    };
    PaginationComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
    ], PaginationComponent.prototype, "pageSize", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
    ], PaginationComponent.prototype, "totalItems", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], PaginationComponent.prototype, "pageChanged", void 0);
    PaginationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-pagination",
            template: __webpack_require__(/*! ./pagination.component.html */ "./src/app/pagination/pagination.component.html"),
            styles: [__webpack_require__(/*! ./pagination.component.css */ "./src/app/pagination/pagination.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "./src/app/search-box/search-box.component.css":
/*!*****************************************************!*\
  !*** ./src/app/search-box/search-box.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-bar {\r\n  margin: auto;\r\n  display: grid;\r\n  grid-template-columns: 70% 30%;\r\n  grid-template-rows: 100%;\r\n}\r\n\r\n.input-box {\r\n  margin-right: 10px;\r\n}\r\n\r\n.search-btn {\r\n  padding: 5px 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLWJveC9zZWFyY2gtYm94LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLCtCQUErQjtFQUMvQix5QkFBeUI7Q0FDMUI7O0FBRUQ7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxrQkFBa0I7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gtYm94L3NlYXJjaC1ib3guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gtYmFyIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDcwJSAzMCU7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDAlO1xyXG59XHJcblxyXG4uaW5wdXQtYm94IHtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5zZWFyY2gtYnRuIHtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/search-box/search-box.component.html":
/*!******************************************************!*\
  !*** ./src/app/search-box/search-box.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"search-bar\">\n    <div class=\"input-box\">\n      <input\n        class=\"form-control\"\n        type=\"search\"\n        placeholder=\"Type user name\"\n        [(ngModel)]=\"searchTerm\"\n      />\n    </div>\n    <div><button class=\"search-btn\" (click)=\"search()\">Search</button></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/search-box/search-box.component.ts":
/*!****************************************************!*\
  !*** ./src/app/search-box/search-box.component.ts ***!
  \****************************************************/
/*! exports provided: SearchBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBoxComponent", function() { return SearchBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var SearchBoxComponent = /** @class */ (function () {
    function SearchBoxComponent(router) {
        this.router = router;
        this.title = "Github-search-app";
        this._searchTerm = "";
    }
    SearchBoxComponent.prototype.ngOnInit = function () { };
    Object.defineProperty(SearchBoxComponent.prototype, "searchTerm", {
        get: function () {
            return this._searchTerm;
        },
        set: function (value) {
            this._searchTerm = value;
        },
        enumerable: true,
        configurable: true
    });
    SearchBoxComponent.prototype.search = function () {
        var searchWord = this._searchTerm;
        this.router.navigate(["/users", searchWord], {
            queryParams: { searchTerm: this._searchTerm }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], SearchBoxComponent.prototype, "searchTerm", null);
    SearchBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-search-box",
            template: __webpack_require__(/*! ./search-box.component.html */ "./src/app/search-box/search-box.component.html"),
            styles: [__webpack_require__(/*! ./search-box.component.css */ "./src/app/search-box/search-box.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SearchBoxComponent);
    return SearchBoxComponent;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getCorrespondingUsers = function (userName, pageNumber, pageSize) {
        return this.http
            .get("https://api.github.com/search/users?q=" + userName + "&page=" + pageNumber + "&per_page=" + pageSize)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    DataService.prototype.getSingleUser = function (user) {
        return this.http.get("https://api.github.com/users/" + user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    DataService.prototype.handleError = function (error) {
        console.error("server error:", error);
        if (error.error instanceof Error) {
            var errMessage = error.error.message;
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(errMessage);
            // Use the following instead if using lite-server
            // return Observable.throw(err.text() || 'backend server error');
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error || "Node.js server error");
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/single-user/single-user.component.css":
/*!*******************************************************!*\
  !*** ./src/app/single-user/single-user.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".notFound {\r\n  display: grid;\r\n  justify-content: center;\r\n  margin-top: 50px;\r\n}\r\n\r\n.thumbnail {\r\n  display: grid;\r\n  box-shadow: 5px 5px 10px grey;\r\n  width: 100%;\r\n  grid-template-columns: 200px auto auto;\r\n  grid-template-rows: 30px 150px;\r\n}\r\n\r\n.header {\r\n  grid-column-start: 1;\r\n  grid-column-end: 4;\r\n  color: white;\r\n  padding-left: 10px;\r\n  font-weight: bold;\r\n  align-content: center;\r\n}\r\n\r\ndiv > span {\r\n  font-weight: bold;\r\n}\r\n\r\n.image {\r\n  height: 130px;\r\n  width: 130px;\r\n}\r\n\r\n.img-div {\r\n  display: grid;\r\n  justify-content: center;\r\n  align-content: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2luZ2xlLXVzZXIvc2luZ2xlLXVzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsY0FBYztFQUNkLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osdUNBQXVDO0VBQ3ZDLCtCQUErQjtDQUNoQzs7QUFFRDtFQUNFLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsc0JBQXNCO0NBQ3ZCOztBQUVEO0VBQ0Usa0JBQWtCO0NBQ25COztBQUNEO0VBQ0UsY0FBYztFQUNkLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsc0JBQXNCO0NBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvc2luZ2xlLXVzZXIvc2luZ2xlLXVzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub3RGb3VuZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG4udGh1bWJuYWlsIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCBncmV5O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAwcHggYXV0byBhdXRvO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMzBweCAxNTBweDtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgZ3JpZC1jb2x1bW4tZW5kOiA0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5kaXYgPiBzcGFuIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uaW1hZ2Uge1xyXG4gIGhlaWdodDogMTMwcHg7XHJcbiAgd2lkdGg6IDEzMHB4O1xyXG59XHJcblxyXG4uaW1nLWRpdiB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/single-user/single-user.component.html":
/*!********************************************************!*\
  !*** ./src/app/single-user/single-user.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row user-container\">\n    <div class=\"col-sm-12\" *ngFor=\"let user of singleUser\">\n      <!-- main card -->\n      <div class=\"thumbnail\">\n        <div class=\"header bg-dark\">\n          <h5>User Name: {{ user.login }}</h5>\n        </div>\n        <div class=\"img-div\">\n          <div><img class=\"image\" src=\"{{ user.avatar_url }}\" /></div>\n        </div>\n\n        <div>\n          <div><span>Name</span></div>\n          <div><span>Followers</span></div>\n          <div><span>Following</span></div>\n          <div><span>Repository</span></div>\n          <div><span>Location</span></div>\n          <div><span>Description(Bio)</span></div>\n        </div>\n\n        <div>\n          <div>\n            <span>: {{ user.name }}</span>\n          </div>\n          <div>\n            <span>: {{ user.followers }}</span>\n          </div>\n          <div>\n            <span>: {{ user.following }}</span>\n          </div>\n          <div>\n            <span>: {{ user.public_repos }}</span>\n          </div>\n          <div>\n            <span>: {{ user.location }}</span>\n          </div>\n          <div>\n            <span>: {{ user.bio }}</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- pagination component goes here -->\n"

/***/ }),

/***/ "./src/app/single-user/single-user.component.ts":
/*!******************************************************!*\
  !*** ./src/app/single-user/single-user.component.ts ***!
  \******************************************************/
/*! exports provided: SingleUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleUserComponent", function() { return SingleUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SingleUserComponent = /** @class */ (function () {
    function SingleUserComponent(dataService, route) {
        this.dataService = dataService;
        this.route = route;
        this.singleUser = [];
    }
    SingleUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userName = this.route.snapshot.queryParamMap.get("userName");
        this.dataService.getSingleUser(userName).subscribe(function (response) {
            _this.singleUser = [response];
            console.log(_this.singleUser);
        });
    };
    SingleUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-single-user",
            template: __webpack_require__(/*! ./single-user.component.html */ "./src/app/single-user/single-user.component.html"),
            styles: [__webpack_require__(/*! ./single-user.component.css */ "./src/app/single-user/single-user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], SingleUserComponent);
    return SingleUserComponent;
}());



/***/ }),

/***/ "./src/app/users/users.component.css":
/*!*******************************************!*\
  !*** ./src/app/users/users.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".notFound {\r\n  display: grid;\r\n  justify-content: center;\r\n  margin-top: 50px;\r\n}\r\n\r\n.thumbnail {\r\n  display: grid;\r\n  box-shadow: 5px 5px 10px grey;\r\n  width: 100%;\r\n  grid-template-columns: auto;\r\n  grid-template-rows: 30px auto;\r\n  margin-bottom: 30px;\r\n  cursor: pointer;\r\n}\r\n\r\n.header {\r\n  grid-column-start: 1;\r\n  grid-column-end: end;\r\n  color: white;\r\n  padding-left: 10px;\r\n  font-weight: bold;\r\n  text-align: center;\r\n}\r\n\r\ndiv > span {\r\n  font-weight: bold;\r\n}\r\n\r\n.image {\r\n  height: 100px;\r\n  width: 100px;\r\n}\r\n\r\ndiv a {\r\n  color: white;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.img-div {\r\n  display: grid;\r\n  grid-column-start: 1;\r\n  grid-column-end: end;\r\n  grid-template-columns: auto;\r\n  grid-template-rows: auto;\r\n  justify-content: center;\r\n  margin: auto;\r\n  padding: auto;\r\n}\r\n\r\n.user-container {\r\n  margin-bottom: 50px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvdXNlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsY0FBYztFQUNkLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLDhCQUE4QjtFQUM5QixvQkFBb0I7RUFDcEIsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxrQkFBa0I7Q0FDbkI7O0FBQ0Q7RUFDRSxjQUFjO0VBQ2QsYUFBYTtDQUNkOztBQUVEO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7Q0FDakI7O0FBQ0Q7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQiw0QkFBNEI7RUFDNUIseUJBQXlCO0VBQ3pCLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2IsY0FBYztDQUNmOztBQUNEO0VBQ0Usb0JBQW9CO0NBQ3JCIiwiZmlsZSI6InNyYy9hcHAvdXNlcnMvdXNlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub3RGb3VuZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG4udGh1bWJuYWlsIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCBncmV5O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwcHggYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgZ3JpZC1jb2x1bW4tZW5kOiBlbmQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmRpdiA+IHNwYW4ge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5pbWFnZSB7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICB3aWR0aDogMTAwcHg7XHJcbn1cclxuXHJcbmRpdiBhIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uaW1nLWRpdiB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICBncmlkLWNvbHVtbi1lbmQ6IGVuZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwYWRkaW5nOiBhdXRvO1xyXG59XHJcbi51c2VyLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/users/users.component.html":
/*!********************************************!*\
  !*** ./src/app/users/users.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div>\n    <h3>\n      <span *ngIf=\"totalUsersFound\">Total Result:</span> {{ totalUsersFound }}\n    </h3>\n  </div>\n  <div class=\"container\">\n    <div class=\"row user-container\">\n      <div class=\"col-sm-6 col-md-4 col-lg-3\" *ngFor=\"let user of usersFound\">\n        <!-- main card -->\n        <div\n          class=\"thumbnail\"\n          [routerLink]=\"['/singleUser', user.login]\"\n          [queryParams]=\"{ userName: user.login }\"\n        >\n          <div class=\"header bg-dark\">\n            <a\n              ><h5>User Name: {{ user.login }}</h5></a\n            >\n          </div>\n          <div class=\"img-div\">\n            <div><img class=\"image\" src=\"{{ user.avatar_url }}\" /></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <app-pagination\n    *ngIf=\"usersFound\"\n    [pageSize]=\"pageSize\"\n    [totalItems]=\"totalUsersFound\"\n    (pageChanged)=\"pageChanged($event)\"\n    class=\"bg-dark\"\n  ></app-pagination>\n</div>\n<!-- pagination component goes here -->\n"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");




var UsersComponent = /** @class */ (function () {
    function UsersComponent(route, dataService) {
        this.route = route;
        this.dataService = dataService;
        this.pageNumber = 1;
        this.pageSize = 20;
        this.searchWord = "";
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.searchWord = this.route.snapshot.queryParamMap.get("searchTerm");
        this.getUsers(this.searchWord);
    };
    UsersComponent.prototype.pageChanged = function (page) {
        console.log("here", page);
        this.pageNumber = page;
        this.getUsers(this.searchWord);
    };
    UsersComponent.prototype.getUsers = function (searchWord) {
        var _this = this;
        this.dataService
            .getCorrespondingUsers(searchWord, this.pageNumber, this.pageSize)
            .subscribe(function (response) {
            _this.usersFound = response.items;
            _this.totalUsersFound = response.total_count;
            console.log(_this.usersFound);
        });
    };
    UsersComponent.prototype.routeToSingleUser = function () {
        var id = this.usersFound.login;
        console.log(id);
    };
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-users",
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/users/users.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], UsersComponent);
    return UsersComponent;
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

module.exports = __webpack_require__(/*! C:\Users\Daniel\Desktop\CODING_PROJECTS\Github\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map