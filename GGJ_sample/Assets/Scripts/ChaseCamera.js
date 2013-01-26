// �Ǐ]�J����
#pragma strict

public var c_Target : GameObject;	// �Ǐ]�Ώ�
public var c_CameraHeight : float;	// �J�����̍���
public var c_ChaseRate : float;	// �J�����Ǐ]�x
protected var m_Target : GameObject = null;	// �Ǐ]�Ώ�
protected var m_MarginPosition : Vector3 = Vector3( 0, 0, 0 );	// �}�[�W���ʒu

/* �J�����ʒu���Z�b�g */
protected function resetPosition(){
	// �}�[�W���|�W�V�����擾
	m_MarginPosition = transform.position;
}

/* �^�[�Q�b�g�Ǐ] */
protected function chaseTarget() {
	
/*
	// �}�[�W���|�W�V�����ɃJ�������ړ�
	transform.position = m_MarginPosition;
	
	// �Ǐ]�Ώۂ����݂���ꍇ�͈ʒu���擾
	if( m_Target ) {
		// �}�[�W���|�W�V�����擾
		m_MarginPosition.x = c_Target.transform.position.x;
		m_MarginPosition.y = c_Target.transform.position.y + c_CameraHeight;
	}
*/
/*
	// �J�����̈ʒu��Ǐ]
	transform.position.x = c_Target.transform.position.x;
	transform.position.y = c_Target.transform.position.y + c_CameraHeight;
*/
	// �Ǐ]�Ώۂ����݂���ꍇ�͈ʒu���Z�o
	if( c_Target ){
		m_MarginPosition.x = c_Target.transform.position.x - transform.position.x;
		m_MarginPosition.y = c_Target.transform.position.y - transform.position.y + c_CameraHeight;
	}
	transform.position.x += m_MarginPosition.x / c_ChaseRate;
	transform.position.y += m_MarginPosition.y / c_ChaseRate;
}

/* �J�n */
function Start () {
	// �Ǐ]�Ώۂ��擾
/*
	var go : GameObject = GameObject.Find( "MovingObject" );
	if( go ){
		c_Target = go;
	}
*/
	
	// �J�����ʒu���Z�b�g
	resetPosition();
}

/* �X�V */
function Update () {
	// �^�[�Q�b�g�Ǐ]
	chaseTarget();
}
