# datafetcher
The requirement is to create a simple React JS application and a Node JS express server.
Node js will serve as backend for React js project.

## Overview of functionality:

You need to create a website that allows users to register and login to an application and
view a restaurant menu based on the preferences they set.

## Landing page functionality:

  When a user first comes to the site, they see a landing page. Landing page Says
  "Welcome to XYZ Restaurant. Please register to set your preferences.""
  On top right hand corner of the screen there will be 2 buttons - Login and Register.

## Register Functionality:

  New user will click on register button to register. Clicking on register button will
  show another page that will have a register form with following fields:

  User Name: username for the site login -> If username already exists, user will be shown error message that username already exists
             and they will have to provide another username
  Name: Input text field
  Password: Password input field
  Cuisine preference: Dropdown with following options -> Chinese, Italian, Baked Goods
  Email: Email id field with email validation to make sure user has entered an email following format user@domain.extension
         So user will not be allowed to enter something like xyz@1234 . Only emails like xyz@abc.com should be allowed.
  Register: Button that will store the user details in backend and their preference.

  Backend Register api:-
  Submitted user details will be stored server side in a global variable. If time permits see if you can add any database integration, if not,
  its ok to store user details in server side itself.

## Login functionality:

  When existing user clicks on login button, their username and password will be checked. If username exists, user will
  be taken to the menu page based on the preference they selected.

  If user selected Chinese then a menu will be displayed in the center of the page
  with items:

  Hakka Noodles.
  Fried Rice.
  Dumplings.

  If user selected Italian then a menu will be displayed in the center of the page
  with items:

  Pasta.
  Lasagne.
  Chips.

  If user selected Baked goods then a menu will be displayed in the center of the page
  with items:

  Pineapple pastry.
  Chocolate cake.
  Cookies.

  At top right hand side corner of Menu page there will be Logout button. Clicking logout button will take user back to landing page.

  Menu items will be stored server side along with user preferences so that as soon as user logs in we can determined their preference
  and get the correct menu.

## Logout functionality:
  As soon as user logs in, login button will be replaced with logout button. Clicking logout button will take the user to the landing page at starting state as
  described in "Landing page functionality".
