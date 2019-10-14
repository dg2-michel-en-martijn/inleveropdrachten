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
  var naam = $("#naam");
  var adres = $("#adres");
  var plaats = $("#plaats");
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
});
