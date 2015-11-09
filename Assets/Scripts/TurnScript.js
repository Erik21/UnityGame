#pragma strict
var turnField : GameObject;
var pointField : GameObject;

public static var turnPl : int;
public static var points1 : int = 0;
public static var points2 : int = 0;
public static var points3 : int = 0;
public static var points4 : int = 0;
var turnGiven : String;



function Start () {
	points1 = 0;
	points2 = 0;
	points3 = 0;
	points4 = 0;
	if(PlayerAmount.players == 4) {
		turnPl = Mathf.Round(Random.Range(1,4));
	} else if(PlayerAmount.players == 3) {
		turnPl = Mathf.Round(Random.Range(1,3));
	} else if(PlayerAmount.players == 2) {
		turnPl = Mathf.Round(Random.Range(1,2));
	}
}

function Update () {
	if(turnPl == 1) {
		turnGiven = Players.pl1Name;
	} else if(turnPl == 2) {
		turnGiven = Players.pl2Name;
	} else if(turnPl == 3) {
		turnGiven = Players.pl3Name;
	} else if(turnPl == 4) {
		turnGiven = Players.pl4Name;
	}
	
	turnField.GetComponent(UI.Text).text = "It's " + turnGiven + "'s turn!";
	
	if(PlayerAmount.players == 4) {
		pointField.GetComponent(UI.Text).text = Players.pl1Name + " : " + points1 + "\n" + Players.pl2Name + " : " + points2 + "\n" + Players.pl3Name + " : " + points3 + "\n" + Players.pl4Name + " : " + points4;
	} else if(PlayerAmount.players == 3) {
		pointField.GetComponent(UI.Text).text = Players.pl1Name + " : " + points1 + "\n" + Players.pl2Name + " : " + points2 + "\n" + Players.pl3Name + " : " + points3;
	} else if(PlayerAmount.players == 2) {
		pointField.GetComponent(UI.Text).text = Players.pl1Name + " : " + points1 + "\n" + Players.pl2Name + " : " + points2;
	}
}