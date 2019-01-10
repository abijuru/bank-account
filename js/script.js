$(".contact").last().click(function() {
    $("#show-contact").show();
    $("#show-contact h2").text(newContact.name);
    $(".name").text(newContact.name);
    $(".initial-deposit").text(newContact.initialDeposit);
        $(".deposit-amount").text(newContact.depositAmount);
        $(".withdrowl-amount").text(newContact.withdrowlAmount);
         

      });  


// business logic
function Contact(name, amount) {
    this.name = name;
    this.initialAmount = amount;
    this.withdrowlAmount=amount;
    this.depositAmount=amount;

  }
  
  Contact.prototype.fullName = function() {
    return this.name + " " + this. initialAmount + ""  +this.withdrowlAmount + this.withdrowlAmount ;
  }
  

   