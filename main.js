const civilizations = {
    egypt: {
        title: "Ancient Egypt",
        color: "#b8860b",
        pages: [
            {
                left: { type: "illustration", src: "egypt.png", caption: "Plate I: The Great Pyramids and the Nile Valley" },
                right: { title: "I. The Gift of the Nile", subtitle: "Geography & Climate", content: "Egypt's existence was defined by the Nile. To the east and west lay the 'Red Land' (Deshret)—inhospitable deserts that provided protection from invaders. Along the river lay the 'Black Land' (Kemet), where nutrient-rich silt from Ethiopian monsoons deposited annually, creating the most fertile soil in the ancient world. This predictable cycle allowed for a centralized state to emerge, managing irrigation and grain storage on a scale never before seen." }
            },
            {
                left: { title: "II. First Stones", subtitle: "Prehistoric Foundations", content: "Long before the First Dynasty, Neolithic cultures like the Badarian and Naqada settled the valley. They developed pottery, copper working, and complex burial rites. Around 3100 BC, the legendary King Menes (or Narmer) unified Upper and Lower Egypt. The Narmer Palette depicts this unification, showing the king wearing both the White Crown of the South and the Red Crown of the North, symbolizing the birth of the world's longest-lasting civilization." },
                right: { title: "III. Imperial Zenith", subtitle: "The Age of Empire", content: "The New Kingdom (1550–1070 BC) marked the absolute peak of Egyptian power. Following the expulsion of the Hyksos invaders, Pharaohs like Thutmose III—the 'Napoleon of Egypt'—expanded the empire from the shores of the Euphrates to the Fourth Cataract of the Nile. This was an era of unprecedented wealth, where gold 'flowed like dust' and the capital of Thebes became the jewel of the ancient world." }
            },
            {
                left: { title: "IV. Law of the Land", subtitle: "Governance & Theocracy", content: "The Pharaoh was not just a monarch; they were a living god, the maintainer of Ma'at (universal balance). Assisting the Pharaoh was the Vizier, the highest official who oversaw the complex bureaucracy of tax collection, judicial records, and grand architectural projects. Egyptian law was based on common sense and tradition, focusing on restitution rather than punishment, ensuring the social harmony required for the civilization to function." },
                right: { title: "V. The Social Fabric", subtitle: "Hierarchy & Status", content: "Egyptian society was shaped like a pyramid. At the top was the Pharaoh, followed by the viziers, priests, and nobles. Below them were the scribes and artisans, whose skills were highly valued. At the base were the farmers and laborers who comprised the majority of the population. Unlike many contemporary societies, Egyptian women held significant legal rights, including the ability to own property, enter contracts, and sue for divorce." }
            },
            {
                left: { title: "VI. Market & Mint", subtitle: "Economic Systems", content: "Ancient Egypt operated without coined money for most of its history. Instead, they used a barter system based on the 'Shat' and 'Deben'—standardized weights of silver or copper. Grain was the primary currency; it was collected as tax, stored in state silos, and redistributed as wages. Standardized units of measure ensured that even in a non-monetary economy, trade remained fair and precisely documented by the state's army of scribes." },
                right: { title: "VII. Worldly Goods", subtitle: "International Trade", content: "Egypt was a central hub for global commerce. From the Mediterranean, they imported cedar wood (Byblos) and olive oil. From the south via the Red Sea, Queen Hatshepsut's famous expedition fetched frankincense, myrrh, and ebony from the Land of Punt. They exported surplus grain, linen, and papyrus—the 'paper' of the ancient world—creating a trade network that made the Nile valley the wealthiest region in the Mediterranean." }
            },
            {
                left: { type: "illustration", src: "egypt_illustration_1772794990689.png", caption: "Plate VIII: The Art of Eternal Masonry" },
                right: { title: "VIII. Masonry & Mortar", subtitle: "Engineering & Architecture", content: "The Egyptians were masters of the stone. They pioneered the use of ramps, levers, and massive sledges to move blocks weighing up to 80 tons. The precision of the Great Pyramid, aligned to the cardinal points with an error of less than 3/60ths of a degree, remains an engineering marvel. Their architecture was not just for the living but for eternity, utilizing limestone, granite, and sandstone to create monuments designed to defy the passage of time." }
            },
            {
                left: { title: "X. Sacred Rites", subtitle: "Rituals & Priesthood", content: "Temples were the 'houses' of the gods. Every morning, the high priest would break the seal of the inner sanctuary, wash the god's statue, and offer it meals and fine incense. The priesthood was a powerful and literate class, often serving for generations. They maintained the vast temple estates, which acted as economic centers, and performed the intricate festivals and processions that punctuated the Egyptian calendar, binding the people to their divine protectors." },
                right: { title: "XI. The Final Journey", subtitle: "Afterlife & Eternity", content: "Mummification was the essential process of preserving the body so the soul (Ka and Ba) could recognize it in the afterlife. The process took 70 days and involved the removal of internal organs (stored in canopic jars) and dehydration with natron salt. Wealthy Egyptians were buried with 'The Book of the Dead,' a collection of spells designed to help the deceased pass the dangerous trials of the underworld and reach the blissful fields of Aaru." }
            },
            {
                left: { title: "XII. Stargazers & Sums", subtitle: "Science & Mathematics", content: "Egyptian mathematics was practical, centered on the 'Rhind Papyrus' methods for calculating area and volume. They developed a solar calendar of 365 days—the basis for our own—refined by observing the heliacal rising of Sirius. Their astronomy allowed for the precise orientation of pyramids and temples, reflecting a deep understanding of celestial cycles used to predict the life-giving Nile floods." },
                right: { title: "XIII. Herbalists & Healers", subtitle: "Medicine & Surgery", content: "The 'Edwin Smith Papyrus' reveals a civilization with a surprisingly advanced understanding of anatomy and surgery. Egyptian doctors treated fractures with splints, performed simple surgeries, and utilized hundreds of herbal remedies, including honey for infections and willow bark (a precursor to aspirin) for pain. Medicine was a blend of clinical observation and magic, often presided over by Sekhmet, the lioness goddess of healing and plague." }
            },
            {
                left: { title: "XIV. Heart of the Home", subtitle: "Domestic Life", content: "Most Egyptians lived in sun-dried mud-brick houses designed to stay cool in the desert heat. Families often spent evenings on the flat roofs under the stars. The staple diet consisted of emmer wheat bread and beer, supplemented by vegetables like lentils, onions, and garlic. While the wealthy enjoyed private gardens and pools, the rhythmic life of the commoner was dictated by the seasons of the Nile and the labor of the fields." },
                right: { title: "XV. Thread & Gold", subtitle: "Fashion & Adornment", content: "Linen, woven from flax, was the universal fabric of Egypt, valued for its lightness and purity. Men typically wore wrap-around kilts (shenty), while women wore simple sheath dresses (kalasiris). Both sexes delighted in heavy makeup—kohl to protect the eyes from the sun and green malachite for beauty—and elaborate jewelry made of gold, turquoise, and lapis lazuli, which signaled status and provided amuletic protection." }
            },
            {
                left: { title: "XVI. Ink & Reed", subtitle: "Education & Literacy", content: "Education was the path to the elite role of the Scribe. Boys (and rarely girls) from wealthy families attended 'House of Life' schools attached to temples, where they spent years mastering the thousands of characters in the Hieroglyphic and Hieratic scripts. Scribes were the 'glue' of Egypt, recording everything from grain harvests and tax assessments to the legendary tales of the gods on durable sheets of papyrus." },
                right: { title: "XVII. Mask & Arena", subtitle: "Arts & Entertainment", content: "Egyptian art was never merely decorative; it was functional and symbolic. Sculpture and painting followed strict canons of proportion designed to imbue the work with life-giving power. For leisure, Egyptians enjoyed board games like Senet, which symbolized the soul's journey, as well as musical performances with harps, lutes, and sistrums during the many colorful religious festivals that brought the entire community together in song and dance." }
            },
            {
                left: { title: "XVIII. Steel & Strategy", subtitle: "Military & Expansion", content: "While traditionally isolationist, the New Kingdom transformed Egypt into a military superpower. They adopted the horse-drawn chariot and composite bow from the Levant, creating elite corps of master archers and charioteers. Fortresses along the Nile's cataracts and the borders of the Sinai guaranteed security, while professional armies led by warrior-kings like Thutmose III and Ramses II ensured that Egypt's influence was felt from the desert of Sudan to the mountains of Syria." },
                right: { title: "XIX. The Twilight Era", subtitle: "Decline & Conquest", content: "The end of the New Kingdom saw Egypt weakened by internal strife, corrupt priesthoods, and a changing Mediterranean landscape. The 'Sea Peoples' invasions and the loss of Levantine territories signaled the beginning of the Third Intermediate Period. Egypt was eventually conquered by the Assyrians, Persians, and finally Alexander the Great, yet even under foreign rule, the core of Egyptian identity and culture remained remarkably resilient." }
            },
            {
                left: { title: "XX. Echoes in Stone", subtitle: "Modern Legacy", content: "The civilization of the Nile eventually faded into silence, its hieroglyphs unreadable until the discovery of the Rosetta Stone in 1799. Yet, Egyptian influence remains ubiquitous: in our 365-day calendar, the columns of our monumental architecture, and the very concept of a centralized state. Today, the silent pyramids and the gold of Tutankhamun continue to captivate the world, serving as a testament to humanity's first great attempt at achieving eternity." },
                right: { type: "text", title: "Archive End", subtitle: "Conclusion of Plate I", content: "You have reached the final entry for Ancient Egypt. This record represents the culmination of three millennia of history, from the first unification to the final echoes of the Pharaohs. Proceed to the Table of Contents to explore the next great culture in our archive." }
            }
        ]
    },
    rome: {
        title: "Ancient Rome",
        color: "#800000",
        pages: [
            {
                left: { type: "illustration", src: "rome.png", caption: "Plate II: The Colosseum and the Imperium Romanum" },
                right: { title: "I. The Seven Hills", subtitle: "Geography & Origins", content: "Rome began as a collection of small settlements on seven hills overlooking the Tiber River. Its central position in the Italian peninsula, combined with the navigable river and proximity to the sea, made it a natural point for trade and communication. This strategic geography, along with the fertile plains of Latium, provided the foundation for a small city-state to eventually master the entire Mediterranean world." }
            },
            {
                left: { title: "II. First Stones", subtitle: "Kings & The Republic", content: "Following the legendary founding by Romulus and the era of Etruscan kings, Rome established a Republic in 509 BC. This system was designed to prevent any one man from holding absolute power, featuring a complex balance between the Senate, the magistrates, and the popular assemblies. This 'Res Publica' (public matter) fostered a sense of civic duty and military discipline that would define Roman character for centuries." },
                right: { title: "III. Imperial Zenith", subtitle: "The Pax Romana", content: "The Pax Romana, or 'Roman Peace,' began with Augustus (27 BC) and lasted for over two centuries. This was an era of relative stability and immense prosperity, where Roman power reached from Scotland to the Sahara. Trade flourished, cities grew, and Roman culture became the universal standard, marking the absolute peak of the empire's political, economic, and cultural influence." }
            },
            {
                left: { title: "IV. Law of the Land", subtitle: "Jurisprudence & Order", content: "Rome's greatest gift to the world was its legal system. From the early 'Twelve Tables' to the sophisticated 'Corpus Juris Civilis,' Roman law established principles like 'innocent until proven guilty' and the right to a fair trial. Their legal framework was designed to be universal, providing a stable foundation for the administration of a vast, multi-ethnic empire and influencing Western legal systems to this day." },
                right: { title: "V. The Social Fabric", subtitle: "Patricians & Plebeians", content: "Roman society was rigidly divided but surprisingly dynamic. While the Patrician nobility held the most power, the Plebeians (commoners) fought for and won significant political rights through the 'Conflict of the Orders.' Slavery was a fundamental part of the economy, but manumission was common, allowing former slaves and their children to eventually become full Roman citizens, reflecting a society that valued legal status over ethnicity." }
            },
            {
                left: { title: "VI. Market & Mint", subtitle: "The Denarius Economy", content: "The Roman economy was linked by a universal coinage, the silver Denarius. They pioneered large-scale commercial farming on 'Latifundia' and developed a complex tax system that funded the army and massive public works. The 'Annona' (the grain dole) ensured that even the poorest citizens of Rome were fed, creating a welfare state that maintained social stability in the world's first million-person city." },
                right: { title: "VII. Worldly Goods", subtitle: "The First Global Trade", content: "Under the Empire, trade reached the ends of the known world. Roman merchants traded with China for silk, India for spices, and Africa for ivory and exotic animals. A vast network of well-built roads and safe maritime routes allowed for the efficient movement of goods, taxes, and legions, creating a level of economic integration that would not be seen again in Europe until the modern era." }
            },
            {
                left: { type: "illustration", src: "rome_illustration_1772795014352.png", caption: "Plate VIII: The Grandeur of Roman Infrastructure" },
                right: { title: "VIII. Masonry & Mortar", subtitle: "Concrete & Arches", content: "Roman engineering was defined by the invention of 'Opus Caementicium' (concrete) and the master of the arch and vault. These allowed for the construction of massive structures like the Colosseum and the Pantheon. Their aqueducts, some still standing today, brought millions of gallons of fresh water to cities across the empire, reflecting a civilization that viewed engineering as the primary tool for improving the quality of human life." }
            },
            {
                left: { title: "X. Sacred Rites", subtitle: "Temples & Ancestors", content: "Religion was both public and private. While grand temples like that of Jupiter Optimus Maximus dominated the city, every Roman family maintained a private shrine to the 'Lares' and 'Penates' (household spirits). Ancestor worship was central; the wax masks of the deceased were displayed in the home and carried in funeral processions, binding the Roman family across generations through shared ritual and memory." },
                right: { title: "XI. The Final Journey", subtitle: "Tombs of the Appian Way", content: "The Romans were buried or cremated outside the city walls, often along major roads like the Appian Way. Wealthy families built elaborate tombs decorated with inscriptions and portraits, celebrating the individual's 'Cursus Honorum' (career path) and legacy. These monuments were designed to be seen by travelers, ensuring that the names and deeds of the dead remained part of the city's living memory." }
            },
            {
                left: { title: "XII. Stargazers & Sums", subtitle: "Applied Science", content: "Roman science was overwhelmingly practical. They excelled in surveying, hydraulics, and military technology. While they relied on Greek foundations for pure mathematics and astronomy, they developed sophisticated tools like the 'Groma' for laying out straight roads and canals. Their Julian calendar, refined by Julius Caesar, remains the basis of our modern calendar system, reflecting a civilization focused on order and efficiency." },
                right: { title: "XIII. Herbalists & Thinners", subtitle: "Stoicism & Medicine", content: "Roman intellectuals embraced Greek philosophy, particularly Stoicism, which emphasized duty, discipline, and self-control—values that aligned perfectly with the Roman character. In medicine, Galen's work on anatomy and pharmacology became the standard for centuries. They also pioneered public health, with massive bath complexes and sewers that improved urban life on a scale never before seen in the ancient world." }
            },
            {
                left: { title: "XIV. Heart of the Home", subtitle: "Domus & Insulae", content: "The wealthy lived in spacious 'Domus' with central courtyards and private gardens, while the majority of Romans lived in crowded 'Insulae' (apartment blocks). Daily life was centered on the 'Salutatio' (morning greeting of patrons), the marketplace, and the public baths. The 'Paterfamilias' held absolute legal authority over the household, but Roman women often exerted significant influence in family and social life." },
                right: { title: "XV. Thread & Gold", subtitle: "Toga & Stola", content: "The Toga was the iconic symbol of Roman citizenship, its drape and color signaling the wearer's rank and status. Women wore the 'Stola,' a modest long dress often layered with a 'Palla' (shawl). Jewelry was elaborate and increasingly decadent as the empire grew, featuring precious stones from the East. Both sexes valued grooming, with elaborate hairstyles and the use of olive oil and perfumes being staples of Roman identity." }
            },
            {
                left: { title: "XVI. Ink & Reed", subtitle: "Latin & Literacy", content: "Latin was the 'glue' that held the empire together. While the elite were bilingual in Greek, Latin was the language of law, administration, and the army. Literacy was surprisingly high for the ancient world, with public notices, graffiti, and even business contracts being common. The Roman alphabet, with its clear and monumental letters, remains the foundation of most modern Western writing systems." },
                right: { title: "XVII. Mask & Arena", subtitle: "Bread & Circuses", content: "The Romans were masters of mass entertainment. Chariot racing at the Circus Maximus and gladiatorial games at the Colosseum were used to entertain the masses and demonstrate the power of the emperor. Theater was also popular, though it shifted more toward spectacle and pantomime. These events were a key part of the 'Bread and Circuses' policy that kept the urban population loyal and occupied." }
            },
            {
                left: { title: "XVIII. Steel & Strategy", subtitle: "The Roman Legion", content: "The Roman Legion was the most effective military machine of the ancient world. Based on discipline, standardized equipment, and revolutionary engineering in the field, they could conquer and hold vast territories. Their ability to build roads, bridges, and fortified camps wherever they went turned every legion into a tool for both conquest and colonization, ensuring that Roman power was felt even in the most remote provinces." },
                right: { title: "XIX. The Twilight Era", subtitle: "Crisis & Transformation", content: "The 3rd Century saw Rome's first major crisis, with constant civil wars and barbarian invasions. While Diocletian and Constantine later stabilized the empire, they did so by transforming it into a more centralized and Christian state. The capital was shifted to Constantinople, and while the Western Empire eventually fell in 476 AD, the Eastern Empire continued as a beacon of Roman identity for another millennium." }
            },
            {
                left: { title: "XX. Echoes in Stone", subtitle: "The Eternal Legacy", content: "Rome never truly died; it transformed. Its language evolved into the Romance languages, its laws became the foundation of modern justice, and its architecture inspired the buildings of every subseqent empire. The very concept of a unified European culture and the foundations of Western Christianity are the direct descendants of the Eternal City, which continues to shape the world we live in today." },
                right: { type: "text", title: "Archive End", subtitle: "Conclusion of Plate II", content: "You have completed the record for Ancient Rome. This expansive empire remains the largest and most influential political experiment in Western history. Proceed to the Table of Contents to explore the next great civilization in our Digital Encyclopedia." }
            }
        ]
    },
    greece: {
        title: "Ancient Greece",
        color: "#0047ab",
        pages: [
            {
                left: { type: "illustration", src: "greece_sketch.svg", caption: "Plate I: The Aegean World and the City-States" },
                right: { title: "I. The Land & The Sea", subtitle: "Geography & Aegean", content: "Ancient Greece was defined by its rugged mountains and the endless blue of the Aegean Sea. The mountainous terrain naturally divided the people into independent city-states, or poleis, while the sea provided a highway for trade, colonization, and cultural exchange. This unique geography fostered a spirit of independence and maritime excellence that would become the hallmark of Greek civilization." }
            },
            {
                left: { title: "III. Imperial Zenith", subtitle: "The Golden Age of Athens", content: "Following the victory over Persia, Athens entered its Golden Age under Pericles (c. 448–429 BC). This was an era of unprecedented cultural achievement, where the Parthenon was built and the arts and sciences flourished. Athens became the 'School of Hellas,' attractting the greatest minds of the age and establishing the cultural foundations of Western civilization." },
                right: { title: "IV. Law of the Land", subtitle: "The Birth of Democracy", content: "In 508 BC, Cleisthenes introduced 'Isonomia' (equality of law) to Athens, laying the groundwork for the world's first democracy. While it was a direct democracy limited to adult male citizens, the concept that the 'Demos' (people) should hold the 'Kratos' (power) was revolutionary, marking the transition from tyranny to a system where laws were debated and decided in the open assembly." }
            },
            {
                left: { title: "V. The Social Fabric", subtitle: "Citizens & Slaves", content: "Greek society was complex and often contradictory. While Athens celebrated the freedom of its citizens, its economy was heavily dependent on enslaved labor. Women were largely confined to the domestic sphere, while in Sparta, women enjoyed more freedom and education as part of a society geared entirely toward military excellence. The social fabric was woven together by shared language, religion, and the competitive spirit of the 'Agon'." },
                right: { title: "VI. Market & Mint", subtitle: "The Silver Drachma", content: "The Greeks were pioneers of coinage. The Athenian 'Owl' drachma became a universal currency of the Mediterranean, trusted for its purity of silver. The Agora, or central marketplace, was the heartbeat of every city-state, where merchants traded olive oil and wine for grain and timber, and where philosophers debated in the shade of the Stoas, linking commerce and thought in a uniquely Greek way." }
            },
            {
                left: { title: "VII. Worldly Goods", subtitle: "Colonial Networks", content: "Faced with poor soil and growing populations, the Greeks became the great colonizers of the ancient world. From 'Magna Graecia' in southern Italy and Sicily to the shores of the Black Sea, they founded hundreds of colonies that remained culturally linked to their mother cities. This network allowed for a massive exchange of goods and ideas, spreading Greek culture, alphabet, and architecture across the known world." },
                right: { title: "VIII. Masonry & Mortar", subtitle: "The Orders of Stone", content: "Greek architecture achieved a level of aesthetic perfection through the Doric, Ionic, and Corinthian orders. They mastered mathematical proportions and optical refinements, such as 'Entasis' (the slight swelling of columns), to create buildings that appeared perfectly balanced to the human eye. The Parthenon remains the ultimate symbol of this mastery, a testament to a civilization that viewed beauty as a reflection of divine order." }
            },
            {
                left: { title: "IX. Voices of the Gods", subtitle: "Mount Olympus", content: "The Greeks saw their gods as powerful, immortal, and often all-too-human. Led by Zeus, the Olympian family—including Hera, Poseidon, Athena, and Apollo—controlled the heavens, the earth, and the sea. Their myths were not just stories but a way to explore the complexities of the human condition, where the interaction between gods and mortals defined the moral and spiritual landscape of the age." },
                right: { title: "X. Sacred Rites", subtitle: "Oracles & Festivals", content: "Religion was public and performative. The Oracle of Delphi was the most influential religious institution, where the Pythia gave cryptic advice to kings and commoners alike. Great festivals like the Panathenaia featured grand processions, sacrifices, and athletic competitions. These rites were essential for maintaining the 'Eusebeia' (piety) that ensured the gods remained favorable to the city-state." }
            },
            {
                left: { title: "XI. The Final Journey", subtitle: "Hades & Memory", content: "The Greeks believed that after death, the soul was led by Hermes to the river Styx, where Charon the ferryman waited. In the dark realm of Hades, most souls existed in the Asphodel Meadows, while the heroic might reach Elysium. Burial was a sacred duty; a coin was placed in the mouth of the deceased to pay the ferryman, and elaborate grave stelae were raised to ensure the individual was remembered by the living." },
                right: { title: "XII. Stargazers & Sums", subtitle: "Geometry & Harmony", content: "Greek mathematics was a search for universal truths. Pythagoras explored the harmony of numbers, Euclid codified the principles of geometry, and Archimedes calculated the value of Pi. Their science was not just practical but philosophical; they believed the universe followed mathematical laws that reflected a 'Music of the Spheres,' establishing the scientific method as a tool for understanding reality." }
            },
            {
                left: { title: "XIII. Herbalists & Thinners", subtitle: "Philosophy & Inquiry", content: "Philosophy, the 'Love of Wisdom,' was Greece's greatest export. From Socrates' ethical questioning to Plato's ideal forms and Aristotle's empirical observations, the Greeks sought to answer the fundamental questions: What is the good life? What is justice? What is the nature of existence? These inquiries shifted the focus from divine whim to human reason, laying the cornerstone of the Western intellectual tradition." },
                right: { title: "XIV. Heart of the Home", subtitle: "The Oikos", content: "Daily life in the 'Oikos' (household) was central to Greek society. Homes were simple, centered on a courtyard that provided light and privacy. Men spent much of their time in the city's public spaces, while women managed the household, spinning, and weaving. The 'Symposium,' or formal drinking party, was a key social institution for elite men, combining wine, music, and philosophical debate in a structured communal setting." }
            },
            {
                left: { title: "XV. Thread & Gold", subtitle: "Chiton & Peplos", content: "Greek fashion was defined by beautifully draped fabrics, mostly wool or linen. The 'Chiton' and 'Peplos' were simple rectangles of cloth pinned and belted at the waist, allowing for grace and movement. Jewelry was delicate and highly artistic, often featuring motifs from nature like laurel leaves and bees. Personal care, including the use of olive oil for the skin and elaborate hairstyles for women, reflected the Greek ideal of 'Arete' (excellence/beauty) in all things." },
                right: { title: "XVI. Ink & Reed", subtitle: "The Greek Alphabet", content: "The Greeks adapted the Phoenician alphabet, adding vowels to create the first fully phonetic writing system. This made literacy more accessible and allowed for the preservation of a massive volume of literature, philosophy, and history. From the epics of Homer to the histories of Herodotus and Thucydides, the Greek alphabet became the primary vessel for the transmission of ancient thought to the modern world." }
            },
            {
                left: { title: "XVII. Mask & Arena", subtitle: "Theater & Tragedy", content: "Greek theater was a religious and civic duty. In the Great Dionysia festival, thousands gathered to watch tragedies by Aeschylus, Sophocles, and Euripides, and comedies by Aristophanes. These plays explored profound themes of fate, hubris, and social justice, serving as a powerful tool for civic education and emotional 'Catharsis,' binding the community together through shared story and song." },
                right: { title: "XVIII. Steel & Strategy", subtitle: "Hoplites & Phalanx", content: "Greek warfare was defined by the 'Hoplite' citizen-soldier and the 'Phalanx' formation. Disks of bronze-covered shields protected the line, requiring intense discipline and cooperation. The Greco-Persian Wars and the Peloponnesian War showed the devastating efficiency of this tactical system. Later, Alexander the Great's use of the 'Sarissa' (long spear) and combined arms allowed him to conquer the known world, forever changing the nature of military strategy." }
            },
            {
                left: { title: "XIX. The Twilight Era", subtitle: "Hellenistic Legacy", content: "Following Alexander's death, his empire was divided into Hellenistic kingdoms. While the Greek city-states eventually lost their independence to the rising power of Rome, Greek culture—'Hellenism'—became more widespread than ever. Cities like Alexandria became the new centers of Greek learning, and Greek became the 'Lingua Franca' of the Mediterranean, ensuring the survival of Greek ideas even as their political power waned." },
                right: { title: "XX. Echoes in Stone", subtitle: "Modern Legacy", content: "Ancient Greece's legacy is the air we breathe in Western culture. Our democracy, our scientific method, our drama, and our architecture are all inherited from the Greeks. From the Olympic Games to the very words we use in every field of study, the Greek spirit of inquiry and the pursuit of 'Arete' continue to inspire humanity's search for truth, beauty, and justice in the modern age." }
            }
        ]
    },
    mesopotamia: {
        title: "Mesopotamia",
        color: "#a0522d",
        pages: [
            {
                left: { type: "illustration", src: "mesopotamia_sketch.svg", caption: "Plate I: The Land Between Two Rivers" },
                right: { title: "I. The Land Between Rivers", subtitle: "Tigris & Euphrates", content: "Mesopotamia, a Greek term meaning 'Land Between Two Rivers,' refers to the fertile region between the Tigris and Euphrates. Unlike the predictable Nile, these rivers were violent and unpredictable, requiring massive communal effort to build levees and irrigation canals. This struggle against nature fostered the world's first large-scale cooperative societies, leading to the birth of urban civilization in a landscape that demanded constant vigilance and innovation." }
            },
            {
                left: { title: "III. Imperial Zenith", subtitle: "Sumer, Akkad & Babylon", content: "Mesopotamian history is a cycle of rising and falling empires. From the early Sumerian city-states to the first empire of Sargon of Akkad, and finally the legendary splendor of Babylon under Nebuchadnezzar II, this region was a crucible of political experimentation. Each empire brought new heights of cultural achievement, from the hanging gardens of Babylon to the vast libraries of Nineveh, creating a legacy of imperial grandeur." },
                right: { title: "IV. Law of the Land", subtitle: "Hammurabi's Justice", content: "King Hammurabi of Babylon (c. 1754 BC) enacted one of history's first written legal codes. Inscribed on a diorite stele, his 282 laws established the principle of Lex Talionis ('an eye for an eye'). While the laws were often harsh and varied by social class, they represented a major shift from personal vengeance to state-administered justice, guaranteeing a degree of stability and fairness in a complex urban society." }
            },
            {
                left: { title: "V. The Social Fabric", subtitle: "Classes & Hierarchy", content: "Mesopotamian society was strictly hierarchical. At the apex was the King (Lugal), seen as the earthly steward of the gods. Below him were the nobility and the powerful priesthood. The middle class consisted of skilled artisans, scribes, and merchants, while the majority were farmers and laborers. Slavery existed but was often debt-based, and individuals could sometimes buy their freedom, reflecting a society that was highly structured yet functioning under a clear legal framework." },
                right: { title: "VI. Market & Mint", subtitle: "First Banks & Shekels", content: "Mesopotamia was the birthplace of banking. Temples acted as the first safe-deposit boxes where grain and precious metals were stored. They used the 'Shekel'—originally a weight of barley and later a specific weight of silver—as a standard unit of account. This allowed for complex financial transactions, including loans with interest and the world's first documented contracts, written on clay and sealed with cylinder seals." }
            },
            {
                left: { title: "VII. Worldly Goods", subtitle: "Global Trade Networks", content: "Resource-poor in stone and timber but rich in grain and wool, Mesopotamia became a master of international trade. Their caravans and river boats reached as far as the Indus Valley and Egypt. They imported lapis lazuli from Afghanistan, cedar from Lebanon, and copper from Magan (Oman), exporting their manufactured textiles and surplus grain, creating the world's first truly interconnected economic region." },
                right: { title: "VIII. Masonry & Mortar", subtitle: "Ziggurats & Arches", content: "Without abundant stone, Mesopotamians mastered the use of mud-brick. They were the first to develop the arch, the dome, and the tunnel. Their Ziggurats, like the Great Ziggurat of Ur, were engineering marvels of multi-layered brickwork designed to lift the temple toward the heavens. They also pioneered sophisticated hydraulic engineering, building vast networks of canals and even a bridge across the Euphrates at Babylon." }
            },
            {
                left: { title: "IX. Voices of the Gods", subtitle: "Enlil, Marduk & Ishtar", content: "Religion was the heart of Mesopotamian life. They worshipped a pantheon of powerful, often capricious gods who controlled the natural world. Enlil (air), Enki (water), and the fierce goddess Ishtar (love and war) were central. Each city had its patron deity, and the people believed their primary purpose was to serve and feed the gods through ritual and sacrifice to prevent divine wrath in the form of floods or plague." },
                right: { title: "X. Sacred Rites", subtitle: "Temple Economy & Ritual", content: "The temple was not just a place of worship but a massive economic powerhouse. Priests managed vast estates, grain silos, and workshops. Daily food offerings were made to the gods' statues, and major festivals like the Akitu (New Year) involved grand processions and the symbolic re-throning of the king, ensuring that the divine and earthly orders remained in harmony for the coming year." }
            },
            {
                left: { title: "XI. The Final Journey", subtitle: "Burials & The Underworld", content: "Mesopotamians held a somber view of the afterlife. The dead descended to Irkalla, a dark 'Land of No Return' where souls lived as shadows and ate dust. However, royal burials, like those in the Royal Cemetery of Ur, were incredibly lavish, featuring gold headdresses, lyres, and even sacrificed attendants, suggesting a belief that status and luxury could, to some extent, follow one into the underworld." },
                right: { title: "XII. Stargazers & Sums", subtitle: "Base-60 Mathematics", content: "Mesopotamians were the masters of numbers. They developed a sexagesimal (base-60) system which gives us our 60-second minute, 60-minute hour, and 360-degree circle today. They were able to calculate square roots, quadratic equations, and the area of complex shapes. Their mathematics was deeply practical, used for everything from tracking grain to surveying land after the annual river floods." }
            },
            {
                left: { title: "XIII. Herbalists & Thinners", subtitle: "Early Science & Medicine", content: "Mesopotamian 'doctors' were divided into the Asu (physician) and the Ashipu (exorcist). They utilized hundreds of plants, minerals, and animal products for healing, recording their prescriptions on clay tablets. While they believed many illnesses were caused by demons, they practiced surprisingly effective wound dressing, bone-setting, and even basic surgery, blending empirical observation with deep spiritual tradition." },
                right: { title: "XIV. Heart of the Home", subtitle: "Family & Housing", content: "Mesopotamian homes were built around central courtyards for privacy and airflow. Families were patriarchal, but women could own property and engage in trade. The typical diet was based on barley bread, onions, and legumes, washed down with large quantities of thick, nutritious beer. Life was communal, centered on the neighborhood and the rhythm of the city's marketplace and religious calendar." }
            },
            {
                left: { title: "XV. Thread & Gold", subtitle: "Fashion & Identity", content: "Sumerians wore 'kaunakes'—fringed sheepskin or wool skirts. Later, Babylonians and Assyrians developed elaborate tunics and shawls decorated with embroidery and fringe. Beards were a sign of high status, often curled and scented with oils. Jewelry made of gold, carnelian, and lapis lazuli was common for both sexes, and the use of personal cylinder seals acting as signatures was a hallmark of Mesopotamian identity." },
                right: { title: "XVI. Ink & Reed", subtitle: "The Birth of Writing", content: "Mesopotamia's greatest gift to the world was Cuneiform. Originally a system for tracking grain at temples, it evolved into a fully developed writing system etched into wet clay with reed styluses. This allowed for the preservation of everything from tax records and legal codes to the world's first great epic, the Epic of Gilgamesh, which explored the timeless human quests for fame and immortality." }
            },
            {
                left: { title: "XVII. Mask & Arena", subtitle: "Arts & Epic Poetry", content: "Mesopotamian art was characterized by its focus on the relationship between man and god, and the glory of the king. Their 'Victory Steles' and massive 'Lamassu' (winged bull) sculptures were designed to awe and intimidate. Literature flourished in the form of hymns, proverbs, and epic poems, creating a rich cultural tapestry that explored the complexities of human existence and the overwhelming power of the gods." },
                right: { title: "XVIII. Steel & Strategy", subtitle: "Assyrian War Machine", content: "The Assyrians created one of history's first truly professional armies. They pioneered the use of iron weapons, organized cavalry, and terrifying siege engines like moveable towers and battering rams. Their military tactics were combined with calculated psychological warfare, ensuring that their empire was both the most powerful and the most feared in the ancient Near East, holding territory from Egypt to the Persian Gulf." }
            },
            {
                left: { title: "XIX. The Twilight Era", subtitle: "Conquest & Collapse", content: "The fall of Babylon to Cyrus the Great of Persia in 539 BC marked the end of independent Mesopotamian rule. Internal decay, environmental exhaustion from over-irrigation, and the shift of trade routes slowly weakened the great cities. While the region remained a cultural and economic heartland for centuries under Persian, Greek, and Roman rule, the era of the great indigenous Mesopotamian empires had come to a definitive close." },
                right: { title: "XX. Echoes in Stone", subtitle: "Modern Legacy", content: "Mesopotamia's legacy is the foundation of modern life. From the 60-second minute and the concept of the 24-hour day to the very ideas of written law and urbanization, we live in a world shaped by the Sumerians and Babylonians. Their ziggurats may have crumbled into 'tells' in the desert, but their innovations in science, law, and governance remain the bedrock of global civilization." }
            }
        ]
    },
    maya: {
        title: "Mayan Civilization",
        color: "#2e7d32",
        pages: [
            {
                left: { type: "illustration", src: "maya_sketch.svg", caption: "Plate I: The Mayan Heartlands and City-States" },
                right: { title: "I. The Emerald Canopy", subtitle: "Geography & Rainforest", content: "The Mayan civilization emerged in the dense tropical lowlands of the Yucatán Peninsula and the highlands of modern-day Guatemala and Belize. Living in the rainforest presented unique challenges, requiring the Maya to develop advanced agricultural techniques like raised fields and 'milpa' (slash-and-burn) to sustain large populations in a beautiful but unforgiving environment." }
            },
            {
                left: { title: "III. Imperial Zenith", subtitle: "The Classic Period", content: "The Classic Period (250–900 AD) was the golden age of the Maya. Great city-states like Tikal, Palenque, and Copán competed for power and prestige. This was an era of intense artistic and intellectual development, where the Maya raised soaring temple-pyramids and decorated their cities with intricate stelae that recorded the glorious deeds of their divine kings." },
                right: { title: "IV. Law of the Land", subtitle: "The K'uhul Ajaw", content: "Mayan society was led by the 'K'uhul Ajaw' or Divine Lord. He was seen as the intermediary between the people and the gods, responsible for performing the rituals—including sacred bloodletting—that ensured the rain and the fertility of the soil. His authority was absolute, backed by a complex courtly hierarchy of nobles, scribes, and military commanders." }
            },
            {
                left: { title: "V. The Social Fabric", subtitle: "Nobles & Commoners", content: "Mayan society was highly stratified. The elite lived in stone palaces at the city's heart, while commoners—farmers, artisans, and laborers—lived in humble wooden homes on the outskirts. Yet, the entire society was bound together by a shared worldview and a rigorous system of tribute and redistribution, ensuring that even the most remote farms were parts of the great city-state's economy." },
                right: { title: "VI. Market & Mint", subtitle: "Cacao & Quetzal Plumes", content: "The Maya did not use metal coinage. Instead, they used highly valued items like cacao beans, spondylus shells, and quetzal feathers as forms of currency. Markets were the vibrant centers of city life, where obsidian from the highlands was traded for salt from the coast and fine textiles woven by Mayan women, creating a complex and sophisticated barter-based regional economy." }
            },
            {
                left: { title: "VII. Worldly Goods", subtitle: "Merchant Cartels", content: "Maya merchants were a powerful class, often traveling in large canoe fleets along the coasts or in caravans through the mountains. They traded finished luxury goods—like polychrome pottery and carved jade—for raw materials over hundreds of miles. These trade routes were essential not just for the economy, but for the transmission of news, ideas, and political alliances between the competing city-states." },
                right: { title: "VIII. Masonry & Mortar", subtitle: "Corbel Arches & Stucco", content: "Mayan architecture is famous for its soaring pyramids and 'Corbel Arches.' Lacking the true keystone arch, they used stacked stones to create vaulted rooms. Their buildings were covered in brilliant white or blood-red stucco and decorated with elaborate glyphs and sculptures, turning every city into a living monument to the power of the gods and the glory of the kings." }
            },
            {
                left: { title: "IX. Voices of the Gods", subtitle: "Itzamná & Kukulkán", content: "The Maya lived in a universe populated by a vast array of fickle gods who required constant appeasement. Itzamná (the creator) and Kukulkán (the feathered serpent) were central deities. They believed the world had been created and destroyed multiple times, and their primary duty was to maintain the cosmic order through precisely timed rituals and sacrifices." },
                right: { title: "X. Sacred Rites", subtitle: "Blood & Sacrifice", content: "Sacrifice was seen as the 'life-giving' act that kept the universe moving. This included everything from the burning of incense and the sacrifice of precious animals to the ritual bloodletting performed by the king and queen. In extreme cases, human sacrifice—often of captured enemy kings—was performed to mark major celestial events or to ensure victory in war." }
            },
            {
                left: { title: "XI. The Final Journey", subtitle: "Xibalbá", content: "The Maya believed the dead traveled to Xibalbá, a terrifying underworld of tests and trials presided over by the Lords of Death. The soul's journey was arduous, but the deceased could be aided by their ancestors and through proper burial rites. Royal burials were often deep within pyramids, accompanied by jade masks and fine pottery to signal the king's divine status in the afterlife." },
                right: { title: "XII. Stargazers & Sums", subtitle: "The Long Count", content: "The Maya were the world's premier astronomers of their time. They tracked the movements of Venus, the Moon, and the Sun with incredible precision, using their observations to develop multiple overlapping calendars. Their 'Long Count' calendar could track time over millions of years, reflecting a civilization that viewed time as a series of cyclical and interconnected divine ages." }
            },
            {
                left: { title: "XIII. Herbalists & Thinners", subtitle: "Mathematics & Zero", content: "Mayan mathematics was one of the most advanced in the ancient world. They used a vigesimal (base-20) system and, crucially, were one of only two cultures to independently invent the concept of 'Zero.' This allowed them to perform incredibly complex astronomical and engineering calculations, demonstrating a level of abstract thought that was millennia ahead of its time." },
                right: { title: "XIV. Heart of the Home", subtitle: "Family & The Milpa", content: "Life for the typical Mayan family was centered on the 'Milpa'—the field where maize, beans, and squash (the 'Three Sisters') were grown together. Homes were oval-shaped with thatched roofs and dirt floors, designed to be easily rebuilt. Ancestor worship was practiced within the home, with the dead often buried beneath the floors to keep them near the living family." }
            },
            {
                left: { title: "XV. Thread & Gold", subtitle: "Textiles & Jade", content: "Mayan women were famous for their weaving, creating intricate cotton garments decorated with symbols of their lineage and status. Jade was the most precious material, symbolizing life, breath, and the soul. It was carved into jewelry, mosaics, and even dental inlays. Elaborate headdresses made of exotic feathers and jaguar pelts were worn by the elite to signal their connection to the animal spirits." },
                right: { title: "XVI. Ink & Reed", subtitle: "The Maya Glyphs", content: "The Maya developed the most sophisticated writing system in the Americas—a complex blend of phonetic and logographic signs. Scribes were high-ranking members of the court who recorded history, ritual, and science in bark-paper 'Codices' and on stone stelae. While many were destroyed by the Spanish, the surviving glyphs allow us to read the kings' own accounts of their lives and wars." }
            },
            {
                left: { title: "XVII. Mask & Arena", subtitle: "The Ball Game", content: "The Mesoamerican Ball Game was more than a sport; it was a ritual re-enactment of the myth of creation. Played with a heavy rubber ball on large stone courts, the game symbolized the struggle between the forces of light and darkness. The stakes were high, with the losers sometimes facing ritual sacrifice, reflecting a culture where even leisure was deeply tied to the cosmic order." },
                right: { title: "XVIII. Steel & Strategy", subtitle: "Obsidian War", content: "Mayan warfare was constant and intensely ritualized. It was fought mostly by the nobility with atlatls (spear-throwers), obsidian-edged clubs (macuahuitls), and shields. The primary goal was often not the conquest of territory but the capture of enemy lords for ritual sacrifice, though large-scale wars between giants like Tikal and Calakmul could reshape the entire political landscape." }
            },
            {
                left: { title: "XIX. The Twilight Era", subtitle: "The Great Collapse", content: "Between 800 and 1000 AD, the great cities of the southern lowlands were mysteriously abandoned. The 'Classic Maya Collapse' was likely caused by a combination of prolonged drought, environmental degradation due to over-farming, and systemic warfare. The population migrated north to the Yucatán, where cities like Chichén Itzá would rise, but the era of the divine rainforest kings had come to an end." },
                right: { title: "XX. Echoes in Stone", subtitle: "The Modern Maya", content: "The Mayan civilization never truly disappeared. Today, millions of Maya still live in their ancestral lands, speaking their languages and maintaining many of their ancient traditions. Their great stone cities remain as silent testament to an extraordinary human achievement, while their innovations in science, writing, and time-keeping continue to inspire wonder and study in the modern world." }
            }
        ]
    },
    indus: {
        title: "Indus Valley",
        color: "#5d4037",
        pages: [
            {
                left: { type: "illustration", src: "indus.png", caption: "Plate I: Mohenjo-daro and the Indus Waterways" },
                right: { title: "I. The Land of Rivers", subtitle: "Geography & The Indus", content: "The Indus Valley Civilization (IVC) flourished around the floodplains of the Indus River and the now-extinct Ghaggar-Hakra River. This was a vast region, larger than Egypt and Mesopotamia combined. The seasonal floods of the Indus provided fertile land for agriculture, while the proximity to the coast and mountain passes allowed for a civilization that was uniquely positioned at the crossroads of early global trade routes." }
            },
            {
                left: { title: "II. First Stones", subtitle: "Mehrgarh & Early Roots", content: "Long before the great cities, the Neolithic site of Mehrgarh (c. 7000 BC) showed evidence of early farming, herding, and even dental surgery. These early settlers laid the foundation for the Mature Harappan phase, transitioning from small villages to some of the world's first planned urban centers, demonstrating a level of technological continuity that spanned millennia." },
                right: { title: "III. Imperial Zenith", subtitle: "The Mature Harappan Phase", content: "Between 2600 and 1900 BC, the Indus Valley reached its peak. Cities like Harappa and Mohenjo-daro were home to tens of thousands of people. This was a highly standardized culture, where bricks were fired to a uniform ratio (1:2:4) and artistic styles remained consistent across a region of a million square kilometers, suggesting a highly organized and stable social order." }
            },
            {
                left: { title: "IV. Law of the Land", subtitle: "Governance & Order", content: "The nature of Indus governance remains a mystery. There are no grand palaces or royal tombs to suggest a single powerful monarch. Instead, historians propose a collective rule by a merchant class or a council of elders. The extreme level of urban planning and standardization suggests a highly efficient administrative system that prioritized public welfare and order over individual glorification." },
                right: { title: "V. The Social Fabric", subtitle: "Hierarchy & Equality", content: "Indus society appears remarkably egalitarian compared to its contemporaries. Most houses were of similar size and had access to the same public amenities. While there were distinct neighborhoods for different craft groups, the lack of ostentatious wealth in burials points to a society where social status may have been linked to communal utility or lineage rather than individual accumulation." }
            },
            {
                left: { title: "VI. Market & Mint", subtitle: "Standardized Weights", content: "The Indus people were masters of standardization. They used the world's first standardized system of weights and measures, with weights following a binary system (1, 2, 4, 8) and then decimal. These chert weights were used by merchants across the entire civilization, facilitating a level of fair trade and economic integration that was vastly ahead of its time." },
                right: { title: "VII. Worldly Goods", subtitle: "Maritime & Land Trade", content: "Indus merchants were global travelers. Their seals have been found in the deserts of Mesopotamia and the shores of the Persian Gulf. They traded lapis lazuli, carnelian beads, and exotic woods for Mesopotamian silver and wool. Their dockyard at Lothal—the world's oldest—shows a sophisticated understanding of tides and maritime logistics, connecting the Indus to the wider world." }
            },
            {
                left: { type: "illustration", src: "indus_illustration_1772795049528.png", caption: "Plate VIII: Urban Planning and Standardized Streets" },
                right: { title: "VIII. Masonry & Mortar", subtitle: "The Grid & Drainage", content: "The Indus cities were the first to use a grid-patterned street layout. More impressively, they developed the world's first city-wide drainage and sewage systems. Every house was connected to the street drains via brick-lined pipes. Their engineering focused on public health and sanitation, utilizing baked bricks and waterproof bitumen to create infrastructures that remained functional for centuries." }
            },
            {
                left: { title: "X. Sacred Rites", subtitle: "The Great Bath", content: "The 'Great Bath' of Mohenjo-daro is a masterpiece of ritual architecture. This large, bitumen-sealed tank was likely used for communal ritual bathing, similar to the importance of water in later South Asian cultures. Surrounding the bath were rooms likely used by priests or for changing, suggesting that purification and water were central to the Indus people's spiritual identity." },
                right: { title: "XI. The Final Journey", subtitle: "Burial Rites", content: "Indus burials were modest. The deceased were typically laid in simple brick-lined pits with pottery and small ornaments. A few burials feature wooden coffins or copper mirrors, but there is nothing like the gold-rich tombs of Egypt. This suggests a belief system that viewed death with a degree of pragmatism or perhaps a different concept of the soul's needs in the afterlife." }
            },
            {
                left: { title: "XII. Stargazers & Sums", subtitle: "Science & Geometry", content: "Indus people possessed an advanced understanding of geometry, required for their precise brick-making and urban layouts. Their 'Indus Inch' was a unit of measure so precise it was used for fine ivory work. Their astronomical knowledge likely guided their navigation at sea and helped them track the seasons essential for their large-scale agricultural operations." },
                right: { title: "XIII. Herbalists & Healers", subtitle: "Early Medicine", content: "Archaeological finds, including beads with drill marks and Mehrgarh's dental evidence, suggest a society with skilled practitioners. They utilized various herbs and minerals for healing, and their extreme focus on sanitation and hygiene (drains, private wells) suggests that 'preventative medicine' was a core principle of their incredibly healthy urban societies." }
            },
            {
                left: { title: "XIV. Heart of the Home", subtitle: "Domestic Life", content: "Indus houses were designed for privacy and cooling, with walls of thick mudbrick and entrances from quiet side alleys. Most had their own private wells and bathing areas. Families likely lived a balanced life, with children playing with sophisticated terracotta toys—including carts with moving wheels and whistles—reflecting a stable and relatively enlightened domestic environment." },
                right: { title: "XV. Thread & Gold", subtitle: "Fashion & Jewelry", content: "Harappans were masters of jewelry. They created intricate carnelian beads and gold ornaments that are still admired today. Clothing was likely made of woven cotton—another Indus world-first—and featured various drapes and patterns. Men and women both wore bangles, necklaces, and ear ornaments, reflecting a culture that valued fine craftsmanship and personal adornment." }
            },
            {
                left: { title: "XVI. Ink & Reed", subtitle: "The Mysterious Script", content: "The Indus script, consisting of hundreds of distinct signs, remains one of the world's great undeciphered mysteries. Found mostly on square steatite seals, the script was likely used for trade, administration, and possibly as personal identification. Until a bilingual text like the Rosetta Stone is found, the voices of the Indus remain silent, locked within these enigmatic symbols." },
                right: { title: "XVII. Mask & Arena", subtitle: "Art & Leisure", content: "Art in the Indus was small but exquisite. The 'Dancing Girl' bronze statue and the 'Priest-King' bust show a high degree of artistic maturity. They enjoyed various leisure activities, including a game similar to chess (dice have been found) and communal performances, using the large open spaces within the citadels for what were likely vibrant cultural gatherings." }
            },
            {
                left: { title: "XVIII. Citadels of Peace", subtitle: "Military & Stability", content: "Unique among its contemporaries, the Indus civilization shows little evidence of large-scale warfare. While they had citadels, these were likely for flood protection rather than defense. Their tools were utilitarian, and their weapons—mostly spears and arrows—were more suited for hunting. This suggests a civilization that prioritized internal stability and external trade over territorial conquest." },
                right: { title: "XIX. The Twilight Era", subtitle: "Decline & Dispersion", content: "Around 1900 BC, the Great Cities began to decline. Factors likely included the drying up of the Saraswati River, changing monsoon patterns, and environmental degradation. The centralized order collapsed, and the population migrated to smaller, more rural settlements in the east and south, marking the end of the urban Harappan phase but not the end of its cultural influence." }
            },
            {
                left: { title: "XX. Echoes in Stone", subtitle: "Modern Legacy", content: "Though the cities vanished, the legacy of the Indus lives on in the cultures of modern South Asia. Their weights, measures, architectural styles, and even possible religious motifs persisted for centuries. The 'grid' of the modern city and the focus on public sanitation find their earliest ancestors here, on the banks of the Indus, where humanity first learned to live together in peace and order." },
                right: { type: "text", title: "Archive End", subtitle: "Conclusion of Plate III", content: "You have completed the record for the Indus Valley. This enigmatic civilization continues to challenge our understanding of early human history. Proceed to the Table of Contents to explore the next great civilization in our Digital Encyclopedia." }
            }
        ]
    }
};

