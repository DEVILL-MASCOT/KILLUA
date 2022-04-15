let handler = async m => {

    const grouplink = `https://chat.whatsapp.com/JdCxJkOzJn38TRYq5Q5evp`

    m.reply(grouplink, m.sender) 

    m.reply('✅ Support group link has been successfully sent to your private')

}

handler.help = ['support']

handler.tags = ['info']

handler.command = /^support$/i

module.exports = handler
