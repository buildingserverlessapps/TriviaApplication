(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"game\">\n  <div class=\"row d-flex justify-content-center pt-3\">\n    <img class=\"w-50\" src=\"../assets/images/trivia.svg\" alt=\"Responsive image\">\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-sm-8 mb-5\">\n      <app-questions></app-questions>\n    </div>\n\n    <div class=\"col-sm-4\">\n      <app-players></app-players>\n    </div>\n\n  </div>\n\n  <router-outlet></router-outlet>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/player-detail/player-detail.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/player-detail/player-detail.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h5 class=\"modal-title\">Create Player</h5>\n  <button type=\"button\"\n    class=\"close\"\n    *ngIf=\"playersExist\"\n    (click)=\"activeModal.dismiss('Cross click')\"\n    aria-label=\"Close\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n\n<form [formGroup]=\"playerCreateForm\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"modal-body\">\n    <div *ngIf=\"playerCreated\" class=\"alert alert-success\" role=\"alert\">\n      Player created successfully. Create another one or start the game!\n    </div>\n    <fieldset class=\"form-group\">\n      <div class=\"form-group\">\n        <label for=\"playerName\">Name</label>\n        <input\n          class=\"form-control\"\n          id=\"playerName\"\n          placeholder=\"Enter name\"\n          formControlName=\"playerName\">\n      </div>\n    </fieldset>\n  </div>\n\n  <div class=\"modal-footer border-0\">\n    <button type=\"submit\" class=\"btn btn-lg btn-primary\">Submit</button>\n    <button\n      type=\"button\"\n      class=\"btn btn-secondary btn-lg\"\n      *ngIf=\"playersExist\"\n      (click)=\"activeModal.dismiss('Cross click')\">\n        Close\n    </button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/players/players.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/players/players.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex p-4 flex-column justify-content-start\" style=\"height: 100%\">\n<h4 class=\"font-weight-bold\">Players</h4>\n\n  <div\n    *ngFor=\"let player of players; index as i\"\n    [ngClass]=\"{'card': true, 'mb-3': true, 'mr-3': true, 'border-0': true, 'bg-light': state && i === state.currentPlayerIndex}\"\n    style=\"max-width: 20rem;\">\n\n    <div class=\"card-header\">\n      {{ player.playerName }}\n    </div>\n    <div class=\"card-body\">\n      <h4 class=\"card-title\">Score: {{ player.score }}</h4>\n      <p *ngIf=\"state && i === state.currentPlayerIndex\">It is your turn</p>\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/question-detail/question-detail.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/question-detail/question-detail.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h5 class=\"modal-title\">{{ question.question }}</h5>\n  <button type=\"button\"\n    class=\"close\"\n    *ngIf=\"answered\"\n    (click)=\"activeModal.dismiss('Cross click')\"\n    aria-label=\"Close\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n\n<form [formGroup]=\"answerQuestionForm\" (ngSubmit)=\"onSubmit()\">\n<div class=\"modal-body\">\n  <fieldset class=\"form-group\">\n      <legend>Answer:</legend>\n      <div\n        *ngFor=\"let option of question.options; index as i; first as isFirst\"\n        class=\"form-check\">\n        <label class=\"form-check-label\">\n          <input\n            type=\"radio\"\n            class=\"form-check-input\"\n            id=\"{{ 'optionsRadios' + i }}\"\n            value=\"{{ i }}\"\n            [checked]=\"isFirst\"\n            formControlName=\"answer\">\n          {{ option }}\n        </label>\n      </div>\n\n    </fieldset>\n    <div *ngIf=\"answered && isCorrect\" class=\"alert alert-success\" role=\"alert\">\n      Congratulations, your answer is correct!\n    </div>\n    <div *ngIf=\"answered && !isCorrect\" class=\"alert alert-danger\" role=\"alert\">\n      Sorry, your answer is incorrect.\n    </div>\n</div>\n\n<div class=\"modal-footer border-0\">\n  <button type=\"submit\" *ngIf=\"!answered\" class=\"btn btn-lg btn-primary\">Submit</button>\n  <button\n    type=\"button\"\n    class=\"btn btn-secondary btn-lg\"\n    *ngIf=\"answered\"\n    (click)=\"activeModal.dismiss('Cross click')\">\n    Close\n  </button>\n</div>\n\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/questions/questions.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/questions/questions.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex flex-row justify-content-around mt-4 mb-4\">\n  <div\n    class=\"col-sm-2\"\n    style=\"padding:0!important\"\n    *ngFor=\"let category of categories\">\n\n  <div class=\"card category-card text-center text-uppercase\">\n    <div class=\"card-body\">\n        <p style=\"margin-bottom: 0!important\" class=\"font-weight-bold\">{{ category }}</p>\n    </div>\n  </div>\n\n  </div>\n</div>\n\n<div\n  class=\"d-flex flex-row justify-content-around mt-2\"\n  *ngFor=\"let level of levels\">\n\n  <div\n    class=\"col-sm-2\"\n    style=\"padding:0!important\"\n    *ngFor=\"let category of categories\">\n      <div class=\"card bg-primary text-center\" [hidden]=\"hideQuestion[category][level]\">\n        <div class=\"card-body\">\n          <button\n            class=\"btn btn-link stretched-link question-button\"\n            type=\"button\"\n            (click)=\"hideQuestion[category][level] = !hideQuestion[category][level]; getQuestion(category, level)\"\n          >\n            <h4 style=\"margin-bottom: 0!important\">${{ level }}</h4>\n          </button>\n        </div>\n      </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/winner/winner.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/winner/winner.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h5 class=\"modal-title\">Congratulations</h5>\n  <button type=\"button\"\n    class=\"close\"\n    (click)=\"activeModal.dismiss('Cross click')\"\n    aria-label=\"Close\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n\n<div class=\"modal-body text-center\">\n  <p *ngFor=\"let player of players\">Congratulations {{ player.playerName }}!</p>\n  <p>You have won this round this round.</p>\n</div>\n\n<div class=\"modal-footer border-0\">\n  <button\n    type=\"button\"\n    class=\"btn btn-secondary btn-lg\"\n    (click)=\"activeModal.dismiss('Cross click')\">\n      Close\n  </button>\n</div>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".game {\n  font-family: \"Roboto\", sans-serif;\n  margin: 0;\n  background-image: url('jeopardy-background.jpg');\n}\n\nbody {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZ2F0aGFvL0RvY3VtZW50cy9KZW9wYXJkeS9mcm9udC1lbmQvamVvcGFyZHkvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlDQUFBO0VBQ0EsU0FBQTtFQUNBLGdEQUFBO0FDQ0Y7O0FERUE7RUFDRSxTQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2FtZSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL2ltYWdlcy9qZW9wYXJkeS1iYWNrZ3JvdW5kLmpwZyk7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG59XG4iLCIuZ2FtZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvaW1hZ2VzL2plb3BhcmR5LWJhY2tncm91bmQuanBnKTtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbn0iXX0= */"

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
        this.title = 'Trivia';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _in_memory_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./in-memory-data.service */ "./src/app/in-memory-data.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _players_players_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./players/players.component */ "./src/app/players/players.component.ts");
/* harmony import */ var _questions_questions_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./questions/questions.component */ "./src/app/questions/questions.component.ts");
/* harmony import */ var _question_detail_question_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./question-detail/question-detail.component */ "./src/app/question-detail/question-detail.component.ts");
/* harmony import */ var _player_detail_player_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./player-detail/player-detail.component */ "./src/app/player-detail/player-detail.component.ts");
/* harmony import */ var _winner_winner_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./winner/winner.component */ "./src/app/winner/winner.component.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _players_players_component__WEBPACK_IMPORTED_MODULE_10__["PlayersComponent"],
                _questions_questions_component__WEBPACK_IMPORTED_MODULE_11__["QuestionsComponent"],
                _question_detail_question_detail_component__WEBPACK_IMPORTED_MODULE_12__["QuestionDetailComponent"],
                _player_detail_player_detail_component__WEBPACK_IMPORTED_MODULE_13__["PlayerDetailComponent"],
                _winner_winner_component__WEBPACK_IMPORTED_MODULE_14__["WinnerComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
                // and returns simulated server responses.
                angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_5__["HttpClientInMemoryWebApiModule"].forRoot(_in_memory_data_service__WEBPACK_IMPORTED_MODULE_7__["InMemoryDataService"], { dataEncapsulation: false, passThruUnknownUrl: true }),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]
            ],
            entryComponents: [
                _question_detail_question_detail_component__WEBPACK_IMPORTED_MODULE_12__["QuestionDetailComponent"],
                _player_detail_player_detail_component__WEBPACK_IMPORTED_MODULE_13__["PlayerDetailComponent"],
                _winner_winner_component__WEBPACK_IMPORTED_MODULE_14__["WinnerComponent"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/in-memory-data.service.ts":
/*!*******************************************!*\
  !*** ./src/app/in-memory-data.service.ts ***!
  \*******************************************/
/*! exports provided: InMemoryDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function() { return InMemoryDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InMemoryDataService = /** @class */ (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var players = [
            { id: 11, playerName: 'Player 1', score: 0 },
            { id: 12, playerName: 'Player 2', score: 0 }
        ];
        var state = [];
        //TODO3: REMOVE PLAYERS FROM THE OBJECT BELOW WHEN YOUR API IS READY
        return { state: state, players: players };
    };
    // Overrides the genId method to ensure that a player always has an id.
    // If the table is empty,
    // the method below returns the initial number (11).
    // if the table is not empty, the method below returns the highest
    // item id + 1.
    InMemoryDataService.prototype.genId = function (myTable) {
        return myTable.length > 0 ? Math.max.apply(Math, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](myTable.map(function (t) { return t.id; }))) + 1 : 11;
    };
    InMemoryDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        })
    ], InMemoryDataService);
    return InMemoryDataService;
}());



