## description

this apps was build using typescript, nestjs and yarn package manager

## how to run

if you already have yarn package, just download the dependencies package with
` yarn`
in the root project directory

if you dont, you need to install it first with your npm
` npm install -g yarn`

## endpoint

this application have 2 endpoints

1. GET(/genre/<genre>)
   just place your genre string in the end of url and you will get the list of book with that kind of genre
2. POST(/createOrder)
   you need request body
   {
   "worksId": "OL66554W", //the one you get from GET(/genre)
   "borrowTime": "2022-12-03T14:50:27.649Z", //time you will borrow the book
   "lengthOfBorrowDay": 2 //many of days you borrowing the book
   }

thanks
