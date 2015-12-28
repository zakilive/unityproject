//#pragma strict
/*
Coded by Syed Ahmed Zaki
Blog: www.zakilive.com
*/
var cols:int=4; //the number of coloumns in the card grid
var rows:int=4; //the number of rows in the card grid
var totalCards:int=cols*rows; //answer is 16
var mmatchesNeededToWin:int=totalCards*0.5;//If there are 16 cards, the player needs to find the 8 matches to clear the board
var matchesMade:int=0;//At the outset, the player has not made any matches
var cardW:int=100;//Each card's width and height is 100 pixels
var cardH:int=100;
var aCards:Array; //We'll store all the cards we create in this Array
var aGrid:Array; //This array will keep track of the shuffled,dealt cards
var aCardsFlipped:ArrayList; //This array will store the two cards that the player flips over
var playerCanClick:boolean; //We'll use this flag to prevent the player from clicking buttons when we don't want him to
var playerHasWon:boolean=false; //Store whether or not the player has won.This should probably start out false 
var i:int;
var j:int;


function Start () {

playerCanClick=true; //we should let the player play
//Initialize the arrays as empty lists:
aCards=new Array();
aGrid=new Array();
aCardsFlipped=new ArrayList();

for(i=0;i<rows;i++)
{
aGrid[i]=new Array(); //create a new,empty array at index i
for(j=0;j<cols;j++)
{
aGrid[i][j]=new Card();
}
}
}


function OnGUI () {
GUILayout.BeginArea(Rect(0,0,Screen.width,Screen.height));
BuildGrid();
GUILayout.EndArea();
print("building grid!");
}


function BuildGrid(){
GUILayout.BeginVertical();
for(i=0;i<rows;i++)
{
GUILayout.BeginHorizontal();
for(j=0;j<cols;j++)
{
//var card:object=aGrid[i][j];
//if(GUILayout.Button(Resources.Load(card.img),GUILayout.Width(cardW)))
{
//Debug.Log(card.img);
}
}
GUILayout.EndHorizontal();
}
GUILayout.EndVertical();
}


class Card extends System.Object
{
var isFaceUp:boolean = false;
var isMatched:boolean = false;
var img:String;
function Card()
{
img = "robot";
}
}