/***/ }),

/***/ "./src/app/player-detail/player-detail.component.scss":
/*!************************************************************!*\
  !*** ./src/app/player-detail/player-detail.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYXllci1kZXRhaWwvcGxheWVyLWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/player-detail/player-detail.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/player-detail/player-detail.component.ts ***!
  \**********************************************************/
/*! exports provided: PlayerDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerDetailComponent", function() { return PlayerDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _player_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../player.service */ "./src/app/player.service.ts");





var PlayerDetailComponent = /** @class */ (function () {
    function PlayerDetailComponent(activeModal, playerService) {
        this.activeModal = activeModal;
        this.playerService = playerService;
        this.playerCreateForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            playerName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
        this.playerCreated = false;
    }
    PlayerDetailComponent.prototype.ngOnInit = function () {
        this.verifyPlayers();
    };
    PlayerDetailComponent.prototype.verifyPlayers = function () {
        var _this = this;
        this.playerService.getPlayers()
            .subscribe(function (players) {
            if (players.length > 0) {
                _this.playersExist = true;
            }
        });
    };
    PlayerDetailComponent.prototype.onSubmit = function () {
        var _this = this;
        var playerName = this.playerCreateForm.value.playerName;
        this.playerService.addPlayer({ playerName: playerName }).subscribe(function (_) {
            _this.playerCreated = true;
            _this.playersExist = true;
            _this.playerCreateForm.reset();
        });
    };
    PlayerDetailComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"] },
        { type: _player_service__WEBPACK_IMPORTED_MODULE_4__["PlayerService"] }
    ]; };
    PlayerDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-player-detail',
            template: __webpack_require__(/*! raw-loader!./player-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/player-detail/player-detail.component.html"),
            styles: [__webpack_require__(/*! ./player-detail.component.scss */ "./src/app/player-detail/player-detail.component.scss")]
        })
    ], PlayerDetailComponent);
    return PlayerDetailComponent;
}());



