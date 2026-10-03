/* =====================================================================
   ENGLISH COACH — v3.1 — PARTIE 1/3 : DONNÉES
===================================================================== */

"use strict";

/* Fix : coupe la synthèse vocale à la fermeture */
window.addEventListener("beforeunload", () => {
    if("speechSynthesis" in window) speechSynthesis.cancel();
});

/* =====================================================================
   1. PHRASES (200+ par niveau)
===================================================================== */

const PHRASES = {
A1:[
    "I am a student.","My name is Paul.","She is my friend.","He is a teacher.","We are happy.",
    "They are at home.","I have a dog.","You have a car.","She has a cat.","He has a book.",
    "The sky is blue.","The sun is hot.","I like apples.","You like tea.","She likes music.",
    "We like pizza.","I go to school.","You go to work.","He goes to the park.","She goes to the market.",
    "I speak English.","You speak French.","She speaks Spanish.","I live in Paris.","We live in London.",
    "My mother is a nurse.","My father is a doctor.","My brother is ten.","My sister is six.","The cat is sleeping.",
    "The dog is running.","I am hungry.","I am thirsty.","I am tired.","She is happy.",
    "He is sad.","The book is red.","The car is fast.","The house is big.","The tree is tall.",
    "I drink water.","I eat bread.","You eat rice.","He drinks milk.","She eats fruit.",
    "I read books.","I write letters.","I sing songs.","I play football.","I watch TV.",
    "I wake up early every morning.","She has breakfast at seven.","He goes to school by bus.",
    "We walk in the park together.","They play in the big garden.","My mother cooks dinner every night.",
    "My father reads the newspaper.","I brush my teeth every day.","She washes her hands before eating.",
    "He cleans his room on Saturdays.","We study English every single day.","I learn new words every morning.",
    "You speak English very well.","She dances beautifully at parties.","He runs very fast in the park.",
    "The children play outside after school.","The teacher writes on the board.","The students listen carefully.",
    "I have two brothers and one sister.","She has three sisters in her family.","We have a small house near the school.",
    "They have a big garden behind the house.","My favorite color is bright blue.","My favorite food is rice and vegetables.",
    "My favorite sport is playing football.","I love my family very much.","She loves her little dog.",
    "He loves his job at the bank.","We love our school and teachers.","The weather is nice today outside.",
    "It is raining heavily right now.","It is very cold in the morning.","It is hot in summer here.",
    "Winter is very cold in my country.","I wear a warm hat in winter.","She wears a beautiful dress today.",
    "He wears a blue shirt to work.","I need a new phone.","She wants a new bag for school.",
    "He needs new shoes for running.","We go to the beach in summer.","They swim in the sea every day.",
    "I eat lunch at noon.","She drinks tea in the afternoon.","We watch movies together at night.",
    "I go to bed late on weekends.","She sleeps eight hours every night.","He wakes up at six every morning.",
    "The dog barks loudly at night.","The birds sing in the morning.",
    "I usually go to the market on Saturdays.","My sister plays the piano very well.","My brother plays football with his friends.",
    "We often visit our grandparents on Sundays.","She always helps her mother in the kitchen.","He never forgets his keys at home.",
    "I sometimes walk to school with my friends.","They usually eat dinner at seven o'clock.","My father works in a big office.",
    "My mother teaches English at a small school.","The children play in the park after school.","The teacher gives us homework every day.",
    "I do my homework in the quiet evening.","She reads a book before going to bed.","He listens to music when he is tired.",
    "We watch a movie together every Friday night.","They go to the cinema on weekends.","I call my grandmother every Sunday morning.",
    "She sends messages to her friends.","He checks his phone all the time.","My best friend lives in another city.",
    "I miss my best friend a lot.","She is tall and has long hair.","He is short and wears glasses.",
    "They are kind and very friendly.","The small cat sleeps on the sofa.","The big dog runs in the yard.",
    "The red car is very fast.","The blue bike is very old.","My grandmother makes delicious cakes.",
    "My grandfather tells funny stories.","We visit them every summer.","They live in a small village.",
    "The village is near the mountains.","The river is behind our house.","I like to swim in the river.",
    "She likes to walk in the forest.","He likes to climb the mountains.","We love the beautiful nature.",
    "The flowers are colorful in spring.","The leaves fall in autumn.","Snow covers the ground in winter.",
    "The sun shines brightly in summer.","I have a beautiful garden at home.","She has many flowers in her garden.",
    "He has a small vegetable garden.","We grow tomatoes and carrots.","They grow rice in their fields.",
    "The farmer works very hard.","The village is quiet and peaceful.",
    "Every morning, I wake up early and have a big breakfast with my family.",
    "My mother usually makes coffee, and my father reads the newspaper at the table.",
    "After breakfast, I walk to school with my best friend who lives next door.",
    "We talk about our homework, our teachers, and the games we played yesterday.",
    "At school, we study many subjects like English, math, science, and history.",
    "My favorite subject is English because I love learning new words every day.",
    "During the break, we play football in the schoolyard with our classmates.",
    "The teacher is very kind, and she always helps us when we don't understand.",
    "After school, I go home and have lunch with my family around one o'clock.",
    "In the afternoon, I do my homework and then help my mother in the kitchen.",
    "Sometimes, I visit my grandmother who lives in a small house near the park.",
    "She always tells me interesting stories about when she was young.",
    "In the evening, my family and I watch television together in the living room.",
    "We usually watch the news, and then a movie if there is a good one.",
    "Before going to bed, I read a book for about thirty minutes.",
    "I like adventure stories, but my sister prefers fairy tales with princesses.",
    "On weekends, we often go to the beach if the weather is nice.",
    "We take a picnic with sandwiches, fruit, and cold drinks.",
    "The children swim in the sea while the parents relax on the sand.",
    "In the evening, we go back home feeling happy and very tired.",
    "My uncle has a small farm in the countryside where we visit in summer.",
    "There are many animals on his farm, like cows, chickens, and horses.",
    "I love to feed the chickens and ride the horses with my cousins.",
    "We also help our uncle collect eggs and milk the cows.",
    "The countryside is very quiet, and the air is much cleaner than in the city.",
    "At night, we can see thousands of stars in the sky.",
    "It is a beautiful experience that I will never forget.",
    "My grandmother taught me how to cook traditional food when I was young.",
    "She said that cooking is not just about food, but also about love.",
    "I still remember her recipes, and I cook them for my family today.",
    "My best friend and I have known each other since we were five years old.",
    "We went to the same school, and we lived on the same street.",
    "Now, we are older, but we still spend a lot of time together.",
    "We share our secrets, our dreams, and our problems without fear.",
    "A good friend is one of the most important things in life.",
    "I hope we will stay friends for many more years to come.",
    "Learning English has changed my life in many wonderful ways.",
    "I can now talk to people from different countries and cultures.",
    "I can read books, watch movies, and listen to music in English.",
    "English opens many doors for work, travel, and personal growth.",
    "If you want to learn English, you must practice every single day.",
    "Don't be afraid to make mistakes, because mistakes help you learn.",
    "Listen carefully, speak slowly, and try to use new words often.",
    "Reading books and watching movies in English also helps a lot.",
    "The most important thing is to never give up, no matter what.",
    "Learning a language is a journey, not a race.",
    "Be patient with yourself, and celebrate every small progress.",
    "One day, you will speak English fluently, and you will be very proud.",
    "Remember that every expert was once a beginner.",
    "So, keep going, and enjoy the beautiful journey of learning English."
],
A2:[
    "I went to the market yesterday.","She bought a new dress.","We visited our friends last Sunday.",
    "They played football in the rain.","I saw a good movie.","She met her friend at the café.",
    "He ate breakfast at seven.","We walked to school together.","They watched TV all evening.",
    "I read a book last week.","She finished her homework early.","He started a new job in May.",
    "We travelled to Paris last year.","They stayed at a nice hotel.","I learned English at school.",
    "She called me three times today.","He lost his keys yesterday morning.","We moved to a new apartment.",
    "They opened a small restaurant.","I helped my mother cook dinner.","She cleaned the house all morning.",
    "He washed his car on Sunday.","We invited our friends to dinner.","They arrived at the station on time.",
    "I forgot to bring my umbrella.","She remembered my birthday.","He told me a funny story.",
    "We stayed up late last night.","They danced at the party.","I watched the sunrise this morning.",
    "I am going to visit my cousin next weekend.","She is going to study medicine next year.",
    "We are going to travel to Spain in June.","They are going to buy a house soon.",
    "He is going to start his own business.","I usually have lunch at half past twelve.",
    "She often goes shopping on Saturday afternoons.","He never arrives late at meetings.",
    "We sometimes eat out at restaurants.","They always help their neighbours.",
    "I have already finished my project.","She has just arrived from London.",
    "He has never been to Japan.","We have seen this film three times.",
    "They have lived here since 2015.","I have known her for ten years.",
    "She has worked at this company for two months.","He has studied English for five years.",
    "We have visited many countries together.","They have already eaten dinner.",
    "I would like to travel around the world one day.","She wants to become a doctor in the future.",
    "We need to save money for our next holiday.","They decided to learn a new language together.",
    "He promised to help me with my homework.","I prefer reading books to watching television.",
    "She prefers coffee to tea in the morning.","He prefers walking to taking the bus.",
    "We can meet at the library tomorrow afternoon.","They must finish the project by Friday.",
    "You should visit the museum while you are here.","I might go to the concert if I have time.",
    "She could play the piano when she was young.","He might not come to the party tonight.",
    "We have to be at the airport by seven.","They are supposed to arrive at nine o'clock.",
    "I was watching TV when you called me.","She was cooking dinner while he was reading.",
    "We were walking in the park when it started raining.","They were talking when the teacher entered.",
    "Last summer, my family and I travelled to a small island in the Mediterranean.",
    "We stayed there for two weeks and enjoyed the beautiful beaches every day.",
    "Every morning, we had breakfast on the terrace overlooking the sea.",
    "After breakfast, we usually went swimming and explored the nearby villages.",
    "In the afternoon, we often visited historical sites and took many photos.",
    "The local food was delicious, especially the fresh fish and vegetables.",
    "In the evening, we walked along the harbour and watched the sunset.",
    "One day, we took a boat trip to a nearby island with a famous volcano.",
    "The trip was amazing, and I will remember it for the rest of my life.",
    "If you ever have the chance to visit this region, you should definitely go.",
    "I have been learning English for about three years now, and I love it.",
    "At first, it was difficult because of the grammar and pronunciation.",
    "However, I kept practising every day, and I slowly started to improve.",
    "Now I can watch movies and read books in English without subtitles.",
    "My teacher always says that practice makes perfect, and she is right.",
    "If you want to learn a language, you must be patient and consistent.",
    "Learning a new language opens your mind to different cultures and ideas.",
    "It also helps you in your career because English is used all over the world.",
    "So, never give up, and keep practising a little every day.",
    "One day, you will be able to speak English fluently like a native speaker."
],
B1:[
    "I have been working here for three years.","She has just finished her exam.",
    "We have already seen this film twice.","They have never visited Asia before.",
    "He has been learning Chinese since January.","I would rather stay home tonight.",
    "She would like to travel to Australia.","We would prefer to leave early.",
    "They would love to meet you in person.","If I had more time, I would read more.",
    "If I were you, I would apologise.","If it rains tomorrow, we will stay inside.",
    "If she calls, tell her I am busy.","If they arrive late, we will start without them.",
    "He said he would come to the party.","She told me she had finished the work.",
    "They asked if I could help them.","I wonder if you could give me a hand.",
    "Could you tell me where the station is?","Do you know when the next train leaves?",
    "I used to play the guitar when I was young.","She used to live in the countryside.",
    "We used to visit our grandparents every summer.","He didn't use to like coffee, but he does now.",
    "Despite the rain, we decided to go out.","Although she was tired, she kept working.",
    "Even though he is young, he is very mature.","In spite of the traffic, we arrived on time.",
    "I have been thinking about changing my job for a while now.",
    "She has been studying hard because she wants to pass the exam.",
    "We have been waiting here for more than an hour already.",
    "They have been living in this city since they got married.",
    "He has been working on this project for the last three months.",
    "I think learning a foreign language is important for your career.",
    "In my opinion, reading regularly is the best way to improve.",
    "As far as I am concerned, this is not the right solution.",
    "From my point of view, we should try a different approach.",
    "I strongly believe that education should be free for everyone.",
    "It is often said that money cannot buy happiness, and I agree.",
    "One of the main advantages of technology is easy communication.",
    "A major disadvantage is that it can reduce real human contact.",
    "On the one hand, it saves time; on the other hand, it can be stressful.",
    "Some people argue that social media is harmful, but others disagree.",
    "When I was a child, I used to spend every summer at my grandmother's house.",
    "She lived in a small village surrounded by fields, forests, and a river.",
    "Every morning, I would wake up early and help her feed the chickens.",
    "After breakfast, I would run outside to play with the children from the village.",
    "We would spend hours exploring the woods and swimming in the river.",
    "In the evening, my grandmother would tell us stories about her youth.",
    "Those summers taught me the value of simplicity, nature, and family.",
    "Now that I am older, I often think back to those happy days with nostalgia.",
    "I hope that one day I will be able to give my own children similar memories.",
    "Life was simpler then, and people seemed happier with much less."
],
B2:[
    "The project requires careful planning and accurate information.",
    "She was particularly interested in the economic consequences.",
    "Learning independently can significantly improve your confidence.",
    "The company developed an efficient solution to the problem.",
    "From my perspective, communication is essential for success.",
    "This achievement was the result of several years of work.",
    "You should consider every possible consequence before deciding.",
    "The position has several important requirements.",
    "He explained the situation clearly and accurately.",
    "There is a significant difference between the two approaches.",
    "Despite facing numerous challenges, the team completed the project on time.",
    "Having considered all the options, we decided to postpone the meeting.",
    "Not only did she finish early, but she also helped her colleagues.",
    "Rarely do we see such dedication in a young professional.",
    "Under no circumstances should you share this information.",
    "The more you practise, the more confident you will become.",
    "Although the initial results were promising, further tests are needed.",
    "Given the current situation, we should probably revise our strategy.",
    "Whereas some people prefer cities, others enjoy the peace of the countryside.",
    "Provided that the weather is good, we will hold the event outdoors.",
    "Over the past decade, technology has transformed the way we live and work.",
    "Smartphones have become essential tools that most people cannot imagine living without.",
    "On the one hand, these devices allow us to communicate instantly with anyone.",
    "On the other hand, they can seriously affect our concentration and relationships.",
    "Many experts argue that spending too much time on screens reduces human contact.",
    "However, others believe that technology helps people to stay connected.",
    "In my opinion, the key issue is not technology itself but how we use it.",
    "If we set clear limits, we can benefit from innovation without becoming dependent.",
    "To sum up, balance is probably the most important principle to keep in mind.",
    "Only time will tell how these tools will continue to shape our society.",
    "The debate about climate change has become one of the most pressing issues of our time.",
    "Scientists around the world agree that human activity is the main cause of global warming.",
    "Unless we take immediate action, the consequences could be catastrophic for future generations.",
    "Governments should invest heavily in renewable energy and sustainable infrastructure.",
    "Individuals also have a role to play by reducing their carbon footprint every day.",
    "Although the challenge is enormous, there is still time to make a difference.",
    "Some critics argue that the economic cost of these measures is too high.",
    "Nevertheless, the long-term benefits clearly outweigh the short-term sacrifices.",
    "It is essential that we act now rather than wait for a crisis to force our hand.",
    "The choices we make today will determine the world we leave to our children."
],
C1:[
    "The situation requires a sophisticated understanding of the problem.",
    "The organization made substantial changes to its strategy.",
    "It is important to distinguish facts from personal opinions.",
    "The article provides a misleading interpretation of the results.",
    "Nevertheless, the project continued despite several difficulties.",
    "The decision had an unprecedented impact on the local community.",
    "Contemporary society depends heavily on digital communication.",
    "Some consequences may be inevitable in the long term.",
    "His explanation offered a different interpretation of the evidence.",
    "The proposal generated a controversial debate among experts.",
    "That being said, I can see your point of view.",
    "By and large, the results have been quite encouraging.",
    "To put it another way, we need to reconsider our priorities.",
    "It goes without saying that hard work pays off eventually.",
    "Nonetheless, the evidence remains inconclusive at this stage.",
    "She was, to all intents and purposes, the driving force behind the project.",
    "The findings, while preliminary, shed light on a complex phenomenon.",
    "The report ought to be interpreted with considerable caution.",
    "What you are implying is not entirely consistent with the data.",
    "Far from resolving the issue, this approach may create new problems.",
    "Rarely does one encounter a leader who not only inspires but also listens.",
    "Never have I seen such a remarkable display of dedication and skill.",
    "Not only did the policy fail, but it also produced unintended consequences.",
    "Only after extensive research did the scientists reach a firm conclusion.",
    "Under no circumstances can we allow this situation to continue unchecked.",
    "Such was the impact of the discovery that it changed the field entirely.",
    "Little did they realise how profound the consequences would eventually be.",
    "At no point did the author acknowledge the limitations of the study.",
    "Scarcely had the meeting begun when the first disagreement arose.",
    "No sooner had the law been passed than protests erupted across the country.",
    "The notion of progress, so central to modern thought, deserves a far more nuanced examination.",
    "We tend to assume that scientific advances inevitably lead to greater human flourishing.",
    "Yet history provides countless examples in which apparent progress produced harmful consequences.",
    "Had societies been more cautious, some of these outcomes might have been avoided altogether.",
    "Rarely do we pause to question whether the direction we are heading is genuinely desirable.",
    "It would be presumptuous to claim that we can predict the long-term effects of our choices.",
    "What seems indispensable today may appear preposterous to future generations.",
    "Perhaps the wisest attitude is one of humble curiosity rather than blind confidence.",
    "Only by acknowledging the limits of our understanding can we make informed decisions.",
    "Ultimately, progress may be less about moving forward than about knowing why we move at all."
],
C2:[
    "The argument contains several nuances that are difficult to identify.",
    "A meticulous analysis revealed a significant discrepancy in the data.",
    "The explanation remains ambiguous despite the additional evidence.",
    "It would be counterproductive to ignore the underlying complexities.",
    "Researchers should avoid making unsubstantiated conclusions.",
    "The author presents a coherent interpretation of the available evidence.",
    "Understanding the intricacies of the issue requires considerable experience.",
    "We should not extrapolate these results beyond the original context.",
    "The discussion challenges the traditional paradigm of economic development.",
    "A careful reader can identify several subtle distinctions in the argument.",
    "He bit the bullet and resigned from his position.",
    "I am still on the fence about this decision.",
    "Losing that job was a blessing in disguise.",
    "Don't cut corners on safety regulations.",
    "She always goes the extra mile for her clients.",
    "That ship has sailed, unfortunately.",
    "Let's call a spade a spade and be honest.",
    "At the end of the day, it is your choice.",
    "The ball is in your court now.",
    "He is barking up the wrong tree with that accusation.",
    "Rarely does one encounter such intellectual rigour in a young scholar.",
    "Little did the committee suspect the extent of the fraud.",
    "Not until much later did the full implications become apparent.",
    "So intricate was the argument that few could follow it.",
    "Such was the severity of the crisis that extraordinary measures were required.",
    "The argument, while superficially persuasive, rests on several questionable assumptions.",
    "Her analysis, though technically proficient, fails to engage with the ethical dimensions.",
    "Far from being a neutral observer, the author clearly advocates a particular position.",
    "The evidence, such as it is, does not support the sweeping conclusions drawn.",
    "One might reasonably object that the study conflates correlation with causation.",
    "The paradigm shift, if it materialises, will have far-reaching implications for the field.",
    "Whether this represents genuine progress or merely a redistribution of power is debatable.",
    "What is required is not more data but a more sophisticated theoretical framework.",
    "The debate has become so polarised that constructive dialogue is nearly impossible.",
    "A truly rigorous approach would acknowledge the inherent limitations of the methodology.",
    "The argument contains several nuances that are difficult to identify and even harder to refute.",
    "Had the author engaged more seriously with the counterarguments, the conclusion might have been different.",
    "Never before has a single study generated such intense controversy among scholars.",
    "Not only does the evidence fail to support the thesis, but it actively contradicts it.",
    "Only by adopting a comparative perspective can we fully appreciate the significance of the findings."
]
};

/* =====================================================================
   2. HISTOIRES DE DICTÉE
===================================================================== */

