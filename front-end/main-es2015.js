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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Trivia';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _in_memory_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./in-memory-data.service */ "./src/app/in-memory-data.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _players_players_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./players/players.component */ "./src/app/players/players.component.ts");
/* harmony import */ var _questions_questions_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./questions/questions.component */ "./src/app/questions/questions.component.ts");
/* harmony import */ var _question_detail_question_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./question-detail/question-detail.component */ "./src/app/question-detail/question-detail.component.ts");
/* harmony import */ var _player_detail_player_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./player-detail/player-detail.component */ "./src/app/player-detail/player-detail.component.ts");
/* harmony import */ var _winner_winner_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./winner/winner.component */ "./src/app/winner/winner.component.ts");















let AppModule = class AppModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InMemoryDataService = class InMemoryDataService {
    createDb() {
        const players = [
            { id: 11, playerName: 'Player 1', score: 0 },
            { id: 12, playerName: 'Player 2', score: 0 }
        ];
        const state = [];
        //TODO3: REMOVE PLAYERS FROM THE OBJECT BELOW WHEN YOUR API IS READY
        return { state, players };
    }
    // Overrides the genId method to ensure that a player always has an id.
    // If the table is empty,
    // the method below returns the initial number (11).
    // if the table is not empty, the method below returns the highest
    // item id + 1.
    genId(myTable) {
        return myTable.length > 0 ? Math.max(...myTable.map(t => t.id)) + 1 : 11;
    }
};
InMemoryDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], InMemoryDataService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _player_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../player.service */ "./src/app/player.service.ts");





let PlayerDetailComponent = class PlayerDetailComponent {
    constructor(activeModal, playerService) {
        this.activeModal = activeModal;
        this.playerService = playerService;
        this.playerCreateForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            playerName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
        this.playerCreated = false;
    }
    ngOnInit() {
        this.verifyPlayers();
    }
    verifyPlayers() {
        this.playerService.getPlayers()
            .subscribe(players => {
            if (players.length > 0) {
                this.playersExist = true;
            }
        });
    }
    onSubmit() {
        var playerName = this.playerCreateForm.value.playerName;
        this.playerService.addPlayer({ playerName }).subscribe(_ => {
            this.playerCreated = true;
            this.playersExist = true;
            this.playerCreateForm.reset();
        });
    }
};
PlayerDetailComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"] },
    { type: _player_service__WEBPACK_IMPORTED_MODULE_4__["PlayerService"] }
];
PlayerDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-player-detail',
        template: __webpack_require__(/*! raw-loader!./player-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/player-detail/player-detail.component.html"),
        styles: [__webpack_require__(/*! ./player-detail.component.scss */ "./src/app/player-detail/player-detail.component.scss")]
    })
], PlayerDetailComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let PlayerService = class PlayerService {
    constructor(http) {
        this.http = http;
        //TODO2: REPLACE THE URL BELOW WITH THE ONE FOR YOUR PLAYERS API, FROM PART II, SECTION e, ITEM i
        this.playersUrl = 'api/players';
        this.playersChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.players = [];
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        this.playersUpdateSubscription = this.playersChange
            .subscribe(players => this.players = players);
    }
    /** GET players from the server */
    getPlayers() {
        return this.http.get(this.playersUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(players => {
            this.log('fetched players');
            this.playersChange.next(players);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getPlayers', [])));
    }
    /** GET player by id. Return `undefined` when id not found */
    getPlayerNo404(id) {
        const url = `${this.playersUrl}/?id=${id}`;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(players => players[0]), // returns a {0|1} element array
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(h => {
            const outcome = h ? `fetched` : `did not find`;
            this.log(`${outcome} player id=${id}`);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError(`getPlayer id=${id}`)));
    }
    //////// Save methods //////////
    /** Generate a player ID between 1 and 100 */
    generateId() {
        return Math.floor(Math.random() * (100 - 1)) + 1;
    }
    /** Generate a player id and add the new player to the server */
    addPlayer(player) {
        player.id = this.generateId();
        player.score = 0;
        return this.updatePlayer(player);
    }
    /** DELETE: delete the player from the server */
    deletePlayer(player) {
        const id = typeof player === 'number' ? player : player.id;
        const url = `${this.playersUrl}/${id}`;
        return this.http.delete(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => {
            this.log(`deleted player id=${id}`);
            this.getPlayers().subscribe();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deletePlayer')));
    }
    /** PUT: update the player on the server or create it if it doesn't exist */
    updatePlayer(player) {
        const url = `${this.playersUrl}/${player.id}`;
        return this.http.put(url, player, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => {
            this.log(`updated player id=${player.id}`);
            this.getPlayers().subscribe();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updatePlayer')));
    }
    /** Reset all players to 0 score */
    resetPlayers() {
        this.getPlayers()
            .subscribe(players => {
            players.forEach(player => {
                player.score = 0;
                this.updatePlayer(player).subscribe();
            });
        });
    }
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error);
            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    }
    /** Log a PlayerService message to the console */
    log(message) {
        console.log(`PlayerService: ${message}`);
    }
};
PlayerService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PlayerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], PlayerService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _player_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../player.service */ "./src/app/player.service.ts");
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../state.service */ "./src/app/state.service.ts");
/* harmony import */ var _player_detail_player_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../player-detail/player-detail.component */ "./src/app/player-detail/player-detail.component.ts");






let PlayersComponent = class PlayersComponent {
    constructor(playerService, stateService, modalService) {
        this.playerService = playerService;
        this.stateService = stateService;
        this.modalService = modalService;
    }
    ngOnInit() {
        this.getPlayers();
        this.playersUpdateSubscription = this.playerService
            .playersChange.subscribe(players => this.players = players);
        this.stateUpdateSubscription = this.stateService
            .stateChange.subscribe(state => this.state = state);
        let ngbModalOptions = {
            backdrop: 'static',
            keyboard: false
        };
        const modalRef = this.modalService.open(_player_detail_player_detail_component__WEBPACK_IMPORTED_MODULE_5__["PlayerDetailComponent"], ngbModalOptions);
        // modalRef.componentInstance.player = question;
    }
    ngOnDestroy() {
        this.playersUpdateSubscription.unsubscribe();
        this.stateUpdateSubscription.unsubscribe();
    }
    getPlayers() {
        this.playerService.getPlayers()
            .subscribe(players => {
            this.players = players;
            if (this.players.length > 0) {
                this.stateService.addState({ id: 0, currentPlayerIndex: 0 }).subscribe(state => {
                    this.state = state;
                });
            }
        });
    }
    add(playerName) {
        playerName = playerName.trim();
        if (!playerName) {
            return;
        }
        this.playerService.addPlayer({ playerName, score: 0 })
            .subscribe(player => {
            this.players.push(player);
        });
    }
    delete(player) {
        this.players = this.players.filter(h => h !== player);
        this.playerService.deletePlayer(player).subscribe();
    }
};
PlayersComponent.ctorParameters = () => [
    { type: _player_service__WEBPACK_IMPORTED_MODULE_3__["PlayerService"] },
    { type: _state_service__WEBPACK_IMPORTED_MODULE_4__["StateService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
];
PlayersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-players',
        template: __webpack_require__(/*! raw-loader!./players.component.html */ "./node_modules/raw-loader/index.js!./src/app/players/players.component.html"),
        styles: [__webpack_require__(/*! ./players.component.scss */ "./src/app/players/players.component.scss")]
    })
], PlayersComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../state.service */ "./src/app/state.service.ts");
/* harmony import */ var _player_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../player.service */ "./src/app/player.service.ts");






