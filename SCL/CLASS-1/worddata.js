const wordData = [
    {
        word: "NUTRITION",
        odia: "ପୋଷଣ",
        emoji: "🍽️",
        odiaUse: "ପୋଷଣ ଅର୍ଥ ଶକ୍ତି ଓ ଆବଶ୍ୟକ ଉପାଦାନ ମିଳିବା ପ୍ରକ୍ରିୟା । ଖାଦ୍ୟ ଖାଇବା ଦ୍ୱାରା ଆମ ଶରୀରରେ ପୋଷଣ ହୁଏ ।",
        audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
        word: "PHOTOSYNTHESIS",
        odia: "ଆଲୋକଶ୍ଳେଷଣ",
        emoji: "🌿",
        odiaUse: "ଆଲୋକଶ୍ଳେଷଣ ଅର୍ଥ ସୂର୍ଯ୍ୟାଲୋକ ସାହାଯ୍ୟରେ ଖାଦ୍ୟ ତିଆରି କରିବା ପ୍ରକ୍ରିୟା । ସବୁଜ ଉଦ୍ଭିଦ ଆଲୋକଶ୍ଳେଷଣ ଦ୍ୱାରା ନିଜ ଖାଦ୍ୟ ନିଜେ ତିଆରି କରେ ।",
        audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
        word: "NUTRIENTS",
        odia: "ପୋଷକ",
        emoji: "🥦",
        odiaUse: "ପୋଷକ ଅର୍ଥ ଶରୀର ପାଇଁ ଆବଶ୍ୟକ ଉପାଦାନ । ଉଦ୍ଭିଦ ପରିବେଶରୁ ପୋଷକ ଗ୍ରହଣ କରନ୍ତି ।",
        audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
        word: "OXIDATION",
        odia: "ଜାରଣ",
        emoji: "🔥",
        odiaUse: "ଜାରଣ ଅର୍ଥ ଦହନ ପ୍ରକ୍ରିୟା ଯାହା ଦ୍ୱାରା ଶକ୍ତି ବାହାରେ । ଗ୍ଲୁକୋଜର ଜାରଣ ହୋଇ ଶକ୍ତି ମିଳେ ।",
        audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
        word: "CATABOLISM",
        odia: "ଅପଚୟ",
        emoji: "💥",
        odiaUse: "ଅପଚୟ ଅର୍ଥ ଧ୍ୱଂସାତ୍ମକ ପ୍ରକ୍ରିୟା ଯେଉଁଥିରେ ଶକ୍ତି ବାହାରେ । ଶକ୍ତି ବାହାରିବା ପ୍ରକ୍ରିୟାକୁ ଅପଚୟ କୁହାଯାଏ ।",
        audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
        word: "ANABOLISM",
        odia: "ଚୟ",
        emoji: "🏗️",
        odiaUse: "ଚୟ ଅର୍ଥ ଗଠନମୂଳକ ପ୍ରକ୍ରିୟା ଯେଉଁଥିରେ ଶରୀର ପାଇଁ ଉପାଦାନ ତିଆରି ହୁଏ । ଏହାକୁ ଚୟ କୁହାଯାଏ ।",
        audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
        word: "METABOLISM",
        odia: "ଚପଚୟ",
        emoji: "⚙️",
        odiaUse: "ଚପଚୟ ଅର୍ଥ ଚୟ ଓ ଅପଚୟ ମିଶିହୋଇ ଚାଲିଥିବା ପ୍ରକ୍ରିୟା । ଚପଚୟ ଜୀବକୁ ସକ୍ରିୟ ଓ ଜୀବନ୍ତ ରଖିଥାଏ ।",
        audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
        word: "CARBOHYDRATES",
        odia: "ଶ୍ୱେତସାର",
        emoji: "🍚",
        odiaUse: "ଶ୍ୱେତସାର ଅର୍ଥ ଆମକୁ ସହଜରେ ଶକ୍ତି ଦେଉଥିବା ଖାଦ୍ୟ ଉପାଦାନ । ଭାତ ଓ ରୁଟିରେ ଅଧିକ ଶ୍ୱେତସାର ଥାଏ ।",
        audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
        word: "STARCH",
        odia: "ମଣ୍ଡ",
        emoji: "🥔",
        odiaUse: "ମଣ୍ଡ ଅର୍ଥ ଏକ ପ୍ରକାର ଶ୍ୱେତସାର । ଆଳୁରେ ଅଧିକ ମଣ୍ଡ ଥାଏ ।",
        audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
        word: "SUGAR",
        odia: "ଶର୍କରା",
        emoji: "🍬",
        odiaUse: "ଶର୍କରା ଅର୍ଥ ମିଠା ସ୍ୱାଦର ଶ୍ୱେତସାର ଉପାଦାନ । ଚିନିରେ ଶର୍କରା ଅଧିକ ଥାଏ ।",
        audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
        word: "SUCROSE",
        odia: "ସୁକ୍ରୋଜ",
        emoji: "🍯",
        odiaUse: "ସୁକ୍ରୋଜ ଅର୍ଥ ଚିନି ଓ ଗୁଡ଼ରେ ମିଳୁଥିବା ଶର୍କରା । ଗୁଡ଼ରେ ସୁକ୍ରୋଜ ଅଧିକ ଥାଏ ।",
        audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
        word: "GLUCOSE",
        odia: "ଗ୍ଲୁକୋଜ",
        emoji: "🍇",
        odiaUse: "ଗ୍ଲୁକୋଜ ଅର୍ଥ ଫଳରସରେ ମିଳୁଥିବା ଏକ ସରଳ ଶ୍ୱେତସାର । ଗ୍ଲୁକୋଜର ଜାରଣ ହୋଇ ଶକ୍ତି ମିଳେ ।",
        audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
        word: "CELLULAR RESPIRATION",
        odia: "କୋଷୀୟ ଶ୍ୱସନ",
        emoji: "🫁",
        odiaUse: "କୋଷୀୟ ଶ୍ୱସନ ଅର୍ଥ କୋଷ ଭିତରେ ହେଉଥିବା ଶ୍ୱାସକ୍ରିୟା ଯାହା ଦ୍ୱାରା ଶକ୍ତି ମିଳେ । କୋଷୀୟ ଶ୍ୱସନ ସମୟରେ ଗ୍ଲୁକୋଜର ଜାରଣ ହୁଏ ।",
        audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
        word: "PROTEINS",
        odia: "ପୁଷ୍ଟିସାର",
        emoji: "🥚",
        odiaUse: "ପୁଷ୍ଟିସାର ଅର୍ଥ ଶରୀରର ବୃଦ୍ଧି ଓ ନୂଆ କୋଷ ତିଆରି ପାଇଁ ଦରକାରୀ ଉପାଦାନ । ଡାଲିରୁ ପୁଷ୍ଟିସାର ମିଳେ ।",
        audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
        word: "AMINO ACID",
        odia: "ଏମିନୋ ଅମ୍ଳ",
        emoji: "🧬",
        odiaUse: "ଏମିନୋ ଅମ୍ଳ ଅର୍ଥ ପ୍ରୋଟିନ୍ ତିଆରି ହୋଇଥିବା ଛୋଟ ଛୋଟ ଉପାଦାନ । ପରିପାକ ପରେ ପ୍ରୋଟିନ୍ ଏମିନୋ ଅମ୍ଳରେ ପରିଣତ ହୁଏ ।",
        audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
        word: "FATS",
        odia: "ସ୍ନେହସାର",
        emoji: "🧈",
        odiaUse: "ସ୍ନେହସାର ଅର୍ଥ ଚର୍ବି ଭାବରେ ଶରୀରରେ ସଞ୍ଚୟ ହେଉଥିବା ଉପାଦାନ । ଘିଅ ଓ ତେଲରେ ସ୍ନେହସାର ଥାଏ ।",
        audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
        word: "CELL MEMBRANE",
        odia: "କୋଷଝିଲ୍ଲି",
        emoji: "🧫",
        odiaUse: "କୋଷଝିଲ୍ଲି ଅର୍ଥ କୋଷର ବାହାର ଆବରଣ । କୋଷଝିଲ୍ଲି ତିଆରିରେ ଲିପିଡ୍‌ର ମୁଖ୍ୟ ଭୂମିକା ରହିଛି ।",
        audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
        word: "MINERALS",
        odia: "ଧାତୁସାର",
        emoji: "⛏️",
        odiaUse: "ଧାତୁସାର ଅର୍ଥ ଶରୀର ଗଠନ ପାଇଁ ଦରକାରୀ ଲୌହ, କ୍ୟାଲସିୟମ୍ ଭଳି ଉପାଦାନ । ଦାନ୍ତ ଓ ହାଡ଼ ଗଠନ ପାଇଁ ଧାତୁସାର ଆବଶ୍ୟକ ।",
        audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
        word: "CALCIUM",
        odia: "କ୍ୟାଲସିୟମ୍",
        emoji: "🦴",
        odiaUse: "କ୍ୟାଲସିୟମ୍ ଅର୍ଥ ଦାନ୍ତ ଓ ହାଡ଼ ଗଠନ ପାଇଁ ଦରକାରୀ ଏକ ଧାତୁସାର । ଦାନ୍ତ ଓ ହାଡ଼ ଗଠନ ପାଇଁ କ୍ୟାଲସିୟମ୍ ଆବଶ୍ୟକ ।",
        audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
        word: "IRON",
        odia: "ଲୌହ",
        emoji: "🩸",
        odiaUse: "ଲୌହ ଅର୍ଥ ହିମୋଗ୍ଲୋବିନ୍ ତିଆରି ପାଇଁ ଦରକାରୀ ଏକ ଧାତୁସାର । ଲୋହିତ ରକ୍ତ କଣିକାର ହିମୋଗ୍ଲୋବିନ୍ ତିଆରି ପାଇଁ ଲୌହ ଦରକାର ।",
        audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
        word: "IONIC BALANCE",
        odia: "ଆୟନ ସନ୍ତୁଳନ",
        emoji: "⚖️",
        odiaUse: "ଆୟନ ସନ୍ତୁଳନ ଅର୍ଥ ଶରୀରର ଉପାଦାନଗୁଡ଼ିକ ମଧ୍ୟରେ ସନ୍ତୁଳନ ରହିବା । ଆୟନ ସନ୍ତୁଳନ ରଖିବାରେ ଧାତୁସାରର ମୁଖ୍ୟ ଭୂମିକା ରହିଛି ।",
        audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
        word: "VITAMINS",
        odia: "ଭିଟାମିନ୍",
        emoji: "🍊",
        odiaUse: "ଭିଟାମିନ୍ ଅର୍ଥ ଏନଜାଇମ୍ ପ୍ରକ୍ରିୟାକୁ ଠିକ୍ ଭାବରେ ଚଳାଇବାରେ ସାହାଯ୍ୟ କରୁଥିବା ଉପାଦାନ । ଭିଟାମିନ୍‌ର ଅଭାବରୁ ବିଭିନ୍ନ ରୋଗ ହୋଇଥାଏ ।",
        audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
        word: "WATER",
        odia: "ଜଳ",
        emoji: "💧",
        odiaUse: "ଜଳ ଅର୍ଥ ଶରୀରର କୋଷରସର ମୁଖ୍ୟ ଅଂଶ । କୋଷର ସ୍ଥିତି ପାଇଁ ଜଳ ବହୁତ ଆବଶ୍ୟକ ।",
        audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
        word: "CYTOPLASM",
        odia: "କୋଷଜୀବକ",
        emoji: "🔬",
        odiaUse: "କୋଷଜୀବକ ଅର୍ଥ କୋଷ ଭିତରର ତରଳ ପଦାର୍ଥ ଯେଉଁଥିରେ ଅଧିକାଂଶ ଜଳ ଥାଏ । କୋଷଜୀବକର ପ୍ରାୟ ୭୦-୯୦ ଭାଗ ଜଳ ଅଟେ ।",
        audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    }
];