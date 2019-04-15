var responseConstants = require("../Constants/ResponseConstants");

module.exports = function(controller) {
  controller.hears("GOT", "message_received", function(bot, message) {
    bot.reply(message, {
      text: responseConstants.userChoosesOptionGOT(),
      quick_replies: [
        {
          title: "Start Playing",
          payload: "Start"
        }
      ]
    });
  });
};
