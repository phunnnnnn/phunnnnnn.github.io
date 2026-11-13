// =====================================================================
//  ALL WEBSITE TEXT LIVES HERE. Edit freely — no code knowledge needed.
//
//  Rules:
//   • Only change the text between the quotes "..." (or '...').
//   • Keep the quotes, the comma at the end of each line, and the key
//     on the left (e.g. "about.title":) exactly as they are.
//   • \n = new line.  <em class="serif">word</em> = word in the fancy font.
//   • Certificates (title / place · date / tag) are in certData at the
//     bottom. Their order here is the order on the website.
//   • Thai text is in the  th: { ... }  block, English in  en: { ... }.
//   • Games page cards show each project's  short:  text. Keep it to 1-3
//     short sentences (about 120 characters) that say what the game is,
//     so it fits on the card, phones included. Longer detail goes in
//     desc: (home page + the game's own page) and points:.
//   • Save the file and the page reloads by itself (when the local
//     server is running).
// =====================================================================

// ===== Translations (EN / TH) =====
const translations = {
  en: {
    "nav.home": "Home",
    "nav.games": "Games",
    "nav.info": "Info",
    "nav.role": "Game Developer",
    "hero.headline": 'I code, debug,\nimprove &amp; build <em class="serif">games.</em>',
    "about.kicker": "01 / About",
    "about.title": "A little about me",
    "about.p1": "I'm Phunn. I write code and make games.",
    "about.p2": "As a kid, the friend I remember most clearly was games. I was truly hooked, and I loved them. But I had real friends too, and no matter how much I played, my grades never suffered. They were actually good, and I'm proud of that.",
    "about.photo1": "Me as a kid",
    "about.p3": "The turning point was the POSN Academic Olympiad Camp 1 in Computer Science, at the Yupparaj Wittayalai School center in 2024. That's where I found out programming wasn't as hard as I'd thought.",
    "about.photo2": "POSN Computer Camp 1 · Oct 2024",
    "about.p4": "Right after the camp, I started building the games I dreamed of, first in Roblox Studio, then in Godot. Neither project ever got finished. The dream was bigger than I could handle back then, and I'd get stuck polishing one piece instead of shipping.",
    "about.p5": "So I started again, and this time I finished.",
    "about.p6": "In 2026 I released two games: Help Your Waifu on Roblox, built with a friend who handled the game design, and Lost Dept, an underwater survival game in Godot, the same engine where I'd stalled before.",
    "about.p7": "I know I still have a lot to improve, and I'm going to keep going.",
    "about.factName": "Name",
    "about.factNameVal": "Pannatat Chaikaew",
    "about.factNick": "Nickname",
    "about.factNickVal": "Phunn",
    "projects.title": "Things I've built",
    "game.back": "All games",
    "games.title": "All games",
    "games.lead": "Everything I've made. Hover a game to see it in action, click it for the full page.",
    "games.filter": "Filter",
    "games.filter.all": "All",
    "games.filter.released": "Released",
    "games.filter.dev": "In dev",
    "games.filter.prototype": "Prototype",
    "games.filter.etc": "Etc.",
    "games.empty": "Nothing here yet.",
    "game.status": "Status",
    "game.platform": "Platform",
    "game.code": "Code",
    "game.team": "Team",
    "game.highlights": "Highlights",
    "game.builtWith": "Built with",
    "game.story.about": "About this game",
    "game.story.did": "What I did",
    "game.story.learned": "What I learned",
    "game.story.devlog": "Devlog: how it's built",
    "game.more": "Read more",
    "game.less": "Show less",
    "game.loading": "Loading…",
    "game.loadFail": "Couldn't load, try again",
    "game.likes": "{n} likes",
    "game.dislikes": "{n} dislikes",
    "game.liked": "{pct}% of players liked it",
    "game.noVotes": "No votes yet",
    "game.rateOn": "Rate it on Roblox",
    "game.visits": "Visits",
    "game.favorites": "Favorites",
    "game.updated": "Updated",
    "game.statsNote": "Roblox stats as of {date}",
    "game.prev": "Previous",
    "game.next": "Next",
    "game.play": "Play",
    "game.about": "About this project",
    "certs.title": "Certificates",
    "certs.lead": "Highlights from competitions, camps, and workshops.\nUse the arrows or swipe. Click the middle one to view it full size.",
    "contact.title": 'Let\'s make <em class="serif">games</em> together.',
    "contact.lead": "Want to hire me or just chat about a project?\nReach out through any of these, I'm always happy to hear from you.",
  },
  th: {
    "nav.home": "หน้าแรก",
    "nav.games": "เกม",
    "nav.info": "ข้อมูล",
    "nav.role": "นักพัฒนาเกม",
    "hero.headline": 'ผม เขียนโค้ด แก้บัค\nปรับปรุง พัฒนา <em class="serif">เกม</em>',
    "about.kicker": "01 / เกี่ยวกับ",
    "about.title": "เกี่ยวกับผม",
    "about.p1": "ผมชื่อปุณณ์ ผมเขียนโค้ดและทำเกม",
    "about.p2": "ตอนเด็ก เพื่อนที่ผมจำได้ชัดที่สุดคือเกม ผมติดเกมจริง และรักมันมาก แต่ผมก็มีเพื่อนจริง ๆ ด้วย และต่อให้เล่นเกมมากแค่ไหน ผลการเรียนของผมก็ไม่เคยแย่ ออกจะดีด้วยซ้ำ ผมภูมิใจกับตรงนั้น",
    "about.photo1": "ผมตอนเด็ก",
    "about.p3": "จุดเปลี่ยนคือค่ายโอลิมปิกวิชาการ สอวน. ค่าย 1 วิชาคอมพิวเตอร์ ที่ศูนย์โรงเรียนยุพราชวิทยาลัย ปี 2567 ที่นั่นผมได้รู้ว่าการเขียนโปรแกรมไม่ได้ยากอย่างที่เคยคิด",
    "about.photo2": "ค่าย 1 สอวน. คอมพิวเตอร์ · ต.ค. 2567",
    "about.p4": "พอออกจากค่าย ผมก็เริ่มสร้างเกมในฝันของตัวเองทันที เริ่มจาก Roblox Studio แล้วต่อด้วย Godot แต่ทั้งสองโปรเจกต์ไม่เคยเสร็จ ฝันนั้นใหญ่เกินกำลังผมในตอนนั้น และผมมัวแต่ขัดเกลาจุดเดียว จนไม่ได้ปล่อยเกมออกมาสักที",
    "about.p5": "ผมเลยกลับมาเริ่มใหม่ และครั้งนี้ผมทำจนเสร็จ",
    "about.p6": "ปี 2569 ผมปล่อยเกม 2 เกม คือ Help Your Waifu บน Roblox ที่ทำร่วมกับเพื่อนซึ่งดูแลการออกแบบเกม และ Lost Dept เกมเอาชีวิตรอดใต้ทะเลที่ทำด้วย Godot เอนจินเดียวกับที่ผมเคยทำไม่สำเร็จ",
    "about.p7": "ผมรู้ว่าตัวเองยังต้องพัฒนาอีกเยอะ และผมจะไปต่อ",
    "about.factName": "ชื่อ",
    "about.factNameVal": "ปัณณทัต ไชยแก้ว",
    "about.factNick": "ชื่อเล่น",
    "about.factNickVal": "ปุณณ์",
    "projects.title": "ผลงาน",
    "game.back": "เกมทั้งหมด",
    "games.title": "เกมทั้งหมด",
    "games.lead": "ทุกเกมที่ผมทำ ชี้เมาส์ที่เกมเพื่อดูตัวอย่างการเล่น คลิกเพื่อดูรายละเอียดทั้งหมด",
    "games.filter": "ตัวกรอง",
    "games.filter.all": "ทั้งหมด",
    "games.filter.released": "เปิดให้เล่นแล้ว",
    "games.filter.dev": "กำลังพัฒนา",
    "games.filter.prototype": "ต้นแบบ",
    "games.filter.etc": "อื่นๆ",
    "games.empty": "ยังไม่มีผลงานในหมวดนี้",
    "game.status": "สถานะ",
    "game.platform": "แพลตฟอร์ม",
    "game.code": "โค้ด",
    "game.team": "ทีม",
    "game.highlights": "จุดเด่น",
    "game.builtWith": "สร้างด้วย",
    "game.story.about": "เกี่ยวกับเกมนี้",
    "game.story.did": "สิ่งที่ผมทำ",
    "game.story.learned": "สิ่งที่ผมได้เรียนรู้",
    "game.story.devlog": "บันทึกการพัฒนา: เบื้องหลังและโครงสร้าง",
    "game.more": "อ่านต่อ",
    "game.less": "ย่อลง",
    "game.loading": "กำลังโหลด…",
    "game.loadFail": "โหลดไม่สำเร็จ ลองอีกครั้ง",
    "game.likes": "ถูกใจ {n}",
    "game.dislikes": "ไม่ถูกใจ {n}",
    "game.liked": "ผู้เล่น {pct}% ถูกใจเกมนี้",
    "game.noVotes": "ยังไม่มีใครโหวต",
    "game.rateOn": "ให้คะแนนบน Roblox",
    "game.visits": "ยอดเข้าเล่น",
    "game.favorites": "รายการโปรด",
    "game.updated": "อัปเดตล่าสุด",
    "game.statsNote": "ข้อมูลจาก Roblox ณ วันที่ {date}",
    "game.prev": "ก่อนหน้า",
    "game.next": "ถัดไป",
    "game.play": "เล่น",
    "game.about": "เกี่ยวกับโปรเจกต์นี้",
    "certs.title": "เกียรติบัตร",
    "certs.lead": "ผลงานจากการแข่งขัน ค่าย และการอบรม\nกดลูกศรหรือปัดได้เลย คลิกภาพตรงกลางเพื่อดูขนาดเต็ม",
    "contact.title": 'มาสร้าง <em class="serif">เกม</em> กันเถอะ',
    "contact.lead": "อยากจ้างงานหรือแค่อยากคุยเรื่องโปรเจกต์ ?\nติดต่อผมได้ทุกช่องทางเลยครับ ผมยินดีเสมอ",
  },
};

