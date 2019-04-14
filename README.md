Udemy  REACT 16 - Maximilian Schwarzmuller
The Complete Guide (incl. React Router 4 & Redux) 2017 33h5m
============================================================
https://coursehunters.net/course/udemy-react16-complete-guide

https://firebase.google.com/
---------------------------
Firebase gives you functionality like analytics, databases, messaging
and crash reporting so you can move quickly and focus on your users.

-----------

FIREBASE RULES FOR WHEN AUTHENTICATION IMPLEMENTED

{
  /* Visit https://firebase.google.com/docs/database/security to learn more about security rules. */
  "rules": {
    "ingredients": {
      ".read": "true",
    	".write": "true",
    },
      "orders": {
        ".read": "auth !=null",
        ".write": "auth !=null"
      }
  }
}
----------------

169 SPINNERS
https://projects.lukehaas.me/css-loaders/
