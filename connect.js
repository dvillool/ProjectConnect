'use strict';

// //**********************************************************
// // Constructor
// //**********************************************************

function Piece(name, connexions){
     this.name = name;                       //type piece
     this.position = [0,0];                  //into Grid
     this.orientation = "";                  //into cell
     this.connexion = connexions;            //array connexions (depend name and orientation)
     this.connected = [];                    //array with 1=connected, 0=disconnected
     this.light=[];
}

Pieces.prototype.random = function (){

};
