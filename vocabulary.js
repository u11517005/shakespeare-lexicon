const VOCABULARY = [
  {
    "letter": "A",
    "word": "Ambition",
    "meaning": "野心；雄心",
    "part": "noun",
    "definition": "a strong desire to achieve success or power",
    "quote": "Vaulting ambition, which o’erleaps itself / And falls on the other.",
    "play": "Macbeth",
    "scene": "Act 1, Scene 7"
  },
  {
    "letter": "B",
    "word": "Beauty",
    "meaning": "美；美麗",
    "part": "noun",
    "definition": "the quality of being pleasing to the senses or mind",
    "quote": "Beauty too rich for use, for earth too dear!",
    "play": "Romeo and Juliet",
    "scene": "Act 1, Scene 1"
  },
  {
    "letter": "C",
    "word": "Conscience",
    "meaning": "良心；道德感",
    "part": "noun",
    "definition": "the inner sense of right and wrong",
    "quote": "Conscience is but a word that cowards use, / Devised at first to keep the strong in awe.",
    "play": "Richard III",
    "scene": "Act 5, Scene 3"
  },
  {
    "letter": "D",
    "word": "Dream",
    "meaning": "夢；夢想",
    "part": "noun",
    "definition": "a series of thoughts or images during sleep; an aspiration",
    "quote": "We are such stuff / As dreams are made on, and our little life / Is rounded with a sleep.",
    "play": "The Tempest",
    "scene": "Act 4, Scene 1"
  },
  {
    "letter": "E",
    "word": "Evil",
    "meaning": "邪惡；惡行",
    "part": "noun / adjective",
    "definition": "something morally wrong or harmful",
    "quote": "The evil that men do lives after them; / The good is oft interred with their bones.",
    "play": "Julius Caesar",
    "scene": "Act 3, Scene 2"
  },
  {
    "letter": "F",
    "word": "Fortune",
    "meaning": "命運；運氣",
    "part": "noun",
    "definition": "chance or the events that happen to someone",
    "quote": "O Fortune, Fortune! all men call thee fickle.",
    "play": "Romeo and Juliet",
    "scene": "Act 3, Scene 5"
  },
  {
    "letter": "G",
    "word": "Grief",
    "meaning": "悲傷；悲痛",
    "part": "noun",
    "definition": "deep sorrow, especially caused by loss",
    "quote": "Give sorrow words: the grief that does not speak / Whispers the o’er-fraught heart and bids it break.",
    "play": "Macbeth",
    "scene": "Act 4, Scene 3"
  },
  {
    "letter": "H",
    "word": "Honour",
    "meaning": "榮譽；尊嚴",
    "part": "noun",
    "definition": "great respect, reputation, or moral integrity",
    "quote": "By heaven, methinks it were an easy leap / To pluck bright honour from the pale-faced moon.",
    "play": "Henry IV, Part 1",
    "scene": "Act 1, Scene 3"
  },
  {
    "letter": "I",
    "word": "Imagination",
    "meaning": "想像力",
    "part": "noun",
    "definition": "the ability to form ideas or pictures in the mind",
    "quote": "The lunatic, the lover, and the poet / Are of imagination all compact.",
    "play": "A Midsummer Night’s Dream",
    "scene": "Act 5, Scene 1"
  },
  {
    "letter": "J",
    "word": "Jealousy",
    "meaning": "嫉妒；猜忌",
    "part": "noun",
    "definition": "fear or anger caused by suspicion of rivalry",
    "quote": "O, beware, my lord, of jealousy; / It is the green-eyed monster which doth mock / The meat it feeds on.",
    "play": "Othello",
    "scene": "Act 3, Scene 3"
  },
  {
    "letter": "K",
    "word": "King",
    "meaning": "國王；君主",
    "part": "noun",
    "definition": "a male ruler of an independent state",
    "quote": "For God’s sake, let us sit upon the ground / And tell sad stories of the death of kings.",
    "play": "Richard II",
    "scene": "Act 3, Scene 2"
  },
  {
    "letter": "L",
    "word": "Love",
    "meaning": "愛；愛情",
    "part": "noun / verb",
    "definition": "a deep feeling of affection",
    "quote": "My bounty is as boundless as the sea, / My love as deep; the more I give to thee, / The more I have, for both are infinite.",
    "play": "Romeo and Juliet",
    "scene": "Act 2, Scene 2"
  },
  {
    "letter": "M",
    "word": "Madness",
    "meaning": "瘋狂；精神錯亂",
    "part": "noun",
    "definition": "the state of behaving in a wild or irrational way",
    "quote": "Though this be madness, yet there is method in’t.",
    "play": "Hamlet",
    "scene": "Act 2, Scene 2"
  },
  {
    "letter": "N",
    "word": "Nature",
    "meaning": "自然；天性",
    "part": "noun",
    "definition": "the physical world or the basic character of a person",
    "quote": "One touch of nature makes the whole world kin.",
    "play": "Troilus and Cressida",
    "scene": "Act 3, Scene 3"
  },
  {
    "letter": "O",
    "word": "Opportunity",
    "meaning": "機會；良機",
    "part": "noun",
    "definition": "a situation in which something can be done",
    "quote": "That opportunity, / Which then they had to take from ’s, to resume, / We have again.",
    "play": "Cymbeline",
    "scene": "Act 3, Scene 1"
  },
  {
    "letter": "P",
    "word": "Pity",
    "meaning": "憐憫；同情",
    "part": "noun",
    "definition": "the feeling of sorrow for another person’s suffering",
    "quote": "And pity, like a naked new-born babe, / Striding the blast, or heaven’s cherubim, horsed / Upon the sightless couriers of the air.",
    "play": "Macbeth",
    "scene": "Act 1, Scene 7"
  },
  {
    "letter": "Q",
    "word": "Question",
    "meaning": "問題；疑問",
    "part": "noun",
    "definition": "a sentence or phrase used to ask for information",
    "quote": "To be, or not to be: that is the question.",
    "play": "Hamlet",
    "scene": "Act 3, Scene 1"
  },
  {
    "letter": "R",
    "word": "Revenge",
    "meaning": "復仇；報復",
    "part": "noun / verb",
    "definition": "the act of hurting someone in return for a wrong",
    "quote": "Revenge his foul and most unnatural murder.",
    "play": "Hamlet",
    "scene": "Act 1, Scene 5"
  },
  {
    "letter": "S",
    "word": "Sleep",
    "meaning": "睡眠；安睡",
    "part": "noun / verb",
    "definition": "the natural state of rest in which the body is inactive",
    "quote": "Macbeth does murder sleep—the innocent sleep.",
    "play": "Macbeth",
    "scene": "Act 2, Scene 2"
  },
  {
    "letter": "T",
    "word": "Time",
    "meaning": "時間；時光",
    "part": "noun",
    "definition": "the ongoing sequence of events",
    "quote": "I wasted time, and now doth time waste me.",
    "play": "Richard II",
    "scene": "Act 5, Scene 5"
  },
  {
    "letter": "U",
    "word": "Unkind",
    "meaning": "無情的；不友善的",
    "part": "adjective",
    "definition": "not caring or sympathetic; harsh",
    "quote": "Rich gifts wax poor when givers prove unkind.",
    "play": "Hamlet",
    "scene": "Act 3, Scene 1"
  },
  {
    "letter": "V",
    "word": "Virtue",
    "meaning": "美德；德行",
    "part": "noun",
    "definition": "behaviour showing high moral standards",
    "quote": "Virtue itself ’scapes not calumnious strokes.",
    "play": "Hamlet",
    "scene": "Act 1, Scene 3"
  },
  {
    "letter": "W",
    "word": "Wisdom",
    "meaning": "智慧",
    "part": "noun",
    "definition": "the ability to make good judgments based on knowledge",
    "quote": "Wisdom and goodness to the vile seem vile; / Filths savour but themselves.",
    "play": "King Lear",
    "scene": "Act 4, Scene 2"
  },
  {
    "letter": "X",
    "word": "Xanthippe",
    "meaning": "桑蒂佩（蘇格拉底之妻）",
    "part": "proper noun",
    "definition": "a classical reference to a famously sharp-tempered wife",
    "quote": "As old as Sibyl, and as curst and shrewd / As Socrates’ Xanthippe, or a worse.",
    "play": "The Taming of the Shrew",
    "scene": "Act 1, Scene 2"
  },
  {
    "letter": "Y",
    "word": "Youth",
    "meaning": "青春；年輕",
    "part": "noun",
    "definition": "the period when someone is young",
    "quote": "Youth’s a stuff will not endure.",
    "play": "Twelfth Night",
    "scene": "Act 2, Scene 3"
  },
  {
    "letter": "Z",
    "word": "Zeal",
    "meaning": "熱忱；熱情",
    "part": "noun",
    "definition": "great energy or enthusiasm for a cause",
    "quote": "This doth infer the zeal I had to see him.",
    "play": "Henry IV, Part 2",
    "scene": "Act 5, Scene 5"
  }
];