/***/ }),

/***/ "./src/app/player.service.ts":
/*!***********************************!*\
  !*** ./src/app/player.service.ts ***!
  \***********************************/
/*! exports provided: PlayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerService", function() { return PlayerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var PlayerService = /** @class */ (function () {
    function PlayerService(http) {
        var _this = this;
        this.http = http;
        //TODO2: REPLACE THE URL BELOW WITH THE ONE FOR YOUR PLAYERS API, FROM SECTION 3, ITEM I
        this.playersUrl = 'api/players';
        this.playersChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.players = [];
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        this.playersUpdateSubscription = this.playersChange
            .subscribe(function (players) { return _this.players = players; });
    }
    /** GET players from the server */
    PlayerService.prototype.getPlayers = function () {
        var _this = this;
        return this.http.get(this.playersUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (players) {
            _this.log('fetched players');
            _this.playersChange.next(players);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getPlayers', [])));
    };
    /** GET player by id. Return `undefined` when id not found */
    PlayerService.prototype.getPlayerNo404 = function (id) {
        var _this = this;
        var url = this.playersUrl + "/?id=" + id;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (players) { return players[0]; }), // returns a {0|1} element array
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (h) {
            var outcome = h ? "fetched" : "did not find";
            _this.log(outcome + " player id=" + id);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getPlayer id=" + id)));
    };
    //////// Save methods //////////
    /** Generate a player ID between 1 and 100 */
    PlayerService.prototype.generateId = function () {
        return Math.floor(Math.random() * (100 - 1)) + 1;
    };
    /** Generate a player id and add the new player to the server */
    PlayerService.prototype.addPlayer = function (player) {
        player.id = this.generateId();
        player.score = 0;
        return this.updatePlayer(player);
    };
    /** DELETE: delete the player from the server */
    PlayerService.prototype.deletePlayer = function (player) {
        var _this = this;
        var id = typeof player === 'number' ? player : player.id;
        var url = this.playersUrl + "/" + id;
        return this.http.delete(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) {
            _this.log("deleted player id=" + id);
            _this.getPlayers().subscribe();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deletePlayer')));
    };
    /** PUT: update the player on the server or create it if it doesn't exist */
    PlayerService.prototype.updatePlayer = function (player) {
        var _this = this;
        var url = this.playersUrl + "/" + player.id;
        return this.http.put(url, player, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) {
            _this.log("updated player id=" + player.id);
            _this.getPlayers().subscribe();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updatePlayer')));
    };
    /** Reset all players to 0 score */
    PlayerService.prototype.resetPlayers = function () {
        var _this = this;
        this.getPlayers()
            .subscribe(function (players) {
            players.forEach(function (player) {
                player.score = 0;
                _this.updatePlayer(player).subscribe();
            });
        });
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    PlayerService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error);
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    /** Log a PlayerService message to the console */
    PlayerService.prototype.log = function (message) {
        console.log("PlayerService: " + message);
    };
    PlayerService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PlayerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], PlayerService);
    return PlayerService;
}());



/***/ }),

