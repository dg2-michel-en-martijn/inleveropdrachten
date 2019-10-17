var veldenNed = ["Naam:","Adres:","Woonplaats:", "Postcode:", "Geboortedatum:", "Nationaliteit:", "Beroep:", "Opmerkingen: "];
var veldenEng = ["Name:","Address:","Residence:","Postalcode:","Date of Birth:","Nationality:","Work:", "Comments: "];
//Formule leeftijdberekening
function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}


//change background color
    $(document).ready(function(){
      var myform = document.getElementById('myForm');
      //man
        $('#man').click(function() {
          $(myform).css("background-color", "LightGreen");
          $("input[type='text']").css("background-color","LightGreen");
          $("input[type='date']").css("background-color","LightGreen");
        });
      //vrouw
        $('#vrouw').click(function(){
          $(myform).css("background-color", "pink");
          $("input[type='text']").css("background-color","pink");
          $("input[type='date']").css("background-color","pink");
        })
    });

//checken voor incorrecte velden
$(document).ready(function(){
  var naam = $("#naam");
  var adres = $("#adres");
  var woonplaats = $("#woonplaats");
  var postcode = $("#postcode");
  var geboortedatum = $("#geboortedatum");
  var nationaliteit = $("#nationaliteit");
  var beroep = $("#beroep");

  //name
  naam.keyup(() => {
    if(!/^\D*$/.test(naam.val())){
      $('#naam-error').fadeIn(300);
    } else {
      $('#naam-error').fadeOut(300);
    }
 })

//adress
 adres.keyup(() => {
   if(!/^[a-zA-Z$]*\s[1-9]*$/.test(adres.val())){
     $('#adress-error').fadeIn(300);
   } else {
     $('#adress-error').fadeOut(300);
   }
 })

 //woonplaats
 woonplaats.keyup(() => {
   if(!/^[a-zA-z]*$/.test(woonplaats.val())){
     $('#woonplaats-error').fadeIn(300);
   } else {
     $('#woonplaats-error').fadeOut(300);
   }
 })

 //postcode
 postcode.keyup(() => {
   if(!/^[0-9]{4}\s[a-zA-Z]{2}$/.test(postcode.val())){
     $('#postcode-error').fadeIn(300);
   } else {
     $('#postcode-error').fadeOut(300);
   }
 })

 //geboortedatun
 geboortedatum.keyup(() => {
   if(/^\d{4}-\d{2}-\d{2}$/.test(geboortedatum.val())){
     $('#geboortedatum-error').fadeIn(300);
   } else {
     $('#geboortedatum-error').fadeOut(300);
   }
 })

 //nationaliteit
 nationaliteit.keyup(() => {
   if(!/^\D*$/.test(nationaliteit.val())){
     $('#nationaliteit-error').fadeIn(300);
   } else {
     $('#nationaliteit-error').fadeOut(300);
   }
 })

 //beroep
 beroep.keyup(() => {
   if(!/^\D*$/.test(beroep.val())){
     $('#beroep-error').fadeIn(300);
   } else {
     $('#beroep-error').fadeOut(300);
   }
 })
});
