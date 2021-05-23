$("#subscribe").validate({
    rules: {
        email: {
            required: true,
            email: true
        }
    },
    messages: {
        email: {
            email: "Please provide a valid email"
        }
    },
    errorLabelContainer: ".input-group-button__msg"
});