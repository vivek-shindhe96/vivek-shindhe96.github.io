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
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ar_camera_view_ar_camera_view__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__path_navigation_path_navigation__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__three_js_example_three_js_example__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__location_helper_location_helper__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_location_tracker_location_tracker__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, locationTracker) {
        this.navCtrl = navCtrl;
        this.locationTracker = locationTracker;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.locationTracker.WSG84toECEF();
    };
    HomePage.prototype.openArCameraView = function () {
        console.log("Starting the Camera");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__ar_camera_view_ar_camera_view__["a" /* ArCameraViewPage */]);
    };
    HomePage.prototype.openPathNavPage = function () {
        console.log("Starting Navigation");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__path_navigation_path_navigation__["a" /* PathNavigationPage */]);
    };
    HomePage.prototype.openThreeJsPage = function () {
        console.log("Starting ThreeJS Animations");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__three_js_example_three_js_example__["a" /* ThreeJsExamplePage */]);
    };
    HomePage.prototype.openGeolocationPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__location_helper_location_helper__["a" /* LocationHelperPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/vivek/ionic_applications/Ionic_with_AR/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  The world is your oyster.\n  <button ion-button (click)="openArCameraView()">Detect Floor</button>\n  <button ion-button (click)="openPathNavPage()">WayPoint Navigation</button>\n  <button ion-button (click)="openThreeJsPage()">Three JS Example</button>\n  <button ion-button (click)="openGeolocationPage()">Geolocation Example</button>\n</ion-content>\n'/*ion-inline-end:"/home/vivek/ionic_applications/Ionic_with_AR/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__providers_location_tracker_location_tracker__["a" /* LocationTrackerProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArCameraViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera_preview__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ArCameraViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ArCameraViewPage = /** @class */ (function () {
    function ArCameraViewPage(navCtrl, navParams, cameraPreview) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cameraPreview = cameraPreview;
        this.cameraPreview.switchCamera();
        this.cameraPreivewOpts = {
            x: 0,
            y: 0,
            width: window.screen.width,
            height: window.screen.height,
            camera: 'rear',
            tapPhoto: true,
            previewDrag: true,
            toBack: true,
            alpha: 1
        };
    }
    ArCameraViewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ArCameraViewPage');
        this.cameraPreview.startCamera(this.cameraPreivewOpts).then(function (res) {
            console.log(res);
        }, function (err) {
            console.log(err);
        });
    };
    ArCameraViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ar-camera-view',template:/*ion-inline-start:"/home/vivek/ionic_applications/Ionic_with_AR/src/pages/ar-camera-view/ar-camera-view.html"*/'<!--\n  Generated template for the ArCameraViewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>arCameraView</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <iframe src="https://vivek-shindhe96.github.io/complete-folder/" allow="camera"></iframe>\n</ion-content>\n'/*ion-inline-end:"/home/vivek/ionic_applications/Ionic_with_AR/src/pages/ar-camera-view/ar-camera-view.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera_preview__["a" /* CameraPreview */]])
    ], ArCameraViewPage);
    return ArCameraViewPage;
}());

//# sourceMappingURL=ar-camera-view.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PathNavigationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera_preview__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PathNavigationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PathNavigationPage = /** @class */ (function () {
    function PathNavigationPage(navCtrl, navParams, cameraPreview) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cameraPreview = cameraPreview;
        this.cameraPreview.switchCamera();
        this.cameraPreivewOpts = {
            x: 0,
            y: 0,
            width: window.screen.width,
            height: window.screen.height,
            camera: 'rear',
            tapPhoto: true,
            previewDrag: true,
            toBack: true,
            alpha: 1
        };
    }
    PathNavigationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PathNavigationPage');
        this.cameraPreview.startCamera(this.cameraPreivewOpts).then(function (res) {
            console.log(res);
        }, function (err) {
            console.log(err);
        });
    };
    PathNavigationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-path-navigation',template:/*ion-inline-start:"/home/vivek/ionic_applications/Ionic_with_AR/src/pages/path-navigation/path-navigation.html"*/'<!--\n  Generated template for the PathNavigationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>pathNavigation</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n  <!-- <iframe src="https://vivek-shindhe96.github.io/index.html" allow="geolocation camera" ></iframe> -->\n</ion-content>\n'/*ion-inline-end:"/home/vivek/ionic_applications/Ionic_with_AR/src/pages/path-navigation/path-navigation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera_preview__["a" /* CameraPreview */]])
    ], PathNavigationPage);
    return PathNavigationPage;
}());

