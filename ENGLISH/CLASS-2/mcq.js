const mcqData = {
    questions: [

        // =========================
        // Sentence-1
        // I went to a vegetarian restaurant.
        // =========================
        {
            question: "Who went to a vegetarian restaurant? (କିଏ ଏକ ଶାକାହାରୀ ରେଷ୍ଟୁରାଣ୍ଟକୁ ଯାଇଥିଲା?)",
            options: [
                "I (ମୁଁ)",
                "The waiter (ୱେଟର)",
                "The cashier (କ୍ୟାସିୟର)",
                "The girl (ଝିଅଟି)"
            ],
            correct: 0
        },
        {
            question: "What type of restaurant did I go to? (ମୁଁ କେଉଁ ପ୍ରକାରର ରେଷ୍ଟୁରାଣ୍ଟକୁ ଯାଇଥିଲି?)",
            options: [
                "Non-vegetarian restaurant (ଅଶାକାହାରୀ ରେଷ୍ଟୁରାଣ୍ଟ)",
                "Seafood restaurant (ସମୁଦ୍ର ଖାଦ୍ୟ ରେଷ୍ଟୁରାଣ୍ଟ)",
                "Vegetarian restaurant (ଶାକାହାରୀ ରେଷ୍ଟୁରାଣ୍ଟ)",
                "Chinese restaurant (ଚାଇନିଜ୍ ରେଷ୍ଟୁରାଣ୍ଟ)"
            ],
            correct: 2
        },

        // =========================
        // Sentence-2
        // It was lunch time.
        // =========================
        {
            question: "What time was it? (କେଉଁ ସମୟ ଥିଲା?)",
            options: [
                "Breakfast time (ସକାଳ ଖାଦ୍ୟ ସମୟ)",
                "Lunch time (ମଧ୍ୟାହ୍ନ ଭୋଜନ ସମୟ)",
                "Dinner time (ରାତ୍ରି ଭୋଜନ ସମୟ)",
                "Tea time (ଚା' ସମୟ)"
            ],
            correct: 1
        },
        {
            question: "What does lunch time mean? (Lunch time ର ଅର୍ଥ କ'ଣ?)",
            options: [
                "Morning exercise time (ସକାଳ ବ୍ୟାୟାମ ସମୟ)",
                "Sleeping time (ଶୋଇବା ସମୟ)",
                "Noon meal time (ମଧ୍ୟାହ୍ନ ଭୋଜନ ସମୟ)",
                "Study time (ପଢ଼ିବା ସମୟ)"
            ],
            correct: 2
        },

        // =========================
        // Sentence-3
        // There were people eating and drinking.
        // =========================
        {
            question: "Who were there in the restaurant? (ରେଷ୍ଟୁରାଣ୍ଟରେ କିଏ ଥିଲେ?)",
            options: [
                "Animals (ପଶୁମାନେ)",
                "People (ଲୋକମାନେ)",
                "Teachers (ଶିକ୍ଷକମାନେ)",
                "Players (ଖେଳାଳିମାନେ)"
            ],
            correct: 1
        },
        {
            question: "What were the people doing? (ଲୋକମାନେ କ'ଣ କରୁଥିଲେ?)",
            options: [
                "Sleeping and resting (ଶୋଇଥିଲେ ଓ ବିଶ୍ରାମ କରୁଥିଲେ)",
                "Reading and writing (ପଢୁଥିଲେ ଓ ଲେଖୁଥିଲେ)",
                "Eating and drinking (ଖାଉଥିଲେ ଓ ପିଉଥିଲେ)",
                "Running and jumping (ଦୌଡୁଥିଲେ ଓ ଡେଇଁଉଥିଲେ)"
            ],
            correct: 2
        },

        // =========================
        // Sentence-4
        // The restaurant was very crowded.
        // =========================
        {
            question: "What was very crowded? (କ'ଣ ବହୁତ ଭିଡ଼ ଥିଲା?)",
            options: [
                "The market (ବଜାର)",
                "The school (ବିଦ୍ୟାଳୟ)",
                "The restaurant (ରେଷ୍ଟୁରାଣ୍ଟ)",
                "The park (ପାର୍କ)"
            ],
            correct: 2
        },
        {
            question: "What does crowded mean? (Crowded ର ଅର୍ଥ କ'ଣ?)",
            options: [
                "Empty (ଖାଲି)",
                "Full of people (ଲୋକ ଭର୍ତ୍ତି)",
                "Very clean (ବହୁତ ପରିଷ୍କାର)",
                "Very quiet (ବହୁତ ଶାନ୍ତ)"
            ],
            correct: 1
        },

        // =========================
        // Sentence-5
        // I saw that some of the chairs and tables had been pushed into a corner.
        // =========================
        {
            question: "Who saw the chairs and tables? (ଚେୟାର ଓ ଟେବୁଲକୁ କିଏ ଦେଖିଥିଲା?)",
            options: [
                "I (ମୁଁ)",
                "The girl (ଝିଅଟି)",
                "The waiter (ୱେଟର)",
                "The cashier (କ୍ୟାସିୟର)"
            ],
            correct: 0
        },
        {
            question: "Where had some chairs and tables been pushed? (କେତେକ ଚେୟାର ଓ ଟେବୁଲକୁ କେଉଁଠାକୁ ଠେଲି ଦିଆଯାଇଥିଲା?)",
            options: [
                "Into a room (ଗୋଟିଏ କକ୍ଷକୁ)",
                "Outside the restaurant (ରେଷ୍ଟୁରାଣ୍ଟ ବାହାରକୁ)",
                "Into a corner (ଗୋଟିଏ କୋଣକୁ)",
                "Near the door (ଦ୍ୱାର ପାଖକୁ)"
            ],
            correct: 2
        },

        // =========================
        // Sentence-6
        // I chose the corner table, seated myself and started skimming through the newspaper.
        // =========================
        {
            question: "Which table did I choose? (ମୁଁ କେଉଁ ଟେବୁଲ ବାଛିଥିଲି?)",
            options: [
                "Window table (ଝରକା ପାଖ ଟେବୁଲ)",
                "Corner table (କୋଣର ଟେବୁଲ)",
                "Round table (ଗୋଲାକାର ଟେବୁଲ)",
                "Large table (ବଡ଼ ଟେବୁଲ)"
            ],
            correct: 1
        },
        {
            question: "What did I start reading? (ମୁଁ କ'ଣ ପଢିବା ଆରମ୍ଭ କଲି?)",
            options: [
                "A book (ଗୋଟିଏ ପୁସ୍ତକ)",
                "A magazine (ଗୋଟିଏ ପତ୍ରିକା)",
                "A letter (ଗୋଟିଏ ଚିଠି)",
                "The newspaper (ଖବରକାଗଜ)"
            ],
            correct: 3
        },

        // =========================
        // Sentence-7
        // At that moment I noticed a very young girl looking at me.
        // =========================
        {
            question: "Whom did I notice? (ମୁଁ କାହାକୁ ଲକ୍ଷ୍ୟ କଲି?)",
            options: [
                "A very young girl (ଜଣେ ବହୁତ ଛୋଟ ଝିଅ)",
                "A waiter (ଜଣେ ୱେଟର)",
                "A cashier (ଜଣେ କ୍ୟାସିୟର)",
                "An old man (ଜଣେ ବୃଦ୍ଧ ବ୍ୟକ୍ତି)"
            ],
            correct: 0
        },
        {
            question: "Whom was the girl looking at? (ଝିଅଟି କାହାକୁ ଚାହିଁଥିଲା?)",
            options: [
                "The waiter (ୱେଟର)",
                "The cashier (କ୍ୟାସିୟର)",
                "Me (ମୋତେ)",
                "Her friend (ତାର ସାଙ୍ଗ)"
            ],
            correct: 2
        },

        // =========================
        // Sentence-8
        // Her eyes were large and they had a sad expression.
        // =========================
        {
            question: "How were her eyes? (ତାର ଆଖି କେମିତି ଥିଲା?)",
            options: [
                "Small (ଛୋଟ)",
                "Large (ବଡ଼)",
                "Closed (ବନ୍ଦ)",
                "Bright blue (ନୀଳ ରଙ୍ଗର)"
            ],
            correct: 1
        },
        {
            question: "What expression did her eyes have? (ତାର ଆଖିରେ କେଉଁ ଭାବ ଥିଲା?)",
            options: [
                "Happy expression (ଖୁସିର ଭାବ)",
                "Angry expression (ରାଗର ଭାବ)",
                "Sad expression (ଦୁଃଖର ଭାବ)",
                "Funny expression (ମଜାଳିଆ ଭାବ)"
            ],
            correct: 2
        },

        // =========================
        // Sentence-9
        // As she was going out she asked the cashier in a low voice, "Is that gentleman an Indian?"
        // =========================
        {
            question: "Whom did she ask in a low voice? (ସେ ଧୀର ସ୍ୱରରେ କାହାକୁ ପଚାରିଲା?)",
            options: [
                "The waiter (ୱେଟର)",
                "The cashier (କ୍ୟାସିୟର)",
                "The manager (ମ୍ୟାନେଜର)",
                "The cook (ରୋଷେଇଆ)"
            ],
            correct: 1
        },
        {
            question: "What did she ask? (ସେ କ'ଣ ପଚାରିଲା?)",
            options: [
                "Is he a teacher? (ସେ କ'ଣ ଜଣେ ଶିକ୍ଷକ?)",
                "Is he a doctor? (ସେ କ'ଣ ଜଣେ ଡାକ୍ତର?)",
                "Is that gentleman an Indian? (ସେହି ଭଦ୍ରଲୋକ ଜଣେ ଭାରତୀୟ କି?)",
                "Is he a waiter? (ସେ କ'ଣ ଜଣେ ୱେଟର?)"
            ],
            correct: 2
        },

        // =========================
        // Sentence-10
        // "I think so", the cashier replied.
        // =========================
        {
            question: "Who replied? (କିଏ ଉତ୍ତର ଦେଲେ?)",
            options: [
                "The waiter (ୱେଟର)",
                "The girl (ଝିଅଟି)",
                "The cashier (କ୍ୟାସିୟର)",
                "The narrator (କାହାଣୀକାର)"
            ],
            correct: 2
        },
        {
            question: "What did the cashier say? (କ୍ୟାସିୟର କ'ଣ କହିଲେ?)",
            options: [
                "I do not know (ମୁଁ ଜାଣିନି)",
                "I think so (ମୁଁ ସେପରି ଭାବୁଛି)",
                "Certainly not (ନିଶ୍ଚିତ ନୁହେଁ)",
                "Maybe later (ହୁଏତ ପରେ)"
            ],
            correct: 1
        },

        // =========================
        // Sentence-11
        // The girl looked at me once more, and went out.
        // =========================
        {
            question: "Who looked at me once more? (କିଏ ମୋତେ ଆଉ ଥରେ ଚାହିଁଲା?)",
            options: [
                "The girl (ଝିଅଟି)",
                "The waiter (ୱେଟର)",
                "The cashier (କ୍ୟାସିୟର)",
                "The manager (ମ୍ୟାନେଜର)"
            ],
            correct: 0
        },
        {
            question: "What did she do next? (ତାପରେ ସେ କ'ଣ କଲା?)",
            options: [
                "She sat down (ସେ ବସିଗଲା)",
                "She ate food (ସେ ଖାଦ୍ୟ ଖାଇଲା)",
                "She went out (ସେ ବାହାରକୁ ଚାଲିଗଲା)",
                "She smiled (ସେ ହସିଲା)"
            ],
            correct: 2
        },

        // =========================
        // Sentence-12
        // It surprised me.
        // =========================
        {
            question: "Whom did it surprise? (ଏହା କାହାକୁ ଆଶ୍ଚର୍ଯ୍ୟ କଲା?)",
            options: [
                "The girl (ଝିଅଟି)",
                "The waiter (ୱେଟର)",
                "Me (ମୋତେ)",
                "The cashier (କ୍ୟାସିୟର)"
            ],
            correct: 2
        },
        {
            question: "How did I feel? (ମୁଁ କେମିତି ଅନୁଭବ କଲି?)",
            options: [
                "Happy (ଖୁସି)",
                "Angry (ରାଗିତ)",
                "Tired (କ୍ଲାନ୍ତ)",
                "Surprised (ଆଶ୍ଚର୍ଯ୍ୟ)"
            ],
            correct: 3
        }

    ]
};
