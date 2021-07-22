

const onSubmit = () => {
    const passcode = document.querySelector("#passcode").value;
    const message = document.querySelector("#message").value;

    const payload = {
        passcode: passcode,
        message: message
    }

    //const messagesRef = firebase.database().ref().push(payload);

    console.log( "enterData(passcode): " + enterData(passcode) )

}


const enterData = (passcode) =>
{   
    const messagesRef = firebase.database().ref();

    console.log(messagesRef.get())

    messagesRef.get((snapshot) => {
        const data = snapshot.val()

        for(let key in data)
        {
            console.log("data[key].passcode: " + data[key].passcode)
            console.log("passcode: " + passcode)
            if(data[key].passcode == passcode)
            {
                console.log("found key: " + key)
                return key
            }
        }
        
        console.log("found nothing")
        return null
    })
}