//# sourceMappingURL=path-navigation.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThreeJsExamplePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ThreeJsExamplePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ThreeJsExamplePage = /** @class */ (function () {
    function ThreeJsExamplePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ThreeJsExamplePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ThreeJsExamplePage');
        this.initialiseWebGLObjectAndEnvironment();
        this.renderAnimation();
    };
    ThreeJsExamplePage.prototype.initialiseWebGLObjectAndEnvironment = function () {
        // Reference the DOM element that the WebGL generated object
        // will be assigned to
        this._element = this.canvasEl.nativeElement;
        // Define a new ThreeJS scene
        this._scene = new __WEBPACK_IMPORTED_MODULE_2_three__["e" /* Scene */]();
        // Define a new ThreeJS camera from the following types:
        /*
           1. CubeCamera				(Creates 6 cameras - one for each face of a cube)
           2. OrthographicCamera		(Creates a camera using orthographic projection - object size stays constant
                         regardless of distance from the camera)
           3. PerspectiveCamera		(Creates a camera using perspective projection - most common projection type
                         for 3D rendering [designed to mimic the way the human eye sees])
           4. StereoCamera			(Dual PerspectiveCameras - used for 3D effects such as parallax barrier)
        */
        this._camera = new __WEBPACK_IMPORTED_MODULE_2_three__["d" /* PerspectiveCamera */](75, window.innerWidth / window.innerHeight, 0.1, 1000);
        // Define an object to manage display of ThreeJS scene
        this._renderer = new __WEBPACK_IMPORTED_MODULE_2_three__["f" /* WebGLRenderer */]();
        // Resizes the output canvas to match the supplied width/height parameters
        this._renderer.setSize(window.innerWidth, window.innerHeight);
        // Attach the canvas, where the renderer draws the scene, to the specified DOM element
        this._element.appendChild(this._renderer.domElement);
        // BoxGeometry class allows us to create a cube (with width, height and depth dimensions supplied as
        // parameters - default is 1 for these values)
        this._geometry = new __WEBPACK_IMPORTED_MODULE_2_three__["a" /* BoxGeometry */](1, 1, 1);
        // Define the material (and its appearance) for drawing the geometry to the scene
        this._material = new __WEBPACK_IMPORTED_MODULE_2_three__["c" /* MeshBasicMaterial */]({ color: 0xffffff, wireframe: true });
        // Use the Mesh class to define a polygon mesh based object with the supplied geometry and material objects
        this._cube = new __WEBPACK_IMPORTED_MODULE_2_three__["b" /* Mesh */](this._geometry, this._material);
        // Add the object to the scene
        this._scene.add(this._cube);
        // Define the depth position of the camera
        this._camera.position.z = 5;
    };
    /**
     * Define the animation properties for the WebGL object rendered in the DOM element, using the requestAnimationFrame
     * method to animate the object
     *
     * @private
     * @method animate
     * @return {none}
     */
    ThreeJsExamplePage.prototype._animate = function () {
        var _this = this;
        requestAnimationFrame(function () {
            _this._animate();
        });
        // Define rotation speeds on x and y axes - lower values means lower speeds
        this._cube.rotation.x += 0.015;
        this._cube.rotation.y += 0.015;
        // Render the scene (will be called using the requestAnimationFrame method to ensure the cube is constantly animated)
        this._renderer.render(this._scene, this._camera);
    };
    ;
    /**
     * Render the animation
     *
     * @public
     * @method _renderAnimation
     * @return {none}
     */
    ThreeJsExamplePage.prototype.renderAnimation = function () {
        //if (Detector.webgl)
        //{
        this._animate();
        /*}
        else {
           var warning = Detector.getWebGLErrorMessage();
           console.log(warning);
        }*/
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('domObj'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ThreeJsExamplePage.prototype, "canvasEl", void 0);
    ThreeJsExamplePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-three-js-example',template:/*ion-inline-start:"/home/vivek/ionic_applications/Ionic_with_AR/src/pages/three-js-example/three-js-example.html"*/'<!--\n  Generated template for the ThreeJsExamplePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>threeJsExample</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n  <div #domObj></div>\n</ion-content>\n'/*ion-inline-end:"/home/vivek/ionic_applications/Ionic_with_AR/src/pages/three-js-example/three-js-example.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], ThreeJsExamplePage);
    return ThreeJsExamplePage;
}());

