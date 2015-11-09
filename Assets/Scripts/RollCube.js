private var ismoving : boolean = false;  
private var startY : float = 0;
var cube : GameObject;  
var cubeSpeed : float;  
var cubeSize : float;
var xPos : int = 0;
var zPos : int = 0;
var lastSide : int = 6;
var PlayAudio : int;
var cantLeft : boolean = false;
var cantRight : boolean = false;
var cantUp : boolean = false;
var cantDown : boolean = false;
var rolled : boolean = false;
var side1 : boolean = false;
var side2 : boolean = false;
var side3 : boolean = false;
var side4 : boolean = false;
var side5 : boolean = false;
var side6 : boolean = false;
var triggerTraps : boolean = false;
var triggerStepped : boolean = false;
var rSound1 : AudioSource;
var rSound2 : AudioSource;
var rSound3 : AudioSource;
var rSound4 : AudioSource;
var rSound5 : AudioSource;
var rSound6 : AudioSource;
var rSound7 : AudioSource;
var rSound8 : AudioSource;
var pop : AudioSource;
      
function Update ()   
{
	if(Input.GetKeyDown("1") && !rolled) {
		side1 = true;
		side2 = false;
		side3 = false;
		side4 = false;
		side5 = false;
		side6 = false;
	} else if(Input.GetKeyDown("2") && !rolled) {
		side1 = false;
		side2 = true;
		side3 = false;
		side4 = false;
		side5 = false;
		side6 = false;
	} else if(Input.GetKeyDown("3") && !rolled) {
		side1 = false;
		side2 = false;
		side3 = true;
		side4 = false;
		side5 = false;
		side6 = false;
	} else if(Input.GetKeyDown("4") && !rolled) {
		side1 = false;
		side2 = false;
		side3 = false;
		side4 = true;
		side5 = false;
		side6 = false;
	} else if(Input.GetKeyDown("5") && !rolled) {
		side1 = false;
		side2 = false;
		side3 = false;
		side4 = false;
		side5 = true;
		side6 = false;
	} else if(Input.GetKeyDown("6") && !rolled) {
		side1 = false;
		side2 = false;
		side3 = false;
		side4 = false;
		side5 = false;
		side6 = true;
	} else {
		side1 = false;
		side2 = false;
		side3 = false;
		side4 = false;
		side5 = false;
		side6 = false;
	}
	
	if (Level2.lockGame == false) {
		if (Level1.lockGame == false) {
			if (lastSide == 1 && side6 || lastSide == 2 && side3 || lastSide == 3 && side5 || lastSide == 4 && side3 || lastSide == 5 && side1 || lastSide == 6 && side3 || Input.GetKeyDown("up")) {      
    			if (ismoving == false && cantUp == false && rolled == false)  {  
    				playSound();
    				zPos++;
    				triggerStepped = false;
        			ismoving = true;  
	        		transform.Find("targetpoint").Translate(0, -cubeSize/2 , cubeSize/2);  
	        		StartCoroutine(DoRoll(transform.Find("targetpoint").position, Vector3.right, 90.0f,cubeSpeed));
	        		givePoints();
	        		switchTurn();
	        		goUp();
	        		if(Level1.firstMove == true) {
	        			Level1.firstMove = false;
	        		} else {
	        			waitForTurn();
	        		}
    			}
    		}
    		if (lastSide == 1 && side5 || lastSide == 2 && side1 || lastSide == 3 && side6 || lastSide == 4 && side1 || lastSide == 5 && side3 || lastSide == 6 && side1 || Input.GetKeyDown("down")) {   
    			if (ismoving == false && cantDown == false && rolled == false)  {  
    				playSound();
    				zPos--;
    				triggerStepped = false;
    	    		ismoving = true;  
    	    		transform.Find("targetpoint").Translate(0, -cubeSize/2, -cubeSize/2);  
    	    		StartCoroutine(DoRoll(transform.Find("targetpoint").position, -Vector3.right, 90.0f,cubeSpeed));  
    				givePoints();
    				switchTurn();
    				goDown();
    				if(Level1.firstMove == true) {
	        			Level1.firstMove = false;
	        		} else {
	        			waitForTurn();
	        		}
    			}
    		}
    		if (lastSide == 1 && side4 || lastSide == 2 && side6 || lastSide == 3 && side4 || lastSide == 4 && side5 || lastSide == 5 && side4 || lastSide == 6 && side4 || Input.GetKeyDown("left")) {  
    			if (ismoving == false && cantLeft == false && rolled == false)  
    				{ 
    				playSound();
    				xPos--;
    				triggerStepped = false;
    	    		ismoving = true;  
     	    		transform.Find("targetpoint").Translate(-cubeSize/2, -cubeSize/2, 0);  
    	    		StartCoroutine(DoRoll(transform.Find("targetpoint").position, Vector3.forward, 90.0,cubeSpeed));  
    				givePoints();
    				switchTurn();
    				goLeft();
    				if(Level1.firstMove == true) {
	        			Level1.firstMove = false;
	        		} else {
	        			waitForTurn();
	        		}
    			}
    		}
    		if (lastSide == 1 && side2 || lastSide == 2 && side5 || lastSide == 3 && side2 || lastSide == 4 && side6 || lastSide == 5 && side2 || lastSide == 6 && side2 || Input.GetKeyDown("right")) {  
    			if (ismoving == false && cantRight == false && rolled == false)  
    			{
    				playSound();
    				xPos++;
    				triggerStepped = false;
        			ismoving = true;  
        			transform.Find("targetpoint").Translate(cubeSize/2, -cubeSize/2, 0);  
        			StartCoroutine(DoRoll(transform.Find("targetpoint").position, -Vector3.forward, 90.0f,cubeSpeed));     
    				givePoints();
    				switchTurn();
    				goRight();
    				if(Level1.firstMove == true) {
	        			Level1.firstMove = false;
	        		} else {
	        			waitForTurn();
	        		}
    			}
    		}
	
/*	if (Level2.lockGame == false) {
		if (Level1.lockGame == false) {
    		if (Input.GetKeyDown("1") && ismoving == false && cantUp == false && rolled == false)  {  
    			playSound();
    			zPos++;
        		ismoving = true;  
	        	transform.Find("targetpoint").Translate(0, -cubeSize/2 , cubeSize/2);  
	        	StartCoroutine(DoRoll(transform.Find("targetpoint").position, Vector3.right, 90.0f,cubeSpeed));
	        	givePoints();
	        	switchTurn();
	        	if(Level1.firstMove == true) {
	        		Level1.firstMove = false;
	        	} else {
	        		waitForTurn();
	        	}
    		}   
    		if (Input.GetKeyDown("2") && ismoving == false && cantDown == false && rolled == false)  {  
    			playSound();
    			zPos--;
    	    	ismoving = true;  
    	    	transform.Find("targetpoint").Translate(0, -cubeSize/2, -cubeSize/2);  
    	    	StartCoroutine(DoRoll(transform.Find("targetpoint").position, -Vector3.right, 90.0f,cubeSpeed));  
    			givePoints();
    			switchTurn();
    			if(Level1.firstMove == true) {
	        		Level1.firstMove = false;
	        	} else {
	        		waitForTurn();
	        	}
    		}  
    		if (Input.GetKeyDown("3") && ismoving == false && cantLeft == false && rolled == false)  
    			{ 
    			playSound();
    			xPos--;
    	    	ismoving = true;  
     	    	transform.Find("targetpoint").Translate(-cubeSize/2, -cubeSize/2, 0);  
    	    	StartCoroutine(DoRoll(transform.Find("targetpoint").position, Vector3.forward, 90.0,cubeSpeed));  
    			givePoints();
    			switchTurn();
    			if(Level1.firstMove == true) {
	        		Level1.firstMove = false;
	        	} else {
	        		waitForTurn();
	        	}
    		}  
    		if (Input.GetKeyDown("4") && ismoving == false && cantRight == false && rolled == false)  
    		{
    			playSound();
    			xPos++;
        		ismoving = true;  
        		transform.Find("targetpoint").Translate(cubeSize/2, -cubeSize/2, 0);  
        		StartCoroutine(DoRoll(transform.Find("targetpoint").position, -Vector3.forward, 90.0f,cubeSpeed));     
    			givePoints();
    			switchTurn();
    			if(Level1.firstMove == true) {
	        		Level1.firstMove = false;
	        	} else {
	        		waitForTurn();
	        	}
    		} */
    	}
    }
}

