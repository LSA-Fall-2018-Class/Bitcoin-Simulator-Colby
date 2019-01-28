'use strict';

// Enter your js code Here
var bchain = new Array;
var addresses = new Array;

//x.push("hello");
//var bTransation = {from: "123", to: "345", amount: 2, timestamp: Date.now()}

bchain.push({from:"Amanda", to: "Colby",amount: 2,timeStamp: Date.now()});

bchain.push({from:"Macie", to: "Jon",amount: 4,timeStamp: Date.now()});

bchain.push({from:"Colby", to: "Amanda",amount: 2,timeStamp: Date.now()});

bchain.push({from:"Jon", to: "Macie",amount: 4,timeStamp: Date.now()});


addresses = ["Amanda","Colby","Jon","Joey","Macie"]

console.log(bchain);

//-------------------------
var i;
var temp = 0
var myAddress = 'Colby'
//--------------------------

sendButton.addEventListener('click', function (e)
{

    // if I am logged in, use the address I logged in with

    if (loggedIn == true)

    {
      fromAdd = id;
    }

    else // not logged in, use the From field from the screen

    {
      fromAdd = document.getElementById("fromAddress").value;
    }



    toAdd = document.getElementById("toAddress").value;

    amount = Number(document.getElementById("amount").value);



    bchain.push({ from: fromAdd, to: toAdd, amount: amount, timeStamp: Date.now()});



    console.log(bchain);

});


//--------------------------
for (i=0; i<bchain.length; i++)
{
  if(bchain[i].to == myAddress)
  {
    temp += bchain[i].amount
  }

  if(bchain[i].from == myAddress)
  {
      temp -= bchain[i].amount
  }

}

alert ("My total bitcoin is " + temp);
//-----------------------------
var myVar;

function myFunction() {
  myVar = setTimeout(function(){ alert("You have gained 1 Bitcoin from the central servers."); }, 60000);
}

function myStopFunction() {
  clearTimeout(myVar);
}

clearTimeout(id_of_settimeout)
//-----------------------------

// console.log(bchain[1].amount);
{
 console.log(Date.now());
}
