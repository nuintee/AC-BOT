const Discord = require('discord.js');
const client = new Discord.Client();
const acar = { //friends
    dog: "https://i.ytimg.com/vi/qV36yG_loCw/hqdefault.jpg",
    rabbit: "https://i.gzn.jp/img/2011/03/22/great_arigato_usagi/snap0576.jpg",
    aligator: "https://lohas.nicoseiga.jp/thumb/1258246i?",
    lion: "https://i.gzn.jp/img/2011/03/29/king_sayona_lion/king_04.png",
    rhino: "https://stat.profile.ameba.jp/profile_images/20110918/14/d3/cd/j/o035002511316324462690.jpg",
    eel: "https://i.ytimg.com/vi/c_Myn6B0vMg/hqdefault.jpg",
    mouse_mother: "https://lohas.nicoseiga.jp/thumb/1004302i?",
    skunk: "https://stat.ameba.jp/user_images/20110417/16/nyx-nanapremes/32/b2/j/t02200165_0480036011171364154.jpg?caw=800",
    mambo: "https://i.ytimg.com/vi/cA46tQHhp20/hqdefault.jpg",
    mouse_son: "https://lohas.nicoseiga.jp/thumb/1278716i?",
    ac: "https://youtu.be/EsRm78ZSOgc"
};

client.on('ready', () => {
   console.log('AC-JAPANがログインしました。');
});

client.on('message', async message => {
    if(message.content.includes('魔法の言葉')　|| message.content.includes('楽しい仲間')　|| message.content.includes('ぽぽぽぽーん') || message.content.includes('ポポポポーン')){
        message.channel.send('ポポポポ〜ン♪')
        for (let member in acar){
            message.channel.send(acar[member]);
        }
    }
    else if(message.content.includes("こんにちは") || message.content.includes("コンニチワ")){ //Konnichiwan
        message.channel.send(acar['dog']); 
        message.react('🐕');
    }
    else if(message.content.includes('ありがとう') || message.content.includes('有難う')　|| message.content.includes('アリガトウ')){ //Arigato Usagi
        message.channel.send(acar['rabbit']);
        message.react('🐇');
    }
    else if(message.content.includes('こんばんは') || message.content.includes('今晩は')　|| message.content.includes('こんばんわ')　|| message.content.includes('コンバンワ')){ //Konbanwani
        message.channel.send(acar['aligator']);
        message.react('🐊');
    }
    else if(message.content.includes('さよなら') || message.content.includes('サヨナラ')){ //Sayonaraion
        message.channel.send(acar['lion']); 
        message.react('🦁');
    }
    else if(message.content.includes('おやすみ') || message.content.includes('オヤスミ')){ //Oyasuminasai
        message.channel.send(acar['rhino']);
        message.react('🦏');
    }
    else if(message.content.includes('おはよ') || message.content.includes('オハヨ') || message.content.includes('お早う')){ //Ohayounagi
        message.channel.send(acar['eel']);
        message.react('🍣');
    }
    else if(message.content.includes('いただきま') || message.content.includes('頂きま') || message.content.includes('イタダキマ')){ //Itadakim
        message.channel.send(acar['mouse_mother']);
        message.react('🐀');
    }
    else if(message.content.includes('いってきます') || message.content.includes('行ってきます') || message.content.includes('イッテキマス')){ //Ittekimaskank
        message.channel.send(acar['skunk']);
        message.react('🦨');
    }
    else if(message.content.includes('ただいま') || message.content.includes('只今') || message.content.includes('タダイマ')){ //Tadaimanbo
        message.channel.send(acar['mambo']);
        message.react('🐟');
    }
    else if(message.content.includes('ごちそうさま') || message.content.includes('ご馳走さま') || message.content.includes('ゴチソウサマ')){ //Gochisousamouse
        message.channel.send(acar['mouse_son']);
        message.react('🐀');
    }
    

});

client.login('NzU1ODYyNTUxMzkyNDIwMDEy.X2Jd2w.wJ9XuQtnt8xlqTDp3wT7s2pbTTM');
