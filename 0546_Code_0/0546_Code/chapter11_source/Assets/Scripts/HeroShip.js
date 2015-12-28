var pew:AudioClip;
var explosion:GameObject;
var bullet:GameObject;

function Update() {
	var halfW:float = Screen.width / 2;
	transform.position.x = (Input.mousePosition.x)/20;
	if(Input.GetMouseButtonDown(0)){
		audio.PlayOneShot(pew);
		Instantiate(bullet, transform.position + new Vector3(0,3,0), Quaternion.identity);
	}	
}

