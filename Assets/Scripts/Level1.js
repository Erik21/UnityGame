#pragma strict
var textField : GameObject;

public static var lockGame : boolean = false;
public static var firstMove : boolean = true;
public static var firstTrap : boolean = true;
public static var finished : boolean = false;
public static var rolled : boolean = false;
public static var skipTrigger1 : boolean = true;
public static var skipTrigger2 : boolean = true;
public static var skipTrigger3 : boolean = true;
public static var skipTrigger4 : boolean = true;
var skip1 : GameObject;
var skip2 : GameObject;
var skip3 : GameObject;
var skip4 : GameObject;
var trigger : byte = 1;
var trapTrigger : byte = 1;

var pop : AudioSource;
var applause : AudioSource;

function Start () {
	skip1.SetActive(true);
	if(!skipTrigger1) {
			return;
	}
	lockGame = true;
	yield WaitForSeconds(5);
	textField.GetComponent(UI.Text).text = "Let's try moving around first. \nFor this you will need the cube controller.";
	pop.Play();
	yield WaitForSeconds(10);
	textField.GetComponent(UI.Text).text = "In the right bottom corner you'll see whose turn it is. Give the controller to this person.";
	pop.Play();
	yield WaitForSeconds(10);
	textField.GetComponent(UI.Text).text = "Everytime that a level starts, the first turn will be given to a random player.";
	pop.Play();
	yield WaitForSeconds(10);
	textField.GetComponent(UI.Text).text = "Try rotating the cube on a flat surface \nin any possible direction to move.";
	pop.Play();
	yield WaitForSeconds(2);
	lockGame = false;
	skipTrigger1 = false;
	skip1.SetActive(false);
}

function Update () {
	if(!firstMove && trigger == 1) {
		trigger = 0;
		secondPartTut();
	}
	if(finished) {
		finish();
		finished = false;
	}
	if(!firstTrap && trapTrigger == 1) {
		trapTrigger = 0;
		firstTrapMsg();
	}
	if(MenuScript.skipPress1) {
		skipTrigger1 = false;
		lockGame = false;
		skip1.SetActive(false);
		MenuScript.skipPress1 = false;
	}
	if(MenuScript.skipPress2) {
		skipTrigger2 = false;
		lockGame = false;
		skip2.SetActive(false);
		MenuScript.skipPress2 = false;
	}
	if(MenuScript.skipPress3) {
		skipTrigger3 = false;
		lockGame = false;
		skip3.SetActive(false);
		MenuScript.skipPress3 = false;
	}
	if(MenuScript.skipPress4) {
		skipTrigger4 = false;
		lockGame = false;
		skip4.SetActive(false);
		MenuScript.skipPress4 = false;
	}
}

function secondPartTut () {
	skip2.SetActive(true);
	if(!skipTrigger2) {
			return;
	}
	lockGame = true;
	yield WaitForSeconds(0.5);
	pop.Play();
	textField.GetComponent(UI.Text).text = "Good job! As you can see, \nthe cube in-game will respond to \nthe movements that the controller \nmakes.";
	yield WaitForSeconds(8);
	pop.Play();
	textField.GetComponent(UI.Text).text = "Everytime you make a move, you get points. Everytime the cube's color matches with the ground's color, \nyou get double the amount of points.";
	yield WaitForSeconds(8);
	pop.Play();
	textField.GetComponent(UI.Text).text = "Now, get to the teleporter \nat the bottom of the map. \nThen we will be able to continue \nour journey.";
	yield WaitForSeconds(2);
	lockGame = false;
	skipTrigger2 = false;
	skip2.SetActive(false);
}

function firstTrapMsg () {
	skip3.SetActive(true);
	if(!skipTrigger3) {
			return;
	}
	lockGame = true;
	pop.Play();
	textField.GetComponent(UI.Text).text = "Hey wait a minute, \nwhat did you just step on?";
	yield WaitForSeconds(5);
	pop.Play();
	textField.GetComponent(UI.Text).text = "That, my friend, is called a trap.\n You will see more of these.";
	yield WaitForSeconds(6);
	pop.Play();
	textField.GetComponent(UI.Text).text = "Traps can be different in effect. \nFor example, this trap skips a turn so somebody has to wait \nbefore they can play again.";
	yield WaitForSeconds(6);
	pop.Play();
	textField.GetComponent(UI.Text).text = "Traps can also teleport you back in the map. So make sure to avoid these unless you can use them in your advantage.";
	yield WaitForSeconds(6);
	pop.Play();
	textField.GetComponent(UI.Text).text = "Now, let's move on.";
	yield WaitForSeconds(2);
	lockGame = false;
	skipTrigger3 = false;
	skip3.SetActive(false);
}

function finish () {
	skip4.SetActive(true);
	if(!skipTrigger4) {
			return;
	}
	lockGame = true;
	yield WaitForSeconds(1);
	applause.Play();
	pop.Play();
	textField.GetComponent(UI.Text).text = "Good job! \nYou've made it to the end of the level!";
	yield WaitForSeconds(8);
	pop.Play();
	textField.GetComponent(UI.Text).text = "The person with the most points wins. But, since this is the tutorial, nobody wins this round.";
	yield WaitForSeconds(8);
	pop.Play();
	textField.GetComponent(UI.Text).text = "Before we start with the real thing, I have to mention that you can't just simply go back to the start in the next levels.";
	yield WaitForSeconds(8);
	pop.Play();
	textField.GetComponent(UI.Text).text = "You see, without this, most people would just camp around while getting the most points and then run for the finish.";
	yield WaitForSeconds(8);
	pop.Play();
	textField.GetComponent(UI.Text).text = "You can now play the next level under levelselect.";
	yield WaitForSeconds(5);
	Level1.lockGame = false;
	Application.LoadLevel(2);
	skipTrigger4 = false;
	skip4.SetActive(false);
}