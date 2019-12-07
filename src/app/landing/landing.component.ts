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
  isLoggedIn: string;
  isLoggedInBool: boolean;

  isMessageLogin = false;
  msg_login = '';
  isMessageRegister = false;
  msg_register = '';

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
    var api_error = null;
    this._apiService.login(this.loginModel).subscribe(
      data => {
        this.cookieService.set('login_token', data.message, 200, undefined, '.technex.in');
        this.cookieService.set('logged', 'true', 200, undefined, '.technex.in');
        this.isMessageLogin = true;
        this.msg_login = 'Login Successful. You will be redirected to your dashboard'; 
        window.location.href = 'https://dashboard.technex.in/';
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
    if (this.loginValidate()) {
      this.googleAnalyticsEventsService.eventEmitter("technexPage", "passwordLogin", "technex", 1);
      var self = this;
      firebase.auth().signInWithEmailAndPassword(
        this.login_email, this.login_password).catch(
          (error) => {
            console.log(error);
            self.isMessageLogin = true;
            self.msg_login = 'Invalid Credentials!!';
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

  title='register_college';

  colleges = [ 
    "	7 up air sqn ncc bhu varanasi	",
"	ABES Engineering College, Ghaziabad	",
"	AAA College Of Engineering & Technology	",
"	Aarvavart Institute of technology and management, Lucknow	",
"	ABV-IIITM, GWALIOR	",
"	Aditya institute of Technology, Madanapalle	",
"	agricultural college hassan, Bangalore	",
"	AISSMS, Pune	",
"	ARMY INSTITUTE OF TECHNOLOGY (AIT), PUNE	",
"	aitm, varanasi	",
"	Ajay Kumar Garg Engineering College, Ghaziabad	",
"	aks university, satna	",
"	Allen career institute, Kota	",
"	ambalika institute of management and technology, lucknow	",
"	Amity School of Engineering and Technology, Gwalior	",
"	Amity University, Rajasthan	",
"	Amity university, Madhya pradesh	",
"	Amrapali group of Instittute, Haldwani	",
"	Amravati engineering college	",
"	Amrita School of Engineering, Bangalore	",
"	anurag college of engineering and technology, hyderabad	",
"	ARAVALI COLLEGE OF ENGINEERING AND MANAGEMENT, FARIDABAD	",
"	Arena animation bhelupur, varanasi	",
"	Arya college of engineering & IT, Jaipur	",
"	Arya mahila pg college, Varanasi	",
"	Arya Mahila Post Graduate College, BHU	",
"	aryavart institute of technology and management, lucknow	",
"	Asansol engineering college	",
"	ASHOKA INSTITUTE OF TECHNOLOGY AND MANAGEMENT, VARANASI	",
"	Assam Engineering College, Guwahati	",
"	ASUTOSH COLLEGE, Kolkata	",
"	Azad institute of engineering and technology, Lucknow	",
"	B V Bhoomaraddi college of engineering and technology, Hubli	",
"	BTKIT Dwarahat, Kashipur	",
"	BBSBEC, FGS Sangrur	",
"	Bundelkhad Institute of Engineering and Technology (BIET), Jhansi	",
"	Babu Banarsi Das University (BBDU), Lucknow	",
"	Bagla degree college, Hathras	",
"	Ballari Institute of Technology and Management	",
"	Banaras Hindu University (BHU)	",
"	banasthali university	",
"	bangalore institute of technology	",
"	Bansal institute of science and technology, bhopal	",
"	Bareilly College	",
"	BBDEC, Lucknow	",
"	Babu Banarsi Das Institute of Technology (BBDIT)	",
"	Babu Banarasi Das National Institute of Technology & Management (BBDNITM)	",
"	BBSCET, Allahabad 	",
"	BCE, BHAGALPUR	",
"	Beant college of engineering and technology, Gurdaspur	",
"	Believers Church Caarmel Engineering College, Pathanamthitta	",
"	Bengal college engneering and technology, Durgapur	",
"	bhabha college of engineering, Kanpur	",
"	Bhagalpur college of engineering	",
"	Bharati Vidyapeeth college of engineering, Pune	",
"	Bharati Vidyapeeth college of engineering, Nihal Vihar	",
"	Bhaskaracharya college of applied science, Delhi	",
"	Bhilai Institute of Technology (BIT) , Durg	",
"	Bhubaneswar engineering college	",
"	bhundelkhand institute of engineering & technology, Jhansi	",
"	biet, Sikar	",
"	Bipin Chandra Tripathi Kumaon Engineering College, Haldwani	",
"	BIPIN TRIPATHI KUMAON INSTITUTE OF TECHNOLOGY, DWARAHAT (ALMORA)	",
"	Birla Institute of Technology and Science (BITS), Pilani	",
"	Birla Institute of Technology and Science (BITS), Pilani Goa	",
"	Birla Institute of Technology and Science (BITS), Pilani Hyderabad	",
"	BIRLA INSTITUTE OF TECHNOLOGY (BIT), MESRA Ranchi	",
"	Bhabha Institute of Technology (BIT), Kanpur	",
"	BIT Mesra (Patna Campus)	",
"	Bit Sindri Dhanbad	",
"	bml munjal university, Gurgaon	",
"	BMSIT, Bangalore	",
"	BRCM College of Engineering and Technology Bahal, Bhiwani	",
"	BSACET, Mathura	",
"	Buddha Institute Of Technology, Gorakhpur	",
"	Bundelkhand university, Jhansi	",
"	CMP Degree College, Allahabad	",
"	CTAE, Udaipur	",
"	CU SHAH COMMERCE COLLEGE, Ahmedabad 	",
"	C V RAMAN COLLEGE OF ENGINEERING (CVRCE), BHUBANESWAR	",
"	Cambridge Institute of Technology, Tatisilwai	",
"	ccet, bhilai	",
"	central university, bilaspur	",
"	Central University Of Punjab	",
"	Central university of south bihar	",
"	Centurion University Of Technology and Management, Bhubaneswar	",
"	Ch Devi Lal State Institute of Engineering & Technology	",
"	CHANDIGARH ENGINEERING COLLEGE	",
"	Chandigarh group of colleges	",
"	Chandigarh University	",
"	Chirala Enginnering College	",
"	Chitkara university	",
"	christ the king college, Jhansi	",
"	Christ University, Bangalore	",
"	Christian college of engineering and technology, bhilai	",
"	CIMAGE COLLEGE, Patna	",
"	Cmr technical campus, Hyderabad	",
"	Cochin university of science and technology	",
"	College of engineering, roorkee	",
"	CSIR-National Aerospace Laboratories	",
"	csit, durg	",
"	Cummins college of engineering for women, Pune	",
"	Cummins college of engineering for women, Nagpur	",
"	CVSR college of engineering, Hyderabad	",
"	DKTE's Textile and Engineering Institude, Ichalkaranji	",
"	DAV PG College, Varanasi	",
"	Dahanuakar college, Mumbai	",
"	Dayalbagh Educational Institute, Agra	",
"	Dayanada sagar college of engineering, Bangalore	",
"	Deen Dayal Upadhyaya College (DDUC), Delhi	",
"	Delhi Technological University (DTU)	",
"	Delhi technical campus	",
"	devpyag institute of technical studies	",
"	Dewan VS Institute of Engineering and Technology, Meerut	",
"	DIT UNIVERSITY, Dehradun	",
"	Dr B R Ambedkar  NIT Jalandhar	",
"	Dr B C Roy Engineering College, Durgapur	",
"	Dr Ram Manohar Lohia national law university, lucknow	",
"	Dronacharya college of engineering, Gurugram	",
"	Dr DY Patil Institute Of Engineering and Technology, Pune	",
"	dyal singh college, New Delhi	",
"	EWING CHRISTIAN COLLEGE, Allahabad	",
"	Faculty Of Commerce (FOC) BHU	",
"	Faculty of engineering (FET) agra college, agra	",
"	TEERTHANKAR MAHAVEER UNIVERSITY, MORADABAD	",
"	Faculty of management studies (FMS) BHU	",
"	Faculty of social science  (FSS) BHU	",
"	Feroze Gandhi Institute of Engineering & Technology, Raebareli	",
"	Mahatma Jyotiba Phule Rohilkhand University (MJPRU), Bareilly	",
"	G L Bajaj Institute of Technology & Management, Greater Noida	",
"	Govind Ballabh Pant Engineering College, Garhwal	",
"	Government Engineering College (GEC) Banda	",
"	g s b v laxmi nagar	",
"	G.S.Mandal's Maharshtra Institute of Technology, Aurangabad 	",
"	galgotia college of engineering and technology, Greater Noida	",
"	GALGOTIAS UNIVERSITY	",
"	gandhi engineering college, Bhubaneswar	",
"	Gandhi Institute for Education and Technology, Orissa	",
"	Gandhi Institute for Technological Advancement (GITA), Bhubaneswar	",
"	Gargi college, New Delhi	",
"	Gaurihar ploytechnic, satara	",
"	Gautam Buddha University (GBU), Noida	",
"	gaya college of engineering, gaya	",
"	Gayatri Vidya Parishad College of Engineering (A), Visakhapatnam	",
"	Government Engineering College (GEC) Sonbhadra	",
"	Gyan Ganga Institute of Technology & Sciences (GGITS), Jabalpur	",
"	GIET, Gunupur	",
"	Girijananda Institute of Management and Technology, Guwahati	",
"	Gitam University, Visakhapatnam	",
"	GLA University, Mathura	",
"	glorious academy, varanasi	",
"	GMR Institute of Technology, Razam	",
"	Greater Noida College of Technology	",
"	Goel Institute Of Technology And Management, Lucknow	",
"	Gourihar Polytechnic, Satara	",
"	Government Engineering College (GEC) Raipur	",
"	Government Engineering College (GEC) Nagpur	",
"	GOVERNMENT COLLEGE OF ENGINEERING AND LEATHER TECHNOLOGY, KOLKATA	",
"	Government college of engineering and technology, Bikaner	",
"	Government Engineering College (GEC) Aurangabad	",
"	Government College of Engineering Kalahandi, Bhawanipatna	",
"	Government Engineering College (GEC) Ajmer	",
"	Government Engineering College (GEC) Azamgarh	",
"	Government Engineering College (GEC) BHUJ-KACHCHH	",
"	Government Engineering College (GEC) Bikaner	",
"	Government Engineering College (GEC) Jagdalpur	",
"	Government Engineering College (GEC) Dahod	",
"	government Maharaja college, chhatarpur	",
"	Govt Polytechnic College, Nasrullagan	",
"	govt women engineering college (GWECA), ajmer	",
"	Graphic Era Hill University, Nainital	",
"	GRT Institute of Engineering and Technology, Chennai	",
"	guru ghasidas central university, bilaspur	",
"	Guru Nanak Dev Engineering College, Ludhiana	",
"	Gurukul institute of technology, Kota	",
"	Gurukul Vidyapeeth Institute of Engineering and Technology, ramnagar banur, patiala	",
"	Gurukula Kangri Viswavidalaya, Haridwar	",
"	GuruNanak Institute of Technology, Kolkata	",
"	Gyan Ganga College of Technology, Jabalpur	",
"	H R college, Mumbai	",
"	H N B Gharwal University, Srinagar	",
"	Haldia Institute of Technology	",
"	Harcourt Butler Technical University (HBTU), Kanpur	",
"	Heritage Institute of Technology, Kolkata	",
"	Hindustan college of science and technology, Agra	",
"	hindustan institute of technology and management, Agra	",
"	Hon. Shri Babanrao Pachpute Vichardhara Trust College of Engineering Kashti Ahmednagar	",
"	IIT (BHU) Varanasi	",
"	Institute of Engineering and Rural Technology (IERT), Allahabad	",
"	Institute of Engineering and Technology (IET), Lucknow	",
"	Institute of co-operative and corporate management,research and training (ICCMRT), Lucknow	",
"	IEC College of Engineering and Technology, Greater Noida	",
"	IES IPS ACADEMY, INDORE	",
"	IET Institute of Engineering & Technology, Alwar	",
"	IGNOU, Varanasi	",
"	IGNOU, Bhagalpur	",
"	IGNOU, Lucknow	",
"	Indian Institute of Engineering Science and Technology (IIEST), Shibpur	",
"	IIIT Allahabad	",
"	IIIT Kalyani	",
"	IIT (ISM) Dhanbad	",
"	IIT Roorkee	",
"	IMS Engineering College, Ghaziabad	",
"	Inderprastha Engineering College, Ghaziabad	",
"	IIT Delhi	",
"	IIT Madras	",
"	Indian Maritime university, kolkata	",
"	Indian Maritime university, chennai	",
"	Indira gandhi institute of technology, Sarang	",
"	Indus Institute of Technology and engineering (Indus University)	",
"	Institute of Engineering and Management, kolkata	",
"	Institute of technology and management (ITM) Gwalior	",
"	Institute of Technology, Guru Ghasidas University (ITGGU), Bilaspur	",
"	Integral University, Lucknow	",
"	INTERNATIONAL SCHOOL OF MANAGEMENT, PATNA	",
"	Invertis University, Bareilly	",
"	JS University, Shikohabad	",
"	JK Institute of Applied Physics and Technology, Allahabad	",
"	Jadavpur University, Kolkata	",
"	Jain University, Bangalore	",
"	Jaipur Engineering College and Research and centre (JECRC)	",
"	Jaipur institute of techology	",
"	jalpaiguri government engineering college	",
"	Jamia Millia Islamia, New Delhi	",
"	Jawaharlal College of Engineering and Technology, Ottapalam	",
"	JAWAHARLAL NEHRU ENGINEERING COLLEGE (JNEC), AURANGABAD	",
"	Jaypee University, Anoopshahr	",
"	J B Institute of Engineering and Technology, Hyderabad	",
"	Jeppiaar Engineering College, Chennai	",
"	Jetking Allahabad Learning Center	",
"	Jodhpur Institute of Engineering & Technology (JIET)	",
"	Jaypee Institute of Information Technology (JIIT), Noida	",
"	Jiwaji University, Gwalior	",
"	JK Lakshmipat University, Jaipur	",
"	college of agricultural engineering jnkvv jabalpur	",
"	jodhpur institute of engineering and technology	",
"	JP INSTITUTE OF ENGINEERING AND TECHNOLOGY, MEERUT	",
"	JSPM's Rajarshi Shahu College of Engineering, Pune	",
"	JSS Academy of Technical Education, Noida	",
"	JSS Academy of Technical Education, Bangalore	",
"	Jwala Devi Saraswati Vidya Mandir, Allahabad	",
"	K K Wagh Institute of Engineering Education & Research, Nashik	",
"	K.J. Somaiya Institute of Engineering and Information Technology, Sion	",
"	Kali charan nigam institute of technology, Banda	",
"	Kalindi college, Delhi	",
"	Kalinga Institute of Industrial Technology, Bhubaneswar	",
"	Kalyani Government Engineering College	",
"	Kamaraj College of Engineering & Technology, Virudhunagar	",
"	KAMLA NEHRU INSTITUTE OF TECHNOLOGY, SULTANPUR	",
"	kanpur institute of technology, kanpur	",
"	kashi institute of technology, Varanasi	",
"	KCMT College Bareilly	",
"	keshav memorial institute of technology, Hyderabad	",
"	KIET Group of Institutions, Ghaziabad	",
"	Kalinga Institute of Industrial Technology University (KIIT)	",
"	K L Polytechnic, Roorkee	",
"	Knowledge Institute of Technology, Salem	",
"	Kongu engineering college, Erode	",
"	Kota engineering college	",
"	Krishna Institute of Engineering and Technology, Ghaziabad	",
"	Kulbhushan college, Aurangabad	",
"	Kumaraguru college of technology, Coimbatore	",
"	Lakshmi Narain College of Technology (LNCT), Bhopal	",
"	LDC Institute of Technical Studies, Allahabad	",
"	Lingaya's University, Faridabad	",
"	logmieer, Nashik	",
"	Lok Nayak jai prakash institute of technology chhapra (saran)	",
"	Lords Institute of Engineering & Technology, Hyderabad	",
"	Lovely Professional University, Jalandhar	",
"	Lucknow institute of technology	",
"	Lucknow university	",
"	M S Ramaiah Institute of Technology, Bangalore	",
"	MBM Engineering college, Ratanada, Jodhpur	",
"	MAHATMA GANDHI KASHI VIDHYAPEETH (mgkvp), Varanasi	",
"	M.Kumarasamy College Of Engineering, Karur	",
"	MMTD College Ballia	",
"	MNNIT ALLAHABAD	",
"	Madan Mohan Malaviya University of Technology, Gorakhpur	",
"	MADANAPALEE INSTITUE OF TECHNOLOGY & SCIENCE	",
"	Madav institute, Gwalior	",
"	Madhav Institute of Technology and Science (MITS), Gwalior	",
"	Madras Institute of Technology, Chennai	",
"	Mahakal Institute of Technology, Ujjain	",
"	Mahamaya college of agricultural engineering and technology	",
"	Maharaja Agrasen Institute of Technology, New Delhi	",
"	Maharaja vijayaram gajapathiraj college of engineering, Vizianagaram	",
"	Maharana Pratap Engineering College, Kanpur	",
"	Maharashtra Institute of Technology, Pune	",
"	Maharishi markandeshwar Engineering college Mullana, Ambala	",
"	Maharishi Markandeshwar University, Ambala	",
"	Mahendra Engineering College, Mallasamudram 	",
"	Mahendra Institute of Technology, Mallasamudram	",
"	MAHILA MAHAVIDYALAYA (MMV)(BHU), Varanasi	",
"	Mahindra Ecole Centrale, Hyderabad	",
"	Malaviya National Institute of Technology, Jaipur	",
"	Maliba Pharmacy College, Surat	",
"	Manav Rachna College of Engineering, Faridabad	",
"	Mandsaur Institute of Technology	",
"	manikya lal verma textile and engineering college, Bhilwara	",
"	Manipal Institute of Technology (MIT), Manipal	",
"	Manipal University, Jaipur 	",
"	Maulana Azad National Institute of Technology (MANIT), Bhopal	",
"	MARINE ENGINEERING AND RESEARCH INSTITUTE, MUMBAI	",
"	Maulana Mukhtar Ahmad Nadvi Technical Campus, Nashik	",
"	Maya Academy of Advanced Cinematics, Kanpur	",
"	Dr mc saxena group of colleges, Lucknow	",
"	MCKV Institute of Engineering, Howrah	",
"	Medicaps university, Indore	",
"	meenakshi sundararajan engineering college, Chennai	",
"	Meerut Institute of Engineering & Technology	",
"	microtek institute of technology, Varanasi	",
"	Midnapore College (Autonomous)	",
"	MIT Academy of engineering, Pune	",
"	MIT MORADABAD	",
"	MM COLLEGE OF PHARMACY, Ambala	",
"	Madan Mohan Malviya University of Technology (MMMUT), Gorakhpur	",
"	MNM Jain Engineering College, Chennai	",
"	Mukesh Patel School of Technology Management and Engineering (MPSTME), Mumbai	",
"	Malla Reddy College of Engineering And Technology (MRCET), Hyderabad	",
"	MVN University, Palwal	",
"	Noida Institute of Engineering and Technology (NIET)	",
"	Nalanda College Biharsharif	",
"	National institute of fashion technology, Bhubaneswar	",
"	NATIONAL INSTITUTE OF FOUNDRY AND FORGE TECHNOLOGY, RANCHI	",
"	National institute of science and technology, berhampur	",
"	National Institute of Technology (NIT), Tiruchirappalli	",
"	National Institute of Technology (NIT), Uttarakhand	",
"	National Institute of Technology (NIT), Patna	",
"	National Institute of Technology (NIT), Agartala	",
"	National Institute of Technology (NIT), Raipur	",
"	National Institute of Technology (NIT), Rourkela	",
"	National Institute of Technology (NIT), Silchar	",
"	National Institute of Technology (NIT), Kurukshetra	",
"	National Institute of Technology (NIT), Srinagar	",
"	National Post Graduation College, Lucknow	",
"	National Power training Institute (NPTI), Durgapur	",
"	National Power training Institute (NPTI), New Delhi	",
"	NBN Sinhgad College of engineering, Solapur	",
"	Netaji subhash engineering college, Kolkata	",
"	New government engineering college, Raipur	",
"	New horizon college of enginering, Bangalore	",
"	NIFFT RANCHI	",
"	National Institute of Fashion Technology (NIFT), Mumbai	",
"	NIIT University, Neemrana	",
"	National Institute of Technology (NIT), Durgapur	",
"	National Institute of Technology (NIT), Jamshedpur	",
"	National Institute of Technology (NIT), Warangal	",
"	North Malabar Institute Of Technology Kasargod	",
"	Northern india engineering college, Delhi	",
"	NSHM College of Management and Technology, Kolkata	",
"	NSIT PATNA	",
"	O P JINDAL INSTITUTE OF TECHNOLOGY RAIGARH	",
"	om kothari institute of management and research, Kota	",
"	Oriental Institute Of Science and Technology, Bhopal	",
"	Oxford college of engineering and management, Rourkela	",
"	P E S COLLEGE OF ENGINEERING, AURANGABAD	",
"	P S N A college of engineering and technology, Mannargudi	",
"	PANDIT DEENDAYAL PETROLEUM UNIVERSITY, Gandhinagar	",
"	PARALA MAHARAJA GOVT. ENGG COLLEGE, berhampur	",
"	Patna College, Patna	",
"	Patna law college	",
"	Patna university	",
"	PEC University of Technology, Chandigarh	",
"	Periyar maniammai university, Thanjavur	",
"	Pannalal Girdharlal Dayanand Anglo Vedic College (PG DAV), New Delhi	",
"	Post Graduate College, Ghazipur	",
"	Pune Institute of Computer Technology (PICT)	",
"	Panipat Institute Of Engineering & Technology (PIET)	",
"	Pondicherry Engineering College	",
"	poornima college of engineering, Jaipur	",
"	Prestige Institute of Management, Gwalior	",
"	Prof Ram Meghe Institute of Technology & Research (PRMITR), Amravati	",
"	prrm engineering college, shahabad	",
"	Pranveer Singh Institute of Technology (PSIT), KANPUR	",
"	PSNA College of Engineering and Technology (PSNACET), Dindigul	",
"	Punjabi university, patiala	",
"	Shri Ramswaroop Memorial College of Engineering and Management, Lucknow	",
"	shri ramswaroop memorial university (SRMU), lucknow	",
"	Siddharth Institute of Engineering and Technology, Puttur	",
"	Siddhartha Institute of Technology and Sciences, Narapally	",
"	School of management sciences (SMS), varanasi	",
"	Sri Venkateshwara college of engineering, Chennai	",
"	Thakur College of Engineering & Technology, Mumbai	",
"	University of Engineering and Management, Kolkata	",
"	University of Petroleum and Energy Studies, Dehradun	",
"	Zakir Hussain College of Engineering & Technology, AMU	",
"	VNIT, Nagpur	",
"	united institute of technology, allahabad	",
"	Shri Ram Murti Smarak College of Engineering & Technology, Bareilly	",
"	Shri G.S Institute of Tech and Science Indore (SGSITS), Indore	",
"	Shaheed Rajguru College of Applied Sciences for Women, Delhi	",
"	Shambhunath institute of engineering and technology jhalwa, allahabad	",
"	SHEAT COLLEGE OF ENGINEERING AND MANAGEMENT, Babatpur	",
"	Pvg's COET, Pune	",
"	Quantum global campus, Roorkee	",
"	Quantum School of Technology, Roorkee	",
"	R.K.D.F IST , Bhopal	",
"	Raj Kumar Goel Institute of Technology (RKGIT), Ghaziabad.	",
"	R.M.K College Of Engineering and Technology, Chennai	",
"	Radharaman institute of technology and science, Bhopal	",
"	Radharaman college of  engineering, Eluru	",
"	Raghu engineering college, Vishakapatnam	",
"	Raghu institute of technology, Varanasi	",
"	Raipur institute of technology, Raipur	",
"	Rajalakshmi Engineering College, Chennai	",
"	Rajarshi School of Management & Technology, Varanasi	",
"	Rajarshi Shahu College Of engineering, Pune	",
"	Rajasthan Technical University (RTU), Kota	",
"	Rajdhani College, Delhi University (DU), Delhi 	",
"	Rajikiya Engineering College, Banda	",
"	Rajiv Gandhi Institute of Petroleum Technology, Rae Bareli	",
"	Ravenshaw Junior College, Cuttack	",
"	Rayat Bahra Institute of Engineering and Nanotechnology, Hoshiarpur	",
"	Rajkiya Engineering College, Azamgarh	",
"	Rajkiya Engineering College, Sonebhadra	",
"	Rungta College of Engineering and Technology(RCET), Bhilai	",
"	Government Engineering College(REVA GEC), Reva	",
"	RIMT Maharaja Agarasen Engineering College(RIMT MAEC), Mandi	",
"	Raipur Institute of Technology (RITEE CG), Raipur	",
"	RMK College of Engineering and Technology, Puduvoyal	",
"	Institute of Engineering & Technology, M.J.P. Rohilkhand University, Bareilly	",
"	RSR Rungta College of Engineering and Technology, Raipur	",
"	R V R & J C College of Engineering, Guntur	",
"	Shambhunath Institute of Engineering and Technology (SIET), Allahabad	",
"	S. R. Institute of Management & Technology (SRIMT), Lucknow	",
"	Sagar Institute Of Research Technology (SIRT), Bhopal	",
"	Saintgits College of Engineering, Kottaya	",
"	Sam Higginbottom University of Agriculture, Technology and Sciences (SHUATS)	",
"	Samrat Ashok Technological Institute (SATI), Vidisha	",
"	Sanatan Dharm Inter College, Varanasi	",
"	Sandip Institute of Technology and Research Center (SITRC), Nashik	",
"	Sangola College, Sangola	",
"	Saraswati college of engineering, Navi Mumbai	",
"	Sardar Vallabhbhai National Institute of Technology (SVNIT), Surat	",
"	Sathyabama University, Chennai	",
"	Satyasai Engineering College, Balasore	",
"	Shree Bhawani Niketan Institute of Technology and Management (SBNITM), Jaipur	",
"	School of Engineering & Technology, Vikram University, Ujjain	",
"	School of Engineering, CUSAT, Kochin	",
"	School of Management Sciences, Lucknow	",
"	School of Open Learning, DU, New Delhi	",
"	School of Planning and Architecture, Bhopal (SPA Bhopal)	",
"	Sri Chandrasekarendra Saraswathi Viswa Maha Vidyalaya (SCSVMV), Kancheepuram	",
"	Seth M. R. Jaipuria School, Lucknow	",
"	Sharda University, Delhi NCR	",
"	Shimon Nawaz Loan	",
"	Shiv Nadar University (SNU), Dadri	",
"	Shri Mata Vaishno Devi University(SMVDU), Katra, J&K	",
"	Shri Shankaracharya College of Engineering and Technology, Bhilai	",
"	Shri Shankaracharya Institute of Professional Management and Technology, Raipur	",
"	Shri Vaishnav Institute of Technology and Science (SVITS), Indore	",
"	Shyama Prasad Mukherji College (SPM), Delhi University (DU)	",
"	Siliguri Institute of Technology, Siliguri	",
"	Singhania University, Bangalore	",
"	Sinhgad College of Engineering, Pune	",
"	Sir C R Reddy College of Engineering, Eluru.	",
"	Sagar Institute Of Science Technology & Research (Sistec-R), Bhopal	",
"	St. Joseph's College of Engineering and Technology, Palai	",
"	Swami Keshvanand Institute of Technology Management (SKTM), Jaipur	",
"	Sant Longowal Institute of Engineering & Technology (SLIET), Longowal	",
"	Sri Manakula Vinayagar Engineering College (SMVEC), Puducherry	",
"	Sri Krishnadevaraya University College of Engineering and Technology, Anantapuramu	",
"	Somerville School, Noida	",
"	South City College, Kolkata	",
"	Sree Dattha Institute of Engineering and Science, Hyderabad	",
"	Sree Chitra Thirunal College of Engineering (SCT), Thiruvananthapuram	",
"	Sri Krishna College of Engineering and Technology, Coimbatore	",
"	SRM University, Kattankulathur, Chennai 	",
"	SRM University, NCR Campus	",
"	Shri Ram Murti Smarak Institutions (SRMS), Bareilly	",
"	SRNB Degree College, Hyderabad	",
"	Shri Sant Gadge Baba College of Engineering and Technology, Bhusawal	",
"	Shri Shankaracharya Institute of Professional Management and Technology (SSIPMT), Raipur	",
"	SSM Institute of Engineering and Technology (SSMIET), Dindigul	",
"	SSU, Meerut	",
"	Shri Siddhi Vinayak Institute of Technology (SSVIT), Bareilly	",
"	St. Xavier's Sr. Sec. School, Hardoi	",
"	Sunbeam School, Varuna, Varanasi	",
"	Sunder Deep Engineering College,Ghaziabad	",
"	Surendra Institute of Engineering & Management, Siliguri	",
"	Sri Venkateswara College of Engineering (SVCE), Chennai.	",
"	Shri Vaishnav Institute of Technology And Science (SVITS), Indore	",
"	Swami Harsewanand Public School, Varanasi	",
"	Techno India Banipur	",
"	Teerthanker Mahaveer University, Moradabad	",
"	Thangal Kunju Musaliar College of Engineering, Kollam	",
"	Federal Polytechnic, Ilaro	",
"	Thiagarajar College of Engineering	",
"	Tianjin Medical University	",
"	TKR College of Engineering and Technology, Hyderabad	",
"	Thakur Prasad Singh College (TPS), Patna	",
"	University Institute of Engineering and Technology, Kanpur	",
"	U.V.Patel College of Engineering	",
"	University Institute of Engineering and Technology, Panjab University	",
"	University Institute of Engineering & Technology (UIET),Kurukshetra	",
"	University Institute of Technology, Burdwan University (UIT BU), Burdwan	",
"	United College of Engineering and Research, Allahabad	",
"	United Institute of Management, Allahabad	",
"	Universal College of Engineering and Technology, Ahmedabad	",
"	University College of Engineering, Patiala	",
"	University College of Engineering, Kakinada	",
"	University of Lucknow	",
"	University School of Chemical Technology, Guru Gobind Singh Indraprastha University	",
"	Veer Bahadur Singh Purvanchal University (VBSPU), Jaunpur	",
"	University of Petroleum & Energy Studies(UPES), Dehradun	",
"	Uttar Pradesh Technical University (UPTU), Lucknow	",
"	Usha Mittal Institute of Technology, Mumbai	",
"	Vardhman College, Itarsi	",
"	Veer Surendra Sai University of Technology (VSSUT), Burla	",
"	Veltech Dr. RR & Dr. SR University, Chennai	",
"	Vellore Institute of Technology (VIT), Vellore	",
"	Vimal Jyothi Engineering College, Kannur	",
"	Vignan's University, Hyderabad	",
"	Vellore Institute of Technology (VIT), Chennai	",
"	Vivekanand Sr. Sec. School, Loharu	",
"	Veermata Jijabai Technological Institute (VJTI), Mumbai	",
"	Visvesvaraya Technological University (VTU), Bangalore	",
"	Walchand College of Engineering, Sangli	",
"	YMCA University of Science and Technology, Faridabad	",
"	Yoganandha Institute of Science and Technology	",
"	Amrita School of Engineering, Amritapuri	",
"	Amrita Vishwa Vidyapeetham (Amrita University), Amritapuri, Kollam, Kerala	",
"	Andhra Loyola College, Vijayawada	",
"	Andhra University, Visakhapatnam	",
"	Anil Neerukonda Institute of Technology and Sciences, Vishakhapatnam	",
"	Netaji subhash institute of technolgy (NSIT) , Delhi	",
"	BK Birla Institute of Engineering & Technology (BKBIET) , Pilani	",
"	University of Allahabad, Allahabad	",
"	Methodist College Of Engineering & Technology, Hyderabad	",
"	Lalit Narayan college of Business Management, muzaffarpur	",
"	MVJ COLLEGE OF ENGINEERING (MVJCE) , Bangalore	",
"	Sityog Institute Of Technology , Aurangabad	",
"	Rajasthan College of Engineering for Women (RCEW) , Jaipur	",
"	Central University of Jharkhand (CUJ) , Ranchi	",
"	University Of Engineering & Management (UEM) , Jaipur	",
"	Shri Ramswaroop Memorial Group Of Professional Colleges , Lucknow 	",
"	Bhilai Institute of Technology (BIT) , Raipur	",
"	IIT KANPUR	",
"	IIT KHARAGPUR	",
"	IIT INDORE	",
"	IIT Ropar	",
"	IIT Mandi	",
"	IIT Hyderabad	",
"	IIT Guwahati	",
"	IISER , Bhopal	",
"	Moradabad Institute of Technology (MIT) , Moradabad	",
"	IIMT Engineering College (127) , Meerut	",
"	University Institute of Engineering and Technology (UIET) , CSJM , Kanpur	",
"	Chhatrapati Shahu Ji Maharaj University (CSJMU) , Kanpur	",
"	Ramamanohar Lohia College Of Law (RMLCL) , Bangalore	",
"	Siddaganga Institute of Technology (SIT) , Bangalore	",
"	KLE S.Nijalingappa College , Bangalore	",
"	IIT Gandhinagar	",
"	GD Rungta College of Engineering and Technology (GDRCET) , Bhilai	",
"	Bharath university , Chennai	",
"	Thapar University , Patiala	",
"	Jai Prakash University (JP), Chapra	",
"	Assam Don Bosco University - Azara Campus , Guwahati	",
"	Babulal Tarabai Institute of Research and Technology (BTIRT), Sagar	",
"	Anand Engineering College (AEC) , Agra	",
"	PDM College of Engineering (PDMCE) , Bahadurgarh	",
"	Government Model Engineering College (MEC) , Kochi	",
"	International Institute of Information Technology (IIIT), Bhubaneswar	",
"	Ideal Institute of Technology , Ghaziabad	",
"	Delhi Institute of Tool Engineering , Delhi	",
"	National Institute of Technology (NIT) , Delhi	",
"	IGNOU , MUZZAFARPUR	",
"	IGNOU , Delhi	",
"	MBICEM GGSIPU , DELHI	",
"	Meghnad Saha Institute of Technology (MSIT) , Kolkata	",
"	future institute of engineering and technology (FutureIET) , Bareilly	",
"	Babasaheb Bhimrao Ambedkar University (BBAU) , Lucknow	",
"	DES's College of Engineering & Technology  (DESCOET), Dhamangaon	",
"	Amity University, Lucknow	",
"	Roorkee Engineering and Management Technology Institute , Roorkee	"


  ];

}