//# sourceMappingURL=three-js-example.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationHelperPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the LocationHelperPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LocationHelperPage = /** @class */ (function () {
    function LocationHelperPage(navCtrl, navParams, geolocation, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.platform = platform;
        this.locations = [];
        this.result = "";
    }
    LocationHelperPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad LocationHelperPage');
        var constants = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };
        this.platform.ready().then(function (readySource) {
            _this.result = "Platform successfully loaded";
            _this.geolocation.getCurrentPosition(constants).then(function (resp) {
                _this.locations.push(resp.coords.latitude, resp.coords.longitude);
                console.log(resp.coords.latitude, resp.coords.longitude);
            }).catch(function (err) {
                console.log(err);
            });
        });
    };
    LocationHelperPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-location-helper',template:/*ion-inline-start:"/home/vivek/ionic_applications/Ionic_with_AR/src/pages/location-helper/location-helper.html"*/'<!--\n  Generated template for the LocationHelperPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>locationHelper</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n  <ion-label>{{result}}</ion-label>\n  <ion-label *ngFor="let location of locations">{{location}}</ion-label>\n</ion-content>\n'/*ion-inline-end:"/home/vivek/ionic_applications/Ionic_with_AR/src/pages/location-helper/location-helper.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */]])
    ], LocationHelperPage);
    return LocationHelperPage;
}());

//# sourceMappingURL=location-helper.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationTrackerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the LocationTrackerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var LocationTrackerProvider = /** @class */ (function () {
    function LocationTrackerProvider() {
        this.WGS84_A = 6378137.0;
        this.WGS84_E2 = 0.00669437999014;
        this.lat = 12.927526942392536;
        this.lng = 77.58609169388774;
        this.alt = 10;
        console.log('Hello LocationTrackerProvider Provider');
    }
    LocationTrackerProvider.prototype.WSG84toECEF = function () {
        var radLat = this.convertToRadians(this.lat);
        var radLng = this.convertToRadians(this.lng);
        console.log(radLat, radLng);
        var clat = Math.cos(radLat);
        var slat = Math.sin(radLat);
        var clon = Math.cos(radLng);
        var slon = Math.sin(radLng);
        var N = (this.WGS84_A / Math.sqrt(1.0 - this.WGS84_E2 * slat * slat));
        var x = ((N + this.alt) * clat * clon);
        var y = ((N + this.alt) * clat * slon);
        var z = ((N * (1.0 - this.WGS84_E2) + this.alt) * slat);
        var array = [];
    };
    LocationTrackerProvider.prototype.convertToRadians = function (coordinate) {
        var pi = Math.PI;
        return coordinate * (pi / 180);
    };
    LocationTrackerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LocationTrackerProvider);
    return LocationTrackerProvider;
}());

//# sourceMappingURL=location-tracker.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_ar_camera_view_ar_camera_view__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_path_navigation_path_navigation__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_three_js_example_three_js_example__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_location_helper_location_helper__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_camera_preview__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_background_geolocation__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_location_tracker_location_tracker__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











//native plugins




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_ar_camera_view_ar_camera_view__["a" /* ArCameraViewPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_path_navigation_path_navigation__["a" /* PathNavigationPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_three_js_example_three_js_example__["a" /* ThreeJsExamplePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_location_helper_location_helper__["a" /* LocationHelperPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_ar_camera_view_ar_camera_view__["a" /* ArCameraViewPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_path_navigation_path_navigation__["a" /* PathNavigationPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_three_js_example_three_js_example__["a" /* ThreeJsExamplePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_location_helper_location_helper__["a" /* LocationHelperPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_7__pages_ar_camera_view_ar_camera_view__["a" /* ArCameraViewPage */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_camera_preview__["a" /* CameraPreview */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__["a" /* Geolocation */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_background_geolocation__["a" /* BackgroundGeolocation */],
                __WEBPACK_IMPORTED_MODULE_14__providers_location_tracker_location_tracker__["a" /* LocationTrackerProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/vivek/ionic_applications/Ionic_with_AR/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/vivek/ionic_applications/Ionic_with_AR/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map