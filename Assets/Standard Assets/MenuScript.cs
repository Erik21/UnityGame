using UnityEngine;
using System.Collections;

public class MenuScript : MonoBehaviour {
	public bool quitPress = false;
	public static bool skipPress1 = false;
	public static bool skipPress2 = false;
	public static bool skipPress3 = false;
	public static bool skipPress4 = false;


	public void NextLevelButton(int index)
	{
		Application.LoadLevel(index);
	}

	public void SkipButton1(bool sk1)
	{
		skipPress1 = sk1;
	}

	public void SkipButton2(bool sk2)
	{
		skipPress2 = sk2;
	}

	public void SkipButton3(bool sk3)
	{
		skipPress3 = sk3;
	}

	public void SkipButton4(bool sk4)
	{
		skipPress4 = sk4;
	}

	void Update() {
		if (Input.GetKey ("escape")) {
			QuitGame();
		}
		if (quitPress) {
			QuitGame();
		}
	}

	public void quitPressed(bool bl) {
		if (bl) {
			quitPress = true;
		}
	}

	void QuitGame() {
		Application.Quit();
	}
}