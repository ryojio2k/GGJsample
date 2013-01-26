function OnCollisionEnter (myCollision : Collision) {
 if(myCollision.gameObject.name == "Goal"){
  Application.LoadLevel("END");
 }
}
