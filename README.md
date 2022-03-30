# Password Generator

<img src="https://github.com/BrijenMakwana/PasswordGenerator/blob/main/images/icon_PG.png" width="200" height="200" style="border-radius:50px;">

Access this site at [best-password-generator.vercel](https://best-password-generator.vercel.app)

## Table of Content:

- [About The App](#about-the-app)
- [Screenshots](#screenshots)
- [Technologies](#technologies-and-tools)
- [Setup](#setup)
- [Approach](#approach)

## About The App

This project will help you to create a strog password that is not easy to crack. It's created with pure HTML and Javascript. You can add inputs like length of the password, whether to include Uppercase, Number or Symbols, you can also specify the rules like minimum Uppercase or Numbers it should have. After that it will generate a strong password according to your inputs and it will be copied to your clipboard automatically.

## Screenshots

![App Screenshot](https://github.com/BrijenMakwana/PasswordGenerator/blob/main/images/screenshot_1.png)
![App Screenshot](https://github.com/BrijenMakwana/PasswordGenerator/blob/main/images/screenshot_2.png)
![App Screenshot](https://github.com/BrijenMakwana/PasswordGenerator/blob/main/images/screenshot_3.png)

## Technologies and Tools

- HTML
- CSS
- Javascript

## Setup

1. Download or clone the repository

2. Open ```index.html``` file in your browser.

## Approach

- I have created this password generator entirely with pure HTML and Vanilla Javascript. I have created all the fields using form.
- It uses ```String.fromCharCode()``` function to get all possible characters. Then based on user input, characters will be store to password variable.
- ```navigator.clipboard.writeText()``` function is used to copy generated password into clipboard.


