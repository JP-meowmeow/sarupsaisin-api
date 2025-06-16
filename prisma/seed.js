const bcrypt = require("bcryptjs");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const hashedPassword = bcrypt.hashSync("123456", 10);

const userData = [
  { email: "admin@gmail.com", password: hashedPassword, role: "ADMIN" },
  { email: "user1@gmail.com", password: hashedPassword, role: "USER" },
  { email: "user2@gmail.com", password: hashedPassword, role: "USER" },
  { email: "user3@gmail.com", password: hashedPassword, role: "USER" },
  { email: "user4@gmail.com", password: hashedPassword, role: "USER" },
];

const articleData = [
  {
    articleName: "「〜たり〜たりする」ไวยากรณ์ภาษาญี่ปุ่นที่พบได้บ่อยในJLPT N4",
    articleDetails:
      '「〜たり〜たりする」เป็นไวยากรณ์ภาษาญี่ปุ่นที่<strong>พบเจอได้บ่อยในข้อสอบระดับ </strong>JLPT N4ใช้เมื่อเราต้องการยกตัวอย่าง “การกระทำหลายอย่าง” ที่เกิดขึ้นโดยไม่เรียงลำดับการเกิด แปลได้ว่า “...บ้าง...บ้าง”, “ทั้ง...และ...” หรือ “ทำอะไรหลายๆ อย่าง” ในคราวเดียว<p><br /></p><p>โดยจะเลือกยกตัวอย่างเหตุการณ์ การกระทำเพียงบางอย่างเท่านั้น ไม่ได้พูดถึงทุกอย่างที่ทำลงไป</p><p>ซึ่งไวยากรณ์ตัวนี้ สามารถใช้ได้กับ <strong>คำกริยาเท่านั้น</strong> และต้องอยู่ในรูป <strong>Vた + り</strong><strong>+ する</strong><strong> เท่านั้น</strong></p><p><br /></p><p><strong>🔹 รูปแบบความหมายของไวยากรณ์:</strong></p><p>→ Vた + り、Vた + り + する</p><p>→ ทำ...บ้าง ทำ...บ้าง (เช่น กินบ้าง นอนบ้าง)</p><p>→ ใช้กับ <strong>คำกริยาอย่างน้อย 2 ตัว</strong></p><p>→ และต้องปิดท้ายประโยคด้วย します หรือ しています</p><p><br /></p><p><strong>🔹 ตัวอย่างประโยค + คำแปล </strong></p><p><br /></p><p>✅ ตัวอย่างที่ถูกต้อง:</p><p>\t日曜日は映画を見たり、本を読んだりして過ごします。</p><p>\t → วันอาทิตย์ฉันใช้เวลาทำโน่นทำนี่ เช่น ดูหนัง อ่านหนังสือ (และอื่นๆ)</p><p>\t休みの日は寝たり、ゲームをしたりしている。</p><p>\t→ วันหยุดฉันก็นอนบ้าง เล่นเกมบ้าง (และอื่นๆ)</p><p>\t京都に行って、お寺を見たり、美味しいものを食べたりしました。</p><p>\t → ไปเกียวโต ไปเที่ยววัดบ้าง กินของอร่อยบ้าง (และอื่นๆ)</p><p><br /></p><p>❌ ตัวอย่างที่ผิด:</p><p>\t❌ パーティーで飲んだりします。</p><p>\t→  ผิดเพราะมีแค่คำกริยาตัวเดียว ต้องมี <strong>อย่างน้อย 2 กริยา</strong></p><p>\t❌ 映画を見たりして寝ます。</p><p>\t→ ผิดเพราะมีแค่คำกริยาตัวเดียวในรูป たり และมีกริยาหลักตามมาข้างหลัง → ควรใช้ て形 หรือรูปธรรมดา</p><p>\t✅ แก้ไข: 映画を見たり、本を読んだりして寝ます。</p><p> \t→ ดูหนังบ้าง อ่านหนังสือบ้าง แล้วค่อยนอน</p><p><br /></p><p><strong>💡 จุดสำคัญ:</strong></p><ul><li>「〜たり〜たりする」ต้องมีอย่างน้อย <strong>2 กริยาในรูป 〜たり</strong> ขึ้นไป</li><li>ปิดท้ายด้วย します, しています, หรือ しました</li><li>ใช้เพื่อยกตัวอย่างเท่านั้น ไม่ได้แปลว่าทำทั้งหมดที่พูด</li><li>นิยมใช้ในการพูดถึง “สิ่งที่ทำช่วงเวลาหนึ่ง” เช่น ตอนวันหยุด, ตอนเด็ก ฯลฯ</li></ul><p>⚠️ <strong>การใช้ผิดที่พบบ่อย:</strong></p><ul><li>❌ ใช้แค่กริยาเดียวในรูป たり เช่น 食べたり。 (ผิด)</li><li>❌ ลืมเติม する ที่ท้ายประโยค → ต้องมี する/している/した</li><li>❌ ใช้กับคำนาม → ใช้ได้แค่กับคำกริยาเท่านั้น</li><li>❌ คิดว่า たりたりする ต้องทำทุกอย่าง → จริง ๆ แล้วไวยากรณ์นี้เป็นเพียงแค่การ “ยกตัวอย่าง” บางส่วนเท่านั้น</li></ul><p><br /></p><p><strong>📝 หมายเหตุ:</strong></p><p>「〜たり〜たりする」เป็นไวยากรณ์ที่ช่วยให้การพูดดู “ธรรมชาติ” ขึ้น</p><p>เช่น เวลาพูดว่า “วันหยุดทำอะไรบ้าง” ก็สามารถใช้รูปนี้ได้เลย</p><p>ถือเป็นไวยากรณ์พื้นฐานที่มักจะออกสอบใน JLPT N4 และใช้จริงในการพูดในชีวิตประจำวัน</p><p><br /></p><p>ถ้าคุณชอบบทความนี้ ฝากติดตามบทเรียนต่อไปบนเว็บของเรานะครับ! 🙌</p><p><br /></p><p> IG : @sarupsaisin <a href="https://www.instagram.com/sarupsaisin/" rel="noopener noreferrer" target="_blank">https://www.instagram.com/sarupsaisin/</a></p><p> Facebook : sarupsaisin</p><p><br /></p><strong>【#JLPT文法】【N4文法】【たりたりの使い方】【เรียนภาษาญี่ปุ่น】【สรุปสายศิลป์】</strong><strong>【sarupsaisin】【ไวยากรณ์ภาษาญี่ปุ่น】【การสอบ JLPT】【บทเรียนออนไลน์】</strong>',
    articleThumbnailLink:
      "https://res.cloudinary.com/dhwgh6rof/image/upload/v1749192439/1749192436519.png",
    category: "JLPTN4",
  },
  {
    articleName: "ไวยากรณ์ภาษาญี่ปุ่น:「～ばかり」ใช้ยังไง?",
    articleDetails:
      '「〜ばかり」เป็นไวยากรณ์ภาษาญี่ปุ่นที่พบได้บ่อยในข้อสอบ JLPT ระดับ N4–N3ใช้เมื่อเราต้องการสื่อว่า <strong>“เอาแต่ทำบางอย่าง”, “มีแต่อะไรบางอย่าง”, หรือ “เพิ่งจะ...”</strong> ขึ้นอยู่กับบริบทของประโยคไวยากรณ์นี้สามารถใช้ได้กับ <strong>คำกริยา</strong>, <strong>คำนาม</strong>, และ <strong>รูปกริยาที่เพิ่งจบลง (Vた)</strong><strong>มักจะใช้ในความหมายเชิงตำหนิ, บ่น, หรือบอกเหตุการณ์ที่เพิ่งเกิดขึ้นไม่นาน</strong><p><br /></p><p><strong>🔹 รูปแบบความหมายของไวยากรณ์:</strong></p><p>\t→ Vて + ばかりいる → เอาแต่ทำ... (ซ้ำๆ, ไม่เปลี่ยน)\t</p><p>\t→ N + ばかり → มีแต่สิ่งนั้น</p><p>\t→ Vた + ばかり → เพิ่งจะ...</p><p><br /></p><p><strong>🔹 ตัวอย่างประโยค + คำแปล</strong></p><p><br /></p><p>✅ ตัวอย่างที่ถูกต้อง:</p><p>\t彼はゲームばかりしている。</p><p>\t→ เขาเอาแต่เล่นเกม ไม่ทำอย่างอื่นเลย</p><p>\tこのクラスには女の子ばかりだ。</p><p>\t → ห้องเรียนนี้มีแต่ผู้หญิงล้วนๆ</p><p>\t昼ごはんを食べたばかりなのに、もうお腹がすいた。</p><p>\t → เพิ่งจะกินข้าวกลางวันแท้ๆ แต่หิวอีกแล้ว</p><p>\t❌ ตัวอย่างที่ผิด:</p><p>\t❌ 彼はゲームをするばかりいる。</p><p>\t→ ใช้รูป Vる ผิด ต้องใช้ Vて →ゲームをしてばかりいる</p><p>\t❌ 食べばかり → ✗ ไม่มีรูปนี้ในภาษาญี่ปุ่น → ควรใช้ 食べたばか</p><p><br /></p><p><strong>💡 จุดสำคัญ:</strong></p><ul><li>「〜てばかりいる」: สื่อความหมายว่า <strong>เอาแต่ทำ</strong>, มักมีนัยตำหนิ เช่น "เอาแต่เล่นเกม"</li><li>「〜たばかり」: ใช้เมื่อพูดถึงสิ่งที่ <strong>เพิ่งเกิดขึ้นไม่นาน</strong> เช่น "เพิ่งกิน", "เพิ่งมา"</li></ul><p><strong>⚠️ การใช้ผิดที่พบบ่อย:</strong></p><ul><li>❌ ใช้ Vる แทน Vて ในรูป "เอาแต่ทำ" เช่น するばかりいる → ✗</li><li>❌ "ばかり" มีความหมายแฝง → หลายๆ ครั้งมักจะใช้ในบริบทตำหนิ เช่น "กินแต่ขนม", "เที่ยวแต่ไม่เรียน"</li></ul><p><br /></p><p><strong>📝 หมายเหตุ:</strong></p><p>「〜ばかり」เป็นไวยากรณ์ที่มักพบในบทสนทนาแบบธรรมชาติ เช่นในชีวิตประจำวัน, ซีรีส์ญี่ปุ่น, หรือข้อสอบ JLPT N4–N3</p><p>ซึ่งไวยากรณ์นี้ก็เป็นอีกหนึ่งไวยากรณ์พื้นฐานที่ควรจำให้แม่น!</p><p>ถ้าคุณชอบบทความนี้ ฝากติดตามบทเรียนต่อไปบนเว็บของเรานะครับ! 🙌</p><p><br /></p><p> IG : @sarupsaisin <a href="https://www.instagram.com/sarupsaisin/" rel="noopener noreferrer" target="_blank">https://www.instagram.com/sarupsaisin/</a></p><p> Facebook : sarupsaisin</p><p><br /></p><strong>【#JLPT文法】【N4文法】【ばかりの使い方】【JLPTN4】【ภาษาญี่ปุ่นพื้นฐาน】</strong><strong>【ไวยากรณ์ญี่ปุ่น】【เรียนภาษาญี่ปุ่น】【ข้อสอบ JLPT】【สรุปสายศิลป์】【sarupsaisin】</strong>',
    articleThumbnailLink:
      "https://res.cloudinary.com/dhwgh6rof/image/upload/v1749193059/1749193057571.png",
    category: "JLPTN3",
  },
  {
    articleName: "ไวยากรณ์ภาษาญี่ปุ่น「〜ことになる」คืออะไรและใช้ยังไง",
    articleDetails:
      '<strong>「〜ことになる」เป็นไวยากรณ์ภาษาญี่ปุ่นระดับ JLPT N3 ที่ใช้บ่อยในชีวิตประจำวัน</strong><p>ใช้เมื่อพูดถึงสิ่งที่ “ถูกกำหนดให้เกิดขึ้น”, “สรุปออกมาว่าเป็นแบบนี้”, หรือ “ตัดสินใจไปแล้วโดยตัวเองไม่ได้เป็นคนเลือก”</p><p>มักจะสื่อว่าเป็นการเปลี่ยนแปลงที่เกิดขึ้นจากภายนอกหรือสถานการณ์นำพาไป</p><p>สามารถใช้ได้ทั้งในสถานการณ์ทางการและไม่ทางการ</p><p><br /></p><p>หากใช้ในรูปอดีต 〜ことになった จะสื่อว่า เรื่องนั้น “เพิ่งถูกตัดสินไปแล้ว”</p><p>ในขณะที่ 〜ことになる ใช้เพื่ออธิบายสิ่งที่จะเกิดขึ้นในอนาคต หรือสิ่งที่ถูกกำหนดไว้</p><p><br /></p><p><strong>🔹 รูปแบบความหมายของไวยากรณ์:</strong></p><p>\t→ V辞書形（Vる）+ ことになる</p><p>\t→ ถูกกำหนดให้ทำ... / กลายเป็นว่า... / สรุปว่า...</p><p>\t→ ใช้กับกริยารูปธรรมดา เช่น 行く、働く、住む、変わる ฯลฯ</p><p><br /></p><p><strong>🔹 ตัวอย่างประโยค + คำแปล</strong></p><p><br /></p><p>\t✅ ตัวอย่างที่ถูกต้อง:</p><p>\t来月から東京に転勤することになりました。</p><p> \t→ ได้ย้ายไปทำงานที่โตเกียวตั้งแต่เดือนหน้า (บริษัทเป็นคนตัดสินใจ)</p><p>\t結婚式は10月に行うことになった。</p><p> \t→ งานแต่งงานสรุปว่าจะจัดขึ้นในเดือนตุลาคม</p><p>\t来年から新しい制度が始まることになっています。</p><p>\t → มีกำหนดให้ระบบใหม่จะเริ่มต้นตั้งแต่ปีหน้า</p><p><br /></p><p>\t❌ ตัวอย่างที่ผิด:</p><p>\t❌ 日本へ行きことになる。</p><p>\t → ผิดเพราะ “行き” เป็นรูป ますตัด ます ซึ่งใช้ไม่ได้</p><p> \t✅ ควรใช้ “行くことになる”</p><p>\t❌ 働いたことになる。</p><p> \t→ ผิดเพราะรูป “〜ことになる” ใช้กับรูปธรรมดาไม่ใช่รูปอดีต</p><p> \t✅ ควรใช้ “働くことになる”</p><p><br /></p><p><strong>💡 จุดสำคัญ:</strong></p><ul><li>「〜ことになる」มักใช้เมื่อตัวผู้พูด “ไม่ได้เป็นคนตัดสินใจโดยตรง” หรือเมื่อต้องการบอกผลลัพธ์ของเหตุการณ์</li><li>ต่างจาก 「〜ことにする」ที่แปลว่า "ฉันตัดสินใจจะ..." ซึ่งผู้พูดเป็นคนกำหนดเอง</li><li>นิยมใช้ในการพูดถึงเรื่องงาน เรื่องย้ายที่อยู่ เรื่องเรียน หรือการเปลี่ยนแปลงในชีวิต</li></ul><p><br /></p><p><strong>📝 หมายเหตุ:</strong></p><p>ไวยากรณ์「〜ことになる」มักปรากฏในข้อสอบ JLPT N3 และในการสนทนาเชิงธุรกิจ</p><p>เหมาะสำหรับใช้เมื่อเล่าการเปลี่ยนแปลงโดยสุภาพ หรืออธิบายสิ่งที่ถูกวางแผนไว้ล่วงหน้า</p><p><br /></p><p>ถ้าคุณชอบบทความนี้ ฝากติดตามบทเรียนต่อไปบนเว็บของเรานะครับ! 🙌</p><p><br /></p><p>IG : @sarupsaisin <a href="https://www.instagram.com/sarupsaisin/" rel="noopener noreferrer" target="_blank">https://www.instagram.com/sarupsaisin/</a></p><p>Facebook : sarupsaisin</p><br /><strong>【#JLPT文法】【N4文法】【たりたりの使い方】【เรียนภาษาญี่ปุ่น】</strong><strong>【สรุปสายศิลป์】【sarupsaisin】【ไวยากรณ์ภาษาญี่ปุ่น】【การสอบ JLPT】【บทเรียนออนไลน์】</strong>',
    articleThumbnailLink:
      "https://res.cloudinary.com/dhwgh6rof/image/upload/v1749194069/1749194066927.png",
    category: "JLPTN4",
  },
  {
    articleName: "ไวยากรณ์ภาษาญี่ปุ่น「〜たことがある」เคยทำ..., ไม่เคยทำ...",
    articleDetails:
      '「〜たことがある」เป็นไวยากรณ์ภาษาญี่ปุ่นระดับ JLPT N4 ที่ใช้เพื่อพูดถึง “ประสบการณ์” หรือ “สิ่งที่เคยเกิดขึ้นในอดีต” แปลว่า <strong>“เคย...มาก่อน”</strong> หรือ <strong>“มีบางครั้งที่...”</strong> ขึ้นอยู่กับบริบทของประโยคสามารถใช้เพื่อเล่าเรื่องที่เคยทำ เคยเห็น เคยไป หรือแม้แต่สิ่งที่เกิดขึ้นโดยไม่ตั้งใจก็ได้ มักใช้ในบทสนทนาเกี่ยวกับประสบการณ์, การแนะนำตัว, หรือแลกเปลี่ยนเรื่องราวในอดีต<p><br /></p><p><strong>🔹 รูปแบบความหมายของไวยากรณ์:</strong></p><p>→ Vた + ことがある</p><p> → เคยทำ...</p><p>→ Vた + ことがありません</p><p> → ไม่เคยทำ...</p><p>→ ใช้กับคำกริยาในรูปอดีต (Vた) เท่านั้น เช่น 行った、食べた、見た、読んだ ฯลฯ</p><p><br /></p><p><strong>🔹 ตัวอย่างประโยค + คำแปล</strong></p><p><br /></p><p>\t✅ ตัวอย่างที่ถูกต้อง:</p><p>\t日本に行ったことがあります。</p><p> \t→ เคยไปประเทศญี่ปุ่นมาก่อน</p><p>\tすしを食べたことがありますか。</p><p>\t → เคยกินซูชิไหม?</p><p>\t彼と話したことがありません。</p><p>\t → ไม่เคยคุยกับเขามาก่อนเลย</p><p>\t外国で運転したことがあります。</p><p>\t → เคยขับรถในต่างประเทศมาก่อน</p><p><br /></p><p>\t❌ ตัวอย่างที่ผิด:</p><p>\t❌ 日本に行くことがある。</p><p>\t → ผิด เพราะ “行く” เป็นรูปปัจจุบัน ต้องใช้ “行った”</p><p> \t✅ ควรใช้ “日本に行ったことがある”</p><p>\t❌ 本を読むことがある。</p><p> \t→ ผิดในบริบท “เคยอ่าน” → ควรเป็น “読んだことがある”</p><p> \t(แต่ถ้าแปลว่า “มีบางครั้งที่อ่านหนังสือ” → ใช้ได้ แต่ความหมายเปลี่ยน)</p><p>\t(จะกลายเป็นอีกไวยากรณ์นึง ～ることがある。 บางครั้งทำ/บางครั้งไม่ทำ)</p><p><br /></p><p><strong>\t💡 จุดสำคัญ:</strong></p><ul><li>「〜ことがある」ใช้เล่าประสบการณ์ในอดีต → เน้นว่า "เคยทำสิ่งนี้"</li><li>ถ้าใช้ในคำถาม → จะเป็นการถามว่าผู้ฟังเคยทำสิ่งนั้นหรือไม่</li><li>ถ้าจะสื่อว่า “มีโอกาสที่...จะเกิดขึ้น” ต้องใช้บริบทอื่น เช่น 「〜こともある」 (บางครั้งก็...)</li></ul><p><br /></p><p><strong>📝 หมายเหตุ:</strong></p><p>ไวยากรณ์นี้เป็นหนึ่งในพื้นฐานสำคัญสำหรับบทสนทนา เช่น การเล่าประวัติ, ประสบการณ์เที่ยว, หรือการแนะนำตัว</p><p>มักออกสอบใน JLPT ระดับ N4 และยังใช้จริงได้บ่อยในชีวิตประจำวัน เช่น ในการสัมภาษณ์งาน หรือแชตกับเพื่อนชาวญี่ปุ่น อีกด้วย</p><p><br /></p><p>ถ้าคุณชอบบทความนี้ ฝากติดตามบทเรียนต่อไปบนเว็บของเรานะครับ! 🙌</p><p><br /></p> <a href="https://www.instagram.com/sarupsaisin/" rel="noopener noreferrer" target="_blank">IG : @sarupsaisin</a><p>Facebook : sarupsaisin</p><br /><strong>【#JLPT文法】【N4文法】【たりたりの使い方】</strong><strong>【เรียนภาษาญี่ปุ่น】【สรุปสายศิลป์】【sarupsaisin】</strong><strong>【ไวยากรณ์ภาษาญี่ปุ่น】【การสอบ JLPT】【บทเรียนออนไลน์】</strong>',
    articleThumbnailLink:
      "https://res.cloudinary.com/dhwgh6rof/image/upload/v1749195250/1749195248450.png",
    category: "JLPTN4",
  },
  {
    articleName:
      "「〜てあげる」「〜てもらう」「〜てくれる」ไวยากรณ์ภาษาญี่ปุ่น ให้และได้รับ ใช้ยังไง",
    articleDetails:
      '「〜てあげる」「〜てもらう」「〜てくれる」เป็นไวยากรณ์ระดับ JLPT N4 ที่เกี่ยวข้องกับการ “ให้” และ “ได้รับ” การกระทำ ทั้งหมดใช้กับกริยารูป て (Vて) และช่วยแสดงความสัมพันธ์ระหว่างผู้ให้และผู้รับในการช่วยเหลือหรือทำอะไรให้กัน<p><br /></p><p>\t「〜てあげる」= ฉันทำให้คนอื่น (ฉันเป็นผู้ให้)</p><p>\t「〜てくれる」= คนอื่นทำให้ฉัน (ฉันเป็นผู้รับ)</p><p>\t「〜てもらう」= ฉันได้รับการกระทำจากคนอื่น (ฉันเป็นผู้ขอ/ผู้ได้รับ)</p><p><br /></p><p><strong>🔹 รูปแบบความหมายของไวยากรณ์:</strong></p><p>\t→ Aが Bに 〜てあげる → A ทำให้ B</p><p>\t→ Aが Bに 〜てもらう → A ขอให้ B ทำให้</p><p>\t→ (Aに) Bが 〜てくれる → B ทำให้ A</p><p><br /></p><p>\t<strong>🔹 ตัวอย่างประโยค + คำแปล</strong></p><p>\t友だちに日本語を教えてあげました。</p><p>\t → ฉันสอนภาษาญี่ปุ่นให้เพื่อน</p><p>\t母が弁当を作ってくれた。</p><p>\t→ แม่ทำข้าวกล่องให้ฉัน</p><p>\t先生に作文を直してもらいました。</p><p>\t → ฉันได้รับการตรวจแก้เรียงความจากอาจารย์</p><p><br /></p><p>\t❌ ตัวอย่างที่ผิด:</p><p>\t❌ 弟が僕に手伝ってあげた。</p><p>\t → ผิดเพราะ “あげる” ใช้ในบริบทที่ตัวเราทำให้คนอื่น ไม่ใช่คนอื่นทำให้เรา</p><p>\t ✅ ควรใช้ “弟が僕を手伝ってくれた。”</p><p><br /></p><p><strong>💡 จุดสำคัญ:</strong></p><ul><li>「〜てあげる」ใช้เมื่อผู้พูดทำให้คนอื่น → ควรใช้ระวัง โดยเฉพาะถ้าผู้รับยศสูงกว่า เช่น 上司</li><li>「〜てくれる」เป็นรูปที่สุภาพและใช้ได้ทั่วไป เมื่อมีคนทำอะไรให้</li><li>「〜てもらう」เน้นมุมมองของ “ผู้ได้รับ” และมักใช้เมื่อเราขอร้องบางอย่าง</li></ul><p><br /></p><p><strong>📝 หมายเหตุ:</strong></p><p>ไวยากรณ์กลุ่มนี้มักออกสอบใน JLPT N4 และเป็นหัวข้อสำคัญสำหรับการสื่อสารแบบสุภาพ</p><p>การเข้าใจมุมมองของผู้พูด (ใครให้ใคร ใครได้รับ) เป็นสิ่งสำคัญอย่างมากในไวยากรณ์นี้</p><p><br /></p><p>ถ้าคุณชอบบทความนี้ ฝากติดตามบทเรียนต่อไปบนเว็บของเรานะครับ! 🙌</p><p><br /></p><p><a href="https://www.instagram.com/sarupsaisin/" rel="noopener noreferrer" target="_blank"><u>IG : @sarupsaisin</u></a></p><p>Facebook : sarupsaisin</p><p><br /></p><strong>【#JLPT文法】【N4文法】【たりたりの使い方】</strong><strong>【เรียนภาษาญี่ปุ่น】【สรุปสายศิลป์】【sarupsaisin】</strong><strong>【ไวยากรณ์ภาษาญี่ปุ่น】【การสอบ JLPT】【บทเรียนออนไลน์】</strong>',
    articleThumbnailLink:
      "https://res.cloudinary.com/dhwgh6rof/image/upload/v1749195763/1749195760935.png",
    category: "JLPTN4",
  },
  {
    articleName: "การสอบ JLPT คืออะไร?",
    articleDetails:
      '<h1><strong>การสอบ JLPT คืออะไร?</strong></h1><p><br /></p><p>JLPT ย่อมาจาก “Japanese Language Proficiency Test” หรือในภาษาญี่ปุ่นเรียกว่า 「日本語能力試験」</p><p>เป็นการสอบวัดระดับความสามารถภาษาญี่ปุ่นสำหรับผู้ที่ไม่ได้ใช้ภาษาญี่ปุ่นเป็นภาษาแม่</p><p>จัดสอบโดย Japan Foundation และ JEES (Japan Educational Exchanges and Services) ปีละ 2 ครั้งในหลายประเทศทั่วโลก รวมถึงประเทศไทยด้วย</p><p><br /></p><p>JLPT เป็นการสอบมาตรฐานที่ได้รับการยอมรับอย่างกว้างขวาง ทั้งในแวดวงการศึกษาและการทำงาน ซึ่งมีผู้เข้าสอบทั่วโลกมากกว่า 1 ล้านคนต่อปี</p><p><br /></p><p><strong>ใช้ทำอะไร?</strong></p><p>การสอบ JLPT มีวัตถุประสงค์หลักเพื่อวัดระดับความเข้าใจภาษาญี่ปุ่น ทั้งในด้านคำศัพท์ ไวยากรณ์ การอ่าน และการฟัง</p><p>ผู้ที่มีใบรับรอง JLPT สามารถนำไปใช้ได้หลากหลาย เช่น</p><ul><li>สมัครงานในบริษัทญี่ปุ่น ทั้งในไทยและญี่ปุ่น</li><li>ยื่นขอวีซ่าทำงานในประเทศญี่ปุ่น (N1 และ N2 ได้รับการยอมรับในหลายประเภทวีซ่า)</li><li>ยื่นสมัครทุนการศึกษา</li><li>ยื่นสมัครเรียนต่อในมหาวิทยาลัยที่ญี่ปุ่น</li><li>เป็นหลักฐานยืนยันความสามารถภาษาในเรซูเม่</li></ul><p>นอกจากนี้ JLPT ยังช่วยให้ผู้เรียนภาษาญี่ปุ่นมีเป้าหมายที่ชัดเจนในการเรียน และสามารถวางแผนการพัฒนาได้อย่างเป็นระบบ</p><p><br /></p><p><strong>มีกี่ระดับ? ต่างกันอย่างไร?</strong></p><p>JLPT แบ่งออกเป็นทั้งหมด 5 ระดับ โดยระดับ N5 คือง่ายที่สุด และ N1 คือตัวยากที่สุด</p><p>N5 – เข้าใจคำศัพท์พื้นฐาน คำช่วย และบทสนทนาในชีวิตประจำวัน เช่น การแนะนำตัว การถามทาง</p><p>N4 – เข้าใจบทสนทนาในระดับพื้นฐานได้ดีขึ้น รวมถึงประโยคที่ซับซ้อนเล็กน้อย เช่น การเล่าประสบการณ์ในอดีต</p><p>N3 – เป็นระดับกลางที่สามารถฟังและอ่านเรื่องทั่วไปได้ดี เช่น ข่าวง่าย ๆ หรือบทความสั้น</p><p>N2 – ใช้ภาษาญี่ปุ่นในสถานการณ์จริงได้หลากหลาย ทั้งที่ทำงานและในสื่อ เช่น หนังสือพิมพ์ รายการข่าว</p><p>N1 – ระดับสูงสุด เข้าใจเนื้อหายากและภาษาทางวิชาการ มีความแม่นยำในการใช้ภาษาทั้งในการอ่านและการฟัง</p><p><br /></p><p>การสอบแต่ละระดับประกอบด้วยพาร์ทหลัก ได้แก่</p><ol><li>คำศัพท์ (文字・語彙)</li><li>ไวยากรณ์ + การอ่าน (文法・読解)</li><li>การฟัง (聴解)</li></ol><p><br /></p><p>ซึ่งในการสอบ JLPT จะไม่มีพาร์ทพูดและพาร์ทเขียน ผู้เข้าสอบจะต้องทำข้อสอบแบบปรนัย (เลือกช้อยส์) ทั้งหมด</p><p>ผู้สอบต้องได้คะแนนรวม และคะแนนในแต่ละพาร์ทถึงเกณฑ์ขั้นต่ำ จึงจะผ่านในระดับนั้น ๆ</p><p><br /></p><p><strong>สอบยากไหม?</strong></p><p>ความยากของ JLPT ขึ้นอยู่กับระดับที่สอบและพื้นฐานของผู้เรียน</p><p>N5–N4 เหมาะสำหรับผู้เริ่มต้น โดยสามารถเตรียมตัวได้ภายใน 3–6 เดือน</p><p>N3–N2 ต้องใช้เวลาฝึกฝนมากขึ้น โดยเฉพาะทักษะการฟังและการอ่านบทความที่ซับซ้อน</p><p>N1 เป็นระดับที่ยากที่สุด ต้องเข้าใจทั้งภาษาระดับสูง คำศัพท์เฉพาะทาง และบริบทเชิงลึก</p><p><br /></p><p>หากคุณสนใจสอบ JLPT ควรเริ่มจากการวางแผนสอบระดับที่เหมาะสมกับตัวเอง และฝึกทำข้อสอบจริงเยอะๆ</p><p>ซึ่งบทความในเว็บนี้จะช่วยให้คุณเข้าใจไวยากรณ์ คำศัพท์ และเทคนิคที่จำเป็นต่อการสอบ JLPT ในทุกๆ ระดับ</p><p>ดังนั้นถ้าคุณชอบบทความนี้ ฝากติดตามบทเรียนต่อไปบนเว็บของเรานะครับ! 🙌</p><p><br /></p><p> <a href="https://www.instagram.com/sarupsaisin/" rel="noopener noreferrer" target="_blank">IG : @sarupsaisin</a></p><p>Facebook : sarupsaisin</p><br /><strong>【#JLPT文法】【N4文法】【たりたりの使い方】</strong><strong>【เรียนภาษาญี่ปุ่น】【สรุปสายศิลป์】【sarupsaisin】</strong><strong>【ไวยากรณ์ภาษาญี่ปุ่น】【การสอบ JLPT】【บทเรียนภาษาญี่ปุ่นออนไลน์】</strong>',
    articleThumbnailLink:
      "https://res.cloudinary.com/dhwgh6rof/image/upload/v1749196355/1749196353723.png",
    category: "OTHER",
  },
  {
    articleName: "ทุน MEXT (ทุนมง) คืออะไร?",
    articleDetails:
      '<strong>ทุน MEXT (ทุนมง) คืออะไร?</strong><p><br /></p><p>ทุน MEXT หรือที่หลายคนเรียกกันว่า “ทุนมง” ย่อมาจาก “Monbukagakusho Scholarship”</p><p>เป็นทุนการศึกษาที่รัฐบาลญี่ปุ่นมอบให้แก่ชาวต่างชาติ เพื่อให้มีโอกาสไปศึกษาต่อในประเทศญี่ปุ่น</p><p>ชื่อเต็มอย่างเป็นทางการคือ “Japanese Government (Monbukagakusho: MEXT) Scholarship”</p><p>โดยคำว่า MEXT ย่อมาจาก Ministry of Education, Culture, Sports, Science and Technology</p><p><br /></p><p>ทุนนี้เป็นหนึ่งในทุนรัฐบาลที่ได้รับความนิยมสูงสุด เพราะครอบคลุมทั้งค่าเล่าเรียน ค่าครองชีพ และค่าตั๋วเครื่องบิน</p><p>และยังเป็นทุนแบบ <strong>“ให้เปล่า”</strong> ไม่ต้องใช้คืนภายหลัง</p><p><br /></p><p><strong>ใช้ทำอะไร? เหมาะกับใคร?</strong></p><p>ทุน MEXT เหมาะสำหรับผู้ที่ต้องการไปเรียนต่อที่ประเทศญี่ปุ่นทั้งในระดับ <strong>ปริญญาตรี ปริญญาโท เอก หรือวิจัย</strong></p><p>โดยเปิดรับทั้งนักเรียน นักศึกษา คนทำงาน หรือผู้ที่สนใจศึกษาต่อแบบไม่มีข้อจำกัดเรื่องสาขาวิชา</p><p>ทุนนี้ยังครอบคลุมถึงหลักสูตรเรียนภาษาญี่ปุ่นก่อนเข้าศึกษาในมหาวิทยาลัยด้วย</p><p><br /></p><p>สิ่งที่ทุน MEXT ครอบคลุม:</p><ul><li>ค่าเล่าเรียนทั้งหมด (ฟรี 100%)</li><li>ค่าครองชีพรายเดือน (ประมาณ 117,000–145,000 เยน ขึ้นอยู่กับระดับ)</li><li>ค่าตั๋วเครื่องบิน ไป–กลับ ประเทศญี่ปุ่น</li><li>ค่าใช้จ่ายอื่นๆ เช่น ค่าธรรมเนียมแรกเข้า มหาวิทยาลัย</li></ul><p><br /></p><p><strong>มีกี่ประเภท?</strong></p><p>ทุน MEXT มีหลายประเภท โดยประเภทหลักที่คนไทยนิยมสมัคร ได้แก่:</p><ol><li>ทุนปริญญาตรี (Undergraduate Students)</li><li> สำหรับนักเรียนที่จบ ม.6 หรือเทียบเท่า เพื่อไปศึกษาต่อระดับปริญญาตรีที่ญี่ปุ่น</li><li> มีทั้งสายวิทย์และศิลป์ (เช่น วิศวะ, แพทย์, สังคมศาสตร์, ภาษาศาสตร์)</li><li>ทุนวิจัย (Research Students)</li><li> สำหรับผู้ที่จบปริญญาตรีแล้ว และต้องการเรียนต่อในระดับปริญญาโท/เอก หรือทำวิจัย</li><li> ผู้สมัครสามารถกำหนดหัวข้อวิจัยและมหาวิทยาลัยที่ต้องการได้เอง</li><li>ทุนวิทยาลัยเทคนิค (College of Technology) และทุนสายอาชีพ (Specialized Training College)</li><li> เหมาะสำหรับผู้ที่ต้องการเรียนต่อในสายวิชาชีพ เช่น อิเล็กทรอนิกส์ เครื่องกล การบริหารธุรกิจ</li><li>ทุนครู (Teacher Training Students)</li><li> สำหรับครูที่มีประสบการณ์การสอน ต้องการไปวิจัยหรือฝึกอบรมการสอนเพิ่มเติมที่ญี่ปุ่น</li></ol><p><br /></p><p><strong>เส้นทางการสมัคร</strong></p><p>ผู้ที่สนใจสามารถสมัครผ่าน <strong>สถานเอกอัครราชทูตญี่ปุ่นประจำประเทศไทย </strong><a href="https://www.th.emb-japan.go.jp/itpr_th/jis_study.html" rel="noopener noreferrer" target="_blank"><u>Link</u></a></p><p>หรือในบางกรณีสามารถสมัครผ่าน <strong>มหาวิทยาลัยในญี่ปุ่นโดยตรง (University Recommendation)</strong></p><p>กระบวนการคัดเลือกประกอบด้วยการสอบข้อเขียน (วิชาคณิตศาสตร์, อังกฤษ, ญี่ปุ่น)</p><p>และการสัมภาษณ์โดยเจ้าหน้าที่สถานทูตหรืออาจารย์จากมหาวิทยาลัย</p><p><br /></p><p><strong>สอบยากไหม?</strong></p><p>การสอบทุน MEXT ต้องอาศัยทั้งความรู้วิชาการ ทักษะภาษา และการเตรียมตัวด้านเอกสาร</p><p>ในแต่ละปีมีผู้สมัครจำนวนมาก แต่ผู้ที่สอบผ่านมักจะมีจุดเด่นที่ชัดเจน เช่น</p><p>ผลการเรียนดี, มีเป้าหมายชัดเจน, รู้จักมหาวิทยาลัยและแผนวิจัยที่ต้องการ</p><p>หากเตรียมตัวอย่างมีระบบ และศึกษาข้อมูลอย่างละเอียด ทุนนี้ถือว่า “สามารถจับต้องได้ ไม่ยากเกินความสามารถ”</p><p>โดยเฉพาะสำหรับผู้ที่มีความสนใจในญี่ปุ่นจริงจัง</p><p><br /></p><p><strong>สรุป</strong></p><p>ทุน MEXT เป็นโอกาสทองสำหรับผู้ที่อยากเรียนต่อประเทศญี่ปุ่นแบบไม่ต้องจ่ายเงินเอง</p><p>นอกจากการได้เรียนกับมหาวิทยาลัยชั้นนำของญี่ปุ่นแล้ว ยังเป็นประสบการณ์ชีวิตที่เปิดโลกกว้าง</p><p>และเป็นจุดเริ่มต้นของเส้นทางอาชีพที่ดีในอนาคต</p><p>หากคุณสนใจอ่านเพิ่มเติมเกี่ยวกับการเตรียมสอบทุนมง เทคนิคการเขียน Study Plan และประสบการณ์ของรุ่นพี่</p><p>สามารถติดตามบทความอื่นๆ ได้ที่เว็บของเรา </p><p>หรือช่องทาง IG : <a href="https://www.instagram.com/sarupsaisin/" rel="noopener noreferrer" target="_blank">@sarupsaisin</a></p><p>Facebook : sarupsaisin</p><p><br /></p><p><strong>【#JLPT文法】【N4文法】【たりたりの使い方】【เรียนภาษาญี่ปุ่น】【สรุปสายศิลป์】【sarupsaisin】</strong></p><p><strong>【ไวยากรณ์ภาษาญี่ปุ่น】【การสอบ JLPT】【บทเรียนภาษาญี่ปุ่นออนไลน์】</strong></p><p><strong>【#ทุนมง】【ทุนMEXT】【เรียนต่อญี่ปุ่น】【ทุนรัฐบาลญี่ปุ่น】【เรียนฟรีที่ญี่ปุ่น】【ชีวิตนักเรียนญี่ปุ่น】</strong></p>',
    articleThumbnailLink:
      "https://res.cloudinary.com/dhwgh6rof/image/upload/v1749376171/Mext_g6ky4r.png",
    category: "OTHER",
  },
];