/***/ "./src/app/players/players.component.scss":
/*!************************************************!*\
  !*** ./src/app/players/players.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYXllcnMvcGxheWVycy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/players/players.component.ts":
/*!**********************************************!*\
  !*** ./src/app/players/players.component.ts ***!
  \**********************************************/
/*! exports provided: PlayersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayersComponent", function() { return PlayersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _player_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../player.service */ "./src/app/player.service.ts");
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../state.service */ "./src/app/state.service.ts");
/* harmony import */ var _player_detail_player_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../player-detail/player-detail.component */ "./src/app/player-detail/player-detail.component.ts");






var PlayersComponent = /** @class */ (function () {
    function PlayersComponent(playerService, stateService, modalService) {
        this.playerService = playerService;
        this.stateService = stateService;
        this.modalService = modalService;
    }
    PlayersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getPlayers();
        this.playersUpdateSubscription = this.playerService
            .playersChange.subscribe(function (players) { return _this.players = players; });
        this.stateUpdateSubscription = this.stateService
            .stateChange.subscribe(function (state) { return _this.state = state; });
        var ngbModalOptions = {
            backdrop: 'static',
            keyboard: false
        };
        var modalRef = this.modalService.open(_player_detail_player_detail_component__WEBPACK_IMPORTED_MODULE_5__["PlayerDetailComponent"], ngbModalOptions);
        // modalRef.componentInstance.player = question;
    };
    PlayersComponent.prototype.ngOnDestroy = function () {
        this.playersUpdateSubscription.unsubscribe();
        this.stateUpdateSubscription.unsubscribe();
    };
    PlayersComponent.prototype.getPlayers = function () {
        var _this = this;
        this.playerService.getPlayers()
            .subscribe(function (players) {
            _this.players = players;
            if (_this.players.length > 0) {
                _this.stateService.addState({ id: 0, currentPlayerIndex: 0 }).subscribe(function (state) {
                    _this.state = state;
                });
            }
        });
    };
    PlayersComponent.prototype.add = function (playerName) {
        var _this = this;
        playerName = playerName.trim();
        if (!playerName) {
            return;
        }
        this.playerService.addPlayer({ playerName: playerName, score: 0 })
            .subscribe(function (player) {
            _this.players.push(player);
        });
    };
    PlayersComponent.prototype.delete = function (player) {
        this.players = this.players.filter(function (h) { return h !== player; });
        this.playerService.deletePlayer(player).subscribe();
    };
    PlayersComponent.ctorParameters = function () { return [
        { type: _player_service__WEBPACK_IMPORTED_MODULE_3__["PlayerService"] },
        { type: _state_service__WEBPACK_IMPORTED_MODULE_4__["StateService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
    ]; };
    PlayersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-players',
            template: __webpack_require__(/*! raw-loader!./players.component.html */ "./node_modules/raw-loader/index.js!./src/app/players/players.component.html"),
            styles: [__webpack_require__(/*! ./players.component.scss */ "./src/app/players/players.component.scss")]
        })
    ], PlayersComponent);
    return PlayersComponent;
}());