function switchTurn() {
	triggerStepped = true;
	if(PlayerAmount.players == 4) {
		if(TurnScript.turnPl == 4) {
			yield WaitForSeconds(2);
			TurnScript.turnPl = 1;
		} else {
			yield WaitForSeconds(2);
			TurnScript.turnPl++;
		}
	} else if(PlayerAmount.players == 3) {
		if(TurnScript.turnPl == 3) {
			yield WaitForSeconds(2);
			TurnScript.turnPl = 1;
		} else {
			yield WaitForSeconds(2);
			TurnScript.turnPl++;
		}
	} else if(PlayerAmount.players == 2) {
		if(TurnScript.turnPl == 2) {
			yield WaitForSeconds(2);
			TurnScript.turnPl = 1;
		} else if (TurnScript.turnPl == 1) {
			yield WaitForSeconds(2);
			TurnScript.turnPl = 2;
		}
	}
}  

function givePoints() {
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

function goUp() {
	if(lastSide == 1) {
		lastSide = 6;
	} else if(lastSide == 2) {
		lastSide = 3;
	} else if(lastSide == 3) {
		lastSide = 5;
	} else if(lastSide == 4) {
		lastSide = 3;
	} else if(lastSide == 5) {
		lastSide = 1;
	} else if(lastSide == 6) {
		lastSide = 3;
	}
}

function goDown() {
	if(lastSide == 1) {
		lastSide = 5;
	} else if(lastSide == 2) {
		lastSide = 1;
	} else if(lastSide == 3) {
		lastSide = 6;
	} else if(lastSide == 4) {
		lastSide = 1;
	} else if(lastSide == 5) {
		lastSide = 3;
	} else if(lastSide == 6) {
		lastSide = 1;
	}
}

function goLeft() {
	if(lastSide == 1) {
		lastSide = 4;
	} else if(lastSide == 2) {
		lastSide = 6;
	} else if(lastSide == 3) {
		lastSide = 4;
	} else if(lastSide == 4) {
		lastSide = 5;
	} else if(lastSide == 5) {
		lastSide = 4;
	} else if(lastSide == 6) {
		lastSide = 4;
	}
}

function goRight() {
	if(lastSide == 1) {
		lastSide = 2;
	} else if(lastSide == 2) {
		lastSide = 5;
	} else if(lastSide == 3) {
		lastSide = 2;
	} else if(lastSide == 4) {
		lastSide = 6;
	} else if(lastSide == 5) {
		lastSide = 2;
	} else if(lastSide == 6) {
		lastSide = 2;
	}
}

function waitForTurn() {
	rolled = true;
	yield WaitForSeconds(2);
	rolled = false;
}

function OnCollisionEnter (col : Collision)
{
    if(col.gameObject.tag == "LeftUp")
    {
        cantUp = true;
        cantDown = false;
        cantRight = false;
        cantLeft = true;
    }
    
    else if(col.gameObject.tag == "LeftDown")
    {
        cantUp = false;
        cantDown = true;
        cantRight = false;
        cantLeft = true;
    }
    
    else if(col.gameObject.tag == "Left")
    {
        cantUp = false;
        cantDown = false;
        cantRight = false;
        cantLeft = true;
    }
    
    else if(col.gameObject.tag == "RightDown")
    {
        cantUp = false;
        cantDown = true;
        cantRight = true;
        cantLeft = false;
    }
    
    else if(col.gameObject.tag == "RightUp")
    {
        cantUp = true;
        cantDown = false;
        cantRight = true;
        cantLeft = false;
    }
    
    else if(col.gameObject.tag == "RightLeft")
    {
        cantUp = false;
        cantDown = false;
        cantRight = true;
        cantLeft = true;
    }
    
    else if(col.gameObject.tag == "Right")
    {
        cantUp = false;
        cantDown = false;
        cantRight = true;
        cantLeft = false;
    }
    
    else if(col.gameObject.tag == "UpDown")
    {
        cantUp = true;
        cantDown = true;
        cantRight = false;
        cantLeft = false;
    }
    
    else if(col.gameObject.tag == "Up")
    {
        cantUp = true;
        cantDown = false;
        cantRight = false;
        cantLeft = false;
    }
    
    else if(col.gameObject.tag == "Down")
    {
        cantUp = false;
        cantDown = true;
        cantRight = false;
        cantLeft = false;
    }
    
    else if(col.gameObject.tag == "blockAll")
    {
        cantUp = true;
        cantDown = true;
        cantRight = true;
        cantLeft = true;
    }
    
    else if(col.gameObject.tag == "RightDownLeft")
    {
        cantUp = false;
        cantDown = true;
        cantRight = true;
        cantLeft = true;
    }
    
    else if(col.gameObject.tag == "LeftDownUp")
    {
        cantUp = true;
        cantDown = true;
        cantRight = false;
        cantLeft = true;
    }
    
    else if(col.gameObject.tag == "RightUpLeft")
    {
        cantUp = true;
        cantDown = false;
        cantRight = true;
        cantLeft = true;
    }
    
    else if(col.gameObject.tag == "RightDownUp")
    {
        cantUp = true;
        cantDown = true;
        cantRight = true;
        cantLeft = false;
    }
    
    else if(col.gameObject.tag == "none") {
    	cantUp = false;
        cantDown = false;
        cantRight = false;
        cantLeft = false;
    }
    
    else if(col.gameObject.tag == "Finish") {
    	Level1.finished = true;
    }
    
    else if(col.gameObject.tag == "Finish2") {
    	Level2.finished = true;
    }
    
    else if(col.gameObject.tag == "skipper") {
    	triggerTraps = true;
    	if(Level1.firstTrap == true) {
	        	Level1.firstTrap = false;
	        }
	    if(Application.loadedLevel == 6) {
	    	Level2.Trap = true;
	    }
	    if(triggerTraps && !triggerStepped) {
    		switchTurn();
    		triggerTraps = false;
    	}
    }
    
    else if(col.gameObject.tag == "Teleporter") {
    	Level2.lockGame = true;
    	yield WaitForSeconds(1);
    	pop.Play();
    	cube.transform.position = new Vector3(-0.217, -0.014, -0.03);
    	Level2.Teleport = true;
    }
}

function playSound() {
	PlayAudio = Random.Range(1, 8);
	
	yield WaitForSeconds (0.35);
 	if (PlayAudio == 1)
 	{
 	    rSound1.Play();
 	}
	if (PlayAudio == 2)
 	{
 	    rSound2.Play();
 	}
 	if (PlayAudio == 3)
 	{
 	    rSound3.Play();
 	}
 	if (PlayAudio == 4)
 	{
 	    rSound4.Play();
 	}
 	if (PlayAudio == 5)
 	{
 	    rSound5.Play();
 	}
 	if (PlayAudio == 6)
 	{
 	    rSound6.Play();
 	}
 	if (PlayAudio == 7)
 	{
 	    rSound7.Play();
 	}
 	if (PlayAudio == 8)
 	{
 	    rSound8.Play();
 	}
 }
  
function DoRoll (aPoint, aAxis, aAngle, aDuration) {    
  
 var tSteps = Mathf.Ceil(aDuration * 30.0);  
 var tAngle = aAngle / tSteps;  
 var pos : Vector3; // declare variable to fix the y position  
   
// Rotate the cube by the point, axis and angle  
  for (var i = 1; i <= tSteps; i++)   
  {   
    transform.RotateAround (aPoint, aAxis, tAngle);  
    yield WaitForSeconds(0.0033333);  
  }   
   
// move the targetpoint to the center of the cube   
   transform.Find("targetpoint").position = transform.position;  
  
// Make sure the y position is correct   
   pos = transform.position;  
   pos.y = startY;  
   transform.position = pos;  
      
// Make sure the angles are snaping to 90 degrees.       
   var vec = transform.eulerAngles;  
   vec.x = Mathf.Round(vec.x / 90) * 90;  
   vec.y = Mathf.Round(vec.y / 90) * 90;  
   vec.z = Mathf.Round(vec.z / 90) * 90;  
   transform.eulerAngles = vec;  
      
// The cube is stoped  
   ismoving = false;       
}  