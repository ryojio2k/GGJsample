#pragma strict

function Start () {

}

function OnCollisionEnter (myCollision : Collision) {
 if(myCollision.gameObject.name == "Goal"){
  Application.LoadLevel("END");
 }
}

function Update () {
	if (Input.GetMouseButton(0))Debug.Log(Input.mousePosition);
	var clickPosition = null;
	if (Input.GetMouseButton(0)){
		clickPosition = Input.mousePosition;
		
		var ray = Camera.main.ScreenPointToRay (Input.mousePosition);
		var rhit : RaycastHit;
		if (Physics.Raycast (ray, rhit, 100)) {
    		Debug.DrawLine (ray.origin, rhit.point);
	}

		//var camera = GameObject.FindWithTag("MainCamera");
	
    var explosionPos : Vector3 =  Camera.main.ScreenToWorldPoint(clickPosition);
    //Debug.Log(explosionPos);
    var radius = 7;
    var colliders : Collider[] = Physics.OverlapSphere (explosionPos, radius);
    var power = 20;
    
    for (var hit : Collider in colliders) {
        if (!hit)
            continue;
        
        print(""+explosionPos);
        if (hit.rigidbody)
            hit.rigidbody.AddExplosionForce(power, Vector3(rhit.point.x,rhit.point.y,0), radius,0, ForceMode.Force);
    }

	}
	 //Input.mousePosition;
}