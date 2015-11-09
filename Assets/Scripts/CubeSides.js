#pragma strict

function OnCollisionEnter (col : Collision) {
	if(this.gameObject.tag == "cRS" && col.gameObject.tag == "RedGround")
    {
		if(TurnScript.turnPl == 1) {
			TurnScript.points1 += 3;
		} else if(TurnScript.turnPl == 2) {
			TurnScript.points2 += 3;
		} else if(TurnScript.turnPl == 3) {
			TurnScript.points3 += 3;
		} else if(TurnScript.turnPl == 4) {
			TurnScript.points4 += 3;
		}
    } 
    if(this.gameObject.tag == "cYS" && col.gameObject.tag == "YellowGround")
    {
		if(TurnScript.turnPl == 1) {
			TurnScript.points1 += 3;
		} else if(TurnScript.turnPl == 2) {
			TurnScript.points2 += 3;
		} else if(TurnScript.turnPl == 3) {
			TurnScript.points3 += 3;
		} else if(TurnScript.turnPl == 4) {
			TurnScript.points4 += 3;
		}
    }
    if(this.gameObject.tag == "cOS" && col.gameObject.tag == "OrangeGround")
    {
		if(TurnScript.turnPl == 1) {
			TurnScript.points1 += 3;
		} else if(TurnScript.turnPl == 2) {
			TurnScript.points2 += 3;
		} else if(TurnScript.turnPl == 3) {
			TurnScript.points3 += 3;
		} else if(TurnScript.turnPl == 4) {
			TurnScript.points4 += 3;
		}
    }
    if(this.gameObject.tag == "cBS" && col.gameObject.tag == "BlueGround")
    {
		if(TurnScript.turnPl == 1) {
			TurnScript.points1 += 3;
		} else if(TurnScript.turnPl == 2) {
			TurnScript.points2 += 3;
		} else if(TurnScript.turnPl == 3) {
			TurnScript.points3 += 3;
		} else if(TurnScript.turnPl == 4) {
			TurnScript.points4 += 3;
		}
    }
    if(this.gameObject.tag == "cPS" && col.gameObject.tag == "PinkGround")
    {
		if(TurnScript.turnPl == 1) {
			TurnScript.points1 += 3;
		} else if(TurnScript.turnPl == 2) {
			TurnScript.points2 += 3;
		} else if(TurnScript.turnPl == 3) {
			TurnScript.points3 += 3;
		} else if(TurnScript.turnPl == 4) {
			TurnScript.points4 += 3;
		}
    }
    if(this.gameObject.tag == "cGS" && col.gameObject.tag == "GreenGround")
    {
		if(TurnScript.turnPl == 1) {
			TurnScript.points1 += 3;
		} else if(TurnScript.turnPl == 2) {
			TurnScript.points2 += 3;
		} else if(TurnScript.turnPl == 3) {
			TurnScript.points3 += 3;
		} else if(TurnScript.turnPl == 4) {
			TurnScript.points4 += 3;
		}
    }
}