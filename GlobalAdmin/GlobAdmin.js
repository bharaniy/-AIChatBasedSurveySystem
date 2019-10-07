window.onload = function() {
    document.getElementById('block2').style.display = 'none';
    document.getElementById('block3').style.display = 'none';
    document.getElementById('block4').style.display = 'none';
    document.getElementById('block5').style.display = 'none';
};

function generateOrg(){
    document.getElementById("block1").style.display = 'none';
    document.getElementById("block3").style.display = 'none';
    document.getElementById("block4").style.display = 'none';
    document.getElementById("block5").style.display = 'none';
    document.getElementById('block6').style.display = 'none';
    document.getElementById("block2").style.display = 'block';
}

/*function generatePro(){
    document.getElementById("block1").style.display = 'none';
    document.getElementById("block2").style.display = 'none';
    document.getElementById("block3").style.display = 'none';
    document.getElementById("block5").style.display = 'none';
    document.getElementById('block6').style.display = 'none';
    document.getElementById("block4").style.display = 'block';
}

function generateQues(){
    document.getElementById("block1").style.display = 'none';
    document.getElementById("block2").style.display = 'none';
    document.getElementById("block3").style.display = 'none';
    document.getElementById("block4").style.display = 'none';
    document.getElementById('block6').style.display = 'none';
    document.getElementById("block5").style.display = 'block';
}*/

function viewOrg() {
    document.getElementById("orgAdd").style.display = 'none';
    document.getElementById("orgModify").style.display = 'none';
    document.getElementById("orgDelete").style.display = 'none';
    document.getElementById("block6").style.display = 'block';
    document.getElementById("orgList").style.display = 'block';

    /*document.getElementById("profAdd").style.display = 'none';
    document.getElementById("profModify").style.display = 'none';
    document.getElementById("profDelete").style.display = 'none';
    document.getElementById("profList").style.display = 'none';
    document.getElementById("questAdd").style.display = 'none';
    document.getElementById("questModify").style.display = 'none';
    document.getElementById("questDelete").style.display = 'none';
    document.getElementById("questList").style.display = 'none';*/
}
function addOrg() {
    document.getElementById("orgList").style.display = 'none';
    document.getElementById("orgModify").style.display = 'none';
    document.getElementById("orgDelete").style.display = 'none';
    document.getElementById("block6").style.display = 'block';
    document.getElementById("orgAdd").style.display = 'block';

   /* document.getElementById("profAdd").style.display = 'none';
    document.getElementById("profModify").style.display = 'none';
    document.getElementById("profDelete").style.display = 'none';
    document.getElementById("profList").style.display = 'none';
    document.getElementById("questAdd").style.display = 'none';
    document.getElementById("questModify").style.display = 'none';
    document.getElementById("questDelete").style.display = 'none';
    document.getElementById("questList").style.display = 'none';*/
}
function modifyOrg() {
    document.getElementById("orgAdd").style.display = 'none';
    document.getElementById("orgList").style.display = 'none';
    document.getElementById("orgDelete").style.display = 'none';
    document.getElementById("block6").style.display = 'block';
    document.getElementById("orgModify").style.display = 'block';

   /* document.getElementById("profAdd").style.display = 'none';
    document.getElementById("profModify").style.display = 'none';
    document.getElementById("profDelete").style.display = 'none';
    document.getElementById("profList").style.display = 'none';
    document.getElementById("questAdd").style.display = 'none';
    document.getElementById("questModify").style.display = 'none';
    document.getElementById("questDelete").style.display = 'none';
    document.getElementById("questList").style.display = 'none';*/
}
function deleteOrg() {
    document.getElementById("orgAdd").style.display = 'none';
    document.getElementById("orgModify").style.display = 'none';
    document.getElementById("orgList").style.display = 'none';
    document.getElementById("block6").style.display = 'block';
    document.getElementById("orgDelete").style.display = 'block';

   /* document.getElementById("profAdd").style.display = 'none';
    document.getElementById("profModify").style.display = 'none';
    document.getElementById("profDelete").style.display = 'none';
    document.getElementById("profList").style.display = 'none';
    document.getElementById("questAdd").style.display = 'none';
    document.getElementById("questModify").style.display = 'none';
    document.getElementById("questDelete").style.display = 'none';
    document.getElementById("questList").style.display = 'none';*/
}

