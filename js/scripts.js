function getAkanName () {
    var monthOfBirth = Number(document.getElementById("month-input").value);
    var dayOfBirth = Number(document.getElementById("day-input").value);
    var yearOfBirth = document.getElementById("year-input").value;
    var genders = document.getElementsByName("gender");
  
    function getGender () {
      for (var gender of genders){
        if (gender.checked){
          return gender.value;
        }
      }
    }
  
    var myGenderValue = getGender();
  
    console.log(myGenderValue);
  
    function monthValidator () {
      if (monthOfBirth < 1 || monthOfBirth > 12) {
        return false;
      } else {
        return true;
      }
    }
  
    function dayValidator () {
      if (monthOfBirth === 2 && Number(yearOfBirth)%4 === 0) {
        if (dayOfBirth > 28 || dayOfBirth < 1) {
          return false;
        } else if (monthOfBirth === 2 && dayOfBirth > 29) {
          return false;
        } else if (monthOfBirth === 2 && dayOfBirth < 1) {
          return false;
        } else {
          return true;
        }
      } else if (dayOfBirth < 1 || dayOfBirth > 31){
        return false;
      } else {
        return true;
      }
    }
  
    var monthValid = monthValidator();
    var dayValid = dayValidator();
  
    var dayOfWeekNumber = Math.floor((((Number(yearOfBirth.slice(0,2))/4)-2*Number(yearOfBirth.slice(0,2))-1)+
            ((5*Number(yearOfBirth.slice(2,4))/4))+((26*(monthOfBirth+1)/10))+dayOfBirth)%7);
  
    var maleAkanNames = [
        "KWASI", "KWADWO", "KWABENA", "KWAKU", "YAW", "KOFI", "KWAME"
      ];
    
      var femaleAkanNames = [
        "AKOSUA", "ADWOA", "ABENAA", "AKUA", "YAA", "AFUA", "AMA"
      ];
    var daysOfTheWeek = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday"
    ];
  
    if (myGenderValue == "male" && monthValid && dayValid){
      switch (dayOfWeekNumber) {

        case 1:
            document.getElementById('result').textContent = "You were born on a Sunday : your Akan name is " + maleAkanNames[0];
            document.getElementById('display-name').textContent = "This is your Akan name: ";
            return false;
            break;
          case 2:
            document.getElementById('result').textContent = "You were born on a Monday: your Akan name is " + maleAkanNames[1];
            document.getElementById('display-name').textContent = "This is your Akan name: ";
            return false;
            break;
          case 3:
            document.getElementById('result').textContent = "You were born on a Tuesday: your Akan name is " + maleAkanNames[2];
            document.getElementById('display-name').textContent = "This is your Akan name: ";
            return false;
            break;
          case 4:
            document.getElementById('result').textContent = "You were born on a Wednesday: your Akan name is " + maleAkanNames[3];
            document.getElementById('display-name').textContent = "This is your Akan name: ";
            return false;
            break;
          case 5:
            document.getElementById('result').textContent = "You were born on a Thursday: your Akan name is " + maleAkanNames[4];
            document.getElementById('display-name').textContent = "This is your Akan name: ";
            return false;
            break;
          case 6:
            document.getElementById('result').textContent = "You were born on a Friday: your Akan name is " + maleAkanNames[5];
            document.getElementById('display-name').textContent = "This is your Akan name: ";
            return false;
            break;
          case 7:
            document.getElementById('result').textContent = "You were born on a Saturday: your Akan name is " + maleAkanNames[6];
            document.getElementById('display-name').textContent = "This is your Akan name: ";
            return false;
            break;
          case 0:
            document.getElementById('result').textContent = "You were born on a: your Akan name is " + maleAkanNames[0];
            document.getElementById('display-name').textContent = "This is your Akan name: ";
            return false;
            break;
          default:
            alert("No Akan name found for you:(");
    
        }


      } else if(myGenderValue == "female" && monthValid && dayValid) {
        switch (dayOfWeekNumber) {

          case 1:
            document.getElementById('result').textContent = "You were born on a Sunday: your Akan name is " + femaleAkanNames[0];
            document.getElementById('display-name').textContent = "This is your Akan name: ";
            return false;
            break;
          case 2:
            document.getElementById('result').textContent = "You were born on a Monday: your Akan name is " + femaleAkanNames[1];
            document.getElementById('display-name').textContent = "This is your Akan name: ";
            return false;
            alert("Kwadwo");
            break;
          case 3:
            document.getElementById('result').textContent = "You were on a Tuesday: your Akan name is " + femaleAkanNames[2];
            document.getElementById('display-name').textContent = "This is your Akan name: ";
            return false;
            break;
          case 4:
            document.getElementById('result').textContent = "You were on a Wednesday: your Akan name is " + femaleAkanNames[3];
            document.getElementById('display-name').textContent = "This is your Akan name: ";
            return false;
            break;
          case 5:
            document.getElementById('result').textContent = "You were born on a Thursday: your Akan name is " + femaleAkanNames[4];
            document.getElementById('display-name').textContent = "This is your Akan name: ";
            return false;
            break;
          case 6:
            document.getElementById('result').textContent = "You were born on a Friday: your Akan name is " + femaleAkanNames[5];
            document.getElementById('display-name').textContent = "This is your Akan name: ";
            return false;
            break;
          case 7:
            document.getElementById('result').textContent = "You were born on a Saturday: your Akan name is " + femaleAkanNames[6];
            document.getElementById('display-name').textContent = "This is your Akan name: ";
            return false;
            break;
          case 0:
            document.getElementById('result').textContent = "You were on a : your Akan name is " + femaleAkanNames[0];
            document.getElementById('display-name').textContent = "This is your Akan name: ";
            return false;
            break;
          default:
            alert("No akan name found for you:(");
          }
        } else{
          alert("You entered invalid month or day");
        }
      }