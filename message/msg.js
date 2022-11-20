/*HELLO BRO TERIMA KASIH SUDAH AMBIL SCRIPT INI JANGAN LUPA IKUTI DAN SUBSCRIBE MEDIA SOSIAL OWNER DAN BOT

Instagram : @arsrfii
Youtube : Channel JOJO
WhatsApp : 0813-1994-4917

THANKS TO
- Allah Swt
- Baileys
- Irfan 
- Amell
- Hardianto
- Febri
- Grup Jojoo
- Arasya

Matur Nuwun*/
"use strict";
const {
	downloadContentFromMessage
} = require("@adiwajshing/baileys")
const { color, bgcolor } = require('../lib/color')
const { getBuffer, fetchJson, fetchText, getRandom, getGroupAdmins, runtime, sleep, makeid, serialize} = require("../lib/myfunc");
const { webp2mp4File } = require("../lib/convert")
const { toAudio, toPTT, toVideo } = require('../lib/converter')
const { y2mateA, y2mateV } = require('../lib/y2mate')
const { upload, formatDate } = require("../lib/uploads");
const { pinterest } = require("../lib/pinterest")
const { darkjokes } = require("../lib/darkjokes")
const { lirikLagu } =require("../lib/lirik.js")
const { igstory } = require("../lib/igstory")
const { ephoto } = require("../lib/ephoto")
const { igDownloader } = require("../lib/igdown")
const { wikiSearch } = require("../lib/wiki")
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("../lib/limit");
const { addList, deleteList, checkList } = require("../lib/list");
const { isTicTacToe, getPosTic } = require("../lib/tictactoe");
const { addPlayGame, getJawabanGame, isPlayGame, cekWaktuGame, getGamePosi } = require("../lib/game");
const { addCommands, checkCommands, deleteCommands } = require("../lib/autoresp");
const { addLogin, deleteLogin, checkLogins } = require("../lib/login");
const { addBanned, unBanned, BannedExpired, cekBannedUser } = require("../lib/banned");
const tictac = require("../lib/tictac");
const _prem = require("../lib/premium");
const fs = require ("fs");
const moment = require("moment-timezone");
const util = require("util");
const w5botapi = require("w5-textmaker");
const { exec, spawn } = require("child_process");
const ffmpeg = require("fluent-ffmpeg");
const xfar = require('xfarr-api');
const axios = require("axios");
const hikki = require("hikki-me");
const hxz = require("hxz-api");
const SyaApi = require("@phaticusthiccy/open-apis");
const brainly = require("brainly-scraper");
const imgbb = require("imgbb-uploader");
const ra = require("ra-api");
const thiccysapi = require("textmaker-lasi");
const kotz = require("kotz-api");
const rmvbg = require("removebg-wrapper");
const speed = require("performance-now");
const request = require("request");
const ms = require("parse-ms");
const waktu = require("countdown");
const kbbi = require("kbbi-scraper");
const kyy = require("ikyy");
const Ikyy = new kyy();

//Apikey melcanz, Search aja melcanz.com
//Apikey jojo = Syaa
const apikey = "melcantik"
const jojoapi = "Syaa"
const imgbbapi = "9a0aed7ae09bdf7a9d7ddeb018fed6cf"

// Setting Donasi
const gopay = "0882-1329-2687"
const ovo = "0813-1994-4917"
const dana = "0813-1994-4917"
const pulsa = "0813-1994-4917"
const pulsa2 = "0882-1329-2687"
const ig = "arsrfii"
const github = "GetSya"

// Exif
const Exif = require("../lib/exif")
const exif = new Exif()

// DB Game
let tictactoe = [];
let tebakgambar = []
let kuiscuy = []
let tebaktebakan = []
let tekateki = []
let tebakkimia = []
let tb = []
let tebaklagu = []
let siapaaku = []
let susun = []
let ujian = []
let pancing = []

//Prefix
let multi = true
let nopref = false
let prefa = '#'

// Rndm
let mode = 'public'
let own2 = '6281319944917@s.whatsapp.net'
let autoyt = true

// Type Menu
let typemenu = 'sections'

