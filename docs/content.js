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
//   • Save the file and the page reloads by itself (when the local
//     server is running).
// =====================================================================

// ===== Translations (EN / TH) =====
const translations = {
  en: {
    "nav.work": "Work",
    "nav.info": "Info",
    "nav.role": "Game Developer",
    "hero.headline": 'I code, debug,\nimprove &amp; build <em class="serif">games.</em>',
    "about.kicker": "01 / About",
    "about.title": "A little about me",
    "about.p1": "I'm Phunn, a freelance game developer, currently focused on the Roblox platform.",
    "about.p2": "The project I'm working on right now is AutoBlox, a game inspired by\nRiot's TFT.\nI'm always exploring new ideas and happy to take on freelance work.",
    "about.factName": "Name",
    "about.factNameVal": "Pannatat Chaikaew",
    "about.factNick": "Nickname",
    "about.factNickVal": "Phunn",
    "about.factWork": "Freelance",
    "about.factWorkVal": "Available for hire",
    "projects.title": "Things I've built",
    "certs.title": "Certificates",
    "certs.lead": "Highlights from competitions, camps, and workshops.\nUse the arrows or swipe. Click the middle one to view it full size.",
    "contact.title": 'Let\'s make <em class="serif">games</em> together.',
    "contact.lead": "Want to hire me or just chat about a project?\nReach out through any of these, I'm always happy to hear from you.",
    "contact.hire": "Hire me on Fastwork",
  },
  th: {
    "nav.work": "ผลงาน",
    "nav.info": "ข้อมูล",
    "nav.role": "นักพัฒนาเกม",
    "hero.headline": 'ผม เขียนโค้ด แก้บัค\nปรับปรุง พัฒนา <em class="serif">เกม</em>',
    "about.kicker": "01 / เกี่ยวกับ",
    "about.title": "เกี่ยวกับผม",
    "about.p1": "ผมชื่อปุณณ์ เป็นฟรีแลนส์สายสร้างเกม โดยตอนนี้แน่นไปที่แพลตฟอร์ม Roblox ",
    "about.p2": "โปรเจกต์ที่ผมกำลังทำตอนนี้คือ AutoBlox เป็นเกมที่ได้รับแรงบันดาลใจมาจาก\nTFT ของ riot ครับ \nผมชอบมองหาไอเดียใหม่ ๆ อยู่เสมอ และยินดีรับงานฟรีแลนซ์",
    "about.factName": "ชื่อ",
    "about.factNameVal": "ปัณณทัต ไชยแก้ว",
    "about.factNick": "ชื่อเล่น",
    "about.factNickVal": "ปุณณ์",
    "about.factWork": "ฟรีแลนซ์",
    "about.factWorkVal": "รับงาน",
    "projects.title": "ผลงาน",
    "certs.title": "เกียรติบัตร",
    "certs.lead": "ผลงานจากการแข่งขัน ค่าย และการอบรม\nกดลูกศรหรือปัดได้เลย คลิกภาพตรงกลางเพื่อดูขนาดเต็ม",
    "contact.title": 'มาสร้าง <em class="serif">เกม</em> กันเถอะ',
    "contact.lead": "อยากจ้างงานหรือแค่อยากคุยเรื่องโปรเจกต์ ?\nติดต่อผมได้ทุกช่องทางเลยครับ ผมยินดีเสมอ",
    "contact.hire": "จ้างผมผ่าน Fastwork",
  },
};

