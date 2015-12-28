var lastX:float; // this will store the last position of the character
var isMoving:boolean = false; // flags whether or not the player is in motion
var explosion:GameObject;

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
			if(!animation.IsPlaying("catch")){
				animation.Play("step");
			}
	} 
		} else {
			// The player's x position is the same this Update cycle
			// as it was the last! The player has stopped moving the mouse.	
			if(isMoving) {
				// The player has stopped moving, so let's update the flag.
				isMoving = false;
				if(!animation.IsPlaying("catch")){
					animation.Play("idle");
				}
			}
	}
	lastX = transform.position.x;
	
}

function OnCollisionEnter(col : Collision) {

	if(col.gameObject.tag == "bomb")
	{
	   // I got hit by a bomb!	   
	   Instantiate(explosion, col.gameObject.transform.position, Quaternion.identity);
	} else if (col.gameObject.tag == "stein") {
	animation.Play("catch"); // Ima catch that stein!
	}
	col.gameObject.transform.position.y = 50;
	col.gameObject.transform.position.x = Random.Range(0,60);

}

