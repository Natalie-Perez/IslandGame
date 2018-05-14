static var Count : int = 0;
var CollectSound : AudioClip;

function OnControllerColliderHit(hit:ControllerColliderHit){
	if(hit.gameObject.tag == "myGem"){
		Destroy(hit.gameObject);
		Count++;
		GetComponent.<AudioSource>().PlayOneShot(CollectSound);
	}
}