/* globals $ FormData */
var scoutNames = [
  { name: "Danny" },
  { name: "Sam" },
  { name: "Karen" },
  { name: "Clara" },
  { name: "Jack Brandon" },
  { name: "Andy" },
  { name: "Sean" },
  { name: "Trace" },
  { name: "Addison" },
  { name: "Jack Barnhart" },
  { name: "Jackson" },
  { name: "Michael" },
  { name: "Leland" },
  { name: "Donavan" },
  { name: "Ben McIlvaine" },
  { name: "Laila" },
  { name: "Jacob" },
  { name: "Nate" },
  { name: "Paige" },
  { name: "Ben Weatherill" },
  { name: "Elliot" },
  { name: "... GUEST ..." }
];

var teamNames = [
  { num: 95, name: "Grasshoppers", insta_link: null },
  {
    num: 133,
    name: "B.E.R.T.",
    insta_link: "https://www.instagram.com/frcbert133/"
  },
  {
    num: 151,
    name: "Tough Techs",
    insta_link: "https://www.instagram.com/toughtechs151/"
  },
  { num: 190, name: "Team 190", insta_link: "" },
  { num: 254, name: "Cheesy Poofs", insta_link: "" },
  {
    num: 319,
    name: "Big Bad Bob",
    insta_link: "https://www.instagram.com/bigbadbob319/"
  },
  {
    num: 467,
    name: "The Colonials",
    insta_link: "https://www.instagram.com/shrewsburyrobotics467/"
  },
  {
    num: 501,
    name: "Power Knights",
    insta_link: "https://www.instagram.com/frcteam501/"
  },
  { num: 663, name: "Robonauts", insta_link: "" },
  { num: 811, name: "Cardinals", insta_link: "" },
  { num: 971, name: "Spartan Robotics", insta_link: "" },
  {
    num: 1058,
    name: "PVC Pirates",
    insta_link: "https://www.instagram.com/frcteam1058/"
  },
  {
    num: 1307,
    name: "Robosaints",
    insta_link: "https://www.instagram.com/1307robosaints/"
  },
  { num: 1512, name: "Big Red", insta_link: "" },
  { num: 1517, name: "AMP'D UP", insta_link: "" },
  { num: 1519, name: "Mechanical Mayhem", insta_link: "" },
  {
    num: 1729,
    name: "Inconceivable",
    insta_link: "https://www.instagram.com/team_1729/"
  },
  {
    num: 1831,
    name: "Screaming Eagles",
    insta_link: "https://www.instagram.com/frc_1831/"
  },
  {
    num: 3566,
    name: "Gone Fishing",
    insta_link: "https://www.instagram.com/robotics3566/"
  },
  {
    num: 3609,
    name: "Duct Tape Dragons",
    insta_link: "https://www.instagram.com/frc3609/"
  },
  {
    num: 4761,
    name: "Roborockets",
    insta_link: "https://www.instagram.com/robockets.4761/"
  },
  {
    num: 4905,
    name: "Andromeda One",
    insta_link: "https://www.instagram.com/frc4905/"
  },
  {
    num: 4909,
    name: "Bionics",
    insta_link: "https://www.instagram.com/team4909/"
  },
  {
    num: 4929,
    name: "Maroon Monsoon",
    insta_link: "https://www.instagram.com/frcteam4929/"
  },
  {
    num: 5633,
    name: "Hyde Mecha Wolves",
    insta_link: "https://www.instagram.com/hyde.robotics/"
  },
  {
    num: 5687,
    name: "Outliers",
    insta_link: "https://www.instagram.com/frc5687/"
  },
  {
    num: 5902,
    name: "The Wire Clippers",
    insta_link: "https://www.instagram.com/frc5902/"
  },
  {
    num: 6153,
    name: "The Blue Crew",
    insta_link: "https://www.instagram.com/bluecrewrobotics/"
  },
  {
    num: 6161,
    name: "Equilibrium",
    insta_link: "https://www.instagram.com/team_6161/"
  },
  { num: 6691, name: "Torque", insta_link: "" },
  {
    num: 6763,
    name: "FUSION",
    insta_link: "https://www.instagram.com/fusion6763/"
  },
  {
    num: 6933,
    name: "Archytas",
    insta_link: "https://www.instagram.com/archytasrobotics/"
  },
  { num: 7133, name: "Steam Makers", insta_link: "" },
  {
    num: 7416,
    name: "Northern Horizons",
    insta_link: "https://www.instagram.com/northernhorizons7416/"
  },
  { num: 7913, name: "'Bear'ly Functioning", insta_link: "" },
  { num: 8046, name: "Laker Bots", insta_link: "" }
];

