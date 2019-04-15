module.exports = function(controller) {
  controller.hears("Start", "message_received", function(bot, message) {
    bot.startConversation(message, (err, convo) => {
      convo.ask(
        {
          text: `Who tells the statement - "Power is Power" ?`,
          quick_replies: [
            {
              title: "Tyrion Lannister",
              payload: "Tyrion"
            },
            {
              title: "Jamie Lannister",
              payload: "Jamie"
            },
            {
              title: "Cersei Lannister",
              payload: "Cersei"
            }
          ]
        },
        [
          {
            pattern: "Tyrion",
            callback(res, convo) {
              convo.gotoThread("incorrect");
              convo.next();
            }
          },
          {
            pattern: "Jamie",
            callback(res, convo) {
              convo.gotoThread("incorrect");
              convo.next();
            }
          },
          {
            pattern: "Cersei",
            callback(res, convo) {
              convo.gotoThread("correct");
              convo.next();
            }
          }
        ]
      );
      convo.addMessage(
        {
          text: `Oops! That wasn't the right answer. `,
          quick_replies: [
            {
              title: "Next Question",
              payload: "Question Two"
            }
          ]
        },
        "incorrect"
      );
      convo.addMessage(
        {
          text:
            "Wohoo! You are right. Well played. You can now enter Kings Landing.",
          quick_replies: [
            {
              title: "Next Question",
              payload: "Question Two"
            }
          ]
        },
        "correct"
      );
    });
  });

  // Question Two
  controller.hears("Question Two", "message_received", function(bot, message) {
    bot.startConversation(message, (err, convo) => {
      convo.ask(
        {
          text: `Which of the following characters has a dragon ?`,
          quick_replies: [
            {
              title: "Tyrion Lannister",
              payload: "Tyrion"
            },
            {
              title: "Danaerys Targareyen",
              payload: "Danny"
            },
            {
              title: "Jon Snow",
              payload: "Jon"
            }
          ]
        },
        [
          {
            pattern: "Tyrion",
            callback(res, convo) {
              convo.gotoThread("incorrect");
              convo.next();
            }
          },
          {
            pattern: "Danny",
            callback(res, convo) {
              convo.gotoThread("correct");
              convo.next();
            }
          },
          {
            pattern: "Jon",
            callback(res, convo) {
              convo.gotoThread("incorrect");
              convo.next();
            }
          }
        ]
      );
      convo.addMessage(
        {
          text: `Oops! That wasn't the right answer. `,
          quick_replies: [
            {
              title: "Fly to the next question",
              payload: "Question Three"
            }
          ]
        },
        "incorrect"
      );
      convo.addMessage(
        {
          text:
            "Wohoo! You are right. Well played. You can now enter Dragonstone.",
          quick_replies: [
            {
              title: "Fly to the next question",
              payload: "Question Three"
            }
          ]
        },
        "correct"
      );
    });
  });

  // Question Three
  controller.hears("Question Three", "message_received", function(
    bot,
    message
  ) {
    bot.startConversation(message, (err, convo) => {
      convo.ask(
        {
          text: `Which of the following is not a stark's direwolf ?`,
          quick_replies: [
            {
              title: "Nymeria",
              payload: "Nymeria"
            },
            {
              title: "Ghost",
              payload: "Ghost"
            },
            {
              title: "Winter",
              payload: "Winter"
            }
          ]
        },
        [
          {
            pattern: "Nymeria",
            callback(res, convo) {
              convo.gotoThread("incorrect");
              convo.next();
            }
          },
          {
            pattern: "Winter",
            callback(res, convo) {
              convo.gotoThread("correct");
              convo.next();
            }
          },
          {
            pattern: "Ghost",
            callback(res, convo) {
              convo.gotoThread("incorrect");
              convo.next();
            }
          }
        ]
      );
      convo.addMessage(
        {
          text: `Oops! That wasn't the right answer. `,
          quick_replies: [
            {
              title: "Hodor",
              payload: "GoodBye"
            }
          ]
        },
        "incorrect"
      );
      convo.addMessage(
        {
          text:
            "Wohoo! You are right. Well played. You can now enter Winterfell.",
          quick_replies: [
            {
              title: "Hodor",
              payload: "GoodBye"
            }
          ]
        },
        "correct"
      );
    });
  });

  // Question Three
  controller.hears("GoodBye", "message_received", function(bot, message) {
    bot.startConversation(message, (err, convo) => {
      convo.say("You've held the door well. Thanks for playing");
    });
  });
};