const dictationTexts = {
A1:{ title:"Lucy's day", sentences:[
    "My name is Lucy and I am twelve years old.",
    "I live in a small house near the school with my family.",
    "Every morning I wake up at seven o'clock and get dressed quickly.",
    "I have breakfast with my mother and my younger brother Tom.",
    "At eight o'clock I walk to school with my best friend Emma.",
    "I like my teacher because she is very kind and patient.",
    "After school I play football in the park with my friends.",
    "In the evening I do my homework and read a book before dinner.",
    "I go to bed at nine o'clock every night feeling happy.",
    "I really love my simple life and I am grateful for it."
]},
A2:{ title:"A weekend in London", sentences:[
    "Last weekend my family and I travelled to London by train.",
    "We left early on Saturday morning and arrived around ten.",
    "The weather was cold but the sun was shining brightly.",
    "First, we visited the British Museum and saw many ancient objects.",
    "Then we walked along the river and took a lot of photos.",
    "In the afternoon we ate fish and chips in a small restaurant.",
    "On Sunday we went shopping on Oxford Street for a few hours.",
    "I bought a nice present for my best friend who stayed at home.",
    "We came back home late in the evening feeling very tired.",
    "It was a wonderful weekend and I hope to go back there soon."
]},
B1:{ title:"A surprising discovery", sentences:[
    "Two years ago, while I was cleaning my grandmother's attic, I found an old wooden box.",
    "When I opened it carefully, I discovered a collection of letters written in English.",
    "My grandmother had never told me that she had an English pen friend.",
    "The letters had been sent from a small town near Manchester in the 1960s.",
    "She explained that they had written to each other for almost ten years.",
    "Unfortunately, they had lost contact after my grandmother moved to another city.",
    "I have decided to try to find this person or her family.",
    "Since then, I have already sent several messages on the internet.",
    "If I manage to find someone, I will tell them the whole story.",
    "I truly believe that old friendships should never be forgotten."
]},
B2:{ title:"A challenging journey", sentences:[
    "When I received the invitation to speak at a conference in Berlin, I felt both excited and nervous.",
    "The event was scheduled for the following Monday, which gave me only five days to prepare.",
    "I spent the weekend researching the topic and practising my presentation in front of the mirror.",
    "On Sunday evening, I packed my suitcase and checked my flight details one last time.",
    "The next morning, however, I woke up to find that my flight had been cancelled due to a storm.",
    "I quickly called the airline and managed to book a seat on a train instead.",
    "The journey took almost twelve hours, but I used the time to review my notes carefully.",
    "When I finally arrived in Berlin, I was exhausted but determined to do my best.",
    "Despite all the difficulties, my presentation went surprisingly well and I received positive feedback.",
    "Looking back, I realise that the most challenging journeys often lead to the most rewarding experiences."
]},
C1:{ title:"The interview", sentences:[
    "The morning of the interview, I woke up earlier than usual, my mind already running through possible questions.",
    "I had spent the previous week researching the company, its values, and the person who would be interviewing me.",
    "As I walked into the building, I could feel my heart beating faster with every step.",
    "The office was sleek and modern, with glass walls that seemed to reflect the confidence of everyone inside.",
    "The interviewer, a woman in her forties, greeted me with a warm smile that immediately put me at ease.",
    "She asked me about my previous experience, my motivations, and how I usually handled difficult situations.",
    "Although some of the questions were genuinely challenging, I found myself answering them more confidently than expected.",
    "By the end of the conversation, I had almost forgotten that this was, in fact, an evaluation.",
    "As I left the building, I realised that the interview had taught me something valuable about myself.",
    "Whether or not I got the job, I knew that I had grown from the experience."
]},
C2:{ title:"The letter", sentences:[
    "It was late in the afternoon when the letter finally arrived, tucked between two bills and a magazine.",
    "The envelope was old-fashioned, made of thick cream paper, and bore no return address.",
    "She hesitated for a moment before opening it, as though sensing that its contents would change everything.",
    "The handwriting inside was elegant yet unfamiliar, and the words seemed to have been chosen with great care.",
    "You do not know me, the letter began, but I knew your mother many years ago.",
    "What followed was a story she had never heard before, a story that shed new light on her own childhood.",
    "For years she had believed certain things about her family, things that now appeared far more complex.",
    "The letter did not provide easy answers; instead, it raised questions that would take her a lifetime to answer.",
    "She read it three times, each time discovering a nuance she had previously overlooked.",
    "When she finally folded it back into the envelope, she realised that some truths are not meant to be resolved but simply accepted."
]}
};

/* =====================================================================
   3. CURRICULUM (leçons)
===================================================================== */

const curriculum = {
A1:{title:"Bases essentielles",description:"Se présenter, parler de soi.",
    skills:["Se présenter","Parler de sa famille","Décrire sa journée","Compter"],
    lessons:[
    {id:"a1-l1",title:"Se présenter",objective:"Dire son nom, son âge, sa nationalité.",
     vocabulary:[{en:"name",fr:"nom",ex:"My name is Paul."},{en:"age",fr:"âge",ex:"I am 25 years old."},
     {en:"country",fr:"pays",ex:"I am from France."},{en:"nice to meet you",fr:"enchanté",ex:"Nice to meet you!"},
     {en:"How are you?",fr:"Comment vas-tu ?",ex:"Hi! How are you?"}],
     grammar:{rule:"Le verbe <strong>to be</strong> : I am, you are, he/she/it is, we are, they are.",
      examples:["I <strong>am</strong> French.","She <strong>is</strong> a teacher.","They <strong>are</strong> students."],
      exercise:[{q:"I ___ French.",opts:["am","is","are"],c:0},{q:"She ___ a doctor.",opts:["am","is","are"],c:1},{q:"They ___ my friends.",opts:["am","is","are"],c:2}]},
     pronunciation:["Le son /aɪ/ de « I ».","Le <em>th</em> : langue entre les dents."],
     expressions:["Nice to meet you.","How are you?","Where are you from?","My name is…"],
     listening:["My name is Sarah.","I am from Canada.","Nice to meet you, Paul."],
     reading:{text:"Hi! My name is Emma. I am 22 years old. I am from Ireland. Nice to meet you!",
      questions:[{q:"What is her name?",opts:["Emma","Sarah","Paul"],c:0},{q:"How old is she?",opts:["22","25","18"],c:0}]},
     writing:"Écris 3 phrases pour te présenter.",speaking:"Présente-toi à voix haute.",
     review:["Verbe to be"],
     endTest:[{q:"« Je m'appelle Léa » :",opts:["My name is Léa.","I have name Léa.","Me call Léa."],c:0},
      {q:"« Enchanté » :",opts:["Goodbye","Nice to meet you","Please"],c:1},
      {q:"She ___ from Spain.",opts:["am","is","are"],c:1}]}
    ]},
A2:{title:"Communication quotidienne",description:"Routine, passé simple, projets.",
    skills:["Routine","Passé simple","Projets futurs"],
    lessons:[{id:"a2-l1",title:"Ma routine",objective:"Présent simple + adverbes de fréquence.",
     vocabulary:[{en:"wake up",fr:"se réveiller",ex:"I wake up at 7."},{en:"have breakfast",fr:"petit-déjeuner",ex:"She has breakfast at 8."},
     {en:"usually",fr:"habituellement",ex:"I usually walk."},{en:"go to bed",fr:"se coucher",ex:"He goes to bed late."},
     {en:"on weekdays",fr:"en semaine",ex:"I work on weekdays."}],
     grammar:{rule:"Présent simple : +s à la 3ᵉ personne.",
      examples:["I <strong>work</strong> every day.","She <strong>works</strong> in a bank."],
      exercise:[{q:"She ___ at 9.",opts:["work","works","working"],c:1},
      {q:"I ___ tired.",opts:["am","is","are"],c:0},
      {q:"We ___ coffee.",opts:["don't like","doesn't like","not like"],c:0}]},
     pronunciation:["Le -s final : /s/ (works), /z/ (plays)."],
     expressions:["What time do you…?","I'm an early bird.","How often do you…?"],
     listening:["I wake up at six thirty.","She never drinks coffee."],
     reading:{text:"On weekdays, Mark wakes up at 6:30. He has breakfast, then he walks to work.",
      questions:[{q:"When does Mark wake up?",opts:["6:30","7:00","5:00"],c:0},{q:"What in the evening?",opts:["He works","He goes running","He watches TV"],c:1}]},
     writing:"Décris ta journée type en 5 phrases.",speaking:"Raconte ta routine 45 secondes.",
     review:["Verbe to be"],
     endTest:[{q:"He ___ to school every day.",opts:["go","goes","going"],c:1},
      {q:"« Je ne bois jamais de thé » :",opts:["I never drink tea.","I drink never tea.","I no drink tea."],c:0},
      {q:"« Souvent » se place :",opts:["avant le verbe","après le verbe","n'importe où"],c:0}]}
    ]},
B1:{title:"Autonomie",description:"Raconter au passé, opinion.",
    skills:["Prétérit","Present perfect","Opinion"],
    lessons:[{id:"b1-l1",title:"Raconter au passé",objective:"Prétérit et present perfect.",
     vocabulary:[{en:"yesterday",fr:"hier",ex:"I saw him yesterday."},{en:"last week",fr:"la semaine dernière",ex:"We travelled last week."},
     {en:"already",fr:"déjà",ex:"I have already finished."},{en:"since",fr:"depuis",ex:"I've lived here for 3 years."},
     {en:"ago",fr:"il y a",ex:"She left two hours ago."}],
     grammar:{rule:"Prétérit = action terminée. Present perfect = lien avec le présent.",
      examples:["I <strong>visited</strong> Paris in 2020.","I <strong>have visited</strong> Paris three times."],
      exercise:[{q:"I ___ him yesterday.",opts:["saw","have seen","seen"],c:0},
      {q:"She ___ here for five years.",opts:["lived","has lived","lives"],c:1},
      {q:"They ___ yet.",opts:["didn't finish","haven't finished","don't finish"],c:1}]},
     pronunciation:["-ed : /t/ (worked), /d/ (played), /ɪd/ (wanted)."],
     expressions:["Have you ever…?","I've just…","Since when…?"],
     listening:["I have already seen this film.","She went to Berlin last summer."],
     reading:{text:"Last year, Lisa travelled to Japan. She stayed for three weeks.",
      questions:[{q:"When?",opts:["Last year","Two years ago","Last month"],c:0},{q:"Tokyo?",opts:["once","twice","three times"],c:1}]},
     writing:"Raconte un voyage (6-8 phrases).",speaking:"Ton dernier week-end.",
     review:["Présent simple"],
     endTest:[{q:"« J'ai déjà mangé » :",opts:["I already ate.","I have already eaten.","I did already eat."],c:1},
      {q:"« Hier, elle est partie » :",opts:["Yesterday she has left.","Yesterday she left.","Yesterday she leaves."],c:1},
      {q:"« Depuis 2 ans » :",opts:["since 2 years","for 2 years","during 2 years"],c:1}]}
    ]},
B2:{title:"Aisance et précision",description:"Argumenter, nuancer.",
    skills:["Opinion","Conditionnels","Connecteurs"],
    lessons:[{id:"b2-l1",title:"Donner son opinion",objective:"Structurer une opinion.",
     vocabulary:[{en:"however",fr:"cependant",ex:"However, I disagree."},{en:"therefore",fr:"par conséquent",ex:"He was late; therefore we left."},
     {en:"arguably",fr:"on peut soutenir",ex:"This is arguably the best."},{en:"to sum up",fr:"pour résumer",ex:"To sum up, I support this idea."}],
     grammar:{rule:"Conditionnels : type 1, 2, 3.",
      examples:["If it rains, I <strong>will stay</strong> home.","If I <strong>had</strong> money, I <strong>would travel</strong>."],
      exercise:[{q:"If I ___ rich, I would travel.",opts:["am","was","were"],c:2},
      {q:"If she calls, I ___ her.",opts:["tell","will tell","told"],c:1},
      {q:"If I had studied, I ___ the exam.",opts:["would pass","would have passed","passed"],c:1}]},
     pronunciation:["I'd = I would / I had."],
     expressions:["In my opinion…","I strongly believe that…","I couldn't agree more."],
     listening:["However, I don't think this is the best.","To sum up, communication is the key."],
     reading:{text:"Remote work has become increasingly common.",
      questions:[{q:"Advantage?",opts:["Flexibility","Higher salary","Longer hours"],c:0},{q:"Drawback?",opts:["Less flexibility","Reduced team cohesion","Higher costs"],c:1}]},
     writing:"Paragraphe argumentatif sur le télétravail.",speaking:"Opinion (2 min).",
     review:["Prétérit / Present perfect"],
     endTest:[{q:"« Si j'étais toi » :",opts:["If I am you…","If I were you…","If I was you…"],c:1},
      {q:"« Cependant » :",opts:["Therefore","However","Moreover"],c:1},
      {q:"Conditionnel passé :",opts:["would + inf","would have + pp","had + pp"],c:1}]}
    ]},
C1:{title:"Anglais avancé",description:"Nuances, registres, idiomes.",
    skills:["Nuances","Registres","Idiomes"],
    lessons:[{id:"c1-l1",title:"Nuances et registres",objective:"Choisir le mot juste.",
     vocabulary:[{en:"to grasp",fr:"saisir",ex:"I grasp the concept."},{en:"subtle",fr:"subtil",ex:"A subtle difference."},
     {en:"nonetheless",fr:"néanmoins",ex:"Nonetheless, I agree."},{en:"to shed light on",fr:"éclairer",ex:"This study sheds light on the issue."}],
     grammar:{rule:"Modaux de nuance : might, may, could, should, ought to.",
      examples:["This <strong>might</strong> be true.","You <strong>ought to</strong> reconsider."],
      exercise:[{q:"« Cela pourrait être vrai » :",opts:["This is true.","This might be true.","This must be true."],c:1},
      {q:"Pour nuancer :",opts:["always","arguably","never"],c:1}]},
     pronunciation:["Accent tonique : PREsent / preSENT."],
     expressions:["That being said…","By and large…","To put it another way…"],
     listening:["That being said, I see your point.","By and large, the results are good."],
     reading:{text:"The findings, while preliminary, shed light on a subtle phenomenon.",
      questions:[{q:"Findings are:",opts:["conclusive","preliminary","outdated"],c:1},{q:"Author suggests:",opts:["Ignoring","Interpreting with caution","Publishing"],c:1}]},
     writing:"Essai sur les réseaux sociaux.",speaking:"Position nuancée (3 min).",
     review:["Conditionnels"],
     endTest:[{q:"« Néanmoins » :",opts:["But","Nonetheless","Anyway"],c:1},
      {q:"Pour atténuer :",opts:["This is wrong.","This might be inaccurate.","This is false."],c:1},
      {q:"« Éclairer un sujet » :",opts:["light up","shed light on","turn on"],c:1}]}
    ]},
C2:{title:"Maîtrise très avancée",description:"Idiomes, style natif.",
    skills:["Idiomes rares","Style","Persuasion"],
    lessons:[{id:"c2-l1",title:"Idiomes et style",objective:"Employer idiomes et style naturel.",
     vocabulary:[{en:"to bite the bullet",fr:"serrer les dents",ex:"He bit the bullet."},{en:"on the fence",fr:"indécis",ex:"I'm on the fence."},
     {en:"a blessing in disguise",fr:"un mal pour un bien",ex:"It was a blessing in disguise."},
     {en:"to cut corners",fr:"bâcler",ex:"Don't cut corners."},{en:"to go the extra mile",fr:"en faire plus",ex:"She goes the extra mile."}],
     grammar:{rule:"Inversion stylistique après un adverbe négatif.",
      examples:["<strong>Never have I</strong> seen such a thing.","<strong>Rarely does she</strong> complain."],
      exercise:[{q:"« Jamais je n'ai vu » :",opts:["Never I have seen.","Never have I seen.","I never have seen."],c:1},
      {q:"« Serrer les dents » :",opts:["bite the bullet","break the ice","hit the sack"],c:0}]},
     pronunciation:["Intonation montante pour l'ironie."],
     expressions:["It goes without saying…","That ship has sailed.","Call a spade a spade."],
     listening:["At the end of the day, it was a blessing in disguise.","Never have I seen such dedication."],
     reading:{text:"Rarely does one encounter a leader who not only inspires but also listens.",
      questions:[{q:"The leader is:",opts:["distant","inspiring and attentive","careless"],c:1},{q:"Success came from:",opts:["luck","adversity","connections"],c:1}]},
     writing:"Discours persuasif (200 mots).",speaking:"Thèse complexe (4 min).",
     review:["Nuances et registres"],
     endTest:[{q:"« Un mal pour un bien » :",opts:["a piece of cake","a blessing in disguise","a drop in the ocean"],c:1},
      {q:"Inversion correcte :",opts:["Rarely she complains.","Rarely does she complain.","She rarely does complain."],c:1},
      {q:"« Bâcler » :",opts:["cut corners","take turns","make ends meet"],c:0}]}
    ]}
};

/* =====================================================================
   4. TEST DE NIVEAU
===================================================================== */

const placementTest = [
    {level:"A1", q:"I ___ a student.", opts:["am","is","are"], c:0},
    {level:"A1", q:"« Enchanté » :", opts:["Goodbye","Nice to meet you","See you"], c:1},
    {level:"A1", q:"She ___ two brothers.", opts:["have","has","haves"], c:1},
    {level:"A2", q:"I ___ to the cinema last night.", opts:["go","went","gone"], c:1},
    {level:"A2", q:"« Je me réveille à 7h » :", opts:["I wake up at 7.","I waking up at 7.","I am wake at 7."], c:0},
    {level:"A2", q:"There ___ some milk.", opts:["is","are","have"], c:0},
    {level:"B1", q:"I have lived here ___ 2018.", opts:["for","since","during"], c:1},
    {level:"B1", q:"She's the woman ___ helped me.", opts:["which","who","whose"], c:1},
    {level:"B1", q:"If it rains, we ___ at home.", opts:["stay","will stay","stayed"], c:1},
    {level:"B2", q:"If I ___ you, I would apologise.", opts:["am","was","were"], c:2},
    {level:"B2", q:"« Par conséquent » :", opts:["Therefore","Because","Anyway"], c:0},
    {level:"B2", q:"He said he ___ finished.", opts:["has","had","have"], c:1},
    {level:"C1", q:"___ had I arrived when the phone rang.", opts:["Hardly","Rarely","Never"], c:0},
    {level:"C1", q:"« Éclairer un sujet » :", opts:["light up","shed light on","brighten"], c:1},
    {level:"C1", q:"Nuance :", opts:["This is false.","This might be inaccurate.","This is wrong."], c:1},
    {level:"C2", q:"« Serrer les dents » :", opts:["bite the bullet","break the ice","hit the sack"], c:0},
    {level:"C2", q:"Inversion :", opts:["Never I have seen it.","Never have I seen it.","I never have seen it."], c:1},
    {level:"C2", q:"« Bâcler » :", opts:["cut corners","take turns","make ends meet"], c:0}
];

/* =====================================================================
   5. VERBES IRRÉGULIERS
===================================================================== */