/***/ }),

/***/ "./src/app/question-detail/question-detail.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/question-detail/question-detail.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0aW9uLWRldGFpbC9xdWVzdGlvbi1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/question-detail/question-detail.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/question-detail/question-detail.component.ts ***!
  \**************************************************************/
/*! exports provided: QuestionDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionDetailComponent", function() { return QuestionDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../state.service */ "./src/app/state.service.ts");
/* harmony import */ var _player_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../player.service */ "./src/app/player.service.ts");






var QuestionDetailComponent = /** @class */ (function () {
    function QuestionDetailComponent(activeModal, stateService, playerService) {
        this.activeModal = activeModal;
        this.stateService = stateService;
        this.playerService = playerService;
        this.answerQuestionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            answer: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("0"),
        });
        this.answered = false;
    }
    QuestionDetailComponent.prototype.ngOnInit = function () {
        this.getPlayers();
    };
    QuestionDetailComponent.prototype.getPlayers = function () {
        var _this = this;
        this.playerService.getPlayers().subscribe(function (players) {
            _this.players = players;
        });
    };
    QuestionDetailComponent.prototype.onSubmit = function () {
        var _this = this;
        var answer = parseInt(this.answerQuestionForm.value.answer, 10);
        var points = this.question.difficulty;
        this.isCorrect = answer === this.question.answer;
        if (!this.isCorrect) {
            points = points * -1;
        }
        this.stateService.getState().subscribe(function (state) {
            var currentState = state;
            var currentPlayerIndex = currentState.currentPlayerIndex;
            var player = _this.players[currentPlayerIndex];
            player.score = player.score + points;
            //update player
            _this.playerService.updatePlayer(player).subscribe(function (_) {
                //Move state to the next player
                currentPlayerIndex = currentPlayerIndex + 1;
                if (currentPlayerIndex >= _this.players.length) {
                    currentPlayerIndex = 0;
                }
                state.currentPlayerIndex = currentPlayerIndex;
                _this.stateService.updateState(state)
                    .subscribe(function (_) {
                    _this.answered = true;
                });
            });
        });
    };
    QuestionDetailComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"] },
        { type: _state_service__WEBPACK_IMPORTED_MODULE_4__["StateService"] },
        { type: _player_service__WEBPACK_IMPORTED_MODULE_5__["PlayerService"] }
    ]; };
    QuestionDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-question-detail',
            template: __webpack_require__(/*! raw-loader!./question-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/question-detail/question-detail.component.html"),
            styles: [__webpack_require__(/*! ./question-detail.component.scss */ "./src/app/question-detail/question-detail.component.scss")]
        })
    ], QuestionDetailComponent);
    return QuestionDetailComponent;
}());



/***/ }),

/***/ "./src/app/question.service.ts":
/*!*************************************!*\
  !*** ./src/app/question.service.ts ***!
  \*************************************/
