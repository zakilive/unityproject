var lastX:float; // this will store the last position of the character
var isMoving:boolean = false; // flags whether or not the player is in motion

function Start() {
	animation.Stop();  // this stops Unity from playing the character's default animation.
} 

function Update() {
	var halfW:float = Screen.width / 2;
	transform.position.x = (Input.mousePosition.x)/20;
	
	if(lastX != transform.position.x) {
		// x values between this Update cycle and the last one
		// aren't the same! That means the player is moving the mouse.
		if(!isMoving) {
			// the player was standing still.
			// Let's flag him to "isMoving"
			isMoving = true;
			animation.Play("step");
	} 
		} else {
			// The player's x position is the same this Update cycle
			// as it was the last! The player has stopped moving the mouse.	
			if(isMoving) {
				// The player has stopped moving, so let's update the flag.
				isMoving = false;
				animation.Play("idle");
			}
	}
	lastX = transform.position.x;
	
}
