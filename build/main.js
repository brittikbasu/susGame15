webpackJsonp([0],{

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/how-to-play/how-to-play.module": [
		152
	],
	"../pages/next-game/next-game.module": [
		153
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 151;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowToPlayPageModule", function() { return HowToPlayPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__how_to_play__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HowToPlayPageModule = /** @class */ (function () {
    function HowToPlayPageModule() {
    }
    HowToPlayPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__how_to_play__["a" /* HowToPlayPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__how_to_play__["a" /* HowToPlayPage */]),
            ],
        })
    ], HowToPlayPageModule);
    return HowToPlayPageModule;
}());

//# sourceMappingURL=how-to-play.module.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NextGamePageModule", function() { return NextGamePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__next_game__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NextGamePageModule = /** @class */ (function () {
    function NextGamePageModule() {
    }
    NextGamePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__next_game__["a" /* NextGamePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__next_game__["a" /* NextGamePage */]),
            ],
        })
    ], NextGamePageModule);
    return NextGamePageModule;
}());

//# sourceMappingURL=next-game.module.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NextGamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NextGamePage = /** @class */ (function () {
    function NextGamePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NextGamePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NextGamePage');
    };
    NextGamePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-next-game',template:/*ion-inline-start:"/Users/brittikbasu/game15/src/pages/next-game/next-game.html"*/'<ion-content padding>\n<h1> Press Ctrl + R to replay game 15</h1>\n</ion-content>\n'/*ion-inline-end:"/Users/brittikbasu/game15/src/pages/next-game/next-game.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], NextGamePage);
    return NextGamePage;
}());

//# sourceMappingURL=next-game.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_how_to_play_how_to_play__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_next_game_next_game__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_how_to_play_how_to_play_module__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_next_game_next_game_module__ = __webpack_require__(153);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/how-to-play/how-to-play.module#HowToPlayPageModule', name: 'HowToPlayPage', segment: 'how-to-play', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/next-game/next-game.module#NextGamePageModule', name: 'NextGamePage', segment: 'next-game', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10__pages_how_to_play_how_to_play_module__["HowToPlayPageModule"],
                __WEBPACK_IMPORTED_MODULE_11__pages_next_game_next_game_module__["NextGamePageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_next_game_next_game__["a" /* NextGamePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_how_to_play_how_to_play__["a" /* HowToPlayPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/brittikbasu/game15/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n<link href="https://fonts.googleapis.com/css?family=Noto+Serif|Rubik:300,400,500,700,900" rel="stylesheet">'/*ion-inline-end:"/Users/brittikbasu/game15/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HowToPlayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HowToPlayPage = /** @class */ (function () {
    function HowToPlayPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pointsScored = navParams.get('passingPoints');
        if (this.pointsScored) {
            console.log("successfully caught the score" + this.pointsScored);
        }
        else {
            console.log("score didn't pass");
        }
    }
    HowToPlayPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HowToPlayPage');
    };
    HowToPlayPage.prototype.closeModal = function () {
        if (this.pointsScored) {
            // this.navCtrl.push(NextGamePage);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */], {
                'reset': true
            });
        }
        else {
            this.navCtrl.pop();
        }
    };
    HowToPlayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-how-to-play',template:/*ion-inline-start:"/Users/brittikbasu/game15/src/pages/how-to-play/how-to-play.html"*/'<ion-content padding (click)="closeModal()">\n  <div class="introModal" *ngIf="!pointsScored">\n    <img src="assets/imgs/Avatar_right_wrong.png">\n  </div>\n  <div *ngIf="pointsScored" text-center>\n  <div class="points" >\n    <div class="pointlabel">YOU GOT</div>\n    <div class="pointnos" style="font-weight: 500">{{pointsScored}}/<div style="font-weight: 300; display: inline">10</div>\n    </div>\n    <div class="pointlabel">POINTS!</div>\n  </div>\n    <button ion-button round icon-only style="margin: 0 auto">\n        <ion-icon name="md-arrow-round-forward"></ion-icon>\n      </button>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/brittikbasu/game15/src/pages/how-to-play/how-to-play.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HowToPlayPage);
    return HowToPlayPage;
}());

