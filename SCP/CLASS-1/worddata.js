const wordData = {
currentWord: 0,
words: [
{
word: "CHEMICAL REACTION",
odia: "ରାସାୟନିକ ପ୍ରତିକ୍ରିୟା",
emoji: "🧪",
odiaUse: "ରାସାୟନିକ ପ୍ରତିକ୍ରିୟା ଅର୍ଥ ମୂଳ ପଦାର୍ଥର ପ୍ରକୃତି ଓ ସ୍ୱଭାବ ବଦଳିଯିବା । ମ୍ୟାଗ୍ନେସିୟମ୍ ଜଳି ମ୍ୟାଗ୍ନେସିୟମ୍ ଅକ୍ସାଇଡ୍ ହେବା ଏକ ରାସାୟନିକ ପ୍ରତିକ୍ରିୟା ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "NATURE",
odia: "ପ୍ରକୃତି",
emoji: "🌿",
odiaUse: "ପ୍ରକୃତି ଅର୍ଥ କୌଣସି ପଦାର୍ଥର ନିଜର ଗୁଣ । ରାସାୟନିକ ପ୍ରତିକ୍ରିୟାରେ ପଦାର୍ଥର ପ୍ରକୃତି ବଦଳିଯାଏ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "PROPERTY",
odia: "ସ୍ୱଭାବ",
emoji: "✨",
odiaUse: "ସ୍ୱଭାବ ଅର୍ଥ ପଦାର୍ଥର ନିଜସ୍ୱ ଗୁଣ । ରାସାୟନିକ ପ୍ରତିକ୍ରିୟାରେ ପଦାର୍ଥର ସ୍ୱଭାବ ବଦଳିଯାଏ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "CHANGE",
odia: "ପରିବର୍ତ୍ତନ",
emoji: "🔄",
odiaUse: "ପରିବର୍ତ୍ତନ ଅର୍ଥ ବଦଳିଯିବା । କ୍ଷୀର ଖରାଦିନେ ରଖିଲେ ପରିବର୍ତ୍ତନ ହୁଏ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "ORDINARY TEMPERATURE",
odia: "ସାଧାରଣ ତାପମାତ୍ରା",
emoji: "🌡️",
odiaUse: "ସାଧାରଣ ତାପମାତ୍ରା ଅର୍ଥ ଘରର ସାଧାରଣ ଉଷ୍ଣତା । କ୍ଷୀରକୁ ସାଧାରଣ ତାପମାତ୍ରାରେ ରଖିଲେ ତାହା ବଦଳିଯାଏ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "MOIST AIR",
odia: "ଆର୍ଦ୍ର ବାୟୁ",
emoji: "💧",
odiaUse: "ଆର୍ଦ୍ର ବାୟୁ ଅର୍ଥ ଜଳୀୟ ବାଷ୍ପ ଥିବା ବାୟୁ । ଆର୍ଦ୍ର ବାୟୁରେ ଲୁହାରେ ପରିବର୍ତ୍ତନ ହୁଏ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "DIGESTION",
odia: "ହଜମ",
emoji: "🍛",
odiaUse: "ହଜମ ଅର୍ଥ ଖାଦ୍ୟ ଶରୀର ଭିତରେ ଭାଙ୍ଗିଯିବା । ଖାଦ୍ୟ ହଜମ ହେବା ମଧ୍ୟ ଏକ ରାସାୟନିକ ପ୍ରତିକ୍ରିୟା ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "RESPIRATION",
odia: "ଶ୍ୱାସକ୍ରିୟା",
emoji: "🫁",
odiaUse: "ଶ୍ୱାସକ୍ରିୟା ଅର୍ଥ ନିଶ୍ୱାସ ନେବା ଓ ଛାଡ଼ିବା । ଶ୍ୱାସକ୍ରିୟା ସମୟରେ ମଧ୍ୟ ରାସାୟନିକ ପ୍ରତିକ୍ରିୟା ଘଟେ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "MAGNESIUM RIBBON",
odia: "ମ୍ୟାଗ୍ନେସିୟମ୍ ପାତ",
emoji: "⚪",
odiaUse: "ମ୍ୟାଗ୍ନେସିୟମ୍ ପାତ ଅର୍ଥ ମ୍ୟାଗ୍ନେସିୟମ୍‌ର ପତଳା ଫିତା । ପରୀକ୍ଷାରେ ମ୍ୟାଗ୍ନେସିୟମ୍ ପାତକୁ ଜଳାଯାଏ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "SAND PAPER",
odia: "ବାଲିକାଗଜ",
emoji: "🟫",
odiaUse: "ବାଲିକାଗଜ ଅର୍ଥ ଘଷି ସଫା କରିବା କାଗଜ । ମ୍ୟାଗ୍ନେସିୟମ୍ ପାତକୁ ବାଲିକାଗଜରେ ସଫା କରାଯାଏ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "FORCEPS",
odia: "ଚିମୁଟା",
emoji: "🔧",
odiaUse: "ଚିମୁଟା ଅର୍ଥ ଧରିବା ଉପକରଣ । ମ୍ୟାଗ୍ନେସିୟମ୍ ପାତକୁ ଚିମୁଟାରେ ଧରାଯାଏ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "BURNER",
odia: "ବର୍ଣ୍ଣର",
emoji: "🔥",
odiaUse: "ବର୍ଣ୍ଣର ଅର୍ଥ ଲ୍ୟାବରେ ବ୍ୟବହୃତ ଜଳାଇବା ଯନ୍ତ୍ର । ମ୍ୟାଗ୍ନେସିୟମ୍ ପାତକୁ ବର୍ଣ୍ଣରରେ ଜଳାଯାଏ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "SPIRIT LAMP",
odia: "ସ୍ପିରିଟ୍ ଲ୍ୟାମ୍ପ",
emoji: "🪔",
odiaUse: "ସ୍ପିରିଟ୍ ଲ୍ୟାମ୍ପ ଅର୍ଥ ସ୍ପିରିଟ୍‌ରେ ଜଳୁଥିବା ଲ୍ୟାମ୍ପ । ପରୀକ୍ଷାରେ ସ୍ପିରିଟ୍ ଲ୍ୟାମ୍ପ ବ୍ୟବହାର କରାଯାଏ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "BRIGHT WHITE FLAME",
odia: "ଉଜ୍ଜ୍ୱଳ ଧଳା ଶିଖା",
emoji: "✨",
odiaUse: "ଉଜ୍ଜ୍ୱଳ ଧଳା ଶିଖା ଅର୍ଥ ବହୁତ ତୀବ୍ର ଧଳା ଅଗ୍ନି । ମ୍ୟାଗ୍ନେସିୟମ୍ ଉଜ୍ଜ୍ୱଳ ଧଳା ଶିଖା ସହିତ ଜଳେ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "POWDER",
odia: "ଚୂର୍ଣ୍ଣ",
emoji: "⚪",
odiaUse: "ଚୂର୍ଣ୍ଣ ଅର୍ଥ ଗୁଣ୍ଡ ଆକାରର ପଦାର୍ଥ । ମ୍ୟାଗ୍ନେସିୟମ୍ ଜଳି ଧଳା ଚୂର୍ଣ୍ଣରେ ପରିଣତ ହୁଏ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "MAGNESIUM OXIDE",
odia: "ମ୍ୟାଗ୍ନେସିୟମ୍ ଅକ୍ସାଇଡ୍",
emoji: "⚗️",
odiaUse: "ମ୍ୟାଗ୍ନେସିୟମ୍ ଅକ୍ସାଇଡ୍ ଅର୍ଥ ମ୍ୟାଗ୍ନେସିୟମ୍ ଜଳି ସୃଷ୍ଟି ହେଉଥିବା ଧଳା ପଦାର୍ଥ । ଏହା ଅକ୍ସିଜେନ୍ ସହ ପ୍ରତିକ୍ରିୟାରେ ସୃଷ୍ଟି ହୁଏ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "OXYGEN",
odia: "ଅକ୍ସିଜେନ୍",
emoji: "💨",
odiaUse: "ଅକ୍ସିଜେନ୍ ଅର୍ଥ ବାୟୁରେ ଥିବା ଏକ ଗ୍ୟାସ୍ । ମ୍ୟାଗ୍ନେସିୟମ୍ ଅକ୍ସିଜେନ୍ ସହ ପ୍ରତିକ୍ରିୟା କରେ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "LEAD NITRATE",
odia: "ଲେଡ୍ ନାଇଟ୍ରେଟ୍",
emoji: "🧫",
odiaUse: "ଲେଡ୍ ନାଇଟ୍ରେଟ୍ ଅର୍ଥ ଏକ ରାସାୟନିକ ଯୋଗିକ । ପରୀକ୍ଷାରେ ଏହାର ଜଳୀୟ ଦ୍ରବଣ ବ୍ୟବହାର କରାଯାଏ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "POTASSIUM IODIDE",
odia: "ପୋଟାସିୟମ୍ ଆୟୋଡାଇଡ୍",
emoji: "🧪",
odiaUse: "ପୋଟାସିୟମ୍ ଆୟୋଡାଇଡ୍ ଅର୍ଥ ଏକ ରାସାୟନିକ ଯୋଗିକ । ଏହାକୁ ଲେଡ୍ ନାଇଟ୍ରେଟ୍ ସହ ମିଶାଯାଏ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "AQUEOUS SOLUTION",
odia: "ଜଳୀୟ ଦ୍ରବଣ",
emoji: "💧",
odiaUse: "ଜଳୀୟ ଦ୍ରବଣ ଅର୍ଥ ପାଣିରେ ମିଶିଥିବା ଦ୍ରବଣ । ଲେଡ୍ ନାଇଟ୍ରେଟ୍ ଓ ପୋଟାସିୟମ୍ ଆୟୋଡାଇଡ୍‌ର ଜଳୀୟ ଦ୍ରବଣ ବ୍ୟବହାର କରାଯାଏ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "PRECIPITATE",
odia: "ଅବକ୍ଷେପ",
emoji: "🟡",
odiaUse: "ଅବକ୍ଷେପ ଅର୍ଥ ଦ୍ରବଣରୁ ସୃଷ୍ଟି ହୋଇଥିବା କଠିନ ପଦାର୍ଥ । ଏହି ପରୀକ୍ଷାରେ ହଳଦିଆ ଅବକ୍ଷେପ ସୃଷ୍ଟି ହୁଏ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "LEAD IODIDE",
odia: "ଲେଡ୍ ଆୟୋଡାଇଡ୍",
emoji: "🟨",
odiaUse: "ଲେଡ୍ ଆୟୋଡାଇଡ୍ ଅର୍ଥ ହଳଦିଆ ଅବକ୍ଷେପ । ଏହା ଲେଡ୍ ନାଇଟ୍ରେଟ୍ ଓ ପୋଟାସିୟମ୍ ଆୟୋଡାଇଡ୍‌ର ପ୍ରତିକ୍ରିୟାରେ ସୃଷ୍ଟି ହୁଏ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "ZINC",
odia: "ଜିଙ୍କ୍",
emoji: "⚙️",
odiaUse: "ଜିଙ୍କ୍ ଅର୍ଥ ଏକ ଧାତୁ । ପରୀକ୍ଷାରେ ଜିଙ୍କ୍ ଦାନା ସହ ଏସିଡ୍ ମିଶାଯାଏ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "HYDROCHLORIC ACID",
odia: "ହାଇଡ୍ରୋକ୍ଲୋରିକ୍ ଏସିଡ୍",
emoji: "🧴",
odiaUse: "ହାଇଡ୍ରୋକ୍ଲୋରିକ୍ ଏସିଡ୍ ଅର୍ଥ ଏକ ଏସିଡ୍ । ଏହାକୁ ଜିଙ୍କ୍ ସହ ମିଶାଯାଏ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "SULPHURIC ACID",
odia: "ସଲ୍ଫ୍ୟୁରିକ୍ ଏସିଡ୍",
emoji: "🧴",
odiaUse: "ସଲ୍ଫ୍ୟୁରିକ୍ ଏସିଡ୍ ଅର୍ଥ ଏକ ଏସିଡ୍ । ଏହାକୁ ମଧ୍ୟ ଜିଙ୍କ୍ ସହ ମିଶାଯାଇପାରେ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "CONICAL FLASK",
odia: "କୋନିକାଲ୍ ଫ୍ଲାସ୍କ",
emoji: "⚗️",
odiaUse: "କୋନିକାଲ୍ ଫ୍ଲାସ୍କ ଅର୍ଥ ଶଙ୍କୁ ଆକାରର କାଚ ପାତ୍ର । ପରୀକ୍ଷାରେ ଜିଙ୍କ୍ ଓ ଏସିଡ୍ ଏଥିରେ ରଖାଯାଏ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "TEST TUBE",
odia: "ପରୀକ୍ଷାନଳୀ",
emoji: "🧪",
odiaUse: "ପରୀକ୍ଷାନଳୀ ଅର୍ଥ ପରୀକ୍ଷା କରିବା ପାଇଁ କାଚର ନଳୀ । ବିଭିନ୍ନ ପରୀକ୍ଷା ପରୀକ୍ଷାନଳୀରେ କରାଯାଏ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "STATE CHANGE",
odia: "ଅବସ୍ଥାରେ ପରିବର୍ତ୍ତନ",
emoji: "🔄",
odiaUse: "ଅବସ୍ଥାରେ ପରିବର୍ତ୍ତନ ଅର୍ଥ ପଦାର୍ଥର ରୂପ ବଦଳିଯିବା । ଏହା ରାସାୟନିକ ପ୍ରତିକ୍ରିୟାର ଏକ ଲକ୍ଷଣ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "COLOUR CHANGE",
odia: "ରଙ୍ଗରେ ପରିବର୍ତ୍ତନ",
emoji: "🎨",
odiaUse: "ରଙ୍ଗରେ ପରିବର୍ତ୍ତନ ଅର୍ଥ ପଦାର୍ଥର ରଙ୍ଗ ବଦଳିଯିବା । ଲେଡ୍ ଆୟୋଡାଇଡ୍ ସୃଷ୍ଟି ହେବାବେଳେ ରଙ୍ଗ ବଦଳିଯାଏ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "GAS EVOLUTION",
odia: "ଗ୍ୟାସ୍‌ର ନିର୍ଗମନ",
emoji: "💨",
odiaUse: "ଗ୍ୟାସ୍‌ର ନିର୍ଗମନ ଅର୍ଥ ଗ୍ୟାସ୍ ବାହାରିବା । ଏହା ରାସାୟନିକ ପ୍ରତିକ୍ରିୟାର ଏକ ଲକ୍ଷଣ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "TEMPERATURE CHANGE",
odia: "ତାପମାତ୍ରାରେ ପରିବର୍ତ୍ତନ",
emoji: "🌡️",
odiaUse: "ତାପମାତ୍ରାରେ ପରିବର୍ତ୍ତନ ଅର୍ଥ ଗରମ କିମ୍ବା ଥଣ୍ଡା ହୋଇଯିବା । ଜିଙ୍କ୍ ଓ ଏସିଡ୍‌ର ପ୍ରତିକ୍ରିୟାରେ ତାପମାତ୍ରା ବଦଳିପାରେ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
}
]
};