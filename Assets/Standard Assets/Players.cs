using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class Players : MonoBehaviour {
	public GameObject player1Input;
	public GameObject player2Input;
	public GameObject player3Input;
	public GameObject player4Input;
	public GameObject player3Area;
	public GameObject player4Area;
	public GameObject Messg;
	public static string pl1Name;
	public static string pl2Name;
	public static string pl3Name;
	public static string pl4Name;

	public static int pAmount = PlayerAmount.players;
	// Use this for initialization
	void Start () {
		pAmount = PlayerAmount.players;
		DontDestroyOnLoad (this.gameObject);
	}

	public void savePlayerNames() {
		if (pAmount == 2 && player1Input.GetComponent<InputField>().text != "" && player2Input.GetComponent<InputField>().text != "") {
			pl1Name = player1Input.GetComponent<InputField>().text;
			pl2Name = player2Input.GetComponent<InputField>().text;
			Application.LoadLevel (2);
		} else if (pAmount == 3 && player1Input.GetComponent<InputField>().text != "" && player2Input.GetComponent<InputField>().text != "" && player3Input.GetComponent<InputField>().text != "") {
			pl1Name = player1Input.GetComponent<InputField>().text;
			pl2Name = player2Input.GetComponent<InputField>().text;
			pl3Name = player3Input.GetComponent<InputField>().text;
			Application.LoadLevel (2);
		} else if (pAmount == 4 && player1Input.GetComponent<InputField>().text != "" && player2Input.GetComponent<InputField>().text != "" && player3Input.GetComponent<InputField>().text != "" && player4Input.GetComponent<InputField>().text != "") { 
			pl1Name = player1Input.GetComponent<InputField>().text;
			pl2Name = player2Input.GetComponent<InputField>().text;
			pl3Name = player3Input.GetComponent<InputField>().text;
			pl4Name = player4Input.GetComponent<InputField>().text;
			Application.LoadLevel (2);
		} else {
			Messg.GetComponent<Text>().text = "Please give the players a name.";
		}
	}

	// Update is called once per frame
	void Update () {
		if (Application.loadedLevel == 1) {
			if (pAmount == 2) {
				player3Area.SetActive(false);
				player4Area.SetActive(false);
			} else if (pAmount == 3) {
				player4Area.SetActive(false);
			}
		}
	}
}
