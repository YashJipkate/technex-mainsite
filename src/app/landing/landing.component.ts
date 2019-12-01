import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { ApiService } from "../services/api.service";
import { ToastService } from "../services/toast.service";
import { Login } from "../utilities/login";
import { Register } from "../utilities/register";

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

  constructor(private _apiService: ApiService, private _toastService: ToastService) { }

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

  // TODO - Add email-password authentication functions

  login_user() {
    this._apiService.login(this.loginModel).subscribe(
      data => {
        console.log(data);
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

  register_google() {
    // TODO: Add validation here
    var registerModel = new Register(this.loginModel.id_token,this.register_firstname,this.register_lastname,Number(this.register_gender),Number(this.register_year),this.register_phone,this.register_college,this.register_city);
    this._apiService.register(registerModel).subscribe(
      data => {
        this.login_user();
      }
    )
  }

  register_password() {
    console.log("Password Registration");
  }

  register() {
    if (this.register_using_google == true) {
      this.register_google();
    } else {
      this.register_password();
    }
  }
}
