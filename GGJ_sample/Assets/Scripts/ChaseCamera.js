// 追従カメラ
#pragma strict

public var c_Target : GameObject;	// 追従対象
public var c_CameraHeight : float;	// カメラの高さ
public var c_ChaseRate : float;	// カメラ追従度
protected var m_Target : GameObject = null;	// 追従対象
protected var m_MarginPosition : Vector3 = Vector3( 0, 0, 0 );	// マージン位置

/* カメラ位置リセット */
protected function resetPosition(){
	// マージンポジション取得
	m_MarginPosition = transform.position;
}

/* ターゲット追従 */
protected function chaseTarget() {
	
/*
	// マージンポジションにカメラを移動
	transform.position = m_MarginPosition;
	
	// 追従対象が存在する場合は位置を取得
	if( m_Target ) {
		// マージンポジション取得
		m_MarginPosition.x = c_Target.transform.position.x;
		m_MarginPosition.y = c_Target.transform.position.y + c_CameraHeight;
	}
*/
/*
	// カメラの位置を追従
	transform.position.x = c_Target.transform.position.x;
	transform.position.y = c_Target.transform.position.y + c_CameraHeight;
*/
	// 追従対象が存在する場合は位置を算出
	if( c_Target ){
		m_MarginPosition.x = c_Target.transform.position.x - transform.position.x;
		m_MarginPosition.y = c_Target.transform.position.y - transform.position.y + c_CameraHeight;
	}
	transform.position.x += m_MarginPosition.x / c_ChaseRate;
	transform.position.y += m_MarginPosition.y / c_ChaseRate;
}

/* 開始 */
function Start () {
	// 追従対象を取得
/*
	var go : GameObject = GameObject.Find( "MovingObject" );
	if( go ){
		c_Target = go;
	}
*/
	
	// カメラ位置リセット
	resetPosition();
}

/* 更新 */
function Update () {
	// ターゲット追従
	chaseTarget();
}
