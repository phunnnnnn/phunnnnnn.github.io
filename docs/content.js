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
    "hero.headline": 'I build games,\nsystems &amp; <em class="serif">worlds.</em>',
    "about.kicker": "01 / About",
    "about.title": "A little about me",
    "about.p1": "I'm Phunn — a freelance game developer, currently focused on the Roblox platform.",
    "about.p2": "The project I'm working on right now is AutoBlox — a game inspired by\nRiot's TFT.\nI'm always exploring new ideas and happy to take on freelance work.",
    "about.factName": "Name",
    "about.factNameVal": "Pannatat Chaikaew",
    "about.factNick": "Nickname",
    "about.factNickVal": "Phunn",
    "about.factWork": "Freelance",
    "about.factWorkVal": "Available for hire",
    "projects.title": "Things I've built",
    "projects.autobloxTag": "In development",
    "projects.autobloxDesc": "An auto-battler game inspired by Riot's TFT. Build your team, place it on the board, and watch the fight play out.",
    "certs.title": "Certificates",
    "certs.lead": "Highlights from competitions, camps, and workshops. Use the arrows or swipe. Click the middle one to view it full size.",
    "contact.title": 'Let\'s build <em class="serif">something.</em>',
    "contact.lead": "Want to hire me or just chat about a project? Reach out through any of these — I'm always happy to hear from you.",
    "contact.hire": "Hire me on Fastwork",
  },
  th: {
    "nav.work": "ผลงาน",
    "nav.info": "ข้อมูล",
    "nav.role": "นักพัฒนาเกม",
    "hero.headline": 'เขียนโค้ด แก้บัค ปรับปรุง พัฒนา <em class="serif">เกม</em>',
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
    "projects.autobloxTag": "กำลังพัฒนา",
    "projects.autobloxDesc": "เกมแนว auto-battler ที่ได้แรงบันดาลใจจาก TFT ของ Riot จัดทีม วางตัวบนกระดาน แล้วดูการต่อสู้",
    "certs.title": "เกียรติบัตร",
    "certs.lead": "ผลงานจากการแข่งขัน ค่าย และการอบรม กดลูกศรหรือปัดได้เลย คลิกภาพตรงกลางเพื่อดูขนาดเต็มครับ",
    "contact.title": 'มาสร้าง <em class="serif">อะไรสักอย่าง</em> กัน',
    "contact.lead": "อยากจ้างงานหรือแค่อยากคุยเรื่องโปรเจกต์ ?ติดต่อผมได้ทุกช่องทางเลยครับผมยินดีเสมอ",
    "contact.hire": "จ้างผมผ่าน Fastwork",
  },
};

// ===== Certificates data =====
// Shown in this order. Images live in assets/certs/{thumb,full}/<file>.jpg;
// `tag`/`title`/`meta` are bilingual, `badge` (optional) shows a medal ribbon.
const certData = [
  {
    file: "posn-camp2",
    tag: { en: "Olympiad", th: "โอลิมปิกวิชาการ" },
    title: { en: "POSN Computer Science — Camp 2", th: "สอวน. คอมพิวเตอร์ — ค่าย 2" },
    meta: { en: "Faculty of Science, CMU · Mar–Apr 2026", th: "คณะวิทยาศาสตร์ ม.เชียงใหม่ · มี.ค.–เม.ย. 2569" },
  },
  {
    file: "posn-camp1",
    tag: { en: "Olympiad", th: "โอลิมปิกวิชาการ" },
    title: { en: "POSN Computer Science — Camp 1", th: "สอวน. คอมพิวเตอร์ — ค่าย 1" },
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
    title: { en: "Computer Programming — Gold Medal, 1st Place", th: "การเขียนโปรแกรมคอมพิวเตอร์ — เหรียญทอง ชนะเลิศ" },
    meta: { en: "73rd Regional Academic Fair, Chiang Rai · Sep 2025", th: "ศิลปหัตถกรรมฯ ครั้งที่ 73 ระดับเขต เชียงราย · ก.ย. 2568" },
  },
  {
    file: "gold-robotics-2024",
    badge: { kind: "gold", en: "🥇 Gold", th: "🥇 ทอง" },
    tag: { en: "Gold Medal", th: "เหรียญทอง" },
    title: { en: "Robotics (Intermediate) — Gold Medal, 2nd Runner-up", th: "การแข่งขันหุ่นยนต์ระดับกลาง — เหรียญทอง รองชนะเลิศอันดับ 2" },
    meta: { en: "72nd Regional Academic Fair, Chiang Rai · Sep 2024", th: "ศิลปหัตถกรรมฯ ครั้งที่ 72 ระดับเขต เชียงราย · ก.ย. 2567" },
  },
  {
    file: "silver-programming-2024",
    badge: { kind: "silver", en: "🥈 Silver", th: "🥈 เงิน" },
    tag: { en: "Silver Medal", th: "เหรียญเงิน" },
    title: { en: "Computer Programming — Silver Medal, 2nd Runner-up", th: "การเขียนโปรแกรมคอมพิวเตอร์ — เหรียญเงิน รองชนะเลิศอันดับ 2" },
    meta: { en: "72nd Regional Academic Fair, Chiang Rai · Sep 2024", th: "ศิลปหัตถกรรมฯ ครั้งที่ 72 ระดับเขต เชียงราย · ก.ย. 2567" },
  },
  {
    file: "mfu-hackathon-honorable",
    tag: { en: "Hackathon", th: "แฮกกาธอน" },
    title: { en: "Hackathon (Team) — Honorable Mention", th: "แฮกกาธอน (ทีม) — รางวัลชมเชย" },
    meta: { en: "ADT Open Space 2025, MFU · 2025", th: "ADT Open Space 2025, ม.แม่ฟ้าหลวง · 2568" },
  },
  {
    file: "boardgame-instructor-2025",
    tag: { en: "Instructor", th: "วิทยากร" },
    title: { en: "Science Day Board Game — Station Instructor", th: "วันวิทยาศาสตร์ บอร์ดเกม — วิทยากรประจำฐาน" },
    meta: { en: "Damrongratsongkroh School · Aug 2025", th: "ร.ร.ดำรงราษฎร์สงเคราะห์ · ส.ค. 2568" },
  },
  {
    file: "ccru-esport-2024",
    tag: { en: "Workshop", th: "อบรม" },
    title: { en: "e-Sport (VALORANT) Workshop", th: "อบรม e-Sport (VALORANT)" },
    meta: { en: "Innovation Day 2024, CRRU · Jul 2024", th: "Innovation Day 2024, ม.ราชภัฏเชียงราย · ก.ค. 2567" },
  },
];
