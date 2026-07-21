const wordData = {
    currentWord: 0,
    words: [
        {
            word: "TERM",
            odia: "ପଦ",
            emoji: "📝",
            odiaUse: "ପଦ ଅର୍ଥ କୌଣସି ବିଷୟରେ ବ୍ୟବହୃତ ହେଉଥିବା ନିର୍ଦ୍ଦିଷ୍ଟ ଶବ୍ଦ । ପ୍ରତ୍ୟେକ ପାଠରେ କେତେକ ବିଶେଷ ପଦ ଗୋଟିଏ ନିର୍ଦ୍ଦିଷ୍ଟ ଅର୍ଥରେ ବ୍ୟବହାର ହୁଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "UNDEFINED TERM",
            odia: "ସଂଜ୍ଞାବିହୀନ ପଦ",
            emoji: "❓",
            odiaUse: "ସଂଜ୍ଞାବିହୀନ ପଦ ଅର୍ଥ ଯାହାର ପୂର୍ବରୁ ସଂଜ୍ଞା ଦିଆଯାଇ ନାହିଁ ଏପରି ପଦ । ବିନ୍ଦୁ, ରେଖା ଓ ସମତଳ ଏହି ତିନୋଟି ମୌଳିକ ପଦ ସଂଜ୍ଞାବିହୀନ ପଦ ଭାବେ ବ୍ୟବହାର ହୁଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "DEFINED TERM",
            odia: "ସଂଜ୍ଞାକୃତ ପଦ",
            emoji: "✅",
            odiaUse: "ସଂଜ୍ଞାକୃତ ପଦ ଅର୍ଥ ଯାହାର ଅର୍ଥ ପୂର୍ବରୁ ଜଣାଥିବା ପଦଗୁଡ଼ିକ ମାଧ୍ୟମରେ ନିରୂପିତ ହୋଇଥାଏ । ଅଧିକାଂଶ ପଦ ସଂଜ୍ଞାକୃତ ପଦ ଭାବେ ବ୍ୟବହାର ହୁଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "DEFINITION",
            odia: "ସଂଜ୍ଞା",
            emoji: "📖",
            odiaUse: "ସଂଜ୍ଞା ଅର୍ଥ ପୂର୍ବ ଜଣା ପଦଗୁଡ଼ିକ ସାହାଯ୍ୟରେ କୌଣସି ପଦର ଅର୍ଥ ବିଚାର କରି ନିର୍ଦ୍ଦିଷ୍ଟ ଅର୍ଥକୁ ଗ୍ରହଣ କରିବା । ପାଠ ଦ୍ୱାରା ନିର୍ଦ୍ଦିଷ୍ଟ ଅର୍ଥକୁ ଆମେ ପଦର ସଂଜ୍ଞା କହୁ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "FUNDAMENTAL TERM (PRIMITIVE TERM)",
            odia: "ମୌଳିକ ପଦ",
            emoji: "🧱",
            odiaUse: "ମୌଳିକ ପଦ ଅର୍ଥ ଯାହା ଆଉ ଅଧିକ ସରଳ ପଦ ମାଧ୍ୟମରେ ବ୍ୟାଖ୍ୟା କରାଯାଇ ପାରେ ନାହିଁ, ଏହାକୁ ଜ୍ଞାପିତ ପଦ ବା ମୌଳିକ ପଦ ମଧ୍ୟ କୁହାଯାଏ । ବିନ୍ଦୁ, ରେଖା ଓ ସମତଳ ହେଉଛି ମୌଳିକ ପଦର ଉଦାହରଣ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "POINT",
            odia: "ବିନ୍ଦୁ",
            emoji: "📍",
            odiaUse: "ବିନ୍ଦୁ ଅର୍ଥ ଅବସ୍ଥାନ ମାତ୍ର ପ୍ରକାଶ କରୁଥିବା ଏକ ମୌଳିକ ପଦ, ଯାହାର କୌଣସି ଆକାର ବା ଆୟତନ ନଥାଏ । ରେଖା P ବିନ୍ଦୁ ଦେଇ ଯାଇଥିଲେ P ∈ L ଲେଖାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "LINE",
            odia: "ରେଖା",
            emoji: "➖",
            odiaUse: "ରେଖା ଅର୍ଥ ଅନେକ ବିନ୍ଦୁର ସମାହାର ବା ସେଟ୍, ଯାହା ଉଭୟ ଦିଗକୁ ଅସୀମ ଭାବେ ବିସ୍ତାରିତ ହୋଇଥାଏ । ଦୁଇଟି ପୃଥକ୍ ବିନ୍ଦୁ ମଧ୍ୟ ଦେଇ କେବଳ ଏକ ମାତ୍ର ସରଳରେଖା ଅବସ୍ଥିତ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "PLANE",
            odia: "ସମତଳ",
            emoji: "🔲",
            odiaUse: "ସମତଳ ଅର୍ଥ ଚାରିଆଡ଼େ ବିସ୍ତାରିତ ହୋଇଥିବା ଏକ ସପାଟ ପୃଷ୍ଠ, ଯାହା ଏକ ମୌଳିକ ପଦ ଭାବେ ବ୍ୟବହୃତ ହୁଏ । ବିନ୍ଦୁ, ରେଖା ଓ ସମତଳ ହେଉଛି ଜ୍ୟାମିତିର ତିନୋଟି ମୌଳିକ ପଦ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "AXIOM",
            odia: "ସ୍ୱୀକାର୍ଯ୍ୟ",
            emoji: "📜",
            odiaUse: "ସ୍ୱୀକାର୍ଯ୍ୟ ଅର୍ଥ ପ୍ରମାଣ ବିନା ସତ୍ୟ ବୋଲି ମାନି ନିଆଯାଇଥିବା ଉକ୍ତି । ମୌଳିକ ପଦ ପରି ଏହି ଉକ୍ତିଗୁଡ଼ିକୁ ମଧ୍ୟ କୌଣସି ପ୍ରମାଣ ବିନା ସ୍ୱୀକାର କରାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "COLLECTION (SET)",
            odia: "ସଂଗ୍ରହ",
            emoji: "📦",
            odiaUse: "ସଂଗ୍ରହ ଅର୍ଥ ଏକାଠି ରହିଥିବା ବସ୍ତୁ ବା ବିନ୍ଦୁଗୁଡ଼ିକର ସମାହାର । ରେଖା ମଧ୍ୟ ଅନେକ ବିନ୍ଦୁର ଏକ ସଂଗ୍ରହ ଭାବେ ବିଚାର କରାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "COLLINEAR POINTS",
            odia: "ଏକରେଖୀୟ ବିନ୍ଦୁ",
            emoji: "📏",
            odiaUse: "ଏକରେଖୀୟ ବିନ୍ଦୁ ଅର୍ଥ ତିନି ବା ତାହାଠାରୁ ଅଧିକ ବିନ୍ଦୁ ଯଦି ଏକ ସରଳରେଖାରେ ଅବସ୍ଥିତ ହୁଅନ୍ତି, ତେବେ ସେମାନଙ୍କୁ ଏକରେଖା ବିନ୍ଦୁ କୁହାଯାଏ । ତିନି ବିନ୍ଦୁ ଗୋଟିଏ ରେଖା ଉପରେ ରହିଲେ ସେମାନେ ଏକରେଖୀୟ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "NON-COLLINEAR POINTS",
            odia: "ନୈକରେଖୀୟ ବିନ୍ଦୁ",
            emoji: "🔀",
            odiaUse: "ନୈକରେଖୀୟ ବିନ୍ଦୁ ଅର୍ଥ ଯେଉଁ ବିନ୍ଦୁଗୁଡ଼ିକ ଏକ ସରଳରେଖାରେ ଅବସ୍ଥିତ ନୁହଁନ୍ତି, ସେମାନଙ୍କୁ ଅଣସରଳରେଖୀୟ ବିନ୍ଦୁ ମଧ୍ୟ କୁହାଯାଏ । ତିନି ବିନ୍ଦୁ ଗୋଟିଏ ରେଖା ଉପରେ ନ ରହିଲେ ସେମାନେ ନୈକରେଖୀୟ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "INTERSECTION",
            odia: "ଛେଦ",
            emoji: "✂️",
            odiaUse: "ଛେଦ ଅର୍ଥ ଦୁଇଟି ସେଟ୍ ବା ରେଖାରେ ଥିବା ସାଧାରଣ ଉପାଦାନଗୁଡ଼ିକର ସେଟ୍ । A ∩ B ଅର୍ଥ A ଓ B ର ସାଧାରଣ ଉପାଦାନ ଥିବା ସେଟ୍ ଅଟେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "POINT OF INTERSECTION",
            odia: "ଛେଦବିନ୍ଦୁ",
            emoji: "❎",
            odiaUse: "ଛେଦବିନ୍ଦୁ ଅର୍ଥ ଦୁଇଟି ରେଖା ମିଶିବା ସ୍ଥାନରେ ରହିଥିବା ସାଧାରଣ ବିନ୍ଦୁ । ଯଦି L₁ ∩ L₂ ≠ φ, ତେବେ ଏହି ସାଧାରଣ ବିନ୍ଦୁକୁ ଛେଦବିନ୍ଦୁ କୁହାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "NON-INTERSECTING LINES",
            odia: "ଅଣଛେଦୀ ରେଖା",
            emoji: "↔️",
            odiaUse: "ଅଣଛେଦୀ ରେଖା ଅର୍ଥ ଦୁଇଟି ରେଖା ଯାହାର କୌଣସି ସାଧାରଣ ବିନ୍ଦୁ ବା ଛେଦବିନ୍ଦୁ ନଥାଏ । L₁ ∩ L₂ = φ ହେଲେ ସେହି ରେଖାଦ୍ୱୟକୁ ଅଣଛେଦୀ ରେଖା କୁହାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "THEOREM",
            odia: "ଉପପାଦ୍ୟ",
            emoji: "🧮",
            odiaUse: "ଉପପାଦ୍ୟ ଅର୍ଥ ଯୁକ୍ତି ଓ ପ୍ରମାଣ ମାଧ୍ୟମରେ ସ୍ୱୀକାର୍ଯ୍ୟଗୁଡ଼ିକ ଠାରୁ ପ୍ରତିପାଦିତ ହେଉଥିବା ଉକ୍ତି । ଏହି ଉକ୍ତିଗୁଡ଼ିକୁ ପ୍ରମାଣ କରାଗଲେ ହିଁ ସେମାନଙ୍କୁ ଉପପାଦ୍ୟ ବୋଲି ଗ୍ରହଣ କରାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "PROOF",
            odia: "ପ୍ରମାଣ",
            emoji: "🔍",
            odiaUse: "ପ୍ରମାଣ ଅର୍ଥ ସ୍ୱୀକାର୍ଯ୍ୟ ଓ ଯୁକ୍ତି ବ୍ୟବହାର କରି ଏକ ଉକ୍ତିର ସତ୍ୟତା ପ୍ରତିପାଦନ କରିବା । ଉପପାଦ୍ୟକୁ ପ୍ରମାଣ ବିନା ଉପାଦେୟ ବୋଲି ଗ୍ରହଣ କରାଯାଏ ନାହିଁ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "RECAPITULATION",
            odia: "ପୁନରାବୃତ୍ତି",
            emoji: "🔄",
            odiaUse: "ପୁନରାବୃତ୍ତି ଅର୍ଥ ପୂର୍ବରୁ ପଢ଼ିଥିବା ବିଷୟକୁ ପୁଣି ଥରେ ମନେ ପକାଇବା ବା ଆଲୋଚନା କରିବା । ମୌଳିକ ଅବବୋଧ ପାଇଁ ପୁନରାବୃତ୍ତି ଏକ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ପଦକ୍ଷେପ ଅଟେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "LOGICAL (GRAMMATICAL) MEANING",
            odia: "ଭାଷାଗତ ଅର୍ଥ",
            emoji: "💬",
            odiaUse: "ଭାଷାଗତ ଅର୍ଥ ଅର୍ଥ ଦୈନନ୍ଦିନ ଭାଷାରେ ବ୍ୟବହୃତ ହେଉଥିବା ଅର୍ଥ, ଯାହା ଗାଣିତିକ ସଂଜ୍ଞାଠାରୁ ଭିନ୍ନ ହୋଇପାରେ । ପାଠ ଦ୍ୱାରା ନିର୍ଦ୍ଦିଷ୍ଟ ଅର୍ଥକୁ ହିଁ ଗ୍ରହଣ କରିବା ଉଚିତ, ଭାଷାଗତ ଅର୍ଥକୁ ନୁହେଁ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        }
    ]
};
