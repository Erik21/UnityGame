#pragma strict
var textField : GameObject;

public static var lockGame : boolean = false;
public static var finished : boolean = false;
public static var Trap : boolean = false;
public static var Teleport : boolean = false;
public static var rolled : boolean = false;

var pop : AudioSource;
var gunshot : AudioSource;
var applause : AudioSource;
var nooneWins : boolean = false;
public static var winnerName : String;

function Start () {
	lockGame = true;
	textField.GetComponent(UI.Text).text = "Okay... Get ready...";
	pop.Play();
	yield WaitForSeconds(3);
	textField.GetComponent(UI.Text).text = "Okay... Get ready... 3... ";
	pop.Play();
	yield WaitForSeconds(1);
	textField.GetComponent(UI.Text).text = "Okay... Get ready... 3... 2... ";
	pop.Play();
	yield WaitForSeconds(1);
	textField.GetComponent(UI.Text).text = "Okay... Get ready... 3... 2... 1...";
	pop.Play();
	yield WaitForSeconds(1);
	textField.GetComponent(UI.Text).text = "GO!!!";
	gunshot.Play();
	pop.Play();
	lockGame = false;
}

function Update () {
	if(finished) {
		finish();
		finished = false;
	}
	if(Trap) {
		Trap = false;
		trapMsg();
	}
	if(Teleport) {
		Teleport = false;
		teleportMsg();
	}
}

function trapMsg () {
	pop.Play();
	textField.GetComponent(UI.Text).text = "Oh no!! You stepped on a trap, someone has to skip a turn!";
	yield WaitForSeconds(8);
	pop.Play();
	textField.GetComponent(UI.Text).text = "Let us move on..";
}

function teleportMsg () {
	lockGame = false;
	pop.Play();
	textField.GetComponent(UI.Text).text = "Yep, that is a trap. You will be teleported to the start.";
	yield WaitForSeconds(8);
	pop.Play();
	textField.GetComponent(UI.Text).text = "Let us move on..";
}

function finish () {
	lockGame = true;
	yield WaitForSeconds(1);
	pop.Play();
	textField.GetComponent(UI.Text).text = "Good job! \nYou've made it to the end of the level!";
	yield WaitForSeconds(8);
	pop.Play();
	textField.GetComponent(UI.Text).text = "And the winner is...";
	
	if(TurnScript.points1 > TurnScript.points2 && TurnScript.points1 > TurnScript.points3 && TurnScript.points1 > TurnScript.points4) {
		winnerName = Players.pl1Name;
	} else if(TurnScript.points2 > TurnScript.points1 && TurnScript.points2 > TurnScript.points3 && TurnScript.points2 > TurnScript.points4) {
		winnerName = Players.pl2Name;
	} else if(TurnScript.points3 > TurnScript.points1 && TurnScript.points3 > TurnScript.points2 && TurnScript.points3 > TurnScript.points4) {
		winnerName = Players.pl3Name;
	} else if(TurnScript.points4 > TurnScript.points1 && TurnScript.points4 > TurnScript.points2 && TurnScript.points4 > TurnScript.points3) {
		winnerName = Players.pl4Name;
	} else {
		nooneWins = true;
	}
	
	yield WaitForSeconds(3);
	
	if(!nooneWins) {
		pop.Play();
		applause.Play();
		textField.GetComponent(UI.Text).text = "And the winner is... " + winnerName + "!!!";
		yield WaitForSeconds(8);
		pop.Play();
		applause.Play();
		textField.GetComponent(UI.Text).text = "Congratulations on winning, " + winnerName + "!!!";
		yield WaitForSeconds(6);
		Level2.lockGame = false;
		Application.LoadLevel(2);
	} else {
		pop.Play();
		textField.GetComponent(UI.Text).text = "And the winner is...     ....noone??!";
		yield WaitForSeconds(6);
		pop.Play();
		textField.GetComponent(UI.Text).text = "It is a tie! Nobody won!";
		yield WaitForSeconds(6);
		Level2.lockGame = false;
		Application.LoadLevel(2);
	}
}