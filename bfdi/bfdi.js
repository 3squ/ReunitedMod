(() => {
    "use strict";
    var e = {
        d: (t, i) => {
            for (var n in i) e.o(i, n) && !e.o(t, n) && Object.defineProperty(t, n, {
                enumerable: !0,
                get: i[n]
            })
        },
        o: (e, t) => Object.prototype.hasOwnProperty.call(e, t)
    };
    e.d({}, {
        Do: () => Ye,
        oG: () => Ke,
        YO: () => _e,
        id: () => He,
        CV: () => Qe,
        IW: () => We,
        WK: () => je
    });
    let t = {
            coins: 20,
            fridge: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
        },
        i = {
            happiness: 20,
            hunger: 50,
            sleep: 80,
            sleeping: !1,
            progress: 30.9,
            progressNeeded: 200
        },
        n = {
            level: 1,
            skipIntro: !1,
            costume: "none",
            lastLogin: Date.now(),
            inGame: !1,
            sfx: !0,
            music: !0,
            minigameMusic: !0,
            minigameCostumes: !0,
            drinksFed: 0,
            lemonsFed: 0,
            totalSlaps: 0,
            lastFridgePage: 0,
            HQSprites: !1,
            language: "en-US",
            temporaryInGameTime: 0,
            musicVolume: 1,
            sfxVolume: 1,
            HDrecommendation: !1,
            introMode: !1,
            gameStartDate: 0,
            saveFileWarning: !1,
            levelUpCostumes: !0,
            privateBeta: !1,
            safeArea: !1,
            controllerProfile: {
                GTTTATINT: {
                    buttons: {
                        a: {
                            x: -150,
                            y: -50,
                            lock: 1
                        },
                        d: {
                            x: -50,
                            y: -50,
                            lock: 1
                        },
                        " ": {
                            x: 100,
                            y: -50,
                            lock: 0
                        }
                    },
                    buttonScale: .5
                }
            },
            extendAnimationFrames: !1,
            lollipopMode: -1,
            defaultAspectRatio: {
                width: 9,
                height: 16
            },
            events: {
                christmas: !1
            }
        };

    function o(e = "", t = 16, i = "left", n = "top", o) {
        let a = "MenuShag";
        1 == o && (a = "ShagBlack"), 2 == o && (a = "ShagBlueNumber"), 3 == o && (a = "ShagGoldenNumber"), 4 == o && (a = "ShagReunitedNumber");
        let r = new PIXI.BitmapText(e, {
            fontSize: t,
            fontName: a,
            align: i
        });
        return "center" == i && r.anchor.set(.5, .5), "middle" == n && r.anchor.set(0, .5), r
    }
    Date.now() < 173611074e4 && (n.events.christmas = !0), n.privateBeta && (n.level = 0, i.progressNeeded = 2 ** 32, i.progress = 0, n.skipIntro = !0, t.coins = 1e6, i.hunger = 100, i.sleep = 100, i.happiness = 100, n.saveFileWarning = !0);
    let a = {
            settings: {
                HQSprites: "HD Sprites",
                music: "Music",
                minigameMusic: "Minigame Music",
                minigameCostumes: "Minigame Costumes",
                sfx: "SFX",
                enableReload: "Enabling this requires a reload of the game!",
                disableReload: "Disabling this requires a reload of the game!"
            },
            intro: {
                mail: "You've got mail! Click/Tap on it.",
                hey: "HEY!",
                who: "Who was that?"
            },
            dialogue: {
                greet: "Hi, I am teardrop! Thank you for looking after my package. Sorry if I startled you!",
                greet2: "What a great start! I'm Teardrop. Nice to meet you!",
                yoyleberryinvitation: "Let's snack on some regular cake!",
                fridgeHelp: "Put the food in the plate by going to the fridge!",
                wheelHelp: "Press and hold the happiness button to launch the wheel of fun."
            },
            food: {
                regularcake: "Regular Cake",
                icecreamcake: "Ice Cream Cake",
                icycake: "Icy Cake",
                limecake: "Lime Cake",
                blueberry: "Blueberry",
                strawberry: "Strawberry",
                strawberrycake: "Strawberry Cake",
                candy: "Candy Bar",
                sleeppotion: "Awakening Potion",
                maxpotion: "Max Potion",
                sourlemon: "Lemon",
                fries: "Fries",
                donut: "Donut",
                burntTaco: "Burnt Taco"
            },
            ui: {
                shop: "SHOP",
                fridge: "FRIDGE",
                owned: "OWNED",
                preview: "PREVIEW",
                get: "GET",
                wear: "WEAR",
                wearing: "WEARING",
                continue: "Continue",
                mph: "MPH",
                score: "Score",
                skipIntro: "I've played these games before! (Skip Intro)",
                gameOver: "Game Over!",
                gamePaused: "Game Paused",
                comingsoon: "more coming soon..",
                info: "INFO",
                artist: "Artist",
                achievements: "Achievements",
                games: "Games",
                wardrobe: "Wardrobe",
                settings: "Settings",
                reload: "Reload",
                cancel: "Cancel",
                home: "Home",
                play: "Play",
                newLevel: "New level",
                continueUpperCase: "CONTINUE",
                notEnoughCoins: "Not enough coins!",
                notEnoughSpace: "Not enough space!",
                altitude: "Altitude",
                accuracy: "Accuracy",
                leave: "Leave",
                next: "Next",
                average: "Average",
                ignore: "Ignore",
                translator: "Translator",
                language: "Language"
            },
            message: {
                obtainCostume: "To obtain this costume, complete the {achievement} achievement.",
                hungry: "Teardrop is really hungry! Let's feed her.",
                sleepy: "Teardrop is feeling a little sleepy. Let her get some rest!",
                sleeping: "Teardrop is taking a nap.",
                updateWarning: "New update is out!\nCurrent version: {currentVersion}\nLatest version: {latest}\nThe game will be automatically updated after reloading."
            },
            crashHandler: {
                whoops: "Whoops!\nmyTeardrop has run into a problem...",
                description: "The game might work fine if you continue,\nbut I recommend you to reload anyway.\n\nIf the problem persists, please report the error\nby copying the error text and sending it\n over to the discord server.",
                copyErrorText: "Copy Error Text"
            },
            games: {
                gtttatint: "GTTTATINT101",
                dropdodge: "Drop Dodge",
                tennis: "Drop Tennis",
                match: "Face Match",
                cakewalk: "CAKEWALK"
            },
            costumes: {
                none: "NONE",
                uglysweater: "Ugly Sweater",
                uglysweater2: "tennis sweater",
                _td_costume1: "Water Moth",
                _td_costume2: "Marauder Droplet",
                _td_costume3: "La larme",
                _td_costume4: "Wine Drop",
                _td_costume5: "Blood Drop",
                honeydrop: "Honey Drop",
                orangedrop: "Orange Drop",
                drippydrop: "Drippy Drop",
                glassdrop: "Glass Drop",
                classic: "The Silent Type",
                golden: "Golden Drop",
                light: "Light Teardrop",
                magician: "Magician Drop",
                oyuidrop: "Oyui Drop",
                lemon: "Lemonade",
                sportsdrop: "Sportsdrop",
                limedrop: "Lime Drop",
                jockdrop: "Jock Drop",
                energydrink: "Energy Drink",
                testdrop: "Stopwatch Drop",
                toonsterdrop: "Yellow Magician Drop",
                paintdrop: "Paint Drop",
                dreamdrop: "Dream Drop",
                bubbledrop: "BubbleDrop!",
                baloondrop: "BaloonDrop",
                goodrop: "GooDrop"
            },
            get2763intennis: {
                title: "Drop Tennis",
                name: "2763 Drop Tennis",
                description: "Get 2763 score in Drop Tennis minigame"
            },
            winagameoftennis: {
                title: "Drop Tennis",
                name: "Drop Tennis Victory",
                description: "Win a game of Drop Tennis"
            },
            get2763gtttatint: {
                title: "GTTTATINT",
                name: "2763 GTTTATINT",
                description: "Get 2763 score in GTTTATINT"
            },
            slapTD2763: {
                title: "Ultimate Slapper",
                name: "Ultimate Slapper",
                description: "Slap Teardrop 2763 times"
            },
            get2763: {
                title: "2763...",
				name: "2763...",
                description: "Complete every achievement about the number 2763"
            },
            lemons: {
                title: "Lemon Factory",
                name: "Lemon Factory",
                description: "Feed Teardrop 100 lemons"
            },
            get10perfectsCAKEWALK: {
                title: "Easy as Cake!",
				name: "Easy as Cake!",
                description: "Get 10 perfects in a row on CAKEWALK"
            },
            "2763lemons": {
                title: "Soured out!",
                name: "Soured out!",
                description: "Feed Teardrop 2763 lemons"
            },
            perfectfacematch: {
                title: "No difference",
                name: "No difference",
                description: "Get a 100% in Face Match"
            },
            "10energydrinks": {
                title: "No sleep",
                name: "No sleep",
                description: "Feed Teardrop 10 Awakening Potions"
            },
            "5minuteGTTTATINT": {
                title: "Leg Day",
                name: "Leg Day",
                description: "Spend 2 minutes at 2mph or higher in GTTTATINT in a single game"
            },
			tauntLogo: {
                title: "Obscure mischief",
				name: "Obscure mischief",
                description: "Taunt the logo seen in the settings menu"
            },
            oddDroplets40: {
                title: "The Detective",
				name: "The Detective",
                description: "Find the Odd Droplet 40 times in a row"
            },
            "750altitudeCAKEWALK": {
                title: "Mile High Pie!",
                name: "Mile High Pie!",
                description: "Get to 500 altitude in CAKEWALK"
            },
            get15000gtttatint: {
                title: "Reach the Galaxy",
                name: "Reach the Galaxy",
                description: "Get 15000 score in GTTTATINT"
            },
            "1000altitudeCAKEWALK": {
                title: "Too High!!!",
                name: "Too High!!!",
                description: "Get to 1000 altitude in CAKEWALK"
            },
            blockplatformgtttatint: {
                title: "GTTTATINT",
				name: "Blocky's Family",
                description: "Find Blocky's family in GTTTATINT"
            },
            score: {
                perfect: "PERFECT",
                good: "Good!",
                nice: "Nice!",
                meh: "Meh",
                bad: "BAD"
            }
        },
        r = (window.innerWidth, window.innerWidth / window.innerHeight * 640 >= 360),
        s = window.innerHeight / 640,
        l = window.innerWidth / window.innerHeight * 640,
        d = 640;
    0 == r && (l = 360, d = window.innerHeight / window.innerWidth * 360, s = window.innerWidth / 360), l = Math.min(1500, l), d = Math.min(1e3, d);
    const c = new PIXI.Application({
        background: "#00000000",
        width: l,
        height: d,
        resolution: s * window.devicePixelRatio
    });
    window.onresize = function() {
        r = window.innerWidth / window.innerHeight * 640 >= 360, s = window.innerHeight / 640, l = window.innerWidth / window.innerHeight * 640, d = 640, 0 == r && (l = 360, d = window.innerHeight / window.innerWidth * 360, s = window.innerWidth / 360), c.renderer.resolution = s, l = Math.min(1500, l), d = Math.min(1e3, d), c.renderer.resize(l, d), Ye && (Fe.width = c.screen.width, Fe.height = c.screen.height, Re.width = c.screen.width, Re.height = c.screen.height)
    };
    let h = {
            tearDropWatch: {
                Idle: {
                    start: 0,
                    end: 239,
                    loop: !0
                },
                percent90: {
                    start: 240,
                    end: 319,
                    loop: !1
                },
                percent75: {
                    start: 320,
                    end: 399,
                    loop: !1
                },
                percent50: {
                    start: 400,
                    end: 479,
                    loop: !1
                },
                percent10: {
                    start: 480,
                    end: 559,
                    loop: !1
                },
                Laugh: {
                    start: 560,
                    end: 803,
                    loop: !1
                },
                percent100: {
                    start: 805,
                    end: 887,
                    loop: !1
                }
            },
            Box: {
                Jump: {
                    start: 0,
                    end: 239,
                    loop: !0
                },
                Click1: {
                    start: 240,
                    end: 299,
                    loop: !1
                },
                Click2: {
                    start: 300,
                    end: 351,
                    loop: !1
                },
                Steal: {
                    start: 359,
                    end: 376,
                    loop: !1
                }
            },
            Teardrop: {
                Eat: {
                    start: 1001,
                    end: 1123,
                    loop: !1
                },
                Wave: {
                    start: 0,
                    end: 328,
                    loop: !1
                },
                Slap: {
                    start: 329,
                    end: 453,
                    loop: !1
                },
                BookOpen: {
                    start: 509,
                    end: 730,
                    loop: !1
                },
                Write: {
                    start: 731,
                    end: 857,
                    loop: !0
                },
                SendMessage: {
                    start: 858,
                    end: 1e3,
                    loop: !1
                },
                Nope: {
                    start: 1125,
                    end: 1198,
                    loop: !1
                },
                Look: {
                    start: 1199,
                    end: 1336,
                    loop: !1
                },
                Look2: {
                    start: 1337,
                    end: 1468,
                    loop: !1
                },
                Pat: {
                    start: 1468,
                    end: 1511,
                    loop: !1
                },
                PatStop: {
                    start: 1512,
                    end: 1545,
                    loop: !1
                },
                Idle: {
                    start: 315,
                    end: 328,
                    loop: !0
                },
                Realize: {
                    start: 1546,
                    end: 1685,
                    loop: !1
                },
                EatSour: {
                    start: 1686,
                    end: 1869,
                    loop: !1
                },
                Look3: {
                    start: 2400,
                    end: 2521,
                    loop: !1
                },
                Wave2: {
                    start: 2522,
                    end: 2711,
                    loop: !1
                },
                EatVoid: {
                    start: 2712,
                    end: 2834,
                    loop: !1
                }
            },
            TeardropTired: {
                Sleep: {
                    start: 441,
                    end: 474,
                    loop: !1
                },
                Sleepy: {
                    start: 350,
                    end: 440,
                    loop: !1
                },
                Eat: {
                    start: 1001,
                    end: 1123,
                    loop: !1
                },
                Wave: {
                    start: 0,
                    end: 328,
                    loop: !1
                },
                Idle: {
                    start: 0,
                    end: 239,
                    loop: !0
                },
                Slap: {
                    start: 240,
                    end: 349,
                    loop: !1
                },
                BookOpen: {
                    start: 509,
                    end: 730,
                    loop: !1
                },
                Write: {
                    start: 731,
                    end: 857,
                    loop: !0
                },
                SendMessage: {
                    start: 858,
                    end: 1e3,
                    loop: !1
                },
                Nope: {
                    start: 1125,
                    end: 1198,
                    loop: !1
                },
                Look: {
                    start: 1199,
                    end: 1336,
                    loop: !1
                },
                Look2: {
                    start: 1337,
                    end: 1468,
                    loop: !1
                },
                Pat: {
                    start: 483,
                    end: 527,
                    loop: !1
                },
                PatStop: {
                    start: 528,
                    end: 577,
                    loop: !1
                }
            },
            Needle: {
                0: {
                    start: 0,
                    end: 20,
                    loop: !0
                },
                1: {
                    start: 57,
                    end: 193,
                    loop: !1
                },
                2: {
                    start: 331,
                    end: 440,
                    loop: !1
                }
            },
            Leafy: {
                0: {
                    start: 0,
                    end: 20,
                    loop: !0
                },
                1: {
                    start: 57,
                    end: 193,
                    loop: !1
                },
                2: {
                    start: 331,
                    end: 440,
                    loop: !1
                }
            },
            Coiny: {
                0: {
                    start: 0,
                    end: 39,
                    loop: !0
                },
                1: {
                    start: 40,
                    end: 221,
                    loop: !1
                },
                2: {
                    start: 222,
                    end: 329,
                    loop: !1
                }
            },
            Spongy: {
                0: {
                    start: 0,
                    end: 39,
                    loop: !0
                },
                1: {
                    start: 40,
                    end: 221,
                    loop: !1
                },
                2: {
                    start: 222,
                    end: 329,
                    loop: !1
                }
            },
            Pin: {
                0: {
                    start: 0,
                    end: 39,
                    loop: !0
                },
                1: {
                    start: 40,
                    end: 221,
                    loop: !1
                },
                2: {
                    start: 222,
                    end: 329,
                    loop: !1
                }
            },
            Rocky: {
                0: {
                    start: 0,
                    end: 39,
                    loop: !0
                },
                1: {
                    start: 40,
                    end: 221,
                    loop: !1
                },
                2: {
                    start: 222,
                    end: 329,
                    loop: !1
                }
            },
            "Ice Cube": {
                0: {
                    start: 0,
                    end: 39,
                    loop: !0
                },
                1: {
                    start: 40,
                    end: 221,
                    loop: !1
                },
                2: {
                    start: 222,
                    end: 329,
                    loop: !1
                }
            },
            tearDropTennis: {
                prepare: {
                    start: 0,
                    end: 11,
                    loop: !1
                },
                hit: {
                    start: 12,
                    end: 65,
                    loop: !1
                }
            },
            dropletDodge: {
                Idle: {
                    start: 0,
                    end: 239,
                    loop: !0
                },
                Running: {
                    start: 240,
                    end: 259,
                    loop: !0
                },
                Jump: {
                    start: 260,
                    end: 324,
                    loop: !1
                },
                Hurt: {
                    start: 325,
                    end: 432,
                    loop: !1
                }
            }
        },
        p = {
            _linear: function(e, t, i, n) {
                return e * (1 - i) + t * i
            },
            linear: function(e, t, i, n = 1) {
                if (1 == n) return p._linear(e, t, i);
                let o = n,
                    a = 1 - i;
                return p._linear(e, t, 1 - Math.pow(a, o))
            }
        },
        u = [],
        m = 0,
        y = {
            get2763intennis: {
                title: "Drop Tennis",
                description: "Get 2763 score in Drop Tennis minigame",
                icon: 29
            },
            winagameoftennis: {
                title: "Drop Tennis",
                name: "Drop Tennis Victory",
                description: "Win a game of Drop Tennis",
                icon: 29
            },
            get2763gtttatint: {
                title: "GTTTATINT",
                description: "Get 2763 score in GTTTATINT",
                icon: 30
            },
            slapTD2763: {
                title: "Ultimate Slapper",
                description: "Slap Teardrop 2763 times",
                icon: 37,
                getProgress: function() {
                    let e = n.totalSlaps + " / 2763";
                    return n.totalSlaps > 2763 && (e = n.totalSlaps), e
                }
            },
            get2763: {
                title: "2763...",
                description: "Complete every achievement about the number 2763",
                icon: 69,
                getProgress: function() {
                    let e = ["get2763intennis", "get2763gtttatint", "slapTD2763", "2763lemons"],
                        t = 0;
                    for (let i = 0; i < e.length; i++) y[e[i]].done && t++;
                    return t + " / " + e.length
                }
            },
            lemons: {
                title: "Lemon Factory",
                name: "Lemon Factory",
                description: "Feed Teardrop 100 lemons",
                icon: 36,
                getProgress: function() {
                    let e = n.lemonsFed + " / 100";
                    return n.lemonsFed > 100 && (e = n.lemonsFed), e
                }
            },
            get10perfectsCAKEWALK: {
                title: "Easy as Cake!",
                description: "Get 10 perfects in a row on CAKEWALK",
                icon: 38
            },
            "2763lemons": {
                title: "Gimme my lime!",
                name: "Gimme my lime!",
                description: "Feed Teardrop 2763 lemons",
                icon: 40,
                getProgress: function() {
                    let e = n.lemonsFed + " / 2763";
                    return n.lemonsFed > 2763 && (e = n.lemonsFed), e
                }
            },
            perfectfacematch: {
                title: "No difference",
                name: "No difference",
                description: "Get a 100% in Face Match",
                icon: 39
            },
            "10energydrinks": {
                title: "No sleep",
                name: "No sleep",
                description: "Feed Teardrop 10 Awakening Potions",
                icon: 6,
                getProgress: function() {
                    let e = n.drinksFed + " / 10";
                    return n.drinksFed > 10 && (e = n.drinksFed), e
                }
            },
            "5minuteGTTTATINT": {
                title: "Leg Day",
                name: "Leg Day",
                description: "Spend 5 minutes at 2mph or higher in GTTTATINT in a single game",
                icon: 30
            },
            tauntLogo: {
                title: "Obscure mischief",
                description: "Taunt the logo seen in the settings menu",
                icon: 37,
                secret: !0
            },
            oddDroplets40: {
                title: "The Detective",
                description: "Find the Odd Droplet 40 times in a row",
                icon: 37
            },
            "750altitudeCAKEWALK": {
                title: "Mile High Pie!",
                name: "Mile High Pie!",
                description: "Get to 500 altitude in CAKEWALK",
                icon: 38
            },
            get15000gtttatint: {
                title: "Reach the Galaxy",
                name: "Reach the Galaxy",
                description: "Get 15000 score in GTTTATINT",
                icon: 30
            },
            "1000altitudeCAKEWALK": {
                title: "Too High!!!",
                name: "Too High!!!",
                description: "Get to 1000 altitude in CAKEWALK",
                icon: 38
            },
            blockplatformgtttatint: {
                title: "GTTTATINT",
                description: "Find Blocky's family in GTTTATINT",
                icon: 30
            },
            iplayedreuniteddemo: {
                title: "I've played this mod before!",
                name: "I've played this before!",
                description: "Played stripped down version of the mod before Reunited release (United)",
                icon: 39
            },
            vanillacomplete: {
                title: "I beat myTeardrop",
                name: "I beat myTeardrop",
                description: "Complete Vanilla Achievements",
                icon: 69,
                getProgress: function() {
                    let e = ["get2763intennis", "winagameoftennis", "get2763gtttatint", "slapTD2763", "get2763", "lemons", "get10perfectsCAKEWALK", "2763lemons", "perfectfacematch", "10energydrinks", "5minuteGTTTATINT", "tauntLogo", "oddDroplets40", "750altitudeCAKEWALK", "get15000gtttatint", "1000altitudeCAKEWALK", "blockplatformgtttatint"],
                        t = 0;
                    for (let i = 0; i < e.length; i++) y[e[i]].done && t++;
                    return t + " / " + e.length
                }
            },
            get27630intennis: {
                title: "Hi I'm Tennis Ball!",
				name: "Hi I'm Tennis Ball!",
                description: "Get 27630 score in Drop Tennis minigame (Economic Collapse)",
                icon: 29
            },
            slapTD27630: {
                title: "No Regret",
				name: "No Regret",
                description: "Slap Teardrop 27630 times (Economic Collapse)",
                icon: 37,
                getProgress: function() {
                    let e = n.totalSlaps + " / 27630";
                    return n.totalSlaps > 27630 && (e = n.totalSlaps), e
                }
            },
            "1000lemons": {
                title: "Gimme my lime!",
                name: "Gimme my lime!",
                description: "Feed Teardrop 1000 lemons (Economic Collapse)",
                icon: 36,
                getProgress: function() {
                    let e = n.lemonsFed + " / 1000";
                    return n.lemonsFed > 1000 && (e = n.lemonsFed), e
                }
            },
            "27630lemons": {
                title: "Industrial Lemon Farm",
                name: "Industrial Lemon Farm",
                description: "Feed Teardrop 27630 lemons (Economic Collapse)",
                icon: 40,
                getProgress: function() {
                    let e = n.lemonsFed + " / 27630";
                    return n.lemonsFed > 27630 && (e = n.lemonsFed), e
                }
			},
            "100energydrinks": {
                title: "Overcaffeinated",
                name: "Overcaffeinated",
                description: "Feed Teardrop 100 Awakening Potions (Economic Collapse)",
                icon: 6,
                getProgress: function() {
                    let e = n.drinksFed + " / 100";
                    return n.drinksFed > 100 && (e = n.drinksFed), e
                }
            },
            oddDroplets100: {
                title: "Overexamination",
				name: "Overexamination",
                description: "Find the Odd Droplet 100 times in a row (Economic Collapse)",
                icon: 37
            },
            "true5minuteGTTTATINT": {
                title: "Through time",
                name: "Through time",
                description: "Spend 5 minutes at 2mph or higher in GTTTATINT in a single game (Economic Collapse/Unnerfed Achievements)",
                icon: 30
            },
            get27630GTTTATINT: {
                title: "Closer towards the Galaxy",
                name: "Closer towards the Galaxy",
                description: "Get 27630 score in GTTTATINT (Economic Collapse)",
                icon: 30
            },
            get150000gtttatint: {
                title: "Destination Arrived: Galaxy",
                name: "Destination Arrived: Galaxy",
                description: "Get 150000 score in GTTTATINT (Economic Collapse)",
                icon: 30
            },
            get25perfectsCAKEWALK: {
                title: "Child's Play",
                name: "Child's Play",
                description: "Get 25 perfects in a row on CAKEWALK (Economic Collapse)",
                icon: 38
            },
            "5000altitudeCAKEWALK": {
                title: "Deoxygenated Cake",
                name: "Deoxygenated Cake",
                description: "Get to 5000 altitude in CAKEWALK (Economic Collapse)",
                icon: 38
            },
            "10000altitudeCAKEWALK": {
                title: "Light Day Cake",
                name: "Light Day Cake",
                description: "Get to 10000 altitude in CAKEWALK (Economic Collapse)",
                icon: 38
            },
            get2763by10: {
                title: "2763x10...",
                name: "2763x10...",
                description: "Complete every achievement about the number 2763... multiplied by 10... (Economic Collapse)",
                icon: 70,
                getProgress: function() {
                    let e = ["get27630intennis", "27630lemons", "slapTD27630", "get27630GTTTATINT"],
                        t = 0;
                    for (let i = 0; i < e.length; i++) y[e[i]].done && t++;
                    return t + " / " + e.length
                }
            },
            perfectionistec: {
                title: "Perfectionist!",
                name: "Perfectionist!",
                description: "Complete \"Overexamination\", \"No Difference\", and \"Child's Play\" Achievement (Economic Collapse)",
                icon: 70,
                getProgress: function() {
                    let e = ["oddDroplets100", "perfectfacematch", "get25perfectsCAKEWALK"],
                        t = 0;
                    for (let i = 0; i < e.length; i++) y[e[i]].done && t++;
                    return t + " / " + e.length
                }
            },
            alleconomiccollapseachievements: {
                title: "Economic Collapsed",
                name: "Economic Collapsed",
                description: "Complete all Economic Collapse Achievements",
                icon: 70,
                getProgress: function() {
                    let e = ["get27630intennis","slapTD27630","1000lemons","27630lemons","100energydrinks","oddDroplets100","true5minuteGTTTATINT","get27630GTTTATINT","get150000gtttatint","get25perfectsCAKEWALK","5000altitudeCAKEWALK","10000altitudeCAKEWALK","perfectionistec","get2763by10"],
                        t = 0;
                    for (let i = 0; i < e.length; i++) y[e[i]].done && t++;
                    return t + " / " + e.length
                }
            },
            speedygonzalez: {
                title: "Speedy Gonzalez",
                name: "Speedy Gonzalez",
                description: "Get more than 50000 score on a Drop Tennis (Any variation) (Reunited)",
                icon: 29
            },
            slowpokerodriguez: {
                title: "Slowpoke Rodriguez",
                name: "Slowpoke Rodriguez",
                description: "Lose a game of Drop Tennis minigame (Any variation) (Reunited)",
                icon: 29
            },
            masterofmyteardrop: {
                title: "Master of myTeardrop",
                name: "Master of myTeardrop",
                description: "Complete every Master achievements (Reunited)",
                icon: 35,
                getProgress: function() {
                    let e = ["masterofgtttatint", "masterofodddroplets", "masterofcakewalk", "masterofspeed", "masterofconsistency"],
                        t = 0;
                    for (let i = 0; i < e.length; i++) y[e[i]].done && t++;
                    return t + " / " + e.length
                }
            },
            masterofgtttatint: {
                title: "Master of Platforming",
                name: "Master of Platforming",
                description: "You've done hours of jumping from one platform to another! Nice job! (Reunited)",
                icon: 66,
                secret: !0
            },
            masterofodddroplets: {
                title: "Master of Investigation",
                name: "Master of Investigation",
                description: "Being able to tell the differences, even the smallest ones. (Reunited)",
                icon: 64,
                secret: !0
            },
            masterofcakewalk: {
                title: "Master of Patience",
                name: "Master of Patience",
                description: "Legends says that players are still stacking cakes today. (Reunited)",
                icon: 65,
                secret: !0
            },
            masterofspeed: {
                title: "Master of Swiftness",
                name: "Master of Swiftness",
                description: "So, how's your screen? your mouse? or your autoclicker? (Reunited)",
                icon: 68,
                secret: !0
            },
            masterofconsistency: {
                title: "Master of Consistency",
                name: "Master of Consistency",
                description: "Congratulations, you did the impossible. (Reunited)",
                icon: 67,
                secret: !0
            },
            masteroffacematch: {
                title: "Congratulations!",
                name: "Congratulations!",
                description: "I know you're going to read this because of the fact that you save edited it to get this fake and unobtainable achievement",
                icon: 39,
				secret: !0
            }
        };
    for (let e in y) null != a[e] && (y[e].title = a[e].title, y[e].name = a[e].name, y[e].description = a[e].description);
    let f = function(e, t, i, n) {
            return Math.sqrt((e - i) ** 2 + (t - n) ** 2)
        },
        g = function(e, t, i) {
            return e.x + e.width >= t.x && e.x <= t.x + t.width && e.y + e.height >= t.y && e.y <= t.y + t.height
        },
        x = {},
        w = 0;

    function v(e, t, i = !0) {
        e.originalSize = {
            x: e.scale.x,
            y: e.scale.y
        }, e.animate = i, e.animationSize = e.originalSize, e.destinationSize = e.originalSize, e.animationTime = 0, e.on("pointerover", (function() {
            i && (e.animationSize = {
                x: e.scale.x,
                y: e.scale.y
            }, e.destinationSize = {
                x: 1.1 * e.originalSize.x,
                y: 1.1 * e.originalSize.y
            }), e.animationTime = 0, e.hover = !0
        })), e.on("pointerout", (function() {
            i && (e.animationSize = {
                x: e.scale.x,
                y: e.scale.y
            }, e.animationTime = 0, e.destinationSize = {
                x: 1 * e.originalSize.x,
                y: 1 * e.originalSize.y
            }), e.hover = !1
        })), e.on("pointerdown", (function() {
            e.disableTrigger = !1, i && (e.destinationSize = {
                x: .95 * e.originalSize.x,
                y: .95 * e.originalSize.y
            }, e.animationSize = {
                x: e.scale.x,
                y: e.scale.y
            }), e.animationTime = 0, e.pressing = !0
        })), e.disableTrigger = !1, e.resetSize = function() {
            e.animationSize = {
                x: e.scale.x,
                y: e.scale.y
            }, e.destinationSize = {
                x: e.originalSize.x,
                y: e.originalSize.y
            }, e.animationTime = 0
        }, e.on("pointerup", (function() {
            e.pressing && 0 == e.disableTrigger && t(), e.interactive && (e.pressing = !1, i && (e.animationSize = {
                x: e.scale.x,
                y: e.scale.y
            }, e.destinationSize = {
                x: 1.1 * e.originalSize.x,
                y: 1.1 * e.originalSize.y
            }), e.animationTime = 0)
        }))
    }

    function I(e, t = new PIXI.Rectangle(-100, -100, 200, 200), i, n = 0) {
        e.canDrag = !0, e.hitArea = t, e.dragScale = n, e.originalHitArea = t, e.dragged = !1, i && (e.x2 = e.x, e.y2 = e.y), e.on("pointerdown", (function(t) {
            e.dragged = !0, e.hitArea = new PIXI.Rectangle(-3e3, -3e3, 6e3, 6e3), e.dragging = !0, e.originalPosition = {
                x: e.x,
                y: e.y
            };
            let i = t.clientX / s,
                n = t.clientY / s;
            0 != e.dragScale && (i /= e.dragScale, n /= e.dragScale), e.dragOffset = {
                x: i - e.x,
                y: n - e.y
            }
        })), e.on("pointermove", (function(t) {
            let n = t.clientX / s,
                o = t.clientY / s;
            0 != e.dragScale && (n /= e.dragScale, o /= e.dragScale), e.dragging && (i ? (e.x2 = n - e.dragOffset.x, e.y2 = o - e.dragOffset.y) : (e.x = n - e.dragOffset.x, e.y = o - e.dragOffset.y), f(e.originalPosition.x, e.originalPosition.y, e.x, e.y) > 1 && (e.disableTrigger = !0), null != e.onDrag && e.onDrag())
        })), e.on("pointerup", (function() {
            e.dragging = !1, e.hitArea = e.originalHitArea
        }))
    }
    class b {
        constructor(e, t, i, n = !1, o = !0) {
            this.buttonContainer = new PIXI.Container, this.selected = new PIXI.Sprite(he["Sprites/GameUI"][8]), this.selected.anchor.set(.5, .5), this.buttonContainer.addChild(this.selected), this.selected.blendMode = PIXI.BLEND_MODES.ADD, this.empty = new PIXI.Sprite(e), this.empty.anchor.set(.5, .5), this.buttonContainer.addChild(this.empty), this.size = e.trim.width, this.fullMask = new PIXI.Graphics, this.fullMask.beginFill(16777215), this._offset = Math.min(1, Math.max(0, i)), this.pieChart = n, n || this.fullMask.drawRect(-this.size / 2, -this.size / 2 + (this.size - this.size * this._offset), this.size, this.size * this._offset), this.fullMask.endFill(), this.empty.addChild(this.fullMask), this.full = new PIXI.Sprite(t), this.full.anchor.set(.5, .5), this.empty.addChild(this.full), this.full.mask = this.fullMask, this.percentage = new PIXI.BitmapText(Math.round(100 * this._offset) + "%", {
                fontSize: 16,
                fontName: "MenuShag"
            }), this.percentage.y = this.size / 2 + 10, this.percentage.anchor.set(.5, .5), o && this.buttonContainer.addChild(this.percentage), this.buttonContainer.hitArea = new PIXI.Rectangle(-this.size / 2, -this.size / 2, this.size, this.size), this.buttonContainer.interactive = !0, this.id = w, x[w++] = this.buttonContainer
        }
        set offset(e) {
            if (this.fullMask.clear(), this._offset = Math.min(1, Math.max(0, e)), this.fullMask.beginFill(16777215), this.pieChart && this._offset < .99) {
                let e = this.size,
                    t = [0, 0, 0, -e];
                this._offset > .125 && (t.push(e), t.push(-e)), this._offset > .25 && (t.push(e), t.push(0)), this._offset > .375 && (t.push(e), t.push(e)), this._offset > .5 && (t.push(0), t.push(e)), this._offset > .625 && (t.push(-e), t.push(e)), this._offset > .75 && (t.push(-e), t.push(0)), this._offset > .875 && (t.push(-e), t.push(-e)), t.push(e * Math.cos(this._offset * Math.PI * 2 - Math.PI / 2)), t.push(e * Math.sin(this._offset * Math.PI * 2 - Math.PI / 2)), this.fullMask.drawPolygon(...t)
            } else this.fullMask.drawRect(-this.size / 2, -this.size / 2 + (this.size - this.size * this._offset), this.size, this.size * this._offset);
            this.fullMask.endFill(), this.percentage.text = Math.round(100 * this._offset) + "%"
        }
        destroy() {
            this.selected.destroy(), this.empty.destroy(), this.fullMask.destroy(), this.full.destroy(), this.percentage.destroy(), this.buttonContainer.destroy(), delete x[this.id]
        }
    }
    let C = null;
    class S {
        constructor(e, t, i, n, o, a, r, s) {
            this.ninesliceplane = new PIXI.NineSlicePlane(he.inputNineSlice[0], 15, 15, 15, 15), this.ninesliceplane.width = i, this.ninesliceplane.height = n, this.ninesliceplane.x = e, this.ninesliceplane.y = t, this.ninesliceplane.interactive = !0, this.ninesliceplane.on("click", (() => {
                C = this.inputText, this.inputText.alpha = 1, this.inputText.text = this.inputText.value, document.addEventListener("keydown", this.type), document.addEventListener("pointerdown", this.disable)
            })), this.type = e => {
                " 0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.,!?\"'".includes(e.key) && a > this.inputText.value.length && (this.inputText.value += e.key), "Backspace" == e.key && (this.inputText.value = this.inputText.value.slice(0, -1)), "Enter" != e.key ? (this.inputText.scale.x = 1, this.inputText.text = this.inputText.value, this.inputText.width > this.ninesliceplane.width - 2 * this.inputText.x && (this.inputText.width = this.ninesliceplane.width - 2 * this.inputText.x), this.inputText.scale.y = this.inputText.scale.x) : this.confirmation()
            }, this.disabled = !1, this.disable = () => {
                "" == this.inputText.value && (this.inputText.text = o, this.inputText.alpha = .5), C = -1, document.removeEventListener("keydown", this.type), document.removeEventListener("pointerdown", this.disable)
            }, this.inputText = new PIXI.BitmapText(o, {
                fontSize: n - 7,
                fontName: "ShagBlack"
            }), this.inputText.value = "", this.inputText.alpha = .5, this.inputText.anchor.set(0, .5), this.inputText.x = n / 2 - 2, this.inputText.y = this.ninesliceplane.height / 2, this.ninesliceplane.addChild(this.inputText), this.ninesliceplane.pivot.x = i * r, this.ninesliceplane.pivot.y = n * s, this.element = this.ninesliceplane, this.confirmation = function() {}
        }
        _destroy() {
            this.ninesliceplane.interactive = !1, this.disable(), this.inputText.parent.removeChild(this.inputText), this.inputText.destroy(), this.ninesliceplane.destroy(), this.ninesliceplane.removeAllListeners()
        }
        destroy() {
            this._destroy()
        }
    }
    class k extends S {
        constructor(e = function() {}, t, i, n, o, a, r, s, l, d = 1, c = "left") {
            super(t, i, n, o, a, r, .5, .5), this.ninesliceplane.texture = he.inputNineSlice[d], this.inputText.fontName = "MenuShag", this.inputText.fontSize = o - 7, this.inputText.x = o / 2 - 2, "center" == c && (this.inputText.x = n / 2, this.inputText.anchor.set(.5, .5)), this.inputText.alpha = 1, this.type = function() {}, this.ninesliceplane.removeAllListeners(), this.id = w, x[w++] = this.element, this.ninesliceplane.x += .5 * n - n * s, this.ninesliceplane.y += .5 * o - o * l, v(this.element, e)
        }
        destroy() {
            delete x[this.id], this._destroy()
        }
    }
    class M {
        constructor(e = function() {}, t, i) {
            this.sprite = new PIXI.Sprite(t);
            let n = 100;
            null != this.sprite.texture.trim && (n = this.sprite.texture.trim.width, this.sprite.hitArea = new PIXI.Rectangle(-n / 2, -n / 2, n, n)), this.sprite.interactive = !0, this.sprite.anchor.set(.5, .5);
            for (let e in i) this.sprite[e] = i[e];
            this.id = w, x[w++] = this.sprite, v(this.sprite, e, !0)
        }
        destroy() {
            delete x[this.id], this.sprite.interactive = !1, this.sprite.destroy(), this.sprite.removeAllListeners()
        }
    }

    function P() {
        return w++
    }
    let T, A, L = {
            regularcake: {
                name: a.food.regularcake,
                texture: 1,
                cost: 15,
                adds: 40
            },
            icecreamcake: {
                name: a.food.icecreamcake,
                texture: 5,
                cost: 20,
                adds: 60
            },
            icycake: {
                name: a.food.icycake,
                texture: 4,
                cost: 1,
                adds: 1
            },
            limecake: {
                name: a.food.limecake,
                texture: 6,
                cost: 10,
                adds: 20
            },
            blueberry: {
                name: a.food.blueberry,
                texture: 7,
                cost: 2,
                adds: 10
            },
            strawberry: {
                name: a.food.strawberry,
                texture: 8,
                cost: 1,
                adds: 8
            },
            strawberrycake: {
                name: a.food.strawberrycake,
                texture: 9,
                cost: 8,
                adds: 15
            },
            candy: {
                name: a.food.candy,
                texture: 10,
                cost: 5,
                adds: 12
            },
            cherrypan: {
                name: "cherrypan",
                texture: 11,
                cost: 1e3,
                adds: 100,
                hidden: !0
            },
            sleeppotion: {
                name: a.food.sleeppotion,
                texture: 12,
                cost: 100,
                adds: 5,
                hidden: !1
            },
            sourlemon: {
                name: a.food.sourlemon,
                texture: 14,
                cost: 3,
                adds: -4
            },
            donut: {
                name: a.food.donut,
                texture: 16,
                cost: 12,
                adds: 30,
                requiredLevel: 5
            },
            fries: {
                name: a.food.fries,
                texture: 15,
                cost: 50,
                adds: 75,
                requiredLevel: 10
            },
            burntTaco: {
                name: a.food.burntTaco,
                texture: 17,
                cost: 100,
                adds: 90,
                requiredLevel: 20
            },
            heartChocolate: {
                name: "Heart Chocolate",
                texture: 21,
                cost: 15,
                adds: 50,
				requiredLevel: 20
            },
            bluecake: {
                name: "Blue Cake",
                texture: 3,
                cost: 30,
                adds: 40,
                requiredLevel: 25
            },
            goldcheesecake: {
                name: "Golden Cheese Cake",
                texture: 19,
                cost: 60,
                adds: 40,
                requiredLevel: 50
            },
            yoyleberry: {
                name: "Yoyleberry",
                texture: 20,
                cost: 60,
                adds: 10,
                requiredLevel: 60
            },
            maxpotion: {
                name: a.food.maxpotion,
                texture: 13,
                cost: 2000,
                adds: 0,
				requiredLevel: 75
            },
            uranium: {
                name: "Uranium",
                texture: 18,
                cost: 600000,
                adds: 0,
				requiredLevel: 100
            },
            theominousbigredbox: {
                name: "The Gigantic Edible Red Square",
                texture: 22,
                cost: 69,
                adds: 0,
                hidden: !0
            }
        },
        E = {
            awake: "Teardrop",
            tired: "TeardropTired"
        },
        D = "Teardrop",
        X = "TeardropTired",
        O = {
            teardrop: {
                name: "tear_drop_bfb"
            },
            jacknjellify: {
                name: "jacknjellify"
            },
            vendormint: {
                name: "vendormint"
            },
            stevencrack: {
                name: "stevencrack",
                icon: 3
            },
            thinking909: {
                name: "Oyui"
            },
            briteideajuni: {
                name: "Juniper/Noelle"
            },
            bluesky: {
                name: "doodlesdesire"
            },
            cringeindividual: {
                name: "Roxamations"
            },
            jampu: {
                name: "Jampu"
            },
            kyle: {
                name: "kyle9341"
            },
            tyblade: {
                name: "tyblade9"
            },
            maple2: {
                name: "maple_two"
            },
            dialup: {
                name: "dialup",
                icon: 2
            },
            coconut7: {
                name: "coconut7"
            },
            dopozy: {
                name: "dopozy"
            },
            gstbw: {
                name: "gst.bw"
            },
            forkiplier: {
                name: "forkiplier"
            },
            frostthesleepyone: {
                name: "FROST"
            },
            starspawn: {
                name: "jimmy / stars.pawn"
            },
            flanimations: {
                name: "Flanimations",
                icon: 1
            },
            zxcubed: {
                name: "zxcubed",
                icon: 4
            },
            justdanoobxdd: {
                name: "justdanoobxdd"
            },
            bogglesussy: {
                name: "BoggleRealSussy"
            },
            eri_5i: {
                name: "eri_5i"
            },
            swaggerrimunchies: {
                name: "Swaggers"
            },
            hazzrde: {
                name: "hazzrde"
            },
            hbzisback: {
                name: "Temazu_"
            },
            pankocrash: {
                name: "pankocrash / b-sides"
            },
            kaidkrazyest: {
                name: "Dazzlecat / kaidkrazyest"
            },
            adxmz_vll: {
                name: "Adxmz / Adam"
            },
            chaosticies: {
                name: "Chaosticies - Knifey!!",
                shortName: "Knifey!!"
            },
            gokci: {
                name: "Gokci"
            },
            joopter: {
                name: "Joopter"
            },
            toonster: {
                name: "Toonster"
            },
            grimchan67: {
                name: "Grim-chan 67"
            },
            galilemonade: {
                name: "Gali Lemonade"
            },
            tubulartoque: {
                name: "Tubular_Toque"
            },
            marker2014: {
                name: "marker2014"
            },
            cvaguiar: {
                name: "cvaguiar"
            },
            bootheghost64: {
                name: "bootheghost64"
            },
            iamstonebone: {
                name: "stone bone"
            },
            xmuao: {
                name: "xmu"
            },
            fairytd: {
                name: ".fairyteardrop"
            },
            itlsu: {
                name: "itlsu"
            },
            not_devin11u: {
                name: "not_devin11u"
            },
            jhaydenplayzz: {
                name: "jhaydenplayzz"
            },
            vulpieee: {
                name: "vulpieee"
            },
            nombiastic: {
                name: "nombiastic"
            }
        };

    function N(e, t, i = 1) {
        let n = [];
        for (let e = 0; e < he["Sprites/Bodies"].length; e++) n.push(he["Sprites/Bodies"][e]);
        n[47] = he["Sprites/BodiesCostume_" + i][t], n[48] = he["Sprites/BodiesCostume_" + i][t + 1];
        let o = e.currentFrame;
        e.textures = n, e.gotoAndStop(o)
    }
    let G = {
            none: {
                name: a.costumes.none,
                sprite: 0,
                cost: 0,
                owned: !0,
                apply: function(e, t = 0, i, n) {
                    let o;
                    switch (t) {
                        case 0:
                            o = [e.b, e.c, e.a.d, e.a.e, e.a.f, e.a.g, e.a.h, e.a.j, e.a.k, e.a.i];
                            break;
                        case 1:
                            o = [e.a.d, e.a.e, e.a.f, e.a.g, e.a.h, e.a.j, e.a.k, e.a.i]
                    }
                    e.a.sortDirty = !0;
                    for (let e = 0; e < o.length; e++) {
                        let t = o[e];
                        t.layerOffset = void 0, t.tint = 16777215, t.zIndex = 0;
                        let i = t.symbol.split("/")[1];
                        z(t, "Sprites/" + i)
                    }
                    if (1 != n && null != e.a.children) {
                        for (let t = 0; t < e.a.children.length; t++) e.a.children[t].zIndex = t;
                        e.a.sortableChildren = !1
                    }
                }
            },
            uglysweater: {
                name: a.costumes.uglysweater,
                sprite: 2,
                artist: O.jacknjellify,
                cost: 600,
                owned: !1,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 0), z(e.a.j, "Sprites/LimbsCostume1"), z(e.a.k, "Sprites/LimbsCostume1")
                }
            },
            uglysweater2: {
                name: "tennis sweater",
                sprite: 2,
                artist: O.jacknjellify,
                cost: 0,
                owned: !1,
                hidden: !0,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 4), z(e.a.j, "Sprites/LimbsCostume1"), z(e.a.k, "Sprites/LimbsCostume1")
                }
            },
            _td_costume1: {
                name: a.costumes._td_costume1,
                sprite: 3,
                artist: O.teardrop,
                cost: 600,
                owned: !1,
                apply: function(e, t) {
                    G.none.apply(e, t), z(e.a.d, "Sprites/Empty"), N(e.a.i, 2)
                }
            },
            _td_costume2: {
                name: a.costumes._td_costume2,
                artist: O.teardrop,
                sprite: 4,
                cost: 600,
                owned: !1,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 6)
                }
            },
            _td_costume3: {
                name: a.costumes._td_costume3,
                artist: O.teardrop,
                sprite: 5,
                cost: 500,
                owned: !1,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 8)
                }
            },
            _td_costume4: {
                name: a.costumes._td_costume4,
                sprite: 10,
                cost: 500,
                owned: !1,
                color: 16753054,
                artist: O.teardrop,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 18), z(e.a.d, "Sprites/MouthsCostume10")
                }
            },
            _td_costume5: {
                name: a.costumes._td_costume5,
                sprite: 19,
                cost: 1600,
                owned: !1,
                color: 16739174,
                artist: O.teardrop,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 39);
                    let i = new PIXI.Sprite(he["Sprites/BodiesCostume_1"][41]);
                    R(i, e.a, 0, .95, 20), i.x = 15, i.y = 120, i.zIndex = -1, i.scale.x = -1;
                    let n = new PIXI.Sprite(he["Sprites/BodiesCostume_1"][41]);
                    R(n, e.a, 0, .95, 20), n.x = 110.5, n.y = 120, n.zIndex = -1, e.a.sortableChildren = !0, e.destroyCostume = function() {
                        n.destroyPhysics(), i.destroyPhysics()
                    }
                },
                applyMinigame: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 42)
                }
            },
            honeydrop: {
                name: a.costumes.honeydrop,
                sprite: 11,
                cost: 700,
                owned: !1,
                color: 16772979,
                artist: O.briteideajuni,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 20)
                }
            },
            orangedrop: {
                name: a.costumes.orangedrop,
                sprite: 12,
                cost: 500,
                owned: !1,
                color: 16768184,
                artist: O.thinking909,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 22)
                }
            },
            drippydrop: {
                name: a.costumes.drippydrop,
                sprite: 14,
                cost: 500,
                owned: !1,
                artist: O.bluesky,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 24)
                }
            },
            glassdrop: {
                name: a.costumes.glassdrop,
                sprite: 13,
                cost: 300,
                owned: !1,
                color: 12113151,
                artist: O.cringeindividual,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 26)
                }
            },
            classic: {
                name: a.costumes.classic,
                sprite: 1,
                artist: O.jacknjellify,
                cost: 200,
                owned: !1,
                apply: function(e, t = 0) {
                    let i;
                    switch (G.none.apply(e, t), t) {
                        case 0:
                            i = [e.b, e.c, e.a.d, e.a.e, e.a.f, e.a.g, e.a.h, e.a.i, e.a.j, e.a.k];
                            break;
                        case 1:
                            i = [e.a.d, e.a.e, e.a.f, e.a.g, e.a.h, e.a.i, e.a.j, e.a.k]
                    }
                    for (let e = 0; e < i.length; e++) {
                        let t = i[e],
                            n = t.symbol.split("/")[1];
                        z(t, "oldiesCostume/" + n)
                    }
                }
            },
            outline: {
                name: "teardrop's deep dark secret. do not use this costume under any circumstances!",
                sprite: 1,
                artist: O.jacknjellify,
                cost: 0,
                owned: !1,
                hidden: !0,
                apply: function(e, t = 0) {
                    let i;
                    switch (t) {
                        case 0:
                            i = [e.b, e.c, e.a.d, e.a.e, e.a.f, e.a.g, e.a.h, e.a.i, e.a.j, e.a.k];
                            break;
                        case 1:
                            i = [e.a.d, e.a.e, e.a.f, e.a.g, e.a.h, e.a.i, e.a.j, e.a.k]
                    }
                    for (let e = 0; e < i.length; e++) {
                        let t = i[e];
                        null != he[t.symbol + "OUTLINE12"] && z(t, t.symbol + "OUTLINE12")
                    }
                }
            },
            golden: {
                name: a.costumes.golden,
                sprite: 6,
                cost: 5e4,
                owned: !1,
                color: 16774556,
                artist: O.vendormint,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 10)
                }
            },
            light: {
                name: a.costumes.light,
                sprite: 8,
                cost: 200,
                owned: !1,
                artist: O.stevencrack,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 14)
                }
            },
            magician: {
                name: a.costumes.magician,
                sprite: 16,
                cost: 300,
                owned: !1,
                artist: O.kyle,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 30)
                }
            },
            oyuidrop: {
                name: a.costumes.oyuidrop,
                sprite: 18,
                cost: 1600,
                color: 13369246,
                owned: !1,
                artist: O.thinking909,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 34), z(e.a.j, "Sprites/Empty"), z(e.a.k, "Sprites/Empty");
                    let i = new PIXI.Sprite(he["Sprites/BodiesCostume_1"][37]);
                    R(i, e.a, 0, .95, 10), i.x = 100, i.y = 20;
                    let n = new PIXI.Sprite(he["Sprites/BodiesCostume_1"][36]);
                    R(n, e.a, 0, .95, 15), n.x = 90, n.y = 120, n.zIndex = -1, e.a.sortableChildren = !0, e.destroyCostume = function() {
                        i.destroyPhysics(), n.destroyPhysics()
                    }
                },
                applyMinigame: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 38), z(e.a.j, "Sprites/Empty"), z(e.a.k, "Sprites/Empty")
                }
            },
            chocodrop: {
                name: "Choco-Drop",
                sprite: 21,
                cost: 800,
                owned: !1,
                color: 14917741,
                artist: O.vendormint,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 45)
                }
            },
            pineapple: {
                name: "Pineapple",
                sprite: 22,
                cost: 1e3,
                owned: !1,
                drawnBy: O.dialup,
                color: 16766369,
                artist: O.thinking909,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 47)
                }
            },
            mintdrop: {
                name: "Minty Drop",
                sprite: 23,
                cost: 600,
                owned: !1,
                color: 12779497,
                artist: O.vendormint,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 49)
                }
            },
            oildrop: {
                name: "Oil Drop",
                sprite: 24,
                artist: O.coconut7,
                cost: 700,
                owned: !1,
                color: 1184031,
                animation: {
                    tired: "TeardropTiredOIL",
                    awake: "TeardropOIL"
                },
                facePosition: {
                    x: 0,
                    y: 0
                },
                generateAnimations: function() {
                    let e = function(e, t) {
                        let i = JSON.parse(JSON.stringify(pe[e]));
                        return i.symbols.TeardropBody = pe[t], i
                    };
                    pe.TeardropOIL = e("Teardrop", "oilTeardropBody"), pe.TeardropTiredOIL = e("TeardropTired", "oilTeardropTiredBody")
                },
                apply: function(e, t = 0) {
                    G.none.apply(e, t), N(e.a.i, 51), z(e.a.e, "Sprites/EyesCostume25"), z(e.a.f, "Sprites/EyesCostume25"), z(e.a.g, "Sprites/EyesCostume25"), z(e.a.h, "Sprites/EyesCostume25"), z(e.a.d, "Sprites/MouthsCostume25")
                }
            },
            knightdrop: {
                name: "Knight Drop",
                requiredLevel: 25,
                sprite: 25,
                cost: 1400,
                owned: !1,
                color: 16732524,
                drawnBy: O.dialup,
                animation: {
                    tired: "TeardropTiredKNIGHT",
                    awake: "TeardropKNIGHT"
                },
                artist: O.thinking909,
                facePosition: {
                    x: 0,
                    y: 0
                },
                generateAnimations: function() {
                    let e = function(e) {
                        let t = JSON.parse(JSON.stringify(pe[e])),
                            i = t.symbols.TeardropBody;

                        function n(e, t, i, n = 1) {
                            for (let o = 0; o < e.frames.length; o++) {
                                let a = e.frames[o];
                                null != a[1] && (a[1] += t, a[2] += i, a[3] *= n, a[6] *= n)
                            }
                        }
                        return n(i.layers.d, -3, 5, .9), n(i.layers.e, -3, 7), n(i.layers.g, -3, 7), n(i.layers.f, -3, 7), n(i.layers.h, -3, 7), t
                    };
                    pe.TeardropKNIGHT = e("Teardrop"), pe.TeardropTiredKNIGHT = e("TeardropTired")
                },
                apply: function(e, t, i = !0) {
                    G.none.apply(e, t), N(e.a.i, 53)
                },
                applyMinigame: function(e) {
                    N(e.a.i, 53)
                }
            },
            galaxydrop: {
                name: "Galaxy Drop",
                sprite: 27,
                artist: O.dialup,
                cost: -1,
                owned: !1,
                color: 12880895,
                achievement: ["get15000gtttatint", "1000altitudeCAKEWALK"],
                checkAvailability: function() {
                    let e = ["get15000gtttatint", "1000altitudeCAKEWALK"],
                        t = !0;
                    for (let i = 0; i < e.length; i++) 1 != y[e[i]].done && (t = !1);
                    return t
                },
                apply: function(e, t = 0) {
                    G.none.apply(e, t), N(e.a.i, 57), z(e.a.e, "Sprites/EyesCostume25"), z(e.a.f, "Sprites/EyesCostume25"), z(e.a.g, "Sprites/EyesCostume25"), z(e.a.h, "Sprites/EyesCostume25"), z(e.a.d, "Sprites/MouthsCostume25")
                }
            },
            sundrop: {
                name: "Sun Drop",
                sprite: 28,
                cost: 1200,
                owned: !1,
                color: 16638347,
                amountOfVotes: 245,
                artist: O.thinking909,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 0, "september2024")
                }
            },
            coladrop: {
                name: "Cola Drop",
                sprite: 29,
                cost: 800,
                owned: !1,
                color: 8737368,
                amountOfVotes: 192,
                artist: O.dopozy,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 2, "september2024"), z(e.a.e, "Sprites/EyesCostume25"), z(e.a.f, "Sprites/EyesCostume25"), z(e.a.g, "Sprites/EyesCostume25"), z(e.a.h, "Sprites/EyesCostume25"), z(e.a.d, "Sprites/MouthsCostume25")
                }
            },
            tropical: {
                name: "Tropical Drop",
                sprite: 30,
                cost: 1200,
                owned: !1,
                color: 7465469,
                amountOfVotes: 148,
                artist: O.gstbw,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 4, "september2024")
                }
            },
            moondrop: {
                name: "Moon Drop",
                sprite: 31,
                cost: 1200,
                owned: !1,
                color: 2565182,
                amountOfVotes: 138,
                drawnBy: O.stevencrack,
                artist: O.forkiplier,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 6, "september2024"), e.a.e, e.a.f, e.a.g, e.a.h, e.a.d, z(e.a.e, "Sprites/EyesCostume25"), z(e.a.f, "Sprites/EyesCostume25"), z(e.a.g, "Sprites/EyesCostume25"), z(e.a.h, "Sprites/EyesCostume25"), z(e.a.d, "Sprites/MouthsCostume25"), e.a.f.tint = 2170420, e.a.h.tint = 2170420
                }
            },
            clouddrop: {
                name: "Cloud Drop",
                sprite: 32,
                cost: 1e3,
                owned: !1,
                color: 11719153,
                amountOfVotes: 120,
                drawnBy: O.flanimations,
                artist: O.frostthesleepyone,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 8, "september2024");
                    let i = new PIXI.Sprite(he["Sprites/BodiesCostume_september2024"][10]);
                    R(i, e, 0, .9, 22, !0, e.a), i.offset.x = -50, i.offset.y = -105, i.zIndex = -1, i.scale.x = -1;
                    let n = new PIXI.Sprite(he["Sprites/BodiesCostume_september2024"][11]);
                    R(n, e, 0, .93, 25, !0, e.a), n.offset.x = 40, n.offset.y = -90, n.zIndex = e.a.i.zIndex + 1, e.sortableChildren = !0, e.destroyCostume = function() {
                        n.destroyPhysics(), i.destroyPhysics()
                    }
                },
                applyMinigame: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 12, "september2024")
                }
            },
            sealdrop: {
                name: "Seal Drop",
                sprite: 33,
                cost: 1200,
                owned: !1,
                color: 15193786,
                amountOfVotes: 108,
                drawnBy: O.flanimations,
                artist: O.starspawn,
                apply: function(e, t, i) {
                    G.none.apply(e, t), N(e.a.i, 13, "september2024"), z(e.a.j, "Sprites/Empty"), z(e.a.k, "Sprites/Empty"), z(e.a.d, "Sprites/MouthsCostume10");
                    let n = [e.a.e, e.a.f, e.a.g, e.a.h, e.a.d];
                    if ("tennis" == i) {
                        for (let e = 0; e < n.length; e++) n[e].layerOffset = {
                            x: 3,
                            y: 15
                        };
                        e.a.d.layerOffset = {
                            x: 3,
                            y: 15
                        }
                    } else if ("faceMatch" == i) {
                        for (let e = 0; e < n.length; e++) n[e].layerOffset = {
                            x: -5,
                            y: 16
                        };
                        e.a.d.layerOffset = {
                            x: -3,
                            y: 12
                        }
                    } else {
                        for (let e = 0; e < n.length; e++) n[e].layerOffset = {
                            x: -3,
                            y: 15
                        };
                        e.a.d.layerOffset = {
                            x: -3,
                            y: 15
                        }
                    }
                }
            },
            aoracedrop: {
                name: "Aroacedrop",
                sprite: 34,
                cost: 1e3,
                owned: !1,
                color: 15446392,
                amountOfVotes: 102,
                drawnBy: O.dialup,
                artist: O.justdanoobxdd,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 15, "september2024")
                }
            },
            gumdrop: {
                name: "Gumdrop",
                sprite: 35,
                cost: 1e3,
                owned: !1,
                color: 16564468,
                amountOfVotes: 94,
                drawnBy: O.stevencrack,
                artist: O.bogglesussy,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 17, "september2024")
                }
            },
            softdrink: {
                name: "Softdrink Drop",
                sprite: 36,
                cost: 1600,
                owned: !1,
                color: 7859168,
                amountOfVotes: 129,
                artist: O.eri_5i,
                drawnBy: O.zxcubed,
                apply: function(e, t, i) {
                    G.none.apply(e, t), N(e.a.i, 19, "september2024");
                    let n = new PIXI.Sprite(he["Sprites/BodiesCostume_september2024"][21]);
                    R(n, e.a, 0, .95, 20), n.x = 90, n.y = 130, n.zIndex = -1, e.a.sortableChildren = !0, e.destroyCostume = function() {
                        n.destroyPhysics()
                    };
                    let o = [e.a.e, e.a.f, e.a.g, e.a.h, e.a.d];
                    for (let e = 0; e < o.length; e++) o[e].layerOffset = {
                        x: 0,
                        y: 6
                    };
                    e.a.d.layerOffset = {
                        x: 0,
                        y: 4
                    }
                },
                applyMinigame: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 22, "september2024")
                }
            },
            glorp: {
                name: "Glorplet",
                sprite: 37,
                cost: 1600,
                owned: !1,
                color: 10485638,
                amountOfVotes: 120,
                drawnBy: O.zxcubed,
                artist: {
                    name: O.swaggerrimunchies.name + ", " + O.hazzrde.name
                },
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 23, "september2024"), e.a.static = !0, e.b.static = !0, e.c.static = !0, e.d.static = !0, z(e.b, "Sprites/Empty"), z(e.c, "Sprites/Empty");
                    let n = {
                        x: e.a.x,
                        y: e.a.y - 20
                    };
                    e.a.x = -10, e.a.y = -50, U(e.a, n);
                    let o = 1.5 * e.d.scale.x,
                        a = e.d.scale.y,
                        r = function() {
                            e.a.orbitSpeed = p.linear(e.a.orbitSpeed, i.sleeping ? .25 : 1, .01, Qe), e.d.x = e.a.x, e.d.scale.x = e.a.y / 60 * o, e.d.scale.y = e.a.y / 60 * a, s.updateTransform(), e.updateTransform(), l.transform.setFromMatrix((new PIXI.Matrix).append(e.a.transform.localTransform, s.transform.localTransform));
                            let t = new PIXI.Matrix(1, 0, 0, 1, s.x, s.y);
                            t.rotate(e.a.rotation), l.x += t.tx, l.y += t.ty
                        };
                    c.ticker.add(r);
                    let s = new PIXI.Sprite(he["Sprites/BodiesCostume_september2024"][26]);
                    e.a.addChild(s), s.anchor.set(.5, .5), s.x = e.a.i.x, s.y = e.a.i.y, console.log(s.transform);
                    let l = new PIXI.Sprite(he["Sprites/BodiesCostume_september2024"][25]);
                    e.addChild(l), l.anchor.set(.5, .5), e.sortableChildren = !0, e.a.sortableChildren = !0, l.zIndex = -1, s.zIndex = e.a.i.zIndex + 1, e.a.j.zIndex = e.a.i.zIndex + 2, e.a.k.zIndex = e.a.i.zIndex + 2, setTimeout((function() {
                        e.a.j.lockLayerPosition = !0, e.a.k.lockLayerPosition = !0
                    }), 100), e.a.j.layerOffset = {
                        x: 6,
                        y: -20
                    }, e.a.k.layerOffset = {
                        x: -6,
                        y: -20
                    }, e.destroyCostume = function() {
                        e.a.static = !1, e.b.static = !1, e.c.static = !1, e.d.static = !1, e.a.destroyPhysics(), c.ticker.remove(r), s.destroy(), l.destroy()
                    }
                },
                applyMinigame: function(e, t, i) {
                    if (G.none.apply(e, t), N(e.a.i, 27, "september2024"), 1 != t ? (z(e.b, "Sprites/Empty"), z(e.c, "Sprites/Empty"), "level" != i && "levelLayer2" != i && (e.tearDrop.sortableChildren = !0, e.a.j.zIndex = e.a.i.zIndex + 2, e.a.k.zIndex = e.a.i.zIndex + 2)) : e.a.j.layerOffset = {
                            x: 0,
                            y: -10
                        }, "tennis" == i) {
                        let t = {
                            x: e.tearDrop.x,
                            y: e.tearDrop.y
                        };
                        e.tearDrop.x -= 5, e.tearDrop.y -= 8, e.a.k.layerOffset = {
                            x: 0,
                            y: -10
                        }, U(e.tearDrop, t), e.tearDrop.destroyCostume = function() {
                            e.tearDrop.destroyPhysics()
                        }
                    }
                }
            },
            waffle: {
                name: "Waffle Drop",
                sprite: 38,
                cost: 1200,
                owned: !1,
                color: 4949483,
                amountOfVotes: 112,
                drawnBy: O.zxcubed,
                artist: O.hbzisback,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 28, "september2024");
                    let i = new PIXI.AnimatedSprite(he["Sprites/Limbs"]);
                    i.gotoAndStop(8), e.a.addChild(i), e.a.sortableChildren = !0, i.zIndex = -2;
                    let n = new PIXI.AnimatedSprite(he["Sprites/Limbs"]);
                    n.gotoAndStop(8), e.a.addChild(n), n.zIndex = -2;
                    let o = function() {
                        e.a.k.updateTransform(), n.transform.setFromMatrix(e.a.k.transform.localTransform), n.x = e.a.k.x + 8, n.y = e.a.k.y + 10, n.skew.x += .5, n.skew.y -= .5, n.gotoAndStop(e.a.k.currentFrame), n.pivot.set(e.a.k.pivot.x, e.a.k.pivot.y), e.a.j.updateTransform(), i.transform.setFromMatrix(e.a.j.transform.localTransform), i.x = e.a.j.x - 8, i.y = e.a.j.y + 10, i.skew.x -= .5, i.skew.y += .5, i.gotoAndStop(e.a.j.currentFrame), i.pivot.set(e.a.j.pivot.x, e.a.j.pivot.y)
                    };
                    c.ticker.add(o), e.destroyCostume = function() {
                        c.ticker.remove(o), i.destroy(), n.destroy()
                    }
                },
                applyMinigame: function(e, t, i) {
                    if (G.none.apply(e, t, i, !0), N(e.a.i, 28, "september2024"), "levelLayer2" == i) return;
                    let n = new PIXI.AnimatedSprite(he["Sprites/Limbs"]);
                    n.gotoAndStop(8);
                    let o = new PIXI.AnimatedSprite(he["Sprites/Limbs"]);

                    function a(e) {
                        e.rotation < 0 ? e.rotation += .5 : e.rotation -= .5
                    }
                    o.gotoAndStop(8), "faceMatch" == i || "level" == i ? (e.a.addChild(n), e.a.addChild(o)) : (e.tearDrop.addChild(n), e.tearDrop.addChild(o));
                    let r = function() {
                        e.a.k.updateTransform(), o.transform.setFromMatrix(e.a.k.transform.localTransform), o.gotoAndStop(e.a.k.currentFrame), o.pivot.set(e.a.k.pivot.x, e.a.k.pivot.y), e.a.j.updateTransform(), n.transform.setFromMatrix(e.a.j.transform.localTransform), "level" == i ? (o.x = p.linear(e.a.k.x, e.a.i.x, .2), o.y = e.a.k.y + 10, n.x = p.linear(e.a.j.x, e.a.i.x, .2), n.y = e.a.j.y + 10, a(n), a(o)) : (o.x = e.a.k.x + 8, o.y = e.a.k.y + 10, n.x = e.a.j.x - 8, n.y = e.a.j.y + 10, o.skew.x += .5, o.skew.y -= .5, n.skew.x -= .5, n.skew.y += .5), n.gotoAndStop(e.a.j.currentFrame), n.pivot.set(e.a.j.pivot.x, e.a.j.pivot.y)
                    };
                    c.ticker.add(r), "faceMatch" == i || "level" == i ? (e.sortableChildren = !0, e.destroyCostume = function() {
                        c.ticker.remove(r), n.destroy(), o.destroy()
                    }) : (e.tearDrop.sortableChildren = !0, e.tearDrop.destroyCostume = function() {
                        c.ticker.remove(r), n.destroy(), o.destroy()
                    }), e.a.sortableChildren = !0, n.zIndex = -2, o.zIndex = -2
                }
            },
            popdrop: {
                name: "Popdrop",
                sprite: 39,
                cost: 800,
                owned: !1,
                color: 8254719,
                amountOfVotes: 109,
                drawnBy: O.zxcubed,
                artist: O.pankocrash,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 30, "september2024")
                }
            },
            potiondrop: {
                name: "Potion Drop",
                sprite: 42,
                cost: 1500,
                owned: !1,
                color: 12891902,
                amountOfVotes: 81,
                artist: O.kaidkrazyest,
                drawnBy: O.flanimations,
                apply: function(e, t, n) {
                    G.none.apply(e, t), N(e.a.i, 53, "september2024");
                    let o = new PIXI.AnimatedSprite(he["Sprites/BodiesCostume_september2024"]);
                    o.blendMode = PIXI.BLEND_MODES.ADD;
                    let a = new PIXI.AnimatedSprite(he["Sprites/BodiesCostume_september2024"]);
                    e.a.i.addChild(a), e.a.i.addChild(o);
                    let r = new PIXI.Graphics;
                    a.mask = r, e.a.i.addChild(r);
                    let s = Math.floor(2763 * Math.random()),
                        l = i.happiness,
                        d = i.hunger,
                        h = i.sleep;

                    function u() {
                        let t = (Math.max(100, 125 - l) - 100) / 100,
                            n = (Math.max(100, 120 - d) - 100) / 100;
                        t = p.linear(t, 0, n);
                        let c = (Math.max(100, 120 - h) - 100) / 100;
                        n = p.linear(n, 0, 4 * c);
                        let u = {
                            r: 145 / 255 - t - c + n,
                            g: 70 / 255 + t - c - n,
                            b: 230 / 255
                        };
                        a.tint = new PIXI.Color([u.r, u.g, u.b]), o.gotoAndStop(e.a.i.currentFrame + 8), a.gotoAndStop(e.a.i.currentFrame + 10), r.clear(), r.beginFill(16777215);
                        let m = [600, 600, 200, 600];
                        for (let e = 0; e < 160; e++) m.push(200 + 2.5 * e), m.push(425 + (100 - d) / 8 + 2 * Math.cos(e / 10 + 4 * s) + 10 * Math.cos(e / 5 + s) * Math.cos(e / 30 + s) * Math.cos(e / 100 + s));
                        l = p.linear(l, i.happiness, .05, Qe), d = p.linear(d, i.hunger, .05, Qe), h = p.linear(h, i.sleep, .05, Qe), r.drawPolygon(...m), r.endFill(), s += Qe / 40 * (.4 + h / 100 * .6)
                    }
                    "levelLayer2" == n && (e.tearDrop.onNextFrame = function() {
                        o.gotoAndStop(e.a.i.currentFrame + 8), a.gotoAndStop(e.a.i.currentFrame + 10)
                    }), c.ticker.add(u);
                    let m = function() {
                        o.destroy(), a.destroy(), r.destroy(), c.ticker.remove(u)
                    };
                    "tennis" == n ? e.tearDrop.destroyCostume = m : "levelLayer2" == n ? e.tearDrop.destroyCostume2 = m : e.destroyCostume = m
                }
            },
            voiddrop: {
                name: "Void Drop",
                sprite: 41,
                cost: 2e3,
                owned: !1,
                color: 10456803,
                amountOfVotes: 87,
                drawnBy: O.dialup,
                artist: O.adxmz_vll,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 36, "september2024"), z(e.a.e, "Sprites/EyesCostume25"), z(e.a.f, "Sprites/EyesCostume25"), z(e.a.g, "Sprites/EyesCostume25"), z(e.a.h, "Sprites/EyesCostume25"), z(e.a.d, "Sprites/Empty");
                    let n = [e.a.e, e.a.f, e.a.g, e.a.h, e.a.d];
                    for (let e = 0; e < n.length; e++) n[e].layerOffset = {
                        x: 0,
                        y: 6
                    };
                    e.a.d.layerOffset = {
                        x: 0,
                        y: 4
                    }, e.a.static = !0, e.b.static = !0, e.c.static = !0, e.d.static = !0, z(e.b, "Sprites/Empty"), z(e.c, "Sprites/Empty");
                    let o = {
                        x: e.a.x,
                        y: e.a.y - 20
                    };
                    e.a.x = -10, e.a.y = -50, U(e.a, o);
                    let a = e.d.scale.x,
                        r = e.d.scale.y,
                        s = function() {
                            e.a.orbitSpeed = p.linear(e.a.orbitSpeed, i.sleeping ? .25 : 1, .01, Qe), e.d.x = e.a.x, e.d.scale.x = e.a.y / 60 * a, e.d.scale.y = e.a.y / 60 * r
                        };
                    c.ticker.add(s);
                    let l = [];
                    for (let e = 37; e < 53; e++) l.push(he["Sprites/BodiesCostume_september2024"][e]);
                    let d = new PIXI.AnimatedSprite(l);
                    d.anchor.set(.5, .5), e.a.addChild(d), d.play(), d.animationSpeed = .4, d.x = e.a.i.x, d.y = e.a.i.y + 70, e.a.sortableChildren = !0, d.zIndex = -1, e.destroyCostume = function() {
                        e.a.static = !1, e.b.static = !1, e.c.static = !1, e.d.static = !1, e.a.destroyPhysics(), c.ticker.remove(s), d.destroy()
                    }
                },
                applyMinigame: function(e, t, i) {
                    G.none.apply(e, t), N(e.a.i, 36, "september2024"), z(e.a.e, "Sprites/EyesCostume25"), z(e.a.f, "Sprites/EyesCostume25"), z(e.a.g, "Sprites/EyesCostume25"), z(e.a.h, "Sprites/EyesCostume25"), z(e.a.d, "Sprites/Empty"), 1 != t && (z(e.b, "Sprites/Empty"), z(e.c, "Sprites/Empty"), "level" != i && "levelLayer2" != i && (e.tearDrop.sortableChildren = !0));
                    let n = [];
                    for (let e = 37; e < 53; e++) n.push(he["Sprites/BodiesCostume_september2024"][e]);
                    let o = new PIXI.AnimatedSprite(n);
                    o.anchor.set(.5, .5), "gtttatint" == i ? (e.tearDrop.addChild(o), o.x = e.tearDrop.x, o.y = e.tearDrop.y - 30, e.tearDrop.sortableChildren = !0, o.zIndex = -1) : "tennis" != i && "levelLayer2" != i || (e.tearDrop.addChild(o), e.tearDrop.sortableChildren = !0, o.zIndex = -1, o.y = -40, "tennis" == i && (e.a.k.lockLayerFrame = !0, e.tearDrop.onNextFrame = function() {
                        e.a.k.gotoAndStop(0)
                    })), o.play(), o.animationSpeed = .4;
                    let a = [e.a.e, e.a.f, e.a.g, e.a.h, e.a.d];
                    for (let e = 0; e < a.length; e++) a[e].layerOffset = {
                        x: 0,
                        y: 6
                    };
                    if (e.a.d.layerOffset = {
                            x: 0,
                            y: 4
                        }, "tennis" == i) {
                        let t = {
                            x: e.tearDrop.x,
                            y: e.tearDrop.y
                        };
                        e.tearDrop.x -= 5, e.tearDrop.y -= 8, e.a.k.layerOffset = {
                            x: 0,
                            y: -10
                        }, U(e.tearDrop, t), e.tearDrop.destroyCostume = function() {
                            e.tearDrop.destroyPhysics()
                        }
                    }
                }
            },
            mariposa: {
                name: "Mariposa Drop",
                sprite: 40,
                cost: 1200,
                owned: !1,
                color: 14981240,
                amountOfVotes: 124,
                artist: O.chaosticies,
                drawnBy: O.dialup,
                apply: function(e, t, i) {
                    "levelLayer2" != i && G.none.apply(e, t), N(e.a.i, 32, "september2024"), z(e.a.e, "Sprites/EyesCostume25"), z(e.a.f, "Sprites/EyesCostume25"), z(e.a.g, "Sprites/EyesCostume25"), z(e.a.h, "Sprites/EyesCostume25"), z(e.a.d, "Sprites/MouthsCostume25");
                    let n = [e.a.e, e.a.f, e.a.g, e.a.h, e.a.d];
                    for (let e = 0; e < n.length; e++) n[e].layerOffset = {
                        x: 0,
                        y: 8
                    }, n[e].tint = 16708557;
                    if (e.a.d.layerOffset = {
                            x: 0,
                            y: 4
                        }, "gtttatint" != i && "level" != i && "levelLayer2" != i && "tennis" != i) {
                        let t = new PIXI.AnimatedSprite(he["Sprites/BodiesCostume_september2024"]);
                        e.a.addChild(t);
                        let i = function() {
                            t.gotoAndStop(e.a.i.currentFrame + -13), e.a.i.updateTransform(), t.transform.setFromMatrix(e.a.i.transform.localTransform)
                        };
                        c.ticker.add(i), e.destroyCostume = function() {
                            c.ticker.remove(i), t.destroy()
                        }
                    }
                    if ("levelLayer2" == i && (e.tearDrop.a.sortableChildren = !0, e.tearDrop.a.i2.zIndex = e.a.i.zIndex + 6, e.tearDrop.a.j.zIndex = e.a.i.zIndex + 1), "gtttatint" == i || "level" == i) {
                        let t = new PIXI.AnimatedSprite(he["Sprites/BodiesCostume_september2024"]);
                        "gtttatint" == i ? e.tearDrop.a_.addChild(t) : e.a.addChild(t), t.anchor.set(.5, .5), t.startInterpolation = !0;
                        let n = function() {
                            t.gotoAndStop(e.a.i.currentFrame + -13), "level" == i ? (e.a.i2.inactive ? t.zIndex = e.a.i.zIndex + 5 : (t.zIndex = e.a.i.zIndex + 6, e.a.j.zIndex = e.a.i.zIndex + 5), t.skew.x = 0, t.y = 80, t.x = p.linear(t.x, e.a.h.inactive ? -10 : e.a.h.x + 20, t.startInterpolation ? 1 : .2, Qe), t.startInterpolation = !1, t.scale.x = .5 + Math.cos((t.x - 40) / Math.PI / 15) / 2, t.skew.x = t.x / 200 - .25, t.skew.y = .25 - t.x / 200) : (t.x = p.linear(t.x, e.a.h.inactive ? -10 : .75 * e.a.h.x + 10, .2, Qe), t.scale.x = .1 + Math.cos((t.x - 10) / Math.PI / 15), t.skew.x = t.x / 200)
                        };
                        c.ticker.add(n), e.destroyCostume = function() {
                            c.ticker.remove(n), t.destroy()
                        }
                    }
                    if ("tennis" == i) {
                        let t = new PIXI.AnimatedSprite(he["Sprites/BodiesCostume_september2024"]);
                        t.gotoAndStop(34), e.tearDrop.addChild(t), e.tearDrop.onNextFrame = function() {
                            e.a.i.updateTransform(), t.transform.setFromMatrix(e.a.i.transform.localTransform)
                        }, e.tearDrop.destroyCostume = function() {
                            e.tearDrop.onNextFrame = function() {}, t.destroy()
                        }
                    }
                }
            },
            snowdrop: {
                name: "Snow Drop",
                sprite: 43,
                cost: 400,
                owned: !1,
                color: 13492979,
                artist: O.vendormint,
                limited: !0,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 59, "1"), z(e.a.e, "Sprites/EyesCostume44"), z(e.a.f, "Sprites/EyesCostume44"), z(e.a.g, "Sprites/EyesCostume44"), z(e.a.h, "Sprites/EyesCostume44"), z(e.a.d, "Sprites/MouthsCostume44"), e.a.g.layerOffset = {
                        x: 0,
                        y: 5
                    }, e.a.h.layerOffset = {
                        x: 0,
                        y: 5
                    }
                }
            },
            dinodrop: {
                name: "Dino Drop!",
                sprite: 44,
                cost: 1200,
                owned: !1,
                color: 10679219,
                artist: O.gokci,
                apply: function(e, t, i) {
                    G.none.apply(e, t), N(e.a.i, 61, "1");
                    let n = new PIXI.Sprite(he["Sprites/BodiesCostume_1"][63]);
                    R(n, e.a, 0, .95, 20), n.x = 85, n.y = 120, n.zIndex = -1, e.a.sortableChildren = !0, e.destroyCostume = function() {
                        n.destroyPhysics()
                    };
                    let o = [e.a.e, e.a.f, e.a.g, e.a.h, e.a.d];
                    for (let e = 0; e < o.length; e++) o[e].layerOffset = {
                        x: 0,
                        y: 6
                    };
                    e.a.d.layerOffset = {
                        x: 0,
                        y: 4
                    }
                },
                applyMinigame: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 64, "1");
                    let i = [e.a.e, e.a.f, e.a.g, e.a.h, e.a.d];
                    for (let e = 0; e < i.length; e++) i[e].layerOffset = {
                        x: 0,
                        y: 6
                    };
                    e.a.d.layerOffset = {
                        x: 0,
                        y: 4
                    }
                }
            },
            _td_costume7: {
                name: "Mistletoe!",
                artist: O.teardrop,
                sprite: 45,
                cost: 100,
                owned: !1,
                limited: !0,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 0, "christmas2024")
                }
            },
            snowglobe: {
                name: "Snowglobe Drop",
                sprite: 46,
                cost: 1200,
                owned: !1,
                color: 8909567,
                amountOfVotes: 81,
                artist: O.adxmz_vll,
                limited: !0,
                apply: function(e, t, n) {
                    G.none.apply(e, t), z(e.a.j, "Sprites/Empty"), z(e.a.k, "Sprites/Empty"), N(e.a.i, 2, "christmas2024");
                    let o = [e.a.e, e.a.f, e.a.g, e.a.h, e.a.d];
                    for (let e = 0; e < o.length; e++) o[e].layerOffset = {
                        x: 0,
                        y: 8
                    };
                    e.a.d.layerOffset = {
                        x: 0,
                        y: 4
                    };
                    let a = new PIXI.AnimatedSprite(he["Sprites/BodiesCostume_christmas2024"]);
                    e.a.i.addChild(a);
                    let r = new PIXI.Graphics;
                    a.mask = r, e.a.i.addChild(r);
                    let s = Math.floor(2763 * Math.random()),
                        l = (i.happiness, i.hunger, i.sleep);
                    "levelLayer2" == n && a.gotoAndStop(4);
                    let d = [],
                        h = function(e = !1) {
                            return {
                                x: 400 + 100 * (Math.random() - .5),
                                y: e ? 300 : 367.5 + 140 * (Math.random() - .5),
                                size: 1 + 1 * Math.random(),
                                speed: .5 + .5 * Math.random(),
                                horizontalSpeed: Math.random() - .5
                            }
                        };
                    for (let e = 0; e < 100; e++) d.push(h(!1));

                    function p() {
                        a.tint = 16777215, "levelLayer2" != n && a.gotoAndStop(Math.max(0, e.a.i.currentFrame + -43)), r.clear(), r.beginFill(16777215);
                        for (let e = 0; e < d.length; e++) d[e].y += d[e].speed, d[e].x += Math.cos(s + 2 * d[e].speed) * d[e].speed / 4, r.drawCircle(d[e].x, d[e].y, d[e].size), d[e].y > 435 && (d[e] = h(!0));
                        r.endFill(), s += Qe / 40 * (.4 + l / 100 * .6)
                    }
                    c.ticker.add(p);
                    let u = function() {
                        a.destroy(), r.destroy(), c.ticker.remove(p)
                    };
                    "tennis" == n ? e.tearDrop.destroyCostume = u : "levelLayer2" == n ? e.tearDrop.destroyCostume2 = u : e.destroyCostume = u
                }
            },
            snowflake: {
                name: "Snowflake Drop",
                sprite: 47,
                artist: O.frostthesleepyone,
                cost: 800,
                owned: !1,
                limited: !0,
                color: 7992566,
                apply: function(e, t) {
                    G.none.apply(e, t), z(e.a.d, "Sprites/Empty"), N(e.a.i, 6, "christmas2024")
                }
            },
            treedrop: {
                name: "Tree Drop",
                sprite: 48,
                artist: {
                    name: O.chaosticies.shortName + ", " + O.dopozy.name
                },
                cost: 1200,
                owned: !1,
                limited: !0,
                color: 56132,
                apply: function(e, t, i) {
                    G.none.apply(e, t), N(e.a.i, 8, "christmas2024");
                    let n = [e.a.e, e.a.f, e.a.g, e.a.h, e.a.d];
                    for (let e = 0; e < n.length; e++) n[e].layerOffset = {
                        x: 0,
                        y: 8
                    };
                    e.a.d.layerOffset = {
                        x: 0,
                        y: 4
                    };
                    let o = new PIXI.AnimatedSprite(he["Sprites/BodiesCostume_christmas2024"]);
                    o.blendMode = PIXI.BLEND_MODES.ADD, e.a.i.addChild(o), o.gotoAndStop(10), o.alpha = .5;
                    let a = [
                            [10, 11],
                            [12, 13],
                            [14, 15, 16, 17, 11]
                        ],
                        r = 0,
                        s = 0,
                        l = 4,
                        d = Date.now(),
                        h = Date.now(),
                        p = function() {
                            h < d && (h = Date.now() + 250, o.gotoAndStop(a[r][s]), s++, a[r].length <= s && (s = 0, l--, 0 == l && (l = 2, r++, r >= a.length && (r = 0)))), d = Date.now()
                        };
                    c.ticker.add(p);
                    let u = function() {
                        o.destroy(), c.ticker.remove(p)
                    };
                    "tennis" == i ? e.tearDrop.destroyCostume = u : "levelLayer2" == i ? e.tearDrop.destroyCostume2 = u : e.destroyCostume = u
                }
            },
            _td_costume8: {
                name: "TEARSHARK!!!",
                sprite: 114,
                cost: 1000,
                owned: !1,
                color: 15163321,
                limited: !0,
                artist: O.teardrop,
                apply: function(e, t) {
					G.none.apply(e, t), N(e.a.i, 65);
					let i = new PIXI.AnimatedSprite(he["Sprites/BodiesCostume_1"]);
					e.a.addChild(i), i.gotoAndStop(67), i.anchor.set(.5, .5), i.x = e.a.i.x, i.y = e.a.i.y, i.zIndex = 10, z(e.a.j, "Sprites/LimbsCostume50"), z(e.a.k, "Sprites/LimbsCostume50"), z(e.b, "Sprites/LimbsCostume50"), z(e.c, "Sprites/LimbsCostume50");
					let n = [e.a.j, e.a.k, e.b, e.c];
					for (let e = 0; e < n.length; e++) n[e].scaleOffset = {
						x: 1.1,
						y: 1
					};
					e.onNextFrame = function() {
						48 == e.a.i.currentFrame ? i.gotoAndStop(68) : i.gotoAndStop(67), 8 == e.a.j.currentFrame && e.a.j.scale.x > 0 && (e.a.j.scale.x *= -1)
					};
					let a = new PIXI.Sprite(he["Sprites/BodiesCostume_1"][69]);
					R(a, e.a, 0, .9, 20), a.x = 95, a.y = 130, a.zIndex = -1, e.a.sortableChildren = !0, e.destroyCostume = function() {
						a.destroyPhysics(), i.destroy()
					};
					let o = [e.a.e, e.a.f, e.a.g, e.a.h, e.a.d];
					for (let e = 0; e < o.length; e++) o[e].layerOffset = {
						x: -2,
						y: 15
					}, o[e].scaleOffset = {
						x: .95,
						y: .9
					};
					e.a.g.layerOffset = {
						x: -4,
						y: 15
					}, e.a.e.layerOffset = {
						x: -4,
						y: 15
					}, e.a.d.layerOffset = {
						x: -3,
						y: 8
					}, e.a.d.scaleOffset = {
						x: .8,
						y: .8
					}, e.a.layerOffset = {
						x: 0,
						y: 5
					}
				},
				applyMinigame: function(e, t, i) {
					G.none.apply(e, t), N(e.a.i, 70), z(e.a.j, "Sprites/LimbsCostume50"), z(e.a.k, "Sprites/LimbsCostume50"), "faceMatch" != i ? (z(e.b, "Sprites/LimbsCostume50"), z(e.c, "Sprites/LimbsCostume50")) : z(e.a.c, "Sprites/LimbsCostume50");
					let n = [e.a.e, e.a.f, e.a.g, e.a.h, e.a.d];
					for (let e = 0; e < n.length; e++) n[e].layerOffset = {
						x: 0,
						y: 15
					}, n[e].scaleOffset = {
						x: .95,
						y: .9
					}, "gtttatint" == i && (n[e].scaleOffset = {
						x: 1,
						y: .9
					});
					e.a.g.layerOffset = {
						x: 0,
						y: 15
					}, e.a.e.layerOffset = {
						x: 0,
						y: 15
					}, e.a.d.layerOffset = {
						x: 0,
						y: 8
					}, e.a.d.scaleOffset = {
						x: .8,
						y: .8
					}, e.a.layerOffset = {
						x: 0,
						y: 5
					}
				}
            },
            _td_costume9: {
                name: "Love Syrup!",
                sprite: 115,
                cost: 1432,
                owned: !1,
                limited: !0,
                color: 15163321,
                artist: O.teardrop,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 71);
                    let i = new PIXI.Sprite(he["Sprites/BodiesCostume_1"][73]);
                    R(i, e.a, 0, .95, 20), i.x = 15, i.y = 120, i.zIndex = -1, i.scale.x = -1;
                    let n = new PIXI.Sprite(he["Sprites/BodiesCostume_1"][73]);
                    R(n, e.a, 0, .95, 20), n.x = 110.5, n.y = 120, n.zIndex = -1, e.a.sortableChildren = !0, i.scale.x = -1.1, i.scale.y = 1.1, n.scale.x = 1.1, n.scale.y = 1.1, e.destroyCostume = function() {
                        n.destroyPhysics(), i.destroyPhysics()
                    };
					let a = [e.a.e, e.a.f, e.a.g, e.a.h, e.a.d];
					for (let e = 0; e < a.length; e++) a[e].layerOffset = {
						x: 0,
						y: 8
					}, a[e].tint = 16765941;
					e.a.d.layerOffset = {
						x: 0,
						y: 4
					}
                },
                applyMinigame: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 74);
					let i = [e.a.e, e.a.f, e.a.g, e.a.h, e.a.d];
					for (let e = 0; e < i.length; e++) i[e].layerOffset = {
						x: 0,
						y: 8
					};
					e.a.d.layerOffset = {
						x: 0,
						y: 4
					}
                }
            },
            pandrop: {
                name: "Pandrop",
                sprite: 51,
                cost: 800,
                owned: !1,
                color: 15446392,
                artist: O.teardrop,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 75, "1");
                    let i = [e.a.e, e.a.f, e.a.g, e.a.h, e.a.d];
                    for (let e = 0; e < i.length; e++)
                        i[e].layerOffset = {
                            x: 0,
                            y: 8
                        };
                    e.a.d.layerOffset = {
                        x: 0,
                        y: 4
                    },
                    e.a.d.scaleOffset = {
                        x: .9,
                        y: .95
                    }
                }
            },
            testdrop: {
                name: "Stopwatch Drop",
                sprite: 64,
                cost: -1,
                achievement: "true5minuteGTTTATINT",
                owned: !1,
                color: 6513507,
                artist: O.joopter,
                apply: function(e, t, i) {
                    G.none.apply(e, t), N(e.a.i, 2, "NEC1"), z(e.a.d, "Sprites/MouthsCostume25"), z(e.a.h, "Sprites/EyesCostume25"), z(e.a.g, "Sprites/EyesCostume25"), z(e.a.f, "Sprites/EyesCostume25"), z(e.a.e, "Sprites/EyesCostume25");
                    let n = [e.a.e, e.a.f, e.a.g, e.a.h, e.a.d];
                    if ("tennis" == i) {
                        for (let e = 0; e < n.length; e++) n[e].layerOffset = {
                            x: 0,
                            y: 10
                        };
                        e.a.d.layerOffset = {
                            x: 0,
                            y: 8
						}
                    } else if ("faceMatch" == i) {
                        for (let e = 0; e < n.length; e++) n[e].layerOffset = {
                            x: 0,
                            y: 10
                        };
                        e.a.d.layerOffset = {
                            x: 0,
                            y: 8
						}
                    } else {
                        for (let e = 0; e < n.length; e++) n[e].layerOffset = {
                            x: 0,
                            y: 10
                        };
                        e.a.d.layerOffset = {
                            x: 0,
                            y: 8
                        }
                    }
                }
            },
            toonsterdrop: {
                name: "Yellow Magician Drop",
                sprite: 134,
                cost: 750,
                owned: !1,
                color: 2170428,
                artist: O.toonster,
                drawnBy: O.stevencrack,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 60, "NEC1")
                }
            },
            paintdrop: {
                name: "Paintdrop",
                sprite: 115,
                cost: 650,
                owned: !1,
                artist: O.galilemonade,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 0, "NEC1")
                }
            },
            dreamdrop: {
                name: "Dream Drop",
                sprite: 124,
                cost: 1000,
                owned: !1,
                color: 7239608,
                artist: O.grimchan67,
                limited: !0,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 62, "NEC1")
                }
            },
            bubbledrop: {
                name: "BubbleDrop",
                sprite: 62,
                cost: 500,
                owned: !1,
                color: 11130879,
                artist: O.tubulartoque,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 16, "NEC1")
                }
            },
            baloondrop: {
                name: "Balloon Drop",
                sprite: 125,
                cost: 600,
                owned: !1,
                color: 16740718,
                artist: O.kaidkrazyest,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 34, "NEC1"), z(e.a.j, "Sprites/Empty"), z(e.a.k, "Sprites/Empty")
                },
                applyMinigame: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 34, "NEC1"), z(e.a.j, "Sprites/Empty"), z(e.a.k, "Sprites/Empty")
                }
            },
            goodrop: {
                name: "GooDrop",
                sprite: 126,
                cost: 350,
                owned: !1,
                color: 63999,
                artist: {
					name: O.thinking909.name + ", " + O.dopozy.name
				},
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 32, "NEC1"), z(e.a.d, "Sprites/MouthsCostume10");
                }
            },
            weezerbluealbumdrop: {
                name: "WeezerDrop",
                sprite: 127,
                cost: 1320,
                owned: !1,
                color: 28878,
                artist: O.stevencrack,
                apply: function(e, t, i) {
                    G.none.apply(e, t), N(e.a.i, 6, "NEC1"), z(e.a.e, "Sprites/EyesCostume25"), z(e.a.f, "Sprites/EyesCostume25"), z(e.a.g, "Sprites/EyesCostume25"), z(e.a.h, "Sprites/EyesCostume25"), z(e.a.d, "Sprites/MouthsCostume25");
                }
            },
            literallyleafy: {
                name: "Leafy from Battle For Dream Island",
                sprite: 128,
                cost: 2763,
                owned: !1,
                color: 6217988,
                artist: O.jacknjellify,
                apply: function(e, t, i) {
                    G.none.apply(e, t), N(e.a.i, 8, "NEC1");
					let n = [e.a.e, e.a.f, e.a.g, e.a.h, e.a.d, e.a.i, e.a.j, e.a.k];
					if ("tennis" == i) {
                        for (let e = 0; e < n.length; e++) n[e].layerOffset = {
							x: 0,
                            y: -9
                        }
                    } else if ("faceMatch" == i) {
                        for (let e = 0; e < n.length; e++) n[e].layerOffset = {
							x: 0,
                            y: -9
                        }
                    } else {
                        for (let e = 0; e < n.length; e++) n[e].layerOffset = {
							x: 0,
                            y: -9
                        }
                    }
                }
            },
            gingerdrop: {
                name: "GingerDrop",
                achievement: "masterofcakewalk",
				secret: !0,
                sprite: 129,
                cost: -1,
                owned: !1,
                color: 13927991,
                artist: {
					name: O.thinking909.name + ", " + O.dopozy.name
				},
                apply: function(e, t, i) {
                    G.none.apply(e, t), N(e.a.i, 53, "NEC1"), z(e.a.e, "Sprites/EyesCostume25"), z(e.a.f, "Sprites/EyesCostume25"), z(e.a.g, "Sprites/EyesCostume25"), z(e.a.h, "Sprites/EyesCostume25"), z(e.a.d, "Sprites/MouthsCostume25");
                }
            },
            nonexisty: {
                name: "Nonexisty",
                sprite: -1,
                cost: 1000,
                owned: !1,
                color: 0,
                apply: function(e, t, i) {
                    G.none.apply(e, t), N(e.a.i, 14, "NEC2"), z(e.a.d, "Sprites/Empty"), z(e.a.h, "Sprites/Empty"), z(e.a.g, "Sprites/Empty"), z(e.a.f, "Sprites/Empty"), z(e.a.e, "Sprites/Empty"), z(e.a.j, "Sprites/Empty"), z(e.a.k, "Sprites/Empty"), z(e.c, "Sprites/Empty"), z(e.b, "Sprites/Empty");
                },
				// This thing is partially supported because Face Match crashes without this
				applyMinigame: function(e, t, i) {
                    if (G.none.apply(e, t), N(e.a.i, 14, "NEC2"), 1 != t ? (z(e.b, "Sprites/Empty"), z(e.c, "Sprites/Empty"), z(e.a.k, "Sprites/Empty"), z(e.a.j, "Sprites/Empty"), z(e.a.e, "Sprites/Empty"), z(e.a.f, "Sprites/Empty"), z(e.a.g, "Sprites/Empty"), z(e.a.h, "Sprites/Empty"), z(e.a.d, "Sprites/Empty"), "level") : e.a.j.layerOffset = {
                            x: 0,
                            y: -10
                        }, "tennis" == i) {
                        let t = {
                            x: e.tearDrop.x,
                            y: e.tearDrop.y
                        };
                        e.tearDrop.x -= 5, e.tearDrop.y -= 8, e.a.k.layerOffset = {
                            x: 0,
                            y: -10
                        }, U(e.tearDrop, t), e.tearDrop.destroyCostume = function() {
                            e.tearDrop.destroyPhysics()
                        }
                    }
                }
            },
            testdrop2: {
                name: "Circle",
                sprite: 63,
                cost: 3141,
                owned: !1,
                color: 16777215,
                artist: O.joopter,
                apply: function(e, t, i) {
                    G.none.apply(e, t), N(e.a.i, 64, "NEC1");
					let n = [e.a.e, e.a.f, e.a.g, e.a.h, e.a.d, e.a.j, e.a.k];
					if ("tennis" == i) {
                        for (let e = 0; e < n.length; e++) n[e].layerOffset = {
                            x: 0,
                            y: -15
                        };
						e.a.j.layerOffset = {
							x: -10,
							y: 0
						};
						e.a.k.layerOffset = {
							x: 10,
							y: 0
						}
                    } else if ("faceMatch" == i) {
                        for (let e = 0; e < n.length; e++) n[e].layerOffset = {
                            x: 0,
                            y: -15
                        };
						e.a.j.layerOffset = {
							x: 10,
							y: 0
						};
						e.a.k.layerOffset = {
							x: -10,
							y: 0
						}
                    } else {
                        for (let e = 0; e < n.length; e++) n[e].layerOffset = {
                            x: 0,
                            y: -15
                        };
						e.a.j.layerOffset = {
							x: 10,
							y: 0
						};
						e.a.k.layerOffset = {
							x: -10,
							y: 0
						}
                    }
                }
            },
            lazerdrop: {
                name: "Lazerdrop",
                sprite: 68,
                cost: 800,
                owned: !1,
                color: 12113151,
                artist: {
                    name: O.marker2014.name + ", " + O.dopozy.name
				},
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 72, "NEC1"), z(e.c, "Sprites/Empty"), z(e.b, "Sprites/Empty"), e.a.static = !0, e.b.static = !0, e.c.static = !0, e.d.static = !0, z(e.a.e, "Sprites/EyesCostume25"), z(e.a.f, "Sprites/EyesCostume25"), z(e.a.g, "Sprites/EyesCostume25"), z(e.a.h, "Sprites/EyesCostume25"), z(e.a.d, "Sprites/MouthsCostume25");
					
					let LQ = new PIXI.Sprite(he["Sprites/BodiesCostume_NEC3"][4]);
                    R(LQ, e, 0, 0, 20), LQ.x = 0, LQ.y = -95, LQ.zIndex = 10, e.a.sortableChildren = !0, e.destroyCostume = function() {
                        LQ.destroyPhysics()
                    };
					
					let n = {
                        x: e.a.x,
                        y: e.a.y - 20
                    };
                    e.a.x = -10, e.a.y = -50, U(e.a, n);
                    let o = 1.5 * e.d.scale.x,
                        a = e.d.scale.y,
                        r = function() {
                            e.a.orbitSpeed = p.linear(e.a.orbitSpeed, i.sleeping ? .25 : 1, .01, Qe), e.d.x = e.a.x, e.d.scale.x = e.a.y / 60 * o, e.d.scale.y = e.a.y / 60 * a, s.updateTransform(), e.updateTransform(), l.transform.setFromMatrix((new PIXI.Matrix).append(e.a.transform.localTransform, s.transform.localTransform));
                            let t = new PIXI.Matrix(1, 0, 0, 1, s.x, s.y);
                            t.rotate(e.a.rotation), l.x += t.tx, l.y += t.ty
                        };
                    c.ticker.add(r);
                    let s = new PIXI.Sprite(he["Sprites/Empty"][26]);
                    e.a.addChild(s), s.anchor.set(.5, .5), s.x = e.a.i.x, s.y = e.a.i.y, console.log(s.transform);
                    let l = new PIXI.Sprite(he["Sprites/Empty"][25]);
                    e.addChild(l), l.anchor.set(.5, .5), e.sortableChildren = !0, e.a.sortableChildren = !0, l.zIndex = -1, s.zIndex = e.a.i.zIndex + 1, e.a.j.zIndex = e.a.i.zIndex + 2, e.a.k.zIndex = e.a.i.zIndex + 2, setTimeout((function() {
                        e.a.j.lockLayerPosition = !0, e.a.k.lockLayerPosition = !0
                    }), 100), e.a.j.layerOffset = {
                        x: 6,
                        y: -20
                    }, e.a.k.layerOffset = {
                        x: -6,
                        y: -20
                    }, e.destroyCostume = function() {
                        e.a.static = !1, e.b.static = !1, e.c.static = !1, e.d.static = !1, e.a.destroyPhysics(), c.ticker.remove(r), s.destroy(), l.destroy(), LQ.destroyPhysics()
                    }
                },
                applyMinigame: function(e, t, i) {
                    if (G.none.apply(e, t), N(e.a.i, 72, "NEC1"), z(e.a.e, "Sprites/EyesCostume25"), z(e.a.f, "Sprites/EyesCostume25"), z(e.a.g, "Sprites/EyesCostume25"), z(e.a.h, "Sprites/EyesCostume25"), z(e.a.d, "Sprites/MouthsCostume25"), 1 != t ? (z(e.b, "Sprites/Empty"), z(e.c, "Sprites/Empty"), "level" != i && "levelLayer2" != i && (e.tearDrop.sortableChildren = !0, e.a.j.zIndex = e.a.i.zIndex + 2, e.a.k.zIndex = e.a.i.zIndex + 2)) : e.a.j.layerOffset = {
                            x: 0,
                            y: -10
                        }, "tennis" == i) {
                        let t = {
                            x: e.tearDrop.x,
                            y: e.tearDrop.y
                        };
                        e.tearDrop.x -= 5, e.tearDrop.y -= 8, e.a.k.layerOffset = {
                            x: 0,
                            y: -10
                        }, U(e.tearDrop, t), e.tearDrop.destroyCostume = function() {
                            e.tearDrop.destroyPhysics()
                        }
						}
                }
            },
			twiddledrop: {
                name: "Twiddledrop",
                sprite: 130,
                cost: -1,
                owned: !1,
                color: 9532002,
                artist: O.bootheghost64,
				achievement: "vanillacomplete",
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 10, "NEC1");
					let n = [e.a.e, e.a.f, e.a.g, e.a.h, e.a.d, e.a.j, e.a.k];
					for (let e = 0; e < n.length; e++) n[e].layerOffset = {
                            x: 0,
                            y: 10
                        };
						e.a.d.layerOffset = {
							x: 0,
							y: 15
						};
					
                }
            },
			stonedropbps: {
                name: "Stonedrop",
                sprite: 131,
                cost: 650,
                owned: !1,
                color: 9475222,
                artist: O.iamstonebone,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 43, "NEC1")
                }
            },
			placeholderdropbps: {
                name: "Placeholderdrop",
                sprite: 132,
                cost: 404,
                owned: !1,
                color: 14211288,
                artist: O.iamstonebone,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 51, "NEC1"), z(e.a.h, "Sprites/Empty"), z(e.a.g, "Sprites/Empty"), z(e.a.d, "Sprites/Empty")
                }
            },
			beerdropbps: {
                name: "Beerdrop",
                sprite: 133,
                cost: 700,
                owned: !1,
                color: 15851584,
                artist: O.iamstonebone,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 47, "NEC1")
                }
            },
			stardrop: {
                name: "Stardrop",
                sprite: 65,
                cost: 750,
                owned: !1,
                color: 15391097,
                artist: O.xmuao,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 12, "NEC1")
                }
            },
			fairyteardrop: {
                name: "Fairy Teardrop",
                sprite: 67,
                cost: 250,
                owned: !1,
                color: 16745703,
                artist: O.toonster,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 66, "NEC1")
                }
            },
			lightbulbdrop: {
                name: "Lightbulbdrop",
                sprite: 66,
                cost: 700,
                owned: !1,
                color: 16252306,
                artist: {
					name: O.toonster.name + ", " + O.itlsu.name
				},
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 68, "NEC1")
					let n = [e.a.e, e.a.f, e.a.g, e.a.h, e.a.d, e.a.j, e.a.k];
					for (let e = 0; e < n.length; e++) n[e].layerOffset = {
                            x: 0,
                            y: -10
                        };
						e.a.j.layerOffset = {
							x: 0,
							y: -10
						};
						e.a.k.layerOffset = {
							x: 0,
							y: -10
						}
                }
            },
            testdrop3: {
                name: "Capetest",
                sprite: 0,
                cost: 0,
                owned: !1,
				limited: !0,
                color: 0,
                artist: O.teardrop,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 0, "NEC3");
					let n = new PIXI.Sprite(he["Sprites/BodiesCostume_NEC3"][2]);
                    R(n, e.a, 0, 0, 20), n.x = 70, n.y = 70, n.zIndex = -2, e.a.sortableChildren = !0, e.destroyCostume = function() {
                        n.destroyPhysics()
                    }
                },
                applyMinigame: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 3, "NEC3")
                }
            },
            justoyui: {
                name: "Oyui",
                sprite: 81,
                cost: 811,
                owned: !1,
                color: 16739174,
                artist: {
					name: O.thinking909.name + ", " + O.stevencrack.name
				},
                drawnBy: O.stevencrack,
				apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 70, "NEC1"), z(e.a.k, "Sprites/Empty"), z(e.a.j, "Sprites/Empty");
					let n = [e.a.e, e.a.f, e.a.g, e.a.h, e.a.d];
					for (let e = 0; e < n.length; e++) n[e].layerOffset = {
                            x: 0,
                            y: 10
                        };
                }
            },
            chartdrop: {
                name: "ChartDrop",
                sprite: 73,
                cost: -1,
                owned: !1,
                color: 16739174,
                artist: {
                    name: O.joopter.name + ", " + O.dopozy.name
				},
				achievement: "alleconomiccollapseachievements",
				apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 18, "NEC1"), z(e.a.e, "Sprites/EyesCostume25"), z(e.a.f, "Sprites/EyesCostume25"), z(e.a.g, "Sprites/EyesCostume25"), z(e.a.h, "Sprites/EyesCostume25"), z(e.a.d, "Sprites/MouthsCostume25");
					let re = new PIXI.Sprite(he["Sprites/BodiesCostume_NEC1"][74]);
                    R(re, e.a, 0, 0.95, 20), re.x = 50, re.y = 180, re.zIndex = -2;
					let gr = new PIXI.Sprite(he["Sprites/BodiesCostume_NEC1"][75]);
                    R(gr, e.a, 0, 0.95, 10), gr.x = 55, gr.y = 105, gr.zIndex = -3;
					let gra = new PIXI.Sprite(he["Sprites/BodiesCostume_NEC1"][76]);
                    R(gra, e.a, 0, 0.5, 10), gra.x = 120, gra.y = 205, gra.zIndex = -4, gra.scale.y = 2, gra.scale.x = 2, e.a.sortableChildren = !0, e.destroyCostume = function() {
                        gr.destroyPhysics(),
						gra.destroyPhysics(),
						re.destroyPhysics()
                    }
                },
				applyMinigame: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 77, "NEC1"), z(e.a.e, "Sprites/EyesCostume25"), z(e.a.f, "Sprites/EyesCostume25"), z(e.a.g, "Sprites/EyesCostume25"), z(e.a.h, "Sprites/EyesCostume25"), z(e.a.d, "Sprites/MouthsCostume25");
                }
            },
            yinyang: {
                name: "Yin Yang Drop",
                sprite: 70,
                cost: 1000,
                owned: !1,
                color: 0,
                artist: O.thinking909,
				apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 26, "NEC1"), z(e.a.f, "Sprites/EyesCostume25"), z(e.a.h, "Sprites/EyesCostume25")
                }
            },
            moddedcoladrop: {
                name: "Old Cola Drop",
                sprite: 69,
                cost: 1499,
                owned: !1,
                color: 8737368,
                artist: O.dopozy,
				apply: function(e, t = 0) {
                    let i;
                    switch (G.none.apply(e, t), t) {
                        case 0:
                            i = [e.b, e.c, e.a.d, e.a.e, e.a.f, e.a.g, e.a.h, e.a.i, e.a.j, e.a.k];
                            break;
                        case 1:
                            i = [e.a.d, e.a.e, e.a.f, e.a.g, e.a.h, e.a.i, e.a.j, e.a.k]
                    }
                    for (let e = 0; e < i.length; e++) {
                        let t = i[e],
                            n = t.symbol.split("/")[1];
                        z(t, "colaiesCostume/" + n)
                    }
                }
            },
			oyuiarm: {
                name: "Oyui Drop with Arms",
                sprite: 71,
                cost: 1600,
                color: 13369246,
                owned: !1,
                artist: O.thinking909,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 34);
                    let i = new PIXI.Sprite(he["Sprites/BodiesCostume_1"][37]);
                    R(i, e.a, 0, .95, 10), i.x = 100, i.y = 20;
                    let n = new PIXI.Sprite(he["Sprites/BodiesCostume_1"][36]);
                    R(n, e.a, 0, .95, 15), n.x = 90, n.y = 120, n.zIndex = -1, e.a.sortableChildren = !0, e.destroyCostume = function() {
                        i.destroyPhysics(), n.destroyPhysics()
                    }
                },
                applyMinigame: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 38)
                }
            },
            classic2: {
                name: "Early BFB Teardrop",
                sprite: 0,
                artist: O.jacknjellify,
                cost: 300,
                owned: !1,
                apply: function(e, t = 0) {
                    let i;
                    switch (G.none.apply(e, t), t) {
                        case 0:
                            i = [e.b, e.c, e.a.d, e.a.e, e.a.f, e.a.g, e.a.h, e.a.i, e.a.j, e.a.k];
                            break;
                        case 1:
                            i = [e.a.d, e.a.e, e.a.f, e.a.g, e.a.h, e.a.i, e.a.j, e.a.k]
                    }
                    for (let e = 0; e < i.length; e++) {
                        let t = i[e],
                            n = t.symbol.split("/")[1];
                        z(t, "bfbiesCostume/" + n)
                    }
                }
            },
            literallycoiny: {
                name: "Coiny from Battle For Dream Island",
                sprite: 72,
                cost: 2763,
                owned: !1,
                color: 15376640,
                artist: O.jacknjellify,
                apply: function(e, t, i) {
                    G.none.apply(e, t), N(e.a.i, 8, "NEC4");
					let n = [e.a.e, e.a.f, e.a.g, e.a.h, e.a.d, e.a.j, e.a.k];
					if ("gtttatint" == i) {
                        for (let e = 0; e < n.length; e++) n[e].layerOffset = {
                            x: 0,
                            y: 0
                        };
						e.a.j.layerOffset = {
							x: 10,
							y: 0
						};
						e.a.k.layerOffset = {
							x: -10,
							y: 0
						};
						e.a.i.layerOffset = {
							x: 0,
							y: 18
						};
                    } else if ("faceMatch" == i) {
                        for (let e = 0; e < n.length; e++) n[e].layerOffset = {
                            x: 0,
                            y: 0
                        };
						e.a.j.layerOffset = {
							x: 10,
							y: 0
						};
						e.a.k.layerOffset = {
							x: -10,
							y: 0
						};
						e.a.i.layerOffset = {
							x: 20,
							y: 18
						};
                    } else for (let e = 0; e < n.length; e++) n[e].layerOffset = {
                            x: 0,
                            y: 0
                        };
						e.a.j.layerOffset = {
							x: 10,
							y: 0
						};
						e.a.k.layerOffset = {
							x: -10,
							y: 0
						};
						e.a.i.layerOffset = {
							x: 2,
							y: 18
						};
                }
            },
            blackholedrop: {
                name: "Black Hole Drop",
                sprite: 74,
                cost: 1000,
                artist: O.jhaydenplayzz,
                owned: !1,
                color: 16553728,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 20, "NEC1"), z(e.a.e, "Sprites/EyesCostume25"), z(e.a.f, "Sprites/EyesCostume25"), z(e.a.g, "Sprites/EyesCostume25"), z(e.a.h, "Sprites/EyesCostume25"), z(e.a.d, "Sprites/MouthsCostume25"), z(e.a.e, "Sprites/EyesCostume25"), z(e.a.f, "Sprites/EyesCostume25"), z(e.a.g, "Sprites/EyesCostume25"), z(e.a.h, "Sprites/EyesCostume25"), z(e.a.d, "Sprites/MouthsCostume25")
                }
            },
            animaticdrop: {
                name: "AnimaticDrop (No Custom Limbs, Sorry!)",
                sprite: 75,
                cost: 700,
                artist: O.jhaydenplayzz,
                owned: !1,
                color: 1640107,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 22, "NEC1")
                }
            },
            lavadrop: {
                name: "Lava drop",
                sprite: 121,
                cost: 500,
                artist: O.not_devin11u,
                owned: !1,
                color: 11081219,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 28, "NEC1"), z(e.a.e, "Sprites/EyesCostume25"), z(e.a.f, "Sprites/EyesCostume25"), z(e.a.g, "Sprites/EyesCostume25"), z(e.a.h, "Sprites/EyesCostume25"), z(e.a.d, "Sprites/MouthsCostume25")
                }
            },
            rainbowdrop: {
                name: "Rainbow drop",
                sprite: 94,
                cost: 750,
                artist: O.joopter,
                owned: !1,
                color: 16777215,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 24, "NEC1"), z(e.a.e, "Sprites/EyesCostume25"), z(e.a.f, "Sprites/EyesCostume25"), z(e.a.g, "Sprites/EyesCostume25"), z(e.a.h, "Sprites/EyesCostume25"), z(e.a.d, "Sprites/MouthsCostume25")
                }
            },
            crystbowdrop: {
                name: "Crystbow Drop",
                sprite: 76,
                cost: 777,
                artist: O.jhaydenplayzz,
                owned: !1,
                color: 4012031,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 49, "NEC1"), z(e.a.j, "Sprites/Empty"), z(e.a.k, "Sprites/Empty")
                }
            },
            paperdrop: {
                name: "PaperDrop",
                sprite: 77,
                cost: 500,
                artist: O.jhaydenplayzz,
                owned: !1,
                color: 12961221,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 30, "NEC1")
                }
            },
            mrfundrop: {
                name: "Mr fun Drop",
                sprite: 78,
                cost: 666,
                artist: O.jhaydenplayzz,
                owned: !1,
                color: 16711680,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 55, "NEC1"), z(e.a.e, "Sprites/Empty"), z(e.a.f, "Sprites/Empty"), z(e.a.g, "Sprites/Empty"), z(e.a.h, "Sprites/Empty"), z(e.a.d, "Sprites/Empty")
                }
            },
            nopose: {
                name: "No Pose",
                sprite: 79,
                cost: 100,
                artist: O.joopter,
                owned: !1,
                color: 9211020,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 45, "NEC1");
					let n = new PIXI.Sprite(he["Sprites/BodiesCostume_NEC1"][90]);
                    R(n, e.a, 0, 0.95, 20), n.x = 57, n.y = 110, n.zIndex = 10, e.a.sortableChildren = !0, e.destroyCostume = function() {
                        n.destroyPhysics()
                    }
                },
                applyMinigame: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 91, "NEC1")
                }
            },
            tennisballdrop: {
                name: "Tennis Drop",
                sprite: 80,
                cost: -1,
                achievement: "get27630intennis",
                artist: O.dopozy,
                owned: !1,
                color: 14347264,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 57, "NEC1")
                }
            },
            tennisballdrop2: {
                name: "Master Tennis Drop",
                sprite: 79,
                cost: -1,
                artist: O.dopozy,
                owned: !1,
				secret: !0,
                achievement: "masterofspeed",
                color: 14347264,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 80, "NEC1")
                }
            },
            stardropremake: {
                name: "Stardrop Deluxe",
                sprite: 91,
                cost: 1500,
                artist: O.dopozy,
                owned: !1,
                color: 16763392,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 78, "NEC1")
                }
            },
            lightbulbdropv2: {
                name: "Lightdrop v2",
                sprite: 82,
                cost: 500,
                artist: O.stevencrack,
                owned: !1,
                color: 2470124,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 82, "NEC1")
                }
            },
            reindeerdrop: {
                name: "Reindeer drop",
                sprite: 93,
                cost: 600,
                artist:  {
                    name: O.thinking909.name + ", " + O.dopozy.name
				},
                owned: !1,
                color: 12684379,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 84, "NEC1"), z(e.a.d, "Sprites/MouthsCostume10"), z(e.a.k, "Sprites/Empty"), z(e.a.j, "Sprites/Empty")
                }
            },
            oldsundrop: {
                name: "Old Sun Drop",
                sprite: 96,
                cost: 700,
                artist: O.thinking909,
                drawnBy: O.stevencrack,
                owned: !1,
                color: 16747049,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 86, "NEC1")
                }
            },
            watercup: {
                name: "Water Cup",
                sprite: 92,
                cost: 750,
                artist: O.vulpieee,
                owned: !1,
                color: 8709887,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 88, "NEC1")
					let n = [e.a.e, e.a.f, e.a.g, e.a.h, e.a.d, e.a.k, e.a.j];
					for (let e = 0; e < n.length; e++) n[e].layerOffset = {
                            x: 2,
                            y: 0
                        };
						e.a.j.layerOffset = {
							x: 3,
							y: 0
						};
						e.a.k.layerOffset = {
							x: -3,
							y: 0
						};
                }
            },
            sketchdrop: {
                name: "SketchDrop",
                sprite: 110,
                cost: 250,
                owned: !1,
                color: 16777215,
                artist: O.joopter,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 0, "NEC3"), z(e.a.d, "Sprites/MouthsCostume100");
                }
            },
            dogdrop: {
                name: "Dog Drop",
                sprite: 111,
                cost: 600,
                owned: !1,
                color: 10051136,
                artist: {
                    name: O.thinking909.name + ", " + O.dopozy.name
				},
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 94, "NEC1"), z(e.a.d, "Sprites/MouthsCostume10");
                }
            },
            yinyangremake: {
                name: "Yin-Yang Deluxe",
                sprite: 122,
                cost: 600,
                owned: !1,
                color: 4410507,
                artist: {
                    name: O.thinking909.name + ", " + O.dopozy.name
				},
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 92, "NEC1"), z(e.a.f, "Sprites/EyesCostume25"), z(e.a.h, "Sprites/EyesCostume25"), z(e.a.g, "Sprites/EyesCostume25"), z(e.a.e, "Sprites/EyesCostume25");
                },
                facePosition: {
                    x: 100,
                    y: 0
                }
            },
            lovedrop: {
                name: "Lovedrop",
                sprite: 108,
                cost: 500,
                owned: !1,
                color: 16756939,
                artist: O.vulpieee,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 96, "NEC1"), z(e.a.e, "Sprites/Empty"), z(e.a.g, "Sprites/Empty");
                }
            },
            shadowmilkdrop: {
                name: "Shadow Milk Drop",
                sprite: 113,
                cost: -1,
                owned: !1,
				secret: !0,
                color: 1194410,
                achievement: "masterofgtttatint",
                artist: O.vulpieee,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 98, "NEC1");
                }
            },
            mangodrop: {
                name: "Mango!",
                sprite: 112,
                cost: 550,
                owned: !1,
                color: 16736000,
                artist: O.nombiastic,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 102, "NEC1");
                }
            },
            princessdrop: {
                name: "Princess Teardrop",
                sprite: 123,
                cost: 600,
                owned: !1,
                color: 15163321,
                artist: O.thinking909,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 104, "NEC1");
                }
            },
			// Recolors!!
            sodadrop: {
                name: "Soda Drop",
                sprite: 116,
                cost: 800,
                owned: !1,
                color: 6118857,
                artist: O.dopozy,
                apply: function(e, t, n) {
                    G.none.apply(e, t), N(e.a.i, 2, "NEC5");
                    let a = new PIXI.AnimatedSprite(he["Sprites/BodiesCostume_NEC5"]);
                    e.a.i.addChild(a);
                    let r = new PIXI.Graphics;
                    a.mask = r, e.a.i.addChild(r);
                    let s = Math.floor(2763 * Math.random()),
                        l = (i.happiness, i.hunger, i.sleep);
                    "levelLayer2" == n && a.gotoAndStop(4);
                    let d = [],
                        h = function(e = !1) {
                            return {
                                x: 400 + 100 * (Math.random() - .5),
                                y: e ? 300 : 300 + 140 * (Math.random() - .5),
                                size: 1 + 1 * Math.random(),
                                speed: 0.1 + 0.1 * Math.random(),
                                horizontalSpeed: Math.random() - .5
                            }
                        };
                    for (let e = 0; e < 100; e++) d.push(h(!1));

                    function p() {
                        a.tint = 16777215, "levelLayer2" != n && a.gotoAndStop(Math.max(0, e.a.i.currentFrame + -43)), r.clear(), r.beginFill(16777215);
                        for (let e = 0; e < d.length; e++) d[e].y += d[e].speed, d[e].x += Math.cos(s + 1 * d[e].speed) * d[e].speed / 4, r.drawCircle(d[e].x, d[e].y, d[e].size), d[e].y > 475 && (d[e] = h(!0));
                        r.endFill(), s += Qe / 40 * (.4 + l / 100 * .6)
                    }
                    c.ticker.add(p);
                    let u = function() {
                        a.destroy(), r.destroy(), c.ticker.remove(p)
                    };
                    "tennis" == n ? e.tearDrop.destroyCostume = u : "levelLayer2" == n ? e.tearDrop.destroyCostume2 = u : e.destroyCostume = u
                }
            },
			// Recolors Gen 2
            violetdrop: {
                name: "Violetdrop",
                sprite: 83,
                cost: 700,
                owned: !1,
                artist: O.dopozy,
                color: 5841813,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 6, "NEC2"), z(e.a.e, "Sprites/EyesCostume25"), z(e.a.f, "Sprites/EyesCostume25"), z(e.a.g, "Sprites/EyesCostume25"), z(e.a.h, "Sprites/EyesCostume25"), z(e.a.d, "Sprites/MouthsCostume25")
                }
            },
            coffeedrop: {
                name: "Coffeedrop",
                sprite: 84,
                cost: 400,
                owned: !1,
                artist: O.dopozy,
                color: 10374701,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 8, "NEC2")
                }
            },
            barfdrop: {
                name: "Barfdrop",
                sprite: 85,
                cost: 300,
                owned: !1,
                artist: O.dopozy,
                color: 6789633,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 18, "NEC2")
                }
            },
            galliumdrop: {
                name: "Galliumdrop",
                sprite: 87,
                cost: 250,
                owned: !1,
                artist: O.dopozy,
                color: 13882829,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 20, "NEC2")
                }
            },
            mercurydrop: {
                name: "Mercurydrop",
                sprite: 86,
                cost: 250,
                owned: !1,
                artist: O.dopozy,
                artist: O.dopozy,
                color: 13421505,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 22, "NEC2")
                }
            },
            muddrop: {
                name: "Muddrop",
                sprite: 88,
                cost: 300,
                owned: !1,
                artist: O.dopozy,
                color: 7621947,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 30, "NEC2"), z(e.a.e, "Sprites/EyesCostume25"), z(e.a.f, "Sprites/EyesCostume25"), z(e.a.g, "Sprites/EyesCostume25"), z(e.a.h, "Sprites/EyesCostume25"), z(e.a.d, "Sprites/MouthsCostume25")
                }
            },
            teadrop: {
                name: "Teadrop",
                sprite: 89,
                cost: 450,
                owned: !1,
                artist: O.dopozy,
                color: 3485228,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 32, "NEC2"), z(e.a.e, "Sprites/EyesCostume25"), z(e.a.f, "Sprites/EyesCostume25"), z(e.a.g, "Sprites/EyesCostume25"), z(e.a.h, "Sprites/EyesCostume25"), z(e.a.d, "Sprites/MouthsCostume25")
                }
            },
            caesiumdrop: {
                name: "Caesiumdrop",
                sprite: 99,
                cost: 250,
                owned: !1,
                artist: O.dopozy,
                color: 13548933,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 34, "NEC2")
                }
            },
            dyedrop: {
                name: "Dyedrop",
                sprite: 98,
                cost: 350,
                owned: !1,
                artist: O.dopozy,
                color: 5935158,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 39, "NEC2"), z(e.a.e, "Sprites/EyesCostume25"), z(e.a.f, "Sprites/EyesCostume25"), z(e.a.g, "Sprites/EyesCostume25"), z(e.a.h, "Sprites/EyesCostume25"), z(e.a.d, "Sprites/MouthsCostume25")
                }
            },
            brominedrop: {
                name: "Brominedrop",
                sprite: 97,
                cost: 300,
                owned: !1,
                artist: O.dopozy,
                color: 10770742,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 45, "NEC2"), z(e.a.e, "Sprites/EyesCostume25"), z(e.a.f, "Sprites/EyesCostume25"), z(e.a.g, "Sprites/EyesCostume25"), z(e.a.h, "Sprites/EyesCostume25"), z(e.a.d, "Sprites/MouthsCostume25")
                }
            },
            gasolinedrop: {
                name: "Gasolinedrop",
                sprite: 117,
                cost: 400,
                owned: !1,
                artist: O.dopozy,
                color: 12688677,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 47, "NEC2")
                }
            },
            milkdrop: {
                name: "Milkdrop",
                sprite: 95,
                cost: 350,
                owned: !1,
                artist: O.dopozy,
                color: 15527915,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 51, "NEC2")
                }
            },
            detergentdrop: {
                name: "Detergentdrop",
                sprite: 100,
                cost: 300,
                owned: !1,
                artist: O.dopozy,
                color: 4106327,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 53, "NEC2")
                }
            },
            rubidiumdrop: {
                name: "Rubidiumdrop",
                sprite: 90,
                cost: 250,
                owned: !1,
                artist: O.dopozy,
                color: 13223346,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 55, "NEC2")
                }
            },
            chocolatemilkdrop: {
                name: "Chocolate Milkdrop",
                sprite: 101,
                cost: 500,
                owned: !1,
                artist: O.dopozy,
                color: 10970946,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 57, "NEC2")
                }
            },
			// Recolors
            bleachdrop: {
                name: "Bleachdrop",
                sprite: 118,
                cost: 200,
                owned: !1,
                color: 10855845,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 43, "NEC2")
                }
            },
            fruitpunchdrop: {
                name: "Fruit Punchdrop",
                sprite: 109,
                cost: 250,
                owned: !1,
                color: 13528647,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 100, "NEC1")
                }
            },
            aciddrop: {
                name: "Aciddrop",
                sprite: 102,
                cost: 200,
                owned: !1,
                color: 9017154,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 28, "NEC2")
                }
            },
            poisondrop: {
                name: "Poisondrop",
                sprite: 105,
                cost: 200,
                owned: !1,
                color: 30720,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 26, "NEC2")
                }
            },
            sweatdrop: {
                name: "Sweatdrop",
                sprite: 119,
                cost: 200,
                owned: !1,
                color: 5022606,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 24, "NEC2")
                }
            },
            waterdrop: {
                name: "Waterdrop",
                sprite: 120,
                cost: 200,
                owned: !1,
                color: 3649973,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 16, "NEC2")
                }
            },
            eyedrop: {
                name: "Eyedrop",
                sprite: 104,
                cost: 150,
                owned: !1,
                color: 10794678,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 12, "NEC2")
                }
            },
            raindrop: {
                name: "Raindrop",
                sprite: 106,
                cost: 200,
                owned: !1,
                color: 8041397,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 10, "NEC2")
                }
            },
            venomdrop: {
                name: "Venomdrop",
                sprite: 107,
                cost: 250,
                owned: !1,
                color: 10040490,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 2, "NEC2")
                }
            },
            antipoisondrop: {
                name: "Anti-Poison Drop",
                sprite: 103,
                cost: 250,
                owned: !1,
                color: 16761087,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 0, "NEC2")
                }
            },
            giant: {
                name: "Giant",
                sprite: 1,
                artist: O.bluesky,
                cost: 0,
                owned: !1,
                secret: !0,
                applyMinigame: function() {},
                apply: function(e, t = 0) {
                    let i;
                    switch (G.none.apply(e, t), e.size = 1.25, e.scale.x *= 1.25, e.scale.y *= 1.25, e.destroyCostume = function() {
                            e.size = 1, e.scale.x /= 1.25, e.scale.y /= 1.25
                        }, t) {
                        case 0:
                            i = [e.b, e.c, e.a.d, e.a.e, e.a.f, e.a.g, e.a.h, e.a.i, e.a.j, e.a.k];
                            break;
                        case 1:
                            i = [e.a.d, e.a.e, e.a.f, e.a.g, e.a.h, e.a.i, e.a.j, e.a.k]
                    }
                    for (let e = 0; e < i.length; e++) {
                        let t = i[e],
                            n = t.symbol.split("/")[1];
                        console.log("Sprites/" + n + "Costume21"), z(t, "Sprites/" + n + (n.includes("Mouth") ? "s" : "") + "Costume21")
                    }
                }
            },
            lemon: {
                name: a.costumes.lemon,
                sprite: 7,
                cost: -1,
                achievement: "lemons",
                owned: !1,
                color: 16770969,
                artist: O.vendormint,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 12)
                }
            },
            sportsdrop: {
                name: a.costumes.sportsdrop,
                sprite: 9,
                cost: -1,
                achievement: "winagameoftennis",
                owned: !1,
                artist: O.vendormint,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 16)
                }
            },
            limedrop: {
                name: a.costumes.limedrop,
                sprite: 15,
                cost: -1,
                achievement: "2763lemons",
                owned: !1,
                color: 5234769,
                artist: O.jampu,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 28)
                }
            },
            jockdrop: {
                name: a.costumes.jockdrop,
                sprite: 17,
                cost: -1,
                achievement: "5minuteGTTTATINT",
                owned: !1,
                artist: O.maple2,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 32), z(e.a.j, "Sprites/LimbsCostume17"), z(e.a.k, "Sprites/LimbsCostume17")
                }
            },
            energydrink: {
                name: a.costumes.energydrink,
                sprite: 20,
                cost: -1,
                achievement: "10energydrinks",
                owned: !1,
                artist: O.tyblade,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 43)
                }
            },
            _td_costume6: {
                name: "Cakepop-Chip",
                sprite: 26,
                cost: -1,
                achievement: "750altitudeCAKEWALK",
                owned: !1,
                color: 1108991,
                artist: O.teardrop,
                apply: function(e, t) {
                    G.none.apply(e, t), N(e.a.i, 55)
                }
            }
        },
        B = [
		{
            name: "ALL",
            items: []
        }, {
            name: "Achievements",
            items: []
        }, {
            name: "Valentines 2025",
            items: ["_td_costume8","_td_costume9"]
        }, {
            name: "Christmas 2024",
            items: ["snowdrop", "_td_costume7", "snowglobe", "snowflake", "treedrop"]
        }, {
        name: "September 2024",
        items: ["sundrop", "coladrop", "tropical", "moondrop", "softdrink", "mariposa", "glorp", "clouddrop", "waffle", "popdrop", "sealdrop", "aoracedrop", "gumdrop", "voiddrop", "potiondrop"],
        votes: !0,
        amaze: !0
    },
    {
        name: "RU Achievements",
        items: ["testdrop","tennisballdrop","twiddledrop","chartdrop","shadowmilkdrop","gingerdrop","tennisballdrop2"]
    },
    {
        name: "Reunited Beta Feb",
        items: ["lovedrop","shadowmilkdrop","mangodrop","princessdrop"]
    },
	{
		name: "Reunited Beta Jan",
		items: ["twiddledrop","stonedropbps","placeholderdropbps","beerdropbps","stardrop","fairyteardrop","lightbulbdrop","chartdrop","lazerdrop","blackholedrop","animaticdrop","lavadrop","rainbowdrop","crystbowdrop","paperdrop","mrfundrop","tennisballdrop","stardropremake","nopose","tennisballdrop2","lightbulbdropv2","reindeerdrop","oldsundrop","watercup","sketchdrop","yinyangremake","dogdrop"]
	},
	{
		name: "Reunited Alpha",
		items: ["testdrop","toonsterdrop","paintdrop","dreamdrop","bubbledrop","baloondrop","goodrop","weezerbluealbumdrop","literallyleafy","gingerdrop","nonexisty","testdrop2"]
	},
	{
		name: "Teardrop Reunion",
		items: ["_td_costume5","honeydrop","oildrop","violetdrop","coffeedrop","barfdrop","galliumdrop","mercurydrop","muddrop","teadrop","caesiumdrop","dyedrop","brominedrop","gasolinedrop","milkdrop","detergentdrop","rubidiumdrop","chocolatemilkdrop","sodadrop","bleachdrop","fruitpunchdrop","aciddrop","poisondrop","sweatdrop","eyedrop","raindrop","venomdrop","antipoisondrop","waterdrop"]
	},
    {
        name: "Inaninate Inaniny",
        items: ["goodrop","baloondrop","lightbulbdrop","yinyang"]
    },
	{
		name: "myCloneTeardrop",
		items: ["yinyang","moddedcoladrop","oyuiarm","classic2"]
	},
    {
        name: "BPS Trio",
        items: ["stonedropbps","placeholderdropbps","beerdropbps"]
    },
    {
        name: "Miscellaneous",
        items: ["nonexisty","literallyleafy","testdrop2","justoyui","literallycoiny","testdrop3","watercup"]
    }];
    for (let e in G) B[0].items.push(e);
    for (let e in G) - 1 == G[e].cost && B[1].items.push(e);

    function F(e) {
        let t = {
            name: e.name,
            items: []
        };
        for (let i in G) G[i].artist == e && t.items.push(i);
        B.push(t)
    }
    F(O.dopozy),
    F(O.stevencrack),
    F(O.toonster),
    F(O.jhaydenplayzz),
    F(O.vulpieee),
    F(O.joopter),
    F(O.teardrop),
    F(O.thinking909),
    F(O.vendormint),
    B.push();
    let R = function(e, t, i, n, o, a = !1, r) {
            e.anchor.set(.5, .5), e.offset = {}, t.addChild(e), e.vx = 0, e.vy = 0, e.actualAngle = 0, e.angleVelocity = 0;
            let s = !1,
                l = function() {
                    if (null != r) {
                        e.rotation = -r.rotation + i, e.actualAngle += e.angleVelocity * Qe, e.rotation += e.actualAngle, e.angleVelocity += (r.rotation + i - e.actualAngle) / o * Qe, e.angleVelocity *= n;
                        let t = {
                            x: r.x + e.offset.x * Math.cos(r.rotation) - e.offset.y * Math.sin(r.rotation),
                            y: r.y + e.offset.y * Math.cos(r.rotation) + e.offset.x * Math.sin(r.rotation)
                        };
                        s || (e.x = t.x, e.y = t.y, s = !0), e.vx += (t.x - e.x) / o * Qe, e.vy += (t.y - e.y) / o * Qe, e.vx *= n / 2, e.vy *= n, e.x += e.vx * Qe, e.y += e.vy * Qe
                    } else e.rotation = -t.rotation + i, e.actualAngle += e.angleVelocity * Qe, e.rotation += e.actualAngle, e.angleVelocity += (t.rotation + i - e.actualAngle) / o * Qe, e.angleVelocity *= n
                };
            c.ticker.add(l), e.destroyPhysics = function() {
                c.ticker.remove(l), e.destroy()
            }
        },
        U = function(e, t, i, n = 1, o = 100, a = !1, r) {
            e.offset = {}, e.vx = 0, e.vy = 0, e.actualAngle = 0, e.angleVelocity = 0, e.orbitSpeed = 1;
            let s = function() {
                e.rotation = e.vy / 20, e.vx += (t.x - e.x) / o * Qe / 5 * e.orbitSpeed, e.vy += (t.y - e.y) / o * Qe / 2 * e.orbitSpeed, e.vx *= n, e.vy *= n, e.x += e.vx * Qe / 5 * e.orbitSpeed, e.y += e.vy * Qe / 2 * e.orbitSpeed
            };
            c.ticker.add(s), e.destroyPhysics = function() {
                c.ticker.remove(s)
            }
        };

    function z(e, t) {
        let i = e.currentFrame;
        e.textures = he[t], e.gotoAndStop(i)
    }

    function _(e) {
        return e.split("").reverse().join("")
    }

    function W(e) {
        return _(btoa(JSON.stringify(e)))
    }
    let j = !1;

    function V(e, t) {
        try {
            return null == e ? t : JSON.parse(atob(_(e)))
        } catch (e) {
            return alert("Error with save file. Potential corruption!"), j = !0, 0
        }
    }

    function H() {
        if (n.privateBeta) return;
        if (n.introMode) return;
        let e = [];
        e.push(W(t.coins)), e.push(W(t.fridge)), e.push(W(i.happiness)), e.push(W(i.hunger)), e.push(W(i.sleep)), e.push(W(n.skipIntro)), e.push(W(n.costume));
        let o = {};
        for (let e in G) o[e] = G[e].owned;
        e.push(W(o)), e.push(W(n.lastLogin)), e.push(W(i.sleeping)), e.push(W(n.sfx)), e.push(W(n.music)), e.push(W(n.minigameMusic)), e.push(W(i.progress)), e.push(W(i.progressNeeded)), e.push(W(n.level));
        let a = {};
        for (let e in y) a[e] = y[e].done;
        e.push(W(a)), e.push(W(n.lemonsFed)), e.push(W(n.totalSlaps)), e.push(W(n.minigameCostumes)), e.push(W(n.lastFridgePage)), e.push(W(n.drinksFed)), e.push(W(n.HQSprites)), e.push(W(n.language)), e.push(W(n.sfxVolume)), e.push(W(n.musicVolume)), e.push(W(n.HDrecommendation)), 0 == n.gameStartDate && (n.gameStartDate = Date.now()), e.push(W(n.gameStartDate)), e.push(W(n.saveFileWarning)), e.push(W(n.levelUpCostumes)), e.push(W(n.safeArea)), e.push(W(n.controllerProfile.GTTTATINT)), e.push(W(n.extendAnimationFrames)), localStorage.setItem("myTeardrop", W(JSON.stringify(e)))
    }
    let Q = setInterval((function() {
        H()
    }), 1e4);

    function Y(e) {
        j = !1;
        let t = JSON.parse(V(e));
        return {
            coins: V(t[0]),
            fridge: V(t[1]),
            happiness: V(t[2]),
            hunger: V(t[3]),
            sleep: V(t[4]),
            skipIntro: V(t[5]),
            costume: V(t[6]),
            boughtCostumes: V(t[7]),
            lastLogin: V(t[8]),
            sleeping: V(t[9]),
            sfx: V(t[10], !0),
            music: V(t[11], !0),
            minigameMusic: V(t[12], !0),
            progress: V(t[13], 0),
            progressNeeded: V(t[14], 200),
            level: V(t[15], 1),
            completedAchievements: V(t[16], {}),
            lemonsFed: V(t[17], 0),
            totalSlaps: V(t[18], 0),
            minigameCostumes: V(t[19], !0),
            lastFridgePage: V(t[20], 0),
            drinksFed: V(t[21], 0),
            HQSprites: V(t[22], !1),
            language: V(t[23], "en-US"),
            sfxVolume: V(t[24], 1),
            musicVolume: V(t[25], 1),
            HDrecommendation: V(t[26], !1),
            gameStartDate: V(t[27], Date.now()),
            saveFileWarning: V(t[28], !1),
            levelUpCostumes: V(t[29], !0),
            safeArea: V(t[30], !1),
            gtttatintProfile: V(t[31], n.controllerProfile.GTTTATINT),
            extendAnimationFrames: V(t[32], !1)
        }
    }
    if (null == localStorage.getItem("myTeardrop")) H();
    else if (!n.privateBeta) {
        let e = Y(localStorage.getItem("myTeardrop"));
        t.coins = e.coins, t.fridge = e.fridge, i.happiness = e.happiness, i.hunger = e.hunger, i.sleep = e.sleep, n.skipIntro = e.skipIntro, n.lastLogin = e.lastLogin, i.sleeping = e.sleeping, "string" == typeof e.costume && (Object.keys(G).includes(e.costume) || (e.costume = "none"), n.costume = e.costume);
        for (let t in G) {
            let i = !1;
            null != e.boughtCostumes[t] && (i = e.boughtCostumes[t]), G[t].owned = i
        }
        n.sfx = e.sfx, n.music = e.music, n.minigameMusic = e.minigameMusic, n.minigameCostumes = e.minigameCostumes, i.progress = e.progress, i.progressNeeded = e.progressNeeded, n.level = e.level, n.lemonsFed = e.lemonsFed, n.drinksFed = e.drinksFed, n.totalSlaps = e.totalSlaps, n.lastFridgePage = e.lastFridgePage, n.HQSprites = e.HQSprites, n.language = e.language, n.sfxVolume = e.sfxVolume, n.musicVolume = e.musicVolume, n.HDrecommendation = e.HDrecommendation, n.gameStartDate = e.gameStartDate, n.saveFileWarning = e.saveFileWarning, n.levelUpCostumes = e.levelUpCostumes, n.safeArea = e.safeArea, n.controllerProfile.GTTTATINT = e.gtttatintProfile, n.extendAnimationFrames = e.extendAnimationFrames;
        for (let t in y) {
            let i = !1;
            null != e.completedAchievements[t] && (i = e.completedAchievements[t]), y[t].done = i
        }
    }
    if (null != localStorage.getItem(n.language)) {
        let e = JSON.parse(localStorage.getItem(n.language).replaceAll("\n", "\\n"));
        for (let t in e)
            for (let i in e[t]) "version" != t && (a[t][i] = e[t][i]);
        for (let e in a.costumes) G[e].name = a.costumes[e]
    } else n.language = "en-US";
    let K = a.message.obtainCostume;
    a.message.obtainCostume = function(e) {
        return K.replace("{achievement}", '"' + e + '"')
    };
    let J, q = a.message.updateWarning;
    a.message.updateWarning = function(e, t) {
        return q.replace("{currentVersion}", e).replace("{latest}", t)
    };
    let Z = {
            loadAttempts: 0,
            useOldLoader: !1
        },
        $ = localStorage.getItem("loaderData");
    if (null == $) J = {
        loadAttempts: 0,
        useOldLoader: !0
    };
    else try {
        J = JSON.parse($)
    } catch (e) {
        J = Z
    }

    function ee() {
        localStorage.setItem("loaderData", JSON.stringify(J))
    }
    J.loadAttempts++, J.loadAttempts >= 3 && (n.HQSprites = !1), ee();
    let te = document.createElement("div");
    te.classList.add("collectingDroplets");
    let ie = document.createElement("img");
    ie.src = "LoadAnimated/" + getRandomInt(1, 4) + ".gif", ie.classList.add("loadingDance");
    let ne = document.createElement("div");
    ne.classList.add("loader");
    let oe = document.createElement("div");
    oe.classList.add("bar"), document.body.appendChild(te), te.appendChild(ie), te.appendChild(ne), ne.appendChild(oe);
    let ae = document.createElement("p");
    if (ae.innerText = "Collecting Droplets...", te.appendChild(ae), J.useOldLoader) {
        document.head.innerHTML += '<link rel="stylesheet" href="collectingDropletsClassic.css">';
        let e = document.createElement("img");
        e.src = "Resources/Logo.png", e.id = "logoimage", e.style.bottom = "5%", te.appendChild(e), ie.style.display = "none";
		if (localStorage.version === undefined) {
            ae.innerText = "First time?"
        } else {
            ae.innerText = "v" + localStorage.version
        }; te.appendChild(ae)
    } else document.head.innerHTML += '<link rel="stylesheet" href="collectingDroplets.css">';
    window.innerWidth, window.devicePixelRatio;
    let re = 0,
        se = 0,
        le = "?v=" + localStorage.version;

    function de(e, t) {
        re++, ce || (oe.style.width = re / se * 100 + "%"), re == se && (ce || (ne.style.color = "white", ne.innerHTML += "<p>Tap/Click to play</p>"), function() {
            if (!ce) {
                if (ce = !0, n.extendAnimationFrames)
                    for (let e in h)
                        for (let t in h[e]) h[e][t].start *= 2, h[e][t].end *= 2;
                ue.music = new Pizzicato.Group(ue.music), ue.sfx = new Pizzicato.Group(ue.sfx), ue.sfx.volume = n.sfxVolume, ue.music.volume = n.musicVolume, Ke()
            }
        }(), te.remove())
    }
    let ce = !1,
        he = {},
        pe = {},
        ue = {
            music: [],
            sfx: []
        };

    function me(e, t, i) {
        se++, PIXI.Assets.load("./Resources/" + e + ".json" + le).then((e => {
            e.cachePrefix = "?v=hello", he[i] = [];
            for (let n = 0; n < e._frameKeys.length; n++) {
                let e = t + (n + 1e4).toString().slice(1);
                he[i].push(PIXI.Texture.from(e))
            }
            de()
        }))
    }

    function ye(e, t, i) {
        let o = {},
            a = t;
        he[i] = [];
        for (let r = 0; r < t; r++) {
            o[r] = 0, se++;
            let s = (r + 10001).toString().slice(1);
            1 == t && (s = ""), PIXI.Assets.load("./Resources/" + e + s + ".png" + le).then((e => {
                o[r] = e, n.HQSprites && e.baseTexture.setResolution(2), a--, 0 == a && (he[i] = o), de()
            }))
        }
    }

    function fe(e) {
        se++, PIXI.Assets.load("./Fonts/" + e + ".fnt" + le).then((e => {
            de()
        }))
    }

    function ge(e, t) {
        se++, PIXI.Assets.load("./Animations/" + e + ".json" + le).then((e => {
            pe[t] = e, pe[t].animation = t, pe[t].extension = 1, n.extendAnimationFrames && be(pe[t]), de()
        }))
    }

    function xe(e, t, i = 0) {
        se++, ue[t] = new Pizzicato.Sound("./Audio/" + e + ".mp3" + le, (function() {
            ue[t].volume = 1, ue[t].loaded = !0, null != ue[t].onloadAudio && ue[t].onloadAudio(), de()
        })), ue[t].loaded = !1, 0 == i ? ue.music.push(ue[t]) : ue.sfx.push(ue[t])
    }
    console.warn = function() {};
    let we = "",
        ve = "";
    "en-US" != n.language && (ve = "Unicode"), n.HQSprites && (we = "hd/"), fe("MenuShag" + ve), fe("arial"), fe("ShagBlueNumber"), fe("ShagGoldenNumber"), fe("ShagBlack" + ve), fe("IndieFlower"), ge("Teardrop", "Teardrop"), ge("oil/Teardrop.TeardropBody", "oilTeardropBody"), ge("oil/TeardropTired.TeardropBody", "oilTeardropTiredBody"), ge("healthLose", "healthLose"), ge("loading", "loading"), ge("bfb", "bfb"), ge("TeardropTired", "TeardropTired"), ge("tearDropWatch", "tearDropWatch"), ge("tearDropLevelUp", "tearDropLevelUp"), ge("faceMinigame", "faceMinigame"), ge("oddDroplets", "oddDroplets"), ge("tearDropTennis", "tearDropTennis"), ge("GTTTATINT", "GTTTATINT"), ge("dropletDodge", "dropletDodge"), ge("GTTTATINTLOSE", "GTTTATINTLOSE"), ge("lollipopMode", "lollipopMode"), ge("Box", "Box"), ge("SkewMatrix", "SkewMatrix"), me(we + "GameThumbnails", "GameThumbnails", "Sprites/GameThumbnails"), me("tennisBall", "tennisBall", "Sprites/tennisBall"), me("dodgeItems", "dodgeItems", "Sprites/dodgeItems"), me("dodgeObjects", "dodgeObjects", "Sprites/dodgeObjects"), me("TDlollipop", "TDlollipop", "TDlollipop"), me("BGLayer", "BGLayer", "BGLayer"), ye(we + "Rooms/Rooms", 32, "Sprites/Rooms"), ye("dodgeBackgrounds/dodgeBackgrounds", 4, "Sprites/dodgeBackgrounds"), ye("GameBanners/GameBanners", 9, "Sprites/GameBanners"), ye("Logo", 1, "Logo"), me(we + "Food", "Food", "Sprites/Food"), me("Empty", "Empty", "Sprites/Empty"), xe("wave", "wave", 1), xe("yeah", "yeah"), n.events.christmas ? xe("frostwaltz", "brittlerille") : xe("brittlerille", "brittlerille"), xe("LevelUp", "levelup"), xe("Achievement", "achievement"), xe("switchoff", "switchoff", 1), xe("switchon", "switchon", 1), xe("purchase", "purchase", 1), xe("fail", "fail", 1), xe("coinlarge", "coinlarge", 1), xe("coinmedium", "coinmedium", 1), xe("coinsmall", "coinsmall", 1), xe("consume", "consume", 1), xe("slap1", "slap1", 1), xe("slap2", "slap2", 1), xe("slap3", "slap3", 1), xe("slap4", "slap4", 1), xe("collect", "collect", 1), me("Oldies/Bodies/1", "Bodies", "oldiesCostume/Bodies"), me("Oldies/Mouths", "Mouth", "oldiesCostume/Mouth"), me("Oldies/Limbs", "Limbs", "oldiesCostume/Limbs"), me("Oldies/Eyes", "Eyes", "oldiesCostume/Eyes"), me(we + "Bodies/1", "Bodies", "Sprites/Bodies"), me(we + "Bodies/2", "Bodies_2013rec", "Sprites/Bodies_2013rec"), me(we + "Outline/BodiesOUTLINE12", "BodiesOUTLINE12", "Sprites/BodiesOUTLINE12"), me(we + "Bodies/BodiesCostume_1", "BodiesCostume_1", "Sprites/BodiesCostume_1"), me(we + "Bodies/BodiesCostume_september2024", "BodiesCostume_september2024", "Sprites/BodiesCostume_september2024"), me(we + "Bodies/BodiesCostume_christmas2024", "BodiesCostume_christmas2024", "Sprites/BodiesCostume_christmas2024"), me("MouthsCostume10", "MouthsCostume10", "Sprites/MouthsCostume10"), me("MouthsCostume21", "MouthsCostume21", "Sprites/MouthsCostume21"), me("MouthsCostume25", "MouthsCostume25", "Sprites/MouthsCostume25"), me("MouthsCostume44", "MouthsCostume44", "Sprites/MouthsCostume44"), me("EyesCostume25", "EyesCostume25", "Sprites/EyesCostume25"), me("EyesCostume44", "EyesCostume44", "Sprites/EyesCostume44"), me("LimbsCostume17", "LimbsCostume17", "Sprites/LimbsCostume17"), me("LimbsCostume21", "LimbsCostume21", "Sprites/LimbsCostume21"), me("Debug/Icons", "Icons", "Icons"), me("Bodies/BodiesCostume21", "BodiesCostume21", "Sprites/BodiesCostume21"), me(we + "Mouths", "Mouth", "Sprites/Mouth"), me(we + "Limbs", "Limbs", "Sprites/Limbs"), me(we + "Outline/LimbsOUTLINE12", "LimbsOUTLINE12", "Sprites/LimbsOUTLINE12"), me("LimbsCostume1", "LimbsCostume1", "Sprites/LimbsCostume1"), me(we + "Eyes", "Eyes", "Sprites/Eyes"), me(we + "Outline/EyesOUTLINE12", "EyesOUTLINE12", "Sprites/EyesOUTLINE12"), me("EyesCostume21", "EyesCostume21", "Sprites/EyesCostume21"), me("CakeSlicePlane", "CakeSlicePlane", "Sprites/CakeSlicePlane"), me("Clouds", "Clouds", "Sprites/Clouds"), me(we + "Poses", "Poses", "Sprites/Poses"), me("Blur", "Blur", "Sprites/Blur"), me("Box", "Box", "Sprites/Box"), me(we + "GameUI", "GameUI", "Sprites/GameUI"), me("designerCredits", "designerCredits", "designerCredits"), me("Placeholders", "Placeholders", "Sprites/Placeholders"), me("Starfield", "Starfield", "Backgrounds/Starfield"), me("RepeatingUI", "RepeatingUI", "Sprites/RepeatingUI"), me(we + "inputNineSlice", "inputNineSlice", "inputNineSlice"), me(we + "Bodies/BodiesCostume_NEC1", "BodiesCostume_NEC1", "Sprites/BodiesCostume_NEC1"), me(we + "Bodies/BodiesCostume_NEC2", "BodiesCostume_NEC2", "Sprites/BodiesCostume_NEC2"), me(we + "Bodies/BodiesCostume_NEC3", "BodiesCostume_NEC3", "Sprites/BodiesCostume_NEC3"), me(we + "Bodies/BodiesCostume_NEC4", "BodiesCostume_NEC4", "Sprites/BodiesCostume_NEC4"), me(we + "Bodies/BodiesCostume_NEC5", "BodiesCostume_NEC5", "Sprites/BodiesCostume_NEC5"), me("Bfbies/Bodies/1", "Bodies", "bfbiesCostume/Bodies"), me("Bfbies/Mouths", "Mouth", "bfbiesCostume/Mouth"), me("Bfbies/Limbs", "Limbs", "bfbiesCostume/Limbs"), me("Bfbies/Eyes", "Eyes", "bfbiesCostume/Eyes"), me("Colaies/Bodies/1", "Bodies", "colaiesCostume/Bodies"), me("Colaies/Mouths", "Mouth", "colaiesCostume/Mouth"), me("Colaies/Limbs", "Limbs", "colaiesCostume/Limbs"), me("Colaies/Eyes", "Eyes", "colaiesCostume/Eyes"), ye("mytdLogo", 1, "mytdLogo"), fe("ShagReunitedNumber"), me("MouthsCostume100", "MouthsCostume100", "Sprites/MouthsCostume100"), me("LimbsCostume50", "LimbsCostume50", "Sprites/LimbsCostume50");
    let Ie = ["Teardrop", "oilTeardropBody", "oilTeardropTiredBody", "healthLose", "loading", "TeardropTired", "tearDropWatch", "tearDropLevelUp", "tearDropTennis", "GTTTATINTLOSE", "Box"];

    function be(e) {
        if (Ie.includes(e.animation) || null == e.animation) {
            e.extension = 2;
            for (let t in e.layers)
                for (let i = 0; i < e.layers[t].frames.length; i++) {
                    let n = e.layers[t].frames[i];
                    n[0] *= 2, e.layers[t].isCustom && (n[Se.firstFrame] *= 2)
                }
            for (let t in e.symbols) be(e.symbols[t]);
            e.frameCount *= 2
        }
    }

    function Ce(e, t = 0) {
        return {
            scale: {
                x: Math.sqrt(e.a ** 2 + e.b ** 2),
                y: Math.sqrt(e.c ** 2 + e.d ** 2)
            },
            skew: {
                x: 180 / Math.PI * Math.atan2(e.d, e.c) - 90,
                y: 180 / Math.PI * Math.atan2(e.b, e.a)
            },
            rotation: t,
            skewing: null == t
        }
    }
    let Se = {
        duration: 0,
        transformX: 1,
        transformY: 2,
        a: 3,
        b: 4,
        c: 5,
        d: 6,
        rotation: 7,
        pivotX: 8,
        pivotY: 9,
        firstFrame: 10,
        loopMode: 11,
        tween: 12,
        opacity: 13
    };

    function ke(e, t) {
        let i = 0,
            n = new PIXI.Container;
        n.animationName = e.animation, n.idle = -1, n.frameCount = e.frameCount, n.customs = [], n.layers = [];
        let o = {};
        for (let t in e.layers) e.layers[t].isCustom ? (o[t] = ke(e.symbols[e.layers[t].symbol]), o[t].symbol = e.layers[t].symbol, n.customs.push(o[t])) : o[t] = new PIXI.AnimatedSprite(he[e.layers[t].symbol]), n.layers.push(t), o[t].symbol = e.layers[t].symbol, n.addChild(o[t]), n[t] = o[t], "FireyFlame" == e.layers[t].symbol && (o[t].gotoAndPlay(0), o[t].animationSpeed = .4);

        function a(t, i = !0) {
            let n = o[t].curframe == e.layers[t].frames.length - 1 ? 0 : e.layers[t].frames[o[t].curframe + 1],
                a = e.layers[t].frames[o[t].curframe];
            if (o[t].inactive = null == a[1], o[t].inactive) o[t].alpha = 0;
            else {
                if (1 != o[t].static)
                    if (1 != o[t].lockLayerPosition && (o[t].pivot.x = a[Se.pivotX], o[t].pivot.y = a[Se.pivotY]), o[t].alpha = 1, 0 != n && -2 != a[Se.tween] && i) {
                        let e = o[t].frameProgress - 1,
                            i = new PIXI.Matrix(a[Se.a], a[Se.b], a[Se.c], a[Se.d], 0, 0),
                            r = new PIXI.Matrix(n[Se.a], n[Se.b], n[Se.c], n[Se.d], 0, 0),
                            s = Ce(i, a[Se.rotation]),
                            l = Ce(r, n[Se.rotation]),
                            d = l.rotation - s.rotation;
                        d > 180 && (d = -180 - (180 - d)), d < -180 && (d = 180 + (180 + d));
                        let c = l.skew.x - s.skew.x;
                        c > 180 && (c = -180 - (180 - c)), c < -180 && (c = 180 + (180 + c));
                        let h = l.skew.y - s.skew.y;
                        h > 180 && (h = -180 - (180 - h)), h < -180 && (h = 180 + (180 + h));
                        let p = {
                            skew: {
                                x: ease[a[Se.tween] + 1](e, s.skew.x, c, a[Se.duration]),
                                y: ease[a[Se.tween] + 1](e, s.skew.y, h, a[Se.duration])
                            },
                            scale: {
                                x: ease[a[Se.tween] + 1](e, s.scale.x, l.scale.x - s.scale.x, a[Se.duration]),
                                y: ease[a[Se.tween] + 1](e, s.scale.y, l.scale.y - s.scale.y, a[Se.duration])
                            },
                            rotation: ease[a[Se.tween] + 1](e, s.rotation, d, a[Se.duration])
                        };
                        s.skewing || l.skewing ? p.rotation = 0 : (p.skew.x = 0, p.skew.y = 0), o[t].transform.setFromMatrix(function(e) {
                            let t = e.rotation * (Math.PI / 180),
                                i = e.skew.x * (Math.PI / 180),
                                n = e.skew.y * (Math.PI / 180);
                            isNaN(i) && (i = 0), isNaN(n) && (n = 0);
                            let o = e.scale.x,
                                a = e.scale.y,
                                r = new PIXI.Matrix(1, 0, 0, 1, 0, 0);
                            return r.a *= Math.cos(n), r.b = Math.sin(n), r.c = -Math.sin(i), r.d *= Math.cos(i), r.a *= Math.cos(t), r.b += Math.sin(t), r.c -= Math.sin(t), r.d *= Math.cos(t), r.a *= o, r.b *= o, r.c *= a, r.d *= a, r
                        }(p)), o[t].scale.x = p.scale.x, o[t].scale.y = p.scale.y, 1 != o[t].lockLayerPosition ? (o[t].x = ease[a[Se.tween] + 1](e, a[Se.transformX], n[Se.transformX] - a[Se.transformX], a[Se.duration]), o[t].y = ease[a[Se.tween] + 1](e, a[Se.transformY], n[Se.transformY] - a[Se.transformY], a[Se.duration])) : (o[t].x = o[t].firstFramePosition.x, o[t].y = o[t].firstFramePosition.y), null != o[t].layerOffset && (o[t].x += o[t].layerOffset.x, o[t].y += o[t].layerOffset.y);
                        let u = a[Se.opacity],
                            m = n[Se.opacity];
                        u == m && o[t].alpha == m || (o[t].alpha = ease[a[Se.tween] + 1](e, u, m - u, a[Se.duration]))
                    } else {
                        let e = new PIXI.Matrix(a[Se.a], a[Se.b], a[Se.c], a[Se.d], 0, 0);
                        o[t].transform.setFromMatrix(e), 1 != o[t].lockLayerPosition ? (o[t].x = a[Se.transformX], o[t].y = a[Se.transformY], null == o[t].firstFramePosition && (o[t].firstFramePosition = {
                            x: a[Se.transformX],
                            y: a[Se.transformY]
                        })) : (o[t].x = o[t].firstFramePosition.x, o[t].y = o[t].firstFramePosition.y), null != o[t].layerOffset && (o[t].x += o[t].layerOffset.x, o[t].y += o[t].layerOffset.y), o[t].alpha = a[Se.opacity]
                    } if (e.layers[t].isCustom || (a[Se.firstFrame] = a[Se.firstFrame] % o[t].textures.length), !e.layers[t].isCustom && "FireyFlame" != e.layers[t].symbol && 1 != o[t].lockLayerFrame) {
                    let e = a[Se.firstFrame];
                    null != o[t].overrideSprite && null != o[t].overrideSprite[e] && (e = o[t].overrideSprite[e]), o[t].gotoAndStop(e)
                }
            }
        }

        function r(t, i) {
            let n = i.frames,
                o = 0;
            t = Math.min(e.frameCount - 1, t);
            for (let e = 0; e < n.length; e++) {
                if (t >= o && o + n[e][0] > t) return [e, t - o];
                o += n[e][0]
            }
        }
        new PIXI.Transform;
        let s = !1;
        return n.fps = 0, n.onAnimationEnd = function() {}, n.gotoAndStop = function(e) {
            n.goto(e), n.stop()
        }, n.gotoAndPlay = function(e, t) {
            n.goto(e), n.play(t)
        }, n.parts = t, n.currentPart = -1, n.gotoPart = function(e) {
            null != n.parts[e] && n.currentPart != e && (n.currentPart = e, n.goto(n.parts[e].start), n.firstFrame = n.parts[e].start, n.playUntil = n.parts[e].end, n.loop = n.parts[e].loop)
        }, n.goto = function(t) {
            s = !1, null == t && (t = 0), i = t;
            for (let i in o) {
                let n = r(t, e.layers[i]);
                o[i].curframe = n[0], o[i].frameProgress = n[1] + 1, e.layers[i].isCustom && null != e.layers[i].frames[o[i].curframe][Se.firstFrame] && (o[i].goto(e.layers[i].frames[o[i].curframe][Se.firstFrame] + (2 == e.layers[i].frames[o[i].curframe][Se.loopMode] ? 0 : o[i].frameProgress - 1)), o[i].l = e.layers[i].frames[o[i].curframe][Se.loopMode]), a(i, !1), a(i)
            }
        }, n.animationData = e, n.destroyAnimation = function() {
            n.stop();
            for (let e in o) o[e].parent.removeChild(o[e]), null != o[e].destroyAnimation ? o[e].destroyAnimation() : o[e].destroy({
                children: !0
            });
            null != n.parent && n.parent.removeChild(n), n.destroy({
                children: !0
            })
        }, n.onNextFrame = -1, n.play = function(t = 60) {
            n.fps = t, null != n.ticker && c.ticker.remove(n.ticker);
            let i = Date.now(),
                o = Date.now();
            n.ticker = function() {
                for (; o < i;) o += 1e3 / (t * e.extension), n.nextFrame(), -1 != n.onNextFrame && n.onNextFrame(n), i - o > 5e3 && (o = i);
                i = Date.now()
            }, c.ticker.add(n.ticker)
        }, n.playUntil = -1, n.firstFrame = 0, n.stop = function(e) {
            null != n.ticker && c.ticker.remove(n.ticker)
        }, n.getCurFrame = function() {
            return i
        }, n.goto(0), n.nextFrame = function() {
            let t = n.playUntil;
            if (-1 == n.playUntil && (t = e.frameCount - 1), i++, t < i) return n.loop && n.goto(n.firstFrame), void(0 == s && (s = !0, -1 != n.idle && n.gotoPart(n.idle), n.onAnimationEnd()));
            for (let t in o) {
                if (o[t].inactive = !1, null == o[t].curframe && (o[t].curframe = 0), null == o[t].frameProgress) o[t].frameProgress = 1;
                else {
                    let i = e.layers[t].frames[o[t].curframe];
                    e.layers[t].isCustom && 2 != i[Se.loopMode] && o[t].nextFrame(), o[t].frameProgress >= e.layers[t].frames[o[t].curframe][Se.duration] && (o[t].frameProgress = 0, o[t].curframe < e.layers[t].frames.length - 1 ? (o[t].curframe++, e.layers[t].isCustom && (o[t].goto(e.layers[t].frames[o[t].curframe][Se.firstFrame]), o[t].l = i[Se.loopMode])) : o[t].inactive = !0), o[t].frameProgress++
                }
                a(t)
            }
        }, n.switchData = function(t) {
            e = t;
            for (let e = 0; e < n.customs.length; e++) n.customs[e].switchData(t.symbols[n.customs[e].symbol]);
            n.animationName = e.animation
        }, n.switchParts = function(e) {
            n.parts = e
        }, n
    }
    async function Me(e) {
        try {
            return await navigator.clipboard.writeText(e), 1
        } catch (e) {
            return 0
        }
    }
    let Pe = {
        "en-US": {
            lang: "English",
            button: ["DOWNLOAD", "USE", "UPDATE"],
            downloaded: !0
        },
        "tr-TR": {
            lang: "Türkçe",
            translator: O.vendormint,
            file: "./Languages/tr-TR",
            available: !1,
            button: ["INDIR", "KULLAN", "GUNCELLE"]
        },
        "fr-FR": {
            lang: "Français",
            translator: O.teardrop,
            file: "./Languages/fr-FR",
            button: ["TELECHARGER", "UTILISER", "MISE À JOUR"]
        },
        "es-ES": {
            lang: "Türkçe",
            translator: {
                name: O.stevencrack.name + ", " + O.thinking909.name
            },
            file: "./Languages/es-ES",
            available: !1,
            button: ["DESCARGAR", "USAR", "ACTUALIZAR"]
        }
    };
    for (let e in Pe) e in localStorage && (Pe[e].downloaded = !0);
    let Te, Ae, Le = {
            0: {
                name: "Match",
                id: 0,
                available: !1
            },
            1: {
                name: "Pencil",
                id: 1,
                available: !1
            },
            2: {
                name: "Bubble",
                id: 2,
                available: !1
            },
            5: {
                width: 100,
                height: 100,
                name: "Ice Cube",
                id: 5,
                available: !0
            },
            6: {
                width: 100,
                height: 100,
                name: "Leafy",
                id: 6,
                available: !0
            },
            9: {
                width: 100,
                height: 100,
                name: "Rocky",
                id: 9,
                available: !0
            },
            13: {
                name: "Woody",
                id: 13,
                available: !1
            },
            19: {
                width: 300,
                height: 200,
                name: "Spongy",
                id: 19,
                available: !0
            },
            22: {
                name: "Tennis Ball",
                id: 22,
                available: !1
            },
            23: {
                name: "Pen",
                id: 23,
                available: !1
            },
            31: {
                width: 75,
                height: 100,
                name: "Coiny",
                id: 31,
                available: !0
            },
            32: {
                width: 75,
                height: 100,
                name: "Pin",
                id: 32,
                available: !0
            },
            33: {
                name: "Firey",
                id: 33,
                available: !1
            },
            34: {
                width: 60,
                height: 100,
                name: "Needle",
                id: 34,
                available: !0
            },
            39: {
                name: "Golf Ball",
                id: 39,
                available: !1
            },
            44: {
                name: "Blocky",
                id: 44,
                available: !1
            },
            51: {
                name: "Eraser",
                id: 51,
                available: !1
            },
            54: {
                name: "Flower",
                id: 54,
                available: !1
            },
            57: {
                name: "Snowball",
                id: 57,
                available: !1
            },
            62: {
                name: "Teardrop",
                id: 62,
                available: !1
            }
        },
        Ee = function(e, t = function() {}) {
            let i = function() {
                n.music && ue.clouddancer.play()
            };
            n.music && (ue.brittlerille.pause(), ue.clouddancer.play(), ue.clouddancer.volume = .5, ue.clouddancer.release = 1, ue.clouddancer.on("end", i));
            let a = new PIXI.Sprite(he["Sprites/Rooms"][18]);
            e.addChild(a), a.tint = 8818106, a.interactive = !0, a.x = e.screen.width / 2, a.y = e.screen.height / 2, a.anchor.set(.5, .5), a.scale.x = 1.5, a.scale.y = 1.5;
            let r = new PIXI.Container;
            e.addChild(r);
            let l = {},
                d = 0,
                h = 0,
                u = [],
                m = o("", 32, "center");
            m.x = e.screen.width / 2, m.y = e.screen.height - 150, n.costume;
            let y = new PIXI.Container;
            y.hitArea = new PIXI.Rectangle(-5e3, -5e3, 1e4, 1e4);
            let f = new PIXI.Graphics;
            y.mask = f, e.addChild(y), y.x = 0, y.y = 0;
            let g = e.screen.width,
                x = e.screen.height;
            f.beginFill(0), f.drawRect(y.x, y.y, g, x), f.endFill(), y.interactive = !0, y.on("pointerdown", (function(e) {
                let t = e.clientY / s;
                y.dragOffset = {
                    y: t - y.y
                }, y.prevY = y.y, y.vy = 0, y.scrolling = !0
            }));
            let w = function(e) {
                    if (!y.scrolling) return;
                    let t = e.clientY / s;
                    y.prevY = y.y, y.y = t - y.dragOffset.y
                },
                v = function(e) {
                    y.wheel = !0, y.vy = p.linear(y.vy, -e.deltaY / 2 * Qe, .25), y.vy > 40 * Qe && (y.vy = 40 * Qe), y.vy < -40 * Qe && (y.vy = -40 * Qe)
                };
            document.addEventListener("wheel", v);
            let I = function() {
                y.scrolling = !1
            };
            document.addEventListener("pointermove", w), document.addEventListener("pointerup", I), y.vy = 0;
            let b = function() {
                let e = 80 - S - 50 + x;
                y.vy = p.linear(y.vy, -.5, y.wheel ? .1 : .05, Qe), y.scrolling ? y.vy = y.y - y.prevY : y.y += y.vy, C.targetAlpha = 1, y.y >= 0 && (y.y = 0, y.vy = 0), y.y <= e && (C.targetAlpha = 0, y.y = e, y.vy = 0), C.alpha = p.linear(C.alpha, C.targetAlpha, .1, Qe), a.y = p.linear(a.y, y.y / 40 + 80 + 50, .1, Qe)
            };
            c.ticker.add(b);
            let C = new PIXI.Sprite(he["Sprites/Rooms"][11]);
            C.x = y.x, C.y = y.y + x - 90, C.width = g, C.height = 100;
            let S = 0,
                k = {
                    "User Interface": ["VENDORMINT"],
                    Characters: [],
                    "Early Supporters": ["semihasem142", "albertito9736", "leafsterzx", "rat_real.", "yourgurllucy", "infected_came_back.", "generalbonnie", "riverplayerone", "jampu", "tear_drop_bfb / pilowd", "alexpple", "donutmations", "orphan / cherryjrtheorphan_.", "coiny68617"],
                    "Beta Testers": ["tear_drop_bfb / pilowd", "oyui / thinking909", "NOOB / tyblade9", "BlueSky", "freesmart", "stevencrack", "ultimate1duck", "flanimations", "kenzie._kenz", "kyl9341", "veetheglaceon", "donutmations", O.thinking909.name, "anni_on_ayanna", "beetlebrick_", O.cringeindividual.name, "tawnypawzz", "geebweezer", "fridgethewhat123", "lufafa13", "infationtoons", "mationsBOMB", "lach15bro", "NOOB / tyblade9", "ricol3", "maple_two", "jampu", "mizosis", O.briteideajuni.name],
                    "Costume Artists": [O.teardrop.name, O.jacknjellify.name, O.vendormint.name, O.stevencrack.name, O.thinking909.name, O.briteideajuni.name, O.bluesky.name, O.cringeindividual.name, O.jampu.name, O.kyle.name, O.tyblade.name, O.maple2.name, O.dialup.name, O.coconut7.name, O.dopozy.name, O.gstbw.name, O.forkiplier.name, O.frostthesleepyone.name, O.starspawn.name, O.flanimations.name, O.zxcubed.name, O.justdanoobxdd.name, O.bogglesussy.name, O.eri_5i.name, O.swaggerrimunchies.name, O.hazzrde.name, O.hbzisback.name, O.pankocrash.name, O.kaidkrazyest.name, O.adxmz_vll.name, O.chaosticies.name, O.gokci.name],
                    Animation: ["VENDORMINT", "jacknjellify"],
                    "Graphic Design": ["VENDORMINT"],
                    "Original Games": ["Cary Huang - GTTTATINT101"],
                    "Minigame Help": ["Flanimations - Odd Droplets Posing", "Oyui - Odd Droplets Posing"],
                    Programming: ["VENDORMINT"],
                    Music: ["Kevin Macleod - New Friendly", "Kevin Macleod - Radio Martini", "Kevin Macleod - Brittle Rille", "Kevin Macleod - Shiny Tech", "Kevin Macleod - Pamgaea", "Kevin Macleod - Cloud Dancer", "FannToons - papshru"]
                };
            for (let e in Le) k.Characters.push("jacknjellify - " + Le[e].name);
            S += 200;
            let M = new PIXI.Sprite(he.mytdLogo[0]);
            M.width = 200, M.scale.y = M.scale.x, M.x = e.screen.width / 2, M.y = 100, u.push(M), M.anchor.set(.5, .5), y.addChild(M);
            for (let t in k) {
                let i = o(t, 32, "center");
                i.y = S, S += 48, y.addChild(i);
                for (let i = 0; i < k[t].length; i++) {
                    let n = o(k[t][i], 16, "center");
                    n.y = S, S += 32, y.addChild(n), n.x = e.screen.width / 2, k[t][i].toLowerCase().includes("teardrop") && (n.tint = 6737151)
                }
                S += 30, i.x = e.screen.width / 2
            }
            S += 100;
            let P = ze.exitButton((function() {
                t(), ze.flash(e, !1, L)
            }), e.screen.width - 40, 40, .4, 0);
            e.addChild(P.sprite), r.origX = 0, r.time = 50;
            let T = !1,
                A = function() {
                    T || (r.x = 0, d > .01 && (r.x += Math.cos(h) * d * 5, h += .5 * Qe, d = p.linear(d, 0, .1, Qe)), m.alpha > 0 && (m.alpha -= .04))
                };

            function L() {
                n.music && (ue.brittlerille.play(), ue.clouddancer.stop(), ue.clouddancer.off("end", i), delete ue.clouddancer), c.ticker.remove(b), document.removeEventListener("pointermove", w), document.removeEventListener("wheel", v), document.removeEventListener("pointerup", I);
                for (let e in l) null != l[e].destroy && l[e].destroy(), delete l[e];
                m.destroy(), P.destroy(), a.destroy();
                for (let e = 0; e < u.length; e++) u[e].destroyed || u[e].destroy();
                c.ticker.remove(A), T = !0
            }
            c.ticker.add(A), e.addChild(m), u.push(C), u.push(y), u.push(f)
        },

        // Custom Credits?
        Cucr = function(e, t = function() {}) {
            let i = function() {
                n.music && ue.spazzmaticapolka.play()
            };
            n.music && (ue.brittlerille.pause(), ue.spazzmaticapolka.play(), ue.spazzmaticapolka.volume = .5, ue.spazzmaticapolka.release = 1, ue.spazzmaticapolka.on("end", i));
            let a = new PIXI.Sprite(he["Sprites/Rooms"][25]);
            e.addChild(a), a.tint = 8818106, a.interactive = !0, a.x = e.screen.width / 2, a.y = e.screen.height / 2, a.anchor.set(.5, .5), a.scale.x = 1.5, a.scale.y = 1.5;
            let r = new PIXI.Container;
            e.addChild(r);
            let l = {},
                d = 0,
                h = 0,
                u = [],
                m = o("", 32, "center");
            m.x = e.screen.width / 2, m.y = e.screen.height - 150, n.costume;
            let y = new PIXI.Container;
            y.hitArea = new PIXI.Rectangle(-5e3, -5e3, 1e4, 1e4);
            let f = new PIXI.Graphics;
            y.mask = f, e.addChild(y), y.x = 0, y.y = 0;
            let g = e.screen.width,
                x = e.screen.height;
            f.beginFill(0), f.drawRect(y.x, y.y, g, x), f.endFill(), y.interactive = !0, y.on("pointerdown", (function(e) {
                let t = e.clientY / s;
                y.dragOffset = {
                    y: t - y.y
                }, y.prevY = y.y, y.vy = 0, y.scrolling = !0
            }));
            let w = function(e) {
                    if (!y.scrolling) return;
                    let t = e.clientY / s;
                    y.prevY = y.y, y.y = t - y.dragOffset.y
                },
                v = function(e) {
                    y.wheel = !0, y.vy = p.linear(y.vy, -e.deltaY / 2 * Qe, .25), y.vy > 40 * Qe && (y.vy = 40 * Qe), y.vy < -40 * Qe && (y.vy = -40 * Qe)
                };
            document.addEventListener("wheel", v);
            let I = function() {
                y.scrolling = !1
            };
            document.addEventListener("pointermove", w), document.addEventListener("pointerup", I), y.vy = 0;
            let b = function() {
                let e = 80 - S - 50 + x;
                y.vy = p.linear(y.vy, -.5, y.wheel ? .1 : .05, Qe), y.scrolling ? y.vy = y.y - y.prevY : y.y += y.vy, C.targetAlpha = 1, y.y >= 0 && (y.y = 0, y.vy = 0), y.y <= e && (C.targetAlpha = 0, y.y = e, y.vy = 0), C.alpha = p.linear(C.alpha, C.targetAlpha, .1, Qe), a.y = p.linear(a.y, y.y / 40 + 80 + 50, .1, Qe)
            };
            c.ticker.add(b);
            let C = new PIXI.Sprite(he["Sprites/Rooms"][11]);
            C.x = y.x, C.y = y.y + x - 90, C.width = g, C.height = 100;
            let S = 0,
                k = {
                    "Mod Creators": [
                        "Joopter & dopozy",
                        "Credits Last Updated: 1.0-rc1"
                    ],
                    "Costumes": [
                        "Stopwatch Drop - Joopter",
                        "Yellow Magician Drop - Toonster & StevenCrack",
                        "Paint Drop - Gali Lemonade",
                        "Dream Drop - Grim Chan 67",
                        "BubbleDrop - Tubular_Toque",
                        "Balloon Drop - Dazzlecat",
                        "GooDrop - Oyui & dopozy",
                        "WeezerDrop - StevenCrack",
                        "Leafy BFDI - JacknJellify",
                        "GingerDrop - Oyui & dopozy",
                        "Nonexisty",
                        "Circle - Joopter",
                        "Twiddledrop - bootheghost64",
                        "Stonedrop - stone bone",
                        "Placeholderdrop - stone bone",
                        "Beerdrop - stone bone",
                        "Stardrop - xmu",
                        "Fairy Teardrop - Toonster",
                        "Lightbulbdrop - Toonster & iltsu",
                        "Chartdrop - dopozy & Joopter",
                        "Lazerdrop - marker2014",
                        "Black Hole Drop - jhaydenplayzz",
                        "AnimaticDrop - jhaydenplayzz",
                        "Rainbow Drop - firethree",
                        "Crystbow Drop - jhaydenplayzz",
                        "Paper Drop - jhaydenplayzz",
                        "Mr fun drop - jhaydenplayzz",
                        "Tennisball Drop - dopozy",
                        "Stardrop Deluxe - dopozy",
                        "Lightdrop v2 - StevenCrack",
                        "Reindeer drop - Oyui & dopozy",
                        "Old Sun Drop - Oyui & StevenCrack",
                        "Water Cup - vulpiee",
                        "Violetdrop - dopozy",
                        "Barfdrop - dopozy",
                        "Galliumdrop - dopozy",
                        "Mercurydrop - dopozy",
                        "Muddrop - dopozy",
                        "Teadrop - dopozy",
                        "Milkdrop - dopozy",
                        "Rubidiumdrop - dopozy",
                        "Caesiumdrop - dopozy",
                        "Dyedrop - dopozy",
                        "Brominedrop - dopozy",
                        "Detergentdrop - dopozy",
                        "Chocolate Milkdrop - dopozy",
                        "Aciddrop - Joopter",
                        "Anti-Poison Drop - Joopter",
                        "Eyedrop - Joopter",
                        "Poisondrop - Joopter",
                        "Raindrop - Joopter",
                        "Venomdrop - Joopter",
                        "Sweatdrop - Joopter",
                        "Fruit Punchdrop - Joopter",
                        "Bleachdrop - Joopter",
                        "Lovedrop - Joopter & vulpieee",
                        "Dogdrop - dopozy & Oyui",
                        "Princess Teardrop - dopozy & Oyui",
                        "Mango! - dopozy & Nombiastic",
                        "Shadown Milk Drop - dopozy & vulpieee",
                        "Gasolinedrop - dopozy",
                        "Soda Drop - Joopter",
                        "Bleachdrop - Joopter",
                        "Sweatdrop - Joopter",
                        "Waterdrop - Joopter",
                        "Yin-Yang Deluxe - dopozy",
                        "Lava Drop - not_devin11u"
                    ],
                    "Poses": [
                        "Stopwatch Drop - Joopter",
                        "Yellow Magician Drop - StevenCrack",
                        "Paintdrop - dopozy",
                        "Dream Drop - Joopter",
                        "Bubble Drop - dopozy",
                        "Balloon Drop - Joopter",
                        "GooDrop - dopozy",
                        "WeezerDrop - dopozy",
                        "Leafy from BFDI - jacknjellify",
                        "GingerDrop - dopozy",
                        "Nonexisty - Joopter",
                        "Circle - Joopter",
                        "Twiddledrop - bootheghost64",
                        "Stonedrop - stone bone",
                        "Placeholderdrop - stone bone",
                        "Beerdrop - stone bone",
                        "Stardrop - xmu",
                        "Fairy Teardrop - Toonster",
                        "Lightbulbdrop - iltsu",
                        "Chartdrop - dopozy",
                        "Lazerdrop - marker2014",
                        "Black Hole Drop - jhaydenplayzz",
                        "AnimaticDrop - jhaydenplayzz",
                        "Rainbow Drop - firethree",
                        "Crystbow Drop - jhaydenplayzz",
                        "Paper Drop - jhaydenplayzz",
                        "Mr fun drop - jhaydenplayzz",
                        "Tennisball Drop - dopozy",
                        "Stardrop Deluxe - dopozy",
                        "Lightdrop v2 - StevenCrack",
                        "Reindeer drop - dopozy",
                        "Old SUn Drop - StevenCrack",
                        "Water Cup - vulpiee",
                        "Violetdrop - dopozy",
                        "Barfdrop - dopozy",
                        "Galliumdrop - dopozy",
                        "Mercurydrop - dopozy",
                        "Muddrop - dopozy",
                        "Teadrop - dopozy",
                        "Milkdrop - Oyui",
                        "Rubidiumdrop - dopozy",
                        "Caesiumdrop - StevenCrack",
                        "Dyedrop - StevenCrack",
                        "Brominedrop - StevenCrack",
                        "Detergentdrop - StevenCrack",
                        "Chocolate Milkdrop - StevenCrack",
                        "Aciddrop - dopozy",
                        "Anti-Poison Drop - dopozy",
                        "Eyedrop - dopozy",
                        "Poisondrop - dopozy",
                        "Raindrop - dopozy",
                        "Venomdrop - dopozy",
                        "Lovedrop - Joopter",
                        "Dogdrop - dopozy",
                        "Mango! - Joopter",
                        "Shadown Milk Drop - dopozy",
                        "Gasolinedrop - Joopter",
                        "Soda Drop - Joopter",
                        "Bleachdrop - Joopter",
                        "Sweatdrop - Joopter",
                        "Waterdrop - Joopter",
                        "Yin-Yang Deluxe - dopozy",
                        "Princess Teardrop - dopozy",
                        "Lava Drop - dopozy"
                    ],
                    "Mods Used": [
                        "Economic Collapse - Joopter",
                        "myCloneTeardrop - Pixelgamer1286"
                    ],
                    "Custom Textures": [
                        "dopozy",
                        "Joopter"
                    ],
                    "Loading Messages": [
                        "vulpieee",
                        "Oyui",
                        "Toonster",
                        "firethree",
                        "dopozy"
                    ],
                    "Loading Backgrounds": [
                        "Generic - Joopter",
                        "The Challenge (Modified)"
                    ],
                    "1.4 Loading gifs": [
                        "dopozy",
                        "Oyui"
                    ],
                    "Music": [
                        "Kevin MacLeod - Shiny Tech II",
                        "Kevin MacLeod - Spazzmatica Polka"
                    ],
                    "Special Thanks": [
                        "Vendormint",
                        "dopozy",
                        "StevenCrack",
                        "Pixelgamer1286",
                        "Oyui",
                        "Toonster",
                        "Dazzlecat",
                        "stone bone",
                        "vulpieee",
                        "firethree",
                        "xmu"
                    ],
                    "Note": [
                        "Support the creator by playing on original game:",
                        "https://myveryownteardrop.xyz/",
                        " ",
                        "Don't forget to download your save when planning",
                        "to take a break! Browsers tend to delete",
                        "browsing data when you haven't visited this",
                        "site for more than a week!",
                        " ",
                        "Thanks for playing myTeardrop Reunited Mod"
                    ]
                };
            S += 200;
            let M = new PIXI.Sprite(he.Logo[0]);
            M.width = 200, M.scale.y = M.scale.x, M.x = e.screen.width / 2, M.y = 100, u.push(M), M.anchor.set(.5, .5), y.addChild(M);
            for (let t in k) {
                let i = o(t, 32, "center");
                i.y = S, S += 48, y.addChild(i);
                for (let i = 0; i < k[t].length; i++) {
                    let n = o(k[t][i], 16, "center");
                    n.y = S, S += 32, y.addChild(n), n.x = e.screen.width / 2, k[t][i].toLowerCase().includes("myveryownteardrop") && (n.tint = 6737151)
                }
                S += 30, i.x = e.screen.width / 2
            }
            S += 100;
            let P = ze.exitButton((function() {
                t(), ze.flash(e, !1, L)
            }), e.screen.width - 40, 40, .4, 0);
            e.addChild(P.sprite), r.origX = 0, r.time = 50;
            let T = !1,
                A = function() {
                    T || (r.x = 0, d > .01 && (r.x += Math.cos(h) * d * 5, h += .5 * Qe, d = p.linear(d, 0, .1, Qe)), m.alpha > 0 && (m.alpha -= .04))
                };

            function L() {
                n.music && (ue.brittlerille.play(), ue.spazzmaticapolka.stop(), ue.spazzmaticapolka.off("end", i), delete ue.spazzmaticapolka), c.ticker.remove(b), document.removeEventListener("pointermove", w), document.removeEventListener("wheel", v), document.removeEventListener("pointerup", I);
                for (let e in l) null != l[e].destroy && l[e].destroy(), delete l[e];
                m.destroy(), P.destroy(), a.destroy();
                for (let e = 0; e < u.length; e++) u[e].destroyed || u[e].destroy();
                c.ticker.remove(A), T = !0
            }
            c.ticker.add(A), e.addChild(m), u.push(C), u.push(y), u.push(f)
        },

        De = [{
            name: a.settings.music,
            value: n.music,
            enable: function() {
                n.music = !0, ue.brittlerille.volume = .5, ue.brittlerille.play()
            },
            disable: function() {
                ue.brittlerille.pause(), n.music = !1
            }
        }, {
            name: a.settings.minigameMusic,
            value: n.minigameMusic,
            enable: function() {
                n.minigameMusic = !0
            },
            disable: function() {
                n.minigameMusic = !1
            }
        }, {
            name: a.settings.sfx,
            value: n.sfx,
            enable: function() {
                n.sfx = !0
            },
            disable: function() {
                n.sfx = !1
            }
        }, {
            name: a.settings.minigameCostumes,
            value: n.minigameCostumes,
            enable: function() {
                n.minigameCostumes = !0
            },
            disable: function() {
                n.minigameCostumes = !1
            }
        }, {
            name: "Experimental Costumes",
            value: n.levelUpCostumes,
            enable: function() {
                n.levelUpCostumes = !0
            },
            disable: function() {
                n.levelUpCostumes = !1
            }
        }, {
            name: "Safe Screen Area",
            value: n.safeArea,
            mobile: !0,
            enable: function() {
                n.safeArea = !0, A()
            },
            disable: function() {
                n.safeArea = !1, A()
            }
        }, {
            name: "Credits",
            type: "button",
            flash: !0,
            enable: function() {
                clearTimeout(Ae), ze.loader(Te, Ee, [
                    ["clouddancer", "clouddancer"]
                ])
            }
        }, {
            name: "SFX Volume",
            type: "slider",
            enable: function(e) {
                n.sfxVolume = e, ue.sfx.volume = e
            },
            value: n.sfxVolume,
            preview: function() {
                clearTimeout(Ae), n.music && (ue.brittlerille.pause(), Ae = setTimeout((function() {
                    n.music && ue.brittlerille.play()
                }), 2e3)), ue.consume.stop(), ue.consume.play()
            }
        }, {
            name: "Music Volume",
            type: "slider",
            preview: function() {
                ue.achievement.stop(), clearTimeout(Ae), n.music && (ue.brittlerille.pause(), Ae = setTimeout((function() {
                    n.music && ue.brittlerille.play()
                }), 2e3)), ue.achievement.play(), ue.achievement.sourceNode.playbackRate.value = 1.1
            },
            enable: function(e) {
                n.musicVolume = e, ue.music.volume = e
            },
            value: n.musicVolume
        }, {
            name: "Advanced",
            type: "button",
            flash: !0,
            enable: function() {
                Xe(Te, (function() {}), [{
                    name: "Use older loading screen",
                    value: J.useOldLoader,
                    enable: function() {
                        J.useOldLoader = !0, ee()
                    },
                    disable: function() {
                        J.useOldLoader = !1, ee()
                    }
                }, {
                    name: "120hz Animation",
                    value: n.extendAnimationFrames,
                    enable: function(e) {
                        ze.message(Te, "This feature is EXPERIMENTAL, and animations might look weird with it on. " + a.settings.enableReload, he["Sprites/GameUI"][24], (function() {
                            n.extendAnimationFrames = !0, H(), setTimeout((function() {
                                window.location = window.location
                            }), 100)
                        }), (function() {
                            e.activated = !1, e.sprite.texture = he["Sprites/GameUI"][25]
                        }), [a.ui.reload, a.ui.cancel])
                    },
                    disable: function(e) {
                        ze.message(Te, a.settings.disableReload, he["Sprites/GameUI"][24], (function() {
                            n.extendAnimationFrames = !1, H(), setTimeout((function() {
                                window.location = window.location
                            }), 100)
                        }), (function() {
                            e.activated = !0, e.sprite.texture = he["Sprites/GameUI"][26]
                        }), [a.ui.reload, a.ui.cancel])
                    }
                }, {
                    name: "Restart Game",
                    type: "button",
                    enable: function(e) {
                        ze.message(Te, "Restarting Game", he["Sprites/GameUI"][24],
                        setTimeout((function() {
                                window.location = window.location
                            }), 1000))
                    }
                }, {
                    name: "Mod Credits",
                    type: "button",
                    flash: !0,
                    enable: function() {
                        clearTimeout(Ae), ze.loader(Te, Cucr, [
                            ["Spazzmatica Polka", "spazzmaticapolka"]
                        ])
                    }
                }], "Advanced Settings")
            }
        }, {
            name: "Controls",
            type: "button",
            flash: !0,
            mobile: !0,
            enable: function() {
                Xe(Te, (function() {
                    n.controllerProfile.GTTTATINT = o;
                    for (let e = 0; e < r.length; e++) r[e].destroy()
                }), [{
                    name: "Button Size",
                    type: "slider",
                    enable: function(t) {
                        e(t), o.buttonScale = t
                    },
                    preview: function() {},
                    value: .5
                }, {
                    name: "Align",
                    type: "button",
                    enable: function() {
                        ze.message(Te, "Align controllers", void 0, (function() {
                            let e = (t[" "].sprite.y + t.a.sprite.y + t.d.sprite.y) / 3;
                            t.a.sprite.y = e, t.d.sprite.y = e, t[" "].sprite.y = e;
                            for (let e in t) t[e].refreshProfile()
                        }), (function() {
                            let e = (t.a.sprite.y + t.d.sprite.y) / 2;
                            t.a.sprite.y = e, t.d.sprite.y = e;
                            for (let e in t) t[e].refreshProfile()
                        }), ["All", "Left/Right"])
                    }
                }, {
                    name: "Reset",
                    type: "button",
                    enable: function() {
                        ze.message(Te, "Are you sure you want to reset the controller configuration?", void 0, (function() {
                            for (let e in o.buttons) o.buttons[e].x = i.buttons[e].x, o.buttons[e].y = i.buttons[e].y, o.buttons[e].lock = i.buttons[e].lock;
                            for (let e in t) t[e].refresh();
                            o.buttonScale = i.buttonScale, e(o.buttonScale)
                        }), (function() {}), ["Yes", "Cancel"])
                    }
                }], "GTTTATINT Controller Profile");
                let e = function(e) {
                        for (let i in t) t[i].sprite.scale.x = e + .5, t[i].sprite.scale.y = e + .5, t[i].sprite.originalSize = {
                            x: t[i].sprite.scale.x,
                            y: t[i].sprite.scale.y
                        }, t[i].sprite.destinationSize = t[i].sprite.originalSize, t[i].sprite.animationSize = t[i].sprite.originalSize, t[i].sprite.animationTime = 0
                    },
                    t = {},
                    i = {
                        buttons: {
                            a: {
                                x: -150,
                                y: -50,
                                lock: 1
                            },
                            d: {
                                x: -50,
                                y: -50,
                                lock: 1
                            },
                            " ": {
                                x: 100,
                                y: -50,
                                lock: 0
                            }
                        },
                        buttonScale: .5
                    },
                    o = n.controllerProfile.GTTTATINT;

                function a(e, i, n, a) {
                    let r = o.buttonScale + .5,
                        s = new M((function() {
                            ze.message(Te, "Lock position to", void 0, (function() {
                                1 == o.buttons[a].lock && (o.buttons[a].x += Te.screen.width), o.buttons[a].lock = 0, s.refresh()
                            }), (function() {
                                0 == o.buttons[a].lock && (o.buttons[a].x -= Te.screen.width), o.buttons[a].lock = 1, s.refresh()
                            }), ["Bottom Left", "Bottom Right"])
                        }), he["Sprites/GameUI"][n], {
                            x: e,
                            y: i,
                            scale: {
                                x: r,
                                y: r
                            }
                        });
                    s.sprite.on("pointerdown", (function() {
                        for (let e in t) t[e].sprite.interactive = !1;
                        s.sprite.interactive = !0
                    })), s.sprite.on("pointermove", (function() {
                        s.refreshProfile()
                    })), s.refreshProfile = function() {
                        0 == o.buttons[a].lock ? (o.buttons[a].x = s.sprite.x, o.buttons[a].y = s.sprite.y - Te.screen.height) : (o.buttons[a].x = s.sprite.x - Te.screen.width, o.buttons[a].y = s.sprite.y - Te.screen.height)
                    }, s.sprite.on("pointerup", (function() {
                        for (let e in t) t[e].sprite.interactive = !0, t[e].refresh()
                    })), I(s.sprite, s.sprite.hitArea), t[a] = s, c.stage.addChild(s.sprite)
                }
                a(0, 0, 21, "a"), a(0, 0, 22, "d"), a(0, 0, 23, " ");
                let r = [];
                for (let e in t) {
                    let i = new PIXI.Sprite(he["Sprites/GameUI"][7]);
                    t[e].sprite.addChild(i), t[e].refresh = function() {
                        t[e].sprite.x = Te.screen.width * o.buttons[e].lock + o.buttons[e].x, t[e].sprite.y = Te.screen.height + o.buttons[e].y, i.anchor.set(.5, .5), i.x = -t[e].sprite.texture.trim.width / 2 + o.buttons[e].lock * t[e].sprite.texture.trim.width, i.y = t[e].sprite.texture.trim.height / 2, i.scale.x = .25, i.scale.y = .25, i.rotation = (1 - o.buttons[e].lock) * Math.PI / 2 - Math.PI / 4
                    }, r.push(i), r.push(t[e]), t[e].refresh()
                }
            }
        }, {
            name: "Save Tools",
            type: "button",
            flash: !0,
            enable: function() {
                let e = -1;
                Xe(Te, (function() {
                    -1 != e && document.body.removeChild(e)
                }), [{
                    name: "Download",
                    type: "button",
                    flash: !1,
                    enable: function() {
                        let e = document.createElement("a"),
                            t = localStorage.myTeardrop;
                        e.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(t)), e.setAttribute("download", ("myTeardrop - Reunited v" + localStorage.version + ".txt")), e.style.display = "none", document.body.appendChild(e), e.click(), document.body.removeChild(e)
                    }
                }, {
                    name: "Upload",
                    type: "button",
                    flash: !1,
                    enable: function() {
                        ze.message(Te, "This will overwrite your current save file and is an irreversible action.", he["Sprites/GameUI"][24], (function() {
                            let t = function(t = document.createElement("button"), i = document.createElement("input")) {
                                return t.innerText = "Upload", i.type = "file", i.style.display = "none", t.style = "position:fixed;z-index: 100;top:0px;left:0px;", e = t, t.onclick = function() {
                                    i.click(), i.onchange = function() {
                                        let e = new FileReader;
                                        e.onload = function(e) {
                                            Y(e.currentTarget.result), j ? ze.message(Te, "Not genuine save file. Action cancelled", he["Sprites/GameUI"][24], (function() {})) : (ze.message(Te, "Success! Reloading game...", he["Sprites/GameUI"][24], (function() {})), localStorage.setItem("myTeardrop", e.currentTarget.result), setTimeout((function() {
                                                window.location = window.location
                                            }), 500))
                                        }, e.readAsText(i.files[0])
                                    }
                                }, document.body.appendChild(i), t
                            }();
                            t.onclick(), document.body.appendChild(t)
                        }), (function() {}), ["Upload", "Cancel"])
                    }
                }, {
                    name: "Clear",
                    type: "button",
                    flash: !1,
                    enable: function() {
                        ze.message(Te, "This action is irreversible and will completely wipe your save file!", he["Sprites/GameUI"][24], (function() {
                            setTimeout((function() {
                                ze.message(Te, "Are you really sure??", he["Sprites/GameUI"][24], (function() {
                                    clearInterval(Q), localStorage.removeItem("myTeardrop"), setTimeout((function() {
                                        window.location = window.location
                                    }), 500)
                                }), (function() {}), ["Proceed", "Cancel"])
                            }), 500)
                        }), (function() {}), ["Proceed", "Cancel"])
                    }
                }, {
                    name: "Advanced",
                    type: "button",
                    flash: !0,
                    enable: function() {
                        Xe(Te, (function() {}), [{
                            name: "Copy Backup",
                            type: "button",
                            flash: !1,
                            enable: async function() {
                                await Me(localStorage.myTeardrop), ze.message(Te, "Copied!")
                            }
                        }, {
                            name: "Upload",
                            type: "button",
                            flash: !1,
                            enable: function() {
                                ze.message(Te, "This will overwrite your current save file and is an irreversible action.", he["Sprites/GameUI"][24], (function() {
                                    let e = prompt("Paste in your savefile!");
                                    null != e && (Y(e), j ? ze.message(Te, "Not genuine save file. Action cancelled", he["Sprites/GameUI"][24], (function() {})) : (ze.message(Te, "Success! Reloading game...", he["Sprites/GameUI"][24], (function() {})), localStorage.setItem("myTeardrop", e), setTimeout((function() {
                                        window.location = window.location
                                    }), 500)))
                                }), (function() {}), ["Upload", "Cancel"])
                            }
                        }], "Savefile tools")
                    }
                }], "Savefile tools")
            }
        }],
        Xe = function(e = new PIXI.Container, t = function() {}, i = De, n = _e + (je ? "(release, offline)" : " (Reunited Mod)")) {
            Te = e, ze.initializeScreenResolution(e);
            let a = new PIXI.Sprite(he["Sprites/Rooms"][30]);
            e.addChild(a), a.interactive = !0, a.x = e.screen.width / 2, a.y = e.screen.height / 2, a.anchor.set(.5, .5), a.scale.x = 1, a.scale.y = 1;
            let r = new PIXI.Container;
            e.addChild(r);
            let l = ze.exitButton((function() {
                t(), H(), ze.flash(e, !1, C)
            }), e.screen.width - 40, 40, .4, 0);
            e.addChild(l.sprite), r.origX = 0, r.time = 50;
            let d = !1,
                p = function() {
                    d || (r.x = 0)
                },
                u = 0,
                m = 10;
            c.ticker.add(p);
            let f = [],
                g = new PIXI.Sprite(he.Logo[0]);
            g.width = 200, g.scale.y = g.scale.x, g.x = 80, g.y = 20, g.id = P(), v(g, (function() {
                if (m--, 0 == m) {
                    if (y.tauntLogo.done) return ze.message(e, "GET OUT!", -1), void setTimeout((function() {
                        setInterval((function() {
                            let t = ke(pe.Teardrop, h.Teardrop),
                                i = [];
                            for (let e in G) G[e].owned && i.push(G[e]);
                            i[Math.floor(Math.random() * i.length)].apply(t), t.x = e.screen.width * Math.random(), t.y = e.screen.height * Math.random(), t.rotation = Math.random() * Math.PI * 4, t.play(60);
                            let n = Object.keys(h.Teardrop);
                            t.gotoPart(n[Math.floor(Math.random() * n.length)]), e.addChild(t)
                        }), 1e3 / 60), setTimeout((function() {
                            window.location = window.location
                        }), 1e3)
                    }), 500);
                    switch (u) {
                        case 0:
                            m = 10, ze.message(e, "don't.", -1);
                            break;
                        case 1:
                            m = 10, ze.message(e, "no.", -1);
                            break;
                        case 2:
                            m = 5, ze.message(e, "stop...", -1);
                            break;
                        case 3:
                            m = 20, ze.message(e, "STOP!!", -1);
                            break;
                        case 4:
                        case 6:
                            m = 10, ze.message(e, "...", -1);
                            break;
                        case 5:
                            m = 10, ze.message(e, "Will you leave me alone if I give you a costume?", -1, (function() {
                                setTimeout((function() {
                                    ze.message(e, "I'll think about it.", -1, (function() {})), m = 10
                                }), 500)
                            }), (function() {
                                setTimeout((function() {
                                    ze.message(e, "get out.", -1, (function() {
                                        t(), ze.flash(e, !1, C)
                                    }))
                                }), 1e3)
                            }), ["Yes", "No"]);
                            break;
                        case 7: {
                            function i() {
                                setTimeout((function() {
                                    ze.message(e, "Just kidding! Or am I... ok now please actually leave me alone here's your costume", -1, (function() {
                                        ze.blurPan(c.stage, (function() {
                                            C(), ze.achievementQueue("tauntLogo"), G.giant.owned = !0
                                        }))
                                    })), m = 10
                                }), 500)
                            }
                            m = 10, ze.message(e, "WARNING: THIS ACTION WILL COMPLETELY ERASE YOUR SAVE FILE!", -1, i, i, ["Continue", "Continue"])
                        }
                    }
                    u++
                }
            })), x[g.id] = g, g.interactive = !0, f.push(g), e.addChild(g), g.anchor.set(.5, .5), g.x += g.width / 2, g.y += g.height / 2;
            let w = o(n, 16);
            w.x = 90, w.y = g.y + g.height / 2, f.push(w), e.addChild(w);
            let I = 80,
                b = 0;
            for (let t = 0; t < i.length; t++) {
                let n = i[t];
                if (!n.hidden && (c.touchScreen || !n.mobile))
                    if (null == n.type) {
                        let t = new M((function() {
                            t.activated = !t.activated, t.activated ? (t.sprite.texture = he["Sprites/GameUI"][26], n.enable(t), n.value = !0) : (t.sprite.texture = he["Sprites/GameUI"][25], n.disable(t), n.value = !1)
                        }), n.value ? he["Sprites/GameUI"][26] : he["Sprites/GameUI"][25], {
                            scale: {
                                x: .75,
                                y: .75
                            }
                        });
                        t.sprite.x = I, t.sprite.y = 150 + b, e.addChild(t.sprite), t.activated = n.value;
                        let i = o(n.name, 24, "left", "middle");
                        i.x = 110, i.y = 148 + b, i.width > e.screen.width - I - i.x && (i.width = e.screen.width - I - i.x, i.scale.y = i.scale.x), e.addChild(i), f.push(t), f.push(i), b += 40
                    } else if ("button" == n.type) {
                    let t = new k((function() {
                        n.flash ? ze.flash(e, !1, n.enable) : n.enable()
                    }), I, 150 + b, 200, 30, n.name, 0, 0, .5, 1, "center");
                    e.addChild(t.element), f.push(t), b += 40
                } else if ("slider" == n.type) {
                    let t = 200,
                        i = 10,
                        a = I,
                        r = o(n.name, 20, "left", "middle");
                    r.x = I, r.y = 148 + b - 10, e.addChild(r);
                    let l = 150 + b + 20;
                    b += 50;
                    let d = new PIXI.NineSlicePlane(he.inputNineSlice[17], 25, 25, 25, 25);
                    d.width = t + 5 + i, d.height = i + 5, e.addChild(d), d.x = a - 2.5 - i / 2, d.y = l - 2.5 - i / 2;
                    let c = new PIXI.NineSlicePlane(he.inputNineSlice[15], 25, 25, 25, 25);
                    c.width = t + i, c.height = i, e.addChild(c), c.x = a - i / 2, c.y = l - i / 2;
                    let h = new PIXI.NineSlicePlane(he.inputNineSlice[16], 25, 25, 25, 25);
                    h.width = t / 2 - 4 + i, h.height = i - 4, e.addChild(h), h.x = a + 2 - i / 2, h.y = l + 2 - i / 2;
                    let p = new M((function() {}), he["Sprites/GameUI"][43], {
                        scale: {
                            x: .5,
                            y: .5
                        }
                    });
                    p.sprite.x = a, p.sprite.y = l, e.addChild(p.sprite), p.sprite.originalHitArea = p.sprite.hitArea, p.sprite.on("pointerdown", (function(e) {
                        p.sprite.hitArea = new PIXI.Rectangle(-3e3, -3e3, 6e3, 6e3), p.sprite.dragging = !0;
                        let t = e.clientX / s,
                            i = e.clientY / s;
                        p.sprite.dragOffset = {
                            x: t - p.sprite.x,
                            y: i - p.sprite.y
                        }
                    })), p.sprite.on("pointermove", (function(e) {
                        let i = e.clientX / s;
                        e.clientY, p.sprite.dragging && (p.sprite.x = Math.min(a + t, Math.max(a, i - p.sprite.dragOffset.x)), h.width = p.sprite.x - h.x, n.enable((p.sprite.x - a) / t), n.value = (p.sprite.x - a) / t)
                    })), p.sprite.on("pointerup", (function() {
                        p.sprite.dragging = !1, p.sprite.hitArea = p.sprite.originalHitArea, n.preview()
                    })), f.push(p), f.push(h), f.push(c), f.push(d), n.set = function(e) {
                        h.width = t * e - 4 + i, p.sprite.x = a + t * e
                    }, n.set(n.value), f.push(r)
                }
            }

            function C() {
                H();
                for (let e = 0; e < f.length; e++) f[e].destroy();
                l.destroy(), a.destroy(), r.destroy(), c.ticker.remove(p), d = !0, delete x[g.id]
            }
            return e
        },
        Oe = function(e) {
            let t = Math.floor(e / 1e3),
                i = t % 60 + "s",
                n = Math.floor(t / 60) % 60 + "m",
                o = Math.floor(t / 3600) % 24 + "h";
            return Math.floor(t / 86400) + "d " + o + " " + n + " " + i
        },
        Ne = [],
        Ge = function(e, i = 0, a = 0, r = "gtttatint") {
            let s = [],
                l = function() {};
            if ("tennis" == r || "tennis2" == r) {
                let t = new PIXI.Sprite(he["Sprites/Rooms"][15]);
                t.interactive = !0, t.x = e.screen.width / 2, t.y = e.screen.height / 2, t.anchor.set(.5, .5), t.tint = 12576249, e.addChild(t), s.push(t);
                let i = function(e, t) {
                        let i = new PIXI.Container;
                        e.addChild(i), i.pivot.x = -c.screen.width / 2, i.pivot.y = -c.screen.height / 2;
                        let n = Matter.Engine.create(),
                            o = {},
                            a = !1;
                        document.addEventListener("keydown", (function(e) {
                            let t = e.key.toLowerCase();
                            "ArrowLeft" == e.key && (t = "a"), "ArrowRight" == e.key && (t = "d"), "ArrowUp" == e.key && (t = " "), "w" == e.key && (t = " "), o[t] = !0, ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", " "].includes(e.key) && e.preventDefault()
                        })), document.addEventListener("keyup", (function(e) {
                            let t = e.key.toLowerCase();
                            "ArrowLeft" == e.key && (t = "a"), "ArrowRight" == e.key && (t = "d"), "ArrowUp" == e.key && (t = " "), "w" == e.key && (t = " "), o[t] = !1
                        })), document.addEventListener("pointerdown", (function() {
                            a = !0
                        })), document.addEventListener("pointerup", (function() {
                            a = !1
                        }));
                        let r = [],
                            s = [];
                        if (t) {
                            let e = {},
                                t = 1,
                                n = Matter.Bodies.polygon(50 * (Math.random() - .5), -600, 16, 100);
                            e.box = n;
                            let o = ke(pe.faceMinigame);
                            o.goto(98), o.scale.x = t, o.scale.y = t, i.addChild(o), e.sprite = o, o.interactive = !0, o.hitArea = new PIXI.Rectangle(-100, -100, 200, 200), v(o, (function() {
                                o.goto(97)
                            })), o.buttonId = P(), x[o.buttonId] = o, r.push(e), s.push(n)
                        }
                        for (let e = 0; e < c.screen.width / 360 * 150; e++) {
                            let t = {},
                                n = .5 + Math.random() / 2,
                                o = Matter.Bodies.polygon(400 * (Math.random() - .5), -400 - 20 * e, 16, 30 * n);
                            t.box = o;
                            let a = new PIXI.Sprite(he["Sprites/tennisBall"][Math.floor(Math.random() * he["Sprites/tennisBall"].length)]);
                            a.scale.x = n, a.scale.y = n, a.anchor.set(.5, .5), i.addChild(a), t.sprite = a, r.push(t), s.push(o)
                        }
                        let l = Matter.Bodies.rectangle(0, 150, 16e3, 120, {
                                isStatic: !0
                            }),
                            d = Matter.Bodies.rectangle(-c.screen.width / 2 - 100, -0, 20, 900, {
                                isStatic: !0
                            }),
                            h = Matter.Bodies.rectangle(c.screen.width / 2 + 100, -0, 20, 900, {
                                isStatic: !0
                            });
                        Matter.Composite.add(n.world, [l, ...s, d, h]);
                        let p = function(e) {
                            for (let e = 0; e < r.length; e++) {
                                let t = r[e].sprite,
                                    i = r[e].box;
                                t.rotation = i.angle, t.x = i.position.x, t.y = i.position.y
                            }
                            Matter.Engine.update(n, e * (1e3 / 60))
                        };
                        return c.ticker.add(p),
                            function() {
                                c.ticker.remove(p), Matter.World.clear(n.world), Matter.Engine.clear(n);
                                for (let e = 0; e < r.length; e++) null != r[e].sprite.destroyAnimation ? (r[e].sprite.destroyAnimation(), delete x[r[e].sprite.buttonId]) : r[e].sprite.destroy()
                            }
                    }(e, "tennis2" == r),
                    n = new PIXI.Sprite(he["Sprites/Rooms"][20]);
                n.x = 0, n.y = 0, e.addChild(n), n.blendMode = PIXI.BLEND_MODES.ADD, n.tint = 6737151, n.anchor.set(.5, .5), n.x = e.screen.width / 2, n.y = e.screen.height / 2, n.scale.y = 2, n.rotation = 1, n.alpha = .25, l = function() {
                    n.destroy(), i()
                }
            }
            if ("tennis3" == r) {
                let t = new PIXI.Sprite(he["Sprites/Rooms"][15]);
                t.interactive = !0, t.x = e.screen.width / 2, t.y = e.screen.height / 2, t.anchor.set(.5, .5), t.tint = 10830080, e.addChild(t), s.push(t);
                let i = function(e, t) {
                        let i = new PIXI.Container;
                        e.addChild(i), i.pivot.x = -c.screen.width / 2, i.pivot.y = -c.screen.height / 2;
                        let n = Matter.Engine.create(),
                            o = {},
                            a = !1;
                        document.addEventListener("keydown", (function(e) {
                            let t = e.key.toLowerCase();
                            "ArrowLeft" == e.key && (t = "a"), "ArrowRight" == e.key && (t = "d"), "ArrowUp" == e.key && (t = " "), "w" == e.key && (t = " "), o[t] = !0, ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", " "].includes(e.key) && e.preventDefault()
                        })), document.addEventListener("keyup", (function(e) {
                            let t = e.key.toLowerCase();
                            "ArrowLeft" == e.key && (t = "a"), "ArrowRight" == e.key && (t = "d"), "ArrowUp" == e.key && (t = " "), "w" == e.key && (t = " "), o[t] = !1
                        })), document.addEventListener("pointerdown", (function() {
                            a = !0
                        })), document.addEventListener("pointerup", (function() {
                            a = !1
                        }));
                        let r = [],
                            s = [];
                        if (t) {
                            let e = {},
                                t = 1,
                                n = Matter.Bodies.polygon(50 * (Math.random() - .5), -600, 16, 100);
                            e.box = n;
                            let o = ke(pe.faceMinigame);
                            o.goto(98), o.scale.x = t, o.scale.y = t, i.addChild(o), e.sprite = o, o.interactive = !0, o.hitArea = new PIXI.Rectangle(-100, -100, 200, 200), v(o, (function() {
                                o.goto(97)
                            })), o.buttonId = P(), x[o.buttonId] = o, r.push(e), s.push(n)
                        }
                        for (let e = 0; e < c.screen.width / 360 * 150; e++) {
                            let t = {},
                                n = .5 + Math.random() / 2,
                                o = Matter.Bodies.polygon(400 * (Math.random() - .5), -400 - 20 * e, 16, 30 * n);
                            t.box = o;
                            let a = new PIXI.Sprite(he["Sprites/tennisBall"][Math.floor(Math.random() * he["Sprites/tennisBall"].length)]);
                            a.scale.x = n, a.scale.y = n, a.anchor.set(.5, .5), i.addChild(a), t.sprite = a, r.push(t), s.push(o)
                        }
                        let l = Matter.Bodies.rectangle(0, 150, 16e3, 120, {
                                isStatic: !0
                            }),
                            d = Matter.Bodies.rectangle(-c.screen.width / 2 - 100, -0, 20, 900, {
                                isStatic: !0
                            }),
                            h = Matter.Bodies.rectangle(c.screen.width / 2 + 100, -0, 20, 900, {
                                isStatic: !0
                            });
                        Matter.Composite.add(n.world, [l, ...s, d, h]);
                        let p = function(e) {
                            for (let e = 0; e < r.length; e++) {
                                let t = r[e].sprite,
                                    i = r[e].box;
                                t.rotation = i.angle, t.x = i.position.x, t.y = i.position.y
                            }
                            Matter.Engine.update(n, e * (1e3 / 60))
                        };
                        return c.ticker.add(p),
                            function() {
                                c.ticker.remove(p), Matter.World.clear(n.world), Matter.Engine.clear(n);
                                for (let e = 0; e < r.length; e++) null != r[e].sprite.destroyAnimation ? (r[e].sprite.destroyAnimation(), delete x[r[e].sprite.buttonId]) : r[e].sprite.destroy()
                            }
                    }(e, "tennis3" == r),
                    n = new PIXI.Sprite(he["Sprites/Rooms"][20]);
                n.x = 0, n.y = 0, e.addChild(n), n.blendMode = PIXI.BLEND_MODES.ADD, n.tint = 6737151, n.anchor.set(.5, .5), n.x = e.screen.width / 2, n.y = e.screen.height / 2, n.scale.y = 2, n.rotation = 1, n.alpha = .25, l = function() {
                    n.destroy(), i()
                }
            }
            if ("gtttatint" == r) {
                let t = new PIXI.Sprite(he["Sprites/Rooms"][15]);
                t.interactive = !0, t.x = e.screen.width / 2, t.y = e.screen.height / 2, t.anchor.set(.5, .5), t.tint = 12576249, e.addChild(t), s.push(t);
                let i = Math.random,
                    n = {},
                    o = 0;
                for (let t = 0; t < 60; t++) {
                    let a = new PIXI.Sprite(he["Sprites/Clouds"][Math.floor(3 * i())]);
                    e.addChild(a), a.anchor.set(.5, .5), a.y = i() * e.screen.height, a.orig = {
                        y: a.y
                    }, a.scale.x = .2 + t / 150, a.scale.y = .2 + t / 150, a.speed = 1, a.x = e.screen.width / 2 + (i() - .5) * p.linear(e.screen.width, 360, .25) * p.linear(a.scale.x, 1, .5), i() > .5 && (a.scale.x *= -1);
                    let r = a.texture.trim;
                    null == r && (r = a.texture._frame), a.pivot.y = -r.height, n[o++] = a
                }
                for (let t = 0; t < 10; t++) {
                    he.inputNineSlice[6];
                    let a = new PIXI.Sprite(he["Sprites/Clouds"][3]);
                    e.addChild(a), a.y = e.screen.height / 10 * t, a.orig = {
                        y: a.y
                    }, a.scale.x = 1, a.scale.y = 1, a.speed = 8, a.x = e.screen.width / 2 + 360 * (i() - .5) * p.linear(a.scale.x, 1, .5), i() > .5 && (a.scale.x *= -1);
                    let r = a.texture.trim;
                    null == r && (r = a.texture._frame), a.pivot.y = -r.height, n[o++] = a
                }
                let a = ke(pe.GTTTATINTLOSE);
                a.loop = !0, a.play(), a.x = e.screen.width / 2, a.y = 0, e.addChild(a);
                let r = 1e3 * Math.random(),
                    d = function() {
                        a.x = p.linear(a.x, e.screen.width / 2 + 10 * Math.cos(r / 25), .025, Qe), a.y = p.linear(a.y, e.screen.height / 2 - 50 + 10 * Math.cos(r / 30), .025, Qe), a.rotation = p.linear(a.rotation, .1 * Math.cos(r / 20), .1, Qe), r += Qe;
                        for (let t in n) n[t].y -= n[t].scale.y * n[t].speed * 2 * Qe, n[t].y < -100 && (n[t].y = e.screen.height)
                    };
                c.ticker.add(d);
                let h = new PIXI.Sprite(he["Sprites/Rooms"][20]);
                h.x = 0, h.y = 0, e.addChild(h), h.blendMode = PIXI.BLEND_MODES.ADD, h.tint = 16776960, h.anchor.set(.5, .5), h.x = e.screen.width / 2, h.y = e.screen.height / 2, h.scale.y = 2, h.rotation = 1, h.alpha = .1, l = function() {
                    for (let e in n) n[e].destroy(), delete n[e];
                    h.destroy(), a.destroyAnimation(), c.ticker.remove(d)
                }
            }
            let d = function() {
                    h.y = p.linear(h.y, e.screen.height / 2 + 80, .1, Qe)
                },
                h = (new PIXI.Container, new PIXI.NineSlicePlane(he.inputNineSlice[10], 15, 15, 15, 15));
            h.x = 0, h.y = e.screen.height, h.width = e.screen.width, h.height = e.screen.height / 2 + 100, e.addChild(h);
            let u = o("Game Over!", 32, "center");
            "tennis2" == r && (u.text = "Completed!"), u.x = e.screen.width / 2, u.y = 30, h.addChild(u);
            "tennis3" == r && (u.text = "Endless Mode"), u.x = e.screen.width / 2, u.y = 30, h.addChild(u);
            let m = ["Score: " + i, "Coins: " + a];
            for (let t = 0; t < m.length; t++) {
                let i = o(m[t], 20, "left");
                i.x = e.screen.width / 2 - u.width / 2 - 30, i.y = 70 + 30 * t, h.addChild(i), s.push(i)
            }
            let y = !1,
                g = function() {
                    y || (y = !0, a > 0 && n.sfx && (ue.collect.stop(), ue.collect.play()), function() {
                        c.ticker.add(S);
                        for (let t = 0; t < C; t++) {
                            let t = new PIXI.Sprite(he["Sprites/GameUI"][14]);
                            t.scale.x = .4 + .5 * Math.random(), t.scale.y = t.scale.x, t.anchor.set(.5, .5), t.y = w.transform.worldTransform.ty, t.vr = Math.random() - .5, t.facing = Math.random() * Math.PI * 2;
                            let i = 1 + 8 * Math.random();
                            t.vx = i * Math.cos(t.facing), t.vy = i * Math.sin(t.facing), t.x = w.transform.worldTransform.tx, e.addChild(t), I[b++] = t
                        }
                        0 != C && (w.visible = !1), setTimeout((function() {
                            t.coins += a, H()
                        }), 500)
                    }())
                },
                w = new PIXI.Sprite(he["Sprites/GameUI"][14]);
            h.addChild(w), w.x = e.screen.width / 2 - u.width / 2 - 50, w.y = 112, w.scale.x = .5, w.scale.y = .5, w.anchor.set(.5, .5), c.ticker.add(d);
            let I = {},
                b = 0,
                C = Math.min(1e4, a),
                S = function() {
                    for (let e in I) {
                        let t = I[e];
                        t.y += t.vy * Qe, t.x += t.vx * Qe;
                        let i = 50,
                            n = 50;
                        t.facing = Math.atan2(n - t.y, i - t.x);
                        let o = 8,
                            a = f(t.x, t.y, i, n);
                        a < 50 ? (t.vx = o * Math.cos(t.facing), t.vy = o * Math.sin(t.facing)) : (t.vx = p.linear(t.vx, o * Math.cos(t.facing), .02, Qe), t.vy = p.linear(t.vy, o * Math.sin(t.facing), .02, Qe)), t.rotation += t.vr / 10 * Qe, a < 5 * Qe && (t.destroy(), C--, delete I[e]), C <= 0 && c.ticker.remove(S)
                    }
                    A && (k.updateCounter(p.linear(k.getCounterAmount(), t.coins, .05, Qe)), k.y = p.linear(k.y, 20, .1, Qe))
                },
                k = ze.coinCounter(e);

            function T() {
                c.ticker.remove(d), l(), u.destroy(), k.destroyCounter(), A = !1;
                for (let e = 0; e < s.length; e++) s[e].destroy()
            }
            k.x = 20, k.y = -80, e.addChild(k);
            let A = !0,
                L = !1,
                E = new M((function() {
                    L || (L = !0, g(), setTimeout((function() {
                        ze.blurPan(e, (function() {
                            T(), ze.gameList(e)
                        }))
                    }), 1e3))
                }), he["Sprites/GameUI"][49], {
                    x: e.screen.width / 2 - 80,
                    y: 170,
                    scale: {
                        x: .75,
                        y: .75
                    }
                });
            h.addChild(E.sprite);
            let D = new M((function() {
                L || (L = !0, g(), setTimeout((function() {
                    ze.blurPan(e, (function() {
                        T(), ze[r](e)
                    }))
                }), 1e3))
            }), he["Sprites/GameUI"][50], {
                x: e.screen.width / 2 + 80,
                y: 170,
                scale: {
                    x: .75,
                    y: .75
                }
            });
            h.addChild(D.sprite);
            let X = o("Home", 20, "center");
            h.addChild(X), X.x = E.sprite.x, X.y = E.sprite.y + 50;
            let O = o("Retry", 20, "center");
            h.addChild(O), O.x = D.sprite.x, O.y = D.sprite.y + 50, s.push(O), s.push(X), s.push(E), s.push(D), s.push(h)
        };
    n.hideFridgeExit = !0;
    let Be, Fe, Re, Ue = function() {
        let e = new PIXI.Container,
            t = new PIXI.Sprite(he["Sprites/Rooms"][5]);
        return ze.initializeScreenResolution(e), e.addChild(t), t.interactive = !0, t.x = e.width / 2, t.y = e.height / 2, t.anchor.set(.5, .5), t.scale.x = 1, t.scale.y = 1, e
    };
    const ze = {
        language: function(e = function() {}) {
            let t = new PIXI.Sprite(he["Sprites/Rooms"][12]);
            c.stage.addChild(t), t.interactive = !0, t.x = c.screen.width / 2, t.y = c.screen.height / 2, t.anchor.set(.5, .5), t.scale.x = 1, t.scale.y = 1;
            let i = new PIXI.Container;
            c.stage.addChild(i);
            let r = 0,
                l = {},
                d = [],
                h = o("", 32, "center");
            h.x = c.screen.width / 2, h.y = c.screen.height - 150, n.costume;
            let p = {},
                u = new PIXI.Container,
                m = new PIXI.Graphics;
            u.mask = m, c.stage.addChild(u), u.x = 40, u.y = 80;
            let y = c.screen.width - 80,
                f = c.screen.height - 80;
            m.beginFill(0), m.drawRect(u.x, u.y, y, f), m.endFill(), u.interactive = !0, u.on("pointerdown", (function(e) {
                let t = e.clientY / s;
                u.dragOffset = {
                    y: t - u.y
                }, u.prevY = u.y, u.vy = 0, u.scrolling = !0
            })), u.vy = 0;
            let g = new PIXI.Sprite(he["Sprites/Rooms"][11]);
            g.alpha = 0, c.stage.addChild(g), g.x = u.x, g.y = u.y + f - 100, g.width = y, g.height = 100;
            for (let e in Pe) {
                let t = Pe[e];
                if (t.hidden) continue;
                let i = !1;
                t.owned || -1 != t.cost || (i = !0);
                let s = new k((function() {
                    h.text = ""
                }), 0, 0 + 84 * r, y, 80, "", 0, 0, 0, 2);
                p[e] = s, s.element.interactive = !1, u.addChild(s.element), new PIXI.Rectangle(0, 0, 0, 0);
                let l, c = new PIXI.BitmapText(t.lang, {
                    fontSize: 24,
                    fontName: "arial"
                });
                if (c.x = 20, c.y = 5, s.element.addChild(c), null != t.translator) {
                    let e = o(a.ui.translator + ": " + t.translator.name, 12, "left", "middle", 1);
                    e.x = 20, e.y = 50, s.element.addChild(e)
                }
                c.width > y - 50 && (c.width = y - 50), c.scale.y = c.scale.x, -1 == t.sprite && (l.x -= 80, c.x -= 80), console.log(t);
                let m = new k((function() {
                        if (t.downloaded) return void ze.message(a.settings.enableReload, he["Sprites/GameUI"][24], (function() {
                            n.language = e, H(), setTimeout((function() {
                                window.location = window.location
                            }), 500)
                        }), (function() {}), [a.ui.reload, a.ui.cancel]);
                        let i = ze.message("Downloading...", he["Sprites/GameUI"][24]);
                        PIXI.Assets.load(t.file + ".json").then((t => {
                            setTimeout((function() {
                                i.exit(), t.version = f, localStorage.setItem(e, JSON.stringify(t)), n.language = e, H(), setTimeout((function() {
                                    window.location = window.location
                                }), 500)
                            }), 2e3)
                        }))
                    }), y - 10, 70, 100, 20, t.button[t.downloaded ? 1 : 0], 0, 1, 1, 1, "center"),
                    f = "";
                PIXI.Assets.load(t.file + "-version.json").then((i => {
                    if (f = i.version, null != localStorage.getItem(e)) try {
                        let n = JSON.parse(localStorage.getItem(e));
                        i.version != n.version && (m.inputText.text = t.button[2], t.downloaded = !1)
                    } catch (i) {}
                })), s.element.addChild(m.element), d.push(c), d.push(s), r++
            }
            let x = ze.exitButton((function() {
                e(), H(), ze.flash(!1, v)
            }), c.screen.width - 40, 40, .4, 0);
            c.stage.addChild(x.sprite);
            let w = !1;

            function v() {
                for (let e in l) null != l[e].destroy && l[e].destroy(), delete l[e];
                h.destroy(), x.destroy(), t.destroy();
                for (let e = 0; e < d.length; e++) d[e].destroyed || d[e].destroy();
                w = !0
            }
            c.stage.addChild(h), d.push(g), d.push(u), d.push(m)
        },
        oddDroplets: function(e, t = "", i = !1) {
            let r = function() {
                n.minigameMusic && ue.howitbegins.play()
            };
            ue.howitbegins.on("end", r), n.minigameMusic && (ue.howitbegins.play(), ue.howitbegins.volume = 1);
            let s = new PIXI.Sprite(he["Sprites/Rooms"][19]);
            s.interactive = !0, s.x = c.screen.width / 2, s.y = c.screen.height / 2, s.anchor.set(.5, .5), e.addChild(s);
            let l, d = Date.now(),
                p = new PIXI.Container,
                u = 0,
                m = 0,
                y = function() {
                    let t = [];
                    l = function() {
                        for (let e = 0; e < t.length; e++) t[e].destroy()
                    };
                    let i = 4,
                        o = 2,
                        a = 1,
                        r = {
                            x: c.screen.width / 2.5,
                            y: c.screen.height / 3
                        };
                    switch (m) {
                        case 1:
                            i = 6, c.screen.width > 640 ? (o = 3, a = .9, r.x = c.screen.width / 3.5) : (r.y /= 1.25, a = .92);
                            break;
                        case 2:
                            i = 10, c.screen.width > 640 ? (o = 5, a = .9, r.x = c.screen.width / 6) : (r.y /= 2, o = 2, a = .5);
                            break;
                        case 3:
                            i = 15, c.screen.width > 640 ? (o = 5, a = .75, r.x = c.screen.width / 6, r.y *= .9) : (r.y /= 2, o = 3, r.x *= .75, a = .5);
                            break;
                        case 4:
                            i = 24, c.screen.width > 640 ? (o = 6, a = .5, r.x = c.screen.width / 6, r.y = c.screen.height / 6) : (r.x = c.screen.width / 5, r.y = c.screen.height / 7, o = 4, a = .4)
                    }
                    let d = 0,
                        u = Math.floor(Math.random() * i),
                        y = 2 * Math.floor(20 * Math.random());
                    for (let e = 0; e < i; e++) {
                        let i = ke(pe.oddDroplets),
                            s = ke(pe.oddDroplets);
                        for (let e = 0; e < s.layers.length; e++) {
                            let t = s[i.layers[e]];
                            null != he[t.symbol + "OUTLINE12"] && z(t, t.symbol + "OUTLINE12")
                        }
                        t[e] = {
                            destroy: function() {
                                i.destroyAnimation(), s.destroyAnimation()
                            },
                            disableInteractivity: function() {
                                i.interactive = !1
                            }
                        };
                        let l = y + (e == u ? 1 : 0);
                        i.hitArea = new PIXI.Rectangle(-45, -75, 90, 150), i.goto(l), i.x = c.screen.width / 2 - (o - 1) / 2 * r.x + r.x * (e % o), i.y = c.screen.height / 2 + Math.floor(e / o) * r.y, d = Math.floor(e / o), i.scale.x = a, i.scale.y = a, s.goto(l), s.x = i.x, s.y = i.y, s.scale.x = a, s.scale.y = a, p.addChild(s), p.addChild(i), i.interactive = !0, i.on("pointerup", (function() {
                            for (let e = 0; e < t.length; e++) t[e].disableInteractivity();
                            let o = 1 + Math.floor(4 * Math.random());
                            n.sfx && (ue["slap" + o].attack = 0, ue["slap" + o].stop(), ue["slap" + o].play());
                            let r = ke(pe.Teardrop, h.Teardrop);
                            G.outline.apply(r);
                            let l = ke(pe.Teardrop, h.Teardrop);
                            p.addChild(r), p.addChild(l), r.gotoPart("Slap"), r.d.visible = !1, r.play(), r.x = i.x, r.y = i.y + 80 * a, r.scale.x = a, r.scale.y = a, l.gotoPart("Slap"), l.d.visible = !1, l.play(), l.x = i.x, l.y = i.y + 80 * a, l.scale.x = a, l.scale.y = a, i.destroy(), s.destroy(), t[e] = {
                                destroy: function() {
                                    r.destroyAnimation(), l.destroyAnimation()
                                }
                            }, u == e ? (x++, 40 == x && ze.achievementQueue("oddDroplets40"), 100 == x && ze.achievementQueue("oddDroplets100"), 500 == x && ze.achievementQueue("masterofodddroplets"), f += v) : (x = 0, f -= v, ue.fail.play(), L()), f < 0 && (f = 0), C.text = "score: " + f, I = w + 60
                        }))
                    }
                    e.addChild(p), s.scale.x = .95, s.scale.y = .95, w = 0, p.pivot.x = c.screen.width / 2, p.pivot.y = c.screen.height / 2 - -d * r.y / 2, p.x = p.pivot.x, p.y = p.pivot.y + -d * r.y / 2
                },
                f = 0,
                g = function() {
                    ue.howitbegins.off("end", r), ue.howitbegins.stop(), C.destroy();
                    for (let e = 0; e < T.length; e++) T[e].destroyAnimation();
                    s.destroy(), c.ticker.remove(b), ze.gameList(e, "oddDroplets"), ze.results(e, f, Math.floor(f / 100)), P.destroyPause(), l(), window.onblur = function() {}
                },
                x = 0,
                w = 0;
            y();
            let v = 0,
                I = -1,
                b = function() {
                    let t = 600 * (m / 2 + 1);
                    if (v = Math.floor(eases.easeOutQuint(Math.max(0, Math.min(t, w - 60)), 200, -190, t) * (m / 2 + 1)), p.scale.x = eases.easeOutQuad(Math.min(50, w), .9, .1, 50), p.scale.y = p.scale.x, s.scale.x = p.scale.x / 2 + .5, s.scale.y = s.scale.x, w += Qe, I <= w && -1 != I) {
                        if (I = -1, P.interactive = !1, A <= -1) return void ze.blurPan(e, g);
                        ze.blurPan(e, (function() {
                            if (P.interactive = !0, l(), u++, m = Math.floor(u / 10), m >= 5) {
                                let e = [0, 0, 1, 1, 1, 1, 2, 2, 2, 0, 0, 1, 1, 1, 1, 2, 2, 2, 3, 4];
                                m = e[Math.floor(Math.random() * e.length)]
                            }
                            y()
                        }))
                    }
                };
            c.ticker.add(b);
            let C = o("score: 0", 32);
            C.anchor.set(0, 0), C.x = 20, C.y = 20, e.addChild(C), window.onblur = function() {
                S || M()
            };
            let S = !1,
                k = 0;

            function M() {
                S = !S, P.changePause(S), S ? (n.inGame = !1, c.ticker.remove(b), k = -Date.now(), ue.howitbegins.pause(), ze.message(e, a.ui.gamePaused, he["Sprites/GameUI"][32], (function() {
                    M()
                }), (function() {
                    ze.blurPan(e, (function() {
                        g()
                    }))
                }), [a.ui.play, a.ui.home], !1)) : (k += Date.now(), d += k, n.inGame = !0, n.minigameMusic && ue.howitbegins.play(), c.ticker.add(b))
            }
            let P = ze.pauseButton((function() {
                M()
            }), .4);
            e.addChild(P), P.x = c.screen.width - 40, P.y = 40;
            let T = [];
            for (let t = 0; t < 3; t++) {
                let i = ke(pe.healthLose);
                e.addChild(i), i.gotoAndStop(0), i.x = c.screen.width - 90 - 35 * t, i.y = 40, i.scale.x = .4, i.scale.y = .4, T.push(i)
            }
            let A = 2,
                L = function() {
                    A--;
                    for (let e = 0; e < T.length; e++) e > A && T[e].play()
                }
        },
        dropletDodge: function(e, t = "", i = !1) {
            ze.initializeScreenResolution(e);
            let r = function() {
                n.minigameMusic && (ue.howitbegins.play(), ue.howitbegins.sourceNode.playbackRate.value = 1.05)
            };
            ue.howitbegins.on("end", r), n.minigameMusic && (ue.howitbegins.play(), ue.howitbegins.sourceNode.playbackRate.value = 1.05, ue.howitbegins.volume = 1);
            let s = {
                    0: {
                        name: "Coin",
                        collect: function() {
                            E(2)
                        }
                    },
                    1: {
                        name: "Silver Coin",
                        collect: function() {
                            E(1)
                        }
                    },
                    2: {
                        name: "Heart",
                        collect: function() {}
                    },
                    3: {
                        name: "Fireball",
                        float: !0,
                        collect: function() {}
                    }
                },
                l = {
                    0: {
                        name: "Spike",
                        box: {
                            x: .35,
                            y: .2,
                            width: .3,
                            height: .4
                        },
                        hurt: !0
                    },
                    1: {
                        name: "Short Spike",
                        box: {
                            x: .35,
                            y: .2,
                            width: .3,
                            height: .4
                        },
                        hurt: !0
                    },
                    2: {
                        name: "Double Spike",
                        box: {
                            x: .35,
                            y: .2,
                            width: .3,
                            height: .4
                        },
                        hurt: !0
                    }
                },
                d = new PIXI.TilingSprite(he["Sprites/dodgeBackgrounds"][2]);
            d.interactive = !0, d.x = 0, d.y = 0, d.width = e.screen.width, d.height = e.screen.height, d.tileScale.x = 1.28, d.tileScale.y = 1.28, e.addChild(d);
            let u = new PIXI.TilingSprite(he["Sprites/dodgeBackgrounds"][3]);
            u.interactive = !0, u.x = 0, u.y = 0, u.width = e.screen.width, u.height = e.screen.height, u.tileScale.x = 1.28, u.tileScale.y = 1.28, e.addChild(u);
            let m = Date.now(),
                y = {},
                x = !1;
            document.addEventListener("keydown", (function(e) {
                let t = e.key.toLowerCase();
                "ArrowLeft" == e.key && (t = "a"), "ArrowRight" == e.key && (t = "d"), "ArrowUp" == e.key && (t = " "), "w" == e.key && (t = " "), y[t] = !0, ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", " "].includes(e.key) && e.preventDefault()
            })), document.addEventListener("keyup", (function(e) {
                let t = e.key.toLowerCase();
                "ArrowLeft" == e.key && (t = "a"), "ArrowRight" == e.key && (t = "d"), "ArrowUp" == e.key && (t = " "), "w" == e.key && (t = " "), y[t] = !1
            })), document.addEventListener("pointerdown", (function() {
                x = !0
            })), document.addEventListener("pointerup", (function() {
                x = !1
            }));
            let w = {
                    x: 80,
                    y: -100,
                    width: 60,
                    height: 60,
                    vx: 0,
                    vy: 0,
                    boost: 0,
                    box: new PIXI.Graphics,
                    hurt: !1,
                    invincibility: 0
                },
                v = function() {
                    w.hurt || (y.a && (w.vx -= .5 * Qe), w.vx += .5 * Qe), w.x += w.vx * Qe, w.y += w.vy * Qe, w.vx = p.linear(w.vx, 0, 1 - .92, Qe), w.vy += .4 * Qe, w.vy += w.boost, w.vy > 10 && (w.vy = 10), w.boost /= 16, C.x = w.x + w.width / 2, C.y = w.y + w.height, w.vx, C.scale.x = p.linear(C.scale.x, .4 - Math.abs(w.vy / 100), .1, Qe), C.scale.y = p.linear(C.scale.y, .4 + Math.abs(w.vy / 100), .5, Qe), w.box.x = w.x, w.box.y = w.y, w.isOnGround = !1;
                    for (let e in D) {
                        let t = D[e];
                        if (t.transparent && (t.sprite.rotation += (t.rotateTo < 0 ? -.1 : .1) * Qe, t.sprite.x += t.sprite.vx * Qe, t.sprite.y += t.sprite.vy * Qe, t.sprite.vy += .2 * Qe, t.sprite.vx = p.linear(t.sprite.vx, 0, .05)), g(w, t) && !t.transparent && (t.ladder || w.vy > 0 && w.y < t.y - w.height + (4 + w.vy) * Qe)) {
                            t.broken && (t.sprite.vy = w.vy / 2, t.transparent = !0, t.rotateTo = w.x + w.width / 2 - t.sprite.x, t.sprite.vx = 10 * (Math.random() - .5)), t.ladder || (w.y = t.y - w.height, w.isOnGround = !0), t.blocky && !i && ze.achievementQueue("blockplatformgtttatint"), w.vy = 0, w.max < t.id && !t.ladder && (t.id, w.max), w.max = t.id;
                            let e = 7;
                            t.boost && (e *= 2), (y[" "] || t.boost || t.ladder) && (t.ladder ? (w.y -= 2 * Qe, w.vy -= 10) : w.boost -= 10)
                        }
                    }
                    for (let e in D) D[e];
                    I.x = p.linear(I.x, -w.x - e.screen.width / 5, .1, Qe), I.y = p.linear(I.y, Math.max(0, -w.y), .1, Qe), d.tilePosition.x = I.x / 10, u.tilePosition.x = I.x / 5, u.y = I.y / 5, w.hurt || (w.isOnGround ? y.a ? C.gotoPart("Idle") : C.gotoPart("Running") : C.gotoPart("Jump"));
                    for (let e in Y)
                        if (s[Y[e].item].float && (Y[e].y += Y[e].vy * Qe, Y[e].x += Y[e].vx * Qe, Y[e].sprite.x = Y[e].x, Y[e].sprite.y = Y[e].y), g(w, Y[e]) && 1 != Y[e].collecting && (s[Y[e].item].collect(), s[Y[e].item].float || (Y[e].collecting = !0)), Y[e].collecting) {
                            Y[e].y += Y[e].vy * Qe, Y[e].x += Y[e].vx * Qe, Y[e].sprite.x = Y[e].x, Y[e].sprite.y = Y[e].y;
                            let t = w.x + w.width / 2 + w.vx,
                                i = w.y + w.height / 2 + w.vy;
                            Y[e].facing = Math.atan2(i - Y[e].y, t - Y[e].x);
                            let n = 32,
                                o = f(Y[e].x, Y[e].y, t, i);
                            Y[e].sprite.scale.x = Math.min(1, o / 40), Y[e].sprite.scale.y = Y[e].sprite.scale.x, o < 20 ? (Y[e].vx = n / 2 * Math.cos(Y[e].facing), Y[e].vy = n / 2 * Math.sin(Y[e].facing)) : (Y[e].vx = p.linear(Y[e].vx, n * Math.cos(Y[e].facing), .05, Qe), Y[e].vy = p.linear(Y[e].vy, n * Math.sin(Y[e].facing), .05, Qe)), Y[e].rotation += Y[e].vr / 10 * Qe, o < 10 * Qe && (Y[e].sprite.destroy(), delete Y[e])
                        } for (let e in K) g(w, K[e]) && l[K[e].object].hurt && 1 != w.hurt && w.invincibility <= 0 && (re(), w.hurt = !0, C.gotoPart("Hurt"), w.vx = -5, w.vy = -5, C.onAnimationEnd = function() {
                        w.vy = -5, C.onAnimationEnd = function() {}, w.hurt = !1, w.invincibility = 120
                    });
                    w.invincibility > 0 ? (w.invincibility -= Qe, C.visible = !C.visible) : C.visible = !0, w.x + 1e3 > N && Q()
                };
            c.ticker.add(v);
            let I = new PIXI.Container;
            e.addChild(I);
            let b = new PIXI.Graphics;
            I.addChild(b), I.addChild(w.box), I.pivot.x = -e.screen.width / 2, I.pivot.y = -e.screen.height / 2;
            let C = ke(pe.dropletDodge, h.dropletDodge),
                S = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"];
            for (let e = 0; e < S.length; e++) null == C.a[S[e]] && (C.a[S[e]] = {
                symbol: "Sprites/Empty",
                currentFrame: 0,
                gotoAndStop: function() {}
            });

            function k(t, i, n, o) {
                let a = new M((function() {}), he["Sprites/GameUI"][n], {
                    x: t,
                    y: i,
                    scale: {
                        x: 1,
                        y: 1
                    }
                });
                a.sprite.on("pointerdown", (function() {
                    y[o] = !0
                })), a.sprite.on("pointermove", (function() {
                    x && a.sprite.emit("pointerdown")
                })), a.sprite.on("pointerout", (function() {
                    a.sprite.emit("pointerup")
                })), a.sprite.on("pointerup", (function() {
                    y[o] = !1
                })), e.addChild(a.sprite)
            }
            G[n.costume].apply(C), I.addChild(C), C.x = e.screen.width / 2, C.y = e.screen.height / 2, C.scale.x = .4, C.scale.y = .4, C.play(), C.gotoPart("Idle"), c.touchScreen && (k(150, e.screen.height - 50, 54, "a"), k(e.screen.width - 100, e.screen.height - 50, 53, " "));
            let P = new PIXI.Sprite(he["Sprites/GameUI"][55]);
            P.anchor.set(.5, .5), P.x = e.screen.width / 2, P.y = -20, e.addChild(P);
            let T = o("0", 24);
            T.x = -100, T.y = 35, P.addChild(T);
            let A = o("0", 24);
            A.x = 55, A.y = 35, P.addChild(A);
            let L = 0,
                E = function(e) {
                    L += e, T.text = L
                },
                D = {},
                X = p.linear(e.screen.width - 60, 300, .75),
                O = 0,
                N = 0,
                B = 0;

            function F(e, t, i, n) {
                let o = function() {
                    let o = 5 * t;
                    return o = 9 * (o << 7 | o >>> 25), n ^= t, t ^= i ^= e, e ^= n, n = n << 11 | n >>> 21, (o >>> 0) / 2 ** 32
                };
                for (let e = 0; e < 100; e++) o();
                return o
            }
            let R = function(e) {
                let t = [];
                for (let i = 0; i < 4; i++) {
                    let n = 2 ** 32;
                    for (let t = 0; t < 4; t++) n -= (e.charCodeAt(t + 4 * i) + 30 * i) ** 4;
                    t.push(n)
                }
                return t
            };
            if ("" == t) {
                let e = function() {
                    return Math.floor(1e6 + 9999999 * Math.random()).toString(36)
                };
                t = e() + e() + e() + e()
            }
            if (t.length < 16) {
                let e = "";
                for (let i = 0; i < 16; i++) e += t, t.length / 2 == Math.floor(t.length / 2) && (e += "}");
                t = e
            }
            let U = R(t),
                z = F(U[0], U[1], U[2], U[3]),
                _ = 0,
                W = 0,
                j = 0,
                V = 0,
                H = 10 + Math.floor(10 * z());

            function Q(i = !1) {
                50 * Math.floor(B / 50) == B && 0 != B && (t = function(e) {
                    let t = "";
                    for (let i = 0; i < e.length; i++) t += 0 == i ? e[e.length - 1] : e[i - 1];
                    return t
                }(t), U = R(t), z = F(U[0], U[1], U[2], U[3])), H--, 0 == H && (V = Math.floor(3 * z()), H = 0 == V ? 5 + Math.floor(5 * z()) : 10 + Math.floor(10 * z()), 2 == V && (H = 1));
                let n = 40 * (4 + Math.floor(10 * z()));
                2 == V && (n *= 4), z();
                let o = !(z() < .5);
                j >= 200 && (o = !0);
                let a = N + 40 * Math.floor(1 + 2 * z()),
                    r = j + (o ? 40 : -40);
                o && z() > .75 && (r -= 80);
                let s = !1;
                !o && z() > .75 && (r += 80, a += 160, s = !0), r >= 240 && (r = 240), j = r, N = a + n;
                let l = {
                    x: a,
                    y: r,
                    width: n,
                    height: 40,
                    id: B,
                    transparent: !1,
                    ladder: _ > 1,
                    blocky: W > 0
                };
                O < X && (O += 12);
                let d = he.inputNineSlice[19];
                1 == V && (d = he.inputNineSlice[6]), 2 == V && (d = he.inputNineSlice[20]);
                let c = new PIXI.NineSlicePlane(d, 25, 25, 25, 25);
                c.width = l.width, c.height = 0 == B ? e.screen.height : l.height / 4, 2 == V && (c.height *= 2), 0 == V && (c.height = 3e3 - r), c.pivot.x = l.width / 2, c.pivot.y = c.height / 2, c.x = l.x + c.pivot.x, c.y = l.y + c.pivot.y, c.vy = 0, c.vx = 0, I.addChild(c), l.sprite = c, c.zIndex = 0, D[B] = l, B++, _--, W--;
                let h = function(e, t) {
                    let i = {
                            x: e,
                            y: t,
                            width: 60,
                            height: 60,
                            vx: 5,
                            vy: 0,
                            boost: 0
                        },
                        n = {
                            a: !1,
                            d: !1,
                            " ": !1
                        };
                    return i.setKey = function(e, t) {
                        n[e] = t
                    }, i.nextFrame = function() {
                        n.a && (i.vx -= .5), i.vx += .5, i.x += i.vx, i.y += i.vy, i.vx = p.linear(i.vx, 0, 1 - .92), i.vy += .4, i.vy += i.boost, i.vy > 10 && (i.vy = 10), i.boost /= 16, i.isOnGround = !1;
                        for (let e in D) {
                            let t = D[e];
                            g(i, t) && !t.transparent && (t.ladder || i.vy > 0 && i.y < t.y - i.height + (4 + i.vy) * Qe) && (i.hurt ? i.vy *= -2 : i.vy = 0, i.max < t.id && !t.ladder && (t.id, i.max), i.max = t.id, (n[" "] || t.boost || t.ladder) && (t.ladder ? (i.y -= 2, i.vy -= 10) : i.hurt ? i.boost -= 5 : i.boost -= 10))
                        }
                    }, i.simulate = function(e) {
                        let t = [];
                        for (let n = 0; n < e; n++) i.nextFrame(), t.push({
                            x: i.x,
                            y: i.y
                        });
                        return t
                    }, i
                }(a + n - 50, r - w.height);
                h.setKey("d", !0), h.setKey(" ", !0);
                let u = h.simulate(50),
                    m = {};
                if (z() > .75) {
                    let e = z() > .95;
                    for (let t = 0; t < 2; t++)
                        for (let i = 0; i < u.length; i++) {
                            let n, o, a = u[i].x,
                                r = u[i].y + 40 * t;
                            for (let e = 0; e < 3; e++)
                                for (let t = 0; t < 3; t++) {
                                    let i = Math.round(a / 40),
                                        s = Math.round(r / 40);
                                    g({
                                        x: a,
                                        y: r,
                                        width: 0,
                                        height: 0
                                    }, {
                                        x: 40 * i + 40 * e,
                                        y: 40 * s + 40 * t,
                                        width: 40,
                                        height: 40
                                    }) && (n = i + e, o = s + t)
                                }
                            null == m[n + " " + o] && (m[n + " " + o] = !0, Z(e || i > 45 ? 0 : 1, 40 * n, 40 * o))
                        }
                }
                let y = z() > .5 && l.width > 160 ? 1 + Math.round(z()) : 0,
                    f = Math.round(2 * (z() - .5));
                s && (f -= 2);
                for (let e = 0; e < y; e++) {
                    let t = {
                            x: l.x + (l.width / 2 + 40 * f) + 40 * e,
                            y: l.y - 40
                        },
                        i = 0;
                    i = y >= 2 ? Math.round(z()) : z() > .7 ? 2 : 0, $(i, t.x, t.y)
                }
            }
            let Y = {},
                K = {},
                J = 0,
                q = 0;

            function Z(e, t, i) {
                let n = {
                    x: t,
                    y: i,
                    width: 10,
                    height: 10,
                    vx: 0,
                    vy: 0,
                    item: e
                };
                n.id = J++, Y[n.id] = n;
                let o = new PIXI.Sprite(he["Sprites/dodgeItems"][e]);
                return o.x = t, o.y = i, I.addChild(o), n.sprite = o, o.anchor.set(.5, .5), n
            }

            function $(e, t, i) {
                let n = l[e].box,
                    o = {
                        x: t + 40 * n.x,
                        y: i + 40 * n.y,
                        width: 40 * n.width,
                        height: 40 * n.height,
                        vx: 0,
                        vy: 0,
                        object: e
                    };
                o.id = q++, K[o.id] = o;
                let a = new PIXI.Sprite(he["Sprites/dodgeObjects"][e]);
                a.x = t, a.y = i, I.addChild(a), o.sprite = a
            }
            for (let e = 0; e < 4; e++) Q();
            w.x = D[0].x + D[0].width / 2 - w.width / 2, window.onblur = function() {
                ee || ie()
            };
            let ee = !1,
                te = 0;

            function ie() {
                ee = !ee, ne.changePause(ee), ee ? (n.inGame = !1, c.ticker.remove(v), te = -Date.now(), ue.howitbegins.pause(), ze.message(e, a.ui.gamePaused, he["Sprites/GameUI"][32], (function() {
                    ie()
                }), (function() {
                    ze.blurPan(e, (function() {
                        ue.howitbegins.off("end", r), ue.howitbegins.stop(), d.destroy(), c.ticker.remove(v), ze.gameList("dropdodge"), ze.results(0, Math.floor(0)), ne.destroyPause(), clearDroplets(), window.onblur = function() {}
                    }))
                }), [a.ui.play, a.ui.home], !1)) : (te += Date.now(), m += te, n.inGame = !0, n.minigameMusic && ue.howitbegins.play(), c.ticker.add(v))
            }
            let ne = ze.pauseButton((function() {
                ie()
            }), .4);
            e.addChild(ne), ne.x = e.screen.width - 40, ne.y = 40;
            let oe = [];
            for (let t = 0; t < 3; t++) {
                let i = ke(pe.healthLose);
                e.addChild(i), i.gotoAndStop(0), i.x = 50 + 35 * t, i.y = 40, i.scale.x = .4, i.scale.y = .4, oe.push(i)
            }
            let ae = 2,
                re = function() {
                    ae--;
                    for (let e = 0; e < oe.length; e++) e > ae && oe[e].play()
                }
        },
        setUpTints: function() {
            Be = new PIXI.Sprite(he["Sprites/Blur"][1]), Fe = new PIXI.Sprite(he["Sprites/RepeatingUI"][2]), Re = new PIXI.Sprite(he["Sprites/RepeatingUI"][3])
        },
        achievementQueue: function(e, t = !1) {
            0 == u.length && (m = 0), t && 0 != u.length && (m++, ze.achievement(e, (function() {
                u.shift(), ze.achievementQueue(u[0], !0)
            }))), t || y[e].done || (u.push(e), y[e].done = !0, 1 == u.length && ze.achievement(e, (function() {
                u.shift(), ze.achievementQueue(u[0], !0)
            })))
        },
        achievement: function(e, t = function() {}) {
            let i = ["get2763intennis", "get2763gtttatint", "slapTD2763", "2763lemons"],
                o = 0;
            for (let e = 0; e < i.length; e++) y[i[e]].done && o++;
            o == i.length && ze.achievementQueue("get2763"), n.sfx && (ue.achievement.stop(), ue.achievement.play(), ue.achievement.sourceNode.playbackRate.value = 1 + m / 16);
            
            //Economic Collapsed Achievement
            let EconomicCollapsed = ["get27630intennis","slapTD27630","1000lemons","27630lemons","100energydrinks","oddDroplets100","true5minuteGTTTATINT","get27630GTTTATINT","get150000gtttatint","get25perfectsCAKEWALK","5000altitudeCAKEWALK","10000altitudeCAKEWALK","perfectionistec","get2763by10"],
                ECProg = 0;
            for (let e = 0; e < EconomicCollapsed.length; e++) y[EconomicCollapsed[e]].done && ECProg++;
            ECProg == EconomicCollapsed.length && (ze.achievementQueue("alleconomiccollapseachievements"), G.chartdrop.owned = !0), n.sfx && (ue.achievement.stop(), ue.achievement.play(), ue.achievement.sourceNode.playbackRate.value = 1 + m / 16);
            
            //Perfectionist Achievement
            let PerfectionistEC = ["oddDroplets100", "perfectfacematch", "get25perfectsCAKEWALK"],
                PerfProg = 0;
            for (let e = 0; e < PerfectionistEC.length; e++) y[PerfectionistEC[e]].done && PerfProg++;
            PerfProg == PerfectionistEC.length && ze.achievementQueue("perfectionistec"), n.sfx && (ue.achievement.stop(), ue.achievement.play(), ue.achievement.sourceNode.playbackRate.value = 1 + m / 16);
            
            //2763x10
            let two763x10 = ["get27630intennis", "27630lemons", "slapTD27630", "get27630GTTTATINT"],
                two763x10prog = 0;
            for (let e = 0; e < two763x10.length; e++) y[two763x10[e]].done && two763x10prog++;
            two763x10prog == two763x10.length && ze.achievementQueue("get2763by10"), n.sfx && (ue.achievement.stop(), ue.achievement.play(), ue.achievement.sourceNode.playbackRate.value = 1 + m / 16);
            
            //Master of myTeardrop
            let masterofmvotd = ["masterofgtttatint", "masterofodddroplets", "masterofcakewalk", "masterofspeed", "masterofconsistency"],
                masterofmvotdprog = 0;
            for (let e = 0; e < masterofmvotd.length; e++) y[masterofmvotd[e]].done && masterofmvotdprog++;
            masterofmvotdprog == masterofmvotd.length && ze.achievementQueue("masterofmyteardrop"), n.sfx && (ue.achievement.stop(), ue.achievement.play(), ue.achievement.sourceNode.playbackRate.value = 1 + m / 16);
            
            //Vanilla Complete
            let i100mytd = ["get2763intennis", "winagameoftennis", "get2763gtttatint", "slapTD2763", "get2763", "lemons", "get10perfectsCAKEWALK", "2763lemons", "perfectfacematch", "10energydrinks", "5minuteGTTTATINT", "tauntLogo", "oddDroplets40", "750altitudeCAKEWALK", "get15000gtttatint", "1000altitudeCAKEWALK", "blockplatformgtttatint"],
                i100mytdprog = 0;
            for (let e = 0; e < i100mytd.length; e++) y[i100mytd[e]].done && i100mytdprog++;
            i100mytdprog == i100mytd.length && (ze.achievementQueue("vanillacomplete"), G.twiddledrop.owned = !0), n.sfx && (ue.achievement.stop(), ue.achievement.play(), ue.achievement.sourceNode.playbackRate.value = 1 + m / 16);
            
            let a = y[e],
                r = new PIXI.NineSlicePlane(he.inputNineSlice[2]);
            r.width = 320, r.x = c.screen.width / 2, r.y = -500, c.stage.addChild(r);
            let s = new PIXI.BitmapText(a.title, {
                fontName: "ShagBlack",
                fontSize: 24
            });
            r.height = s.height + 50, s.anchor.set(0, .5), s.x = 80, s.y = 20, r.addChild(s);
            let l = new PIXI.BitmapText(a.description, {
                fontName: "ShagBlack",
                fontSize: 16,
                breakWords: !0,
                wordWrap: !0,
                wordWrapWidth: 200,
                maxWidth: r.width - 80,
                whiteSpace: "normal"
            });
            l.anchor.set(0, 0), r.height += l.height, l.anchor.set(0, .5), l.x = 80, l.y = 35 + l.height / 2, r.addChild(l), r.pivot.set(r.width / 2, r.height / 2), null == a.icon && (a.icon = 11);
            let d = he["Sprites/GameUI"][a.icon],
                h = new PIXI.Sprite(d);
            r.addChild(h), h.anchor.set(.5, .5), h.y = r.height / 2 - 5, h.x = 40, h.scale.x = .5, h.scale.y = .5;
            let p = 0,
                u = Math.random() - .5;
            setTimeout((function() {
                f.x = r.x, f.y = r.y, f.rotation = r.rotation, f.scale = r.scale, r.closing = !0, p = 0
            }), 2500);
            let f = {
                x: c.screen.width / 2,
                y: -r.height / 2,
                rotation: u,
                scale: .5
            };
            r.onDestroyed = function() {}, r.destroyBook = function() {
                r.onDestroyed(), c.ticker.remove(g), s.destroy(), h.destroy(), r.destroy({
                    children: !0
                }), t()
            };
            let g = function() {
                if (r.closing) {
                    if (r.y = ease[16](Math.min(40, p), f.y, -f.y - r.height, 40), r.rotation = ease[1](Math.min(70, p), f.rotation, u, 70), p > 40) return void r.destroyBook()
                } else r.x = ease[17](Math.min(80, p), f.x, 0, 80), r.y = ease[8](Math.min(70, p), f.y, r.height + 20, 70);
                r.scale.y = r.scale.x, p += Qe
            };
            return c.ticker.add(g), r
        },
        updateWarning: function() {
            ze.message(a.message.updateWarning(_e, We), he["Sprites/GameUI"][24], (function() {
                window.location = window.location
            }), (function() {}), [a.ui.reload, a.ui.ignore]), console.log(a.ui)
        },
        exitButton: function(e = function() {}, t, i, n = 1, o = 0) {
            let a = !1,
                r = new M((function() {
                    a || (a = !0, e())
                }), he["Sprites/GameUI"][11], {
                    scale: {
                        x: n,
                        y: n
                    },
                    x: t,
                    y: i
                }, !0);
            return r.sprite.on("pointerover", (function() {
                r.sprite.texture = he["Sprites/GameUI"][12]
            })), r.sprite.on("pointerout", (function() {
                r.sprite.texture = he["Sprites/GameUI"][11]
            })), r
        },
        pauseButton: function(e = function() {}, t = 1) {
            let i = new PIXI.Sprite(he["Sprites/GameUI"][32]);
            i.anchor.set(.5, .5), i.interactive = !0;
            let n = he["Sprites/GameUI"][32].trim;
            return i.scale.x = t, i.scale.y = t, i.hitArea = new PIXI.Rectangle(-n.width / 2, -n.height / 2, n.width, n.height), i.id = w, x[P()] = i, v(i, e), i.destroyPause = function() {
                delete x[i.id], i.destroy()
            }, i.changePause = function(e) {
                e ? (i.texture = he["Sprites/GameUI"][34], i.interactive = !1) : (i.texture = he["Sprites/GameUI"][32], i.interactive = !0)
            }, i
        },
        skew: function() {
            let e = ke(pe.SkewMatrix);
            e.play(20), c.stage.addChild(e), e.x = 180, e.y = 320, setInterval((function() {}), 1e3 / 60)
        },
        fade: function(e, t = 20, i = 20) {
            c.stage.children.includes(Fe) && c.stage.removeChild(Fe), Fe.interactive = !0, c.stage.addChild(Fe), Fe.alpha = 0;
            let n = 1 / t,
                o = !1;
            c.ticker.add((function t() {
                Fe.alpha += n * Qe, Fe.alpha >= 1 && (Fe.alpha = 1, o || (o = !0, e()), c.stage.removeChild(Fe), c.stage.addChild(Fe), n = -1 / i), Fe.alpha < 0 && (c.ticker.remove(t), c.stage.removeChild(Fe))
            }))
        },
        flash: function(e, t = !1, i = function() {}, n = !1) {
            let o = new PIXI.Sprite(he["Sprites/RepeatingUI"][3]);
            o.width = c.screen.width, o.height = c.screen.height, e.addChild(o), o.alpha = t ? 1 : 0;
            let a = t ? -1 / 60 : 1 / 8;
            n ? (o.interactive = !0, a /= 4) : o.interactive = !1;
            let r = !1;
            c.ticker.add((function n() {
                o.alpha += a * Qe, o.alpha >= 1 && !t && (o.alpha = 1, r || (r = !0, i(), o.interactive = !1), e.removeChild(o), e.addChild(o), a = -1 / 60), o.alpha < 0 && (c.ticker.remove(n), o.destroy())
            }))
        },
        blackTint: function(e, t = .5, i = !0) {
            if ("number" == typeof e) return void console.log("forgotten source code rework!!");
            let n = new PIXI.Sprite(he["Sprites/RepeatingUI"][3]);

            function o() {
                n.alpha += r * Qe, n.alpha >= t && (n.alpha = t, r = 0), n.alpha < 0 && (n.alpha = 0, n.delete && (c.ticker.remove(o), e.removeChild(n)))
            }
            n.interactive = !0, n.width = c.screen.width, n.height = c.screen.height, i ? (n.blendMode = PIXI.BLEND_MODES.SUBTRACT, n.tint = 16777215) : (n.blendMode = PIXI.BLEND_MODES.NORMAL, n.tint = 0), e.children.includes(n) && e.removeChild(n), e.addChild(n);
            let a = !1;
            n.start = function() {
                r = 1 / 60, a || (a = !0, c.ticker.add(o))
            }, n.end = function() {
                r = -1 / 60
            }, n.delete = !0, n.alpha = 0;
            let r = 1 / 60;
            return n
        },
        book: function(e, t, i = function() {}, n = 30) {
            let o = ze.blackTint(e, .2);
            o.start();
            let a = new PIXI.Sprite(he["Sprites/GameUI"][10]);
            a.x = c.screen.width / 2, a.y = c.screen.height / 2, a.anchor.set(.5, .5), e.addChild(a);
            let r = [],
                s = 0,
                l = 0,
                d = [],
                h = t.split(" "),
                p = "",
                u = new PIXI.BitmapText(t, {
                    fontName: "IndieFlower",
                    fontSize: 24
                });
            for (let e = 0; e < h.length; e++) {
                let t = p;
                p += h[e] + " ", u.text = p, u.width > 200 && (d.push(t), e--, p = "")
            }
            "" != p && d.push(p), u.destroy();
            let m = 0,
                y = 2 * Math.round(Math.random()) - 1,
                f = d;
            for (let e = 0; e < f.length; e++) {
                let t = new PIXI.BitmapText("", {
                    fontName: "IndieFlower",
                    fontSize: 24
                });
                t.x = -70, t.y = 29.5 * e - 195, a.addChild(t), r.push(t)
            }
            let g, x = function() {
                r[l].text += f[l][s], s >= f[l].length - 1 && (l++, s = -1), s++, l == r.length && clearInterval(g)
            };
            setTimeout((function() {
                g = setInterval(x, 1e3 / n)
            }), 500);
            let w = ze.exitButton((function() {
                w.interactive = !1, v.x = a.x, v.y = a.y, v.rotation = a.rotation, v.scale = a.scale, a.closing = !0, m = 0
            }), 150, -220, .4, .1);
            w.sprite.alpha = 0, a.addChild(w.sprite), w.sprite.interactive = !1, w.show = !1, setTimeout((function() {
                w.show = !0, w.sprite.interactive = !0
            }), 1500);
            let v = {
                x: 0,
                y: c.screen.height + 500,
                rotation: y,
                scale: .5
            };
            a.onDestroyed = function() {}, a.destroyBook = function() {
                a.onDestroyed(), c.ticker.remove(I);
                for (let e = 0; e < r.length; e++) r[e].parent.removeChild(r[e]), r[e].destroy();
                w.destroy(), a.destroy({
                    children: !0
                }), i()
            };
            let I = function() {
                if (w.show && (w.sprite.alpha += .05), w.sprite.alpha >= 1 && (w.sprite.alpha = 1, w.show = !1), a.closing) {
                    if (a.y = ease[16](Math.min(40, m), v.y, -v.y + c.screen.height + 500, 40), a.rotation = ease[1](Math.min(70, m), v.rotation, y, 70), m > 40) return o.end(), void a.destroyBook()
                } else a.x = ease[17](Math.min(80, m), v.x, c.screen.width / 2, 80), a.y = ease[8](Math.min(70, m), v.y, -c.screen.height / 2 - 29.5 * (f.length + 5), 70), a.rotation = ease[17](Math.min(90, m), v.rotation, -y, 90), a.scale.x = ease[17](Math.min(90, m), v.scale, .5, 90);
                a.scale.y = a.scale.x, m += Qe
            };
            return c.ticker.add(I), a
        },
        blurPan: function(e, t = function() {}) {
            Be.visible = !0, Be.x = 4 * -Be.texture.orig.width / 2, Be.y = c.screen.height / 2, Be.scale.x = 4, Be.scale.y = 4, Be.anchor.set(.5, .5), e.addChild(Be);
            let i = !1,
                n = function() {
                    Be.x += 300 * Qe, Be.x > c.screen.width / 2 && !i && (t(), i = !0, e.addChild(Be)), Be.x > c.screen.width + 4 * Be.texture.orig.width / 2 && (c.ticker.remove(n), e.removeChild(Be), Be.visible = !1)
                };
            c.ticker.add(n)
        },
        animationSelector: function() {
            let e = 0,
                t = [];

            function i() {
                for (let e = 0; e < t.length; e++) t[e].destroy()
            }
            for (let n in pe) {
                let o = new k((function() {
                    let e = {};
                    null != h[n] && (e = h[n]), i(), ze.animationTester(pe[n], e)
                }), 20, 20 + 28 * e, c.screen.width - 40, 24, n, 10, 0, 0);
                c.stage.addChild(o.element), t.push(o), e++
            }
            return {
                destroy: i
            }
        },
        animationTester: function(e, t) {
            let i = ke(e, t),
                n = new PIXI.Sprite(PIXI.Texture.from("./Sprites/anchor.png"));
            n.anchor.set(.5, .5), i.addChild(n), c.stage.addChild(i), i.x = c.screen.width / 2, i.y = c.screen.height / 2, i.onNextFrame = function() {
                r.value = i.getCurFrame()
            };
            let a = 0,
                r = new class {
                    constructor(e, t) {
                        this._value = t, this.info = e, this.text = o(this.info + ": " + this._value, 12, "left"), this.text.x = 20, this.text.y = c.screen.height - 60 - 16 * a, a++, c.stage.addChild(this.text)
                    }
                    set value(e) {
                        this._value = e, this.text.text = this.info + ": " + this._value
                    }
                }("Frame", "0");
            i.play(60), i.interactive = !0, I(i);
            let s = new S(20, c.screen.height - 20, 150, 20, "FPS", 10, 0, 1);
            s.confirmation = function() {
                i.play(parseInt(s.inputText.value))
            }, c.stage.addChild(s.element);
            let l = 0,
                d = new k((function() {
                    i.currentPart = -1, i.playUntil = -1, i.loop = !0
                }), 20, 20 + 20 * l, 90, 18, "none", 10, 0, 0);
            c.stage.addChild(d.element), l++;
            for (let e in t) {
                let t = new k((function() {
                    i.gotoPart(e)
                }), 20, 20 + 20 * l, 90, 18, e, 10, 0, 0);
                c.stage.addChild(t.element), l++
            }
        },
        intro: function(e = !1) {
            if (0 == e) return void ze.loader((function() {
                ze.intro(!0)
            }), [
                ["plodder", "plodder"]
            ]);
            let t = 0;
            be(pe.bfb), be(pe.bfb), be(pe.bfb);
            for (let e in pe.bfb.layers) {
                for (let i = 0; i < pe.bfb.layers[e].frames.length; i++) {
                    let n = pe.bfb.layers[e].frames[i];
                    n[Se.firstFrame] = t, n[Se.loopMode] = 2, n[Se.tween] = 0
                }
                t += 5
            }
            pe.bfb.symbols.Test = pe.faceMinigame;
            let i = n.music;
            setTimeout((function() {
                setTimeout((function() {
                    a.play(192)
                }), 1e3), n.music = !1, ue.brittlerille.stop(), ue.plodder.play(), ue.plodder.sourceNode.playbackRate.value = 1, ue.plodder.on("end", (function() {
                    a.destroyAnimation(), o.destroy(), n.music = i, i && ue.brittlerille.play()
                }))
            }), 10 / 24 * 1e3);
            let o = new PIXI.Sprite(he["Sprites/RepeatingUI"][3]);
            o.width = c.screen.width + 80, o.height = c.screen.height + 80, o.tint = 13421772, o.x = -40, o.y = -40, c.stage.addChild(o);
            let a = ke(pe.bfb);
            c.stage.addChild(a), a.scale.x = 1 / .56, a.scale.y = 1 / .56, a.x = -2762, a.y = -1736
        },
        lollipop: function(e = !1) {
            let t = new PIXI.Sprite(he["Sprites/RepeatingUI"][3]);
            t.width = c.screen.width + 80, t.height = c.screen.height + 80, t.tint = 16752989, t.x = -40, t.y = -40, c.stage.addChild(t);
            let i = ke(pe.lollipopMode);
            i.x = c.screen.width / 2 - 320, i.scale.x = 640 / 360, i.scale.y = i.scale.x, c.stage.addChild(i), i.play(24), i.loop = !0, i.onNextFrame = function() {
                console.log(i.children[0].x)
            }, console.log(he)
        },
        myTeardrop: function() {
            let e = new PIXI.Container;
            ze.initializeScreenResolution(e);
            let r = Math.floor((Date.now() - n.lastLogin) / 1e3),
                l = 288;
            if (i.happiness -= r / 180, i.hunger -= r / 108, i.sleeping) {
                let R = i.sleep;
                i.sleep += r / l * 8, i.sleep > 100 && (i.sleep = 100), i.progress += 4 * (i.sleep - R)
            }
            i.sleep >= 100 && (i.sleeping = !1), i.happiness = Math.max(0, i.happiness), i.hunger = Math.max(0, i.hunger), i.sleep = Math.max(0, i.sleep);
            let d = function() {},
                u = new PIXI.Container;
            e.addChild(u), u.x = c.screen.width / 2, u.y = c.screen.height / 2;
            let m = "livingRoom",
                g = {
                    sky: he["Sprites/Rooms"][8],
                    rooms: {
                        livingRoom: {
                            bg: he["Sprites/Rooms"][28]
                        },
                        kitchen: {
                            bg: he["Sprites/Rooms"][1],
                            bgFront: he["Sprites/Rooms"][2]
                        },
                        bedroom: {
                            bg: he["Sprites/Rooms"][3],
                            bgFront: he["Sprites/Rooms"][4]
                        }
                    }
                };
            n.events.christmas && (g.rooms.livingRoom.bg = he["Sprites/Rooms"][23], g.sky = he["Sprites/Rooms"][22]);
            let x = new PIXI.Sprite(g.sky);
            u.addChild(x), x.x = 0, x.y = 0, x.anchor.set(.5, .5), x.scale.x = 1, x.scale.y = 1;
            let w = new PIXI.TilingSprite(he["Sprites/Rooms"][24]);
            u.addChild(w), w.width = x.width, w.height = 1e3, w.x = -x.width / 2, w.y = -500, w.tileScale.x = .75, w.tileScale.y = .75;
            let I = new PIXI.Sprite(g.rooms.livingRoom.bg);
            u.addChild(I), I.x = 0, I.y = -100, I.anchor.set(.5, .5), I.scale.x = 1, I.scale.y = 1, I.visible = !1;
            let C = new PIXI.Sprite(g.rooms.livingRoom.bg);
            u.addChild(C), C.x = 0, C.y = 0, C.anchor.set(.5, .5), C.scale.x = 1, C.scale.y = 1;
            let S = new PIXI.Sprite(he["Sprites/Rooms"][0]);
            S.x = 0, S.y = 0, S.anchor.set(.5, .5), S.scale.x = 1, S.scale.y = 1;
            let P = n.skipIntro,
                O = 1,
                N = 0,
                B = new PIXI.BitmapText(a.intro.mail, {
                    fontSize: 24,
                    fontName: "MenuShag"
                });

            function F() {
                setInterval((function() {
                    n.inGame ? (i.happiness += .2, i.progress += 1) : i.happiness -= 1 / 180;
                    let t = 1 / 108;
                    n.inGame && (t *= 8), i.hunger -= t;
                    let o = .003472222222222222;
                    n.inGame && (o *= 16, n.temporaryInGameTime++), i.sleeping ? (i.sleep += .027777777777777776, i.progress += .1111111111111111) : n.introMode || (i.sleep -= o), n.lastLogin = Date.now(), i.happiness = Math.max(0, i.happiness), i.hunger = Math.max(0, i.hunger), i.sleep = Math.max(0, i.sleep), i.happiness = Math.min(100, i.happiness), i.hunger = Math.min(100, i.hunger), i.sleep = Math.min(100, i.sleep), i.sleeping || (i.sleep < 20 && !T.tired && (T.tired = !0, T.switchData(pe[E.tired]), T.switchParts(h[X]), T.gotoPart("Sleepy")), i.sleep > 20 && T.tired && (T.tired = !1, T.switchData(pe[E.awake]), T.switchParts(h[D]), T.gotoPart("Realize")), i.progress > i.progressNeeded && !n.inGame && n.canLevelUp && (ze.flash(e, !1, (function() {
                        n.level++, te.text = n.level, i.progress = i.progress - i.progressNeeded, i.progressNeeded = 200 + (n.level - 1) ** 1.25 * 20, ee.offset = i.progress / i.progressNeeded, ze.levelUp(e), H()
                    })), n.canLevelUp = !1), i.progress < 0 && (i.progress = 0))
                }), 1e3), n.canLevelUp = !0;
                let l = new PIXI.Sprite(he["Sprites/GameUI"][19]);
                l.anchor.set(.5, .5), l.scale.x = .1, l.scale.y = .1, l.rotation = -1;
                let x = new M((function() {
                        l.active = !1, ze.flash(e, !1, (function() {
                            ze.wardrobe(e, (function() {
                                $.updateCounter(t.coins), null != T.destroyCostume && (T.destroyCostume(), T.destroyCostume = void 0), G.none.apply(T), T.getCurFrame() > T.playUntil ? T.gotoAndStop(T.playUntil) : T.gotoAndStop(T.getCurFrame()), T.play(), G[n.costume].apply(T), T.applyCostumeAnimations()
                            }))
                        }))
                    }), he["Sprites/GameUI"][17], {
                        x: 100,
                        y: 100,
                        scale: {
                            x: .6,
                            y: .6
                        }
                    }),
                    O = new M((function() {
                        l.active = !1, ze.flash(e, !1, (function() {
                            ze.gameList(e)
                        }))
                    }), he["Sprites/GameUI"][20], {
                        x: 100,
                        y: 100,
                        scale: {
                            x: .6,
                            y: .6
                        }
                    }),
                    B = new M((function() {
                        l.active = !1, ze.flash(e, !1, (function() {
                            ze.settings(e)
                        }))
                    }), he["Sprites/GameUI"][33], {
                        x: 100,
                        y: 100,
                        scale: {
                            x: .4,
                            y: .4
                        }
                    });
                B.sprite.title = [a.ui.settings, 32], O.sprite.title = [a.ui.games, 24], x.sprite.title = [a.ui.wardrobe, 24];
                let F = new M((function() {
                    l.active = !1, ze.flash(e, !1, (function() {
                        ze.achievements(e)
                    }))
                }), he["Sprites/GameUI"][35], {
                    x: 100,
                    y: 100,
                    scale: {
                        x: .6,
                        y: .6
                    }
                });
                F.sprite.title = [a.ui.achievements, 24];
                let R = [x.sprite, O.sprite, F.sprite],
                    U = [B.sprite];
                for (let e = 0; e < R.length; e++) {
                    let t = R[e],
                        i = o(t.title[0], t.title[1], "center");
                    t.addChild(i), i.y = -80;
                    let n = Math.cos((e + .5 - 2) / 8 * Math.PI * 2),
                        a = Math.sin((e + .5 - 2) / 8 * Math.PI * 2);
                    t.x = 100 * n, t.y = 100 * a, t.original = {
                        x: t.x,
                        y: t.y
                    }, l.addChild(t), t.speed = .05
                }
                for (let e = 0; e < U.length; e++) {
                    let t = U[e];
                    R.push(t), t.speed = .03;
                    let i = o(t.title[0], t.title[1], "center");
                    t.addChild(i), i.y = -80;
                    let n = Math.cos((e + 1 - 2) / 8 * Math.PI * 2),
                        a = Math.sin((e + 1 - 2) / 8 * Math.PI * 2);
                    t.x = 160 * n, t.y = 160 * a, t.original = {
                        x: t.x,
                        y: t.y
                    }, l.addChild(t)
                }
                e.addChild(l);
                let z = function(r, f = !1) {
                    if (m == r && "livingRoom" == r ? (l.x = K.buttonContainer.x, l.y = K.buttonContainer.y, n.introMode || (l.active = !l.active)) : l.active = !1, m == r) return;
                    m = r, C.interactive = !1, C.removeAllListeners();
                    let x = function() {
                        if (i.sleeping && (T.visible = !1), d(), K.selected.visible = !1, J.selected.visible = !1, q.selected.visible = !1, T.rotation = 0, I.visible = !1, "livingRoom" == r && (C.texture = g.rooms.livingRoom.bg, S.texture = he["Sprites/Rooms"][0], S.visible = !1, T.x = 0, T.y = 100, K.selected.visible = !0), "kitchen" == r) {
                            function l() {
                                for (let e = 0; e < 3; e++) "" != t.fridge[20 + e] && null != t.fridge[20 + e] ? (f[e].eated = !1, f[e].x = m.x - 50 + 50 * e, f[e].interactive = !0, f[e].y = m.y, f[e].alpha = 1, f[e].eating = !1, f[e].visible = !0, f[e].food = t.fridge[20 + e], f[e].foodId = 20 + e, f[e].texture = he["Sprites/Food"][L[t.fridge[20 + e]].texture]) : f[e].visible = !1
                            }
                            P || (_ = 1.5), C.interactive = !0, C.hitArea = new PIXI.Rectangle(100, -290, 300, 350), C.on("pointerdown", (function() {
                                C.interactive = !1, 2 == _ && (_ = 3), ze.flash(e, !1, (function() {
                                    ze.fridge(e, (function() {
                                        $.updateCounter(t.coins), l(), n.introMode && ($.visible = !0)
                                    })), C.interactive = !0
                                }))
                            })), S.visible = !0, C.texture = g.rooms.kitchen.bg, S.texture = g.rooms.kitchen.bgFront, u.addChild(S), I.visible = !0, T.x = -10, T.y = 100, J.selected.visible = !0;
                            let m = new PIXI.Sprite(he["Sprites/Food"][0]);
                            m.anchor.set(.5, .5), m.x = 0, m.y = 70, u.addChild(m);
                            let f = [];
                            for (let v = 0; v < 3; v++) {
                                let b = new PIXI.Sprite(he["Sprites/Food"][1]);
                                b.visible = !0, b.x = m.x - 50 + 50 * v, b.y = m.y, b.x2 = b.x, b.y2 = b.y, b.anchor.set(.5, .5), u.addChild(b), b.interactive = !0, b.hitArea = new PIXI.Rectangle(-b.texture.trim.width / 2, -b.texture.trim.height, 2 * b.texture.trim.width, 2 * b.texture.trim.height), b.on("pointerdown", (function(e) {
                                    b.hitArea = new PIXI.Rectangle(-3e3, -3e3, 6e3, 6e3), b.dragging = !0;
                                    let t = e.clientX / s,
                                        i = e.clientY / s;
                                    b.dragOffset = {
                                        x: t - b.x,
                                        y: i - b.y
                                    };
                                    for (let e = 0; e < f.length; e++) f[e].interactive = !1;
                                    b.interactive = !0
                                })), b.on("pointermove", (function(e) {
                                    let t = e.clientX / s,
                                        i = e.clientY / s;
                                    b.dragging && (b.x2 = t - b.dragOffset.x, b.y2 = i - b.dragOffset.y)
                                })), b.eated = !1, b.on("pointerup", (function(o) {
                                    n.introMode && _ <= 3 && setTimeout((function() {
                                        i.sleep = 19, _ = 4, Z.alpha = 0, Z.rotation = 0, q.buttonContainer.alpha = 0, q.buttonContainer.visible = !0
                                    }), 2e3), b.hitArea = new PIXI.Rectangle(-b.texture.trim.width / 2, -b.texture.trim.height, 2 * b.texture.trim.width, 2 * b.texture.trim.height), b.dragging = !1;
                                    for (let e = 0; e < f.length; e++) f[e].interactive = !0;
                                    if (b.x2 = m.x - 50 + 50 * v, b.y2 = m.y, i.sleeping) return;
                                    if (b.eated) return;
                                    b.eated = !0;
                                    let a = L[b.food].adds;
                                    if ("lemon" == n.costume && ("sourlemon" == b.food ? a = 12 : a /= 3), !b.food.includes("potion")) {
                                        if (T.tired) return;
                                        if (i.hunger + a / 2 >= 100) return b.eated = !1, T.gotoPart("Nope"), void(T.currentPart = -1)
                                    }
                                    b.eating = !0, T.interactive = !1, setTimeout((function() {
                                        "sleeppotion" == b.food && (i.sleep = 100, n.drinksFed += 1, 10 == n.drinksFed && (ze.achievementQueue("10energydrinks"), G.energydrink.owned = !0), 100 <= n.drinksFed && ze.achievementQueue("100energydrinks")), "maxpotion" == b.food && (i.sleep = 100, i.happiness = 100, i.hunger = 100), "uranium" == S.food && (n.level = 0, t.coins = 0, t.fridge = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], i.progress = 0, i.sleep = 0, i.happiness = -100, i.hunger = 0), T.food.textures = [b.texture], "voiddrop" == n.costume ? T.gotoPart("EatVoid") : "sourlemon" == b.food && "lemon" != n.costume ? T.gotoPart("EatSour") : T.gotoPart("Eat"), "sourlemon" == b.food && (n.lemonsFed += 1, n.lemonsFed >= 2763 && !y["2763lemons"].done && ze.flash(e, !1, (function() {
                                            G.limedrop.apply(T), G.limedrop.owned = !0, n.costume = "limedrop", H(), ze.achievementQueue("2763lemons")
                                        }), !0), n.lemonsFed >= 100 && !y.lemons.done && ze.flash(e, !1, (function() {
                                            G.lemon.apply(T), G.lemon.owned = !0, n.costume = "lemon", H(), ze.achievementQueue("lemons")
                                        }), !0), H()), n.sfx && (ue.consume.stop(), ue.consume.play()), t.fridge[b.foodId] = "", setTimeout((function() {
                                            i.hunger += a, i.progress += 20 + L[b.food].adds / 4, i.happiness += Math.round(Math.max(0, (40 - i.happiness) / 2)), i.hunger >= 100 && (i.hunger = 100), T.currentPart = -1
                                        }), 400), T.onAnimationEnd = function() {
                                            T.interactive = !0, T.onAnimationEnd = function() {}
                                        }, n.lemonsFed >= 1000 && ze.achievementQueue("1000lemons"), n.lemonsFed >= 27630 && ze.achievementQueue("27630lemons")
                                    }), 100)
                                })), f.push(b)
                            }
                            l();
                            let x = function() {
                                    if (!w)
                                        for (let e = 0; e < f.length; e++) {
                                            let t = f[e];
                                            t.dragging ? (t.x = p.linear(t.x, t.x2, .4, Qe), t.y = p.linear(t.y, t.y2, .4, Qe)) : t.eating ? (t.x = p.linear(t.x, T.x - 75, .2, Qe), t.y = p.linear(t.y, T.y - 100, .3, Qe), t.alpha = p.linear(t.alpha, 0, .2, Qe), t.interactive = !1) : (t.x = p.linear(t.x, t.x2, .2, Qe), t.y = p.linear(t.y, t.y2, .3, Qe)), t.rotation = (t.x - t.x2) / 100 + (t.y - t.y2) / 100, t.scale.x = 1 + (t.y - m.y) / 600 + Math.abs(t.x - t.x2) / 100 - Math.abs(t.y - t.y2) / 100, t.scale.y = t.scale.x + Math.abs(t.y - t.y2) / 100 - Math.abs(t.x - t.x2) / 100
                                        }
                                },
                                w = !1;
                            c.ticker.add(x), d = function() {
                                w = !0, c.ticker.remove(x);
                                for (let e = 0; e < f.length; e++) {
                                    let t = f[e];
                                    t.parent.removeChild(t), t.destroy()
                                }
                                m.parent.removeChild(m), m.destroy(), C.removeAllListeners(), d = function() {}
                            }
                        }
                        if ("bedroom" == r) {
                            T.visible = !0, S.visible = !0, C.texture = g.rooms.bedroom.bg, S.texture = g.rooms.bedroom.bgFront, I.visible = !0, C.hitArea = new PIXI.Rectangle(-160, -140, 100, 150), C.interactive = !0, C.lit = !i.sleeping;
                            let M = new PIXI.ColorMatrixFilter;
                            M.matrix = [.2, 0, 0, 0, 0, 0, .2, 0, 0, 0, 0, 0, .5, 0, 0, 0, 0, 0, 1, 0], C.lit || (u.filters = [M]), C.on("pointerdown", (function() {
                                n.introMode && ze.fade((function() {
                                    ! function(e, t = function() {}) {
                                        let i = new PIXI.Sprite(he["Sprites/Rooms"][15]);
                                        i.tint = 0, i.x = c.screen.width / 2, i.y = c.screen.height / 2, i.anchor.set(.5, .5), e.addChild(i), i.interactive = !0;
                                        let n = new PIXI.BitmapText("Open the Wheel of Fun by holding down the happiness button.", {
                                            fontSize: 24,
                                            fontName: "MenuShag",
                                            breakWords: !0,
                                            wordWrap: !0,
                                            wordWrapWidth: 300,
                                            maxWidth: 300,
                                            whiteSpace: "normal",
                                            align: "center"
                                        });
                                        e.addChild(n), n.anchor.set(.5, .5), n.x = c.screen.width / 2, n.y = c.screen.height / 2;
                                        let r = 0,
                                            s = new PIXI.Sprite(he["Sprites/GameUI"][19]);
                                        s.anchor.set(.5, .5), s.scale.x = .1, s.scale.y = .1, s.rotation = -1, s.visible = !1, e.addChild(s);
                                        let l = new PIXI.Sprite(he["Sprites/GameUI"][17]),
                                            d = new PIXI.Sprite(he["Sprites/GameUI"][20]),
                                            h = new PIXI.Sprite(he["Sprites/GameUI"][33]);
                                        h.title = [a.ui.settings, 32], d.title = [a.ui.games, 24], l.title = [a.ui.wardrobe, 24];
                                        let u = new PIXI.Sprite(he["Sprites/GameUI"][35]);
                                        u.title = [a.ui.achievements, 24];
                                        let m = [l, d, u],
                                            y = [h];
                                        for (let e = 0; e < m.length; e++) {
                                            let t = m[e];
                                            t.anchor.set(.5, .5), t.scale.x = .6, t.scale.y = .6;
                                            let i = o(t.title[0], t.title[1], "center");
                                            t.addChild(i), i.y = -80;
                                            let n = Math.cos((e + .5 - 2) / 8 * Math.PI * 2),
                                                a = Math.sin((e + .5 - 2) / 8 * Math.PI * 2);
                                            t.x = 100 * n, t.y = 100 * a, t.original = {
                                                x: t.x,
                                                y: t.y
                                            }, s.addChild(t), t.speed = .05
                                        }
                                        for (let e = 0; e < y.length; e++) {
                                            let t = y[e];
                                            t.anchor.set(.5, .5), t.scale.x = .4, t.scale.y = .4, m.push(t), t.speed = .03;
                                            let i = o(t.title[0], t.title[1], "center");
                                            t.addChild(i), i.y = -80;
                                            let n = Math.cos((e + 1 - 2) / 8 * Math.PI * 2),
                                                a = Math.sin((e + 1 - 2) / 8 * Math.PI * 2);
                                            t.x = 160 * n, t.y = 160 * a, t.original = {
                                                x: t.x,
                                                y: t.y
                                            }, s.addChild(t)
                                        }
                                        let f = new PIXI.Sprite(he["Sprites/GameUI"][0]);
                                        e.addChild(f), f.anchor.set(.5, .5), f.x = c.screen.width / 2, f.y = c.screen.height / 2, f.alpha = 0;
                                        let g = !1,
                                            x = new k((function() {
                                                g || (g = !0, ze.blurPan(e, (function() {
                                                    ! function() {
                                                        i.destroy();
                                                        for (let e = 0; e < m.length; e++) m[e].destroy();
                                                        s.destroy(), f.destroy(), x.destroy(), n.destroy(), c.ticker.remove(w)
                                                    }(), t()
                                                })))
                                            }), c.screen.width / 2, c.screen.height / 2 + 200, 180, 40, a.ui.continueUpperCase, 0, .5, .5, 1, "center");
                                        x.element.visible = !1, e.addChild(x.element);
                                        let w = function() {
                                            if (r += Qe, r >= 130) {
                                                let e = r - 130;
                                                f.alpha = window.eases.easeOutQuad(Math.min(20, e), 0, 1, 20), f.scale.x = window.eases.easeOutElastic(Math.min(100, e), .1, .9, 100)
                                            }
                                            if (r >= 230) {
                                                let e = r - 230;
                                                f.scale.x = window.eases.easeOutBack(Math.min(30, e), 1, -.1, 30)
                                            }
                                            if (r >= 260) {
                                                let e = r - 260;
                                                f.scale.x = window.eases.easeOutBack(Math.min(30, e), .9, .1, 30), s.x = f.x, s.y = f.y, s.scale.x = p.linear(s.scale.x, 1, .05, Qe), s.rotation = p.linear(s.rotation, 12, .05, Qe), s.scale.y = s.scale.x, s.visible = !0, n.y = p.linear(n.y, c.screen.height / 2 - 250, .05, Qe);
                                                for (let e = 0; e < m.length; e++) m[e].rotation = -s.rotation, m[e].x = p.linear(m[e].x, m[e].original.x, m[e].speed, Qe), m[e].y = p.linear(m[e].y, m[e].original.y, m[e].speed, Qe)
                                            }
                                            if (r >= 320) {
                                                let e = r - 320;
                                                x.element.alpha = window.eases.easeOutQuad(Math.min(20, e), 0, 1, 20), x.element.visible = !0
                                            }
                                            if (f.scale.y = f.scale.x, r >= 100 && r < 260) {
                                                let e = r - 100;
                                                n.y = c.screen.height / 2 + window.eases.easeInOutQuad(Math.min(60, e), 0, -100, 60)
                                            }
                                        };
                                        c.ticker.add(w)
                                    }(e, (function() {
                                        C.lit = !1, T.tired = !1, T.switchData(pe[E.awake]), T.switchParts(h[D]), i.sleeping = !1, T.gotoPart("Wave"), i.happiness = 20, i.hunger = 50, i.sleep = 80, K.offset = i.happiness / 100, J.offset = i.hunger / 100, q.offset = i.sleep / 100, u.filters = [], z("livingRoom", !0), N = 0, n.skipIntro = !0, setTimeout((function() {
                                            0 == N && n.sfx && ue.wave.play()
                                        }), 2e3), n.music && ue.brittlerille.play(), n.introMode = !1, H()
                                    }))
                                }), 120, 30), C.lit = !C.lit, C.lit ? (n.sfx && (ue.switchon.attack = 0, ue.switchon.stop(), ue.switchon.play()), u.filters = []) : (T.idle = -1, i.sleeping = !0, ue.brittlerille.pause(), T.canPat = !1, T.tired ? T.gotoPart("Sleep") : (T.tired = !0, T.switchData(pe[E.tired]), T.switchParts(h[X]), T.gotoPart("Sleepy"), T.onAnimationEnd = function() {
                                    T.gotoPart("Sleep")
                                }), u.filters = [M], n.sfx && (ue.switchoff.attack = 0, ue.switchoff.stop(), ue.switchoff.play())), H()
                            })), d = function() {
                                u.filters = [], C.removeAllListeners(), d = function() {}
                            }, u.addChild(S), T.x = 20, T.y = 80, T.rotation = .2, q.selected.visible = !0
                        }
                    };
                    f ? x() : ze.blurPan(e, x)
                };
                T = ke(pe[E.awake], h[E.awake]), T.size = 1, T.applyCostumeAnimations = function() {
                    let e = G[n.costume];
                    null != e.generateAnimations && e.generateAnimations(), null != e.animation ? (E.tired = e.animation.tired, E.awake = e.animation.awake) : (E.tired = "TeardropTired", E.awake = "Teardrop"), T.animationName.includes("Tired") ? T.switchData(pe[E.tired]) : T.switchData(pe[E.awake])
                }, "none" != n.costume && (G[n.costume].apply(T), T.applyCostumeAnimations()), T.write = function(t = !0, i = 1, n = "Book Text") {
                    T.interactive = !1, t ? T.gotoPart("BookOpen") : (i--, T.gotoPart("Write")), T.onAnimationEnd = function() {
                        i--, T.gotoPart("Write"), -1 == i && (T.gotoPart("SendMessage"), T.onAnimationEnd = function() {}, setTimeout((function() {
                            T.interactive = !0, ze.book(e, n)
                        }), 750))
                    }
                }, u.addChild(T), T.play(60), i.sleep < 20 ? (T.tired = !0, T.switchData(pe[E.tired]), T.switchParts(h[X]), T.gotoPart("Idle")) : (T.tired = !1, r > 60 && Math.random() > .5 ? (T.gotoPart("Wave2"), T.playWaveAudio = !1) : T.gotoPart("Wave")), i.sleeping ? (ue.brittlerille.pause(), T.visible = !1, T.tired = !0, T.switchData(pe[E.tired]), T.switchParts(h[X]), T.idle = -1, T.gotoPart("Sleep")) : T.idle = "Idle", T.canPat = !1, setTimeout((function() {
                    0 == N && (i.sleeping || i.sleep < 20 || 0 != T.playWaveAudio && n.sfx && ue.wave.play())
                }), 2e3), P && setTimeout((function() {
                    i.sleeping || (T.canPat = !0)
                }), 4e3);
                let _ = -1;

                function W() {
                    J.buttonContainer.visible = !0, J.buttonContainer.alpha = 0, _ = 0, T.canPat = !0;
                    let e = 0;
                    Z.visible = !0, Z.alpha = 0, c.ticker.add((function t() {
                        if (e += Qe, 2 == _ && Z.alpha <= 1 && (Z.alpha += 1 / 30), 0 == _) J.empty.scale.x = 1 + Math.abs(Math.sin(e / 10)) / 16, J.empty.scale.y = J.empty.scale.x, Z.alpha <= 1 && (Z.alpha += 1 / 30), e > 30 * Math.PI && (_ = 1);
                        else if (1 == _ || 1.5 == _) {
                            if (J.empty.scale.x = 1, J.empty.scale.y = J.empty.scale.x, Z.alpha < 0) return 1.5 == _ && (_ = 2), e = 0, void(Z.rotation = -Math.PI / 2);
                            Z.alpha -= 1 / 30
                        }
                        if (0 != _ && 1 != _ || (Z.x = c.screen.width / 2, Z.y = J.buttonContainer.y - 100 + 5 * Math.sin(e / 10)), 4 == _) q.empty.scale.x = 1 + Math.abs(Math.sin(e / 10)) / 16, q.empty.scale.y = q.empty.scale.x, Z.alpha <= 1 && (Z.alpha += 1 / 30), e > 30 * Math.PI && (_ = 5);
                        else if (5 == _) {
                            if (q.empty.scale.x = 1, q.empty.scale.y = q.empty.scale.x, Z.alpha < 0) return e = 0, void c.ticker.remove(t);
                            Z.alpha -= 1 / 30
                        }
                        4 != _ && 5 != _ || (Z.x = q.buttonContainer.x, Z.y = q.buttonContainer.y - 100 + 5 * Math.sin(e / 10)), 2 != _ && 3 != _ || (Z.x = c.screen.width / 2 + 5 * Math.sin(e / 10), Z.y = 100), 2 == _ && e > 30 * Math.PI && (_ = 3), 3 == _ && (Z.alpha < 0 && (e = 0), Z.alpha -= 1 / 30), Z.alpha >= 1 && (Z.alpha = 1)
                    }))
                }

                function j() {
                    P || (T.gotoPart("SendMessage"), setTimeout((function() {
                        ze.book(e, a.dialogue.yoyleberryinvitation, W), T.interactive = !0
                    }), 750), T.onAnimationEnd = function() {})
                }
                P || (n.introMode = !0, T.onAnimationEnd = function() {
                    T.interactive = !1, T.gotoPart("BookOpen"), T.onAnimationEnd = function() {
                        T.gotoPart("Write"), T.onAnimationEnd = function() {
                            T.gotoPart("Write"), T.onAnimationEnd = function() {
                                T.gotoPart("SendMessage"), setTimeout((function() {
                                    N < 5 ? ze.book(e, a.dialogue.greet, j) : (i.happiness -= 10, ze.book(e, a.dialogue.greet2, j))
                                }), 750), T.onAnimationEnd = function() {
                                    T.gotoPart("BookOpen"), T.onAnimationEnd = function() {
                                        T.gotoPart("Write")
                                    }
                                }
                            }
                        }
                    }
                }), T.x = 0, T.y = 100;
                let V = new PIXI.Rectangle(-60, -160, 120, 180);
                T.hitArea = V, T.interactive = !0, T.pointerPressing = !1, T.pointer = {}, T.pointerDistance = {}, T.patting = !1;
                let Q = 0;
                T.on("pointerdown", (function(e) {
                    T.pointer = {
                        x: e.clientX / s,
                        y: e.clientY / s
                    }, T.pointerPressing = !0, Q = Date.now()
                })), T.on("pointermove", (function(e) {
                    let t = {
                        x: e.clientX / s,
                        y: e.clientY / s
                    };
                    f(T.pointer.x, T.pointer.y, t.x, t.y) > 10 && T.pointerPressing && T.canPat && (T.patting ? (i.happiness += .02, i.progress += .02, T.patAnimationForce += .05, T.patAnimationForce > .2 && (T.patAnimationForce = .2)) : (T.hitArea = new PIXI.Rectangle(-90, -200, 180, 220), T.patAnimationForce = .1, T.idle = -1, T.patting = !0, T.patAnimation = 0, T.gotoPart("Pat"), T.pointer = {
                        x: e.clientX / s,
                        y: e.clientY / s
                    })), T.pointerDistance = {
                        x: t.x - T.pointer.x,
                        y: t.y - T.pointer.y
                    }
                })), T.on("pointerout", (function(e) {
                    1 == T.patting && (T.gotoPart("PatStop"), T.patting = !1, T.hitArea = V, T.idle = "Idle"), T.pointerPressing = !1
                })), T.on("pointerup", (function() {
                    if (1 == T.patting && (T.gotoPart("PatStop"), T.patting = !1, T.idle = "Idle", T.hitArea = V), T.pointerPressing = !1, Date.now() - Q < 200) {
                        T.canPat = !0, n.totalSlaps++, N++, 2763 == n.totalSlaps && (ze.achievementQueue("slapTD2763"), H()), 27630 <= n.totalSlaps && (ze.achievementQueue("slapTD27630"), H());
                        let e = 1 + Math.floor(4 * Math.random());
                        ue.wave.stop(), n.sfx && (ue["slap" + e].attack = 0, ue["slap" + e].stop(), ue["slap" + e].play()), T.gotoPart("Slap"), i.sleeping && n.music && ue.brittlerille.play(), C.lit = !0, u.filters = [], T.idle = "Idle", i.sleeping = !1, T.currentPart = -1
                    }
                }));
                let Y = n.safeArea ? -20 : 0,
                    K = new b(he["Sprites/GameUI"][1], he["Sprites/GameUI"][0], i.happiness / 100);
                K.buttonContainer.x = 60, K.buttonContainer.y = c.screen.height - 60 + Y, K.buttonContainer.scale.x = .8, K.buttonContainer.scale.y = .8, e.addChild(K.buttonContainer), l.x = K.buttonContainer.x, l.y = K.buttonContainer.y, v(K.buttonContainer, (function() {
                    K.holding && z("livingRoom")
                })), K.holding = !1, K.buttonContainer.on("pointerdown", (function() {
                    K.holding = !0, setTimeout((function() {
                        K.holding && (K.holding = !1, K.buttonContainer.emit("pointerup"), n.introMode || (l.active = !l.active))
                    }), 250)
                })), K.buttonContainer.on("pointerup", (function() {
                    K.holding = !1
                }));
                let J = new b(he["Sprites/GameUI"][4], he["Sprites/GameUI"][3], i.hunger / 100);
                J.buttonContainer.x = c.screen.width / 2, J.buttonContainer.y = c.screen.height - 60 + Y, J.buttonContainer.scale.x = .8, J.buttonContainer.scale.y = .8, e.addChild(J.buttonContainer), v(J.buttonContainer, (function() {
                    z("kitchen")
                })), J.selected.visible = !1;
                let q = new b(he["Sprites/GameUI"][6], he["Sprites/GameUI"][5], i.sleep / 100);
                q.buttonContainer.x = c.screen.width - 60, q.buttonContainer.y = c.screen.height - 60 + Y, q.buttonContainer.scale.x = .8, q.buttonContainer.scale.y = .8, e.addChild(q.buttonContainer), v(q.buttonContainer, (function() {
                    z("bedroom")
                })), q.selected.visible = !1, A = function() {
                    Y = n.safeArea ? -20 : 0, K.buttonContainer.y = c.screen.height - 60 + Y, J.buttonContainer.y = c.screen.height - 60 + Y, q.buttonContainer.y = c.screen.height - 60 + Y
                };
                let Z = new PIXI.Sprite(he["Sprites/GameUI"][7]);
                Z.x = 100, Z.y = 100, Z.visible = !1, Z.anchor.set(.5, .5), e.addChild(Z);
                let $ = ze.coinCounter(e);
                $.x = 20, $.y = 20, e.addChild($);
                let ee = new b(he["Sprites/GameUI"][28], he["Sprites/GameUI"][27], i.progress / i.progressNeeded, !0, !1);
                ee.buttonContainer.x = c.screen.width - 60, ee.buttonContainer.y = 60, e.addChild(ee.buttonContainer), ee.selected.visible = !1, v(ee.buttonContainer, (function() {}));
                let te = o(n.level, 32, "center", void 0, 4);
                te.y = -2, ee.buttonContainer.addChild(te);
                let ie = new M((function() {
                    ze.flash(e, !1, (function() {
                        ze.settings(e, (function() {}))
                    }))
                }), he["Sprites/GameUI"][24]);
                ie.sprite.x = c.screen.width - 20 + $.pivot.y, ie.sprite.y = 20 - $.pivot.y, P || (q.buttonContainer.visible = !1, J.buttonContainer.visible = !1, $.visible = !1), w.tilePosition.x = 1583 * Math.random(), c.ticker.add((function() {
                    if (w.tilePosition.x -= .1, T.patting) {
                        let e = Math.sin(Math.abs(T.pointerDistance.x) / 100) / 4 + Math.cos(T.patAnimation) / 50,
                            t = Math.sin(-T.pointerDistance.y / 100) / 4 + Math.sin(T.patAnimation) / 50;
                        T.scale.x = p.linear(T.scale.x, (1 + e - t) * T.size, .1, Qe), T.scale.y = p.linear(T.scale.y, (1 + t - e) * T.size, .1, Qe), T.skew.x = p.linear(T.skew.x, -T.pointerDistance.x / 500, .1, Qe), T.patAnimation += T.patAnimationForce, T.patAnimationForce = p.linear(T.patAnimationForce, 0, .01, Qe)
                    } else T.skew.x = p.linear(T.skew.x, 0, .1, Qe), T.scale.x = p.linear(T.scale.x, T.size, .1, Qe), T.scale.y = p.linear(T.scale.y, T.size, .1, Qe);
                    l.active ? (J.buttonContainer.x = p.linear(J.buttonContainer.x, c.screen.width / 2 + 35, .05, Qe), l.scale.x = p.linear(l.scale.x, K.buttonContainer.scale.x, .05, Qe), l.rotation = p.linear(l.rotation, 12, .05, Qe), l.scale.y = l.scale.x) : (l.scale.x = p.linear(l.scale.x, .1, .05, Qe), l.rotation = p.linear(l.rotation, -1, .05, Qe), l.scale.y = l.scale.x, J.buttonContainer.x = p.linear(J.buttonContainer.x, c.screen.width / 2, .05, Qe));
                    for (let e = 0; e < R.length; e++) R[e].rotation = -l.rotation, l.active ? (R[e].x = p.linear(R[e].x, R[e].original.x, R[e].speed, Qe), R[e].y = p.linear(R[e].y, R[e].original.y, R[e].speed, Qe)) : (R[e].x = p.linear(R[e].x, 0, .01, Qe), R[e].y = p.linear(R[e].y, 0, .01, Qe));
                    K.offset = p.linear(K._offset, i.happiness / 100, .04, Qe), 0 == i.happiness ? K.empty.texture = he["Sprites/GameUI"][2] : K.empty.texture = he["Sprites/GameUI"][1], J.offset = p.linear(J._offset, i.hunger / 100, .04, Qe), q.offset = p.linear(q._offset, i.sleep / 100, .04, Qe), $.updateCounter(p.linear($.getCounterAmount(), t.coins, .05, Qe)), ee.offset = p.linear(ee._offset, i.progress / i.progressNeeded, .04, Qe), P || -1 == _ || (J.buttonContainer.alpha = p.linear(J.buttonContainer.alpha, 1, .05, Qe)), n.introMode && _ >= 4 && (q.buttonContainer.alpha = p.linear(q.buttonContainer.alpha, 1, .05, Qe))
                })), new k((function() {
                    let t = ze.book(e, "This will absolutely \nerase any user data \nfrom localStorage.\nPROCEED WITH \nCAUTION!\n \n \n \n(exit this page to\ncancel)", (function() {}), 60);
                    t.onDestroyed = function() {
                        i.destroy()
                    };
                    let i = new k((function() {
                        setInterval((function() {
                            let t = ke(pe.Teardrop, h.Teardrop);
                            t.x = c.screen.width * Math.random(), t.y = c.screen.height * Math.random(), t.rotation = Math.random() * Math.PI * 4, t.play(60), t.gotoPart("Wave"), e.addChild(t)
                        }), 1e3 / 60), setInterval((function() {
                            let t = ke(pe.Box, h.Box);
                            t.x = c.screen.width * Math.random(), t.y = c.screen.height * Math.random(), t.rotation = Math.random() * Math.PI * 4, t.play(60), t.gotoPart("Jump"), e.addChild(t)
                        }), 1e3 / 60), setTimeout((function() {
                            localStorage.clear(), window.location = window.location
                        }), 500)
                    }), -75, 0, 200, 40, "CONTINUE", 0, 0, 0, 2, "center");
                    t.addChild(i.element)
                }), c.screen.width - 20, 20, 80, 30, "RESET", 0, 1, 0, 1, "center"), window.addEventListener("resize", (function() {
                    l.y = K.buttonContainer.y, u.x = c.screen.width / 2, u.y = c.screen.height / 2, K.buttonContainer.y = c.screen.height - 60 + Y, J.buttonContainer.y = c.screen.height - 60 + Y, q.buttonContainer.x = c.screen.width - 60, q.buttonContainer.y = c.screen.height - 60 + Y, ie.sprite.x = c.screen.width - 20 + $.pivot.y, ee.buttonContainer.x = c.screen.width - 60
                }))
            }
            if (B.anchor.set(.5, .5), P) F();
            else {
                let U;
                U = new k((function() {
                    P = !0, U.destroy(), B.destroy(), c.ticker.remove(_), z.destroyAnimation(), O = 1, C.scale.x = 1, C.scale.y = 1, F(), ze.flash(e, !0), n.skipIntro = !0, H()
                }), 20, c.screen.height - 20, 270, 20, a.ui.skipIntro, 0, 0, 1, 2, "center"), U.element.alpha = .5, e.addChild(U.element), e.addChild(B), B.x = c.screen.width / 2, B.y = c.screen.height / 2 - 100, B.fade = 1, B.alpha = 0;
                let z = ke(pe.Box, h.Box);

                function _() {
                    U.dissapear && (U.element.hover ? U.element.alpha = p.linear(U.element.alpha, .5, .1, Qe) : U.element.alpha = p.linear(U.element.alpha, 0, .1, Qe)), B.alpha = p.linear(B.alpha, B.fade, .1, Qe), null != B.shake && 0 != B.shake && null != B.orig && (B.x = B.orig.x + (Math.random() - .5) * B.shake, B.y = B.orig.y + (Math.random() - .5) * B.shake, B.rotation = (Math.random() - .5) * B.shake / 50, B.shake = p.linear(B.shake, 0, .1, Qe)), B.go && (B.x += B.vx * Qe, B.vx += 5 * Qe), O = p.linear(O, z.timesBeforeSteal <= 0 ? 1 : 1.5, .05, Qe), z.scale.x = O, z.scale.y = O, C.scale.x = p.linear(1 * O, 1, .2), C.scale.y = p.linear(1 * O, 1, .2)
                }
                z.timesBeforeSteal = 10, u.addChild(z), z.play(60), z.gotoPart("Jump"), z.pivot.y = -100, z.x = 0, z.y = 0, z.interactive = !0, z.hitArea = new PIXI.Rectangle(-100, -160, 200, 180), z.on("pointerdown", (function() {
                    U.dissapear = !0, z.timesBeforeSteal <= 0 || (z.timesBeforeSteal--, 0 == z.timesBeforeSteal ? (B.fade = 1, B.text = a.intro.hey, B.orig = {
                        x: c.screen.width / 2,
                        y: c.screen.height / 2 + 50
                    }, setTimeout((function() {
                        B.shake = void 0, B.go = !0, B.vx = 0, B.fade = 0
                    }), 1e3), setTimeout((function() {
                        B.go = !1, B.x = c.screen.width / 2, B.y = c.screen.height / 2, B.text = a.intro.who, B.fade = 1
                    }), 2e3), setTimeout((function() {
                        B.destroy(), c.ticker.remove(_), z.destroyAnimation(), ze.flash(e, !1, F), H()
                    }), 4e3), B.y = c.screen.height / 2 + 50, B.shake = 10, B.fontSize = 48, z.gotoPart("Steal")) : (B.fade = 0, "Click1" == z.currentPart ? z.gotoPart("Click2") : z.gotoPart("Click1")))
                })), c.ticker.add(_)
            }
            if (n.privateBeta) {
                let W = o("CONFIDENTAL", 20);
                W.x = 20, W.y = 20;
                let j = o("Do not share any screenshots of this myTeardrop build!", 12);
                j.maxWidth = 250, j.x = 20, j.y = 40, j.alpha = .5, W.alpha = .5, e.addChild(j), e.addChild(W)
            }
            return ze.flash(e, !0), e
        },
        levelUp: function(e) {
            n.minigameMusic && (ue.levelup.stop(), ue.levelup.play(), ue.brittlerille.pause());
            let t = 6737151;
            null != G[n.costume].color && n.levelUpCostumes && (t = G[n.costume].color);
            let i = new PIXI.Sprite(he["Sprites/Rooms"][15]);
            i.x = c.screen.width / 2, i.y = c.screen.height / 2, i.anchor.set(.5, .5), e.addChild(i), i.interactive = !0;
            let r = new PIXI.Sprite(he["Sprites/Rooms"][17]);
            r.x = c.screen.width / 2, r.y = c.screen.height / 2 - 100, r.alpha = .3, r.anchor.set(.5, .5), r.tint = t, e.addChild(r);
            let s = new PIXI.Sprite(he["Sprites/Rooms"][15]);
            s.tint = t, s.x = c.screen.width / 2, s.y = c.screen.height / 2, s.anchor.set(.5, 0), e.addChild(s);
            let l = new PIXI.Sprite(he["Sprites/Bodies"][68]);
            l.x = c.screen.width / 2, l.y = c.screen.height / 2, l.anchor.set(.5, .5), e.addChild(l);
            let d = new PIXI.Sprite(he["Sprites/Bodies"][68]);
            d.tint = t, d.anchor.set(.5, .5), l.addChild(d), d.scale.x = .8, d.scale.y = .8, d.alpha = .8;
            let h = new PIXI.Sprite(he["Sprites/Rooms"][16]);
            h.x = c.screen.width / 2, h.y = c.screen.height / 2, h.anchor.set(.5, .5), e.addChild(h), h.blendMode = PIXI.BLEND_MODES.ADD, h.alpha = 0;
            let p = o(a.ui.newLevel + ": " + n.level, 48, "center");
            p.x = c.screen.width / 2, p.y = c.screen.height / 2 - 200, p.visible = !1, e.addChild(p);
            let u = !1,
                m = new k((function() {
                    u || (u = !0, ze.blurPan(e, (function() {
                        m.destroy(), r.destroy(), p.destroy(), n.music && ue.brittlerille.play(), n.canLevelUp = !0, i.destroy(), s.destroy(), null != y.destroyCostume && y.destroyCostume(), null != y.destroyCostume2 && y.destroyCostume2(), y.destroyAnimation(), d.destroy(), l.destroy(), h.destroy(), c.ticker.remove(x)
                    })))
                }), c.screen.width / 2, c.screen.height / 2 + 150, 180, 40, a.ui.continueUpperCase, 0, .5, .5, n.levelUpCostumes ? 2 : 10, "center");
            e.addChild(m.element), m.element.alpha = 0, setTimeout((function() {
                m.animationOffset = g, m.visible = !0
            }), 3e3);
            let y = ke(pe.tearDropLevelUp);
            e.addChild(y);
            let f = !0;
            if ("uglysweater" != n.costume && "_td_costume1" != n.costume || (f = !1), n.levelUpCostumes && f) {
                let e = {
                    a: {
                        d: y.a.d,
                        e: y.a.e,
                        f: y.a.f,
                        g: y.a.g,
                        h: y.a.h,
                        i: y.a.i2,
                        j: y.a.j,
                        k: y.a.k
                    },
                    c: y.c,
                    b: y.b,
                    tearDrop: y
                };
                null != G[n.costume].applyMinigame ? (G[n.costume].applyMinigame(y, 0, "level"), G[n.costume].applyMinigame(e, 0, "levelLayer2")) : (G[n.costume].apply(y, 0, "level"), G[n.costume].apply(e, 0, "levelLayer2"))
            }
            y.play(), y.x = c.screen.width / 2, y.y = c.screen.height / 2;
            let g = 0,
                x = function() {
                    if (m.visible) {
                        let e = g - m.animationOffset;
                        m.element.alpha = eases.easeOutQuint(Math.min(60, e), 0, 1, 60)
                    }
                    if (g > 107) {
                        let e = g - 107;
                        p.visible = !0, p.y = c.screen.height / 2 - eases.easeOutQuint(Math.min(30, e), 150, 50, 30), p.scale.x = eases.easeOutElastic(Math.min(75, e), .5, .5, 75), p.scale.y = eases.easeOutElastic(Math.min(90, e), .5, .5, 90)
                    }
                    y.y = c.screen.height / 2 - eases.easeInOutQuad(Math.min(150, g), -100, 50, 150), s.y = c.screen.height / 2 + eases.easeInOutQuad(Math.min(150, g), 0, -25, 150), y.scale.x = eases.easeInOutQuad(Math.min(120, g), .4, .6, 120), y.scale.y = y.scale.x, l.y = y.y, l.scale.x = y.scale.x, l.scale.y = y.scale.y / eases.easeInOutQuad(Math.min(150, g), 2, 2, 150), d.y = eases.easeInOutQuad(Math.min(150, g), 16, 16, 150), r.y = c.screen.height / 2 + eases.easeInOutQuad(Math.min(150, g), -100, -30, 150), r.scale.x = 1 + eases.easeInOutQuad(Math.min(150, g), 0, .025, 150), r.scale.y = r.scale.x, h.y = y.y - 75 * y.scale.x;
                    let e = Math.max(0, g - 90);
                    h.alpha = eases.easeInQuint(Math.min(30, e), 0, .1, 30), g += Qe
                };
            c.ticker.add(x)
        },
        coinCounter: function(e) {
            let i = new PIXI.Sprite(he["Sprites/GameUI"][9]),
                o = he["Sprites/GameUI"][9].trim;
            i.pivot.x = -o.width / 2, i.pivot.y = -o.height / 2, i.anchor.set(.5, .5), e.addChild(i);
            let a = new PIXI.BitmapText(t.coins, {
                fontSize: 24,
                fontName: "MenuShag"
            });
            a.anchor.set(0, .5), a.width > 140 && (a.width = 140, a.scale.y = a.scale.x), a.x = -o.width / 2 + 60, a.y = -o.height / 2 + 22, i.addChild(a);
            let r = t.coins;
            return i.getCounterAmount = function() {
                return r
            }, i.updateCounter = function(e) {
                a.text = Math.floor(e), a.scale.x = 1, a.width > 140 && (a.width = 140), a.scale.y = a.scale.x, r = e
            }, i.destroyCounter = function() {
                i.removeChild(a), a.destroy(), i.destroy()
            }, n.privateBeta && (i.visible = !1, a.visible = !1), i
        },
		// Minigame Loading Screen
        loader: function(e, t, i) {
            let n = [];
            for (let e = 0; e < i.length; e++) null == ue[i[e][1]] && n.push(i[e]);
            if (0 == n.length) return void t(e);
            let a = new PIXI.Sprite(he["Sprites/Rooms"][15]);
            e.addChild(a), a.interactive = !0, a.x = c.screen.width / 2, a.y = c.screen.height / 2, a.anchor.set(.5, .5);
            let r = ["Collecting Droplets...",
			"A bucket of raindrops...",
			"A sea of water...",
			"Loading the awesome...",
			"Teardrop wrote this!",
			"Please wait for the droplet!",
			"Woah.. this is new!",
			"Droplet loading!",
			"Droplet incoming!!",
			"This is a loading message",
			"LOADING: something awesome",
			"WHAT! The game is loading?",
			"Sorry for the wait!",
			"There's a loading circle next to me!",
			"1... 2... 3... LOAD!",
			"Am I taking too long?",
			"There we go!",
			"test",
			"sippin on promethazine :sob: :sob: :broken_heart: :broken_heart:",
			"Teardrop isnt teardroping rn",
			"This Game made my tears drop",
			"10 teardrops out of 10",
			"type c for fast charge",
			"If you see a white screen and a grey circle your blind",
			"To win any game your fingers have to go to heaven",
			"hold shift to run",
			"Say Hi to the new teardrop skin",
			"I'VE PLAYED THESE MINIGAMES BEFORE",
			"I played these teardrops before",
			"oyui drop is the best drop trust",
			"Recordatory there are 2 Oyui body pillow",
			"body pillows are so yummity yummy!!!",
			"firethree i want the divorce",
			"Shag-Lounge",
			"you will never get the divorce for i am EVIL FIRETHREE!!!!!!!",
			"?tickle @teardrop",
			"i'm in the thick of it, everybody knows",
			"Never search Fireafy on google",
			"hey you, go to oyui's server and spam \"reunion\" :trollface:",
			"hI i'M yElLoW fAE aNd I hAvE tAkEn OvEr MyTD!!!!!!!!!!!",
			"dopozy is actually in a basement trapped by joopter!",
			"Press E for duck and Q for flashlight",
			"Hi! I'm black shag, how are you today?",
            "       y",
            "i am stone bone"
            ],
            s = o(r[Math.floor(Math.random() * r.length)], 24, "left", void 0, 1);
            s.x = 20, s.y = c.screen.height - 20, s.width > c.screen.width - 100 && (s.width = c.screen.width - 100, s.scale.y = s.scale.x), s.anchor.set(0, 1), e.addChild(s);
            let l = ke(pe.loading);
            l.x = c.screen.width - 40, l.y = c.screen.height - 40, l.scale.x = .75, l.scale.y = .75, l.alpha = .5, s.alpha = .5, l.play(), l.loop = !0, e.addChild(l);
            let d = 0;
            for (let i = 0; i < n.length; i++) {
                d++;
                let o = n[i][0],
                    a = n[i][1];
                ue[a] = new Pizzicato.Sound("./Audio/" + o + ".mp3", (function() {
                    ue[a].volume = 1, ue[a].loaded = !0, null != ue[a].onloadAudio && ue[a].onloadAudio(), ue.music.addSound(ue[a]), d--, 0 == d && ze.flash(e, !1, (function() {
                        t(e), h()
                    }))
                })), ue[a].loaded = !1
            }
            let h = function() {
                    l.destroyAnimation(), s.destroy(), a.destroy(), y.destroy(), c.ticker.remove(m), clearTimeout(u)
                },
                u = setTimeout((function() {
                    y.sprite.alpha = 0, y.sprite.visible = !0, c.ticker.add(m)
                }), 15e3),
                m = function() {
                    y.sprite.alpha = p.linear(y.sprite.alpha, 1, .1, Qe)
                },
                y = ze.exitButton((function() {
                    ze.flash(!1, (function() {
                        h(), ze.message("Required resources for the minigame have failed to load!", void 0, (function() {}))
                    }))
                }), c.screen.width - 40, 40, .4, 0);
            e.addChild(y.sprite), y.sprite.visible = !1
        },
        fridge: function(e = new PIXI.Container, i = function() {}) {
            let r = new PIXI.Sprite(he["Sprites/Rooms"][5]);
            r.scale.x = 1.1, r.scale.y = 1.1, r.x = c.screen.width / 2, r.y = c.screen.height / 2, r.anchor.set(.5, .5), e.addChild(r), r.interactive = !0;
            let l = new PIXI.Container;
            e.addChild(l);
            let d = 0,
                h = 0,
                u = c.screen.width / 2 - 20,
                m = ze.coinCounter(e);
            l.addChild(m);
            let y = t.coins;
            m.x = 20, m.y = 20;
            let g = {},
                x = 0,
                w = 0,
                v = 0,
                b = [],
                C = n.introMode ? new PIXI.BitmapText("", {
                    fontSize: 24,
                    fontName: "MenuShag",
                    breakWords: !0,
                    wordWrap: !0,
                    wordWrapWidth: 300,
                    maxWidth: 300,
                    whiteSpace: "normal",
                    align: "center"
                }) : o("", 32, "center");
            C.anchor.set(.5, .5), C.x = c.screen.width / 2, C.y = c.screen.height - 150;
            let S = new PIXI.Container,
                M = new PIXI.Graphics,
                P = !n.introMode;
            P && (S.mask = M), l.addChild(S), l.addChild(C), S.x = 5, S.y = 80;
            let T, A, E, D, X = c.screen.width - 10,
                O = c.screen.height - 170;
            M.beginFill(0), M.drawRect(S.x, S.y, X, O), M.endFill(), S.interactive = !0, P && (S.on("pointerdown", (function(e) {
                let t = e.clientY / s;
                S.dragOffset = {
                    y: t - S.y
                }, S.prevY = S.y, S.vy = 0, S.scrolling = !0, S.origY = S.y
            })), A = function(e) {
                if (!S.scrolling) return;
                let t = e.clientY / s;
                if (Math.abs(S.origY - S.y) > 10)
                    for (let e = 0; e < S.children.length; e++) S.children[e].emit("pointerout"), S.children[e].interactive = !1;
                S.wheel = !1, S.prevY = S.y, S.y = t - S.dragOffset.y
            }, D = function(e) {
                S.wheel = !0, S.vy = p.linear(S.vy, -e.deltaY / 2 * Qe, .25), S.vy > 40 * Qe && (S.vy = 40 * Qe), S.vy < -40 * Qe && (S.vy = -40 * Qe)
            }, document.addEventListener("wheel", D), E = function() {
                for (let e = 0; e < S.children.length; e++) S.children[e].interactive = !0;
                S.scrolling = !1
            }, document.addEventListener("pointermove", A), document.addEventListener("pointerup", E), S.vy = 0, T = function() {
                let e = 95 * Math.ceil(-N / 2) + 80 + O;
                S.vy = p.linear(S.vy, 0, S.wheel ? .1 : .05, Qe), S.scrolling ? S.vy = S.y - S.prevY : S.y += S.vy, S.y >= 80 && (S.y = 80, S.vy = 0), S.y <= e && (S.y = e, S.vy = 0)
            }, c.ticker.add(T));
            let N = 0;
            C.targetAlpha = 0;
            for (let i in L) {
                if ("regularcake" != i && n.introMode) continue;
                N++;
                let r = new k((function() {
                        if (s.requiredLevel > n.level) ze.message(e, "You need atleast level " + s.requiredLevel + " to buy this item!", he["Sprites/GameUI"][35]);
                        else {
                            if (C.text = "", n.introMode && (C.alpha = C.targetAlpha, C.targetAlpha = 1, C.y = c.screen.height / 2 + 100, C.text = "Go to the fridge using the button below, drag a food item to the plate!"), s.cost > y) return n.sfx && (ue.fail.stop(), ue.fail.play()), w < .01 && (v = 0), w = 2, void(C.text = a.ui.notEnoughCoins);
                            for (let o = 0; o < V.length; o++)
                                if (!V[o].full) {
                                    let a = new PIXI.Sprite(he["Sprites/Food"][s.texture]);
                                    return a.anchor.set(.5, .5), a.y = -a.texture.trim.height, a.vr = Math.random() - .5, a.vy = 2 + 2 * Math.random(), a.x = Math.random() * c.screen.width, e.addChild(a), g[x++] = a, y -= s.cost, n.sfx && (ue.purchase.stop(), ue.purchase.play()), t.coins = y, K(i, o), void(t.fridge[o] = i)
                                } w < .01 && (v = 0), w = 2, C.text = a.ui.notEnoughSpace, n.sfx && (ue.fail.stop(), ue.fail.play())
                        }
                    }), c.screen.width / 2 - u + h % 2 * (u + 5) - 2.5, 95 * Math.floor(h / 2), u, 90, "", 0, 0, 0, 2),
                    s = L[i];
                1 != s.hidden && (S.addChild(r.element), h++);
                let l = new PIXI.Sprite(he["Sprites/Food"][s.texture]),
                    d = new PIXI.Rectangle(0, 0, 0, 0);
                l.hitArea = d, r.element.addChild(l), l.anchor.set(.5, .5), l.x = 40, l.y = 40;
                let p = o(s.name, 16, "left", "middle");
                p.x = 70, p.y = 20, r.element.addChild(p), p.width > 80 && (p.width = 80), p.scale.y = p.scale.x;
                let m = o(s.cost, 16);
                m.x = 100, m.width > 60 && (m.width = 60), m.scale.y = m.scale.x, m.y = 40 + (16 * -m.scale.y + 16) / 2, r.element.addChild(m);
                let f = new PIXI.Sprite(he["Sprites/GameUI"][14]);
                if (r.element.addChild(f), f.x = 80, f.y = 50, f.scale.x = .75, f.scale.y = .75, f.anchor.set(.5, .5), f.hitArea = d, b.push(f), b.push(m), b.push(p), b.push(r), s.requiredLevel > n.level) {
                    let e = new PIXI.NineSlicePlane(he.inputNineSlice[14]);
                    e.width = r.element.width, e.height = r.element.height, r.element.addChild(e), e.alpha = .8, e.hitArea = d;
                    let t = new PIXI.Sprite(he["Sprites/GameUI"][41]);
                    t.x = r.element.height / 2, t.y = r.element.height / 2, t.anchor.set(.5, .5), t.scale.x = .75, t.scale.y = .75, r.element.addChild(t), t.hitArea = d;
                    let i = o("LEVEL " + s.requiredLevel, 24, "left", "middle");
                    i.x = r.element.height / 2 + 40, i.y = r.element.height / 2 - 2, i.width > r.element.width - i.x - 20 && (i.width = r.element.width - i.x - 20, i.scale.y = i.scale.x), r.element.addChild(i)
                }
            }
            let G = ze.exitButton((function() {
                i(), H(), ze.flash(e, !1, J)
            }), c.screen.width - 40, 40, .4, 0);
            n.introMode && n.hideFridgeExit ? (G.sprite.targetAlpha = 0, G.sprite.visible = !1) : G.sprite.targetAlpha = 1, e.addChild(G.sprite);
            let B = 50;
            l.origX = 0, l.time = 50;
            let F = !1,
                R = function() {
                    if (!F) {
                        m.updateCounter(p.linear(m.getCounterAmount(), y, .1, Qe));
                        for (let e in g) {
                            let t = g[e];
                            t.y += t.vy * Qe, t.x = p.linear(t.x, c.screen.width / 2, .025), t.vy += .5 * Qe, t.rotation += t.vr / 10 * Qe, t.y > c.screen.height + 200 && (t.destroy(), delete g[e])
                        }
                        l.x = window.eases.easeInOutQuad(B, l.origX, -d * c.screen.width - l.origX, l.time), w > .01 && (l.x += Math.cos(v) * w * 5, v += .5 * Qe, w = p.linear(w, 0, .1, Qe)), B += Qe, l.time <= B && (l.time = 50, B = 50), r.x = c.screen.width / 2 + l.x / 50;
                        for (let e = 0; e < Q.length; e++) {
                            let t = Q[e];
                            t.dragging ? (t.x = p.linear(t.x, t.x2, .4, Qe), t.y = p.linear(t.y, t.y2, .4, Qe), t.rotation = (t.x - t.x2) / 100 + (t.y - t.y2) / 100, t.scale.x = 1 + Math.abs(t.x - t.x2) / 100 - Math.abs(t.y - t.y2) / 100, t.scale.y = t.scale.x + Math.abs(t.y - t.y2) / 100 - Math.abs(t.x - t.x2) / 100) : (t.x = p.linear(t.x, t.x2, .2, Qe), t.y = p.linear(t.y, t.y2, .3, Qe), t.scale.x = p.linear(t.scale.x, 1, .2, Qe), t.scale.y = p.linear(t.scale.y, 1, .2, Qe), t.rotation = p.linear(t.rotation, 0, .3, Qe))
                        }
                        n.introMode && (C.alpha = p.linear(C.alpha, C.targetAlpha, .1, Qe), G.sprite.alpha = p.linear(G.sprite.alpha, G.sprite.targetAlpha, .1, Qe))
                    }
                };
            c.ticker.add(R);
            let U = new k((function() {
                0 != d && (d = 0, l.origX = l.x, l.time = Math.min(50, B), B = 0)
            }), c.screen.width / 2 - 2.5, c.screen.height - 80, 120, 30, a.ui.shop, 0, 1, 0, 1, "center");
            e.addChild(U.element);
            let z = function() {
                    1 != d && (d = 1, l.origX = l.x, l.time = Math.min(50, B), B = 0)
                },
                _ = new k(z, c.screen.width / 2 + 2.5, c.screen.height - 80, 120, 30, a.ui.fridge, 0, 0, 0, 1, "center");
            e.addChild(_.element), 1 == n.lastFridgePage && (z(), B = l.time);
            let W = new PIXI.Container;
            W.x = c.screen.width, l.addChild(W);
            let j = new PIXI.Sprite(he["Sprites/Food"][0]);
            j.anchor.set(.5, .5), j.x = c.screen.width / 2, j.y = c.screen.height - 130, W.addChild(j);
            let V = [],
                Q = [];
            new Array(23).fill("");
            for (let e = 0; e < 20; e++) {
                let t = new PIXI.Sprite(he["Sprites/GameUI"][15]);
                V.push(t), t.hitArea = new PIXI.Rectangle(-32, -32, 64, 64), t.x = 32 + e % 4 * 79 + (c.screen.width / 2 - 158) + 7.5, t.y = 100 + 79 * Math.floor(e / 4), t.anchor.set(.5, .5), t.full = !1, W.addChild(t)
            }
            for (let e = 0; e < 3; e++) {
                let t = new PIXI.Sprite(he["Sprites/GameUI"][15]);
                V.push(t), t.hitArea = new PIXI.Rectangle(-32, -32, 64, 64), t.x = j.x - 50 + 50 * e, t.y = j.y, t.anchor.set(.5, .5), t.full = !1, W.addChild(t), t.visible = !1
            }
            let Y = 0;

            function K(e, i) {
                let o = V[i];
                if ("" != e && null != e) {
                    let a = new PIXI.Sprite(he["Sprites/Food"][L[e].texture]);
                    a.scale.x = 1, a.scale.y = a.scale.x, a.box = i, a.item = e, o.food = Y, o.full = !0, a.on("pointerdown", (function() {
                        for (let e = 0; e < Q.length; e++) Q[e].interactive = !1;
                        for (let e = 0; e < V.length; e++) V[e].interactive = !1;
                        a.interactive = !0, W.addChild(a)
                    })), a.on("pointerup", (function() {
                        for (let e = 0; e < Q.length; e++) Q[e].interactive = !0;
                        let i = !1;
                        null != a.originalPosition && f(a.x, a.y, a.originalPosition.x, a.originalPosition.y) < 20 && (i = !0);
                        let o = -1;
                        if (i) {
                            o = 20;
                            for (let e = 0; e < 3; e++)
                                if (1 != V[e + 20].full) {
                                    o = 20 + e;
                                    break
                                }
                        } else
                            for (let e = 0; e < V.length; e++) f(V[e].x, V[e].y, a.x, a.y) < 40 && (o = e);
                        let r = o;
                        if (-1 != o)
                            if (o >= 20 && n.introMode && !G.sprite.visible && (G.sprite.alpha = 0, G.sprite.visible = !0, G.sprite.targetAlpha = 1, n.hideFridgeExit = !1), 0 == V[r].full) a.x2 = V[r].x, a.y2 = V[r].y, V[a.box].full = !1, V[a.box].food = -1, t.fridge[a.box] = "", a.box = r, V[a.box].food = a.id, t.fridge[a.box] = e, V[a.box].full = !0;
                            else {
                                let i = Q[V[r].food];
                                i.x2 = V[a.box].x, i.y2 = V[a.box].y, V[a.box].food = V[r].food, i.box = a.box, t.fridge[a.box] = i.item, V[r].food = a.id, a.x2 = V[r].x, a.y2 = V[r].y, a.box = r, t.fridge[a.box] = e
                            } a.x2 = V[a.box].x, a.y2 = V[a.box].y, a.interactive = !0
                    })), a.anchor.set(.5, .5), a.x = o.x, a.y = o.y, Q.push(a), a.id = Y, Y++, W.addChild(a), a.interactive = !0, I(a, new PIXI.Rectangle(-30, -30, 60, 60), !0)
                }
            }
            for (let e = 0; e < t.fridge.length; e++) K(t.fridge[e], e);

            function J() {
                P && (c.ticker.remove(T), document.removeEventListener("pointermove", A), document.removeEventListener("wheel", D), document.removeEventListener("pointerup", E)), n.lastFridgePage = d;
                for (let e in g) null != g[e].destroy && g[e].destroy(), delete g[e];
                C.destroy(), G.destroy(), r.destroy();
                for (let e = 0; e < Q.length; e++) Q[e].destroy();
                for (let e = 0; e < V.length; e++) V[e].destroy();
                for (let e = 0; e < b.length; e++) b[e].destroy();
                m.destroyCounter(), j.destroy(), U.destroy(), _.destroy(), c.ticker.remove(R), F = !0
            }
            b.push(S), b.push(M)
        },
        gameList: function(e = new PIXI.Container, r, s = !1) {
            ze.initializeScreenResolution(e);
            let l = {
                gtttatint: {
                    name: a.games.gtttatint,
                    texture: 0,
                    run: ze.gtttatint,
                    runDebug: function() {
                        let e = prompt("ENTER SEED: ");
                        ze.gtttatint(e, !0)
                    },
                    resource: {
                        audio: [
                            ["Radio Martini", "radiomartini"]
                        ]
                    }
                },
                tennis: {
                    name: a.games.tennis,
                    texture: 2,
                    run: ze.tennis,
                    resource: {
                        audio: [
                            ["Shiny Tech", "shinytech"]
                        ]
                    }
                },
                match: {
                    name: a.games.match,
                    texture: 3,
                    run: ze.faceMatch,
                    resource: {
                        audio: [
                            ["15countdown", "countdown"],
                            ["faceMatchScores", "faceMatchScores"]
                        ]
                    }
                },
                cakewalk: {
                    name: a.games.cakewalk,
                    texture: 5,
                    run: ze.cakewalk,
                    resource: {
                        audio: [
                            ["Pamgaea", "Pamgaea"]
                        ]
                    }
                },
                oddDroplets: {
                    name: "Odd Droplets",
                    texture: 7,
                    run: ze.oddDroplets,
                    resource: {
                        audio: [
                            ["papshru", "howitbegins"]
                        ]
                    }
                },
                tennisendless: {
                    name: "Drop Tennis Endless",
                    texture: 11,
                    run: ze.tennis3,
                    resource: {
                        audio: [
                            ["Shiny Tech2", "shinytech2"]
                        ]
                    }
                },
                comingsoon: {
                    name: "...",
                    texture: 9,
                    dontDestroyMenu: !0,
                    message: 0,
					hidden: !0,
                    run: function() {
                        let t = ["Coming soon in 1.5!", "Coming soon in 1.5..?", "No.. the game icon does not correlate to the minigame!", "Coming soon!", "Do you hear that?", "The coming soon pie smells great!", "blerg!", "boop!", "Click me again and you'll see what happens.", "what happens.", "GOT YOU!!", "Click Continue to play the awesome new minigame! oh wait.. I don't have any buttons", "Click the awesome red button at the top right!", "Rethinking about that.. maybe don't do it", "Hm..", "I don't think I'm allowed to do this.. but.....", "Don't tell anyone.", "...", "......", "Coming soon!D", "Coming soon!R", "Coming soon!O", "Coming soon!P", "Coming soon!", "Coming soon!D", "Coming soon!O", "Coming soon!D", "Coming soon!G", "Coming soon!E", "I can't believe I just did that!", "wait.", "I'm running out of dialogue!!", "That means.. my memory may be erased at any moment!!", "It's been a good time chatting with you.. whoever you are!", "I'm sure you're going to take good care of your " + G[n.costume].name + ".", "...", "...", "huh.. nothing happened?"];
                        ze.message(e, t[l.comingsoon.message++]), l.comingsoon.message >= t.length && (l.comingsoon.message = 0)
                    }
                },
                dropletDodge: {
                    name: a.games.dropdodge,
                    texture: 8,
					hidden: !0,
                    run: ze.dropletDodge,
                    resource: {
                        audio: [
                            ["dodgeloop3", "howitbegins"]
                        ]
                    }
                },
                dropdodge: {
                    name: a.games.dropdodge,
                    texture: 1,
					hidden: !0,
                    run: ze.dropdodge,
                    resource: {
                        audio: [
                            ["howitbegins"]
                        ]
                    }
                }
            };
            if (s) return null == l[r].resource && (l[r].resource = {
                audio: []
            }), ze.loader(e, l[r].run, l[r].resource.audio), e;
            let d = {},
                h = function(e) {
                    d[e.key] = !0
                },
                u = function(e) {
                    d[e.key] = !1
                };
            document.addEventListener("keydown", h), document.addEventListener("keyup", u), n.inGame = !1, n.music && ue.brittlerille.play();
            let m = new PIXI.Sprite(he["Sprites/Rooms"][31]);
            e.addChild(m), m.interactive = !0, m.x = e.screen.width / 2, m.y = e.screen.height / 2, m.anchor.set(.5, .5), m.scale.x = 1, m.scale.y = 1;
            let y = ze.coinCounter(e);
            e.addChild(y), y.x = 20, y.y = 20;
            let f = ze.exitButton((function() {
                H(), g = !0, ze.flash(e, !1, x)
            }), e.screen.width - 40, 40, .4, 0);
            e.addChild(f.sprite);
            let g = !1;

            function x() {
                window.removeEventListener("resize", E), f.destroy(), m.destroy();
                for (let e = 0; e < v.length; e++) v[e].destroy();
                if (y.destroyCounter(), c.ticker.remove(L), document.removeEventListener("keydown", h), document.removeEventListener("keyup", u), g) {
                    let e = -1;
                    n.temporaryInGameTime > 600 ? e = ["That was tiring. But I had fun!", "How long until the next minigame?"] : n.temporaryInGameTime > 120 && Math.random() > .8 ? e = ["I saw something weird!", "I had so much fun!", "Finally.. home!", "I missed my notebook!", "The grass is so squishy!"] : n.temporaryInGameTime > 10 && Math.random() > .95 ? e = [""] : n.temporaryInGameTime > 2 && Math.random() > .98 && (e = ["Couldn't we play for more?", "That's it?", "Go back!! I saw something in that minigame", "Only if we played for " + (2763 - n.temporaryInGameTime) + " seconds more.."]), n.temporaryInGameTime = 0
                }
            }
            let w, v = [],
                I = 10,
                b = 144,
                C = function() {
                    let e = l[r].resource.audio;
                    for (let t = 0; t < e.length; t++) ue.music.removeSound(ue[e[t][1]]), delete ue[e[t][1]], console.log("removing audio file " + e[t][1] + "from memory")
                };
            null != r && (w = setTimeout(C, 5e3));
            let S = 0,
                k = -1,
                P = new PIXI.Container,
                T = 2;
            e.screen.width > 4 * b && (T = 3), 1 == T && (b *= 1.5);
            for (let s in l)
                if (1 != l[s].hidden) {
                    let c = new M((function() {
                        if (l[s].dontDestroyMenu) l[s].run();
                        else if (-1 == k)
                            if (i.sleeping) ze.message(e, a.message.sleeping, he["Sprites/GameUI"][5]);
                            else if (i.sleep < 20) ze.message(e, a.message.sleepy, he["Sprites/GameUI"][6]);
                        else if (0 == i.hunger && t.coins > 8 && "cakewalk" != s) ze.message(e, a.message.hungry, he["Sprites/GameUI"][4]);
                        else {
                            for (let e = 0; e < v.length; e++) v[e].interactive = !1;
                            c.sprite.original = {
                                x: c.sprite.x,
                                y: c.sprite.y,
                                scale: c.sprite.scale.x
                            }, c.sprite.animate = !1, k = c.sprite, k.zIndex = 100, clearTimeout(w), ze.flash(e, !1, (function() {
                                s != r && null != r && C(), x(), n.inGame = !0, ue.brittlerille.pause(), d.Shift ? null != l[s].runDebug && ze.loader(e, l[s].runDebug, l[s].resource.audio) : (null == l[s].resource && (l[s].resource = {
                                    audio: []
                                }), ze.loader(e, l[s].run, l[s].resource.audio))
                            }))
                        }
                    }), he[1 == T ? "Sprites/GameBanners" : "Sprites/GameThumbnails"][l[s].texture], {
                        width: 1 == T ? 10 * (b + I) : b,
                        height: 1 == T ? b + I : b
                    });
                    c.sprite.interactive = !0, c.sprite.x = (b + I) * (S % T) + b / 2 - (T * (b + I) - I) / 2, c.sprite.y = 200 + Math.floor(S / T) * (b + I), P.addChild(c.sprite);
                    let h = o(l[s].name, 32, "center");
                    c.sprite.addChild(h), h.y = b / c.sprite.scale.x / 2 - 25, v.push(h), v.push(c), S++
                } P.x = e.screen.width / 2, P.sortableChildren = !0, e.addChild(P), v.push(P);
            let A = 0,
                L = function() {
                    -1 != k && (k.x = k.original.x + eases.easeOutQuad(A, 0, -k.original.x, 20), k.y = k.original.y + eases.easeInQuad(A, 0, e.screen.height / 2 - k.original.y, 20), k.scale.x = k.original.scale + eases.easeInQuad(A, 0, 24, 60), k.scale.y = k.scale.x, A += Qe), y.updateCounter(p.linear(y.getCounterAmount(), t.coins, .05, Qe))
                };
            c.ticker.add(L);
            let E = function() {
                m.x = e.screen.width / 2, m.y = e.screen.height / 2, P.x = e.screen.width / 2, f.sprite.x = e.screen.width - 40
            };
            return window.addEventListener("resize", E), e
        },
        faceMatch: function(e) {
            let t = !1,
                i = new PIXI.Sprite(he["Sprites/Rooms"][14]);

            function r(e) {
                for (let t = e.length - 1; t > 0; t--) {
                    let i = Math.floor(Math.random() * (t + 1)),
                        n = e[t];
                    e[t] = e[i], e[i] = n
                }
            }
            e.addChild(i);
            let s = [];

            function l() {
                s = [];
                for (let e = 0; e < 196; e++) s.push(e);
                r(s)
            }
            l(), i.interactive = !0, i.x = c.screen.width / 2, i.y = c.screen.height / 2, i.scale.x = 1.5, i.scale.y = 1.5, i.anchor.set(.5, .5);
            let d = ke(pe.faceMinigame);
            e.addChild(d), d.x = c.screen.width / 2, d.y = c.screen.height - 200;
            let u = ke(pe.faceMinigame);
            e.addChild(u), u.x = c.screen.width / 2, u.y = 200;
            let m = {
                mouth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 32],
                eye1: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]
            };
            m.eye2 = m.eye1;
            let y = {
                    eye1: u.eye1,
                    eye2: u.eye2,
                    mouth: u.mouth
                },
                g = -1;

            function b() {
                for (let e in y) y[e].dragging = !1, y[e].emit("pointerup")
            }
            let C = -Date.now(),
                S = 1;

            function k() {
                t = !1, d.gotoAndStop(function() {
                    let e = s[0];
                    return s = s.slice(1), 0 == s.length && l(), e
                }()), u.gotoAndStop(d.getCurFrame());
                let i = c.screen.height / 3 / d.body.texture.trim.height;
                i = Math.min(1, i), d.scale.x = i, d.scale.y = i, u.scale.x = i, u.scale.y = i;
                let n = [0, 1, 2];
                r(n);
                let o = 0;
                for (let t in y) {
                    let a = y[t],
                        r = 1;
                    "mouth" == t && (r = 2);
                    let s = Math.floor((a.textures.length - r) * Math.random());
                    "mouth" == t && s++, a.gotoAndStop(s), a.originalSize = {
                        x: a.scale.x,
                        y: a.scale.y
                    }, a.destinationSize = {
                        x: a.scale.x,
                        y: a.scale.y
                    }, a.interactive = !0;
                    let l = a.texture.trim,
                        d = new PIXI.Rectangle(l.x - 2, l.y - 2, l.width + 4, l.height + 4);
                    1 != a.canDrag && (I(a, d, !1, u.scale.x), v(a, (function() {
                        function i() {
                            b(), n.end();
                            for (let e = 0; e < r.length; e++) delete x[r[e].id], r[e].item.destroy(), r[e].destroy();
                            g = -1, R = 5
                        }
                        g = i;
                        let n = ze.blackTint(e, .2);
                        n.start();
                        let o = 4;
                        c.screen.width > 400 && (o = 5);
                        let r = [];
                        for (let n = 0; n < m[t].length; n++) {
                            let s = new PIXI.Sprite(he["Sprites/GameUI"][31]);
                            r.push(s), s.interactive = !0, s.hitArea = new PIXI.Rectangle(-32, -32, 64, 64), s.x = 32 + n % o * 79 - 79 * o / 2 + c.screen.width / 2 + 7.5, s.y = 79 * Math.floor(n / o), s.y += c.screen.height / 2 - 79 * Math.floor((m[t].length - 1) / o) / 2, s.anchor.set(.5, .5), e.addChild(s);
                            let l = new PIXI.Sprite(a.textures[m[t][n]]),
                                d = l.texture.trim;
                            l.x = -d.x - d.width / 2, l.y = -d.y - d.height / 2, s.addChild(l), s.item = l, s.id = w, x[P()] = s, v(s, (function() {
                                a.gotoAndStop(m[t][n]);
                                let e = a.texture.trim,
                                    o = new PIXI.Rectangle(e.x - 2, e.y - 2, e.width + 4, e.height + 4);
                                a.originalHitArea = o, a.hitArea = o, i()
                            }))
                        }
                    }), !1), a.id = w, x[P()] = a), a.originalHitArea = d, a.dragScale = i, a.hitArea = d, a.x = 100 * (n[o] - 1), a.y = -120, a.on("pointerdown", (function() {
                        for (let e in y) y[e].interactive = !1;
                        a.interactive = !0
                    })), a.on("pointerup", (function() {
                        for (let e in y) y[e].interactive = !0
                    })), o++
                }
            }
            k();
            let T = 1e3 * Math.random(),
                A = 1,
                L = function() {
                    (C + Date.now()) / 1e3 * A > S && (S++, X()), z.alpha -= .02, z.scale.x = p.linear(z.scale.x, 1.5, .05, Qe), z.scale.y = z.scale.x, T += Qe, i.scale.x = p.linear(i.scale.x, 1.5, .05, Qe), i.scale.y = i.scale.x, i.rotation = Math.cos(T / 100) / 10, i.x = c.screen.width / 2 + 20 * Math.cos(T / 90), i.y = c.screen.width / 2 + 20 * Math.cos(T / 110)
                },
                E = 15,
                D = 0;
            n.minigameMusic && (ue.countdown.attack = 1, ue.countdown.release = 1, ue.countdown.play(0, 0));
            let X = function() {
                    -1 != E && (i.scale.x = 1.52, i.scale.y = 1.52, 1 == E && ue.countdown.pause(), 0 == E ? (E = -1, U(), z.text = 15) : (E--, z.text = E, z.scale.x = 1, z.scale.y = 1, z.alpha = 1))
                },
                O = function() {
                    let e = 100,
                        t = !1,
                        i = f(d.eye1.x, d.eye1.y, u.eye1.x, u.eye1.y),
                        n = f(d.eye2.x, d.eye2.y, u.eye1.x, u.eye1.y),
                        o = f(d.eye1.x, d.eye1.y, u.eye2.x, u.eye2.y),
                        a = f(d.eye2.x, d.eye2.y, u.eye2.x, u.eye2.y);
                    i > n && i > n && (t = !0), 0 != u.eye1.alpha && 0 != u.eye2.alpha || (t = !1), t ? (d.eye1.currentFrame != u.eye2.currentFrame && (e -= 10), d.eye2.currentFrame != u.eye1.currentFrame && (e -= 10), e -= n / 3, e -= o / 3) : (0 != u.eye1.alpha && (d.eye1.currentFrame != u.eye1.currentFrame && (e -= 10), e -= i / 3), 0 != u.eye2.alpha && (d.eye2.currentFrame != u.eye2.currentFrame && (e -= 10), e -= a / 3));
                    for (let t in y) t.includes("eye") || 0 != u.mouth.alpha && (d[t].currentFrame != u[t].currentFrame && (e -= 10), e -= f(d[t].x, d[t].y, u[t].x, u[t].y) / 3);
                    return e
                };

            function N() {
                -1 != g && g(), i.destroy(), c.ticker.remove(L);
                for (let e in y) delete x[y[e].id];
                if (d.destroyAnimation(), u.destroyAnimation(), null != _.destroyCostume && _.destroyCostume(), _.destroyAnimation(), z.destroy(), H.destroyPause(), Q.destroy(), ze.gameList(e, "match"), 0 == B.length) return;
                let t = 0;
                for (let e = 0; e < B.length; e++) t += B[e];
                t /= B.length, ze.results(e, Math.round(t) + "%", Math.floor(F), void 0, a.ui.average), window.onblur = function() {}
            }
            let B = [],
                F = 0,
                R = 0;

            function U() {
                t = !0, R++, j = !0, b(), -1 != g && g();
                let i = O(),
                    o = Math.max(0, Math.round(i));
                B.push(o), F += ((10 + o) / (51 - o / 2) + o / 4) / 2;
                let r = function() {
                    if (2 == R) return R++, void setTimeout((function() {
                        ze.message(e, "Click/Tap on an eye or mouth to switch it to another!", he["Sprites/Mouth"][10], (function() {
                            r()
                        }))
                    }), 500);
                    ue.countdown.attack = 1, D++, D > 3 && (A += .05, D = 0), n.minigameMusic && (ue.countdown.play(0, 16 * D), ue.countdown.sourceNode.playbackRate.value = A), E = 15, C = -Date.now(), S = 1, ze.blurPan(e, (function() {
                        k(), j = !1, _.gotoPart("Idle")
                    }))
                };
                ze.message(e, a.ui.accuracy + ": " + o + "%", he["Sprites/GameUI"][26], r, (function() {
                    ze.blurPan(e, (function() {
                        N()
                    }))
                }), [a.ui.next, a.ui.leave]), 100 == Math.round(i) ? (ze.achievementQueue("perfectfacematch"), ue.faceMatchScores.play(0, 0), ue.faceMatchScores.stop(), ue.yeah.play(), _.gotoPart("percent100")) : i > 90 ? (ue.faceMatchScores.play(0, 8), _.gotoPart("percent90")) : i > 75 ? (ue.faceMatchScores.play(0, 4), _.gotoPart("percent75")) : i > 50 ? (ue.faceMatchScores.play(0, 0), _.gotoPart("percent50")) : i > 10 ? _.gotoPart("percent10") : _.gotoPart("Laugh"), i > 50 && (ue.faceMatchScores.sourceNode.playbackRate.value = A, ue.faceMatchScores.attack = 0, ue.faceMatchScores.release = 1 / A), setTimeout((function() {
                    ue.faceMatchScores.stop()
                }), 2e3 / A)
            }
            c.ticker.add(L);
            let z = o(E, 32, "center", void 0, 2);
            e.addChild(z), z.x = c.screen.width / 2, z.y = c.screen.height / 2;
            let _ = ke(pe.tearDropWatch, h.tearDropWatch);
            _.play(), _.gotoPart("Idle"), _.y = c.screen.height, _.x = c.screen.width / 2 + 120, e.addChild(_), n.minigameCostumes && (null != G[n.costume].applyMinigame ? G[n.costume].applyMinigame(_, 1, "faceMatch") : G[n.costume].apply(_, 1, "faceMatch"));
            let W = 0,
                j = !1;

            function V() {
                j = !j, H.changePause(j), j ? (W = -Date.now(), n.inGame = !1, ue.countdown.pause(), c.ticker.remove(L), _.stop(), ze.message(e, a.ui.gamePaused, he["Sprites/GameUI"][32], (function() {
                    V()
                }), (function() {
                    ze.blurPan(e, (function() {
                        N()
                    }))
                }), [a.ui.play, a.ui.home], !1)) : (W += Date.now(), C -= W, n.inGame = !0, _.play(), n.minigameMusic && ue.countdown.play(), c.ticker.add(L))
            }
            window.onblur = function() {
                j || V()
            };
            let H = ze.pauseButton((function() {
                V()
            }), .4);
            e.addChild(H), H.x = c.screen.width - 40, H.y = 40;
            let Q = new M((function() {
                t || (t = !0, E = -1, ue.countdown.stop(), U(), z.text = 15)
            }), he["Sprites/GameUI"][42], {
                scale: {
                    x: .4,
                    y: .4
                }
            });
            Q.sprite.x = c.screen.width - 90, Q.sprite.y = 40, e.addChild(Q.sprite)
        },
        tennis: function(e) {
            n.minigameMusic ? ue.shinytech.volume = 1 : ue.shinytech.volume = 0, ue.shinytech.play();
            let t = new PIXI.Container;
            t.x = c.screen.width / 2, t.y = c.screen.height / 2, t.pivot.x = c.screen.width / 2, t.pivot.y = c.screen.height / 2;
            let i = new PIXI.Sprite(he["Sprites/Rooms"][12]);
            t.addChild(i), i.interactive = !0, i.x = c.screen.width / 2, i.y = c.screen.height / 2, i.scale.x = 1, i.scale.y = 1, i.anchor.set(.5, .5);
            let r = ke(pe.tearDropTennis, h.tearDropTennis),
                s = {
                    a: {
                        d: r.e,
                        e: r.c,
                        f: r.d,
                        g: r.f,
                        h: r.g,
                        i: r.h,
                        j: r.j,
                        k: r.i
                    },
                    c: r.a,
                    b: r.b,
                    tearDrop: r
                };
            r.x = c.screen.width / 2, r.y = c.screen.height / 2, n.minigameCostumes && ("uglysweater" == n.costume ? G.uglysweater2.apply(s) : null != G[n.costume].applyMinigame ? G[n.costume].applyMinigame(s, 0, "tennis") : G[n.costume].apply(s, 0, "tennis"), "_td_costume1" == n.costume && (r.sortableChildren = !0, r.i.zIndex = 10, r.j.zIndex = 10)), r.play(), r.gotoPart("hit"), t.addChild(r);
            let l = 0,
                d = c.screen.width / 2 + 30,
                u = c.screen.height / 2 - 180;
            e.addChild(t);
            let m = o("0", 16, "center");
            m.x = c.screen.width / 2, m.y = 20, e.addChild(m);
            let y = {},
                f = 0,
                g = function() {
                    let e = new PIXI.AnimatedSprite(he["Sprites/tennisBall"]);
                    e.x = c.screen.width / 2 + 30, e.y = c.screen.height / 2 - 180, e.anchor.set(.5, .5), e.play(), t.addChild(e), e.towards = 1, e.animationTimer = 0, e.interactive = !0, e.mouseTransform = {
                        x: 0
                    }, e.timerCache = 0, e.on("pointerdown", (function() {
                        e.animationTimer > 140 && 1 == e.towards && (e.towards *= -1, e.vy = -10, e.mouseTransform = {
                            x: e.x
                        }, e.randomX = c.screen.width * (Math.random() - .5), e.timerCache = e.animationTimer, e.animationSpeed = 2)
                    })), e.rotation = 0, e.randomX = 0, e.r = 0, e.id = f, y[f++] = e
                };
            g();
            let x = 1,
                w = o(a.score.perfect, 32, "center", "middle");
            w.anchor.set(.5, .5), w.x = c.screen.width / 2, w.y = c.screen.height / 2 + 200, e.addChild(w);
            let v = Date.now();
            t.sortableChildren = !0;
            let I = function() {
                    let e = (Date.now() - v) / (6e4 / 138) / 4;
                    e > b && (b += 4, g()), e > 4 && (t.scale.x = eases.easeOutQuad((e + .25) % .5, 1.02, -.02, .5), t.scale.y = t.scale.x), w.alpha > 0 && (w.scale.x += .02 * Qe, w.scale.y = w.scale.x, w.alpha -= .04 * Qe, w.rotation += w.rotationAmount);
                    for (let t in y) {
                        let i = y[t];
                        if (i.animationTimer < 0) {
                            w.rotation = 0, w.rotationAmount = (Math.random() - .5) / 100, w.scale.x = 1, w.scale.y = 1, w.text = a.score.bad;
                            let t = 5,
                                i = e % .5;
                            (i < .2 || i > .4) && (w.text = a.score.meh, t = 20), (i < .125 || i > .375) && (w.text = a.score.nice, t = 50), (i < .05 || i > .45) && (w.text = a.score.perfect, t = 100), l += t, m.text = l
                        }
                        i.animationTimer <= 0 && (r.gotoPart("hit"), i.towards = 1, i.randomX = c.screen.width / 2 * (Math.random() - .5), w.alpha = 1), i.animationTimer < 50 && 1 != i.towards && r.gotoPart("prepare"), i.animationTimer += 4 * i.towards * x * Qe, i.scale.x = 1 + window.eases.easeOutQuad(i.animationTimer, 0, 2, 300), i.scale.y = i.scale.x, i.y = u - window.eases.easeOutQuad(i.animationTimer, 0, 100, 100), i.rotation = i.r / 60, i.zIndex = i.scale.x, 1 == i.towards ? i.x = d + window.eases.easeOutQuad(i.animationTimer, 0, i.randomX, 100) : i.x = i.mouseTransform.x + window.eases.easeInOutQuad(Math.min(i.timerCache, i.timerCache - i.animationTimer), 0, d - i.mouseTransform.x, i.timerCache), i.animationSpeed = p.linear(i.animationSpeed, .5, .01, Qe), i.r += i.animationSpeed, i.y > c.screen.height + 300 && (l -= 10, m.text = l, y[t].destroy(), delete y[t])
                    }
                    x += 5e-5 * Qe, 0 == Object.keys(y).length && S()
                },
                b = 4;
            ue.shinytech.release = 1, c.ticker.add(I);
            let C = !1;

            function S(n = !1) {
                C || (C = !0, ue.shinytech.stop(), c.ticker.remove(I), T.destroyPause(), w.destroy(), ze.fade((function() {
                    for (let e in y) y[e].destroy(), delete y[e];
                    null != r.destroyCostume && r.destroyCostume(), r.destroyAnimation(), t.destroy(), i.destroy(), m.destroy(), n ? (Ge(e, l, Math.floor(l / 75), "tennis2"), G.sportsdrop.owned = !0, ze.achievementQueue("winagameoftennis"), H()) : Ge(e, l, Math.max(0, Math.floor(l / 100)), "tennis"), l >= 2763 && ze.achievementQueue("get2763intennis"), l >= 27630 && (ze.achievementQueue("get27630intennis"), G.tennisballdrop.owned = !0), l >= 100000 && ze.achievementQueue("masterofspeed"), l < 0 && ze.achievementQueue("slowpokerodriguez"), l >= 50000 && ze.achievementQueue("speedygonzalez")
                })), window.onblur = function() {})
            }
            ue.shinytech.on("end", (function() {
                S(!0)
            }));
            let k = 0;
            window.onblur = function() {
                M || P()
            };
            let M = !1;

            function P() {
                M = !M, T.changePause(M), M ? (k = -Date.now(), n.inGame = !1, ue.shinytech.pause(), c.ticker.remove(I), r.stop(), ze.message(e, a.ui.gamePaused, he["Sprites/GameUI"][32], (function() {
                    P()
                }), (function() {
                    S()
                }), [a.ui.play, a.ui.home], !1)) : (k += Date.now(), v += k, n.inGame = !0, r.play(), ue.shinytech.play(), c.ticker.add(I))
            }
            let T = ze.pauseButton((function() {
                P()
            }), .4);
            e.addChild(T), T.x = c.screen.width - 40, T.y = 40
        },
        // Drop Tennis Endless
        tennis3: function(e) {
            let dte = function() {
                n.minigameMusic && (ue.shinytech2.play(), ue.shinytech2.sourceNode.playbackRate.value + 0.25)
            };
            n.minigameMusic && (ue.shinytech2.play(), ue.shinytech2.sourceNode.playbackRate.value = 1, ue.shinytech2.on("end", dte));

            let t = new PIXI.Container;
            t.x = c.screen.width / 2, t.y = c.screen.height / 2, t.pivot.x = c.screen.width / 2, t.pivot.y = c.screen.height / 2;
            let i = new PIXI.Sprite(he["Sprites/Rooms"][29]);
            t.addChild(i), i.interactive = !0, i.x = c.screen.width / 2, i.y = c.screen.height / 2, i.scale.x = 1, i.scale.y = 1, i.anchor.set(.5, .5);
            let r = ke(pe.tearDropTennis, h.tearDropTennis),
                s = {
                    a: {
                        d: r.e,
                        e: r.c,
                        f: r.d,
                        g: r.f,
                        h: r.g,
                        i: r.h,
                        j: r.j,
                        k: r.i
                    },
                    c: r.a,
                    b: r.b,
                    tearDrop: r
                };

            let watermark = o("Endless");
            watermark.anchor.set(0, 0), watermark.x = 10, watermark.y = 10, watermark.alpha = 0.5, t.addChild(watermark);
            
            r.x = c.screen.width / 2, r.y = c.screen.height / 2, n.minigameCostumes && ("uglysweater" == n.costume ? G.uglysweater2.apply(s) : null != G[n.costume].applyMinigame ? G[n.costume].applyMinigame(s, 0, "tennis") : G[n.costume].apply(s, 0, "tennis"), "_td_costume1" == n.costume && (r.sortableChildren = !0, r.i.zIndex = 10, r.j.zIndex = 10)), r.play(), r.gotoPart("hit"), t.addChild(r);
            let l = 0,
                d = c.screen.width / 2 + 30,
                u = c.screen.height / 2 - 180;
            e.addChild(t);
            let m = o("0", 16, "center");
            m.x = c.screen.width / 2, m.y = 20, e.addChild(m);
            let y = {},
                f = 0,
                g = function() {
                    let e = new PIXI.AnimatedSprite(he["Sprites/tennisBall"]);
                    e.x = c.screen.width / 2 + 30, e.y = c.screen.height / 2 - 180, e.anchor.set(.5, .5), e.play(), t.addChild(e), e.towards = 1, e.animationTimer = 0, e.interactive = !0, e.mouseTransform = {
                        x: 0
                    }, e.timerCache = 0, e.on("pointerdown", (function() {
                        e.animationTimer > 140 && 1 == e.towards && (e.towards *= -1, e.vy = -10, e.mouseTransform = {
                            x: e.x
                        }, e.randomX = c.screen.width * (Math.random() - .5), e.timerCache = e.animationTimer, e.animationSpeed = 2)
                    })), e.rotation = 0, e.randomX = 0, e.r = 0, e.id = f, y[f++] = e
                };
            g();
            let x = 1,
                w = o(a.score.perfect, 32, "center", "middle");
            w.anchor.set(.5, .5), w.x = c.screen.width / 2, w.y = c.screen.height / 2 + 200, e.addChild(w);
            let v = Date.now();
            t.sortableChildren = !0;
            let I = function() {
                    let e = (Date.now() - v) / (6e4 / 138) / 4;
                    e > b && (b += 4, g()), e > 4 && (t.scale.x = eases.easeOutQuad((e + .25) % .5, 1.02, -.02, .5), t.scale.y = t.scale.x), w.alpha > 0 && (w.scale.x += .02 * Qe, w.scale.y = w.scale.x, w.alpha -= .04 * Qe, w.rotation += w.rotationAmount);
                    for (let t in y) {
                        let i = y[t];
                        if (i.animationTimer < 0) {
                            w.rotation = 0, w.rotationAmount = (Math.random() - .5) / 100, w.scale.x = 1, w.scale.y = 1, w.text = a.score.bad;
                            let t = 5,
                                i = e % .5;
                            (i < .2 || i > .4) && (w.text = a.score.meh, t = 20), (i < .125 || i > .375) && (w.text = a.score.nice, t = 50), (i < .05 || i > .45) && (w.text = a.score.perfect, t = 100), l += t, m.text = l
                        }
                        i.animationTimer <= 0 && (r.gotoPart("hit"), i.towards = 1, i.randomX = c.screen.width / 2 * (Math.random() - .5), w.alpha = 1), i.animationTimer < 50 && 1 != i.towards && r.gotoPart("prepare"), i.animationTimer += 4 * i.towards * x * Qe, i.scale.x = 1 + window.eases.easeOutQuad(i.animationTimer, 0, 2, 300), i.scale.y = i.scale.x, i.y = u - window.eases.easeOutQuad(i.animationTimer, 0, 100, 100), i.rotation = i.r / 60, i.zIndex = i.scale.x, 1 == i.towards ? i.x = d + window.eases.easeOutQuad(i.animationTimer, 0, i.randomX, 100) : i.x = i.mouseTransform.x + window.eases.easeInOutQuad(Math.min(i.timerCache, i.timerCache - i.animationTimer), 0, d - i.mouseTransform.x, i.timerCache), i.animationSpeed = p.linear(i.animationSpeed, .5, .01, Qe), i.r += i.animationSpeed, i.y > c.screen.height + 300 && (l -= 10, m.text = l, y[t].destroy(), delete y[t])
                    }
                    x += 5e-5 * Qe, 0 == Object.keys(y).length && S()
                },
                b = 4;
            ue.shinytech2.release = 1, c.ticker.add(I);
            let C = !1;

            function S(n = !1) {
                C || (C = !0, ue.shinytech2.stop(), c.ticker.remove(I), T.destroyPause(), w.destroy(), ze.fade((function() {
                    for (let e in y) y[e].destroy(), delete y[e];
                    null != r.destroyCostume && r.destroyCostume(), r.destroyAnimation(), t.destroy(), i.destroy(), m.destroy(), n ? (Ge(e, l, Math.floor(l / 75), "tennis2"), G.sportsdrop.owned = !0, ze.achievementQueue("winagameoftennis"), H()) : Ge(e, l, Math.max(0, Math.floor(l / 100)), "tennis3", ue.shinytech2.off()), l < 0 && ze.achievementQueue("slowpokerodriguez"), l >= 50000 && ze.achievementQueue("speedygonzalez")
                })), window.onblur = function() {})
            }
            let k = 0;
            window.onblur = function() {
                M || P()
            };
            let M = !1;

            function P() {
                M = !M, T.changePause(M), M ? (k = -Date.now(), n.inGame = !1, ue.shinytech2.pause(), c.ticker.remove(I), r.stop(), ze.message(e, a.ui.gamePaused, he["Sprites/GameUI"][32], (function() {
                    P()
                }), (function() {
                    S(),
                    ue.shinytech2.stop();
                }), [a.ui.play, a.ui.home], !1)) : (k += Date.now(), v += k, n.inGame = !0, r.play(), dte(), c.ticker.add(I))
            }
            let T = ze.pauseButton((function() {
                P()
            }), .4);
            e.addChild(T), T.x = c.screen.width - 40, T.y = 40
        },
        gtttatint: function(e, t = "", i = !1) {
            let r = function() {
                n.minigameMusic && ue.radiomartini.play()
            };
            ue.radiomartini.stopWithStyle = function() {
                if (!n.minigameMusic) return;
                let e = function() {
                    null != ue.radiomartini ? (ue.radiomartini.volume -= 1 / 60 * Qe, ue.radiomartini.sourceNode.playbackRate.value -= 1 / 120 * Qe, ue.radiomartini.volume <= .01 && (ue.radiomartini.stop(), c.ticker.remove(e))) : c.ticker.remove(e)
                };
                c.ticker.add(e), ue.radiomartini.off("end", r)
            }, n.minigameMusic && (ue.radiomartini.play(), ue.radiomartini.sourceNode.playbackRate.value = 1, ue.radiomartini.volume = 1), ue.radiomartini.on("end", r);
            let s = new PIXI.Sprite(he["Sprites/Rooms"][10]);
            s.interactive = !0, s.x = e.screen.width / 2, s.anchor.set(.5, 0);
            let l = new PIXI.Sprite(he["Backgrounds/Starfield"][0]);
            e.addChild(s), e.addChild(l), l.anchor.set(.5, .5), l.x = e.screen.width / 2 - 50, l.y = e.screen.height / 2 - 100, l.alpha = 0, l.scale.x = 1.25, l.scale.y = 1.25;
            let d = new PIXI.Container,
                h = {},
                u = 0;
            e.addChild(d), s.x = e.screen.width / 2 - 180, s.height = 20 * e.screen.height;
            let m = {
                    x: 0,
                    y: 0,
                    vx: 0,
                    vy: 0,
                    box: new PIXI.Graphics,
                    width: 30,
                    height: 30,
                    acceleration: 0
                },
                y = [];
            y.push(s), y.push(l), y.push(m.box);
            let f = new PIXI.Container;
            e.addChild(f), y.push(f);
            let x = {},
                w = p.linear(e.screen.width - 60, 300, .75),
                v = 0,
                I = w / 2 - 60,
                b = 0;

            function C(e, t, i, n) {
                let o = function() {
                    let o = 5 * t;
                    return o = 9 * (o << 7 | o >>> 25), n ^= t, t ^= i ^= e, e ^= n, n = n << 11 | n >>> 21, (o >>> 0) / 2 ** 32
                };
                for (let e = 0; e < 100; e++) o();
                return o
            }
            let S = function(e) {
                let t = [];
                for (let i = 0; i < 4; i++) {
                    let n = 2 ** 32;
                    for (let t = 0; t < 4; t++) n -= (e.charCodeAt(t + 4 * i) + 30 * i) ** 4;
                    t.push(n)
                }
                return t
            };
            if ("" == t) {
                let e = function() {
                    return Math.floor(1e6 + 9999999 * Math.random()).toString(36)
                };
                t = e() + e() + e() + e()
            }
            if (t.length < 16) {
                let e = "";
                for (let i = 0; i < 16; i++) e += t, t.length / 2 == Math.floor(t.length / 2) && (e += "}");
                t = e
            }
            let k = S(t),
                P = C(k[0], k[1], k[2], k[3]);
            for (let t = 0; t < 30; t++) {
                let i = new PIXI.Sprite(he["Sprites/Clouds"][Math.floor(3 * P())]);
                d.addChild(i), i.anchor.set(.5, .5), i.y = e.screen.height / 2 + (P() - .5) * e.screen.height - 1200 * P(), i.orig = {
                    y: i.y
                }, i.scale.x = .2 + t / 150, i.scale.y = .2 + t / 150, i.x = e.screen.width / 2 + (P() - .5) * w * p.linear(i.scale.x, 1, .5), P() > .5 && (i.scale.x *= -1);
                let n = i.texture.trim;
                null == n && (n = i.texture._frame), i.pivot.y = -n.height, h[u++] = i
            }
            let T = 0,
                A = 0;

            function L(i = !1, n = -1) {
                50 * Math.floor(b / 50) == b && 0 != b && (t = function(e) {
                    let t = "";
                    for (let i = 0; i < e.length; i++) t += 0 == i ? e[e.length - 1] : e[i - 1];
                    return t
                }(t), k = S(t), P = C(k[0], k[1], k[2], k[3]));
                let o = 120;
                o *= (Math.cos(b / 10) / 2 + .5 + 1) / 2;
                let a = (P() - .5) * v;
                b > 200 && P() > .998 && (A = 10 + Math.floor(40 * P())), A > 0 && (a = 60 * Math.round(a / 60), T = T > 1 ? 1 : 0), T > 0 && (a /= 10, o = 70);
                let r = I + a;
                (r < 0 || r > w - o) && (r = I - a), r < 0 && (r = 0), 100 * Math.floor(b / 100) == b && (i = !0), i && (o = w, r = 0), r > w - o && (r = w - o), i && T > 1 && (T = 1), A > 0 && (o = 60);
                let s = {
                    x: r,
                    y: -60 * b,
                    width: o,
                    height: 40,
                    id: b,
                    transparent: !1,
                    ladder: T > 1,
                    blocky: A > 0
                };
                i || (I = s.x), v < w && (v += 12);
                let l = P() < .01 || 1 == T;
                1 == T && (s.y += 30), s.boost = l;
                let d = l ? he.inputNineSlice[7] : he.inputNineSlice[6];
                T > 1 && (d = he.inputNineSlice[8]);
                let c = new PIXI.NineSlicePlane(d, 15, 15, 15, 15);
                c.width = s.width, c.height = 0 == b ? e.screen.height : s.height / 4, A > 0 && (c.height = 60), T > 1 && (c.height *= 4), c.pivot.x = s.width / 2, c.pivot.y = c.height / 2, c.x = s.x + c.pivot.x, c.y = s.y + c.pivot.y, c.vy = 0, c.vx = 0, (P() < .01 + b / 1e3 && !i || s.ladder && !i) && (c.rotation = P() > .5 ? .1 : -.1, s.broken = !0), f.addChild(c), s.sprite = c, c.zIndex = 0, x[b] = s, b++, T--, A--, P() < .005 && (T = 20 + Math.floor(P() * P() * 50))
            }
            L(), m.x = x[0].x + x[0].width / 2 - m.width / 2, m.y = x[0].y - m.height, m.zIndex = 1e4;
            let E = {},
                D = function(e) {
                    let t = e.key.toLowerCase();
                    "ArrowLeft" == e.key && (t = "a"), "ArrowRight" == e.key && (t = "d"), "ArrowUp" == e.key && (t = " "), "w" == e.key && (t = " "), E[t] = !0, ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", " "].includes(e.key) && e.preventDefault()
                },
                X = function(e) {
                    let t = e.key.toLowerCase();
                    "ArrowLeft" == e.key && (t = "a"), "ArrowRight" == e.key && (t = "d"), "ArrowUp" == e.key && (t = " "), "w" == e.key && (t = " "), E[t] = !1
                },
                O = 0,
                N = 10;
            for (let e = 0; e < 10; e++) L();
            let B = ke(pe.GTTTATINT);
            if (n.minigameCostumes) {
                let e = {
                    a: {
                        d: B.a_.c,
                        e: B.a_.e,
                        f: B.a_.d,
                        g: B.a_.e,
                        h: B.a_.d,
                        i: B.a_.f,
                        j: B.d,
                        k: B.c
                    },
                    c: B.b.b,
                    b: B.b.a,
                    tearDrop: B
                };
                null != G[n.costume].applyMinigame ? G[n.costume].applyMinigame(e, 0, "gtttatint") : G[n.costume].apply(e, 0, "gtttatint")
            }
            let F = !1,
                R = function() {
                    F = !0
                },
                U = function() {
                    F = !1
                };
            document.addEventListener("keydown", D), document.addEventListener("keyup", X), document.addEventListener("pointerdown", R), document.addEventListener("pointerup", U), B.onNextFrame = function(e) {
                let t = Math.min(59, Math.max(0, Math.round(30 - 30 * m.acceleration)));
                e.a_.gotoAndStop(t), "moondrop" == n.costume && (t <= 18 ? (e.a_.d.tint = 0, e.a_.e.tint = 16777215) : (e.a_.d.tint = 16777215, e.a_.e.tint = 0), t >= 40 && (e.a_.e.tint = 16777215), t >= 43 && (e.a_.e.tint = 0)), e.b.scale.x = m.acceleration < 0 ? -1 : 1, e.c.rotation += -1.5 + Math.abs(2 * m.acceleration) + Math.abs(m.vy / 4), 0 == m.vy && e.a_.c.gotoAndStop(1), E.a || E.d || (e.b.gotoAndStop(20), e.b.a.rotation = -Math.abs(m.vy / 4), e.b.b.rotation = -Math.abs(m.vy / 4)), e.d.rotation = -e.c.rotation
            }, B.play(), B.loop = !0, B.scale.x = .4, B.scale.y = .4;
            let z = new PIXI.NineSlicePlane(he.inputNineSlice[5], 15, 15, 15, 15);
            z.width = (e.screen.width - w) / 2, z.height = e.screen.height, z.x = 0, z.y = 0, e.addChild(z);
            let _ = new PIXI.NineSlicePlane(he.inputNineSlice[5], 15, 15, 15, 15);

            function W(t, i, o, a) {
                let r = 1;
                if (null != n.controllerProfile.GTTTATINT) {
                    let o = n.controllerProfile.GTTTATINT;
                    console.log(o), t = o.buttons[a].x + e.screen.width * o.buttons[a].lock, i = o.buttons[a].y + e.screen.height, r = o.buttonScale + .5
                }
                let s = new M((function() {}), he["Sprites/GameUI"][o], {
                    x: t,
                    y: i,
                    scale: {
                        x: r,
                        y: r
                    }
                });
                s.sprite.on("pointerdown", (function() {
                    E[a] = !0
                })), s.sprite.on("pointermove", (function() {
                    F && s.sprite.emit("pointerdown")
                })), s.sprite.on("pointerout", (function() {
                    s.sprite.emit("pointerup")
                })), s.sprite.on("pointerup", (function() {
                    E[a] = !1
                })), e.addChild(s.sprite), y.push(s)
            }
            _.width = (e.screen.width - w) / 2, _.height = e.screen.height, _.x = e.screen.width - _.width, _.y = 0, e.addChild(_), c.touchScreen && (W(e.screen.width - 150, e.screen.height - 50, 21, "a"), W(e.screen.width - 50, e.screen.height - 50, 22, "d"), W(100, e.screen.height - 50, 23, " ")), f.y = 300;
            let j = Date.now(),
                V = -1,
                H = function() {
                    -1 != V && (Date.now() - j) / 1e3 > V && V++, n.minigameMusic && (ue.radiomartini.sourceNode.playbackRate.value = p.linear(ue.radiomartini.sourceNode.playbackRate.value, 1 - m.vy / 400 + O / 80, .01, Qe)), s.y = -s.height + e.screen.height, s.y += f.y, l.alpha = (f.y - 8e3) / 1e3, s.y > 0 && (s.y = 0), s.y < -s.height + e.screen.height && (s.y = -s.height + e.screen.height), b - 640 / 60 < -m.y / 60 && L();
                    for (let t in x) parseInt(t) < Math.floor((f.y - e.screen.height) / 60) && (K.add(Math.max(1, O)), x[t].sprite.destroy(), delete x[t]);
                    m.isOnGround = !1, B.x = m.x + m.width / 2, B.y = m.y + m.height, E.d && (m.acceleration += .075 * Qe), E.a && (m.acceleration -= .075 * Qe), m.vy += .4 * Qe, m.acceleration = p.linear(m.acceleration, 0, 1 - .95, Qe), m.vx += m.acceleration * Qe, m.vx = p.linear(m.vx, 0, 1 - .8, Qe), m.y += m.vy * Qe, m.x += m.vx * Qe;
                    let t = Math.abs(m.vx / 40),
                        o = Math.abs(m.vy / 40);
                    B.scale.x = .4 * (1 + t - o), B.scale.y = .4 * (1 + o - t), (m.x < 0 || m.x > w - m.width) && (m.vx /= -1, m.acceleration /= -1), m.x < 0 && (m.x = 0), m.x > w - m.width && (m.x = w - m.width);
                    for (let e in x) {
                        let t = x[e];
                        if (t.transparent && (t.sprite.rotation += (t.rotateTo < 0 ? -.1 : .1) * Qe, t.sprite.x += t.sprite.vx * Qe, t.sprite.y += t.sprite.vy * Qe, t.sprite.vy += .2 * Qe, t.sprite.vx = p.linear(t.sprite.vx, 0, .05)), g(m, t) && !t.transparent && (t.ladder || m.vy > 0 && m.y < t.y - m.height + (4 + m.vy) * Qe)) {
                            if (t.broken && (t.sprite.vy = m.vy / 2, t.transparent = !0, t.rotateTo = m.x + m.width / 2 - t.sprite.x, t.sprite.vx = 10 * (Math.random() - .5)), t.ladder || (m.y = t.y - m.height, m.isOnGround = !0), t.blocky && !i && ze.achievementQueue("blockplatformgtttatint"), m.vy = 0, m.max < t.id && !t.ladder) {
                                let e = t.id - m.max;
                                K.add(10 * (e - 1)), N--, 0 == N && (O++, 2 == O && (j = Date.now(), V = 0), J.text = a.ui.mph + ": " + O, N = 10)
                            }
                            m.max = t.id;
                            let e = 7;
                            O >= 7 && (e *= 2), O >= 10 && (e *= 1.5), O >= 16 && (e *= 1.5), O >= 20 && (e *= 2), t.boost && (e *= 2), (E[" "] || t.boost || t.ladder) && (t.ladder ? (m.y -= 2 * Qe, m.vy -= 10) : m.vy -= e + Math.abs(1.5 * m.vx))
                        }
                    }
                    f.x = e.screen.width / 2 - w / 2, m.y < e.screen.height / 2 - f.y - 200 && (f.y = p.linear(f.y, e.screen.height / 2 - m.y - 200, .1, Qe)), -f.y + e.screen.height < m.y && !Q && (Q = !0, ue.radiomartini.stopWithStyle(), ze.blurPan(e, (function() {
                        q()
                    }))), f.y += O / 2 * Qe;
                    for (let t in h) h[t].y = h[t].orig.y + f.y * h[t].scale.y / 2, h[t].y > e.screen.height && (h[t].destroy(), delete h[t])
                },
                Q = !1;
            c.ticker.add(H);
            let Y = 0,
                K = o(Y, 32);
            K.add = function(e) {
                Y += e, i ? (K.text = "Set seed", K.alpha = .2) : K.text = "Score: " + Y
            }, K.add(0), K.anchor.set(0, 0), K.x = 20, K.y = 20, e.addChild(K);
            let J = o(a.ui.mph + ": 0", 32);
            J.anchor.set(0, 0), J.x = 20, J.y = 55, e.addChild(J), y.push(J), y.push(K), y.push(_), y.push(z), f.addChild(B), f.sortableChildren = !0, B.zIndex = 1e3, y.push(B);
            let q = function() {
                for (let e in x) x[e].sprite.destroy();
                for (let e in h) h[e].destroy(), delete h[e];
                null != B.destroyCostume && B.destroyCostume();
                for (let e = 0; e < y.length; e++) y[e].destroy();
                document.removeEventListener("keydown", D), document.removeEventListener("keyup", X), document.removeEventListener("pointerdown", R), document.removeEventListener("pointerup", U), c.ticker.remove(H), te.destroyPause(), i || (O >= 5 ? Ge(e, Y, Math.floor(Y / 50)) : (ze.gameList(e, "gtttatint"), ze.results(e, Y, Math.floor(Y / 50)))), V >= 120 && (ze.achievementQueue("5minuteGTTTATINT"), G.jockdrop.owned = !0), V >= 300 && (ze.achievementQueue("true5minuteGTTTATINT"), G.testdrop.owned = !0), Y >= 2763 && ze.achievementQueue("get2763gtttatint"), Y >= 15e3 && ze.achievementQueue("get15000gtttatint"), Y >= 27630 && ze.achievementQueue("get27630GTTTATINT"), Y >= 150000 && ze.achievementQueue("get150000gtttatint"), (Y >= 175000 && V >= 300 && O >= 25) && (ze.achievementQueue("masterofgtttatint"), G.shadowmilkdrop.owned = !0), window.onblur = function() {}
            };
            window.onblur = function() {
                Z || ee()
            };
            let Z = !1,
                $ = 0;

            function ee() {
                Z = !Z, te.changePause(Z), Z ? (n.inGame = !1, ue.radiomartini.pause(), c.ticker.remove(H), B.stop(), $ = -Date.now(), ze.message(e, a.ui.gamePaused, he["Sprites/GameUI"][32], (function() {
                    ee()
                }), (function() {
                    ze.blurPan(e, (function() {
                        ue.radiomartini.stop(), q()
                    }))
                }), [a.ui.play, a.ui.home], !1)) : ($ += Date.now(), j += $, n.inGame = !0, B.play(), n.minigameMusic && ue.radiomartini.play(), c.ticker.add(H))
            }
            let te = ze.pauseButton((function() {
                ee()
            }), .4);
            e.addChild(te), te.x = e.screen.width - 40, te.y = 40
        },
        cakewalk: function(e, t = "", r = !1) {
            let s = function() {
                n.minigameMusic && (ue.Pamgaea.play(), ue.Pamgaea.sourceNode.playbackRate.value = 1.15)
            };
            n.minigameMusic && (ue.Pamgaea.play(), ue.Pamgaea.sourceNode.playbackRate.value = 1.15, ue.Pamgaea.on("end", s));
            let l = new PIXI.Sprite(he["Sprites/Rooms"][10]);
            l.interactive = !0, l.x = c.screen.width / 2, l.anchor.set(.5, 0);
            let d = new PIXI.Sprite(he["Backgrounds/Starfield"][0]);
            e.addChild(l), e.addChild(d), d.anchor.set(.5, .5), d.x = c.screen.width / 2 - 50, d.y = c.screen.height / 2 - 100, d.alpha = 0, d.scale.x = 1.25, d.scale.y = 1.25;
            let h = new PIXI.Container,
                u = {},
                m = 0;
            e.addChild(h), l.x = c.screen.width / 2 - 180, l.height = 20 * c.screen.height;
            let y = {
                    x: 0,
                    y: 0,
                    vx: 0,
                    vy: 0,
                    box: new PIXI.Graphics,
                    width: 30,
                    height: 30,
                    acceleration: 0
                },
                f = [];
            f.push(l), f.push(d), f.push(y.box);
            let g = new PIXI.Container;
            e.addChild(g), f.push(g);
            let x = 360;
            if ("" == t) {
                let e = function() {
                    return Math.floor(1e6 + 9999999 * Math.random()).toString(36)
                };
                t = e() + e() + e() + e()
            }
            if (t.length < 16) {
                let e = "";
                for (let i = 0; i < 16; i++) e += t, t.length / 2 == Math.floor(t.length / 2) && (e += "}");
                t = e
            }
            let w = function(e) {
                    let t = [];
                    for (let i = 0; i < 4; i++) {
                        let n = 2 ** 32;
                        for (let t = 0; t < 4; t++) n -= (e.charCodeAt(t + 4 * i) + 30 * i) ** 4;
                        t.push(n)
                    }
                    return t
                }(t),
                I = function(e, t, i, n) {
                    let o = function() {
                        let o = 5 * t;
                        return o = 9 * (o << 7 | o >>> 25), n ^= t, t ^= i ^= e, e ^= n, n = n << 11 | n >>> 21, (o >>> 0) / 2 ** 32
                    };
                    for (let e = 0; e < 100; e++) o();
                    return o
                }(w[0], w[1], w[2], w[3]);
            for (let e = 0; e < 30; e++) {
                let t = new PIXI.Sprite(he["Sprites/Clouds"][Math.floor(3 * I())]);
                h.addChild(t), t.anchor.set(.5, .5), t.y = c.screen.height / 2 + (I() - .5) * c.screen.height - 1200 * I(), t.orig = {
                    y: t.y
                }, t.scale.x = .2 + e / 150, t.scale.y = .2 + e / 150, t.x = c.screen.width / 2 + (I() - .5) * x * p.linear(t.scale.x, 1, .5), I() > .5 && (t.scale.x *= -1);
                let i = t.texture.trim;
                null == i && (i = t.texture._frame), t.pivot.y = -i.height, u[m++] = t
            }
            y.zIndex = 1e4;
            let C = {},
                S = function(e) {
                    C[e.key.toLowerCase()] = !0
                },
                k = function(e) {
                    C[e.key.toLowerCase()] = !1
                },
                M = !1,
                P = function() {
                    M = !0
                },
                T = function() {
                    M = !1
                };
            document.addEventListener("keydown", S), document.addEventListener("keyup", k), document.addEventListener("pointerdown", P), document.addEventListener("pointerup", T);
            let A = new PIXI.NineSlicePlane(he.inputNineSlice[12], 2, 2, 2, 2);
            A.width = (c.screen.width - x) / 2, A.height = c.screen.height, A.x = 0, A.y = 0, e.addChild(A);
            let L = new PIXI.NineSlicePlane(he.inputNineSlice[12], 2, 2, 2, 2);
            L.width = (c.screen.width - x) / 2, L.height = c.screen.height, L.x = c.screen.width - L.width, L.y = 0, e.addChild(L), g.y = 300;
            let E = {},
                D = 0,
                X = -1,
                O = -1,
                N = !0;

            function B() {
                let e = {
                    x: 0,
                    y: -1 == X ? 0 : X.y - 100,
                    width: -1 == X ? 200 : X.width,
                    height: 50,
                    speed: 1,
                    scaleTimer: 0
                };
                N && (e.x = x - e.width, e.speed *= -1), e.width <= 100 && (e.x = N ? X.x + X.width + 40 : X.x - e.width - 40), e.x < 0 && (e.x = 0), e.x > x + e.width && (e.x = x + e.width), N = !N, e.original = {
                    y: e.y
                }, -1 == X && (e.scaleTimer = 110, e.x = 80), e.previous = X, X = e, e.container = new PIXI.Container, e.container.x = e.x, e.container.y = e.y, g.addChild(e.container), e.setWidth = function(t, a) {
                    i.width = t, i.tilePosition.x += a, e.width = t, o.width = t, n.width = t, n.tilePosition.x += a, i.pivot.x = e.width / 2, i.pivot.y = e.height / 2, i.x = i.pivot.x, i.y = i.pivot.y
                }, e.destroy = function() {
                    n.destroy(), o.destroy(), i.destroy(), e.container.destroy(), delete E[e.id]
                };
                let t = 3 * Math.floor(3 * Math.random());
                e.texture = t;
                let i = new PIXI.TilingSprite(he["Sprites/CakeSlicePlane"][1 + t]);
                i.pivot.x = e.width / 2, i.pivot.y = e.height / 2, i.x = i.pivot.x, i.y = i.pivot.y, i.clampMargin = 1, i.width = e.width, i.height = 50, e.container.addChild(i), e.sprite = i;
                let n = new PIXI.TilingSprite(he["Sprites/CakeSlicePlane"][2 + t]);
                n.y = -90, n.clampMargin = 1, e.container.roundPixels = !0, n.width = e.width, n.height = 90, i.addChild(n);
                let o = new PIXI.NineSlicePlane(he["Sprites/CakeSlicePlane"][0 + t]);
                i.addChild(o), o.width = e.width, o.height = 50, e.id = D, E[D] = e, O = D, D++
            }
            let F = new PIXI.NineSlicePlane(he.inputNineSlice[13]);
            g.addChild(F), F.x = -20, F.y = 50, F.width = 400, F.height = c.screen.height, l.on("pointerdown", (function() {
                E[O].dropping || (E[O].dropping = !0, E[O].speed = 0, E[O].animationTimer = 0)
            })), B(), B();
            let R = !1,
                U = 0,
                z = {},
                _ = 0,
                W = 0,
                j = function() {
                    if (E[O].x += E[O].speed * Qe, (E[O].x > x - E[O].width || E[O].x < 0) && (E[O].speed *= -1), E[O].x > x - E[O].width && (E[O].x = x - E[O].width), E[O].x < 0 && (E[O].x = 0), E[O].container.x = E[O].x, E[O].dropping) {
                        E[O].y = E[O].original.y + eases.easeInQuad(E[O].animationTimer, 0, 50, 24), E[O].container.y = E[O].y, E[O].animationTimer += Qe;
                        let t = E[O],
                            n = E[O].previous;
                        if ((t.x - n.x > n.width || n.x - t.x > t.width) && (E[O].sprite.rotation = eases.easeInQuad(E[O].animationTimer, 0, 8, 100), R || (R = !0, $.interactive = !1, setTimeout((function() {
                                ze.blurPan(e, (function() {
                                    J()
                                }))
                            }), 500))), E[O].animationTimer > 24)
                            if (t.x - n.x > n.width || n.x - t.x > t.width);
                            else {
                                E[O].sprite.scale.x = 1, E[O].sprite.scale.y = 1, E[O].y = E[O].original.y + 50, E[O].container.y = E[O].y;
                                let e = 0;
                                Math.abs(n.x - t.x) < 30 && (e = a.score.nice), Math.abs(n.x - t.x) < 10 && (e = a.score.good);
                                let o = {
                                        x: t.x,
                                        y: t.y,
                                        width: 100,
                                        height: 50,
                                        vy: 0,
                                        vx: 0,
                                        vr: 0
                                    },
                                    r = 4;
                                if (t.width < 8 && (r = 2), Math.abs(n.x - t.x) < r ? (o = -1, e = a.score.perfect, t.x = n.x, Y.add(100), U++, W++, _ < W && (_ = W), U >= 3 && t.width <= 200 && (t.x -= 20, t.width += 40, t.setWidth(t.width, 20), t.container.x = t.x, U = 1)) : (U = 0, W = 0, Y.add(Math.max(10, 100 - Math.floor(Math.abs(n.x - t.x)))), n.x < t.x && (t.width -= t.x - n.x, t.setWidth(t.width, 0), t.x = n.x + n.width - t.width, o.width = t.x - n.x, o.x = t.x + t.width, o.vx = 2 + 2 * Math.random(), o.vr = 5 + 5 * Math.random()), n.x > t.x && (o.width = -(t.x - n.x), t.width -= n.x - t.x, t.setWidth(t.width, t.x - n.x), t.x = n.x, o.x = t.x - o.width, o.vx = 2 * -Math.random() - 2, o.vr = -5 - 5 * Math.random()), o.vy = 2 * -Math.random() - 2), i.hunger += t.width / 1200, t.container.x = t.x, K.text = a.ui.altitude + ": " + D, 500 == D && (ze.achievementQueue("750altitudeCAKEWALK"), G._td_costume6.owned = !0), 1e3 == D && ze.achievementQueue("1000altitudeCAKEWALK"), 5000 == D && ze.achievementQueue("5000altitudeCAKEWALK"), 10000 == D && ze.achievementQueue("10000altitudeCAKEWALK"), (D >= 15000 && _ >= 250) && (ze.achievementQueue("masterofcakewalk"), G.gingerdrop.owned = !0), -1 != o) {
                                    let e = new PIXI.Container;
                                    e.x = o.x, e.y = o.y, g.addChild(e);
                                    let i = new PIXI.TilingSprite(he["Sprites/CakeSlicePlane"][1 + t.texture]);
                                    i.clampMargin = 1, i.width = o.width, i.height = o.height, i.pivot.x = o.width / 2, i.pivot.y = o.height / 2, i.x = i.pivot.x, i.y = i.pivot.y, e.addChild(i);
                                    let n = new PIXI.NineSlicePlane(he["Sprites/CakeSlicePlane"][0 + t.texture]);
                                    i.addChild(n), n.width = o.width, n.height = 50, o.sprite = i, o.container = e, o.id = O, z[O] = o, o.destroy = function() {
                                        delete z[o.id], n.destroy(), i.destroy(), e.destroy()
                                    }
                                }
                                B(), V.text = e, 0 != e && (V.animationTimer = 0, V.rotateTo = N ? 1 : -1)
                            }
                    }
                    V.alpha = eases.easeInQuad(Math.min(100, V.animationTimer), 1, -1, 50), V.scale.x = eases.easeOutQuad(Math.min(100, V.animationTimer), 1, .5, 30), V.scale.y = eases.easeOutQuad(Math.min(110, V.animationTimer), 1, .5, 30), V.rotation = eases.easeInQuad(Math.min(110, V.animationTimer), 0, .1 * V.rotateTo, 40), V.animationTimer += Qe;
                    for (let e in E) {
                        let t = E[e];
                        E[e].sprite.scale.x = eases.easeOutElastic(Math.min(90, E[e].scaleTimer), .1, .9, 90), E[e].sprite.scale.y = eases.easeOutElastic(Math.min(80, E[e].scaleTimer), .1, .9, 80), E[e].scaleTimer += Qe, t.container.transform.worldTransform.ty > c.screen.height && t.destroy()
                    }
                    for (let e in z) {
                        let t = z[e];
                        t.x += t.vx, t.y += t.vy, t.sprite.rotation += t.vr / 100, t.vy += .4, t.vx = p.linear(t.vx, 0, .02, Qe), t.container.x = t.x, t.container.y = t.y, t.container.transform.worldTransform.ty > c.screen.height + 100 && t.destroy()
                    }
                    l.y = -l.height + c.screen.height, l.y += g.y, d.alpha = (g.y - 8e3) / 1e3, l.y > 0 && (l.y = 0), l.y < -l.height + c.screen.height && (l.y = -l.height + c.screen.height), g.x = c.screen.width / 2 - 180, g.y = p.linear(g.y, c.screen.height / 2 - E[O].original.y - 100, .05, Qe);
                    for (let e in u) u[e].y = u[e].orig.y + g.y * u[e].scale.y / 2, u[e].y > c.screen.height && (u[e].destroy(), delete u[e]);
                    H.offset = p.linear(H._offset, i.hunger / 100, .04, Qe)
                },
                V = o("Bruh", 32, "center");
            e.addChild(V), V.x = c.screen.width / 2, V.y = c.screen.height / 2 + 200;
            let H = new b(he["Sprites/GameUI"][4], he["Sprites/GameUI"][3], i.hunger / 100);
            H.buttonContainer.x = 60, H.buttonContainer.y = c.screen.height - 60, H.buttonContainer.scale.x = .8, H.buttonContainer.scale.y = .8, e.addChild(H.buttonContainer), v(H.buttonContainer, (function() {})), H.selected.visible = !1, c.ticker.add(j);
            let Q = 0,
                Y = o(Q, 32);
            Y.add = function(e) {
                Q += e, r ? (Y.text = "Set seed", Y.alpha = .2) : Y.text = "Score: " + Q
            }, Y.add(0), Y.anchor.set(0, 0), Y.x = 20, Y.y = 20, e.addChild(Y);
            let K = o(a.ui.altitude + ": 1", 32);
            K.anchor.set(0, 0), K.x = 20, K.y = 55, e.addChild(K), f.push(K), f.push(Y), f.push(L), f.push(A), g.sortableChildren = !0;
            let J = function() {
                V.destroy(), H.destroy(), ue.Pamgaea.release = .5, n.minigameMusic && ue.Pamgaea.off("end", s), ue.Pamgaea.stop();
                for (let e in E) E[e].destroy();
                for (let e in z) z[e].destroy();
                for (let e in u) u[e].destroy(), delete u[e];
                for (let e = 0; e < f.length; e++) f[e].destroy();
                document.removeEventListener("keydown", S), document.removeEventListener("keyup", k), document.removeEventListener("pointerdown", P), document.removeEventListener("pointerup", T), c.ticker.remove(j), ze.gameList(e, "cakewalk"), $.destroyPause(), r || setTimeout((function() {
                    ze.results(e, Q, Math.floor(Q / 50)), _ >= 10 && ze.achievementQueue("get10perfectsCAKEWALK"), _ >= 25 && ze.achievementQueue("get25perfectsCAKEWALK"), (_ >= 250 && D <= 1000) && ze.achievementQueue("masterofconsistency")
                }), 100), window.onblur = function() {}
            };
            window.onblur = function() {
                q || Z()
            };
            let q = !1;

            function Z() {
                q = !q, $.changePause(q), q ? (n.inGame = !1, c.ticker.remove(j), n.minigameMusic && (ue.Pamgaea.release = .2, ue.Pamgaea.pause()), ze.message(e, a.ui.gamePaused, he["Sprites/GameUI"][32], (function() {
                    Z()
                }), (function() {
                    ze.blurPan(e, (function() {
                        J()
                    }))
                }), [a.ui.play, a.ui.home], !1)) : (n.minigameMusic && (ue.Pamgaea.play(), ue.Pamgaea.sourceNode.playbackRate.value = 1.15), n.inGame = !0, c.ticker.add(j))
            }
            let $ = ze.pauseButton((function() {
                Z()
            }), .4);
            e.addChild($), $.x = c.screen.width - 40, $.y = 40
        },
        dropdodge: function() {
            let e = new PIXI.Sprite(he["Sprites/RepeatingUI"][3]);
            e.interactive = !0, c.stage.addChild(e), e.width = c.screen.width, e.height = c.screen.height;
            let t = {
                    x: 0,
                    y: 0,
                    vx: 0,
                    vy: 0,
                    box: new PIXI.Graphics,
                    width: 30,
                    height: 50,
                    acceleration: 0
                },
                i = [];
            i.push(e), i.push(t.box);
            let n = new PIXI.Container;
            c.stage.addChild(n), i.push(n);
            let a = {},
                r = 3e3;
            t.x = 0, t.y = 0, t.zIndex = 1e4;
            let s = {},
                l = function(e) {
                    s[e.key] = !0
                },
                d = function(e) {
                    s[e.key] = !1
                },
                h = 0,
                u = 15;
            for (let e = 0; e < 1e4; e++);
            let m = ke(pe.GTTTATINT),
                y = !1,
                f = function() {
                    y = !0
                },
                x = function() {
                    y = !1
                };
            document.addEventListener("keydown", l), document.addEventListener("keyup", d), document.addEventListener("pointerdown", f), document.addEventListener("pointerup", x), m.onNextFrame = function(e) {
                s.w || s.a || s.s || s.d || (e.goto(0), e.b.gotoAndStop(20)), e.a_.gotoAndStop(Math.min(59, Math.max(0, Math.round(30 - 30 * t.acceleration)))), e.b.scale.x = t.acceleration < 0 ? -1 : 1, e.c.rotation += -1.5 + Math.abs(2 * t.acceleration), 0 == t.vy && e.a_.c.gotoAndStop(1), e.d.rotation = -e.c.rotation
            }, m.play(), m.loop = !0, m.scale.x = .4, m.scale.y = .4;
            let w = new PIXI.NineSlicePlane(he.inputNineSlice[5], 15, 15, 15, 15);
            w.width = 100, w.height = r, w.x = r, w.y = 0, n.addChild(w);
            let v = new PIXI.NineSlicePlane(he.inputNineSlice[5], 15, 15, 15, 15);
            v.width = 100, v.height = r, v.x = -100, v.y = 0, n.addChild(v);
            let I = new PIXI.NineSlicePlane(he.inputNineSlice[5], 15, 15, 15, 15);
            I.width = r, I.height = 100, I.x = 0, I.y = -100, n.addChild(I);
            let b = new PIXI.NineSlicePlane(he.inputNineSlice[5], 15, 15, 15, 15);
            b.width = r, b.height = 100, b.x = 0, b.y = r, n.addChild(b);
            let C = function() {
                    t.y;
                    for (let e in a) parseInt(e) < Math.floor((n.y - 640) / 1) && (M.add(Math.max(1, h)), a[e].sprite.destroy(), delete a[e]);
                    t.isOnGround = !1, m.x = t.x + t.width / 2, m.y = t.y + t.height;
                    let e = .4;
                    s.d && (t.vx += e), s.a && (t.vx -= e), s.w && (t.vy -= e), s.s && (t.vy += e), t.acceleration = p.linear(t.acceleration, t.vx / 5, .5, Qe), t.vx *= .9, t.vy *= .9, t.y += t.vy, t.x += t.vx;
                    let i = Math.abs(t.vx / 40 / 4),
                        o = Math.abs(t.vy / 40 / 4);
                    m.scale.x = .4 * (1 + i - o), m.scale.y = .4 * (1 + o - i), (t.x < 0 || t.x > r - t.width) && (t.vx /= -1, t.acceleration /= -1), (t.y < 0 || t.y > r - t.height) && (t.vy /= -1), t.x < 0 && (t.x = 0), t.y < 0 && (t.y = 0), t.x > r - t.width && (t.x = r - t.width), t.y > r - t.height && (t.y = r - t.height);
                    for (let e in a) {
                        let i = a[e];
                        if (g(t, i) && t.vy > 0 && t.y < i.y - t.height + 4 + t.vy) {
                            if (t.y = i.y - t.height, t.isOnGround = !0, t.vy = 0, t.max < i.id) {
                                let e = i.id - t.max;
                                M.add(10 * (e - 1)), u--, 0 == u && (h++, P.text = "mph: " + h, u = 10)
                            }
                            t.max = i.id;
                            let e = 7;
                            h >= 7 && (e *= 2), h >= 10 && (e *= 1.5), h >= 16 && (e *= 1.5), h >= 20 && (e *= 2), s[" "] && (t.vy -= e + Math.abs(1.5 * t.vx))
                        }
                    }
                    n.x = p.linear(n.x, c.screen.width / 2 - t.x, .2, Qe), n.y = p.linear(n.y, c.screen.height / 2 - t.y, .2, Qe), -n.y + c.screen.height < t.y && !S && (S = !0, ze.blurPan(c.stage, (function() {
                        T()
                    }))), n.y += h / 2
                },
                S = !1;
            c.ticker.add(C);
            let k = 0,
                M = o(k, 32);
            M.add = function(e) {
                k += e, M.text = k
            }, M.anchor.set(1, 0), M.x = c.screen.width - 20, M.y = 20, c.stage.addChild(M);
            let P = o("mph: 0", 32);
            P.anchor.set(0, 0), P.x = 20, P.y = 20, c.stage.addChild(P), i.push(P), i.push(M), i.push(b), i.push(w), n.addChild(m), i.push(m);
            let T = function() {
                for (let e in a) a[e].sprite.destroy();
                for (let e = 0; e < i.length; e++) i[e].destroy();
                document.removeEventListener("keydown", l), document.removeEventListener("keyup", d), document.removeEventListener("pointerdown", f), document.removeEventListener("pointerup", x), c.ticker.remove(C), ze.gameList(), ze.results(k, Math.floor(k / 50))
            }
        },
        results: function(e, i = 10, r = 50, s = -1, l = a.ui.score) {
            if ("number" == typeof e) return void ze.message(c.stage, "Forgotten source code rework for this results page!");
            let d = ze.blackTint(e, .2);
            d.start();
            let h = new PIXI.NineSlicePlane(he.inputNineSlice[2]);
            h.width = 200, h.height = 200, h.x = c.screen.width / 2, h.y = c.screen.height / 2, h.pivot.set(h.width / 2, h.height / 2), e.addChild(h);
            let u = new PIXI.BitmapText(-1 == s ? a.ui.gameOver : s, {
                fontName: "ShagBlack",
                fontSize: 24
            });
            u.anchor.set(.5, 0), u.x = h.width / 2, u.y = 30, h.addChild(u);
            let m = h.width / 2,
                y = o(l + ": " + i, 20, "center", void 0, 1);
            y.x = m, y.y = u.y + 70, -1 == s && h.addChild(y), [].push(y);
            let g = 0,
                x = new PIXI.Container,
                w = new PIXI.Sprite(he["Sprites/GameUI"][14]);
            x.addChild(w), w.x = 0, w.y = 0, w.scale.x = .75, w.scale.y = .75, w.anchor.set(.5, .5), g += w.texture.trim.width / 2 * w.scale.x;
            let v = o(r, 20, "left", "center", 1);
            v.anchor.set(0, .5), v.x = g + 10, v.y = -2, g += v.width, x.addChild(v), x.x = m - g / 2, x.y = u.y + 50, h.addChild(x);
            let I = {},
                b = 0,
                C = Math.min(1e4, r),
                S = !1,
                M = new k((function() {
                    S || (S = !0, r > 0 && n.sfx && (ue.collect.stop(), ue.collect.play()), function() {
                        for (let t = 0; t < C; t++) {
                            let t = new PIXI.Sprite(he["Sprites/GameUI"][14]);
                            t.scale.x = .4 + .5 * Math.random(), t.scale.y = t.scale.x, t.anchor.set(.5, .5), t.y = w.transform.worldTransform.ty, t.vr = Math.random() - .5, t.facing = Math.random() * Math.PI * 2;
                            let i = 1 + 8 * Math.random();
                            t.vx = i * Math.cos(t.facing), t.vy = i * Math.sin(t.facing), t.x = w.transform.worldTransform.tx, e.addChild(t), I[b++] = t
                        }
                        0 != C && (w.visible = !1), setTimeout((function() {
                            t.coins += r, H()
                        }), 500), A()
                    }())
                }), 20, h.height - 20, h.width - 40, 30, a.ui.continue, 0, 0, 1, 1, "center");
            h.addChild(M.element);
            let P = 0,
                T = Math.random() - .5,
                A = function() {
                    M.interactive = !1, L.x = h.x, L.y = h.y, L.rotation = h.rotation, L.scale = h.scale, h.closing = !0, P = 0
                },
                L = {
                    x: c.screen.width / 2,
                    y: c.screen.height / 2,
                    rotation: T,
                    scale: .5
                };
            h.onDestroyed = function() {}, h.destroyBook = function() {
                h.onDestroyed(), c.ticker.remove(D), M.destroy(), w.destroy(), v.destroy(), h.destroy({
                    children: !0
                })
            };
            let E = function() {
                    for (let e in I) {
                        let t = I[e];
                        t.y += t.vy * Qe, t.x += t.vx * Qe;
                        let i = 50,
                            n = 50;
                        t.facing = Math.atan2(n - t.y, i - t.x);
                        let o = 8,
                            a = f(t.x, t.y, i, n);
                        a < 50 ? (t.vx = o * Math.cos(t.facing), t.vy = o * Math.sin(t.facing)) : (t.vx = p.linear(t.vx, o * Math.cos(t.facing), .02, Qe), t.vy = p.linear(t.vy, o * Math.sin(t.facing), .02, Qe)), t.rotation += t.vr / 10 * Qe, a < 5 * Qe && (t.destroy(), C--, delete I[e]), C <= 0 && c.ticker.remove(E)
                    }
                },
                D = function() {
                    if (h.closing) {
                        if (h.y = ease[16](Math.min(40, P), L.y, -L.y + c.screen.height + 500, 40), h.rotation = ease[1](Math.min(70, P), L.rotation, T, 70), P > 40) return d.end(), void h.destroyBook()
                    } else h.x = ease[17](Math.min(80, P), L.x, 0, 80), h.y = ease[8](Math.min(70, P), L.y, -20, 70), h.rotation = window.eases.easeOutElastic(Math.min(100, P), L.rotation, -T, 100), h.scale.x = window.eases.easeOutElastic(Math.min(90, P), L.scale, .5, 90);
                    h.scale.y = h.scale.x, P += Qe
                };
            return c.ticker.add(D), c.ticker.add(E), h
        },
        message: function(e, t, i = -1, n = function() {}, o = -1, a, r = !0, s = 1) {
            let l = !1;
            "string" == typeof e && (e = c.stage, t = "Forgotten source code rework for this page!", i = -1, n = function() {}, o = -1, l = !0);
            let d = ze.blackTint(e, .2, r);
            d.start();
            let h = new PIXI.NineSlicePlane(he.inputNineSlice[2]);
            l && (h.zIndex = 20), h.width = Math.max(320, c.screen.width / 2), h.x = c.screen.width / 2, h.y = c.screen.height / 2, e.addChild(h);
            let p = 0; - 1 == i && (p += -70);
            let u, m = new PIXI.BitmapText(t, {
                fontName: "ShagBlack",
                fontSize: 24,
                breakWords: !0,
                wordWrap: !0,
                wordWrapWidth: 200,
                maxWidth: h.width - 90 - 30 - p,
                whiteSpace: "normal"
            });
            h.height = m.height + 90, m.anchor.set(0, .5), m.x = 110 + p, m.y = h.height / 2 - 10, h.addChild(m), -1 != i && (u = new PIXI.Sprite(i), h.addChild(u), u.anchor.set(.5, .5), u.y = h.height / 2 - 10, u.x = 60, u.scale.x = .8 * s, u.scale.y = .8 * s);
            let y = 0; - 1 != o && (h.height += 40), h.pivot.set(h.width / 2, h.height / 2);
            let f, g, x, w = Math.random() - .5,
                v = function() {
                    h.closing || (b.x = h.x, b.y = h.y, b.rotation = h.rotation, b.scale = h.scale, h.closing = !0, y = 0)
                }; - 1 == o ? (f = ze.exitButton(v, h.width - 20, 20, .3, .1), f.sprite.alpha = 0, h.addChild(f.sprite), f.interactive = !1, f.show = !1, setTimeout((function() {
                f.show = !0, f.sprite.interactive = !0
            }), 500)) : (g = new k((function() {
                I = 0, v()
            }), 15, h.height - 15, h.width / 2 - 20, 30, a[0], 0, 0, 1, 1, "center"), h.addChild(g.element), x = new k((function() {
                n = o, v()
            }), h.width - 15, h.height - 15, h.width / 2 - 20, 30, a[1], 0, 1, 1, 1, "center"), h.addChild(x.element));
            let I = 0,
                b = {
                    x: c.screen.width / 2,
                    y: c.screen.height / 2,
                    rotation: w,
                    scale: .5
                };
            h.onDestroyed = function() {}, h.destroyBook = function() {
                h.onDestroyed(), c.ticker.remove(C), -1 == o ? f.destroy() : (g.destroy(), x.destroy()), m.destroy(), -1 != i && u.destroy(), h.destroy({
                    children: !0
                }), n()
            };
            let C = function() {
                if (-1 == o && (f.show && (f.sprite.alpha += .05), f.sprite.alpha >= 1 && (f.sprite.alpha = 1, f.show = !1)), h.closing) {
                    if (h.y = ease[16](Math.min(40, y), b.y, -b.y + c.screen.height + 500, 40), h.rotation = ease[1](Math.min(70, y), b.rotation, w, 70), y > 40) return d.end(), void h.destroyBook()
                } else h.x = ease[17](Math.min(80, y), b.x, 0, 80), h.y = ease[8](Math.min(70, y), b.y, -20, 70), h.rotation = window.eases.easeOutElastic(Math.min(100, y), b.rotation, -w, 100), h.scale.x = window.eases.easeOutElastic(Math.min(90, y), b.scale, .5, 90);
                h.scale.y = h.scale.x, y += Qe
            };
            return c.ticker.add(C), h.exit = v, h
        },
        wardrobe: function(e = new PIXI.Container, r = function() {}) {
            ze.initializeScreenResolution(e);
            let l = new PIXI.Sprite(he["Sprites/Rooms"][26]);
            e.addChild(l), l.interactive = !0, l.x = c.screen.width / 2, l.y = c.screen.height / 2, l.anchor.set(.5, .5), l.scale.x = 1, l.scale.y = 1;
            let d = new PIXI.Container;
            e.addChild(d);
            let u = ze.coinCounter(e);
            d.addChild(u);
            let m = t.coins;
            u.x = 20, u.y = 20;
            let f = {},
                g = 0,
                x = 0,
                w = 0,
                v = [],
                I = o("", 32, "center");
            I.x = c.screen.width / 2, I.y = c.screen.height - 150;
            let b = n.costume,
                C = new PIXI.Container,
                S = [],
                P = 0;

            function T(r) {
                null != S[r] && S[r].destroyPage();
                let l = function(r) {
                    let l = [],
                        d = new PIXI.Container,
                        h = {},
                        v = new PIXI.Container,
                        C = new PIXI.Graphics;
                    v.mask = C, d.addChild(C), d.addChild(v), v.x = 40, v.y = 130;
                    let S = c.screen.width - 80,
                        M = c.screen.height - 300 - 50;
                    C.beginFill(0), C.drawRect(v.x, v.y, S, M), C.endFill(), v.interactive = !0, v.on("pointerdown", (function(e) {
                        let t = e.clientY / s;
                        v.dragOffset = {
                            y: t - v.y
                        }, v.prevY = v.y, v.vy = 0, v.scrolling = !0
                    }));
                    let T = function(e) {
                            if (!v.scrolling) return;
                            v.wheel = !1;
                            let t = e.clientY / s;
                            v.prevY = v.y, v.y = t - v.dragOffset.y
                        },
                        A = function(e) {
                            v.wheel = !0, v.vy = p.linear(v.vy, -e.deltaY / 2 * Qe, .25), v.vy > 40 * Qe && (v.vy = 40 * Qe), v.vy < -40 * Qe && (v.vy = -40 * Qe)
                        };
                    document.addEventListener("wheel", A);
                    let E = function() {
                        v.scrolling = !1
                    };
                    document.addEventListener("pointermove", T), document.addEventListener("pointerup", E), v.vy = 0;
                    let X = function() {
                        let e = 120 - R - 50 + M;
                        v.vy = p.linear(v.vy, 0, v.wheel ? .1 : .05, Qe), v.scrolling ? v.vy = v.y - v.prevY : v.y += v.vy, N.targetAlpha = 1, v.y >= 130 && (v.y = 130, v.vy = 0), v.y <= e && (N.targetAlpha = 0, v.y = e, v.vy = 0), N.alpha = p.linear(N.alpha, N.targetAlpha, .1, Qe)
                    };
                    c.ticker.add(X);
                    let N = new PIXI.Sprite(he["Sprites/Rooms"][27]);
                    d.addChild(N), N.x = v.x, N.y = v.y + M - 90, N.width = S, N.height = 100;
                    let F = B[r].items,
                        R = 0;
                    for (let s = 0; s < F.length; s++) {
                        let d = F[s],
                            c = G[d],
                            p = !1;
                        if (null != c.drawnBy && (p = !0), c.hidden) continue;
                        if (c.secret && !c.owned) continue;
                        let C = !1;
                        if (null != c.checkAvailability && c.checkAvailability() && (c.owned = !0), null != He.costumes[d] && (He.costumes[d].expiry > Date.now() && 0 == c.owned && (C = !0, c.discount = He.costumes[d]), He.costumes[d].expiry > Date.now() && c.limited && (C = !0, c.discount = He.costumes[d])), c.limited && !C && !c.owned) continue;
                        let M = !1,
                            T = !1;
                        c.owned || -1 != c.cost || (M = !0), c.limited && (T = !0);
                        let A = M ? 11 : 3;
                        T && (A = 2);
                        let E = new k((function() {
                                I.text = ""
                            }), 0, 0 + R, S, 120 + (c.limited && !c.owned ? 30 : 0), "", 0, 0, 0, A),
                            X = 0,
                            N = -1;
                        c.limited && !c.owned && (N = new k((function() {}), S / 2, 10, S - 20, 20, "LIMITED! - ", 0, .5, 0, 1, "center"), l.push(N), E.element.addChild(N.element), N.element.interactive = !1, X = 30), h[d] = E, E.element.interactive = !1, v.addChild(E.element);
                        let U = new PIXI.Rectangle(0, 0, 0, 0),
                            _ = -1;
                        if (-1 != c.sprite && (_ = new PIXI.Sprite(he["Sprites/Poses"][c.sprite]), _.scale.x = .5, _.scale.y = .5, _.hitArea = U, E.element.addChild(_), _.anchor.set(.5, .5), _.x = 50, _.y = 60 + X, p && (_.scale.x = .34, _.scale.y = .34, _.y -= 14), M)) {
                            let e = new PIXI.ColorMatrixFilter;
                            e.matrix = [.5, 0, 0, 0, 0, 0, .5, 0, 0, 0, 0, 0, .5, 0, 0, 0, 0, 0, 1, 0], e.blackAndWhite(1), _.filters = [e]
                        }
                        let W, j, V = o(c.name, 24, "left", "middle", T ? 1 : 0);
                        if (M && (V.text = "???"), V.x = 100, B[r].votes) {
                            let e = o(s + 1 + ".", 24, "center", "middle", 3);
                            E.element.addChild(e), e.y = 20 + X, e.x = 100, V.x += e.width + 10
                        }
                        if (V.width > E.element.width - V.x - 30 && (V.width = E.element.width - V.x - 30, V.scale.y = V.scale.x), V.y = 20 + X, E.element.addChild(V), null != c.artist) {
                            let e = o(a.ui.artist + ": " + c.artist.name, 12, "left", "middle", T ? 1 : 0);
                            e.x = 100, e.y = 50 + X, E.element.addChild(e)
                        }
                        if (V.width > S - 50 && (V.width = S - 50), V.scale.y = V.scale.x, c.owned || M ? (W = o(a.ui.owned, 16, void 0, void 0, T ? 1 : 0), M && (W.text = ""), W.x = 100, W.scale.y = W.scale.x, W.y = 50 + (16 * -W.scale.y + 16) / 2 + (null == c.artist ? 0 : 15) + X, E.element.addChild(W)) : (W = o(c.cost, 16, void 0, void 0, T ? 1 : 0), W.x = 130, W.width > 60 && (W.width = 60), W.scale.y = W.scale.x, W.y = 50 + (16 * -W.scale.y + 16) / 2 + (null == c.artist ? 0 : 15) + X, E.element.addChild(W), l.push(W), j = new PIXI.Sprite(he["Sprites/GameUI"][14]), E.element.addChild(j), j.x = 110, j.y = 60 + (null == c.artist ? 0 : 15) + X, j.scale.x = .75, j.scale.y = .75, j.anchor.set(.5, .5), j.hitArea = U, l.push(j), -1 == c.sprite && (j.x -= 80), 0 == c.cost && (W.text = "FREE", W.x = 100, j.visible = !1)), C) {
                            let e, t, i;
                            1 != c.discount.price && (e = new PIXI.NineSlicePlane(he.inputNineSlice[18], 15, 15, 15, 15), e.x = W.x - 3, e.y = W.y + 7, e.width = W.width + 6, e.height = W.height - 11, E.element.addChild(e), l.push(e), t = o(c.cost * c.discount.price, 16, void 0, void 0, T ? 1 : 0), t.x = 130, t.width > 60 && (t.width = 60), t.scale.y = t.scale.x, t.y = W.y + 20, E.element.addChild(t), l.push(t), i = o(Oe(c.discount.expiry - Date.now()), 16, void 0, void 0, T ? 1 : 0), i.y = 100, i.x = 20, p && (i.anchor.set(.5, .5), i.x = _.x, i.y = 10, i.scale.x = .8, i.scale.y = .8), E.element.addChild(i));
                            let n = setInterval((function() {
                                    C && (1 != c.discount.price && (i.text = Oe(c.discount.expiry - Date.now())), c.limited && !c.owned && (N.inputText.text = "LIMITED! " + Oe(c.discount.expiry - Date.now())), Date.now() > c.discount.expiry && (C = !1, W.destroyDiscount(), c.limited && !c.owned && (N.inputText.text = "The time period to buy costume is over!")))
                                }), 1e3),
                                a = !1;
                            1 == c.discount.price && (a = !0), W.destroyDiscount = function() {
                                a || (a = !0, t.destroy(), i.destroy(), e.destroy())
                            }, Ne.push(n)
                        }
                        if (-1 == c.sprite && (W.x -= 80, V.x -= 80), !c.owned) {
                            let o = new k((function() {
                                if (P != r) return void ze.message(e, "You need to be in the same page as the category you're buying from!");
                                if (c.requiredLevel > n.level) return void ze.message(e, "You need atleast level " + c.requiredLevel + " to buy this item!", he["Sprites/GameUI"][35]);
                                if (c.limited && !C) return void ze.message(e, "The time period to buy the costume is over!");
                                if (-1 == c.cost) {
                                    if ("object" == typeof c.achievement) {
                                        let t = y[c.achievement[0]].name;
                                        for (let e = 1; e < c.achievement.length; e++) t += (e == c.achievement.length - 1 ? '" and "' : '", "') + y[c.achievement[e]].name;
                                        ze.message(e, a.message.obtainCostume(t), he["Sprites/GameUI"][y[c.achievement[0]].icon])
                                    } else ze.message(e, a.message.obtainCostume(y[c.achievement].name), he["Sprites/GameUI"][y[c.achievement].icon]);
                                    return
                                }
                                let s = c.cost;
                                if (C && (s = c.cost * c.discount.price), s > m) return x < .01 && (w = 0), x = 2, I.text = "Not enough coins!", I.alpha = 2, void(n.sfx && (ue.fail.stop(), ue.fail.play()));
                                C && (W.destroyDiscount(), c.limited && (N.inputText.text = "OWNED"));
                                let l = Math.floor(Math.max(600, s) / 6);
                                i.happiness += 40 - s / 100, i.progress += 50;
                                let d = Math.floor(s / 10),
                                    h = d / l;
                                setTimeout((function() {
                                    if (n.sfx) {
                                        if (0 == s) return;
                                        s > 500 ? ue.coinlarge.play() : s > 100 ? ue.coinmedium.play() : ue.coinsmall.play()
                                    }
                                }), 750);
                                let p = setInterval((function() {
                                    if (h <= 0 || z) clearInterval(p);
                                    else {
                                        h--;
                                        for (let t = 0; t < (h <= 0 ? d % l : l); t++) {
                                            let t = new PIXI.Sprite(he["Sprites/GameUI"][14]);
                                            t.scale.x = .4 + .5 * Math.random(), t.scale.y = t.scale.x, t.anchor.set(.5, .5), t.y = u.y + 20, t.vr = Math.random() - .5, t.vy = 20 * (Math.random() - .6), t.vx = 20 * (Math.random() - .1), t.x = u.x + 20, e.addChild(t), f[g++] = t
                                        }
                                    }
                                }), 1e3 / 24);
                                c.owned = !0, n.sfx && (ue.purchase.stop(), ue.purchase.play()), o.destroy(), Q.element.y += 30, Q.inputText.text = a.ui.wear, m -= s, t.coins = m, j.destroy(), W.text = a.ui.owned, c.owned = !0, 0 != c.cost && (W.x -= 30), H()
                            }), S - 10, 110 + X, 80, 20, M ? a.ui.info : a.ui.get, 0, 1, 1, T ? 1 : 4, "center");
                            E.element.addChild(o.element)
                        }
                        let H = function() {
                                if (b != d && ("Look" == O.currentPart ? O.onAnimationEnd = function() {
                                        O.gotoPart("Look2"), O.onAnimationEnd = function() {
                                            O.currentPart = -1
                                        }
                                    } : (O.gotoPart("Look2"), O.onAnimationEnd = function() {
                                        O.currentPart = -1
                                    }), L = 0, b = d, null != O.destroyCostume && (O.destroyCostume(), O.destroyCostume = void 0), c.apply(O), D = 1, c.owned)) {
                                    for (let e in h) h[e].wear.inputText.text == a.ui.wearing && (h[e].wear.inputText.text = a.ui.wear);
                                    n.costume = d, Q.inputText.text = a.ui.wearing
                                }
                            },
                            Q = new k(H, S - 10, 110 - (c.owned ? 0 : 30) + X, 80, 20, c.owned ? n.costume == d ? a.ui.wearing : a.ui.wear : a.ui.preview, 0, 1, 1, T ? 1 : 4, "center");
                        if (E.wear = Q, M || E.element.addChild(Q.element), l.push(V), l.push(E), p) {
                            let e = new PIXI.Sprite(he.designerCredits[c.drawnBy.icon]);
                            E.element.addChild(e), e.anchor.set(.5, 1), e.x = _.x, e.y = E.element.height - 10, e.width = 80, e.scale.y = e.scale.x, l.push(e)
                        }
                        if (c.requiredLevel > n.level) {
                            let e = new PIXI.NineSlicePlane(he.inputNineSlice[14]);
                            e.tint = 0, e.width = E.element.width, e.height = E.element.height, E.element.addChild(e), e.alpha = .8, e.interactive = !0;
                            let t = new PIXI.Sprite(he["Sprites/GameUI"][41]);
                            t.x = E.element.height / 2, t.y = E.element.height / 2, t.anchor.set(.5, .5), t.scale.x = .75, t.scale.y = .75, E.element.addChild(t), t.hitArea = U;
                            let i = o("LEVEL " + c.requiredLevel, 24, "left", "middle");
                            i.x = E.element.height / 2 + 40, i.y = E.element.height / 2 - 2, i.width > E.element.width - i.x - 20 && (i.width = E.element.width - i.x - 20, i.scale.y = i.scale.x), E.element.addChild(i)
                        }
                        R += E.element.height + 4
                    }
                    let U = o(a.ui.comingsoon, 24, "center");
                    v.addChild(U), U.x = S / 2, U.y = R + 20, l.push(N), l.push(v), l.push(C);
                    let z = !1;
                    return d.destroyPage = function() {
                        if (!z) {
                            z = !0;
                            for (let e = 0; e < l.length; e++) l[e].destroyed || l[e].destroy(), null != l[e].destroyDiscount && l[e].destroyDiscount();
                            c.ticker.remove(X), document.removeEventListener("pointermove", T), document.removeEventListener("wheel", A), document.removeEventListener("pointerup", E), d.destroy()
                        }
                    }, d
                }(r);
                l.x = r * K, S[r] = l, C.addChild(l)
            }
            e.addChild(C);
            let A = ze.exitButton((function() {
                r(), H(), ze.flash(e, !1, R)
            }), c.screen.width - 40, 40, .4, 0);
            e.addChild(A.sprite);
            let L = 50;
            d.origX = 0, d.time = 50;
            let E = !1,
                D = 0,
                X = function() {
                    for (let e in f) {
                        let t = f[e];
                        t.y += t.vy * Qe, t.x += t.vx * Qe, t.vy += .5 * Qe, t.vx = p.linear(t.vx, 0, .05, Qe), t.rotation += t.vr / 10 * Qe, t.y > c.screen.height + 200 && (t.destroy(), delete f[e])
                    }
                    F.matrix = [1 - D, 0, 0, 0, D, 0, 1 - D, 0, 0, D, 0, 0, 1 - D, 0, D, 0, 0, 0, 1, 0], F.resolution = s, D = p.linear(D, 0, .05, Qe), L < 180 && L++, O.scale.x = window.eases.easeOutElastic(L, .9, -.15, 180), O.scale.y = window.eases.easeOutElastic(L, .7, .05, 180), E || (u.updateCounter(p.linear(u.getCounterAmount(), m, .1, Qe)), d.x = 0, x > .01 && (d.x += Math.cos(w) * x * 5, w += .5 * Qe, x = p.linear(x, 0, .1, Qe)), I.alpha > 0 && (I.alpha -= .04))
                };
            c.ticker.add(X);
            let O = ke(pe.Teardrop, h.Teardrop),
                N = new PIXI.Rectangle(-60, -160, 120, 180);
            O.hitArea = N, O.interactive = !0, O.on("pointerup", (function() {
                n.totalSlaps++, 2763 == n.totalSlaps && (ze.achievementQueue("slapTD2763"), H());
                let e = 1 + Math.floor(4 * Math.random());
                ue.wave.stop(), n.sfx && (ue["slap" + e].attack = 0, ue["slap" + e].stop(), ue["slap" + e].play()), O.gotoPart("Slap"), O.currentPart = -1
            })), O.onAnimationEnd = function() {
                O.currentPart = -1
            }, i.sleep < 20 && (O.visible = !1), G[n.costume].apply(O), e.addChild(O), O.x = c.screen.width / 2, O.y = c.screen.height / 2 + 250, O.scale.x = .8, O.scale.y = .8, O.play(60), O.gotoPart("Look");
            let F = new PIXI.ColorMatrixFilter;

            function R() {
                for (let e = 0; e < Ne.length; e++) clearInterval(Ne[e]);
                for (let e in f) null != f[e].destroy && f[e].destroy(), delete f[e];
                I.destroy(), A.destroy(), l.destroy();
                for (let e = 0; e < v.length; e++) v[e].destroyed || v[e].destroy();
                u.destroyCounter(), null != O.destroyCostume && (O.destroyCostume(), O.destroyCostume = void 0), O.destroyAnimation(), c.ticker.remove(X), c.ticker.remove(Q);
                for (let e = 0; e < S.length; e++) S[e].destroyPage();
                U.destroy(), W.destroy(), j.destroy(), E = !0
            }
            F.matrix = [0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0], O.filters = [F], e.addChild(I);
            let U = o("CATEGORY", 24, "center");
            U.x = c.screen.width / 2, U.y = 100, e.addChild(U);
            let z = !1;

            function _() {
                if (U.text = B[P].name, W.sprite.visible = !0, j.sprite.visible = !0, 0 == P && (W.sprite.visible = !1), P == B.length - 1 && (j.sprite.visible = !1), V = 0, B[P].amaze)
                    if (-1 == O.currentPart) {
                        if (z) return;
                        O.gotoPart("Look3"), z = !0
                    } else O.onAnimationEnd = function() {
                        z || (O.gotoPart("Look3"), z = !0)
                    }
            }
            let W = new M((function() {
                Z(1), P--, _(), T(P)
            }), he["Sprites/GameUI"][51], {
                x: U.x - 120,
                y: U.y + 2,
                scale: {
                    x: .5,
                    y: .5
                }
            });
            e.addChild(W.sprite);
            let j = new M((function() {
                Z(-1), P++, _(), T(P)
            }), he["Sprites/GameUI"][52], {
                x: U.x + 120,
                y: U.y + 2,
                scale: {
                    x: .5,
                    y: .5
                }
            });
            e.addChild(j.sprite);
            let V = 0;
            _(), V = 30;
            let Q = function() {
                    let e = Y;
                    for (let t in J) {
                        let i = eases.easeOutCubic(Math.min(50, J[t].time), 0, 1, 50),
                            n = eases.easeInOutQuad(Math.min(50, 50 * i), 0, J[t].direction, 50) * K;
                        e += n, J[t].time += Qe, J[t].time > 50 && (Y += n, delete J[t])
                    }
                    U.y = eases.easeOutBack(Math.min(25, V), 95, 5, 25), V += Qe, C.x = e
                },
                Y = 0,
                K = c.screen.width,
                J = {},
                q = 0;

            function Z(e) {
                J[q] = {
                    direction: e,
                    time: 0
                }, q++
            }
            return T(0), c.ticker.add(Q), e
        },
        achievements: function(e = new PIXI.Container, t = function() {}) {
            ze.initializeScreenResolution(e);
            let i = new PIXI.Sprite(he["Sprites/Rooms"][18]);
            e.addChild(i), i.interactive = !0, i.x = c.screen.width / 2, i.y = c.screen.height / 2, i.anchor.set(.5, .5), i.scale.x = 1, i.scale.y = 1;
            let r = new PIXI.Container;
            e.addChild(r);
            let l = {},
                d = 0,
                h = 0,
                u = [],
                m = 0;
            for (let e in y) y[e].done && m++;
            let f = new PIXI.BitmapText(a.ui.achievements + ": " + m + "/" + (Object.keys(y).length - 7), {
                fontSize: 32,
                fontName: "arial"
            });
            f.x = 40, f.y = 20, f.width > c.screen.width - 130 && (f.width = c.screen.width - 130, f.scale.y = f.scale.x), e.addChild(f);
            let g = o("", 32, "center");
            g.x = c.screen.width / 2, g.y = c.screen.height - 150, n.costume;
            let x = new PIXI.Container,
                w = new PIXI.Graphics;
            x.mask = w, e.addChild(x), x.x = 40, x.y = 80;
            let v = c.screen.width - 80,
                I = c.screen.height - 80;
            w.beginFill(0), w.drawRect(x.x, x.y, v, I), w.endFill(), x.interactive = !0, x.on("pointerdown", (function(e) {
                let t = e.clientY / s;
                x.dragOffset = {
                    y: t - x.y
                }, x.prevY = x.y, x.vy = 0, x.scrolling = !0
            }));
            let b = function(e) {
                    if (!x.scrolling) return;
                    x.wheel = !1;
                    let t = e.clientY / s;
                    x.prevY = x.y, x.y = t - x.dragOffset.y
                },
                C = function(e) {
                    x.wheel = !0, x.vy = p.linear(x.vy, -e.deltaY / 2 * Qe, .25), x.vy > 40 * Qe && (x.vy = 40 * Qe), x.vy < -40 * Qe && (x.vy = -40 * Qe)
                };
            document.addEventListener("wheel", C);
            let S = function() {
                x.scrolling = !1
            };
            document.addEventListener("pointermove", b), document.addEventListener("pointerup", S), x.vy = 0;
            let k = function() {
                let e = 80 - P - 50 + I;
                x.vy = p.linear(x.vy, 0, x.wheel ? .1 : .05, Qe), x.scrolling ? x.vy = x.y - x.prevY : x.y += x.vy, M.targetAlpha = 1, x.y >= 80 && (x.y = 80, x.vy = 0), x.y <= e && (M.targetAlpha = 0, x.y = e, x.vy = 0), M.alpha = p.linear(M.alpha, M.targetAlpha, .1, Qe)
            };
            c.ticker.add(k);
            let M = new PIXI.Sprite(he["Sprites/Rooms"][11]);
            M.x = x.x, M.y = x.y + I - 90, M.width = v, M.height = 100;
            let P = 0;
            for (let e in y) {
                let t = y[e];
                if (t.secret && !t.done) continue;
                let i = new PIXI.NineSlicePlane(he.inputNineSlice[2]);
                i.width = v, i.x = 0, i.y = P, x.addChild(i);
                let n = new PIXI.BitmapText(t.title, {
                    fontName: "ShagBlack",
                    fontSize: 24
                });
                i.height = n.height + 50, n.anchor.set(0, .5), n.x = 80, n.y = 20, i.addChild(n);
                let a = new PIXI.BitmapText(t.description, {
                    fontName: "ShagBlack",
                    fontSize: 16,
                    breakWords: !0,
                    wordWrap: !0,
                    wordWrapWidth: 200,
                    maxWidth: i.width - 140,
                    whiteSpace: "normal"
                });
                a.anchor.set(0, 0), i.height += a.height, a.anchor.set(0, .5), a.x = 80, a.y = 35 + a.height / 2, i.addChild(a), null == t.icon && (t.icon = 11);
                let r = he["Sprites/GameUI"][t.icon],
                    s = new PIXI.Sprite(r);
                i.addChild(s), s.anchor.set(.5, .5), s.y = i.height / 2 - 5, s.x = 40, s.scale.x = .5, s.scale.y = .5, u.push(i);
                let l = t.done ? 26 : 25,
                    d = new PIXI.Sprite(he["Sprites/GameUI"][l]);
                if (d.anchor.set(.5, .5), i.addChild(d), d.x = v - 40, d.y = i.height / 2 - 5, null != t.getProgress) {
                    let e = o(t.getProgress(), 12, "center", void 0, 1);
                    e.x = v - 40, e.y = d.y + 25, i.addChild(e)
                }
                P += i.height + 4
            }
            u.push(f);
            let T = ze.exitButton((function() {
                t(), ze.flash(e, !1, E)
            }), c.screen.width - 40, 40, .4, 0);
            e.addChild(T.sprite), r.origX = 0, r.time = 50;
            let A = !1,
                L = function() {
                    A || (r.x = 0, d > .01 && (r.x += Math.cos(h) * d * 5, h += .5 * Qe, d = p.linear(d, 0, .1, Qe)), g.alpha > 0 && (g.alpha -= .04))
                };

            function E() {
                c.ticker.remove(k), document.removeEventListener("pointermove", b), document.removeEventListener("pointerup", S), document.removeEventListener("wheel", C);
                for (let e in l) null != l[e].destroy && l[e].destroy(), delete l[e];
                g.destroy(), T.destroy(), i.destroy();
                for (let e = 0; e < u.length; e++) u[e].destroyed || u[e].destroy();
                c.ticker.remove(L), A = !0
            }
            return c.ticker.add(L), e.addChild(g), u.push(M), u.push(x), u.push(w), e
        },
        settings: Xe,
        cargame: function() {
            let e = new PIXI.TilingSprite(he["Sprites/RepeatingUI"][0]);
            c.stage.addChild(e), e.interactive = !0, e.x = 0, e.y = 0, e.width = c.screen.width, e.height = c.screen.height, e.clampMargin = 1;
            let t = 0,
                i = !1;
            window.onblur = function() {
                i || f()
            };
            let o = new PIXI.Container;
            c.stage.addChild(o), o.pivot.x = -c.screen.width / 2, o.pivot.y = -c.screen.height / 2;
            let a = Matter.Engine.create(),
                r = {},
                s = !1;
            document.addEventListener("keydown", (function(e) {
                let t = e.key.toLowerCase();
                "ArrowLeft" == e.key && (t = "a"), "ArrowRight" == e.key && (t = "d"), "ArrowUp" == e.key && (t = " "), "w" == e.key && (t = " "), r[t] = !0, ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", " "].includes(e.key) && e.preventDefault()
            })), document.addEventListener("keyup", (function(e) {
                let t = e.key.toLowerCase();
                "ArrowLeft" == e.key && (t = "a"), "ArrowRight" == e.key && (t = "d"), "ArrowUp" == e.key && (t = " "), "w" == e.key && (t = " "), r[t] = !1
            })), document.addEventListener("pointerdown", (function() {
                s = !0
            })), document.addEventListener("pointerup", (function() {
                s = !1
            }));
            let l = [],
                d = [],
                h = {
                    box: Matter.Bodies.rectangle(0, -400, 100, 100),
                    sprite: function() {
                        let e = new PIXI.NineSlicePlane(he.inputNineSlice[5], 15, 15, 15, 15);
                        return e.width = 100, e.height = 100, o.addChild(e), e.pivot.x = 50, e.pivot.y = 50, e
                    }()
                };
            l.push(h), d.push(h.box);
            for (let e = 0; e < 500; e++) {
                let t = {},
                    i = .1 + Math.random() / 2,
                    n = Matter.Bodies.polygon(400 * (Math.random() - .5), -300 - 100 * e, 16, 48 * i);
                t.box = n;
                let a = new PIXI.Sprite(he["Sprites/GameUI"][Math.round(6 * Math.random())]);
                a.scale.x = i, a.scale.y = i, a.anchor.set(.5, .5), o.addChild(a), t.sprite = a, l.push(t), d.push(n), t.sprite.tint = 16777215 * Math.random()
            }
            let u = Matter.Bodies.rectangle(0, 200, 16e3, 120, {
                isStatic: !0
            });
            Matter.Composite.add(a.world, [u, ...d]);
            let m = ke(pe.faceMinigame);
            o.addChild(m);
            let y = function(t) {
                for (let e = 0; e < l.length; e++) {
                    let t = l[e].sprite,
                        i = l[e].box;
                    t.rotation = i.angle, t.x = i.position.x, t.y = i.position.y
                }
                r.a && Matter.Body.setAngularVelocity(h.box, h.box.angularVelocity - .01 * Qe), r[" "] && null != Matter.Collision.collides(u, h.box) && Matter.Body.setVelocity(h.box, {
                    x: h.box.velocity.x,
                    y: h.box.velocity.y - 20
                }), r.d && Matter.Body.setAngularVelocity(h.box, h.box.angularVelocity + .01 * Qe), m.x = h.sprite.x, m.y = h.sprite.y, m.rotation = h.sprite.rotation, o.x = p.linear(o.x, -l[0].sprite.x, .05, Qe), e.tilePosition.x = o.x / 2, Matter.Engine.update(a, t * (1e3 / 60))
            };

            function f() {
                i = !i, g.changePause(i), i ? (t = -Date.now(), n.inGame = !1, c.ticker.remove(y), ze.message("Game paused", he["Sprites/GameUI"][32], (function() {
                    f()
                }), (function() {
                    ze.blurPan(c.stage, (function() {
                        ! function() {
                            g.destroyPause(), Matter.World.clear(a.world), Matter.Engine.clear(a);
                            for (let e = 0; e < l.length; e++) l[e].sprite.destroy();
                            m.destroyAnimation(), e.destroy()
                        }(), ze.gameList(), ze.results(0, 0, "what", "what")
                    }))
                }), ["Play", "Home"], !1)) : (n.inGame = !0, c.ticker.add(y))
            }
            m.gotoAndStop(Math.floor(100 * Math.random())), h.sprite.visible = !1, c.ticker.add(y);
            let g = ze.pauseButton((function() {
                f()
            }), .4);
            c.stage.addChild(g), g.x = c.screen.width - 40, g.y = 40
        },
        cargame2: function() {
            let e = new PIXI.TilingSprite(he["Sprites/RepeatingUI"][0]);
            c.stage.addChild(e), e.interactive = !0, e.x = 0, e.y = 0, e.width = c.screen.width, e.height = c.screen.height, e.clampMargin = 1;
            let t = 0,
                i = !1;
            window.onblur = function() {
                i || f()
            };
            let o = new PIXI.Container;
            c.stage.addChild(o), o.pivot.x = -c.screen.width / 2, o.pivot.y = -c.screen.height / 2;
            let a = Matter.Engine.create(),
                r = {},
                s = !1;
            document.addEventListener("keydown", (function(e) {
                let t = e.key.toLowerCase();
                "ArrowLeft" == e.key && (t = "a"), "ArrowRight" == e.key && (t = "d"), "ArrowUp" == e.key && (t = " "), "w" == e.key && (t = " "), r[t] = !0, ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", " "].includes(e.key) && e.preventDefault()
            })), document.addEventListener("keyup", (function(e) {
                let t = e.key.toLowerCase();
                "ArrowLeft" == e.key && (t = "a"), "ArrowRight" == e.key && (t = "d"), "ArrowUp" == e.key && (t = " "), "w" == e.key && (t = " "), r[t] = !1
            })), document.addEventListener("pointerdown", (function() {
                s = !0
            })), document.addEventListener("pointerup", (function() {
                s = !1
            }));
            let l = [],
                d = [],
                h = {
                    box: Matter.Bodies.rectangle(0, -400, 100, 100),
                    sprite: function() {
                        let e = new PIXI.NineSlicePlane(he.inputNineSlice[5], 15, 15, 15, 15);
                        return e.width = 100, e.height = 100, o.addChild(e), e.pivot.x = 50, e.pivot.y = 50, e
                    }()
                };
            l.push(h), d.push(h.box);
            for (let e = 0; e < 500; e++) {
                let t = {},
                    i = .1 + Math.random() / 2,
                    n = Matter.Bodies.polygon(400 * (Math.random() - .5), -300 - 100 * e, 16, 48 * i);
                t.box = n;
                let a = new PIXI.Sprite(he["Sprites/GameUI"][Math.round(6 * Math.random())]);
                a.scale.x = i, a.scale.y = i, a.anchor.set(.5, .5), o.addChild(a), t.sprite = a, l.push(t), d.push(n), t.sprite.tint = 16777215 * Math.random()
            }
            let u = Matter.Bodies.rectangle(0, 200, 16e3, 120, {
                isStatic: !0
            });
            Matter.Composite.add(a.world, [u, ...d]);
            let m = ke(pe.faceMinigame);
            o.addChild(m);
            let y = function(t) {
                for (let e = 0; e < l.length; e++) {
                    let t = l[e].sprite,
                        i = l[e].box;
                    t.rotation = i.angle, t.x = i.position.x, t.y = i.position.y
                }
                r.a && Matter.Body.setAngularVelocity(h.box, h.box.angularVelocity - .01 * Qe), r[" "] && null != Matter.Collision.collides(u, h.box) && Matter.Body.setVelocity(h.box, {
                    x: h.box.velocity.x,
                    y: h.box.velocity.y - 20
                }), r.d && Matter.Body.setAngularVelocity(h.box, h.box.angularVelocity + .01 * Qe), m.x = h.sprite.x, m.y = h.sprite.y, m.rotation = h.sprite.rotation, o.x = p.linear(o.x, -l[0].sprite.x, .05, Qe), e.tilePosition.x = o.x / 2, Matter.Engine.update(a, t * (1e3 / 60))
            };

            function f() {
                i = !i, g.changePause(i), i ? (t = -Date.now(), n.inGame = !1, c.ticker.remove(y), ze.message("Game paused", he["Sprites/GameUI"][32], (function() {
                    f()
                }), (function() {
                    ze.blurPan(c.stage, (function() {
                        ! function() {
                            g.destroyPause(), Matter.World.clear(a.world), Matter.Engine.clear(a);
                            for (let e = 0; e < l.length; e++) l[e].sprite.destroy();
                            m.destroyAnimation(), e.destroy()
                        }(), ze.gameList(), ze.results(0, 0, "what", "what")
                    }))
                }), ["Play", "Home"], !1)) : (n.inGame = !0, c.ticker.add(y))
            }
            m.gotoAndStop(Math.floor(100 * Math.random())), h.sprite.visible = !1, c.ticker.add(y);
            let g = ze.pauseButton((function() {
                f()
            }), .4);
            c.stage.addChild(g), g.x = c.screen.width - 40, g.y = 40
        },
        crashHandler: function(e, t = -1) {
            let i = "Unknown";
            e.message.includes("(reading 'off')") && (i = "ERR_PIXI_DESTROYOBJECT"), e.message.includes("(reading 'stop')") && (i = "ERR_PIZZICATO_FAILURETOSTOPAUDIO"), e.message.includes("(reading 'buffer')") && (i = "ERR_PIZZICATO_AUDIOBUFFER"), e.message.includes("getRawSourceNode") && (i = "ERR_PIZZICATO_NOTLOADED"), e.message.includes("(setting 'x')") && (i = "ERR_FOODSYSTEM_FAILURETOSETPOSITION"), -1 != t && (i = t);
            const n = new PIXI.Application({
                background: "#000011",
                width: c.screen.width,
                height: c.screen.height,
                resolution: s * window.devicePixelRatio
            });
            document.body.appendChild(n.view);
            let r = new PIXI.Sprite(he["Sprites/GameThumbnails"][4]);
            r.x = n.screen.width / 2, r.y = n.screen.height / 2 - 100, r.scale.x = .5, r.scale.y = .5, r.anchor.set(.5, .5), n.stage.addChild(r);
            let l = o(a.crashHandler.whoops, 16, "center");
            l.x = c.screen.width / 2, l.y = c.screen.height / 2 - 200, n.stage.addChild(l);
            let d = o(i, 16, "center");
            d.x = c.screen.width / 2, d.y = c.screen.height / 2 + 175, n.stage.addChild(d);
            let h = o(a.crashHandler.description, 16, "center");
            h.x = c.screen.width / 2, h.y = c.screen.height / 2 - 30, h.anchor.set(.5, 0), n.stage.addChild(h);
            let p = new k((function() {
                ! function() {
                    d.destroy(), h.destroy(), p.destroy(), u.destroy(), m.destroy(), n.destroy(!0);
                    for (let e in ue) ue[e].volume = ue[e].defaultVolume
                }()
            }), c.screen.width / 2 - 80, c.screen.height / 2 + 100, 150, 30, a.ui.continue, 0, .5, .5, 1, "center");
            n.stage.addChild(p.element);
            let u = new k((function() {
                window.location = window.location, setTimeout((function() {
                    u.inputText.text = "Couldn't reload", u.inputText.scale.set(.9, .9)
                }), 100)
            }), c.screen.width / 2 + 80, c.screen.height / 2 + 100, 150, 30, a.ui.reload, 0, .5, .5, 1, "center");
            n.stage.addChild(u.element);
            let m = new k((async function() {
                1 == await Me(JSON.stringify({
                    message: e.message,
                    lineno: e.lineno,
                    colno: e.colno
                })) && (m.inputText.text = "Copied", m.element.resetSize(), m.element.interactive = !1, m.element.texture = he.inputNineSlice[9])
            }), c.screen.width / 2, c.screen.height / 2 + 100 + 40, 310, 30, a.crashHandler.copyErrorText, 0, .5, .5, 1, "center");
            n.stage.addChild(m.element);
            for (let e in ue) ue[e].defaultVolume = ue[e].volume, ue[e].volume = 0
        },
        debugMenu: function(e = function() {}) {
            let t = new PIXI.Sprite(he["Sprites/Rooms"][15]);
            t.tint = 6737151, c.stage.addChild(t), t.interactive = !0, t.x = c.screen.width / 2, t.y = c.screen.height / 2, t.anchor.set(.5, .5), t.scale.x = 1, t.scale.y = 1;
            let i = "Home";
            onkeyup = function(e) {
                "k" == e.key && n()
            };
            let n = function() {
                    let e = a[i].container;
                    e.container.zIndex = 5, a[i].container.icon.zIndex = 2, setTimeout((function() {
                        y(a[i].container.icon, "alpha", 1, .5, .5)
                    }), 150), y(e.container.pivot, "x", 0, .3, .1), y(e.container.pivot, "y", 0, .3, .1), y(e.container.scale, "x", 1, .5, .15), y(e.container.scale, "y", 1, .5, .15), y(e.container, "x", e.container.appPosition.x, .4, .25), y(e.container, "y", e.container.appPosition.y, .5, .2), y(e.graphics, "extension", 0, .2, .1), y(e.graphics, "round", s / 5, .5, .1), a[i].container.icon.interactive = !0
                },
                a = {
                    gtttatint: {
                        icon: 0,
                        name: "GTTTATINT101",
                        app: function() {
                            return ze.gameList(void 0, "gtttatint", !0)
                        }
                    },
                    tennis: {
                        icon: 1,
                        name: "Tennis",
                        app: function() {
                            return ze.gameList(void 0, "tennis", !0)
                        }
                    },
                    match: {
                        icon: 2,
                        name: "Face Match",
                        app: function() {
                            return ze.gameList(void 0, "match", !0)
                        }
                    },
                    cakewalk: {
                        icon: 3,
                        name: "CAKEWALK",
                        app: function() {
                            return ze.gameList(void 0, "cakewalk", !0)
                        }
                    },
                    oddDroplets: {
                        icon: 4,
                        name: "Odd Droplets",
                        app: function() {
                            return ze.gameList(void 0, "oddDroplets", !0)
                        }
                    },
                    dropletDodge: {
                        icon: 5,
                        name: "Dodge",
                        app: function() {
                            return ze.gameList(void 0, "dropdodge", !0)
                        }
                    },
                    settings: {
                        icon: 6,
                        name: "Settings",
                        app: ze.settings
                    },
                    myTeardrop: {
                        icon: 7,
                        name: "myTeardrop",
                        app: ze.myTeardrop
                    },
                    achievements: {
                        icon: 8,
                        name: "Achievements",
                        app: ze.achievements
                    },
                    wardrobe: {
                        icon: 9,
                        name: "Wardrobe",
                        app: ze.wardrobe
                    },
                    games: {
                        icon: 10,
                        name: "Games",
                        app: ze.gameList
                    }
                },
                r = 4,
                s = 65,
                l = s + 18,
                d = s + 35,
                h = 0;
            s /= p.linear(window.devicePixelRatio - 1, 1, .85), l /= p.linear(window.devicePixelRatio - 1, 1, .9), c.screen.width >= 640 && (r = 6, s = 60, l += 20), c.stage.sortableChildren = !0;
            for (let e in a) {
                let t = a[e],
                    n = new PIXI.Container;
                n.zIndex = 0, n.sortableChildren = !0, c.stage.addChild(n);
                let p = new PIXI.Graphics;
                p.beginFill(16777215), p.drawRoundedRect(0, 0, s, s, s / 5), p.endFill();
                let u = new PIXI.NineSlicePlane(he.Icons[t.icon], 252, 252, 4, 4);
                u.width = s, u.height = s, n.x = c.screen.width / 2 + h % r * l - l * (r - 1) / 2 - s / 2, n.y = c.screen.height / 2 + Math.floor(h / r) * d - 4 * d / 2 - 40 - s / 2, n.appPosition = {
                    x: n.x,
                    y: n.y
                }, n.addChild(u), u.interactive = !0, n.addChild(p), u.mask = p, a[e].container = {
                    container: n,
                    icon: u,
                    graphics: p
                };
                let m = {};
                p.extension = 0, p.round = s / 5, v(u, (function() {
                    if (null == a[e].container.app) {
                        if (null != t.app) {
                            let e = new PIXI.Container;
                            m = t.app(e)
                        } else m = Ue();
                        a[e].container.app = m
                    }
                    u.tint = 16777215, n.zIndex = 100, n.x += (s / 2 - n.pivot.x) * n.scale.y, n.y += (s / 2 - n.pivot.x) * n.scale.y, n.pivot.x = s / 2, n.pivot.y = s / 2, y(n.pivot, "x", s / 2, 1, 1), y(n.pivot, "y", s / 2, 1, 1), y(n, "x", c.screen.width / 2, .35, .15), y(n, "y", c.screen.height / 2, .35, .125), y(n.scale, "x", c.screen.width / s, .3, .125), y(n.scale, "y", c.screen.width / s, .3, .125), y(u, "height", 2 * s, .3, .125), y(u, "width", s, .3, .125), y(p, "round", 0, .4, .1), y(p, "extension", s * (m.screen.height / m.screen.width) - s, .3, .1), f((function() {
                        p.clear(), p.beginFill(16777215), p.drawRoundedRect(0, -p.extension / 2, s, s + p.extension, p.round), p.endFill(), u.y = -p.extension / 2, m.y = u.y, n.originalHitArea = new PIXI.Rectangle(0, -p.extension / 2, s, s), n.dragged || (n.hitArea = n.originalHitArea)
                    }), p), setTimeout((function() {
                        i = e, m.mask = p, n.addChild(m), m.scale.x = s / m.screen.width, m.scale.y = m.scale.x, u.zIndex = 10, u.interactive = !1, y(u, "alpha", 0, .5, .5)
                    }), 100)
                }), !1), u.on("pointerdown", (function() {
                    u.tint = 13421772
                })), u.on("pointerout", (function() {
                    u.tint = 16777215
                }));
                let g = o(t.name, 16, "center", "center", 1);
                g.x = n.x + s / 2, g.y = n.y + s + 12;
                for (let e = 0; e < 20; e++) g.width > s + 10 && (g.letterSpacing -= 1);
                c.stage.addChild(g), h++
            }
            let u = {},
                m = 0,
                y = function(e, t, i, n = .5, o = .1, a = 1) {
                    if (null != e[t + "_animationId"]) {
                        let r = u[e[t + "_animationId"]];
                        return r.stiffness = n, r.to = i, r.speed = o, void(r.globalSpeed = a)
                    }
                    e[t + "_animationId"] = m, console.log("new animation!");
                    let r = {
                        velocity: 0,
                        to: i,
                        stiffness: n,
                        speed: o,
                        globalSpeed: a,
                        frame: function() {
                            r.velocity = p.linear(r.velocity, r.to - e[t], r.stiffness, r.globalSpeed), e[t] = e[t] + r.velocity * r.speed * r.globalSpeed
                        },
                        id: m
                    };
                    u[m++] = r
                },
                f = function(e, t) {
                    if (null != t.motionId) return;
                    t.motionId = m;
                    let i = {
                        frame: e,
                        id: m
                    };
                    u[m++] = i
                };
            c.ticker.add((function() {
                for (let e in u) u[e].frame()
            }))
        },
        launch: function(e, t = c.stage) {
            let i = e();
            return t.addChild(i), i
        },
        initializeScreenResolution(e) {
            e.screen = {
                width: c.screen.width,
                height: c.screen.height
            }
        }
    };
    let _e = "1.4.1_r1.0.3";
    null == localStorage.version && (localStorage.version = _e);
    let We, je = !0,
        Ve = !1,
        He = {
            costumes: {},
            foods: {}
        };
    PIXI.Assets.load("/discount.json?nocache=" + Date.now()).then((e => {
        He = e
    })), PIXI.Assets.load("./latest.json?nocache=" + Date.now()).then((e => {
        e.latestVersion != _e && (Ve = !0, We = e.latestVersion), localStorage.version = e.latestVersion, je = !1
    }));
    let Qe = 2;
    /iPhone|iPad|iPod|Android/i.test(navigator.userAgent), window.addEventListener("error", (function(e) {
        setTimeout((function() {
            ze.crashHandler(e)
        }), 100)
    }));
    let Ye = !1;

    function Ke() {
        ze.setUpTints(), PIXI.settings.MIPMAP_TEXTURES = PIXI.MIPMAP_MODES.OFF, "ontouchstart" in document.documentElement && (c.touchScreen = !0, ontouchstart = function(e) {
            e.returnValue = !1
        }, ontouchend = function(e) {
            e.returnValue = !1
        }, ontouchmove = function(e) {
            e.returnValue = !1
        }, ontouchcancel = function(e) {
            e.returnValue = !1
        }), window.book = ze.book, c.ticker.add((function() {
            Qe = c.ticker.deltaTime;
            for (let e in x) {
                let t = x[e];
                x[e].animate && (t.animationTime += Qe, t.scale.x = eases.easeOutBack(Math.min(24, t.animationTime), t.animationSize.x, t.destinationSize.x - t.animationSize.x, 24), t.scale.y = eases.easeOutBack(Math.min(24, t.animationTime), t.animationSize.y, t.destinationSize.y - t.animationSize.y, 24))
            }
        })), Ye = !0;
        let e = function() {
            n.music && ue.brittlerille.play(), ue.brittlerille.volume = .5, ue.brittlerille.pausing = !1, ue.brittlerille.attack = 2, ue.brittlerille.release = 3, ue.brittlerille.on("end", (function() {
                n.music && ue.brittlerille.play()
            })), window.brittlerille = ue.brittlerille
        };
        0 == ue.brittlerille.loaded ? ue.brittlerille.onloadAudio = function() {
            e()
        } : e(), window.setFps = function(e) {
            c.ticker.maxFPS = e
        }, document.body.appendChild(c.view), Re.blendMode = PIXI.BLEND_MODES.SUBTRACT, Re.interactive = !0, Fe.width = c.screen.width, Fe.height = c.screen.height, Re.width = c.screen.width, Re.height = c.screen.height, -1 != n.lollipopMode ? (ue.brittlerille.pause(), ze.lollipop(), ze.gameList(n.lollipopMode, !0)) : ze.launch(ze.myTeardrop);
        let t = "";
        onkeydown = function(e) {
            t += e.key, "bfdibfdiaidfbbfbtpot".includes(t.toLowerCase()) && t.toLowerCase().startsWith("b") ? "bfdibfdiaidfbbfbtpot" == t && (ze.intro(), t = "") : "lollipop".includes(t.toLowerCase()) && t.toLowerCase().startsWith("l") ? "lollipop" == t && (ze.lollipop(), t = "") : t = ""
        }, Ve && ze.updateWarning(), n.lastLogin = Date.now(), H(), (Date.now() - n.gameStartDate) / 1e3 / 60 / 60 / 24 > .5 && !n.saveFileWarning && setTimeout((function() {
            n.saveFileWarning = !0, ze.message("Your save file is over 2 days old now! Since this is a web game, there's a high chance of your browser removing the game data after 7 days of inactivity. To prevent this, regularly backup/download your save file!", -1, (function() {
                ze.flash(!1, (function() {
                    ze.settings()
                }))
            }), (function() {}), ["Settings", "Ignore"])
        }), 500), J.loadAttempts = 0, ee()
    }
})();