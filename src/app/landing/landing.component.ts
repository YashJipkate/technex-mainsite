import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { ApiService } from "../services/api.service";
import { ToastService } from "../services/toast.service";
import { Login } from "../utilities/login";
import { Register } from "../utilities/register";
import { CookieService } from 'ngx-cookie-service';

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

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})

export class LandingComponent implements OnInit {
  menuItems: any[];
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

  constructor(
    private _apiService: ApiService, private _toastService: ToastService,
    private cookieService: CookieService) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
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
  }

  login_user() {
    this._apiService.login(this.loginModel).subscribe(
      data => {
        this.cookieService.set('login_token', data.message);
        this.cookieService.set('logged', 'true');
        window.location.href = 'https://dashboard.technex.in/';
      }
    )
  }

  firebase_google_login() {
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
          this.login_user();
        },
        error => {
          api_error = error;
          try {
            if (api_error.error.non_field_errors[0] == "No such account exists") {
              this.register_using_google = true;
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
    firebase.auth().createUserWithEmailAndPassword(this.register_email, this.register_password1).catch(function(error) {
    });
    var user = firebase.auth().currentUser;
    if(user != null){
      var id_token = null;
      id_token = user.toJSON();
      id_token = id_token.stsTokenManager.accessToken;
      this.loginModel.id_token = id_token;
      var email_id = user.email;
      var emailVerified = user.emailVerified;
      if (emailVerified == false) {
        user.sendEmailVerification().then(function() {
          console.log("Email sent");
        }).catch(function(error) {});
      }
    }
  }

  register_google() {
    const registerModel = new Register(
      this.loginModel.id_token,
      this.register_firstname,
      this.register_lastname,
      Number(this.register_gender),
      Number(this.register_year),
      this.register_phone,
      this.register_college,
      this.register_city);
    // if (registerModel.password !== this.confirmPassword) {
    //   this._toastService.error_toast('Error', 'Passwords do not match!');
    //   this.confirmPassword = '';
    //   this.registerModel.password = '';
    //   return false;
    // }

    // if (this.registerModel.password.length < 6) {
    //   this._toastService.error_toast('Error', 'Password should be atleast 6 characters long');
    //   this.confirmPassword = '';
    //   this.registerModel.password = '';
    //   return false;
    // }

    // const is_num_pin_code = /^\d+$/.test(this.pinCode_string);

    // if (!is_num_pin_code) {
    //   this._toastService.error_toast('Error', 'Pincode should be a number');
    //   return false;
    // } else {
    //   this.registerModel.pinCode = Number(this.pinCode_string);
    // }

    // const isnum_mobile_number = /^\d+$/.test(this.registerModel.mobile_number);
    // const isnum_whatsapp_number = /^\d+$/.test(this.registerModel.whatsapp_number);

    // if (!isnum_mobile_number || !isnum_whatsapp_number) {
    //   this._toastService.error_toast('Error', 'Enter a valid contact no.');
    //   return false;
    // }

    // if (this.registerModel.mobile_number.length !== 10 ||
    //   this.registerModel.whatsapp_number.length !== 10) {
    //   this._toastService.error_toast('Error', 'Mobile no. should have 10 digits');
    //   return false;
    // }

    // return true;
    this._apiService.register(registerModel).subscribe(
      data => {
        this.login_user();
      }
    )
  }

  register_password() {
    // TODO: Add validation here
    this.firebase_password_register();
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
      data => {},
      error => {
      }
    )
  }

  password_login() {
    firebase.auth().signInWithEmailAndPassword(
      this.login_email, this.login_password).catch((error) => {});
    const user = firebase.auth().currentUser;
    if(user != null){
      let id_token = null;
      id_token = user.toJSON();
      id_token = id_token.stsTokenManager.accessToken;
      this.loginModel.id_token = id_token;
    }
    this.login_user();
  }

  register() {
    if (this.register_using_google === true) {
      this.register_google();
    } else {
      this.register_password();
    }
  }
}