// ===== Projects =====
// Shown in this order. To add a project, copy one { ... } block, paste it
// below, and change the text. Fields:
//   youtube: the video id (the part after "watch?v=" in the YouTube link)
//   playlist: optional playlist id (after "list=") — the player then shows the
//            whole playlist; youtube: is still needed for the cover picture
//   image:   a picture instead of a video, or with youtube: the cover picture shown before play
//   link:    optional button, e.g. { url: "https://...", label: { en: "Play on Roblox", th: "เล่นบน Roblox" } }
//   page:    the project's own page, phunn.me/<page>. Needs a file docs/<page>.html:
//            copy any game page (e.g. lost-dept.html), rename it, and change the
//            title / og:title / og:url / og:image lines at the top.
//   gif:     optional short gameplay clip, played when the mouse is over the card on the
//            home page, e.g. "assets/projects/lost-dept.webp" (.gif works too).
//            The full video (youtube:) is on the game's own page.
//   filter:  which filter button shows it on the games page: "released", "dev",
//            "prototype" or "etc" (anything that isn't a game, e.g. a system)
//   home:    false = games page only, not in the home page carousel
//   repo:    optional GitHub link(s) shown on the game's page, one "https://github.com/..."
//            or a list ["...", "..."]. The repo must be public, or visitors get a 404.
//   team:    who made it, shown in the game page's info box, e.g. { en: "Duo · ...", th: "..." }
//   tags:    genre tags in the info box, like Steam's, e.g. ["Simulator", "Obby"]
//   media:   the game page gallery, first one shown first, e.g.
//            [{ youtube: "id" }, { image: "assets/...jpg", thumb: "assets/projects/thumbs/...jpg" }]
//            thumb: a small picture for the strip (320px wide); a video uses its YouTube thumbnail.
//            Without media: the gallery is just the youtube: video or the image:.
//   story:   the game page sections, each a short intro shown right away:
//              about (About this game), did (What I did), learned (What I learned),
//              devlog (how it was made / how the code is built)
//            e.g. story: { about: { en: "...", th: "...", more: true }, ... }
//            more: true adds a Read more button that loads the full text from
//            docs/story/<page>/<section>.en.md (and .th.md) only when pressed.
//            Those files are Markdown: # heading, - list, **bold**, [link](url), ![picture](assets/...).
//            Without story: the page shows role: and points: under "About this project".
//   short:   the games page card text: 1-3 short sentences, about 120 characters
//            (see Rules at the top). desc: is the longer text for the home page
//            card and the game's own page.
const projectData = [
  {
    title: "Help Your Waifu",
    page: "help-your-waifu",
    gif: "assets/projects/help-your-waifu.webp",
    status: { en: "Released", th: "เปิดให้เล่นแล้ว" },
    filter: "released",
    meta: "Roblox, '26",
    short: { en: "An anime collecting game on Roblox. Run a random obby, grab mystery waifus, and carry them home to earn cash.",
             th: "เกมสะสมสาวอนิเมะบน Roblox วิ่งฝ่าด่าน obby ที่สุ่มใหม่ เก็บ waifu ปริศนา แล้วแบกกลับบ้านเพื่อหาเงิน" }, // games page card: 1-3 short sentences
    desc: {
      en: "An anime collecting simulator. Run a randomly generated obby to grab mystery waifus, carry them home to your base, and they earn cash for you, even while you're offline. Harder levels hide rarer waifus.",
      th: "เกมซิมูเลเตอร์สะสมสาวอนิเมะ วิ่งฝ่าด่าน obby ที่สุ่มสร้างใหม่เพื่อเก็บ waifu ปริศนา แบกกลับบ้าน แล้วเธอจะช่วยหาเงินให้ แม้ตอนคุณออฟไลน์ ยิ่งด่านยากยิ่งเจอตัวหายาก",
    },
    team: { en: "Duo: me on code & UI, a friend on game & level design",
            th: "ทำ 2 คน: ผมทำโค้ดและ UI เพื่อนออกแบบเกมและด่าน" },
    tags: ["Simulator", "Obby", "Collecting", "Anime", "Multiplayer"],
    points: [
      { en: "Procedural obby rebuilt every 5 minutes from hand-built pieces across 8 difficulty levels, with no repeated pieces in a lane", th: "ด่าน obby สุ่มสร้างใหม่ทุก 5 นาทีจากชิ้นส่วนที่ออกแบบไว้ 8 ระดับความยาก ไม่มีชิ้นซ้ำในเลนเดียวกัน" },
      { en: "The server checks everything: every remote is validated, and speed and distance checks stop teleport and pickup exploits", th: "เซิร์ฟเวอร์เป็นตัวตัดสิน ตรวจทุก remote มีเช็คความเร็วและระยะ กันการวาร์ปและโกงเก็บตัวละคร" },
      { en: "Full monetization: game passes, dev products and lootboxes with a shared server stock, following Roblox's paid random item policy", th: "ระบบหารายได้ครบ: game pass, dev product และกล่องสุ่มที่ใช้สต็อกร่วมกันทั้งเซิร์ฟเวอร์ ทำตามนโยบายไอเทมสุ่มแบบเสียเงินของ Roblox" },
      { en: "56 Luau files (~9,200 lines of game code), ProfileStore saves with offline earnings, plus a live admin panel with a save editor", th: "โค้ดเกม Luau 56 ไฟล์ (~9,200 บรรทัด) เซฟด้วย ProfileStore มีรายได้ตอนออฟไลน์ และแผงแอดมินที่แก้เซฟผู้เล่นได้สด" },
    ],
    // Game page sections: the short intro shows right away, Read more loads story/help-your-waifu/<section>.<lang>.md
    story: {
      about: { en: "A Roblox simulator about collecting anime waifus. Run an obby that rebuilds itself every 5 minutes, grab a mystery waifu at the end of a side path, and carry her home, where she earns cash for you, even while you're offline.",
               th: "เกมซิมูเลเตอร์สะสมสาวอนิเมะบน Roblox วิ่งฝ่าด่าน obby ที่สร้างใหม่เองทุก 5 นาที คว้า waifu ปริศนาที่ปลายทางแยก แล้วแบกเธอกลับบ้าน เธอจะช่วยหาเงินให้แม้ตอนคุณออฟไลน์", more: true },
      did: { en: "I built the game's code and UI, working with Claude Code as my AI coding partner, while my friend handled game design and level design. The final push took 6 days and 45 commits, from the first commit to launch.",
             th: "ผมสร้างโค้ดและ UI ของเกม โดยใช้ Claude Code เป็นผู้ช่วยเขียนโค้ด AI ส่วนเพื่อนดูแลการออกแบบเกมและออกแบบด่าน ช่วงพัฒนาจริงจังใช้เวลา 6 วัน 45 commit ตั้งแต่ commit แรกจนเปิดให้เล่น", more: true },
      learned: { en: "Never trust the client: most of my last fixes closed exploits I only found by thinking like a cheater. I also learned to measure instead of guess, and that small engine details like streaming can break a game in ways you only see when it's really played.",
                 th: "อย่าเชื่อข้อมูลจากฝั่งผู้เล่น การแก้ไขช่วงท้ายส่วนใหญ่คือการปิดช่องโกงที่เจอเพราะลองคิดแบบคนโกง และได้เรียนรู้ว่าต้องวัดผลจริงแทนการเดา รวมถึงรายละเอียดเล็กๆ ของเอนจินอย่างระบบ streaming ที่ทำให้เกมพังได้แบบที่เห็นเฉพาะตอนเล่นจริง", more: true },
      devlog: { en: "How the game went from its first commit to launch in 6 days, and how it's put together: server services, shared config tables and client UI, saving through ProfileStore, and an obby generator that builds levels from hand-made pieces.",
                th: "เส้นทางจาก commit แรกจนเปิดให้เล่นใน 6 วัน และโครงสร้างของเกม: เซอร์วิสฝั่งเซิร์ฟเวอร์ ตารางค่าที่ใช้ร่วมกัน UI ฝั่งผู้เล่น การเซฟผ่าน ProfileStore และตัวสร้างด่าน obby ที่ประกอบด่านจากชิ้นส่วนที่ทำมือ", more: true },
    },
    tech: ["Roblox Studio", "Rojo", "ProfileStore", "Git"],
    youtube: "n8mtudqqYa4",
    image: "assets/projects/help-your-waifu.jpg", // cover picture; the video plays on click
    media: [
      { youtube: "n8mtudqqYa4", cover: "assets/projects/help-your-waifu.jpg", thumb: "assets/projects/help-your-waifu/thumbs/cover.jpg" },
      { image: "assets/projects/help-your-waifu.webp", thumb: "assets/projects/help-your-waifu/thumbs/clip.jpg" },
      { image: "assets/projects/help-your-waifu/rarities.jpg", thumb: "assets/projects/help-your-waifu/thumbs/rarities.jpg" },
      { image: "assets/projects/help-your-waifu/obby-mountains-overview.jpg", thumb: "assets/projects/help-your-waifu/thumbs/obby-mountains-overview.jpg" },
      { image: "assets/projects/help-your-waifu/base-redhouse-yard.jpg", thumb: "assets/projects/help-your-waifu/thumbs/base-redhouse-yard.jpg" },
      { image: "assets/projects/help-your-waifu/carpet-flight.jpg", thumb: "assets/projects/help-your-waifu/thumbs/carpet-flight.jpg" },
      { image: "assets/projects/help-your-waifu/shop-scrolling-rows.jpg", thumb: "assets/projects/help-your-waifu/thumbs/shop-scrolling-rows.jpg" },
      { image: "assets/projects/help-your-waifu/waifu-customization.jpg", thumb: "assets/projects/help-your-waifu/thumbs/waifu-customization.jpg" },
    ],
    link: { url: "https://www.roblox.com/games/88467181439547/Help-your-waifu", label: { en: "Play on Roblox", th: "เล่นบน Roblox" } },
  },
  {
    title: "Lost Dept",
    page: "lost-dept",
    gif: "assets/projects/lost-dept.webp",
    image: "assets/projects/lost-dept-cover.png", // cover picture; the video plays on click
    status: { en: "Released", th: "เปิดให้เล่นแล้ว" },
    filter: "released",
    meta: "Godot, '26",
    short: { en: "An underwater wave-survival game. You're a diver who can't fight, so you farm kelp and buy pet fish to fight for you.",
             th: "เกมเอาชีวิตรอดเป็นเวฟใต้ทะเล คุณเป็นนักดำน้ำที่สู้เองไม่ได้ ต้องเก็บสาหร่ายหาเงิน แล้วซื้อปลาเลี้ยงมาสู้แทน" }, // games page card: 1-3 short sentences
    desc: {
      en: "An underwater wave-survival game. You play a diver who can't fight: sweep your mouse over kelp to earn money, then spend it between waves on pet fish that fight for you.",
      th: "เกมเอาชีวิตรอดเป็นเวฟใต้ทะเล ผู้เล่นเป็นนักดำน้ำที่ต่อสู้เองไม่ได้ ต้องลากเมาส์ผ่านสาหร่ายเพื่อหาเงิน แล้วใช้เงินนั้นซื้อปลาเลี้ยงที่ช่วยต่อสู้แทนในช่วงพักระหว่างเวฟ",
    },
    team: { en: "Solo: design and code, built with help from Claude Code", th: "ทำคนเดียว: ออกแบบและเขียนโค้ด โดยมี Claude Code ช่วย" },
    tags: ["Wave survival", "Pets", "Boss fights", "Pixel art"],
    story: {
      about: { en: "An underwater wave-survival game. You play a diver who can't fight: sweep kelp for money, buy pet fish between waves, and point them at enemies while they fight for you, until a boss closes out every round.",
        th: "เกมเอาชีวิตรอดเป็นเวฟใต้ทะเล คุณเป็นนักดำน้ำที่สู้เองไม่ได้ ต้องกวาดสาหร่ายหาเงิน ซื้อปลาเลี้ยงระหว่างเวฟ แล้วชี้เป้าให้พวกมันสู้แทน จนบอสปิดท้ายทุกรอบ", more: true },
      did: { en: "I designed Lost Dept and built it with Claude Code as my AI coding partner: I set the direction, made the calls and approved every change. The pixel art, sounds and music come from generator scripts too, except the hand-drawn Vent Snail.",
        th: "ผมออกแบบ Lost Dept และสร้างโดยใช้ Claude Code เป็นผู้ช่วยเขียนโค้ด AI ผมเป็นคนกำหนดทิศทาง ตัดสินใจ และอนุมัติทุกการเปลี่ยนแปลง ภาพพิกเซล เสียง และเพลงก็สร้างจากสคริปต์เช่นกัน ยกเว้นหอยทากปล่องร้อนที่วาดด้วยมือ", more: true },
      learned: { en: "A balance bot is only as good as its last update: after harvesting changed to clicking, mine never clicked, so its numbers meant nothing until I fixed it and measured again. Fast attacks need a warning and a fixed line to be fair, and tests must never touch the real save.",
        th: "บอททดสอบบาลานซ์ดีได้เท่ากับการอัปเดตครั้งล่าสุด หลังเปลี่ยนการเก็บสาหร่ายเป็นการคลิก บอทของผมไม่เคยคลิกเลย ตัวเลขที่ได้จึงไม่มีความหมายจนกว่าจะแก้แล้ววัดใหม่ ท่าโจมตีที่เร็วต้องมีสัญญาณเตือนและล็อกเป็นเส้นตรงถึงจะยุติธรรม และการทดสอบต้องไม่แตะเซฟจริงเด็ดขาด", more: true },
      devlog: { en: "From a kelp-and-fish prototype in May 2026 to release on itch.io on October 21: waves, the shop, pets and five bosses in one week in late September, then polish, pixel art, sound and the web build in the last two days.",
        th: "จากต้นแบบสาหร่ายกับปลาในเดือนพฤษภาคม 2569 จนเปิดให้เล่นบน itch.io วันที่ 21 ตุลาคม: เวฟ ร้านค้า สัตว์เลี้ยง และบอส 5 ตัวภายในสัปดาห์เดียวปลายเดือนกันยายน แล้วขัดเกลา ภาพพิกเซล เสียง และเวอร์ชันเว็บในสองวันสุดท้าย", more: true },
    },
    media: [
      { youtube: "pFsGzg_bJ8Y", cover: "assets/projects/lost-dept-cover.png", thumb: "assets/projects/lost-dept/thumbs/cover.jpg" },
      { image: "assets/projects/lost-dept.webp", thumb: "assets/projects/lost-dept/thumbs/clip.jpg" },
      { image: "assets/projects/lost-dept/kraken.jpg", thumb: "assets/projects/lost-dept/thumbs/kraken.jpg" },
      { image: "assets/projects/lost-dept/eel.jpg", thumb: "assets/projects/lost-dept/thumbs/eel.jpg" },
      { image: "assets/projects/lost-dept/crab.jpg", thumb: "assets/projects/lost-dept/thumbs/crab.jpg" },
      { image: "assets/projects/lost-dept/boss-intro.jpg", thumb: "assets/projects/lost-dept/thumbs/boss-intro.jpg" },
      { image: "assets/projects/lost-dept/shop.jpg", thumb: "assets/projects/lost-dept/thumbs/shop.jpg" },
      { image: "assets/projects/lost-dept/pets.jpg", thumb: "assets/projects/lost-dept/thumbs/pets.jpg" },
    ],
    points: [
      { en: "20 pets in 5 rarities, from Common to Legendary, each with its own skill: stunning chain lightning, a shockwave, an ice freeze that shatters", th: "สัตว์เลี้ยง 20 ตัวใน 5 ระดับความหายาก ตั้งแต่ Common ถึง Legendary แต่ละตัวมีสกิลของตัวเอง เช่น สายฟ้าลูกโซ่ที่ทำให้ศัตรูมึน คลื่นกระแทก หรือการแช่แข็งที่แตกเป็นน้ำแข็ง" },
      { en: "Every round ends with one of 5 bosses, each with a Soul Knight-style intro card and readable attacks", th: "ทุกรอบจบด้วยบอส 1 ใน 5 ตัว แต่ละตัวมีฉากเปิดตัวแบบ Soul Knight และท่าโจมตีที่อ่านออกได้" },
      { en: "Central event system for sound and screen effects, 15 automated tests and a bot that plays the game to balance it", th: "ระบบ event กลางสำหรับเสียงและเอฟเฟกต์หน้าจอ มีเทสอัตโนมัติ 15 ชุด และบอทที่เล่นเกมเองเพื่อใช้ปรับสมดุล" },
    ],
    tech: ["Godot 4.7", "Pixel Art"],
    youtube: "pFsGzg_bJ8Y",
    link: { url: "https://phunn.itch.io/lost-dept", label: { en: "Play on itch.io", th: "เล่นบน itch.io" } },
  },
  {
    title: "AutoBlox",
    page: "autoblox",
    gif: "assets/projects/autoblox.webp",
    status: { en: "In development", th: "กำลังพัฒนา" },
    filter: "dev",
    meta: "Roblox, '26",
    short: { en: "A multiplayer auto-battler inspired by Teamfight Tactics. Draft units, build synergies, and outfight other players.",
             th: "เกม auto-battler หลายผู้เล่น แรงบันดาลใจจาก Teamfight Tactics ซื้อตัวละคร จัดคอมโบ แล้วสู้กับผู้เล่นคนอื่น" }, // games page card: 1-3 short sentences
    desc: { en: "A multiplayer auto-battler inspired by Teamfight Tactics. Buy units from a shop that rolls from one pool the whole match shares, build trait synergies and items, then watch your army fight other players in real time.",
            th: "เกม auto-battler แบบผู้เล่นหลายคน ได้แรงบันดาลใจจาก Teamfight Tactics ซื้อตัวละครจากร้านที่สุ่มจากกองเดียวกันทั้งแมตช์ จัดทีมให้เข้าคอมโบ ประกอบไอเทม แล้วดูกองทัพของคุณสู้กับผู้เล่นคนอื่นแบบเรียลไทม์" },
    team: { en: "Duo: me on code, a partner on unit design and balance", th: "ทำ 2 คน: ผมทำโค้ด เพื่อนออกแบบตัวละครและบาลานซ์" },
    tags: ["Auto-battler", "Strategy", "PvP", "Multiplayer"],
    points: [
      { en: "Fights are simulated on the server and streamed to each player about 10 times a second; clients only draw them", th: "การต่อสู้คำนวณบนเซิร์ฟเวอร์และส่งให้ผู้เล่นประมาณ 10 ครั้งต่อวินาที ฝั่งผู้เล่นแค่วาดภาพ" },
      { en: "Real-time combat engine: abilities with wind-up, crowd control, items mid-fight", th: "เอนจินต่อสู้แบบเรียลไทม์: สกิลมีจังหวะร่าย, ควบคุมฝูงชน (CC), ใส่ไอเทมระหว่างสู้ได้" },
      { en: "Lobby + match servers, create/join rooms by code or Quick Play", th: "แยกเซิร์ฟเวอร์ล็อบบี้กับเซิร์ฟเวอร์แมตช์ สร้าง/เข้าห้องด้วยโค้ด หรือ Quick Play" },
      { en: "111 Luau files (~29K lines), with 57 units, 25 traits and 44 items defined as data", th: "โค้ด Luau 111 ไฟล์ (~29,000 บรรทัด) ตัวละคร 57 ตัว คอมโบ 25 แบบ และไอเทม 44 ชิ้นกำหนดเป็นข้อมูล" },
    ],
    story: {
      about: { en: "A multiplayer auto-battler inspired by Teamfight Tactics. Buy units, place them on a hex board, build trait synergies and items, and watch your army fight monsters and other players in real time until one player is left.",
        th: "เกม auto-battler หลายผู้เล่น ได้แรงบันดาลใจจาก Teamfight Tactics ซื้อตัวละคร วางบนกระดานหกเหลี่ยม จัดคอมโบและไอเทม แล้วดูกองทัพของคุณสู้กับมอนสเตอร์และผู้เล่นคนอื่นแบบเรียลไทม์จนเหลือผู้รอดคนสุดท้าย", more: true },
      did: { en: "I designed the architecture and built the game with Claude Code as my AI coding partner, while my partner works on unit design and balance. 114 commits so far, from June to October 2026.",
        th: "ผมออกแบบสถาปัตยกรรมและสร้างเกมโดยใช้ Claude Code เป็นผู้ช่วยเขียนโค้ด AI ส่วนเพื่อนดูแลการออกแบบตัวละครและบาลานซ์ ตอนนี้มี 114 commit ตั้งแต่มิถุนายนถึงตุลาคม 2569", more: true },
      learned: { en: "Networking details decide whether a fight looks right: a table with gaps lost its keys over the network and dead units started dancing, and a kill on the very last tick vanished along with its loot. I also learned to split huge files before they slow everything down.",
        th: "รายละเอียดของการส่งข้อมูลผ่านเครือข่ายตัดสินว่าการต่อสู้จะดูถูกหรือไม่ ตารางที่มีช่องว่างเสียคีย์ระหว่างส่ง ทำให้ตัวที่ตายแล้วลุกขึ้นเต้น และการฆ่าในจังหวะสุดท้ายหายไปพร้อมของที่ดรอป ผมยังได้เรียนรู้ว่าต้องแยกไฟล์ที่ใหญ่เกินไปก่อนที่มันจะทำให้ทุกอย่างช้าลง", more: true },
      devlog: { en: "Two places with two Rojo projects: a lobby that hosts rooms across servers, and a match place where the rounds run. The server simulates every fight and streams it to each player, whose client draws it.",
        th: "มี 2 place และ 2 โปรเจกต์ Rojo: ล็อบบี้ที่จัดห้องข้ามเซิร์ฟเวอร์ และ place สำหรับแมตช์ที่รอบการเล่นทำงาน เซิร์ฟเวอร์คำนวณการต่อสู้ทุกครั้งแล้วส่งให้ผู้เล่นแต่ละคน ฝั่งผู้เล่นเป็นคนวาดภาพ", more: true },
    },
    media: [
      { youtube: "61VS6Pz__ZM" },
      { image: "assets/projects/autoblox.webp", thumb: "assets/projects/autoblox/thumbs/clip.jpg" },
    ],
    tech: ["Roblox Studio", "Rojo", "Git"],
    youtube: "61VS6Pz__ZM",
  },
  {
    title: "Scary Forest",
    page: "scary-forest",
    gif: "assets/projects/scary-forest.webp",
    status: { en: "Released", th: "เปิดให้เล่นแล้ว" },
    filter: "released",
    meta: "Roblox, '24",
    short: { en: "A round-based zombie survival game. Team up in the lobby and hold off zombie waves until the last player falls.",
             th: "เกมเอาชีวิตรอดจากซอมบี้แบบเป็นรอบ รวมทีมที่ล็อบบี้ แล้วต้านซอมบี้จนกว่าผู้เล่นคนสุดท้ายจะตาย" }, // games page card: 1-3 short sentences
    desc: {
      en: "A round-based zombie survival game. Players ready up in a lobby, get sent into the arena together, and hold off waves of zombies until the last one falls.",
      th: "เกมเอาชีวิตรอดจากซอมบี้แบบเป็นรอบ ผู้เล่นกดพร้อมที่ล็อบบี้ แล้วถูกส่งเข้าสนามพร้อมกัน ต้องสู้กับซอมบี้ที่บุกมาไม่หยุดจนกว่าคนสุดท้ายจะตาย",
    },
    team: { en: "Solo: design, scripting and level setup", th: "ทำคนเดียว: ออกแบบเกม เขียนสคริปต์ และจัดฉาก" },
    tags: ["Survival", "Zombies", "Round-based", "Multiplayer"],
    story: {
      about: { en: "A round-based zombie survival game, made for my school's Science Day. Players ready up in a lobby, get sent into the arena together, and hold off waves of zombies until the last one falls.",
        th: "เกมเอาชีวิตรอดจากซอมบี้แบบเป็นรอบ ทำขึ้นสำหรับงานวันวิทยาศาสตร์ของโรงเรียน ผู้เล่นกดพร้อมที่ล็อบบี้ ถูกส่งเข้าสนามพร้อมกัน แล้วต้องต้านซอมบี้ที่บุกมาจนกว่าคนสุดท้ายจะตาย" },
      did: { en: "I made it on my own: the game design, every script and the level setup. The lobby, the round flow, the zombie AI and the scoring are all mine.",
        th: "ผมทำคนเดียวทั้งหมด ทั้งออกแบบเกม เขียนสคริปต์ทุกตัว และจัดฉาก ระบบล็อบบี้ การดำเนินรอบ AI ซอมบี้ และการนับแต้ม เป็นงานของผมทั้งหมด" },
      devlog: { en: "One server-side flag drives each round: it opens the gates, teleports the teams and starts the spawner, which only runs while someone is still alive in the arena. When the last player dies, the round resets itself and the lobby counts down again.",
        th: "ค่าเดียวฝั่งเซิร์ฟเวอร์คุมทั้งรอบ ทั้งเปิดประตู วาร์ปทีม และเริ่มตัวปล่อยซอมบี้ ซึ่งทำงานเฉพาะตอนที่ยังมีคนรอดในสนาม เมื่อผู้เล่นคนสุดท้ายตาย รอบจะรีเซ็ตเองและล็อบบี้เริ่มนับถอยหลังใหม่" },
    },
    media: [
      { youtube: "XRyY2hqgXyk" },
      { image: "assets/projects/scary-forest.webp", thumb: "assets/projects/scary-forest/thumbs/clip.jpg" },
    ],
    points: [
      { en: "Lobby flow: ready pad, team switch, 10s countdown that cancels if players leave", th: "ระบบล็อบบี้: เหยียบจุดพร้อม เปลี่ยนทีม นับถอยหลัง 10 วิ ถ้าคนออกก็ยกเลิกเอง" },
      { en: "One server-side flag drives the round: opens gates, teleports teams, starts spawns", th: "ใช้ค่าเดียวฝั่งเซิร์ฟเวอร์คุมทั้งรอบ ทั้งเปิดประตู วาร์ปผู้เล่น และเริ่มปล่อยซอมบี้" },
      { en: "Zombie chase AI, plus a spawner that only runs while players are alive in the arena", th: "เขียน AI ซอมบี้ไล่ล่าผู้เล่น และระบบเกิดซอมบี้ที่ทำงานเฉพาะตอนยังมีคนรอดในสนาม" },
      { en: "Kill credit, points and high scores; the round resets when the last player dies", th: "นับคนฆ่า เก็บแต้มและสถิติสูงสุด รอบจะรีเซ็ตเองเมื่อผู้เล่นคนสุดท้ายตาย" },
    ],
    tech: ["Roblox Studio"],
    youtube: "XRyY2hqgXyk",
    link: { url: "https://www.roblox.com/games/18830002485", label: { en: "Play on Roblox", th: "เล่นบน Roblox" } },
  },
  {
    title: "Lumber Chopping System",
    page: "lumber-chopping-system",
    status: { en: "Live-coded", th: "ไลฟ์โค้ดสด" },
    filter: "etc",
    home: false, // games page only, not the home carousel
    meta: "Roblox, '26",
    short: { en: "A Lumber Tycoon-style system for chopping trees and splitting logs, coded live on stream.",
             th: "ระบบตัดต้นไม้และผ่าท่อนซุงแบบ Lumber Tycoon เขียนโค้ดสดระหว่างไลฟ์" }, // games page card: 1-3 short sentences
    desc: {
      en: "A log chopping and splitting system inspired by Lumber Tycoon on Roblox, coded by hand, live on stream.",
      th: "ระบบตัดไม้และผ่าท่อนซุงเป็นสองส่วน ได้แรงบันดาลใจจากเกม Lumber Tycoon บน Roblox เขียนโค้ดด้วยมือสดๆ ระหว่างไลฟ์",
    },
    team: { en: "Solo, coded live on stream", th: "ทำคนเดียว เขียนโค้ดสดระหว่างไลฟ์" },
    tags: ["System", "Live-coded", "Tycoon"],
    story: {
      about: { en: "A log chopping and splitting system in the style of Lumber Tycoon on Roblox: chop a tree down into logs, then split a log into two pieces right where you cut it.",
        th: "ระบบตัดไม้และผ่าท่อนซุงแบบเกม Lumber Tycoon บน Roblox ตัดต้นไม้ให้เป็นท่อนซุง แล้วผ่าท่อนซุงออกเป็นสองชิ้นตรงจุดที่ฟัน" },
      did: { en: "I wrote all of it by hand, live on stream, so every step of the build is on video. The highlight video shows the result; the playlist has the full streams.",
        th: "ผมเขียนโค้ดทั้งหมดด้วยมือสดๆ ระหว่างไลฟ์ ทุกขั้นตอนของการสร้างจึงมีวิดีโอให้ดู คลิปไฮไลต์แสดงผลลัพธ์ ส่วนเพลย์ลิสต์มีไลฟ์ทั้งหมด" },
      devlog: { en: "Built step by step on stream: first chopping trees into logs, then cutting a log at the exact point it was hit and splitting it into two pieces. Every hit leaves a cut mark where the axe landed.",
        th: "สร้างทีละขั้นระหว่างไลฟ์ เริ่มจากตัดต้นไม้เป็นท่อนซุง แล้วตัดท่อนซุงตรงจุดที่โดนฟันพอดีและแยกเป็นสองชิ้น ทุกครั้งที่ฟันจะเหลือรอยตรงจุดที่ขวานลง" },
    },
    points: [
      { en: "Chop trees down into logs", th: "ตัดต้นไม้ให้กลายเป็นท่อนซุง" },
      { en: "Split a log into two pieces at the point where it was cut", th: "ผ่าท่อนซุงออกเป็นสองชิ้นตรงจุดที่ฟัน" },
      { en: "Every step coded live: watch the whole build in the playlist", th: "เขียนสดทุกขั้นตอน ดูการสร้างทั้งหมดได้ในเพลย์ลิสต์" },
    ],
    tech: ["Roblox Studio"],
    youtube: "UQ5mK7B7lXY", // highlight edit; full streams are in the playlist link below
    link: { url: "https://www.youtube.com/playlist?list=PLKeO2w5a0nGY", label: { en: "Watch the full playlist", th: "ดูเพลย์ลิสต์ทั้งหมด" } },
  },
  // ----- Prototypes: unfinished projects (games page only, no picture yet = plain cover) -----
  {
    title: "Red Run",
    page: "red-run",
    status: { en: "Prototype", th: "ต้นแบบ" },
    filter: "prototype",
    home: false,
    meta: "Godot, '26",
    team: { en: "Solo", th: "ทำคนเดียว" },
    tags: ["Roguelite", "Puzzle", "Arcade", "Painting"],
    story: {
      about: { en: "A painting roguelite: place a brush, aim, and launch it so it ricochets around the canvas painting everything red. Better coverage pays more coins for upgrades between canvases, and every third canvas is an encounter with its own twist.",
        th: "เกมโร้กไลต์ระบายสี วางพู่กัน เล็ง แล้วยิงให้มันเด้งไปทั่วผ้าใบ ทาทุกอย่างให้เป็นสีแดง ยิ่งทาได้มากยิ่งได้เหรียญมากไว้ซื้ออัปเกรดระหว่างผ้าใบ และทุกผืนที่สามจะเป็นด่านพิเศษที่มีกติกาแปลกใหม่", more: true },
      did: { en: "I'm designing and building it with Claude Code as my AI coding partner, following a studio-style process: concept, a playable prototype, design review, then systems design.",
        th: "ผมกำลังออกแบบและสร้างเกมนี้โดยใช้ Claude Code เป็นผู้ช่วยเขียนโค้ด AI ทำตามขั้นตอนแบบสตูดิโอ: คอนเซปต์ ต้นแบบที่เล่นได้ รีวิวการออกแบบ แล้วจึงออกแบบระบบ" },
      learned: { en: "Prototype before designing the rest. The first draft was drag-to-paint with an ink budget and an all-or-nothing 100% goal; the prototype replaced both with aim-and-bounce and coverage tiers.",
        th: "ทำต้นแบบก่อนออกแบบส่วนที่เหลือ ร่างแรกเป็นการลากเมาส์ทาสีโดยมีหมึกจำกัดและต้องทาให้ครบ 100% เท่านั้น ต้นแบบเปลี่ยนทั้งสองอย่างเป็นการเล็งยิงให้เด้ง และให้รางวัลตามระดับพื้นที่ที่ทาได้" },
      devlog: { en: "Started November 2, 2026 in Godot 4.7: the project set up, the game concept written, a bounce-paint prototype built and tested, the concept approved, and an index of 19 systems drafted. It's now in systems design.",
        th: "เริ่มวันที่ 2 พฤศจิกายน 2569 ใน Godot 4.7: ตั้งโปรเจกต์ เขียนคอนเซปต์เกม สร้างและทดสอบต้นแบบระบบพู่กันเด้ง ผ่านการอนุมัติคอนเซปต์ และร่างรายการระบบ 19 ระบบ ตอนนี้อยู่ในขั้นออกแบบระบบ" },
    },
    short: { en: "A painting roguelite. Aim and launch a bouncing brush to paint each canvas red, then spend coins on upgrades.",
             th: "เกมโร้กไลต์ระบายสี เล็งแล้วยิงพู่กันที่เด้งไปมาให้ผ้าใบกลายเป็นสีแดง แล้วใช้เหรียญซื้ออัปเกรด" }, // games page card: 1-3 short sentences
    desc: {
      en: "A painting roguelite: place a brush, aim and launch it, and it ricochets around the canvas painting everything it touches. More coverage pays more coins for upgrades between canvases, and every third canvas is a special encounter with its own rule.",
      th: "เกมโร้กไลต์ระบายสี วางพู่กัน เล็ง แล้วยิงให้มันเด้งไปทั่วผ้าใบ ทาสีทุกอย่างที่โดน ยิ่งทาได้มากยิ่งได้เหรียญมากไว้ซื้ออัปเกรดระหว่างผ้าใบแต่ละผืน และทุกผืนที่สามจะเป็นด่านพิเศษที่มีกฎของตัวเอง",
    },
    points: [
      { en: "Game concept plus a playable bounce-paint prototype in Godot 4.7; the prototype test passed with a verdict to proceed", th: "มีคอนเซปต์เกมและต้นแบบระบบพู่กันเด้งที่เล่นได้ใน Godot 4.7 ผลทดสอบต้นแบบผ่าน ให้ไปต่อได้" },
      { en: "Pays out by coverage tier instead of pass/fail, with a bonus for every unused shot on a Perfect", th: "ให้รางวัลตามระดับพื้นที่ที่ทาได้แทนการผ่าน/ไม่ผ่าน และมีโบนัสทุกนัดที่เหลือเมื่อได้ Perfect" },
      { en: "Planned runs of 8 galleries (24 canvases), about 20–25 minutes each", th: "วางแผนให้หนึ่งรอบมี 8 แกลเลอรี (24 ผืน) ใช้เวลาประมาณ 20–25 นาที" },
    ],
    tech: ["Godot 4.7", "Git"],
  },
  {
    title: "Stawberry",
    page: "stawberry",
    status: { en: "Prototype", th: "ต้นแบบ" },
    filter: "prototype",
    home: false,
    meta: "Roblox, '26",
    team: { en: "Me on code, Kuduck on the map", th: "ผมทำโค้ด Kuduck ช่วยทำแผนที่" },
    tags: ["Tycoon", "Farming", "Simulator", "Multiplayer"],
    story: {
      about: { en: "A strawberry farming tycoon on Roblox. Buy seeds off a conveyor belt, plant and harvest them, refine the fruit at factories you place yourself, and hire NPC workers to run the farm for you.",
        th: "เกมฟาร์มสตรอว์เบอร์รีแนวไทคูนบน Roblox ซื้อเมล็ดจากสายพาน ปลูกแล้วเก็บเกี่ยว นำผลไปแปรรูปที่โรงงานที่วางเอง และจ้างคนงาน NPC มาดูแลฟาร์มแทน", more: true },
      did: { en: "I built the game's code with Claude Code as my AI coding partner, synced into Studio with Rojo, while Kuduck worked on the map. In 10 days it went from setup to factories, workers and an upgrade shop, then paused.",
        th: "ผมสร้างโค้ดของเกมโดยใช้ Claude Code เป็นผู้ช่วยเขียนโค้ด AI ซิงก์เข้า Studio ด้วย Rojo ส่วน Kuduck ช่วยทำแผนที่ ภายใน 10 วันเกมไปถึงโรงงาน คนงาน และร้านอัปเกรด ก่อนจะพักไว้" },
      learned: { en: "Keep the client and the server on the same rules: the planting preview runs the same placement code the server checks, so it can never promise a spot the server will refuse. And award first, destroy second, so a full backpack never eats a player's fruit.",
        th: "ให้ฝั่งผู้เล่นกับเซิร์ฟเวอร์ใช้กฎเดียวกัน ตัวแสดงตำแหน่งปลูกใช้โค้ดวางตำแหน่งชุดเดียวกับที่เซิร์ฟเวอร์ตรวจ จึงไม่มีทางบอกว่าปลูกได้ในจุดที่เซิร์ฟเวอร์ปฏิเสธ และต้องให้ของก่อนค่อยลบของ กระเป๋าที่เต็มจะได้ไม่กินผลไม้ของผู้เล่น", more: true },
      devlog: { en: "18 commits from August 5 to 14, 2026: the seed-to-sale loop on day one, then typed seeds on a belt, pies and a five-tier refining ladder, hireable NPC workers, levelled factories from a generator, and finally belt levels with a shop to buy them.",
        th: "18 commit ระหว่างวันที่ 5 ถึง 14 สิงหาคม 2569 วันแรกได้วงจรตั้งแต่เมล็ดจนขาย จากนั้นเมล็ดหลายชนิดบนสายพาน พายและสายการแปรรูป 5 ขั้น คนงาน NPC ที่จ้างได้ โรงงานเลเวลจากเครื่องสุ่ม และสุดท้ายเลเวลสายพานพร้อมร้านให้ซื้อ", more: true },
    },
    short: { en: "A Roblox strawberry farming tycoon. Buy seeds off a belt, plant and harvest, refine fruit into pies, and hire workers.",
             th: "เกมฟาร์มสตรอว์เบอร์รีแนวไทคูนบน Roblox ซื้อเมล็ดจากสายพาน ปลูกและเก็บเกี่ยว แปรรูปผลเป็นพาย และจ้างคนงาน" }, // games page card: 1-3 short sentences
    desc: {
      en: "A strawberry farming tycoon on Roblox. Buy seeds off a conveyor belt, plant and harvest them, then refine the fruit into pies at factories you place yourself, chained up a five-tier ladder. NPC workers can farm, refine and sell for you.",
      th: "เกมฟาร์มสตรอว์เบอร์รีแนวไทคูนบน Roblox ซื้อเมล็ดจากสายพาน ปลูกแล้วเก็บเกี่ยว จากนั้นนำผลไปแปรรูปเป็นพายที่โรงงานที่วางเอง ต่อเป็นสายการผลิต 5 ขั้น และจ้างคนงาน NPC ให้ปลูก แปรรูป และขายแทนได้",
    },
    points: [
      { en: "18 seed types come one at a time down a single-file belt, with belt levels to buy in a shop", th: "เมล็ด 18 ชนิดเลื่อนมาทีละเม็ดบนสายพาน และซื้อเลเวลสายพานเพิ่มได้ในร้าน" },
      { en: "Planting shows a disc under the cursor: green when the spot works, red with the reason when it doesn't", th: "ตอนปลูกมีวงกลมใต้เมาส์ สีเขียวคือปลูกได้ สีแดงจะบอกเหตุผลว่าทำไมปลูกไม่ได้" },
      { en: "Factories chain into a five-tier refining ladder; levelled factories drop from a per-player generator", th: "ต่อโรงงานเป็นสายการแปรรูป 5 ขั้น และสุ่มได้โรงงานเลเวลสูงจากเครื่องสุ่มของผู้เล่นแต่ละคน" },
      { en: "NPC workers, hired from a rotating pool, farm, refine and sell on their own", th: "คนงาน NPC ที่จ้างจากรายชื่อหมุนเวียน ช่วยปลูก แปรรูป และขายเองได้" },
    ],
    tech: ["Roblox Studio", "Rojo", "Git"],
    repo: "https://github.com/phunnnnnn/Stawberry",
  },
  {
    title: "Math Quiz",
    page: "math-quiz",
    status: { en: "Prototype", th: "ต้นแบบ" },
    filter: "prototype",
    home: false,
    meta: "Godot, '25",
    team: { en: "Solo", th: "ทำคนเดียว" },
    tags: ["Education", "Math", "Quiz"],
    story: {
      about: { en: "An addition quiz game: two numbers, an on-screen number pad, and two counting grids that picture both numbers. Five difficulties take you from 1 + 1 up to sums like 90 + 30.",
        th: "เกมควิซบวกเลข มีตัวเลขสองตัว แป้นตัวเลขบนจอ และตารางนับสองชุดที่แสดงตัวเลขทั้งสองเป็นภาพ ความยาก 5 ระดับพาตั้งแต่ 1 + 1 ไปจนถึงโจทย์อย่าง 90 + 30" },
      did: { en: "I wrote it on my own in Godot 4.5: the menu with game modes and difficulties, the quiz logic, keyboard and number pad input, and the counting grids.",
        th: "ผมเขียนคนเดียวใน Godot 4.5 ทั้งเมนูเลือกโหมดและความยาก ระบบควิซ การรับคำตอบจากคีย์บอร์ดและแป้นตัวเลข และตารางนับ" },
      devlog: { en: "Two scenes (menu and game) and a global script that carries the chosen mode, question count and difficulty between them. Started in December 2025, then rewritten and restructured in January 2026 into v0.1.",
        th: "มี 2 ฉาก (เมนูและเกม) และสคริปต์กลางที่ส่งโหมด จำนวนข้อ และความยากที่เลือกไว้ข้ามฉาก เริ่มทำเดือนธันวาคม 2568 แล้วเขียนใหม่และจัดโครงสร้างใหม่ในเดือนมกราคม 2569 จนเป็น v0.1" },
    },
    short: { en: "An addition quiz with counting grids that picture each number. Pick a difficulty from Easy to Nightmare, or go endless.",
             th: "เกมควิซบวกเลข มีตารางนับที่แสดงตัวเลขเป็นภาพ เลือกความยากตั้งแต่ Easy ถึง Nightmare หรือเล่นแบบไม่จำกัด" }, // games page card: 1-3 short sentences
    desc: {
      en: "An addition quiz game. Type the answer on an on-screen number pad or the keyboard while two counting grids picture both numbers. Difficulties run from Easy to Nightmare with bigger numbers, in a set-length or an endless mode.",
      th: "เกมควิซบวกเลข พิมพ์คำตอบด้วยแป้นตัวเลขบนจอหรือคีย์บอร์ด โดยมีตารางนับ 2 ชุดแสดงตัวเลขทั้งสองเป็นภาพ ความยากมีตั้งแต่ Easy ถึง Nightmare ที่ตัวเลขใหญ่ขึ้น เล่นแบบกำหนดจำนวนข้อหรือแบบไม่จำกัดก็ได้",
    },
    points: [
      { en: "5 difficulties (Play, Easy, Normal, Hard, Nightmare), each with its own number ranges, up to 90 + 30", th: "ความยาก 5 ระดับ (Play, Easy, Normal, Hard, Nightmare) แต่ละระดับมีช่วงตัวเลขของตัวเอง สูงสุดถึง 90 + 30" },
      { en: "Set-length mode with the number of questions you choose, or Endless", th: "โหมดเลือกจำนวนข้อได้เอง หรือโหมด Endless ไม่จำกัด" },
      { en: "Answer with the on-screen number pad or the keyboard", th: "ตอบได้ทั้งแป้นตัวเลขบนจอและคีย์บอร์ด" },
    ],
    tech: ["Godot 4.5", "Git"],
    repo: "https://github.com/phunnnnnn/is-project",
  },
  {
    title: "Ballon",
    page: "ballon",
    status: { en: "Prototype", th: "ต้นแบบ" },
    filter: "prototype",
    home: false,
    meta: "Godot, '25",
    tags: ["Clicker", "Arcade", "Upgrades"],
    story: {
      about: { en: "A balloon-popping clicker. Click balloons for gold, keep your combo alive to multiply every pop, and hunt elite balloons that pay more.",
        th: "เกมคลิกเกอร์ป๊อปลูกโป่ง คลิกลูกโป่งเพื่อเก็บทอง รักษาคอมโบไว้เพื่อคูณเงินทุกครั้งที่ป๊อป และตามล่าลูกโป่งพิเศษที่ให้เงินมากกว่า" },
      did: { en: "I wrote all the code in Godot 4.5: balloon spawning, the combo and its decay timer, the reward formula, the money display and the upgrade system.",
        th: "ผมเขียนโค้ดทั้งหมดใน Godot 4.5 ทั้งการเกิดลูกโป่ง คอมโบและตัวจับเวลาที่ทำให้คอมโบหาย สูตรคำนวณรางวัล การแสดงเงิน และระบบอัปเกรด" },
      devlog: { en: "Two autoloads hold the game's state: one for values like money, combo and upgrade levels, one for the data tables every upgrade levels up from, so adding an upgrade is a data change. Five commits in November 2025, up to v0.1.1.",
        th: "มี autoload 2 ตัวเก็บสถานะของเกม ตัวหนึ่งเก็บค่าอย่างเงิน คอมโบ และเลเวลอัปเกรด อีกตัวเก็บตารางข้อมูลที่อัปเกรดทุกตัวใช้ การเพิ่มอัปเกรดจึงเป็นแค่การเพิ่มข้อมูล 5 commit ในเดือนพฤศจิกายน 2568 จนถึง v0.1.1" },
    },
    short: { en: "A clicker where you pop balloons for gold. Build combos, then spend the gold on upgrades that make balloons pay more.",
             th: "เกมคลิกเกอร์ป๊อปลูกโป่งเพื่อเก็บทอง ต่อคอมโบให้ยาว แล้วใช้ทองซื้ออัปเกรดให้ลูกโป่งให้เงินมากขึ้น" }, // games page card: 1-3 short sentences
    desc: {
      en: "A balloon-popping clicker. Every pop pays gold, multiplied by your combo and by rarer elite balloons, and the combo drains away if you stop clicking. Gold buys upgrades that make balloons come faster and pay more.",
      th: "เกมคลิกเกอร์ป๊อปลูกโป่ง ทุกครั้งที่ป๊อปจะได้ทอง คูณด้วยคอมโบและลูกโป่งพิเศษที่หายากกว่า ถ้าหยุดคลิกคอมโบจะค่อยๆ หายไป ใช้ทองซื้ออัปเกรดให้ลูกโป่งมาเร็วขึ้นและให้เงินมากขึ้น",
    },
    points: [
      { en: "Each pop pays upgrade rate × combo × balloon type, with a combo cap and a decay timer", th: "ทุกครั้งที่ป๊อปได้เงินเท่ากับ อัตราอัปเกรด × คอมโบ × ชนิดลูกโป่ง มีเพดานคอมโบและตัวจับเวลาที่ทำให้คอมโบหาย" },
      { en: "8 upgrade types, like Inflation Rate, Combo Pressure, Elite Balloons and Chain Reaction, levelled from one data table", th: "อัปเกรด 8 แบบ เช่น Inflation Rate, Combo Pressure, Elite Balloons และ Chain Reaction อัปเลเวลจากตารางข้อมูลเดียว" },
      { en: "Stopped at v0.1.1 in November 2025", th: "หยุดพัฒนาที่เวอร์ชัน 0.1.1 เมื่อ พ.ย. 2568" },
    ],
    tech: ["Godot 4.5", "Git"],
    repo: "https://github.com/phunnnnnn/ballon-game-project",
  },
  {
    title: "Harvest the Dept",
    page: "harvest-the-dept",
    status: { en: "Prototype", th: "ต้นแบบ" },
    filter: "prototype",
    home: false,
    meta: "Godot, '25",
    tags: ["Farming", "Simulation", "Drag and drop"],
    story: {
      about: { en: "A farming game made for my IS subject. Drag a seed bag onto a pot to plant it, press Next Day, and watch it grow stage by stage into a full sunflower.",
        th: "เกมปลูกพืชที่ทำในวิชา IS ลากถุงเมล็ดไปวางบนกระถางเพื่อปลูก กด Next Day แล้วดูมันโตทีละขั้นจนเป็นดอกทานตะวันเต็มดอก" },
      did: { en: "I wrote the code in Godot 4.4: drag and drop with a selection box, the pots and their growth stages, the day system and the item data.",
        th: "ผมเขียนโค้ดใน Godot 4.4 ทั้งการลากวางพร้อมกรอบเลือก กระถางและขั้นการเติบโต ระบบวัน และข้อมูลไอเทม" },
      devlog: { en: "It started as NSC (March–June 2025): drag-and-drop pots, watering and a garden grid. In July 2025 I started over as Harvest the Dept with a cleaner structure: global data tables for pots, seeds and plants, and a Next Day event every pot listens to.",
        th: "เริ่มจาก NSC (มีนาคม–มิถุนายน 2568): ลากวางกระถาง รดน้ำ และตารางแปลงปลูก เดือนกรกฎาคม 2568 ผมเริ่มใหม่เป็น Harvest the Dept ด้วยโครงสร้างที่เป็นระเบียบกว่า: ตารางข้อมูลกลางของกระถาง เมล็ด และพืช และอีเวนต์วันใหม่ที่ทุกกระถางรอฟัง", more: true },
    },
    short: { en: "A farming game made for my IS subject. Drag seeds into pots, press Next Day, and watch the sunflowers grow.",
             th: "เกมปลูกพืชที่ทำในวิชา IS ลากเมล็ดใส่กระถาง กด Next Day แล้วดูดอกทานตะวันค่อยๆ โต" }, // games page card: 1-3 short sentences
    desc: {
      en: "A farming game started for my IS subject. Drag a seed bag onto a pot to plant it, then end the day and the plant grows a stage at a time into a full sunflower. It grew out of NSC, an earlier garden prototype with pots, watering and a garden grid.",
      th: "เกมปลูกพืชที่เริ่มทำในวิชา IS ลากถุงเมล็ดไปวางบนกระถางเพื่อปลูก แล้วกดจบวัน พืชจะโตขึ้นทีละขั้นจนเป็นดอกทานตะวันเต็มดอก พัฒนาต่อมาจาก NSC ต้นแบบสวนก่อนหน้านี้ที่มีกระถาง การรดน้ำ และตารางแปลงปลูก",
    },
    points: [
      { en: "Drag and drop seed bags onto pots, with a drag-select box and a debug view on the P key", th: "ลากถุงเมล็ดไปวางบนกระถาง มีกรอบลากเลือก และกด P เพื่อเปิดโหมดดีบัก" },
      { en: "A day counter and a Next Day event that grows every planted pot through its stages", th: "ตัวนับวันและปุ่ม Next Day ที่ทำให้ทุกกระถางที่ปลูกไว้โตขึ้นตามขั้น" },
      { en: "Pots, seeds and plants live in one global data table, so a new plant is just a new entry", th: "ข้อมูลกระถาง เมล็ด และพืช อยู่ในตารางกลางเดียว เพิ่มพืชใหม่ได้แค่เพิ่มข้อมูล" },
      { en: "Earlier version, NSC (Mar–Jun 2025): drag-and-drop pots, watering and a garden grid", th: "เวอร์ชันก่อนหน้า NSC (มี.ค.–มิ.ย. 2568): ลากวางกระถาง รดน้ำ และตารางแปลงปลูก" },
    ],
    tech: ["Godot 4.4", "Git"],
    repo: ["https://github.com/phunnnnnn/Harvest-the-dept-project-IS", "https://github.com/phunnnnnn/NSC"],
  },
  {
    title: "GameClick",
    page: "gameclick",
    status: { en: "Prototype", th: "ต้นแบบ" },
    filter: "prototype",
    home: false,
    meta: "Godot, '25",
    tags: ["Clicker", "Arcade", "Upgrades"],
    story: {
      about: { en: "A clicker against a 5-minute clock. Click for money while a bomb clicks for you on a timer and keeps getting stronger, and pick upgrade cards from a shop you can reroll.",
        th: "เกมคลิกเกอร์แข่งกับเวลา 5 นาที คลิกหาเงินระหว่างที่ระเบิดช่วยคลิกให้ตามเวลาและแรงขึ้นเรื่อยๆ แล้วเลือกการ์ดอัปเกรดจากร้านที่สุ่มใหม่ได้" },
      did: { en: "I wrote it on my own in Godot 4.4, in three days: the start menu, the clicking and live stats, the bomb, and the upgrade shop.",
        th: "ผมเขียนคนเดียวใน Godot 4.4 ภายใน 3 วัน ทั้งเมนูเริ่ม ระบบคลิกและสถิติสด ระเบิด และร้านอัปเกรด" },
      devlog: { en: "Three scenes (start menu, main game, upgrade card) and a global game state the upgrade cards change. Day one was the base game, day two the shop and start menu, day three the upgrades.",
        th: "มี 3 ฉาก (เมนูเริ่ม เกมหลัก การ์ดอัปเกรด) และสถานะเกมกลางที่การ์ดอัปเกรดเข้าไปเปลี่ยน วันแรกทำเกมพื้นฐาน วันที่สองทำร้านและเมนูเริ่ม วันที่สามทำอัปเกรด" },
    },
    short: { en: "A 5-minute clicker. Click for money, let a bomb click for you, and pick upgrades from a shop you can reroll.",
             th: "เกมคลิกเกอร์ 5 นาที คลิกหาเงิน ให้ระเบิดช่วยคลิกแทน และเลือกอัปเกรดจากร้านที่สุ่มใหม่ได้" }, // games page card: 1-3 short sentences
    desc: {
      en: "A clicker played against a 5-minute clock. Click for money while a bomb clicks for you on a timer and gets stronger over time, and pick upgrade cards, like more power per click, from a shop you can reroll.",
      th: "เกมคลิกเกอร์แข่งกับเวลา 5 นาที คลิกเพื่อหาเงิน ระหว่างนั้นระเบิดจะคลิกให้อัตโนมัติตามเวลาและแรงขึ้นเรื่อยๆ และเลือกการ์ดอัปเกรด เช่น เพิ่มพลังต่อคลิก จากร้านที่กดสุ่มใหม่ได้",
    },
    points: [
      { en: "Start menu, main game and upgrade shop as separate scenes", th: "แยกฉากเมนูเริ่ม เกมหลัก และร้านอัปเกรด" },
      { en: "Live stats: clicks, clicks per minute, mouse power and bomb power", th: "แสดงสถิติสด: จำนวนคลิก คลิกต่อนาที พลังเมาส์ และพลังระเบิด" },
      { en: "Made in 3 days (June 14–16, 2025)", th: "ทำเสร็จใน 3 วัน (14–16 มิ.ย. 2568)" },
    ],
    tech: ["Godot 4.4", "Git"],
    repo: "https://github.com/phunnnnnn/GameClick",
  },
];

