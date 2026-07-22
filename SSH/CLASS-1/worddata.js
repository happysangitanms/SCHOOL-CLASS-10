const wordData = {
  currentWord: 0,
  words: [
    {
      word: "MAHATMA",
      odia: "ମହାତ୍ମା",
      emoji: "🙏",
      odiaUse: "ମହାତ୍ମା ଅର୍ଥ ମହାନ ଆତ୍ମା ବା ମହାନ ବ୍ୟକ୍ତି । ମୋହନଦାସ କରମଚାନ୍ଦ ଗାନ୍ଧୀଙ୍କୁ ମହାତ୍ମା ଗାନ୍ଧୀ ବୋଲି କୁହାଯାଏ ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "HISTORY",
      odia: "ଇତିହାସ",
      emoji: "📜",
      odiaUse: "ଇତିହାସ ଅର୍ଥ ଅତୀତର ଘଟଣାର ବିବରଣୀ । ଗାନ୍ଧିଜୀଙ୍କ ନାମ ପୃଥିବୀର ଇତିହାସରେ ଲେଖାଯାଇଛି ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "FATHER OF THE NATION",
      odia: "ଜାତିର ପିତା",
      emoji: "🇮🇳",
      odiaUse: "ଜାତିର ପିତା ଅର୍ଥ ଦେଶର ସମ୍ମାନିତ ପିତା । ମହାତ୍ମା ଗାନ୍ଧୀ ଭାରତର ଜାତିର ପିତା ଭାବେ ପରିଚିତ ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "LEADER",
      odia: "ଜନନେତା",
      emoji: "🧑‍💼",
      odiaUse: "ଜନନେତା ଅର୍ଥ ଲୋକଙ୍କର ନେତା । ଗାନ୍ଧିଜୀ ସାରା ପୃଥିବୀରେ ଜଣେ ଜନନେତା ଭାବେ ସମ୍ମାନ ପାଇଥିଲେ ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "FREEDOM STRUGGLE",
      odia: "ସ୍ୱାଧୀନତା ସଂଗ୍ରାମ",
      emoji: "✊",
      odiaUse: "ସ୍ୱାଧୀନତା ସଂଗ୍ରାମ ଅର୍ଥ ସ୍ୱାଧୀନତା ପାଇଁ ଲଢ଼େଇ । ଗାନ୍ଧିଜୀ ସ୍ୱାଧୀନତା ସଂଗ୍ରାମରେ ନୂଆ ଅଧ୍ୟାୟ ଆରମ୍ଭ କରିଥିଲେ ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "BARRISTER",
      odia: "ବାରିଷ୍ଟର",
      emoji: "⚖️",
      odiaUse: "ବାରିଷ୍ଟର ଅର୍ଥ ଆଇନ ପଢ଼ିଥିବା ଓକିଲ । ଗାନ୍ଧିଜୀ ଇଂଲଣ୍ଡରେ ବାରିଷ୍ଟରୀ ପଢ଼ିଥିଲେ ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "MARRIAGE",
      odia: "ବିବାହ",
      emoji: "💍",
      odiaUse: "ବିବାହ ଅର୍ଥ ସ୍ୱାମୀ ଓ ସ୍ତ୍ରୀ ହେବାର ସଂସ୍କାର । ଗାନ୍ଧିଜୀ କସ୍ତୁରବାଙ୍କୁ ବିବାହ କରିଥିଲେ ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "COMPANION",
      odia: "ସାଥି",
      emoji: "🤝",
      odiaUse: "ସାଥି ଅର୍ଥ ସହଯୋଗୀ । କସ୍ତୁରବା ଗାନ୍ଧିଜୀଙ୍କ ସମସ୍ତ ରାଜନୈତିକ କାମରେ ସାଥି ହୋଇଥିଲେ ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "POLITICS",
      odia: "ରାଜନୀତି",
      emoji: "🏛️",
      odiaUse: "ରାଜନୀତି ଅର୍ଥ ଦେଶ ଶାସନ ସମ୍ବନ୍ଧୀୟ କାର୍ଯ୍ୟ । ଗାନ୍ଧିଜୀ ଭାରତୀୟ ରାଜନୀତିରେ ପ୍ରବେଶ କରିଥିଲେ ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "CASE",
      odia: "ମାମଲା",
      emoji: "📂",
      odiaUse: "ମାମଲା ଅର୍ଥ ଆଇନଗତ ବିବାଦ । ଦାଦା ଅବଦୁଲ୍ଲାଙ୍କ ମାମଲା ଲଢ଼ିବା ପାଇଁ ଗାନ୍ଧିଜୀ ଦକ୍ଷିଣ ଆଫ୍ରିକା ଯାଇଥିଲେ ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "DISCRIMINATION",
      odia: "ବର୍ଣ୍ଣବୈଷମ୍ୟ",
      emoji: "🚫",
      odiaUse: "ବର୍ଣ୍ଣବୈଷମ୍ୟ ଅର୍ଥ ରଙ୍ଗ ବା ଜାତି ଆଧାରରେ ଭେଦଭାବ । ଦକ୍ଷିଣ ଆଫ୍ରିକାରେ ଶ୍ୱେତାଙ୍ଗମାନେ ବର୍ଣ୍ଣବୈଷମ୍ୟ ନୀତି ପାଳନ କରୁଥିଲେ ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "ATROCITY",
      odia: "ଅତ୍ୟାଚାର",
      emoji: "😞",
      odiaUse: "ଅତ୍ୟାଚାର ଅର୍ଥ ଅନ୍ୟାୟ ଭାବରେ କଷ୍ଟ ଦେବା । ଭାରତୀୟମାନେ ବହୁତ ଅତ୍ୟାଚାର ସହୁଥିଲେ ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "VOTING RIGHT",
      odia: "ଭୋଟ ଦେବାର ଅଧିକାର",
      emoji: "🗳️",
      odiaUse: "ଭୋଟ ଦେବାର ଅଧିକାର ଅର୍ଥ ନିଜ ପ୍ରତିନିଧି ବାଛିବାର ଅଧିକାର । ଦକ୍ଷିଣ ଆଫ୍ରିକାରେ ଭାରତୀୟମାନଙ୍କୁ ଏହି ଅଧିକାର ମିଳୁନଥିଲା ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "REGISTRATION",
      odia: "ପଞ୍ଜୀକରଣ",
      emoji: "📝",
      odiaUse: "ପଞ୍ଜୀକରଣ ଅର୍ଥ ସରକାରୀ ଭାବରେ ନାମ ଲେଖାଇବା । ଭାରତୀୟମାନଙ୍କୁ ପଞ୍ଜୀକରଣ କରିବାକୁ ପଡୁଥିଲା ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "TAX",
      odia: "କର",
      emoji: "💰",
      odiaUse: "କର ଅର୍ଥ ସରକାରଙ୍କୁ ଦିଆଯାଉଥିବା ଟଙ୍କା । ଭାରତୀୟମାନଙ୍କୁ କର ଦେବାକୁ ପଡୁଥିଲା ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "UNHYGIENIC",
      odia: "ଅସ୍ୱାସ୍ଥ୍ୟକର",
      emoji: "🦠",
      odiaUse: "ଅସ୍ୱାସ୍ଥ୍ୟକର ଅର୍ଥ ସ୍ୱାସ୍ଥ୍ୟ ପାଇଁ ଭଲ ନୁହେଁ । ଭାରତୀୟମାନଙ୍କୁ ଅସ୍ୱାସ୍ଥ୍ୟକର ଜାଗାରେ ରହିବାକୁ ଦିଆଯାଉଥିଲା ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "HUMILIATION",
      odia: "ଅପମାନ",
      emoji: "😔",
      odiaUse: "ଅପମାନ ଅର୍ଥ ସମ୍ମାନ ନଷ୍ଟ କରିବା । ଗାନ୍ଧିଜୀଙ୍କୁ ଦକ୍ଷିଣ ଆଫ୍ରିକାରେ ଅନେକ ଅପମାନ ସହିବାକୁ ପଡ଼ିଥିଲା ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "TURBAN",
      odia: "ପଗଡ଼ି",
      emoji: "🧢",
      odiaUse: "ପଗଡ଼ି ଅର୍ଥ ମୁଣ୍ଡରେ ବାନ୍ଧାଯାଉଥିବା ବସ୍ତ୍ର । କଚେରୀରେ ଗାନ୍ଧିଜୀଙ୍କୁ ପଗଡ଼ି କାଢ଼ିବାକୁ କୁହାଯାଇଥିଲା ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "ATTACK",
      odia: "ଆକ୍ରମଣ",
      emoji: "👮",
      odiaUse: "ଆକ୍ରମଣ ଅର୍ଥ ମାଡ଼ ବା ହିଂସା କରିବା । ପୋଲିସ୍ ଗାନ୍ଧିଜୀଙ୍କ ଉପରେ ଆକ୍ରମଣ କରିଥିଲା ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "REBELLION",
      odia: "ବିଦ୍ରୋହ",
      emoji: "🔥",
      odiaUse: "ବିଦ୍ରୋହ ଅର୍ଥ ଅନ୍ୟାୟ ବିରୋଧରେ ଠିଆ ହେବା । ରେଳର ଘଟଣା ଗାନ୍ଧିଜୀଙ୍କ ମନରେ ବିଦ୍ରୋହର ଭାବନା ଜଗାଇଥିଲା ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "AWARENESS",
      odia: "ସଚେତନତା",
      emoji: "💡",
      odiaUse: "ସଚେତନତା ଅର୍ଥ ସଠିକ୍ ଜ୍ଞାନ ଓ ବୁଝାମଣା । ଗାନ୍ଧିଜୀ ଭାରତୀୟମାନଙ୍କ ମଧ୍ୟରେ ରାଜନୈତିକ ସଚେତନତା ଆଣିଥିଲେ ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "ORGANIZATION",
      odia: "ସଂଗଠନ",
      emoji: "🏢",
      odiaUse: "ସଂଗଠନ ଅର୍ଥ ଲୋକମାନଙ୍କ ମିଳିତ ଦଳ । ଗାନ୍ଧିଜୀ ନାଟାଲ ଭାରତୀୟ କଂଗ୍ରେସ ସଂଗଠନ ଗଠନ କରିଥିଲେ ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "NEWSPAPER",
      odia: "ସମ୍ବାଦପତ୍ର",
      emoji: "📰",
      odiaUse: "ସମ୍ବାଦପତ୍ର ଅର୍ଥ ଖବରକାଗଜ । ଗାନ୍ଧିଜୀ 'ଇଣ୍ଡିଆନ ଓପିନିଅନ୍' ସମ୍ବାଦପତ୍ର ପ୍ରକାଶ କରିଥିଲେ ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "SATYAGRAHA",
      odia: "ସତ୍ୟାଗ୍ରହ",
      emoji: "☮️",
      odiaUse: "ସତ୍ୟାଗ୍ରହ ଅର୍ଥ ସତ୍ୟ ଓ ଅହିଂସାରେ ଆଧାରିତ ଆନ୍ଦୋଳନ । ଗାନ୍ଧିଜୀ ସତ୍ୟାଗ୍ରହ ଆରମ୍ଭ କରିଥିଲେ ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "NON-VIOLENCE",
      odia: "ଅହିଂସା",
      emoji: "🕊️",
      odiaUse: "ଅହିଂସା ଅର୍ଥ କାହାକୁ ହିଂସା ନ କରିବା । ଗାନ୍ଧିଜୀ ଅହିଂସାର ପଥ ଅନୁସରଣ କରୁଥିଲେ ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "FINGERPRINT",
      odia: "ଅଙ୍ଗୁଳି ଛାପ",
      emoji: "🖐️",
      odiaUse: "ଅଙ୍ଗୁଳି ଛାପ ଅର୍ଥ ଆଙ୍ଗୁଠିର ଚିହ୍ନ । ସରକାର ଅଙ୍ଗୁଳି ଛାପ ଥିବା ପ୍ରମାଣପତ୍ର ରଖିବାକୁ ବାଧ୍ୟ କରିଥିଲା ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "CERTIFICATE",
      odia: "ପ୍ରମାଣପତ୍ର",
      emoji: "📄",
      odiaUse: "ପ୍ରମାଣପତ୍ର ଅର୍ଥ ସରକାରୀ ସାକ୍ଷ୍ୟପତ୍ର । ଭାରତୀୟମାନଙ୍କୁ ପଞ୍ଜୀକୃତ ପ୍ରମାଣପତ୍ର ସହିତ ରଖିବାକୁ କୁହାଯାଇଥିଲା ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "BLACK ACT",
      odia: "କଳା ଆଇନ",
      emoji: "⚫",
      odiaUse: "କଳା ଆଇନ ଅର୍ଥ ଅନ୍ୟାୟପୂର୍ଣ୍ଣ ଆଇନ । ଭାରତୀୟମାନେ କଳା ଆଇନ ମାନିବେ ନାହିଁ ବୋଲି ଶପଥ ନେଇଥିଲେ ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "OATH",
      odia: "ଶପଥ",
      emoji: "✋",
      odiaUse: "ଶପଥ ଅର୍ଥ ଦୃଢ଼ ପ୍ରତିଜ୍ଞା । ଭାରତୀୟମାନେ କଳା ଆଇନ ନ ମାନିବାକୁ ଶପଥ ନେଇଥିଲେ ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "PRISONER",
      odia: "ବନ୍ଦୀ",
      emoji: "⛓️",
      odiaUse: "ବନ୍ଦୀ ଅର୍ଥ ଜେଲ୍‌ରେ ରଖାଯାଇଥିବା ବ୍ୟକ୍ତି । ଗାନ୍ଧିଜୀଙ୍କୁ ଜୋହାନେସବର୍ଗ ଜେଲ୍‌ରେ ବନ୍ଦୀ କରାଯାଇଥିଲା ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "REPRESSION",
      odia: "ଦମନ ନୀତି",
      emoji: "🚔",
      odiaUse: "ଦମନ ନୀତି ଅର୍ଥ ବଳପୂର୍ବକ ଲୋକଙ୍କୁ ଦବାଇବାର ନୀତି । ସରକାରଙ୍କ ଦମନ ନୀତି ସତ୍ତ୍ୱେ ଆନ୍ଦୋଳନ ବଢ଼ିଥିଲା ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "ARREST",
      odia: "ଗିରଫ",
      emoji: "🚓",
      odiaUse: "ଗିରଫ ଅର୍ଥ ପୋଲିସ୍ ଧରି ନେବା । ଅନେକ ଭାରତୀୟ ଗିରଫ ହୋଇଥିଲେ ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "MOVEMENT",
      odia: "ଆନ୍ଦୋଳନ",
      emoji: "🚩",
      odiaUse: "ଆନ୍ଦୋଳନ ଅର୍ଥ ଅଧିକାର ପାଇଁ ସଂଗ୍ରାମ । ଜେଲ୍‌କୁ ଯିବା ପରେ ମଧ୍ୟ ଆନ୍ଦୋଳନ ଥମି ଯାଇନଥିଲା ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "SUPREME COURT",
      odia: "ଉଚ୍ଚତମ ନ୍ୟାୟାଳୟ",
      emoji: "🏛️",
      odiaUse: "ଉଚ୍ଚତମ ନ୍ୟାୟାଳୟ ଅର୍ଥ ସବୁଠାରୁ ବଡ଼ ଅଦାଲତ । ଦକ୍ଷିଣ ଆଫ୍ରିକାର ଉଚ୍ଚତମ ନ୍ୟାୟାଳୟ ବିବାହ ବିଷୟରେ ନିଷ୍ପତ୍ତି ଦେଇଥିଲା ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "RECOGNITION",
      odia: "ସ୍ୱୀକୃତି",
      emoji: "✅",
      odiaUse: "ସ୍ୱୀକୃତି ଅର୍ଥ ମାନ୍ୟତା । ଭାରତୀୟ ବିବାହକୁ ସ୍ୱୀକୃତି ଦିଆଯାଉନଥିଲା ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "CANCEL",
      odia: "ବାତିଲ",
      emoji: "❌",
      odiaUse: "ବାତିଲ ଅର୍ଥ ରଦ୍ଦ କରିଦେବା । ଇଂରେଜ ସରକାର କେତେକ ଅପମାନଜନକ ଆଇନ ବାତିଲ କରିଥିଲା ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    }
  ]
};