const courseData = [
  {
    courseName: "JLPT N4 Free course 1 ",
    shortDescription: "Focused on preparation for JLPT N4 test",
    longDescription:
      "Deep dive into JLPT N4 level grammar points with extensive examples and practice exercises...",
    courseThumbnailLink:
      "https://res.cloudinary.com/dhwgh6rof/image/upload/v1729566234/JLPT_N3_vvfhml.png",
    price: 0,
    category: "JLPTN4",
    isFree: "FREE",
    units: [
      {
        unitNumber: 1,
        title: "Te-form Mastery",
        description: "Understand and use the te-form confidently",
        youtubeLink: "https://www.youtube.com/watch?v=H2fRcQquKsA",
      },
      {
        unitNumber: 2,
        title: "Potential Form",
        description: "Learn to express ability in Japanese",
        youtubeLink: "https://www.youtube.com/watch?v=msGQOO6f3h0",
      },
    ],
  },
];

const bookData = [
  {
    id: 1,
    bookTitle: "โจทย์เตรียมสอบ PAT7.3",
    shortDescription: "mock up test สำหรับเตรียมสอบ PAT7.3 พร้อมเฉลยละเอียด",
    longDescription:
      "หนังสือโจทย์เตรียมสอบ PAT7.3\r\nโจทย์และเฉลย คำอธิบายอย่างละเอียด",
    price: 129,
    bookThumbnailLink:
      "https://res.cloudinary.com/dhwgh6rof/image/upload/v1749974470/1749974468316.jpg",
    userId: 41,
    createdAt: "2025-06-15 08:01:14.550",
    samplePages:
      '["https://res.cloudinary.com/dhwgh6rof/image/upload/v1749974471/1749974468385.jpg", "https://res.cloudinary.com/dhwgh6rof/image/upload/v1749974472/1749974468409.jpg", "https://res.cloudinary.com/dhwgh6rof/image/upload/v1749974473/1749974468423.jpg", "https://res.cloudinary.com/dhwgh6rof/image/upload/v1749974474/1749974468437.jpg"]',
  },
];



