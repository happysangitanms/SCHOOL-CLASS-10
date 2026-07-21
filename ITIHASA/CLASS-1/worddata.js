const wordData = {
    currentWord: 0,
    words: [
        {
            word: "COLONISATION",
            odia: "ଉପନିବେଶବାଦ",
            emoji: "🏴",
            odiaUse: "ଉପନିବେଶବାଦ ଅର୍ଥ ଅନ୍ୟ ଦେଶକୁ ନିଜ ଅଧୀନରେ ରଖି ଶାସନ କରିବା । ଇଉରୋପୀୟ ଦେଶମାନେ ଏସିଆ ଓ ଆଫ୍ରିକାରେ ଉପନିବେଶବାଦ କରିଥିଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "COLONY",
            odia: "ଉପନିବେଶ",
            emoji: "🏘️",
            odiaUse: "ଉପନିବେଶ ଅର୍ଥ ବିଦେଶସ୍ଥ ଆବାସ ବା ଅନ୍ୟ ଦେଶର ଅଧୀନ ଅଞ୍ଚଳ । ଇଉରୋପୀୟମାନେ ଅନେକ ଉପନିବେଶ ସ୍ଥାପନ କରିଥିଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "TRADE",
            odia: "ବାଣିଜ୍ୟ",
            emoji: "🚢",
            odiaUse: "ବାଣିଜ୍ୟ ଅର୍ଥ କିଣାବିକା ଓ ବ୍ୟବସାୟ । ବାଣିଜ୍ୟ ପାଇଁ ଇଉରୋପୀୟମାନେ ଏସିଆକୁ ଆସିଥିଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "EMPIRE",
            odia: "ସାମ୍ରାଜ୍ୟ",
            emoji: "👑",
            odiaUse: "ସାମ୍ରାଜ୍ୟ ଅର୍ଥ ବହୁ ଅଞ୍ଚଳକୁ ନେଇ ଗଠିତ ବଡ଼ ରାଜ୍ୟ । ସାମ୍ରାଜ୍ୟ ବିସ୍ତାର ଉପନିବେଶବାଦର ଲକ୍ଷ୍ୟ ଥିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "DISCOVERY",
            odia: "ଆବିଷ୍କାର",
            emoji: "🧭",
            odiaUse: "ଆବିଷ୍କାର ଅର୍ଥ ନୂଆ ସ୍ଥାନ ବା ବସ୍ତୁର ସନ୍ଧାନ । ଭୌଗୋଳିକ ଆବିଷ୍କାର ଉପନିବେଶ ସ୍ଥାପନରେ ସାହାଯ୍ୟ କଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "GEOGRAPHY",
            odia: "ଭୌଗୋଳିକ",
            emoji: "🗺️",
            odiaUse: "ଭୌଗୋଳିକ ଅର୍ଥ ପୃଥିବୀର ସ୍ଥାନ ଓ ପରିବେଶ ସମ୍ବନ୍ଧୀୟ । ଭୌଗୋଳିକ ଆବିଷ୍କାର ଯାତାୟାତକୁ ସହଜ କରିଥିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "SLAVE",
            odia: "କ୍ରୀତଦାସ",
            emoji: "⛓️",
            odiaUse: "କ୍ରୀତଦାସ ଅର୍ଥ ଅର୍ଥର ବିନିମୟରେ ଗୋଲାମ ଭାବେ ବିକ୍ରି ହୋଇଥିବା ବ୍ୟକ୍ତି । ଆଫ୍ରିକାରେ ଦାସ ବ୍ୟବସାୟ ଲାଭଦାୟକ ଥିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "INDUSTRIAL REVOLUTION",
            odia: "ଶିଳ୍ପ ବିପ୍ଳବ",
            emoji: "🏭",
            odiaUse: "ଶିଳ୍ପ ବିପ୍ଳବ ଅର୍ଥ ନୂତନ ଯନ୍ତ୍ର ସାହାଯ୍ୟରେ ବହୁ ପରିମାଣରେ ଉତ୍ପାଦନ ହେବା । ଏହା ଇଂଲାଣ୍ଡରେ ଆରମ୍ଭ ହୋଇଥିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "FACTORY",
            odia: "କଳ କାରଖାନା",
            emoji: "🏭",
            odiaUse: "କଳ କାରଖାନା ଅର୍ଥ ଯନ୍ତ୍ର ସାହାଯ୍ୟରେ ଦ୍ରବ୍ୟ ତିଆରି କରାଯାଉଥିବା ସ୍ଥାନ । ଶିଳ୍ପ ବିପ୍ଳବ ପରେ କଳ କାରଖାନା ବଢ଼ିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "MARKET",
            odia: "ବଜାର",
            emoji: "🛒",
            odiaUse: "ବଜାର ଅର୍ଥ କିଣାବିକାର ସ୍ଥାନ । ଇଉରୋପୀୟ ଦେଶମାନେ ଏସିଆ ଓ ଆଫ୍ରିକାରେ ନୂଆ ବଜାର ସୃଷ୍ଟି କରିଥିଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "RAW MATERIAL",
            odia: "କଞ୍ଚାମାଲ",
            emoji: "⛏️",
            odiaUse: "କଞ୍ଚାମାଲ ଅର୍ଥ ଜିନିଷ ତିଆରି ପାଇଁ ଦରକାର ହେଉଥିବା ମୂଳ ସାମଗ୍ରୀ । ଏସିଆ ଓ ଆଫ୍ରିକାରେ ପ୍ରଚୁର କଞ୍ଚାମାଲ ମିଳୁଥିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "COMPETITION",
            odia: "ପ୍ରତିଦ୍ୱନ୍ଦିତା",
            emoji: "⚔️",
            odiaUse: "ପ୍ରତିଦ୍ୱନ୍ଦିତା ଅର୍ଥ ପରସ୍ପର ଆଗକୁ ବଢ଼ିବା ପାଇଁ ହେଉଥିବା ଲଢ଼େଇ । ଉପନିବେଶ ସ୍ଥାପନ ପାଇଁ ଇଉରୋପୀୟ ଦେଶମାନଙ୍କ ମଧ୍ୟରେ ପ୍ରତିଦ୍ୱନ୍ଦିତା ଥିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        }
    ]
};