let QuestionDetailComponent = class QuestionDetailComponent {
    constructor(activeModal, stateService, playerService) {
        this.activeModal = activeModal;
        this.stateService = stateService;
        this.playerService = playerService;
        this.answerQuestionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            answer: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("0"),
        });
        this.answered = false;
    }
    ngOnInit() {
        this.getPlayers();
    }
    getPlayers() {
        this.playerService.getPlayers().subscribe(players => {
            this.players = players;
        });
    }
    onSubmit() {
        var answer = parseInt(this.answerQuestionForm.value.answer, 10);
        var points = this.question.difficulty;
        this.isCorrect = answer === this.question.answer;
        if (!this.isCorrect) {
            points = points * -1;
        }
        this.stateService.getState().subscribe(state => {
            var currentState = state;
            var currentPlayerIndex = currentState.currentPlayerIndex;
            var player = this.players[currentPlayerIndex];
            player.score = player.score + points;
            //update player
            this.playerService.updatePlayer(player).subscribe(_ => {
                //Move state to the next player
                currentPlayerIndex = currentPlayerIndex + 1;
                if (currentPlayerIndex >= this.players.length) {
                    currentPlayerIndex = 0;
                }
                state.currentPlayerIndex = currentPlayerIndex;
                this.stateService.updateState(state)
                    .subscribe(_ => {
                    this.answered = true;
                });
            });
        });
    }
};
QuestionDetailComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"] },
    { type: _state_service__WEBPACK_IMPORTED_MODULE_4__["StateService"] },
    { type: _player_service__WEBPACK_IMPORTED_MODULE_5__["PlayerService"] }
];
QuestionDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-question-detail',
        template: __webpack_require__(/*! raw-loader!./question-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/question-detail/question-detail.component.html"),
        styles: [__webpack_require__(/*! ./question-detail.component.scss */ "./src/app/question-detail/question-detail.component.scss")]
    })
], QuestionDetailComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let QuestionService = class QuestionService {
    constructor(http) {
        this.http = http;
        //TODO1: REPLACE THE URL BELOW WITH THE ONE FOR YOUR QUESTIONS API, FROM PART II, SECTION e, ITEM iii
        this.questionsUrl = 'api';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    /** GET questions from the server */
    getQuestions() {
        return this.http.get(this.questionsUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => this.log('fetched questions')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getQuestions', [])));
    }
    /** GET question by id. Return `undefined` when id not found */
    getQuestion(category, difficulty) {
        const url = `${this.questionsUrl}/${category}/${difficulty}`;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(questions => questions[0]), // returns a {0|1} element array
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(h => {
            const outcome = h ? `fetched` : `did not find`;
            this.log(`${outcome} question category=${category}, difficulty=${difficulty}`);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError(`getQuestion category=${category}, difficulty=${difficulty}`)));
    }
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    }
    /** Log a PlayerService message to the console */
    log(message) {
        console.log(`QuestionService: ${message}`);
    }
};
QuestionService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
QuestionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], QuestionService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _question_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../question.service */ "./src/app/question.service.ts");
/* harmony import */ var _question_detail_question_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../question-detail/question-detail.component */ "./src/app/question-detail/question-detail.component.ts");
/* harmony import */ var _winner_winner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../winner/winner.component */ "./src/app/winner/winner.component.ts");
/* harmony import */ var _player_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../player.service */ "./src/app/player.service.ts");







