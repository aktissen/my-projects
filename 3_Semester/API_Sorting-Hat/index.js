// discord
const discord = require("discord.js");
const config = require("./config.json");

const discordClient = new discord.Client();
discordClient.login(config.BOT_TOKEN);

//giphy
const giphy = require("giphy-api")("fC2LwPzKxfJVE8sgpabgbPDPU7pNChjR");

const houses = ["Hufflepuff", "Slytherin", "Ravenclaw", "Gryffindor"];
const keywordsAnswer = ["Haus", "haus", "house", "House", "Hogwarts"];

// fetch 
const fetch = require("node-fetch");

let yourCharacter = "";

let chosenHouse = "";

function getYourHouse(house, message) {
    return new Promise((resolve, reject) => {
        for (let i = 0; i <= keywordsAnswer.length - 1; i++) {
            if(message.toString().includes(keywordsAnswer[i])){
                const getHouse = house[Math.floor(Math.random()*house.length)];
                chosenHouse = getHouse;
                resolve(getHouse);
            }

            if(!message.toString().includes(keywordsAnswer[i]) && i === keywordsAnswer.length - 1){
                reject("Ich antworte nur auf die Frage nach deinem Hogwarts Haus!");
                return;
            }
        }
    })
}

function getGIF(house) {
    return new Promise((resolve) => {
        let gifUrl = "";
        giphy.search(house.toString(), (err, res) => {
            gifUrl = res.data[Math.floor(Math.random() * 10)].url;
            resolve(gifUrl);
            });
    })
}

async function getName(house, msg) {
    const response = await fetch("http://hp-api.herokuapp.com/api/characters/house/" + house.toString())

    return await response.json();
}

discordClient.on("message", (msg) => {

    if(msg.author.bot) return;

    const message = msg.content;

    async function botReplyGIFAndMore(msg) {
        await getGIF(chosenHouse).then((res) => {
            msg.reply("Ganz klar! Du gehörst zum Haus " + chosenHouse);
            return msg.reply(res);
        }).catch((err) => {
            return console.log("kein Gif gefunden");
        });
        let response = await getName(chosenHouse, msg)
        yourCharacter = response[Math.floor(Math.random() * response.length)].name;
        return msg.reply("Wusstest du, dass " + yourCharacter + " auch in deinem Haus ist?");
    }

    async function botReply(houses, message, msg) {
        await getYourHouse(houses, message).then( (res) => {
            chosenHouse = res;
            botReplyGIFAndMore(msg);
        }).catch((err) => {
            return msg.reply(err);
        });
    }

    botReply(houses, message, msg);
});