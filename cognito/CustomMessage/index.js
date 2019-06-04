exports.handler = (event, context, callback) => {
    
    // Signup message
        if(event.triggerSource === "CustomMessage_SignUp" || event.triggerSource === "CustomMessage_ResendCode") {
            var username = event.userName
            var verificationCode = event.request.codeParameter
            
            // Ensure that your message contains event.request.codeParameter. This is the placeholder for code that will be sent
            event.response.smsMessage = "NOT IN USE" + event.request.codeParameter;
            event.response.emailSubject = "Welkom bij rookvrijspelen.nl";
            event.response.emailMessage = `
    Beste ${username},<br/> <br/> 
    
    Fijn dat je met ons meedoet om de speeltuinen in Nederland rookvrij te maken. <br/> 
    <a href='${process.env.linkUrlBase}login?type=signup&user=${username}&code=${verificationCode}'>
        Klik hier om je account te activeren</a><br/><br/> 
    
    Of voer deze code handmatig in: ${verificationCode} <br/><br/>
    We wensen je veel succes!<br/><br/>
    Team Rookvrij Spelen<br/> 
    `
        }
    
    // Password reset message
        if(event.triggerSource === "CustomMessage_ForgotPassword") {
            var username = event.userName
            var verificationCode = event.request.codeParameter
            
            // Ensure that your message contains event.request.codeParameter. This is the placeholder for code that will be sent
            event.response.smsMessage = "NOT IN USE" + event.request.codeParameter;
            event.response.emailSubject = "Wachtwoord reset rookvrijspelen.nl";
            event.response.emailMessage = `
    Beste ${username},<br/> <br/> 
    
    Er is een reset van je wachtwoord voor rookvrijspelen.nl aangevraagd. Negeer deze mail als jij dit niet hebt gedaan. <br/> 
    <a href='${process.env.linkUrlBase}login?type=reset_password&user=${username}&code=${verificationCode}'>
        Klik hier om je wachtwoord te resetten</a><br/><br/> 
    
    Of voer deze code handmatig in: ${verificationCode} <br/><br/>
    
    Team Rookvrij Spelen<br/> 
    `
        }
    
        // Return to Amazon Cognito
        callback(null, event);
    };