$(document).ready(() => {
  $("#the-section-with-questions")
    .addClass("d-block")
    .removeClass("d-none");
  $("#the-section-after-pressing-submit")
    .addClass("d-none")
    .removeClass("d-block");

  // START OFFLINE DATA ACCESS
  loadLocalScouts();
  loadLocalTeams();
  // END OFFLINE DATA ACCESS

  // // START ONLINE DATA ACCESS
  //   $.ajax({
  //     url: "/team/",
  //     type: "GET",
  //     dataType: "json",
  //     success: data => {
  //       console.log("You received some data!", data);
  //       $.each(data, function(i, item) {
  //         $("#numBox").append(
  //           $("<option>", {
  //             value: item.num,
  //             text: item.num + ": " + item.name
  //           })
  //         );
  //       });
  //     }
  //   });

  //   $.ajax({
  //     url: "/user/",
  //     type: "GET",
  //     dataType: "json",
  //     success: data => {
  //       console.log("You received some data!", data);
  //       $.each(data, function(i, item) {
  //         $("#nameBox").append(
  //           $("<option>", {
  //             value: item.num,
  //             text: item.name
  //           })
  //         );
  //       });
  //     }
  //   });
  // // END ONLINE DATA ACCESS

  
    let inner_high_auto_balls_count = 0;
  $("#inner_high_auto_button").click(function() {
    inner_high_auto_balls_count++;
    $("#inner_high_auto_balls").html(inner_high_auto_balls_count);
  });
  $("#inner_high_auto_minus_button").click(function() {
    inner_high_auto_balls_count--;
    $("#inner_high_auto_balls").html(inner_high_auto_balls_count);
  });
  let high_auto_balls_count = 0;
  $("#high_auto_button").click(function() {
    high_auto_balls_count++;
    $("#high_auto_balls").html(high_auto_balls_count);
  });
  $("#high_auto_minus_button").click(function() {
    high_auto_balls_count--;
    $("#high_auto_balls").html(high_auto_balls_count);
  });
  let low_auto_balls_count = 0;
  $("#low_auto_button").click(function() {
    low_auto_balls_count++;
    $("#low_auto_balls").html(low_auto_balls_count);
  });
  $("#low_auto_minus_button").click(function() {
    low_auto_balls_count--;
    $("#low_auto_balls").html(low_auto_balls_count);
  });
  let inner_high_balls_count = 0;
  $("#inner_high_button").click(function() {
    inner_high_balls_count++;
    $("#inner_high_balls").html(inner_high_balls_count);
  });
  $("#inner_high_minus_button").click(function() {
    inner_high_balls_count--;
    $("#inner_high_balls").html(inner_high_balls_count);
  });
  let high_balls_count = 0;
  $("#high_button").click(function() {
    high_balls_count++;
    $("#high_balls").html(high_balls_count);
  });
  $("#high_minus_button").click(function() {
    high_balls_count--;
    $("#high_balls").html(high_balls_count);
  });
  let low_balls_count = 0;
  $("#low_button").click(function() {
    low_balls_count++;
    $("#low_balls").html(low_balls_count);
  });
  $("#low_minus_button").click(function() {
    low_balls_count--;
    $("#low_balls").html(low_balls_count);
  });

  
//   $.ajax({
//     url: "/team/",
//     type: "GET",
//     dataType: "json",
//     success: data => {
//       console.log("You received some team data!", data);
//       $("#teamBox").empty();
//       $.each(data, function(i, item) {
//         $("#teamBox").append(
//           $("<option>", {
//             value: item.num,
//             text: item.num + ": " + item.name
//           })
//         );
//       });
//     }
//   });
  
//   $.ajax({
//     url: "/event/",
//     type: "GET",
//     dataType: "json",
//     success: data => {
//       console.log("You received some event data!", data);
//       $.each(data, function(i, item) {
//         $("#eventBox").append(
//           $("<option>", {
//             value: item.blue_alliance_code,
//             text: item.name
//           })
//         );
//       });
//       $("#eventBox").val("2020nhgrs");
//     }
//   });

//   $.ajax({
//     url: "/user/",
//     type: "GET",
//     dataType: "json",
//     success: data => {
//       console.log("You received some user data!", data);
//       $.each(data, function(i, item) {
//         $("#nameBox").append(
//           $("<option>", {
//             value: item.num,
//             text: item.name
//           })
//         );
//       });
//     }
//   });

//   $("#nameBox").change(e => {
//     $.ajax({
//       url: "/match/" + $("#eventBox").val(),
//       type: "GET",
//       dataType: "json",
//       success: data => {
//         console.log("You received some match data!", data);
//         $.each(data, function(i, item) {
//           $("#matchBox").append(
//             $("<option>", {
//               value: item.match_num,
//               text: item.match_num
//             })
//           );
//         });
//       }
//     });
//     $("#matchBoxDiv").removeClass("invisible");
//   });

//   $("#matchBox").change(e => {
//     $("#matchBox").prop( "disabled", true );
//     $.ajax({
//       url:
//         "/teams-for-match/" + $("#eventBox").val() + "/" + $("#matchBox").val(),
//       type: "GET",
//       dataType: "json",
//       success: data => {
//         console.log("You received some teams-for-match data!", data);
//         $("#teamBox option").each(function() {
//           var teamWeMightRemove = parseInt($(this).val());
//           if (teamWeMightRemove > 0 && !data.includes(teamWeMightRemove)) {
//             $(this).remove();
//           }
//         });

//         // now see whether there are any match teams that we don't have registered
//         $("#teamBox option").each(function() {
//           var teamWeMightRemove = parseInt($(this).val());
//           var index = data.indexOf(teamWeMightRemove);
//           if (index >= 0) {
//             data.splice(index, 1);
//           }
//         });
        
//         if (data.length > 0) {
//           var teamList = "";
//           $.each(data, function (i, item) {
//             teamList += " " + item;
//           })
//           $("#teamsWarningSpan").html("These teams need to be added to our database: " + teamList);
//           $("#teamsWarningSpan").removeClass("invisible");
//         }
        
//         // //$("#teamBox").empty();
//         // $.each(data, function(i, item) {
//         //   $("#teamBox option[value='" + item.num + "']").remove();
//         //   // $("#teamBox").append(
//         //   //   $("<option>", {
//         //   //     value: item.num,
//         //   //     text: item.num + ": " + item.name
//         //   //   })
//         //   // );
//         // });
//       }
//     });
//     $("#teamBoxDiv").removeClass("invisible");
//   });

//   $("#teamBox").change(e => {
//     $("#fullFormDiv").removeClass("invisible");
//   });

//   $("#insertButton").click(e => {
//     e.preventDefault();
//     let controlPanelValue = 0;
//     $('input[name="control_panel_checkbox"]:checked').each(function() {
//       controlPanelValue += parseInt(this.value);
//     });
//     let endpositionValue = 0;
//     $('input[name="endposition_checkbox"]:checked').each(function() {
//       endpositionValue += parseInt(this.value);
//     });
//     let aggressionValue = 0;
//     $('input[name="aggression_checkbox"]:checked').each(function() {
//       aggressionValue += parseInt(this.value);
//     });
//     $.ajax({
//       // all URLs are relative to http://localhost:3000/
//       url: "/match-report/",
//       type: "POST", // <-- this is POST, not GET
//       data: {
//         match_num: $("#matchBox").val(),
//         team_num: $("#teamBox").val(),
//         starting_position: $('input[name="starting_radio"]:checked').val(),
//         inner_auto: parseInt($("#inner_high_auto_balls").text()),
//         high_auto: parseInt($("#high_auto_balls").text()),
//         low_auto: parseInt($("#low_auto_balls").text()),
//         inner: parseInt($("#inner_high_balls").text()),
//         high: parseInt($("#high_balls").text()),
//         low: parseInt($("#low_balls").text()),
//         control_panel: controlPanelValue,
//         end_position: endpositionValue,
//         aggression: aggressionValue,
//         trench: $('input[name="trench_radio"]:checked').val(),
//         notes: $("#notesBox").val(),
//         created_time: Date.now(),
//         created_by: $("#nameBox").val()
//       },
//       success: data => {
//         console.log(data.message);
//         $("#the-section-with-questions")
//           .addClass("d-none")
//           .removeClass("d-block");
//         $("#the-section-after-pressing-submit")
//           .addClass("d-block")
//           .removeClass("d-none");
//         $("#after-title").html("You did it!");
//         $("#after-status").html(data.message);
//       }
//     });
//   });
  
  
  
  
  
  $("#createQr").click(e => {
    e.preventDefault();
    let controlPanelValue = 0;
    $('input[name="control_panel_checkbox"]:checked').each(function() {
      controlPanelValue += parseInt(this.value);
    });
    let endpositionValue = 0;
    $('input[name="endposition_checkbox"]:checked').each(function() {
      endpositionValue += parseInt(this.value);
    });
    let aggressionValue = 0;
    $('input[name="aggression_checkbox"]:checked').each(function() {
      aggressionValue += parseInt(this.value);
    });
    $("#qrcode").html("");
    // generate qr code
    var qrcode = new QRCode(document.getElementById("qrcode"), {
      // scouting_type, teamNum, weight, trench, ball, shooter, notes, created_time, created_by, drive_train
      text:
        "match," +
        $("#matchBox").val() +
                    "," +
        $("#teamBox").val() +
                    "," +
         $('input[name="starting_radio"]:checked').val() +
                    "," +
      parseInt($("#inner_high_auto_balls").text()) +
                          "," +
      parseInt($("#high_auto_balls").text()) +
                          "," +
      parseInt($("#low_auto_balls").text()) +
                          "," +
      parseInt($("#inner_high_balls").text()) +
                          "," +
      parseInt($("#high_balls").text()) +
                          "," +
      parseInt($("#low_balls").text()) +
                          "," +
      controlPanelValue +
                          "," +
      endpositionValue +
                          "," +
      aggressionValue +
                          "," +
      $('input[name="trench_radio"]:checked').val() +
                          "," +
      Date.now() +
                          "," +
      $("#nameBox").val(),
      width: 256,
      height: 256,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });

    $("#clearFormButton").removeClass("invisible");
  
  });

  $("#clearFormButton").click(e => {
    e.preventDefault();
    location.reload();
    return false;
  });
  
  // define a generic Ajax error handler:
  // http://api.jquery.com/ajaxerror/
  $(document).ajaxError(() => {
    $("#status").html("Error: unknown ajaxError!");
  });
});

function loadLocalScouts() {
  $.each(scoutNames, function(i, item) {
    $("#nameBox").append(
      $("<option>", {
        value: item.name,
        text: item.name
      })
    );
  });
}

function loadLocalTeams() {
  $.each(teamNames, function(i, item) {
    $("#teamBox").append(
      $("<option>", {
        value: item.num,
        text: item.num + ": " + item.name
      })
    );
  });
}


window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}