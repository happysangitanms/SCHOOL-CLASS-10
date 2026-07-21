
const wordData = {
    currentWord: 0,
    words: [
        {
            word: "ଅଯୋଗବାହ",
            odia: "ସ୍ୱାଧୀନ ଭାବେ ବ୍ୟବହାର ନ ହେଉଥିବା ବର୍ଣ୍ଣ",
            emoji: "🔗",
            odiaUse: "ଅଯୋଗବାହ ଅର୍ଥ ପ୍ରତ୍ୟାହାର ନିର୍ମାଣରେ ନିରପେକ୍ଷ ଓ ଶଢାଦି ପ୍ରୟୋଗରେ ସାପେକ୍ଷ ହୋଇଥିବା ବର୍ଣ୍ଣ । ଅନୁସ୍ୱାର, ବିସର୍ଗ ଓ ଅନୁନାସିକଙ୍କୁ ଅଯୋଗବାହ କୁହାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "ଅନୁସ୍ୱାର",
            odia: "ଂ (ନ୍ କିମ୍ବା ମ୍ ର ପରିବର୍ତ୍ତେ ଆସୁଥିବା ବର୍ଣ୍ଣ)",
            emoji: "⚪",
            odiaUse: "ଅନୁସ୍ୱାର କୌଣସି ସ୍ୱର ପରେ ନ୍ କିମ୍ବା ମ୍ ସ୍ଥାନରେ ଆସିଥାଏ । ଉଦାହରଣ - ଗୃହଂ ଗଛତି । ଏଠାରେ 'ଗୃହମ୍' ର ମ୍ ସ୍ଥାନରେ ପୂର୍ବବର୍ତ୍ତୀ 'ଅ' ସ୍ୱର ସହିତ ଅନୁସ୍ୱାର ପ୍ରୟୋଗ ହୋଇଛି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "ବିସର୍ଗ",
            odia: "ଃ (ସ୍ୱର ପରେ ଆସି ପୃଥକ୍ ଉଚ୍ଚାରଣ ହେଉଥିବା ବର୍ଣ୍ଣ)",
            emoji: "❕",
            odiaUse: "ବିସର୍ଗର ପ୍ରୟୋଗ କୌଣସି ସ୍ୱର ପରେ ହୋଇଥାଏ ଏବଂ ଏହାର ପୃଥକ୍ ଉଚ୍ଚାରଣ ହୁଏ । ଉଦାହରଣ- ନରଃ, ସାଧୁଃ ଇତ୍ୟାଦି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "ଅନୁନାସିକ",
            odia: "ଁ (ଚନ୍ଦ୍ରବିନ୍ଦୁ ଆକୃତିର ନାକରୁ ଉଚ୍ଚାରିତ ହେଉଥିବା ବର୍ଣ୍ଣ)",
            emoji: "👃",
            odiaUse: "ଅନୁନାସିକର ସ୍ୱରୂପ ଚନ୍ଦ୍ରବିନ୍ଦୁ ଅଟେ । ଯଥା- କସ୍ଁୟିତ୍, ସଁବତ୍ସରଃ ଇତ୍ୟାଦି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "ପ୍ରତ୍ୟାହାର",
            odia: "ବର୍ଣ୍ଣସମୂହକୁ ସଂକ୍ଷେପରେ ପ୍ରକାଶ କରିବା ପାଇଁ ବ୍ୟାକରଣରେ ବ୍ୟବହୃତ ପଦ୍ଧତି",
            emoji: "📚",
            odiaUse: "ଅଯୋଗବାହ ବର୍ଣ୍ଣମାନ ପ୍ରତ୍ୟାହାର ନିର୍ମାଣରେ ନିରପେକ୍ଷ, ଅର୍ଥାତ୍ ବ୍ୟାକରଣର ସଂକ୍ଷିପ୍ତ ବର୍ଣ୍ଣ-ସମୂହ ତିଆରି କରିବାରେ ଏମାନଙ୍କର ଆବଶ୍ୟକତା ନାହିଁ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "ନିରପେକ୍ଷ",
            odia: "କାହା ଉପରେ ନିର୍ଭର ନ କରୁଥିବା, ସ୍ୱାଧୀନ",
            emoji: "🚫🔗",
            odiaUse: "ଅଯୋଗବାହ ବର୍ଣ୍ଣମାନ ପ୍ରତ୍ୟାହାର ନିର୍ମାଣରେ ନିରପେକ୍ଷ ହୋଇଥାନ୍ତି, ଅର୍ଥାତ୍ ସେଠାରେ ଏମାନଙ୍କର କୌଣସି ଭୂମିକା ନାହିଁ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "ସାପେକ୍ଷ",
            odia: "କାହା ଉପରେ ନିର୍ଭର କରୁଥିବା",
            emoji: "🔗✔️",
            odiaUse: "ଶଢାଦି ପ୍ରୟୋଗରେ ଅଯୋଗବାହ ବର୍ଣ୍ଣମାନ ସାପେକ୍ଷ ହୋଇଥାନ୍ତି, ଅର୍ଥାତ୍ ସେଠାରେ ଏମାନଙ୍କର ପ୍ରୟୋଗ ଆବଶ୍ୟକ ହୋଇଥାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "ଚନ୍ଦ୍ରବିନ୍ଦୁ",
            odia: "ଚନ୍ଦ୍ର ଓ ବିନ୍ଦୁ ମିଶି ତିଆରି ହୋଇଥିବା ଚିହ୍ନ ( ଁ )",
            emoji: "🌙",
            odiaUse: "ଅନୁନାସିକର ସ୍ୱରୂପ ଚନ୍ଦ୍ରବିନ୍ଦୁ ଅଟେ, ଯାହା ଦେଖିବାକୁ ଅର୍ଦ୍ଧଚନ୍ଦ୍ର ଉପରେ ଏକ ବିନ୍ଦୁ ପରି ଲାଗେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "ଲୌକିକ ସଂସ୍କୃତ",
            odia: "ସାଧାରଣ ଭାବେ ଲୋକମାନଙ୍କ ଦ୍ୱାରା ବ୍ୟବହୃତ ସଂସ୍କୃତ ଭାଷା",
            emoji: "🗣️",
            odiaUse: "ଲୌକିକ ସଂସ୍କୃତରେ ସାଧାରଣ ଭାବେ ବ୍ୟବହୃତ ହେଉଥିବା ବର୍ଣ୍ଣମାନଙ୍କର ସଂଖ୍ୟା ଅଣଚାଶ (୪୯) ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "ଅଣଚାଶ",
            odia: "୪୯ ସଂଖ୍ୟା (ଏକଚାଳିଶ ପରେ ଓ ପଚାଶ ପୂର୍ବେ ଆସୁଥିବା ସଂଖ୍ୟା)",
            emoji: "🔢",
            odiaUse: "ଲୌକିକ ସଂସ୍କୃତର ମୋଟ ବର୍ଣ୍ଣ ସଂଖ୍ୟା ଅଣଚାଶ, ଯାହା ୧୩ଟି ସ୍ୱର, ୩୩ଟି ବ୍ୟଞ୍ଜନ ଓ ୩ଟି ଅଯୋଗବାହ ମିଶି ତିଆରି ହୋଇଛି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "ଯ ଓ ୟ",
            odia: "ଶବ୍ଦ ଆରମ୍ଭରେ 'ଯ' ଓ ମଧ୍ୟ/ଶେଷରେ 'ୟ' ଉଚ୍ଚାରଣ ହେବାର ନିୟମ",
            emoji: "🔤",
            odiaUse: "ଶବ୍ଦ ଆରମ୍ଭରେ 'ଯ' ରହେ, ମାତ୍ର ପଦ ମଧ୍ୟରେ ବା ଶେଷରେ 'ଯ' ଥିଲେ 'ୟ' ଉଚ୍ଚାରିତ ହୁଏ । ଯଥା- ଯୋଗ-ବିୟୋଗ, ଯମ-ନିୟମ ଇତ୍ୟାଦି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "ପୃଥକ୍",
            odia: "ଅଲଗା, ଭିନ୍ନ",
            emoji: "↔️",
            odiaUse: "ବିସର୍ଗର ପ୍ରୟୋଗ କୌଣସି ସ୍ୱର ପରେ ହୋଇଥାଏ ଏବଂ ଏହାର ପୃଥକ୍ ଉଚ୍ଚାରଣ ହୁଏ, ଅର୍ଥାତ୍ ଏହା ପୂର୍ବବର୍ତ୍ତୀ ସ୍ୱର ସହିତ ମିଶେ ନାହିଁ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        }
    ]
};
