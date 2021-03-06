const {
    Client
} = require('discord-rpc')
const snekfetch = require('snekfetch');
const Store = require('electron-store');
const store = new Store();
const logger = require('./logger');
try {
    const rpc = new Client({
        transport: "ipc"
    }),
        appClient = "463793562639794176";


    async function updatetanki() {
        const res = await snekfetch.get('https://ratings.tankionline.com/api/eu/profile/?user=' + (store.get('name')));
        try {
            if ((res.body.response.hasPremium) == false) {

                if ((res.body.response.rank) == 1) {
                    rank = 'Recruit'
                    rankimg = 'recruit'
                } else if ((res.body.response.rank) == 2) {
                    rank = 'Private'
                    rankimg = 'private'
                } else if ((res.body.response.rank) == 3) {
                    rank = "Gefreiter"
                    rankimg = "gefreiter"
                } else if ((res.body.response.rank) == 4) {
                    rank = "Corporal"
                    rankimg = "corporal"
                } else if ((res.body.response.rank) == 5) {
                    rank = "Master Corporal"
                    rankimg = "master_corporal"
                } else if ((res.body.response.rank) == 6) {
                    rank = "Sergeant"
                    rankimg = "sergeant"
                } else if ((res.body.response.rank) == 7) {
                    rank = "Staff Sergeant"
                    rankimg = "staff_sergeant"
                } else if ((res.body.response.rank) == 8) {
                    rank = "Master Sergeant"
                    rankimg = "master_sergeant"
                } else if ((res.body.response.rank) == 9) {
                    rank = "First Sergeant"
                    rankimg = "first_sergeant"
                } else if ((res.body.response.rank) == 10) {
                    rank = "Sergeant Major"
                    rankimg = "sergeant_major"
                } else if ((res.body.response.rank) == 11) {
                    rank = "Warrant Officer 1"
                    rankimg = "warrant_officer_1"
                } else if ((res.body.response.rank) == 12) {
                    rank = "Warrant Officer 2"
                    rankimg = "warrant_officer_2"
                } else if ((res.body.response.rank) == 13) {
                    rank = "Warrant Officer 3"
                    rankimg = "warrant_officer_3"
                } else if ((res.body.response.rank) == 14) {
                    rank = "Warrant Officer 4"
                    rankimg = "warrant_officer_4"
                } else if ((res.body.response.rank) == 15) {
                    rank = "Warrant Officer 5"
                    rankimg = "warrant_officer_5"
                } else if ((res.body.response.rank) == 16) {
                    rank = "Third Lieutenant"
                    rankimg = "third_lieutenant"
                } else if ((res.body.response.rank) == 17) {
                    rank = "Second Lieutenant"
                    rankimg = "second_lieutenant"
                } else if ((res.body.response.rank) == 18) {
                    rank = "First Lieutenant"
                    rankimg = "first_lieutenant"
                } else if ((res.body.response.rank) == 19) {
                    rank = "Captain"
                    rankimg = "captain"
                } else if ((res.body.response.rank) == 20) {
                    rank = "Major"
                    rankimg = "major"
                } else if ((res.body.response.rank) == 21) {
                    rank = "Lieutenant Colonel"
                    rankimg = "lieutenant_colonel"
                } else if ((res.body.response.rank) == 22) {
                    rank = "Colonel"
                    rankimg = "colonel"
                } else if ((res.body.response.rank) == 23) {
                    rank = "Brigadier"
                    rankimg = "brigadier"
                } else if ((res.body.response.rank) == 24) {
                    rank = "Major General"
                    rankimg = "major_general"
                } else if ((res.body.response.rank) == 25) {
                    rank = "Lieutenant General"
                    rankimg = "lieutenant_general"
                } else if ((res.body.response.rank) == 26) {
                    rank = "General"
                    rankimg = "general"
                } else if ((res.body.response.rank) == 27) {
                    rank = "Marshal"
                    rankimg = "marshal"
                } else if ((res.body.response.rank) == 28) {
                    rank = "Field Marshal"
                    rankimg = "field_marshal"
                } else if ((res.body.response.rank) == 29) {
                    rank = "Commander"
                    rankimg = "commander"
                } else if ((res.body.response.rank) == 30) {
                    rank = "Generalissimo"
                    rankimg = "generalissimo"
                } else if ((res.body.response.rank) > 31) {
                    rankimg = "legend"
                    numrank = (res.body.response.rank) - 30
                    rank = "Legend " + (numrank)
                } else if ((res.body.response.rank) == 31) {
                    rank = "Legend 1"
                    rankimg = "legend"
                }
            } else if ((res.body.response.hasPremium) == true) {
                if ((res.body.response.rank) == 1) {
                    rank = 'Recruit'
                    rankimg = 'pre_recruit'
                } else if ((res.body.response.rank) == 2) {
                    rank = 'Private'
                    rankimg = 'pre_private'
                } else if ((res.body.response.rank) == 3) {
                    rank = "Gefreiter"
                    rankimg = "pre_gefreiter"
                } else if ((res.body.response.rank) == 4) {
                    rank = "Corporal"
                    rankimg = "pre_corporal"
                } else if ((res.body.response.rank) == 5) {
                    rank = "Master Corporal"
                    rankimg = "pre_master_corporal"
                } else if ((res.body.response.rank) == 6) {
                    rank = "Sergeant"
                    rankimg = "pre_sergeant"
                } else if ((res.body.response.rank) == 7) {
                    rank = "Staff Sergeant"
                    rankimg = "pre_staff_sergeant"
                } else if ((res.body.response.rank) == 8) {
                    rank = "Master Sergeant"
                    rankimg = "pre_master_sergeant"
                } else if ((res.body.response.rank) == 9) {
                    rank = "First Sergeant"
                    rankimg = "pre_first_sergeant"
                } else if ((res.body.response.rank) == 10) {
                    rank = "Sergeant Major"
                    rankimg = "pre_sergeant_major"
                } else if ((res.body.response.rank) == 11) {
                    rank = "Warrant Officer 1"
                    rankimg = "pre_warrant_officer_1"
                } else if ((res.body.response.rank) == 12) {
                    rank = "Warrant Officer 2"
                    rankimg = "pre_warrant_officer_2"
                } else if ((res.body.response.rank) == 13) {
                    rank = "Warrant Officer 3"
                    rankimg = "pre_warrant_officer_3"
                } else if ((res.body.response.rank) == 14) {
                    rank = "Warrant Officer 4"
                    rankimg = "pre_warrant_officer_4"
                } else if ((res.body.response.rank) == 15) {
                    rank = "Warrant Officer 5"
                    rankimg = "pre_warrant_officer_5"
                } else if ((res.body.response.rank) == 16) {
                    rank = "Third Lieutenant"
                    rankimg = "pre_third_lieutenant"
                } else if ((res.body.response.rank) == 17) {
                    rank = "Second Lieutenant"
                    rankimg = "pre_second_lieutenant"
                } else if ((res.body.response.rank) == 18) {
                    rank = "First Lieutenant"
                    rankimg = "pre_first_lieutenant"
                } else if ((res.body.response.rank) == 19) {
                    rank = "Captain"
                    rankimg = "pre_captain"
                } else if ((res.body.response.rank) == 20) {
                    rank = "Major"
                    rankimg = "pre_major"
                } else if ((res.body.response.rank) == 21) {
                    rank = "Lieutenant Colonel"
                    rankimg = "pre_lieutenant_colonel"
                } else if ((res.body.response.rank) == 22) {
                    rank = "Colonel"
                    rankimg = "pre_colonel"
                } else if ((res.body.response.rank) == 23) {
                    rank = "Brigadier"
                    rankimg = "pre_brigadier"
                } else if ((res.body.response.rank) == 24) {
                    rank = "Major General"
                    rankimg = "pre_major_general"
                } else if ((res.body.response.rank) == 25) {
                    rank = "Lieutenant General"
                    rankimg = "pre_lieutenant_general"
                } else if ((res.body.response.rank) == 26) {
                    rank = "General"
                    rankimg = "pre_general"
                } else if ((res.body.response.rank) == 27) {
                    rank = "Marshal"
                    rankimg = "pre_marshal"
                } else if ((res.body.response.rank) == 28) {
                    rank = "Field Marshal"
                    rankimg = "pre_field_marshal"
                } else if ((res.body.response.rank) == 29) {
                    rank = "Commander"
                    rankimg = "pre_commander"
                } else if ((res.body.response.rank) == 30) {
                    rank = "Generalissimo"
                    rankimg = "pre_generalissimo"
                } else if ((res.body.response.rank) > 31) {
                    rankimg = "pre_legend"
                    numrank = (res.body.response.rank) - 30
                    rank = "Legend " + (numrank)
                } else if ((res.body.response.rank) == 31) {
                    rank = "Legend 1"
                    rankimg = "pre_legend"
                }
            }

            kdratio = (res.body.response.kills) / (res.body.response.deaths)
            kdratioround = kdratio.toFixed(2)
            crys = (res.body.response.earnedCrystals).toLocaleString('en')
            golds = (res.body.response.caughtGolds).toLocaleString('en')
            kd = (kdratioround)
            expleft = (res.body.response.scoreNext) - (res.body.response.score)
            exp = (res.body.response.score).toLocaleString('en') + "/" + (res.body.response.scoreNext).toLocaleString('en')
            expleftcommas = (expleft).toLocaleString('en')
            tanname = (res.body.response.name)
            gss = (res.body.response.gearScore).toLocaleString('en')

            if ((store.get('size')) == "small") {
                bigg = (store.get('logo'))
                smalll = (rankimg)
                smallltexx = (rank)
                biggtexx = "Tanki Online"
                logger.log(`Updated Tanki Info & config`);
            } else if ((store.get('size')) == "big") {
                bigg = (rankimg)
                smalll = (store.get('logo'))
                smallltexx = "Tanki Online"
                biggtexx = (rank)
                logger.log(`Updated Tanki Info & config`);
            }

        } catch (e) {
            logger.log(e)
        }
    }

    updatetanki();

    const startTimestamp = new Date();

    async function updatediscord() {
        const myArray = [
            `KD : ${kd}`,
            `Crystals : ${crys}`,
            `Golds : ${golds}`,
            `Exp Left : ${expleftcommas}`,
            `Exp : ${exp}`,
            `Rank : ${rank}`,
            `GS : ${gss}`
        ];

        const randomItem = myArray[Math.floor(Math.random() * myArray.length)];
        rpc.setActivity({
            details: `Nickname : ` + (tanname), //as mentioned by Blload
            state: (randomItem),
            startTimestamp,
            largeImageKey: (bigg),
            smallImageKey: (smalll),
            largeImageText: (biggtexx),
            smallImageText: (smallltexx),
            instance: false,
        });
    }

    rpc.on('ready', () => {
        logger.log(`Connected to Discord! (${appClient})`);
        global.intloop = setInterval(updatetanki, 300000);
        global.intloop = setInterval(updatediscord, 15000);
    });

    rpc.login(appClient);
} catch (ee) {
    console.log(ee)
}
