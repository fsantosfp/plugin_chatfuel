class ChatfuelResponse {

    constructor(){}

    format(intent, block){
        return {
            intentDetected : intent,
            redirect_to_blocks : [block]
        }
    }

}

module.exports = ChatfuelResponse