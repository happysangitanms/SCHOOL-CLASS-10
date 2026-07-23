const wordData = {
    currentWord: 0,
    words: [
        {
            word: "RESOURCE",
            odia: "ସମ୍ବଳ",
            emoji: "🌍",
            odiaUse: "ସମ୍ବଳ ଅର୍ଥ ମନୁଷ୍ୟର କାମରେ ଲାଗୁଥିବା ଉପଯୋଗୀ ବସ୍ତୁ । ପାଣି, ଜଙ୍ଗଲ ଓ ଖଣିଜ ସମ୍ବଳ ଅଟେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "NATURAL ENVIRONMENT",
            odia: "ପ୍ରାକୃତିକ ପରିବେଶ",
            emoji: "🌳",
            odiaUse: "ପ୍ରାକୃତିକ ପରିବେଶ ଅର୍ଥ ପ୍ରକୃତିରେ ଥିବା ସବୁକିଛି । ମନୁଷ୍ୟ ପ୍ରାକୃତିକ ପରିବେଶ ଉପରେ ନିର୍ଭର କରେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "DEPEND",
            odia: "ନିର୍ଭର କରିବା",
            emoji: "🤝",
            odiaUse: "ନିର୍ଭର କରିବା ଅର୍ଥ ଅନ୍ୟ ଉପରେ ଭରସା କରିବା । ମନୁଷ୍ୟ ବଞ୍ଚିବା ପାଇଁ ପ୍ରକୃତି ଉପରେ ନିର୍ଭର କରେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "DIRECT",
            odia: "ସିଧା",
            emoji: "➡️",
            odiaUse: "ସିଧା ଅର୍ଥ ସିଧାସଳଖ ଭାବରେ । ମନୁଷ୍ୟ କେତେକ ପ୍ରାକୃତିକ ବସ୍ତୁକୁ ସିଧା ବ୍ୟବହାର କରେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "INDIRECT",
            odia: "ପରୋକ୍ଷ",
            emoji: "🔄",
            odiaUse: "ପରୋକ୍ଷ ଅର୍ଥ ପରୋକ୍ଷ ଉପାୟରେ । କେତେକ ବସ୍ତୁକୁ ପରୋକ୍ଷ ଭାବରେ ବ୍ୟବହାର କରାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "DAILY NEED",
            odia: "ଦୈନନ୍ଦିନ ଆବଶ୍ୟକତା",
            emoji: "🏠",
            odiaUse: "ଦୈନନ୍ଦିନ ଆବଶ୍ୟକତା ଅର୍ଥ ପ୍ରତିଦିନର ଦରକାରୀ ଜିନିଷ । ମନୁଷ୍ୟ ପ୍ରକୃତିରୁ ନିଜର ଦୈନନ୍ଦିନ ଆବଶ୍ୟକତା ପୂରଣ କରେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "LIFESTYLE",
            odia: "ଜୀବନଶୈଳୀ",
            emoji: "😊",
            odiaUse: "ଜୀବନଶୈଳୀ ଅର୍ଥ ଜୀବନ ବଞ୍ଚିବାର ପଦ୍ଧତି । ଭଲ ସମ୍ବଳ ଦ୍ୱାରା ଜୀବନଶୈଳୀ ଉନ୍ନତ ହୁଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "QUALITY",
            odia: "ଗୁଣ",
            emoji: "⭐",
            odiaUse: "ଗୁଣ ଅର୍ଥ କୌଣସି ବସ୍ତୁର ଭଲ ଲକ୍ଷଣ । ବସ୍ତୁର ଗୁଣ ବଦଳାଇ ନୂଆ ସାମଗ୍ରୀ ତିଆରି କରାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "CHANGE",
            odia: "ପରିବର୍ତ୍ତନ",
            emoji: "🔁",
            odiaUse: "ପରିବର୍ତ୍ତନ ଅର୍ଥ ବଦଳ କରିବା । ପ୍ରାକୃତିକ ବସ୍ତୁରେ ପରିବର୍ତ୍ତନ କରି ନୂଆ ସାମଗ୍ରୀ ତିଆରି କରାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "WOOD",
            odia: "କାଠ",
            emoji: "🪵",
            odiaUse: "କାଠ ଅର୍ଥ ଗଛର କାଠ । କାଠରୁ ବିଭିନ୍ନ କାଠ ଜିନିଷ ତିଆରି କରାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "COTTON",
            odia: "ତୁଳା",
            emoji: "☁️",
            odiaUse: "ତୁଳା ଅର୍ଥ କପା । ତୁଳାରୁ ସୂତା ତିଆରି କରାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "THREAD",
            odia: "ସୂତା",
            emoji: "🧵",
            odiaUse: "ସୂତା ଅର୍ଥ ଲୁଗା ବୁଣିବାର ସୂକ୍ଷ୍ମ ତନ୍ତୁ । ସୂତାରୁ ଲୁଗା ତିଆରି ହୁଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "MINERAL",
            odia: "ଖଣିଜ ପଦାର୍ଥ",
            emoji: "⛏️",
            odiaUse: "ଖଣିଜ ପଦାର୍ଥ ଅର୍ଥ ଭୂମି ଭିତରେ ମିଳୁଥିବା ପଦାର୍ଥ । ଖଣିଜ ପଦାର୍ଥରୁ ଯନ୍ତ୍ର ତିଆରି କରାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "MACHINE",
            odia: "ଯନ୍ତ୍ର",
            emoji: "⚙️",
            odiaUse: "ଯନ୍ତ୍ର ଅର୍ଥ କାମ କରିବାର ଉପକରଣ । ଖଣିଜ ପଦାର୍ଥରୁ ବିଭିନ୍ନ ଯନ୍ତ୍ର ତିଆରି ହୁଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "VALUABLE",
            odia: "ମୂଲ୍ୟବାନ",
            emoji: "💎",
            odiaUse: "ମୂଲ୍ୟବାନ ଅର୍ଥ ଅଧିକ ଦାମ ବା ଉପକାରୀ । ତିଆରି ହୋଇଥିବା ସାମଗ୍ରୀ ଅଧିକ ମୂଲ୍ୟବାନ ହୁଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "BIOLOGICAL",
            odia: "ଜୈବ",
            emoji: "🌱",
            odiaUse: "ଜୈବ ଅର୍ଥ ଜୀବ ସହ ସମ୍ପର୍କିତ । ଗଛ ଓ ପଶୁ ଜୈବ ପଦାର୍ଥ ଅଟନ୍ତି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "NON-BIOLOGICAL",
            odia: "ଅଜୈବ",
            emoji: "🪨",
            odiaUse: "ଅଜୈବ ଅର୍ଥ ଜୀବ ନୁହେଁ । ପଥର ଓ ପାଣି ଅଜୈବ ପଦାର୍ଥ ଅଟେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "ENERGY",
            odia: "ଶକ୍ତି",
            emoji: "⚡",
            odiaUse: "ଶକ୍ତି ଅର୍ଥ କାମ କରିବାର କ୍ଷମତା । ବିଦ୍ୟୁତ ଏକ ପ୍ରକାର ଶକ୍ତି ଅଟେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "TECHNOLOGY",
            odia: "ପ୍ରଯୁକ୍ତି",
            emoji: "💻",
            odiaUse: "ପ୍ରଯୁକ୍ତି ଅର୍ଥ ବିଜ୍ଞାନର ବ୍ୟବହାର । ପ୍ରଯୁକ୍ତି ଦ୍ୱାରା ସମ୍ବଳର ବ୍ୟବହାର ସମ୍ଭବ ହୁଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "ECONOMICALLY",
            odia: "ଆର୍ଥିକ ଭାବେ",
            emoji: "💰",
            odiaUse: "ଆର୍ଥିକ ଭାବେ ଅର୍ଥ ଟଙ୍କା ଦୃଷ୍ଟିରୁ । କୌଣସି ବସ୍ତୁ ଆର୍ଥିକ ଭାବେ ସମ୍ଭବ ହେଲେ ସମ୍ବଳ ହୁଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "ACCEPTABLE",
            odia: "ଗ୍ରହଣଯୋଗ୍ୟ",
            emoji: "✅",
            odiaUse: "ଗ୍ରହଣଯୋଗ୍ୟ ଅର୍ଥ ସମସ୍ତେ ମାନିପାରିବା । ସମାଜ ଦ୍ୱାରା ଗ୍ରହଣଯୋଗ୍ୟ ବସ୍ତୁ ସମ୍ବଳ ହୋଇପାରେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "UNKNOWN",
            odia: "ଅଜଣା",
            emoji: "❓",
            odiaUse: "ଅଜଣା ଅର୍ଥ ଯାହା ବିଷୟରେ ଜଣା ନାହିଁ । ଅଜଣା ବସ୍ତୁକୁ ବ୍ୟବହାର ନକଲେ ସମ୍ବଳ କୁହାଯାଏ ନାହିଁ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "DEVELOPMENT",
            odia: "ବିକାଶ",
            emoji: "📈",
            odiaUse: "ବିକାଶ ଅର୍ଥ ଉନ୍ନତି । ସମ୍ବଳର ବିକାଶ ଦେଶର ଆର୍ଥିକ ବିକାଶ କରେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "ECONOMIC CONDITION",
            odia: "ଆର୍ଥିକ ସ୍ଥିତି",
            emoji: "💹",
            odiaUse: "ଆର୍ଥିକ ସ୍ଥିତି ଅର୍ଥ ଟଙ୍କା ପଇସାର ଅବସ୍ଥା । ସମ୍ବଳ ବଢ଼ିଲେ ଦେଶର ଆର୍ଥିକ ସ୍ଥିତି ଭଲ ହୁଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "TRANSFORMATION",
            odia: "ରୂପାନ୍ତର",
            emoji: "♻️",
            odiaUse: "ରୂପାନ୍ତର ଅର୍ଥ ଗୋଟିଏ ରୂପରୁ ଅନ୍ୟ ରୂପକୁ ବଦଳାଇବା । ସମ୍ବଳକୁ ରୂପାନ୍ତର କରି ବ୍ୟବହାର କରାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "INTERDEPENDENCE",
            odia: "ପରସ୍ପର ନିର୍ଭରତା",
            emoji: "🔗",
            odiaUse: "ପରସ୍ପର ନିର୍ଭରତା ଅର୍ଥ ପରସ୍ପର ଉପରେ ନିର୍ଭର କରିବା । ପ୍ରକୃତି, ମନୁଷ୍ୟ ଓ ପ୍ରଯୁକ୍ତି ପରସ୍ପର ନିର୍ଭରଶୀଳ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "INSTITUTION",
            odia: "ଅନୁଷ୍ଠାନ",
            emoji: "🏢",
            odiaUse: "ଅନୁଷ୍ଠାନ ଅର୍ଥ ସଂସ୍ଥା । ସମ୍ବଳ ବ୍ୟବହାରରେ ଅନୁଷ୍ଠାନର ମଧ୍ୟ ଭୂମିକା ରହିଛି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "CREATOR",
            odia: "ସୃଷ୍ଟିକର୍ତ୍ତା",
            emoji: "👷",
            odiaUse: "ସୃଷ୍ଟିକର୍ତ୍ତା ଅର୍ଥ ତିଆରି କରୁଥିବା ବ୍ୟକ୍ତି । ମନୁଷ୍ୟ ସମ୍ବଳର ସୃଷ୍ଟିକର୍ତ୍ତା ଅଟେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "USER",
            odia: "ବ୍ୟବହାରକାରୀ",
            emoji: "🙋",
            odiaUse: "ବ୍ୟବହାରକାରୀ ଅର୍ଥ ବ୍ୟବହାର କରୁଥିବା ବ୍ୟକ୍ତି । ମନୁଷ୍ୟ ସମ୍ବଳର ବ୍ୟବହାରକାରୀ ଅଟେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "DESTROYER",
            odia: "କ୍ଷୟକାରୀ",
            emoji: "🗑️",
            odiaUse: "କ୍ଷୟକାରୀ ଅର୍ଥ ନଷ୍ଟ କରୁଥିବା ବ୍ୟକ୍ତି । ମନୁଷ୍ୟ ସମ୍ବଳର କ୍ଷୟକାରୀ ମଧ୍ୟ ହୋଇପାରେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "PRODUCTION",
            odia: "ଉତ୍ପାଦନ",
            emoji: "🏭",
            odiaUse: "ଉତ୍ପାଦନ ଅର୍ଥ ତିଆରି କରିବା । ମନୁଷ୍ୟ ସମ୍ବଳର ଉତ୍ପାଦନ କରେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "DISTRIBUTION",
            odia: "ବଣ୍ଟନ",
            emoji: "📦",
            odiaUse: "ବଣ୍ଟନ ଅର୍ଥ ଭାଗ କରି ଦେବା । ମନୁଷ୍ୟ ସମ୍ବଳର ବଣ୍ଟନ କରେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "HUMAN RESOURCE",
            odia: "ମାନବ ସମ୍ବଳ",
            emoji: "👨‍👩‍👧",
            odiaUse: "ମାନବ ସମ୍ବଳ ଅର୍ଥ ମନୁଷ୍ୟ ନିଜେ ଏକ ସମ୍ବଳ । ମନୁଷ୍ୟକୁ ମାନବ ସମ୍ବଳ କୁହାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "POPULATION",
            odia: "ଜନସଂଖ୍ୟା",
            emoji: "👥",
            odiaUse: "ଜନସଂଖ୍ୟା ଅର୍ଥ ଲୋକଙ୍କ ସଂଖ୍ୟା । ଦେଶର ବିକାଶ ଜନସଂଖ୍ୟା ଓ ସମ୍ବଳ ଉପରେ ନିର୍ଭର କରେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "CIVILIZATION",
            odia: "ସଭ୍ୟତା",
            emoji: "🏛️",
            odiaUse: "ସଭ୍ୟତା ଅର୍ଥ ଉନ୍ନତ ଜୀବନ ପଦ୍ଧତି । ଦେଶର ସଭ୍ୟତା ସମ୍ବଳ ଉପରେ ନିର୍ଭର କରେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "UTILITY",
            odia: "ଉପଯୋଗିତା",
            emoji: "🛠️",
            odiaUse: "ଉପଯୋଗିତା ଅର୍ଥ କାମରେ ଲାଗିବାର ଗୁଣ । ସମ୍ବଳର ପ୍ରଥମ ବିଶେଷତା ହେଉଛି ଉପଯୋଗିତା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "FUNCTIONALITY",
            odia: "କାର୍ଯ୍ୟଦକ୍ଷତା",
            emoji: "⚙️",
            odiaUse: "କାର୍ଯ୍ୟଦକ୍ଷତା ଅର୍ଥ ଭଲ ଭାବେ କାମ କରିବାର କ୍ଷମତା । ସମ୍ବଳର ଏକ ବିଶେଷତା କାର୍ଯ୍ୟଦକ୍ଷତା ଅଟେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "AVAILABILITY",
            odia: "ସୁଲଭତା",
            emoji: "📍",
            odiaUse: "ସୁଲଭତା ଅର୍ଥ ସହଜରେ ମିଳିବା । ସମ୍ବଳ ସହଜରେ ମିଳିବା ଦରକାର ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "CHANGEABILITY",
            odia: "ପରିବର୍ତ୍ତନଶୀଳତା",
            emoji: "🔄",
            odiaUse: "ପରିବର୍ତ୍ତନଶୀଳତା ଅର୍ଥ ଆବଶ୍ୟକତା ଅନୁସାରେ ବଦଳାଇ ପାରିବାର ଗୁଣ । ସମ୍ବଳର ଏକ ବିଶେଷତା ପରିବର୍ତ୍ତନଶୀଳତା ଅଟେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "SCIENTIFIC METHOD",
            odia: "ବୈଜ୍ଞାନିକ ଉପାୟ",
            emoji: "🧪",
            odiaUse: "ବୈଜ୍ଞାନିକ ଉପାୟ ଅର୍ଥ ବିଜ୍ଞାନ ଆଧାରିତ ପଦ୍ଧତି । ବୈଜ୍ଞାନିକ ଉପାୟରେ ସମ୍ବଳକୁ ପରିବର୍ତ୍ତନ କରାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        }
    ]
};