const irregularVerbs = [
    {base:"be",past:"was/were",pp:"been",fr:"être"},{base:"have",past:"had",pp:"had",fr:"avoir"},
    {base:"do",past:"did",pp:"done",fr:"faire"},{base:"say",past:"said",pp:"said",fr:"dire"},
    {base:"go",past:"went",pp:"gone",fr:"aller"},{base:"get",past:"got",pp:"gotten/got",fr:"obtenir"},
    {base:"make",past:"made",pp:"made",fr:"fabriquer"},{base:"know",past:"knew",pp:"known",fr:"savoir"},
    {base:"think",past:"thought",pp:"thought",fr:"penser"},{base:"take",past:"took",pp:"taken",fr:"prendre"},
    {base:"see",past:"saw",pp:"seen",fr:"voir"},{base:"come",past:"came",pp:"come",fr:"venir"},
    {base:"give",past:"gave",pp:"given",fr:"donner"},{base:"find",past:"found",pp:"found",fr:"trouver"},
    {base:"tell",past:"told",pp:"told",fr:"raconter"},{base:"feel",past:"felt",pp:"felt",fr:"ressentir"},
    {base:"leave",past:"left",pp:"left",fr:"partir"},{base:"become",past:"became",pp:"become",fr:"devenir"},
    {base:"mean",past:"meant",pp:"meant",fr:"signifier"},{base:"keep",past:"kept",pp:"kept",fr:"garder"},
    {base:"let",past:"let",pp:"let",fr:"laisser"},{base:"begin",past:"began",pp:"begun",fr:"commencer"},
    {base:"show",past:"showed",pp:"shown",fr:"montrer"},{base:"hear",past:"heard",pp:"heard",fr:"entendre"},
    {base:"run",past:"ran",pp:"run",fr:"courir"},{base:"hold",past:"held",pp:"held",fr:"tenir"},
    {base:"bring",past:"brought",pp:"brought",fr:"apporter"},{base:"write",past:"wrote",pp:"written",fr:"écrire"},
    {base:"sit",past:"sat",pp:"sat",fr:"s'asseoir"},{base:"stand",past:"stood",pp:"stood",fr:"se lever"},
    {base:"lose",past:"lost",pp:"lost",fr:"perdre"},{base:"pay",past:"paid",pp:"paid",fr:"payer"},
    {base:"meet",past:"met",pp:"met",fr:"rencontrer"},{base:"set",past:"set",pp:"set",fr:"poser"},
    {base:"learn",past:"learnt/learned",pp:"learnt/learned",fr:"apprendre"},
    {base:"lead",past:"led",pp:"led",fr:"mener"},{base:"understand",past:"understood",pp:"understood",fr:"comprendre"},
    {base:"speak",past:"spoke",pp:"spoken",fr:"parler"},{base:"read",past:"read",pp:"read",fr:"lire"},
    {base:"spend",past:"spent",pp:"spent",fr:"dépenser"},{base:"grow",past:"grew",pp:"grown",fr:"grandir"},
    {base:"win",past:"won",pp:"won",fr:"gagner"},{base:"buy",past:"bought",pp:"bought",fr:"acheter"},
    {base:"send",past:"sent",pp:"sent",fr:"envoyer"},{base:"build",past:"built",pp:"built",fr:"construire"},
    {base:"fall",past:"fell",pp:"fallen",fr:"tomber"},{base:"cut",past:"cut",pp:"cut",fr:"couper"},
    {base:"drink",past:"drank",pp:"drunk",fr:"boire"},{base:"drive",past:"drove",pp:"driven",fr:"conduire"},
    {base:"eat",past:"ate",pp:"eaten",fr:"manger"},{base:"sleep",past:"slept",pp:"slept",fr:"dormir"},
    {base:"swim",past:"swam",pp:"swum",fr:"nager"},{base:"forget",past:"forgot",pp:"forgotten",fr:"oublier"},
    {base:"forgive",past:"forgave",pp:"forgiven",fr:"pardonner"},{base:"break",past:"broke",pp:"broken",fr:"casser"},
    {base:"choose",past:"chose",pp:"chosen",fr:"choisir"},{base:"freeze",past:"froze",pp:"frozen",fr:"geler"},
    {base:"wake",past:"woke",pp:"woken",fr:"se réveiller"},{base:"wear",past:"wore",pp:"worn",fr:"porter"},
    {base:"sing",past:"sang",pp:"sung",fr:"chanter"},{base:"ring",past:"rang",pp:"rung",fr:"sonner"},
    {base:"fly",past:"flew",pp:"flown",fr:"voler"},{base:"throw",past:"threw",pp:"thrown",fr:"lancer"},
    {base:"blow",past:"blew",pp:"blown",fr:"souffler"},{base:"ride",past:"rode",pp:"ridden",fr:"monter"},
    {base:"hide",past:"hid",pp:"hidden",fr:"cacher"},{base:"bite",past:"bit",pp:"bitten",fr:"mordre"},
    {base:"fight",past:"fought",pp:"fought",fr:"se battre"},{base:"teach",past:"taught",pp:"taught",fr:"enseigner"},
    {base:"catch",past:"caught",pp:"caught",fr:"attraper"},{base:"sell",past:"sold",pp:"sold",fr:"vendre"},
    {base:"draw",past:"drew",pp:"drawn",fr:"dessiner"},{base:"dream",past:"dreamt/dreamed",pp:"dreamt/dreamed",fr:"rêver"},
    {base:"hurt",past:"hurt",pp:"hurt",fr:"blesser"},{base:"put",past:"put",pp:"put",fr:"mettre"},
    {base:"quit",past:"quit",pp:"quit",fr:"quitter"},{base:"shine",past:"shone",pp:"shone",fr:"briller"},
    {base:"shoot",past:"shot",pp:"shot",fr:"tirer"}
];

const regularVerbs = [
    {base:"work",fr:"travailler"},{base:"play",fr:"jouer"},{base:"watch",fr:"regarder"},
    {base:"study",fr:"étudier"},{base:"love",fr:"aimer"},{base:"live",fr:"vivre"},
    {base:"talk",fr:"parler"},{base:"walk",fr:"marcher"},{base:"look",fr:"regarder"},
    {base:"call",fr:"appeler"},{base:"help",fr:"aider"},{base:"start",fr:"commencer"},
    {base:"finish",fr:"terminer"},{base:"open",fr:"ouvrir"},{base:"close",fr:"fermer"},
    {base:"listen",fr:"écouter"},{base:"cook",fr:"cuisiner"},{base:"clean",fr:"nettoyer"},
    {base:"dance",fr:"danser"},{base:"travel",fr:"voyager"},{base:"visit",fr:"visiter"},
    {base:"arrive",fr:"arriver"},{base:"wait",fr:"attendre"},{base:"ask",fr:"demander"},
    {base:"answer",fr:"répondre"},{base:"change",fr:"changer"},{base:"decide",fr:"décider"},
    {base:"enjoy",fr:"apprécier"},{base:"explain",fr:"expliquer"},{base:"follow",fr:"suivre"},
    {base:"happen",fr:"se produire"},{base:"invite",fr:"inviter"},{base:"join",fr:"rejoindre"},
    {base:"move",fr:"bouger"},{base:"need",fr:"avoir besoin"},{base:"offer",fr:"offrir"},
    {base:"prefer",fr:"préférer"},{base:"prepare",fr:"préparer"},{base:"remember",fr:"se rappeler"},
    {base:"return",fr:"retourner"},{base:"stay",fr:"rester"},{base:"stop",fr:"arrêter"},
    {base:"try",fr:"essayer"},{base:"use",fr:"utiliser"},{base:"want",fr:"vouloir"}
];

/* =====================================================================
   6. TEMPS ANGLAIS (12)
===================================================================== */

const tenses = [
    {id:"present-simple",name:"Present Simple",level:"A1",form:"base (+s à la 3ᵉ pers.)",ex:"I work every day.",
     use:"On utilise le <strong>Present Simple</strong> quand on parle de <strong>quelque chose d'actuel, d'habituel ou de permanent</strong>.",
     explain:"C'est le temps des <strong>vérités générales</strong>, des <strong>habitudes</strong>, des <strong>goûts</strong> et des <strong>routines</strong>.",
     examples:[{en:"I live in Paris.",comment:"Vrai maintenant, en permanence."},{en:"She works every day.",comment:"C'est son habitude."},
     {en:"Water boils at 100°C.",comment:"Fait général."},{en:"I like coffee.",comment:"Goût, état permanent."}],
     comparison:{wrong:{text:"I am living in Paris.",note:"On ne l'utilise pas pour un état permanent."},
     right:{text:"I live in Paris.",note:"Présent simple pour état permanent."}},
     markers:["always","usually","often","sometimes","never","every day","on Mondays"],
     memory:"Astuce : si tu peux dire « tous les jours / souvent / jamais » → Present Simple.",
     pitfall:"Ne pas oublier le <strong>-s</strong> à la 3ᵉ personne : he work<strong>s</strong>."},
    {id:"present-continuous",name:"Present Continuous",level:"A1",form:"am/is/are + V-ing",ex:"I am working now.",
     use:"On utilise le <strong>Present Continuous</strong> quand on parle de <strong>quelque chose qui se passe maintenant, en ce moment précis</strong>.",
     explain:"C'est le temps de l'<strong>action en cours</strong>.",
     examples:[{en:"I am working now.",comment:"Action en ce moment."},{en:"She is reading a book.",comment:"Elle est en train de lire."},
     {en:"They are staying with us this week.",comment:"Situation temporaire."},{en:"We are meeting Tom tomorrow.",comment:"Projet déjà prévu."}],
     comparison:{wrong:{text:"I work now.",note:"« Maintenant » demande le continuous."},
     right:{text:"I am working now.",note:"Action en cours."}},
     markers:["now","right now","at the moment","today","this week","Look!","Listen!"],
     memory:"Astuce : si tu peux dire « là, maintenant », utilise <strong>am/is/are + V-ing</strong>.",
     pitfall:"Ne pas confondre avec le Present Simple."},
    {id:"present-perfect",name:"Present Perfect",level:"A2",form:"have/has + V-ed (pp)",ex:"I have worked here for 3 years.",
     use:"On utilise le <strong>Present Perfect</strong> quand on parle d'une action passée qui a <strong>un lien avec le présent</strong>.",
     explain:"Il sert à faire un <strong>bilan</strong>, à parler d'une <strong>expérience de vie</strong>, ou d'une action qui <strong>continue encore</strong>.",
     examples:[{en:"I have worked here for 3 years.",comment:"J'ai commencé il y a 3 ans et je continue."},
     {en:"I have visited Paris three times.",comment:"Expérience de vie."},{en:"She has just arrived.",comment:"Action récente."},
     {en:"I haven't finished yet.",comment:"Bilan actuel."}],
     comparison:{wrong:{text:"I have seen him yesterday.",note:"« Yesterday » est précis → Past Simple."},
     right:{text:"I saw him yesterday.",note:"Past Simple car moment précis."}},
     markers:["already","yet","just","ever","never","since","for","so far"],
     memory:"Astuce : <strong>since</strong> + point, <strong>for</strong> + durée. Jamais de moment précis.",
     pitfall:"On ne dit jamais <em>I have seen him yesterday</em>."},
    {id:"present-perfect-continuous",name:"Present Perfect Continuous",level:"B1",form:"have/has been + V-ing",ex:"I have been working since 8 am.",
     use:"On insiste sur la <strong>durée</strong> d'une action qui a commencé dans le passé et qui <strong>continue encore</strong>.",
     explain:"À la différence du Present Perfect simple, on <strong>insiste sur la durée</strong>.",
     examples:[{en:"I have been working since 8 am.",comment:"J'ai commencé à 8h et je travaille encore."},
     {en:"She has been studying for two hours.",comment:"Durée mise en avant."},
     {en:"How long have you been learning English?",comment:"Question de durée."},
     {en:"It has been raining all day.",comment:"Ça continue."}],
     comparison:{wrong:{text:"I am working for two hours.",note:"La durée demande le present perfect continuous."},
     right:{text:"I have been working for two hours.",note:"Action continue."}},
     markers:["since","for","all day","lately","how long…?"],
     memory:"Astuce : « <strong>depuis combien de temps ?</strong> » → Present Perfect Continuous.",
     pitfall:"Insiste sur la <strong>durée</strong>."},
    {id:"past-simple",name:"Past Simple",level:"A1",form:"V-ed (ou irrégulier)",ex:"I worked yesterday.",
     use:"On utilise le <strong>Past Simple</strong> quand on parle d'une action <strong>terminée à un moment précis du passé</strong>.",
     explain:"C'est le temps du <strong>récit passé</strong>.",
     examples:[{en:"I worked yesterday.",comment:"Action terminée."},{en:"She went to Berlin in 2020.",comment:"Moment précis."},
     {en:"They played football last Sunday.",comment:"Action passée et terminée."},{en:"When I was a child, I liked chocolate.",comment:"État passé."}],
     comparison:{wrong:{text:"I have worked yesterday.",note:"Moment précis → Past Simple."},
     right:{text:"I worked yesterday.",note:"Past Simple."}},
     markers:["yesterday","last week","in 2020","two days ago","then","when"],
     memory:"Astuce : si tu peux ajouter « hier / la semaine dernière » → Past Simple.",
     pitfall:"Avec un marqueur de temps passé précis, jamais le Present Perfect."},
    {id:"past-continuous",name:"Past Continuous",level:"A2",form:"was/were + V-ing",ex:"I was working at 8 pm.",
     use:"On utilise le <strong>Past Continuous</strong> quand on parle d'une action <strong>en cours dans le passé</strong>, souvent interrompue.",
     explain:"C'est le temps de l'<strong>arrière-plan</strong> dans un récit.",
     examples:[{en:"I was working at 8 pm.",comment:"Action en cours hier soir."},
     {en:"She was cooking when I arrived.",comment:"Arrière-plan + action courte."},
     {en:"We were walking in the rain.",comment:"Action en cours."},{en:"They were talking all evening.",comment:"Durée dans le passé."}],
     comparison:{wrong:{text:"When she called, I cooked dinner.",note:"Sens différent."},
     right:{text:"When she called, I was cooking dinner.",note:"Arrière-plan."}},
     markers:["while","when","at that moment","all day yesterday"],
     memory:"Astuce : <strong>when</strong> = action courte, <strong>while</strong> = action longue.",
     pitfall:"Past Continuous = <strong>fond</strong>, Past Simple = <strong>action ponctuelle</strong>."},
    {id:"past-perfect",name:"Past Perfect",level:"B1",form:"had + V-ed (pp)",ex:"I had worked before he came.",
     use:"On utilise le <strong>Past Perfect</strong> pour une action <strong>antérieure à une autre action passée</strong>.",
     explain:"Il marque <strong>l'antériorité</strong> dans le passé.",
     examples:[{en:"When I arrived, he had left.",comment:"Il est parti AVANT que j'arrive."},
     {en:"She had already eaten when I called.",comment:"Manger AVANT l'appel."},
     {en:"They had finished before the deadline.",comment:"Action antérieure."},
     {en:"I realised I had forgotten my keys.",comment:"Antérieur."}],
     comparison:{wrong:{text:"When I arrived, he left.",note:"Les deux actions au même niveau."},
     right:{text:"When I arrived, he had left.",note:"Antériorité marquée."}},
     markers:["before","after","already","by the time","when"],
     memory:"Astuce : Past Perfect = le <strong>« passé du passé »</strong>.",
     pitfall:"Sert à marquer l'<strong>antériorité</strong>."},
    {id:"past-perfect-continuous",name:"Past Perfect Continuous",level:"B2",form:"had been + V-ing",ex:"I had been working for 2 hours when he called.",
     use:"On utilise le <strong>Past Perfect Continuous</strong> pour la <strong>durée</strong> d'une action avant une autre action passée.",
     explain:"Comme le Past Perfect simple, mais en <strong>insistant sur la durée</strong>.",
     examples:[{en:"I had been working for 2 hours when he called.",comment:"Durée avant un moment passé."},
     {en:"She had been studying since morning.",comment:"Durée."},{en:"They had been waiting for an hour.",comment:"Durée cumulée."},
     {en:"It had been raining all night.",comment:"Durée dans le passé."}],
     comparison:{wrong:{text:"I had worked for 2 hours when he called.",note:"Moins naturel."},
     right:{text:"I had been working for 2 hours when he called.",note:"Insiste sur la durée."}},
     markers:["for","since","how long","when","before"],
     memory:"Astuce : comme le Past Perfect, mais avec <strong>for / since</strong>.",
     pitfall:"Insiste sur la <strong>durée</strong>."},
    {id:"future-simple",name:"Future Simple",level:"A1",form:"will + V",ex:"I will work tomorrow.",
     use:"On utilise le <strong>Future Simple</strong> pour une <strong>prédiction</strong>, une <strong>décision spontanée</strong> ou une <strong>promesse</strong>.",
     explain:"Le <em>will</em> est utilisé quand on décide au moment où on parle.",
     examples:[{en:"I will help you.",comment:"Décision spontanée."},{en:"It will rain tomorrow.",comment:"Prédiction."},
     {en:"I promise I will call you.",comment:"Promesse."},{en:"I think she will win.",comment:"Opinion."}],
     comparison:{wrong:{text:"Look at the clouds! It will rain.",note:"Meilleur avec going to."},
     right:{text:"Look at the clouds! It is going to rain.",note:"Évidence visible."}},
     markers:["tomorrow","next week","soon","in 2 days","I think…"],
     memory:"Astuce : <strong>will</strong> = décision ou prédiction. <strong>going to</strong> = intention.",
     pitfall:"<em>going to</em> = intention ; <em>will</em> = décision ou prédiction."},
    {id:"future-continuous",name:"Future Continuous",level:"B1",form:"will be + V-ing",ex:"I will be working at 8 pm tomorrow.",
     use:"On utilise le <strong>Future Continuous</strong> pour une action qui <strong>sera en cours</strong> à un moment précis du futur.",
     explain:"Imagine une photo prise à un moment futur.",
     examples:[{en:"I will be working at 8 pm tomorrow.",comment:"En train de travailler à 8h."},
     {en:"She will be studying when you arrive.",comment:"Elle sera en train d'étudier."},
     {en:"Don't call at 7, I will be having dinner.",comment:"Action en cours future."},
     {en:"This time next week, I will be lying on the beach.",comment:"Situation future."}],
     comparison:{wrong:{text:"I will work at 8 pm tomorrow.",note:"Sens différent."},
     right:{text:"I will be working at 8 pm tomorrow.",note:"Action en cours à 8h."}},
     markers:["at 8 pm tomorrow","this time next week","while","when"],
     memory:"Astuce : <strong>« être en train de »</strong> dans le futur.",
     pitfall:"Décrit une action <strong>en cours</strong>."},
    {id:"future-perfect",name:"Future Perfect",level:"B2",form:"will have + V-ed (pp)",ex:"I will have finished by 6 pm.",
     use:"On utilise le <strong>Future Perfect</strong> pour une action qui <strong>sera terminée avant un moment précis du futur</strong>.",
     explain:"Ce qui sera déjà accompli à ce moment-là est au Future Perfect.",
     examples:[{en:"I will have finished by 6 pm.",comment:"Terminé avant 18h."},
     {en:"By 2030, she will have graduated.",comment:"Terminé avant 2030."},
     {en:"They will have arrived by midnight.",comment:"Terminé avant minuit."},
     {en:"By the time you read this, I will have left.",comment:"Antériorité future."}],
     comparison:{wrong:{text:"At 6 pm, I finish.",note:"Contexte faux."},
     right:{text:"By 6 pm, I will have finished.",note:"Terminé avant 18h."}},
     markers:["by","by then","by the time","before"],
     memory:"Astuce : si tu peux dire <strong>« avant tel moment »</strong> → Future Perfect.",
     pitfall:"Toujours avec <strong>by</strong> + moment futur."},
    {id:"future-perfect-continuous",name:"Future Perfect Continuous",level:"C1",form:"will have been + V-ing",ex:"I will have been working for 3 hours by 5 pm.",
     use:"On utilise le <strong>Future Perfect Continuous</strong> pour la <strong>durée cumulée d'une action à un moment futur</strong>.",
     explain:"Temps rare qui insiste sur la <strong>durée</strong>.",
     examples:[{en:"By 5 pm, I will have been working for 3 hours.",comment:"Durée cumulée à 17h."},
     {en:"In June, we will have been living here for two years.",comment:"Durée cumulée."},
     {en:"She will have been teaching for 20 years by then.",comment:"Durée cumulée."},
     {en:"By the time you arrive, I will have been waiting for an hour.",comment:"Durée future."}],
     comparison:{wrong:{text:"I will be working for 3 hours by 5 pm.",note:"Ambigu."},
     right:{text:"I will have been working for 3 hours by 5 pm.",note:"Durée cumulée."}},
     markers:["by … for …","by the time"],
     memory:"Astuce : <strong>by</strong> + moment futur + <strong>for</strong> + durée.",
     pitfall:"Temps rare, insiste sur la <strong>durée cumulée</strong>."}
];
/* =====================================================================
   ENGLISH COACH — v3.1 — PARTIE 2/3
===================================================================== */

/* =====================================================================
   7. CONJUGAISON AUTO
===================================================================== */

