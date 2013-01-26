#pragma strict

function Start () {

}

function Update () {

}

var bt1 : Texture2D;
function OnGUI(){
	if(GUI.Button(Rect(240,170,160,40),bt1)){
		Application.LoadLevel("game_sys");
	}

}