async function run() {
  try {
    // Clear previous data in correct order
    await prisma.userPurchasedLevel.deleteMany();
    await prisma.enrollment.deleteMany();
    await prisma.article.deleteMany();
    await prisma.book.deleteMany();
    await prisma.course.deleteMany();
    await prisma.choice.deleteMany();
    await prisma.explanation.deleteMany();
    await prisma.question.deleteMany();
    await prisma.jlptTest.deleteMany();
    await prisma.jlptLevel.deleteMany();
    await prisma.user.deleteMany();

    // Create users
    await prisma.user.createMany({ data: userData });

    const admin = await prisma.user.findUnique({
      where: { email: "admin@gmail.com" },
    });
    // Create articles and associate with the admin user
    for (let article of articleData) {
      await prisma.article.create({
        data: {
          ...article,
          User: { connect: { id: admin.id } },
        },
      });
    }

    // Create courses and their units
    for (let course of courseData) {
      const { units, ...courseInfo } = course;
      await prisma.course.create({
        data: {
          ...courseInfo,
          user: { connect: { id: admin.id } },
          unit: {
            createMany: {
              data: units,
            },
          },
        },
      });
    }

    // Create JLPT Levels safely using upsert
    const levels = ["JLPTN5", "JLPTN4","JLPTN3","JLPTN2","JLPTN1"];
    const levelIds = {};

    for (const level of levels) {
      const lvl = await prisma.jlptLevel.upsert({
        where: { level },
        update: {},
        create: { level },
      });
      levelIds[level] = lvl.id;
    }

    // Create one test for JLPTN5
    const test = await prisma.jlptTest.create({
      data: {
        jlptLevelId: levelIds["JLPTN5"],
        name: "N5 模擬試験 第1回",
        price: 0,
      },
    });

    // Create one sample question
    await prisma.question.create({
      data: {
        number: 1,
        jlptTestId: test.id,
        type: "VOCAB",
        content: "「ありがとう」แปลว่าอะไร?",
        choices: {
          create: [
            { text: "ขอโทษ", isCorrect: false },
            { text: "ขอบคุณ", isCorrect: true },
            { text: "ลาก่อน", isCorrect: false },
            { text: "สวัสดี", isCorrect: false },
          ],
        },
        Explanation: {
          create: {
            text: "「ありがとう」 แปลว่า ขอบคุณ ใช้ในสถานการณ์ทั่วไป",
          },
        },
      },
    });
    // 1. สร้าง Passage
    const passage = await prisma.passage.create({
      data: {
        title: "บทอ่านเกี่ยวกับโรงเรียน",
        imageUrl: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
        jlptTestId: test.id,
        number: 71, // คำถามที่ 71-100 = จากบทอ่าน
      },
    });

    // 2. คำถามจากบทอ่าน (เชื่อม passageId)
    const questionFromPassage = await prisma.question.create({
      data: {
        jlptTestId: test.id,
        passageId: passage.id,
        number: 71,
        content: "นักเรียนในบทความนี้ไปโรงเรียนโดยอะไร?",
        type: "READING",
      },
    });

    await prisma.explanation.create({
      data: {
        questionId: questionFromPassage.id,
        text: "ในบทอ่านบอกว่าเดินไปโรงเรียน",
      },
    });

    await prisma.choice.createMany({
      data: [
        { questionId: questionFromPassage.id, text: "เดิน", isCorrect: true },
        {
          questionId: questionFromPassage.id,
          text: "จักรยาน",
          isCorrect: false,
        },
        {
          questionId: questionFromPassage.id,
          text: "รถเมล์",
          isCorrect: false,
        },
        {
          questionId: questionFromPassage.id,
          text: "รถยนต์",
          isCorrect: false,
        },
      ],
    });

    console.log("✅ Seeding complete.");
  } catch (error) {
    console.error("❌ Error seeding data:", error);
  } finally {
    await prisma.$disconnect();
  }
}

run();
