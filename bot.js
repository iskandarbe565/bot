const {Bot, InputFile}=require("grammy")

const bot=new Bot('5804425865:AAEE_c6hY4Ld20kEe7AcQnLDWndfLc01fgQ')

const PORT=process.env.PORT;

bot.command("start",async(ctx)=>{
await ctx.reply("Bot sizning xizmatingizda 24/7")
console.log(`Server ${PORT} portida ishga tushdi !`);
})

bot.on("my_chat_member",async(ctx)=>{

})

bot.command("help",async(ctx)=>{
    await ctx.reply("Qanday yordam bera olamiz !")
    console.log(`Server ${PORT} portida ishga tushdi !`);
})

bot.hears("Salom",async(ctx)=>{
    await ctx.reply(`Assalomu Alaykum ${ctx.from.first_name}`)
})

// bot.hears("rasm1",async(ctx)=>{
//    await ctx.replyWithPhoto(new InputFile(process.cwd()+"/uploads/"))
// })

    bot.hears("rasm",async(ctx)=>{
        await ctx.replyWithPhoto("https://images.unsplash.com/photo-1628148061873-13b9340f763b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",  {
            caption:"<b> Kim bu ozi tanimadim !</b>",
           parse_mode:"HTML"
           })
  
    })

bot.command("newbot",async(ctx)=>{
await ctx.reply(`Bot yaratish uchun murojat: t.me/BotFather `)
console.log(`Server ${PORT} portida ishga tushdi !`);
})

bot.command("stop",async(ctx)=>{
await ctx.reply("Bot hozir test rejimida ishlavoti !")
console.log(`Server ${PORT} portida ishga tushdi !`);
})

bot.on("message",async(ctx)=>{
   
    function lotinToKiril(text) {
        let converter = {
          'a': 'а',
          'b': 'б',
          'd': 'д',
          'e': 'е',
          'f': 'ф',
          'g': 'г',
          'h': 'ҳ',
          'i': 'и',
          'j': 'ж',
          'k': 'к',
          'l': 'л',
          'm': 'м',
          'n': 'н',
          'o': 'о',
          'p': 'п',
          'q': 'қ',
          'r': 'р',
          's': 'с',
          't': 'т',
          'u': 'у',
          'v': 'в',
          'x': 'х',
          'y': 'й',
          'z': 'з',
          'A': 'А',
          'B': 'Б',
          'D': 'Д',
          'E': 'Е',
          'F': 'Ф',
          'G': 'Г',
          'H': 'Ҳ',
          'I': 'И',
          'J': 'Ж',
          'K': 'К',
          'L': 'Л',
          'M': 'М',
          'N': 'Н',
          'O': 'О',
          'P': 'П',
          'Q': 'Қ',
          'R': 'Р',
          'S': 'С',
          'T': 'Т',
          'U': 'У',
          'V': 'В',
          'X': 'Х',
          'Y': 'Й',
          'Z': 'З',
          'ch': 'ч',
          'sh': 'ш',
          'ng': 'нг',
          'o\'': 'ў',
          'g\'': 'ғ',
          'sh': 'ш',
          'sh': 'щ',
          'yu': 'ю',
          'ya': 'я',
          'Ch': 'Ч',
          'Sh': 'Ш',
          'Ng': 'Нг',
          'O\'': 'Ў',
          'G\'': 'Ғ',
          'Sh': 'Ш',
          'Sh': 'Щ',
          'Yu': 'Ю',
          'Ya': 'Я'
        };
      
        let  kirilText = '';
        for (let  i = 0; i < text.length; i++) {
          let currentChar = text[i];
          let nextChar = text[i + 1];
          if (nextChar && converter[currentChar + nextChar]) {
            kirilText += converter[currentChar + nextChar];
            i++; 
          } else {
            kirilText += converter[currentChar] || currentChar;
          }
        }
      
        return ctx.reply(`Lotin/Kirill :${kirilText}`)
      }
    
    
      function kirilToLotin(text) {
        let converter = {
          'а': 'a',
          'б': 'b',
          'д': 'd',
          'е': 'e',
          'ф': 'f',
          'г': 'g',
          'ҳ': 'h',
          'и': 'i',
          'ы': 'i',
          'ж': 'j',
          'к': 'k',
          'л': 'l',
          'м': 'm',
          'н': 'n',
          'о': 'o',
          'п': 'p',
          'қ': 'q',
          'р': 'r',
          'с': 's',
          'т': 't',
          'у': 'u',
          'в': 'v',
          'х': 'x',
          'й': 'y',
          'з': 'z',
          'А': 'A',
          'Б': 'B',
          'Д': 'D',
          'Е': 'E',
          'Ф': 'F',
          'Г': 'G',
          'Ҳ': 'H',
          'И': 'I',
          'Ы': 'I',
          'Ж': 'J',
          'К': 'K',
          'Л': 'L',
          'М': 'M',
          'Н': 'N',
          'О': 'O',
          'П': 'P',
          'Қ': 'Q',
          'Р': 'R',
          'С': 'S',
          'Т': 'T',
          'У': 'U',
          'В': 'V',
          'Х': 'X',
          'Й': 'Y',
          'З': 'Z',
          'ч': 'ch',
          'ш': 'sh',
          'щ': 'sh',
          'нг': 'ng',
          'ў': 'o\'',
          'ғ': 'g\'',
          'ю': 'yu',
          'я': 'ya',
          'Ч': 'Ch',
          'Ш': 'Sh',
          'Щ': 'Sh',
          'Нг': 'Ng',
          'Ў': 'O\'',
          'Ғ': 'G\'',
          'Ю': 'Yu',
          'Я': 'Ya'
        };
      
        let lotinText = '';
        for (let i = 0; i < text.length; i++) {
          let currentChar = text[i];
          let nextChar = text[i + 1];
          if (nextChar && converter[currentChar + nextChar]) {
            lotinText += converter[currentChar + nextChar];
            i++; 
          } else {
            lotinText += converter[currentChar] || currentChar;
          }
        }
      
        return ctx.reply(`Kirill/Lotin :${lotinText}`)
      }
    
      let lotinText = ctx.message.text;
      let kirilText = ctx.message.text;
      
     lotinToKiril(lotinText)
     kirilToLotin(kirilText)
    
})



bot.start();