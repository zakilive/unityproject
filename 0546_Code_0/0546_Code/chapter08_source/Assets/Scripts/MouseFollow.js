
var smooth = 2.0;
var tiltAngle = 30.0;


function Update () {

	var halfW : float = Screen.width / 2; // store half of the screen width as a value in a variable called halfW
	transform.position.x = (Input.mousePosition.x -halfW) / halfW; // set the x position of the Game Object according to the mouse's x position
	
	var halfH:float = Screen.height / 3;
	transform.position.z = (Input.mousePosition.y - halfH) / halfH;	
	
	// Smoothly tilts a transform towards a target rotation.
	var tiltAroundZ = Input.GetAxis("Mouse X") * tiltAngle;
	var tiltAroundX = Input.GetAxis("Mouse Y") * tiltAngle * -2;
	var target = Quaternion.Euler (tiltAroundX, 0, tiltAroundZ);
	
	// Dampen towards the target rotation
	transform.rotation = Quaternion.Slerp(transform.rotation, target,Time.deltaTime * smooth);
	
}