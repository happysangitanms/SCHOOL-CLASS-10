const wordData = {
currentWord: 0,
words: [
{
word: "LINEAR EQUATION",
odia: "ଏକଘାତ ସମୀକରଣ",
emoji: "📘",
odiaUse: "ଏକଘାତ ସମୀକରଣ ଅର୍ଥ ଗୋଟିଏ କିମ୍ବା ଅଧିକ ଚଳ ଥିବା ପ୍ରଥମ ଘାତର ସମୀକରଣ । ax + b = 0 ଏକ ଏକଘାତ ସମୀକରଣ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "VARIABLE",
odia: "ଚଳ",
emoji: "🔠",
odiaUse: "ଚଳ ଅର୍ଥ ଯାହାର ମୂଲ୍ୟ ବଦଳିପାରେ । x ଓ y ହେଉଛି ଚଳ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "SOLUTION",
odia: "ସମାଧାନ",
emoji: "✅",
odiaUse: "ସମାଧାନ ଅର୍ଥ ସମୀକରଣକୁ ସତ୍ୟ କରୁଥିବା ମୂଲ୍ୟ । x = −b/a ଏକଘାତ ସମୀକରଣର ସମାଧାନ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "REAL NUMBER",
odia: "ବାସ୍ତବ ସଂଖ୍ୟା",
emoji: "🔢",
odiaUse: "ବାସ୍ତବ ସଂଖ୍ୟା ଅର୍ଥ ସାଧାରଣ ଭାବରେ ବ୍ୟବହୃତ ସଂଖ୍ୟା । a₁, b₁ ଓ c₁ ବାସ୍ତବ ସଂଖ୍ୟା ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "PAIR OF LINEAR EQUATIONS",
odia: "ଯୁଗଳ ସମୀକରଣ",
emoji: "📑",
odiaUse: "ଯୁଗଳ ସମୀକରଣ ଅର୍ଥ ଦୁଇଟି ସମୀକରଣ ଏକାଠି ଥିବା । a₁x+b₁y+c₁=0 ଓ a₂x+b₂y+c₂=0 ଏକ ଯୁଗଳ ସମୀକରଣ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "PLANE",
odia: "ସମତଳ ମଇଦାନ",
emoji: "🏞️",
odiaUse: "ସମତଳ ମଇଦାନ ଅର୍ଥ ସିଧା ଓ ସମାନ ପୃଷ୍ଠ । ଦୁଇଟି ରାସ୍ତାକୁ ସମତଳ ମଇଦାନରେ କଳ୍ପନା କରାଯାଏ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "INTERSECT",
odia: "ଛେଦ କରିବା",
emoji: "❌",
odiaUse: "ଛେଦ କରିବା ଅର୍ଥ ଗୋଟିଏ ସ୍ଥାନରେ ମିଶିବା । ଦୁଇଟି ରାସ୍ତା ଗୋଟିଏ ବିନ୍ଦୁରେ ଛେଦ କରେ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "POINT OF INTERSECTION",
odia: "ମିଳନ ବିନ୍ଦୁ",
emoji: "📍",
odiaUse: "ମିଳନ ବିନ୍ଦୁ ଅର୍ଥ ଯେଉଁ ସ୍ଥାନରେ ଦୁଇଟି ରେଖା ମିଶେ । ସେହି ମିଳନ ବିନ୍ଦୁ ହିଁ ସମାଧାନ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "COORDINATES",
odia: "ସ୍ଥାନାଙ୍କ",
emoji: "📌",
odiaUse: "ସ୍ଥାନାଙ୍କ ଅର୍ଥ ଗୋଟିଏ ବିନ୍ଦୁର ଅବସ୍ଥାନ । (x = α, y = β) ହେଉଛି ମିଳନ ବିନ୍ଦୁର ସ୍ଥାନାଙ୍କ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "UNIQUE SOLUTION",
odia: "ଏକମାତ୍ର ସମାଧାନ",
emoji: "1️⃣",
odiaUse: "ଏକମାତ୍ର ସମାଧାନ ଅର୍ଥ କେବଳ ଗୋଟିଏ ସମାଧାନ । ଦୁଇଟି ରାସ୍ତା କଟିଲେ ଏକମାତ୍ର ସମାଧାନ ମିଳେ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "CONSISTENT",
odia: "ସୁସଙ୍ଗତ",
emoji: "✔️",
odiaUse: "ସୁସଙ୍ଗତ ଅର୍ଥ ସମାଧାନ ଥିବା ସମୀକରଣ । ଏକମାତ୍ର କିମ୍ବା ଅସଂଖ୍ୟ ସମାଧାନ ଥିଲେ ଯୁଗଳ ସୁସଙ୍ଗତ ହୁଏ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "INDEPENDENT",
odia: "ସ୍ୱାଧୀନ",
emoji: "🆓",
odiaUse: "ସ୍ୱାଧୀନ ଅର୍ଥ ଗୋଟିଏ ସମୀକରଣ ଅନ୍ୟଟି ଉପରେ ନିର୍ଭର କରେନାହିଁ । ଛେଦ କରୁଥିବା ଯୁଗଳ ସ୍ୱାଧୀନ ହୁଏ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "PARALLEL",
odia: "ସମାନ୍ତର",
emoji: "↔️",
odiaUse: "ସମାନ୍ତର ଅର୍ଥ ପାଖାପାଖି ଚାଲିଥିଲେ ମଧ୍ୟ କେବେ ମିଶେନାହିଁ । ସମାନ୍ତର ରାସ୍ତାର କୌଣସି ମିଳନ ବିନ୍ଦୁ ନଥାଏ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "NO SOLUTION",
odia: "କୌଣସି ସମାଧାନ ନାହିଁ",
emoji: "🚫",
odiaUse: "କୌଣସି ସମାଧାନ ନାହିଁ ଅର୍ଥ ସମୀକରଣକୁ ସତ୍ୟ କରୁଥିବା କୌଣସି ମୂଲ୍ୟ ନାହିଁ । ସମାନ୍ତର ରାସ୍ତାରେ କୌଣସି ସମାଧାନ ମିଳେନାହିଁ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "INCONSISTENT",
odia: "ଅସଙ୍ଗତ",
emoji: "❎",
odiaUse: "ଅସଙ୍ଗତ ଅର୍ଥ ଯେଉଁ ଯୁଗଳର କୌଣସି ସମାଧାନ ନାହିଁ । ସମାନ୍ତର ରାସ୍ତା ଥିଲେ ଯୁଗଳ ଅସଙ୍ଗତ ହୁଏ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "OVERLAP",
odia: "ଏକୀଭୂତ",
emoji: "🛣️",
odiaUse: "ଏକୀଭୂତ ଅର୍ଥ ଦୁଇଟି ରେଖା ପୂରା ଏକେ ରେଖା ହୋଇଯିବା । L₁ ଓ L₂ ଏକୀଭୂତ ହେଲେ ଦୁହେଁ ଏକେ ରାସ୍ତା ହୁଅନ୍ତି ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "INFINITE SOLUTIONS",
odia: "ଅସଂଖ୍ୟ ସମାଧାନ",
emoji: "♾️",
odiaUse: "ଅସଂଖ୍ୟ ସମାଧାନ ଅର୍ଥ ଗଣି ହେବନଥିବା ସମାଧାନ । ଏକେ ରାସ୍ତାର ପ୍ରତ୍ୟେକ ବିନ୍ଦୁ ସମାଧାନ ହୁଏ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "DEPENDENT",
odia: "ଆଶ୍ରିତ",
emoji: "🤝",
odiaUse: "ଆଶ୍ରିତ ଅର୍ଥ ଗୋଟିଏ ସମୀକରଣ ଅନ୍ୟଟି ସହ ସମ୍ପୂର୍ଣ୍ଣ ମେଳ ଖାଏ । ଅସଂଖ୍ୟ ସମାଧାନ ଥିବା ଯୁଗଳ ଆଶ୍ରିତ ହୁଏ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "RATIO",
odia: "ଅନୁପାତ",
emoji: "⚖️",
odiaUse: "ଅନୁପାତ ଅର୍ଥ ଦୁଇଟି ମୂଲ୍ୟର ତୁଳନା । a₁/a₂, b₁/b₂ ଓ c₁/c₂ ଅନୁପାତକୁ ତୁଳନା କରାଯାଏ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "TRICK",
odia: "ମନେ ରଖିବାର ଟ୍ରିକ୍",
emoji: "🧠",
odiaUse: "ମନେ ରଖିବାର ଟ୍ରିକ୍ ଅର୍ଥ ସହଜ ଉପାୟ । '=' ଚିହ୍ନ କେତେଟି ମେଳ ଖାଉଛି ଦେଖି ସମାଧାନ ଜଣାଯାଏ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
}
]
};