let currentCiv = 'none'; // 'none' for cover, 'toc' for table of contents, or civID
let currentPageIndex = 0;

function updateBook() {
    const leftContent = document.getElementById('left-content');
    const rightContent = document.getElementById('right-content');
    const bookContainer = document.querySelector('.book');

    if (currentCiv === 'none') {
        // COVER PAGE
        leftContent.innerHTML = `
            <div style="height:100%; display:flex; flex-direction:column; justify-content:center; align-items:center; text-align:center; border: 10px double var(--sepia-medium); padding: 2rem;">
                <h2 style="font-size: 2.5rem; margin-bottom: 2rem;">Ancient</h2>
                <div style="width: 50px; height: 2px; background: var(--gold-accent); margin-bottom: 2rem;"></div>
                <h2 style="font-size: 2.5rem;">Explorations</h2>
                <p style="margin-top: 3rem; font-style: italic;">Memoirs from the Cradle of Civilization</p>
            </div>
        `;
        rightContent.innerHTML = `
            <div style="height:100%; display:flex; flex-direction:column; justify-content:center; align-items:center; text-align:center; padding: 2rem;">
                <h1 style="font-size: 3rem; border:none; margin-bottom: 0;">Explorer's</h1>
                <h1 style="font-size: 3rem; border:none;">Journal</h1>
                <div style="margin-top: 4rem;">
                    <p>Presented by</p>
                    <h2 style="border:none; color: var(--gold-accent);">Archaeology Archives</h2>
                </div>
                <button onclick="navigate('toc')" style="margin-top: 3rem; padding: 15px 30px; font-family: 'Cinzel'; background: var(--sepia-medium); color: white; border:none; cursor:pointer; border-radius: 5px;">Begin Exploration</button>
            </div>
        `;
    } else if (currentCiv === 'toc') {
        // TABLE OF CONTENTS (Updated to 6 civilizations)
        leftContent.innerHTML = `
            <h2>Contents</h2>
            <ul style="list-style: none; padding: 0; font-size: 1.3rem; font-family: 'Cinzel';">
                <li style="margin-bottom: 1.2rem; cursor:pointer;" onclick="navigate('egypt')">I. The Nile Kingdoms</li>
                <li style="margin-bottom: 1.2rem; cursor:pointer;" onclick="navigate('mesopotamia')">II. Between Two Rivers</li>
                <li style="margin-bottom: 1.2rem; cursor:pointer;" onclick="navigate('indus')">III. The Silent Waters</li>
                <li style="margin-bottom: 1.2rem; cursor:pointer;" onclick="navigate('greece')">IV. Cradle of Thought</li>
                <li style="margin-bottom: 1.2rem; cursor:pointer;" onclick="navigate('rome')">V. The Eternal Empire</li>
                <li style="margin-bottom: 1.2rem; cursor:pointer;" onclick="navigate('maya')">VI. Lords of the Jungle</li>
            </ul>
        `;
        rightContent.innerHTML = `
            <h2>About the Project</h2>
            <p>This journal serves as a portal to the distant past, documenting the innovations, struggles, and myths of humanity's greatest early societies.</p>
            <p>The collection has been expanded to include the rainforest pyramids of the Maya, the philosophic halls of Greece, and the ancient tablets of Mesopotamia.</p>
            <div style="margin-top: 4rem; text-align:center;">
                <h2 style="border:none;">New Plates</h2>
                <p>Six civilizations now documented in full.</p>
            </div>
        `;
    } else {
        // CIVILIZATION PAGES
        const data = civilizations[currentCiv];
        const pageData = data.pages[currentPageIndex];

        // Update Left Page
        if (pageData.left.type === "illustration") {
            leftContent.innerHTML = `
                <div class="illustration-box content-fade">
                    <img src="${pageData.left.src}" alt="${data.title} Illustration" style="max-height: 400px; object-fit: contain;">
                </div>
                <p style="text-align: center; font-style: italic; font-size: 0.9rem; margin-top: -1rem;" class="content-fade">${pageData.left.caption}</p>
            `;
        } else {
            leftContent.innerHTML = `
                <div class="content-fade">
                    <h2>${pageData.left.title}</h2>
                    <h3>${pageData.left.subtitle}</h3>
                    <p>${pageData.left.content}</p>
                </div>
            `;
        }

        // Generate Timeline Dots
        const timelineDots = data.pages.map((p, idx) => `
            <div class="timeline-dot ${idx === currentPageIndex ? 'active' : ''}" 
                 data-title="${p.left.title || (p.left.type === 'illustration' ? 'Illustration' : 'Chapter')}" 
                 onclick="jumpToPage(${idx})">
            </div>
        `).join('');

        // Update Right Page
        rightContent.innerHTML = `
            <div class="content-fade">
                <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                    <h1>${pageData.right.title || data.title}</h1>
                    <button onclick="navigate('toc')" style="padding: 5px 10px; font-family: 'Cinzel'; background: transparent; border: 1px solid var(--sepia-medium); cursor:pointer; font-size: 0.7rem; opacity: 0.6; transition: opacity 0.3s;" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=0.6" title="Return to Table of Contents">Index</button>
                </div>
                <h2>${pageData.right.subtitle}</h2>
                <p>${pageData.right.content}</p>
                <div class="timeline">
                    ${timelineDots}
                </div>
                ${currentPageIndex === data.pages.length - 1 ? `
                    <div style="margin-top: 2rem; border-top: 1px dashed var(--sepia-medium); padding-top: 1rem; text-align: center;">
                        <p><em>Final Entry for ${data.title}.</em></p>
                        <button onclick="navigate('toc')" style="padding: 10px 20px; font-family: 'Cinzel'; background: var(--sepia-medium); color: white; border: none; cursor:pointer; border-radius: 4px;">Return to Archive Index</button>
                    </div>
                ` : ''}
            </div>
        `;
    }

    // Update Bookmarks
    document.querySelectorAll('.bookmark').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.civ === currentCiv);
        btn.style.display = (currentCiv === 'none') ? 'none' : 'block';
    });

    // Update Navigation Buttons
    if (currentCiv === 'none' || currentCiv === 'toc') {
        document.querySelector('.controls').style.display = 'none';
        document.querySelector('.bookmarks').style.display = (currentCiv === 'none') ? 'none' : 'flex';
    } else {
        document.querySelector('.controls').style.display = 'flex';
        document.querySelector('.bookmarks').style.display = 'flex';
        document.getElementById('prev-btn').style.opacity = (currentPageIndex === 0) ? "0.3" : "1";
        document.getElementById('next-btn').style.opacity = (currentPageIndex === civilizations[currentCiv].pages.length - 1) ? "0.3" : "1";
    }

    // Page count indicator
    const existingIndicator = document.querySelector('.page-num');
    if (existingIndicator) existingIndicator.remove();
    if (currentCiv !== 'none' && currentCiv !== 'toc') {
        const pageNum = document.createElement('div');
        pageNum.className = 'page-num';
        pageNum.style.position = 'absolute';
        pageNum.style.bottom = '10px';
        pageNum.style.width = '100%';
        pageNum.style.textAlign = 'center';
        pageNum.style.fontSize = '0.8rem';
        pageNum.style.fontStyle = 'italic';
        pageNum.style.color = 'var(--sepia-medium)';
        pageNum.innerText = `Plate ${currentPageIndex + 1} of ${civilizations[currentCiv].pages.length}`;
        bookContainer.appendChild(pageNum);
    }
}

function navigate(id) {
    currentCiv = id;
    currentPageIndex = 0;
    updateBook();
    // Removed 3D tilt effect as requested
}

function jumpToPage(index) {
    currentPageIndex = index;
    updateBook();
}

// Event Listeners
window.navigate = navigate;

// Re-added listeners for bookmarks
document.querySelectorAll('.bookmark').forEach(btn => {
    btn.addEventListener('click', () => {
        navigate(btn.dataset.civ);
    });
});

document.getElementById('prev-btn').addEventListener('click', () => {
    if (currentPageIndex > 0) {
        currentPageIndex--;
        updateBook();
        pageFlipEffect('prev');
    }
});

document.getElementById('next-btn').addEventListener('click', () => {
    if (currentPageIndex < civilizations[currentCiv].pages.length - 1) {
        currentPageIndex++;
        updateBook();
        pageFlipEffect('next');
    }
});

function pageFlipEffect(dir) {
    // Removed 3D tilt effect as requested
}

// Global exposure for timeline clicks
window.jumpToPage = jumpToPage;

// Initial Load
updateBook();
