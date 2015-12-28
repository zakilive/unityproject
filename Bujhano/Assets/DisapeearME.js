#pragma strict
public var rend: Renderer;
function Start() {

}
function Update () {
	rend = GetComponent.<Renderer>();
	rend.enabled = false;
}