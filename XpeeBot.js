// [ N O - H A P U S - C R E D I T ] \\

// - CREATED BY XpeeBOT

// THANKS TO : // Dika \\ JANGAN DI HAPUS, TAMBAHIN NICK MU AJA DI BAWAH.
               // Zeeone \\ JANGAN DI HAPUS, TAMBAHIN NICK MU AJA DI BAWAH.
               // Sanzy \\ JANGAN DI HAPUS, TAMBAHIN NICK MU AJA DI BAWAH.
               // Dio \\ JANGAN DI HAPUS, TAMBAHIN NICK MU AJA DI BAWAH.
               // Thunder_XM TEAM \\ JANGAN DI HAPUS, TAMBAHIN NICK MU AJA DI BAWAH.
               // XP TEAM JANGAN DI HAPUS, TAMBAHIN NICK MU AJA DI BAWAH.
               // Nezzy \\ JANGAN DI HAPUS, TAMBAHIN NICK MU AJA DI BAWAH.
               // Arifi Razzaq \\ JANGAN DI HAPUS, TAMBAHIN NICK MU AJA DI BAWAH.
               // Zian \\ JANGAN DI HAPUS, TAMBAHIN NICK MU AJA DI BAWAH.
               // Fatih \\ JANGAN DI HAPUS, TAMBAHIN NICK MU AJA DI BAWAH.
               // ReyJyu \\ JANGAN DI HAPUS, TAMBAHIN NICK MU AJA DI BAWAH.
               // Alice \\ JANGAN DI HAPUS, TAMBAHIN NICK MU AJA DI BAWAH.
               
               
               // E   \\
                  // N   \\
                    // J   \\
                      // O   \\
                        // Y   \\
               

// --------------- [ B A T A S ] --------------- \\

require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
let { addLevelingId, addLevelingLevel, addLevelingXp, getLevelingId, getLevelingLevel, getLevelingXp } = require("./lib/lvlfunction")
const speedofbot = require("performance-now")

// - E D I T - T H U M B N A I L - \\
let nyx = fs.readFileSync('./media/mynx.jpg')
// [ A K H I R ] \\

//_ DATABASE \\
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
// [ A K H I R \\

//_ D R \\
global.db = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db) global.db = {
    sticker: {},
    database: {},
    game: {},
    others: {},
    users: {},
    chats: {},
    ...(global.db || {})
}
let tebaklagu = db.game.tebaklagu = []
let _family100 = db.game.family100 = []
let kuismath = db.game.math = []
let tebakgambar = db.game.tebakgambar = []
let tebakkata = db.game.tebakkata = []
let caklontong = db.game.lontong = []
let caklontong_desk = db.game.lontong_desk = []
let tebakkalimat = db.game.kalimat = []
let tebaklirik = db.game.lirik = []
let tebaktebakan = db.game.tebakan = []
let vote = db.others.vote = []
	
module.exports = nyx = async (nyx, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await nyx.decodeJid(nyx.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    
// [ A K H I R ] \\
	
// --------------- Grup --------------- \\
        const groupMetadata = m.isGroup ? await nyx.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const isAntiLink = m.isGroup ? antilink.includes(m.chat) : false
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	
  // [ A K H I R ] \\
	
//════════[ RUNTIME NYA BANG ]═════════//
const runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " Day, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " Hour, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " Minute, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " second" : " Second") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
}

// [ A K H I R ] \\
	
// FAKE REPLY \\
	const reply = (teks) => {
            nyx.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `Jangan Lupa Join`,"body": ` Official Group XpeeBOT`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./media/nfound.jpg`),"sourceUrl": "https://chat.whatsapp.com/JopHTEHknc91zjtf9IepKB"}}}, { quoted: m})
        }
        
        const repls = (teks) => {
            nyx.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` Developer XpeeBOT`,"body": ` Nomer Orang Gantenk`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./media/mynx.jpg`),"sourceUrl": "https://wa.me/6289652948525"}}}, { quoted: m})
        }
        
        // [ A K H I R ] \\
try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.users[m.sender]
            if (typeof user !== 'object') global.db.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
            let chats = global.db.chats[m.chat]
                if (typeof chats !== 'object') global.db.chats[m.chat] = {}
                if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('wame' in chats)) chats.wame = false
             } else global.db.chats[m.chat] = {
                mute: false,
                wame: false,
        }
        } catch (err) {
            console.error(err)
        }
	    

//Mode Public & Self\\
        if (!nyx.public) {
            if (!m.key.fromMe) return
        }
        // [ A K H I R ] \\

//Console Push Msg & Autoread\\
        if (m.message) {
            nyx.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
        // [ A K H I R ] \\
	
//Leveling\\
const levelRole = getLevelingLevel(m.sender)
	  var role = 'bronz'
	  if (levelRole <= 3) {
	role = 'Copper'
	  } else if (levelRole <= 5) {
	role = 'Iron'
	  } else if (levelRole <= 7) {
	role = 'Silver'
	  } else if (levelRole <= 10) {
	role = 'Gold'
	  } else if (levelRole <= 12) {
	role = 'Platinum'
	  } else if (levelRole <= 15) {
	role = 'Mithril'
	  } else if (levelRole <= 18) {
	role = 'Orichalcum'
	  } else if (levelRole <= 25) {
	role = 'Adamantite'
	  } else if (levelRole <= 45) {
	role = 'Good In Game'
	  }
	// [ A K H I R ] \\
	
//Antilink Detector\\
	if (isAntiLink) 
if (budy.includes('https://chat.whatsapp.com/')) {
               if (!m.key.fromMe) {
               reply('*LINK DETECTED*\nWow, how naughty, this group has been installed with Antilink...\nGood Bye To You..')
               let sianj = m.sender
               await nyx.groupParticipantsUpdate(m.chat, [sianj], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
               }
	  }
	if (db.chats[m.chat].wame) {
        if (budy.match(`wa.me/`)) {
        m.reply(`「 WA.ME DETECTED 」\n\nYou have been detected sending a wa.me link, sorry you will be kicked !`)
          if (!isBotAdmins) return m.reply(`Bot must be admin first`)
        let gclink = (`https://wa.me/`)
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`Eh sorry it didn't happen, because you sent this wa.me link`)
        if (isAdmins) return m.reply(`Ehh sorry you admin :D`)
        if (isCreator) return m.reply(`Ehh sorry you are the owner of me`)
        nyx.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        // [ A K H I R ] \\
//Mute Chat\\
      if (db.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }
      // [ A K H I R ] \\
//D1M\\
	setInterval(() => {
            fs.writeFileSync('./src/database.json', JSON.stringify(global.db, null, 2))
        }, 60 * 1000)

 // [ A K H I R ] \\
 
//Reset Limit\\
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Kolkata"
        })
	    
	     // [ A K H I R ] \\
	     
//Cmd Respon Sama Media\\
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
        let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: nyx.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, nyx.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        nyx.ev.emit('messages.upsert', msg)
        }
	    
	     // [ A K H I R ] \\
	     
	     // GAMES \\
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?give up|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Answer the following questions :\n${room.soal}\n\n\nThere is ${room.jawaban.length} Answer ${room.jawaban.find(v => v.includes(' ')) ? `(some answers have spaces)` : ''}
${isWin ? `All Answers Answered` : isSurender ? 'Give up!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            nyx.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await nyx.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Guess The Music' }, type: 1 }], `🎮 Guess The Song 🎮\n\nCorrect Answer 🎉\n\nWant to play again? press the button below`, nyx.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else reply('*Jawaban Kamu Salah!!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await reply(`🎮 Math Quiz  🎮\n\nCorrect answer 🎉\n\nWant to play again? Send ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else reply('*Jawaban Kamu Salah!!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await nyx.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Guess The Picture' }, type: 1 }], `🎮 Guess The Picture 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, nyx.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else reply('*Jawaban Kamu Salah!!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await nyx.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Guess The Word' }, type: 1 }], `🎮 Guess The Word 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, nyx.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else reply('*Jawaban Kamu Salah!!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await nyx.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Guess Lontong' }, type: 1 }], `🎮 Guess Lontong 🎮\n\nCorrect answer 🎉\n*${deskripsi}*\n\nWant to play again? press the button below`, nyx.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else reply('*Jawaban Kamu Salah!!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await nyx.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Guess The Sentence' }, type: 1 }], `🎮 Guess The Sentence 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, nyx.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else reply('*Jawaban Kamu Salah!!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await nyx.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Guess The Lyrics' }, type: 1 }], `🎮 Guess The Lyrics 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, nyx.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else reply('*Jawaban Kamu Salah!!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await nyx.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Riddles' }, type: 1 }], `🎮 Riddles 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, nyx.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else reply('*Jawaban Kamu Salah!!*')
        }
        // [ A K H I R ] \\
        