let QuestionsComponent = class QuestionsComponent {
    constructor(questionService, playerService, modalService) {
        this.questionService = questionService;
        this.playerService = playerService;
        this.modalService = modalService;
        this.ngbModalOptions = {
            backdrop: 'static',
            keyboard: false
        };
    }
    updateHideQuestions() {
        this.hideQuestion = [];
        this.categories.forEach(category => {
            this.hideQuestion[category] = [];
            this.levels.forEach(level => {
                this.hideQuestion[category][level] = false;
            });
        });
    }
    ngOnInit() {
        this.categories = ['Amazon', 'S3', 'APIGateway', 'Lambda', 'DynamoDB'];
        this.levels = [200, 400, 600, 800, 1000];
        this.playerService.resetPlayers();
        this.updateHideQuestions();
    }
    getQuestion(category, difficulty) {
        this.questionService.getQuestion(category, difficulty)
            .subscribe(question => {
            const modalRef = this.modalService.open(_question_detail_question_detail_component__WEBPACK_IMPORTED_MODULE_4__["QuestionDetailComponent"], this.ngbModalOptions);
            modalRef.componentInstance.question = question;
            modalRef.result.then(() => this.finalizeGameIfEnd(), () => this.finalizeGameIfEnd());
        });
    }
    hasGameEnded() {
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
    }
    finalizeGameIfEnd() {
        if (!this.hasGameEnded()) {
            return;
        }
        this.playerService.getPlayers().subscribe(players => {
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
            const modalRef = this.modalService.open(_winner_winner_component__WEBPACK_IMPORTED_MODULE_5__["WinnerComponent"], this.ngbModalOptions);
            modalRef.componentInstance.players = winners;
            this.playerService.resetPlayers();
            this.updateHideQuestions();
        });
    }
};
QuestionsComponent.ctorParameters = () => [
    { type: _question_service__WEBPACK_IMPORTED_MODULE_3__["QuestionService"] },
    { type: _player_service__WEBPACK_IMPORTED_MODULE_6__["PlayerService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
];
QuestionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-questions',
        template: __webpack_require__(/*! raw-loader!./questions.component.html */ "./node_modules/raw-loader/index.js!./src/app/questions/questions.component.html"),
        styles: [__webpack_require__(/*! ./questions.component.scss */ "./src/app/questions/questions.component.scss")]
    })
], QuestionsComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let StateService = class StateService {
    constructor(http) {
        this.http = http;
        this.stateUrl = 'api/state';
        this.stateChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        this.stateUpdateSubscription = this.stateChange
            .subscribe(state => {
            this.state = state;
        });
    }
    /** GET state with hardcoded id 0. Return `undefined` when id not found */
    getState() {
        const url = `${this.stateUrl}/?id=0`;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(states => states[0]), // returns a {0|1} element array
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(state => {
            const outcome = state ? `fetched` : `did not find`;
            this.log(`${outcome} state id=0`);
            this.stateChange.next(state);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError(`getState id=0`)));
    }
    //////// Save methods //////////
    /** PUT: add a new state to the server */
    addState(state) {
        return this.http.put(this.stateUrl, state, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((newState) => {
            this.log(`added state`);
            this.getState().subscribe();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addState')));
    }
    /** PUT: update the state on the server */
    updateState(state) {
        return this.http.put(this.stateUrl, state, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => {
            this.log(`updated state`);
            this.getState().subscribe();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateState')));
    }
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error);
            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    }
    /** Log a StateService message to the console */
    log(message) {
        console.log(`StateService: ${message}`);
    }
};
StateService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
StateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], StateService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");



let WinnerComponent = class WinnerComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
    }
    ngOnInit() {
    }
};
WinnerComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }
];
WinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-winner',
        template: __webpack_require__(/*! raw-loader!./winner.component.html */ "./node_modules/raw-loader/index.js!./src/app/winner/winner.component.html"),
        styles: [__webpack_require__(/*! ./winner.component.scss */ "./src/app/winner/winner.component.scss")]
    })
], WinnerComponent);



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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


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
//# sourceMappingURL=main-es2015.js.map