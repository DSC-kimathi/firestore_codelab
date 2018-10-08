// Initialize Firebase
var config = {
    apiKey: "AIzaSyB6D1HEbReopwwtE2ZizZb3FB172TEknmQ",
    authDomain: "dsc-codelab.firebaseapp.com",
    databaseURL: "https://dsc-codelab.firebaseio.com",
    projectId: "dsc-codelab",
    storageBucket: "dsc-codelab.appspot.com",
    messagingSenderId: "267664234148"
};
firebase.initializeApp(config);

var firestore = firebase.firestore();

document.getElementById('rsave').addEventListener('click', SaveRecord);

function SaveRecord(e) {
    e.preventDefault();
    console.log("I am clicked");
    var semail = document.getElementById('inputEmail').value;
    var sname = document.getElementById('inputName').value;

    // Add a new document in collection "Members"
    MembersRef = firestore.collection("Members").doc();
    MembersRef.set({
            name: sname,
            email: semail
        })
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
}