//Start Tictactoe\\
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { 
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    reply({
	    '-3': 'Game has ended',
	    '-2': 'Invalid',
	    '-1': 'Invalid Position',
	    0: 'Invalid Position',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Win!` : isTie ? `Game over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Type *give up* to surrender and admit defeat`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await nyx.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await nyx.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

//Start Suit\\
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|accept|sure|oke?|reject|dont|later|yes|can|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|dont|later|n|no|can)/i.test(m.text)) {
	    nyx.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} reject the suit, the suit is canceled`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    nyx.sendText(m.chat, `Suit has been sent to chat

@${roof.p.split`@`[0]} and 
@${roof.p2.split`@`[0]}

Please choose a suit in the respective chat"
click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) nyx.sendText(roof.p, `Please select \n\nRock\nPaper\nScissors️`, m)
	    if (!roof.pilih2) nyx.sendText(roof.p2, `Please select \n\nRock\nPaper\nScissor️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) nyx.sendText(m.chat, `Both players don't want to play,\nSuit canceled`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    nyx.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} didn't choose suit, game over`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /scissors/i
	    let b = /rock/i
	    let k = /paper/i
	    let reg = /^(scissors|rock|paper)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    reply(`You have chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih2) nyx.sendText(roof.p2, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    reply(`You have chosen ${m.text} ${!roof.pilih ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih) nyx.sendText(roof.p, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    nyx.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            reply(`
Don't tag him!
He's in Offline/AFK, ${reason ? 'with reason ' + reason : 'no reason'}
Its been ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.users[m.sender].afkTime > -1) {
            let user = global.db.users[m.sender]
            reply(`
You came back online from AFK${user.afkReason ? ' after ' + user.afkReason : ''}
In ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
	    // CASE AFK \\
        switch(command) {
	    case 'afk': {
                let user = global.db.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                reply(`${m.pushName} Already Afk${text ? ': ' + text : ''}`)
            }
            break	
            // [ A K H I R ] \\
            
            // CASE TICTACTOE \\
        case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'You are still in the game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            reply('Partner found!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Waiting @${room.game.currentTurn.split('@')[0]}

Type *give up* to surrender and admit defeat`
            if (room.x !== room.o) await nyx.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await nyx.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            reply('Waiting for partner' + (text ? ` type the command below ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            nyx.sendText(m.chat, `Successfully delete the TicTacToe session`, m)
            } else if (!this.game) {
            reply(`TicTacToe Session🎮 there is not any`)
            } else throw '?'
            } catch (e) {
            reply('error')
            }
            }
            break
            // [ A K H I R ] \\
            
            // CASE SUIT \\
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) reply(`Complete your previous suit`)
	    if (m.mentionedJid[0] === m.sender) return reply(`Can't play with myself !`)
            if (!m.mentionedJid[0]) return reply(`_Who do you want to challenge?_\nTag the person..\n\nExample : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `The person you are challenging is playing suit with someone else :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} challenging @${m.mentionedJid[0].split`@`[0]} to play suit

Please @${m.mentionedJid[0].split`@`[0]} to type accept/reject`
            this.suit[id] = {
            chat: await nyx.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) nyx.sendText(m.chat, `_Suit time out_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
            // [ A K H I R ] \\
            
            // CASE DONASI \\
	    case 'donasi': case 'donate': case 'sewabot': case 'sewa': case 'buypremium': case 'donate': {
                nyx.sendMessage(m.chat, { image: { url: 'https://j.top4top.io/p_2279l3oai0.jpg' }, caption: `*Hi Kak ${m.pushName}*\n\n Bot Rental Price\n⭔ 10K Per Group Via Gopay - Aktif 1 Bulan\n⭔15K  Per Group Via Gopay - Aktif 2 Bulan\nFor more details, you can chat with the owner\nhttps://wa.me/6289652948525 (Owner)\n\nDonate : \n\n⭔ Gopay : 089652948525\n⭔ Ovo : 089652948525` }, { quoted: m })
            }
            break
            // [ A K H I R ] \\
            
            // CASE SCRIPT OR SC \\
            case 'sc': case 'script': {
                reply('Base : https://github.com/dikaardnt/hisoka-morou\nFull Fitur : https://linktr.ee/mynxofficial')
            }
            break
            // [ A K H I R ] \\
            
            // CASE CHAT ON GROUP \\
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    nyx.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    nyx.chatModify({ mute: null }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    nyx.chatModify({  archive: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    nyx.chatModify({ archive: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    nyx.chatModify({ markRead: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    nyx.chatModify({ markRead: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    nyx.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
            break
            // [ A K H I R ] \\
            
            // CASE FAMILY 100 \\
	    case 'family100': { 
                if ('family100'+m.chat in _family100) {
                    reply('There are still unfinished sessions!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Answer the following questions :*\n${random.soal}\n\nThere is *${random.jawaban.length}* Answer ${random.jawaban.find(v => v.includes(' ')) ? `(some answers have spaces)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await nyx.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            // [ A K H I R ] \\
            
            // CASE HALAH - HELEH - HILIH - HULUH - HOLOH \\
            case 'halahkdkdkd': case 'hilihdkksls': case 'huluhkdksls': case 'helehkdkdkd': case 'holohkdkskks': //this is in indonesian so if u want to activate u can but will be in indonesian (thanks to respected creator of this case)
            if (!m.quoted && !text) throw `Send/reply text with caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            // [ A K H I R ] \\
            
            // CASE TEBAK² AN \\
            case 'tebakapaitu': {
                if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. music\n2. picture\n3. word\n4. sentence\n5. lyrics\n6.rice cake`
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await nyx.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    nyx.sendText(m.chat, `The song is a song from?\n\nArtist : ${result.artist}\nTime : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    nyx.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Time Out\nAnswer:  ${tebaklagu[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, nyx.user.name, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    nyx.sendImage(m.chat, result.img, `Please answer the questions above\n\nDescription : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    nyx.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Time has run out\Answer:  ${tebakgambar[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, nyx.user.name, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    nyx.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nTime : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    nyx.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Time has run out\nAnswer:  ${tebakkata[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, nyx.user.name, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    nyx.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nTime : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    nyx.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, nyx.user.name, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    nyx.sendText(m.chat, `These are the lyrics of the song? : *${result.soal}*?\nTime : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    nyx.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, nyx.user.name, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    nyx.sendText(m.chat, `*Answer the following questions :*\n${result.soal}*\nTime : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    nyx.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, nyx.user.name, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
		
                    }
                }
            }
            break
            // [ A K H I R ] \\
            
            // CASE MATHQUIZ \\
            case 'mathquiz': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                let { genMath, modes } = require('./src/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nExample: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                nyx.sendText(m.chat, `*What is the result of: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} seconds`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    reply("Time Out\nAnswer: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            // [ A K H I R ] \\
            
            // CASE MIRIP JODOH² AN \\
            case 'mysoulmate': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Your match is

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: '❤️', buttonText: { displayText: '❤️' }, type: 1 }
                    ]
                    await nyx.sendButtonText(m.chat, buttons, jawab, nyx.user.name, m, {mentions: ments})
            }
            break
            // [ A K H I R ] \\
            
            // CASE JODOH \\
            case 'jodoh': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
Ciee Whats Going On💖😝`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: 'seneng:v', buttonText: { displayText: 'SELAMAT' }, type: 1 }
                    ]
                    await nyx.sendButtonText(m.chat, buttons, jawab, nyx.user.name, m, {mentions: menst})
            }
            break
            // [ A K H I R ] \\
            
            // CASE JOIN \\
            case 'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Enter the group link!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                repls(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await nyx.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
            // [ A K H I R ] \\
            
            // CASE LEAVE \\
            case 'leave': {
                if (!isCreator) throw mess.owner
                await nyx.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
            // [ A K H I R ] \\
            
            // CASE KICK \\
	case 'kick': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await nyx.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	// [ A K H I R ] \\
	
	// CASE ADD MEMBER \\
	case 'add': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await nyx.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	// [ A K H I R ] \\
	
	// CASE PROMOTE \\
	case 'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await nyx.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	// [ A K H I R ] \\
	
	// CASE DEMOTE \\
	case 'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await nyx.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	// [ A K H I R ] \\
	
	// CASE BLOCK NUMBER \\
        case 'block': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await nyx.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	// [ A K H I R ] \\
	
	// CASE UNBLOCK \\
        case 'unblock': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await nyx.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	// [ A K H I R ] \\
	
	// CASE SETNAME GROUP \\
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text nya mana?'
                await nyx.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
            // [ A K H I R ] \\
            
            // CASE SETDESK GROUP \\
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text nya mana?'
                await nyx.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
            // [ A K H I R ] \\
            
            // CASE SET PROFILE BOT \\
          case 'setppbot': case 'setbotpp': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Send/Reply Image With Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                let media = await nyx.downloadAndSaveMediaMessage(quoted)
                await nyx.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break
                // [ A K H I R ] \\
                
                // CASE SET PP GROUP \\
           case 'setppgroup': case 'setgrouppp': case 'setgcpp': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Send/Reply Image With Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                let media = await nyx.downloadAndSaveMediaMessage(quoted)
                await nyx.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break
                // [ A K H I R ] \\
                
                // CASE GROUP INFO \\
case 'grupinfo': case 'groupinfo':
try{
 var pic = await nyx.getProfilePicture(m.chat)
  } catch {
 var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
  }
let ingfo = `*G R O U P  I N F O*\n\n*Name :* ${groupName}\n*ID Group :* ${m.chat}\n*Made :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n*Group Owner:* @${groupMetadata.owner.split('@')[0]}\n*Number Of Admins :* ${groupAdmins.length}\n*Number Of Participants :* ${participants.length}\n*Desc :* \n${groupMetadata.desc}`
ds = await getBuffer(pic)
nyx.sendMessage(m.chat, { image: ds,caption: ingfo, mentions: [groupMetadata.owner] }, { quoted: m})
break
// [ A K H I R ] \\

// CASE TAG ALL \\
            case 'tagall': case 'tag': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Message : ${q ? q : 'blank'}*\n\n`
                for (let mem of participants) {
                teks += `⭔ @${mem.id.split('@')[0]}\n`
                }
                nyx.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                // [ A K H I R ] \\
                
                // CASE HIDETAG \\
                case 'hidetag': {
            if (!m.isGroup) throw mess.group
            if (!isAdmins) throw mess.admin
            nyx.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
            // [ A K H I R ] \\
            
            // CASE STYLE TEXT \\
	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // response when limit runs out
		db.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Enter Query text!'
                let anu = await styletext(text)
                let teks = `Entered Text:  ${text}\n\n`
                for (let i of anu) {
                    teks += `⭔ *${i.name}* : ${i.result}\n\n`
                }
                reply(teks)
	    }
	    break
	    // [ A K H I R ] \\
	    
	    // CASE VOTE \\
               case 'vote': {
            if (!m.isGroup) throw mess.group
            if (m.chat in vote) throw `_There are still votes in this chat!_\n\n*${prefix}deletevote* - to delete votes`
            if (!text) throw `Enter Reason for Vote, Example: *${prefix + command} Owner is handsome*`
            reply(`Voting starts!\n\n*${prefix}upvote* - for yes\n*${prefix}devote* - for no\n*${prefix}checkvote* - to check the votes\n*${prefix}deletevote* - to delete vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「  VOTE  」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
 
├ Total: ${vote[m.chat][1].length}

 
└────

┌〔 DEVOTE 〕
 
├ Total: ${vote[m.chat][2].length}

 
└────

*${prefix}deletevote* - to delete votes`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: 'Up-Vote'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: 'De-Vote'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: nyx.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            nyx.sendMessage(m.chat, buttonMessageVote)
	    }
            break
            // [ A K H I R ] \\
            
            // CASE UPVOTE \\
               case 'upvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*Type ${prefix}vote* - to start voting`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'You have Voted'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「  VOTE  」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

┌〔 DEVOTE 〕
 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

*${prefix}hapusvote* - to delete votes`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: 'Up-Vote'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: 'De-Vote'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: nyx.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            nyx.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
             // [ A K H I R ] \\
             
             // CASE DEVOTE \\
                case 'devote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'You Have Voted'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

┌〔 DEVOTE 〕
 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

*${prefix}hapusvote* - to delete votes`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: 'Up-VUp-Vot'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: 'De-Vote'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: nyx.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            nyx.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 // [ A K H I R ] \\
                 
                 // CASE CEK VOTE \\
case 'cekvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

┌〔 DEVOTE 〕
 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

*${prefix}hapusvote* - to delete votes


© ${nyx.user.id}
`
nyx.sendTextWithMentions(m.chat, teks_vote, m)
break
// [ A K H I R ] \\

// CASE DELVOTE \\
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - to start voting`
            delete vote[m.chat]
            reply('Successfully Deleted Vote Session In This Group')
	    }
            break
            // [ A K H I R ] \\
            
            // CASE SETTING GROUP \\
               case 'group': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await nyx.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Successful Closing The Group`)).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await nyx.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Successful Opening The Group`)).catch((err) => reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await nyx.sendButtonText(m.chat, buttons, `Group Mode`, nyx.user.name, m)

             }
            }
            break
            // [ A K H I R ] \\
            
            // CASE EDIT INFO SAMA KAYAK GROUP OPEN OR CLOSE \\
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await nyx.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`Successfully Opened Edit Group Info`)).catch((err) => reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await nyx.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Successfully Close Edit Group Info`)).catch((err) => reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await nyx.sendButtonText(m.chat, buttons, `Mode Edit Info`, nyx.user.name, m)

            }
            }
            break
            // [ A K H I R ] \\
            
            // CASE ANTILINK GROUP \\
case 'antilink':
	        if (!m.isGroup) return reply(`This feature only be used in group`)
			if (!isAdmins) return reply(`This feature could be used by admin only`)
			if (!isBotAdmins) return reply(`Bot must be admin first`)
					if (args[0] === 'on') {
						if (isAntiLink) return reply('Already Activated')
						antilink.push(m.chat)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Successfully activated the antilink feature')
						nyx.sendMessage(m.chat,  {text: `ALLERT!!! This group has been installed anti-link\nIf you violate then I will kick`})
					} else if (args[0] === 'off') {
						if (!isAntiLink) return reply('already deactivated')
						var ini = antilink.indexOf(m.chat)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Successfully disabled antilink feature')
					} else if (!q){
 reply(`Pilih Antilink On / Off `)
					}
					break 
					// [ A K H I R ] \\
					
					// CASE ANTIWAME \\
					case 'antiwame': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.chats[m.chat].wame) return m.reply(`Already Activated`)
                db.chats[m.chat].wame = true
                m.reply(`Anti Wa.me Activated!`)
                } else if (args[0] === "off") {
                if (!db.chats[m.chat].wame) return m.reply(`Already deactivated`)
                db.chats[m.chat].wame = false
                m.reply(`Anti Wa.me is not activated!`)
                } else {
                 let buttons = [
                        { buttonId: 'antiwame on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antiwame off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await nyx.sendButtonText(m.chat, buttons, `Mode Anti Wa.me`, nyx.user.name, m)
                }
             }
             break
             // [ A K H I R ] \\
             
             // CASE MUTE ON OR OFF IN THE GROUP \\
					   case 'mute': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.chats[m.chat].mute) return reply(`Already activated`)
                db.chats[m.chat].mute = true
                reply(`${nyx.user.name} has been muted in this group !`)
                } else if (args[0] === "off") {
                if (!db.chats[m.chat].mute) return reply(`Already deactivated`)
                db.chats[m.chat].mute = false
                reply(`${nyx.user.name} has been unmuted in this group!`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await nyx.sendButtonText(m.chat, buttons, `Mute Bot`, nyx.user.name, m)
                }
             }
             break
             // [ A K H I R ] \\
             
             // CASE LINKGC
            case 'linkgroup': case 'grouplink': case 'gclink': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                let response = await nyx.groupInviteCode(m.chat)
                nyx.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink of: ${groupMetadata.subject} Group`, m, { detectLink: true })
            }
            break
            // [ A K H I R ] \\
            
            // CASE EPHEMERAL \\
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Enter the enable/disable value, For Example ${prefix}ephemeral enable'
                if (args[0] === 'enable') {
                    await nyx.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await nyx.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
            break
            // [ A K H I R ] \\
            
            // CASE DELETE MESSAGE DARI BOT \\
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'The message was not sent by a bot!'
                nyx.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            // [ A K H I R ] \\
            
            // CASE BC GC \\
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Where is the text?\n\nExample : ${prefix + command} hello guys, am back`
                let getGroups = await nyx.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                reply(`Send Broadcast To ${anu.length} Group Chat, Finish Time ${anu.length * 1.5} second`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'Script',
                                    url: 'https://github.com/dikaardnt/hisoka-morou'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Phone Owner Number',
                                    phoneNumber: '+62 896-5294-8525'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Status',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Donasi',
                                    id: 'donasi'
                                }
                            }]
                      nezzy = fs.readFileSync('./media/nfound.jpg')
                      let txt = `「 XpeeBOT BROADCAST 」\n\n${text}`
                      nyx.send5ButImg(i, txt, nyx.user.name, nezzy, btn)
                    }
                reply(`Successful Sending Broadcast To ${anu.length} Group(s)`)
            }
            break
            // [ A K H I R ] \\
            
            // CASE BROADCAST \\
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Where is the text?\n\nExample : ${prefix + command} cheems bot here`
                let anu = await store.chats.all().map(v => v.id)
                reply(`Send Broadcast To ${anu.length} Chat\nIn ${anu.length * 1.5} second`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                urlButton: {
                                    displayText: 'Script',
                                    url: 'https://github.com/dikaardnt/hisoka-morou'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }
                            }]
                      nezzy = fs.readFileSync('./media/nfound.jpg')
                      let txt = `「 XpeeBOT BROADCAST 」\n\n${text}`
                      nyx.send5ButImg(yoi, txt, `Broadcast By ${global.pengguna}`, nezzy, btn)
		}
		reply('Broadcast Success')
            }
            break
            // [ A K H I R ] \\
            
            // CASE CHAT INFO \\
            case 'chatinfo': {
                if (!m.quoted) reply('Reply to mesaage')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'The message was not sent by a bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `⭔ @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━⭔ *Time :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Read' : 'Unread'}\n\n`
                }
                nyx.sendTextWithMentions(m.chat, teks, m)
            }
            break
            // [ A K H I R ] \\
            
            // CASE QUOTED \\
            case 'q': case 'quoted': {
		if (!m.quoted) return reply('Reply Pesannya Paok')
		let wokwol = await nyx.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return reply('The message you replied to does not contain a reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
	    // [ A K H I R ] \\
	    
	    // CASE LISTPC \\
            case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *PERSONAL CHAT LIST*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Name :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 nyx.sendTextWithMentions(m.chat, teks, m)
             }
             break
             // [ A K H I R ] \\
             
             // CASE LISTGC \\
                case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *GROUP CHAT LIST*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await nyx.groupMetadata(i)
                     teks += `⬡ *Name :* ${metadata.subject}\n⬡ *Owner :* @${metadata.owner.split('@')[0]}\n⬡ *ID :* ${metadata.id}\n⬡ *Made :* ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 nyx.sendTextWithMentions(m.chat, teks, m)
             }
             break
             // [ A K H I R ] \\
             
             // CASE LIST ONLINE \\
             case 'listonline': case 'onlinelist': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    nyx.sendText(m.chat, 'Online List:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
             // [ A K H I R ] \\
             
             // CASE STICKER \\
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) throw `Reply Video/Image With Caption ${prefix + command}`
            repls(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await nyx.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 seconds!')
                let media = await quoted.download()
                let encmedia = await nyx.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`
                }
            }
            break
            // [ A K H I R ] \\
            
            // CASE EBINARY \\
            case 'ebinary': {
            if (!m.quoted.text && !text) throw `Send/reply text with caption ${prefix + command}`
            let { eBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let eb = await eBinary(teks)
            reply(eb)
        }
        break
        // [ A K H I R ] \\
        
        // CASE DBINARY \\
            case 'dbinary': {
            if (!m.quoted.text && !text) throw `Send/reply text with caption ${prefix + command}`
            let { dBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let db = await dBinary(teks)
            reply(db)
        }
        break
        // [ A K H I R ] \\
        
        // CASE EMOJI MIX \\
            case 'emojimix': {
	        if (!text) throw `Example : ${prefix + command} 😅+🤔`
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await nyx.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	    // [ A K H I R ] \\
	    
	    // CASE TOIMG \\
            case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                repls(mess.wait)
                let media = await nyx.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    nyx.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
            // [ A K H I R ] \\
            
            // CASE TOMP4
	        case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                repls(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await nyx.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await nyx.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            // [ A K H I R ] \\
            
            // CASE TOAUDIO \\
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Send/Reply Video/Audio You Want Audio With Caption ${prefix + command}`
            if (!quoted) throw `Send/Reply Video/Audio You Want to Use as Audio With Caption ${prefix + command}`
            repls(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            nyx.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            // [ A K H I R ] \\
            
            // CASE TOMP3 \\
            case 'tomp3': {
            if (/document/.test(mime)) throw `Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`
            if (!quoted) throw `Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`
            repls(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            nyx.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Converted By ${nyx.user.name}.mp3`}, { quoted : m })
            }
            break
            // [ A K H I R ] \\
            
            // CASE TOVN \\
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`
            repls(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            nyx.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            // [ A K H I R ] \\
            
            // CASE TOGIF \\
            case 'togif': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                repls(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await nyx.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await nyx.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            // [ A K H I R ] \\
            
            // CASE TOURL \\
	        case 'tourl': {
                repls(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await nyx.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            // [ A K H I R ] \\
            
            // CASE IMG NO BG \\
            case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!quoted) throw `Send/Reply Image With Caption ${prefix + command}`
	    if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await nyx.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    repls(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    nyx.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	    // [ A K H I R ] \\
	    
	    // CASE YT SEARCH \\
	    case 'yts': case 'ytsearch': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Author : ${i.author.name}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
                }
                nyx.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
            // [ A K H I R ] \\
            
            // CASE GOOGLE SEARCH \\
        case 'google': {
                if (!text) throw `Example : ${prefix + command} fatih arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `⭔ *Title* : ${g.title}\n`
                teks += `⭔ *Description* : ${g.snippet}\n`
                teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                reply(teks)
                })
                }
                break
                // [ A K H I R ] \\
                
                // CASE GOOGLE IMAGE \\
        case 'gimage': case 'googleimage': {
        if (!text) throw `Example : ${prefix + command} ml nana`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: '️Next Image️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
                    footer: nyx.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                nyx.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
        // [ A K H I R ] \\
        
        // CASE YT PLAY \\
	    case 'play': case 'ytplay': {
                if (!text) throw `Example : ${prefix + command} bts boy with luv`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                    ngen = `
⭔ Title : ${anu.title}
⭔ Ext : Search
⭔ ID : ${anu.videoId}
⭔ Duration : ${anu.timestamp}
⭔ Viewers : ${anu.views}
⭔ Uploaded : ${anu.ago}
⭔ Author : ${anu.author.name}
⭔ Channel : ${anu.author.url}
⭔ Description : ${anu.description}
`
message = await prepareWAMessageMedia({ image : { url: anu.thumbnail } }, { upload:   nyx.waUploadToServer })
                template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: ngen,
                            hydratedFooterText: `Playing To ${text}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Video Source Link',
                                    url: `${anu.url}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '🎵Audio🎵',
                                    id: `ytmp3 ${anu.url} 320kbps`
                                    }
                                },{quickReplyButton: {
                                    displayText: '🎥Video🎥',
                                    id: `ytmp4 ${anu.url} 360p`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                  nyx.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
            // [ A K H I R ] \\
            
            // CASE YT MP3 \\
	    case 'ytmp3': case 'ytaudio': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 320kbps`
                let quality = args[1] ? args[1] : '320kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 999999) return reply('Audio size is too big '+util.format(media))
                nyx.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolution : ${args[1] || '320kbps'}`, m)
                nyx.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            // [ A K H I R ] \\
            
            // CASE YTMP4 \\
            case 'ytmp4': case 'ytvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 999999) return reply('Video size is too big '+util.format(media))
                nyx.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resololution : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            // [ A K H I R ] \\
            
            // CASE CARI MUSIK
	    case 'getmusic': case 'carimusik': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return reply('Reply Message')
                if (!m.quoted.isBaileys) throw `Can only reply to messages from bots`
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Maybe The Message You Replied Does Not Contain Ytsearch Results`
                let quality = args[1] ? args[1] : '320kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 999999) return reply('Audio size is too big '+util.format(media))
                nyx.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolution : ${args[1] || '320kbps'}`, m)
                nyx.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            // [ A K H I R ] \\
            
            // CASE GETVIDEO \\
            case 'getvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return reply('Reply To A Message That Has Been Already Sent')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Maybe the message you replied does not contain the ytsearch result`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return reply('File Over Limit '+util.format(media))
                nyx.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolution : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            // [ A K H I R ] \\
            
            // CASE PINTEREST \\
            case 'pinterest': {
                repls(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                nyx.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
            }
            break
            // [ A K H I R ] \\
            
            // CASE ANIME - WAIFU - HUSBU - NEKO - SHINOBU - MEGUMIN \\
            case 'anime': case 'waifu': case 'husbu': case 'neko': case 'shinobu': case 'megumin': {
                repls(mess.wait)
                nyx.sendMessage(m.chat, { image: { url: api('zenz', '/api/random/anime/'+command, 'apikey') }, caption: `Download From ${text}` }, { quoted: m})
            }
            break
            // [ A K H I R ] \\
            
            // CASE PP COUPLE \\
	    case 'couplepp': case 'ppcouple': {
                repls(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                nyx.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                nyx.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
	    // [ A K H I R ] \\
	    
	    // CASE ☕ \\
            case 'coffee': case 'kopi': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `Random Coffee`,
                    footer: nyx.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                nyx.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            // [ A K H I R ] \\
            
            // CASE WALLPAPER \\
            case 'wallpaper': {
                if (!text) throw 'Enter Query Title'
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.type}\n⭔ Detail : ${result.source}\n⭔ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: nyx.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                nyx.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            // [ A K H I R ] \\
            
            // CASE WIKIMEDIA \\
            case 'wikimedia': {
                if (!text) throw 'Enter Query Title'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}`,
                    footer: nyx.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                nyx.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            // [ A K H I R ] \\
            
            // CASE QUOTED ANIMEH :V \\
            case 'quotesanime': case 'quotesanimeh': {
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                nyx.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
             // [ A K H I R ] \\
             
             
             
             
             
             
             
             
             
             
             
             // TAMBAHIN SENDIRI YAH, GW CAFEK ANJER 🗿 -------------  \\
	        case 'motivasi': case 'dilanquote': case 'bucinquote': case 'katasenja': case 'puisi': {
                let anu = await fetchJson(api('zenz', '/api/'+command, {}, 'apikey'))
                let buttons = [
                    {buttonId: `motivasi`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.message,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                nyx.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case '3dchristmas': case '3ddeepsea': case 'americanflag': case '3dscifi': case '3drainbow': case '3dwaterpipe': case 'halloweenskeleton': case 'sketch': case 'bluecircuit': case 'space': case 'metallic': case 'fiction': case 'greenhorror': case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dcrackedstone': case '3dneonlight': case 'impressiveglitch': case 'naturalleaves': case 'fireworksparkle': case 'matrix': case 'dropwater':  case 'harrypotter': case 'foggywindow': case 'neondevils': case 'christmasholiday': case '3dgradient': case 'blackpink': case 'gluetext': {
                if (!text) throw `Example : ${prefix + command} text`
                repls(mess.wait)
                nyx.sendMessage(m.chat, { image: { url: api('zenz', '/textpro/' + command, { text: text }, 'apikey') }, caption: `Text Pro ${command}` }, { quoted: m})
	    }
            break
	    case 'shadow': case 'romantic': case 'smoke': case 'burnpapper': case 'naruto': case 'lovemsg': case 'grassmsg': case 'lovetext': case 'coffecup': case 'butterfly': case 'harrypotter': case 'retrolol': {
                if (!text) throw 'where is the text?'
                repls(mess.wait)
                nyx.sendMessage(m.chat, { image: { url: api('zenz', '/photooxy/' + command, { text: text }, 'apikey') }, caption: `Photo Oxy ${command}` }, { quoted: m })
            }
            break
            case 'ffcover': case 'crossfire': case 'galaxy': case 'glass': case 'neon': case 'beach': case 'blackpink': case 'igcertificate': case 'ytcertificate': {
                if (!text) throw 'No Query Text'
                repls(mess.wait)
                nyx.sendMessage(m.chat, { image: { url: api('zenz', '/ephoto/' + command, { text: text }, 'apikey') }, caption: `Ephoto ${command}` }, { quoted: m })
            }
            break
            case 'keberuntungan': case 'luck': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                nyx.sendText(m.chat, `⭔ *Name :* ${anu.message.nama}\n⭔ *Born :* ${anu.message.tgl_lahir}\n⭔ *Results :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': case 'fishing': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                nyx.sendText(m.chat, `⭔ *Date :* ${anu.message.tgl_memancing}\n⭔ *Results :* ${anu.message.result}\n⭔ *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} first day of menstruation, cycle`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return reply(anu.message)
                nyx.sendText(m.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiak': case 'zodiack': {
                if (!text) throw `Example : ${prefix+ command} 7 7 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return reply(anu.message)
                nyx.sendText(m.chat, `⭔ *Zodiac :* ${anu.message.zodiak}\n⭔ *Number :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Flower :* ${anu.message.bunga_keberuntungan}\n⭔ *Color :* ${anu.message.warna_keberuntungan}\n⭔ *Rock :* ${anu.message.batu_keberuntungan}\n⭔ *Element :* ${anu.message.elemen_keberuntungan}\n⭔ *Zodiac Couple :* ${anu.message.pasangan_zodiak}\n⭔ *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'shio': {
                if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                let anu = await primbon.shio(text)
                if (anu.status == false) return reply(anu.message)
                nyx.sendText(m.chat, `⭔ *Results :* ${anu.message}`, m)
            }
            break
	        case 'tiktok': case 'tiktoknowm': {
                if (!text) throw 'Enter Query Link!'
                repls(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: 'With Watermark'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '🎵Audio🎵'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.nowatermark },
                    caption: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                nyx.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokwm': case 'tiktokwatermark': {
                if (!text) throw 'Enter Query Link!'
                repls(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '🎥Video🎥'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '🎵Audio🎵'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.watermark },
                    caption: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                nyx.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokmp3': case 'tiktokaudio': {
                if (!text) throw 'Enter Query Link!'
                repls(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: 'No Watermark'}, type: 1},
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: 'With Watermark'}, type: 1}
                ]
                let buttonMessage = {
                    text: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                let msg = await nyx.sendMessage(m.chat, buttonMessage, { quoted: m })
		let { toAudio } = require('./lib/converter')
		let nganu = await getBuffer(anu.result.nowatermark)
		let cnvrt = await toAudio(nganu, 'mp4')
                nyx.sendMessage(m.chat, { audio: cnvrt, mimetype: 'audio/mpeg'}, { quoted: msg })
            }
            break
	        case 'instagram': case 'ig': case 'igdl': {
                if (!text) throw 'Enter Query Url!'
                repls(mess.wait)
                if (/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instagram2', { url: isUrl(text)[0] }, 'apikey'))
                    for (let media of anu.data) nyx.sendMedia(m.chat, media, '', `Download Url Instagram From ${isUrl(text)[0]}`, m)
                } else if (/\/stories\/([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instastory', { url: isUrl(text)[0] }, 'apikey'))
                    nyx.sendMedia(m.chat, anu.media[0].url, '', `Download Url Instagram From ${isUrl(text)[0]}`, m)
                }
            }
            break
            case 'joox': case 'jooxdl': {
                if (!text) throw 'No Query Title'
                repls(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/joox', { query: text }, 'apikey'))
                let msg = await nyx.sendImage(m.chat, anu.result.img, `⭔ Title : ${anu.result.lagu}\n⭔ Album : ${anu.result.album}\n⭔ Singer : ${anu.result.penyanyi}\n⭔ Publish : ${anu.result.publish}\n⭔ Lyrics :\n${anu.result.lirik.result}`, m)
                nyx.sendMessage(m.chat, { audio: { url: anu.result.mp4aLink }, mimetype: 'audio/mpeg', fileName: anu.result.lagu+'.m4a' }, { quoted: msg })
            }
            break
            case 'soundcloud': case 'scdl': {
                if (!text) throw 'No Query Title'
                repls(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                let msg = await nyx.sendImage(m.chat, anu.result.thumb, `⭔ Title : ${anu.result.title}\n⭔ Url : ${isUrl(text)[0]}`)
                nyx.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: msg })
            }
            break
	        case 'twitdl': case 'twitter': {
                if (!text) throw 'Enter Query Link!'
                repls(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twittermp3 ${text}`, buttonText: {displayText: '🎵Audio🎵'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.HD || anu.result.SD },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                nyx.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'twittermp3': case 'twitteraudio': {
                if (!text) throw 'Enter Query Link!'
                repls(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twitter ${text}`, buttonText: {displayText: '🎥Video🎥'}, type: 1}
                ]
                let buttonMessage = {
		    image: { url: anu.result.thumb },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 4
                }
                let msg = await nyx.sendMessage(m.chat, buttonMessage, { quoted: m })
                nyx.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
            }
            break
	        case 'fbdlkxkxkx': case 'fbkckxkxk': case 'facebookjfkddkk': {
                if (!text) throw 'Enter Query Link!'
                repls(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/facebook', { url: text }, 'apikey'))
                nyx.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `⭔ Title : ${anu.result.title}`}, { quoted: m })
            }
            break
	        case 'pindlkxkdksk': case 'pinterestdlksksks': {
                if (!text) throw 'Enter Query Link!'
                repls(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
                nyx.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: m })
            }
            break

            case 'umma': case 'ummadl': {
	        if (!text) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                let { umma } = require('./lib) scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '🎵Audio🎵'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '🎥Video🎥'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
⭔ Title : ${anu.title}
⭔ Author : ${anu.author.name}
⭔ Like : ${anu.like}
⭔ Caption : ${anu.caption}
⭔ Url : ${anu.media[0]}
To download media, please click one of the buttons below or enter the ytmp3/ytmp4 command with the url above
`,
			footer: nyx.user.name,
			buttons,
			headerType: 4
		    }
		    nyx.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        nyx.sendMessage(m.chat, { image: { url }, caption: `⭔ Title : ${anu.title}\n⭔ Author : ${anu.author.name}\n⭔ Like : ${anu.like}\n⭔ Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
        case 'ringtone': {
		if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		nyx.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
		case 'iqra': {
		oh = `Example : ${prefix + command} 3\n\Available IQRA : 1,2,3,4,5,6`
		if (!text) throw oh
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		nyx.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => reply(oh))
		}
		break
		case 'juzamma': {
		if (args[0] === 'pdf') {
		repls(mess.wait)
		nyx.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[0] === 'docx') {
		repls(mess.wait)
		nyx.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[0] === 'pptx') {
		repls(mess.wait)
		nyx.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[0] === 'xlsx') {
		repls(mess.wait)
		nyx.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		} else {
		reply(`What format do you want? ? Example : ${prefix + command} pdf

Available formats : pdf, docx, pptx, xlsx`)
		}
		}
		break
		case 'hadith': case 'hadist': {
		if (!args[0]) throw `Example:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Options available:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
		if (!args[1]) throw `Which Hadith??\n\nExample:\n${prefix + command} muslim 1`
		try {
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
		reply(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		reply(`Hadith not found !`)
		}
		}
		break
		case 'alquran': {
		if (!args[0]) throw `Example:\n${prefix + command} 1 2\n\nthen the result is surah Al-Fatihah verse 2 along with the audio, and the verse is just 1`
		if (!args[1]) throw `Example:\n${prefix + command} 1 2\n\nthen the result is surah Al-Fatihah verse 2 along with the audio, and the verse is just 1`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		reply(txt)
		nyx.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		break
		case 'tafsirsurah': {
		if (!args[0]) throw `Example:\n${prefix + command} 1 2\n\nthen the result is the interpretation of Surah Al-Fatihah verse 2`
		if (!args[1]) throw `Example:\n${prefix + command} 1 2\n\nthen the result is the interpretation of Surah Al-Fatihah verse 2`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Short* : ${res.result.data.tafsir.id.short}

*Long* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		reply(txt)
		}
		break
/*case 'alkitab':  if(!text) throw `Masukan Search Yang Anda Cari`
epep = await.fetchJson(`https://melcanz.com/alkitabsearch?q=${text}&apikey=melcantik`)
break*/

		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                repls(mess.wait)
                let media = await nyx.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return reply(err)
                let buff = fs.readFileSync(ran)
                nyx.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else reply(`Reply to the audio you want to change with caption *${prefix + command}*`)
                } catch (e) {
                reply(e)
                }
                break
            case 'setcmd': {
                if (!m.quoted) throw 'Reply Message!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                reply(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `No hashes`
                if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.sticker[hash]
                reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*Hash List*
Info: *bold* hash is locked
${Object.entries(global.db.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                nyx.sendText(m.chat, teks, m, { mentions: Object.values(global.db.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Message!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.sticker)) throw 'Hash not found in database'
                global.db.sticker[hash].locked = !/^un/i.test(command)
                reply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) throw 'Reply Message You Want To Save In Database'
                if (!text) throw `Example : ${prefix + command} message name`
                let msgs = global.db.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
reply(`Successfully added message in message list as '${text}'
    
Access with ${prefix}getmsg ${text}

View list of message with ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) throw `Example : ${prefix + command} msg name\n\nView message list with ${prefix}listmsg`
                let msgs = global.db.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' not registered in message list`
                nyx.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.database
	        if (!(text.toLowerCase() in msgs)) return reply(`'${text}' not listed in the message list`)
		delete msgs[text.toLowerCase()]
		reply(`Successfully deleted '${text}' from the message list`)
            }
	    break
	    case 'anonymous': {
                if (m.isGroup) return reply('This Features Cannot Be Use in Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [{
                                urlButton: {
                                    displayText: 'Report Bug',
                                    url: 'https://wa.me/6289652948525'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Start Anonymous',
                                    id: 'start'
                                }
                            }]
                nyx.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await nyx.getName(m.sender)} Welcome To Anonymous Chat\n\nClick The Button Below To Find A Partner\`\`\``, nyx.user.name, m)
            }
			break
case 'sendkontak': case 'sendcontact': {
                if (m.isGroup) return reply('This Features Cannot Be Use in Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await nyx.sendButtonText(m.chat, buttons, `_You Are Not In Anonymous Session, Press The Button To Find A Partner_`)
                    throw false
                }
                let profile = await nyx.profilePictureUrl(room.b)
                let status = await nyx.fetchStatus(room.b)
                let msg = await nyx.sendImage(room.a, profile, `Name : ${await nyx.getName(room.b)}\nBio : ${status.status}\nUser : @${room.b.split("@")[0]}`, m, { mentions: [room.b] })
                nyx.sendContact(room.a, [room.b.split("@")[0]], msg)
            }
            break
            case 'keluar': case 'leave': {
                if (m.isGroup) return reply('This Features Cannot Be Use in Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await nyx.sendButtonText(m.chat, buttons, `_You Are Not In Anonymous Session, Press The Button To Find A Partner_`)
                    throw false
                }
                reply('Ok')
                let other = room.other(m.sender)
                if (other) await nyx.sendText(other, `_Partner Has Left Anonymous Session_`, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (m.isGroup) return reply('This Features Cannot Be Use in Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'stop', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await nyx.sendButtonText(m.chat, buttons, `_You Are Still In Anonymous Session, Press The Button Below To Terminate Your Anonymous Session_`, nyx.user.name, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'stop', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await nyx.sendButtonText(room.a, buttons, `_Successfully Found Partner, Now You Can Send Messages_`, nyx.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await nyx.sendButtonText(room.b, buttons, `_Successfully Found Partner, Now You Can Send Messages_`, nyx.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await nyx.sendButtonText(m.chat, buttons, `_Please Wait, Looking For A Partner_`, nyx.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return reply('This Feature Cannot Be Used In Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: '🚶Start🚶' }, type: 1 }
                    ]
                    await nyx.sendButtonText(m.chat, buttons, `\`\`\`You Are Not In Anonymous Session, Press The Button To Find A Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await nyx.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await nyx.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, now you can send message\`\`\``, nyx.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await nyx.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, now you can send message\`\`\``, nyx.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await nyx.sendButtonText(m.chat, buttons, `\`\`\`Please wait, looking for a partner\`\`\``, nyx.user.name, m)
                }
                break
            }
            case 'public': {
                if (!isCreator) throw mess.owner
                nyx.public = true
                reply('Successfully Changed To Public Usage')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                nyx.public = false
                reply('Successfully Changed To Self Usage')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

NodeJS Memory Usaage
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                reply(respon)
            }
            break
            case 'owner': case 'creator': {
            nyx.sendContact(m.chat, global.pemilik, m)
           const natgf = fs.readFileSync('./media/botdev.mp3') //u can change the music in Media folder
           nyx.sendMessage(m.chat, { audio: natgf, mimetype: 'audio/mp4', ptt: true, quoted: m })
            }
            break
                    case 'bug': case 'report': {
                    	if(!text) throw `Enter The Bug Example\n\n${command} Menu Error `
                    	nyx.sendMessage(`6289652948525@s.whatsapp.net`, {text: `*Bug Report From:* wa.me/${m.sender.split("@")[0]}
Report Message: ${text}` })
reply(`Successfully Reported To The Owner\n\nPlease Make Sure The Bug Is Valid, If You Play With This, Use This Feature Again And Again For No Reason, You Will Be Blocked For Sure !`)
                    }
                    break 
case 'tes': case 'test': case 'alive': case 'bot': case 'robot': case 'bots': case 'bod':{
                anu = `Hi Kak ${pushname}
Bot Sudah Aktif (≧▽≦)`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./media/mynx.jpg')},
                            hydratedFooterText: `XpeeBOT-MD`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'YouTube',
                                    url: 'https://youtube.com/channel/UCMF1MPwBQ0HauI9jzfLI1Iw'
                                }
                            }, {
                            	urlButton: {
                                displayText: 'Script',
                                    url: 'github.com/DikaArdnt/Hisoka-Morou'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'All Menu',
                                    id: `${prefix}allmenu`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: 'List Menu',
                                    id: `${prefix}command`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                nyx.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
break

            case 'list': case 'menu': case 'help': case '?': {
            	timestampe = speed();
latensie = speed() - timestampe
                anu = ``
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./media/mynx.jpg')},
                            hydratedFooterText: `Halo Kak ${pushname}\nApa Kabar Mu? 


❏「 𝙸𝙽𝙵𝙾 𝙱𝙾𝚃 」❏

špεεd : ${latensie.toFixed(4)} miliseconds
ruη†ïmε : ${runtime(process.uptime())}
ß⊕† ηαmε : ${global.botnma}
⊕ωηεr ηαmε : ${global.ownernma}
⊕ωηεr ηumßεr : ${global.owner}
h⊕š† ηαmε : ${os.hostname()}
pﾚα†ƒ⊕rm : ${os.platform()}


Please Select Button Below 🕊
`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'YouTube',
                                    url: 'https://youtube.com/channel/UCMF1MPwBQ0HauI9jzfLI1Iw'
                                }
                            }, {
                            	urlButton: {
                                displayText: 'Script',
                                    url: 'github.com/DikaArdnt/Hisoka-Morou'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'ALL MENU',
                                    id: `${prefix}allmenu`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: 'COMMAND',
                                    id: `${prefix}command`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: 'OWNER',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                nyx.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
break
case 'command':{
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `Halo Kak ${pushname}`,
                    description: `Please Choose The Menu\n\n`,
                    buttonText: "Pilih Di Sini..",
                    footerText: "_Created By XpeeBOT_",
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "Group Features",
								"rows": [
									{
										"title": "Group Menu",
										"description": "",
										"rowId": `${prefix}grupmenu`
									}
								]
							},
							{
								"title": "Bot Features",
								"rows": [
									{
										"title": "All Menu",
										"description": "",
										"rowId": `${prefix}allmenu`
									},
									{
										"title": "Download Menu",
										"description": "",
										"rowId": `${prefix}downloadmenu`
									},
									{
										"title": "Search Menu",
										"description": "",
										"rowId": `${prefix}searchmenu`
									},
										{
											"title": "Fun Menu",
										"description": "",
										"rowId": `${prefix}funmenu`
										},
										{
											"title": "Convert Menu",
										"description": "",
										"rowId": `${prefix}convertmenu`
										},
										{
										"title": "Other Menu",
										"description": "",
										"rowId": `${prefix}nocategorymenu`
										},
										{
											"title": "Database Menu",
										"description": "",
										"rowId": `${prefix}databasemenu`
										},
										{
											"title": "Voice Changer Menu",
										"description": "",
										"rowId": `${prefix}voicemenu`
										}
								]
							},
							{
								"title": "Chat with fellow users",
								"rows": [
									{
										"title": "Anonymous Chat Menu",
										"description": "",
										"rowId": `${prefix}anonymouschatmenu`
									}
								]
							},
							{
								"title": "Group System",
								"rows": [
									{
										"title": "System Menu",
										"description": "",
										"rowId": `${prefix}sistemmenu`
									}
								]
							},
							{
								"title": "Owner",
								"rows": [
									{
										"title": "Owner Menu",
										"description": "",
										"rowId": `${prefix}ownermenu`
									}
								]
							},
							{
								"title": "Credit",
								"rows": [
									{
										"title": "Thanks To",
										"description": "",
										"rowId": `${prefix}tqto`
									}
								]
							}
						],
          listType: 1
                }
            }), {})
            nyx.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
case 'grupmenu': {
	            anu = `
  ꪶ Group Menu ꫂ
  ➙ ${prefix}grouplink
  ➙ ${prefix}ephemeral 
  ➙ ${prefix}setgrouppp
  ➙ ${prefix}setname
  ➙ ${prefix}group 
  ➙ ${prefix}editinfo
  ➙ ${prefix}grupinfo
  ➙ ${prefix}add @user
  ➙ ${prefix}kick @user
  ➙ ${prefix}promote @user
  ➙ ${prefix}demote @user
  `
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./media/mynx.jpg')},
                            hydratedFooterText: `XpeeBOT-MD`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'YouTube',
                                    url: 'https://youtube.com/channel/UCMF1MPwBQ0HauI9jzfLI1Iw'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                nyx.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'downloadmenu': {
	okemenu = `
  ꪶ Download Menu ꫂ
  ➙ ${prefix}tiktoknowm
  ➙ ${prefix}tiktokwm
  ➙ ${prefix}tiktokmp3 
  ➙ ${prefix}instagram
  ➙ ${prefix}ig2 
  ➙ ${prefix}igreels
  ➙ ${prefix}igtv 
  ➙ ${prefix}twitter 
  ➙ ${prefix}twittermp3
  ➙ ${prefix}ytmp3
  ➙ ${prefix}ytmp4
  ➙ ${prefix}getmusic 
  ➙ ${prefix}getvideo 
  `
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: okemenu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./media/mynx.jpg')},
                            hydratedFooterText: `XpeeBOT-MD`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'YouTube',
                                    url: 'https://youtube.com/channel/UCMF1MPwBQ0HauI9jzfLI1Iw'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                nyx.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break 
            case 'searchmenu': {
            	anu = `
  ꪶ Search Menu ꫂ
  ➙ ${prefix}play
  ➙ ${prefix}yts 
  ➙ ${prefix}google 
  ➙ ${prefix}gimage 
  ➙ ${prefix}pinterest
  ➙ ${prefix}wallpaper
  ➙ ${prefix}wikimedia
  ➙ ${prefix}ytsearch
  `
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./media/mynx.jpg')},
                            hydratedFooterText: `XpeeBOT-MD`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'YouTube',
                                    url: 'https://youtube.com/channel/UCMF1MPwBQ0HauI9jzfLI1Iw'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                nyx.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'randommenu': {
	anu = `
	  ꪶ Random Menu ꫂ
  ➙ ${prefix}coffee
  ➙ ${prefix}couplepp
  `
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./media/mynx.jpg')},
                            hydratedFooterText: `XpeeBOT-MD`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'YouTube',
                                    url: 'https://youtube.com/channel/UCMF1MPwBQ0HauI9jzfLI1Iw'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                nyx.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'funmenu': {
	anu = `
	ꪶ Fun Menu ꫂ
  ➙ ${prefix}couple
  ➙ ${prefix}mysoulmate
  ➙ ${prefix}math
  `
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./media/mynx.jpg')},
                            hydratedFooterText: `XpeeBOT-MD`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'YouTube',
                                    url: 'https://youtube.com/channel/UCMF1MPwBQ0HauI9jzfLI1Iw'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                nyx.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'voicemenu': {
	anu = `
	ꪶ Voice Changer Menu ꫂ
  ➙ ${prefix}bass
  ➙ ${prefix}blown
  ➙ ${prefix}deep
  ➙ ${prefix}earrape
  ➙ ${prefix}fast
  ➙ ${prefix}fat
  ➙ ${prefix}nightcore
  ➙ ${prefix}reverse
  ➙ ${prefix}robot
  ➙ ${prefix}slow
  ➙ ${prefix}squirrel
`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./media/mynx.jpg')},
                            hydratedFooterText: `XpeeBOT-MD`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'YouTube',
                                    url: 'https://youtube.com/channel/UCMF1MPwBQ0HauI9jzfLI1Iw'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                nyx.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'religionmenukdksoejdjj': {
	anu = `
	*Religion Menu*
	
     (Islamic)
  ➙ ${prefix}iqra
  ➙ ${prefix}hadith
  ➙ ${prefix}alquran
  ➙ ${prefix}juzamma
  ➙ ${prefix}tafsirsurah`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./media/mynx.jpg')},
                            hydratedFooterText: `XpeeBOT-MD`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'YouTube',
                                    url: 'https://youtube.com/channel/UCMF1MPwBQ0HauI9jzfLI1Iw'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                nyx.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'horoscopemenukcodk': {
	anu = `
	ꪶ Horoscope Menu ꫂ
  
  ➙ ${prefix}hockeynumber
  ➙ ${prefix}dreammeaning
  ➙ ${prefix}namemeaning
  ➙ ${prefix}fortunetelling
  ➙ ${prefix}marriageprediction
  ➙ ${prefix}wife&husband
  ➙ ${prefix}fortunetelling2
  ➙ ${prefix}matchname
  ➙ ${prefix}couplematch
  ➙ ${prefix}married
  ➙ ${prefix}businessnature
  ➙ ${prefix}sustenance
  ➙ ${prefix}profession
  ➙ ${prefix}fate
  ➙ ${prefix}potentialdisease
  ➙ ${prefix}tarot
  ➙ ${prefix}fengshui
  ➙ ${prefix}goodday
  ➙ ${prefix}badday
  ➙ ${prefix}unluckyday
  ➙ ${prefix}dragonday
  ➙ ${prefix}sustenance2
  ➙ ${prefix}luck
  ➙ ${prefix}weton
  ➙ ${prefix}character
  ➙ ${prefix}luck2
  ➙ ${prefix}fishing
  ➙ ${prefix}fertiletime
  ➙ ${prefix}zodiac
  ➙ ${prefix}shio`
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./media/mynx.jpg')},
                            hydratedFooterText: `XpeeBOT-MD`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'YouTube',
                                    url: 'https://youtube.com/channel/UCMF1MPwBQ0HauI9jzfLI1Iw'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                nyx.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'convertmenu': {
	anu = `
	ꪶ Convert Menu ꫂ
  ➙ ${prefix}toimage
  ➙ ${prefix}removebg
  ➙ ${prefix}sticker
  ➙ ${prefix}emojimix
  ➙ ${prefix}tovideo
  ➙ ${prefix}togif
  ➙ ${prefix}tourl
  ➙ ${prefix}ebinary
  ➙ ${prefix}dbinary
  `
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./media/mynx.jpg')},
                            hydratedFooterText: `XpeeBOT-MD`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'YouTube',
                                    url: 'https://youtube.com/channel/UCMF1MPwBQ0HauI9jzfLI1Iw'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                nyx.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'nocategorymenu': {
	anu = `
	ꪶ Other Menu ꫂ
  ➙ ${prefix}ping
  ➙ ${prefix}owner
  ➙ ${prefix}donate
  ➙ ${prefix}menu
  ➙ ${prefix}delete
  ➙ ${prefix}chatinfo
  ➙ ${prefix}quoted
  ➙ ${prefix}listpc
  ➙ ${prefix}listgc
  ➙ ${prefix}listonline
  ➙ ${prefix}report 
  `
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./media/mynx.jpg')},
                            hydratedFooterText: `XpeeBOT-MD`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'YouTube',
                                    url: 'https://youtube.com/channel/UCMF1MPwBQ0HauI9jzfLI1Iw'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                nyx.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'databasemenu': {
	anu = `
	ꪶ Database Menu ꫂ
  ➙ ${prefix}setcmd
  ➙ ${prefix}listcmd
  ➙ ${prefix}delcmd
  ➙ ${prefix}lockcmd
  ➙ ${prefix}addmsg
  ➙ ${prefix}listmsg
  ➙ ${prefix}getmsg
  ➙ ${prefix}delmsg
  `
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./media/mynx.jpg')},
                            hydratedFooterText: `XpeeBOT-MD`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'YouTube',
                                    url: 'https://youtube.com/channel/UCMF1MPwBQ0HauI9jzfLI1Iw'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                nyx.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'anonymouschatmenu': {
	anu = `
	ꪶ Anonymous Menu ꫂ
  ➙ ${prefix}start 
  ➙ ${prefix}next 
  ➙ ${prefix}stop
	`
	  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./media/mynx.jpg')},
                            hydratedFooterText: `XpeeBOT-MD`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'YouTube',
                                    url: 'https://youtube.com/channel/UCMF1MPwBQ0HauI9jzfLI1Iw'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                nyx.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'sistemmenu': {
	anu = `
	ꪶ System Menu ꫂ
  ➙ ${prefix}antilink
  ➙ ${prefix}mute 
  ➙ ${prefix}antiwame 
`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./media/mynx.jpg')},
                            hydratedFooterText: `XpeeBOT-MD`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'YouTube',
                                    url: 'https://youtube.com/channel/UCMF1MPwBQ0HauI9jzfLI1Iw'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                nyx.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
  case 'ownermenu': {
  	anu = `
  ꪶ Owner Menu ꫂ
  ➙ ${prefix}chat 
  ➙ ${prefix}join 
  ➙ ${prefix}leave
  ➙ ${prefix}setbotpp
  ➙ ${prefix}block @user
  ➙ ${prefix}unblock @user
  ➙ ${prefix}bcgroup
  ➙ ${prefix}bcall
  `
    const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./media/mynx.jpg')},
                            hydratedFooterText: `XpeeBOT-MD`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'YouTube',
                                    url: 'https://youtube.com/channel/UCMF1MPwBQ0HauI9jzfLI1Iw'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                nyx.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
  case 'allmenu': {
  	anu = `
         *_M y n X  B O T_*
  
  ꪶ Group Menu ꫂ
  ➙ ${prefix}grouplink
  ➙ ${prefix}ephemeral 
  ➙ ${prefix}setgrouppp
  ➙ ${prefix}setname
  ➙ ${prefix}group 
  ➙ ${prefix}editinfo
  ➙ ${prefix}grupinfo
  ➙ ${prefix}add @user
  ➙ ${prefix}kick @user
  ➙ ${prefix}promote @user
  ➙ ${prefix}demote @user
  
  ꪶ Download Menu ꫂ
  ➙ ${prefix}tiktoknowm
  ➙ ${prefix}tiktokwm
  ➙ ${prefix}tiktokmp3 
  ➙ ${prefix}instagram
  ➙ ${prefix}ig2 
  ➙ ${prefix}igreels
  ➙ ${prefix}igtv 
  ➙ ${prefix}twitter 
  ➙ ${prefix}twittermp3
  ➙ ${prefix}ytmp3
  ➙ ${prefix}ytmp4
  ➙ ${prefix}getmusic 
  ➙ ${prefix}getvideo 
  
  ꪶ Search Menu ꫂ
  ➙ ${prefix}play
  ➙ ${prefix}yts 
  ➙ ${prefix}google 
  ➙ ${prefix}gimage 
  ➙ ${prefix}pinterest
  ➙ ${prefix}wallpaper
  ➙ ${prefix}wikimedia
  ➙ ${prefix}ytsearch
  
  ꪶ Random Menu ꫂ
  ➙ ${prefix}coffee
  ➙ ${prefix}couplepp
  
  ꪶ Fun Menu ꫂ
  ➙ ${prefix}couple
  ➙ ${prefix}mysoulmate
  ➙ ${prefix}math
  
  ꪶ Voice Changer Menu ꫂ
  ➙ ${prefix}bass
  ➙ ${prefix}blown
  ➙ ${prefix}deep
  ➙ ${prefix}earrape
  ➙ ${prefix}fast
  ➙ ${prefix}fat
  ➙ ${prefix}nightcore
  ➙ ${prefix}reverse
  ➙ ${prefix}robot
  ➙ ${prefix}slow
  ➙ ${prefix}squirrel
  
  ꪶ Horoscope Menu ꫂ
  
  ➙ ${prefix}hockeynumber
  ➙ ${prefix}dreammeaning
  ➙ ${prefix}namemeaning
  ➙ ${prefix}fortunetelling
  ➙ ${prefix}marriageprediction
  ➙ ${prefix}wife&husband
  ➙ ${prefix}fortunetelling2
  ➙ ${prefix}matchname
  ➙ ${prefix}couplematch
  ➙ ${prefix}married
  ➙ ${prefix}businessnature
  ➙ ${prefix}sustenance
  ➙ ${prefix}profession
  ➙ ${prefix}fate
  ➙ ${prefix}potentialdisease
  ➙ ${prefix}tarot
  ➙ ${prefix}fengshui
  ➙ ${prefix}goodday
  ➙ ${prefix}badday
  ➙ ${prefix}unluckyday
  ➙ ${prefix}dragonday
  ➙ ${prefix}sustenance2
  ➙ ${prefix}luck
  ➙ ${prefix}weton
  ➙ ${prefix}character
  ➙ ${prefix}luck2
  ➙ ${prefix}fishing
  ➙ ${prefix}fertiletime
  ➙ ${prefix}zodiac
  ➙ ${prefix}shio
   
  ꪶ Convert Menu ꫂ
  ➙ ${prefix}toimage
  ➙ ${prefix}removebg
  ➙ ${prefix}sticker
  ➙ ${prefix}emojimix
  ➙ ${prefix}tovideo
  ➙ ${prefix}togif
  ➙ ${prefix}tourl
  ➙ ${prefix}ebinary
  ➙ ${prefix}dbinary
  
  ꪶ Other Menu ꫂ
  ➙ ${prefix}ping
  ➙ ${prefix}owner
  ➙ ${prefix}donate
  ➙ ${prefix}menu
  ➙ ${prefix}delete
  ➙ ${prefix}chatinfo
  ➙ ${prefix}quoted
  ➙ ${prefix}listpc
  ➙ ${prefix}listgc
  ➙ ${prefix}listonline
  ➙ ${prefix}report 
  
  ꪶ Database Menu ꫂ
  ➙ ${prefix}setcmd
  ➙ ${prefix}listcmd
  ➙ ${prefix}delcmd
  ➙ ${prefix}lockcmd
  ➙ ${prefix}addmsg
  ➙ ${prefix}listmsg
  ➙ ${prefix}getmsg
  ➙ ${prefix}delmsg
  
  ꪶ Anonymous Menu ꫂ
  ➙ ${prefix}start 
  ➙ ${prefix}next 
  ➙ ${prefix}stop
  
  ꪶ System Menu ꫂ
  ➙ ${prefix}antilink
  ➙ ${prefix}mute 
  ➙ ${prefix}antiwame 
  
  ꪶ Owner Menu ꫂ
  ➙ ${prefix}chat 
  ➙ ${prefix}join 
  ➙ ${prefix}leave
  ➙ ${prefix}setbotpp
  ➙ ${prefix}block @user
  ➙ ${prefix}unblock @user
  ➙ ${prefix}bcgroup
  ➙ ${prefix}bcall`
    const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./media/mynx.jpg')},
                            hydratedFooterText: `Xp-TEAM`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'YouTube',
                                    url: 'https://youtube.com/channel/UCMF1MPwBQ0HauI9jzfLI1Iw'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                nyx.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'tqto': case 'thanksto': 
reply(`Dika\nZeeone\nSanzy\nDio\nThunder_XM TEAM\nXP TEAM\nNezzy\nArifi Razzaq\nZian\nFatih\nReyJyu\nAlice`)
break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        jgndihapus = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return reply(jgndihapus)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return reply(err)
                        if (stdout) return reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.database
		    if (!(budy.toLowerCase() in msgs)) return
		    nyx.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
