//arrays
var nedvelden = ["Naam:","Adres:","Woonplaats:","Postcode:","Geboortedatum:","Nationaliteit:","Beroep:"];
var engvelden = ["Naam:","Adres:","Woonplaats:","Postcode:","Geboortedatum:","Nationaliteit:","Beroep:"];

//Formule leeftijdberekening
function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

//checken voor incorrecte nedvelden
$(document).ready(function(){
  $("#nedbutton").click(function(){
    var naam = $("#divfield1").val();
    var adres = $("#divfield2").val();
    var plaats = $("#divfield3").val();
    var postcode = $("#divfield4").val();
    var geboortedatum = $("#divfield5").val();
    var nationaliteit = $("#divfield6").val();
    var beroep = $("#divfield7").val();
    //name
    if(!/^\D*$/.test(name)){
      alert("Naam is niet correct");
    }
    //adres
    if(!/^[a-zA-Z$]*\s[1-9]*$/.test(adres)){
      alert("Adres is niet correct");
    }
    //plaats
    if(!/^[a-zA-z]*$/.test(plaats)){
      alert("Plaats is niet correct");
    }
    //postcode
    if(!/^[0-9]{4}\s[a-zA-Z]{2}$/.test(postcode)){
      alert("Postcode is niet correct");
    }
    //geboortedatum
    if(/^\d{4}-\d{2}-\d{2}$/.test(geboortedatum)){
      let age = getAge(geboortedatum);
      $("#oud").text("Je word " + (age+=1) + " jaar oud");
      $("#oud").fadeIn("slow");
    }
    //Nationaliteit
    if(!/^\D*$/.test(nationaliteit)){
      alert("Nationaliteit is niet correct");
    }
    //beroep
    if(!/^\D*$/.test(beroep)){
      alert("Beroep is niet correct");
    }
  });


  //checken voor incorrecte engvelden
  $("#engbutton").click(function(){
    var engname = $("#divfield8").val();
    var engadres = $("#divfield9").val();
    var engplaats = $("#divfield10").val();
    var engpostcode = $("#divfield11").val();
    var enggeboortedatum = $("#divfield12").val();
    var engnationaliteit = $("#divfield13").val();
    var engberoep = $("#divfield14").val();
    //Name
    if(!/^\D*$/.test(divfield1)){
      alert("Name is not correct");
    }
    //adress
    if(!/^[a-zA-Z$]*\s[1-9]*$/.test(divfield2)){
      alert("Address is not correct");
    }
    //residence
    if(!/^[a-zA-z]*$/.test(divfield3)){
      alert("Residence is not correct");
    }
    //postalcode
    if(!/^[0-9]{4}\s[a-zA-Z]{2}$/.test(divfield4)){
      alert("Postalcode is not correct");
    }
    //age
    if(/^\d{4}-\d{2}-\d{2}$/.test(divfield5)){
      let age = getAge(divfield5);
      $("#engoud").text("Je word " + (age+=1) + " jaar oud");
      $("#engoud").fadeIn("slow");
    }else{
      alert("Date Of Birth is not correct");
    }
    //nationality
    if(!/^\D*$/.test(divfield6)){
      alert("Nationality is not correct");
    }
    //work
    if(!/^\D*$/.test(divfield7)){
      alert("Work is not correct");
    }
    });
  });
