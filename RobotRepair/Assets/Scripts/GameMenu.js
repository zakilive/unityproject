﻿//#pragma strict
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
var buttonW:int=100;
//button height:
var buttonH:int=80;

//half of the Screen width:
var halfScreenW:float=Screen.width/2;
//ha;f of the button width:
var halfButtonW:float=buttonW/2;

if(GUI.Button(Rect(halfScreenW-halfButtonW,200,buttonW,buttonH),"Start Game"))
{
print("Start me!");
//Application.LoadLevel("game");
}
if(GUI.Button(Rect(halfScreenW-halfButtonW,300,buttonW,buttonH),"Score"))
{
print("Score!");
//Application.LoadLevel("game");
}
if(GUI.Button(Rect(halfScreenW-halfButtonW,400,buttonW,buttonH),"Exit"))
{
print("Exit!");
//Application.LoadLevel("game");
}
}