/*function viewProf() {
    document.getElementById("orgAdd").style.display = 'none';
    document.getElementById("orgModify").style.display = 'none';
    document.getElementById("orgDelete").style.display = 'none';
    document.getElementById("orgList").style.display = 'none';

    document.getElementById("questAdd").style.display = 'none';
    document.getElementById("questModify").style.display = 'none';
    document.getElementById("questDelete").style.display = 'none';
    document.getElementById("questList").style.display = 'none';

    document.getElementById("profAdd").style.display = 'none';
    document.getElementById("profModify").style.display = 'none';
    document.getElementById("profDelete").style.display = 'none';
    document.getElementById("block6").style.display = 'block';
    document.getElementById("profList").style.display = 'block';
}
function addProf() {
    document.getElementById("orgAdd").style.display = 'none';
    document.getElementById("orgModify").style.display = 'none';
    document.getElementById("orgDelete").style.display = 'none';
    document.getElementById("orgList").style.display = 'none';
    document.getElementById("questAdd").style.display = 'none';
    document.getElementById("questModify").style.display = 'none';
    document.getElementById("questDelete").style.display = 'none';
    document.getElementById("questList").style.display = 'none';

    document.getElementById("profList").style.display = 'none';
    document.getElementById("profModify").style.display = 'none';
    document.getElementById("profDelete").style.display = 'none';
    document.getElementById("block6").style.display = 'block';
    document.getElementById("profAdd").style.display = 'block';
}
function modifyProf() {
    document.getElementById("orgAdd").style.display = 'none';
    document.getElementById("orgModify").style.display = 'none';
    document.getElementById("orgDelete").style.display = 'none';
    document.getElementById("orgList").style.display = 'none';

    document.getElementById("questAdd").style.display = 'none';
    document.getElementById("questModify").style.display = 'none';
    document.getElementById("questDelete").style.display = 'none';
    document.getElementById("questList").style.display = 'none';

    document.getElementById("profAdd").style.display = 'none';
    document.getElementById("profList").style.display = 'none';
    document.getElementById("profDelete").style.display = 'none';
    document.getElementById("block6").style.display = 'block';
    document.getElementById("profModify").style.display = 'block';
}
function deleteProf() {
    document.getElementById("orgAdd").style.display = 'none';
    document.getElementById("orgModify").style.display = 'none';
    document.getElementById("orgDelete").style.display = 'none';
    document.getElementById("orgList").style.display = 'none';

    document.getElementById("questAdd").style.display = 'none';
    document.getElementById("questModify").style.display = 'none';
    document.getElementById("questDelete").style.display = 'none';
    document.getElementById("questList").style.display = 'none';

    document.getElementById("profAdd").style.display = 'none';
    document.getElementById("profModify").style.display = 'none';
    document.getElementById("profList").style.display = 'none';
    document.getElementById("block6").style.display = 'block';
    document.getElementById("profDelete").style.display = 'block';
}
function viewQuest() {
    document.getElementById("orgAdd").style.display = 'none';
    document.getElementById("orgModify").style.display = 'none';
    document.getElementById("orgDelete").style.display = 'none';
    document.getElementById("orgList").style.display = 'none';

    document.getElementById("profAdd").style.display = 'none';
    document.getElementById("profModify").style.display = 'none';
    document.getElementById("profList").style.display = 'none';
    document.getElementById("profDelete").style.display = 'none';

    document.getElementById("questAdd").style.display = 'none';
    document.getElementById("questModify").style.display = 'none';
    document.getElementById("questDelete").style.display = 'none';
    document.getElementById("block6").style.display = 'block';
    document.getElementById("questList").style.display = 'block';
}
function addQuest() {
    document.getElementById("orgAdd").style.display = 'none';
    document.getElementById("orgModify").style.display = 'none';
    document.getElementById("orgDelete").style.display = 'none';
    document.getElementById("orgList").style.display = 'none';

    document.getElementById("profAdd").style.display = 'none';
    document.getElementById("profModify").style.display = 'none';
    document.getElementById("profList").style.display = 'none';
    document.getElementById("profDelete").style.display = 'none';

    document.getElementById("questList").style.display = 'none';
    document.getElementById("questModify").style.display = 'none';
    document.getElementById("questDelete").style.display = 'none';
    document.getElementById("block6").style.display = 'block';
    document.getElementById("questAdd").style.display = 'block';
}
function modifyQuest() {
    document.getElementById("orgAdd").style.display = 'none';
    document.getElementById("orgModify").style.display = 'none';
    document.getElementById("orgDelete").style.display = 'none';
    document.getElementById("orgList").style.display = 'none';

    document.getElementById("profAdd").style.display = 'none';
    document.getElementById("profModify").style.display = 'none';
    document.getElementById("profList").style.display = 'none';
    document.getElementById("profDelete").style.display = 'none';

    document.getElementById("questAdd").style.display = 'none';
    document.getElementById("questList").style.display = 'none';
    document.getElementById("questDelete").style.display = 'none';
    document.getElementById("block6").style.display = 'block';
    document.getElementById("questModify").style.display = 'block';
}
function deleteQuest() {
    document.getElementById("orgAdd").style.display = 'none';
    document.getElementById("orgModify").style.display = 'none';
    document.getElementById("orgDelete").style.display = 'none';
    document.getElementById("orgList").style.display = 'none';

    document.getElementById("profAdd").style.display = 'none';
    document.getElementById("profModify").style.display = 'none';
    document.getElementById("profList").style.display = 'none';
    document.getElementById("profDelete").style.display = 'none';

    document.getElementById("questAdd").style.display = 'none';
    document.getElementById("questModify").style.display = 'none';
    document.getElementById("questList").style.display = 'none';
    document.getElementById("block6").style.display = 'block';
    document.getElementById("questDelete").style.display = 'block';
}*/
