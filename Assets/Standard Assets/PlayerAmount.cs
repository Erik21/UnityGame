using UnityEngine;
using System.Collections;

public class PlayerAmount : MonoBehaviour {
	public static int players = 0;
	// Use this for initialization
	void Start () {
	
	}

	public void amountOfPlayers(int playersAmount)
	{
		players = playersAmount;
		Application.LoadLevel (1);
	}
	
	// Update is called once per frame
	void Update () {
	
	}
}
