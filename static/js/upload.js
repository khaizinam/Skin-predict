$(document).ready(function () {
  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      $("#image-upload-name").text(input.files[0].name);

      reader.onload = function (e) {
        console.log(e.target);
        $("#img-upload").attr("src", e.target.result);
        $(".image-uploaded-container").addClass("active");
        $("#upload").addClass("active");
        $("#image-upload-name").addClass("active");
      };

      reader.readAsDataURL(input.files[0]);
    }
  }

  $("#imgInp").change(function () {
    readURL(this);
  });
  $(".form-group").on("submit", function (event) {
    event.preventDefault();
    $.ajax({
      url: $(this).attr("action"),
      type: "post",
      data: $(this).serialize(),
    })
      .success(function (data) {
        console.log(data);
        $("#result").html(`
            <div>Accuracy: <strong>${data.acc}</strong></div>
            <div>Disease Predicted:</div>
            <div><strong>${data.predictions}</strong></div>
        `);
      })
      .error(function (data) {
        console.log(data);
      });
  });
});
