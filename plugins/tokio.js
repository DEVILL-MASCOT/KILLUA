let handler = async m => m.reply(`
ā *Tokio :* a whatsapp bot\n\nš *URL :* https://github.com/Chingkheinganba06/tokio-wabot
`.trim()) // repository
handler.help = ['tokio']
handler.tags = ['info']
handler.command = /^tokio|repo$/i

module.exports = handler
