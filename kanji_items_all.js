const KANJI_ITEMS = [
  {
    "kanji": "一",
    "kanji_reading": "いち",
    "on_reading": "イチ・イツ",
    "kun_reading": "ひと・ひとつ",
    "tts_sentence": "いち を かぞえる",
    "tts_slow_sentence": "いち を ゆっくり かぞえる ",
    "tags": "数",
    "grade": "小1"
  },
  {
    "kanji": "右",
    "kanji_reading": "みぎ",
    "on_reading": "ウ・ユウ",
    "kun_reading": "みぎ",
    "tts_sentence": "みぎ の て を あげる",
    "tts_slow_sentence": "みぎ の て を そっと あげる ",
    "tags": "体",
    "grade": "小1"
  },
  {
    "kanji": "雨",
    "kanji_reading": "あめ",
    "on_reading": "ウ",
    "kun_reading": "あめ",
    "tts_sentence": "あめ が ふる",
    "tts_slow_sentence": "あめ が ゆっくり ふる ",
    "tags": "自然",
    "grade": "小1"
  },
  {
    "kanji": "円",
    "kanji_reading": "えん",
    "on_reading": "エン",
    "kun_reading": "まる",
    "tts_sentence": "えん を かく",
    "tts_slow_sentence": "えん を ゆっくり かく ",
    "tags": "算数",
    "grade": "小1"
  },
  {
    "kanji": "王",
    "kanji_reading": "おう",
    "on_reading": "オウ",
    "kun_reading": NaN,
    "tts_sentence": "おうさま を よぶ",
    "tts_slow_sentence": "おうさま を よんでみる ",
    "tags": "人",
    "grade": "小1"
  },
  {
    "kanji": "音",
    "kanji_reading": "おと",
    "on_reading": "オン・イン",
    "kun_reading": "おと・ね",
    "tts_sentence": "おと を きく",
    "tts_slow_sentence": "おと を よく きく ",
    "tags": "生活",
    "grade": "小1"
  },
  {
    "kanji": "下",
    "kanji_reading": "した",
    "on_reading": "カ・ゲ",
    "kun_reading": "した・さがる・くだる",
    "tts_sentence": "した を むく",
    "tts_slow_sentence": "した を そっと むく ",
    "tags": "位置",
    "grade": "小1"
  },
  {
    "kanji": "火",
    "kanji_reading": "ひ",
    "on_reading": "カ",
    "kun_reading": "ひ",
    "tts_sentence": "ひ を みる",
    "tts_slow_sentence": "ひ を ゆっくり みる ",
    "tags": "自然",
    "grade": "小1"
  },
  {
    "kanji": "花",
    "kanji_reading": "はな",
    "on_reading": "カ",
    "kun_reading": "はな",
    "tts_sentence": "はな を かざる",
    "tts_slow_sentence": "はな を そっと かざる ",
    "tags": "自然",
    "grade": "小1"
  },
  {
    "kanji": "貝",
    "kanji_reading": "かい",
    "on_reading": "バイ",
    "kun_reading": "かい",
    "tts_sentence": "かい を ひろう",
    "tts_slow_sentence": "かい を そっと ひろう ",
    "tags": "自然",
    "grade": "小1"
  },
  {
    "kanji": "学",
    "kanji_reading": "がく",
    "on_reading": "ガク",
    "kun_reading": "まなぶ",
    "tts_sentence": "がっこう で まなぶ",
    "tts_slow_sentence": "がっこう で たのしく まなぶ ",
    "tags": "学校",
    "grade": "小1"
  },
  {
    "kanji": "気",
    "kanji_reading": "き",
    "on_reading": "キ・ケ",
    "kun_reading": "き",
    "tts_sentence": "きもち を つたえる",
    "tts_slow_sentence": "きもち を やさしく つたえる 心",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "九",
    "kanji_reading": "きゅう",
    "on_reading": "キュウ・ク",
    "kun_reading": "ここの・ここのつ",
    "tts_sentence": "きゅう まで かぞえる",
    "tts_slow_sentence": "きゅう まで ゆっくり かぞえる 数",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "休",
    "kanji_reading": "やすみ",
    "on_reading": "キュウ",
    "kun_reading": "やすむ",
    "tts_sentence": "やすみ に あそぶ",
    "tts_slow_sentence": "やすみ に のんびり あそぶ 生活",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "玉",
    "kanji_reading": "たま",
    "on_reading": "ギョク",
    "kun_reading": "たま",
    "tts_sentence": "たま で あそぶ",
    "tts_slow_sentence": "たま で ころがして あそぶ もの",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "金",
    "kanji_reading": "きん",
    "on_reading": "キン・コン",
    "kun_reading": "かね・かな",
    "tts_sentence": "きんいろ を みる",
    "tts_slow_sentence": "きんいろ を よく みる 色",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "空",
    "kanji_reading": "そら",
    "on_reading": "クウ",
    "kun_reading": "そら・あく",
    "tts_sentence": "そら を みあげる",
    "tts_slow_sentence": "そら を ゆっくり みあげる 自然",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "月",
    "kanji_reading": "つき",
    "on_reading": "ゲツ・ガツ",
    "kun_reading": "つき",
    "tts_sentence": "つき を ながめる",
    "tts_slow_sentence": "つき を しずかに ながめる 自然",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "犬",
    "kanji_reading": "いぬ",
    "on_reading": "ケン",
    "kun_reading": "いぬ",
    "tts_sentence": "いぬ と あそぶ",
    "tts_slow_sentence": "いぬ と なかよく あそぶ 生き物",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "見",
    "kanji_reading": "みる",
    "on_reading": "ケン",
    "kun_reading": "みる",
    "tts_sentence": "え を みる",
    "tts_slow_sentence": "え を じっくり みる 生活",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "五",
    "kanji_reading": "ご",
    "on_reading": "ゴ",
    "kun_reading": "いつつ",
    "tts_sentence": "ごつ を かぞえる",
    "tts_slow_sentence": "ご を ゆっくり かぞえる 数",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "口",
    "kanji_reading": "くち",
    "on_reading": "コウ・ク",
    "kun_reading": "くち",
    "tts_sentence": "くち を あける",
    "tts_slow_sentence": "くち を そっと あける 体",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "校",
    "kanji_reading": "こう",
    "on_reading": "コウ",
    "kun_reading": NaN,
    "tts_sentence": "こうてい を あるく",
    "tts_slow_sentence": "こうてい を ゆっくり あるく 学校",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "左",
    "kanji_reading": "ひだり",
    "on_reading": "サ",
    "kun_reading": "ひだり",
    "tts_sentence": "ひだり の て を あげる",
    "tts_slow_sentence": "ひだり の て を そっと あげる 体",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "三",
    "kanji_reading": "さん",
    "on_reading": "サン",
    "kun_reading": "みっつ・み",
    "tts_sentence": "さん を かぞえる",
    "tts_slow_sentence": "さん を ゆっくり かぞえる 数",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "山",
    "kanji_reading": "やま",
    "on_reading": "サン",
    "kun_reading": "やま",
    "tts_sentence": "やま を みる",
    "tts_slow_sentence": "やま を ゆっくり みる 自然",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "子",
    "kanji_reading": "こ",
    "on_reading": "シ・ス",
    "kun_reading": "こ",
    "tts_sentence": "こども が あつまる",
    "tts_slow_sentence": "こども が なかよく あつまる 人",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "四",
    "kanji_reading": "よん",
    "on_reading": "シ",
    "kun_reading": "よっつ・よ・よつ",
    "tts_sentence": "よん を かぞえる",
    "tts_slow_sentence": "よん を ゆっくり かぞえる 数",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "糸",
    "kanji_reading": "いと",
    "on_reading": "シ",
    "kun_reading": "いと",
    "tts_sentence": "いと を まく",
    "tts_slow_sentence": "いと を そっと まく もの",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "字",
    "kanji_reading": "じ",
    "on_reading": "ジ",
    "kun_reading": "あざ・あざな",
    "tts_sentence": "じ を かく",
    "tts_slow_sentence": "じ を ゆっくり かく 学校",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "耳",
    "kanji_reading": "みみ",
    "on_reading": "ジ",
    "kun_reading": "みみ",
    "tts_sentence": "みみ で きく",
    "tts_slow_sentence": "みみ で よく きく 体",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "七",
    "kanji_reading": "なな",
    "on_reading": "シチ",
    "kun_reading": "ななつ・なな",
    "tts_sentence": "なな を かぞえる",
    "tts_slow_sentence": "なな を ゆっくり かぞえる 数",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "車",
    "kanji_reading": "くるま",
    "on_reading": "シャ",
    "kun_reading": "くるま",
    "tts_sentence": "くるま が くる",
    "tts_slow_sentence": "くるま が ゆっくり くる 乗り物",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "手",
    "kanji_reading": "て",
    "on_reading": "シュ",
    "kun_reading": "て",
    "tts_sentence": "て を あらう",
    "tts_slow_sentence": "て を きれい に あらう 体",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "十",
    "kanji_reading": "じゅう",
    "on_reading": "ジュウ・ジッ",
    "kun_reading": "とお・と",
    "tts_sentence": "じゅう を かぞえる",
    "tts_slow_sentence": "じゅう を ゆっくり かぞえる 数",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "出",
    "kanji_reading": "でる",
    "on_reading": "シュツ",
    "kun_reading": "でる・だす",
    "tts_sentence": "いえ を でる",
    "tts_slow_sentence": "いえ を そっと でる 生活",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "女",
    "kanji_reading": "おんな",
    "on_reading": "ジョ・ニョ",
    "kun_reading": "おんな・め",
    "tts_sentence": "おんな の こ",
    "tts_slow_sentence": "おんな の こ が あつまる 人",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "小",
    "kanji_reading": "ちいさい",
    "on_reading": "ショウ",
    "kun_reading": "ちいさい・こ・お",
    "tts_sentence": "ちいさい もの を みる",
    "tts_slow_sentence": "ちいさい もの を そっと みる 形",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "上",
    "kanji_reading": "うえ",
    "on_reading": "ジョウ",
    "kun_reading": "うえ・あがる・のぼる",
    "tts_sentence": "うえ を むく",
    "tts_slow_sentence": "うえ を そっと むく 位置",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "森",
    "kanji_reading": "もり",
    "on_reading": "シン",
    "kun_reading": "もり",
    "tts_sentence": "もり を さんぽ する",
    "tts_slow_sentence": "もり を ゆっくり さんぽ する 自然",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "人",
    "kanji_reading": "ひと",
    "on_reading": "ジン・ニン",
    "kun_reading": "ひと",
    "tts_sentence": "ひと が あつまる",
    "tts_slow_sentence": "ひと が なかよく あつまる 人",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "水",
    "kanji_reading": "みず",
    "on_reading": "スイ",
    "kun_reading": "みず",
    "tts_sentence": "みず を のむ",
    "tts_slow_sentence": "みず を ゆっくり のむ 自然",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "正",
    "kanji_reading": "ただしい",
    "on_reading": "セイ・ショウ",
    "kun_reading": "ただしい・まさ",
    "tts_sentence": "ただしい こたえ",
    "tts_slow_sentence": "ただしい こたえ を ゆっくり よむ 学校",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "生",
    "kanji_reading": "いきる",
    "on_reading": "セイ・ショウ",
    "kun_reading": "いきる・うまれる・なま",
    "tts_sentence": "いきもの を みる",
    "tts_slow_sentence": "いきもの を そっと みる 生き物",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "青",
    "kanji_reading": "あお",
    "on_reading": "セイ・ショウ",
    "kun_reading": "あお",
    "tts_sentence": "あおい そら を みる",
    "tts_slow_sentence": "あおい そら を ゆっくり みる 色",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "夕",
    "kanji_reading": "ゆう",
    "on_reading": "セキ",
    "kun_reading": "ゆう",
    "tts_sentence": "ゆうがた に あそぶ",
    "tts_slow_sentence": "ゆうがた に ゆっくり あそぶ 時間",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "石",
    "kanji_reading": "いし",
    "on_reading": "セキ・シャク・コク",
    "kun_reading": "いし",
    "tts_sentence": "いし を ひろう",
    "tts_slow_sentence": "いし を そっと ひろう 自然",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "赤",
    "kanji_reading": "あか",
    "on_reading": "セキ・シャク",
    "kun_reading": "あか",
    "tts_sentence": "あかい はな を みる",
    "tts_slow_sentence": "あかい はな を ゆっくり みる 色",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "千",
    "kanji_reading": "せん",
    "on_reading": "セン",
    "kun_reading": "ち",
    "tts_sentence": "せん を かぞえる",
    "tts_slow_sentence": "せん を ゆっくり かぞえる 数",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "川",
    "kanji_reading": "かわ",
    "on_reading": "セン",
    "kun_reading": "かわ",
    "tts_sentence": "かわ を ながめる",
    "tts_slow_sentence": "かわ を ゆっくり ながめる 自然",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "先",
    "kanji_reading": "さき",
    "on_reading": "セン",
    "kun_reading": "さき",
    "tts_sentence": "さき に あるく",
    "tts_slow_sentence": "さき に ゆっくり あるく 生活",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "早",
    "kanji_reading": "はやい",
    "on_reading": "ソウ",
    "kun_reading": "はやい",
    "tts_sentence": "はやく おきる",
    "tts_slow_sentence": "はやく そっと おきる 生活",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "草",
    "kanji_reading": "くさ",
    "on_reading": "ソウ",
    "kun_reading": "くさ",
    "tts_sentence": "くさ を かる",
    "tts_slow_sentence": "くさ を そっと かる 自然",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "足",
    "kanji_reading": "あし",
    "on_reading": "ソク",
    "kun_reading": "あし・たりる",
    "tts_sentence": "あし で あるく",
    "tts_slow_sentence": "あし で ゆっくり あるく 体",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "村",
    "kanji_reading": "むら",
    "on_reading": "ソン",
    "kun_reading": "むら",
    "tts_sentence": "むら を あるく",
    "tts_slow_sentence": "むら を ゆっくり あるく 場所",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "大",
    "kanji_reading": "おおきい",
    "on_reading": "ダイ・タイ",
    "kun_reading": "おおきい",
    "tts_sentence": "おおきい こえ で よぶ",
    "tts_slow_sentence": "おおきい こえ で ゆっくり よぶ 形",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "男",
    "kanji_reading": "おとこ",
    "on_reading": "ダン・ナン",
    "kun_reading": "おとこ",
    "tts_sentence": "おとこ の こ",
    "tts_slow_sentence": "おとこ の こ が あつまる 人",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "竹",
    "kanji_reading": "たけ",
    "on_reading": "チク",
    "kun_reading": "たけ",
    "tts_sentence": "たけ の もり",
    "tts_slow_sentence": "たけ の もり を あるく 自然",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "中",
    "kanji_reading": "なか",
    "on_reading": "チュウ",
    "kun_reading": "なか",
    "tts_sentence": "なか に いれる",
    "tts_slow_sentence": "なか に そっと いれる 位置",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "虫",
    "kanji_reading": "むし",
    "on_reading": "チュウ",
    "kun_reading": "むし",
    "tts_sentence": "むし を みつける",
    "tts_slow_sentence": "むし を そっと みつける 生き物",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "町",
    "kanji_reading": "まち",
    "on_reading": "チョウ",
    "kun_reading": "まち",
    "tts_sentence": "まち を さんぽ する",
    "tts_slow_sentence": "まち を ゆっくり さんぽ する 場所",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "天",
    "kanji_reading": "てん",
    "on_reading": "テン",
    "kun_reading": "あま・あめ",
    "tts_sentence": "てんき を みる",
    "tts_slow_sentence": "てんき を ゆっくり みる 自然",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "田",
    "kanji_reading": "た",
    "on_reading": "デン",
    "kun_reading": "た",
    "tts_sentence": "た に いく",
    "tts_slow_sentence": "た に ゆっくり いく 場所",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "土",
    "kanji_reading": "つち",
    "on_reading": "ド・ト",
    "kun_reading": "つち",
    "tts_sentence": "つち で あそぶ",
    "tts_slow_sentence": "つち で たのしく あそぶ 自然",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "二",
    "kanji_reading": "に",
    "on_reading": "ニ",
    "kun_reading": "ふたつ",
    "tts_sentence": "に を かぞえる",
    "tts_slow_sentence": "に を ゆっくり かぞえる 数",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "日",
    "kanji_reading": "ひ",
    "on_reading": "ニチ・ジツ",
    "kun_reading": "ひ・か",
    "tts_sentence": "ひ が のぼる",
    "tts_slow_sentence": "ひ が ゆっくり のぼる 自然",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "入",
    "kanji_reading": "いる",
    "on_reading": "ニュウ",
    "kun_reading": "はいる・いれる",
    "tts_sentence": "へや に はいる",
    "tts_slow_sentence": "へや に ゆっくり はいる 生活",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "年",
    "kanji_reading": "とし",
    "on_reading": "ネン",
    "kun_reading": "とし",
    "tts_sentence": "とし を かく",
    "tts_slow_sentence": "とし を ゆっくり かく 生活",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "白",
    "kanji_reading": "しろ",
    "on_reading": "ハク・ビャク",
    "kun_reading": "しろ",
    "tts_sentence": "しろい かみ を みる",
    "tts_slow_sentence": "しろい かみ を ゆっくり みる 色",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "八",
    "kanji_reading": "はち",
    "on_reading": "ハチ",
    "kun_reading": "やっつ・や",
    "tts_sentence": "はち を かぞえる",
    "tts_slow_sentence": "はち を ゆっくり かぞえる 数",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "百",
    "kanji_reading": "ひゃく",
    "on_reading": "ヒャク",
    "kun_reading": "もも",
    "tts_sentence": "ひゃく を かぞえる",
    "tts_slow_sentence": "ひゃく を ゆっくり かぞえる 数",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "文",
    "kanji_reading": "ぶん",
    "on_reading": "ブン・モン",
    "kun_reading": "ふみ",
    "tts_sentence": "ぶん を よむ",
    "tts_slow_sentence": "ぶん を ゆっくり よむ 学校",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "木",
    "kanji_reading": "き",
    "on_reading": "ボク・モク",
    "kun_reading": "き",
    "tts_sentence": "き に のぼる",
    "tts_slow_sentence": "き に そっと のぼる 自然",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "本",
    "kanji_reading": "ほん",
    "on_reading": "ホン",
    "kun_reading": "もと",
    "tts_sentence": "ほん を よむ",
    "tts_slow_sentence": "ほん を ゆっくり よむ 学校",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "名",
    "kanji_reading": "なまえ",
    "on_reading": "メイ・ミョウ",
    "kun_reading": "な",
    "tts_sentence": "なまえ を かく",
    "tts_slow_sentence": "なまえ を ゆっくり かく 人",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "目",
    "kanji_reading": "め",
    "on_reading": "モク",
    "kun_reading": "め",
    "tts_sentence": "め で みる",
    "tts_slow_sentence": "め で よく みる 体",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "立",
    "kanji_reading": "たつ",
    "on_reading": "リツ・リュウ",
    "kun_reading": "たつ",
    "tts_sentence": "ならんで たつ",
    "tts_slow_sentence": "ならんで ゆっくり たつ 体",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "力",
    "kanji_reading": "ちから",
    "on_reading": "リョク・リキ",
    "kun_reading": "ちから",
    "tts_sentence": "ちから を つかう",
    "tts_slow_sentence": "ちから を ゆっくり つかう 体",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "林",
    "kanji_reading": "はやし",
    "on_reading": "リン",
    "kun_reading": "はやし",
    "tts_sentence": "はやし を あるく",
    "tts_slow_sentence": "はやし を ゆっくり あるく 自然",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "六",
    "kanji_reading": "ろく",
    "on_reading": "ロク",
    "kun_reading": "むっつ・む",
    "tts_sentence": "ろく を かぞえる",
    "tts_slow_sentence": "ろく を ゆっくり かぞえる 数",
    "tags": NaN,
    "grade": "小1"
  },
  {
    "kanji": "引",
    "kanji_reading": "ひく",
    "on_reading": "イン",
    "kun_reading": "ひく・ひける",
    "tts_sentence": "ひも を ひく",
    "tts_slow_sentence": "ひも を ゆっくり ひく",
    "tags": "生活",
    "grade": "小2"
  },
  {
    "kanji": "羽",
    "kanji_reading": "はね",
    "on_reading": "ウ",
    "kun_reading": "はね・わ",
    "tts_sentence": "とり の はね を みる",
    "tts_slow_sentence": "とり の はね を そっと みる",
    "tags": "生き物",
    "grade": "小2"
  },
  {
    "kanji": "雲",
    "kanji_reading": "くも",
    "on_reading": "ウン",
    "kun_reading": "くも",
    "tts_sentence": "くも が うごく",
    "tts_slow_sentence": "くも が ゆっくり うごく",
    "tags": "自然",
    "grade": "小2"
  },
  {
    "kanji": "園",
    "kanji_reading": "その",
    "on_reading": "エン",
    "kun_reading": "その",
    "tts_sentence": "ようちえん に いく",
    "tts_slow_sentence": "ようちえん に ゆっくり いく",
    "tags": "場所",
    "grade": "小2"
  },
  {
    "kanji": "遠",
    "kanji_reading": "とおい",
    "on_reading": "エン・オン",
    "kun_reading": "とおい",
    "tts_sentence": "とおい まち を みる",
    "tts_slow_sentence": "とおい まち を ゆっくり みる",
    "tags": "場所",
    "grade": "小2"
  },
  {
    "kanji": "何",
    "kanji_reading": "なに",
    "on_reading": "カ",
    "kun_reading": "なに",
    "tts_sentence": "なに を もつ",
    "tts_slow_sentence": "なに を ゆっくり もつ",
    "tags": "質問",
    "grade": "小2"
  },
  {
    "kanji": "科",
    "kanji_reading": "か",
    "on_reading": "カ",
    "kun_reading": "しらべる",
    "tts_sentence": "かがく を まなぶ",
    "tts_slow_sentence": "かがく を ゆっくり まなぶ",
    "tags": "理科",
    "grade": "小2"
  },
  {
    "kanji": "夏",
    "kanji_reading": "なつ",
    "on_reading": "カ",
    "kun_reading": "なつ",
    "tts_sentence": "なつ に あそぶ",
    "tts_slow_sentence": "なつ に たのしく あそぶ",
    "tags": "季節",
    "grade": "小2"
  },
  {
    "kanji": "家",
    "kanji_reading": "いえ",
    "on_reading": "カ・ケ",
    "kun_reading": "いえ",
    "tts_sentence": "いえ に かえる",
    "tts_slow_sentence": "いえ に ゆっくり かえる",
    "tags": "場所",
    "grade": "小2"
  },
  {
    "kanji": "歌",
    "kanji_reading": "うた",
    "on_reading": "カ",
    "kun_reading": "うた・うたう",
    "tts_sentence": "うた を うたう",
    "tts_slow_sentence": "うた を ゆっくり うたう",
    "tags": "音楽",
    "grade": "小2"
  },
  {
    "kanji": "画",
    "kanji_reading": "え",
    "on_reading": "ガ・カク",
    "kun_reading": "え・かく",
    "tts_sentence": "え を かく",
    "tts_slow_sentence": "え を ゆっくり かく",
    "tags": "図工",
    "grade": "小2"
  },
  {
    "kanji": "回",
    "kanji_reading": "まわる",
    "on_reading": "カイ",
    "kun_reading": "まわる・まわす",
    "tts_sentence": "いす を まわす",
    "tts_slow_sentence": "いす を ゆっくり まわす",
    "tags": "生活",
    "grade": "小2"
  },
  {
    "kanji": "会",
    "kanji_reading": "あう",
    "on_reading": "カイ",
    "kun_reading": "あう・あつまる",
    "tts_sentence": "ともだち に あう",
    "tts_slow_sentence": "ともだち に なかよく あう",
    "tags": "人",
    "grade": "小2"
  },
  {
    "kanji": "海",
    "kanji_reading": "うみ",
    "on_reading": "カイ",
    "kun_reading": "うみ",
    "tts_sentence": "うみ を みる",
    "tts_slow_sentence": "うみ を ゆっくり みる",
    "tags": "自然",
    "grade": "小2"
  },
  {
    "kanji": "絵",
    "kanji_reading": "え",
    "on_reading": "カイ・エ",
    "kun_reading": "え",
    "tts_sentence": "え を かく",
    "tts_slow_sentence": "え を ゆっくり かく",
    "tags": "図工",
    "grade": "小2"
  },
  {
    "kanji": "外",
    "kanji_reading": "そと",
    "on_reading": "ガイ・ゲ",
    "kun_reading": "そと",
    "tts_sentence": "そと で あそぶ",
    "tts_slow_sentence": "そと で たのしく あそぶ",
    "tags": "場所",
    "grade": "小2"
  },
  {
    "kanji": "角",
    "kanji_reading": "かど",
    "on_reading": "カク",
    "kun_reading": "かど・つの",
    "tts_sentence": "かど を まがる",
    "tts_slow_sentence": "かど を ゆっくり まがる",
    "tags": "位置",
    "grade": "小2"
  },
  {
    "kanji": "楽",
    "kanji_reading": "たのしい",
    "on_reading": "ガク・ラク",
    "kun_reading": "たのしい・たのしむ",
    "tts_sentence": "おんがく を きく",
    "tts_slow_sentence": "おんがく を ゆっくり きく",
    "tags": "音楽",
    "grade": "小2"
  },
  {
    "kanji": "活",
    "kanji_reading": "いきる",
    "on_reading": "カツ",
    "kun_reading": "いきる",
    "tts_sentence": "いきいき と あるく",
    "tts_slow_sentence": "いきいき と ゆっくり あるく",
    "tags": "生活",
    "grade": "小2"
  },
  {
    "kanji": "間",
    "kanji_reading": "あいだ",
    "on_reading": "カン・ケン",
    "kun_reading": "あいだ・ま",
    "tts_sentence": "つくえ の あいだ",
    "tts_slow_sentence": "つくえ の あいだ を ゆっくり みる",
    "tags": "位置",
    "grade": "小2"
  },
  {
    "kanji": "丸",
    "kanji_reading": "まるい",
    "on_reading": "ガン",
    "kun_reading": "まる・まるい",
    "tts_sentence": "まる を かく",
    "tts_slow_sentence": "まる を ゆっくり かく",
    "tags": "形",
    "grade": "小2"
  },
  {
    "kanji": "岩",
    "kanji_reading": "いわ",
    "on_reading": "ガン",
    "kun_reading": "いわ",
    "tts_sentence": "いわ に のぼる",
    "tts_slow_sentence": "いわ に そっと のぼる",
    "tags": "自然",
    "grade": "小2"
  },
  {
    "kanji": "顔",
    "kanji_reading": "かお",
    "on_reading": "ガン",
    "kun_reading": "かお",
    "tts_sentence": "かお を あらう",
    "tts_slow_sentence": "かお を ゆっくり あらう",
    "tags": "体",
    "grade": "小2"
  },
  {
    "kanji": "気",
    "kanji_reading": "き",
    "on_reading": "キ・ケ",
    "kun_reading": "き",
    "tts_sentence": "きもち を つたえる",
    "tts_slow_sentence": "きもち を やさしく つたえる",
    "tags": "心",
    "grade": "小2"
  },
  {
    "kanji": "記",
    "kanji_reading": "しるす",
    "on_reading": "キ",
    "kun_reading": "しるす",
    "tts_sentence": "ノート に しるす",
    "tts_slow_sentence": "ノート に ゆっくり しるす",
    "tags": "学校",
    "grade": "小2"
  },
  {
    "kanji": "帰",
    "kanji_reading": "かえる",
    "on_reading": "キ",
    "kun_reading": "かえる",
    "tts_sentence": "いえ に かえる",
    "tts_slow_sentence": "いえ に ゆっくり かえる",
    "tags": "生活",
    "grade": "小2"
  },
  {
    "kanji": "弓",
    "kanji_reading": "ゆみ",
    "on_reading": "キュウ",
    "kun_reading": "ゆみ",
    "tts_sentence": "ゆみ を ひく",
    "tts_slow_sentence": "ゆみ を ゆっくり ひく",
    "tags": "生活",
    "grade": "小2"
  },
  {
    "kanji": "牛",
    "kanji_reading": "うし",
    "on_reading": "ギュウ",
    "kun_reading": "うし",
    "tts_sentence": "うし を みる",
    "tts_slow_sentence": "うし を ゆっくり みる",
    "tags": "生き物",
    "grade": "小2"
  },
  {
    "kanji": "魚",
    "kanji_reading": "さかな",
    "on_reading": "ギョ",
    "kun_reading": "さかな",
    "tts_sentence": "さかな を みる",
    "tts_slow_sentence": "さかな を ゆっくり みる",
    "tags": "生き物",
    "grade": "小2"
  },
  {
    "kanji": "京",
    "kanji_reading": "きょう",
    "on_reading": "キョウ・ケイ",
    "kun_reading": NaN,
    "tts_sentence": "きょう の まち",
    "tts_slow_sentence": "きょう の まち を ゆっくり みる",
    "tags": "場所",
    "grade": "小2"
  },
  {
    "kanji": "強",
    "kanji_reading": "つよい",
    "on_reading": "キョウ・ゴウ",
    "kun_reading": "つよい",
    "tts_sentence": "つよい こえ で よぶ",
    "tts_slow_sentence": "つよい こえ で ゆっくり よぶ",
    "tags": "性質",
    "grade": "小2"
  },
  {
    "kanji": "教",
    "kanji_reading": "おしえる",
    "on_reading": "キョウ",
    "kun_reading": "おしえる・おそわる",
    "tts_sentence": "せんせい が おしえる",
    "tts_slow_sentence": "せんせい が ゆっくり おしえる",
    "tags": "学校",
    "grade": "小2"
  },
  {
    "kanji": "近",
    "kanji_reading": "ちかい",
    "on_reading": "キン",
    "kun_reading": "ちかい",
    "tts_sentence": "ちかい みち を あるく",
    "tts_slow_sentence": "ちかい みち を ゆっくり あるく",
    "tags": "位置",
    "grade": "小2"
  },
  {
    "kanji": "兄",
    "kanji_reading": "あに",
    "on_reading": "ケイ・キョウ",
    "kun_reading": "あに",
    "tts_sentence": "あに と あそぶ",
    "tts_slow_sentence": "あに と なかよく あそぶ",
    "tags": "人",
    "grade": "小2"
  },
  {
    "kanji": "形",
    "kanji_reading": "かたち",
    "on_reading": "ケイ・ギョウ",
    "kun_reading": "かたち",
    "tts_sentence": "かたち を つくる",
    "tts_slow_sentence": "かたち を ゆっくり つくる",
    "tags": "図工",
    "grade": "小2"
  },
  {
    "kanji": "計",
    "kanji_reading": "はかる",
    "on_reading": "ケイ",
    "kun_reading": "はかる",
    "tts_sentence": "じかん を はかる",
    "tts_slow_sentence": "じかん を ゆっくり はかる",
    "tags": "算数",
    "grade": "小2"
  },
  {
    "kanji": "元",
    "kanji_reading": "もと",
    "on_reading": "ゲン",
    "kun_reading": "もと",
    "tts_sentence": "もと に もどる",
    "tts_slow_sentence": "もと に ゆっくり もどる",
    "tags": "生活",
    "grade": "小2"
  },
  {
    "kanji": "原",
    "kanji_reading": "はら",
    "on_reading": "ゲン",
    "kun_reading": "はら",
    "tts_sentence": "はら を あるく",
    "tts_slow_sentence": "はら を ゆっくり あるく",
    "tags": "自然",
    "grade": "小2"
  },
  {
    "kanji": "戸",
    "kanji_reading": "と",
    "on_reading": "コ",
    "kun_reading": "と",
    "tts_sentence": "と を あける",
    "tts_slow_sentence": "と を そっと あける",
    "tags": "生活",
    "grade": "小2"
  },
  {
    "kanji": "古",
    "kanji_reading": "ふるい",
    "on_reading": "コ",
    "kun_reading": "ふるい・ふるす",
    "tts_sentence": "ふるい え を みる",
    "tts_slow_sentence": "ふるい え を ゆっくり みる",
    "tags": "生活",
    "grade": "小2"
  },
  {
    "kanji": "午",
    "kanji_reading": "ご",
    "on_reading": "ゴ",
    "kun_reading": NaN,
    "tts_sentence": "ごご に あそぶ",
    "tts_slow_sentence": "ごご に ゆっくり あそぶ",
    "tags": "時間",
    "grade": "小2"
  },
  {
    "kanji": "後",
    "kanji_reading": "あと",
    "on_reading": "ゴ・コウ",
    "kun_reading": "あと・のち・うしろ",
    "tts_sentence": "あと に つづく",
    "tts_slow_sentence": "あと に ゆっくり つづく",
    "tags": "時間",
    "grade": "小2"
  },
  {
    "kanji": "語",
    "kanji_reading": "ご",
    "on_reading": "ゴ",
    "kun_reading": "かたる・かたらう",
    "tts_sentence": "ことば を おぼえる",
    "tts_slow_sentence": "ことば を ゆっくり おぼえる",
    "tags": "学校",
    "grade": "小2"
  },
  {
    "kanji": "工",
    "kanji_reading": "こう",
    "on_reading": "コウ・ク",
    "kun_reading": NaN,
    "tts_sentence": "こうさく を する",
    "tts_slow_sentence": "こうさく を ゆっくり する",
    "tags": "図工",
    "grade": "小2"
  },
  {
    "kanji": "公",
    "kanji_reading": "おおやけ",
    "on_reading": "コウ",
    "kun_reading": "おおやけ",
    "tts_sentence": "こうえん に いく",
    "tts_slow_sentence": "こうえん に ゆっくり いく",
    "tags": "場所",
    "grade": "小2"
  },
  {
    "kanji": "広",
    "kanji_reading": "ひろい",
    "on_reading": "コウ",
    "kun_reading": "ひろい",
    "tts_sentence": "ひろい ばしょ で あそぶ",
    "tts_slow_sentence": "ひろい ばしょ で ゆっくり あそぶ",
    "tags": "場所",
    "grade": "小2"
  },
  {
    "kanji": "交",
    "kanji_reading": "まじわる",
    "on_reading": "コウ",
    "kun_reading": "まじわる・まじえる",
    "tts_sentence": "みち が まじわる",
    "tts_slow_sentence": "みち が ゆっくり まじわる",
    "tags": "場所",
    "grade": "小2"
  },
  {
    "kanji": "光",
    "kanji_reading": "ひかり",
    "on_reading": "コウ",
    "kun_reading": "ひかり",
    "tts_sentence": "ひかり が さす",
    "tts_slow_sentence": "ひかり が そっと さす",
    "tags": "自然",
    "grade": "小2"
  },
  {
    "kanji": "口",
    "kanji_reading": "くち",
    "on_reading": "コウ・ク",
    "kun_reading": "くち",
    "tts_sentence": "くち に いれる",
    "tts_slow_sentence": "くち に そっと いれる",
    "tags": "体",
    "grade": "小2"
  },
  {
    "kanji": "向",
    "kanji_reading": "むく",
    "on_reading": "コウ",
    "kun_reading": "むく・むける",
    "tts_sentence": "そら を むく",
    "tts_slow_sentence": "そら を ゆっくり むく",
    "tags": "生活",
    "grade": "小2"
  },
  {
    "kanji": "幸",
    "kanji_reading": "しあわせ",
    "on_reading": "コウ",
    "kun_reading": "さいわい",
    "tts_sentence": "しあわせ を ねがう",
    "tts_slow_sentence": "しあわせ を ゆっくり ねがう",
    "tags": "心",
    "grade": "小2"
  },
  {
    "kanji": "考",
    "kanji_reading": "かんがえる",
    "on_reading": "コウ",
    "kun_reading": "かんがえる",
    "tts_sentence": "こたえ を かんがえる",
    "tts_slow_sentence": "こたえ を ゆっくり かんがえる",
    "tags": "学校",
    "grade": "小2"
  },
  {
    "kanji": "行",
    "kanji_reading": "いく",
    "on_reading": "コウ・ギョウ",
    "kun_reading": "いく・ゆく",
    "tts_sentence": "みち を いく",
    "tts_slow_sentence": "みち を ゆっくり いく",
    "tags": "生活",
    "grade": "小2"
  },
  {
    "kanji": "高",
    "kanji_reading": "たかい",
    "on_reading": "コウ",
    "kun_reading": "たかい",
    "tts_sentence": "たかい たてもの",
    "tts_slow_sentence": "たかい たてもの を ゆっくり みる",
    "tags": "場所",
    "grade": "小2"
  },
  {
    "kanji": "黄",
    "kanji_reading": "きいろ",
    "on_reading": "コウ・オウ",
    "kun_reading": "き",
    "tts_sentence": "きいろい はな",
    "tts_slow_sentence": "きいろい はな を ゆっくり みる",
    "tags": "色",
    "grade": "小2"
  },
  {
    "kanji": "合",
    "kanji_reading": "あう",
    "on_reading": "ゴウ・ガッ",
    "kun_reading": "あう・あわせる",
    "tts_sentence": "こえ を あわせる",
    "tts_slow_sentence": "こえ を ゆっくり あわせる",
    "tags": "音楽",
    "grade": "小2"
  },
  {
    "kanji": "谷",
    "kanji_reading": "たに",
    "on_reading": "コク",
    "kun_reading": "たに",
    "tts_sentence": "たに を あるく",
    "tts_slow_sentence": "たに を ゆっくり あるく",
    "tags": "自然",
    "grade": "小2"
  },
  {
    "kanji": "国",
    "kanji_reading": "くに",
    "on_reading": "コク",
    "kun_reading": "くに",
    "tts_sentence": "くに を しる",
    "tts_slow_sentence": "くに を ゆっくり しる",
    "tags": "社会",
    "grade": "小2"
  },
  {
    "kanji": "黒",
    "kanji_reading": "くろ",
    "on_reading": "コク",
    "kun_reading": "くろ",
    "tts_sentence": "くろい そら",
    "tts_slow_sentence": "くろい そら を ゆっくり みる",
    "tags": "色",
    "grade": "小2"
  },
  {
    "kanji": "今",
    "kanji_reading": "いま",
    "on_reading": "コン",
    "kun_reading": "いま",
    "tts_sentence": "いま を しる",
    "tts_slow_sentence": "いま を ゆっくり しる",
    "tags": "時間",
    "grade": "小2"
  },
  {
    "kanji": "才",
    "kanji_reading": "さい",
    "on_reading": "サイ",
    "kun_reading": NaN,
    "tts_sentence": "なんさい ですか",
    "tts_slow_sentence": "なんさい ですか と",
    "tags": "ゆっくり きく",
    "grade": "質問"
  },
  {
    "kanji": "細",
    "kanji_reading": "ほそい",
    "on_reading": "サイ",
    "kun_reading": "ほそい",
    "tts_sentence": "ほそい いと",
    "tts_slow_sentence": "ほそい いと を ゆっくり みる",
    "tags": "もの",
    "grade": "小2"
  },
  {
    "kanji": "作",
    "kanji_reading": "つくる",
    "on_reading": "サク",
    "kun_reading": "つくる",
    "tts_sentence": "え を つくる",
    "tts_slow_sentence": "え を ゆっくり つくる",
    "tags": "図工",
    "grade": "小2"
  },
  {
    "kanji": "算",
    "kanji_reading": "さん",
    "on_reading": "サン",
    "kun_reading": "かぞえる",
    "tts_sentence": "さんすう を まなぶ",
    "tts_slow_sentence": "さんすう を ゆっくり まなぶ",
    "tags": "算数",
    "grade": "小2"
  },
  {
    "kanji": "引",
    "kanji_reading": "ひく",
    "on_reading": "イン",
    "kun_reading": "ひく・ひける",
    "tts_sentence": "ひも を ひく",
    "tts_slow_sentence": "ひも を ゆっくり ひく",
    "tags": "生活",
    "grade": "小2"
  },
  {
    "kanji": "羽",
    "kanji_reading": "はね",
    "on_reading": "ウ",
    "kun_reading": "はね・わ",
    "tts_sentence": "とり の はね を みる",
    "tts_slow_sentence": "とり の はね を そっと みる",
    "tags": "生き物",
    "grade": "小2"
  },
  {
    "kanji": "雲",
    "kanji_reading": "くも",
    "on_reading": "ウン",
    "kun_reading": "くも",
    "tts_sentence": "くも が うごく",
    "tts_slow_sentence": "くも が ゆっくり うごく",
    "tags": "自然",
    "grade": "小2"
  },
  {
    "kanji": "園",
    "kanji_reading": "その",
    "on_reading": "エン",
    "kun_reading": "その",
    "tts_sentence": "ようちえん に いく",
    "tts_slow_sentence": "ようちえん に ゆっくり いく",
    "tags": "場所",
    "grade": "小2"
  },
  {
    "kanji": "遠",
    "kanji_reading": "とおい",
    "on_reading": "エン・オン",
    "kun_reading": "とおい",
    "tts_sentence": "とおい まち を みる",
    "tts_slow_sentence": "とおい まち を ゆっくり みる",
    "tags": "場所",
    "grade": "小2"
  },
  {
    "kanji": "何",
    "kanji_reading": "なに",
    "on_reading": "カ",
    "kun_reading": "なに",
    "tts_sentence": "なに を もつ",
    "tts_slow_sentence": "なに を ゆっくり もつ",
    "tags": "質問",
    "grade": "小2"
  },
  {
    "kanji": "科",
    "kanji_reading": "か",
    "on_reading": "カ",
    "kun_reading": "しらべる",
    "tts_sentence": "かがく を まなぶ",
    "tts_slow_sentence": "かがく を ゆっくり まなぶ",
    "tags": "理科",
    "grade": "小2"
  },
  {
    "kanji": "夏",
    "kanji_reading": "なつ",
    "on_reading": "カ",
    "kun_reading": "なつ",
    "tts_sentence": "なつ に あそぶ",
    "tts_slow_sentence": "なつ に たのしく あそぶ",
    "tags": "季節",
    "grade": "小2"
  },
  {
    "kanji": "家",
    "kanji_reading": "いえ",
    "on_reading": "カ・ケ",
    "kun_reading": "いえ",
    "tts_sentence": "いえ に かえる",
    "tts_slow_sentence": "いえ に ゆっくり かえる",
    "tags": "場所",
    "grade": "小2"
  },
  {
    "kanji": "歌",
    "kanji_reading": "うた",
    "on_reading": "カ",
    "kun_reading": "うた・うたう",
    "tts_sentence": "うた を うたう",
    "tts_slow_sentence": "うた を ゆっくり うたう",
    "tags": "音楽",
    "grade": "小2"
  },
  {
    "kanji": "画",
    "kanji_reading": "え",
    "on_reading": "ガ・カク",
    "kun_reading": "え・かく",
    "tts_sentence": "え を かく",
    "tts_slow_sentence": "え を ゆっくり かく",
    "tags": "図工",
    "grade": "小2"
  },
  {
    "kanji": "回",
    "kanji_reading": "まわる",
    "on_reading": "カイ",
    "kun_reading": "まわる・まわす",
    "tts_sentence": "いす を まわす",
    "tts_slow_sentence": "いす を ゆっくり まわす",
    "tags": "生活",
    "grade": "小2"
  },
  {
    "kanji": "会",
    "kanji_reading": "あう",
    "on_reading": "カイ",
    "kun_reading": "あう・あつまる",
    "tts_sentence": "ともだち に あう",
    "tts_slow_sentence": "ともだち に なかよく あう",
    "tags": "人",
    "grade": "小2"
  },
  {
    "kanji": "海",
    "kanji_reading": "うみ",
    "on_reading": "カイ",
    "kun_reading": "うみ",
    "tts_sentence": "うみ を みる",
    "tts_slow_sentence": "うみ を ゆっくり みる",
    "tags": "自然",
    "grade": "小2"
  },
  {
    "kanji": "絵",
    "kanji_reading": "え",
    "on_reading": "カイ・エ",
    "kun_reading": "え",
    "tts_sentence": "え を かく",
    "tts_slow_sentence": "え を ゆっくり かく",
    "tags": "図工",
    "grade": "小2"
  },
  {
    "kanji": "外",
    "kanji_reading": "そと",
    "on_reading": "ガイ・ゲ",
    "kun_reading": "そと",
    "tts_sentence": "そと で あそぶ",
    "tts_slow_sentence": "そと で たのしく あそぶ",
    "tags": "場所",
    "grade": "小2"
  },
  {
    "kanji": "角",
    "kanji_reading": "かど",
    "on_reading": "カク",
    "kun_reading": "かど・つの",
    "tts_sentence": "かど を まがる",
    "tts_slow_sentence": "かど を ゆっくり まがる",
    "tags": "位置",
    "grade": "小2"
  },
  {
    "kanji": "楽",
    "kanji_reading": "たのしい",
    "on_reading": "ガク・ラク",
    "kun_reading": "たのしい・たのしむ",
    "tts_sentence": "おんがく を きく",
    "tts_slow_sentence": "おんがく を ゆっくり きく",
    "tags": "音楽",
    "grade": "小2"
  },
  {
    "kanji": "活",
    "kanji_reading": "いきる",
    "on_reading": "カツ",
    "kun_reading": "いきる",
    "tts_sentence": "いきいき と あるく",
    "tts_slow_sentence": "いきいき と ゆっくり あるく",
    "tags": "生活",
    "grade": "小2"
  },
  {
    "kanji": "間",
    "kanji_reading": "あいだ",
    "on_reading": "カン・ケン",
    "kun_reading": "あいだ・ま",
    "tts_sentence": "つくえ の あいだ",
    "tts_slow_sentence": "つくえ の あいだ を ゆっくり みる",
    "tags": "位置",
    "grade": "小2"
  },
  {
    "kanji": "丸",
    "kanji_reading": "まるい",
    "on_reading": "ガン",
    "kun_reading": "まる・まるい",
    "tts_sentence": "まる を かく",
    "tts_slow_sentence": "まる を ゆっくり かく",
    "tags": "形",
    "grade": "小2"
  },
  {
    "kanji": "岩",
    "kanji_reading": "いわ",
    "on_reading": "ガン",
    "kun_reading": "いわ",
    "tts_sentence": "いわ に のぼる",
    "tts_slow_sentence": "いわ に そっと のぼる",
    "tags": "自然",
    "grade": "小2"
  },
  {
    "kanji": "顔",
    "kanji_reading": "かお",
    "on_reading": "ガン",
    "kun_reading": "かお",
    "tts_sentence": "かお を あらう",
    "tts_slow_sentence": "かお を ゆっくり あらう",
    "tags": "体",
    "grade": "小2"
  },
  {
    "kanji": "気",
    "kanji_reading": "き",
    "on_reading": "キ・ケ",
    "kun_reading": "き",
    "tts_sentence": "きもち を つたえる",
    "tts_slow_sentence": "きもち を やさしく つたえる",
    "tags": "心",
    "grade": "小2"
  },
  {
    "kanji": "記",
    "kanji_reading": "しるす",
    "on_reading": "キ",
    "kun_reading": "しるす",
    "tts_sentence": "ノート に しるす",
    "tts_slow_sentence": "ノート に ゆっくり しるす",
    "tags": "学校",
    "grade": "小2"
  },
  {
    "kanji": "帰",
    "kanji_reading": "かえる",
    "on_reading": "キ",
    "kun_reading": "かえる",
    "tts_sentence": "いえ に かえる",
    "tts_slow_sentence": "いえ に ゆっくり かえる",
    "tags": "生活",
    "grade": "小2"
  },
  {
    "kanji": "弓",
    "kanji_reading": "ゆみ",
    "on_reading": "キュウ",
    "kun_reading": "ゆみ",
    "tts_sentence": "ゆみ を ひく",
    "tts_slow_sentence": "ゆみ を ゆっくり ひく",
    "tags": "生活",
    "grade": "小2"
  },
  {
    "kanji": "牛",
    "kanji_reading": "うし",
    "on_reading": "ギュウ",
    "kun_reading": "うし",
    "tts_sentence": "うし を みる",
    "tts_slow_sentence": "うし を ゆっくり みる",
    "tags": "生き物",
    "grade": "小2"
  },
  {
    "kanji": "魚",
    "kanji_reading": "さかな",
    "on_reading": "ギョ",
    "kun_reading": "さかな",
    "tts_sentence": "さかな を みる",
    "tts_slow_sentence": "さかな を ゆっくり みる",
    "tags": "生き物",
    "grade": "小2"
  },
  {
    "kanji": "京",
    "kanji_reading": "きょう",
    "on_reading": "キョウ・ケイ",
    "kun_reading": NaN,
    "tts_sentence": "きょう の まち",
    "tts_slow_sentence": "きょう の まち を ゆっくり みる",
    "tags": "場所",
    "grade": "小2"
  },
  {
    "kanji": "強",
    "kanji_reading": "つよい",
    "on_reading": "キョウ・ゴウ",
    "kun_reading": "つよい",
    "tts_sentence": "つよい こえ で よぶ",
    "tts_slow_sentence": "つよい こえ で ゆっくり よぶ",
    "tags": "性質",
    "grade": "小2"
  },
  {
    "kanji": "教",
    "kanji_reading": "おしえる",
    "on_reading": "キョウ",
    "kun_reading": "おしえる・おそわる",
    "tts_sentence": "せんせい が おしえる",
    "tts_slow_sentence": "せんせい が ゆっくり おしえる",
    "tags": "学校",
    "grade": "小2"
  },
  {
    "kanji": "近",
    "kanji_reading": "ちかい",
    "on_reading": "キン",
    "kun_reading": "ちかい",
    "tts_sentence": "ちかい みち を あるく",
    "tts_slow_sentence": "ちかい みち を ゆっくり あるく",
    "tags": "位置",
    "grade": "小2"
  },
  {
    "kanji": "兄",
    "kanji_reading": "あに",
    "on_reading": "ケイ・キョウ",
    "kun_reading": "あに",
    "tts_sentence": "あに と あそぶ",
    "tts_slow_sentence": "あに と なかよく あそぶ",
    "tags": "人",
    "grade": "小2"
  },
  {
    "kanji": "形",
    "kanji_reading": "かたち",
    "on_reading": "ケイ・ギョウ",
    "kun_reading": "かたち",
    "tts_sentence": "かたち を つくる",
    "tts_slow_sentence": "かたち を ゆっくり つくる",
    "tags": "図工",
    "grade": "小2"
  },
  {
    "kanji": "計",
    "kanji_reading": "はかる",
    "on_reading": "ケイ",
    "kun_reading": "はかる",
    "tts_sentence": "じかん を はかる",
    "tts_slow_sentence": "じかん を ゆっくり はかる",
    "tags": "算数",
    "grade": "小2"
  },
  {
    "kanji": "元",
    "kanji_reading": "もと",
    "on_reading": "ゲン",
    "kun_reading": "もと",
    "tts_sentence": "もと に もどる",
    "tts_slow_sentence": "もと に ゆっくり もどる",
    "tags": "生活",
    "grade": "小2"
  },
  {
    "kanji": "原",
    "kanji_reading": "はら",
    "on_reading": "ゲン",
    "kun_reading": "はら",
    "tts_sentence": "はら を あるく",
    "tts_slow_sentence": "はら を ゆっくり あるく",
    "tags": "自然",
    "grade": "小2"
  },
  {
    "kanji": "戸",
    "kanji_reading": "と",
    "on_reading": "コ",
    "kun_reading": "と",
    "tts_sentence": "と を あける",
    "tts_slow_sentence": "と を そっと あける",
    "tags": "生活",
    "grade": "小2"
  },
  {
    "kanji": "古",
    "kanji_reading": "ふるい",
    "on_reading": "コ",
    "kun_reading": "ふるい・ふるす",
    "tts_sentence": "ふるい え を みる",
    "tts_slow_sentence": "ふるい え を ゆっくり みる",
    "tags": "生活",
    "grade": "小2"
  },
  {
    "kanji": "午",
    "kanji_reading": "ご",
    "on_reading": "ゴ",
    "kun_reading": NaN,
    "tts_sentence": "ごご に あそぶ",
    "tts_slow_sentence": "ごご に ゆっくり あそぶ",
    "tags": "時間",
    "grade": "小2"
  },
  {
    "kanji": "後",
    "kanji_reading": "あと",
    "on_reading": "ゴ・コウ",
    "kun_reading": "あと・のち・うしろ",
    "tts_sentence": "あと に つづく",
    "tts_slow_sentence": "あと に ゆっくり つづく",
    "tags": "時間",
    "grade": "小2"
  },
  {
    "kanji": "語",
    "kanji_reading": "ご",
    "on_reading": "ゴ",
    "kun_reading": "かたる・かたらう",
    "tts_sentence": "ことば を おぼえる",
    "tts_slow_sentence": "ことば を ゆっくり おぼえる",
    "tags": "学校",
    "grade": "小2"
  },
  {
    "kanji": "工",
    "kanji_reading": "こう",
    "on_reading": "コウ・ク",
    "kun_reading": NaN,
    "tts_sentence": "こうさく を する",
    "tts_slow_sentence": "こうさく を ゆっくり する",
    "tags": "図工",
    "grade": "小2"
  },
  {
    "kanji": "公",
    "kanji_reading": "おおやけ",
    "on_reading": "コウ",
    "kun_reading": "おおやけ",
    "tts_sentence": "こうえん に いく",
    "tts_slow_sentence": "こうえん に ゆっくり いく",
    "tags": "場所",
    "grade": "小2"
  },
  {
    "kanji": "広",
    "kanji_reading": "ひろい",
    "on_reading": "コウ",
    "kun_reading": "ひろい",
    "tts_sentence": "ひろい ばしょ で あそぶ",
    "tts_slow_sentence": "ひろい ばしょ で ゆっくり あそぶ",
    "tags": "場所",
    "grade": "小2"
  },
  {
    "kanji": "交",
    "kanji_reading": "まじわる",
    "on_reading": "コウ",
    "kun_reading": "まじわる・まじえる",
    "tts_sentence": "みち が まじわる",
    "tts_slow_sentence": "みち が ゆっくり まじわる",
    "tags": "場所",
    "grade": "小2"
  },
  {
    "kanji": "光",
    "kanji_reading": "ひかり",
    "on_reading": "コウ",
    "kun_reading": "ひかり",
    "tts_sentence": "ひかり が さす",
    "tts_slow_sentence": "ひかり が そっと さす",
    "tags": "自然",
    "grade": "小2"
  },
  {
    "kanji": "口",
    "kanji_reading": "くち",
    "on_reading": "コウ・ク",
    "kun_reading": "くち",
    "tts_sentence": "くち に いれる",
    "tts_slow_sentence": "くち に そっと いれる",
    "tags": "体",
    "grade": "小2"
  },
  {
    "kanji": "向",
    "kanji_reading": "むく",
    "on_reading": "コウ",
    "kun_reading": "むく・むける",
    "tts_sentence": "そら を むく",
    "tts_slow_sentence": "そら を ゆっくり むく",
    "tags": "生活",
    "grade": "小2"
  },
  {
    "kanji": "幸",
    "kanji_reading": "しあわせ",
    "on_reading": "コウ",
    "kun_reading": "さいわい",
    "tts_sentence": "しあわせ を ねがう",
    "tts_slow_sentence": "しあわせ を ゆっくり ねがう",
    "tags": "心",
    "grade": "小2"
  },
  {
    "kanji": "考",
    "kanji_reading": "かんがえる",
    "on_reading": "コウ",
    "kun_reading": "かんがえる",
    "tts_sentence": "こたえ を かんがえる",
    "tts_slow_sentence": "こたえ を ゆっくり かんがえる",
    "tags": "学校",
    "grade": "小2"
  },
  {
    "kanji": "行",
    "kanji_reading": "いく",
    "on_reading": "コウ・ギョウ",
    "kun_reading": "いく・ゆく",
    "tts_sentence": "みち を いく",
    "tts_slow_sentence": "みち を ゆっくり いく",
    "tags": "生活",
    "grade": "小2"
  },
  {
    "kanji": "高",
    "kanji_reading": "たかい",
    "on_reading": "コウ",
    "kun_reading": "たかい",
    "tts_sentence": "たかい たてもの",
    "tts_slow_sentence": "たかい たてもの を ゆっくり みる",
    "tags": "場所",
    "grade": "小2"
  },
  {
    "kanji": "黄",
    "kanji_reading": "きいろ",
    "on_reading": "コウ・オウ",
    "kun_reading": "き",
    "tts_sentence": "きいろい はな",
    "tts_slow_sentence": "きいろい はな を ゆっくり みる",
    "tags": "色",
    "grade": "小2"
  },
  {
    "kanji": "合",
    "kanji_reading": "あう",
    "on_reading": "ゴウ・ガッ",
    "kun_reading": "あう・あわせる",
    "tts_sentence": "こえ を あわせる",
    "tts_slow_sentence": "こえ を ゆっくり あわせる",
    "tags": "音楽",
    "grade": "小2"
  },
  {
    "kanji": "谷",
    "kanji_reading": "たに",
    "on_reading": "コク",
    "kun_reading": "たに",
    "tts_sentence": "たに を あるく",
    "tts_slow_sentence": "たに を ゆっくり あるく",
    "tags": "自然",
    "grade": "小2"
  },
  {
    "kanji": "国",
    "kanji_reading": "くに",
    "on_reading": "コク",
    "kun_reading": "くに",
    "tts_sentence": "くに を しる",
    "tts_slow_sentence": "くに を ゆっくり しる",
    "tags": "社会",
    "grade": "小2"
  },
  {
    "kanji": "黒",
    "kanji_reading": "くろ",
    "on_reading": "コク",
    "kun_reading": "くろ",
    "tts_sentence": "くろい そら",
    "tts_slow_sentence": "くろい そら を ゆっくり みる",
    "tags": "色",
    "grade": "小2"
  },
  {
    "kanji": "今",
    "kanji_reading": "いま",
    "on_reading": "コン",
    "kun_reading": "いま",
    "tts_sentence": "いま を しる",
    "tts_slow_sentence": "いま を ゆっくり しる",
    "tags": "時間",
    "grade": "小2"
  },
  {
    "kanji": "才",
    "kanji_reading": "さい",
    "on_reading": "サイ",
    "kun_reading": NaN,
    "tts_sentence": "なんさい ですか",
    "tts_slow_sentence": "なんさい ですか と",
    "tags": "ゆっくり きく",
    "grade": "質問"
  },
  {
    "kanji": "細",
    "kanji_reading": "ほそい",
    "on_reading": "サイ",
    "kun_reading": "ほそい",
    "tts_sentence": "ほそい いと",
    "tts_slow_sentence": "ほそい いと を ゆっくり みる",
    "tags": "もの",
    "grade": "小2"
  },
  {
    "kanji": "作",
    "kanji_reading": "つくる",
    "on_reading": "サク",
    "kun_reading": "つくる",
    "tts_sentence": "え を つくる",
    "tts_slow_sentence": "え を ゆっくり つくる",
    "tags": "図工",
    "grade": "小2"
  },
  {
    "kanji": "算",
    "kanji_reading": "さん",
    "on_reading": "サン",
    "kun_reading": "かぞえる",
    "tts_sentence": "さんすう を まなぶ",
    "tts_slow_sentence": "さんすう を ゆっくり まなぶ",
    "tags": "算数",
    "grade": "小2"
  },
  {
    "kanji": "南,みなみ,ナン・ナ,みなみ,みなみ の そら,みなみ の そら を、ゆっくり みる,方向,小2",
    "kanji_reading": NaN,
    "on_reading": NaN,
    "kun_reading": NaN,
    "tts_sentence": NaN,
    "tts_slow_sentence": NaN,
    "tags": NaN,
    "grade": NaN
  },
  {
    "kanji": "肉,にく,ニク,,にく を たべる,にく を、ゆっくり たべる,生活,小2",
    "kanji_reading": NaN,
    "on_reading": NaN,
    "kun_reading": NaN,
    "tts_sentence": NaN,
    "tts_slow_sentence": NaN,
    "tags": NaN,
    "grade": NaN
  },
  {
    "kanji": "馬,うま,バ,うま,うま を みる,うま を、ゆっくり みる,生き物,小2",
    "kanji_reading": NaN,
    "on_reading": NaN,
    "kun_reading": NaN,
    "tts_sentence": NaN,
    "tts_slow_sentence": NaN,
    "tags": NaN,
    "grade": NaN
  },
  {
    "kanji": "売,うる,バイ,うる・うれる,もの を うる,もの を、ゆっくり うる,生活,小2",
    "kanji_reading": NaN,
    "on_reading": NaN,
    "kun_reading": NaN,
    "tts_sentence": NaN,
    "tts_slow_sentence": NaN,
    "tags": NaN,
    "grade": NaN
  },
  {
    "kanji": "麦,むぎ,バク,むぎ,むぎ を そだてる,むぎ を、ゆっくり そだてる,自然,小2",
    "kanji_reading": NaN,
    "on_reading": NaN,
    "kun_reading": NaN,
    "tts_sentence": NaN,
    "tts_slow_sentence": NaN,
    "tags": NaN,
    "grade": NaN
  },
  {
    "kanji": "半,はん,ハン,,はんぶん に する,はんぶん に、ゆっくり する,算数,小2",
    "kanji_reading": NaN,
    "on_reading": NaN,
    "kun_reading": NaN,
    "tts_sentence": NaN,
    "tts_slow_sentence": NaN,
    "tags": NaN,
    "grade": NaN
  },
  {
    "kanji": "番,ばん,バン,,ばんごう を よむ,ばんごう を、ゆっくり よむ,学校,小2",
    "kanji_reading": NaN,
    "on_reading": NaN,
    "kun_reading": NaN,
    "tts_sentence": NaN,
    "tts_slow_sentence": NaN,
    "tags": NaN,
    "grade": NaN
  },
  {
    "kanji": "父,ちち,フ,ちち,ちち と はなす,ちち と、ゆっくり はなす,家族,小2",
    "kanji_reading": NaN,
    "on_reading": NaN,
    "kun_reading": NaN,
    "tts_sentence": NaN,
    "tts_slow_sentence": NaN,
    "tags": NaN,
    "grade": NaN
  },
  {
    "kanji": "風,かぜ,フウ・フ,かぜ,かぜ が ふく,かぜ が、ゆっくり ふく,自然,小2",
    "kanji_reading": NaN,
    "on_reading": NaN,
    "kun_reading": NaN,
    "tts_sentence": NaN,
    "tts_slow_sentence": NaN,
    "tags": NaN,
    "grade": NaN
  },
  {
    "kanji": "分,わける,ブン・フン,わける・わかる,りんご を わける,りんご を、ゆっくり わける,生活,小2",
    "kanji_reading": NaN,
    "on_reading": NaN,
    "kun_reading": NaN,
    "tts_sentence": NaN,
    "tts_slow_sentence": NaN,
    "tags": NaN,
    "grade": NaN
  },
  {
    "kanji": "聞,きく,ブン・モン,きく・きこえる,おんがく を きく,おんがく を、ゆっくり きく,音楽,小2",
    "kanji_reading": NaN,
    "on_reading": NaN,
    "kun_reading": NaN,
    "tts_sentence": NaN,
    "tts_slow_sentence": NaN,
    "tags": NaN,
    "grade": NaN
  },
  {
    "kanji": "米,こめ,ベイ・マイ,こめ,こめ を とぐ,こめ を、ゆっくり とぐ,生活,小2",
    "kanji_reading": NaN,
    "on_reading": NaN,
    "kun_reading": NaN,
    "tts_sentence": NaN,
    "tts_slow_sentence": NaN,
    "tags": NaN,
    "grade": NaN
  },
  {
    "kanji": "歩,あるく,ホ・ブ,あるく・あゆむ,みち を あるく,みち を、ゆっくり あるく,生活,小2",
    "kanji_reading": NaN,
    "on_reading": NaN,
    "kun_reading": NaN,
    "tts_sentence": NaN,
    "tts_slow_sentence": NaN,
    "tags": NaN,
    "grade": NaN
  },
  {
    "kanji": "母,はは,ボ,はは,はは と はなす,はは と、ゆっくり はなす,家族,小2",
    "kanji_reading": NaN,
    "on_reading": NaN,
    "kun_reading": NaN,
    "tts_sentence": NaN,
    "tts_slow_sentence": NaN,
    "tags": NaN,
    "grade": NaN
  },
  {
    "kanji": "方,かた,ホウ,かた・ほう,なにか の ほう を みる,なにか の ほう を、ゆっくり みる,方向,小2",
    "kanji_reading": NaN,
    "on_reading": NaN,
    "kun_reading": NaN,
    "tts_sentence": NaN,
    "tts_slow_sentence": NaN,
    "tags": NaN,
    "grade": NaN
  },
  {
    "kanji": "北,きた,ホク,きた,きた の そら,きた の そら を、ゆっくり みる,方向,小2",
    "kanji_reading": NaN,
    "on_reading": NaN,
    "kun_reading": NaN,
    "tts_sentence": NaN,
    "tts_slow_sentence": NaN,
    "tags": NaN,
    "grade": NaN
  },
  {
    "kanji": "妹,いもうと,マイ,いもうと,いもうと と あそぶ,いもうと と、なかよく あそぶ,家族,小2",
    "kanji_reading": NaN,
    "on_reading": NaN,
    "kun_reading": NaN,
    "tts_sentence": NaN,
    "tts_slow_sentence": NaN,
    "tags": NaN,
    "grade": NaN
  },
  {
    "kanji": "万,まん,マン,,まんてん を ねらう,まんてん を、ゆっくり ねらう,学校,小2",
    "kanji_reading": NaN,
    "on_reading": NaN,
    "kun_reading": NaN,
    "tts_sentence": NaN,
    "tts_slow_sentence": NaN,
    "tags": NaN,
    "grade": NaN
  },
  {
    "kanji": "明,あかるい,メイ・ミョウ,あかるい,あかるい あさ,あかるい あさ を、ゆっくり みる,時間,小2",
    "kanji_reading": NaN,
    "on_reading": NaN,
    "kun_reading": NaN,
    "tts_sentence": NaN,
    "tts_slow_sentence": NaN,
    "tags": NaN,
    "grade": NaN
  },
  {
    "kanji": "鳴,なく,メイ,なく,とり が なく,とり が、ゆっくり なく,自然,小2",
    "kanji_reading": NaN,
    "on_reading": NaN,
    "kun_reading": NaN,
    "tts_sentence": NaN,
    "tts_slow_sentence": NaN,
    "tags": NaN,
    "grade": NaN
  },
  {
    "kanji": "毛,け,モウ,け,け を ふく,け を、そっと ふく,体,小2",
    "kanji_reading": NaN,
    "on_reading": NaN,
    "kun_reading": NaN,
    "tts_sentence": NaN,
    "tts_slow_sentence": NaN,
    "tags": NaN,
    "grade": NaN
  },
  {
    "kanji": "門,もん,モン,,もん を とおる,もん を、ゆっくり とおる,場所,小2",
    "kanji_reading": NaN,
    "on_reading": NaN,
    "kun_reading": NaN,
    "tts_sentence": NaN,
    "tts_slow_sentence": NaN,
    "tags": NaN,
    "grade": NaN
  },
  {
    "kanji": "夜,よる,ヤ,よる,よる に ねる,よる に、ゆっくり ねる,時間,小2",
    "kanji_reading": NaN,
    "on_reading": NaN,
    "kun_reading": NaN,
    "tts_sentence": NaN,
    "tts_slow_sentence": NaN,
    "tags": NaN,
    "grade": NaN
  },
  {
    "kanji": "野,の,ヤ,の,の はら で あそぶ,の はら で、ゆっくり あそぶ,自然,小2",
    "kanji_reading": NaN,
    "on_reading": NaN,
    "kun_reading": NaN,
    "tts_sentence": NaN,
    "tts_slow_sentence": NaN,
    "tags": NaN,
    "grade": NaN
  },
  {
    "kanji": "友,とも,ユウ,とも,ともだち と あそぶ,ともだち と、なかよく あそぶ,人,小2",
    "kanji_reading": NaN,
    "on_reading": NaN,
    "kun_reading": NaN,
    "tts_sentence": NaN,
    "tts_slow_sentence": NaN,
    "tags": NaN,
    "grade": NaN
  },
  {
    "kanji": "用,よう,ヨウ,,ようじ を する,ようじ を、ゆっくり する,生活,小2",
    "kanji_reading": NaN,
    "on_reading": NaN,
    "kun_reading": NaN,
    "tts_sentence": NaN,
    "tts_slow_sentence": NaN,
    "tags": NaN,
    "grade": NaN
  },
  {
    "kanji": "曜,よう,ヨウ,,げつようび に いく,げつようび に、ゆっくり いく,時間,小2",
    "kanji_reading": NaN,
    "on_reading": NaN,
    "kun_reading": NaN,
    "tts_sentence": NaN,
    "tts_slow_sentence": NaN,
    "tags": NaN,
    "grade": NaN
  },
  {
    "kanji": "来,くる,ライ,くる・きたる,あした が くる,あした が、ゆっくり くる,時間,小2",
    "kanji_reading": NaN,
    "on_reading": NaN,
    "kun_reading": NaN,
    "tts_sentence": NaN,
    "tts_slow_sentence": NaN,
    "tags": NaN,
    "grade": NaN
  },
  {
    "kanji": "里,さと,リ,さと,さと に かえる,さと に、ゆっくり かえる,場所,小2",
    "kanji_reading": NaN,
    "on_reading": NaN,
    "kun_reading": NaN,
    "tts_sentence": NaN,
    "tts_slow_sentence": NaN,
    "tags": NaN,
    "grade": NaN
  },
  {
    "kanji": "理,り,リ,,りか の じっけん,りか の じっけん を、ゆっくり みる,学校,小2",
    "kanji_reading": NaN,
    "on_reading": NaN,
    "kun_reading": NaN,
    "tts_sentence": NaN,
    "tts_slow_sentence": NaN,
    "tags": NaN,
    "grade": NaN
  },
  {
    "kanji": "話,はなす,ワ,はなす,みんな で はなす,みんな で、ゆっくり はなす,学校,小2",
    "kanji_reading": NaN,
    "on_reading": NaN,
    "kun_reading": NaN,
    "tts_sentence": NaN,
    "tts_slow_sentence": NaN,
    "tags": NaN,
    "grade": NaN
  },
  {
    "kanji": "悪",
    "kanji_reading": "わるい",
    "on_reading": "アク",
    "kun_reading": "わるい",
    "tts_sentence": "わるい こと を しない",
    "tts_slow_sentence": "わるい こと を しない よう に する",
    "tags": "道徳",
    "grade": "小3"
  },
  {
    "kanji": "安",
    "kanji_reading": "やすい",
    "on_reading": "アン",
    "kun_reading": "やすい",
    "tts_sentence": "やすい りんご を かう",
    "tts_slow_sentence": "やすい りんご を ゆっくり かう",
    "tags": "生活",
    "grade": "小3"
  },
  {
    "kanji": "暗",
    "kanji_reading": "くらい",
    "on_reading": "アン",
    "kun_reading": "くらい",
    "tts_sentence": "へや が くらく なる",
    "tts_slow_sentence": "へや が ゆっくり くらく なる",
    "tags": "自然",
    "grade": "小3"
  },
  {
    "kanji": "医",
    "kanji_reading": "い",
    "on_reading": "イ",
    "kun_reading": NaN,
    "tts_sentence": "いしゃ に みてもらう",
    "tts_slow_sentence": "いしゃ に ゆっくり みてもらう",
    "tags": "生活",
    "grade": "小3"
  },
  {
    "kanji": "委",
    "kanji_reading": "い",
    "on_reading": "イ",
    "kun_reading": NaN,
    "tts_sentence": "いいん に えらばれる",
    "tts_slow_sentence": "いいん に ゆっくり えらばれる",
    "tags": "学校",
    "grade": "小3"
  },
  {
    "kanji": "育",
    "kanji_reading": "そだつ",
    "on_reading": "イク",
    "kun_reading": "そだつ・そだてる",
    "tts_sentence": "はな を そだてる",
    "tts_slow_sentence": "はな を ゆっくり そだてる",
    "tags": "生活",
    "grade": "小3"
  },
  {
    "kanji": "員",
    "kanji_reading": "いん",
    "on_reading": "イン",
    "kun_reading": NaN,
    "tts_sentence": "がくいん の せんせい",
    "tts_slow_sentence": "がくいん の せんせい を ゆっくり よぶ",
    "tags": "学校",
    "grade": "小3"
  },
  {
    "kanji": "院",
    "kanji_reading": "いん",
    "on_reading": "イン",
    "kun_reading": NaN,
    "tts_sentence": "びょういん に いく",
    "tts_slow_sentence": "びょういん に ゆっくり いく",
    "tags": "場所",
    "grade": "小3"
  },
  {
    "kanji": "飲",
    "kanji_reading": "のむ",
    "on_reading": "イン",
    "kun_reading": "のむ",
    "tts_sentence": "みず を のむ",
    "tts_slow_sentence": "みず を ゆっくり のむ",
    "tags": "生活",
    "grade": "小3"
  },
  {
    "kanji": "運",
    "kanji_reading": "はこぶ",
    "on_reading": "ウン",
    "kun_reading": "はこぶ・うんじる",
    "tts_sentence": "にもつ を はこぶ",
    "tts_slow_sentence": "にもつ を ゆっくり はこぶ",
    "tags": "生活",
    "grade": "小3"
  },
  {
    "kanji": "泳",
    "kanji_reading": "およぐ",
    "on_reading": "エイ",
    "kun_reading": "およぐ",
    "tts_sentence": "プール で およぐ",
    "tts_slow_sentence": "プール で ゆっくり およぐ",
    "tags": "運動",
    "grade": "小3"
  },
  {
    "kanji": "駅",
    "kanji_reading": "えき",
    "on_reading": "エキ",
    "kun_reading": NaN,
    "tts_sentence": "えき に いく",
    "tts_slow_sentence": "えき に ゆっくり いく",
    "tags": "場所",
    "grade": "小3"
  },
  {
    "kanji": "央",
    "kanji_reading": "おう",
    "on_reading": "オウ",
    "kun_reading": NaN,
    "tts_sentence": "ちゅうおう の みち",
    "tts_slow_sentence": "ちゅうおう の みち を ゆっくり あるく",
    "tags": "場所",
    "grade": "小3"
  },
  {
    "kanji": "横",
    "kanji_reading": "よこ",
    "on_reading": "オウ",
    "kun_reading": "よこ",
    "tts_sentence": "よこ に ならぶ",
    "tts_slow_sentence": "よこ に ゆっくり ならぶ",
    "tags": "位置",
    "grade": "小3"
  },
  {
    "kanji": "屋",
    "kanji_reading": "や",
    "on_reading": "オク",
    "kun_reading": "や",
    "tts_sentence": "やおや に いく",
    "tts_slow_sentence": "やおや に ゆっくり いく",
    "tags": "場所",
    "grade": "小3"
  },
  {
    "kanji": "温",
    "kanji_reading": "あたたかい",
    "on_reading": "オン",
    "kun_reading": "あたたかい",
    "tts_sentence": "おんせん が あたたかい",
    "tts_slow_sentence": "おんせん が ゆっくり あたたかい",
    "tags": "自然",
    "grade": "小3"
  },
  {
    "kanji": "化",
    "kanji_reading": "ばける",
    "on_reading": "カ",
    "kun_reading": "ばける",
    "tts_sentence": "もの が ばける",
    "tts_slow_sentence": "もの が ゆっくり ばける",
    "tags": "理科",
    "grade": "小3"
  },
  {
    "kanji": "荷",
    "kanji_reading": "に",
    "on_reading": "カ",
    "kun_reading": "に",
    "tts_sentence": "にもつ を はこぶ",
    "tts_slow_sentence": "にもつ を ゆっくり はこぶ",
    "tags": "生活",
    "grade": "小3"
  },
  {
    "kanji": "界",
    "kanji_reading": "かい",
    "on_reading": "カイ",
    "kun_reading": NaN,
    "tts_sentence": "せかい を しる",
    "tts_slow_sentence": "せかい を ゆっくり しる",
    "tags": "社会",
    "grade": "小3"
  },
  {
    "kanji": "開",
    "kanji_reading": "ひらく",
    "on_reading": "カイ",
    "kun_reading": "ひらく・あく",
    "tts_sentence": "まど を ひらく",
    "tts_slow_sentence": "まど を ゆっくり ひらく",
    "tags": "生活",
    "grade": "小3"
  },
  {
    "kanji": "階",
    "kanji_reading": "かい",
    "on_reading": "カイ",
    "kun_reading": NaN,
    "tts_sentence": "にかい に のぼる",
    "tts_slow_sentence": "にかい に ゆっくり のぼる",
    "tags": "場所",
    "grade": "小3"
  },
  {
    "kanji": "寒",
    "kanji_reading": "さむい",
    "on_reading": "カン",
    "kun_reading": "さむい",
    "tts_sentence": "ふゆ は さむい",
    "tts_slow_sentence": "ふゆ は ゆっくり さむい",
    "tags": "季節",
    "grade": "小3"
  },
  {
    "kanji": "感",
    "kanji_reading": "かんじる",
    "on_reading": "カン",
    "kun_reading": "かんじる",
    "tts_sentence": "きもち を かんじる",
    "tts_slow_sentence": "きもち を ゆっくり かんじる",
    "tags": "心",
    "grade": "小3"
  },
  {
    "kanji": "漢",
    "kanji_reading": "かん",
    "on_reading": "カン",
    "kun_reading": NaN,
    "tts_sentence": "かんじ を ならう",
    "tts_slow_sentence": "かんじ を ゆっくり ならう",
    "tags": "学校",
    "grade": "小3"
  },
  {
    "kanji": "館",
    "kanji_reading": "やかた",
    "on_reading": "カン",
    "kun_reading": "やかた",
    "tts_sentence": "としょかん に いく",
    "tts_slow_sentence": "としょかん に ゆっくり いく",
    "tags": "場所",
    "grade": "小3"
  },
  {
    "kanji": "岸",
    "kanji_reading": "きし",
    "on_reading": "ガン",
    "kun_reading": "きし",
    "tts_sentence": "かわぎし を あるく",
    "tts_slow_sentence": "かわぎし を ゆっくり あるく",
    "tags": "自然",
    "grade": "小3"
  },
  {
    "kanji": "起",
    "kanji_reading": "おきる",
    "on_reading": "キ",
    "kun_reading": "おきる・おこす",
    "tts_sentence": "あさ はやく おきる",
    "tts_slow_sentence": "あさ はやく ゆっくり おきる",
    "tags": "生活",
    "grade": "小3"
  },
  {
    "kanji": "期",
    "kanji_reading": "き",
    "on_reading": "キ",
    "kun_reading": NaN,
    "tts_sentence": "がっき が はじまる",
    "tts_slow_sentence": "がっき が ゆっくり はじまる",
    "tags": "学校",
    "grade": "小3"
  },
  {
    "kanji": "客",
    "kanji_reading": "きゃく",
    "on_reading": "キャク",
    "kun_reading": NaN,
    "tts_sentence": "おきゃくさん が くる",
    "tts_slow_sentence": "おきゃくさん が ゆっくり くる",
    "tags": "社会",
    "grade": "小3"
  },
  {
    "kanji": "級",
    "kanji_reading": "きゅう",
    "on_reading": "キュウ",
    "kun_reading": NaN,
    "tts_sentence": "さんきゅう の クラス",
    "tts_slow_sentence": "さんきゅう の クラス を ゆっくり よむ",
    "tags": "学校",
    "grade": "小3"
  },
  {
    "kanji": "宮",
    "kanji_reading": "みや",
    "on_reading": "キュウ・グウ",
    "kun_reading": "みや",
    "tts_sentence": "じんぐう に いく",
    "tts_slow_sentence": "じんぐう に ゆっくり いく",
    "tags": "場所",
    "grade": "小3"
  },
  {
    "kanji": "急",
    "kanji_reading": "いそぐ",
    "on_reading": "キュウ",
    "kun_reading": "いそぐ",
    "tts_sentence": "いそいで あるく",
    "tts_slow_sentence": "いそいで ゆっくり あるく",
    "tags": "生活",
    "grade": "小3"
  },
  {
    "kanji": "球",
    "kanji_reading": "たま",
    "on_reading": "キュウ",
    "kun_reading": "たま",
    "tts_sentence": "ボール の たま",
    "tts_slow_sentence": "ボール の たま を ゆっくり なげる",
    "tags": "運動",
    "grade": "小3"
  },
  {
    "kanji": "究",
    "kanji_reading": "きわめる",
    "on_reading": "キュウ",
    "kun_reading": "きわめる",
    "tts_sentence": "しらべて きわめる",
    "tts_slow_sentence": "しらべて ゆっくり きわめる",
    "tags": "学校",
    "grade": "小3"
  },
  {
    "kanji": "去",
    "kanji_reading": "さる",
    "on_reading": "キョ",
    "kun_reading": "さる",
    "tts_sentence": "ともだち が さる",
    "tts_slow_sentence": "ともだち が ゆっくり さる",
    "tags": "学校",
    "grade": "小3"
  },
  {
    "kanji": "橋",
    "kanji_reading": "はし",
    "on_reading": "キョウ",
    "kun_reading": "はし",
    "tts_sentence": "はし を わたる",
    "tts_slow_sentence": "はし を ゆっくり わたる",
    "tags": "場所",
    "grade": "小3"
  },
  {
    "kanji": "業",
    "kanji_reading": "ぎょう",
    "on_reading": "ギョウ",
    "kun_reading": NaN,
    "tts_sentence": "しごと を する",
    "tts_slow_sentence": "しごと を ゆっくり する",
    "tags": "生活",
    "grade": "小3"
  },
  {
    "kanji": "局",
    "kanji_reading": "きょく",
    "on_reading": "キョク",
    "kun_reading": NaN,
    "tts_sentence": "ゆうびんきょく に いく",
    "tts_slow_sentence": "ゆうびんきょく に ゆっくり いく",
    "tags": "場所",
    "grade": "小3"
  },
  {
    "kanji": "曲",
    "kanji_reading": "まがる",
    "on_reading": "キョク",
    "kun_reading": "まがる",
    "tts_sentence": "みち を まがる",
    "tts_slow_sentence": "みち を ゆっくり まがる",
    "tags": "生活",
    "grade": "小3"
  },
  {
    "kanji": "銀",
    "kanji_reading": "ぎん",
    "on_reading": "ギン",
    "kun_reading": NaN,
    "tts_sentence": "ぎんこう に いく",
    "tts_slow_sentence": "ぎんこう に ゆっくり いく",
    "tags": "場所",
    "grade": "小3"
  },
  {
    "kanji": "区",
    "kanji_reading": "く",
    "on_reading": "ク",
    "kun_reading": NaN,
    "tts_sentence": "く に すむ",
    "tts_slow_sentence": "く に ゆっくり すむ",
    "tags": "場所",
    "grade": "小3"
  },
  {
    "kanji": "苦",
    "kanji_reading": "にがい",
    "on_reading": "ク",
    "kun_reading": "にがい・くるしい",
    "tts_sentence": "くるしい けれど がんばる",
    "tts_slow_sentence": "くるしい けれど ゆっくり がんばる",
    "tags": "心",
    "grade": "小3"
  },
  {
    "kanji": "具",
    "kanji_reading": "ぐ",
    "on_reading": "グ",
    "kun_reading": NaN,
    "tts_sentence": "どうぐ を つかう",
    "tts_slow_sentence": "どうぐ を ゆっくり つかう",
    "tags": "生活",
    "grade": "小3"
  },
  {
    "kanji": "君",
    "kanji_reading": "きみ",
    "on_reading": "クン",
    "kun_reading": "きみ",
    "tts_sentence": "きみ と はなす",
    "tts_slow_sentence": "きみ と ゆっくり はなす",
    "tags": "人",
    "grade": "小3"
  },
  {
    "kanji": "係",
    "kanji_reading": "かかり",
    "on_reading": "ケイ",
    "kun_reading": "かかり",
    "tts_sentence": "はなたば の かかり",
    "tts_slow_sentence": "はなたば の かかり を ゆっくり する",
    "tags": "学校",
    "grade": "小3"
  },
  {
    "kanji": "軽",
    "kanji_reading": "かるい",
    "on_reading": "ケイ",
    "kun_reading": "かるい",
    "tts_sentence": "かるい かばん",
    "tts_slow_sentence": "かるい かばん を ゆっくり もつ",
    "tags": "もの",
    "grade": "小3"
  },
  {
    "kanji": "血",
    "kanji_reading": "ち",
    "on_reading": "ケツ",
    "kun_reading": "ち",
    "tts_sentence": "けが の ち を ふく",
    "tts_slow_sentence": "けが の ち を そっと ふく",
    "tags": "体",
    "grade": "小3"
  },
  {
    "kanji": "決",
    "kanji_reading": "きめる",
    "on_reading": "ケツ",
    "kun_reading": "きめる・きまる",
    "tts_sentence": "ルール を きめる",
    "tts_slow_sentence": "ルール を ゆっくり きめる",
    "tags": "学校",
    "grade": "小3"
  },
  {
    "kanji": "研",
    "kanji_reading": "とぐ",
    "on_reading": "ケン",
    "kun_reading": "とぐ",
    "tts_sentence": "けんきゅう する",
    "tts_slow_sentence": "けんきゅう して ゆっくり しらべる",
    "tags": "学校",
    "grade": "小3"
  },
  {
    "kanji": "県",
    "kanji_reading": "けん",
    "on_reading": "ケン",
    "kun_reading": NaN,
    "tts_sentence": "やまがたけん に すむ",
    "tts_slow_sentence": "やまがたけん に ゆっくり すむ",
    "tags": "社会",
    "grade": "小3"
  },
  {
    "kanji": "庫",
    "kanji_reading": "くら",
    "on_reading": "コ",
    "kun_reading": "くら",
    "tts_sentence": "しょこ に しまう",
    "tts_slow_sentence": "しょこ に ゆっくり しまう",
    "tags": "場所",
    "grade": "小3"
  },
  {
    "kanji": "湖",
    "kanji_reading": "みずうみ",
    "on_reading": "コ",
    "kun_reading": "みずうみ",
    "tts_sentence": "みずうみ を みる",
    "tts_slow_sentence": "みずうみ を ゆっくり みる",
    "tags": "自然",
    "grade": "小3"
  },
  {
    "kanji": "向",
    "kanji_reading": "むかう",
    "on_reading": "コウ",
    "kun_reading": "むかう",
    "tts_sentence": "えき に むかう",
    "tts_slow_sentence": "えき に ゆっくり むかう",
    "tags": "生活",
    "grade": "小3"
  },
  {
    "kanji": "幸",
    "kanji_reading": "しあわせ",
    "on_reading": "コウ",
    "kun_reading": "しあわせ",
    "tts_sentence": "しあわせ を いのる",
    "tts_slow_sentence": "しあわせ を ゆっくり いのる",
    "tags": "心",
    "grade": "小3"
  },
  {
    "kanji": "港",
    "kanji_reading": "みなと",
    "on_reading": "コウ",
    "kun_reading": "みなと",
    "tts_sentence": "みなと に いく",
    "tts_slow_sentence": "みなと に ゆっくり いく",
    "tags": "場所",
    "grade": "小3"
  },
  {
    "kanji": "号",
    "kanji_reading": "ごう",
    "on_reading": "ゴウ",
    "kun_reading": NaN,
    "tts_sentence": "ばんごう を よむ",
    "tts_slow_sentence": "ばんごう を ゆっくり よむ",
    "tags": "学校",
    "grade": "小3"
  },
  {
    "kanji": "根",
    "kanji_reading": "ね",
    "on_reading": "コン",
    "kun_reading": "ね",
    "tts_sentence": "き の ね を みる",
    "tts_slow_sentence": "き の ね を ゆっくり みる",
    "tags": "自然",
    "grade": "小3"
  },
  {
    "kanji": "祭",
    "kanji_reading": "まつり",
    "on_reading": "サイ",
    "kun_reading": "まつり",
    "tts_sentence": "まつり に いく",
    "tts_slow_sentence": "まつり に ゆっくり いく",
    "tags": "行事",
    "grade": "小3"
  },
  {
    "kanji": "皿",
    "kanji_reading": "さら",
    "on_reading": "ベイ",
    "kun_reading": "さら",
    "tts_sentence": "さら を あらう",
    "tts_slow_sentence": "さら を ゆっくり あらう",
    "tags": "生活",
    "grade": "小3"
  },
  {
    "kanji": "仕",
    "kanji_reading": "つかえる",
    "on_reading": "シ",
    "kun_reading": "つかえる",
    "tts_sentence": "しごと を する",
    "tts_slow_sentence": "しごと を ゆっくり する",
    "tags": "生活",
    "grade": "小3"
  },
  {
    "kanji": "使",
    "kanji_reading": "つかう",
    "on_reading": "シ",
    "kun_reading": "つかう",
    "tts_sentence": "どうぐ を つかう",
    "tts_slow_sentence": "どうぐ を ゆっくり つかう",
    "tags": "生活",
    "grade": "小3"
  },
  {
    "kanji": "始",
    "kanji_reading": "はじめる",
    "on_reading": "シ",
    "kun_reading": "はじめる・はじまる",
    "tts_sentence": "しごと を はじめる",
    "tts_slow_sentence": "しごと を ゆっくり はじめる",
    "tags": "生活",
    "grade": "小3"
  },
  {
    "kanji": "指",
    "kanji_reading": "ゆび",
    "on_reading": "シ",
    "kun_reading": "ゆび",
    "tts_sentence": "ゆび を うごかす",
    "tts_slow_sentence": "ゆび を ゆっくり うごかす",
    "tags": "体",
    "grade": "小3"
  },
  {
    "kanji": "死",
    "kanji_reading": "しぬ",
    "on_reading": "シ",
    "kun_reading": "しぬ",
    "tts_sentence": "はな が かれる",
    "tts_slow_sentence": "はな が ゆっくり かれる",
    "tags": "自然",
    "grade": "小3"
  },
  {
    "kanji": "詩",
    "kanji_reading": "し",
    "on_reading": "シ",
    "kun_reading": NaN,
    "tts_sentence": "し を よむ",
    "tts_slow_sentence": "し を ゆっくり よむ",
    "tags": "国語",
    "grade": "小3"
  },
  {
    "kanji": "次",
    "kanji_reading": "つぎ",
    "on_reading": "ジ",
    "kun_reading": "つぎ",
    "tts_sentence": "つぎ の じかん",
    "tts_slow_sentence": "つぎ の じかん を ゆっくり まつ",
    "tags": "時間",
    "grade": "小3"
  },
  {
    "kanji": "事",
    "kanji_reading": "こと",
    "on_reading": "ジ",
    "kun_reading": "こと",
    "tts_sentence": "だいじ な こと を まもる",
    "tts_slow_sentence": "だいじ な こと を ゆっくり まもる",
    "tags": "生活",
    "grade": "小3"
  },
  {
    "kanji": "持",
    "kanji_reading": "もつ",
    "on_reading": "ジ",
    "kun_reading": "もつ",
    "tts_sentence": "かばん を もつ",
    "tts_slow_sentence": "かばん を ゆっくり もつ",
    "tags": "生活",
    "grade": "小3"
  },
  {
    "kanji": "式",
    "kanji_reading": "しき",
    "on_reading": "シキ",
    "kun_reading": NaN,
    "tts_sentence": "にゅうがくしき に でる",
    "tts_slow_sentence": "にゅうがくしき に ゆっくり でる",
    "tags": "行事",
    "grade": "小3"
  },
  {
    "kanji": "実",
    "kanji_reading": "み",
    "on_reading": "ジツ",
    "kun_reading": "み・じつる",
    "tts_sentence": "じっけん を する",
    "tts_slow_sentence": "じっけん を ゆっくり する",
    "tags": "理科",
    "grade": "小3"
  },
  {
    "kanji": "写",
    "kanji_reading": "うつる",
    "on_reading": "シャ",
    "kun_reading": "うつる・うつす",
    "tts_sentence": "かがみ に うつる",
    "tts_slow_sentence": "かがみ に ゆっくり うつる",
    "tags": "生活",
    "grade": "小3"
  },
  {
    "kanji": "者",
    "kanji_reading": "もの",
    "on_reading": "シャ",
    "kun_reading": "もの",
    "tts_sentence": "はたらく ひと",
    "tts_slow_sentence": "はたらく ひと を ゆっくり よぶ",
    "tags": "人",
    "grade": "小3"
  },
  {
    "kanji": "主",
    "kanji_reading": "おも",
    "on_reading": "シュ",
    "kun_reading": "おも・ぬし",
    "tts_sentence": "おもな こと を しる",
    "tts_slow_sentence": "おもな こと を ゆっくり しる",
    "tags": "国語",
    "grade": "小3"
  },
  {
    "kanji": "守",
    "kanji_reading": "まもる",
    "on_reading": "シュ",
    "kun_reading": "まもる",
    "tts_sentence": "ルール を まもる",
    "tts_slow_sentence": "ルール を ゆっくり まもる",
    "tags": "学校",
    "grade": "小3"
  },
  {
    "kanji": "取",
    "kanji_reading": "とる",
    "on_reading": "シュ",
    "kun_reading": "とる",
    "tts_sentence": "ノート を とる",
    "tts_slow_sentence": "ノート を ゆっくり とる",
    "tags": "学校",
    "grade": "小3"
  },
  {
    "kanji": "酒",
    "kanji_reading": "さけ",
    "on_reading": "シュ",
    "kun_reading": "さけ",
    "tts_sentence": "さけ の いれもの",
    "tts_slow_sentence": "さけ の いれもの を ゆっくり みる",
    "tags": "文化",
    "grade": "小3"
  },
  {
    "kanji": "受",
    "kanji_reading": "うける",
    "on_reading": "ジュ",
    "kun_reading": "うける・うかる",
    "tts_sentence": "しけん を うける",
    "tts_slow_sentence": "しけん を ゆっくり うける",
    "tags": "学校",
    "grade": "小3"
  },
  {
    "kanji": "州",
    "kanji_reading": "す",
    "on_reading": "シュウ",
    "kun_reading": "す",
    "tts_sentence": "しずおかしゅう を みる",
    "tts_slow_sentence": "しずおかしゅう を ゆっくり みる",
    "tags": "社会",
    "grade": "小3"
  },
  {
    "kanji": "拾",
    "kanji_reading": "ひろう",
    "on_reading": "シュウ",
    "kun_reading": "ひろう",
    "tts_sentence": "おかね を ひろう",
    "tts_slow_sentence": "おかね を ゆっくり ひろう",
    "tags": "生活",
    "grade": "小3"
  },
  {
    "kanji": "終",
    "kanji_reading": "おわる",
    "on_reading": "シュウ",
    "kun_reading": "おわる・おえる",
    "tts_sentence": "しごと が おわる",
    "tts_slow_sentence": "しごと が ゆっくり おわる",
    "tags": "生活",
    "grade": "小3"
  },
  {
    "kanji": "習",
    "kanji_reading": "ならう",
    "on_reading": "シュウ",
    "kun_reading": "ならう・ならい",
    "tts_sentence": "ピアノ を ならう",
    "tts_slow_sentence": "ピアノ を ゆっくり ならう",
    "tags": "音楽",
    "grade": "小3"
  },
  {
    "kanji": "集",
    "kanji_reading": "あつまる",
    "on_reading": "シュウ",
    "kun_reading": "あつまる・あつめる",
    "tts_sentence": "みんな が あつまる",
    "tts_slow_sentence": "みんな が ゆっくり あつまる",
    "tags": "学校",
    "grade": "小3"
  },
  {
    "kanji": "住",
    "kanji_reading": "すむ",
    "on_reading": "ジュウ",
    "kun_reading": "すむ",
    "tts_sentence": "まち に すむ",
    "tts_slow_sentence": "まち に ゆっくり すむ",
    "tags": "社会",
    "grade": "小3"
  },
  {
    "kanji": "重",
    "kanji_reading": "おもい",
    "on_reading": "ジュウ・チョウ",
    "kun_reading": "おもい・かさなる",
    "tts_sentence": "おもい かばん",
    "tts_slow_sentence": "おもい かばん を ゆっくり もつ",
    "tags": "生活",
    "grade": "小3"
  },
  {
    "kanji": "宿",
    "kanji_reading": "やど",
    "on_reading": "シュク",
    "kun_reading": "やど",
    "tts_sentence": "しゅくしゃ に とまる",
    "tts_slow_sentence": "しゅくしゃ に ゆっくり とまる",
    "tags": "場所",
    "grade": "小3"
  },
  {
    "kanji": "所",
    "kanji_reading": "ところ",
    "on_reading": "ショ",
    "kun_reading": "ところ",
    "tts_sentence": "たのしい ところ",
    "tts_slow_sentence": "たのしい ところ を ゆっくり みる",
    "tags": "場所",
    "grade": "小3"
  },
  {
    "kanji": "暑",
    "kanji_reading": "あつい",
    "on_reading": "ショ",
    "kun_reading": "あつい",
    "tts_sentence": "なつ は あつい",
    "tts_slow_sentence": "なつ は ゆっくり あつい",
    "tags": "季節",
    "grade": "小3"
  },
  {
    "kanji": "助",
    "kanji_reading": "たすける",
    "on_reading": "ジョ",
    "kun_reading": "たすける",
    "tts_sentence": "ともだち を たすける",
    "tts_slow_sentence": "ともだち を ゆっくり たすける",
    "tags": "心",
    "grade": "小3"
  },
  {
    "kanji": "昭",
    "kanji_reading": "しょう",
    "on_reading": "ショウ",
    "kun_reading": NaN,
    "tts_sentence": "しょうわ の じだい",
    "tts_slow_sentence": "しょうわ の じだい を ゆっくり よむ",
    "tags": "社会",
    "grade": "小3"
  },
  {
    "kanji": "消",
    "kanji_reading": "きえる",
    "on_reading": "ショウ",
    "kun_reading": "きえる・けす",
    "tts_sentence": "でんき が きえる",
    "tts_slow_sentence": "でんき が ゆっくり きえる",
    "tags": "生活",
    "grade": "小3"
  },
  {
    "kanji": "商",
    "kanji_reading": "あきなう",
    "on_reading": "ショウ",
    "kun_reading": "あきなう",
    "tts_sentence": "みせ で うる",
    "tts_slow_sentence": "みせ で ゆっくり うる",
    "tags": "社会",
    "grade": "小3"
  },
  {
    "kanji": "章",
    "kanji_reading": "しょう",
    "on_reading": "ショウ",
    "kun_reading": NaN,
    "tts_sentence": "ぶんしょう を よむ",
    "tts_slow_sentence": "ぶんしょう を ゆっくり よむ",
    "tags": "国語",
    "grade": "小3"
  },
  {
    "kanji": "勝",
    "kanji_reading": "かつ",
    "on_reading": "ショウ",
    "kun_reading": "かつ・まさる",
    "tts_sentence": "しあい に かつ",
    "tts_slow_sentence": "しあい に ゆっくり かつ",
    "tags": "運動",
    "grade": "小3"
  },
  {
    "kanji": "乗",
    "kanji_reading": "のる",
    "on_reading": "ジョウ",
    "kun_reading": "のる・のせる",
    "tts_sentence": "くるま に のる",
    "tts_slow_sentence": "くるま に ゆっくり のる",
    "tags": "乗り物",
    "grade": "小3"
  },
  {
    "kanji": "植",
    "kanji_reading": "うえる",
    "on_reading": "ショク",
    "kun_reading": "うえる",
    "tts_sentence": "き を うえる",
    "tts_slow_sentence": "き を ゆっくり うえる",
    "tags": "生活",
    "grade": "小3"
  },
  {
    "kanji": "発",
    "kanji_reading": "はつ",
    "on_reading": "ハツ",
    "kun_reading": "はつ",
    "tts_sentence": "はっぴょう を する",
    "tts_slow_sentence": "はっぴょう を ゆっくり する",
    "tags": "学校",
    "grade": "小3"
  },
  {
    "kanji": "反",
    "kanji_reading": "そる",
    "on_reading": "ハン",
    "kun_reading": "そる・そらす",
    "tts_sentence": "いた が そる",
    "tts_slow_sentence": "いた が ゆっくり そる",
    "tags": "理科",
    "grade": "小3"
  },
  {
    "kanji": "坂",
    "kanji_reading": "さか",
    "on_reading": "ハン",
    "kun_reading": "さか",
    "tts_sentence": "さか を のぼる",
    "tts_slow_sentence": "さか を ゆっくり のぼる",
    "tags": "場所",
    "grade": "小3"
  },
  {
    "kanji": "板",
    "kanji_reading": "いた",
    "on_reading": "ハン",
    "kun_reading": "いた",
    "tts_sentence": "いた に え を かく",
    "tts_slow_sentence": "いた に ゆっくり え を かく",
    "tags": "図工",
    "grade": "小3"
  },
  {
    "kanji": "皮",
    "kanji_reading": "かわ",
    "on_reading": "ヒ",
    "kun_reading": "かわ",
    "tts_sentence": "くだもの の かわ",
    "tts_slow_sentence": "くだもの の かわ を ゆっくり むく",
    "tags": "生活",
    "grade": "小3"
  },
  {
    "kanji": "悲",
    "kanji_reading": "かなしい",
    "on_reading": "ヒ",
    "kun_reading": "かなしい",
    "tts_sentence": "かなしい きもち",
    "tts_slow_sentence": "かなしい きもち を ゆっくり いう",
    "tags": "心",
    "grade": "小3"
  },
  {
    "kanji": "美",
    "kanji_reading": "うつくしい",
    "on_reading": "ビ",
    "kun_reading": "うつくしい",
    "tts_sentence": "うつくしい はな",
    "tts_slow_sentence": "うつくしい はな を ゆっくり みる",
    "tags": "自然",
    "grade": "小3"
  },
  {
    "kanji": "鼻",
    "kanji_reading": "はな",
    "on_reading": "ビ",
    "kun_reading": "はな",
    "tts_sentence": "はな で におい を かぐ",
    "tts_slow_sentence": "はな で ゆっくり におい を かぐ",
    "tags": "体",
    "grade": "小3"
  },
  {
    "kanji": "筆",
    "kanji_reading": "ふで",
    "on_reading": "ヒツ",
    "kun_reading": "ふで",
    "tts_sentence": "ふで で じ を かく",
    "tts_slow_sentence": "ふで で ゆっくり じ を かく",
    "tags": "書写",
    "grade": "小3"
  },
  {
    "kanji": "氷",
    "kanji_reading": "こおり",
    "on_reading": "ヒョウ",
    "kun_reading": "こおり",
    "tts_sentence": "こおり を さわる",
    "tts_slow_sentence": "こおり を ゆっくり さわる",
    "tags": "自然",
    "grade": "小3"
  },
  {
    "kanji": "秒",
    "kanji_reading": "びょう",
    "on_reading": "ビョウ",
    "kun_reading": NaN,
    "tts_sentence": "いちびょう を はかる",
    "tts_slow_sentence": "いちびょう を ゆっくり はかる",
    "tags": "算数",
    "grade": "小3"
  },
  {
    "kanji": "病",
    "kanji_reading": "やまい",
    "on_reading": "ビョウ",
    "kun_reading": "やまい",
    "tts_sentence": "びょういん に はいる",
    "tts_slow_sentence": "びょういん に ゆっくり はいる",
    "tags": "生活",
    "grade": "小3"
  },
  {
    "kanji": "品",
    "kanji_reading": "しな",
    "on_reading": "ヒン",
    "kun_reading": "しな",
    "tts_sentence": "しな を ならべる",
    "tts_slow_sentence": "しな を ゆっくり ならべる",
    "tags": "生活",
    "grade": "小3"
  },
  {
    "kanji": "負",
    "kanji_reading": "まける",
    "on_reading": "フ",
    "kun_reading": "まける・おう",
    "tts_sentence": "しあい に まける",
    "tts_slow_sentence": "しあい に ゆっくり まける",
    "tags": "運動",
    "grade": "小3"
  },
  {
    "kanji": "部",
    "kanji_reading": "ぶ",
    "on_reading": "ブ",
    "kun_reading": NaN,
    "tts_sentence": "がっこう の ぶかつ",
    "tts_slow_sentence": "がっこう の ぶかつ を ゆっくり いう",
    "tags": "学校",
    "grade": "小3"
  },
  {
    "kanji": "服",
    "kanji_reading": "ふく",
    "on_reading": "フク",
    "kun_reading": NaN,
    "tts_sentence": "ふく を たたむ",
    "tts_slow_sentence": "ふく を ゆっくり たたむ",
    "tags": "生活",
    "grade": "小3"
  },
  {
    "kanji": "福",
    "kanji_reading": "ふく",
    "on_reading": "フク",
    "kun_reading": NaN,
    "tts_sentence": "ふく が くる",
    "tts_slow_sentence": "ふく が ゆっくり くる",
    "tags": "心",
    "grade": "小3"
  },
  {
    "kanji": "物",
    "kanji_reading": "もの",
    "on_reading": "ブツ",
    "kun_reading": "もの",
    "tts_sentence": "だいじ な もの",
    "tts_slow_sentence": "だいじ な もの を ゆっくり まもる",
    "tags": "生活",
    "grade": "小3"
  },
  {
    "kanji": "命",
    "kanji_reading": "いのち",
    "on_reading": "メイ",
    "kun_reading": "いのち",
    "tts_sentence": "いのち を たいせつ に する",
    "tts_slow_sentence": "いのち を たいせつ に",
    "tags": "ゆっくり する",
    "grade": "心"
  },
  {
    "kanji": "問",
    "kanji_reading": "とい",
    "on_reading": "モン",
    "kun_reading": "とい",
    "tts_sentence": "しつもん を する",
    "tts_slow_sentence": "しつもん を ゆっくり する",
    "tags": "学校",
    "grade": "小3"
  },
  {
    "kanji": "役",
    "kanji_reading": "やく",
    "on_reading": "ヤク",
    "kun_reading": NaN,
    "tts_sentence": "たいせつ な やくめ",
    "tts_slow_sentence": "たいせつ な やくめ を ゆっくり いう",
    "tags": "学校",
    "grade": "小3"
  },
  {
    "kanji": "薬",
    "kanji_reading": "くすり",
    "on_reading": "ヤク",
    "kun_reading": "くすり",
    "tts_sentence": "くすり を のむ",
    "tts_slow_sentence": "くすり を ゆっくり のむ",
    "tags": "生活",
    "grade": "小3"
  },
  {
    "kanji": "由",
    "kanji_reading": "よし",
    "on_reading": "ユ",
    "kun_reading": "よし",
    "tts_sentence": "よし が ある",
    "tts_slow_sentence": "よし が ゆっくり ある",
    "tags": "国語",
    "grade": "小3"
  },
  {
    "kanji": "油",
    "kanji_reading": "あぶら",
    "on_reading": "ユ",
    "kun_reading": "あぶら",
    "tts_sentence": "あぶら を つかう",
    "tts_slow_sentence": "あぶら を ゆっくり つかう",
    "tags": "生活",
    "grade": "小3"
  },
  {
    "kanji": "有",
    "kanji_reading": "ある",
    "on_reading": "ユウ",
    "kun_reading": "ある",
    "tts_sentence": "ゆうりょく な ひと",
    "tts_slow_sentence": "ゆうりょく な ひと を ゆっくり よむ",
    "tags": "学校",
    "grade": "小3"
  },
  {
    "kanji": "遊",
    "kanji_reading": "あそぶ",
    "on_reading": "ユウ",
    "kun_reading": "あそぶ",
    "tts_sentence": "こうえん で あそぶ",
    "tts_slow_sentence": "こうえん で ゆっくり あそぶ",
    "tags": "生活",
    "grade": "小3"
  },
  {
    "kanji": "予",
    "kanji_reading": "あらかじ",
    "on_reading": "ヨ",
    "kun_reading": "あらかじめ",
    "tts_sentence": "よてい を たてる",
    "tts_slow_sentence": "よてい を ゆっくり たてる",
    "tags": "生活",
    "grade": "小3"
  },
  {
    "kanji": "羊",
    "kanji_reading": "ひつじ",
    "on_reading": "ヨウ",
    "kun_reading": "ひつじ",
    "tts_sentence": "ひつじ が あるく",
    "tts_slow_sentence": "ひつじ が ゆっくり あるく",
    "tags": "自然",
    "grade": "小3"
  },
  {
    "kanji": "葉",
    "kanji_reading": "は",
    "on_reading": "ヨウ",
    "kun_reading": "は",
    "tts_sentence": "き の は が おちる",
    "tts_slow_sentence": "き の は が おちて いく",
    "tags": "自然",
    "grade": "小3"
  },
  {
    "kanji": "陽",
    "kanji_reading": "ひ",
    "on_reading": "ヨウ",
    "kun_reading": "ひ",
    "tts_sentence": "たいよう が のぼる",
    "tts_slow_sentence": "たいよう が ゆっくり のぼる",
    "tags": "自然",
    "grade": "小3"
  },
  {
    "kanji": "様",
    "kanji_reading": "さま",
    "on_reading": "ヨウ",
    "kun_reading": "さま",
    "tts_sentence": "おきゃくさま が くる",
    "tts_slow_sentence": "おきゃくさま が ゆっくり くる",
    "tags": "会話",
    "grade": "小3"
  },
  {
    "kanji": "落",
    "kanji_reading": "おちる",
    "on_reading": "ラク",
    "kun_reading": "おちる・おとす",
    "tts_sentence": "りんご が おちる",
    "tts_slow_sentence": "りんご が ゆっくり おちる",
    "tags": "自然",
    "grade": "小3"
  },
  {
    "kanji": "流",
    "kanji_reading": "ながれる",
    "on_reading": "リュウ",
    "kun_reading": "ながれる・ながす",
    "tts_sentence": "みず が ながれる",
    "tts_slow_sentence": "みず が ゆっくり ながれる",
    "tags": "自然",
    "grade": "小3"
  },
  {
    "kanji": "旅",
    "kanji_reading": "たび",
    "on_reading": "リョ",
    "kun_reading": "たび",
    "tts_sentence": "たび に でる",
    "tts_slow_sentence": "たび に ゆっくり でる",
    "tags": "生活",
    "grade": "小3"
  },
  {
    "kanji": "両",
    "kanji_reading": "りょう",
    "on_reading": "リョウ",
    "kun_reading": NaN,
    "tts_sentence": "りょうて で もつ",
    "tts_slow_sentence": "りょうて で ゆっくり もつ",
    "tags": "体",
    "grade": "小3"
  },
  {
    "kanji": "緑",
    "kanji_reading": "みどり",
    "on_reading": "リョク",
    "kun_reading": "みどり",
    "tts_sentence": "みどり の くさ",
    "tts_slow_sentence": "みどり の くさ を ゆっくり みる",
    "tags": "自然",
    "grade": "小3"
  },
  {
    "kanji": "礼",
    "kanji_reading": "れい",
    "on_reading": "レイ",
    "kun_reading": NaN,
    "tts_sentence": "あいさつ の れい",
    "tts_slow_sentence": "あいさつ の れい を ゆっくり する",
    "tags": "会話",
    "grade": "小3"
  },
  {
    "kanji": "列",
    "kanji_reading": "れつ",
    "on_reading": "レツ",
    "kun_reading": NaN,
    "tts_sentence": "れつ に ならぶ",
    "tts_slow_sentence": "れつ に ゆっくり ならぶ",
    "tags": "学校",
    "grade": "小3"
  },
  {
    "kanji": "練",
    "kanji_reading": "ねる",
    "on_reading": "レン",
    "kun_reading": "ねる",
    "tts_sentence": "さくぶん を ねる",
    "tts_slow_sentence": "さくぶん を ゆっくり ねる",
    "tags": "国語",
    "grade": "小3"
  },
  {
    "kanji": "路",
    "kanji_reading": "みち",
    "on_reading": "ロ",
    "kun_reading": "みち",
    "tts_sentence": "みち を あるく",
    "tts_slow_sentence": "みち を ゆっくり あるく",
    "tags": "場所",
    "grade": "小3"
  },
  {
    "kanji": "和",
    "kanji_reading": "わ",
    "on_reading": "ワ",
    "kun_reading": "やわらぐ",
    "tts_sentence": "わ で あそぶ",
    "tts_slow_sentence": "わ で なかよく あそぶ",
    "tags": "心",
    "grade": "小3"
  },
  {
    "kanji": "愛",
    "kanji_reading": "あい",
    "on_reading": "アイ",
    "kun_reading": NaN,
    "tts_sentence": "あい を たいせつ に する",
    "tts_slow_sentence": "あい を たいせつ に",
    "tags": "心",
    "grade": "小4"
  },
  {
    "kanji": "案",
    "kanji_reading": "あん",
    "on_reading": "アン",
    "kun_reading": NaN,
    "tts_sentence": "いい あん を だす",
    "tts_slow_sentence": "いい あん を ゆっくり だす",
    "tags": "学校",
    "grade": "小4"
  },
  {
    "kanji": "以",
    "kanji_reading": "い",
    "on_reading": "イ",
    "kun_reading": NaN,
    "tts_sentence": "いぜん の こと を ふりかえる",
    "tts_slow_sentence": "いぜん の こと を ゆっくり ふりかえる",
    "tags": "国語",
    "grade": "小4"
  },
  {
    "kanji": "衣",
    "kanji_reading": "い",
    "on_reading": "イ",
    "kun_reading": NaN,
    "tts_sentence": "ふく を きがえる",
    "tts_slow_sentence": "ふく を ゆっくり きがえる",
    "tags": "生活",
    "grade": "小4"
  },
  {
    "kanji": "位",
    "kanji_reading": "くらい",
    "on_reading": "イ",
    "kun_reading": "くらい",
    "tts_sentence": "くらい を きめる",
    "tts_slow_sentence": "くらい を ゆっくり きめる",
    "tags": "学校",
    "grade": "小4"
  },
  {
    "kanji": "囲",
    "kanji_reading": "かこむ",
    "on_reading": "イ",
    "kun_reading": "かこむ",
    "tts_sentence": "テープ で かこむ",
    "tts_slow_sentence": "テープ で ゆっくり かこむ",
    "tags": "図工",
    "grade": "小4"
  },
  {
    "kanji": "医",
    "kanji_reading": "い",
    "on_reading": "イ",
    "kun_reading": NaN,
    "tts_sentence": "いしゃ の しごと を しる",
    "tts_slow_sentence": "いしゃ の しごと を ゆっくり しる",
    "tags": "生活",
    "grade": "小4"
  },
  {
    "kanji": "印",
    "kanji_reading": "しるし",
    "on_reading": "イン",
    "kun_reading": "しるし",
    "tts_sentence": "はんこ を おす",
    "tts_slow_sentence": "はんこ を ゆっくり おす",
    "tags": "生活",
    "grade": "小4"
  },
  {
    "kanji": "英",
    "kanji_reading": "えい",
    "on_reading": "エイ",
    "kun_reading": NaN,
    "tts_sentence": "えいご を べんきょう する",
    "tts_slow_sentence": "えいご を ゆっくり べんきょう する",
    "tags": "学校",
    "grade": "小4"
  },
  {
    "kanji": "栄",
    "kanji_reading": "さかえる",
    "on_reading": "エイ",
    "kun_reading": "さかえる",
    "tts_sentence": "まち が さかえる",
    "tts_slow_sentence": "まち が ゆっくり さかえる",
    "tags": "社会",
    "grade": "小4"
  },
  {
    "kanji": "塩",
    "kanji_reading": "しお",
    "on_reading": "エン",
    "kun_reading": "しお",
    "tts_sentence": "しお を ふる",
    "tts_slow_sentence": "しお を ゆっくり ふる",
    "tags": "生活",
    "grade": "小4"
  },
  {
    "kanji": "億",
    "kanji_reading": "おく",
    "on_reading": "オク",
    "kun_reading": NaN,
    "tts_sentence": "おく の かず を かぞえる",
    "tts_slow_sentence": "おく の かず を ゆっくり かぞえる",
    "tags": "算数",
    "grade": "小4"
  },
  {
    "kanji": "加",
    "kanji_reading": "くわえる",
    "on_reading": "カ",
    "kun_reading": "くわえる・くわわる",
    "tts_sentence": "りょう を くわえる",
    "tts_slow_sentence": "りょう を ゆっくり くわえる",
    "tags": "算数",
    "grade": "小4"
  },
  {
    "kanji": "果",
    "kanji_reading": "はたす",
    "on_reading": "カ",
    "kun_reading": "はたす・はてる",
    "tts_sentence": "はたけ の くだもの",
    "tts_slow_sentence": "はたけ の くだもの を ゆっくり とる",
    "tags": "自然",
    "grade": "小4"
  },
  {
    "kanji": "課",
    "kanji_reading": "か",
    "on_reading": "カ",
    "kun_reading": NaN,
    "tts_sentence": "かだい を こなす",
    "tts_slow_sentence": "かだい を ゆっくり こなす",
    "tags": "学校",
    "grade": "小4"
  },
  {
    "kanji": "貨",
    "kanji_reading": "たから",
    "on_reading": "カ",
    "kun_reading": "たから",
    "tts_sentence": "かもつ を はこぶ",
    "tts_slow_sentence": "かもつ を ゆっくり はこぶ",
    "tags": "社会",
    "grade": "小4"
  },
  {
    "kanji": "芽",
    "kanji_reading": "め",
    "on_reading": "ガ",
    "kun_reading": "め",
    "tts_sentence": "しょくぶつ の め が でる",
    "tts_slow_sentence": "しょくぶつ の め が ゆっくり でる",
    "tags": "自然",
    "grade": "小4"
  },
  {
    "kanji": "改",
    "kanji_reading": "あらためる",
    "on_reading": "カイ",
    "kun_reading": "あらためる",
    "tts_sentence": "まち を あらためる",
    "tts_slow_sentence": "まち を ゆっくり あらためる",
    "tags": "社会",
    "grade": "小4"
  },
  {
    "kanji": "械",
    "kanji_reading": "かい",
    "on_reading": "カイ",
    "kun_reading": NaN,
    "tts_sentence": "きかい を つかう",
    "tts_slow_sentence": "きかい を ゆっくり つかう",
    "tags": "技術",
    "grade": "小4"
  },
  {
    "kanji": "害",
    "kanji_reading": "がい",
    "on_reading": "ガイ",
    "kun_reading": NaN,
    "tts_sentence": "がいちゅう に ちゅうい",
    "tts_slow_sentence": "がいちゅう に ゆっくり ちゅうい",
    "tags": "自然",
    "grade": "小4"
  },
  {
    "kanji": "街",
    "kanji_reading": "まち",
    "on_reading": "ガイ",
    "kun_reading": "まち",
    "tts_sentence": "まち を あるく",
    "tts_slow_sentence": "まち を ゆっくり あるく",
    "tags": "場所",
    "grade": "小4"
  },
  {
    "kanji": "各",
    "kanji_reading": "おのおの",
    "on_reading": "カク",
    "kun_reading": "おのおの",
    "tts_sentence": "おのおの が ちがう",
    "tts_slow_sentence": "おのおの が ゆっくり ちがう",
    "tags": "国語",
    "grade": "小4"
  },
  {
    "kanji": "覚",
    "kanji_reading": "おぼえる",
    "on_reading": "カク",
    "kun_reading": "おぼえる",
    "tts_sentence": "ことば を おぼえる",
    "tts_slow_sentence": "ことば を ゆっくり おぼえる",
    "tags": "国語",
    "grade": "小4"
  },
  {
    "kanji": "完",
    "kanji_reading": "かん",
    "on_reading": "カン",
    "kun_reading": NaN,
    "tts_sentence": "しゅくだい が かんせい する",
    "tts_slow_sentence": "しゅくだい が ゆっくり かんせい する",
    "tags": "学校",
    "grade": "小4"
  },
  {
    "kanji": "官",
    "kanji_reading": "かん",
    "on_reading": "カン",
    "kun_reading": NaN,
    "tts_sentence": "かんちょう で はたらく",
    "tts_slow_sentence": "かんちょう で ゆっくり はたらく",
    "tags": "社会",
    "grade": "小4"
  },
  {
    "kanji": "管",
    "kanji_reading": "くだ",
    "on_reading": "カン",
    "kun_reading": "くだ",
    "tts_sentence": "すいどう の くだ",
    "tts_slow_sentence": "すいどう の くだ を ゆっくり みる",
    "tags": "理科",
    "grade": "小4"
  },
  {
    "kanji": "関",
    "kanji_reading": "かん",
    "on_reading": "カン",
    "kun_reading": NaN,
    "tts_sentence": "きょうみ が ある",
    "tts_slow_sentence": "きょうみ が ゆっくり ある",
    "tags": "心",
    "grade": "小4"
  },
  {
    "kanji": "観",
    "kanji_reading": "みる",
    "on_reading": "カン",
    "kun_reading": "みる",
    "tts_sentence": "けしき を みる",
    "tts_slow_sentence": "けしき を ゆっくり みる",
    "tags": "社会",
    "grade": "小4"
  },
  {
    "kanji": "願",
    "kanji_reading": "ねがう",
    "on_reading": "ガン",
    "kun_reading": "ねがう",
    "tts_sentence": "ねがい を こめる",
    "tts_slow_sentence": "ねがい を ゆっくり こめる",
    "tags": "心",
    "grade": "小4"
  },
  {
    "kanji": "希",
    "kanji_reading": "まれ",
    "on_reading": "キ",
    "kun_reading": "まれ",
    "tts_sentence": "きぼう を もつ",
    "tts_slow_sentence": "きぼう を ゆっくり もつ",
    "tags": "心",
    "grade": "小4"
  },
  {
    "kanji": "季",
    "kanji_reading": "き",
    "on_reading": "キ",
    "kun_reading": NaN,
    "tts_sentence": "きせつ を しる",
    "tts_slow_sentence": "きせつ を ゆっくり しる",
    "tags": "自然",
    "grade": "小4"
  },
  {
    "kanji": "旗",
    "kanji_reading": "はた",
    "on_reading": "キ",
    "kun_reading": "はた",
    "tts_sentence": "はた を ふる",
    "tts_slow_sentence": "はた を ゆっくり ふる",
    "tags": "行事",
    "grade": "小4"
  },
  {
    "kanji": "器",
    "kanji_reading": "うつわ",
    "on_reading": "キ",
    "kun_reading": "うつわ",
    "tts_sentence": "きれい な うつわ",
    "tts_slow_sentence": "きれい な うつわ を ゆっくり みる",
    "tags": "生活",
    "grade": "小4"
  },
  {
    "kanji": "機",
    "kanji_reading": "はたらく",
    "on_reading": "キ",
    "kun_reading": "はたらく",
    "tts_sentence": "きかい が はたらく",
    "tts_slow_sentence": "きかい が ゆっくり はたらく",
    "tags": "技術",
    "grade": "小4"
  },
  {
    "kanji": "議",
    "kanji_reading": "ぎ",
    "on_reading": "ギ",
    "kun_reading": NaN,
    "tts_sentence": "ぎろん を する",
    "tts_slow_sentence": "ぎろん を ゆっくり する",
    "tags": "学校",
    "grade": "小4"
  },
  {
    "kanji": "求",
    "kanji_reading": "もとめる",
    "on_reading": "キュウ",
    "kun_reading": "もとめる",
    "tts_sentence": "こたえ を もとめる",
    "tts_slow_sentence": "こたえ を ゆっくり もとめる",
    "tags": "算数",
    "grade": "小4"
  },
  {
    "kanji": "泣",
    "kanji_reading": "なく",
    "on_reading": "キュウ",
    "kun_reading": "なく",
    "tts_sentence": "こども が なく",
    "tts_slow_sentence": "こども が ゆっくり なく",
    "tags": "心",
    "grade": "小4"
  },
  {
    "kanji": "救",
    "kanji_reading": "すくう",
    "on_reading": "キュウ",
    "kun_reading": "すくう",
    "tts_sentence": "ひと を すくう",
    "tts_slow_sentence": "ひと を ゆっくり すくう",
    "tags": "心",
    "grade": "小4"
  },
  {
    "kanji": "給",
    "kanji_reading": "たまう",
    "on_reading": "キュウ",
    "kun_reading": "たまう",
    "tts_sentence": "きゅうしょく を たべる",
    "tts_slow_sentence": "きゅうしょく を ゆっくり たべる",
    "tags": "学校",
    "grade": "小4"
  },
  {
    "kanji": "挙",
    "kanji_reading": "あげる",
    "on_reading": "キョ",
    "kun_reading": "あげる",
    "tts_sentence": "て を あげる",
    "tts_slow_sentence": "て を ゆっくり あげる",
    "tags": "学校",
    "grade": "小4"
  },
  {
    "kanji": "橋",
    "kanji_reading": "はし",
    "on_reading": "キョウ",
    "kun_reading": "はし",
    "tts_sentence": "はし を わたる",
    "tts_slow_sentence": "はし を ゆっくり わたる",
    "tags": "場所",
    "grade": "小4"
  },
  {
    "kanji": "況",
    "kanji_reading": "きょう",
    "on_reading": "キョウ",
    "kun_reading": NaN,
    "tts_sentence": "じょうきょう を しる",
    "tts_slow_sentence": "じょうきょう を ゆっくり しる",
    "tags": "国語",
    "grade": "小4"
  },
  {
    "kanji": "曲",
    "kanji_reading": "まがる",
    "on_reading": "キョク",
    "kun_reading": "まがる",
    "tts_sentence": "みち を まがる",
    "tts_slow_sentence": "みち を ゆっくり まがる",
    "tags": "生活",
    "grade": "小4"
  },
  {
    "kanji": "極",
    "kanji_reading": "きわめる",
    "on_reading": "キョク",
    "kun_reading": "きわめる",
    "tts_sentence": "わざ を きわめる",
    "tts_slow_sentence": "わざ を ゆっくり きわめる",
    "tags": "運動",
    "grade": "小4"
  },
  {
    "kanji": "訓",
    "kanji_reading": "くん",
    "on_reading": "クン",
    "kun_reading": NaN,
    "tts_sentence": "くんれん を する",
    "tts_slow_sentence": "くんれん を ゆっくり する",
    "tags": "学校",
    "grade": "小4"
  },
  {
    "kanji": "軍",
    "kanji_reading": "ぐん",
    "on_reading": "グン",
    "kun_reading": NaN,
    "tts_sentence": "ぐんたい を しる",
    "tts_slow_sentence": "ぐんたい を ゆっくり しる",
    "tags": "社会",
    "grade": "小4"
  },
  {
    "kanji": "郡",
    "kanji_reading": "ぐん",
    "on_reading": "グン",
    "kun_reading": NaN,
    "tts_sentence": "おきたまぐん に いく",
    "tts_slow_sentence": "おきたまぐん に ゆっくり いく",
    "tags": "社会",
    "grade": "小4"
  },
  {
    "kanji": "径",
    "kanji_reading": "けい",
    "on_reading": "ケイ",
    "kun_reading": NaN,
    "tts_sentence": "みち の けい を しらべる",
    "tts_slow_sentence": "みち の けい を ゆっくり しらべる",
    "tags": "算数",
    "grade": "小4"
  },
  {
    "kanji": "型",
    "kanji_reading": "かた",
    "on_reading": "ケイ",
    "kun_reading": "かた",
    "tts_sentence": "かた を とる",
    "tts_slow_sentence": "かた を ゆっくり とる",
    "tags": "図工",
    "grade": "小4"
  },
  {
    "kanji": "景",
    "kanji_reading": "けい",
    "on_reading": "ケイ",
    "kun_reading": NaN,
    "tts_sentence": "けしき が きれい",
    "tts_slow_sentence": "けしき が ゆっくり きれい",
    "tags": "自然",
    "grade": "小4"
  },
  {
    "kanji": "芸",
    "kanji_reading": "げい",
    "on_reading": "ゲイ",
    "kun_reading": NaN,
    "tts_sentence": "げい を みせる",
    "tts_slow_sentence": "げい を ゆっくり みせる",
    "tags": "生活",
    "grade": "小4"
  },
  {
    "kanji": "欠",
    "kanji_reading": "かける",
    "on_reading": "ケツ",
    "kun_reading": "かける",
    "tts_sentence": "おさら が かける",
    "tts_slow_sentence": "おさら が ゆっくり かける",
    "tags": "生活",
    "grade": "小4"
  },
  {
    "kanji": "券",
    "kanji_reading": "けん",
    "on_reading": "ケン",
    "kun_reading": NaN,
    "tts_sentence": "チケット を かう",
    "tts_slow_sentence": "チケット を ゆっくり かう",
    "tags": "生活",
    "grade": "小4"
  },
  {
    "kanji": "険",
    "kanji_reading": "けわしい",
    "on_reading": "ケン",
    "kun_reading": "けわしい",
    "tts_sentence": "けわしい やま を のぼる",
    "tts_slow_sentence": "けわしい やま を ゆっくり のぼる",
    "tags": "自然",
    "grade": "小4"
  },
  {
    "kanji": "検",
    "kanji_reading": "しらべる",
    "on_reading": "ケン",
    "kun_reading": "しらべる",
    "tts_sentence": "じけん を しらべる",
    "tts_slow_sentence": "じけん を ゆっくり しらべる",
    "tags": "社会",
    "grade": "小4"
  },
  {
    "kanji": "限",
    "kanji_reading": "かぎる",
    "on_reading": "ゲン",
    "kun_reading": "かぎる",
    "tts_sentence": "じかん が かぎられる",
    "tts_slow_sentence": "じかん が ゆっくり かぎられる",
    "tags": "生活",
    "grade": "小4"
  },
  {
    "kanji": "現",
    "kanji_reading": "あらわれる",
    "on_reading": "ゲン",
    "kun_reading": "あらわれる",
    "tts_sentence": "げんしょう が あらわれる",
    "tts_slow_sentence": "げんしょう が ゆっくり あらわれる",
    "tags": "理科",
    "grade": "小4"
  },
  {
    "kanji": "減",
    "kanji_reading": "へる",
    "on_reading": "ゲン",
    "kun_reading": "へる",
    "tts_sentence": "みず が へる",
    "tts_slow_sentence": "みず が ゆっくり へる",
    "tags": "理科",
    "grade": "小4"
  },
  {
    "kanji": "故",
    "kanji_reading": "ゆえ",
    "on_reading": "コ",
    "kun_reading": "ゆえ",
    "tts_sentence": "こしょう の ゆえん",
    "tts_slow_sentence": "こしょう の ゆえん を ゆっくり しる",
    "tags": "国語",
    "grade": "小4"
  },
  {
    "kanji": "個",
    "kanji_reading": "こ",
    "on_reading": "コ",
    "kun_reading": NaN,
    "tts_sentence": "りんご を ひとつ かう",
    "tts_slow_sentence": "りんご を ゆっくり ひとつ かう",
    "tags": "生活",
    "grade": "小4"
  },
  {
    "kanji": "護",
    "kanji_reading": "まもる",
    "on_reading": "ゴ",
    "kun_reading": "まもる",
    "tts_sentence": "みんな を まもる",
    "tts_slow_sentence": "みんな を ゆっくり まもる",
    "tags": "心",
    "grade": "小4"
  },
  {
    "kanji": "効",
    "kanji_reading": "きく",
    "on_reading": "コウ",
    "kun_reading": "きく",
    "tts_sentence": "くすり が よく きく",
    "tts_slow_sentence": "くすり が ゆっくり きく",
    "tags": "生活",
    "grade": "小4"
  },
  {
    "kanji": "厚",
    "kanji_reading": "あつい",
    "on_reading": "コウ",
    "kun_reading": "あつい",
    "tts_sentence": "あつい ノート",
    "tts_slow_sentence": "あつい ノート を ゆっくり ひらく",
    "tags": "生活",
    "grade": "小4"
  },
  {
    "kanji": "耕",
    "kanji_reading": "たがやす",
    "on_reading": "コウ",
    "kun_reading": "たがやす",
    "tts_sentence": "はたけ を たがやす",
    "tts_slow_sentence": "はたけ を ゆっくり たがやす",
    "tags": "社会",
    "grade": "小4"
  },
  {
    "kanji": "鉱",
    "kanji_reading": "こう",
    "on_reading": "コウ",
    "kun_reading": NaN,
    "tts_sentence": "こうざん を しらべる",
    "tts_slow_sentence": "こうざん を ゆっくり しらべる",
    "tags": "社会",
    "grade": "小4"
  },
  {
    "kanji": "構",
    "kanji_reading": "かまえる",
    "on_reading": "コウ",
    "kun_reading": "かまえる",
    "tts_sentence": "こうぞう を つくる",
    "tts_slow_sentence": "こうぞう を ゆっくり つくる",
    "tags": "図工",
    "grade": "小4"
  },
  {
    "kanji": "興",
    "kanji_reading": "おこる",
    "on_reading": "コウ",
    "kun_reading": "おこる",
    "tts_sentence": "まち が おこる",
    "tts_slow_sentence": "まち が ゆっくり おこる",
    "tags": "社会",
    "grade": "小4"
  },
  {
    "kanji": "講",
    "kanji_reading": "こう",
    "on_reading": "コウ",
    "kun_reading": NaN,
    "tts_sentence": "こうぎ を きく",
    "tts_slow_sentence": "こうぎ を ゆっくり きく",
    "tags": "学校",
    "grade": "小4"
  },
  {
    "kanji": "告",
    "kanji_reading": "つげる",
    "on_reading": "コク",
    "kun_reading": "つげる",
    "tts_sentence": "しらせ を つげる",
    "tts_slow_sentence": "しらせ を ゆっくり つげる",
    "tags": "生活",
    "grade": "小4"
  },
  {
    "kanji": "混",
    "kanji_reading": "まじる",
    "on_reading": "コン",
    "kun_reading": "まじる",
    "tts_sentence": "いろ が まじる",
    "tts_slow_sentence": "いろ が ゆっくり まじる",
    "tags": "図工",
    "grade": "小4"
  },
  {
    "kanji": "査",
    "kanji_reading": "さ",
    "on_reading": "サ",
    "kun_reading": NaN,
    "tts_sentence": "かくにん を する",
    "tts_slow_sentence": "かくにん を ゆっくり する",
    "tags": "学校",
    "grade": "小4"
  },
  {
    "kanji": "再",
    "kanji_reading": "ふたたび",
    "on_reading": "サイ",
    "kun_reading": "ふたたび",
    "tts_sentence": "また ためす",
    "tts_slow_sentence": "また ゆっくり ためす",
    "tags": "生活",
    "grade": "小4"
  },
  {
    "kanji": "災",
    "kanji_reading": "わざわい",
    "on_reading": "サイ",
    "kun_reading": "わざわい",
    "tts_sentence": "さいがい に そなえる",
    "tts_slow_sentence": "さいがい に ゆっくり そなえる",
    "tags": "社会",
    "grade": "小4"
  },
  {
    "kanji": "妻",
    "kanji_reading": "つま",
    "on_reading": "サイ",
    "kun_reading": "つま",
    "tts_sentence": "つま の はなし",
    "tts_slow_sentence": "つま の はなし を ゆっくり きく",
    "tags": "家族",
    "grade": "小4"
  },
  {
    "kanji": "採",
    "kanji_reading": "とる",
    "on_reading": "サイ",
    "kun_reading": "とる",
    "tts_sentence": "りんご を とる",
    "tts_slow_sentence": "りんご を ゆっくり とる",
    "tags": "生活",
    "grade": "小4"
  },
  {
    "kanji": "際",
    "kanji_reading": "きわ",
    "on_reading": "サイ",
    "kun_reading": "きわ",
    "tts_sentence": "みずぎわ",
    "tts_slow_sentence": "みずぎわ を ゆっくり みる",
    "tags": "自然",
    "grade": "小4"
  },
  {
    "kanji": "在",
    "kanji_reading": "ある",
    "on_reading": "ザイ",
    "kun_reading": "ある",
    "tts_sentence": "そこ に ある",
    "tts_slow_sentence": "そこ に ゆっくり ある",
    "tags": "生活",
    "grade": "小4"
  },
  {
    "kanji": "罪",
    "kanji_reading": "つみ",
    "on_reading": "ザイ",
    "kun_reading": "つみ",
    "tts_sentence": "つみ を つぐなう",
    "tts_slow_sentence": "つみ を ゆっくり つぐなう",
    "tags": "心",
    "grade": "小4"
  },
  {
    "kanji": "雑",
    "kanji_reading": "まじる",
    "on_reading": "ザツ",
    "kun_reading": "まじる",
    "tts_sentence": "ごみ が まじる",
    "tts_slow_sentence": "ごみ が ゆっくり まじる",
    "tags": "生活",
    "grade": "小4"
  },
  {
    "kanji": "酸",
    "kanji_reading": "すい",
    "on_reading": "サン",
    "kun_reading": "すい",
    "tts_sentence": "さん の りょうり",
    "tts_slow_sentence": "さん の ゆっくり りょうり",
    "tags": "生活",
    "grade": "小4"
  },
  {
    "kanji": "賛",
    "kanji_reading": "さん",
    "on_reading": "サン",
    "kun_reading": NaN,
    "tts_sentence": "いけん に さんせい",
    "tts_slow_sentence": "いけん に ゆっくり さんせい",
    "tags": "学校",
    "grade": "小4"
  },
  {
    "kanji": "支",
    "kanji_reading": "ささえる",
    "on_reading": "シ",
    "kun_reading": "ささえる",
    "tts_sentence": "くさ を ささえる",
    "tts_slow_sentence": "くさ を ゆっくり ささえる",
    "tags": "自然",
    "grade": "小4"
  },
  {
    "kanji": "志",
    "kanji_reading": "こころざし",
    "on_reading": "シ",
    "kun_reading": "こころざし",
    "tts_sentence": "こころざし を もつ",
    "tts_slow_sentence": "こころざし を ゆっくり もつ",
    "tags": "心",
    "grade": "小4"
  },
  {
    "kanji": "枝",
    "kanji_reading": "えだ",
    "on_reading": "シ",
    "kun_reading": "えだ",
    "tts_sentence": "き の えだ",
    "tts_slow_sentence": "き の えだ を ゆっくり みる",
    "tags": "自然",
    "grade": "小4"
  },
  {
    "kanji": "師",
    "kanji_reading": "し",
    "on_reading": "シ",
    "kun_reading": NaN,
    "tts_sentence": "せんせい の しごと",
    "tts_slow_sentence": "せんせい の しごと を ゆっくり みる",
    "tags": "学校",
    "grade": "小4"
  },
  {
    "kanji": "資",
    "kanji_reading": "し",
    "on_reading": "シ",
    "kun_reading": NaN,
    "tts_sentence": "しげん を たいせつ に する",
    "tts_slow_sentence": "しげん を ゆっくり たいせつ に する",
    "tags": "社会",
    "grade": "小4"
  },
  {
    "kanji": "飼",
    "kanji_reading": "かう",
    "on_reading": "シ",
    "kun_reading": "かう",
    "tts_sentence": "いぬ を かう",
    "tts_slow_sentence": "いぬ を ゆっくり かう",
    "tags": "生活",
    "grade": "小4"
  },
  {
    "kanji": "示",
    "kanji_reading": "しめす",
    "on_reading": "ジ",
    "kun_reading": "しめす",
    "tts_sentence": "みち を しめす",
    "tts_slow_sentence": "みち を ゆっくり しめす",
    "tags": "生活",
    "grade": "小4"
  },
  {
    "kanji": "似",
    "kanji_reading": "にる",
    "on_reading": "ジ",
    "kun_reading": "にる",
    "tts_sentence": "かお が にている",
    "tts_slow_sentence": "かお が ゆっくり にている",
    "tags": "国語",
    "grade": "小4"
  },
  {
    "kanji": "識",
    "kanji_reading": "しる",
    "on_reading": "シキ",
    "kun_reading": "しる",
    "tts_sentence": "こと を しる",
    "tts_slow_sentence": "こと を ゆっくり しる",
    "tags": "国語",
    "grade": "小4"
  },
  {
    "kanji": "質",
    "kanji_reading": "しつ",
    "on_reading": "シツ",
    "kun_reading": NaN,
    "tts_sentence": "しつもん を する",
    "tts_slow_sentence": "しつもん を ゆっくり する",
    "tags": "学校",
    "grade": "小4"
  },
  {
    "kanji": "舎",
    "kanji_reading": "しゃ",
    "on_reading": "シャ",
    "kun_reading": NaN,
    "tts_sentence": "がっしょうしゃ に あつまる",
    "tts_slow_sentence": "がっしょうしゃ に ゆっくり あつまる",
    "tags": "学校",
    "grade": "小4"
  },
  {
    "kanji": "謝",
    "kanji_reading": "あやまる",
    "on_reading": "シャ",
    "kun_reading": "あやまる",
    "tts_sentence": "ともだち に あやまる",
    "tts_slow_sentence": "ともだち に ゆっくり あやまる",
    "tags": "心",
    "grade": "小4"
  },
  {
    "kanji": "授",
    "kanji_reading": "さずける",
    "on_reading": "ジュ",
    "kun_reading": "さずける",
    "tts_sentence": "ちしき を さずける",
    "tts_slow_sentence": "ちしき を ゆっくり さずける",
    "tags": "学校",
    "grade": "小4"
  },
  {
    "kanji": "修",
    "kanji_reading": "おさめる",
    "on_reading": "シュウ",
    "kun_reading": "おさめる",
    "tts_sentence": "ぎじゅつ を みがく",
    "tts_slow_sentence": "ぎじゅつ を ゆっくり みがく",
    "tags": "学校",
    "grade": "小4"
  },
  {
    "kanji": "述",
    "kanji_reading": "のべる",
    "on_reading": "ジュツ",
    "kun_reading": "のべる",
    "tts_sentence": "いけん を のべる",
    "tts_slow_sentence": "いけん を ゆっくり のべる",
    "tags": "国語",
    "grade": "小4"
  },
  {
    "kanji": "術",
    "kanji_reading": "じゅつ",
    "on_reading": "ジュツ",
    "kun_reading": NaN,
    "tts_sentence": "とくい な ぎじゅつ",
    "tts_slow_sentence": "とくい な ぎじゅつ を ゆっくり のばす",
    "tags": "学校",
    "grade": "小4"
  },
  {
    "kanji": "準",
    "kanji_reading": "じゅん",
    "on_reading": "ジュン",
    "kun_reading": NaN,
    "tts_sentence": "じゅんび を する",
    "tts_slow_sentence": "じゅんび を ゆっくり する",
    "tags": "生活",
    "grade": "小4"
  },
  {
    "kanji": "序",
    "kanji_reading": "じょ",
    "on_reading": "ジョ",
    "kun_reading": NaN,
    "tts_sentence": "じゅんばん を まもる",
    "tts_slow_sentence": "じゅんばん を ゆっくり まもる",
    "tags": "学校",
    "grade": "小4"
  },
  {
    "kanji": "招",
    "kanji_reading": "まねく",
    "on_reading": "ショウ",
    "kun_reading": "まねく",
    "tts_sentence": "ともだち を まねく",
    "tts_slow_sentence": "ともだち を ゆっくり まねく",
    "tags": "心",
    "grade": "小4"
  },
  {
    "kanji": "承",
    "kanji_reading": "うける",
    "on_reading": "ショウ",
    "kun_reading": "うける",
    "tts_sentence": "いけん を うけいれる",
    "tts_slow_sentence": "いけん を ゆっくり うけいれる",
    "tags": "心",
    "grade": "小4"
  },
  {
    "kanji": "証",
    "kanji_reading": "あかし",
    "on_reading": "ショウ",
    "kun_reading": "あかし",
    "tts_sentence": "しょうこ を みせる",
    "tts_slow_sentence": "しょうこ を ゆっくり みせる",
    "tags": "社会",
    "grade": "小4"
  },
  {
    "kanji": "条",
    "kanji_reading": "じょう",
    "on_reading": "ジョウ",
    "kun_reading": NaN,
    "tts_sentence": "じょうけん を かくにん する",
    "tts_slow_sentence": "じょうけん を ゆっくり かくにん する",
    "tags": "学校",
    "grade": "小4"
  },
  {
    "kanji": "状",
    "kanji_reading": "じょう",
    "on_reading": "ジョウ",
    "kun_reading": NaN,
    "tts_sentence": "おれい の てがみ",
    "tts_slow_sentence": "おれい の てがみ を ゆっくり よむ",
    "tags": "学校",
    "grade": "小4"
  },
  {
    "kanji": "植",
    "kanji_reading": "うえる",
    "on_reading": "ショク",
    "kun_reading": "うえる",
    "tts_sentence": "はな を うえる",
    "tts_slow_sentence": "はな を ゆっくり うえる",
    "tags": "生活",
    "grade": "小4"
  },
  {
    "kanji": "職",
    "kanji_reading": "しょく",
    "on_reading": "ショク",
    "kun_reading": NaN,
    "tts_sentence": "しょくいんしつ に いく",
    "tts_slow_sentence": "しょくいんしつ に ゆっくり いく",
    "tags": "学校",
    "grade": "小4"
  },
  {
    "kanji": "織",
    "kanji_reading": "おる",
    "on_reading": "ショク",
    "kun_reading": "おる",
    "tts_sentence": "ぬの を おる",
    "tts_slow_sentence": "ぬの を ゆっくり おる",
    "tags": "図工",
    "grade": "小4"
  },
  {
    "kanji": "信",
    "kanji_reading": "しん",
    "on_reading": "シン",
    "kun_reading": NaN,
    "tts_sentence": "ともだち を しんじる",
    "tts_slow_sentence": "ともだち を ゆっくり しんじる",
    "tags": "心",
    "grade": "小4"
  },
  {
    "kanji": "臣",
    "kanji_reading": "しん",
    "on_reading": "シン",
    "kun_reading": NaN,
    "tts_sentence": "おうさま の しんじゃ",
    "tts_slow_sentence": "おうさま の しんじゃ を ゆっくり いう",
    "tags": "社会",
    "grade": "小4"
  },
  {
    "kanji": "井",
    "kanji_reading": "い",
    "on_reading": "セイ",
    "kun_reading": NaN,
    "tts_sentence": "い の みず を くむ",
    "tts_slow_sentence": "い の みず を ゆっくり くむ",
    "tags": "社会",
    "grade": "小4"
  },
  {
    "kanji": "清",
    "kanji_reading": "きよい",
    "on_reading": "セイ",
    "kun_reading": "きよい",
    "tts_sentence": "きよい みず",
    "tts_slow_sentence": "きよい みず を ゆっくり のむ",
    "tags": "自然",
    "grade": "小4"
  },
  {
    "kanji": "盛",
    "kanji_reading": "さかん",
    "on_reading": "セイ",
    "kun_reading": "さかん",
    "tts_sentence": "さかん に うごく",
    "tts_slow_sentence": "さかん に ゆっくり うごく",
    "tags": "理科",
    "grade": "小4"
  },
  {
    "kanji": "精",
    "kanji_reading": "せい",
    "on_reading": "セイ",
    "kun_reading": NaN,
    "tts_sentence": "ものごと に せいかく",
    "tts_slow_sentence": "ものごと に ゆっくり せいかく",
    "tags": "学校",
    "grade": "小4"
  },
  {
    "kanji": "製",
    "kanji_reading": "せい",
    "on_reading": "セイ",
    "kun_reading": NaN,
    "tts_sentence": "せいひん を つくる",
    "tts_slow_sentence": "せいひん を ゆっくり つくる",
    "tags": "社会",
    "grade": "小4"
  },
  {
    "kanji": "税",
    "kanji_reading": "ぜい",
    "on_reading": "ゼイ",
    "kun_reading": NaN,
    "tts_sentence": "ぜいきん を はらう",
    "tts_slow_sentence": "ぜいきん を ゆっくり はらう",
    "tags": "社会",
    "grade": "小4"
  },
  {
    "kanji": "責",
    "kanji_reading": "せめる",
    "on_reading": "セキ",
    "kun_reading": "せめる",
    "tts_sentence": "まちがい を せめない",
    "tts_slow_sentence": "まちがい を ゆっくり せめない",
    "tags": "心",
    "grade": "小4"
  },
  {
    "kanji": "績",
    "kanji_reading": "せき",
    "on_reading": "セキ",
    "kun_reading": NaN,
    "tts_sentence": "せきじつ を のこす",
    "tts_slow_sentence": "せきじつ を ゆっくり のこす",
    "tags": "学校",
    "grade": "小4"
  },
  {
    "kanji": "接",
    "kanji_reading": "つぐ",
    "on_reading": "セツ",
    "kun_reading": "つぐ",
    "tts_sentence": "ひと を つなぐ",
    "tts_slow_sentence": "ひと を ゆっくり つなぐ",
    "tags": "心",
    "grade": "小4"
  },
  {
    "kanji": "設",
    "kanji_reading": "もうける",
    "on_reading": "セツ",
    "kun_reading": "もうける",
    "tts_sentence": "へや を もうける",
    "tts_slow_sentence": "へや を ゆっくり もうける",
    "tags": "生活",
    "grade": "小4"
  },
  {
    "kanji": "舌",
    "kanji_reading": "した",
    "on_reading": "ゼツ",
    "kun_reading": "した",
    "tts_sentence": "した を だす",
    "tts_slow_sentence": "した を ゆっくり だす",
    "tags": "体",
    "grade": "小4"
  },
  {
    "kanji": "絶",
    "kanji_reading": "たつ",
    "on_reading": "ゼツ",
    "kun_reading": "たつ",
    "tts_sentence": "せん が たつ",
    "tts_slow_sentence": "せん が ゆっくり たつ",
    "tags": "算数",
    "grade": "小4"
  },
  {
    "kanji": "銭",
    "kanji_reading": "ぜに",
    "on_reading": "セン",
    "kun_reading": "ぜに",
    "tts_sentence": "こぜに を あつめる",
    "tts_slow_sentence": "こぜに を ゆっくり あつめる",
    "tags": "生活",
    "grade": "小4"
  },
  {
    "kanji": "祖",
    "kanji_reading": "そ",
    "on_reading": "ソ",
    "kun_reading": NaN,
    "tts_sentence": "そふ の はなし",
    "tts_slow_sentence": "そふ の はなし を ゆっくり きく",
    "tags": "家族",
    "grade": "小4"
  },
  {
    "kanji": "素",
    "kanji_reading": "もと",
    "on_reading": "ソ",
    "kun_reading": "もと",
    "tts_sentence": "もと に なる もの",
    "tts_slow_sentence": "もと に なる もの を ゆっくり みつける",
    "tags": "学校",
    "grade": "小4"
  },
  {
    "kanji": "総",
    "kanji_reading": "すべて",
    "on_reading": "ソウ",
    "kun_reading": "すべて",
    "tts_sentence": "すべて を あわせる",
    "tts_slow_sentence": "すべて を ゆっくり あわせる",
    "tags": "学校",
    "grade": "小4"
  },
  {
    "kanji": "造",
    "kanji_reading": "つくる",
    "on_reading": "ゾウ",
    "kun_reading": "つくる",
    "tts_sentence": "いえ を つくる",
    "tts_slow_sentence": "いえ を ゆっくり つくる",
    "tags": "図工",
    "grade": "小4"
  },
  {
    "kanji": "像",
    "kanji_reading": "ぞう",
    "on_reading": "ゾウ",
    "kun_reading": NaN,
    "tts_sentence": "ぞう を みる",
    "tts_slow_sentence": "ぞう を ゆっくり みる",
    "tags": "図工",
    "grade": "小4"
  },
  {
    "kanji": "増",
    "kanji_reading": "ふえる",
    "on_reading": "ゾウ",
    "kun_reading": "ふえる",
    "tts_sentence": "もの が ふえる",
    "tts_slow_sentence": "もの が ゆっくり ふえる",
    "tags": "算数",
    "grade": "小4"
  },
  {
    "kanji": "則",
    "kanji_reading": "のっとる",
    "on_reading": "ソク",
    "kun_reading": "のっとる",
    "tts_sentence": "きそく に のっとる",
    "tts_slow_sentence": "きそく に ゆっくり のっとる",
    "tags": "学校",
    "grade": "小4"
  },
  {
    "kanji": "測",
    "kanji_reading": "はかる",
    "on_reading": "ソク",
    "kun_reading": "はかる",
    "tts_sentence": "みず の たかさ を はかる",
    "tts_slow_sentence": "みず の たかさ を ゆっくり はかる",
    "tags": "理科",
    "grade": "小4"
  },
  {
    "kanji": "属",
    "kanji_reading": "ぞく",
    "on_reading": "ゾク",
    "kun_reading": NaN,
    "tts_sentence": "なかま に ぞくする",
    "tts_slow_sentence": "なかま に ゆっくり ぞくする",
    "tags": "社会",
    "grade": "小4"
  },
  {
    "kanji": "率",
    "kanji_reading": "りつ",
    "on_reading": "リツ",
    "kun_reading": NaN,
    "tts_sentence": "りつ を だす",
    "tts_slow_sentence": "りつ を ゆっくり だす",
    "tags": "算数",
    "grade": "小4"
  },
  {
    "kanji": "損",
    "kanji_reading": "そこなう",
    "on_reading": "ソン",
    "kun_reading": "そこなう",
    "tts_sentence": "もの を そこなう",
    "tts_slow_sentence": "もの を ゆっくり そこなう",
    "tags": "生活",
    "grade": "小4"
  },
  {
    "kanji": "退",
    "kanji_reading": "しりぞく",
    "on_reading": "タイ",
    "kun_reading": "しりぞく",
    "tts_sentence": "あし を しりぞく",
    "tts_slow_sentence": "あし を ゆっくり しりぞく",
    "tags": "体",
    "grade": "小4"
  },
  {
    "kanji": "貸",
    "kanji_reading": "かす",
    "on_reading": "タイ",
    "kun_reading": "かす",
    "tts_sentence": "ほん を かす",
    "tts_slow_sentence": "ほん を ゆっくり かす",
    "tags": "生活",
    "grade": "小4"
  },
  {
    "kanji": "態",
    "kanji_reading": "たい",
    "on_reading": "タイ",
    "kun_reading": NaN,
    "tts_sentence": "たいど を かえる",
    "tts_slow_sentence": "たいど を ゆっくり かえる",
    "tags": "心",
    "grade": "小4"
  },
  {
    "kanji": "団",
    "kanji_reading": "だん",
    "on_reading": "ダン",
    "kun_reading": NaN,
    "tts_sentence": "だんたい を あつめる",
    "tts_slow_sentence": "だんたい を ゆっくり あつめる",
    "tags": "生活",
    "grade": "小4"
  },
  {
    "kanji": "断",
    "kanji_reading": "たつ",
    "on_reading": "ダン",
    "kun_reading": "たつ",
    "tts_sentence": "みち が たつ",
    "tts_slow_sentence": "みち が ゆっくり たつ",
    "tags": "算数",
    "grade": "小4"
  },
  {
    "kanji": "値",
    "kanji_reading": "ね",
    "on_reading": "チ",
    "kun_reading": "ね",
    "tts_sentence": "ね を つける",
    "tts_slow_sentence": "ね を ゆっくり つける",
    "tags": "算数",
    "grade": "小4"
  },
  {
    "kanji": "担",
    "kanji_reading": "かつぐ",
    "on_reading": "タン",
    "kun_reading": "かつぐ",
    "tts_sentence": "にもつ を かつぐ",
    "tts_slow_sentence": "にもつ を ゆっくり かつぐ",
    "tags": "生活",
    "grade": "小4"
  },
  {
    "kanji": "探",
    "kanji_reading": "さがす",
    "on_reading": "タン",
    "kun_reading": "さがす",
    "tts_sentence": "もの を さがす",
    "tts_slow_sentence": "もの を ゆっくり さがす",
    "tags": "生活",
    "grade": "小4"
  },
  {
    "kanji": "誕",
    "kanji_reading": "たん",
    "on_reading": "タン",
    "kun_reading": NaN,
    "tts_sentence": "たんじょうび を いわう",
    "tts_slow_sentence": "たんじょうび を ゆっくり いわう",
    "tags": "生活",
    "grade": "小4"
  },
  {
    "kanji": "段",
    "kanji_reading": "だん",
    "on_reading": "ダン",
    "kun_reading": NaN,
    "tts_sentence": "だんボール を つむ",
    "tts_slow_sentence": "だんボール を ゆっくり つむ",
    "tags": "生活",
    "grade": "小4"
  },
  {
    "kanji": "暖",
    "kanji_reading": "あたたかい",
    "on_reading": "ダン",
    "kun_reading": "あたたかい",
    "tts_sentence": "へや が あたたかい",
    "tts_slow_sentence": "へや が ゆっくり あたたかい",
    "tags": "生活",
    "grade": "小4"
  },
  {
    "kanji": "値",
    "kanji_reading": "あたい",
    "on_reading": "チ",
    "kun_reading": "あたい",
    "tts_sentence": "あたい を しらべる",
    "tts_slow_sentence": "あたい を ゆっくり しらべる",
    "tags": "算数",
    "grade": "小4"
  },
  {
    "kanji": "宙",
    "kanji_reading": "ちゅう",
    "on_reading": "チュウ",
    "kun_reading": NaN,
    "tts_sentence": "うちゅう を みる",
    "tts_slow_sentence": "うちゅう を ゆっくり みる",
    "tags": "理科",
    "grade": "小4"
  },
  {
    "kanji": "忠",
    "kanji_reading": "ただしい",
    "on_reading": "チュウ",
    "kun_reading": "ただしい",
    "tts_sentence": "ちゅうじつ な こころ",
    "tts_slow_sentence": "ちゅうじつ な こころ を ゆっくり いう",
    "tags": "心",
    "grade": "小4"
  },
  {
    "kanji": "著",
    "kanji_reading": "あらわす",
    "on_reading": "チョ",
    "kun_reading": "あらわす",
    "tts_sentence": "ほん を あらわす",
    "tts_slow_sentence": "ほん を ゆっくり あらわす",
    "tags": "国語",
    "grade": "小4"
  },
  {
    "kanji": "庁",
    "kanji_reading": "ちょう",
    "on_reading": "チョウ",
    "kun_reading": NaN,
    "tts_sentence": "けいさつちょう を みる",
    "tts_slow_sentence": "けいさつちょう を ゆっくり みる",
    "tags": "社会",
    "grade": "小4"
  },
  {
    "kanji": "頂",
    "kanji_reading": "いただく",
    "on_reading": "チョウ",
    "kun_reading": "いただく",
    "tts_sentence": "いただき ます を いう",
    "tts_slow_sentence": "いただき ます を ゆっくり いう",
    "tags": "生活",
    "grade": "小4"
  },
  {
    "kanji": "潮",
    "kanji_reading": "しお",
    "on_reading": "チョウ",
    "kun_reading": "しお",
    "tts_sentence": "しお が ひく",
    "tts_slow_sentence": "しお が ゆっくり ひく",
    "tags": "自然",
    "grade": "小4"
  },
  {
    "kanji": "賃",
    "kanji_reading": "ちん",
    "on_reading": "チン",
    "kun_reading": NaN,
    "tts_sentence": "ちんりょう を はらう",
    "tts_slow_sentence": "ちんりょう を ゆっくり はらう",
    "tags": "社会",
    "grade": "小4"
  },
  {
    "kanji": "痛",
    "kanji_reading": "いたい",
    "on_reading": "ツウ",
    "kun_reading": "いたい",
    "tts_sentence": "あし が いたい",
    "tts_slow_sentence": "あし が ゆっくり いたい",
    "tags": "体",
    "grade": "小4"
  },
  {
    "kanji": "敵",
    "kanji_reading": "てき",
    "on_reading": "テキ",
    "kun_reading": NaN,
    "tts_sentence": "てき を みつける",
    "tts_slow_sentence": "てき を ゆっくり みつける",
    "tags": "ゲーム",
    "grade": "小4"
  },
  {
    "kanji": "適",
    "kanji_reading": "てき",
    "on_reading": "テキ",
    "kun_reading": NaN,
    "tts_sentence": "てきせつ な たいおう",
    "tts_slow_sentence": "てきせつ な たいおう を ゆっくり する",
    "tags": "学校",
    "grade": "小4"
  },
  {
    "kanji": "統",
    "kanji_reading": "すべる",
    "on_reading": "トウ",
    "kun_reading": "すべる",
    "tts_sentence": "くに を すべる",
    "tts_slow_sentence": "くに を ゆっくり すべる",
    "tags": "社会",
    "grade": "小4"
  },
  {
    "kanji": "銅",
    "kanji_reading": "どう",
    "on_reading": "ドウ",
    "kun_reading": NaN,
    "tts_sentence": "どうぞう を みる",
    "tts_slow_sentence": "どうぞう を ゆっくり みる",
    "tags": "図工",
    "grade": "小4"
  },
  {
    "kanji": "導",
    "kanji_reading": "みちびく",
    "on_reading": "ドウ",
    "kun_reading": "みちびく",
    "tts_sentence": "ともだち を みちびく",
    "tts_slow_sentence": "ともだち を ゆっくり みちびく",
    "tags": "心",
    "grade": "小4"
  },
  {
    "kanji": "徳",
    "kanji_reading": "とく",
    "on_reading": "トク",
    "kun_reading": NaN,
    "tts_sentence": "よい こと を する",
    "tts_slow_sentence": "よい こと を ゆっくり する",
    "tags": "心",
    "grade": "小4"
  },
  {
    "kanji": "独",
    "kanji_reading": "ひとり",
    "on_reading": "ドク",
    "kun_reading": "ひとり",
    "tts_sentence": "ひとり で かんがえる",
    "tts_slow_sentence": "ひとり で ゆっくり かんがえる",
    "tags": "心",
    "grade": "小4"
  },
  {
    "kanji": "任",
    "kanji_reading": "まかせる",
    "on_reading": "ニン",
    "kun_reading": "まかせる",
    "tts_sentence": "しごと を まかせる",
    "tts_slow_sentence": "しごと を ゆっくり まかせる",
    "tags": "生活",
    "grade": "小4"
  },
  {
    "kanji": "燃",
    "kanji_reading": "もえる",
    "on_reading": "ネン",
    "kun_reading": "もえる",
    "tts_sentence": "かれ は が もえる",
    "tts_slow_sentence": "かれ は が ゆっくり もえる",
    "tags": "理科",
    "grade": "小4"
  },
  {
    "kanji": "能",
    "kanji_reading": "のう",
    "on_reading": "ノウ",
    "kun_reading": NaN,
    "tts_sentence": "のうりょく を のばす",
    "tts_slow_sentence": "のうりょく を ゆっくり のばす",
    "tags": "学校",
    "grade": "小4"
  },
  {
    "kanji": "破",
    "kanji_reading": "やぶる",
    "on_reading": "ハ",
    "kun_reading": "やぶる",
    "tts_sentence": "かみ を やぶる",
    "tts_slow_sentence": "かみ を ゆっくり やぶる",
    "tags": "生活",
    "grade": "小4"
  },
  {
    "kanji": "犯",
    "kanji_reading": "おかす",
    "on_reading": "ハン",
    "kun_reading": "おかす",
    "tts_sentence": "まちがい を おかす",
    "tts_slow_sentence": "まちがい を ゆっくり おかす",
    "tags": "心",
    "grade": "小4"
  },
  {
    "kanji": "判",
    "kanji_reading": "わかる",
    "on_reading": "ハン",
    "kun_reading": "わかる",
    "tts_sentence": "はんてい を する",
    "tts_slow_sentence": "はんてい を ゆっくり する",
    "tags": "学校",
    "grade": "小4"
  },
  {
    "kanji": "版",
    "kanji_reading": "はん",
    "on_reading": "ハン",
    "kun_reading": NaN,
    "tts_sentence": "はんこ を おす",
    "tts_slow_sentence": "はんこ を ゆっくり おす",
    "tags": "生活",
    "grade": "小4"
  },
  {
    "kanji": "比",
    "kanji_reading": "くらべる",
    "on_reading": "ヒ",
    "kun_reading": "くらべる",
    "tts_sentence": "おおきさ を くらべる",
    "tts_slow_sentence": "おおきさ を ゆっくり くらべる",
    "tags": "算数",
    "grade": "小4"
  },
  {
    "kanji": "皮",
    "kanji_reading": "かわ",
    "on_reading": "ヒ",
    "kun_reading": "かわ",
    "tts_sentence": "くだもの の かわ を むく",
    "tts_slow_sentence": "くだもの の かわ を ゆっくり むく",
    "tags": "生活",
    "grade": "小4"
  },
  {
    "kanji": "被",
    "kanji_reading": "こうむる",
    "on_reading": "ヒ",
    "kun_reading": "こうむる",
    "tts_sentence": "ひがい を こうむる",
    "tts_slow_sentence": "ひがい を ゆっくり こうむる",
    "tags": "社会",
    "grade": "小4"
  },
  {
    "kanji": "非",
    "kanji_reading": "ひ",
    "on_reading": "ヒ",
    "kun_reading": NaN,
    "tts_sentence": "ひじょうぐち を しらべる",
    "tts_slow_sentence": "ひじょうぐち を ゆっくり しらべる",
    "tags": "学校",
    "grade": "小4"
  },
  {
    "kanji": "備",
    "kanji_reading": "そなえる",
    "on_reading": "ビ",
    "kun_reading": "そなえる",
    "tts_sentence": "さいがい に そなえる",
    "tts_slow_sentence": "さいがい に ゆっくり そなえる",
    "tags": "社会",
    "grade": "小4"
  },
  {
    "kanji": "評",
    "kanji_reading": "ひょう",
    "on_reading": "ヒョウ",
    "kun_reading": NaN,
    "tts_sentence": "ひょうか を うける",
    "tts_slow_sentence": "ひょうか を ゆっくり うける",
    "tags": "学校",
    "grade": "小4"
  },
  {
    "kanji": "貧",
    "kanji_reading": "まずしい",
    "on_reading": "ヒン",
    "kun_reading": "まずしい",
    "tts_sentence": "まずしい くらし",
    "tts_slow_sentence": "まずしい くらし を ゆっくり かんがえる",
    "tags": "社会",
    "grade": "小4"
  },
  {
    "kanji": "布",
    "kanji_reading": "ぬの",
    "on_reading": "フ",
    "kun_reading": "ぬの",
    "tts_sentence": "ぬの を きる",
    "tts_slow_sentence": "ぬの を ゆっくり きる",
    "tags": "図工",
    "grade": "小4"
  },
  {
    "kanji": "婦",
    "kanji_reading": "ふ",
    "on_reading": "フ",
    "kun_reading": NaN,
    "tts_sentence": "ふじん の しごと",
    "tts_slow_sentence": "ふじん の しごと を ゆっくり しる",
    "tags": "社会",
    "grade": "小4"
  },
  {
    "kanji": "武",
    "kanji_reading": "たけ",
    "on_reading": "ブ",
    "kun_reading": "たけ",
    "tts_sentence": "ぶどう を ならう",
    "tts_slow_sentence": "ぶどう を ゆっくり ならう",
    "tags": "社会",
    "grade": "小4"
  },
  {
    "kanji": "復",
    "kanji_reading": "もどる",
    "on_reading": "フク",
    "kun_reading": "もどる",
    "tts_sentence": "いえ に もどる",
    "tts_slow_sentence": "いえ に ゆっくり もどる",
    "tags": "生活",
    "grade": "小4"
  },
  {
    "kanji": "複",
    "kanji_reading": "ふく",
    "on_reading": "フク",
    "kun_reading": NaN,
    "tts_sentence": "ふくざつ な もんだい",
    "tts_slow_sentence": "ふくざつ な もんだい を ゆっくり とく",
    "tags": "学校",
    "grade": "小4"
  },
  {
    "kanji": "仏",
    "kanji_reading": "ほとけ",
    "on_reading": "ブツ",
    "kun_reading": "ほとけ",
    "tts_sentence": "ほとけ を みる",
    "tts_slow_sentence": "ほとけ を ゆっくり みる",
    "tags": "社会",
    "grade": "小4"
  },
  {
    "kanji": "粉",
    "kanji_reading": "こな",
    "on_reading": "フン",
    "kun_reading": "こな",
    "tts_sentence": "こな を まぜる",
    "tts_slow_sentence": "こな を ゆっくり まぜる",
    "tags": "家庭科",
    "grade": "小4"
  },
  {
    "kanji": "兵",
    "kanji_reading": "へい",
    "on_reading": "ヘイ",
    "kun_reading": NaN,
    "tts_sentence": "へいたい の れんしゅう",
    "tts_slow_sentence": "へいたい の れんしゅう を ゆっくり よむ",
    "tags": "社会",
    "grade": "小4"
  },
  {
    "kanji": "別",
    "kanji_reading": "わかれる",
    "on_reading": "ベツ",
    "kun_reading": "わかれる",
    "tts_sentence": "ともだち と わかれる",
    "tts_slow_sentence": "ともだち と ゆっくり わかれる",
    "tags": "心",
    "grade": "小4"
  },
  {
    "kanji": "変",
    "kanji_reading": "かわる",
    "on_reading": "ヘン",
    "kun_reading": "かわる",
    "tts_sentence": "いろ が かわる",
    "tts_slow_sentence": "いろ が ゆっくり かわる",
    "tags": "図工",
    "grade": "小4"
  },
  {
    "kanji": "弁",
    "kanji_reading": "べん",
    "on_reading": "ベン",
    "kun_reading": NaN,
    "tts_sentence": "べんとう を つくる",
    "tts_slow_sentence": "べんとう を ゆっくり つくる",
    "tags": "生活",
    "grade": "小4"
  },
  {
    "kanji": "保",
    "kanji_reading": "たもつ",
    "on_reading": "ホ",
    "kun_reading": "たもつ",
    "tts_sentence": "あんぜん を たもつ",
    "tts_slow_sentence": "あんぜん を ゆっくり たもつ",
    "tags": "生活",
    "grade": "小4"
  },
  {
    "kanji": "舗",
    "kanji_reading": "ほ",
    "on_reading": "ホ",
    "kun_reading": NaN,
    "tts_sentence": "とおり を ほそう する",
    "tts_slow_sentence": "とおり を ゆっくり ほそう する",
    "tags": "社会",
    "grade": "小4"
  },
  {
    "kanji": "報",
    "kanji_reading": "むくいる",
    "on_reading": "ホウ",
    "kun_reading": "むくいる",
    "tts_sentence": "よい こと を むくいる",
    "tts_slow_sentence": "よい こと を ゆっくり むくいる",
    "tags": "心",
    "grade": "小4"
  },
  {
    "kanji": "豊",
    "kanji_reading": "ゆたか",
    "on_reading": "ホウ",
    "kun_reading": "ゆたか",
    "tts_sentence": "ゆたか な みのり",
    "tts_slow_sentence": "ゆたか な みのり を ゆっくり みる",
    "tags": "自然",
    "grade": "小4"
  },
  {
    "kanji": "防",
    "kanji_reading": "ふせぐ",
    "on_reading": "ボウ",
    "kun_reading": "ふせぐ",
    "tts_sentence": "あめ を ふせぐ",
    "tts_slow_sentence": "あめ を ゆっくり ふせぐ",
    "tags": "生活",
    "grade": "小4"
  },
  {
    "kanji": "貿",
    "kanji_reading": "ぼう",
    "on_reading": "ボウ",
    "kun_reading": NaN,
    "tts_sentence": "ぼうえき を しらべる",
    "tts_slow_sentence": "ぼうえき を ゆっくり しらべる",
    "tags": "社会",
    "grade": "小4"
  },
  {
    "kanji": "暴",
    "kanji_reading": "あばれる",
    "on_reading": "ボウ",
    "kun_reading": "あばれる",
    "tts_sentence": "かぜ が あばれる",
    "tts_slow_sentence": "かぜ が ゆっくり あばれる",
    "tags": "自然",
    "grade": "小4"
  },
  {
    "kanji": "務",
    "kanji_reading": "つとめる",
    "on_reading": "ム",
    "kun_reading": "つとめる",
    "tts_sentence": "しごと を つとめる",
    "tts_slow_sentence": "しごと を ゆっくり つとめる",
    "tags": "生活",
    "grade": "小4"
  },
  {
    "kanji": "夢",
    "kanji_reading": "ゆめ",
    "on_reading": "ム",
    "kun_reading": "ゆめ",
    "tts_sentence": "ゆめ を みる",
    "tts_slow_sentence": "ゆめ を ゆっくり みる",
    "tags": "心",
    "grade": "小4"
  },
  {
    "kanji": "圧",
    "kanji_reading": "あつ",
    "on_reading": "アツ",
    "kun_reading": NaN,
    "tts_sentence": "あつりょく を かける",
    "tts_slow_sentence": "あつりょく を ゆっくり かける",
    "tags": "理科",
    "grade": "小5"
  },
  {
    "kanji": "移",
    "kanji_reading": "うつる",
    "on_reading": "イ",
    "kun_reading": "うつる",
    "tts_sentence": "ばしょ を うつる",
    "tts_slow_sentence": "ばしょ を ゆっくり うつる",
    "tags": "社会",
    "grade": "小5"
  },
  {
    "kanji": "因",
    "kanji_reading": "いん",
    "on_reading": "イン",
    "kun_reading": NaN,
    "tts_sentence": "げんいん を しらべる",
    "tts_slow_sentence": "げんいん を ゆっくり しらべる",
    "tags": "国語",
    "grade": "小5"
  },
  {
    "kanji": "永",
    "kanji_reading": "えい",
    "on_reading": "エイ",
    "kun_reading": NaN,
    "tts_sentence": "えいえん に つづく",
    "tts_slow_sentence": "えいえん に ゆっくり つづく",
    "tags": "心",
    "grade": "小5"
  },
  {
    "kanji": "営",
    "kanji_reading": "いとなむ",
    "on_reading": "エイ",
    "kun_reading": "いとなむ",
    "tts_sentence": "おみせ を いとなむ",
    "tts_slow_sentence": "おみせ を ゆっくり いとなむ",
    "tags": "社会",
    "grade": "小5"
  },
  {
    "kanji": "衛",
    "kanji_reading": "まもる",
    "on_reading": "エイ",
    "kun_reading": "まもる",
    "tts_sentence": "みんな を まもる",
    "tts_slow_sentence": "みんな を ゆっくり まもる",
    "tags": "生活",
    "grade": "小5"
  },
  {
    "kanji": "益",
    "kanji_reading": "えき",
    "on_reading": "エキ",
    "kun_reading": NaN,
    "tts_sentence": "やく に たつ",
    "tts_slow_sentence": "やく に ゆっくり たつ",
    "tags": "生活",
    "grade": "小5"
  },
  {
    "kanji": "液",
    "kanji_reading": "えき",
    "on_reading": "エキ",
    "kun_reading": NaN,
    "tts_sentence": "すいえき を ならべる",
    "tts_slow_sentence": "すいえき を ゆっくり ならべる",
    "tags": "理科",
    "grade": "小5"
  },
  {
    "kanji": "演",
    "kanji_reading": "えん",
    "on_reading": "エン",
    "kun_reading": NaN,
    "tts_sentence": "げきを えんじる",
    "tts_slow_sentence": "げきを ゆっくり えんじる",
    "tags": "国語",
    "grade": "小5"
  },
  {
    "kanji": "応",
    "kanji_reading": "おう",
    "on_reading": "オウ",
    "kun_reading": NaN,
    "tts_sentence": "こたえ に おう",
    "tts_slow_sentence": "こたえ に ゆっくり おう",
    "tags": "国語",
    "grade": "小5"
  },
  {
    "kanji": "往",
    "kanji_reading": "いく",
    "on_reading": "オウ",
    "kun_reading": "いく",
    "tts_sentence": "がっこう に いく",
    "tts_slow_sentence": "がっこう に ゆっくり いく",
    "tags": "生活",
    "grade": "小5"
  },
  {
    "kanji": "桜",
    "kanji_reading": "さくら",
    "on_reading": "オウ",
    "kun_reading": "さくら",
    "tts_sentence": "さくら が さく",
    "tts_slow_sentence": "さくら が ゆっくり さく",
    "tags": "自然",
    "grade": "小5"
  },
  {
    "kanji": "可",
    "kanji_reading": "か",
    "on_reading": "カ",
    "kun_reading": NaN,
    "tts_sentence": "かのう か を しらべる",
    "tts_slow_sentence": "かのう か を ゆっくり しらべる",
    "tags": "学校",
    "grade": "小5"
  },
  {
    "kanji": "佳",
    "kanji_reading": "よい",
    "on_reading": "カ",
    "kun_reading": "よい",
    "tts_sentence": "よい できごと",
    "tts_slow_sentence": "よい できごと を ゆっくり いう",
    "tags": "心",
    "grade": "小5"
  },
  {
    "kanji": "果",
    "kanji_reading": "はたす",
    "on_reading": "カ",
    "kun_reading": "はたす",
    "tts_sentence": "しごと を はたす",
    "tts_slow_sentence": "しごと を ゆっくり はたす",
    "tags": "生活",
    "grade": "小5"
  },
  {
    "kanji": "課",
    "kanji_reading": "か",
    "on_reading": "カ",
    "kun_reading": NaN,
    "tts_sentence": "かだい を する",
    "tts_slow_sentence": "かだい を ゆっくり する",
    "tags": "学校",
    "grade": "小5"
  },
  {
    "kanji": "芽",
    "kanji_reading": "め",
    "on_reading": "ガ",
    "kun_reading": "め",
    "tts_sentence": "はる に め が でる",
    "tts_slow_sentence": "はる に ゆっくり め が でる",
    "tags": "自然",
    "grade": "小5"
  },
  {
    "kanji": "賀",
    "kanji_reading": "が",
    "on_reading": "ガ",
    "kun_reading": NaN,
    "tts_sentence": "おいわい の がしょ",
    "tts_slow_sentence": "おいわい の がしょ を ゆっくり よむ",
    "tags": "国語",
    "grade": "小5"
  },
  {
    "kanji": "改",
    "kanji_reading": "あらためる",
    "on_reading": "カイ",
    "kun_reading": "あらためる",
    "tts_sentence": "まち を あらためる",
    "tts_slow_sentence": "まち を ゆっくり あらためる",
    "tags": "社会",
    "grade": "小5"
  },
  {
    "kanji": "械",
    "kanji_reading": "かい",
    "on_reading": "カイ",
    "kun_reading": NaN,
    "tts_sentence": "きかい を つかう",
    "tts_slow_sentence": "きかい を ゆっくり つかう",
    "tags": "理科",
    "grade": "小5"
  },
  {
    "kanji": "害",
    "kanji_reading": "がい",
    "on_reading": "ガイ",
    "kun_reading": NaN,
    "tts_sentence": "がい を ふせぐ",
    "tts_slow_sentence": "がい を ゆっくり ふせぐ",
    "tags": "社会",
    "grade": "小5"
  },
  {
    "kanji": "街",
    "kanji_reading": "まち",
    "on_reading": "ガイ",
    "kun_reading": "まち",
    "tts_sentence": "まち を あるく",
    "tts_slow_sentence": "まち を ゆっくり あるく",
    "tags": "社会",
    "grade": "小5"
  },
  {
    "kanji": "各",
    "kanji_reading": "かく",
    "on_reading": "カク",
    "kun_reading": NaN,
    "tts_sentence": "かく ちがう",
    "tts_slow_sentence": "かく ちがう ところ を ゆっくり みる",
    "tags": "国語",
    "grade": "小5"
  },
  {
    "kanji": "拡",
    "kanji_reading": "ひろげる",
    "on_reading": "カク",
    "kun_reading": "ひろげる",
    "tts_sentence": "はば を ひろげる",
    "tts_slow_sentence": "はば を ゆっくり ひろげる",
    "tags": "図工",
    "grade": "小5"
  },
  {
    "kanji": "革",
    "kanji_reading": "かわ",
    "on_reading": "カク",
    "kun_reading": "かわ",
    "tts_sentence": "かわ の ぶんぐ",
    "tts_slow_sentence": "かわ の ぶんぐ を ゆっくり つかう",
    "tags": "生活",
    "grade": "小5"
  },
  {
    "kanji": "閣",
    "kanji_reading": "かく",
    "on_reading": "カク",
    "kun_reading": NaN,
    "tts_sentence": "せいふ が あつまる",
    "tts_slow_sentence": "せいふ が ゆっくり あつまる",
    "tags": "社会",
    "grade": "小5"
  },
  {
    "kanji": "割",
    "kanji_reading": "わる",
    "on_reading": "カツ",
    "kun_reading": "わる",
    "tts_sentence": "りんご を わる",
    "tts_slow_sentence": "りんご を ゆっくり わる",
    "tags": "生活",
    "grade": "小5"
  },
  {
    "kanji": "株",
    "kanji_reading": "かぶ",
    "on_reading": "カブ",
    "kun_reading": NaN,
    "tts_sentence": "き の かぶ を みる",
    "tts_slow_sentence": "き の かぶ を ゆっくり みる",
    "tags": "自然",
    "grade": "小5"
  },
  {
    "kanji": "干",
    "kanji_reading": "ほす",
    "on_reading": "カン",
    "kun_reading": "ほす",
    "tts_sentence": "ふく を ほす",
    "tts_slow_sentence": "ふく を ゆっくり ほす",
    "tags": "生活",
    "grade": "小5"
  },
  {
    "kanji": "巻",
    "kanji_reading": "まく",
    "on_reading": "カン",
    "kun_reading": "まく",
    "tts_sentence": "ひも を まく",
    "tts_slow_sentence": "ひも を ゆっくり まく",
    "tags": "生活",
    "grade": "小5"
  },
  {
    "kanji": "看",
    "kanji_reading": "みる",
    "on_reading": "カン",
    "kun_reading": "みる",
    "tts_sentence": "びょうにん を みる",
    "tts_slow_sentence": "びょうにん を ゆっくり みる",
    "tags": "生活",
    "grade": "小5"
  },
  {
    "kanji": "簡",
    "kanji_reading": "かん",
    "on_reading": "カン",
    "kun_reading": NaN,
    "tts_sentence": "かんたん に する",
    "tts_slow_sentence": "かんたん に ゆっくり する",
    "tags": "国語",
    "grade": "小5"
  },
  {
    "kanji": "危",
    "kanji_reading": "あぶない",
    "on_reading": "キ",
    "kun_reading": "あぶない",
    "tts_sentence": "みち が あぶない",
    "tts_slow_sentence": "みち が ゆっくり あぶない",
    "tags": "生活",
    "grade": "小5"
  },
  {
    "kanji": "机",
    "kanji_reading": "つくえ",
    "on_reading": "キ",
    "kun_reading": NaN,
    "tts_sentence": "つくえ を つかう",
    "tts_slow_sentence": "つくえ を ゆっくり つかう",
    "tags": "学校",
    "grade": "小5"
  },
  {
    "kanji": "揮",
    "kanji_reading": "ふるう",
    "on_reading": "キ",
    "kun_reading": "ふるう",
    "tts_sentence": "バット を ふるう",
    "tts_slow_sentence": "バット を ゆっくり ふるう",
    "tags": "運動",
    "grade": "小5"
  },
  {
    "kanji": "貴",
    "kanji_reading": "たっとい",
    "on_reading": "キ",
    "kun_reading": "たっとい",
    "tts_sentence": "たいせつ な もの",
    "tts_slow_sentence": "たいせつ な もの を ゆっくり まもる",
    "tags": "心",
    "grade": "小5"
  },
  {
    "kanji": "疑",
    "kanji_reading": "うたがう",
    "on_reading": "ギ",
    "kun_reading": "うたがう",
    "tts_sentence": "ほんとう か うたがう",
    "tts_slow_sentence": "ほんとう か ゆっくり うたがう",
    "tags": "国語",
    "grade": "小5"
  },
  {
    "kanji": "吸",
    "kanji_reading": "すう",
    "on_reading": "キュウ",
    "kun_reading": "すう",
    "tts_sentence": "いきを すう",
    "tts_slow_sentence": "いきを ゆっくり すう",
    "tags": "体",
    "grade": "小5"
  },
  {
    "kanji": "供",
    "kanji_reading": "そなえる",
    "on_reading": "キョウ",
    "kun_reading": "そなえる",
    "tts_sentence": "はな を そなえる",
    "tts_slow_sentence": "はな を ゆっくり そなえる",
    "tags": "生活",
    "grade": "小5"
  },
  {
    "kanji": "胸",
    "kanji_reading": "むね",
    "on_reading": "キョウ",
    "kun_reading": "むね",
    "tts_sentence": "むね が どきどき する",
    "tts_slow_sentence": "むね が ゆっくり どきどき する",
    "tags": "体",
    "grade": "小5"
  },
  {
    "kanji": "郷",
    "kanji_reading": "さと",
    "on_reading": "キョウ",
    "kun_reading": "さと",
    "tts_sentence": "さと に かえる",
    "tts_slow_sentence": "さと に ゆっくり かえる",
    "tags": "心",
    "grade": "小5"
  },
  {
    "kanji": "勤",
    "kanji_reading": "つとめる",
    "on_reading": "キン",
    "kun_reading": "つとめる",
    "tts_sentence": "しごと を つとめる",
    "tts_slow_sentence": "しごと を ゆっくり つとめる",
    "tags": "生活",
    "grade": "小5"
  },
  {
    "kanji": "筋",
    "kanji_reading": "すじ",
    "on_reading": "キン",
    "kun_reading": "すじ",
    "tts_sentence": "あし の すじ",
    "tts_slow_sentence": "あし の すじ を ゆっくり みる",
    "tags": "体",
    "grade": "小5"
  },
  {
    "kanji": "系",
    "kanji_reading": "けい",
    "on_reading": "ケイ",
    "kun_reading": NaN,
    "tts_sentence": "けいとう を しめす",
    "tts_slow_sentence": "けいとう を ゆっくり しめす",
    "tags": "理科",
    "grade": "小5"
  },
  {
    "kanji": "敬",
    "kanji_reading": "うやまう",
    "on_reading": "ケイ",
    "kun_reading": "うやまう",
    "tts_sentence": "ひと を うやまう",
    "tts_slow_sentence": "ひと を ゆっくり うやまう",
    "tags": "心",
    "grade": "小5"
  },
  {
    "kanji": "警",
    "kanji_reading": "けい",
    "on_reading": "ケイ",
    "kun_reading": NaN,
    "tts_sentence": "けいさつ を よぶ",
    "tts_slow_sentence": "けいさつ を ゆっくり よぶ",
    "tags": "社会",
    "grade": "小5"
  },
  {
    "kanji": "径",
    "kanji_reading": "みち",
    "on_reading": "ケイ",
    "kun_reading": "みち",
    "tts_sentence": "みち の けい を しらべる",
    "tts_slow_sentence": "みち の けい を ゆっくり しらべる",
    "tags": "算数",
    "grade": "小5"
  },
  {
    "kanji": "湖",
    "kanji_reading": "みずうみ",
    "on_reading": "コ",
    "kun_reading": "みずうみ",
    "tts_sentence": "みずうみ が ひろがる",
    "tts_slow_sentence": "みずうみ が ゆっくり ひろがる",
    "tags": "自然",
    "grade": "小5"
  },
  {
    "kanji": "雇",
    "kanji_reading": "やとう",
    "on_reading": "コ",
    "kun_reading": "やとう",
    "tts_sentence": "ひと を やとう",
    "tts_slow_sentence": "ひと を ゆっくり やとう",
    "tags": "社会",
    "grade": "小5"
  },
  {
    "kanji": "庫",
    "kanji_reading": "くら",
    "on_reading": "コ",
    "kun_reading": "くら",
    "tts_sentence": "くら に しまう",
    "tts_slow_sentence": "くら に ゆっくり しまう",
    "tags": "生活",
    "grade": "小5"
  },
  {
    "kanji": "故",
    "kanji_reading": "ゆえ",
    "on_reading": "コ",
    "kun_reading": "ゆえ",
    "tts_sentence": "こじん を しる",
    "tts_slow_sentence": "こじん を ゆっくり しる",
    "tags": "国語",
    "grade": "小5"
  },
  {
    "kanji": "個",
    "kanji_reading": "こ",
    "on_reading": "コ",
    "kun_reading": NaN,
    "tts_sentence": "ひとり の こすう",
    "tts_slow_sentence": "ひとり の こすう を ゆっくり かぞえる",
    "tags": "算数",
    "grade": "小5"
  },
  {
    "kanji": "護",
    "kanji_reading": "まもる",
    "on_reading": "ゴ",
    "kun_reading": "まもる",
    "tts_sentence": "まち を まもる",
    "tts_slow_sentence": "まち を ゆっくり まもる",
    "tags": "社会",
    "grade": "小5"
  },
  {
    "kanji": "効",
    "kanji_reading": "きく",
    "on_reading": "コウ",
    "kun_reading": "きく",
    "tts_sentence": "くすり が よく きく",
    "tts_slow_sentence": "くすり が ゆっくり きく",
    "tags": "生活",
    "grade": "小5"
  },
  {
    "kanji": "厚",
    "kanji_reading": "あつい",
    "on_reading": "コウ",
    "kun_reading": "あつい",
    "tts_sentence": "あつい 本 を よむ",
    "tts_slow_sentence": "あつい 本 を ゆっくり よむ",
    "tags": "国語",
    "grade": "小5"
  },
  {
    "kanji": "耕",
    "kanji_reading": "たがやす",
    "on_reading": "コウ",
    "kun_reading": "たがやす",
    "tts_sentence": "はたけ を たがやす",
    "tts_slow_sentence": "はたけ を ゆっくり たがやす",
    "tags": "社会",
    "grade": "小5"
  },
  {
    "kanji": "航",
    "kanji_reading": "こう",
    "on_reading": "コウ",
    "kun_reading": NaN,
    "tts_sentence": "ふね が こうこう する",
    "tts_slow_sentence": "ふね が ゆっくり こうこう する",
    "tags": "社会",
    "grade": "小5"
  },
  {
    "kanji": "鉱",
    "kanji_reading": "こう",
    "on_reading": "コウ",
    "kun_reading": NaN,
    "tts_sentence": "こうざん を みる",
    "tts_slow_sentence": "こうざん を ゆっくり みる",
    "tags": "社会",
    "grade": "小5"
  },
  {
    "kanji": "構",
    "kanji_reading": "かまえる",
    "on_reading": "コウ",
    "kun_reading": "かまえる",
    "tts_sentence": "いえ を かまえる",
    "tts_slow_sentence": "いえ を ゆっくり かまえる",
    "tags": "生活",
    "grade": "小5"
  },
  {
    "kanji": "興",
    "kanji_reading": "おこる",
    "on_reading": "コウ",
    "kun_reading": "おこる",
    "tts_sentence": "まち が にぎわい はじめる",
    "tts_slow_sentence": "まち が ゆっくり にぎわい はじめる",
    "tags": "社会",
    "grade": "小5"
  },
  {
    "kanji": "講",
    "kanji_reading": "こう",
    "on_reading": "コウ",
    "kun_reading": NaN,
    "tts_sentence": "こうぎ を きく",
    "tts_slow_sentence": "こうぎ を ゆっくり きく",
    "tags": "学校",
    "grade": "小5"
  },
  {
    "kanji": "混",
    "kanji_reading": "まざる",
    "on_reading": "コン",
    "kun_reading": "まざる",
    "tts_sentence": "いろ が まざる",
    "tts_slow_sentence": "いろ が ゆっくり まざる",
    "tags": "図工",
    "grade": "小5"
  },
  {
    "kanji": "査",
    "kanji_reading": "しらべる",
    "on_reading": "サ",
    "kun_reading": "しらべる",
    "tts_sentence": "こと を しらべる",
    "tts_slow_sentence": "こと を ゆっくり しらべる",
    "tags": "国語",
    "grade": "小5"
  },
  {
    "kanji": "再",
    "kanji_reading": "ふたたび",
    "on_reading": "サイ",
    "kun_reading": "ふたたび",
    "tts_sentence": "ふたたび あう",
    "tts_slow_sentence": "ふたたび ゆっくり あう",
    "tags": "国語",
    "grade": "小5"
  },
  {
    "kanji": "災",
    "kanji_reading": "わざわい",
    "on_reading": "サイ",
    "kun_reading": "わざわい",
    "tts_sentence": "さいがい を ふせぐ",
    "tts_slow_sentence": "さいがい を ゆっくり ふせぐ",
    "tags": "社会",
    "grade": "小5"
  },
  {
    "kanji": "妻",
    "kanji_reading": "つま",
    "on_reading": "サイ",
    "kun_reading": "つま",
    "tts_sentence": "つま が えがお に なる",
    "tts_slow_sentence": "つま が ゆっくり えがお に なる",
    "tags": "心",
    "grade": "小5"
  },
  {
    "kanji": "採",
    "kanji_reading": "とる",
    "on_reading": "サイ",
    "kun_reading": "とる",
    "tts_sentence": "くだもの を とる",
    "tts_slow_sentence": "くだもの を ゆっくり とる",
    "tags": "生活",
    "grade": "小5"
  },
  {
    "kanji": "際",
    "kanji_reading": "きわ",
    "on_reading": "サイ",
    "kun_reading": "きわ",
    "tts_sentence": "みずぎわ を あるく",
    "tts_slow_sentence": "みずぎわ を ゆっくり あるく",
    "tags": "自然",
    "grade": "小5"
  },
  {
    "kanji": "在",
    "kanji_reading": "ある",
    "on_reading": "ザイ",
    "kun_reading": "ある",
    "tts_sentence": "いま ここ に ある",
    "tts_slow_sentence": "いま ここ に ゆっくり ある",
    "tags": "生活",
    "grade": "小5"
  },
  {
    "kanji": "材",
    "kanji_reading": "ざい",
    "on_reading": "ザイ",
    "kun_reading": NaN,
    "tts_sentence": "もくざい を つかう",
    "tts_slow_sentence": "もくざい を ゆっくり つかう",
    "tags": "図工",
    "grade": "小5"
  },
  {
    "kanji": "罪",
    "kanji_reading": "つみ",
    "on_reading": "ザイ",
    "kun_reading": "つみ",
    "tts_sentence": "つみ を つぐなう",
    "tts_slow_sentence": "つみ を ゆっくり つぐなう",
    "tags": "心",
    "grade": "小5"
  },
  {
    "kanji": "冊",
    "kanji_reading": "さつ",
    "on_reading": "サツ",
    "kun_reading": NaN,
    "tts_sentence": "ほん を なん さつ よむ",
    "tts_slow_sentence": "ほん を なん さつ も",
    "tags": "ゆっくり よむ",
    "grade": "国語"
  },
  {
    "kanji": "蚕",
    "kanji_reading": "かいこ",
    "on_reading": "サン",
    "kun_reading": "かいこ",
    "tts_sentence": "かいこ を そだてる",
    "tts_slow_sentence": "かいこ を ゆっくり そだてる",
    "tags": "社会",
    "grade": "小5"
  },
  {
    "kanji": "姿",
    "kanji_reading": "すがた",
    "on_reading": "シ",
    "kun_reading": "すがた",
    "tts_sentence": "きれい な すがた",
    "tts_slow_sentence": "きれい な すがた を ゆっくり みる",
    "tags": "心",
    "grade": "小5"
  },
  {
    "kanji": "司",
    "kanji_reading": "し",
    "on_reading": "シ",
    "kun_reading": NaN,
    "tts_sentence": "しごと を つかさどる",
    "tts_slow_sentence": "しごと を ゆっくり つかさどる",
    "tags": "社会",
    "grade": "小5"
  },
  {
    "kanji": "試",
    "kanji_reading": "ためす",
    "on_reading": "シ",
    "kun_reading": "ためす",
    "tts_sentence": "きのう を ためす",
    "tts_slow_sentence": "きのう を ゆっくり ためす",
    "tags": "理科",
    "grade": "小5"
  },
  {
    "kanji": "児",
    "kanji_reading": "じ",
    "on_reading": "ジ",
    "kun_reading": NaN,
    "tts_sentence": "ようじ を まもる",
    "tts_slow_sentence": "ようじ を ゆっくり まもる",
    "tags": "生活",
    "grade": "小5"
  },
  {
    "kanji": "治",
    "kanji_reading": "なおす",
    "on_reading": "ジ",
    "kun_reading": "なおす",
    "tts_sentence": "びょうき を なおす",
    "tts_slow_sentence": "びょうき を ゆっくり なおす",
    "tags": "生活",
    "grade": "小5"
  },
  {
    "kanji": "辞",
    "kanji_reading": "やめる",
    "on_reading": "ジ",
    "kun_reading": "やめる",
    "tts_sentence": "しごと を やめる",
    "tts_slow_sentence": "しごと を ゆっくり やめる",
    "tags": "社会",
    "grade": "小5"
  },
  {
    "kanji": "鹿",
    "kanji_reading": "しか",
    "on_reading": "ロク",
    "kun_reading": "しか",
    "tts_sentence": "しか を みる",
    "tts_slow_sentence": "しか を ゆっくり みる",
    "tags": "自然",
    "grade": "小5"
  },
  {
    "kanji": "失",
    "kanji_reading": "うしなう",
    "on_reading": "シツ",
    "kun_reading": "うしなう",
    "tts_sentence": "じかん を うしなう",
    "tts_slow_sentence": "じかん を ゆっくり うしなう",
    "tags": "国語",
    "grade": "小5"
  },
  {
    "kanji": "借",
    "kanji_reading": "かりる",
    "on_reading": "シャク",
    "kun_reading": "かりる",
    "tts_sentence": "ほん を かりる",
    "tts_slow_sentence": "ほん を ゆっくり かりる",
    "tags": "国語",
    "grade": "小5"
  },
  {
    "kanji": "種",
    "kanji_reading": "たね",
    "on_reading": "シュ",
    "kun_reading": "たね",
    "tts_sentence": "たね を まく",
    "tts_slow_sentence": "たね を ゆっくり まく",
    "tags": "自然",
    "grade": "小5"
  },
  {
    "kanji": "酒",
    "kanji_reading": "さけ",
    "on_reading": "シュ",
    "kun_reading": "さけ",
    "tts_sentence": "さけ を つくる まち",
    "tts_slow_sentence": "さけ を ゆっくり つくる まち",
    "tags": "社会",
    "grade": "小5"
  },
  {
    "kanji": "周",
    "kanji_reading": "まわり",
    "on_reading": "シュウ",
    "kun_reading": "まわり",
    "tts_sentence": "いえ の まわり を あるく",
    "tts_slow_sentence": "いえ の まわり を ゆっくり あるく",
    "tags": "生活",
    "grade": "小5"
  },
  {
    "kanji": "拾",
    "kanji_reading": "ひろう",
    "on_reading": "シュウ",
    "kun_reading": "ひろう",
    "tts_sentence": "おかね を ひろう",
    "tts_slow_sentence": "おかね を ゆっくり ひろう",
    "tags": "生活",
    "grade": "小5"
  },
  {
    "kanji": "宗",
    "kanji_reading": "しゅう",
    "on_reading": "シュウ",
    "kun_reading": NaN,
    "tts_sentence": "しゅうきょう を まなぶ",
    "tts_slow_sentence": "しゅうきょう を ゆっくり まなぶ",
    "tags": "社会",
    "grade": "小5"
  },
  {
    "kanji": "就",
    "kanji_reading": "つく",
    "on_reading": "シュウ",
    "kun_reading": "つく",
    "tts_sentence": "しごと に つく",
    "tts_slow_sentence": "しごと に ゆっくり つく",
    "tags": "社会",
    "grade": "小5"
  },
  {
    "kanji": "衆",
    "kanji_reading": "しゅう",
    "on_reading": "シュウ",
    "kun_reading": NaN,
    "tts_sentence": "しゅうごう する",
    "tts_slow_sentence": "しゅうごう を ゆっくり する",
    "tags": "学校",
    "grade": "小5"
  },
  {
    "kanji": "終",
    "kanji_reading": "おわる",
    "on_reading": "シュウ",
    "kun_reading": "おわる",
    "tts_sentence": "がっこう が おわる",
    "tts_slow_sentence": "がっこう が ゆっくり おわる",
    "tags": "学校",
    "grade": "小5"
  },
  {
    "kanji": "住",
    "kanji_reading": "すむ",
    "on_reading": "ジュウ",
    "kun_reading": "すむ",
    "tts_sentence": "まち に すむ",
    "tts_slow_sentence": "まち に ゆっくり すむ",
    "tags": "生活",
    "grade": "小5"
  },
  {
    "kanji": "従",
    "kanji_reading": "したがう",
    "on_reading": "ジュウ",
    "kun_reading": "したがう",
    "tts_sentence": "ルール に したがう",
    "tts_slow_sentence": "ルール に ゆっくり したがう",
    "tags": "学校",
    "grade": "小5"
  },
  {
    "kanji": "縦",
    "kanji_reading": "たて",
    "on_reading": "ジュウ",
    "kun_reading": "たて",
    "tts_sentence": "たて に ならべる",
    "tts_slow_sentence": "たて に ゆっくり ならべる",
    "tags": "図工",
    "grade": "小5"
  },
  {
    "kanji": "縮",
    "kanji_reading": "ちぢむ",
    "on_reading": "シュク",
    "kun_reading": "ちぢむ",
    "tts_sentence": "ふく が ちぢむ",
    "tts_slow_sentence": "ふく が ゆっくり ちぢむ",
    "tags": "生活",
    "grade": "小5"
  },
  {
    "kanji": "熟",
    "kanji_reading": "うれる",
    "on_reading": "ジュク",
    "kun_reading": "うれる",
    "tts_sentence": "くだもの が うれる",
    "tts_slow_sentence": "くだもの が ゆっくり うれる",
    "tags": "生活",
    "grade": "小5"
  },
  {
    "kanji": "純",
    "kanji_reading": "じゅん",
    "on_reading": "ジュン",
    "kun_reading": NaN,
    "tts_sentence": "じゅんすい な こころ",
    "tts_slow_sentence": "じゅんすい な こころ を ゆっくり たいせつ に する",
    "tags": "心",
    "grade": "小5"
  },
  {
    "kanji": "順",
    "kanji_reading": "じゅん",
    "on_reading": "ジュン",
    "kun_reading": NaN,
    "tts_sentence": "じゅんばん に ならぶ",
    "tts_slow_sentence": "じゅんばん に ゆっくり ならぶ",
    "tags": "学校",
    "grade": "小5"
  },
  {
    "kanji": "処",
    "kanji_reading": "ところ",
    "on_reading": "ショ",
    "kun_reading": "ところ",
    "tts_sentence": "しょり を する",
    "tts_slow_sentence": "しょり を ゆっくり する",
    "tags": "学校",
    "grade": "小5"
  },
  {
    "kanji": "署",
    "kanji_reading": "しょ",
    "on_reading": "ショ",
    "kun_reading": NaN,
    "tts_sentence": "えき の しょざいち を しる",
    "tts_slow_sentence": "えき の しょざいち を ゆっくり しる",
    "tags": "社会",
    "grade": "小5"
  },
  {
    "kanji": "諸",
    "kanji_reading": "いろいろ",
    "on_reading": "ショ",
    "kun_reading": "いろいろ",
    "tts_sentence": "しょ ぶんるい を まなぶ",
    "tts_slow_sentence": "しょ ぶんるい を ゆっくり まなぶ",
    "tags": "学校",
    "grade": "小5"
  },
  {
    "kanji": "除",
    "kanji_reading": "のぞく",
    "on_reading": "ジョ",
    "kun_reading": "のぞく",
    "tts_sentence": "あぶない もの を のぞく",
    "tts_slow_sentence": "あぶない もの を ゆっくり のぞく",
    "tags": "生活",
    "grade": "小5"
  },
  {
    "kanji": "将",
    "kanji_reading": "しょう",
    "on_reading": "ショウ",
    "kun_reading": NaN,
    "tts_sentence": "しょうらい を かんがえる",
    "tts_slow_sentence": "しょうらい を ゆっくり かんがえる",
    "tags": "心",
    "grade": "小5"
  },
  {
    "kanji": "傷",
    "kanji_reading": "きず",
    "on_reading": "ショウ",
    "kun_reading": "きず",
    "tts_sentence": "きず が なおる",
    "tts_slow_sentence": "きず が ゆっくり なおる",
    "tags": "生活",
    "grade": "小5"
  },
  {
    "kanji": "障",
    "kanji_reading": "さわる",
    "on_reading": "ショウ",
    "kun_reading": "さわる",
    "tts_sentence": "しょうがい を こえる",
    "tts_slow_sentence": "しょうがい を ゆっくり こえる",
    "tags": "心",
    "grade": "小5"
  },
  {
    "kanji": "城",
    "kanji_reading": "しろ",
    "on_reading": "ジョウ",
    "kun_reading": "しろ",
    "tts_sentence": "しろ に のぼる",
    "tts_slow_sentence": "しろ に ゆっくり のぼる",
    "tags": "社会",
    "grade": "小5"
  },
  {
    "kanji": "蒸",
    "kanji_reading": "むす",
    "on_reading": "ジョウ",
    "kun_reading": "むす",
    "tts_sentence": "やさい を むす",
    "tts_slow_sentence": "やさい を ゆっくり むす",
    "tags": "生活",
    "grade": "小5"
  },
  {
    "kanji": "針",
    "kanji_reading": "はり",
    "on_reading": "シン",
    "kun_reading": "はり",
    "tts_sentence": "はり を つかう",
    "tts_slow_sentence": "はり を ゆっくり つかう",
    "tags": "図工",
    "grade": "小5"
  },
  {
    "kanji": "仁",
    "kanji_reading": "じん",
    "on_reading": "ジン",
    "kun_reading": NaN,
    "tts_sentence": "じんあい を たいせつ に する",
    "tts_slow_sentence": "じんあい を ゆっくり たいせつ に する",
    "tags": "心",
    "grade": "小5"
  },
  {
    "kanji": "垂",
    "kanji_reading": "たれる",
    "on_reading": "スイ",
    "kun_reading": "たれる",
    "tts_sentence": "みず が したたる",
    "tts_slow_sentence": "みず が ゆっくり したたる",
    "tags": "自然",
    "grade": "小5"
  },
  {
    "kanji": "推",
    "kanji_reading": "おす",
    "on_reading": "スイ",
    "kun_reading": "おす",
    "tts_sentence": "ボタン を おす",
    "tts_slow_sentence": "ボタン を ゆっくり おす",
    "tags": "生活",
    "grade": "小5"
  },
  {
    "kanji": "寸",
    "kanji_reading": "すん",
    "on_reading": "スン",
    "kun_reading": NaN,
    "tts_sentence": "すんぽう を はかる",
    "tts_slow_sentence": "すんぽう を ゆっくり はかる",
    "tags": "算数",
    "grade": "小5"
  },
  {
    "kanji": "盛",
    "kanji_reading": "さかる",
    "on_reading": "セイ",
    "kun_reading": "さかる",
    "tts_sentence": "はな が さかり に さく",
    "tts_slow_sentence": "はな が ゆっくり さかり に さく",
    "tags": "自然",
    "grade": "小5"
  },
  {
    "kanji": "聖",
    "kanji_reading": "せい",
    "on_reading": "セイ",
    "kun_reading": NaN,
    "tts_sentence": "せいなる ばしょ",
    "tts_slow_sentence": "せいなる ばしょ を ゆっくり みる",
    "tags": "社会",
    "grade": "小5"
  },
  {
    "kanji": "誠",
    "kanji_reading": "まこと",
    "on_reading": "セイ",
    "kun_reading": "まこと",
    "tts_sentence": "まこと を つくす",
    "tts_slow_sentence": "まこと を ゆっくり つくす",
    "tags": "心",
    "grade": "小5"
  },
  {
    "kanji": "宣",
    "kanji_reading": "のべる",
    "on_reading": "セン",
    "kun_reading": "のべる",
    "tts_sentence": "いけん を のべる",
    "tts_slow_sentence": "いけん を ゆっくり のべる",
    "tags": "国語",
    "grade": "小5"
  },
  {
    "kanji": "専",
    "kanji_reading": "もっぱら",
    "on_reading": "セン",
    "kun_reading": "もっぱら",
    "tts_sentence": "せんもん を まなぶ",
    "tts_slow_sentence": "せんもん を ゆっくり まなぶ",
    "tags": "学校",
    "grade": "小5"
  },
  {
    "kanji": "泉",
    "kanji_reading": "いずみ",
    "on_reading": "セン",
    "kun_reading": "いずみ",
    "tts_sentence": "いずみ の みず を のむ",
    "tts_slow_sentence": "いずみ の みず を ゆっくり のむ",
    "tags": "自然",
    "grade": "小5"
  },
  {
    "kanji": "洗",
    "kanji_reading": "あらう",
    "on_reading": "セン",
    "kun_reading": "あらう",
    "tts_sentence": "て を あらう",
    "tts_slow_sentence": "て を ゆっくり あらう",
    "tags": "生活",
    "grade": "小5"
  },
  {
    "kanji": "染",
    "kanji_reading": "そめる",
    "on_reading": "セン",
    "kun_reading": "そめる",
    "tts_sentence": "いろ を そめる",
    "tts_slow_sentence": "いろ を ゆっくり そめる",
    "tags": "図工",
    "grade": "小5"
  },
  {
    "kanji": "善",
    "kanji_reading": "よい",
    "on_reading": "ゼン",
    "kun_reading": "よい",
    "tts_sentence": "よい こと を する",
    "tts_slow_sentence": "よい こと を ゆっくり する",
    "tags": "心",
    "grade": "小5"
  },
  {
    "kanji": "奏",
    "kanji_reading": "かなでる",
    "on_reading": "ソウ",
    "kun_reading": "かなでる",
    "tts_sentence": "ピアノ を かなでる",
    "tts_slow_sentence": "ピアノ を ゆっくり かなでる",
    "tags": "音楽",
    "grade": "小5"
  },
  {
    "kanji": "窓",
    "kanji_reading": "まど",
    "on_reading": "ソウ",
    "kun_reading": "まど",
    "tts_sentence": "まど を あける",
    "tts_slow_sentence": "まど を ゆっくり あける",
    "tags": "生活",
    "grade": "小5"
  },
  {
    "kanji": "創",
    "kanji_reading": "つくる",
    "on_reading": "ソウ",
    "kun_reading": "つくる",
    "tts_sentence": "もの を つくる",
    "tts_slow_sentence": "もの を ゆっくり つくる",
    "tags": "図工",
    "grade": "小5"
  },
  {
    "kanji": "装",
    "kanji_reading": "よそおう",
    "on_reading": "ソウ",
    "kun_reading": "よそおう",
    "tts_sentence": "ふく を よそおう",
    "tts_slow_sentence": "ふく を ゆっくり よそおう",
    "tags": "生活",
    "grade": "小5"
  },
  {
    "kanji": "層",
    "kanji_reading": "そう",
    "on_reading": "ソウ",
    "kun_reading": NaN,
    "tts_sentence": "つち の そう を しらべる",
    "tts_slow_sentence": "つち の そう を ゆっくり しらべる",
    "tags": "理科",
    "grade": "小5"
  },
  {
    "kanji": "操",
    "kanji_reading": "あやつる",
    "on_reading": "ソウ",
    "kun_reading": "あやつる",
    "tts_sentence": "ロープ を あやつる",
    "tts_slow_sentence": "ロープ を ゆっくり あやつる",
    "tags": "運動",
    "grade": "小5"
  },
  {
    "kanji": "像",
    "kanji_reading": "ぞう",
    "on_reading": "ゾウ",
    "kun_reading": NaN,
    "tts_sentence": "ぞう を みる",
    "tts_slow_sentence": "ぞう を ゆっくり みる",
    "tags": "図工",
    "grade": "小5"
  },
  {
    "kanji": "造",
    "kanji_reading": "つくる",
    "on_reading": "ゾウ",
    "kun_reading": "つくる",
    "tts_sentence": "いえ を つくる",
    "tts_slow_sentence": "いえ を ゆっくり つくる",
    "tags": "図工",
    "grade": "小5"
  },
  {
    "kanji": "側",
    "kanji_reading": "そば",
    "on_reading": "ソク",
    "kun_reading": "そば",
    "tts_sentence": "そば に すわる",
    "tts_slow_sentence": "そば に ゆっくり すわる",
    "tags": "生活",
    "grade": "小5"
  },
  {
    "kanji": "測",
    "kanji_reading": "はかる",
    "on_reading": "ソク",
    "kun_reading": "はかる",
    "tts_sentence": "みず の おんど を はかる",
    "tts_slow_sentence": "みず の おんど を ゆっくり はかる",
    "tags": "理科",
    "grade": "小5"
  },
  {
    "kanji": "属",
    "kanji_reading": "ぞく",
    "on_reading": "ゾク",
    "kun_reading": NaN,
    "tts_sentence": "なかま に ぞくする",
    "tts_slow_sentence": "なかま に ゆっくり ぞくする",
    "tags": "学校",
    "grade": "小5"
  },
  {
    "kanji": "率",
    "kanji_reading": "りつ",
    "on_reading": "リツ",
    "kun_reading": NaN,
    "tts_sentence": "せいこう りつ を しらべる",
    "tts_slow_sentence": "せいこう りつ を ゆっくり しらべる",
    "tags": "算数",
    "grade": "小5"
  },
  {
    "kanji": "損",
    "kanji_reading": "そこなう",
    "on_reading": "ソン",
    "kun_reading": "そこなう",
    "tts_sentence": "ぶんしょう を そこなう",
    "tts_slow_sentence": "ぶんしょう を ゆっくり そこなう",
    "tags": "国語",
    "grade": "小5"
  },
  {
    "kanji": "退",
    "kanji_reading": "しりぞく",
    "on_reading": "タイ",
    "kun_reading": "しりぞく",
    "tts_sentence": "じょじょ に しりぞく",
    "tts_slow_sentence": "じょじょ に ゆっくり しりぞく",
    "tags": "社会",
    "grade": "小5"
  },
  {
    "kanji": "貸",
    "kanji_reading": "かす",
    "on_reading": "タイ",
    "kun_reading": "かす",
    "tts_sentence": "ほん を かす",
    "tts_slow_sentence": "ほん を ゆっくり かす",
    "tags": "生活",
    "grade": "小5"
  },
  {
    "kanji": "態",
    "kanji_reading": "ようす",
    "on_reading": "タイ",
    "kun_reading": "ようす",
    "tts_sentence": "どうぶつ の たい を しらべる",
    "tts_slow_sentence": "どうぶつ の たい を ゆっくり しらべる",
    "tags": "理科",
    "grade": "小5"
  },
  {
    "kanji": "団",
    "kanji_reading": "だん",
    "on_reading": "ダン",
    "kun_reading": NaN,
    "tts_sentence": "だんたい を くむ",
    "tts_slow_sentence": "だんたい を ゆっくり くむ",
    "tags": "社会",
    "grade": "小5"
  },
  {
    "kanji": "断",
    "kanji_reading": "ことわる",
    "on_reading": "ダン",
    "kun_reading": "ことわる",
    "tts_sentence": "ようじ を ことわる",
    "tts_slow_sentence": "ようじ を ゆっくり ことわる",
    "tags": "生活",
    "grade": "小5"
  },
  {
    "kanji": "築",
    "kanji_reading": "きずく",
    "on_reading": "チク",
    "kun_reading": "きずく",
    "tts_sentence": "いえ を きずく",
    "tts_slow_sentence": "いえ を ゆっくり きずく",
    "tags": "図工",
    "grade": "小5"
  },
  {
    "kanji": "張",
    "kanji_reading": "はる",
    "on_reading": "チョウ",
    "kun_reading": "はる",
    "tts_sentence": "かみ を はる",
    "tts_slow_sentence": "かみ を ゆっくり はる",
    "tags": "図工",
    "grade": "小5"
  },
  {
    "kanji": "帳",
    "kanji_reading": "ちょう",
    "on_reading": "チョウ",
    "kun_reading": NaN,
    "tts_sentence": "ちょうめい を する",
    "tts_slow_sentence": "ちょうめい を ゆっくり する",
    "tags": "学校",
    "grade": "小5"
  },
  {
    "kanji": "徴",
    "kanji_reading": "しるし",
    "on_reading": "チョウ",
    "kun_reading": "しるし",
    "tts_sentence": "しるし を みる",
    "tts_slow_sentence": "しるし を ゆっくり みる",
    "tags": "社会",
    "grade": "小5"
  },
  {
    "kanji": "懲",
    "kanji_reading": "こらす",
    "on_reading": "チョウ",
    "kun_reading": "こらす",
    "tts_sentence": "あやまち を こらす",
    "tts_slow_sentence": "あやまち を ゆっくり こらす",
    "tags": "心",
    "grade": "小5"
  },
  {
    "kanji": "潮",
    "kanji_reading": "しお",
    "on_reading": "チョウ",
    "kun_reading": "しお",
    "tts_sentence": "しお が みちて くる",
    "tts_slow_sentence": "しお が ゆっくり みちて くる",
    "tags": "自然",
    "grade": "小5"
  },
  {
    "kanji": "賃",
    "kanji_reading": "ちん",
    "on_reading": "チン",
    "kun_reading": NaN,
    "tts_sentence": "ちんぎん を はらう",
    "tts_slow_sentence": "ちんぎん を ゆっくり はらう",
    "tags": "社会",
    "grade": "小5"
  },
  {
    "kanji": "痛",
    "kanji_reading": "いたい",
    "on_reading": "ツウ",
    "kun_reading": "いたい",
    "tts_sentence": "あし が いたい",
    "tts_slow_sentence": "あし が ゆっくり いたい",
    "tags": "体",
    "grade": "小5"
  },
  {
    "kanji": "異",
    "kanji_reading": "こと",
    "on_reading": "イ",
    "kun_reading": "こと-なる",
    "tts_sentence": "こと なる いけん",
    "tts_slow_sentence": "こと なる いけん",
    "tags": "学習",
    "grade": "小6"
  },
  {
    "kanji": "域",
    "kanji_reading": "いき",
    "on_reading": "イキ",
    "kun_reading": NaN,
    "tts_sentence": "きんじょ の いき",
    "tts_slow_sentence": "きんじょ の いき",
    "tags": "地理",
    "grade": "小6"
  },
  {
    "kanji": "因",
    "kanji_reading": "いん",
    "on_reading": "イン",
    "kun_reading": "よ-る",
    "tts_sentence": "しっぱい の いん",
    "tts_slow_sentence": "しっぱい の いん",
    "tags": "学習",
    "grade": "小6"
  },
  {
    "kanji": "永",
    "kanji_reading": "えい",
    "on_reading": "エイ",
    "kun_reading": "なが-い",
    "tts_sentence": "えいきゅう に つづく",
    "tts_slow_sentence": "えいきゅう に つづく",
    "tags": "時間",
    "grade": "小6"
  },
  {
    "kanji": "衛",
    "kanji_reading": "えい",
    "on_reading": "エイ",
    "kun_reading": NaN,
    "tts_sentence": "まち の えいせい",
    "tts_slow_sentence": "まち の えいせい",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "益",
    "kanji_reading": "えき",
    "on_reading": "エキ",
    "kun_reading": NaN,
    "tts_sentence": "みんな の えき に なる",
    "tts_slow_sentence": "みんな の えき に なる",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "液",
    "kanji_reading": "えき",
    "on_reading": "エキ",
    "kun_reading": NaN,
    "tts_sentence": "えきたい を そそぐ",
    "tts_slow_sentence": "えきたい を そそぐ",
    "tags": "理科",
    "grade": "小6"
  },
  {
    "kanji": "演",
    "kanji_reading": "えん",
    "on_reading": "エン",
    "kun_reading": NaN,
    "tts_sentence": "えんそう を する",
    "tts_slow_sentence": "えんそう を する",
    "tags": "音楽",
    "grade": "小6"
  },
  {
    "kanji": "応",
    "kanji_reading": "おう",
    "on_reading": "オウ",
    "kun_reading": "こた-える",
    "tts_sentence": "こたえる ひつよう が ある",
    "tts_slow_sentence": "こたえる ひつよう が ある",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "往",
    "kanji_reading": "おう",
    "on_reading": "オウ",
    "kun_reading": "い-く",
    "tts_sentence": "バス が おうふく する",
    "tts_slow_sentence": "バス が おうふく する",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "桜",
    "kanji_reading": "さくら",
    "on_reading": "オウ",
    "kun_reading": "さくら",
    "tts_sentence": "さくら が さく",
    "tts_slow_sentence": "さくら が さく",
    "tags": "自然",
    "grade": "小6"
  },
  {
    "kanji": "温",
    "kanji_reading": "おん",
    "on_reading": "オン",
    "kun_reading": "あたた-かい",
    "tts_sentence": "おんど を はかる",
    "tts_slow_sentence": "おんど を はかる",
    "tags": "理科",
    "grade": "小6"
  },
  {
    "kanji": "仮",
    "kanji_reading": "かり",
    "on_reading": "カ",
    "kun_reading": "か-り",
    "tts_sentence": "かり に よんでみる",
    "tts_slow_sentence": "かり に よんでみる",
    "tags": "学習",
    "grade": "小6"
  },
  {
    "kanji": "価",
    "kanji_reading": "あたい",
    "on_reading": "カ",
    "kun_reading": "あたい",
    "tts_sentence": "ねだん の かち",
    "tts_slow_sentence": "ねだん の かち",
    "tags": "社会",
    "grade": "小6"
  },
  {
    "kanji": "河",
    "kanji_reading": "かわ",
    "on_reading": "カ",
    "kun_reading": "かわ",
    "tts_sentence": "かわ の みず",
    "tts_slow_sentence": "かわ の みず",
    "tags": "自然",
    "grade": "小6"
  },
  {
    "kanji": "可",
    "kanji_reading": "か",
    "on_reading": "カ",
    "kun_reading": NaN,
    "tts_sentence": "かのう に なる",
    "tts_slow_sentence": "かのう に なる",
    "tags": "学習",
    "grade": "小6"
  },
  {
    "kanji": "過",
    "kanji_reading": "す-ぎる",
    "on_reading": "カ",
    "kun_reading": "す-ぎる",
    "tts_sentence": "じかん が すぎる",
    "tts_slow_sentence": "じかん が すぎる",
    "tags": "時間",
    "grade": "小6"
  },
  {
    "kanji": "解",
    "kanji_reading": "と-く",
    "on_reading": "カイ",
    "kun_reading": "と-く",
    "tts_sentence": "もんだい を とく",
    "tts_slow_sentence": "もんだい を とく",
    "tags": "学習",
    "grade": "小6"
  },
  {
    "kanji": "圧",
    "kanji_reading": "あつ",
    "on_reading": "アツ",
    "kun_reading": NaN,
    "tts_sentence": "あつりょく を かける",
    "tts_slow_sentence": "あつりょく を かける",
    "tags": "理科",
    "grade": "小6"
  },
  {
    "kanji": "囲",
    "kanji_reading": "かこ-む",
    "on_reading": "イ",
    "kun_reading": "かこ-む",
    "tts_sentence": "みんな で いけ を かこむ",
    "tts_slow_sentence": "みんな で いけ を かこむ",
    "tags": "自然",
    "grade": "小6"
  },
  {
    "kanji": "移",
    "kanji_reading": "うつ-る",
    "on_reading": "イ",
    "kun_reading": "うつ-す",
    "tts_sentence": "ばしょ を うつす",
    "tts_slow_sentence": "ばしょ を うつす",
    "tags": "学習",
    "grade": "小6"
  },
  {
    "kanji": "因",
    "kanji_reading": "いん",
    "on_reading": "イン",
    "kun_reading": "よ-る",
    "tts_sentence": "けが の いん",
    "tts_slow_sentence": "けが の いん",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "営",
    "kanji_reading": "いとな-む",
    "on_reading": "エイ",
    "kun_reading": "いとな-む",
    "tts_sentence": "しごと を いとなむ",
    "tts_slow_sentence": "しごと を いとなむ",
    "tags": "社会",
    "grade": "小6"
  },
  {
    "kanji": "潔",
    "kanji_reading": "きよ-い",
    "on_reading": "ケツ",
    "kun_reading": "いさぎよ-い",
    "tts_sentence": "て を きよめる",
    "tts_slow_sentence": "て を きよめる",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "件",
    "kanji_reading": "けん",
    "on_reading": "ケン",
    "kun_reading": "くだん",
    "tts_sentence": "その けん に ついて はなす",
    "tts_slow_sentence": "その けん に ついて はなす",
    "tags": "学習",
    "grade": "小6"
  },
  {
    "kanji": "険",
    "kanji_reading": "けわ-しい",
    "on_reading": "ケン",
    "kun_reading": "けわ-しい",
    "tts_sentence": "けわしい やまみち",
    "tts_slow_sentence": "けわしい やまみち",
    "tags": "自然",
    "grade": "小6"
  },
  {
    "kanji": "検",
    "kanji_reading": "しら-べる",
    "on_reading": "ケン",
    "kun_reading": "しら-べる",
    "tts_sentence": "しらべて まとめる",
    "tts_slow_sentence": "しらべて まとめる",
    "tags": "学習",
    "grade": "小6"
  },
  {
    "kanji": "限",
    "kanji_reading": "かぎ-る",
    "on_reading": "ゲン",
    "kun_reading": "かぎ-る",
    "tts_sentence": "りょう が かぎられる",
    "tts_slow_sentence": "りょう が かぎられる",
    "tags": "社会",
    "grade": "小6"
  },
  {
    "kanji": "現",
    "kanji_reading": "あらわ-れる",
    "on_reading": "ゲン",
    "kun_reading": "あらわ-す",
    "tts_sentence": "こたえ が あらわれる",
    "tts_slow_sentence": "こたえ が あらわれる",
    "tags": "学習",
    "grade": "小6"
  },
  {
    "kanji": "減",
    "kanji_reading": "へ-る",
    "on_reading": "ゲン",
    "kun_reading": "へ-らす",
    "tts_sentence": "みず が へる",
    "tts_slow_sentence": "みず が へる",
    "tags": "理科",
    "grade": "小6"
  },
  {
    "kanji": "故",
    "kanji_reading": "ゆえ",
    "on_reading": "コ",
    "kun_reading": "ゆえ",
    "tts_sentence": "こしょう の げんいん",
    "tts_slow_sentence": "こしょう の げんいん",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "個",
    "kanji_reading": "こ",
    "on_reading": "コ",
    "kun_reading": NaN,
    "tts_sentence": "いっこ ふえる",
    "tts_slow_sentence": "いっこ ふえる",
    "tags": "数",
    "grade": "小6"
  },
  {
    "kanji": "護",
    "kanji_reading": "まも-る",
    "on_reading": "ゴ",
    "kun_reading": "まも-る",
    "tts_sentence": "いのち を まもる",
    "tts_slow_sentence": "いのち を まもる",
    "tags": "社会",
    "grade": "小6"
  },
  {
    "kanji": "効",
    "kanji_reading": "き-く",
    "on_reading": "コウ",
    "kun_reading": "き-く",
    "tts_sentence": "くすり が きく",
    "tts_slow_sentence": "くすり が きく",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "厚",
    "kanji_reading": "あつ-い",
    "on_reading": "コウ",
    "kun_reading": "あつ-い",
    "tts_sentence": "あつい ほん",
    "tts_slow_sentence": "あつい ほん",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "耕",
    "kanji_reading": "たがや-す",
    "on_reading": "コウ",
    "kun_reading": "たがや-す",
    "tts_sentence": "はたけ を たがやす",
    "tts_slow_sentence": "はたけ を たがやす",
    "tags": "社会",
    "grade": "小6"
  },
  {
    "kanji": "航",
    "kanji_reading": "こう",
    "on_reading": "コウ",
    "kun_reading": NaN,
    "tts_sentence": "ふね が こうかい する",
    "tts_slow_sentence": "ふね が こうかい する",
    "tags": "社会",
    "grade": "小6"
  },
  {
    "kanji": "鉱",
    "kanji_reading": "こう",
    "on_reading": "コウ",
    "kun_reading": NaN,
    "tts_sentence": "こうざん を けんがく する",
    "tts_slow_sentence": "こうざん を けんがく する",
    "tags": "社会",
    "grade": "小6"
  },
  {
    "kanji": "構",
    "kanji_reading": "かま-える",
    "on_reading": "コウ",
    "kun_reading": "かま-える",
    "tts_sentence": "いえ を かまえる",
    "tts_slow_sentence": "いえ を かまえる",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "興",
    "kanji_reading": "おこ-る",
    "on_reading": "コウ",
    "kun_reading": "おこ-す",
    "tts_sentence": "まち が おこる",
    "tts_slow_sentence": "まち が おこる",
    "tags": "社会",
    "grade": "小6"
  },
  {
    "kanji": "講",
    "kanji_reading": "こう",
    "on_reading": "コウ",
    "kun_reading": NaN,
    "tts_sentence": "こうぎ を きく",
    "tts_slow_sentence": "こうぎ を きく",
    "tags": "学習",
    "grade": "小6"
  },
  {
    "kanji": "混",
    "kanji_reading": "ま-じる",
    "on_reading": "コン",
    "kun_reading": "ま-ぜる",
    "tts_sentence": "みず と すな が まじる",
    "tts_slow_sentence": "みず と すな が まじる",
    "tags": "理科",
    "grade": "小6"
  },
  {
    "kanji": "査",
    "kanji_reading": "しら-べる",
    "on_reading": "サ",
    "kun_reading": "しら-べる",
    "tts_sentence": "じょうけん を しらべる",
    "tts_slow_sentence": "じょうけん を しらべる",
    "tags": "学習",
    "grade": "小6"
  },
  {
    "kanji": "再",
    "kanji_reading": "ふたた-び",
    "on_reading": "サイ",
    "kun_reading": "ふたた-び",
    "tts_sentence": "ふたたび あう",
    "tts_slow_sentence": "ふたたび あう",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "災",
    "kanji_reading": "わざわ-い",
    "on_reading": "サイ",
    "kun_reading": "わざわ-い",
    "tts_sentence": "さいがい に そなえる",
    "tts_slow_sentence": "さいがい に そなえる",
    "tags": "社会",
    "grade": "小6"
  },
  {
    "kanji": "妻",
    "kanji_reading": "つま",
    "on_reading": "サイ",
    "kun_reading": "つま",
    "tts_sentence": "つま が しごと を する",
    "tts_slow_sentence": "つま が しごと を する",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "採",
    "kanji_reading": "と-る",
    "on_reading": "サイ",
    "kun_reading": "と-る",
    "tts_sentence": "くだもの を とる",
    "tts_slow_sentence": "くだもの を とる",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "際",
    "kanji_reading": "きわ",
    "on_reading": "サイ",
    "kun_reading": "きわ",
    "tts_sentence": "きわ を みきわめる",
    "tts_slow_sentence": "きわ を みきわめる",
    "tags": "学習",
    "grade": "小6"
  },
  {
    "kanji": "在",
    "kanji_reading": "あ-る",
    "on_reading": "ザイ",
    "kun_reading": "あ-る",
    "tts_sentence": "にほん に ざいじゅう する",
    "tts_slow_sentence": "にほん に ざいじゅう する",
    "tags": "社会",
    "grade": "小6"
  },
  {
    "kanji": "罪",
    "kanji_reading": "つみ",
    "on_reading": "ザイ",
    "kun_reading": "つみ",
    "tts_sentence": "つみ を ゆるす",
    "tts_slow_sentence": "つみ を ゆるす",
    "tags": "道徳",
    "grade": "小6"
  },
  {
    "kanji": "財",
    "kanji_reading": "たから",
    "on_reading": "ザイ",
    "kun_reading": "たから",
    "tts_sentence": "ざいさん を まもる",
    "tts_slow_sentence": "ざいさん を まもる",
    "tags": "社会",
    "grade": "小6"
  },
  {
    "kanji": "昨",
    "kanji_reading": "さく",
    "on_reading": "サク",
    "kun_reading": NaN,
    "tts_sentence": "さくや の てんき",
    "tts_slow_sentence": "さくや の てんき",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "冊",
    "kanji_reading": "さつ",
    "on_reading": "サツ",
    "kun_reading": NaN,
    "tts_sentence": "いっさつ の ほん",
    "tts_slow_sentence": "いっさつ の ほん",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "参",
    "kanji_reading": "まい-る",
    "on_reading": "サン",
    "kun_reading": "まい-る",
    "tts_sentence": "じんじゃ に まいる",
    "tts_slow_sentence": "じんじゃ に まいる",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "散",
    "kanji_reading": "ち-る",
    "on_reading": "サン",
    "kun_reading": "ち-らす",
    "tts_sentence": "はな が ちる",
    "tts_slow_sentence": "はな が ちる",
    "tags": "自然",
    "grade": "小6"
  },
  {
    "kanji": "算",
    "kanji_reading": "さん",
    "on_reading": "サン",
    "kun_reading": NaN,
    "tts_sentence": "さんすう を する",
    "tts_slow_sentence": "さんすう を する",
    "tags": "学習",
    "grade": "小6"
  },
  {
    "kanji": "酸",
    "kanji_reading": "す-い",
    "on_reading": "サン",
    "kun_reading": "す-い",
    "tts_sentence": "すっぱい ジュース",
    "tts_slow_sentence": "すっぱい ジュース",
    "tags": "理科",
    "grade": "小6"
  },
  {
    "kanji": "支",
    "kanji_reading": "ささ-える",
    "on_reading": "シ",
    "kun_reading": "ささ-える",
    "tts_sentence": "き を ささえる",
    "tts_slow_sentence": "き を ささえる",
    "tags": "自然",
    "grade": "小6"
  },
  {
    "kanji": "志",
    "kanji_reading": "こころざし",
    "on_reading": "シ",
    "kun_reading": "こころざ-す",
    "tts_sentence": "し を つらぬく",
    "tts_slow_sentence": "し を つらぬく",
    "tags": "道徳",
    "grade": "小6"
  },
  {
    "kanji": "枝",
    "kanji_reading": "えだ",
    "on_reading": "シ",
    "kun_reading": "えだ",
    "tts_sentence": "き の えだ が ゆれる",
    "tts_slow_sentence": "き の えだ が ゆれる",
    "tags": "自然",
    "grade": "小6"
  },
  {
    "kanji": "師",
    "kanji_reading": "し",
    "on_reading": "シ",
    "kun_reading": NaN,
    "tts_sentence": "せんせい は し です",
    "tts_slow_sentence": "せんせい は し です",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "資",
    "kanji_reading": "し",
    "on_reading": "シ",
    "kun_reading": NaN,
    "tts_sentence": "しげん を たいせつ に する",
    "tts_slow_sentence": "しげん を たいせつ に する",
    "tags": "社会",
    "grade": "小6"
  },
  {
    "kanji": "飼",
    "kanji_reading": "か-う",
    "on_reading": "シ",
    "kun_reading": "か-う",
    "tts_sentence": "いぬ を かう",
    "tts_slow_sentence": "いぬ を かう",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "示",
    "kanji_reading": "しめ-す",
    "on_reading": "ジ",
    "kun_reading": "しめ-す",
    "tts_sentence": "よこく を しめす",
    "tts_slow_sentence": "よこく を しめす",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "似",
    "kanji_reading": "に-る",
    "on_reading": "ジ",
    "kun_reading": "に-る",
    "tts_sentence": "え が にている",
    "tts_slow_sentence": "え が にている",
    "tags": "学習",
    "grade": "小6"
  },
  {
    "kanji": "識",
    "kanji_reading": "し-る",
    "on_reading": "シキ",
    "kun_reading": "し-る",
    "tts_sentence": "もじ を しきべつ する",
    "tts_slow_sentence": "もじ を しきべつ する",
    "tags": "学習",
    "grade": "小6"
  },
  {
    "kanji": "質",
    "kanji_reading": "しつ",
    "on_reading": "シツ",
    "kun_reading": NaN,
    "tts_sentence": "しつもん を する",
    "tts_slow_sentence": "しつもん を する",
    "tags": "学習",
    "grade": "小6"
  },
  {
    "kanji": "舎",
    "kanji_reading": "しゃ",
    "on_reading": "シャ",
    "kun_reading": NaN,
    "tts_sentence": "きゅうしょくしゃ",
    "tts_slow_sentence": "きゅうしょく しゃ",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "謝",
    "kanji_reading": "あやま-る",
    "on_reading": "シャ",
    "kun_reading": "あやま-る",
    "tts_sentence": "まちがい を あやまる",
    "tts_slow_sentence": "まちがい を あやまる",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "授",
    "kanji_reading": "さず-ける",
    "on_reading": "ジュ",
    "kun_reading": "さず-かる",
    "tts_sentence": "せんせい が さずける",
    "tts_slow_sentence": "せんせい が さずける",
    "tags": "学習",
    "grade": "小6"
  },
  {
    "kanji": "修",
    "kanji_reading": "おさ-める",
    "on_reading": "シュウ",
    "kun_reading": "おさ-まる",
    "tts_sentence": "ぎょうぎ を おさめる",
    "tts_slow_sentence": "ぎょうぎ を おさめる",
    "tags": "道徳",
    "grade": "小6"
  },
  {
    "kanji": "述",
    "kanji_reading": "の-べる",
    "on_reading": "ジュツ",
    "kun_reading": "の-べる",
    "tts_sentence": "いけん を のべる",
    "tts_slow_sentence": "いけん を のべる",
    "tags": "国語",
    "grade": "小6"
  },
  {
    "kanji": "術",
    "kanji_reading": "わざ",
    "on_reading": "ジュツ",
    "kun_reading": "わざ",
    "tts_sentence": "げいじゅつ を まなぶ",
    "tts_slow_sentence": "げいじゅつ を まなぶ",
    "tags": "学習",
    "grade": "小6"
  },
  {
    "kanji": "準",
    "kanji_reading": "じゅん",
    "on_reading": "ジュン",
    "kun_reading": NaN,
    "tts_sentence": "じゅんび を する",
    "tts_slow_sentence": "じゅんび を する",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "序",
    "kanji_reading": "つい-で",
    "on_reading": "ジョ",
    "kun_reading": NaN,
    "tts_sentence": "じょしょ を よむ",
    "tts_slow_sentence": "じょしょ を よむ",
    "tags": "国語",
    "grade": "小6"
  },
  {
    "kanji": "除",
    "kanji_reading": "のぞ-く",
    "on_reading": "ジョ",
    "kun_reading": "のぞ-く",
    "tts_sentence": "あぶない もの を のぞく",
    "tts_slow_sentence": "あぶない もの を のぞく",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "将",
    "kanji_reading": "しょう",
    "on_reading": "ショウ",
    "kun_reading": NaN,
    "tts_sentence": "しょうらい の ゆめ",
    "tts_slow_sentence": "しょうらい の ゆめ",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "傷",
    "kanji_reading": "きず",
    "on_reading": "ショウ",
    "kun_reading": "きず",
    "tts_sentence": "あし に きず が できる",
    "tts_slow_sentence": "あし に きず が できる",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "障",
    "kanji_reading": "さわ-る",
    "on_reading": "ショウ",
    "kun_reading": "さわ-る",
    "tts_sentence": "さわって は いけない",
    "tts_slow_sentence": "さわって は いけない",
    "tags": "道徳",
    "grade": "小6"
  },
  {
    "kanji": "城",
    "kanji_reading": "しろ",
    "on_reading": "ジョウ",
    "kun_reading": "しろ",
    "tts_sentence": "おしろ を みる",
    "tts_slow_sentence": "おしろ を みる",
    "tags": "社会",
    "grade": "小6"
  },
  {
    "kanji": "蒸",
    "kanji_reading": "む-す",
    "on_reading": "ジョウ",
    "kun_reading": "む-す",
    "tts_sentence": "ごはん を むす",
    "tts_slow_sentence": "ごはん を むす",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "針",
    "kanji_reading": "はり",
    "on_reading": "シン",
    "kun_reading": "はり",
    "tts_sentence": "はり で ぬう",
    "tts_slow_sentence": "はり で ぬう",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "仁",
    "kanji_reading": "じん",
    "on_reading": "ジン",
    "kun_reading": NaN,
    "tts_sentence": "じんじょう な 行い",
    "tts_slow_sentence": "じんじょう な 行い",
    "tags": "道徳",
    "grade": "小6"
  },
  {
    "kanji": "垂",
    "kanji_reading": "た-れる",
    "on_reading": "スイ",
    "kun_reading": "た-らす",
    "tts_sentence": "みず が たれる",
    "tts_slow_sentence": "みず が たれる",
    "tags": "理科",
    "grade": "小6"
  },
  {
    "kanji": "推",
    "kanji_reading": "お-す",
    "on_reading": "スイ",
    "kun_reading": "お-す",
    "tts_sentence": "いけん を おす",
    "tts_slow_sentence": "いけん を おす",
    "tags": "学習",
    "grade": "小6"
  },
  {
    "kanji": "寸",
    "kanji_reading": "すん",
    "on_reading": "スン",
    "kun_reading": NaN,
    "tts_sentence": "すんぽう を はかる",
    "tts_slow_sentence": "すんぽう を はかる",
    "tags": "学習",
    "grade": "小6"
  },
  {
    "kanji": "盛",
    "kanji_reading": "さか-る",
    "on_reading": "セイ",
    "kun_reading": "も-る",
    "tts_sentence": "はな が さかる",
    "tts_slow_sentence": "はな が さかる",
    "tags": "自然",
    "grade": "小6"
  },
  {
    "kanji": "誠",
    "kanji_reading": "まこと",
    "on_reading": "セイ",
    "kun_reading": NaN,
    "tts_sentence": "まこと を つらぬく",
    "tts_slow_sentence": "まこと を つらぬく",
    "tags": "道徳",
    "grade": "小6"
  },
  {
    "kanji": "宣",
    "kanji_reading": "のたま-う",
    "on_reading": "セン",
    "kun_reading": NaN,
    "tts_sentence": "せんげん を する",
    "tts_slow_sentence": "せんげん を する",
    "tags": "社会",
    "grade": "小6"
  },
  {
    "kanji": "専",
    "kanji_reading": "もっぱ-ら",
    "on_reading": "セン",
    "kun_reading": NaN,
    "tts_sentence": "せんもん を まなぶ",
    "tts_slow_sentence": "せんもん を まなぶ",
    "tags": "学習",
    "grade": "小6"
  },
  {
    "kanji": "泉",
    "kanji_reading": "いずみ",
    "on_reading": "セン",
    "kun_reading": "いずみ",
    "tts_sentence": "いずみ の みず",
    "tts_slow_sentence": "いずみ の みず",
    "tags": "自然",
    "grade": "小6"
  },
  {
    "kanji": "洗",
    "kanji_reading": "あら-う",
    "on_reading": "セン",
    "kun_reading": "あら-う",
    "tts_sentence": "て を あらう",
    "tts_slow_sentence": "て を あらう",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "染",
    "kanji_reading": "そ-まる",
    "on_reading": "セン",
    "kun_reading": "そ-める",
    "tts_sentence": "ふく を そめる",
    "tts_slow_sentence": "ふく を そめる",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "扇",
    "kanji_reading": "おうぎ",
    "on_reading": "セン",
    "kun_reading": "おうぎ",
    "tts_sentence": "おうぎ を ひろげる",
    "tts_slow_sentence": "おうぎ を ひろげる",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "浅",
    "kanji_reading": "あさ-い",
    "on_reading": "セン",
    "kun_reading": "あさ-い",
    "tts_sentence": "あさい かわ",
    "tts_slow_sentence": "あさい かわ",
    "tags": "地理",
    "grade": "小6"
  },
  {
    "kanji": "線",
    "kanji_reading": "せん",
    "on_reading": "セン",
    "kun_reading": NaN,
    "tts_sentence": "ほそい せん",
    "tts_slow_sentence": "ほそい せん",
    "tags": "学習",
    "grade": "小6"
  },
  {
    "kanji": "銭",
    "kanji_reading": "ぜに",
    "on_reading": "セン",
    "kun_reading": "ぜに",
    "tts_sentence": "ぜに を はらう",
    "tts_slow_sentence": "ぜに を はらう",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "祖",
    "kanji_reading": "そ",
    "on_reading": "ソ",
    "kun_reading": NaN,
    "tts_sentence": "そふ と すごす",
    "tts_slow_sentence": "そふ と すごす",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "素",
    "kanji_reading": "もと",
    "on_reading": "ソ",
    "kun_reading": "す-じ",
    "tts_sentence": "そしき の もと",
    "tts_slow_sentence": "そしき の もと",
    "tags": "学習",
    "grade": "小6"
  },
  {
    "kanji": "総",
    "kanji_reading": "す-べて",
    "on_reading": "ソウ",
    "kun_reading": "す-べて",
    "tts_sentence": "そうごう てき に かんがえる",
    "tts_slow_sentence": "そうごう てき に かんがえる",
    "tags": "学習",
    "grade": "小6"
  },
  {
    "kanji": "造",
    "kanji_reading": "つく-る",
    "on_reading": "ゾウ",
    "kun_reading": "つく-る",
    "tts_sentence": "くるま を つくる",
    "tts_slow_sentence": "くるま を つくる",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "像",
    "kanji_reading": "かたち",
    "on_reading": "ゾウ",
    "kun_reading": NaN,
    "tts_sentence": "どうぶつ の ぞう",
    "tts_slow_sentence": "どうぶつ の ぞう",
    "tags": "図工",
    "grade": "小6"
  },
  {
    "kanji": "増",
    "kanji_reading": "ふ-える",
    "on_reading": "ゾウ",
    "kun_reading": "ふ-やす",
    "tts_sentence": "しゅるい が ふえる",
    "tts_slow_sentence": "しゅるい が ふえる",
    "tags": "理科",
    "grade": "小6"
  },
  {
    "kanji": "則",
    "kanji_reading": "のり",
    "on_reading": "ソク",
    "kun_reading": NaN,
    "tts_sentence": "きそく に したがう",
    "tts_slow_sentence": "きそく に したがう",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "測",
    "kanji_reading": "はか-る",
    "on_reading": "ソク",
    "kun_reading": "はか-る",
    "tts_sentence": "みず の おんど を はかる",
    "tts_slow_sentence": "みず の おんど を はかる",
    "tags": "理科",
    "grade": "小6"
  },
  {
    "kanji": "属",
    "kanji_reading": "ぞく",
    "on_reading": "ゾク",
    "kun_reading": NaN,
    "tts_sentence": "かぞく に ぞくする",
    "tts_slow_sentence": "かぞく に ぞくする",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "率",
    "kanji_reading": "りつ",
    "on_reading": "リツ",
    "kun_reading": NaN,
    "tts_sentence": "ひょう の りつ を みる",
    "tts_slow_sentence": "ひょう の りつ を みる",
    "tags": "学習",
    "grade": "小6"
  },
  {
    "kanji": "損",
    "kanji_reading": "そこ-なう",
    "on_reading": "ソン",
    "kun_reading": "そこ-なう",
    "tts_sentence": "からだ を そこなう",
    "tts_slow_sentence": "からだ を そこなう",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "退",
    "kanji_reading": "しりぞ-く",
    "on_reading": "タイ",
    "kun_reading": "しりぞ-ける",
    "tts_sentence": "いちど たいひ する",
    "tts_slow_sentence": "いちど たいひ する",
    "tags": "社会",
    "grade": "小6"
  },
  {
    "kanji": "貸",
    "kanji_reading": "か-す",
    "on_reading": "タイ",
    "kun_reading": "か-す",
    "tts_sentence": "おかね を かす",
    "tts_slow_sentence": "おかね を かす",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "態",
    "kanji_reading": "ようす",
    "on_reading": "タイ",
    "kun_reading": NaN,
    "tts_sentence": "どうぶつ の たい",
    "tts_slow_sentence": "どうぶつ の たい",
    "tags": "理科",
    "grade": "小6"
  },
  {
    "kanji": "団",
    "kanji_reading": "だん",
    "on_reading": "ダン",
    "kun_reading": NaN,
    "tts_sentence": "だんたい こうどう",
    "tts_slow_sentence": "だんたい こうどう",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "断",
    "kanji_reading": "ことわ-る",
    "on_reading": "ダン",
    "kun_reading": "ことわ-る",
    "tts_sentence": "まちがい を だんてい する",
    "tts_slow_sentence": "まちがい を だんてい する",
    "tags": "学習",
    "grade": "小6"
  },
  {
    "kanji": "築",
    "kanji_reading": "きず-く",
    "on_reading": "チク",
    "kun_reading": "きず-く",
    "tts_sentence": "いえ を きずく",
    "tts_slow_sentence": "いえ を きずく",
    "tags": "社会",
    "grade": "小6"
  },
  {
    "kanji": "張",
    "kanji_reading": "は-る",
    "on_reading": "チョウ",
    "kun_reading": "は-る",
    "tts_sentence": "ひも を はる",
    "tts_slow_sentence": "ひも を はる",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "停",
    "kanji_reading": "と-まる",
    "on_reading": "テイ",
    "kun_reading": "と-める",
    "tts_sentence": "くるま が とまる",
    "tts_slow_sentence": "くるま が とまる",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "底",
    "kanji_reading": "そこ",
    "on_reading": "テイ",
    "kun_reading": "そこ",
    "tts_sentence": "いけ の そこ を みる",
    "tts_slow_sentence": "いけ の そこ を みる",
    "tags": "自然",
    "grade": "小6"
  },
  {
    "kanji": "的",
    "kanji_reading": "まと",
    "on_reading": "テキ",
    "kun_reading": "まと",
    "tts_sentence": "まと を ねらう",
    "tts_slow_sentence": "まと を ねらう",
    "tags": "体育",
    "grade": "小6"
  },
  {
    "kanji": "典",
    "kanji_reading": "てん",
    "on_reading": "テン",
    "kun_reading": NaN,
    "tts_sentence": "じてん を ひく",
    "tts_slow_sentence": "じてん を ひく",
    "tags": "学習",
    "grade": "小6"
  },
  {
    "kanji": "伝",
    "kanji_reading": "つた-える",
    "on_reading": "デン",
    "kun_reading": "つた-わる",
    "tts_sentence": "ことば を つたえる",
    "tts_slow_sentence": "ことば を つたえる",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "徒",
    "kanji_reading": "とも がら",
    "on_reading": "ト",
    "kun_reading": NaN,
    "tts_sentence": "ともだち と あるく",
    "tts_slow_sentence": "ともだち と あるく",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "努",
    "kanji_reading": "つと-める",
    "on_reading": "ド",
    "kun_reading": "つと-める",
    "tts_sentence": "べんきょう を つとめる",
    "tts_slow_sentence": "べんきょう を つとめる",
    "tags": "学習",
    "grade": "小6"
  },
  {
    "kanji": "灯",
    "kanji_reading": "ひ",
    "on_reading": "トウ",
    "kun_reading": "ひ",
    "tts_sentence": "でんき の ひ を つける",
    "tts_slow_sentence": "でんき の ひ を つける",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "働",
    "kanji_reading": "はたら-く",
    "on_reading": "ドウ",
    "kun_reading": "はたら-く",
    "tts_sentence": "いえ の しごと を はたらく",
    "tts_slow_sentence": "いえ の しごと を はたらく",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "特",
    "kanji_reading": "とく",
    "on_reading": "トク",
    "kun_reading": NaN,
    "tts_sentence": "とくちょう を しる",
    "tts_slow_sentence": "とくちょう を しる",
    "tags": "学習",
    "grade": "小6"
  },
  {
    "kanji": "得",
    "kanji_reading": "え-る",
    "on_reading": "トク",
    "kun_reading": "う-る",
    "tts_sentence": "しあわせ を える",
    "tts_slow_sentence": "しあわせ を える",
    "tags": "道徳",
    "grade": "小6"
  },
  {
    "kanji": "毒",
    "kanji_reading": "どく",
    "on_reading": "ドク",
    "kun_reading": NaN,
    "tts_sentence": "どく に ちゅうい する",
    "tts_slow_sentence": "どく に ちゅうい する",
    "tags": "理科",
    "grade": "小6"
  },
  {
    "kanji": "独",
    "kanji_reading": "ひと-り",
    "on_reading": "ドク",
    "kun_reading": "ひと-り",
    "tts_sentence": "ひとり で かんがえる",
    "tts_slow_sentence": "ひとり で かんがえる",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "難",
    "kanji_reading": "むずか-しい",
    "on_reading": "ナン",
    "kun_reading": "むずか-しい",
    "tts_sentence": "むずかしい もんだい",
    "tts_slow_sentence": "むずかしい もんだい",
    "tags": "学習",
    "grade": "小6"
  },
  {
    "kanji": "乳",
    "kanji_reading": "ちち",
    "on_reading": "ニュウ",
    "kun_reading": "ちち",
    "tts_sentence": "にゅうどう どうぶつ",
    "tts_slow_sentence": "にゅうどう どうぶつ",
    "tags": "理科",
    "grade": "小6"
  },
  {
    "kanji": "認",
    "kanji_reading": "みと-める",
    "on_reading": "ニン",
    "kun_reading": "みと-める",
    "tts_sentence": "あやまり を みとめる",
    "tts_slow_sentence": "あやまり を みとめる",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "納",
    "kanji_reading": "おさ-める",
    "on_reading": "ノウ",
    "kun_reading": "おさ-まる",
    "tts_sentence": "かね を おさめる",
    "tts_slow_sentence": "かね を おさめる",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "脳",
    "kanji_reading": "のう",
    "on_reading": "ノウ",
    "kun_reading": NaN,
    "tts_sentence": "のう を つかう",
    "tts_slow_sentence": "のう を つかう",
    "tags": "理科",
    "grade": "小6"
  },
  {
    "kanji": "派",
    "kanji_reading": "は",
    "on_reading": "ハ",
    "kun_reading": NaN,
    "tts_sentence": "は の いけん",
    "tts_slow_sentence": "は の いけん",
    "tags": "学習",
    "grade": "小6"
  },
  {
    "kanji": "破",
    "kanji_reading": "やぶ-る",
    "on_reading": "ハ",
    "kun_reading": "やぶ-れる",
    "tts_sentence": "かみ を やぶる",
    "tts_slow_sentence": "かみ を やぶる",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "犯",
    "kanji_reading": "おか-す",
    "on_reading": "ハン",
    "kun_reading": "おか-す",
    "tts_sentence": "きそく を おかす",
    "tts_slow_sentence": "きそく を おかす",
    "tags": "社会",
    "grade": "小6"
  },
  {
    "kanji": "判",
    "kanji_reading": "わか-る",
    "on_reading": "ハン",
    "kun_reading": "わか-る",
    "tts_sentence": "こたえ を はんだん する",
    "tts_slow_sentence": "こたえ を はんだん する",
    "tags": "学習",
    "grade": "小6"
  },
  {
    "kanji": "版",
    "kanji_reading": "はん",
    "on_reading": "ハン",
    "kun_reading": NaN,
    "tts_sentence": "えいが の しんはん",
    "tts_slow_sentence": "えいが の しんはん",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "彼",
    "kanji_reading": "かれ",
    "on_reading": "ヒ",
    "kun_reading": NaN,
    "tts_sentence": "かれ と はなす",
    "tts_slow_sentence": "かれ と はなす",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "皮",
    "kanji_reading": "かわ",
    "on_reading": "ヒ",
    "kun_reading": "かわ",
    "tts_sentence": "かわ を むく",
    "tts_slow_sentence": "かわ を むく",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "疲",
    "kanji_reading": "つか-れる",
    "on_reading": "ヒ",
    "kun_reading": "つか-れる",
    "tts_sentence": "よる に つかれる",
    "tts_slow_sentence": "よる に つかれる",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "秘",
    "kanji_reading": "ひ",
    "on_reading": "ヒ",
    "kun_reading": NaN,
    "tts_sentence": "ひみつ を まもる",
    "tts_slow_sentence": "ひみつ を まもる",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "俵",
    "kanji_reading": "たわら",
    "on_reading": "ヒョウ",
    "kun_reading": "たわら",
    "tts_sentence": "こめ の たわら",
    "tts_slow_sentence": "こめ の たわら",
    "tags": "社会",
    "grade": "小6"
  },
  {
    "kanji": "布",
    "kanji_reading": "ぬの",
    "on_reading": "フ",
    "kun_reading": "ぬの",
    "tts_sentence": "ぬの を きる",
    "tts_slow_sentence": "ぬの を きる",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "婦",
    "kanji_reading": "よめ",
    "on_reading": "フ",
    "kun_reading": NaN,
    "tts_sentence": "ふじん の しごと",
    "tts_slow_sentence": "ふじん の しごと",
    "tags": "社会",
    "grade": "小6"
  },
  {
    "kanji": "富",
    "kanji_reading": "と-む",
    "on_reading": "フ",
    "kun_reading": "と-む",
    "tts_sentence": "とみ が ふえる",
    "tts_slow_sentence": "とみ が ふえる",
    "tags": "社会",
    "grade": "小6"
  },
  {
    "kanji": "武",
    "kanji_reading": "たけし",
    "on_reading": "ブ",
    "kun_reading": "たけし",
    "tts_sentence": "ぶどう の しゅぎょう",
    "tts_slow_sentence": "ぶどう の しゅぎょう",
    "tags": "社会",
    "grade": "小6"
  },
  {
    "kanji": "復",
    "kanji_reading": "もど-す",
    "on_reading": "フク",
    "kun_reading": "もど-る",
    "tts_sentence": "もどして なおす",
    "tts_slow_sentence": "もどして なおす",
    "tags": "学習",
    "grade": "小6"
  },
  {
    "kanji": "複",
    "kanji_reading": "ふく",
    "on_reading": "フク",
    "kun_reading": NaN,
    "tts_sentence": "ふくざつ な もんだい",
    "tts_slow_sentence": "ふくざつ な もんだい",
    "tags": "学習",
    "grade": "小6"
  },
  {
    "kanji": "仏",
    "kanji_reading": "ほとけ",
    "on_reading": "ブツ",
    "kun_reading": "ほとけ",
    "tts_sentence": "ほとけ の まえ で おがむ",
    "tts_slow_sentence": "ほとけ の まえ で おがむ",
    "tags": "社会",
    "grade": "小6"
  },
  {
    "kanji": "粉",
    "kanji_reading": "こな",
    "on_reading": "フン",
    "kun_reading": "こな",
    "tts_sentence": "こな を こぼす",
    "tts_slow_sentence": "こな を こぼす",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "兵",
    "kanji_reading": "つわもの",
    "on_reading": "ヘイ",
    "kun_reading": NaN,
    "tts_sentence": "へいたい の くつ",
    "tts_slow_sentence": "へいたい の くつ",
    "tags": "社会",
    "grade": "小6"
  },
  {
    "kanji": "別",
    "kanji_reading": "わか-れる",
    "on_reading": "ベツ",
    "kun_reading": "わか-れる",
    "tts_sentence": "ともだち と わかれる",
    "tts_slow_sentence": "ともだち と わかれる",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "変",
    "kanji_reading": "か-わる",
    "on_reading": "ヘン",
    "kun_reading": "か-える",
    "tts_sentence": "いろ が かわる",
    "tts_slow_sentence": "いろ が かわる",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "辺",
    "kanji_reading": "あた-り",
    "on_reading": "ヘン",
    "kun_reading": "あた-り",
    "tts_sentence": "かわ の あたり",
    "tts_slow_sentence": "かわ の あたり",
    "tags": "地理",
    "grade": "小6"
  },
  {
    "kanji": "返",
    "kanji_reading": "かえ-す",
    "on_reading": "ヘン",
    "kun_reading": "かえ-る",
    "tts_sentence": "ほん を かえす",
    "tts_slow_sentence": "ほん を かえす",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "編",
    "kanji_reading": "あ-む",
    "on_reading": "ヘン",
    "kun_reading": "あ-む",
    "tts_sentence": "マフラー を あむ",
    "tts_slow_sentence": "マフラー を あむ",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "弁",
    "kanji_reading": "べん",
    "on_reading": "ベン",
    "kun_reading": NaN,
    "tts_sentence": "べんろん を する",
    "tts_slow_sentence": "べんろん を する",
    "tags": "学習",
    "grade": "小6"
  },
  {
    "kanji": "保",
    "kanji_reading": "たも-つ",
    "on_reading": "ホ",
    "kun_reading": "たも-つ",
    "tts_sentence": "しぜん を まもる",
    "tts_slow_sentence": "しぜん を まもる",
    "tags": "社会",
    "grade": "小6"
  },
  {
    "kanji": "墓",
    "kanji_reading": "はか",
    "on_reading": "ボ",
    "kun_reading": "はか",
    "tts_sentence": "はか を おとずれる",
    "tts_slow_sentence": "はか を おとずれる",
    "tags": "社会",
    "grade": "小6"
  },
  {
    "kanji": "報",
    "kanji_reading": "むく-いる",
    "on_reading": "ホウ",
    "kun_reading": "むく-いる",
    "tts_sentence": "よい こと を ほうこく する",
    "tts_slow_sentence": "よい こと を ほうこく する",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "豊",
    "kanji_reading": "ゆた-か",
    "on_reading": "ホウ",
    "kun_reading": "ゆた-か",
    "tts_sentence": "みのり が ゆたか",
    "tts_slow_sentence": "みのり が ゆたか",
    "tags": "社会",
    "grade": "小6"
  },
  {
    "kanji": "防",
    "kanji_reading": "ふせ-ぐ",
    "on_reading": "ボウ",
    "kun_reading": "ふせ-ぐ",
    "tts_sentence": "あぶない こと を ふせぐ",
    "tts_slow_sentence": "あぶない こと を ふせぐ",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "貿",
    "kanji_reading": "ぼう",
    "on_reading": "ボウ",
    "kun_reading": NaN,
    "tts_sentence": "ぼうえき の べんきょう",
    "tts_slow_sentence": "ぼうえき の べんきょう",
    "tags": "社会",
    "grade": "小6"
  },
  {
    "kanji": "暴",
    "kanji_reading": "あば-れる",
    "on_reading": "ボウ",
    "kun_reading": "あば-れる",
    "tts_sentence": "かぜ が あばれる",
    "tts_slow_sentence": "かぜ が あばれる",
    "tags": "自然",
    "grade": "小6"
  },
  {
    "kanji": "脈",
    "kanji_reading": "みゃく",
    "on_reading": "ミャク",
    "kun_reading": NaN,
    "tts_sentence": "みゃく を はかる",
    "tts_slow_sentence": "みゃく を はかる",
    "tags": "体",
    "grade": "小6"
  },
  {
    "kanji": "務",
    "kanji_reading": "つと-める",
    "on_reading": "ム",
    "kun_reading": "つと-める",
    "tts_sentence": "つとめ を はたす",
    "tts_slow_sentence": "つとめ を はたす",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "夢",
    "kanji_reading": "ゆめ",
    "on_reading": "ム",
    "kun_reading": "ゆめ",
    "tts_sentence": "ゆめ を かなえる",
    "tts_slow_sentence": "ゆめ を かなえる",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "迷",
    "kanji_reading": "まよ-う",
    "on_reading": "メイ",
    "kun_reading": "まよ-う",
    "tts_sentence": "みち に まよう",
    "tts_slow_sentence": "みち に まよう",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "綿",
    "kanji_reading": "わた",
    "on_reading": "メン",
    "kun_reading": "わた",
    "tts_sentence": "めん の ふとん",
    "tts_slow_sentence": "めん の ふとん",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "輸",
    "kanji_reading": "ゆ",
    "on_reading": "ユ",
    "kun_reading": NaN,
    "tts_sentence": "ゆそう を する",
    "tts_slow_sentence": "ゆそう を する",
    "tags": "社会",
    "grade": "小6"
  },
  {
    "kanji": "余",
    "kanji_reading": "あま-る",
    "on_reading": "ヨ",
    "kun_reading": "あま-る",
    "tts_sentence": "じかん が あまる",
    "tts_slow_sentence": "じかん が あまる",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "翌",
    "kanji_reading": "よく",
    "on_reading": "ヨク",
    "kun_reading": NaN,
    "tts_sentence": "よくじつ の あさ",
    "tts_slow_sentence": "よくじつ の あさ",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "乱",
    "kanji_reading": "みだ-れる",
    "on_reading": "ラン",
    "kun_reading": "みだ-す",
    "tts_sentence": "かみ が みだれる",
    "tts_slow_sentence": "かみ が みだれる",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "卵",
    "kanji_reading": "たまご",
    "on_reading": "ラン",
    "kun_reading": "たまご",
    "tts_sentence": "たまご を わる",
    "tts_slow_sentence": "たまご を わる",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "覧",
    "kanji_reading": "み-る",
    "on_reading": "ラン",
    "kun_reading": "み-る",
    "tts_sentence": "ず を らんしょう する",
    "tts_slow_sentence": "ず を らんしょう する",
    "tags": "学習",
    "grade": "小6"
  },
  {
    "kanji": "裏",
    "kanji_reading": "うら",
    "on_reading": "リ",
    "kun_reading": "うら",
    "tts_sentence": "ふく の うら が やぶれる",
    "tts_slow_sentence": "ふく の うら が やぶれる",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "律",
    "kanji_reading": "りつ",
    "on_reading": "リツ",
    "kun_reading": NaN,
    "tts_sentence": "せいりつ する",
    "tts_slow_sentence": "せいりつ する",
    "tags": "社会",
    "grade": "小6"
  },
  {
    "kanji": "臨",
    "kanji_reading": "のぞ-む",
    "on_reading": "リン",
    "kun_reading": "のぞ-む",
    "tts_sentence": "しけん に のぞむ",
    "tts_slow_sentence": "しけん に のぞむ",
    "tags": "学習",
    "grade": "小6"
  },
  {
    "kanji": "朗",
    "kanji_reading": "ほが-らか",
    "on_reading": "ロウ",
    "kun_reading": "ほが-らか",
    "tts_sentence": "ほがらか に わらう",
    "tts_slow_sentence": "ほがらか に わらう",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "論",
    "kanji_reading": "ろん",
    "on_reading": "ロン",
    "kun_reading": NaN,
    "tts_sentence": "ろんぶん を よむ",
    "tts_slow_sentence": "ろんぶん を よむ",
    "tags": "学習",
    "grade": "小6"
  },
  {
    "kanji": "輪",
    "kanji_reading": "わ",
    "on_reading": "リン",
    "kun_reading": "わ",
    "tts_sentence": "くるま の わ",
    "tts_slow_sentence": "くるま の わ",
    "tags": "生活",
    "grade": "小6"
  },
  {
    "kanji": "類",
    "kanji_reading": "たぐ-い",
    "on_reading": "ルイ",
    "kun_reading": "たぐ-い",
    "tts_sentence": "るい を くらべる",
    "tts_slow_sentence": "るい を くらべる",
    "tags": "学習",
    "grade": "小6"
  }
];