//Random
let randomreact = ["🗿","👋","🥰","🐛","🤸","😍","🎩","😀","😃","😄","😁","😆","😅","😂","🤣","😭","🤡","🔥","❤️","🧡","💛","💚","💙","💜","🖤","🎆","📢","🏅","🎊","😺","😸","😹","😻","😼","😽","🙀","😿","😾","🤙","👋","🙏","🤳","👀","❣️","🗣️","🌀","🥺","🌛","🌜","🌚","😇","🤪","😜","😝","😛","😱","👻"]

// Database
let pendaftar = JSON.parse(fs.readFileSync('./database/user.json'))
let mess = JSON.parse(fs.readFileSync('./message/response.json'));
let premium = JSON.parse(fs.readFileSync('./database/premium.json'));
let ban = JSON.parse(fs.readFileSync('./database/ban.json'));
let balance = JSON.parse(fs.readFileSync('./database/balance.json'));
let limit = JSON.parse(fs.readFileSync('./database/limit.json'));
let glimit = JSON.parse(fs.readFileSync('./database/glimit.json'));
let antilink = JSON.parse(fs.readFileSync('./database/antilink.json'));
let _cmd = JSON.parse(fs.readFileSync('./database/command.json'));
let _cmdUser = JSON.parse(fs.readFileSync('./database/commandUser.json'));
const commandsDB = JSON.parse(fs.readFileSync('./database/commands.json'))
const loginnya = JSON.parse(fs.readFileSync('./database/logins.json'))
let mute = JSON.parse(fs.readFileSync('./database/mute.json'))
let listnya = JSON.parse(fs.readFileSync('./database/list.json'))

moment.tz.setDefault("Asia/Jakarta").locale("id");

