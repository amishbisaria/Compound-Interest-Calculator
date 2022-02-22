$(document).ready(function () {
  $(".calculate").click(function () {
    let initial = $("#initial").val();
    let interest = $("#interest").val();
    let time = $("#time").val();
    let compound = $("#compound").val();
    $.ajax({
      url: "/calculate",
      type: "get",
      data: {
        initial: initial,
        interest: interest,
        time: time,
        compound: compound,
      },
      success: function (response) {
        console.log(response);
        $("#compoundInterest").html("Compound Interest: $" + response);
        $("#total").html(
          "Total: $" +
            parseFloat(parseFloat(initial) + parseFloat(response)) +
            ""
        );
      },
      error: function (xhr) {
        console.log("Error");
      },
    });
  });
});