function isVowel(c){ return "aeiou".includes(c); }
function isCVC(w){ if(w.length < 3) return false; const c1=w[w.length-3],v=w[w.length-2],c2=w[w.length-1]; return !isVowel(c1)&&isVowel(v)&&!isVowel(c2)&&!"wxy".includes(c2); }
function addIng(b){
    if(b === "be") return "being";
    if(b.endsWith("ie")) return b.slice(0,-2)+"ying";
    if(b.endsWith("e") && !b.endsWith("ee") && !b.endsWith("oe") && !b.endsWith("ye")) return b.slice(0,-1)+"ing";
    if(isCVC(b)) return b+b.slice(-1)+"ing";
    return b+"ing";
}
function addEd(b){
    if(b.endsWith("e")) return b+"d";
    if(b.endsWith("y") && !isVowel(b[b.length-2])) return b.slice(0,-1)+"ied";
    if(isCVC(b)) return b+b.slice(-1)+"ed";
    return b+"ed";
}
function addS3(b){
    if(b==="be") return "is"; if(b==="have") return "has"; if(b==="do") return "does"; if(b==="go") return "goes";
    if(/[sxz]$/.test(b) || /(sh|ch)$/.test(b)) return b+"es";
    if(b.endsWith("y") && !isVowel(b[b.length-2])) return b.slice(0,-1)+"ies";
    return b+"s";
}
function getVerbData(base){
    const irr = irregularVerbs.find(v => v.base === base);
    if(irr) return {base, fr:irr.fr, pastSimple:irr.past.split("/")[0], pastParticiple:irr.pp.split("/")[0], ing:addIng(base)};
    const reg = regularVerbs.find(v => v.base === base);
    return {base, fr: reg ? reg.fr : "", pastSimple:addEd(base), pastParticiple:addEd(base), ing:addIng(base)};
}
function conjugateAll(base){
    const v = getVerbData(base);
    const be = base === "be";
    const s3 = addS3(base);
    const P = ["I","you","he/she/it","we","they"];
    const bePresent = be ? ["am","are","is","are","are"] : null;
    const bePast = be ? ["was","were","was","were","were"] : null;
    const hh = ["have","have","has","have","have"];
    const dd = ["do","do","does","do","do"];
    const t = {};
    t["Present Simple"] = {
        aff: be ? bePresent : [base,base,s3,base,base],
        neg: be ? bePresent.map(b => b+" not") : dd.map(d => d+" not "+base),
        int: be ? bePresent.map((b,i) => b+" "+P[i]) : dd.map((d,i) => d+" "+P[i]+" "+base)
    };
    t["Present Continuous"] = {
        aff: ["am "+v.ing,"are "+v.ing,"is "+v.ing,"are "+v.ing,"are "+v.ing],
        neg: ["am not "+v.ing,"are not "+v.ing,"is not "+v.ing,"are not "+v.ing,"are not "+v.ing],
        int: ["Am I "+v.ing+"?","Are you "+v.ing+"?","Is he/she/it "+v.ing+"?","Are we "+v.ing+"?","Are they "+v.ing+"?"]
    };
    t["Present Perfect"] = {
        aff: hh.map(h => h+" "+v.pastParticiple),
        neg: hh.map(h => h+" not "+v.pastParticiple),
        int: hh.map((h,i) => h.charAt(0).toUpperCase()+h.slice(1)+" "+P[i]+" "+v.pastParticiple+"?")
    };
    t["Present Perfect Continuous"] = {
        aff: hh.map(h => h+" been "+v.ing),
        neg: hh.map(h => h+" not been "+v.ing),
        int: hh.map((h,i) => h.charAt(0).toUpperCase()+h.slice(1)+" "+P[i]+" been "+v.ing+"?")
    };
    t["Past Simple"] = {
        aff: be ? bePast : [v.pastSimple,v.pastSimple,v.pastSimple,v.pastSimple,v.pastSimple],
        neg: be ? bePast.map(b => b+" not") : ["did not "+base,"did not "+base,"did not "+base,"did not "+base,"did not "+base],
        int: be ? bePast.map((b,i) => b.charAt(0).toUpperCase()+b.slice(1)+" "+P[i]+"?") :
             ["Did I "+base+"?","Did you "+base+"?","Did he/she/it "+base+"?","Did we "+base+"?","Did they "+base+"?"]
    };
    t["Past Continuous"] = {
        aff: ["was "+v.ing,"were "+v.ing,"was "+v.ing,"were "+v.ing,"were "+v.ing],
        neg: ["was not "+v.ing,"were not "+v.ing,"was not "+v.ing,"were not "+v.ing,"were not "+v.ing],
        int: ["Was I "+v.ing+"?","Were you "+v.ing+"?","Was he/she/it "+v.ing+"?","Were we "+v.ing+"?","Were they "+v.ing+"?"]
    };
    t["Past Perfect"] = {
        aff: P.map(() => "had "+v.pastParticiple),
        neg: P.map(() => "had not "+v.pastParticiple),
        int: P.map(p => "Had "+p+" "+v.pastParticiple+"?")
    };
    t["Past Perfect Continuous"] = {
        aff: P.map(() => "had been "+v.ing),
        neg: P.map(() => "had not been "+v.ing),
        int: P.map(p => "Had "+p+" been "+v.ing+"?")
    };
    t["Future Simple"] = {
        aff: P.map(() => "will "+base),
        neg: P.map(() => "will not "+base),
        int: P.map(p => "Will "+p+" "+base+"?")
    };
    t["Future Continuous"] = {
        aff: P.map(() => "will be "+v.ing),
        neg: P.map(() => "will not be "+v.ing),
        int: P.map(p => "Will "+p+" be "+v.ing+"?")
    };
    t["Future Perfect"] = {
        aff: P.map(() => "will have "+v.pastParticiple),
        neg: P.map(() => "will not have "+v.pastParticiple),
        int: P.map(p => "Will "+p+" have "+v.pastParticiple+"?")
    };
    t["Future Perfect Continuous"] = {
        aff: P.map(() => "will have been "+v.ing),
        neg: P.map(() => "will not have been "+v.ing),
        int: P.map(p => "Will "+p+" have been "+v.ing+"?")
    };
    return t;
}

/* =====================================================================
   8. ÉTAT
===================================================================== */

const STORAGE_KEY = "edc.progress.v3";

const defaultProgress = {
    level:null, levelTestDone:false, lastTestScore:0,
    lessonsDone:{}, lessonScores:{}, vocab:{}, errors:{}, history:[],
    verbesDone:{}, verbesScores:{}, phraseState:{}, intlScores:[],
    xp:0, streak:0, lastStudyDay:null, dictScores:{},
    narutoDone:{}, narutoScores:{}, narutoLast:0, updatedAt:0
};
let progress = loadProgress();
function loadProgress(){
    try{
        const raw = localStorage.getItem(STORAGE_KEY);
        if(!raw) return structuredClone(defaultProgress);
        return {...structuredClone(defaultProgress), ...JSON.parse(raw)};
    } catch { return structuredClone(defaultProgress); }
}
function saveProgress(){
    progress.updatedAt = Date.now();
    try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); }catch{}
}
const state = {
    level: progress.level || "A1",
    speechRate: 0.82, voices: [],
    activeLesson: null,
    verbesSubtab: "overview"
};

let autoCheckTimer = null;

/* =====================================================================
   9. UTILITAIRES
===================================================================== */