/*! exports provided: QuestionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionService", function() { return QuestionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var QuestionService = /** @class */ (function () {
    function QuestionService(http) {
        this.http = http;
        //TODO1: REPLACE THE URL BELOW WITH THE ONE FOR YOUR QUESTIONS API, FROM SECTION 3, ITEM III
        this.questionsUrl = 'api';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    /** GET questions from the server */
    QuestionService.prototype.getQuestions = function () {
        var _this = this;
        return this.http.get(this.questionsUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log('fetched questions'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getQuestions', [])));
    };
    /** GET question by id. Return `undefined` when id not found */
    QuestionService.prototype.getQuestion = function (category, difficulty) {
        var _this = this;
        var url = this.questionsUrl + "/" + category + "/" + difficulty;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (questions) { return questions[0]; }), // returns a {0|1} element array
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (h) {
            var outcome = h ? "fetched" : "did not find";
            _this.log(outcome + " question category=" + category + ", difficulty=" + difficulty);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getQuestion category=" + category + ", difficulty=" + difficulty)));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    QuestionService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    /** Log a PlayerService message to the console */
    QuestionService.prototype.log = function (message) {
        console.log("QuestionService: " + message);
    };
    QuestionService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    QuestionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], QuestionService);
    return QuestionService;
}());



/***/ }),

/***/ "./src/app/questions/questions.component.scss":
/*!****************************************************!*\
  !*** ./src/app/questions/questions.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".question-button {\n  color: white;\n  text-decoration: none !important;\n}\n\n.category-card {\n  background-color: #725fe0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZ2F0aGFvL0RvY3VtZW50cy9KZW9wYXJkeS9mcm9udC1lbmQvamVvcGFyZHkvc3JjL2FwcC9xdWVzdGlvbnMvcXVlc3Rpb25zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9xdWVzdGlvbnMvcXVlc3Rpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGdDQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQ0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcXVlc3Rpb25zL3F1ZXN0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5xdWVzdGlvbi1idXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uY2F0ZWdvcnktY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3MjVmZTAgIWltcG9ydGFudDtcbn1cbiIsIi5xdWVzdGlvbi1idXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uY2F0ZWdvcnktY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3MjVmZTAgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/questions/questions.component.ts":
/*!**************************************************!*\
  !*** ./src/app/questions/questions.component.ts ***!
  \**************************************************/
/*! exports provided: QuestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsComponent", function() { return QuestionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _question_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../question.service */ "./src/app/question.service.ts");
/* harmony import */ var _question_detail_question_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../question-detail/question-detail.component */ "./src/app/question-detail/question-detail.component.ts");
/* harmony import */ var _winner_winner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../winner/winner.component */ "./src/app/winner/winner.component.ts");
/* harmony import */ var _player_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../player.service */ "./src/app/player.service.ts");







var QuestionsComponent = /** @class */ (function () {
    function QuestionsComponent(questionService, playerService, modalService) {
        this.questionService = questionService;
        this.playerService = playerService;
        this.modalService = modalService;
        this.ngbModalOptions = {
            backdrop: 'static',
            keyboard: false
        };
    }
    QuestionsComponent.prototype.updateHideQuestions = function () {
        var _this = this;
        this.hideQuestion = [];
        this.categories.forEach(function (category) {
            _this.hideQuestion[category] = [];
            _this.levels.forEach(function (level) {
                _this.hideQuestion[category][level] = false;
            });
        });
    };
    QuestionsComponent.prototype.ngOnInit = function () {
        this.categories = ['Amazon', 'S3', 'APIGateway', 'Lambda', 'DynamoDB'];
        this.levels = [200, 400, 600, 800, 1000];
        this.playerService.resetPlayers();
        this.updateHideQuestions();
    };
    QuestionsComponent.prototype.getQuestion = function (category, difficulty) {
        var _this = this;
        this.questionService.getQuestion(category, difficulty)
            .subscribe(function (question) {
            var modalRef = _this.modalService.open(_question_detail_question_detail_component__WEBPACK_IMPORTED_MODULE_4__["QuestionDetailComponent"], _this.ngbModalOptions);
            modalRef.componentInstance.question = question;
            modalRef.result.then(function () { return _this.finalizeGameIfEnd(); }, function () { return _this.finalizeGameIfEnd(); });
        });
    };
    QuestionsComponent.prototype.hasGameEnded = function () {
        var isEnd = true;
        var category, level;
        for (category in this.hideQuestion) {
            for (level in this.hideQuestion[category]) {
                if (!this.hideQuestion[category][level]) {
                    isEnd = false;
                    break;
                }
            }
            if (!isEnd) {
                break;
            }
        }
        return isEnd;
    };
    QuestionsComponent.prototype.finalizeGameIfEnd = function () {
        var _this = this;
        if (!this.hasGameEnded()) {
            return;
        }
        this.playerService.getPlayers().subscribe(function (players) {
            var winners = [];
            winners.push(players[0]);
            var winningScore = players[0].score;
            for (var i = 1; i < players.length; i++) {
                var currentPlayer = players[i];
                if (currentPlayer.score > winningScore) {
                    winners = [currentPlayer];
                }
                else if (currentPlayer.score === winningScore) {
                    winners.push(currentPlayer);
                }
            }
            var modalRef = _this.modalService.open(_winner_winner_component__WEBPACK_IMPORTED_MODULE_5__["WinnerComponent"], _this.ngbModalOptions);
            modalRef.componentInstance.players = winners;
            _this.playerService.resetPlayers();
            _this.updateHideQuestions();
        });
    };
    QuestionsComponent.ctorParameters = function () { return [
        { type: _question_service__WEBPACK_IMPORTED_MODULE_3__["QuestionService"] },
        { type: _player_service__WEBPACK_IMPORTED_MODULE_6__["PlayerService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
    ]; };
    QuestionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-questions',
            template: __webpack_require__(/*! raw-loader!./questions.component.html */ "./node_modules/raw-loader/index.js!./src/app/questions/questions.component.html"),
            styles: [__webpack_require__(/*! ./questions.component.scss */ "./src/app/questions/questions.component.scss")]
        })
    ], QuestionsComponent);
    return QuestionsComponent;
}());



