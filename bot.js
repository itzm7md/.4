 const Discord = require('discord.js');
const epic = new Discord.Client();

epic.on('ready',async () => {
  epic.channels.find(ch => ch.id === "487045322929995777" && ch.type === 'voice').join();
});

// طبعا عشان الكود يشتغل بكفاءة لازم يكون البوت مفتوح 24 ساعة
// البوت بيخرج برا الروم اذا الخادم قفل
// جميع الحقوق محفوظة لسيرفر كودز

epic.login("NDg3OTg3ODk1NDEyNDU3NDgz.DnVxZg.GtU_pg1Uz1xD2HXkCAuj4VPfRMA")
