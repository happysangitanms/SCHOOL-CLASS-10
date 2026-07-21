const wordData = {
    currentWord: 0,
    words: [
        {
            word: "LETTER",
            odia: "ବର୍ଣ୍ଣ",
            emoji: "🔤",
            odiaUse: "ଲିଖନ ପ୍ରକ୍ରିୟା ମାଧ୍ୟମରେ ଭାଷାକୁ ବ୍ୟକ୍ତ କରିବା ଲାଗି ଉପଯୋଗୀ ଧ୍ୱନିଗୁଡ଼ିକୁ ବର୍ଣ୍ଣ କୁହାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "VOWEL",
            odia: "ସ୍ୱରବର୍ଣ୍ଣ",
            emoji: "🗣️",
            odiaUse: "ଯେଉଁ ବର୍ଣ୍ଣ ନିରପେକ୍ଷ ଭାବରେ ସ୍ୱତଃ ସ୍ପଷ୍ଟ ଉଚ୍ଚାରିତ ହୁଏ, ତାହା ସ୍ୱରବର୍ଣ୍ଣ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "CONSONANT",
            odia: "ବ୍ୟଞ୍ଜନ",
            emoji: "🔡",
            odiaUse: "ଯାହା ସ୍ୱରର ଅନୁଗାମୀ ବା ସ୍ୱର ବିନା ଉଚ୍ଚାରଣ ହୋଇପାରେ ନାହିଁ, ସେ ‘ବ୍ୟଞ୍ଜନ’ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "SHORT VOWEL",
            odia: "ହ୍ରସ୍ୱ ସ୍ୱର",
            emoji: "⏱️",
            odiaUse: "ଅ, ଇ, ଉ, ଋ, ଌ ଏହି ମୂଳସ୍ୱର ପାଞ୍ଚଗୋଟି, ଏମାନଙ୍କର ଉଚ୍ଚାରଣ କାଳ ଏକ ମାତ୍ରା ସମୟ ବିଶିଷ୍ଟ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "LONG VOWEL",
            odia: "ଦୀର୍ଘସ୍ୱର",
            emoji: "⏳",
            odiaUse: "ଆ, ଈ, ଊ, ଋ, ଏ, ଐ, ଓ, ଔ ଏହି ଦୀର୍ଘସ୍ୱର ଆଠଗୋଟି, ଏମାନଙ୍କର ଉଚ୍ଚାରଣ କାଳ ଦୁଇମାତ୍ରା ସମୟ ବିଶିଷ୍ଟ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "CLASSIFIED CONSONANT",
            odia: "ବର୍ଗୀୟ ବ୍ୟଞ୍ଜନ",
            emoji: "🗂️",
            odiaUse: "ଏଗୁଡ଼ିକୁ ‘ସ୍ପର୍ଶବର୍ଣ୍ଣ’ ମଧ୍ୟ କୁହାଯାଏ । ଏମାନଙ୍କ ସଂଖ୍ୟା ସମୁଦାୟ ୨୫ ଓ ପାଞ୍ଚଗୋଟି ବର୍ଗରେ ବିଭକ୍ତ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "UNCLASSIFIED CONSONANT",
            odia: "ଅବର୍ଗୀୟ ବ୍ୟଞ୍ଜନ",
            emoji: "🧩",
            odiaUse: "ଏମାନଙ୍କ ସଂଖ୍ୟା ସମୁଦାୟ ୮ । ଏହା ଦୁଇଭାଗରେ ବିଭକ୍ତ - ଅନ୍ତଃସ୍ଥ ଓ ଉଷ୍ମ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "SEMIVOWEL",
            odia: "ଅନ୍ତଃସ୍ଥ",
            emoji: "🔀",
            odiaUse: "ଯ, ର, ଲ, ବ ଏହି ବର୍ଣ୍ଣମାନଙ୍କୁ ଅର୍ଦ୍ଧସ୍ୱର ମଧ୍ୟ କୁହାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "SIBILANT",
            odia: "ଉଷ୍ମ",
            emoji: "💨",
            odiaUse: "ଶ, ଷ, ସ, ହ ଏହି ବର୍ଣ୍ଣମାନେ ଉଷ୍ମବର୍ଣ୍ଣ ଅଟନ୍ତି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "HALANT",
            odia: "ହଳ",
            emoji: "➖",
            odiaUse: "ବ୍ୟଞ୍ଜନ ବର୍ଣ୍ଣକୁ ହଳ୍ ମଧ୍ୟ କୁହାଯାଏ । କେବଳ ବ୍ୟଞ୍ଜନର ପ୍ରୟୋଗ ‘ହଳ୍’ ଚିହ୍ନ ଯୋଗରେ କରାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "AYOGAVAHA",
            odia: "ଅଯୋଗବାହ",
            emoji: "🔗",
            odiaUse: "ଅନୁସ୍ୱାର, ବିସର୍ଗ ଓ ଚନ୍ଦ୍ରବିନ୍ଦୁ ଏହା ସ୍ୱରବର୍ଣ୍ଣ ଓ ବ୍ୟଞ୍ଜନ ବର୍ଣ୍ଣରେ ମିଶି ଉଚ୍ଚାରିତ ହୁଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        }
    ]
};

