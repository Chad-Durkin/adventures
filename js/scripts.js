function Destination(location, landmarks, season, activities) {
  this.location = location;
  this.landmarks = landmarks;
  this.season = season;
  this.activities = activities;
};


$(document).ready(function() {
  $("form#new-destination").submit(function(event) {
  event.preventDefault();

  var inputtedLocation = $("input#new-location").val();
  var inputtedLandmarks = $("input#new-landmarks").val();
  var inputtedSeason = $("input#new-season").val();
  var inputtedActivities = $("input#new-activities").val();

  var newDestination = new Destination(inputtedLocation, inputtedLandmarks, inputtedSeason, inputtedActivities);

  $("ul#destinations").append("<li><span class='theDestination'>" + newDestination.location + "</span></li>");

  $(".theDestination").last().click(function() {
    $("#show-destination").show();
    $("#show-destination h2").text(newDestination.location);
    $(".location").text(newDestination.location);
    $(".landmarks").text(newDestination.landmarks);
    $(".season").text(newDestination.season);
    $(".activities").text(newDestination.activities);
  });

  $("input#new-location").val("");
  $("input#new-landmarks").val("");
  $("input#new-season").val("");
  $("input#new-activities").val("");

  });
});
