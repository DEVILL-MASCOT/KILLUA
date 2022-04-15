let handler = async m => {

    const grouplink = `https://chat.whatsapp.com/JdCxJkOzJn38TRYq5Q5evp`

    m.reply(grouplink) 

}

handler.help = ['support']

handler.tags = ['info']

handler.command = /^support$/i

module.exports = handler
