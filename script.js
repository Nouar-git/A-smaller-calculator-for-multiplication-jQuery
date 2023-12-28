$("#number-1, #number-2").on("input", function() {
    if ($("#number-1").val() !== "" && $("#number-2").val() !== "") {
        const result = parseInt($("#number-1").val()) * parseInt($("#number-2").val());
        $("#result-box").val(result);
    } else {
        $("#result-box").val("");
    }
});