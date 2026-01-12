let labourPrice = 200;
let timePrice;
let numberOfPhotos = 0;
let numberOfVideos = 0;
let resPricePhoto;
let resPriceVideo;

let fullName = document.getElementById("fullName");
let contact = document.getElementById("Contact");
let email = document.getElementById("email");
let comment = document.getElementById("comment");

function validateAndCalculate() {
  numberOfPhotos = parseInt(document.getElementById("NumberOfPhotos").value);
  numberOfVideos = parseInt(document.getElementById("NumberOfVideos").value);

  if ((numberOfPhotos + numberOfVideos) < 5) {alert("Must have atleast 5 photos or videos");}
  else 
  {
    if (document.getElementById("2weeks").checked) {
      timePrice = 500;
    } else if (document.getElementById("1month").checked) {
      timePrice = 250;
    } else if (document.getElementById("2months").checked) {
      timePrice = 150;
    }
  
    if (document.getElementById("resolution1080p").checked) {
      resPricePhoto = 10;
      resPriceVideo = 50;
    } else if (document.getElementById("resolution1440p").checked) {
      resPricePhoto = 25;
      resPriceVideo = 150;
    } else if (document.getElementById("resolution4k").checked) {
      resPricePhoto = 40;
      resPriceVideo = 200;
    }
  
    price = labourPrice + timePrice + resPricePhoto * numberOfPhotos + resPriceVideo * numberOfVideos;
  
    document.getElementById("quotaion").innerHTML = "Quotation Details:";
    document.getElementById("labour").innerHTML = "Labour Cost: €200";
    document.getElementById("time").innerHTML = "Delivery Time: €" + timePrice;
    document.getElementById(
      "photos"
    ).innerHTML = `Photos: ${numberOfPhotos} x ${resPricePhoto} = €${
      resPricePhoto * numberOfPhotos
    }`;
    document.getElementById(
      "videos"
    ).innerHTML = `Videos: ${numberOfVideos} x ${resPriceVideo} = €${
      resPriceVideo * numberOfVideos
    }`;
    document.getElementById("total").style.textDecoration = "underline";
    document.getElementById("total").innerHTML = "Total price: €" + price;
    document.getElementById("quote").style.display = "block";
  }

  return false;
}

function resetQuoteForm() {
  document.getElementById("quote").style.display = "none";

  document.getElementById("2weeks").checked = true;
  document.getElementById("1month").checked = false;
  document.getElementById("2months").checked = false;

  document.getElementById("resolution1080p").checked = true;
  document.getElementById("resolution1440p").checked = false;
  document.getElementById("resolution4k").checked = false;

  document.getElementById("NumberOfPhotos").value = 0;
  document.getElementById("NumberOfVideos").value = 0;
}

function resetContactForm() {
  fullName.value = "";
  contact.value = "";
  email.value = "";
  comment.value = "";

  fullName.style = "border: 2px solid #3c4b33";
  contact.style = "border: 2px solid #3c4b33";
  email.style = "border: 2px solid #3c4b33";
  comment.style = "border: 2px solid #3c4b33";
}

function validateForm() {
  if (
    fullName.value == "" ||
    contact.value == "" ||
    contact.value.length < 8 ||
    email.value == "" ||
    comment.value == ""
  ) {
    alert(
      "Note: All inputs are Mandatory and the contact number must be at least 8 digits long. Please amend your entries and try again."
    );

    if (fullName.value == "") {
      fullName.style = "border: 2px solid red";
    } else {
      fullName.style = "border: 2px solid green";
    }

    if (contact.value == "" || contact.value.length < 8) {
      contact.style = "border: 2px solid red";
    } else {
      contact.style = "border: 2px solid green";
    }

    if (email.value == "") {
      email.style = "border: 2px solid red";
    } else {
      email.style = "border: 2px solid green";
    }

    if (comment.value == "") {
      comment.style = "border: 2px solid red";
    } else {
      comment.style = "border: 2px solid green";
    }

    return false;
  } else {
    window.location.href = "mailto:Glowingnachos07@gmail.com?subject=Client Contact&body=Full Name: "+fullName.value+
                                                                                      "%0AContact Number: "+contact.value+
                                                                                      "%0AEmail: "+email.value+
                                                                                      "%0A%0AComment: "+comment.value;
    alert("Thank You!");
    return true;
  }
}
