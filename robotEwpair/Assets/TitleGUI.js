#pragma strict

function Start () {

}
var customSkin:GUISkin;
function OnGUI () {
if(GUI.Button(Rect(0,0,100,50),"Play Game")) {
print("You clicked me!");
GUI.skin=customSkin;
}
}