// ===== Certificates data =====
// Shown in this order. Images live in assets/certs/{thumb,full}/<file>.jpg;
// `tag`/`title`/`meta` are bilingual, `badge` (optional) shows a medal ribbon.
const certData = [
  {
    file: "posn-camp2",
    tag: { en: "Olympiad", th: "โอลิมปิกวิชาการ" },
    title: { en: "POSN Computer Science, Camp 2", th: "สอวน. คอมพิวเตอร์ ค่าย 2" },
    meta: { en: "Faculty of Science, CMU · Mar–Apr 2026", th: "คณะวิทยาศาสตร์ ม.เชียงใหม่ · มี.ค.–เม.ย. 2569" },
  },
  {
    file: "posn-camp1",
    tag: { en: "Olympiad", th: "โอลิมปิกวิชาการ" },
    title: { en: "POSN Computer Science, Camp 1", th: "สอวน. คอมพิวเตอร์ ค่าย 1" },
    meta: { en: "Yupparaj Wittayalai Center · Oct 2024", th: "ศูนย์ ร.ร.ยุพราชวิทยาลัย · ต.ค. 2567" },
  },
  {
    file: "camt-gamedev-2026",
    tag: { en: "Game Dev", th: "พัฒนาเกม" },
    title: { en: "Game Development with Unreal Engine", th: "การพัฒนาเกมด้วย Unreal Engine" },
    meta: { en: "CAMT Summer Course 2026, CMU · May 2026", th: "CAMT Summer Course 2026, ม.เชียงใหม่ · พ.ค. 2569" },
  },
  {
    file: "gold-programming-2025",
    badge: { kind: "gold", en: "🥇 1st Place", th: "🥇 ชนะเลิศ" },
    tag: { en: "Gold Medal", th: "เหรียญทอง" },
    title: { en: "Computer Programming, Gold Medal, 1st Place", th: "การเขียนโปรแกรมคอมพิวเตอร์ เหรียญทอง ชนะเลิศ" },
    meta: { en: "73rd Regional Academic Fair, Chiang Rai · Sep 2025", th: "ศิลปหัตถกรรมฯ ครั้งที่ 73 ระดับเขต เชียงราย · ก.ย. 2568" },
  },
  {
    file: "gold-robotics-2024",
    badge: { kind: "gold", en: "🥇 Gold", th: "🥇 ทอง" },
    tag: { en: "Gold Medal", th: "เหรียญทอง" },
    title: { en: "Robotics (Intermediate), Gold Medal, 2nd Runner-up", th: "การแข่งขันหุ่นยนต์ระดับกลาง เหรียญทอง รองชนะเลิศอันดับ 2" },
    meta: { en: "72nd Regional Academic Fair, Chiang Rai · Sep 2024", th: "ศิลปหัตถกรรมฯ ครั้งที่ 72 ระดับเขต เชียงราย · ก.ย. 2567" },
  },
  {
    file: "silver-programming-2024",
    badge: { kind: "silver", en: "🥈 Silver", th: "🥈 เงิน" },
    tag: { en: "Silver Medal", th: "เหรียญเงิน" },
    title: { en: "Computer Programming, Silver Medal, 2nd Runner-up", th: "การเขียนโปรแกรมคอมพิวเตอร์ เหรียญเงิน รองชนะเลิศอันดับ 2" },
    meta: { en: "72nd Regional Academic Fair, Chiang Rai · Sep 2024", th: "ศิลปหัตถกรรมฯ ครั้งที่ 72 ระดับเขต เชียงราย · ก.ย. 2567" },
  },
  {
    file: "mfu-hackathon-honorable",
    tag: { en: "Hackathon", th: "แฮกกาธอน" },
    title: { en: "Hackathon (Team), Honorable Mention", th: "แฮกกาธอน (ทีม) รางวัลชมเชย" },
    meta: { en: "ADT Open Space 2025, MFU · 2025", th: "ADT Open Space 2025, ม.แม่ฟ้าหลวง · 2568" },
  },
  {
    file: "boardgame-instructor-2025",
    tag: { en: "Instructor", th: "วิทยากร" },
    title: { en: "Science Day Board Game, Station Instructor", th: "วันวิทยาศาสตร์ บอร์ดเกม วิทยากรประจำฐาน" },
    meta: { en: "Damrongratsongkroh School · Aug 2025", th: "ร.ร.ดำรงราษฎร์สงเคราะห์ · ส.ค. 2568" },
  },
  {
    file: "ccru-esport-2024",
    tag: { en: "Workshop", th: "อบรม" },
    title: { en: "e-Sport (VALORANT) Workshop", th: "อบรม e-Sport (VALORANT)" },
    meta: { en: "Innovation Day 2024, CRRU · Jul 2024", th: "Innovation Day 2024, ม.ราชภัฏเชียงราย · ก.ค. 2567" },
  },
];