/***/ }),

/***/ "./src/app/state.service.ts":
/*!**********************************!*\
  !*** ./src/app/state.service.ts ***!
  \**********************************/
/*! exports provided: StateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateService", function() { return StateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var StateService = /** @class */ (function () {
    function StateService(http) {
        var _this = this;
        this.http = http;
        this.stateUrl = 'api/state';
        this.stateChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        this.stateUpdateSubscription = this.stateChange
            .subscribe(function (state) {
            _this.state = state;
        });
    }
    /** GET state with hardcoded id 0. Return `undefined` when id not found */
    StateService.prototype.getState = function () {
        var _this = this;
        var url = this.stateUrl + "/?id=0";
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (states) { return states[0]; }), // returns a {0|1} element array
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (state) {
            var outcome = state ? "fetched" : "did not find";
            _this.log(outcome + " state id=0");
            _this.stateChange.next(state);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getState id=0")));
    };
    //////// Save methods //////////
    /** PUT: add a new state to the server */
    StateService.prototype.addState = function (state) {
        var _this = this;
        return this.http.put(this.stateUrl, state, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (newState) {
            _this.log("added state");
            _this.getState().subscribe();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addState')));
    };
    /** PUT: update the state on the server */
    StateService.prototype.updateState = function (state) {
        var _this = this;
        return this.http.put(this.stateUrl, state, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) {
            _this.log("updated state");
            _this.getState().subscribe();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateState')));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    StateService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error);
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    /** Log a StateService message to the console */
    StateService.prototype.log = function (message) {
        console.log("StateService: " + message);
    };
    StateService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    StateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], StateService);
    return StateService;
}());



/***/ }),

/***/ "./src/app/winner/winner.component.scss":
/*!**********************************************!*\
  !*** ./src/app/winner/winner.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpbm5lci93aW5uZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/winner/winner.component.ts":
/*!********************************************!*\
  !*** ./src/app/winner/winner.component.ts ***!
  \********************************************/
/*! exports provided: WinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WinnerComponent", function() { return WinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



var WinnerComponent = /** @class */ (function () {
    function WinnerComponent(activeModal) {
        this.activeModal = activeModal;
    }
    WinnerComponent.prototype.ngOnInit = function () {
    };
    WinnerComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }
    ]; };
    WinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-winner',
            template: __webpack_require__(/*! raw-loader!./winner.component.html */ "./node_modules/raw-loader/index.js!./src/app/winner/winner.component.html"),
            styles: [__webpack_require__(/*! ./winner.component.scss */ "./src/app/winner/winner.component.scss")]
        })
    ], WinnerComponent);
    return WinnerComponent;
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

module.exports = __webpack_require__(/*! /Users/agathao/Documents/Jeopardy/front-end/jeopardy/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map