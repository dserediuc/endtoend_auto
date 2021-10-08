class Utils {

    /**
     * 
     * @returns Full Name
     */
    generateRandomString() {
        var firstName = "";
        var lastName = "";
        var randomAscii;
        for (var i = 0; i < 12; i++) {
          randomAscii = Math.floor(Math.random() * 25 + 97);
          firstName += String.fromCharCode(randomAscii);
          lastName += String.fromCharCode(randomAscii);
        }
        return firstName + " "+ lastName;
      }

          /**
     * 
     * @returns Email
     */
    generateEmail() {
        var email = "";
        var randomAscii;
        for (var i = 0; i < 15; i++) {
          randomAscii = Math.floor(Math.random() * 25 + 97);
          email += String.fromCharCode(randomAscii);
        }
        return email+"@mailinator.com";
      }
    
     generatePhoneNumber() {
        let result = '';
        let numbers = '0123456789';
        let numbersLength = numbers.length;
        for (let i = 0; i < 10; i++) {
            result += numbers.charAt(Math.floor(Math.random() * numbersLength));
        }
        return "+49"+result.toString();
    }

   }
   
   export default Utils;