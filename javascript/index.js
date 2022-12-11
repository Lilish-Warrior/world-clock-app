setInterval(function () {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = document.querySelector(".date");
  let losAngelesTimeElement = document.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>] A [</small>]"
  );
}, 1000);