module.exports = async(conn, msg, m, setting, store) => {
	try {
		let { ownerNumber, ownerName, botName, gamewaktu, limitCount, gcwa } = setting
		let { allmenu, genmenu, downloader, rndm, menuprem, storage, othermenu, maker, vokaledit, gamemenu, atm, grupmenu, encode, owner, shop } = require('./help')
		const { type, quotedMsg, mentioned, now, fromMe } = msg
		if (msg.isBaileys) return
		const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
		const tgl = moment.tz('Asia/Jakarta').format('DD/MM/YY')
		let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
		const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
		const content = JSON.stringify(msg.message)
		const from = msg.key.remoteJid
		const chats = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type === 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type === 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (type === 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : (type === 'buttonsResponseMessage') && quotedMsg.fromMe && msg.message.buttonsResponseMessage.selectedButtonId ? msg.message.buttonsResponseMessage.selectedButtonId : (type === 'templateButtonReplyMessage') && quotedMsg.fromMe && msg.message.templateButtonReplyMessage.selectedId ? msg.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? (msg.message.buttonsResponseMessage?.selectedButtonId || msg.message.listResponseMessage?.singleSelectReply.selectedRowId) : (type == 'listResponseMessage') && quotedMsg.fromMe && msg.message.listResponseMessage.singleSelectReply.selectedRowId ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : ""
                const toJSON = j => JSON.stringify(j, null,'\t')
		if (multi){
		    var prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(chats) ? chats.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : ''
        } else {
            if (nopref){
                prefix = ''
            } else {
                prefix = prefa
            }
        }
		const more = String.fromCharCode(8206)
    const readmore = more.repeat(4001)
		const args = chats.split(' ')
		const command = chats.toLowerCase().split(' ')[0] || ''
		const isCmd = command.startsWith(prefix)
		const isGroup = msg.key.remoteJid.endsWith('@g.us')
		const sender = isGroup ? (msg.key.participant ? msg.key.participant : msg.participant) : msg.key.remoteJid
		const isOwner = ownerNumber == sender ? true : [`${ownerNumber}`, "6281319944917@s.whatsapp.net", `${own2}`].includes(sender) ? true : false
		const pushname = msg.pushName
		const q = chats.slice(command.length + 1, chats.length)
		const body = chats.startsWith(prefix) ? chats : ''
		const botNumber = conn.user.id.split(':')[0] + '@s.whatsapp.net'
		const groupMetadata = isGroup ? await conn.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.id : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender)
		const isUser = pendaftar.includes(sender)
		const isMuted = isGroup ? mute.includes(from) : false
		const isPremium = isOwner ? true : _prem.checkPremiumUser(sender, premium)
		const isBan = cekBannedUser(sender, ban)
		const isAntiLink = isGroup ? antilink.includes(from) : false
		const gcounti = setting.gcount
		const gcount = isPremium ? gcounti.prem : gcounti.user
		const piw = `❋─────────────────❋\n            *✘ JOJO - BOT ✘*\n❋─────────────────❋`

    const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "41798898139-1429460331@g.us","inviteCode": "m","groupName": "Jojo Lovers", "caption": `© ${pushname}`, 'jpegThumbnail': fs.readFileSync(setting.pathimg)}}}
    const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "41798898139-1429460331@g.us" } : {}) },message: { "videoMessage": { "title":`*AUTO DOWNLOAD AUDIO YOUTUBE*`, "h": `Hmm`,'seconds': '10000000⁰0', 'caption': `*AUTO DOWNLOAD AUDIO YOUTUBE*`, 'jpegThumbnail': fs.readFileSync(setting.pathimg)}}}
    const fake = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "41798898139-1429460331@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `_${ucapanWaktu}_ _*${pushname} 👋*_`,
                 "title": `Hmm`,
                 'jpegThumbnail': fs.readFileSync('pp.jpg')
                        }
	                  } 
                     }
    const fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `*HIDETAG! ${groupName}*`,jpegThumbnail: fs.readFileSync(setting.pathimg)}}}
		const mentionByTag = type == "extendedTextMessage" && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.mentionedJid : []
                const mentionByReply = type == "extendedTextMessage" && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.participant || "" : ""
                const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
                mention != undefined ? mention.push(mentionByReply) : []
                const mentionUser = mention != undefined ? mention.filter(n => n) : []
                
		const sendStickerFromUrl = async (to, url) => {
      var names = Date.now() / 10000;
      var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, chats) {
          request(uri)
            .pipe(fs.createWriteStream(filename))
            .on("close", callback);
        });
      };
      download(url, "./sticker" + names + ".png", async function () {
        console.log("selesai");
        let filess = "./sticker" + names + ".png";
        let asw = "./sticker" + names + ".webp";
        exec(
          `ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`,
          (err) => {
            let media = fs.readFileSync(asw);
            conn.sendMessage(to, {sticker: media}, {quoted: msg})
            fs.unlinkSync(filess);
            fs.unlinkSync(asw);
          }
        );
      });
    };
    //
		async function downloadAndSaveMediaMessage (type_file, path_file) {
			if (type_file === 'image') {
				var stream = await downloadContentFromMessage(msg.message.imageMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
				let buffer = Buffer.from([])
				for await(const chunk of stream) {
					buffer = Buffer.concat([buffer, chunk])
				}
				fs.writeFileSync(path_file, buffer)
				return path_file
			} else if (type_file === 'video') {
				var stream = await downloadContentFromMessage(msg.message.videoMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
				let buffer = Buffer.from([])
				for await(const chunk of stream) {
					buffer = Buffer.concat([buffer, chunk])
				}
				fs.writeFileSync(path_file, buffer)
				return path_file
			} else if (type_file === 'sticker') {
				var stream = await downloadContentFromMessage(msg.message.stickerMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage, 'sticker')
				let buffer = Buffer.from([])
				for await(const chunk of stream) {
					buffer = Buffer.concat([buffer, chunk])
				}
				fs.writeFileSync(path_file, buffer)
				return path_file
			} else if (type_file === 'audio') {
				var stream = await downloadContentFromMessage(msg.message.audioMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.audioMessage, 'audio')
				let buffer = Buffer.from([])
				for await(const chunk of stream) {
					buffer = Buffer.concat([buffer, chunk])
				}
				fs.writeFileSync(path_file, buffer)
				return path_file
			}
		}
		function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
                hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}
		const sendFileFromUrl = async (from, url, caption, options = {}) => {
		    let mime = '';
		    let res = await axios.head(url)
		    mime = res.headerd["content-type"]
		    let type = mime.split("/")[0]+"Message"
		    if (mime.split("/")[0] === "image") {
		       var img = await getBuffer(url)
		       return conn.sendMessage(from, { image: img, caption: caption }, options)
		    } else if (mime.split("/")[0] === "video") {
		       var vid = await getBuffer(url)
		       return conn.sendMessage(from, { video: vid, caption: caption }, options)
		    } else if (mime.split("/")[0] === "audio") {
		       var aud = await getBuffer(url)
		       return conn.sendMessage(from, { audio: aud, mimetype: 'audio/mp3' }, options)
		    } else {
		       var doc = await getBuffer(url)
		       return conn.sendMessage(from, { document: doc, mimetype: mime, caption: caption }, options)
		    }
		}
    
        //dashboard
        async function addCountCmdUser(nama, sender, u) {
         var posi = null
         var pos = null
         Object.keys(u).forEach((i) => {
            if (u[i].jid === sender) {
               posi = i
            }
          })
         if (posi === null) {
            u.push({jid: sender, db: [{nama: nama, count: 0}]})
            fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
          Object.keys(u).forEach((i) => {
             if (u[i].jid === sender) {
               posi = i
             }
          })
         }
         if (posi !== null) {
         Object.keys(u[posi].db).forEach((i) => {
            if (u[posi].db[i].nama === nama) {
               pos = i
            }
          })
         if (pos === null) {
           u[posi].db.push({nama: nama, count: 1})
           fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
          } else {
           u[posi].db[pos].count += 1
           fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
          }
         }
        }

        async function getPosiCmdUser(sender, _db) {
         var posi = null
         Object.keys(_db).forEach((i) => {
          if (_db[i].jid === sender) {
             posi = i
          }
         })
          return posi
        }
        async function addCountCmd(nama, sender, _db) {
         addCountCmdUser(nama, sender, _cmdUser)
          var posi = null
            Object.keys(_db).forEach((i) => {
               if (_db[i].nama === nama) {
                 posi = i
               }
            })
            if (posi === null) {
              _db.push({nama: nama, count: 1})
              fs.writeFileSync('./database/command.json',JSON.stringify(_db, null, 2));
            } else {
            _db[posi].count += 1
            fs.writeFileSync('./database/command.json',JSON.stringify(_db, null, 2));
          }
        }
        
		const isUrl = (url) => {
			return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
		}
		function jsonformat(string) {
            return JSON.stringify(string, null, 2)
        }
		function monospace(string) {
            return '```' + string + '```'
        }
		function randomNomor(min, max = null) {
		  if (max !== null) {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min + 1)) + min;
		  } else {
			return Math.floor(Math.random() * min) + 1
		  }
		}
		const pickRandom = (arr) => {
			return arr[Math.floor(Math.random() * arr.length)]
		}
		function mentions(teks, mems = [], id) {
			if (id == null || id == undefined || id == false) {
			  let res = conn.sendMessage(from, { text: teks, mentions: mems })
			  return res
			} else {
		      let res = conn.sendMessage(from, { text: teks, mentions: mems }, { quoted: msg })
		      return res
 		    }
		}
		const reply = (teks) => {
			conn.sendMessage(from, { text: teks }, { quoted: msg})
		}
		
		const fakemsg = (teks) => {
			conn.sendMessage(from, { text: teks }, { quoted: fake})
		}
		
		const textImg = (teks) => {
			return conn.sendMessage(from, { text: teks, jpegThumbnail: fs.readFileSync(setting.pathimg) }, { quoted: msg })
		}
		const sendMess = (hehe, teks) => {
			conn.sendMessage(hehe, { text, teks })
		}
		const buttonWithText = (from, text, footer, buttons) => {
			return conn.sendMessage(from, { text: text, footer: footer, templateButtons: buttons })
		}
		const sendContact = (jid, numbers, name, quoted, mn) => {
			let number = numbers.replace(/[^0-9]/g, '')
			const vcard = 'BEGIN:VCARD\n' 
			+ 'VERSION:3.0\n' 
			+ 'FN:' + name + '\n'
			+ 'ORG:;\n'
			+ 'TEL;type=CELL;type=VOICE;waid=' + number + ':+' + number + '\n'
			+ 'END:VCARD'
			return conn.sendMessage(from, { contacts: { displayName: name, contacts: [{ vcard }] }, mentions : mn ? mn : []},{ quoted: quoted })
		}
		//{ callButton: { displayText: `Call Owner!`, phoneNumber: `+${ownerNumber}` } },
		const buttonsDefault = [
			{ urlButton: { displayText: `🏹 GRUP WHATSAPP 🎯`, url : gcwa } },
			{ urlButton: { displayText: `👤 OWNER BOT 👤`, url : `https://wa.me/6281319944917?text=Hai+kak+aku+mau+beli+PREMIUM` } },
			{ quickReplyButton: { displayText: `Rate Bot ⭐`, id: `${prefix}getrating` } },
			{ quickReplyButton: { displayText: `List Menu 📑`, id: `${prefix}allmenu` } },
		  { quickReplyButton: { displayText: `Login 👥`, id: `${prefix}login` } },
		]
		const buttonsDefa = [{buttonId: `/getrating`, buttonText: { displayText: `Rate Bot ⭐` }, type: 2 }, {buttonId: `/login`, buttonText: { displayText: `Login 👥` }, type: 2 }, {buttonId: `/allmenu`, buttonText: { displayText: "List Menu 📑" }, type: 2 }]
		
        
		const isImage = (type == 'imageMessage')
		const isVideo = (type == 'videoMessage')
		const isSticker = (type == 'stickerMessage')
		const isAudio = (type == 'audioMessage')
		const isDocument = (type == 'documentMessage')
		const isQuotedMsg = (type == 'extendedTextMessage')
		const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
		const isQuotedAudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false
		const isQuotedDocument = isQuotedMsg ? content.includes('documentMessage') ? true : false : false
		const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
		const isQuotedSticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false

		// Auto Read & Presence Online

		// Auto Read & Presence Online
		conn.readMessages([msg.key])
		conn.sendPresenceUpdate('available', from)
		
