//═══════[ N O - H A P U S - C R E D I T ]════════\\

//═══════[ MODULE ]════════\\

const fs = require('fs')
const chalk = require('chalk')

//═══════[ WEBSITE REST API ]════════\\
global.APIs = {
	zenz: 'https://zenzapi.xyz', //Rest Api Dari Bang Zen
}
//═══════[ APIKEY ]════════\\
global.APIKeys = {
	'https://zenzapi.xyz': 'f675ec1785', //Beli Sendiri Yha Gan
}

//═══════[ EDIT OWNER & SEGALA MACAM ]════════\\
global.owner = ['6281908052908'] //Ganti Nomer Kamu
global.pemilik = ['621908052908'] //Ganti Nomer Kamu
global.premium = ['3584460008017','6289652948525'] // Add Nomer Kamu Gan, Contoh ['3584460008017','6289652948525','noLu']
global.pengguna = 'Created By Elpezet24' //Ganti Nama Kamu
global.botnma = 'XpeeBOT WhatsApp - MD' //Nama Bot Mu
global.ownernma = 'Elpezet24' //Nama Owner
global.packname = 'XpeeBOT EMDEH'
global.author = '\n\n\n\n\n\n\n\n\n🥰🥰😘😘😠😠😱😱🤨🤨\n\n\n\n\n\n\n\n\n\nMade By Elpezet24\n\n\n\n\n'
global.sessionName = 'session' //ini nama session, bisa lu ganti apa mau mu
global.prefa = ['#','!','/',''] //ini prefix, kalau mau yg lain tinggal tambah aja
global.sp = '⭔' //ini yg di menu
global.mess = {
    success: '_Done ✓_',
    admin: '_Fitur Ini Hanya Untuk Admin!_',
    botAdmin: '_Jadikan Bot Sebagai Admin Terlebih Dahulu_',
    owner: '_Fitur Ini Hanya Digunakan Untuk Owner Bot Saja!_',
    group: '_Fitur Ini Hanya Digunakan Untuk Grup!_',
    private: '_Fitur Ini Khsus Untuk Pesan Pribadi! _',
    bot: '_Fitur ini hanya untuk nomor bot_',
    wait: '\n\n\n    *_Sedang Di Proses...._*    \n\n\n',
    endLimit: 'Batas Harian Limit Anda Telah Kedaluwarsa, Batas Limit Anda Akan Direset Setiap 12 Jam',
}
global.limitawal = {
    premium: "4789001277200000000", //terserah :v
    free: "200", //limit nya user free/biasa
}
global.thumb = fs.readFileSync('./media/mynx.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
