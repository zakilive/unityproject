/*
Author:Syed Ahmed Zaki
web:www.zakilive.com
*/
#pragma strict
public var rend: Renderer;
function Start() {

}
function Update () {
	rend = GetComponent.<Renderer>();
	rend.enabled = true;
}