// Auto Registrasi
		if (isCmd && !isUser) {
			pendaftar.push(sender)
			fs.writeFileSync('./database/user.json', JSON.stringify(pendaftar, null, 2))
		  }
		  
		  
        // MUTE
        if (isMuted){
            if (!isGroupAdmins && !isOwner) return
            if (chats.toLowerCase().startsWith(prefix+'unmute')){
                let anu = mute.indexOf(from)
                mute.splice(anu, 1)
                fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
                reply(`Bot telah diunmute di group ini`)
            }
        }

		// Premium
		_prem.expiredCheck(conn, premium)

    // Banned
        if (isBan) return
        BannedExpired(ban)
        
		// Tictactoe
		if (isTicTacToe(from, tictactoe)) tictac(chats, prefix, tictactoe, from, sender, reply, mentions, addBalance, balance)

        // Mode
        if (mode === 'self'){
            if (!fromMe && !isOwner) return
        }
        
        //Auto Respon
        for (var i = 0; i < commandsDB.length ; i++) {
				if (chats.toLowerCase() === commandsDB[i].pesan) {
					reply(commandsDB[i].balasan)
				}
				  }
				// Login 
				for (var i = 0; i < loginnya.length ; i++) {
				}

        // Anti link
        if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
            if (chats.includes(`https://chat.whatsapp.com`)) {
                reply(`*「 GROUP LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`)
                number = sender
      conn.groupParticipantsUpdate(from, [number], "remove")
            }
        }
        