const $ = id => document.getElementById(id);
function escapeHTML(str){
    return String(str).replace(/[&<>"']/g, m => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));
}
/* Nettoyage : minuscules, apostrophes courbes → droites, tirets → espace, ponctuation retirée */
function cleanText(t, keepCase){
    const base = String(t);
    return (keepCase ? base : base.toLowerCase())
        .replace(/[\u2018\u2019\u02BC`\u00B4]/g, "'")
        .replace(/[\u2010-\u2015-]/g, " ")
        .replace(/[^\p{L}\p{N}'\s]/gu, " ")
        .replace(/(^|\s)'+/g, "$1").replace(/'+(?=\s|$)/g, "")
        .trim();
}
function stripPunctuation(t){ return cleanText(t, false); }
function displayWords(t){ return cleanText(t, true).split(/\s+/).filter(Boolean); }   /* mots avec leurs majuscules, pour l'affichage */
function normalize(t){ return stripPunctuation(t).replace(/\s+/g," "); }
function splitWords(s){ return normalize(s).split(" ").filter(Boolean); }

/* Orthographe britannique / américaine : les deux sont acceptées */
const SPELLING_VARIANTS = {
    travelled:"traveled", travelling:"traveling", traveller:"traveler", cancelled:"canceled", cancelling:"canceling",
    realise:"realize", realised:"realized", realising:"realizing", realises:"realizes",
    organise:"organize", organised:"organized", recognise:"recognize", recognised:"recognized",
    apologise:"apologize", apologised:"apologized", polarised:"polarized", analyse:"analyze", analysed:"analyzed",
    practise:"practice", practised:"practiced", practising:"practicing",
    colour:"color", colours:"colors", favourite:"favorite", favourites:"favorites", neighbour:"neighbor", neighbours:"neighbors",
    harbour:"harbor", rigour:"rigor", behaviour:"behavior", honour:"honor", humour:"humor", labour:"labor", flavour:"flavor",
    centre:"center", centres:"centers", theatre:"theater", metre:"meter", defence:"defense", offence:"offense",
    grey:"gray", programme:"program", judgement:"judgment", ageing:"aging", learnt:"learned", spelt:"spelled",
    dreamt:"dreamed", burnt:"burned", organisation:"organization", organisations:"organizations", civilisation:"civilization", criticise:"criticize", memorise:"memorize", specialise:"specialize", emphasise:"emphasize", favour:"favor", armour:"armor", travellers:"travelers", fibre:"fiber", sceptical:"skeptical", mum:"mom", whilst:"while", catalogue:"catalog", licence:"license"
};
function sameWord(a, b){ return a === b || (SPELLING_VARIANTS[a] || a) === (SPELLING_VARIANTS[b] || b); }

/* Alignement mot à mot (plus longue sous-séquence commune) :
   un mot oublié ne décale plus toutes les erreurs suivantes. */
function diffWords(exp, usr){
    const n = exp.length, m = usr.length;
    const dp = Array.from({length:n+1}, () => new Uint16Array(m+1));
    for(let i = n-1; i >= 0; i--)
        for(let j = m-1; j >= 0; j--)
            dp[i][j] = sameWord(exp[i], usr[j]) ? dp[i+1][j+1] + 1 : Math.max(dp[i+1][j], dp[i][j+1]);
    const raw = []; let i = 0, j = 0;
    while(i < n && j < m){
        if(sameWord(exp[i], usr[j])){ raw.push({t:"ok", exp:exp[i], usr:usr[j], ei:i}); i++; j++; }
        else if(dp[i+1][j] >= dp[i][j+1]){ raw.push({t:"missing", exp:exp[i], ei:i}); i++; }
        else { raw.push({t:"extra", usr:usr[j]}); j++; }
    }
    while(i < n){ raw.push({t:"missing", exp:exp[i], ei:i}); i++; }
    while(j < m) raw.push({t:"extra", usr:usr[j++]});
    /* un mot attendu + un mot écrit côte à côte = faute d'orthographe (substitution) */
    const out = []; let k = 0;
    while(k < raw.length){
        if(raw[k].t === "ok"){ out.push(raw[k++]); continue; }
        const M = [], E = [];
        while(k < raw.length && raw[k].t !== "ok"){ (raw[k].t === "missing" ? M : E).push(raw[k]); k++; }
        const pairs = Math.min(M.length, E.length);
        for(let x = 0; x < pairs; x++) out.push({t:"wrong", exp:M[x].exp, usr:E[x].usr, ei:M[x].ei});
        for(let x = pairs; x < M.length; x++) out.push(M[x]);
        for(let x = pairs; x < E.length; x++) out.push(E[x]);
    }
    return out;
}

/* Mélange des options d'une question (la bonne réponse n'est plus toujours au même endroit) */
function shuffleOpts(q){
    const idx = shuffle(q.opts.map((_, i) => i));
    return {...q, opts: idx.map(i => q.opts[i]), c: idx.indexOf(q.c)};
}

/* =====================================================================
   9b. PROGRESSION : XP, série de jours, erreurs, notifications
===================================================================== */

function localDay(d = new Date()){
    return d.getFullYear() + "-" + String(d.getMonth()+1).padStart(2,"0") + "-" + String(d.getDate()).padStart(2,"0");
}
function currentStreak(){
    if(!progress.lastStudyDay) return 0;
    const y = new Date(); y.setDate(y.getDate() - 1);
    return (progress.lastStudyDay === localDay() || progress.lastStudyDay === localDay(y)) ? (progress.streak || 0) : 0;
}
function touchStreak(){
    const today = localDay();
    if(progress.lastStudyDay === today) return;
    progress.streak = currentStreak() + 1;
    progress.lastStudyDay = today;
}
function renderGamification(){
    const x = $("xpChip"), s = $("streakChip");
    if(x) x.textContent = "⭐ " + (progress.xp || 0) + " XP";
    if(s) s.textContent = "🔥 " + currentStreak();
}
function toast(msg){
    let box = $("toastBox");
    if(!box){ box = document.createElement("div"); box.id = "toastBox"; box.setAttribute("aria-live","polite"); document.body.appendChild(box); }
    const t = document.createElement("div"); t.className = "toast"; t.textContent = msg;
    box.appendChild(t);
    setTimeout(() => t.classList.add("out"), 1600);
    setTimeout(() => t.remove(), 2000);
}
function awardXP(n){
    if(!n) return;
    progress.xp = (progress.xp || 0) + n;
    touchStreak(); saveProgress(); renderGamification();
    toast("+" + n + " XP");
}
function trackError(key, n = 1){
    const e = progress.errors[key] || (progress.errors[key] = {count:0});
    e.count += n; e.last = Date.now(); saveProgress();
}
function confetti(){
    if(window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const colors = ["#4f46e5","#a855f7","#16a34a","#f59e0b","#ef4444","#0ea5e9"];
    for(let i = 0; i < 46; i++){
        const c = document.createElement("i"); c.className = "confetti";
        c.style.left = Math.random()*100 + "vw";
        c.style.background = colors[i % colors.length];
        c.style.animationDelay = (Math.random()*0.4) + "s";
        c.style.animationDuration = (1.6 + Math.random()*1.4) + "s";
        c.style.transform = "rotate(" + Math.random()*360 + "deg)";
        document.body.appendChild(c);
        setTimeout(() => c.remove(), 3400);
    }
}

function shuffle(arr){
    const a = [...arr];
    for(let i = a.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

/* =====================================================================
   10. SYNTHÈSE VOCALE
===================================================================== */

/* --- Choix intelligent de la voix : on note chaque voix anglaise et on prend la plus naturelle --- */
const VOICE_KEY = "edc.voice";
function voiceScore(v){
    const n = v.name || "", l = (v.lang || "").replace("_", "-");
    let sc = 0;
    if(/^en-US/i.test(l)) sc += 30; else if(/^en-(GB|AU|CA|IE)/i.test(l)) sc += 22; else if(/^en/i.test(l)) sc += 10; else return -1;
    if(/natural|neural|online/i.test(n)) sc += 60;                                   /* voix neuronales (Edge, Windows 11) */
    if(/Google (US|UK) English/i.test(n)) sc += 40;                                  /* voix Google de Chrome */
    if(/Samantha|Ava|Allison|Aria|Jenny|Guy|Serena|Daniel|Karen|Moira|Zoe/i.test(n)) sc += 28;   /* bonnes voix Apple / Microsoft */
    if(/enhanced|premium/i.test(n)) sc += 20;
    if(/espeak|compact|Albert|Bad News|Bahh|Bells|Boing|Bubbles|Cellos|Fred|Good News|Jester|Junior|Kathy|Organ|Ralph|Superstar|Trinoids|Whisper|Wobble|Zarvox/i.test(n)) sc -= 120;
    return sc;
}
function englishVoices(){
    return state.voices.map(v => ({v, sc: voiceScore(v)})).filter(x => x.sc >= 0).sort((a, b) => b.sc - a.sc).map(x => x.v);
}
function loadVoices(){
    if(!("speechSynthesis" in window)) return;
    state.voices = speechSynthesis.getVoices();
    renderVoicePicker();
}
function pickEnglishVoice(){
    if(!state.voices.length) return null;
    let saved = ""; try{ saved = localStorage.getItem(VOICE_KEY) || ""; }catch{}
    if(saved){ const v = state.voices.find(x => x.voiceURI === saved); if(v) return v; }
    return englishVoices()[0] || null;
}
function renderVoicePicker(){
    const sel = $("voiceSelect"); if(!sel) return;
    const list = englishVoices();
    if(!list.length){ sel.innerHTML = '<option value="">Voix du navigateur</option>'; return; }
    let saved = ""; try{ saved = localStorage.getItem(VOICE_KEY) || ""; }catch{}
    const best = list[0];
    sel.innerHTML = '<option value="">⭐ Automatique (meilleure voix)</option>' +
        list.map(v => `<option value="${escapeHTML(v.voiceURI)}">${escapeHTML(v.name)} (${escapeHTML(v.lang)})</option>`).join("");
    sel.value = list.some(v => v.voiceURI === saved) ? saved : "";
    sel.title = "Voix utilisée : " + (pickEnglishVoice() || best).name;
}
function setSpeaking(is){ document.querySelectorAll(".audio-icon-btn").forEach(b => b.classList.toggle("speaking", is)); }
let speakToken = 0;
let speakKeepAlive = null, speakWatchdog = null;
function clearSpeakTimers(){ clearInterval(speakKeepAlive); clearTimeout(speakWatchdog); speakKeepAlive = speakWatchdog = null; }
function stopSpeaking(){
    speakToken++;                       /* invalide les callbacks de la lecture en cours */
    clearSpeakTimers();
    if("speechSynthesis" in window) speechSynthesis.cancel();
    setSpeaking(false);
}
/* opts.rateMul : multiplicateur de vitesse (ex. 0.8 = lecture lente) */
function speak(text, onEnd, opts){
    if(!("speechSynthesis" in window)){ if(onEnd) onEnd(); return; }
    const token = ++speakToken;
    clearSpeakTimers();
    speechSynthesis.cancel();
    const mul = (opts && opts.rateMul) || 1;
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "en-US"; u.rate = Math.min(1.3, Math.max(0.4, state.speechRate * mul)); u.pitch = 1;
    const v = pickEnglishVoice(); if(v){ u.voice = v; u.lang = v.lang || "en-US"; }
    let finished = false;
    const finish = () => {
        if(finished || token !== speakToken) return;   /* lecture remplacée ou arrêtée : on ignore */
        finished = true; clearSpeakTimers(); setSpeaking(false);
        if(onEnd) onEnd();
    };
    u.onstart = () => { if(token === speakToken) setSpeaking(true); };
    u.onend = finish;
    u.onerror = e => { if(e && (e.error === "interrupted" || e.error === "canceled")) return; finish(); };
    speechSynthesis.speak(u);
    /* Chrome coupe parfois la voix après ~15 s : on la relance régulièrement */
    speakKeepAlive = setInterval(() => {
        if(token !== speakToken || !speechSynthesis.speaking) return;
        speechSynthesis.pause(); speechSynthesis.resume();
    }, 10000);
    /* Filet de sécurité : si le navigateur n'envoie jamais « fin de lecture », on continue quand même */
    const words = text.split(/\s+/).length;
    speakWatchdog = setTimeout(finish, Math.round(words * 520 / u.rate) + 6000);
}
if("speechSynthesis" in window){ loadVoices(); speechSynthesis.onvoiceschanged = loadVoices; }

/* =====================================================================
   11. ROUTING
===================================================================== */

const ROUTES = {
    "parcours": { tab:"parcours", title:"Parcours A1 → C2 | Apprendre l'anglais gratuitement", desc:"Programme structuré CECRL. 100% gratuit." },
    "phrase-training": { tab:"phraseTraining", title:"Phrase Training 200+ phrases | Apprendre l'anglais gratuitement", desc:"200+ phrases par niveau." },
    "dictee": { tab:"dictation", title:"Dictée anglaise mode école | Apprendre l'anglais gratuitement", desc:"Dictée avec histoire continue." },
    "verbes": { tab:"verbes", title:"Verbes et temps anglais expliqués | Apprendre l'anglais gratuitement", desc:"Les 12 temps anglais expliqués clairement." },
    "test-international": { tab:"testIntl", title:"Test d'anglais gratuit type EF SET | Apprendre l'anglais gratuitement", desc:"Test international gratuit." },
    "vocabulaire": { tab:"vocab", title:"Vocabulaire anglais SRS | Apprendre l'anglais gratuitement", desc:"Répétition espacée." },
    "a-propos": { tab:"apropos", title:"À propos — Kevino Totozafy | Apprendre l'anglais gratuitement", desc:"English Coach, plateforme gratuite." }
};

function getRouteFromHash(){
    const h = window.location.hash.replace(/^#\/?/, "").split("?")[0];
    return ROUTES[h] ? h : "parcours";
}

function applyRoute(route){
    if(route !== "dictee"){ cancelChain(); if(dictState.isPlaying) dictStop(); }
    const r = ROUTES[route] || ROUTES["parcours"];
    document.body.dataset.route = ROUTES[route] ? route : "parcours";
    document.title = r.title;
    let meta = document.querySelector('meta[name="description"]');
    if(!meta){ meta = document.createElement('meta'); meta.name = "description"; document.head.appendChild(meta); }
    meta.content = r.desc;
    let canon = document.querySelector('link[rel="canonical"]');
    if(canon) canon.href = window.location.origin + window.location.pathname + "#/" + route;
    document.querySelectorAll(".practice-section").forEach(s => s.classList.remove("active"));
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    const section = $(r.tab);
    if(section) section.classList.add("active");
    const tab = document.querySelector(`.tab[data-tab="${r.tab}"]`);
    if(tab) tab.classList.add("active");
    if(r.tab === "parcours") renderParcours();
    else if(r.tab === "vocab") renderVocabPanel();
    else if(r.tab === "verbes") renderVerbes();
    else if(r.tab === "testIntl") renderIntlTestIntro();
    else if(r.tab === "dictation") updateDictationUI(true);
    else if(r.tab === "phraseTraining") initPhraseTraining();
}
window.addEventListener("hashchange", () => applyRoute(getRouteFromHash()));

/* =====================================================================
   12. PHRASE TRAINING
===================================================================== */

function initPhraseTraining(){
    if(!progress.phraseState[state.level]){
        progress.phraseState[state.level] = {
            order: shuffle([...Array(PHRASES[state.level].length).keys()]),
            position: 0, score: 0, sessionCount: 0
        };
        saveProgress();
    }
    updatePhraseUI();
}
function currentPhrase(){
    const ps = progress.phraseState[state.level];
    const idx = ps.order[ps.position];
    return PHRASES[state.level][idx];
}
function updatePhraseUI(){
    const ps = progress.phraseState[state.level];
    if(!ps) return;
    const total = PHRASES[state.level].length;
    $("phraseNumber").textContent = ps.position + 1;
    $("phraseTotal").textContent = total;
    $("phraseScore").textContent = ps.score;
    $("phraseSessionCount").textContent = ps.sessionCount || 0;
    $("phraseProgress").style.width = (ps.position / total * 100) + "%";
    $("phraseFeedback").className = "feedback";
    $("phraseFeedback").innerHTML = "";
    $("showAnswerPhrase").classList.add("hidden");
    const expected = currentPhrase();
    buildWordInputs($("phraseWordInputs"), expected, () => checkPhrase(), () => checkPhrase());
}
function checkPhrase(){
    clearTimeout(autoCheckTimer); autoCheckTimer = null;      /* évite la double validation (Entrée + auto) */
    const container = $("phraseWordInputs");
    if(container.dataset.locked === "1") return;
    const expected = currentPhrase();
    const ps = progress.phraseState[state.level];
    const total = PHRASES[state.level].length;
    const inputs = container.querySelectorAll(".word-input");
    if(!Array.from(inputs).every(i => i.value.trim().length > 0)){
        $("phraseFeedback").className = "feedback info";
        $("phraseFeedback").innerHTML = "✍️ Complète tous les mots pour valider.";
        return;
    }
    const result = verifyWordInputs(container, expected);
    if(result.errors === 0){
        container.dataset.locked = "1";
        ps.score++;
        awardXP(5);
        $("phraseFeedback").className = "feedback success";
        $("phraseFeedback").innerHTML = "✅ Correct !";
        lockInputs(container, true);
        $("showAnswerPhrase").classList.add("hidden");
        $("phraseScore").textContent = ps.score;
        setTimeout(() => {
            ps.position++;
            if(ps.position >= total){
                ps.position = 0;
                ps.order = shuffle([...Array(total).keys()]);
                ps.sessionCount++;
                $("phraseFeedback").className = "feedback info";
                $("phraseFeedback").innerHTML = `🎉 Tu as terminé les ${total} phrases du niveau ${state.level} !`;
                saveProgress();
                updatePhraseUI();
                setTimeout(() => speak(currentPhrase()), 800);
                return;
            }
            saveProgress();
            updatePhraseUI();
            setTimeout(() => speak(currentPhrase()), 500);
        }, 900);
    } else {
        $("phraseFeedback").className = "feedback error";
        $("phraseFeedback").innerHTML = `❌ ${result.errors} mot(s) incorrect(s) sur ${result.total}. Corrige puis Entrée.`;
        if(container.dataset.err !== "1"){ container.dataset.err = "1"; trackError("phrase_training"); }
        $("showAnswerPhrase").classList.remove("hidden");
    }
}
function skipPhrase(){
    const ps = progress.phraseState[state.level];
    const total = PHRASES[state.level].length;
    ps.position = (ps.position + 1) % total;
    saveProgress();
    updatePhraseUI();
    setTimeout(() => speak(currentPhrase()), 300);
}
function shufflePhrase(){
    if(!confirm("Remélanger l'ordre des phrases ?")) return;
    const total = PHRASES[state.level].length;
    const prev = progress.phraseState[state.level] || {};
    progress.phraseState[state.level] = {
        order: shuffle([...Array(total).keys()]),
        position: 0, score: prev.score || 0, sessionCount: prev.sessionCount || 0
    };
    saveProgress();
    updatePhraseUI();
}
function showAnswerPhrase(){
    const container = $("phraseWordInputs");
    const expected = currentPhrase();
    const inputs = container.querySelectorAll(".word-input");
    const ew = splitWords(expected);
    inputs.forEach((inp, i) => {
        if(!inp.value.trim()){
            inp.value = ew[i];
            inp.parentElement.classList.remove("missing","wrong");
            inp.parentElement.classList.add("correct");
        }
    });
    $("phraseFeedback").className = "feedback info";
    $("phraseFeedback").innerHTML = "💡 Réponse complétée. Clique sur Passer pour continuer.";
}

/* =====================================================================
   13. DICTÉE — version LIBRE comme Word
===================================================================== */

const dictState = { mode:"level", nar:Math.min(progress.narutoLast || 0, NARUTO_EPISODES.length - 1),
    currentIdx:0, repeatCount:0, isPlaying:false, isPaused:false, timer:null, pauseMs:4000, chainTimer:null, finished:false };
function clearDictTimer(){ if(dictState.timer){ clearTimeout(dictState.timer); dictState.timer = null; } }

/* La dictée courante : soit l'histoire du niveau, soit un épisode de la saga Naruto */
function currentDictation(){
    if(dictState.mode === "naruto"){
        const i = dictState.nar, e = NARUTO_EPISODES[i];
        return {key:"N" + i, scoreKey:String(i), store:"narutoScores", idx:i, lv:e.lv,
                title:`Épisode ${i + 1}/${NARUTO_EPISODES.length} — ${e.t}`, sentences:e.s, names:e.names || []};
    }
    const t = dictationTexts[state.level];
    return {key:state.level, scoreKey:state.level, store:"dictScores", lv:state.level, title:t.title, sentences:t.sentences, names:[]};
}

const DRAFT_KEY = k => "edc.dictDraft." + k;
function loadDraft(k){ try{ return localStorage.getItem(DRAFT_KEY(k)) || ""; }catch{ return ""; } }
function saveDraft(k, txt){ try{ txt ? localStorage.setItem(DRAFT_KEY(k), txt) : localStorage.removeItem(DRAFT_KEY(k)); }catch{} }

function updateDictationUI(keepDraft){
    const d = currentDictation();
    cancelChain();
    $("dictLevel").textContent = d.lv;
    $("dictTitle").textContent = `« ${d.title} »`;
    $("dictTotal").textContent = d.sentences.length;
    $("dictCurrent").textContent = "1";
    $("dictResult").classList.remove("show");
    $("dictFeedback").className = "feedback";
    $("dictFeedback").innerHTML = "";
    $("dictStatus").textContent = "Appuie sur ▶️ pour démarrer";
    $("dictPlay").textContent = "▶️";
    const best = progress[d.store][d.scoreKey];
    $("dictBest").textContent = best !== undefined ? best + "%" : "—";
    const nm = $("dictNames");
    if(d.names.length){
        nm.innerHTML = "✍️ Noms propres de cet épisode : " + d.names.map(n => `<button type="button" class="name-chip" data-say="${escapeHTML(n)}" title="Écouter">${escapeHTML(n)}</button>`).join(" ");
        nm.classList.remove("hidden");
        nm.querySelectorAll("[data-say]").forEach(b => b.addEventListener("click", () => speak(b.dataset.say)));
    } else { nm.classList.add("hidden"); nm.innerHTML = ""; }
    dictState.currentIdx = 0; dictState.repeatCount = 0; dictState.finished = false;
    dictState.isPlaying = false; dictState.isPaused = false;
    clearDictTimer(); stopSpeaking();
    const ta = $("dictTextarea");
    ta.value = keepDraft ? loadDraft(d.key) : "";
    if(!keepDraft) saveDraft(d.key, "");
    ta.disabled = false;
}

function dictPlayCurrent(){
    if(!dictState.isPlaying) return;
    const t = currentDictation();
    const len = t.sentences.length;
    const sentence = t.sentences[dictState.currentIdx];
    const slow = dictState.repeatCount === 1;      /* 1re lecture : normale • 2e lecture : plus lente */
    $("dictStatus").textContent = `🔊 Phrase ${dictState.currentIdx + 1}/${len} — lecture ${dictState.repeatCount + 1}/2${slow ? " (plus lente)" : ""}`;
    $("dictCurrent").textContent = dictState.currentIdx + 1;
    speak(sentence, () => {
        if(!dictState.isPlaying) return;
        dictState.repeatCount++;
        if(dictState.repeatCount < 2){
            dictState.timer = setTimeout(() => { if(dictState.isPlaying) dictPlayCurrent(); }, dictState.pauseMs);
        } else if(dictState.currentIdx >= len - 1){
            /* dernière phrase lue deux fois : la dictée est terminée */
            dictState.timer = setTimeout(() => {
                dictState.isPlaying = false; dictState.finished = true;
                $("dictPlay").textContent = "▶️";
                $("dictStatus").textContent = "✅ Lecture terminée — termine ton texte puis clique sur « Vérifier »";
            }, Math.min(dictState.pauseMs, 3000));
        } else {
            dictState.timer = setTimeout(() => {
                if(!dictState.isPlaying) return;
                dictState.currentIdx++;
                dictState.repeatCount = 0;
                dictPlayCurrent();
            }, dictState.pauseMs);
        }
    }, {rateMul: slow ? 0.8 : 1});
}
function dictStart(){
    if(dictState.finished){ dictState.currentIdx = 0; dictState.repeatCount = 0; dictState.finished = false; }
    dictState.isPlaying = true; dictState.isPaused = false; $("dictPlay").textContent = "⏸️"; dictPlayCurrent();
}
function dictPause(){ dictState.isPlaying = false; dictState.isPaused = true; clearDictTimer(); stopSpeaking(); $("dictPlay").textContent = "▶️"; $("dictStatus").textContent = "⏸️ En pause"; }
function dictStop(){ dictState.isPlaying = false; dictState.isPaused = false; clearDictTimer(); stopSpeaking(); $("dictPlay").textContent = "▶️"; $("dictStatus").textContent = "Appuie sur ▶️ pour démarrer"; }
function dictReplay(){ clearDictTimer(); stopSpeaking(); dictState.finished = false; dictState.repeatCount = 0; if(!dictState.isPlaying){ dictState.isPlaying = true; $("dictPlay").textContent = "⏸️"; } dictPlayCurrent(); }
function dictPrev(){ clearDictTimer(); stopSpeaking(); dictState.finished = false; const l = currentDictation().sentences.length; dictState.currentIdx = (dictState.currentIdx - 1 + l) % l; dictState.repeatCount = 0; $("dictCurrent").textContent = dictState.currentIdx + 1; if(dictState.isPlaying) dictPlayCurrent(); }
function dictNext(){ clearDictTimer(); stopSpeaking(); dictState.finished = false; const l = currentDictation().sentences.length; dictState.currentIdx = (dictState.currentIdx + 1) % l; dictState.repeatCount = 0; $("dictCurrent").textContent = dictState.currentIdx + 1; if(dictState.isPlaying) dictPlayCurrent(); }

/* ---------- Mode « histoires par niveau » / « saga Naruto » ---------- */
function setDictMode(mode, skipUpdate){
    dictState.mode = mode === "naruto" ? "naruto" : "level";
    try{ localStorage.setItem("edc.dictMode", dictState.mode); }catch{}
    document.querySelectorAll(".dict-mode").forEach(b => {
        const on = b.dataset.mode === dictState.mode;
        b.classList.toggle("active", on); b.setAttribute("aria-selected", on);
    });
    $("narutoPanel").classList.toggle("hidden", dictState.mode !== "naruto");
    if(dictState.mode === "naruto") renderNarutoPanel();
    if(!skipUpdate){ dictStop(); updateDictationUI(true); }
}
function narutoAuto(){ try{ return localStorage.getItem("edc.narAuto") !== "0"; }catch{ return true; } }
function renderNarutoPanel(){
    const total = NARUTO_EPISODES.length;
    const done = Object.keys(progress.narutoDone || {}).filter(k => progress.narutoDone[k]).length;
    const scores = Object.values(progress.narutoScores || {});
    const avg = scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : null;
    const txt = $("narProgressTxt"); if(txt) txt.textContent = `${done}/${total}`;
    $("narSummary").innerHTML = `🍥 <strong>${done}/${total}</strong> épisodes réussis` + (avg !== null ? ` • moyenne <strong>${avg}%</strong>` : "") +
        ` • <span class="muted-s">Tu peux commencer où tu veux ; la dictée suivante s'enchaîne toute seule.</span>`;
    $("narAuto").checked = narutoAuto();
    $("narGrid").innerHTML = NARUTO_EPISODES.map((e, i) => {
        const sc = progress.narutoScores[i];
        const cls = ["nar-ep"]; if(i === dictState.nar) cls.push("current"); if(progress.narutoDone[i]) cls.push("done");
        return `<button type="button" class="${cls.join(" ")}" data-ep="${i}" title="${escapeHTML(e.t)} (${e.lv})">
            <span class="nar-n">${i + 1}</span><span class="nar-lv">${e.lv}</span>
            <span class="nar-s">${progress.narutoDone[i] ? "✓ " + sc + "%" : sc !== undefined ? sc + "%" : "·"}</span></button>`;
    }).join("");
}
function cancelChain(){
    if(dictState.chainTimer){ clearInterval(dictState.chainTimer); dictState.chainTimer = null; }
}
function goToEpisode(i, autoplay){
    i = Math.max(0, Math.min(NARUTO_EPISODES.length - 1, i));
    cancelChain(); dictStop();
    dictState.nar = i; progress.narutoLast = i; saveProgress();
    setDictMode("naruto");
    $("dictation").scrollIntoView({behavior:"smooth", block:"start"});
    if(autoplay) setTimeout(() => { if(dictState.mode === "naruto" && dictState.nar === i && !dictState.isPlaying) dictStart(); }, 700);
}
function startChainCountdown(seconds){
    cancelChain();
    let left = seconds;
    const upd = () => { const c = $("chainCount"); if(c) c.textContent = left; };
    upd();
    dictState.chainTimer = setInterval(() => {
        left--; upd();
        if(left <= 0){ cancelChain(); goToEpisode(dictState.nar + 1, true); }
    }, 1000);
}
function renderChainBox(d){
    const last = d.idx >= NARUTO_EPISODES.length - 1;
    if(last){
        return `<div class="chain-box"><div class="chain-title">🏆 Bravo ! Tu as terminé toute la saga Naruto.</div>
            <div class="action-row" style="justify-content:flex-start"><button type="button" class="primary-btn" id="chainRestart">🔁 Recommencer au début</button>
            <button type="button" class="ghost-btn" id="chainRetry">↩️ Refaire cet épisode</button></div></div>`;
    }
    const nx = NARUTO_EPISODES[d.idx + 1];
    return `<div class="chain-box">
        <div class="chain-title">➡️ Épisode suivant : <strong>${d.idx + 2}. ${escapeHTML(nx.t)}</strong> <small>(${nx.lv})</small></div>
        <div class="chain-sub" id="chainSub">${narutoAuto() ? `Démarrage automatique dans <strong id="chainCount">12</strong> s — le temps de lire ta correction.` : "Le démarrage automatique est désactivé."}</div>
        <div class="action-row" style="justify-content:flex-start">
            <button type="button" class="primary-btn" id="chainNow">▶️ Dictée suivante</button>
            <button type="button" class="ghost-btn" id="chainRetry">↩️ Refaire celle-ci</button>
            <button type="button" class="ghost-btn${narutoAuto() ? "" : " hidden"}" id="chainCancel">✋ Rester ici</button>
        </div></div>`;
}

/* ---------- Coach : analyse des fautes ---------- */
const HOMOPHONE_GROUPS = [
    ["their","there","they're"],["to","too","two"],["write","right"],["no","know"],["new","knew"],["hear","here"],["by","buy","bye"],
    ["see","sea"],["one","won"],["whole","hole"],["would","wood"],["weak","week"],["wait","weight"],["our","hour"],["its","it's"],
    ["your","you're"],["were","where","we're"],["whose","who's"],["then","than"],["of","off"],["break","brake"],["peace","piece"],
    ["meet","meat"],["be","bee"],["sun","son"],["tale","tail"],["road","rode"],["sight","site"],["night","knight"],["board","bored"],
    ["through","threw"],["blue","blew"],["wore","war"],["for","four"],["die","dye"],["flower","flour"],["place","plaice"],["mail","male"]
];
const HOMO_MAP = (() => { const m = {}; HOMOPHONE_GROUPS.forEach((g, i) => g.forEach(w => { m[w] = i; })); return m; })();
function lev(a, b){
    const m = a.length, n = b.length;
    if(!m) return n; if(!n) return m;
    let prev = Array.from({length:n + 1}, (_, j) => j);
    for(let i = 1; i <= m; i++){
        const cur = [i];
        for(let j = 1; j <= n; j++) cur[j] = Math.min(prev[j] + 1, cur[j-1] + 1, prev[j-1] + (a[i-1] === b[j-1] ? 0 : 1));
        prev = cur;
    }
    return prev[n];
}
function classifyWrong(exp, usr, names){
    const e = exp.toLowerCase(), u = usr.toLowerCase();
    if(names.some(n => n.toLowerCase().split(/\s+/).includes(e))) return "name";
    if(HOMO_MAP[e] !== undefined && HOMO_MAP[e] === HOMO_MAP[u]) return "homophone";
    const short = e.length <= u.length ? e : u, long = e.length <= u.length ? u : e;
    if(long.startsWith(short) && /^(s|es|d|ed|ing|ly|er|est|'s|n't)$/.test(long.slice(short.length))) return "ending";
    if(lev(e, u) <= (Math.max(e.length, u.length) <= 4 ? 1 : 2)) return "spelling";
    return "other";
}
const COACH_TEXT = {
    name:      {icon:"🏷️", label:"Noms propres mal écrits", tip:"Clique sur les noms propres au-dessus du texte pour les écouter, puis recopie-les lettre par lettre."},
    homophone: {icon:"👂", label:"Mots qui se prononcent pareil", tip:"Their / there, to / too / two… : seul le sens de la phrase te dit lequel écrire. Relis la phrase en entier."},
    ending:    {icon:"🔚", label:"Terminaisons oubliées ou ajoutées", tip:"Écoute bien la fin des mots : -s (pluriel / il parle), -ed (passé), -ing. En anglais, on les entend peu mais elles comptent."},
    spelling:  {icon:"🔤", label:"Orthographe presque juste", tip:"Tu as bien entendu le mot, il manque juste une lettre ou deux. Épelle-le à voix haute avant de l'écrire."},
    other:     {icon:"🎧", label:"Mots mal entendus", tip:"Réécoute la phrase en lecture lente (🐢) et découpe-la mot à mot."},
    missing:   {icon:"∅",  label:"Mots oubliés", tip:"Les petits mots (the, a, of, to…) sont les plus souvent oubliés. Garde-les en tête en écrivant."},
    extra:     {icon:"＋", label:"Mots en trop", tip:"Tu as ajouté des mots qui ne sont pas dans la phrase. Écris seulement ce que tu entends."}
};
function coachReport(ops, d, accuracy, prevBest){
    const cats = {}; const ex = {};
    const add = (c, label) => { cats[c] = (cats[c] || 0) + 1; (ex[c] = ex[c] || []).push(label); };
    ops.forEach(o => {
        if(o.t === "wrong") add(classifyWrong(o.exp, o.usr, d.names), `${o.usr} → ${o.exp}`);
        else if(o.t === "missing") add("missing", o.exp);
        else if(o.t === "extra") add("extra", o.usr);
    });
    const order = Object.keys(cats).sort((a, b) => cats[b] - cats[a]);

    /* phrases qui contiennent des erreurs */
    const bounds = []; let acc = 0;
    d.sentences.forEach(sn => { acc += splitWords(sn).length; bounds.push(acc); });
    const bad = new Set();
    ops.forEach(o => { if(o.ei !== undefined && o.t !== "ok"){ let k = bounds.findIndex(b => o.ei < b); bad.add(k < 0 ? bounds.length - 1 : k); } });
    const badList = [...bad].sort((a, b) => a - b);

    let msg;
    if(!order.length) msg = "Aucune faute : ton oreille et ton orthographe sont au niveau de cet épisode. Tu peux passer au suivant sans hésiter.";
    else if(accuracy >= 90) msg = `Presque parfait ! Il reste seulement ${order.reduce((s, c) => s + cats[c], 0)} erreur(s), surtout du type « ${COACH_TEXT[order[0]].label.toLowerCase()} ».`;
    else if(accuracy >= 65) msg = `Bon travail. Ton point faible principal : « ${COACH_TEXT[order[0]].label.toLowerCase()} » (${cats[order[0]]}). Réécoute les phrases ci-dessous en lecture lente puis réessaie.`;
    else msg = `Cet épisode est difficile pour le moment. Écoute phrase par phrase, écris-la tout de suite après, et vérifie plus tard. Point faible principal : « ${COACH_TEXT[order[0]].label.toLowerCase()} ».`;
    if(prevBest !== undefined && accuracy > prevBest) msg += ` 📈 Nouveau record (avant : ${prevBest} %).`;

    const list = order.slice(0, 4).map(c => `<li><span class="coach-ico">${COACH_TEXT[c].icon}</span><div>
        <strong>${COACH_TEXT[c].label}</strong> <span class="coach-count">×${cats[c]}</span>
        <div class="coach-ex">${ex[c].slice(0, 4).map(escapeHTML).join(" • ")}</div>
        <div class="coach-tip">${COACH_TEXT[c].tip}</div></div></li>`).join("");
    const resay = badList.length ? `<div class="coach-resay"><span>🐢 Réécoute lentement :</span> ${badList.slice(0, 6).map(i =>
        `<button type="button" class="weak-word" data-slow="${escapeHTML(d.sentences[i])}">Phrase ${i + 1}</button>`).join("")}</div>` : "";
    return `<div class="dict-coach"><div class="coach-head">🤖 Ton coach</div><p class="coach-msg">${msg}</p>${list ? `<ul class="coach-list">${list}</ul>` : ""}${resay}</div>`;
}

function dictCheckAll(){
    dictStop(); cancelChain();
    const t = currentDictation();
    const expectedWords = splitWords(t.sentences.join(" "));
    const userWords = splitWords($("dictTextarea").value);
    if(!userWords.length){
        const fb = $("dictFeedback");
        fb.className = "feedback info"; fb.innerHTML = "✍️ Écris d'abord ce que tu as entendu, puis clique sur « Vérifier ».";
        return;
    }
    const ops = diffWords(expectedWords, userWords);
    const cnt = {ok:0, wrong:0, missing:0, extra:0};
    ops.forEach(o => cnt[o.t]++);
    const errors = cnt.wrong + cnt.missing + cnt.extra;
    const total = expectedWords.length;
    const accuracy = total === 0 ? 0 : Math.max(0, Math.round((cnt.ok - cnt.extra * 0.5) / total * 100));

    /* progression : meilleur score, épisodes terminés, erreurs, XP */
    const store = progress[t.store];
    const prevBest = store[t.scoreKey];
    if(accuracy > (prevBest || 0)) store[t.scoreKey] = accuracy;
    if(t.store === "narutoScores"){
        if(accuracy >= 60) progress.narutoDone[t.scoreKey] = true;
        progress.narutoLast = t.idx;
        renderNarutoPanel();
    }
    $("dictBest").textContent = store[t.scoreKey] + "%";
    if(errors) trackError("dictation", Math.min(errors, 5));
    awardXP(Math.min(20, Math.round(accuracy / 5)) + (errors === 0 ? 10 : 0));
    saveProgress();

    $("dictFinalScore").textContent = accuracy + "%";
    $("dictDetails").innerHTML = `
        <span class="pill ok">✔ ${cnt.ok} correct${cnt.ok > 1 ? "s" : ""}</span>
        <span class="pill wrong">✎ ${cnt.wrong} faute${cnt.wrong > 1 ? "s" : ""}</span>
        <span class="pill missing">∅ ${cnt.missing} oubli${cnt.missing > 1 ? "s" : ""}</span>
        <span class="pill extra">＋ ${cnt.extra} en trop</span>
        <div class="dict-note">${total} mots attendus • ${userWords.length} mots écrits • majuscules et ponctuation ne comptent pas</div>`;

    const shown = displayWords(t.sentences.join(" "));
    const showExp = o => shown[o.ei] || o.exp;
    const chip = o => {
        if(o.t === "ok") return `<span class="dw ok">${escapeHTML(showExp(o))}</span>`;
        if(o.t === "wrong") return `<span class="dw wrong" title="Attendu : ${escapeHTML(showExp(o))}"><s>${escapeHTML(o.usr)}</s><b>${escapeHTML(showExp(o))}</b></span>`;
        if(o.t === "missing") return `<span class="dw missing" title="Mot oublié"><b>${escapeHTML(showExp(o))}</b></span>`;
        return `<span class="dw extra" title="Mot en trop"><s>${escapeHTML(o.usr)}</s></span>`;
    };
    const diffHTML = `
        <h4 class="res-h">Ta dictée corrigée</h4>
        <div class="diff-legend"><span class="dw ok">juste</span><span class="dw wrong"><s>faux</s><b>attendu</b></span><span class="dw missing"><b>oublié</b></span><span class="dw extra"><s>en trop</s></span></div>
        <div class="diff-text">${ops.map(chip).join(" ")}</div>`;

    /* mots à retravailler (fautes + oublis), sans doublons */
    const weak = []; const seen = new Set();
    ops.forEach(o => { if((o.t === "wrong" || o.t === "missing") && o.exp.length > 2 && !seen.has(o.exp)){ seen.add(o.exp); weak.push(o.exp); } });
    const weakHTML = weak.length ? `
        <h4 class="res-h">Mots à retravailler</h4>
        <div class="weak-words">${weak.slice(0, 12).map(w => `<button type="button" class="weak-word" data-say="${escapeHTML(w)}">🔊 ${escapeHTML(w)}</button>`).join("")}</div>
        <div class="action-row" style="justify-content:flex-start"><button type="button" class="ghost-btn" id="dictAddWeak">🧠 Ajouter ces mots à mon vocabulaire</button></div>` : "";

    const refHTML = `
        <h4 class="res-h">Texte de référence <small>(clique sur une phrase pour la réécouter)</small></h4>
        <div class="ref-sentences">${t.sentences.map(sn => `<button type="button" class="ref-sentence" data-say="${escapeHTML(sn)}">🔊 ${escapeHTML(sn)}</button>`).join("")}</div>`;

    const chainHTML = t.store === "narutoScores" ? renderChainBox(t) : "";

    $("dictErrorReview").innerHTML = (errors === 0
        ? `<div class="perfect"><div class="perfect-emoji">🎉</div><div>Parfait ! Aucune erreur.</div></div>` : "")
        + coachReport(ops, t, accuracy, prevBest) + chainHTML + diffHTML + weakHTML + refHTML;

    const root = $("dictErrorReview");
    root.querySelectorAll("[data-say]").forEach(b => b.addEventListener("click", () => speak(b.dataset.say)));
    root.querySelectorAll("[data-slow]").forEach(b => b.addEventListener("click", () => speak(b.dataset.slow, null, {rateMul:0.7})));
    const addBtn = $("dictAddWeak");
    if(addBtn) addBtn.addEventListener("click", () => {
        let added = 0;
        weak.forEach(w => {
            if(progress.vocab[w]) return;
            const ex = t.sentences.find(sn => splitWords(sn).some(x => sameWord(x, w))) || "";
            progress.vocab[w] = {fr:"Mot de dictée — à mémoriser", ex, box:1, nextReview:Date.now(), correct:0, wrong:0, addedAt:Date.now()};
            added++;
        });
        saveProgress(); updateVocabCounters();
        addBtn.disabled = true; addBtn.textContent = added ? `✅ ${added} mot(s) ajouté(s)` : "✅ Déjà dans ton vocabulaire";
    });
    if(chainHTML){
        const go = $("chainNow"), retry = $("chainRetry"), stay = $("chainCancel"), again = $("chainRestart");
        if(go) go.addEventListener("click", () => goToEpisode(t.idx + 1, true));
        if(retry) retry.addEventListener("click", () => { cancelChain(); const ta = $("dictTextarea"); ta.value = ""; saveDraft(t.key, ""); updateDictationUI(false); $("dictation").scrollIntoView({behavior:"smooth"}); });
        if(again) again.addEventListener("click", () => goToEpisode(0, false));
        if(stay) stay.addEventListener("click", () => { cancelChain(); $("chainSub").textContent = "Démarrage automatique annulé."; stay.classList.add("hidden"); });
        if(go && narutoAuto()) startChainCountdown(12);
    }

    $("dictResult").classList.add("show");
    const fb = $("dictFeedback");
    fb.className = "feedback " + (accuracy >= 90 ? "success" : accuracy >= 65 ? "info" : "error");
    fb.innerHTML = accuracy >= 90
        ? `🎉 Excellent ! Score : <strong>${accuracy}%</strong>`
        : accuracy >= 65
        ? `📚 Bon travail. Score : <strong>${accuracy}%</strong> — regarde les mots en rouge ci-dessous.`
        : `💪 Continue ! Score : <strong>${accuracy}%</strong> — réécoute le texte puis réessaie.`;
    if(errors === 0) confetti();
    $("dictResult").scrollIntoView({behavior:"smooth", block:"start"});
}

/* =====================================================================
   14. WORD INPUTS
===================================================================== */

function buildWordInputs(container, expected, onAllFilled, onEnter){
    const words = splitWords(expected);
    container.innerHTML = "";
    container.dataset.locked = ""; container.dataset.err = "";
    words.forEach((word, i) => {
        const cell = document.createElement("div");
        cell.className = "word-cell";
        const hint = document.createElement("span");
        hint.className = "word-hint"; hint.textContent = word;
        const input = document.createElement("input");
        input.type = "text"; input.className = "word-input";
        input.autocomplete = "off"; input.autocorrect = "off";
        input.autocapitalize = "off"; input.spellcheck = false; input.lang = "en";
        input.maxLength = Math.max(word.length + 4, 14);
        input.dataset.index = i;
        input.style.width = Math.min(Math.max(word.length * 14 + 24, 60), 180) + "px";
        cell.appendChild(hint); cell.appendChild(input); container.appendChild(cell);
        input.addEventListener("keydown", e => {
            if(e.key === " "){ e.preventDefault(); const n = container.querySelectorAll(".word-input")[i+1]; if(n) n.focus(); }
            else if(e.key === "Backspace" && input.value === ""){
                const p = container.querySelectorAll(".word-input")[i-1];
                if(p){ p.focus(); p.setSelectionRange(p.value.length, p.value.length); }
            } else if(e.key === "Enter"){ e.preventDefault(); if(onEnter) onEnter(); }
        });
        input.addEventListener("input", () => {
            cell.classList.remove("correct","wrong","missing");
            if(onAllFilled){
                const inputs = container.querySelectorAll(".word-input");
                if(Array.from(inputs).every(x => x.value.trim().length > 0)){
                    clearTimeout(autoCheckTimer);
                    autoCheckTimer = setTimeout(() => { onAllFilled(); autoCheckTimer = null; }, 600);
                }
            }
        });
    });
    const first = container.querySelector(".word-input");
    if(first) setTimeout(() => first.focus(), 50);
}
function lockInputs(c, l){ c.querySelectorAll(".word-input").forEach(i => i.disabled = l); }
function verifyWordInputs(container, expected){
    const ew = splitWords(expected);
    const cells = container.querySelectorAll(".word-cell");
    const inputs = container.querySelectorAll(".word-input");
    let errors = 0;
    cells.forEach(c => c.classList.remove("correct","wrong","missing","typing"));
    inputs.forEach((input, i) => {
        const uw = stripPunctuation(input.value);
        const ex = ew[i];
        const cell = input.parentElement;
        if(!uw){ cell.classList.add("missing"); errors++; }
        else if(sameWord(uw, ex)){ cell.classList.add("correct"); }
        else { cell.classList.add("wrong"); errors++; }
    });
    return { errors, correct: ew.length - errors, total: ew.length };
}

/* =====================================================================
   15. NIVEAUX
===================================================================== */

const LEVELS = ["A1","A2","B1","B2","C1","C2"];
function isLevelUnlocked(l){
    if(!progress.levelTestDone) return false;
    return LEVELS.indexOf(l) <= LEVELS.indexOf(progress.level) + 1;
}
function renderLevels(){
    const c = $("levels"); c.innerHTML = "";
    LEVELS.forEach(l => {
        const btn = document.createElement("button");
        btn.className = "level-btn"; btn.type = "button"; btn.textContent = l;
        if(l === state.level) btn.classList.add("active");
        if(!isLevelUnlocked(l)){ btn.classList.add("locked"); btn.disabled = true; }
        btn.addEventListener("click", () => changeLevel(l));
        c.appendChild(btn);
    });
}
function changeLevel(l){
    if(!isLevelUnlocked(l)) return;
    state.level = l;
    progress.level = l; saveProgress();
    $("headerLevel").textContent = l;
    $("parcoursLevel").textContent = l;
    $("dictLevel").textContent = l;
    renderLevels();
    const active = document.querySelector(".practice-section.active");
    if(active){
        if(active.id === "phraseTraining") initPhraseTraining();
        else if(active.id === "dictation") updateDictationUI(true);
        else if(active.id === "parcours") renderParcours();
    }
}

/* =====================================================================
   16. PARCOURS
===================================================================== */

function renderParcours(){
    $("parcoursLevel").textContent = progress.level || "—";
    $("parcoursProgressText").textContent = computeOverallProgress() + "%";
    const dash = $("parcoursDashboard");
    if(!progress.levelTestDone){
        dash.innerHTML = `
            <div class="lesson-complete-banner" style="background:var(--primary-soft);color:var(--primary-dark)">
                👋 Bienvenue ! Commence par le <strong>test de niveau</strong>.
            </div>
            <div class="dash-actions" style="justify-content:center">
                <button class="primary-btn" id="startTestBtn">🧪 Faire le test de niveau</button>
            </div>`;
        $("startTestBtn").addEventListener("click", () => { $("lessonList").classList.add("hidden"); renderPlacementTest(); });
        $("lessonList").classList.add("hidden");
        return;
    }
    const lt = countLessonsInLevel(progress.level);
    const ld = countDoneInLevel(progress.level);
    const weak = getWeakPoints();
    dash.innerHTML = `
        <div class="dash-grid">
            <div class="dash-card"><h4>Niveau</h4><div class="dash-value">${progress.level}</div><div class="dash-sub">${curriculum[progress.level].title}</div></div>
            <div class="dash-card"><h4>Leçons</h4><div class="dash-value">${ld}/${lt}</div><div class="dash-sub">terminées</div></div>
            <div class="dash-card"><h4>Cartes vocabulaire</h4><div class="dash-value">${Object.keys(progress.vocab).length}</div><div class="dash-sub">${dueVocabCount()} à réviser</div></div>
            <div class="dash-card"><h4>Compétences visées</h4><div class="dash-sub" style="font-size:13px;color:var(--text)">${curriculum[progress.level].skills.map(s => "• "+s).join("<br>")}</div></div>
        </div>
        ${weak.length ? `<h4 style="margin:20px 0 8px">⚠️ Points faibles détectés</h4><ul class="weak-list">${weak.map(w => `<li><span>${w.label}</span><span class="count">${w.count}</span></li>`).join("")}</ul>` : ""}
        <div class="dash-actions">
            <button class="ghost-btn" id="retestBtn">🧪 Refaire le test</button>
            ${progress.level !== "C2" ? `<button class="primary-btn" id="tryNextBtn">⬆️ Tester le niveau ${nextLevel(progress.level)}</button>` : ""}
        </div>`;
    $("retestBtn").addEventListener("click", () => { $("lessonList").classList.add("hidden"); renderPlacementTest(); });
    const tn = $("tryNextBtn");
    if(tn) tn.addEventListener("click", () => {
        const nl = nextLevel(progress.level);
        if(confirm(`Passer au niveau ${nl} ?`)){
            progress.level = nl; state.level = nl;
            $("headerLevel").textContent = nl;
            $("parcoursLevel").textContent = nl;
            saveProgress();
            renderLevels(); renderParcours();
        }
    });
    renderLessonList();
}
function nextLevel(l){ return LEVELS[Math.min(LEVELS.indexOf(l)+1, LEVELS.length-1)]; }
function countLessonsInLevel(l){ return curriculum[l]?.lessons.length || 0; }
function countDoneInLevel(l){ return (curriculum[l]?.lessons || []).filter(les => progress.lessonsDone[les.id]).length; }
function computeOverallProgress(){
    let t = 0, d = 0;
    LEVELS.forEach(l => (curriculum[l]?.lessons || []).forEach(les => { t++; if(progress.lessonsDone[les.id]) d++; }));
    return t ? Math.round(d/t*100) : 0;
}
function getWeakPoints(){
    const labels = { phrase_training:"Phrase Training", dictation:"Dictée", lesson_quiz:"Quiz de leçon", vocab:"Cartes vocabulaire", verbes_quiz:"Exercices de verbes" };
    return Object.entries(progress.errors).filter(([_,v]) => v.count >= 3).sort((a,b) => b[1].count - a[1].count).slice(0,5).map(([k,v]) => ({label:labels[k]||k,count:v.count}));
}

/* =====================================================================
   17. LEÇONS
===================================================================== */

function renderLessonList(){
    const c = $("lessonList");
    c.classList.remove("hidden");
    const lessons = curriculum[progress.level].lessons;
    c.innerHTML = `<h3 style="margin:20px 0 12px">📖 Leçons — ${progress.level}</h3>
        <div class="lesson-list">
            ${lessons.map(l => {
                const done = !!progress.lessonsDone[l.id];
                const score = progress.lessonScores[l.id];
                return `<div class="lesson-card ${done?"done":""}" data-lesson="${l.id}">
                    ${done ? '<span class="lc-status">✅</span>' : ''}
                    <span class="lc-tag">${progress.level}</span>
                    <h4>${escapeHTML(l.title)}</h4>
                    <p>${escapeHTML(l.objective)}</p>
                    ${score !== undefined ? `<p style="margin-top:8px;font-weight:700;color:var(--success)">Score : ${score}%</p>` : ""}
                </div>`;
            }).join("")}
        </div>`;
    c.querySelectorAll(".lesson-card").forEach(card => {
        card.addEventListener("click", () => openLesson(card.dataset.lesson));
    });
}
function openLesson(id){
    const lesson = curriculum[progress.level].lessons.find(l => l.id === id);
    if(!lesson) return;
    $("lessonList").classList.add("hidden");
    const v = $("lessonViewer");
    v.classList.remove("hidden");
    v.innerHTML = `
        <div class="lesson-head"><div>
            <button class="ghost-btn" id="backToLessons">← Retour aux leçons</button>
            <h3 style="margin-top:12px">${escapeHTML(lesson.title)}</h3>
            <p class="obj">🎯 ${escapeHTML(lesson.objective)}</p>
        </div></div>
        <details class="lesson-section" open><summary>📚 Vocabulaire</summary><div class="ls-content">
            ${lesson.vocabulary.map(w => `<div class="vocab-row"><div>
                <div class="en">${escapeHTML(w.en)}</div><div class="fr">${escapeHTML(w.fr)}</div>
                <div class="ex">« ${escapeHTML(w.ex)} »</div></div>
                <button class="ghost-btn" data-say="${escapeHTML(w.en)}">🔊</button></div>`).join("")}
            <div class="dash-actions"><button class="primary-btn" id="addVocabBtn">➕ Ajouter ces mots</button></div>
        </div></details>
        <details class="lesson-section"><summary>📐 Grammaire</summary><div class="ls-content">
            <div class="grammar-rule">${lesson.grammar.rule}</div>
            <h5>Exemples</h5><ul class="example-list">${lesson.grammar.examples.map(e => `<li>${e}</li>`).join("")}</ul>
            <h5 style="margin-top:16px">Exercices</h5><div class="quiz" id="grammarQuiz"></div>
        </div></details>
        <details class="lesson-section"><summary>🗣️ Prononciation</summary><div class="ls-content"><ul class="pronun-list">${lesson.pronunciation.map(p => `<li>${p}</li>`).join("")}</ul></div></details>
        <details class="lesson-section"><summary>💬 Expressions courantes</summary><div class="ls-content"><div class="expr-list">${lesson.expressions.map(e => `<span class="expr-pill">${escapeHTML(e)}</span>`).join("")}</div></div></details>
        <details class="lesson-section"><summary>👂 Compréhension orale</summary><div class="ls-content">
            <div class="listen-sentences">${lesson.listening.map(s => `<button class="listen-btn-sm" data-say="${escapeHTML(s)}">${escapeHTML(s)}</button>`).join("")}</div>
        </div></details>
        <details class="lesson-section"><summary>📖 Compréhension écrite</summary><div class="ls-content">
            <div class="reading-text">${escapeHTML(lesson.reading.text)}</div><div class="quiz" id="readingQuiz"></div>
        </div></details>
        <details class="lesson-section"><summary>✍️ Production écrite</summary><div class="ls-content"><div class="writing-prompt">${escapeHTML(lesson.writing)}</div></div></details>
        <details class="lesson-section"><summary>🎤 Production orale</summary><div class="ls-content"><div class="speaking-prompt">${escapeHTML(lesson.speaking)}</div></div></details>
        <details class="lesson-section"><summary>🔁 Révision</summary><div class="ls-content"><ul class="example-list">${lesson.review.map(r => `<li>${escapeHTML(r)}</li>`).join("")}</ul></div></details>
        <details class="lesson-section" open><summary>🎓 Test de fin</summary><div class="ls-content">
            <div class="quiz" id="endTest"></div>
            <div class="dash-actions" style="margin-top:16px"><button class="primary-btn" id="validateLesson" disabled>Valider la leçon</button></div>
            <div id="lessonResult"></div>
        </div></details>`;
    v.querySelectorAll("[data-say]").forEach(b => b.addEventListener("click", () => speak(b.dataset.say)));
    renderQuiz($("grammarQuiz"), lesson.grammar.exercise);
    renderQuiz($("readingQuiz"), lesson.reading.questions);
    let endResult = null;
    renderQuiz($("endTest"), lesson.endTest, (correct, total) => { endResult = {correct, total}; const b = $("validateLesson"); if(b) b.disabled = false; });
    $("addVocabBtn").addEventListener("click", () => {
        let a = 0;
        lesson.vocabulary.forEach(w => {
            if(!progress.vocab[w.en]){
                progress.vocab[w.en] = {fr:w.fr,ex:w.ex,box:1,nextReview:Date.now(),correct:0,wrong:0,addedAt:Date.now()};
                a++;
            }
        });
        saveProgress(); alert(`${a} mot(s) ajouté(s).`);
    });
    $("validateLesson").addEventListener("click", () => {
        const total = endResult ? endResult.total : lesson.endTest.length;
        const score = endResult ? Math.round(endResult.correct / total * 100) : 0;
        const passed = score >= 60;
        progress.lessonScores[lesson.id] = Math.max(score, progress.lessonScores[lesson.id] || 0);
        if(passed && !progress.lessonsDone[lesson.id]){ progress.lessonsDone[lesson.id] = true; awardXP(30); }
        saveProgress();
        $("validateLesson").disabled = true;
        if(passed){
            confetti();
            $("lessonResult").innerHTML = `<div class="lesson-complete-banner">🎉 Leçon validée — Score : <strong>${score}%</strong></div>`;
            setTimeout(() => { renderParcours(); $("lessonViewer").classList.add("hidden"); }, 1800);
        } else {
            $("lessonResult").innerHTML = `<div class="feedback info" style="display:block">📚 Score : <strong>${score}%</strong> — il faut au moins 60 % pour valider. Relis la leçon puis réessaie !</div>
                <div class="dash-actions"><button class="primary-btn" id="retryLesson">🔄 Réessayer le test</button></div>`;
            $("retryLesson").addEventListener("click", () => openLesson(lesson.id));
        }
    });
    const back = () => { $("lessonViewer").classList.add("hidden"); renderParcours(); };
    $("backToLessons").addEventListener("click", back);
    v.scrollIntoView({behavior:"smooth",block:"start"});
}
function renderQuiz(container, questions, onComplete){
    let answered = 0, correctCount = 0;
    const qs = questions.map(shuffleOpts);
    container.innerHTML = qs.map((q,i) => `
        <div class="quiz-q" data-q="${i}">
            <div class="qtext">${i+1}. ${escapeHTML(q.q)}</div>
            <div class="quiz-opts">${q.opts.map((o,j) => `<button class="quiz-opt" data-opt="${j}">${escapeHTML(o)}</button>`).join("")}</div>
            <div class="quiz-feedback" aria-live="polite"></div>
        </div>`).join("");
    container.querySelectorAll(".quiz-q").forEach(qEl => {
        const q = qs[parseInt(qEl.dataset.q,10)];
        let done = false;
        qEl.querySelectorAll(".quiz-opt").forEach(btn => {
            btn.addEventListener("click", () => {
                if(done) return; done = true;
                const c = parseInt(btn.dataset.opt,10);
                const ok = c === q.c;
                qEl.querySelectorAll(".quiz-opt").forEach((b,j) => {
                    if(j === q.c) b.classList.add("correct");
                    else if(j === c) b.classList.add("wrong");
                    b.disabled = true;
                });
                const answer = q.opts[q.c];
                const fb = qEl.querySelector(".quiz-feedback");
                fb.className = "quiz-feedback show " + (ok ? "ok" : "ko");
                fb.innerHTML = (ok ? "✅ Bravo !" : `❌ Bonne réponse : <strong>${escapeHTML(answer)}</strong>`)
                    + (/[éèêàùçôîï]/i.test(answer) ? "" : ` <button type="button" class="mini-say" data-say="${escapeHTML(answer)}">🔊</button>`);
                const sayBtn = fb.querySelector(".mini-say");
                if(sayBtn) sayBtn.addEventListener("click", () => speak(sayBtn.dataset.say));
                if(ok){ correctCount++; awardXP(2); } else trackError("lesson_quiz");
                answered++;
                if(answered === qs.length && onComplete) onComplete(correctCount, qs.length);
            });
        });
    });
}

/* =====================================================================
   18. TEST DE NIVEAU
===================================================================== */

let testAnswers = [];
let placementView = placementTest;
function renderPlacementTest(){
    const c = $("placementTest");
    c.classList.remove("hidden");
    placementView = placementTest.map(shuffleOpts);
    testAnswers = new Array(placementView.length).fill(null);
    let h = `<div class="lesson-head"><div>
        <h3>🧪 Test de niveau</h3>
        <p class="obj">${placementTest.length} questions, tous niveaux.</p>
    </div></div>
    <div class="test-progress progress"><div class="progress-bar" id="testBar"></div></div>
    <p id="testCounter">0 / ${placementView.length} répondues</p>`;
    placementView.forEach((q,i) => {
        h += `<div class="test-question" data-q="${i}">
            <h4>Q${i+1}. ${escapeHTML(q.q)} <small style="color:var(--muted);font-weight:400">[${q.level}]</small></h4>
            <div class="test-options">${q.opts.map((o,j) => `<button class="test-option" data-q="${i}" data-opt="${j}">${escapeHTML(o)}</button>`).join("")}</div>
        </div>`;
    });
    h += `<div class="dash-actions" style="justify-content:center"><button class="primary-btn" id="submitTest">Valider le test</button></div><div id="testResult"></div>`;
    c.innerHTML = h;
    c.addEventListener("click", handleTestClick);
    $("submitTest").addEventListener("click", submitTest);
    updateTestBar();
}
function handleTestClick(e){
    const b = e.target.closest(".test-option");
    if(!b || b.disabled) return;
    const q = parseInt(b.dataset.q,10), o = parseInt(b.dataset.opt,10);
    testAnswers[q] = o;
    const c = $("placementTest");
    c.querySelectorAll(`.test-option[data-q="${q}"]`).forEach(x => x.classList.remove("selected"));
    b.classList.add("selected");
    updateTestBar();
}
function updateTestBar(){
    const a = testAnswers.filter(v => v !== null).length;
    const bar = $("testBar"); if(bar) bar.style.width = (a/testAnswers.length*100) + "%";
    const counter = $("testCounter"); if(counter) counter.textContent = `${a} / ${testAnswers.length} répondues`;
}
function submitTest(){
    const missing = [];
    testAnswers.forEach((v,i) => { if(v === null) missing.push(i+1); });
    if(missing.length){ alert(`Questions sans réponse : ${missing.join(", ")}`); return; }
    const byLevel = {};
    placementView.forEach((q,i) => {
        if(!byLevel[q.level]) byLevel[q.level] = {total:0,correct:0};
        byLevel[q.level].total++;
        if(testAnswers[i] === q.c) byLevel[q.level].correct++;
    });
    let level = "A1";
    for(const lvl of LEVELS){
        const s = byLevel[lvl]; if(!s) continue;
        if(s.correct/s.total >= 0.6) level = lvl; else break;
    }
    placementView.forEach((q,i) => {
        document.querySelectorAll(`.test-option[data-q="${i}"]`).forEach((b,j) => {
            b.classList.remove("selected");
            if(j === q.c) b.classList.add("correct");
            else if(j === testAnswers[i]) b.classList.add("wrong");
            b.disabled = true;
        });
    });
    $("placementTest").removeEventListener("click", handleTestClick);
    let r = `<div class="lesson-complete-banner">🎯 Niveau déterminé : <strong>${level}</strong></div><div class="dash-grid">`;
    LEVELS.forEach(l => {
        const s = byLevel[l]; if(!s) return;
        const pct = Math.round(s.correct/s.total*100);
        r += `<div class="dash-card"><h4>${l}</h4><div class="dash-value">${pct}%</div><div class="dash-sub">${s.correct}/${s.total}</div></div>`;
    });
    r += `</div><div class="dash-actions" style="justify-content:center"><button class="primary-btn" id="acceptLevel">Commencer au niveau ${level}</button></div>`;
    $("testResult").innerHTML = r;
    $("acceptLevel").addEventListener("click", () => {
        progress.level = level; progress.levelTestDone = true;
        saveProgress();
        state.level = level;
        $("headerLevel").textContent = level;
        $("parcoursLevel").textContent = level;
        $("dictLevel").textContent = level;
        $("placementTest").classList.add("hidden");
        renderLevels(); renderParcours();
    });
}
/* =====================================================================
   ENGLISH COACH — v3.1 — PARTIE 3/3
===================================================================== */

/* =====================================================================
   19. VERBES
===================================================================== */

function renderVerbes(){
    const done = Object.keys(progress.verbesDone).length;
    $("verbesProgress").textContent = done + "/12";
    const c = $("verbesContent");
    if(state.verbesSubtab === "overview") renderVerbesOverview(c);
    else if(state.verbesSubtab === "conjugator") renderVerbesConjugator(c);
    else if(state.verbesSubtab === "irregular") renderVerbesIrregular(c);
    else if(state.verbesSubtab === "cards") renderVerbesCards(c);
    else if(state.verbesSubtab === "vquiz") renderVerbesQuiz(c);
}
function renderVerbesOverview(c){
    c.innerHTML = `<h3 style="margin:0 0 12px">📊 Les 12 temps anglais</h3>
        <p style="color:var(--muted);margin:0 0 18px">Clique sur un temps pour voir sa fiche pédagogique.</p>
        <div class="tenses-grid">${tenses.map(t => `
            <div class="tense-card" data-tense="${t.id}">
                <span class="tc-level">${t.level}</span>
                <h4>${t.name}</h4>
                <div class="tc-form">${escapeHTML(t.form)}</div>
                <div class="tc-ex">« ${escapeHTML(t.ex)} »</div>
            </div>`).join("")}
        </div>`;
    c.querySelectorAll(".tense-card").forEach(card => {
        card.addEventListener("click", () => {
            state.verbesSubtab = "cards";
            document.querySelectorAll(".subtab").forEach(b => b.classList.toggle("active", b.dataset.subtab === "cards"));
            renderVerbes();
            setTimeout(() => {
                const el = document.querySelector(`[data-fiche="${card.dataset.tense}"]`);
                if(el){ el.open = true; el.scrollIntoView({behavior:"smooth",block:"center"}); }
            }, 100);
        });
    });
}
function renderVerbesConjugator(c){
    c.innerHTML = `<h3 style="margin:0 0 12px">🔧 Conjugueur complet</h3>
        <div class="conj-controls">
            <label for="conjVerb">Verbe :</label>
            <select id="conjVerb">
                <optgroup label="Irréguliers">${irregularVerbs.map(v => `<option value="${v.base}">${v.base} (${escapeHTML(v.fr)})</option>`).join("")}</optgroup>
                <optgroup label="Réguliers">${regularVerbs.map(v => `<option value="${v.base}">${v.base} (${escapeHTML(v.fr)})</option>`).join("")}</optgroup>
            </select>
        </div>
        <div id="conjTableWrap"></div>`;
    const sel = $("conjVerb");
    sel.addEventListener("change", () => renderConjTable(sel.value));
    renderConjTable(sel.value);
}
function renderConjTable(base){
    const t = conjugateAll(base);
    const P = ["I","you","he/she/it","we","they"];
    let h = `<table class="conj-table"><thead><tr><th>Temps</th><th>Affirmatif</th><th>Négatif</th><th>Interrogatif</th></tr></thead><tbody>`;
    Object.entries(t).forEach(([name, form]) => {
        h += `<tr><td class="tense-name">${name}</td>
            <td><div class="conj-forms">${form.aff.map((f,i) => `<span><b>${P[i]}</b>${f} <button class="conj-say" data-say="${escapeHTML(P[i] + ' ' + f)}">🔊</button></span>`).join("")}</div></td>
            <td><div class="conj-forms">${form.neg.map((f,i) => `<span><b>${P[i]}</b>${f}</span>`).join("")}</div></td>
            <td><div class="conj-forms">${form.int.map(f => `<span>${escapeHTML(f)}</span>`).join("")}</div></td>
        </tr>`;
    });
    h += `</tbody></table>`;
    $("conjTableWrap").innerHTML = h;
    $("conjTableWrap").querySelectorAll(".conj-say").forEach(b => b.addEventListener("click", () => speak(b.dataset.say)));
}
function renderVerbesIrregular(c){
    c.innerHTML = `<h3 style="margin:0 0 12px">⚡ Verbes irréguliers (${irregularVerbs.length})</h3>
        <div style="max-height:600px;overflow-y:auto;border-radius:12px">
        <table class="irr-table"><thead><tr><th>Base</th><th>Past</th><th>Past participle</th><th>Français</th><th></th></tr></thead><tbody>
        ${irregularVerbs.map(v => `<tr>
            <td class="base">${escapeHTML(v.base)}</td>
            <td class="past">${escapeHTML(v.past)}</td>
            <td class="pp">${escapeHTML(v.pp)}</td>
            <td class="fr">${escapeHTML(v.fr)}</td>
            <td><button class="conj-say" data-say="${escapeHTML(v.base)}, ${escapeHTML(v.past.split('/')[0])}, ${escapeHTML(v.pp.split('/')[0])}">🔊</button></td>
        </tr>`).join("")}
        </tbody></table></div>`;
    c.querySelectorAll(".conj-say").forEach(b => b.addEventListener("click", () => speak(b.dataset.say)));
}
function renderVerbesCards(c){
    c.innerHTML = `<h3 style="margin:0 0 12px">📖 Fiches pédagogiques</h3>
        ${tenses.map(t => `
            <details class="fiche" data-fiche="${t.id}">
                <summary>${escapeHTML(t.name)} <span class="tc-level" style="position:static;margin-left:auto">${t.level}</span></summary>
                <div class="fiche-content">
                    <h5>📐 Formation</h5>
                    <div class="rule-box"><strong>${escapeHTML(t.name)}</strong> : <code>${escapeHTML(t.form)}</code><br>Exemple : <em>${escapeHTML(t.ex)}</em></div>
                    <h5>🎯 Quand on l'utilise</h5>
                    <div class="pedago-use">${t.use}<br><br>${t.explain}</div>
                    <h5>✏️ Exemples commentés</h5>
                    ${t.examples.map(ex => `<div class="pedago-example">
                        <div><span class="ex-en">${escapeHTML(ex.en)}</span><span class="ex-comment">→ ${escapeHTML(ex.comment)}</span></div>
                        <button class="ghost-btn" data-say="${escapeHTML(ex.en)}">🔊</button>
                    </div>`).join("")}
                    <h5>⚖️ Comparaison</h5>
                    <div class="comparison-grid">
                        <div class="comparison-card wrong"><span class="label">❌ Incorrect</span>${escapeHTML(t.comparison.wrong.text)}<br><em style="font-size:12px">${escapeHTML(t.comparison.wrong.note)}</em></div>
                        <div class="comparison-card right"><span class="label">✅ Correct</span>${escapeHTML(t.comparison.right.text)}<br><em style="font-size:12px">${escapeHTML(t.comparison.right.note)}</em></div>
                    </div>
                    <h5>📌 Marqueurs temporels</h5>
                    <div class="marker-list">${t.markers.map(m => `<span class="marker-pill">${escapeHTML(m)}</span>`).join("")}</div>
                    <h5>⚠️ Piège à éviter</h5>
                    <div class="pitfall">${t.pitfall}</div>
                    <h5>💡 Astuce mémoire</h5>
                    <div class="memory-tip">${t.memory}</div>
                    <div class="dash-actions" style="margin-top:18px">
                        <button class="primary-btn" data-mark-done="${t.id}">
                            ${progress.verbesDone[t.id] ? "✅ Temps maîtrisé" : "✔️ Marquer comme maîtrisé"}
                        </button>
                    </div>
                </div>
            </details>
        `).join("")}`;
    c.querySelectorAll("[data-say]").forEach(b => b.addEventListener("click", () => speak(b.dataset.say)));
    c.querySelectorAll("[data-mark-done]").forEach(b => b.addEventListener("click", () => {
        progress.verbesDone[b.dataset.markDone] = true;
        saveProgress();
        renderVerbes();
    }));
}
let verbesQuizState = null;
function renderVerbesQuiz(c){
    if(!verbesQuizState){
        verbesQuizState = { questions: buildVerbesQuiz(), answers: [], done: false };
    }
    if(verbesQuizState.done){
        const correct = verbesQuizState.questions.filter((q,i) => verbesQuizState.answers[i] === q.c).length;
        const total = verbesQuizState.questions.length;
        const score = Math.round(correct/total*100);
        c.innerHTML = `<div class="lesson-complete-banner">🎯 Score : <strong>${score}%</strong> (${correct}/${total})</div>
            ${verbesQuizState.questions.map((q,i) => {
                const ua = verbesQuizState.answers[i], ok = ua === q.c;
                return `<div class="vquiz-q" style="${ok ? 'border-left-color:var(--success)' : 'border-left-color:var(--danger)'}">
                    <div class="vqt">${i+1}. ${q.q}</div>
                    <div class="vquiz-opts">${q.opts.map((o,j) => {
                        let cls = ""; if(j === q.c) cls = "correct"; else if(j === ua) cls = "wrong";
                        return `<button class="vquiz-opt ${cls}" disabled>${escapeHTML(o)}</button>`;
                    }).join("")}</div>
                </div>`;
            }).join("")}
            <div class="dash-actions" style="justify-content:center"><button class="primary-btn" id="vQuizRestart">🔄 Nouvel exercice</button></div>`;
        $("vQuizRestart").addEventListener("click", () => { verbesQuizState = null; renderVerbes(); });
        return;
    }
    c.innerHTML = `<h3 style="margin:0 0 16px">🎯 Exercices sur les verbes</h3>
        ${verbesQuizState.questions.map((q,i) => `
            <div class="vquiz-q" data-qi="${i}">
                <div class="vqt">${i+1}. ${q.q}</div>
                <div class="vquiz-opts">${q.opts.map((o,j) => `<button class="vquiz-opt" data-qi="${i}" data-oi="${j}">${escapeHTML(o)}</button>`).join("")}</div>
            </div>`).join("")}
        <div class="dash-actions" style="justify-content:center"><button class="primary-btn" id="vQuizSubmit">Valider mes réponses</button></div>`;
    c.querySelectorAll(".vquiz-opt").forEach(b => b.addEventListener("click", () => {
        const qi = parseInt(b.dataset.qi,10), oi = parseInt(b.dataset.oi,10);
        c.querySelectorAll(`.vquiz-opt[data-qi="${qi}"]`).forEach(x => x.classList.remove("selected"));
        b.classList.add("selected");
        verbesQuizState.answers[qi] = oi;
    }));
    $("vQuizSubmit").addEventListener("click", () => {
        const m = [];
        verbesQuizState.questions.forEach((_,i) => { if(verbesQuizState.answers[i] === undefined) m.push(i+1); });
        if(m.length){ alert(`Questions sans réponse : ${m.join(", ")}`); return; }
        verbesQuizState.done = true;
        const okCount = verbesQuizState.questions.filter((q,i) => verbesQuizState.answers[i] === q.c).length;
        const koCount = verbesQuizState.questions.length - okCount;
        if(koCount) trackError("verbes_quiz", Math.min(koCount, 5));
        awardXP(Math.round(okCount / verbesQuizState.questions.length * 20));
        if(okCount === verbesQuizState.questions.length) confetti();
        renderVerbes();
    });
}
function buildVerbesQuiz(){
    const pool = [];
    const verbes = ["work","go","have","be","study","play","eat","run","see","write"];
    const allT = Object.keys(conjugateAll("work"));
    shuffle(verbes).slice(0,6).forEach(base => {
        const tenseName = allT[Math.floor(Math.random()*allT.length)];
        const t = conjugateAll(base)[tenseName];
        const correct = t.aff[0];
        const allForms = conjugateAll(base);
        const wrongs = shuffle([...new Set(allT.filter(n => n !== tenseName).map(n => allForms[n].aff[0]).filter(f => f !== correct))]).slice(0,3);
        const opts = shuffle([correct, ...wrongs]);
        pool.push({ q:`Forme correcte au <strong>${tenseName}</strong> (verbe : ${base}) :`, opts, c: opts.indexOf(correct) });
    });
    shuffle(irregularVerbs).slice(0,4).forEach(v => {
        const correct = v.past.split("/")[0];
        const wrongs = shuffle(irregularVerbs.filter(o => o.base !== v.base).map(o => o.past.split("/")[0]).filter(p => p !== correct)).slice(0,3);
        const opts = shuffle([correct, ...wrongs]);
        pool.push({ q:`<strong>Past simple</strong> de « ${v.base} » :`, opts, c: opts.indexOf(correct) });
    });
    shuffle(irregularVerbs).slice(0,3).forEach(v => {
        const correct = v.pp.split("/")[0];
        const wrongs = shuffle(irregularVerbs.filter(o => o.base !== v.base).map(o => o.pp.split("/")[0]).filter(p => p !== correct)).slice(0,3);
        const opts = shuffle([correct, ...wrongs]);
        pool.push({ q:`<strong>Past participle</strong> de « ${v.base} » :`, opts, c: opts.indexOf(correct) });
    });
    pool.push(
        { q:"« Yesterday » indique :", opts:["Present Simple","Past Simple","Future Simple","Present Perfect"], c:1 },
        { q:"« Since 2020 » est typique de :", opts:["Past Simple","Present Perfect","Future Simple","Past Perfect"], c:1 }
    );
    return pool.sort(() => Math.random() - 0.5);
}

/* =====================================================================
   20. TEST INTERNATIONAL (EF SET)
===================================================================== */

let intlState = null;

function buildIntlTest(){
    const readPool = [
        {level:"A1", q:"Choose the correct form:", opts:["I am a doctor.","I is a doctor.","I are a doctor."], c:0},
        {level:"A1", q:"Choose:", opts:["She have a cat.","She has a cat.","She haves a cat."], c:1},
        {level:"A1", q:"« Merci » =", opts:["Please","Thank you","Sorry"], c:1},
        {level:"A2", q:"Choose:", opts:["I went to Paris last year.","I go to Paris last year.","I gone to Paris last year."], c:0},
        {level:"A2", q:"Choose:", opts:["There is two books.","There are two books.","There have two books."], c:1},
        {level:"A2", q:"« Hier » =", opts:["Tomorrow","Today","Yesterday"], c:2},
        {level:"B1", q:"Choose:", opts:["I have lived here since 2018.","I live here since 2018.","I am living since 2018."], c:0},
        {level:"B1", q:"Choose:", opts:["The man which called you.","The man who called you.","The man whose called you."], c:1},
        {level:"B1", q:"« Bientôt » =", opts:["Soon","Late","Early"], c:0},
        {level:"B2", q:"Choose:", opts:["If I was you, I would go.","If I were you, I would go.","If I am you, I would go."], c:1},
        {level:"B2", q:"Formal connector:", opts:["Anyway","Therefore","Plus"], c:1},
        {level:"B2", q:"Choose:", opts:["He said he had finished.","He said he has finished.","He said he have finished."], c:0},
        {level:"C1", q:"Stylistic inversion:", opts:["Never I have seen such beauty.","Never have I seen such beauty.","I have never seen such beauty."], c:1},
        {level:"C1", q:"Nuance:", opts:["This is false.","This might be inaccurate.","This is wrong."], c:1},
        {level:"C1", q:"« Éclairer un sujet » =", opts:["shed light on","light up","turn on"], c:0},
        {level:"C2", q:"« Un mal pour un bien » =", opts:["a piece of cake","a blessing in disguise","a drop in the ocean"], c:1},
        {level:"C2", q:"Correct inversion:", opts:["Rarely she complains.","Rarely does she complain.","She rarely does complain."], c:1},
        {level:"C2", q:"« Bâcler » =", opts:["cut corners","take turns","make ends meet"], c:0}
    ];
    const listenPool = [
        {level:"A1", spoken:"I have a cat.", opts:["I have a cat.","I have a hat.","I have a cap."], c:0},
        {level:"A1", spoken:"She is my sister.", opts:["She is my sister.","He is my sister.","She is my mother."], c:0},
        {level:"A1", spoken:"The book is on the table.", opts:["The book is on the table.","The book is under the table.","The book is on the chair."], c:0},
        {level:"A2", spoken:"I went to the market yesterday.", opts:["I went to the market yesterday.","I go to the market yesterday.","I went to the market tomorrow."], c:0},
        {level:"A2", spoken:"We are going to travel next week.", opts:["We are going to travel next week.","We are going to travel last week.","We were going to travel next week."], c:0},
        {level:"A2", spoken:"She bought a new dress.", opts:["She bought a new dress.","She brought a new dress.","She bought a new bag."], c:0},
        {level:"B1", spoken:"I have lived here for five years.", opts:["I have lived here for five years.","I have lived here for four years.","I lived here for five years."], c:0},
        {level:"B1", spoken:"If it rains, we will stay home.", opts:["If it rains, we will stay home.","If it rains, we would stay home.","If it rained, we will stay home."], c:0},
        {level:"B1", spoken:"She is the woman who helped me.", opts:["She is the woman who helped me.","She is the woman which helped me.","She is the woman whose helped me."], c:0},
        {level:"B2", spoken:"Had I known, I would have come earlier.", opts:["Had I known, I would have come earlier.","If I known, I would come earlier.","Had I know, I would come earlier."], c:0},
        {level:"B2", spoken:"Despite the difficulties, they succeeded.", opts:["Despite the difficulties, they succeeded.","Despite the difficulties, they success.","Despite difficulties, they succeeds."], c:0},
        {level:"B2", spoken:"The project requires careful planning.", opts:["The project requires careful planning.","The project require careful planning.","The project requires careful plan."], c:0},
        {level:"C1", spoken:"Rarely does one encounter such dedication.", opts:["Rarely does one encounter such dedication.","Rarely one encounters such dedication.","Rarely does one encounters such dedication."], c:0},
        {level:"C1", spoken:"The findings shed light on a subtle phenomenon.", opts:["The findings shed light on a subtle phenomenon.","The findings shed light on a subtle phenomena.","The finding sheds light on subtle phenomenon."], c:0},
        {level:"C1", spoken:"That being said, I see your point.", opts:["That being said, I see your point.","That been said, I see your point.","That being say, I see your point."], c:0},
        {level:"C2", spoken:"He bit the bullet and resigned.", opts:["He bit the bullet and resigned.","He bite the bullet and resigned.","He bitten the bullet and resigned."], c:0},
        {level:"C2", spoken:"Little did we suspect the outcome.", opts:["Little did we suspect the outcome.","Little we did suspect the outcome.","Little we suspect the outcome."], c:0},
        {level:"C2", spoken:"Her success was a blessing in disguise.", opts:["Her success was a blessing in disguise.","Her success was a blessing in the skies.","Her success was a blessing in the sky."], c:0}
    ];
    const s1 = shuffle(readPool).slice(0, 15);
    const s2 = shuffle(listenPool).slice(0, 15);
    const pool = [];
    s1.forEach(q => pool.push({...shuffleOpts(q), type:"read"}));
    s2.forEach(q => pool.push({...shuffleOpts(q), type:"listen"}));
    return shuffle(pool);
}

function renderIntlTestIntro(){
    const c = $("testIntlContent");
    const best = progress.intlScores.length ? Math.max(...progress.intlScores.map(s => s.score)) : null;
    $("bestIntlScore").textContent = best !== null ? best + "%" : "—";
    c.innerHTML = `
        <div class="test-intro">
            <strong>📋 À propos du test</strong>
            <ul>
                <li>30 questions : 15 <em>Reading</em> + 15 <em>Listening</em></li>
                <li>Difficulté progressive de <strong>A1 → C2</strong></li>
                <li>Durée : <strong>~20 minutes</strong>, sans limite</li>
                <li>Résultat : <strong>niveau CECRL estimé</strong> + certificat imprimable</li>
            </ul>
        </div>
        <div class="dash-actions" style="justify-content:center">
            <button class="primary-btn" id="startIntl">🏆 Commencer le test</button>
        </div>
        ${progress.intlScores.length ? `
            <h4 style="margin-top:26px">📈 Historique des scores</h4>
            <ul class="weak-list">
                ${progress.intlScores.slice(-5).reverse().map(s => `
                    <li><span>${new Date(s.date).toLocaleDateString('fr-FR')} • Niveau ${s.level}</span>
                    <span class="count" style="background:var(--success-bg);color:var(--success)">${s.score}%</span></li>
                `).join("")}
            </ul>` : ""}
    `;
    $("startIntl").addEventListener("click", () => { intlState = { test: buildIntlTest(), answers: [], done: false }; renderIntlTest(); });
}

function renderIntlTest(){
    const c = $("testIntlContent");
    const t = intlState.test;
    intlState.answers = new Array(t.length).fill(null);
    let h = `<div class="test-meta">
        <div class="stat">Questions : ${t.length}</div>
        <div class="stat">Mode : ~20 min</div>
    </div>
    <div class="test-progress progress"><div class="progress-bar" id="intlBar"></div></div>
    <p id="intlCounter">0 / ${t.length} répondues</p>`;
    t.forEach((q, i) => {
        h += `<div class="intl-q" data-qi="${i}">
            <div class="intl-qh">
                <h4>Q${i+1}. ${q.type === "listen" ? "🎧 Écoute et choisis ce que tu entends" : escapeHTML(q.q)}</h4>
                <span class="intl-badge ${q.type === 'listen' ? 'listen' : ''}">${q.level} • ${q.type === 'read' ? 'Reading' : 'Listening'}</span>
            </div>`;
        if(q.type === "listen"){
            h += `<button class="intl-play" data-say="${escapeHTML(q.spoken)}">🔊 Écouter</button>`;
        }
        h += `<div class="intl-opts">${q.opts.map((o, j) => `
            <button class="intl-opt" data-qi="${i}" data-oi="${j}">${escapeHTML(o)}</button>
        `).join("")}</div></div>`;
    });
    h += `<div class="dash-actions" style="justify-content:center">
        <button class="primary-btn" id="intlSubmit">Terminer le test</button>
    </div><div id="intlResult"></div>`;
    c.innerHTML = h;
    c.querySelectorAll(".intl-play").forEach(b => b.addEventListener("click", () => speak(b.dataset.say)));
    c.querySelectorAll(".intl-opt").forEach(b => b.addEventListener("click", () => {
        const qi = parseInt(b.dataset.qi, 10), oi = parseInt(b.dataset.oi, 10);
        c.querySelectorAll(`.intl-opt[data-qi="${qi}"]`).forEach(x => x.classList.remove("selected"));
        b.classList.add("selected");
        intlState.answers[qi] = oi;
        updateIntlBar();
    }));
    $("intlSubmit").addEventListener("click", submitIntlTest);
    updateIntlBar();
}
function updateIntlBar(){
    const total = intlState.test.length;
    const a = intlState.answers.filter(v => v !== null).length;
    const bar = $("intlBar"); if(bar) bar.style.width = (a/total*100) + "%";
    const c = $("intlCounter"); if(c) c.textContent = `${a} / ${total} répondues`;
}
function submitIntlTest(){
    const missing = [];
    intlState.answers.forEach((v,i) => { if(v === null) missing.push(i+1); });
    if(missing.length){
        if(!confirm(`Il reste ${missing.length} question(s) sans réponse. Valider quand même ?`)) return;
    }
    const t = intlState.test;
    let correct = 0;
    const byLevel = {};
    t.forEach((q, i) => {
        if(!byLevel[q.level]) byLevel[q.level] = {total:0, correct:0};
        byLevel[q.level].total++;
        if(intlState.answers[i] === q.c){ correct++; byLevel[q.level].correct++; }
    });
    const score = Math.round(correct / t.length * 100);
    let level = "A1";
    for(const lvl of LEVELS){
        const s = byLevel[lvl]; if(!s) continue;
        if(s.correct / s.total >= 0.6) level = lvl; else break;
    }
    const efLabels = { A1:"Beginner (A1)", A2:"Elementary (A2)", B1:"Intermediate (B1)", B2:"Upper Intermediate (B2)", C1:"Advanced (C1)", C2:"Proficient (C2)" };
    t.forEach((q, i) => {
        const el = document.querySelector(`.intl-q[data-qi="${i}"]`);
        if(!el) return;
        el.querySelectorAll(".intl-opt").forEach((b, j) => {
            b.classList.remove("selected");
            if(j === q.c) b.classList.add("correct");
            else if(j === intlState.answers[i]) b.classList.add("wrong");
            b.disabled = true;
        });
    });
    awardXP(40);
    progress.intlScores.push({ date: Date.now(), score, level });
    if(progress.intlScores.length > 20) progress.intlScores.shift();
    saveProgress();
    const now = new Date().toLocaleDateString('fr-FR', {year:'numeric', month:'long', day:'numeric'});
    $("intlResult").innerHTML = `
        <div class="certificate">
            <h3>🎓 Certificat de niveau</h3>
            <p style="font-size:14px;margin:0">Score final</p>
            <div class="cert-level">${level}</div>
            <div class="cert-score">${score}% — ${efLabels[level]}</div>
            <div class="cefr-scale">
                ${LEVELS.map(l => `<span class="cefr-pill ${l === level ? 'active' : ''}">${l}</span>`).join("")}
            </div>
            <p class="cert-desc">Basé sur le <strong>CECRL</strong> et inspiré du format <strong>EF SET</strong>.</p>
            <p class="cert-meta">Délivré le ${now} — English Coach — Apprendre l'anglais gratuitement</p>
            <div class="dash-actions" style="justify-content:center;margin-top:18px">
                <button class="primary-btn" onclick="window.print()">🖨️ Imprimer / PDF</button>
                <button class="ghost-btn" id="retakeIntl">🔄 Refaire le test</button>
            </div>
        </div>
    `;
    $("retakeIntl").addEventListener("click", () => renderIntlTestIntro());
    $("intlResult").scrollIntoView({behavior:"smooth",block:"start"});
}

/* =====================================================================
   21. VOCABULAIRE SRS
===================================================================== */

const SRS_INTERVALS = [0,1,3,7,14,30];
function dueVocabCount(){
    const n = Date.now();
    return Object.values(progress.vocab).filter(v => v.nextReview <= n).length;
}
function updateVocabCounters(){
    $("vocabDueCount").textContent = dueVocabCount();
    $("vocabTotalCount").textContent = Object.keys(progress.vocab).length;
}
function renderVocabPanel(){
    const panel = $("vocabPanel");
    updateVocabCounters();
    const due = Object.entries(progress.vocab).filter(([_,v]) => v.nextReview <= Date.now()).sort((a,b) => a[1].nextReview - b[1].nextReview);
    if(!due.length){
        panel.innerHTML = `<div class="vocab-empty">🎉 Aucune carte à réviser.<br><br>Ajoute du vocabulaire depuis les leçons du <strong>Parcours</strong>.</div>`;
        return;
    }
    const [key, card] = due[0];
    panel.innerHTML = `
        <div class="vocab-panel">
            <p style="color:var(--muted)">Carte 1 sur ${due.length} • Boîte ${card.box}/5</p>
            <div class="vocab-card">
                <div class="vc-word">${escapeHTML(key)}</div>
                <button class="ghost-btn" id="vcSay">🔊 Écouter</button>
                <div class="vc-answer hidden" id="vcAnswer">
                    <div>${escapeHTML(card.fr)}</div>
                    <div class="vc-example">« ${escapeHTML(card.ex)} »</div>
                </div>
            </div>
            <div class="vocab-actions" id="vcActions">
                <button class="btn-good" id="vcReveal">👁️ Afficher la réponse</button>
            </div>
        </div>`;
    $("vcSay").addEventListener("click", () => speak(key));
    if(navigator.userActivation && navigator.userActivation.hasBeenActive) speak(key);
    $("vcReveal").addEventListener("click", () => {
        $("vcAnswer").classList.remove("hidden");
        $("vcActions").innerHTML = `
            <button class="btn-again" data-rating="again">❌ Raté</button>
            <button class="btn-hard" data-rating="hard">😐 Difficile</button>
            <button class="btn-good" data-rating="good">✅ Facile</button>`;
        $("vcActions").querySelectorAll("button").forEach(b => b.addEventListener("click", () => rateVocab(key, b.dataset.rating)));
    });
}
function rateVocab(key, rating){
    const c = progress.vocab[key]; if(!c) return;
    if(rating === "again"){ c.wrong++; c.box = 1; trackError("vocab"); awardXP(1); }
    else if(rating === "hard"){ c.correct++; awardXP(2); }
    else { c.correct++; c.box = Math.min(5, c.box + 1); awardXP(3); }
    const days = SRS_INTERVALS[c.box] || 1;
    c.nextReview = Date.now() + days * 24 * 60 * 60 * 1000;
    saveProgress();
    renderVocabPanel();
}

/* =====================================================================
   22. ÉVÉNEMENTS
===================================================================== */

$("replayPhrase").addEventListener("click", () => speak(currentPhrase()));
$("showAnswerPhrase").addEventListener("click", showAnswerPhrase);
$("skipPhrase").addEventListener("click", skipPhrase);
$("shufflePhrase").addEventListener("click", shufflePhrase);

$("dictPlay").addEventListener("click", () => dictState.isPlaying ? dictPause() : dictStart());
$("dictPrev").addEventListener("click", dictPrev);
$("dictNext").addEventListener("click", dictNext);
$("dictReplay").addEventListener("click", dictReplay);
$("dictStop").addEventListener("click", dictStop);
$("dictCheck").addEventListener("click", dictCheckAll);
$("dictReset").addEventListener("click", () => {
    if($("dictTextarea").value.trim() && !confirm("Effacer ta dictée et recommencer ?")) return;
    dictStop(); updateDictationUI(false);
});
$("dictTextarea").addEventListener("input", e => saveDraft(currentDictation().key, e.target.value));
$("dictTextarea").addEventListener("keydown", e => { if((e.ctrlKey || e.metaKey) && e.key === "Enter"){ e.preventDefault(); dictCheckAll(); } });
$("dictPause").addEventListener("input", e => {
    dictState.pauseMs = parseInt(e.target.value, 10) * 1000;
    $("dictPauseLabel").textContent = e.target.value + "s";
});

document.querySelectorAll(".dict-mode").forEach(b => b.addEventListener("click", () => setDictMode(b.dataset.mode)));
$("narGrid").addEventListener("click", e => { const b = e.target.closest("[data-ep]"); if(b) goToEpisode(parseInt(b.dataset.ep, 10), false); });
$("narAuto").addEventListener("change", e => { try{ localStorage.setItem("edc.narAuto", e.target.checked ? "1" : "0"); }catch{} });
$("voiceSelect").addEventListener("change", e => {
    try{ e.target.value ? localStorage.setItem(VOICE_KEY, e.target.value) : localStorage.removeItem(VOICE_KEY); }catch{}
    renderVoicePicker();
    speak("Hello! This is the voice for your dictation.");
});
$("speechRate").addEventListener("input", e => { state.speechRate = parseFloat(e.target.value); });

document.addEventListener("visibilitychange", () => {
    if(document.hidden && dictState.isPlaying) dictStop();
});

document.querySelectorAll(".subtab").forEach(t => {
    t.addEventListener("click", () => {
        document.querySelectorAll(".subtab").forEach(b => b.classList.remove("active"));
        t.classList.add("active");
        state.verbesSubtab = t.dataset.subtab;
        if(state.verbesSubtab === "vquiz") verbesQuizState = null;
        renderVerbes();
    });
});

/* =====================================================================
   23. INITIALISATION
===================================================================== */

renderLevels();
$("headerLevel").textContent = state.level;
$("parcoursLevel").textContent = progress.level || "—";
$("dictLevel").textContent = state.level;
updateVocabCounters();
renderGamification();

/* Thème clair / sombre (suit le système par défaut, mémorise le choix) */
function currentTheme(){
    return document.documentElement.getAttribute("data-theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
}
function applyThemeIcon(){ $("themeToggle").textContent = currentTheme() === "dark" ? "☀️" : "🌙"; }
$("themeToggle").addEventListener("click", () => {
    const next = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try{ localStorage.setItem("edc.theme", next); }catch{}
    applyThemeIcon();
});
applyThemeIcon();

try{ if(localStorage.getItem("edc.dictMode") === "naruto") setDictMode("naruto", true); }catch{}
renderVoicePicker();
applyRoute(getRouteFromHash());
