var gizmocolor : Color;
var Radius : float;
  
function Update () {
 transform.rotation = Quaternion.identity;
}
  
function OnDrawGizmos(){
 Gizmos.color = gizmocolor;
 Gizmos.DrawSphere (transform.position, Radius);
}