// Auto Youtube Downloader
if (autoyt) {
let yutu = `https://youtu${chats.slice(13)}`
if (!isGroup){
if (chats.includes(yutu)) {
            y2mateA(yutu).then( data => {
              conn.sendMessage(from, {document: {url: data[0].link}, fileName: `${data[0].judul}.mp3`, mimetype: 'audio/mp3'}, {quoted: fvideo})
})}}
if (isGroup) {
if (chats.includes(yutu)) {
            y2mateA(yutu).then( data => {
              conn.sendMessage(from, {audio: {url: data[0].link}, mimetype: 'audio/mp4'}, {quoted: msg})
              var caption = monospace(`Auto Download Youtube, Pilih Tipe Berikut`)
              var but = [{buttonId: `${yutu}`, buttonText: { displayText: "📄 File Document" }, type: 1 }, {buttonId: `/ytmp3vn ${yutu}`, buttonText: { displayText: "🎧 Voice Not" }, type: 2 }, {buttonId: `/ytmp4 ${yutu}`, buttonText: { displayText: "🎥 Video" }, type: 3 }]
              conn.sendMessage(sender, { text: caption, buttons: but, footer: "Silahkan Pilih Untuk mengubah Tipe Audio", templateButtons: but }, {quoted: fvideo})
					  })
            }
}
}

        // Game
		cekWaktuGame(conn, tebakgambar)
		if (isPlayGame(from, tebakgambar) ) {
		  if (chats.toLowerCase() == getJawabanGame(from, tebakgambar)) {
		    var htgm = randomNomor(500, 550)
			addBalance(sender, htgm, balance)
		    var texttg = `*Selamat @${sender.split("@")[0]} Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(from, tebakgambar)}\nHadiah : ${htgm} balance\nKode Game : ${makeid(15)}\n\nIngin bermain lagi? Pencet Tombol Dibawah`
			var but = [{buttonId: `/tebakgambar`, buttonText: { displayText: '⟨ PLAY AGAIN ⟩' }, type: 1 }]
			conn.sendMessage(from, { text: texttg, buttons: but, footer: botName, mentions: [sender]}, { quoted: msg })  
		    tebakgambar.splice(getGamePosi(from, tebakgambar), 1)
		  }
		}
		
		cekWaktuGame(conn, kuiscuy)
		if (isPlayGame(from, kuiscuy) ) {
		  if (chats.toLowerCase() == getJawabanGame(from, kuiscuy)) {
		    var htgm = randomNomor(500, 550)
			addBalance(sender, htgm, balance)
			
		    var texttg = `*Selamat @${sender.split("@")[0]} Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(from, tebakgambar)}\nHadiah : ${htgm} balance\nKode Game : ${makeid(15)}\n\nIngin bermain lagi? Pencet Tombol Dibawah`
			var but = [{buttonId: `/tebakkata`, buttonText: { displayText: '⟨ PLAY AGAIN ⟩' }, type: 1 }]
			conn.sendMessage(from, { text: texttg, buttons: but, footer: botName, mentions: [sender]}, { quoted: msg })  
		    kuiscuy.splice(getGamePosi(from, kuiscuy), 1)
		  }
		}
		
		cekWaktuGame(conn, tekateki)
		if (isPlayGame(from, tekateki) ) {
		  if (chats.toLowerCase() == getJawabanGame(from, tekateki)) {
		    
		    var htgm = randomNomor(500, 550)
			addBalance(sender, htgm, balance)
		    var texttg = `*Selamat @${sender.split("@")[0]} Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(from, tebakgambar)}\nHadiah : ${htgm} balance\nKode Game : ${makeid(15)}\n\nIngin bermain lagi? Pencet Tombol Dibawah`
			var but = [{buttonId: `/tekateki`, buttonText: { displayText: '⟨ PLAY AGAIN ⟩' }, type: 1 }]
			conn.sendMessage(from, { text: texttg, buttons: but, footer: botName, mentions: [sender]}, { quoted: msg })  
		    tekateki.splice(getGamePosi(from, tekateki), 1)
		  }
		}
		
		cekWaktuGame(conn, tebakkimia)
		if (isPlayGame(from, tebakkimia) ) {
		  if (chats.toLowerCase() == getJawabanGame(from, tebakkimia)) {
		    var htgm = randomNomor(500, 550)
			addBalance(sender, htgm, balance)
		    var texttg = `*Selamat @${sender.split("@")[0]} Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(from, tebakgambar)}\nHadiah : ${htgm} balance\nKode Game : ${makeid(15)}\n\nIngin bermain lagi? Pencet Tombol Dibawah`
			var but = [{buttonId: `/tebakkimia`, buttonText: { displayText: '⟨ PLAY AGAIN ⟩' }, type: 1 }]
			conn.sendMessage(from, { text: texttg, buttons: but, footer: botName, mentions: [sender]}, { quoted: msg })
		    tebakkimia.splice(getGamePosi(from, tebakkimia), 1)
		  }
		}
		
		cekWaktuGame(conn, tebaktebakan)
		if (isPlayGame(from, tebaktebakan) ) {
		  if (chats.toLowerCase() == getJawabanGame(from, tebaktebakan)) {
		    var htgm = randomNomor(500, 550)
			addBalance(sender, htgm, balance)
		    var texttg = `*Selamat @${sender.split("@")[0]} Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(from, tebakgambar)}\nHadiah : ${htgm} balance\nKode Game : ${makeid(15)}\n\nIngin bermain lagi? Pencet Tombol Dibawah`
			var but = [{buttonId: `/kuis`, buttonText: { displayText: '⟨ PLAY AGAIN ⟩' }, type: 1 }]
			conn.sendMessage(from, { text: texttg, buttons: but, footer: botName, mentions: [sender]}, { quoted: msg })  
		    tebaktebakan.splice(getGamePosi(from, tebaktebakan), 1)
		  }
		}
		
		cekWaktuGame(conn, ujian)
		if (isPlayGame(from, ujian) ) {
		  if (chats.toLowerCase() == getJawabanGame(from, ujian)) {
		    var htgm = randomNomor(500, 550)
			addBalance(sender, htgm, balance)
		    var texttg = `*Selamat @${sender.split("@")[0]} Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(from, tebakgambar)}\nHadiah : ${htgm} balance\nKode Game : ${makeid(15)}\n\nIngin bermain lagi? Pencet Tombol Dibawah`
			var but = [{buttonId: `/tebakkata`, buttonText: { displayText: '⟨ PLAY AGAIN ⟩' }, type: 1 }]
			conn.sendMessage(from, { text: texttg, buttons: but, footer: botName, mentions: [sender]}, { quoted: msg })
		    ujian.splice(getGamePosi(from, ujian), 1)
		  }
		}
		
		cekWaktuGame(conn, tebaklagu)
		if (isPlayGame(from, tebaklagu) ) {
		  if (chats.toLowerCase() == getJawabanGame(from, tebaklagu)) {
		    var htgm = randomNomor(500, 550)
		    
			addBalance(sender, htgm, balance)
		    var texttg = `*Selamat @${sender.split("@")[0]} Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(from, tebakgambar)}\nHadiah : ${htgm} balance\nKode Game : ${makeid(15)}\n\nIngin bermain lagi? Pencet Tombol Dibawah`
			var but = [{buttonId: `/tebaklagu`, buttonText: { displayText: '⟨ PLAY AGAIN ⟩' }, type: 1 }]
			conn.sendMessage(from, { text: texttg, buttons: but, footer: botName, mentions: [sender]}, { quoted: msg })  
		    tebaklagu.splice(getGamePosi(from, tebaklagu), 1)
		  }
		}
		
		cekWaktuGame(conn, susun)
		if (isPlayGame(from, susun) ) {
		  if (chats.toLowerCase() == getJawabanGame(from, susun)) {
		    var htgm = randomNomor(500, 550)
		    
			addBalance(sender, htgm, balance)
		    var texttg = `*Selamat @${sender.split("@")[0]} Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(from, tebakgambar)}\nHadiah : ${htgm} balance\nKode Game : ${makeid(15)}\n\nIngin bermain lagi? Pencet Tombol Dibawah`
			var but = [{buttonId: `/susunkata`, buttonText: { displayText: '⟨ PLAY AGAIN ⟩' }, type: 1 }]
			conn.sendMessage(from, { text: texttg, buttons: but, footer: botName, mentions: [sender]}, { quoted: msg }) 
		    susun.splice(getGamePosi(from, susun), 1)
		  }
		}
		
		cekWaktuGame(conn, siapaaku)
		if (isPlayGame(from, siapaaku) ) {
		  if (chats.toLowerCase() == getJawabanGame(from, siapaaku)) {
		    var htgm = randomNomor(500, 550)
		    
			addBalance(sender, htgm, balance)
		    var texttg = `*Selamat @${sender.split("@")[0]} Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(from, tebakgambar)}\nHadiah : ${htgm} balance\nKode Game : ${makeid(15)}\n\nIngin bermain lagi? Pencet Tombol Dibawah`
			var but = [{buttonId: `/siapakahaku`, buttonText: { displayText: '⟨ PLAY AGAIN ⟩' }, type: 1 }]
			conn.sendMessage(from, { text: texttg, buttons: but, footer: botName, mentions: [sender]}, { quoted: msg })
		    siapaaku.splice(getGamePosi(from, siapaaku), 1)
		  }
		}
		
		cekWaktuGame(conn, tb)
		if (isPlayGame(from, tb) ) {
		  if (chats.toLowerCase() == getJawabanGame(from, tb)) {
		    var htgm = randomNomor(500, 550)
			addBalance(sender, htgm, balance)
			
		    var texttg = `*Selamat @${sender.split("@")[0]} Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(from, tebakgambar)}\nHadiah : ${htgm} balance\nKode Game : ${makeid(15)}\n\nIngin bermain lagi? Pencet Tombol Dibawah`
			var but = [{buttonId: `/tebakbendera`, buttonText: { displayText: '⟨ PLAY AGAIN ⟩' }, type: 1 }]
			conn.sendMessage(from, { text: texttg, buttons: but, footer: botName, mentions: [sender]}, { quoted: msg }) 
		    tb.splice(getGamePosi(from, tb), 1)
		  }
		}
		


