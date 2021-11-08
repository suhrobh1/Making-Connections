function changeName(id){
    var currentName = document.getElementById(id);
    currentName.innerText = "Marie Curie";
}
const connectionCounts = [2, 418];
function hideName(id1, id2, id3){
    var requestDiv = document.getElementById(id1);
    var conRequest = document.getElementById(id2);
    var currentConnections = document.getElementById(id3);
    requestDiv.innerHTML = "";
    connectionCounts[0]--;
    conRequest.innerText = connectionCounts[0]; 
    connectionCounts[1]++;
    currentConnections.innerText = connectionCounts[1];
}
 