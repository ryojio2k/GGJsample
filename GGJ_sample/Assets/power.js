#pragma strict
 var position_x:int;
 
function Start () {

}

function Update () {
	if (Input.GetMouseButtonDown(0)){
		position_x = Input.mousePosition.x;
	}
	
	Debug.Log(position_x);
}