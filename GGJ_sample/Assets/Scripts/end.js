#pragma strict

function Start () {

}

function Update () {

}

var bt1 : Texture2D;
function OnGUI(){
	if(GUI.Button(Rect(240,210,160,40),bt1)){
		Application.LoadLevel("start");
	}
}