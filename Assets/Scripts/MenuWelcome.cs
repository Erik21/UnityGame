using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class MenuWelcome : MonoBehaviour {
	public GameObject textWelcome;

	// Use this for initialization
	void Start () {
		if (Players.pAmount == 2) {
			textWelcome.GetComponent<Text>().text = "Welcome\n" + Players.pl1Name + " and " + Players.pl2Name + "!";
		} else if (Players.pAmount == 3) {
			textWelcome.GetComponent<Text>().text = "Welcome\n" + Players.pl1Name + ", " + Players.pl2Name + " and " + Players.pl3Name + "!";
		} else if (Players.pAmount == 4) {
			textWelcome.GetComponent<Text>().text = "Welcome\n" + Players.pl1Name + ", " + Players.pl2Name + ", " + Players.pl3Name + " and " + Players.pl4Name + "!";
		}
	}
	
	// Update is called once per frame
	void Update () {
	
	}
}