// ===== Projects =====
// Shown in this order. To add a project, copy one { ... } block, paste it
// below, and change the text. Fields:
//   youtube: the video id (the part after "watch?v=" in the YouTube link)
//   playlist: optional playlist id (after "list=") — the player then shows the
//            whole playlist; youtube: is still needed for the cover picture
//   image:   use instead of youtube, e.g. "assets/projects/mygame.jpg"
//   link:    optional button, e.g. { url: "https://...", label: { en: "Play on Roblox", th: "เล่นบน Roblox" } }
const projectData = [
  {
    title: "Help Your Waifu",
    status: { en: "Released", th: "เปิดให้เล่นแล้ว" },
    meta: "Roblox, '26",
    desc: {
      en: "An anime collecting simulator. Run a randomly generated obby to grab mystery waifus, carry them home to your base, and they earn cash for you, even while you're offline. Harder levels hide rarer waifus.",
      th: "เกมซิมูเลเตอร์สะสมสาวอนิเมะ วิ่งฝ่าด่าน obby ที่สุ่มสร้างใหม่เพื่อเก็บ waifu ปริศนา แบกกลับบ้าน แล้วเธอจะช่วยหาเงินให้ แม้ตอนคุณออฟไลน์ ยิ่งด่านยากยิ่งเจอตัวหายาก",
    },
    role: { en: "Duo project · I made the code and UI, my friend handles game design & level design",
            th: "ทำกัน 2 คน · ผมเขียนโค้ดและทำ UI เพื่อนดูแลการออกแบบเกมและออกแบบด่าน" },
    points: [
      { en: "Procedural obby rebuilt every 5 minutes from hand-built pieces across 8 difficulty levels, with no repeated pieces in a lane", th: "ด่าน obby สุ่มสร้างใหม่ทุก 5 นาทีจากชิ้นส่วนที่ออกแบบไว้ 8 ระดับความยาก ไม่มีชิ้นซ้ำในเลนเดียวกัน" },
      { en: "The server checks everything: every remote is validated, and speed and distance checks stop teleport and pickup exploits", th: "เซิร์ฟเวอร์เป็นตัวตัดสิน ตรวจทุก remote มีเช็คความเร็วและระยะ กันการวาร์ปและโกงเก็บตัวละคร" },
      { en: "Full monetization: game passes, dev products and lootboxes with a shared server stock, following Roblox's paid random item policy", th: "ระบบหารายได้ครบ: game pass, dev product และกล่องสุ่มที่ใช้สต็อกร่วมกันทั้งเซิร์ฟเวอร์ ทำตามนโยบายไอเทมสุ่มแบบเสียเงินของ Roblox" },
      { en: "~57 Luau files (~11K lines), ProfileStore saves with offline earnings, plus a live admin panel with a save editor", th: "โค้ด Luau ~57 ไฟล์ (~11,000 บรรทัด) เซฟด้วย ProfileStore มีรายได้ตอนออฟไลน์ และแผงแอดมินที่แก้เซฟผู้เล่นได้สด" },
    ],
    tech: ["Roblox Studio", "Luau", "Rojo", "ProfileStore", "Git"],
    image: "assets/projects/help-your-waifu.jpg",
    link: { url: "https://www.roblox.com/games/88467181439547/Help-your-waifu", label: { en: "Play on Roblox", th: "เล่นบน Roblox" } },
  },
  {
    title: "Lost Dept",
    meta: "Godot, '26",
    desc: {
      en: "An underwater wave-survival game. You play a diver who can't fight: sweep your mouse over kelp to earn money, then spend it between waves on pet fish that fight for you.",
      th: "เกมเอาชีวิตรอดเป็นเวฟใต้ทะเล ผู้เล่นเป็นนักดำน้ำที่ต่อสู้เองไม่ได้ ต้องลากเมาส์ผ่านสาหร่ายเพื่อหาเงิน แล้วใช้เงินนั้นซื้อปลาเลี้ยงที่ช่วยต่อสู้แทนในช่วงพักระหว่างเวฟ",
    },
    points: [
      { en: "20 pets in 5 rarities, from Common to Legendary, each with its own skill: stunning chain lightning, a shockwave, an ice freeze that shatters", th: "สัตว์เลี้ยง 20 ตัวใน 5 ระดับความหายาก ตั้งแต่ Common ถึง Legendary แต่ละตัวมีสกิลของตัวเอง เช่น สายฟ้าลูกโซ่ที่ทำให้ศัตรูมึน คลื่นกระแทก หรือการแช่แข็งที่แตกเป็นน้ำแข็ง" },
      { en: "Every round ends with one of 5 bosses, each with a Soul Knight-style intro card and readable attacks", th: "ทุกรอบจบด้วยบอส 1 ใน 5 ตัว แต่ละตัวมีฉากเปิดตัวแบบ Soul Knight และท่าโจมตีที่อ่านออกได้" },
      { en: "Central event system for sound and screen effects, 15 automated tests and a bot that plays the game to balance it", th: "ระบบ event กลางสำหรับเสียงและเอฟเฟกต์หน้าจอ มีเทสอัตโนมัติ 15 ชุด และบอทที่เล่นเกมเองเพื่อใช้ปรับสมดุล" },
    ],
    tech: ["Godot 4.7", "GDScript", "Pixel Art"],
    youtube: "pFsGzg_bJ8Y",
    link: { url: "https://phunn.itch.io/lost-dept", label: { en: "Play on itch.io", th: "เล่นบน itch.io" } },
  },
  {
    title: "AutoBlox",
    status: { en: "In development", th: "กำลังพัฒนา" },
    meta: "Roblox, '26",
    desc: { en: "A multiplayer auto-battler inspired by Teamfight Tactics. Draft units from a shared shop, build trait synergies and items, then watch your army fight other players in real time.",
            th: "เกม auto-battler แบบผู้เล่นหลายคน ได้แรงบันดาลใจจาก Teamfight Tactics ซื้อตัวละครจากร้านค้าที่ทุกคนใช้ร่วมกัน จัดทีมให้เข้าคอมโบ ประกอบไอเทม แล้วดูกองทัพของคุณสู้กับผู้เล่นคนอื่นแบบเรียลไทม์" },
    role: { en: "Duo project · I wrote all the code, my partner handles design & balance",
            th: "ทำกัน 2 คน · ผมเขียนโค้ดทั้งหมด เพื่อนดูแลดีไซน์และบาลานซ์" },
    points: [
      { en: "Server-side combat simulation, clients just draw the fight, so nobody can cheat", th: "ระบบต่อสู้คำนวณฝั่งเซิร์ฟเวอร์ ฝั่งผู้เล่นแค่แสดงผล จึงโกงไม่ได้" },
      { en: "Real-time combat engine: abilities with wind-up, crowd control, items mid-fight", th: "เอนจินต่อสู้แบบเรียลไทม์: สกิลมีจังหวะร่าย, ควบคุมฝูงชน (CC), ใส่ไอเทมระหว่างสู้ได้" },
      { en: "Lobby + match servers, create/join rooms by code or Quick Play", th: "แยกเซิร์ฟเวอร์ล็อบบี้กับเซิร์ฟเวอร์แมตช์ สร้าง/เข้าห้องด้วยโค้ด หรือ Quick Play" },
      { en: "~115 Luau files, data-driven units, traits & items", th: "โค้ด Luau ~115 ไฟล์ ตัวละคร คอมโบ และไอเทมกำหนดเป็นข้อมูล เพิ่มเนื้อหาใหม่ได้ง่าย" },
    ],
    tech: ["Roblox Studio", "Luau", "Rojo", "Git"],
    youtube: "61VS6Pz__ZM",
  },
  {
    title: "Scary Forest",
    status: { en: "Released", th: "เปิดให้เล่นแล้ว" },
    meta: "Roblox, '24",
    desc: {
      en: "A round-based zombie survival game. Players ready up in a lobby, get sent into the arena together, and hold off waves of zombies until the last one falls.",
      th: "เกมเอาชีวิตรอดจากซอมบี้แบบเป็นรอบ ผู้เล่นกดพร้อมที่ล็อบบี้ แล้วถูกส่งเข้าสนามพร้อมกัน ต้องสู้กับซอมบี้ที่บุกมาไม่หยุดจนกว่าคนสุดท้ายจะตาย",
    },
    role: { en: "Solo project · design, scripting and level setup", th: "ทำคนเดียว · ออกแบบเกม เขียนสคริปต์ และจัดฉาก" },
    points: [
      { en: "Lobby flow: ready pad, team switch, 10s countdown that cancels if players leave", th: "ระบบล็อบบี้: เหยียบจุดพร้อม เปลี่ยนทีม นับถอยหลัง 10 วิ ถ้าคนออกก็ยกเลิกเอง" },
      { en: "One server-side flag drives the round: opens gates, teleports teams, starts spawns", th: "ใช้ค่าเดียวฝั่งเซิร์ฟเวอร์คุมทั้งรอบ ทั้งเปิดประตู วาร์ปผู้เล่น และเริ่มปล่อยซอมบี้" },
      { en: "Zombie chase AI, plus a spawner that only runs while players are alive in the arena", th: "เขียน AI ซอมบี้ไล่ล่าผู้เล่น และระบบเกิดซอมบี้ที่ทำงานเฉพาะตอนยังมีคนรอดในสนาม" },
      { en: "Kill credit, points and high scores; the round resets when the last player dies", th: "นับคนฆ่า เก็บแต้มและสถิติสูงสุด รอบจะรีเซ็ตเองเมื่อผู้เล่นคนสุดท้ายตาย" },
    ],
    tech: ["Roblox Studio", "Luau"],
    youtube: "XRyY2hqgXyk",
    link: { url: "https://www.roblox.com/games/18830002485", label: { en: "Play on Roblox", th: "เล่นบน Roblox" } },
  },
  {
    title: "Lumber Chopping System",
    status: { en: "Live-coded", th: "ไลฟ์โค้ดสด" },
    meta: "Roblox, '26",
    desc: {
      en: "A log chopping and splitting system inspired by Lumber Tycoon on Roblox, coded by hand, live on stream.",
      th: "ระบบตัดไม้และผ่าท่อนซุงเป็นสองส่วน ได้แรงบันดาลใจจากเกม Lumber Tycoon บน Roblox เขียนโค้ดด้วยมือสดๆ ระหว่างไลฟ์",
    },
    role: { en: "Solo project · all scripting, streamed live", th: "ทำคนเดียว · เขียนโค้ดทั้งหมด ถ่ายทอดสด" },
    points: [
      { en: "Chop trees down into logs", th: "ตัดต้นไม้ให้กลายเป็นท่อนซุง" },
      { en: "Split a log into two pieces at the point where it was cut", th: "ผ่าท่อนซุงออกเป็นสองชิ้นตรงจุดที่ฟัน" },
      { en: "Every step coded live: watch the whole build in the playlist", th: "เขียนสดทุกขั้นตอน ดูการสร้างทั้งหมดได้ในเพลย์ลิสต์" },
    ],
    tech: ["Roblox Studio", "Luau"],
    youtube: "UQ5mK7B7lXY", // highlight edit; full streams are in the playlist link below
    link: { url: "https://www.youtube.com/playlist?list=PLKeO2w5a0nGY", label: { en: "Watch the full playlist", th: "ดูเพลย์ลิสต์ทั้งหมด" } },
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
