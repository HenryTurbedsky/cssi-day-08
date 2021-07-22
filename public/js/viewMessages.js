


let failedAttempts = 0;

const getMessages = () => {

    const passcode = document.querySelector("#passcode")
    const messagesRef = firebase.database().ref();
    const message = document.querySelector("#message")

    messagesRef.on('value', (snapshot) => {
        failedAttempts++;
        
        const data = snapshot.val()
        for(let key in data)
        {
            if(key === passcode.value)
            {
                message.innerHTML = data[key]
                failedAttempts = 0
            }
            else
            {
                message.innerHTML = "You have failed: " + failedAttempts
            }
        }
    })

    
}


