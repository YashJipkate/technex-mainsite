import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { ApiService } from "../services/api.service";
import { ToastService } from "../services/toast.service";
import { Login } from "../utilities/login";
import { Register } from "../utilities/register";
import { CookieService } from 'ngx-cookie-service';
import {GoogleAnalyticsEventsService} from "../services/google-analytics-events.service";
import * as collegeList from '../../assets/college_list.json';
<<<<<<< HEAD
import { $ } from 'protractor';
declare var jQuery: any;
=======
>>>>>>> 83da7b66c55178f72928030ab7a7788444765ad1

declare interface RouteInfo {
  path: string;
  title: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: 'sponsors',
    title: 'Sponsors',
    class: ''
  },
];

export const TEAMROUTES: RouteInfo[] = [
  {
    path: 'teampage',
    title: 'Team-Page',
    class: ''
  },
];

export const HEADOUTROUTES: RouteInfo[] = [
  {
    path: 'headout',
    title: 'Headout',
    class: ''
  },
];

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})

export class LandingComponent implements OnInit {
  menuItems: any[];
  teammenuItems: any[];
  headoutmenuItems: any[];
  is_login = true;
  register_using_google = false;
  loginModel = new Login('');
  register_email = '';
  register_firstname = '';
  register_lastname = '';
  register_password1 = '';
  register_password2 = '';
  register_college = '';
  register_city = '';
  register_phone = '';
  register_gender = 0;
  register_year = 1;

  login_email = '';
  login_password = '';
  isLoggedIn: string;
  isLoggedInBool: boolean;

  isMessageLogin = false;
  msg_login = '';
  isMessageRegister = false;
  msg_register = '';

  college_list: any = (collegeList as any).default;

  constructor(
    private _apiService: ApiService, private _toastService: ToastService,
    private cookieService: CookieService,
    public googleAnalyticsEventsService: GoogleAnalyticsEventsService) {
      this.isLoggedIn = this.cookieService.get('logged');
      if (this.isLoggedIn === 'true') {
        this.isLoggedInBool = true;
      } else {
        this.isLoggedInBool = false;
      }
    }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.teammenuItems = TEAMROUTES.filter(teammenuItemm => teammenuItemm);
    this.headoutmenuItems = HEADOUTROUTES.filter(headoutmenuItemm => headoutmenuItemm);
    const firebaseConfig = {
      apiKey: "AIzaSyBPlZ_NSEcmD9ZjwcdroTzpSTFXOAvRbkM",
      authDomain: "technex2020.firebaseapp.com",
      databaseURL: "https://technex2020.firebaseio.com",
      projectId: "technex2020",
      storageBucket: "technex2020.appspot.com",
      messagingSenderId: "267724660104",
      appId: "1:267724660104:web:720bddd5e1599a00602e3d",
      measurementId: "G-BPPJCTCVT6"
    };
    firebase.initializeApp(firebaseConfig);
<<<<<<< HEAD
    if (window.location.pathname == "/"){
      console.log(window.scrollX);
      document.getElementById("custom-landing").setAttribute("style", "position: relative; top: 100vh;background-color: rgba(28, 25, 25, 0.2); z-index: 10;")
    }
    if( window.innerWidth < 600 ){
      //document.getElementById("custom-landing").setAttribute("style", "display: none;");
      document.getElementById('fp').setAttribute("style", "top: 0px;");
    }

    

