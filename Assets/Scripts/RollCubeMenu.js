﻿private var ismoving : boolean = false;  
private var startY : float = 0;  
var cubeSpeed : float;  
var cubeSize : float;
var counter : int = 0;
  
function Update ()   
{  
    if (ismoving == false && counter == 0)  
    {  
    	counter++;
        ismoving = true;  
        transform.Find("targetpoint").Translate(0, -cubeSize/2 , cubeSize/2);  
        StartCoroutine(DoRoll(transform.Find("targetpoint").position, Vector3.right, 90.0f,cubeSpeed));  
    }
    if (ismoving == false && counter >= 1 && counter <= 3)  
    {  
    	counter++;
        ismoving = true;  
        transform.Find("targetpoint").Translate(cubeSize/2, -cubeSize/2, 0);  
        StartCoroutine(DoRoll(transform.Find("targetpoint").position, -Vector3.forward, 90.0f,cubeSpeed));     
    }     
    if (ismoving == false && counter >= 4 && counter <= 6)  
    {  
    	counter++;
        ismoving = true;  
        transform.Find("targetpoint").Translate(0, -cubeSize/2, -cubeSize/2);  
        StartCoroutine(DoRoll(transform.Find("targetpoint").position, -Vector3.right, 90.0f,cubeSpeed));  
    }  
    if (ismoving == false && counter >= 7 && counter <= 9)  
    {  
    	counter++;
        ismoving = true;  
        transform.Find("targetpoint").Translate(-cubeSize/2, -cubeSize/2, 0);  
        StartCoroutine(DoRoll(transform.Find("targetpoint").position, Vector3.forward, 90.0,cubeSpeed));  
    }
    if (ismoving == false && counter >= 10)  
    {  
    	if(counter == 10) {
    		counter++;
    	} else if(counter == 11) {
    		counter = 0;
    	}
        ismoving = true;  
        transform.Find("targetpoint").Translate(0, -cubeSize/2 , cubeSize/2);  
        StartCoroutine(DoRoll(transform.Find("targetpoint").position, Vector3.right, 90.0f,cubeSpeed));  
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
   
   yield WaitForSeconds(1);
// The cube is stoped  
   ismoving = false;       
}  