if (chats.startsWith("fetch ")) {
  if (!q)return reply(`Masukan Fetch Link!`)
  var data = await fetchText(q)
  reply(data)
}

		if (chats.startsWith("> ") && isOwner) {
		console.log(color('[EVAL]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkoakwoak`))
		  const ev = (sul) => {
            var sat = JSON.stringify(sul, null, 2)
            var bang = util.format(sat)
            if (sat == undefined) {
              bang = util.format(sul)
            }
            return textImg(bang)
          }
          try {
           textImg(util.format(eval(`;(async () => { ${chats.slice(2)} })()`)))
          } catch (e) {
           textImg(util.format(e))
          }
		} else if (chats.startsWith("$ ") && isOwner) {
        console.log(color('[EXEC]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkoakwoak`))
          exec(chats.slice(2), (err, stdout) => {
		    if (err) return reply(`${err}`)
		    if (stdout) reply(`${stdout}`)
		  })
        } else if (chats.startsWith("x ") && isOwner) {
	    console.log(color('[EVAL]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkaokwoak`))
		 try {
	       let evaled = await eval(chats.slice(2))
		   if (typeof evaled !== 'string') evaled = require("util").inspect(evaled)
			reply(`${evaled}`)
		 } catch (err) {
		   reply(`${err}`)
		 }
		}

		// Logs;
		if (!isGroup && isCmd && !fromMe) {
			addBalance(sender, randomNomor(60), balance)
			console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(msg.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
		}
		if (isGroup && isCmd && !fromMe) {
			addBalance(sender, randomNomor(60), balance)
			console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(msg.messageTimestamp *1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
		}

		switch(command) {
			case prefix+'menu':
				case prefix+'start':
				reply(`*[ JOJO BETA ]*\n\n- ${prefix}tagall\n- ${prefix}hidetag`)
				
				break
				case prefix+'tagall':
      if (!isGroup) return reply(mess.OnlyGrup)
      if (!isGroupAdmins) return reply(mess.GrupAdmin)
     var mems = []
      var teks = `╔══ *TAG MEMBER*\n╠ Pesan : ${q !== undefined ? q : `Pesan Tidak Ada`}\n║\n`
      for (let i of groupMembers) {
        teks += `╠ ≻ @${i.id.split("@")[0]}\n`
        mems.push(i.id)
      }
      conn.sendMessage(from, { text: teks, mentions: mems}, { quoted: msg })
      break
	  case prefix+'hidetag':
		        if (!isGroup) return reply(mess.OnlyGrup)
				if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
				addCountCmd('#hidetag', sender, _cmd)
			    let mem = [];
		        groupMembers.map( i => mem.push(i.id) )
				conn.sendMessage(from, { text: q ? q : '', mentions: mem }, {quoted: fdoc})
			    break
default:

		}
	} catch (err) {
		console.log(color('[ERROR]', 'red'), err)
	}
}