    var canvas = <HTMLCanvasElement> document.getElementById('nokey'),
    can_w = parseInt(canvas.getAttribute('width')),
    can_h = parseInt(canvas.getAttribute('height')),
    ctx = canvas.getContext('2d');
// console.log(typeof can_w);

var ball = {
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      r: 0,
      alpha: 1,
      phase: 0
   },
   ball_color = {
       r: 207,
       g: 255,
       b: 4
   },
   R = 2,
   balls = [],
   alpha_f = 0.03,
   alpha_phase = 0,
    
// Line
   link_line_width = 0.8,
   dis_limit = 260,
   add_mouse_point = true,
   mouse_in = false,
   mouse_ball = {
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      r: 0,
      type: 'mouse'
   };

// Random speed
function getRandomSpeed(pos){
    var  min = -1,
       max = 1;
    switch(pos){
        case 'top':
            return [randomNumFrom(min, max), randomNumFrom(0.1, max)];
            break;
        case 'right':
            return [randomNumFrom(min, -0.1), randomNumFrom(min, max)];
            break;
        case 'bottom':
            return [randomNumFrom(min, max), randomNumFrom(min, -0.1)];
            break;
        case 'left':
            return [randomNumFrom(0.1, max), randomNumFrom(min, max)];
            break;
        default:
            return;
            break;
    }
}
function randomArrayItem(arr){
    return arr[Math.floor(Math.random() * arr.length)];
}
function randomNumFrom(min, max){
    return Math.random()*(max - min) + min;
}
console.log(randomNumFrom(0, 10));
// Random Ball
function getRandomBall(){
    var pos = randomArrayItem(['top','top','bottom','left','right','top'  ]);
    switch(pos){
        case 'top':
            return {
                x: randomSidePos(can_w),
                y: -R,
                vx: getRandomSpeed('top')[0],
                vy: getRandomSpeed('top')[1],
                r: R,
                alpha: 1,
                phase: randomNumFrom(0, 10)
            }
            break;
        case 'right':
            return {
                x: can_w + R,
                y: randomSidePos(can_h),
                vx: getRandomSpeed('right')[0],
                vy: getRandomSpeed('right')[1],
                r: R,
                alpha: 1,
                phase: randomNumFrom(0, 10)
            }
            break;
        case 'bottom':
            return {
                x: randomSidePos(can_w),
                y: can_h + R,
                vx: getRandomSpeed('bottom')[0],
                vy: getRandomSpeed('bottom')[1],
                r: R,
                alpha: 1,
                phase: randomNumFrom(0, 10)
            }
            break;
        case 'left':
            return {
                x: -R,
                y: randomSidePos(can_h),
                vx: getRandomSpeed('left')[0],
                vy: getRandomSpeed('left')[1],
                r: R,
                alpha: 1,
                phase: randomNumFrom(0, 10)
            }
            break;
    }
}
function randomSidePos(length){
    return Math.ceil(Math.random() * length);
}

// Draw Ball
function renderBalls(){
    Array.prototype.forEach.call(balls, function(b){
       if(!b.hasOwnProperty('type')){
           ctx.fillStyle = 'rgba('+ball_color.r+','+ball_color.g+','+ball_color.b+','+b.alpha+')';
           ctx.beginPath();
           ctx.arc(b.x, b.y, R, 0, Math.PI*2, true);
           ctx.closePath();
           ctx.fill();
       }
    });
}

// Update balls
function updateBalls(){
    var new_balls = [];
    Array.prototype.forEach.call(balls, function(b){
        b.x += b.vx;
        b.y += b.vy;
        
        if(b.x > -(50) && b.x < (can_w+50) && b.y > -(50) && b.y < (can_h+50)){
           new_balls.push(b);
        }
        
        // alpha change
        b.phase += alpha_f;
        b.alpha = Math.abs(Math.cos(b.phase));
        // console.log(b.alpha);
    });
    
    balls = new_balls.slice(0);
}

// loop alpha
function loopAlphaInf(){
    
}

// Draw lines
function renderLines(){
    var fraction, alpha;
    for (var i = 0; i < balls.length; i++) {
        for (var j = i + 1; j < balls.length; j++) {
           
           fraction = getDisOf(balls[i], balls[j]) / dis_limit;
            
           if(fraction < 1){
               alpha = (1 - fraction).toString();

               ctx.strokeStyle = 'rgba(150,150,150,'+alpha+')';
               ctx.lineWidth = link_line_width;
               
               ctx.beginPath();
               ctx.moveTo(balls[i].x, balls[i].y);
               ctx.lineTo(balls[j].x, balls[j].y);
               ctx.stroke();
               ctx.closePath();
           }
        }
    }
}

// calculate distance between two points
function getDisOf(b1, b2){
    var  delta_x = Math.abs(b1.x - b2.x),
       delta_y = Math.abs(b1.y - b2.y);
    
    return Math.sqrt(delta_x*delta_x + delta_y*delta_y);
}

// add balls if there a little balls
function addBallIfy(){
    if(balls.length < 50){
        balls.push(getRandomBall());
    }
}

// Render
function render(){
    ctx.clearRect(0, 0, can_w, can_h);
    
    renderBalls();
    
    renderLines();
    
    updateBalls();
    
    addBallIfy();
    
    window.requestAnimationFrame(render);
}

// Init Balls
function initBalls(num){
    for(var i = 1; i <= num; i++){
        balls.push({
            x: randomSidePos(can_w),
            y: randomSidePos(can_h),
            vx: getRandomSpeed('top')[0],
            vy: getRandomSpeed('top')[1],
            r: R,
            alpha: 1,
            phase: randomNumFrom(0, 10)
        });
    }
}
// Init Canvas
function initCanvas(){
    canvas.setAttribute('width', window.innerWidth.toString() );
    canvas.setAttribute('height', window.innerHeight.toString() );
    
    can_w = parseInt(canvas.getAttribute('width'));
    can_h = parseInt(canvas.getAttribute('height'));
}
window.addEventListener('resize', function(e){
    console.log('Window Resize...');
    initCanvas();
});

function goMovie(){
    initCanvas();
    initBalls(50);
    window.requestAnimationFrame(render);
}
goMovie();

// Mouse effect
canvas.addEventListener('mouseenter', function(){
    console.log('mouseenter');
    mouse_in = true;
    balls.push(mouse_ball);
});
canvas.addEventListener('mouseleave', function(){
    console.log('mouseleave');
    mouse_in = false;
    var new_balls = [];
    Array.prototype.forEach.call(balls, function(b){
        if(!b.hasOwnProperty('type')){
            new_balls.push(b);
        }
    });
    balls = new_balls.slice(0);
});
canvas.addEventListener('mousemove', function(e){
    var e = e || <MouseEvent> window.event;
    mouse_ball.x = e.pageX;
    mouse_ball.y = e.pageY;
    // console.log(mouse_ball);
});













=======
>>>>>>> 83da7b66c55178f72928030ab7a7788444765ad1
  }

  toggle_is_login() {
    this.is_login = !this.is_login;
  }

  firebase_resend_verification_email() {
    firebase.auth().signOut().then(function() {
    }).catch(function(error) {
      console.log(error);
    });
    if (this.loginValidate()) {
      this.googleAnalyticsEventsService.eventEmitter("technexPage", "resendVerificationEmail", "technex", 1);
      var self = this;
      firebase.auth().signInWithEmailAndPassword(
        this.login_email, this.login_password).catch(
          (error) => {
            console.log(error);
            self.isMessageLogin = true;
            self.msg_login = 'Invalid Credentials!!';
            if (error.code == "auth/too-many-requests") {
              self.msg_login = error.message;
            }
        });
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          var user = firebase.auth().currentUser;
          console.log(user);
          if(user != null){
            user.sendEmailVerification().then(function() {
              self.msg_login = 'Verification Email has been resent to your email address.';
            }).catch(function(error) {
              console.log(error);
            });
          }
          else {
            self.isMessageLogin = true;
            self.msg_login = 'Invalid credentials!';
          }
        }
      })
    }
  }

  firebase_reset_password() {
    firebase.auth().signOut().then(function() {
    }).catch(function(error) {
      console.log(error);
    });
    this.googleAnalyticsEventsService.eventEmitter("technexPage", "resetPassword", "technex", 1);
    var self = this;
    firebase.auth().sendPasswordResetEmail(this.login_email).then(function() {
      self.msg_login = 'Password Reset email has been sent to your email address.';
    }).catch(function(error) {
      if (error.message) {
        self.msg_login = error.message;
      }
      console.log(error);
    });
  }

  login_user() {
    var api_error = null;
    this._apiService.login(this.loginModel).subscribe(
      data => {
        this.cookieService.set('login_token', data.message, 200, undefined, '.technex.co.in');
        this.cookieService.set('logged', 'true', 200, undefined, '.technex.co.in');
        this.isMessageLogin = true;
        this.msg_login = 'Login Successful. You will be redirected to your dashboard'; 
        window.location.href = 'https://dashboard.technex.co.in/';
      },
      error => {
        console.log(error);
        api_error = error;
        try {
          if (api_error.error.non_field_errors[0] == "No such account exists") {
            this.isMessageLogin = true;
            this.msg_login = 'No such account exists. Please register!'; 
          }
          else if (api_error.error.non_field_errors[0] == "Email is not verified") {
            this.isMessageLogin = true;
            this.msg_login = 'Email is not verified!';
          }
        } catch(err) {
          this.isMessageLogin = true;
          this.msg_login = 'Please fill all the fields correctly';
        }
      }
    );
  }

  firebase_google_login() {
    firebase.auth().signOut().then(function() {
    }).catch(function(error) {
      console.log(error);
    });
    var provider = new firebase.auth.GoogleAuthProvider();
    var api_error = null;

    firebase.auth().signInWithPopup(provider).then(function(result) {
      var id_token = null;
      var user = result.user;
      id_token = user.toJSON();
      id_token = id_token.stsTokenManager.accessToken;
      this.loginModel.id_token = id_token;
      this._apiService.login(this.loginModel).subscribe(
        data => {
          this.googleAnalyticsEventsService.eventEmitter("technexPage", "googleLogin", "technex", 1);
          this.login_user();
        },
        error => {
          api_error = error;
          try {
            if (api_error.error.non_field_errors[0] == "No such account exists") {
              this.register_using_google = true;
              this.is_login = false;
              this.register_email = user.email;
            }
          } catch (err) {}
        }
      );
    }.bind(this)
    ).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
    });
  }

  firebase_password_register() {
    var api_error = null;
    this.isMessageRegister = false;
    this.msg_register = '';
    firebase.auth().createUserWithEmailAndPassword(this.register_email, this.register_password1).catch(function(error) {
      this.isMessageRegister = true;
      this.msg_register = 'You are already registered';
    }.bind(this));
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        var id_token = null;
        id_token = user.toJSON();  
        id_token = id_token.stsTokenManager.accessToken;
        this.loginModel.id_token = id_token;
        const registerModel = new Register(
          this.loginModel.id_token,
          this.register_firstname,
          this.register_lastname,
          Number(this.register_gender),
          Number(this.register_year),
          this.register_phone,
          this.register_college,
          this.register_city);
        this._apiService.register(registerModel).subscribe(
          data => {
            user.sendEmailVerification().then(function() {}).catch(function(error){console.log(error);});
            this.isMessageRegister = true;
            this.msg_register = 'Successfully registered! Please verify your email by clicking on the link sent to your email address.';
            this.register_email = '';
            this.register_firstname = '';
            this.register_lastname = '';
            this.register_password1 = '';
            this.register_password2 = '';
            this.register_college = '';
            this.register_city = '';
            this.register_phone = '';
            this.register_gender = 0;
            this.register_year = 1;
          },
          error => {
            console.log(error);
            api_error = error;
            try {
              if (api_error.error[0] == "User already exists") {
                this.isMessageRegister = true;
                this.msg_register = 'You are already registered';
              }
            } catch(err) {
              this.isMessageRegister = true;
              this.msg_register = 'Please fill all the fields correctly';
            }
          }
        )
      }
    }.bind(this)
    );
    firebase.auth().signOut().then(function() {
    }).catch(function(error) {
      console.log(error);
    });
    
  }

  register_google() {
    var api_error = null;
    const registerModel = new Register(
      this.loginModel.id_token,
      this.register_firstname,
      this.register_lastname,
      Number(this.register_gender),
      Number(this.register_year),
      this.register_phone,
      this.register_college,
      this.register_city);
    this._apiService.register(registerModel).subscribe(
      data => {
        this.login_user();
      },
      error => {
        api_error = error;
        console.log(error);
        try {
          if (api_error.error.non_field_errors[0] == "User already exists") {
            this.isMessageRegister = true;
            this.msg_register = 'User already exists';
          }
        } catch(err) {
          this.isMessageRegister = true;
          this.msg_register = 'Please fill all the fields correctly';
        }
      }
    )
  }

  register_password() {
    var api_error = null;
    this.firebase_password_register();
  }

  password_login() {
    firebase.auth().signOut().then(function() {
    }).catch(function(error) {
      console.log(error);
    });
    if (this.loginValidate()) {
      this.googleAnalyticsEventsService.eventEmitter("technexPage", "passwordLogin", "technex", 1);
      var self = this;
      firebase.auth().signInWithEmailAndPassword(
        this.login_email, this.login_password).catch(
          (error) => {
            console.log(error);
            self.isMessageLogin = true;
            self.msg_login = 'Invalid Credentials!!';
            if (error.code == "auth/too-many-requests") {
              self.msg_login = error.message;
            }
        });
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          var user = firebase.auth().currentUser;
          console.log(user);
          if(user != null){
            let id_token = null;
            id_token = user.toJSON();
            id_token = id_token.stsTokenManager.accessToken;
            self.loginModel.id_token = id_token;
            self.login_user();
          }
          else {
            self.isMessageLogin = true;
            self.msg_login = 'Invalid credentials!';
          }
        }
      })
    }
  }

  emailValidate(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  }

  loginValidate() {
    if (this.login_email === '' || this.login_password === '') {
      this.isMessageLogin = true;
      this.msg_login = 'Please fill all the fields';
      return false;
    }
    if (!this.emailValidate(this.login_email)) {
      this.isMessageLogin = true;
      this.msg_login = 'Please enter a valid email address';
      return false;
    }
    return true;
  }

  registerValidate() {
    if (!this.emailValidate(this.register_email)) {
      this.isMessageRegister = true;
      this.msg_register = 'Please enter a valid email address';
      return false;
    }
    if (this.register_using_google == false) {
      if (this.register_password1.length < 6) {
        this.isMessageRegister = true;
        this.msg_register = 'Password should be atleast 6 characters long';
        this.register_password1 = '';
        this.register_password2 = '';
        return false;
      }
      if (this.register_password1 !== this.register_password2) {
        this.isMessageRegister = true;
        this.msg_register = 'Passwords do not match!';
        this.register_password1 = '';
        this.register_password2 = '';
        return false;
      }
    }
    if (this.register_firstname == '') {
      this.isMessageRegister = true;
      this.msg_register = 'First Name is mandatory';
      return false;
    }
    if (this.register_phone.length !== 10) {
      this.isMessageRegister = true;
      this.msg_register = 'Phone number should have 10 digits';
      return false;
    }
    const isnum_phone = /^\d+$/.test(this.register_phone);
    if (!isnum_phone) {
      this.isMessageRegister = true;
      this.msg_register = 'Enter a valid phone number';
      return false;
    }
    if (this.register_college == '') {
      this.isMessageRegister = true;
      this.msg_register = 'Please enter your college name';
      return false;
    }
    if (this.register_city == '') {
      this.isMessageRegister = true;
      this.msg_register = 'Please enter your city name';
      return false;
    }
    this.isMessageRegister = false;
    this.msg_register = '';

    return true;
  }

  register() {
    firebase.auth().signOut().then(function() {
    }).catch(function(error) {
      console.log(error);
    });
    if (this.registerValidate()) {
      if (this.register_using_google === true) {
        this.googleAnalyticsEventsService.eventEmitter("technexPage", "googleRegister", "technex", 1);
        this.register_google();
      } else {
        this.googleAnalyticsEventsService.eventEmitter("technexPage", "passwordRegister", "technex", 1);
        this.register_password();
      }
    }
  }
}
