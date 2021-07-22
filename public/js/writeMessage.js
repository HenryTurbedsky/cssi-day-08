


const onSubmit = () => {
    const passcode = document.querySelector("#passcode").value;
    const message = document.querySelector("#message").value;

    const payload = {
        passcode: passcode,
        message: message
    }

    const messagesRef = firebase.database().ref().push(payload);

}





