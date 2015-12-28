//#pragma strict
/*
Coded by Syed Ahmed Zaki
Blog: www.zakilive.com
*/
function Start () {

}
var customSkin:GUISkin;
function OnGUI () {
GUI.skin=customSkin;
//button width:
var buttonW:int=200;
//button height:
var buttonH:int=100;

//half of the Screen width:
var halfScreenW:float=Screen.width/2;
//ha;f of the button width:
var halfButtonW:float=buttonW/2;

if(GUI.Button(Rect(halfScreenW-halfButtonW,400,buttonW,buttonH),"Play Game"))
{
//print("You clicked me!");
Application.LoadLevel("game");
}
}