//# sourceMappingURL=how-to-play.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__how_to_play_how_to_play__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { NextGamePage } from '../next-game/next-game';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, modalCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.rightAnswer = false;
        this.wrongAnswer = false;
        this.statements = [{
                id: 1,
                statement: "Chemicals in containers need a label with specifications",
                right: true,
                display: 1,
                attempted: false
            },
            {
                id: 2,
                statement: "Wires need to be protected by plastic to insulate and prevent a shortcircuit",
                right: true,
                display: 1,
                attempted: false
            },
            {
                id: 3,
                statement: "The aisle width in a factory should be at least 44 inches",
                right: true,
                display: 1,
                attempted: false
            },
            {
                id: 4,
                statement: "Factory doors should be shut but not locked",
                right: true,
                display: 1,
                attempted: false
            },
            {
                id: 5,
                statement: "If fire, before running out, quickly get valuables",
                right: false,
                display: 1,
                attempted: false
            },
            {
                id: 6,
                statement: "If fire, it is not allowed to break the glass of the fire alarm",
                right: false,
                display: 1,
                attempted: false
            },
            {
                id: 7,
                statement: "A pull pin seal is a decoration for a fire extinguisher",
                right: false,
                display: 1,
                attempted: false
            },
            {
                id: 8,
                statement: "If there is a fire an elevator helps you getting out quickly",
                right: false,
                display: 1,
                attempted: false
            },
            {
                id: 9,
                statement: "Fire buckets should be empty to be filled in case of fire",
                right: false,
                display: 1,
                attempted: false
            },
        ];
        this.displayTotal = 9;
        this.points = 0;
        this.steps = [false, false, false, false, false, false, false, false, false];
        this.i = 0;
        this.j = 0;
        this.s = 0;
        this.count = 1;
        this.celebration = false;
        this.clicked = 0;
        this.firstTime = true;
        this.reset = navParams.get('reset');
    }
    HomePage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    HomePage.prototype.openModal = function () {
        var openModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__how_to_play_how_to_play__["a" /* HowToPlayPage */], {
            'passingPoints': this.points
        });
        openModal.present();
    };
    HomePage.prototype.ionViewWillEnter = function () {
        if (this.reset) {
            console.log("game has been reset");
        }
        else {
            console.log("new game (15) started");
            console.log(this.points);
            this.openModal();
        }
    };
    HomePage.prototype.displayTotalFn = function () {
        var nextQuestions = this.statements.filter(function (val) {
            return val.display == 1;
        });
        this.currentStatement = nextQuestions[Math.floor(Math.random() * nextQuestions.length)];
        if (this.currentStatement) {
            this.statement = this.currentStatement.statement;
        }
    };
    HomePage.prototype.upL = function () {
        if (this.i < 5) {
            this.steps[this.i] = true;
            console.log("on step" + (this.i));
            ++this.i;
        }
    };
    HomePage.prototype.upR = function () {
        if (this.j < 5) {
            this.steps[this.j] = true;
            console.log("on step" + (this.j));
            ++this.j;
        }
    };
    HomePage.prototype.up = function () {
        var _this = this;
        if (this.count == 9) {
            this.celebration = true;
            console.log("we're celebrating" + this.celebration);
            setTimeout(function () {
                _this.openModal();
            }, 3000);
        }
        else if (this.count % 2 == 0) {
            this.upL();
            this.count++;
        }
        else {
            this.upR();
            this.count++;
        }
    };
    HomePage.prototype.ionViewDidLoad = function () {
        this.displayTotalFn();
        console.log("FIRST statement is : " + this.currentStatement.statement);
    };
    HomePage.prototype.answerCheck = function () {
        var currentStatement = this.currentStatement;
        var statement = this.statements.find(function (val) {
            return val.id == currentStatement.id;
        });
        if (statement.right == this.thumb) {
            statement.display = 0;
            this.up();
            console.log("right answer");
            this.rightAnswer = true;
            if (!statement.attempted) {
                this.points++;
            }
            statement.attempted = true;
        }
        else {
            console.log(">>> wrong answer");
            this.wrongAnswer = true;
            statement.attempted = true;
        }
    };
    HomePage.prototype.audioVideo = function () {
        var _this = this;
        setTimeout(function () {
            _this.wrongAnswer = false;
            _this.rightAnswer = false;
        }, 1200);
    };
    // ====================== main() ================================================================ //
    HomePage.prototype.thumbClicked = function () {
        this.audioVideo();
        console.log("_______________________________________");
        console.log("count is " + this.count);
        console.log("ANSWERED : " + this.currentStatement.statement);
        this.answerCheck();
        this.displayTotalFn();
        console.log(this.statements);
        console.log("Points earned: " + this.points);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/brittikbasu/game15/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\nGame 15    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n    <div class="videoContainer">\n        <video autoplay loop class="fillWidth">\n            <source src="assets/videos/Up/MP4/Up.mp4" type="video/mp4" class="stageVideo" playbackRate = 0.5 />Your browser does not support the video tag. I suggest you upgrade your browser.\n            </video>\n    </div>\n  \n    <div id="overlayRight" *ngIf="rightAnswer" [ngClass]="{\'fadeIn\': rightAnswer}"></div>\n    <div id="overlayWrong" *ngIf="wrongAnswer" [ngClass]="{\'fadeIn\': wrongAnswer}"></div>\n    <div id="overlayCelebrate" *ngIf="celebration" [ngClass]="{\'fadeIn\': celebrate}"></div>\n\n  <div style="height:768px; width:1024px; margin: 0 auto;">\n    <div class="dots"></div>\n    <div class="game-name">\n      <h5>LET THEM REACH THE TOP AND MAKE THEM DANCE!</h5>\n    </div>\n    <div class="game">\n      <audio src="assets/sounds/Walk-In-The-Park.m4a" *ngIf="celebration" [autoplay]="celebration"></audio>\n\n      <audio src="assets/sounds/Success 2.m4a" *ngIf="rightAnswer" [autoplay]="rightAnswer"></audio>\n\n      <audio src="assets/sounds/Error 1.m4a" *ngIf="wrongAnswer" [autoplay]="wrongAnswer"></audio>\n\n\n\n\n      <div class="l0" *ngIf="i == 0 && !celebration"></div>\n      <div class="l1" *ngIf="i == 1 && !celebration"></div>\n      <div class="l2" *ngIf="i == 2 && !celebration"></div>\n      <div class="l3" *ngIf="i == 3 && !celebration"></div>\n      <div class="l4" *ngIf="i == 4 && !celebration"></div>\n      <div class="l5" *ngIf="i == 5 && !celebration"></div>\n\n      <div class="r0" *ngIf="j == 0 && !celebration"></div>\n      <div class="r1" *ngIf="j == 1 && !celebration"></div>\n      <div class="r2" *ngIf="j == 2 && !celebration"></div>\n      <div class="r3" *ngIf="j == 3 && !celebration"></div>\n      <div class="r4" *ngIf="j == 4 && !celebration"></div>\n      <div class="r5" *ngIf="j == 5 && !celebration"></div>\n\n\n\n\n      <div class="lr5" *ngIf="celebration" [ngClass]="{\'animated bounce infinite\': celebration}"></div>\n\n      <img class="stairs" src="assets/imgs/Illu-Sustify-stairs.png">\n    </div>\n\n\n    <div class="thumbs" *ngIf="!celebration">\n      <div class="leftThumb" (click)="this.thumb = true; thumbClicked();"></div>\n      <p>{{this.statement}}</p>\n      <div class="rightThumb" (click)="this.thumb = false; thumbClicked();"></div>\n\n    </div>\n\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/brittikbasu/game15/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _c || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map