const wordData = {
currentWord: 0,
words: [
{
word: "SIMILAR FIGURES",
odia: "ସଦୃଶ ଚିତ୍ର",
emoji: "📐",
odiaUse: "ସଦୃଶ ଚିତ୍ର ଅର୍ଥ ଆକୃତି ସମାନ କିନ୍ତୁ ଆକାର ଭିନ୍ନ ଥିବା ଚିତ୍ର । ଛୋଟ ଫଟୋ ଓ ବଡ଼ ଫଟୋ ସଦୃଶ ଚିତ୍ର ଅଟେ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "SHAPE",
odia: "ଆକୃତି",
emoji: "🔷",
odiaUse: "ଆକୃତି ଅର୍ଥ ବସ୍ତୁର ବାହାର ରୂପ । ଦୁଇଟି ସଦୃଶ ଚିତ୍ରର ଆକୃତି ସମାନ ଥାଏ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "SIZE",
odia: "ଆକାର",
emoji: "📏",
odiaUse: "ଆକାର ଅର୍ଥ ବଡ଼ ବା ଛୋଟ ହେବାର ପରିମାଣ । ସଦୃଶ ଚିତ୍ରର ଆକାର ଭିନ୍ନ ହୋଇପାରେ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "ZOOM-IN",
odia: "ବଡ଼ କରି ଦେଖିବା",
emoji: "🔍",
odiaUse: "ଜୁମ୍-ଇନ୍ ଅର୍ଥ ଚିତ୍ରକୁ ବଡ଼ କରି ଦେଖିବା । ଗୁଗଲ ମ୍ୟାପରେ ଜୁମ୍-ଇନ୍ କଲେ ସ୍ଥାନ ବଡ଼ ଦେଖାଯାଏ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "ZOOM-OUT",
odia: "ଛୋଟ କରି ଦେଖିବା",
emoji: "🗺️",
odiaUse: "ଜୁମ୍-ଆଉଟ୍ ଅର୍ଥ ଚିତ୍ରକୁ ଛୋଟ କରି ଦେଖିବା । ଜୁମ୍-ଆଉଟ୍ କଲେ ବଡ଼ ଅଞ୍ଚଳ ଦେଖାଯାଏ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "MAP",
odia: "ମାନଚିତ୍ର",
emoji: "🗺",
odiaUse: "ମାନଚିତ୍ର ଅର୍ଥ କୌଣସି ସ୍ଥାନର ଚିତ୍ର । ଓଡ଼ିଶାର ବଡ଼ ଓ ଛୋଟ ମାନଚିତ୍ର ସଦୃଶ ହୋଇଥାଏ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "BOUNDARY",
odia: "ସୀମାରେଖା",
emoji: "➖",
odiaUse: "ସୀମାରେଖା ଅର୍ଥ ସୀମା ଦର୍ଶାଉଥିବା ରେଖା । ଦୁଇଟି ମାନଚିତ୍ରର ସୀମାରେଖା ଏକେ ଅନୁପାତରେ ବଦଳେ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "DISTANCE",
odia: "ଦୂରତା",
emoji: "📍",
odiaUse: "ଦୂରତା ଅର୍ଥ ଦୁଇଟି ସ୍ଥାନ ମଧ୍ୟର ଲମ୍ବ । ଦୁଇଟି ମାନଚିତ୍ରରେ ଦୂରତାର ଅନୁପାତ ସ୍ଥିର ରହେ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "RATIO",
odia: "ଅନୁପାତ",
emoji: "⚖️",
odiaUse: "ଅନୁପାତ ଅର୍ଥ ଦୁଇଟି ରାଶିର ତୁଳନା । ଦୁଇଟି ମାନଚିତ୍ରର ଦୂରତାର ଅନୁପାତ ସ୍ଥିର ରହେ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "CONSTANT",
odia: "ସ୍ଥିର",
emoji: "📌",
odiaUse: "ସ୍ଥିର ଅର୍ଥ ପରିବର୍ତ୍ତନ ନ ହେବା । ମାନଚିତ୍ରରେ ଦୂରତାର ଅନୁପାତ ସ୍ଥିର ରହେ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "SIMILARITY",
odia: "ସାଦୃଶ୍ୟ",
emoji: "🪞",
odiaUse: "ସାଦୃଶ୍ୟ ଅର୍ଥ ସଦୃଶ ହେବାର ଗୁଣ । ସଦୃଶ ଚିତ୍ରରେ ସାଦୃଶ୍ୟ ଥାଏ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "PROPORTION",
odia: "ସମାନୁପାତ",
emoji: "🔄",
odiaUse: "ସମାନୁପାତ ଅର୍ଥ ଦୁଇଟି ଅନୁପାତ ସମାନ ହେବା । a : b = c : d ହେଲେ ସେମାନେ ସମାନୁପାତୀ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "NON-ZERO",
odia: "ଅଣଶୂନ୍ୟ",
emoji: "🔢",
odiaUse: "ଅଣଶୂନ୍ୟ ଅର୍ଥ ଶୂନ୍ୟ ନୁହେଁ ଏମିତି ସଂଖ୍ୟା । ସମାନୁପାତରେ a, b, c, d ଅଣଶୂନ୍ୟ ସଂଖ୍ୟା ହୁଅନ୍ତି ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "GEOMETRY",
odia: "ଜ୍ୟାମିତି",
emoji: "📐",
odiaUse: "ଜ୍ୟାମିତି ଅର୍ଥ ରେଖା ଓ ଆକୃତିର ଗଣିତ । ସମାନୁପାତର ନିୟମ ଜ୍ୟାମିତିରେ ବ୍ୟବହୃତ ହୁଏ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "TRIANGLE",
odia: "ତ୍ରିଭୁଜ",
emoji: "🔺",
odiaUse: "ତ୍ରିଭୁଜ ଅର୍ଥ ତିନିଟି ବାହୁ ଥିବା ଆକୃତି । ଏହି ପାଠରେ ତ୍ରିଭୁଜର କ୍ଷେତ୍ରଫଳ ଶିଖାଯାଇଛି ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "AREA",
odia: "କ୍ଷେତ୍ରଫଳ",
emoji: "🟨",
odiaUse: "କ୍ଷେତ୍ରଫଳ ଅର୍ଥ ଆକୃତି ଘେରିଥିବା ସ୍ଥାନର ପରିମାଣ । ତ୍ରିଭୁଜର କ୍ଷେତ୍ରଫଳ = ୧/୨ × ଭୂମି × ଉଚ୍ଚତା ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "BASE",
odia: "ଭୂମି",
emoji: "📏",
odiaUse: "ଭୂମି ଅର୍ଥ ତ୍ରିଭୁଜର ତଳ ବାହୁ । ତ୍ରିଭୁଜର କ୍ଷେତ୍ରଫଳ ଭୂମି ଉପରେ ନିର୍ଭର କରେ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "HEIGHT",
odia: "ଉଚ୍ଚତା",
emoji: "📍",
odiaUse: "ଉଚ୍ଚତା ଅର୍ଥ ଭୂମି ଉପରେ ଅଙ୍କିତ ଲମ୍ବ ଦୂରତା । କ୍ଷେତ୍ରଫଳ ବାହାର କରିବାକୁ ଉଚ୍ଚତା ଦରକାର ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "SAME HEIGHT",
odia: "ସମାନ ଉଚ୍ଚତା",
emoji: "📊",
odiaUse: "ସମାନ ଉଚ୍ଚତା ଅର୍ଥ ଦୁଇଟି ତ୍ରିଭୁଜର ଉଚ୍ଚତା ସମାନ ହେବା । ଏହି ସ୍ଥିତିରେ କ୍ଷେତ୍ରଫଳର ଅନୁପାତ ଭୂମିର ଅନୁପାତ ସହ ସମାନ ହୁଏ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "SAME BASE",
odia: "ସମାନ ଭୂମି",
emoji: "📐",
odiaUse: "ସମାନ ଭୂମି ଅର୍ଥ ଦୁଇଟି ତ୍ରିଭୁଜର ଭୂମି ସମାନ ହେବା । ଏହି ସ୍ଥିତିରେ କ୍ଷେତ୍ରଫଳର ଅନୁପାତ ଉଚ୍ଚତାର ଅନୁପାତ ସହ ସମାନ ହୁଏ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "THEOREM",
odia: "ପ୍ରମେୟ",
emoji: "📘",
odiaUse: "ପ୍ରମେୟ ଅର୍ଥ ପ୍ରମାଣ କରାଯାଇଥିବା ନିୟମ । ମୌଳିକ ସାଦୃଶ୍ୟତା ପ୍ରମେୟ ଏହି ପାଠର ମୁଖ୍ୟ ବିଷୟ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "BASIC PROPORTIONALITY THEOREM",
odia: "ମୌଳିକ ସାଦୃଶ୍ୟତା ପ୍ରମେୟ",
emoji: "📖",
odiaUse: "ମୌଳିକ ସାଦୃଶ୍ୟତା ପ୍ରମେୟ ଅର୍ଥ ତ୍ରିଭୁଜର ଗୋଟିଏ ବାହୁ ସହ ସମାନ୍ତରାଳ ରେଖା ଅନ୍ୟ ଦୁଇଟି ବାହୁକୁ ସମାନୁପାତରେ ବିଭାଜନ କରେ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "POINT",
odia: "ବିନ୍ଦୁ",
emoji: "⚫",
odiaUse: "ବିନ୍ଦୁ ଅର୍ଥ ଏକ ସ୍ଥାନ । ତ୍ରିଭୁଜ ABC ରେ P ଓ Q ବିନ୍ଦୁ ବାହୁ ଉପରେ ଥାଏ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "SIDE",
odia: "ବାହୁ",
emoji: "📏",
odiaUse: "ବାହୁ ଅର୍ଥ ତ୍ରିଭୁଜର ଧାର । AB ଓ AC ତ୍ରିଭୁଜର ବାହୁ ଅଟେ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "PARALLEL",
odia: "ସମାନ୍ତରାଳ",
emoji: "〰️",
odiaUse: "ସମାନ୍ତରାଳ ଅର୍ଥ କେବେ ମିଳୁ ନଥିବା ଦୁଇଟି ରେଖା । ପ୍ରମେୟରେ PQ, BC ସହ ସମାନ୍ତରାଳ ଥାଏ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "LINE SEGMENT",
odia: "ରେଖାଖଣ୍ଡ",
emoji: "📏",
odiaUse: "ରେଖାଖଣ୍ଡ ଅର୍ଥ ଦୁଇଟି ବିନ୍ଦୁ ମଧ୍ୟର ରେଖା । PQ ଏକ ରେଖାଖଣ୍ଡ ଅଟେ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "DIVIDE",
odia: "ବିଭାଜନ",
emoji: "✂️",
odiaUse: "ବିଭାଜନ ଅର୍ଥ ଭାଗ କରିବା । P ବିନ୍ଦୁ AB କୁ ଅନୁପାତରେ ବିଭାଜନ କରେ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "INTERSECT",
odia: "ଛେଦ କରିବା",
emoji: "❌",
odiaUse: "ଛେଦ କରିବା ଅର୍ଥ ରେଖା ଅନ୍ୟ ରେଖାକୁ କାଟିବା । ସମାନ୍ତରାଳ ରେଖା ଅନ୍ୟ ଦୁଇଟି ବାହୁକୁ ଛେଦ କରେ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "EQUAL RATIO",
odia: "ସମାନ ଅନୁପାତ",
emoji: "⚖️",
odiaUse: "ସମାନ ଅନୁପାତ ଅର୍ଥ ଦୁଇଟି ଅନୁପାତର ମୂଲ୍ୟ ସମାନ ହେବା । AP : PB = AQ : QC ଏକ ସମାନ ଅନୁପାତ ଅଟେ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "PROOF",
odia: "ପ୍ରମାଣ",
emoji: "✔️",
odiaUse: "ପ୍ରମାଣ ଅର୍ଥ ନିୟମ ସତ୍ୟ ବୋଲି ଦେଖାଇବା । ଏହି ପ୍ରମେୟର ପ୍ରମାଣ ପାଇଁ ଅତିରିକ୍ତ ରେଖା ଅଙ୍କନ କରାଯାଏ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "PERPENDICULAR",
odia: "ଲମ୍ବ",
emoji: "📍",
odiaUse: "ଲମ୍ବ ଅର୍ଥ ୯୦° କୋଣରେ ଅଙ୍କିତ ରେଖା । A ବିନ୍ଦୁରୁ BC ଉପରେ ଲମ୍ବ ଅଙ୍କନ କରାଯାଏ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
}
]
};