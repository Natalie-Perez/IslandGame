function Update () {
	var firsttext = "Gems: ";
	var lasttext = " of 5 found";
	GetComponent.<UnityEngine.UI.Text>().text = firsttext + GemCollect.Count + lasttext;
}