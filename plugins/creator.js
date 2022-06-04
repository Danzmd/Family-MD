const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = "BEGIN:VCARD\nVERSION:3.0\nN:1;;Ndaa;;\nFN:Ndaa\nitem1.TEL;waid=6288239928939:+62 882-3992-8939\nitem1.X-ABLabel:Ponsel\nX-WA-BIZ-NAME:NdaaBotz-MD\nEND:VCARD"
                conn.sendMessage(m.chat, { contacts: { contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
