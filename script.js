const npiQuestions = [
  { a: "Saya memiliki bakat alami untuk memengaruhi orang.", b: "Saya tidak pandai memengaruhi orang.", key: "a", scale: "Authority" },
  { a: "Sikap terlalu rendah hati tidak cocok untuk saya.", b: "Pada dasarnya saya orang yang rendah hati.", key: "a", scale: "Exhibitionism" },
  { a: "Saya bersedia melakukan hampir apa saja jika ditantang.", b: "Saya cenderung cukup berhati-hati.", key: "a", scale: "Exhibitionism" },
  { a: "Ketika orang memuji saya, saya kadang merasa malu.", b: "Saya tahu saya hebat karena semua orang terus mengatakannya.", key: "b", scale: "Superiority" },
  { a: "Bayangan menguasai dunia membuat saya takut.", b: "Jika saya menguasai dunia, dunia akan menjadi tempat yang lebih baik.", key: "b", scale: "Entitlement" },
  { a: "Saya biasanya bisa bicara dengan cara yang membuat saya lolos dari masalah.", b: "Saya mencoba menerima konsekuensi dari perilaku saya.", key: "a", scale: "Exploitativeness" },
  { a: "Saya lebih suka berbaur dengan orang banyak.", b: "Saya suka menjadi pusat perhatian.", key: "b", scale: "Exhibitionism" },
  { a: "Saya akan menjadi orang yang sukses.", b: "Saya tidak terlalu memikirkan kesuksesan.", key: "a", scale: "Authority" },
  { a: "Saya tidak lebih baik atau lebih buruk daripada kebanyakan orang.", b: "Saya merasa diri saya orang yang istimewa.", key: "b", scale: "Superiority" },
  { a: "Saya tidak yakin apakah saya akan menjadi pemimpin yang baik.", b: "Saya melihat diri saya sebagai pemimpin yang baik.", key: "b", scale: "Authority" },
  { a: "Saya orang yang asertif.", b: "Saya berharap bisa lebih asertif.", key: "a", scale: "Authority" },
  { a: "Saya suka memiliki otoritas atas orang lain.", b: "Saya tidak keberatan mengikuti perintah.", key: "a", scale: "Authority" },
  { a: "Saya merasa mudah memanipulasi orang.", b: "Saya tidak suka ketika menyadari diri saya memanipulasi orang.", key: "a", scale: "Exploitativeness" },
  { a: "Saya menuntut penghormatan yang memang pantas saya dapatkan.", b: "Saya biasanya mendapatkan penghormatan yang layak saya terima.", key: "a", scale: "Entitlement" },
  { a: "Saya tidak terlalu suka memamerkan tubuh saya.", b: "Saya suka memamerkan tubuh saya.", key: "b", scale: "Vanity" },
  { a: "Saya bisa membaca orang lain seperti membaca buku.", b: "Orang lain kadang sulit dipahami.", key: "a", scale: "Exploitativeness" },
  { a: "Jika saya merasa kompeten, saya bersedia bertanggung jawab membuat keputusan.", b: "Saya suka bertanggung jawab dalam membuat keputusan.", key: "b", scale: "Self-Sufficiency" },
  { a: "Saya hanya ingin cukup bahagia.", b: "Saya ingin menjadi seseorang yang berarti di mata dunia.", key: "b", scale: "Entitlement" },
  { a: "Tubuh saya tidak ada yang istimewa.", b: "Saya suka melihat tubuh saya.", key: "b", scale: "Vanity" },
  { a: "Saya berusaha untuk tidak pamer.", b: "Saya biasanya akan pamer jika ada kesempatan.", key: "b", scale: "Exhibitionism" },
  { a: "Saya selalu tahu apa yang sedang saya lakukan.", b: "Kadang saya tidak yakin dengan apa yang sedang saya lakukan.", key: "a", scale: "Self-Sufficiency" },
  { a: "Saya kadang bergantung pada orang lain agar sesuatu selesai.", b: "Saya jarang bergantung pada siapa pun untuk menyelesaikan sesuatu.", key: "b", scale: "Self-Sufficiency" },
  { a: "Kadang saya bercerita dengan baik.", b: "Semua orang suka mendengar cerita saya.", key: "b", scale: "Exploitativeness" },
  { a: "Saya mengharapkan banyak hal dari orang lain.", b: "Saya suka melakukan sesuatu untuk orang lain.", key: "a", scale: "Entitlement" },
  { a: "Saya tidak akan pernah puas sampai mendapatkan semua yang pantas saya dapatkan.", b: "Saya menerima kepuasan hidup sebagaimana datangnya.", key: "a", scale: "Entitlement" },
  { a: "Pujian membuat saya malu.", b: "Saya suka dipuji.", key: "b", scale: "Superiority" },
  { a: "Saya memiliki dorongan kuat untuk berkuasa.", b: "Kekuasaan demi kekuasaan itu sendiri tidak menarik bagi saya.", key: "a", scale: "Entitlement" },
  { a: "Saya tidak peduli dengan tren dan mode baru.", b: "Saya suka memulai tren dan mode baru.", key: "b", scale: "Exhibitionism" },
  { a: "Saya suka melihat diri saya di cermin.", b: "Saya tidak terlalu tertarik melihat diri saya di cermin.", key: "a", scale: "Vanity" },
  { a: "Saya benar-benar suka menjadi pusat perhatian.", b: "Menjadi pusat perhatian membuat saya tidak nyaman.", key: "a", scale: "Exhibitionism" },
  { a: "Saya bisa menjalani hidup dengan cara apa pun yang saya inginkan.", b: "Orang tidak selalu bisa menjalani hidup sesuai keinginan mereka.", key: "a", scale: "Self-Sufficiency" },
  { a: "Menjadi figur otoritas tidak terlalu penting bagi saya.", b: "Orang-orang selalu tampak mengakui otoritas saya.", key: "b", scale: "Authority" },
  { a: "Saya lebih suka menjadi pemimpin.", b: "Bagi saya tidak terlalu berbeda apakah saya menjadi pemimpin atau tidak.", key: "a", scale: "Authority" },
  { a: "Saya akan menjadi orang yang hebat.", b: "Saya berharap akan menjadi orang yang sukses.", key: "a", scale: "Self-Sufficiency" },
  { a: "Orang kadang percaya pada apa yang saya katakan.", b: "Saya bisa membuat siapa pun percaya apa pun yang saya inginkan.", key: "b", scale: "Exploitativeness" },
  { a: "Saya terlahir sebagai pemimpin.", b: "Kepemimpinan adalah kualitas yang perlu waktu lama untuk dikembangkan.", key: "a", scale: "Authority" },
  { a: "Saya berharap suatu hari ada orang yang menulis biografi tentang saya.", b: "Saya tidak suka orang mencampuri kehidupan saya dengan alasan apa pun.", key: "a", scale: "Superiority" },
  { a: "Saya kesal ketika orang tidak memperhatikan penampilan saya saat saya keluar di tempat umum.", b: "Saya tidak keberatan berbaur dengan orang banyak saat keluar di tempat umum.", key: "a", scale: "Exhibitionism" },
  { a: "Saya lebih mampu daripada orang lain.", b: "Ada banyak hal yang bisa saya pelajari dari orang lain.", key: "a", scale: "Self-Sufficiency" },
  { a: "Saya sangat mirip dengan semua orang.", b: "Saya adalah orang yang luar biasa.", key: "b", scale: "Superiority" },
];

const pniQuestions = [
  ["Saya merasa nilai diri saya naik turun tergantung bagaimana orang menilai saya.", "Contingent Self-Esteem", "Vulnerability"],
  ["Kritik kecil dapat membuat saya merasa sangat tidak berarti.", "Contingent Self-Esteem", "Vulnerability"],
  ["Saya membutuhkan pengakuan orang lain agar merasa yakin pada diri sendiri.", "Contingent Self-Esteem", "Vulnerability"],
  ["Jika tidak mendapat respons positif, saya mulai meragukan kemampuan saya.", "Contingent Self-Esteem", "Vulnerability"],
  ["Saya merasa hancur ketika usaha saya tidak diapresiasi.", "Contingent Self-Esteem", "Vulnerability"],
  ["Pujian membuat saya merasa hidup saya kembali berarti.", "Contingent Self-Esteem", "Vulnerability"],
  ["Saya sering menilai harga diri saya dari reaksi orang lain.", "Contingent Self-Esteem", "Vulnerability"],
  ["Saat orang mengabaikan saya, saya merasa tidak terlihat dan tidak penting.", "Contingent Self-Esteem", "Vulnerability"],
  ["Saya merasa aman dengan diri sendiri hanya ketika orang lain mengagumi saya.", "Contingent Self-Esteem", "Vulnerability"],
  ["Penolakan membuat saya mempertanyakan siapa diri saya.", "Contingent Self-Esteem", "Vulnerability"],
  ["Saya sulit merasa berharga tanpa bukti bahwa orang lain menghargai saya.", "Contingent Self-Esteem", "Vulnerability"],
  ["Komentar negatif dapat terus mengganggu pikiran saya lama setelah kejadian.", "Contingent Self-Esteem", "Vulnerability"],
  ["Saya menyembunyikan kebutuhan saya agar orang lain tidak melihat saya lemah.", "Hiding the Self", "Vulnerability"],
  ["Saya menutupi rasa malu dengan terlihat kuat atau tidak peduli.", "Hiding the Self", "Vulnerability"],
  ["Saya jarang menunjukkan sisi rentan saya kepada orang lain.", "Hiding the Self", "Vulnerability"],
  ["Saya takut orang berubah sikap jika mengetahui kekurangan saya.", "Hiding the Self", "Vulnerability"],
  ["Saya memilih diam daripada mengakui bahwa saya sedang membutuhkan bantuan.", "Hiding the Self", "Vulnerability"],
  ["Saya sering menyimpan kegagalan agar citra saya tetap terlihat baik.", "Hiding the Self", "Vulnerability"],
  ["Saya merasa harus menjaga penampilan diri meski sedang tidak baik-baik saja.", "Hiding the Self", "Vulnerability"],
  ["Ketika seseorang mengecewakan saya, saya cepat melihatnya sebagai tidak berguna.", "Devaluing", "Vulnerability"],
  ["Saya dapat kehilangan rasa hormat pada orang yang tidak memenuhi harapan saya.", "Devaluing", "Vulnerability"],
  ["Jika saya merasa ditolak, saya mulai meremehkan orang yang menolak saya.", "Devaluing", "Vulnerability"],
  ["Saya sering berpikir bahwa orang yang mengecewakan saya tidak sebaik yang saya kira.", "Devaluing", "Vulnerability"],
  ["Saya sulit mempertahankan pandangan positif pada orang setelah merasa disakiti.", "Devaluing", "Vulnerability"],
  ["Saya menurunkan nilai sesuatu ketika ternyata tidak memberi saya pengakuan.", "Devaluing", "Vulnerability"],
  ["Saya kadang menganggap pencapaian orang lain biasa saja ketika saya merasa tersaingi.", "Devaluing", "Vulnerability"],
  ["Saya sangat marah ketika orang tidak menyadari betapa besar kontribusi saya.", "Entitlement Rage", "Vulnerability"],
  ["Saya kesal jika kebutuhan saya tidak segera diperhatikan.", "Entitlement Rage", "Vulnerability"],
  ["Saya merasa tersinggung ketika orang tidak memperlakukan saya secara khusus.", "Entitlement Rage", "Vulnerability"],
  ["Saya sulit menerima ketika orang lain mendapat perhatian yang menurut saya pantas untuk saya.", "Entitlement Rage", "Vulnerability"],
  ["Saya bisa sangat dingin ketika merasa tidak dihargai.", "Entitlement Rage", "Vulnerability"],
  ["Saya marah bila orang tidak memahami pentingnya kehadiran saya.", "Entitlement Rage", "Vulnerability"],
  ["Saya merasa orang seharusnya tahu apa yang saya butuhkan tanpa harus saya jelaskan.", "Entitlement Rage", "Vulnerability"],
  ["Saya bereaksi keras ketika ekspektasi saya tidak dipenuhi.", "Entitlement Rage", "Vulnerability"],
  ["Saya bisa membuat orang lain memercayai hal yang menguntungkan saya.", "Exploitativeness", "Grandiosity"],
  ["Saya tahu cara menggunakan kelemahan orang untuk mencapai tujuan saya.", "Exploitativeness", "Grandiosity"],
  ["Saya sering bisa mengarahkan orang tanpa mereka menyadarinya.", "Exploitativeness", "Grandiosity"],
  ["Saya merasa wajar memanfaatkan peluang dari orang yang mudah dipengaruhi.", "Exploitativeness", "Grandiosity"],
  ["Saya pandai membuat orang melakukan sesuatu untuk saya.", "Exploitativeness", "Grandiosity"],
  ["Saya sering membayangkan diri saya dikagumi karena pencapaian besar.", "Grandiose Fantasy", "Grandiosity"],
  ["Saya berfantasi menjadi orang yang sangat berpengaruh.", "Grandiose Fantasy", "Grandiosity"],
  ["Saya membayangkan suatu hari orang akan mengakui kehebatan saya.", "Grandiose Fantasy", "Grandiosity"],
  ["Saya suka membayangkan hidup saya lebih luar biasa daripada orang lain.", "Grandiose Fantasy", "Grandiosity"],
  ["Saya sering tenggelam dalam bayangan tentang kesuksesan besar.", "Grandiose Fantasy", "Grandiosity"],
  ["Saya merasa ditakdirkan untuk sesuatu yang istimewa.", "Grandiose Fantasy", "Grandiosity"],
  ["Saya membayangkan orang-orang kagum ketika melihat kemampuan saya.", "Grandiose Fantasy", "Grandiosity"],
  ["Saya membantu orang lain agar mereka melihat betapa baiknya saya.", "Self-Sacrificing Self-Enhancement", "Grandiosity"],
  ["Saya rela berkorban jika itu membuat saya terlihat lebih mulia.", "Self-Sacrificing Self-Enhancement", "Grandiosity"],
  ["Saya ingin orang menyadari bahwa saya lebih berkorban dibanding orang lain.", "Self-Sacrificing Self-Enhancement", "Grandiosity"],
  ["Saya merasa bangga ketika orang bergantung pada kebaikan saya.", "Self-Sacrificing Self-Enhancement", "Grandiosity"],
  ["Saya suka dikenal sebagai orang yang paling banyak membantu.", "Self-Sacrificing Self-Enhancement", "Grandiosity"],
  ["Saya kadang memberi bantuan agar posisi moral saya terlihat lebih tinggi.", "Self-Sacrificing Self-Enhancement", "Grandiosity"],
].map(([text, scale, dimension]) => ({ text, scale, dimension }));

const narqQuestions = [
  ["Saya merasa layak dianggap sebagai orang yang hebat.", "Grandiosity", "Admiration"],
  ["Saya melihat diri saya sebagai pribadi yang unik dibanding banyak orang.", "Grandiosity", "Admiration"],
  ["Saya yakin ada sesuatu yang istimewa dalam diri saya yang patut dikenali orang.", "Grandiosity", "Admiration"],
  ["Saya tahu cara membuat orang lain terpikat pada saya.", "Charmingness", "Admiration"],
  ["Saya mudah membuat suasana sosial mengarah pada diri saya.", "Charmingness", "Admiration"],
  ["Saya menikmati ketika orang terkesan oleh cara saya membawa diri.", "Charmingness", "Admiration"],
  ["Menjadi orang biasa-biasa saja terasa membosankan bagi saya.", "Striving for Uniqueness", "Admiration"],
  ["Saya ingin tampil berbeda agar orang mengingat saya.", "Striving for Uniqueness", "Admiration"],
  ["Saya terdorong untuk menunjukkan bahwa saya tidak sama dengan kebanyakan orang.", "Striving for Uniqueness", "Admiration"],
  ["Kebanyakan orang tidak sekompeten yang mereka kira.", "Devaluation", "Rivalry"],
  ["Saya cepat melihat kelemahan orang yang mencoba menyaingi saya.", "Devaluation", "Rivalry"],
  ["Saya sulit menghargai orang yang menurut saya tidak mencapai standar tinggi.", "Devaluation", "Rivalry"],
  ["Saya menikmati saat bisa menjatuhkan lawan dalam persaingan.", "Aggressiveness", "Rivalry"],
  ["Jika merasa diremehkan, saya bisa menjadi sangat menyerang.", "Aggressiveness", "Rivalry"],
  ["Saya tidak ragu bersikap keras agar orang tahu posisi saya.", "Aggressiveness", "Rivalry"],
  ["Saya tidak tahan jika ada orang lain yang lebih sukses dari saya.", "Striving for Supremacy", "Rivalry"],
  ["Saya merasa harus berada di atas orang lain agar benar-benar puas.", "Striving for Supremacy", "Rivalry"],
  ["Saya terdorong untuk membuktikan bahwa saya lebih unggul daripada pesaing saya.", "Striving for Supremacy", "Rivalry"],
].map(([text, scale, dimension]) => ({ text, scale, dimension }));

const sd3Questions = [
  ["Saya memiliki bakat alami untuk memengaruhi orang lain.", "Narsisme", "Narsisme"],
  ["Saya suka menjadi pusat perhatian di acara sosial.", "Narsisme", "Narsisme"],
  ["Saya merasa pantas mendapat perlakuan yang lebih istimewa daripada kebanyakan orang.", "Narsisme", "Narsisme"],
  ["Saya ingin orang lain mengagumi pencapaian saya.", "Narsisme", "Narsisme"],
  ["Saya sering merasa diri saya lebih menarik atau lebih berbakat dari orang lain.", "Narsisme", "Narsisme"],
  ["Saya menikmati ketika orang melihat saya sebagai figur penting.", "Narsisme", "Narsisme"],
  ["Saya merasa wajar jika orang memperhatikan kebutuhan saya terlebih dahulu.", "Narsisme", "Narsisme"],
  ["Saya suka menunjukkan sisi terbaik saya agar orang terkesan.", "Narsisme", "Narsisme"],
  ["Saya merasa sulit menerima jika orang lain tidak mengakui kelebihan saya.", "Narsisme", "Narsisme"],
  ["Cara terbaik menghadapi orang lain adalah mengatakan apa yang ingin mereka dengar.", "Machiavellianisme", "Machiavellianisme"],
  ["Kita perlu menyimpan rahasia pribadi agar tidak digunakan orang lain untuk menyerang kita.", "Machiavellianisme", "Machiavellianisme"],
  ["Saya percaya strategi yang cerdik lebih penting daripada kejujuran polos.", "Machiavellianisme", "Machiavellianisme"],
  ["Kadang memanipulasi situasi adalah cara paling realistis untuk mencapai tujuan.", "Machiavellianisme", "Machiavellianisme"],
  ["Saya lebih suka merencanakan langkah saya agar orang lain tidak mengetahui maksud saya.", "Machiavellianisme", "Machiavellianisme"],
  ["Dalam persaingan, saya tidak keberatan memainkan peran yang berbeda dari perasaan saya sebenarnya.", "Machiavellianisme", "Machiavellianisme"],
  ["Saya percaya sebagian besar orang akan memanfaatkan kita jika diberi kesempatan.", "Machiavellianisme", "Machiavellianisme"],
  ["Saya bisa bersikap sangat ramah jika itu membantu saya mendapatkan keuntungan.", "Machiavellianisme", "Machiavellianisme"],
  ["Bagi saya, hasil akhir sering lebih penting daripada cara mencapainya.", "Machiavellianisme", "Machiavellianisme"],
  ["Saya cenderung tidak merasa bersalah setelah melakukan hal yang merugikan orang lain.", "Psikopati", "Psikopati"],
  ["Orang yang mengecam tindakan berbahaya biasanya hanya penakut.", "Psikopati", "Psikopati"],
  ["Saya menikmati pengalaman yang berisiko walaupun dapat merugikan orang lain.", "Psikopati", "Psikopati"],
  ["Saya sering bertindak dulu dan memikirkan akibatnya belakangan.", "Psikopati", "Psikopati"],
  ["Saya tidak terlalu terganggu ketika tindakan saya membuat orang lain kesal.", "Psikopati", "Psikopati"],
  ["Aturan sosial kadang terasa seperti penghalang yang tidak perlu.", "Psikopati", "Psikopati"],
  ["Saya bisa bersikap dingin ketika orang lain terluka oleh keputusan saya.", "Psikopati", "Psikopati"],
  ["Saya mudah bosan dan mencari sensasi yang lebih kuat.", "Psikopati", "Psikopati"],
  ["Saya jarang menyesal setelah mengambil risiko yang membuat orang lain tidak nyaman.", "Psikopati", "Psikopati"],
].map(([text, scale, dimension]) => ({ text, scale, dimension }));

const npiScaleMeta = {
  Authority: ["Authority / Otoritas", "Dorongan untuk memimpin, mengarahkan, atau memiliki kuasa."],
  Exhibitionism: ["Exhibitionism / Pamer", "Kebutuhan tampil menonjol dan menjadi pusat perhatian."],
  Superiority: ["Superiority / Keunggulan", "Perasaan lebih istimewa atau lebih hebat daripada orang lain."],
  Entitlement: ["Entitlement / Merasa Berhak", "Harapan akan perlakuan khusus atau pengakuan yang dianggap pantas."],
  Exploitativeness: ["Exploitativeness / Eksploitasi", "Kecenderungan memengaruhi atau memanfaatkan orang demi tujuan pribadi."],
  "Self-Sufficiency": ["Self-Sufficiency / Kemandirian Ekstrem", "Rasa sangat mandiri dan yakin pada kemampuan pribadi."],
  Vanity: ["Vanity / Kesombongan Citra", "Fokus pada penampilan, tubuh, dan citra diri."],
};

const pniScaleMeta = {
  "Contingent Self-Esteem": ["Contingent Self-Esteem / Harga Diri Bersyarat", "Harga diri sangat bergantung pada pujian, penerimaan, dan validasi orang lain."],
  "Hiding the Self": ["Hiding the Self / Menyembunyikan Diri", "Kecenderungan menyembunyikan kebutuhan, kekurangan, atau rasa malu agar tidak terlihat lemah."],
  Devaluing: ["Devaluing / Devaluasi", "Kecenderungan merendahkan orang, hubungan, atau hal yang mengecewakan diri."],
  "Entitlement Rage": ["Entitlement Rage / Kemarahan atas Hak", "Kemarahan atau reaktivitas kuat ketika ekspektasi dan rasa berhak tidak dipenuhi."],
  Exploitativeness: ["Exploitativeness / Eksploitasi", "Kecenderungan memengaruhi, mengarahkan, atau memanfaatkan orang lain untuk tujuan pribadi."],
  "Grandiose Fantasy": ["Grandiose Fantasy / Fantasi Megah", "Imajinasi berulang tentang kesuksesan, kuasa, kekaguman, atau keistimewaan besar."],
  "Self-Sacrificing Self-Enhancement": ["Self-Sacrificing Self-Enhancement / Pengorbanan Diri Palsu", "Perilaku membantu atau berkorban yang bercampur dengan kebutuhan terlihat baik, mulia, atau superior."],
};

const narqScaleMeta = {
  Grandiosity: ["Grandiosity / Keagungan Diri", "Keyakinan bahwa diri unik, hebat, atau layak mendapat pengakuan khusus."],
  Charmingness: ["Charmingness / Daya Pikat", "Upaya memikat, membuat orang tertarik, dan tampil menarik secara sosial."],
  "Striving for Uniqueness": ["Striving for Uniqueness / Dorongan Menjadi Unik", "Motivasi kuat untuk berbeda, menonjol, dan tidak terlihat biasa-biasa saja."],
  Devaluation: ["Devaluation / Devaluasi", "Kecenderungan memandang rendah kemampuan, nilai, atau posisi orang lain."],
  Aggressiveness: ["Aggressiveness / Agresivitas", "Kesiapan bersikap menyerang, keras, atau dominan saat citra diri terasa terancam."],
  "Striving for Supremacy": ["Striving for Supremacy / Dorongan Mengungguli", "Keinginan untuk menang, berada di atas, atau tidak kalah dari orang lain."],
};

const sd3ScaleMeta = {
  Narsisme: ["Narsisme", "Keagungan diri, kebutuhan dikagumi, kesombongan, dan rasa berhak atas perlakuan istimewa."],
  Machiavellianisme: ["Machiavellianisme", "Manipulasi strategis, kelicikan sosial, pragmatisme dingin, dan keyakinan bahwa tujuan dapat membenarkan cara."],
  Psikopati: ["Psikopati", "Impulsivitas, pencarian sensasi, empati rendah, sikap dingin, dan minim rasa bersalah setelah merugikan orang lain."],
};

const tests = {
  npi: {
    id: "npi",
    type: "forced",
    title: "Tes NPI",
    resultTitle: "Profil NPI-40",
    heroEyebrow: "Kuesioner psikologi non-klinis",
    heroTitle: "Tes NPI-40",
    heroLead: "Narcissistic Personality Inventory berisi 40 pasang pernyataan forced-choice untuk membantu melihat kecenderungan sifat narsisme dalam konteks umum.",
    questions: npiQuestions,
    scaleMeta: npiScaleMeta,
    maxScore: 40,
    instructions: [
      "Baca setiap pasangan Pernyataan A dan Pernyataan B.",
      "Pilih satu pernyataan yang paling mewakili perasaan atau pendapat Anda.",
      "Jawab secara spontan. Tidak ada jawaban benar atau salah secara moral.",
      "Tekan tombol lihat hasil setelah semua pertanyaan terjawab.",
    ],
    notice: "Tes ini bersifat edukatif dan laporan mandiri. Hasilnya tidak dapat digunakan untuk mendiagnosis gangguan jiwa atau menggantikan penilaian psikolog/psikiater.",
    reference: "NPI dikembangkan untuk mengukur narsisme sebagai sifat kepribadian dalam riset sosial-psikologis. Format NPI-40 menggunakan pilihan ganda paksa dan ditujukan untuk ekspresi narsisme subklinis atau normal.",
  },
  pni: {
    id: "pni",
    type: "likert",
    title: "Test PNI",
    resultTitle: "Profil PNI-52",
    heroEyebrow: "Kuesioner narsisme patologis",
    heroTitle: "Test PNI",
    heroLead: "Pathological Narcissism Inventory memetakan dinamika grandiose dan vulnerable. Versi ini adalah adaptasi edukatif berbasis 7 subskala, bukan alat diagnosis klinis resmi.",
    questions: pniQuestions,
    scaleMeta: pniScaleMeta,
    maxScore: 260,
    instructions: [
      "Baca setiap pernyataan berdasarkan pola jangka panjang, bukan hanya emosi sesaat.",
      "Pilih angka 0 sampai 5: 0 berarti sama sekali tidak seperti saya, 5 berarti sangat mirip dengan saya.",
      "Jawab semua 52 butir dengan jujur dan tenang.",
      "Hasil akan menampilkan skor total, grandiosity, vulnerability, dan 7 subskala.",
    ],
    notice: "PNI adalah instrumen klinis dan riset. Aplikasi ini memakai butir edukatif yang disusun ulang berdasarkan struktur subskala, sehingga tidak menggantikan PNI resmi atau evaluasi profesional.",
    reference: "PNI dikembangkan oleh Aaron Pincus dan kolega untuk mengukur narsisme patologis, termasuk aspek grandiose dan vulnerable. Format yang digunakan adalah laporan mandiri dengan skala Likert 0-5.",
    likertMin: 0,
    likertMax: 5,
    likertLowLabel: "Sama sekali tidak seperti saya",
    likertHighLabel: "Sangat mirip dengan saya",
    dimensions: [
      ["Grandiosity", "Pola mempertahankan citra superior melalui fantasi megah, eksploitasi, atau pengorbanan diri untuk terlihat mulia."],
      ["Vulnerability", "Pola rapuh yang terkait rasa malu, harga diri bersyarat, sensitivitas kritik, devaluasi, dan kemarahan atas hak."],
    ],
  },
  narq: {
    id: "narq",
    type: "likert",
    title: "Tes NARQ",
    resultTitle: "Profil NARQ-18",
    heroEyebrow: "Admiration dan Rivalry",
    heroTitle: "Tes NARQ",
    heroLead: "Narcissistic Admiration and Rivalry Questionnaire membedakan strategi promotif Admiration dan strategi defensif Rivalry dalam menjaga grandiose self-image.",
    questions: narqQuestions,
    scaleMeta: narqScaleMeta,
    maxScore: 108,
    instructions: [
      "Baca setiap pernyataan berdasarkan karakteristik, pola pikir, dan cara Anda berinteraksi sehari-hari.",
      "Pilih angka 1 sampai 6: 1 berarti sama sekali tidak setuju, 6 berarti sangat setuju.",
      "Jawab semua 18 butir secara spontan dan jujur.",
      "Hasil akan menampilkan skor Admiration, Rivalry, 6 aspek, dan profil kombinasinya.",
    ],
    notice: "Aplikasi ini memakai versi edukatif NARQ berbasis struktur dimensi dan aspek yang Anda berikan. Hasilnya bukan diagnosis dan tidak menggantikan instrumen resmi atau asesmen profesional.",
    reference: "NARQ dikembangkan oleh Mitja Back dan rekan-rekannya untuk membedakan dua strategi narsisme grandiose: Admiration yang promotif dan Rivalry yang defensif.",
    likertMin: 1,
    likertMax: 6,
    likertLowLabel: "Sama sekali tidak setuju",
    likertHighLabel: "Sangat setuju",
    dimensions: [
      ["Admiration", "Strategi promotif untuk menarik kekaguman sosial melalui keunikan, daya pikat, dan citra diri hebat."],
      ["Rivalry", "Strategi defensif untuk melindungi ego melalui devaluasi, agresivitas, dan dorongan mengungguli orang lain."],
    ],
  },
  sd3: {
    id: "sd3",
    type: "likert",
    title: "Tes Dark Triad",
    resultTitle: "Profil Short Dark Triad",
    heroEyebrow: "Narsisme, Machiavellianisme, Psikopati",
    heroTitle: "Tes Dark Triad",
    heroLead: "Short Dark Triad memetakan tiga sifat kepribadian gelap yang saling tumpang tindih: Narsisme, Machiavellianisme, dan Psikopati.",
    questions: sd3Questions,
    scaleMeta: sd3ScaleMeta,
    maxScore: 135,
    instructions: [
      "Baca setiap pernyataan berdasarkan cara Anda memandang diri, memperlakukan orang lain, dan mengejar tujuan.",
      "Pilih angka 1 sampai 5: 1 berarti sangat tidak setuju, 5 berarti sangat setuju.",
      "Jawab semua 27 butir secara jujur berdasarkan pola yang cukup konsisten.",
      "Hasil akan menampilkan tiga skor terpisah, bukan satu diagnosis tunggal.",
    ],
    notice: "Tes ini adalah versi edukatif berbasis struktur Short Dark Triad. Hasil tidak boleh dipakai untuk melabeli seseorang, mendiagnosis, atau membuat keputusan klinis/forensik tanpa profesional.",
    reference: "Short Dark Triad atau SD3 dikembangkan oleh Delroy Paulhus dan Daniel Jones untuk mengukur Narsisme, Machiavellianisme, dan Psikopati secara efisien melalui laporan mandiri.",
    likertMin: 1,
    likertMax: 5,
    likertLowLabel: "Sangat tidak setuju",
    likertHighLabel: "Sangat setuju",
    dimensions: [
      ["Narsisme", "Keagungan diri, kebutuhan dipuji, rasa berhak, dan dorongan menjadi pusat perhatian."],
      ["Machiavellianisme", "Strategi manipulatif, dingin, kalkulatif, dan berorientasi keuntungan pribadi."],
      ["Psikopati", "Impulsivitas, keberanian mengambil risiko berbahaya, empati rendah, dan minim rasa bersalah."],
    ],
  },
};

const homeView = document.querySelector("#homeView");
const settingsView = document.querySelector("#settingsView");
const testView = document.querySelector("#testView");
const participantForm = document.querySelector("#participantForm");
const participantName = document.querySelector("#participantName");
const participantAge = document.querySelector("#participantAge");
const participantError = document.querySelector("#participantError");
const historyList = document.querySelector("#historyList");
const historyDetailModal = document.querySelector("#historyDetailModal");
const historyDetailPanel = document.querySelector("#historyDetailPanel");
const clearHistoryBtn = document.querySelector("#clearHistoryBtn");
const seedHistoryBtn = document.querySelector("#seedHistoryBtn");
const printHistoryBtn = document.querySelector("#printHistoryBtn");
const whatsappHistoryBtn = document.querySelector("#whatsappHistoryBtn");
const emailHistoryBtn = document.querySelector("#emailHistoryBtn");
const shareHistoryBtn = document.querySelector("#shareHistoryBtn");
const modalPrintHistoryBtn = document.querySelector("#modalPrintHistoryBtn");
const modalWhatsappHistoryBtn = document.querySelector("#modalWhatsappHistoryBtn");
const modalEmailHistoryBtn = document.querySelector("#modalEmailHistoryBtn");
const modalShareHistoryBtn = document.querySelector("#modalShareHistoryBtn");
const settingLanguage = document.querySelector("#settingLanguage");
const settingFont = document.querySelector("#settingFont");
const settingFontSize = document.querySelector("#settingFontSize");
const fontSizeValue = document.querySelector("#fontSizeValue");
const settingUserName = document.querySelector("#settingUserName");
const themeAccent = document.querySelector("#themeAccent");
const themeRose = document.querySelector("#themeRose");
const themeMint = document.querySelector("#themeMint");
const themeBlue = document.querySelector("#themeBlue");
const themeGold = document.querySelector("#themeGold");
const resetThemeBtn = document.querySelector("#resetThemeBtn");
const accessForm = document.querySelector("#accessForm");
const accessUserName = document.querySelector("#accessUserName");
const accessRole = document.querySelector("#accessRole");
const accessMessage = document.querySelector("#accessMessage");
const accessList = document.querySelector("#accessList");
const heroEyebrow = document.querySelector("#heroEyebrow");
const heroTitle = document.querySelector("#heroTitle");
const heroLead = document.querySelector("#heroLead");
const testTitle = document.querySelector("#testTitle");
const testInstructions = document.querySelector("#testInstructions");
const noticeText = document.querySelector("#noticeText");
const referenceText = document.querySelector("#referenceText");
const form = document.querySelector("#quizForm");
const progressText = document.querySelector("#progressText");
const progressBar = document.querySelector("#progressBar");
const answeredCount = document.querySelector("#answeredCount");
const remainingCount = document.querySelector("#remainingCount");
const scoreBtn = document.querySelector("#scoreBtn");
const resetBtn = document.querySelector("#resetBtn");
const missingText = document.querySelector("#missingText");
const resultPanel = document.querySelector("#resultPanel");
const resultTitle = document.querySelector("#resultTitle");
const scoreCaption = document.querySelector("#scoreCaption");
const scoreValue = document.querySelector("#scoreValue");
const scoreMax = document.querySelector("#scoreMax");
const scoreLabel = document.querySelector("#scoreLabel");
const scoreDescription = document.querySelector("#scoreDescription");
const scoreLevelTag = document.querySelector("#scoreLevelTag");
const scoreMeter = document.querySelector("#scoreMeter");
const scoreRange = document.querySelector("#scoreRange");
const resultSummaryGrid = document.querySelector("#resultSummaryGrid");
const profileNarrative = document.querySelector("#profileNarrative");
const dominantText = document.querySelector("#dominantText");
const guidanceList = document.querySelector("#guidanceList");
const dimensionSection = document.querySelector("#dimensionSection");
const dimensionGrid = document.querySelector("#dimensionGrid");
const scaleSectionDescription = document.querySelector("#scaleSectionDescription");
const scaleGrid = document.querySelector("#scaleGrid");
const benchmarkGrid = document.querySelector("#benchmarkGrid");

let activeTest = tests.npi;
let currentParticipant = null;
let currentHistoryId = null;
let selectedHistoryId = null;
const historyStorageKey = "akuNarsisTestHistory";
const appSettingsStorageKey = "akuNarsisAppSettings";
const accessStorageKey = "akuNarsisAccessUsers";
const defaultAppSettings = {
  language: "id",
  font: "Arial, Helvetica, sans-serif",
  fontSize: 16,
  userName: "",
  theme: {
    accent: "#7c4dff",
    rose: "#ff5c9f",
    mint: "#26e0b8",
    blue: "#18a7ff",
    gold: "#ffb84d",
  },
};
const sampleHistory = [
  {
    id: "sample-001",
    createdAt: "2026-07-04T08:10:00.000Z",
    participant: { name: "Alya Putri", age: 21 },
    testId: "npi",
    testTitle: "Tes NPI",
    resultTitle: "Profil NPI-40",
    total: 18,
    maxScore: 40,
    label: "Rata-rata / Moderat",
    range: "Rentang 9-22",
    dimensions: [],
  },
  {
    id: "sample-002",
    createdAt: "2026-07-04T08:25:00.000Z",
    participant: { name: "Bima Santoso", age: 28 },
    testId: "pni",
    testTitle: "Test PNI",
    resultTitle: "Profil PNI-52",
    total: 144,
    maxScore: 260,
    label: "Sedang",
    range: "Rata-rata 1.67-3.33",
    dimensions: [{ name: "Grandiosity", mean: 2.95 }, { name: "Vulnerability", mean: 2.66 }],
  },
  {
    id: "sample-003",
    createdAt: "2026-07-04T08:40:00.000Z",
    participant: { name: "Citra Lestari", age: 34 },
    testId: "narq",
    testTitle: "Tes NARQ",
    resultTitle: "Profil NARQ-18",
    total: 70,
    maxScore: 108,
    label: "Narsisisme Karismatik / Populer",
    range: "High Admiration, Low Rivalry",
    dimensions: [{ name: "Admiration", mean: 4.92 }, { name: "Rivalry", mean: 2.86 }],
  },
  {
    id: "sample-004",
    createdAt: "2026-07-04T09:05:00.000Z",
    participant: { name: "Dani Pratama", age: 25 },
    testId: "sd3",
    testTitle: "Tes Dark Triad",
    resultTitle: "Profil Short Dark Triad",
    total: 82,
    maxScore: 135,
    label: "The Master Manipulator",
    range: "Machiavellianisme tinggi",
    dimensions: [{ name: "Narsisme", mean: 2.8 }, { name: "Machiavellianisme", mean: 4.6 }, { name: "Psikopati", mean: 2.2 }],
  },
  {
    id: "sample-005",
    createdAt: "2026-07-04T09:20:00.000Z",
    participant: { name: "Eka Wulandari", age: 19 },
    testId: "npi",
    testTitle: "Tes NPI",
    resultTitle: "Profil NPI-40",
    total: 7,
    maxScore: 40,
    label: "Rendah",
    range: "Rentang 0-8",
    dimensions: [],
  },
  {
    id: "sample-006",
    createdAt: "2026-07-04T09:45:00.000Z",
    participant: { name: "Farhan Hakim", age: 31 },
    testId: "pni",
    testTitle: "Test PNI",
    resultTitle: "Profil PNI-52",
    total: 198,
    maxScore: 260,
    label: "Tinggi",
    range: "Rata-rata 3.34-5.00",
    dimensions: [{ name: "Grandiosity", mean: 3.62 }, { name: "Vulnerability", mean: 3.96 }],
  },
  {
    id: "sample-007",
    createdAt: "2026-07-04T10:00:00.000Z",
    participant: { name: "Gita Maharani", age: 27 },
    testId: "narq",
    testTitle: "Tes NARQ",
    resultTitle: "Profil NARQ-18",
    total: 84,
    maxScore: 108,
    label: "Narsisisme Campuran / Dinamis",
    range: "High Admiration, High Rivalry",
    dimensions: [{ name: "Admiration", mean: 4.9 }, { name: "Rivalry", mean: 4.43 }],
  },
  {
    id: "sample-008",
    createdAt: "2026-07-04T10:15:00.000Z",
    participant: { name: "Hendra Wijaya", age: 42 },
    testId: "sd3",
    testTitle: "Tes Dark Triad",
    resultTitle: "Profil Short Dark Triad",
    total: 99,
    maxScore: 135,
    label: "The Classic Dark Triad",
    range: "Ketiganya tinggi",
    dimensions: [{ name: "Narsisme", mean: 4.2 }, { name: "Machiavellianisme", mean: 4.4 }, { name: "Psikopati", mean: 4.1 }],
  },
  {
    id: "sample-009",
    createdAt: "2026-07-04T10:35:00.000Z",
    participant: { name: "Intan Sari", age: 23 },
    testId: "npi",
    testTitle: "Tes NPI",
    resultTitle: "Profil NPI-40",
    total: 27,
    maxScore: 40,
    label: "Tinggi",
    range: "Rentang 23-40",
    dimensions: [],
  },
  {
    id: "sample-010",
    createdAt: "2026-07-04T10:50:00.000Z",
    participant: { name: "Joko Firmansyah", age: 37 },
    testId: "sd3",
    testTitle: "Tes Dark Triad",
    resultTitle: "Profil Short Dark Triad",
    total: 81,
    maxScore: 135,
    label: "The Impulsive Aggressor",
    range: "Psikopati tinggi",
    dimensions: [{ name: "Narsisme", mean: 2.1 }, { name: "Machiavellianisme", mean: 2.4 }, { name: "Psikopati", mean: 4.5 }],
  },
  {
    id: "sample-011",
    createdAt: "2026-07-04T11:10:00.000Z",
    participant: { name: "Kirana Dewi", age: 30 },
    testId: "narq",
    testTitle: "Tes NARQ",
    resultTitle: "Profil NARQ-18",
    total: 35,
    maxScore: 108,
    label: "Narsisisme Sehat / Rendah",
    range: "Low Admiration, Low Rivalry",
    dimensions: [{ name: "Admiration", mean: 2.0 }, { name: "Rivalry", mean: 1.8 }],
  },
  {
    id: "sample-012",
    createdAt: "2026-07-04T11:25:00.000Z",
    participant: { name: "Lukman Arif", age: 45 },
    testId: "pni",
    testTitle: "Test PNI",
    resultTitle: "Profil PNI-52",
    total: 74,
    maxScore: 260,
    label: "Rendah",
    range: "Rata-rata 0-1.66",
    dimensions: [{ name: "Grandiosity", mean: 1.22 }, { name: "Vulnerability", mean: 1.55 }],
  },
];

function readAppSettings() {
  try {
    const stored = JSON.parse(localStorage.getItem(appSettingsStorageKey) || "{}");
    return {
      ...defaultAppSettings,
      ...stored,
      theme: {
        ...defaultAppSettings.theme,
        ...(stored.theme || {}),
      },
    };
  } catch {
    return { ...defaultAppSettings, theme: { ...defaultAppSettings.theme } };
  }
}

function writeAppSettings(settings) {
  localStorage.setItem(appSettingsStorageKey, JSON.stringify(settings));
}

function applyAppSettings(settings = readAppSettings()) {
  document.documentElement.style.setProperty("--accent", settings.theme.accent);
  document.documentElement.style.setProperty("--rose", settings.theme.rose);
  document.documentElement.style.setProperty("--mint", settings.theme.mint);
  document.documentElement.style.setProperty("--blue", settings.theme.blue);
  document.documentElement.style.setProperty("--gold", settings.theme.gold);
  document.body.style.fontFamily = settings.font;
  document.documentElement.style.fontSize = `${settings.fontSize}px`;
  document.documentElement.lang = settings.language;

  settingLanguage.value = settings.language;
  settingFont.value = settings.font;
  settingFontSize.value = settings.fontSize;
  fontSizeValue.textContent = `${settings.fontSize}px`;
  settingUserName.value = settings.userName;
  themeAccent.value = settings.theme.accent;
  themeRose.value = settings.theme.rose;
  themeMint.value = settings.theme.mint;
  themeBlue.value = settings.theme.blue;
  themeGold.value = settings.theme.gold;
}

function updateAppSettings(updater) {
  const settings = readAppSettings();
  updater(settings);
  writeAppSettings(settings);
  applyAppSettings(settings);
}

function switchSettingsTab(tabName) {
  document.querySelectorAll(".settings-tab").forEach((tab) => {
    const isActive = tab.dataset.settingsTab === tabName;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });

  document.querySelectorAll(".settings-pane").forEach((pane) => {
    pane.classList.toggle("active", pane.dataset.settingsPane === tabName);
  });

  if (tabName === "history") renderHistory();
  if (tabName === "access") renderAccessUsers();
}

function showSettings(tabName = "general") {
  document.body.classList.remove("is-taking-test");
  activeTest = null;
  homeView.hidden = true;
  testView.hidden = true;
  settingsView.hidden = false;
  switchSettingsTab(tabName);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function readAccessUsers() {
  try {
    const users = JSON.parse(localStorage.getItem(accessStorageKey) || "[]");
    return Array.isArray(users) ? users : [];
  } catch {
    return [];
  }
}

function writeAccessUsers(users) {
  localStorage.setItem(accessStorageKey, JSON.stringify(users));
}

function renderAccessUsers() {
  const users = readAccessUsers();

  if (!users.length) {
    accessList.innerHTML = `<p class="history-empty">Belum ada user. Login tidak diwajibkan sampai minimal satu user dibuat.</p>`;
    return;
  }

  accessList.innerHTML = users.map((user) => `
    <article class="access-item">
      <div>
        <strong>${user.name}</strong>
        <span>${user.role}</span>
      </div>
      <button class="row-action" type="button" data-remove-access="${user.id}">Hapus</button>
    </article>
  `).join("");
}

function addAccessUser(event) {
  event.preventDefault();
  const name = accessUserName.value.trim();

  if (!name) {
    accessMessage.textContent = "Nama login wajib diisi.";
    accessUserName.focus();
    return;
  }

  const users = readAccessUsers();
  users.push({
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    name,
    role: accessRole.value,
  });
  writeAccessUsers(users);
  accessMessage.textContent = "";
  accessForm.reset();
  renderAccessUsers();
}

function showHome() {
  document.body.classList.remove("is-taking-test");
  activeTest = null;
  currentParticipant = null;
  currentHistoryId = null;
  homeView.hidden = false;
  settingsView.hidden = true;
  testView.hidden = true;
  heroEyebrow.textContent = "Ruang refleksi psikologi diri";
  heroTitle.textContent = "Aku Narsis?";
  heroLead.textContent = "Pilih tes untuk memahami pola narsisme dan sifat gelap dari empat sudut: NPI, PNI, NARQ, dan Short Dark Triad.";
  ensureSampleHistory();
  renderHistory();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function startTest(testId) {
  document.body.classList.add("is-taking-test");
  activeTest = tests[testId];
  currentParticipant = null;
  currentHistoryId = null;
  testView.classList.add("requires-participant");
  homeView.hidden = true;
  settingsView.hidden = true;
  testView.hidden = false;
  participantForm.reset();
  participantError.textContent = "";
  heroEyebrow.textContent = activeTest.heroEyebrow;
  heroTitle.textContent = activeTest.heroTitle;
  heroLead.textContent = activeTest.heroLead;
  testTitle.textContent = activeTest.title;
  testInstructions.innerHTML = `<ol>${activeTest.instructions.map((item) => `<li>${item}</li>`).join("")}</ol>`;
  noticeText.textContent = activeTest.notice;
  referenceText.textContent = activeTest.reference;
  resultTitle.textContent = activeTest.resultTitle;
  scoreMax.textContent = `/${activeTest.maxScore}`;
  scoreCaption.textContent = activeTest.type === "likert" ? "Skor total PNI" : "Skor total NPI";
  scaleSectionDescription.textContent = activeTest.type === "likert"
    ? `Setiap subskala dihitung dari total nilai Likert ${activeTest.likertMin}-${activeTest.likertMax} pada item terkait.`
    : "Setiap subskala dihitung dari item yang mengarah pada kecenderungan narsistik di domain tersebut.";
  renderQuestions();
  resetResultOnly();
  updateProgress();
  window.scrollTo({ top: 0, behavior: "smooth" });
  participantName.focus();
}

function beginParticipantSession(event) {
  event.preventDefault();
  const name = participantName.value.trim();
  const age = Number(participantAge.value);

  if (!name) {
    participantError.textContent = "Nama wajib diisi sebelum mulai test.";
    participantName.focus();
    return;
  }

  if (!Number.isFinite(age) || age < 5 || age > 120) {
    participantError.textContent = "Usia wajib diisi dengan angka 5 sampai 120.";
    participantAge.focus();
    return;
  }

  currentParticipant = { name, age };
  participantError.textContent = "";
  testView.classList.remove("requires-participant");
  document.querySelector(".intro-panel").scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderQuestions() {
  form.innerHTML = activeTest.questions.map((question, index) => {
    const number = index + 1;
    const scaleLabel = activeTest.scaleMeta[question.scale][0];

    if (activeTest.type === "likert") {
      return `
        <fieldset class="question-card likert-card">
          <legend class="sr-only">Pernyataan ${number}</legend>
          <div class="question-head">
            <span>Pernyataan ${number}</span>
            <span>${scaleLabel}</span>
          </div>
          <p class="statement-text">${question.text}</p>
          <div class="likert-row" role="radiogroup" aria-label="Skala jawaban pernyataan ${number}">
            ${getLikertValues().map((value) => renderLikertChoice(number, value)).join("")}
          </div>
          <div class="likert-labels" aria-hidden="true">
            <span>${activeTest.likertLowLabel}</span>
            <span>${activeTest.likertHighLabel}</span>
          </div>
        </fieldset>
      `;
    }

    return `
      <fieldset class="question-card">
        <legend class="sr-only">Pertanyaan ${number}</legend>
        <div class="question-head">
          <span>Pertanyaan ${number}</span>
          <span>${scaleLabel}</span>
        </div>
        <div class="choice-grid">
          ${renderForcedChoice(number, "a", question.a)}
          ${renderForcedChoice(number, "b", question.b)}
        </div>
      </fieldset>
    `;
  }).join("");
}

function getLikertValues() {
  const values = [];
  for (let value = activeTest.likertMin; value <= activeTest.likertMax; value += 1) {
    values.push(value);
  }
  return values;
}

function renderForcedChoice(number, value, text) {
  return `
    <label class="choice">
      <input type="radio" name="q${number}" value="${value}">
      <span>
        <strong>Pernyataan ${value.toUpperCase()}</strong>
        <span>${text}</span>
      </span>
    </label>
  `;
}

function renderLikertChoice(number, value) {
  return `
    <label class="likert-choice">
      <input type="radio" name="q${number}" value="${value}">
      <span>${value}</span>
    </label>
  `;
}

function getAnswers() {
  return activeTest.questions.map((_, index) => {
    const checked = form.querySelector(`input[name="q${index + 1}"]:checked`);
    return checked ? checked.value : null;
  });
}

function updateProgress() {
  if (!activeTest) return;
  const answered = getAnswers().filter((answer) => answer !== null).length;
  progressText.textContent = `${answered} dari ${activeTest.questions.length} terjawab`;
  progressBar.style.width = `${(answered / activeTest.questions.length) * 100}%`;
  answeredCount.textContent = answered;
  remainingCount.textContent = activeTest.questions.length - answered;
  missingText.textContent = "";
}

function scoreAnswers(answers) {
  const scaleScores = {};
  const scaleMax = {};
  const dimensionScores = {};
  const dimensionMax = {};

  Object.keys(activeTest.scaleMeta).forEach((scale) => {
    scaleScores[scale] = 0;
    scaleMax[scale] = 0;
  });

  const total = answers.reduce((sum, answer, index) => {
    const question = activeTest.questions[index];

    if (activeTest.type === "likert") {
      const value = Number(answer);
      scaleScores[question.scale] += value;
      scaleMax[question.scale] += activeTest.likertMax;
      dimensionScores[question.dimension] = (dimensionScores[question.dimension] || 0) + value;
      dimensionMax[question.dimension] = (dimensionMax[question.dimension] || 0) + activeTest.likertMax;
      return sum + value;
    }

    scaleMax[question.scale] += 1;
    if (answer === question.key) {
      scaleScores[question.scale] += 1;
      return sum + 1;
    }
    return sum;
  }, 0);

  return { total, scaleScores, scaleMax, dimensionScores, dimensionMax };
}

function getInterpretation(score, scoring) {
  if (activeTest.id === "sd3") {
    const narcissism = getDimensionMean(scoring.dimensionScores, scoring.dimensionMax, "Narsisme");
    const machiavellianism = getDimensionMean(scoring.dimensionScores, scoring.dimensionMax, "Machiavellianisme");
    const psychopathy = getDimensionMean(scoring.dimensionScores, scoring.dimensionMax, "Psikopati");
    const highNarcissism = narcissism >= 3.5;
    const highMachiavellianism = machiavellianism >= 3.5;
    const highPsychopathy = psychopathy >= 3.5;

    if (highNarcissism && highMachiavellianism && highPsychopathy) {
      return {
        label: "The Classic Dark Triad",
        range: "Ketiganya tinggi",
        desc: `Narsisme ${narcissism.toFixed(2)}, Machiavellianisme ${machiavellianism.toFixed(2)}, Psikopati ${psychopathy.toFixed(2)}. Ketiga dimensi tampak tinggi dalam profil ini.`,
        narrative: "Profil ini menunjukkan kombinasi keagungan diri, strategi manipulatif, dan sikap dingin/impulsif yang relatif kuat. Dalam konteks relasi atau kerja, kombinasi ini dapat meningkatkan risiko perilaku eksploitatif, konflik, dan pengabaian dampak pada orang lain.",
        guidance: ["Perhatikan pola menggunakan orang lain sebagai alat mencapai tujuan.", "Latih evaluasi dampak keputusan pada keselamatan dan martabat orang lain.", "Jika pola ini terasa akurat dan mengganggu kehidupan, konsultasi profesional sangat disarankan."],
      };
    }

    if (highMachiavellianism && !highNarcissism && !highPsychopathy) {
      return {
        label: "The Master Manipulator",
        range: "Machiavellianisme tinggi",
        desc: `Narsisme ${narcissism.toFixed(2)}, Machiavellianisme ${machiavellianism.toFixed(2)}, Psikopati ${psychopathy.toFixed(2)}. Dimensi Machiavellianisme paling dominan.`,
        narrative: "Profil ini cenderung taktis, berhitung, dan dingin dalam membaca relasi. Dorongan utama bukan selalu pamer atau bertindak impulsif, melainkan mengatur informasi, aliansi, dan persepsi orang lain demi keuntungan strategis.",
        guidance: ["Amati kapan strategi sosial berubah menjadi manipulasi yang merugikan.", "Latih transparansi pada hubungan yang membutuhkan kepercayaan.", "Pertimbangkan konsekuensi jangka panjang dari keuntungan jangka pendek."],
      };
    }

    if (highPsychopathy && !highNarcissism && !highMachiavellianism) {
      return {
        label: "The Impulsive Aggressor",
        range: "Psikopati tinggi",
        desc: `Narsisme ${narcissism.toFixed(2)}, Machiavellianisme ${machiavellianism.toFixed(2)}, Psikopati ${psychopathy.toFixed(2)}. Dimensi Psikopati paling dominan.`,
        narrative: "Profil ini menonjol pada impulsivitas, pencarian sensasi, sikap dingin, dan rendahnya rasa bersalah. Bila muncul dalam kehidupan nyata, area ini paling perlu diwaspadai karena dapat berkaitan dengan tindakan berisiko dan konflik sosial.",
        guidance: ["Jeda sebelum bertindak saat terdorong mengambil risiko.", "Perhatikan apakah keputusan Anda mengabaikan keselamatan atau perasaan orang lain.", "Cari bantuan profesional bila impuls agresif atau pelanggaran aturan sering terjadi."],
      };
    }

    if (!highNarcissism && !highMachiavellianism && !highPsychopathy) {
      return {
        label: "Kepribadian Pro-Sosial / Sehat",
        range: "Ketiganya rendah",
        desc: `Narsisme ${narcissism.toFixed(2)}, Machiavellianisme ${machiavellianism.toFixed(2)}, Psikopati ${psychopathy.toFixed(2)}. Ketiga dimensi berada pada rentang rendah.`,
        narrative: "Profil ini menunjukkan dorongan rendah untuk mengeksploitasi, memanipulasi, mencari status secara berlebihan, atau mengabaikan dampak pada orang lain. Pola ini biasanya lebih kooperatif, empatik, dan selaras dengan norma sosial.",
        guidance: ["Tetap gunakan hasil sebagai refleksi, bukan bukti mutlak kepribadian.", "Lihat dimensi tertinggi meski masih rendah untuk memahami kecenderungan kecil yang muncul.", "Pertahankan komunikasi jujur dan empati dalam relasi."],
      };
    }

    const highest = [
      ["Narsisme", narcissism],
      ["Machiavellianisme", machiavellianism],
      ["Psikopati", psychopathy],
    ].sort((a, b) => b[1] - a[1])[0];

    return {
      label: "Profil Campuran Dark Triad",
      range: `${highest[0]} paling menonjol`,
      desc: `Narsisme ${narcissism.toFixed(2)}, Machiavellianisme ${machiavellianism.toFixed(2)}, Psikopati ${psychopathy.toFixed(2)}. Profil tidak jatuh pada satu pola ekstrem tunggal.`,
      narrative: "Profil campuran menunjukkan satu atau dua dimensi yang lebih menonjol dibanding lainnya. Bacaan terbaik adalah melihat dimensi tertinggi sebagai area refleksi utama, lalu menilai apakah pola itu muncul konsisten dalam relasi, pekerjaan, atau keputusan sehari-hari.",
      guidance: ["Fokuskan refleksi pada dimensi dengan rata-rata tertinggi.", "Perhatikan apakah pola itu muncul saat stres, bersaing, atau ingin mendapatkan keuntungan.", "Gunakan hasil untuk percakapan reflektif, bukan untuk melabeli diri atau orang lain."],
    };
  }

  if (activeTest.id === "narq") {
    const admiration = getDimensionMean(scoring.dimensionScores, scoring.dimensionMax, "Admiration");
    const rivalry = getDimensionMean(scoring.dimensionScores, scoring.dimensionMax, "Rivalry");
    const highAdmiration = admiration >= 3.5;
    const highRivalry = rivalry >= 3.5;

    if (highAdmiration && !highRivalry) {
      return {
        label: "Narsisisme Karismatik / Populer",
        range: "High Admiration, Low Rivalry",
        desc: `Admiration ${admiration.toFixed(2)} dan Rivalry ${rivalry.toFixed(2)}. Profil ini menunjukkan strategi mencari kekaguman yang relatif promotif tanpa dorongan kuat untuk menjatuhkan orang lain.`,
        narrative: "Pola ini dapat terlihat percaya diri, menawan, berorientasi prestasi, dan mudah menarik perhatian sosial. Dalam hubungan awal, strategi Admiration sering terasa positif karena fokusnya adalah terlihat menarik dan berhasil, bukan menyerang orang lain.",
        guidance: ["Jaga agar kebutuhan dikagumi tetap seimbang dengan empati dan resiprositas.", "Perhatikan apakah pesona sosial tetap autentik saat tidak mendapat pujian.", "Gunakan daya pikat sebagai kekuatan sosial tanpa membuat relasi terasa satu arah."],
      };
    }

    if (!highAdmiration && highRivalry) {
      return {
        label: "Narsisisme Maladaptif / Bermusuhan",
        range: "Low Admiration, High Rivalry",
        desc: `Admiration ${admiration.toFixed(2)} dan Rivalry ${rivalry.toFixed(2)}. Profil ini menunjukkan strategi defensif yang lebih kuat daripada strategi mencari kekaguman.`,
        narrative: "Pola ini dapat muncul sebagai kompetitif, sensitif terhadap kritik, mudah membandingkan diri, dan terdorong memastikan orang lain tidak terlihat lebih unggul. Dalam relasi jangka panjang, Rivalry tinggi sering lebih mudah memicu konflik.",
        guidance: ["Amati situasi saat keberhasilan orang lain terasa seperti ancaman.", "Latih menunda respons menyerang ketika ego terasa terusik.", "Jika konflik sosial berulang, pertimbangkan diskusi dengan profesional."],
      };
    }

    if (highAdmiration && highRivalry) {
      return {
        label: "Narsisisme Campuran / Dinamis",
        range: "High Admiration, High Rivalry",
        desc: `Admiration ${admiration.toFixed(2)} dan Rivalry ${rivalry.toFixed(2)}. Profil ini menunjukkan kombinasi strategi promotif dan defensif yang sama-sama kuat.`,
        narrative: "Pola ini dapat terasa memikat saat situasi berjalan sesuai harapan, tetapi berubah defensif ketika dikritik, disaingi, atau tidak mendapat pengakuan. Dinamikanya sering bergantung pada apakah citra diri sedang didukung atau terancam.",
        guidance: ["Kenali pemicu yang membuat Anda bergeser dari memikat menjadi menyerang.", "Pisahkan kritik terhadap tindakan dari ancaman terhadap harga diri.", "Gunakan ambisi sosial tanpa mengorbankan keamanan relasi."],
      };
    }

    return {
      label: "Narsisisme Sehat / Rendah",
      range: "Low Admiration, Low Rivalry",
      desc: `Admiration ${admiration.toFixed(2)} dan Rivalry ${rivalry.toFixed(2)}. Profil ini menunjukkan kebutuhan relatif rendah untuk dikagumi maupun mengungguli orang lain secara defensif.`,
      narrative: "Pola ini biasanya lebih kooperatif, setara, dan tidak terlalu bergantung pada perhatian sosial konstan. Skor rendah bukan berarti tanpa percaya diri, melainkan dorongan narsistik pada dua strategi NARQ tidak terlalu dominan.",
      guidance: ["Tetap pastikan kerendahan dorongan bersaing tidak menghambat ekspresi diri yang sehat.", "Gunakan hasil sebagai refleksi cara berelasi, bukan label mutlak.", "Lihat aspek tertinggi untuk memahami area kecil yang masih menonjol."],
    };
  }

  if (activeTest.id === "pni") {
    const mean = score / activeTest.questions.length;
    if (mean <= 1.66) {
      return {
        label: "Rendah",
        range: "Rata-rata 0-1.66",
        desc: "Skor ini menunjukkan intensitas pola narsisme patologis yang relatif rendah pada versi edukatif PNI ini.",
        narrative: "Profil rendah dapat menggambarkan pola validasi diri, sensitivitas kritik, fantasi megah, dan rasa berhak yang tidak terlalu dominan dalam jawaban Anda. Tetap perhatikan subskala tertentu yang mungkin lebih menonjol daripada skor total.",
        guidance: ["Gunakan hasil sebagai bahan refleksi, bukan label klinis.", "Lihat subskala tertinggi untuk memahami area yang paling perlu diamati.", "Bandingkan dengan pola jangka panjang, bukan suasana hati hari ini."],
      };
    }
    if (mean <= 3.33) {
      return {
        label: "Sedang",
        range: "Rata-rata 1.67-3.33",
        desc: "Skor ini menunjukkan beberapa pola narsisme maladaptif muncul pada tingkat sedang, terutama pada subskala yang paling tinggi.",
        narrative: "Profil sedang biasanya memperlihatkan campuran antara kebutuhan validasi, sensitivitas terhadap penilaian, dorongan tampil unggul, dan reaksi emosional saat ekspektasi tidak terpenuhi. Area tertinggi perlu dibaca sebagai sinyal refleksi, bukan diagnosis.",
        guidance: ["Perhatikan situasi yang memicu rasa malu, marah, atau kebutuhan diakui.", "Latih membedakan kebutuhan dihargai dari tuntutan diperlakukan khusus.", "Jika pola ini mengganggu relasi, pertimbangkan konsultasi profesional."],
      };
    }
    return {
      label: "Tinggi",
      range: "Rata-rata 3.34-5.00",
      desc: "Skor ini menunjukkan intensitas tinggi pada pola grandiose dan/atau vulnerable dalam versi edukatif PNI ini.",
      narrative: "Profil tinggi dapat menunjukkan kebutuhan validasi yang kuat, sensitivitas tinggi terhadap kritik, kemarahan saat ekspektasi tidak dipenuhi, atau upaya menjaga citra superior. Bila pola ini konsisten dan mengganggu kehidupan sehari-hari, evaluasi profesional akan jauh lebih tepat.",
      guidance: ["Amati dampaknya pada relasi, pekerjaan, dan regulasi emosi.", "Kurangi pengambilan keputusan saat sedang tersinggung atau merasa tidak dihargai.", "Pertimbangkan bantuan psikolog/psikiater jika hasil terasa akurat dan mengganggu."],
    };
  }

  if (score <= 8) {
    return {
      label: "Rendah",
      range: "Rentang 0-8",
      desc: "Skor ini menunjukkan kecenderungan narsisme yang sangat rendah. Anda mungkin cenderung tidak menonjolkan diri atau sangat rendah hati.",
      narrative: "Profil rendah biasanya menggambarkan orientasi diri yang tidak terlalu menuntut perhatian, status, atau pengakuan khusus.",
      guidance: ["Perhatikan apakah kerendahan hati tetap disertai kemampuan menyampaikan kebutuhan pribadi.", "Gunakan hasil ini sebagai bahan refleksi, bukan label kepribadian tetap.", "Bandingkan dengan umpan balik orang yang mengenal Anda."],
    };
  }
  if (score <= 22) {
    return {
      label: "Rata-rata / Moderat",
      range: "Rentang 9-22",
      desc: "Skor ini berada pada rentang umum. Ini dapat mencerminkan kepercayaan diri yang wajar tanpa kecenderungan narsistik yang kuat.",
      narrative: "Profil moderat menunjukkan adanya campuran antara kepercayaan diri, kebutuhan dihargai, dan kemampuan menyesuaikan diri dengan orang lain.",
      guidance: ["Amati subskala yang paling tinggi karena area itu biasanya paling terlihat.", "Jaga keseimbangan antara percaya diri dan kesediaan menerima koreksi.", "Gunakan hasil sebagai peta refleksi perilaku, bukan kesimpulan klinis."],
    };
  }
  return {
    label: "Tinggi",
    range: "Rentang 23-40",
    desc: "Skor ini menunjukkan ciri narsistik yang relatif kuat, seperti dorongan untuk dipuji, berkuasa, terlihat istimewa, atau mendapat perlakuan khusus.",
    narrative: "Profil tinggi dapat menunjukkan dorongan kuat untuk memperoleh pengaruh, perhatian, status, atau validasi dari lingkungan.",
    guidance: ["Perhatikan saat keinginan dihargai berubah menjadi tuntutan perlakuan khusus.", "Latih jeda sebelum mengambil alih percakapan atau keputusan.", "Jika hasil ini mengganggu relasi, pertimbangkan berdiskusi dengan profesional."],
  };
}

function getDimensionMean(dimensionScores, dimensionMax, dimension) {
  const max = dimensionMax[dimension] || 0;
  const score = dimensionScores[dimension] || 0;
  return max ? score / (max / activeTest.likertMax) : 0;
}

function getLevel(value, max) {
  const ratio = max ? value / max : 0;
  if (ratio >= 0.67) return "Menonjol";
  if (ratio >= 0.34) return "Sedang";
  return "Rendah";
}

function sortedScales(scaleScores, scaleMax) {
  return Object.keys(activeTest.scaleMeta)
    .map((scale) => ({ scale, value: scaleScores[scale], max: scaleMax[scale], ratio: scaleMax[scale] ? scaleScores[scale] / scaleMax[scale] : 0 }))
    .sort((a, b) => b.ratio - a.ratio || b.value - a.value);
}

function renderSummary(total, scaleScores, scaleMax) {
  const dominant = sortedScales(scaleScores, scaleMax);
  const lowest = [...dominant].reverse()[0];
  const percent = Math.round((total / activeTest.maxScore) * 100);
  const average = (total / activeTest.questions.length).toFixed(2);
  dominantText.textContent = dominant.slice(0, 3).map((item) => `${activeTest.scaleMeta[item.scale][0]} (${item.value}/${item.max})`).join(", ");
  resultSummaryGrid.innerHTML = `
    <article class="summary-card"><span>Persentase total</span><strong>${percent}%</strong><p>${total} dari ${activeTest.maxScore} skor maksimum.</p></article>
    <article class="summary-card"><span>Rata-rata item</span><strong>${average}</strong><p>${activeTest.type === "likert" ? `Skala ${activeTest.likertMin}-${activeTest.likertMax} per pernyataan.` : "Proporsi pilihan sesuai kunci NPI."}</p></article>
    <article class="summary-card"><span>Area terendah</span><strong>${activeTest.scaleMeta[lowest.scale][0].split(" / ")[1]}</strong><p>${lowest.value}/${lowest.max} pada subskala ini.</p></article>
  `;
}

function renderDimensions(dimensionScores, dimensionMax) {
  if (activeTest.type !== "likert") {
    dimensionSection.hidden = true;
    dimensionGrid.innerHTML = "";
    return;
  }

  dimensionSection.hidden = false;
  dimensionGrid.innerHTML = activeTest.dimensions.map(([dimension, desc]) => {
    const value = dimensionScores[dimension] || 0;
    const max = dimensionMax[dimension] || 0;
    const percent = max ? Math.round((value / max) * 100) : 0;
    const mean = max ? (value / (max / activeTest.likertMax)).toFixed(2) : "0.00";
    return `
      <article class="dimension-card">
        <header><strong>${dimension}</strong><span>${value}/${max}</span></header>
        <div class="mini-track"><div class="mini-bar" style="width:${percent}%"></div></div>
        <p>Rata-rata ${mean}. ${desc}</p>
      </article>
    `;
  }).join("");
}

function renderScales(scaleScores, scaleMax) {
  scaleGrid.innerHTML = Object.entries(activeTest.scaleMeta).map(([scale, meta]) => {
    const value = scaleScores[scale];
    const max = scaleMax[scale];
    const percent = max ? (value / max) * 100 : 0;
    const mean = activeTest.type === "likert" ? `<span class="scale-mean">Rata-rata ${(value / (max / activeTest.likertMax)).toFixed(2)}</span>` : "";
    return `
      <article class="scale-card">
        <header><span>${meta[0]}</span><span class="scale-score">${value}/${max}</span></header>
        <span class="scale-level">${getLevel(value, max)}</span>
        ${mean}
        <div class="mini-track" aria-hidden="true"><div class="mini-bar" style="width:${percent}%"></div></div>
        <p>${meta[1]}</p>
      </article>
    `;
  }).join("");
}

function renderBenchmarks() {
  if (activeTest.id === "sd3") {
    benchmarkGrid.innerHTML = `
      <article><strong>The Master Manipulator</strong><p>Machiavellianisme tinggi dengan dimensi lain lebih rendah: taktis, kalkulatif, dan manipulatif secara sosial.</p></article>
      <article><strong>The Impulsive Aggressor</strong><p>Psikopati tinggi dengan dimensi lain lebih rendah: impulsif, berisiko, agresif, dan empati rendah.</p></article>
      <article><strong>The Classic Dark Triad</strong><p>Ketiganya tinggi: kombinasi keagungan diri, manipulasi, dan sikap dingin yang rentan eksploitatif.</p></article>
      <article><strong>Pro-Sosial / Sehat</strong><p>Ketiganya rendah: lebih empatik, kooperatif, jujur, dan tidak terdorong mengeksploitasi orang lain.</p></article>
    `;
    return;
  }

  if (activeTest.id === "narq") {
    benchmarkGrid.innerHTML = `
      <article><strong>High Admiration, Low Rivalry</strong><p>Karismatik/populer: mencari kekaguman dengan cara promotif tanpa banyak menjatuhkan orang lain.</p></article>
      <article><strong>Low Admiration, High Rivalry</strong><p>Maladaptif/bermusuhan: defensif, kompetitif, dan mudah melihat orang lain sebagai ancaman.</p></article>
      <article><strong>High Admiration, High Rivalry</strong><p>Campuran/dinamis: memikat ketika aman, tetapi dapat menyerang ketika ego terusik.</p></article>
      <article><strong>Low Admiration, Low Rivalry</strong><p>Sehat/rendah: tidak terlalu haus perhatian dan tidak kuat terdorong mengungguli orang lain.</p></article>
    `;
    return;
  }

  if (activeTest.id === "pni") {
    benchmarkGrid.innerHTML = `
      <article><strong>Rata-rata 0-1.66 Rendah</strong><p>Pola grandiose/vulnerable relatif jarang atau lemah pada jawaban.</p></article>
      <article><strong>Rata-rata 1.67-3.33 Sedang</strong><p>Beberapa pola muncul cukup jelas, terutama pada subskala tertinggi.</p></article>
      <article><strong>Rata-rata 3.34-5.00 Tinggi</strong><p>Intensitas pola relatif kuat dan layak direfleksikan lebih hati-hati.</p></article>
    `;
    return;
  }

  benchmarkGrid.innerHTML = `
    <article><strong>0-8 Rendah</strong><p>Kecenderungan narsisme sangat rendah; dapat tampak tidak menonjolkan diri atau sangat rendah hati.</p></article>
    <article><strong>9-22 Rata-rata / Moderat</strong><p>Rentang umum untuk banyak orang dewasa; mencerminkan kepercayaan diri yang relatif wajar.</p></article>
    <article><strong>23-40 Tinggi</strong><p>Ciri narsistik relatif kuat, misalnya kebutuhan pujian, kuasa, keistimewaan, atau dominasi sosial.</p></article>
  `;
}

function readHistory() {
  try {
    const history = JSON.parse(localStorage.getItem(historyStorageKey) || "[]");
    return Array.isArray(history) ? history : [];
  } catch {
    return [];
  }
}

function writeHistory(history) {
  localStorage.setItem(historyStorageKey, JSON.stringify(history));
}

function ensureSampleHistory() {
  if (!localStorage.getItem(historyStorageKey)) {
    writeHistory(sampleHistory);
  }
}

function seedSampleHistory() {
  const history = readHistory();
  const existingIds = new Set(history.map((item) => item.id));
  const merged = [...sampleHistory.filter((item) => !existingIds.has(item.id)), ...history];
  writeHistory(merged.slice(0, 50));
  renderHistory();
}

function saveResultToHistory(total, interpretation, scoring) {
  if (!currentParticipant || !activeTest) return;

  const now = new Date();
  const dimensionSummary = activeTest.type === "likert"
    ? activeTest.dimensions.map(([dimension]) => ({
        name: dimension,
        mean: getDimensionMean(scoring.dimensionScores, scoring.dimensionMax, dimension),
      }))
    : [];

  const entry = {
    id: currentHistoryId || `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    createdAt: now.toISOString(),
    participant: { ...currentParticipant },
    testId: activeTest.id,
    testTitle: activeTest.title,
    resultTitle: activeTest.resultTitle,
    total,
    maxScore: activeTest.maxScore,
    label: interpretation.label,
    range: interpretation.range,
    dimensions: dimensionSummary,
  };

  const history = readHistory();
  const existingIndex = history.findIndex((item) => item.id === entry.id);

  if (existingIndex >= 0) {
    history[existingIndex] = entry;
  } else {
    history.unshift(entry);
  }

  currentHistoryId = entry.id;
  selectedHistoryId = entry.id;
  writeHistory(history.slice(0, 50));
}

function renderHistory() {
  const history = readHistory();

  if (!history.length) {
    selectedHistoryId = null;
    historyList.innerHTML = `<p class="history-empty">Belum ada riwayat test. Isi nama dan usia sebelum mengerjakan test agar hasil tersimpan di sini.</p>`;
    historyDetailPanel.innerHTML = "";
    closeHistoryDetailModal();
    clearHistoryBtn.hidden = true;
    printHistoryBtn.hidden = true;
    whatsappHistoryBtn.hidden = true;
    emailHistoryBtn.hidden = true;
    shareHistoryBtn.hidden = true;
    return;
  }

  clearHistoryBtn.hidden = false;
  printHistoryBtn.hidden = false;
  whatsappHistoryBtn.hidden = false;
  emailHistoryBtn.hidden = false;
  shareHistoryBtn.hidden = false;
  if (!selectedHistoryId || !history.some((item) => item.id === selectedHistoryId)) {
    selectedHistoryId = history[0].id;
  }
  historyList.innerHTML = history.map((item) => {
    const date = new Date(item.createdAt);
    const dimensionText = item.dimensions && item.dimensions.length
      ? item.dimensions.map((dimension) => `${dimension.name}: ${dimension.mean.toFixed(2)}`).join(" | ")
      : item.range;

    return `
      <article class="history-item ${item.id === selectedHistoryId ? "active" : ""}" role="button" tabindex="0" data-history-id="${item.id}" aria-label="Lihat detail hasil ${item.participant.name}">
        <div>
          <strong>${item.participant.name}</strong>
          <span>Usia ${item.participant.age} tahun</span>
        </div>
        <div>
          <strong>${item.testTitle}</strong>
          <span>${dimensionText}</span>
          <time datetime="${item.createdAt}">${date.toLocaleString("id-ID", { dateStyle: "medium", timeStyle: "short" })}</time>
        </div>
        <div class="history-score">
          <strong>${item.total}/${item.maxScore}</strong>
          <span>${item.label}</span>
        </div>
      </article>
    `;
  }).join("");
}

function clearHistory() {
  selectedHistoryId = null;
  localStorage.removeItem(historyStorageKey);
  renderHistory();
}

function getSelectedHistoryItem() {
  const history = readHistory();
  return history.find((item) => item.id === selectedHistoryId) || null;
}

function getDominantDimension(item) {
  if (!item.dimensions || !item.dimensions.length) return null;
  return [...item.dimensions].sort((a, b) => b.mean - a.mean)[0];
}

function getHistoryInsights(item) {
  const dominant = getDominantDimension(item);
  const dominantName = dominant ? dominant.name : "skor utama";
  const highResult = /tinggi|high|classic|master|impulsive|campuran/i.test(`${item.label} ${item.range}`);
  const lowResult = /rendah|low|pro-sosial|sehat/i.test(`${item.label} ${item.range}`);

  if (item.testId === "npi") {
    if (highResult) {
      return {
        strengths: [
          "Percaya diri dan cenderung berani mengambil ruang sosial.",
          "Mampu tampil menonjol, memimpin, dan memengaruhi orang lain.",
          "Memiliki dorongan pencapaian dan pengakuan yang kuat.",
        ],
        weaknesses: [
          "Rentan terlihat dominan, sulit menerima kritik, atau terlalu membutuhkan validasi.",
          "Dapat mengabaikan sudut pandang orang lain saat ingin diakui.",
          "Berisiko menuntut perlakuan khusus dalam relasi atau kerja.",
        ],
        conclusion: "Profil NPI tinggi menunjukkan kecenderungan narsistik yang kuat pada konteks non-klinis. Ini bisa menjadi modal percaya diri, tetapi perlu diimbangi empati dan kontrol diri.",
        recommendations: [
          "Latih mendengar aktif sebelum merespons atau mengambil alih percakapan.",
          "Minta umpan balik spesifik dari orang tepercaya dan tahan dorongan membela diri terlalu cepat.",
          "Ubah kebutuhan dipuji menjadi target kontribusi yang terukur.",
        ],
      };
    }

    if (lowResult) {
      return {
        strengths: [
          "Cenderung rendah hati dan tidak haus perhatian.",
          "Lebih mudah bekerja sama tanpa kebutuhan mendominasi.",
          "Relasi sosial dapat terasa setara dan tidak kompetitif.",
        ],
        weaknesses: [
          "Bisa terlalu menahan diri atau kurang menunjukkan kemampuan.",
          "Berisiko sulit meminta pengakuan yang memang pantas.",
          "Kadang kebutuhan pribadi dapat terlalu mudah dikesampingkan.",
        ],
        conclusion: "Profil NPI rendah menunjukkan dorongan narsistik yang lemah. Ini positif untuk kerja sama, tetapi tetap perlu keberanian menampilkan diri secara sehat.",
        recommendations: [
          "Latih menyampaikan kebutuhan dan pencapaian secara faktual.",
          "Ambil peran kecil sebagai pemimpin untuk membangun rasa percaya diri.",
          "Bedakan rendah hati dari mengecilkan diri sendiri.",
        ],
      };
    }

    return {
      strengths: [
        "Kepercayaan diri relatif seimbang.",
        "Masih dapat mencari pengakuan tanpa selalu mendominasi.",
        "Cenderung mampu menyesuaikan diri dalam situasi sosial.",
      ],
      weaknesses: [
        "Subskala tertentu tetap bisa menonjol pada situasi tertentu.",
        "Saat stres, kebutuhan validasi dapat meningkat.",
        "Masih perlu menjaga keseimbangan antara percaya diri dan empati.",
      ],
      conclusion: "Profil NPI moderat berada pada rentang umum. Area yang paling penting dilihat adalah pola yang muncul berulang dalam relasi sehari-hari.",
      recommendations: [
        "Perhatikan situasi ketika ingin diakui atau menjadi pusat perhatian.",
        "Gunakan evaluasi diri mingguan untuk memantau respons terhadap kritik.",
        "Jaga kebiasaan memberi apresiasi pada orang lain.",
      ],
    };
  }

  if (item.testId === "pni") {
    return {
      strengths: [
        dominantName === "Grandiosity" ? "Memiliki dorongan tampil kuat, berprestasi, dan menjaga citra diri." : "Peka terhadap penerimaan sosial dan mampu membaca perubahan respons orang lain.",
        "Mampu mengenali area emosional yang memengaruhi harga diri.",
        "Data dimensi dapat membantu memetakan pemicu relasi secara lebih jelas.",
      ],
      weaknesses: [
        dominantName === "Vulnerability" ? "Rentan tersinggung, malu, atau merasa tidak bernilai saat dikritik." : "Rentan menjaga citra superior secara berlebihan.",
        "Harga diri bisa terlalu bergantung pada pengakuan atau kontrol situasi.",
        "Kekecewaan dapat berubah menjadi devaluasi, menarik diri, atau kemarahan.",
      ],
      conclusion: `Profil PNI menunjukkan area ${dominantName} paling menonjol. Ini bukan diagnosis, tetapi sinyal bahwa pola validasi diri dan respons terhadap kritik perlu diperhatikan.`,
      recommendations: [
        "Catat pemicu utama: kritik, diabaikan, kalah bersaing, atau tidak dihargai.",
        "Latih regulasi emosi sebelum membalas atau menarik diri.",
        "Bangun harga diri dari aktivitas bernilai, bukan hanya respons orang lain.",
        "Jika pola mengganggu relasi, konsultasi dengan profesional akan membantu.",
      ],
    };
  }

  if (item.testId === "narq") {
    const admirationHigh = item.dimensions?.find((d) => d.name === "Admiration")?.mean >= 3.5;
    const rivalryHigh = item.dimensions?.find((d) => d.name === "Rivalry")?.mean >= 3.5;
    return {
      strengths: [
        admirationHigh ? "Mampu tampil menarik, percaya diri, dan membangun kesan sosial yang kuat." : "Tidak terlalu bergantung pada kekaguman sosial.",
        !rivalryHigh ? "Relatif tidak terdorong menjatuhkan orang lain untuk menjaga harga diri." : "Memiliki energi kompetitif dan dorongan mempertahankan posisi.",
        "Profil membantu membedakan strategi promotif dan defensif dalam relasi.",
      ],
      weaknesses: [
        rivalryHigh ? "Rivalry tinggi dapat memicu konflik, devaluasi, dan defensif terhadap kritik." : "Jika Admiration rendah, dorongan tampil dan mempromosikan diri bisa kurang kuat.",
        admirationHigh && rivalryHigh ? "Dapat terlihat memikat saat aman, tetapi menyerang saat ego terusik." : "Ketidakseimbangan Admiration/Rivalry dapat memengaruhi stabilitas hubungan.",
        "Perbandingan sosial berlebihan dapat menguras energi dan mengganggu empati.",
      ],
      conclusion: `Profil NARQ ini berada pada pola ${item.label}. Kombinasi Admiration dan Rivalry memberi gambaran cara menjaga citra diri saat mencari status sosial.`,
      recommendations: [
        "Saat merasa tersaingi, tunda respons dan periksa apakah ancamannya nyata.",
        "Gunakan pesona sosial untuk membangun koneksi, bukan sekadar validasi.",
        "Latih memberi kredit pada orang lain ketika mereka berhasil.",
      ],
    };
  }

  if (item.testId === "sd3") {
    return {
      strengths: [
        dominantName === "Narsisme" ? "Percaya diri dan berani menampilkan kemampuan." : "Memiliki kesadaran strategi sosial pada situasi kompetitif.",
        dominantName === "Machiavellianisme" ? "Mampu membaca kepentingan dan merencanakan langkah secara taktis." : "Dapat mengenali sisi kompetitif atau impulsif yang perlu dikendalikan.",
        "Profil memisahkan tiga kecenderungan gelap sehingga area risiko lebih jelas.",
      ],
      weaknesses: [
        dominantName === "Psikopati" ? "Risiko impulsivitas, empati rendah, dan keputusan berbahaya lebih perlu diawasi." : "Ada potensi memprioritaskan kepentingan diri saat situasi menekan.",
        dominantName === "Machiavellianisme" ? "Strategi sosial dapat berubah menjadi manipulasi dan merusak kepercayaan." : "Jika tidak dikontrol, sifat gelap dapat mengganggu relasi profesional maupun personal.",
        "Pembenaran diri dapat membuat dampak pada orang lain terabaikan.",
      ],
      conclusion: `Profil Dark Triad ini menunjukkan ${item.label}. Dimensi paling menonjol adalah ${dominantName}, sehingga area itulah yang paling penting dipantau.`,
      recommendations: [
        "Gunakan aturan keputusan: apakah tindakan ini jujur, aman, dan tidak mengeksploitasi orang lain?",
        "Minta orang tepercaya memberi sinyal saat perilaku mulai manipulatif, dominan, atau dingin.",
        "Hindari mengambil keputusan besar saat marah, bosan, atau ingin menang cepat.",
        "Jika ada dorongan merugikan orang lain, cari bantuan profesional.",
      ],
    };
  }

  return {
    strengths: ["Memiliki data refleksi diri yang dapat dijadikan bahan evaluasi."],
    weaknesses: ["Hasil perlu dibaca hati-hati karena tes ini bukan diagnosis."],
    conclusion: "Gunakan hasil sebagai peta refleksi perilaku dan relasi.",
    recommendations: ["Diskusikan dengan profesional bila hasil terasa mengganggu kehidupan sehari-hari."],
  };
}

function renderInsightList(items) {
  return `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function formatHistoryItemText(item) {
  const date = new Date(item.createdAt).toLocaleString("id-ID", { dateStyle: "medium", timeStyle: "short" });
  const dimensions = item.dimensions && item.dimensions.length
    ? `\nDimensi:\n${item.dimensions.map((dimension) => `- ${dimension.name}: ${dimension.mean.toFixed(2)}`).join("\n")}`
    : "";
  const insights = getHistoryInsights(item);

  return `Detail Hasil Test Aku Narsis?
Nama: ${item.participant.name}
Usia: ${item.participant.age} tahun
Test: ${item.testTitle}
Tanggal: ${date}
Skor: ${item.total}/${item.maxScore}
Hasil: ${item.label}
Rentang/Profile: ${item.range}${dimensions}

Kelebihan:
${insights.strengths.map((text) => `- ${text}`).join("\n")}

Kelemahan/Risiko:
${insights.weaknesses.map((text) => `- ${text}`).join("\n")}

Kesimpulan:
${insights.conclusion}

Cara Mengatasinya:
${insights.recommendations.map((text) => `- ${text}`).join("\n")}`;
}

function renderHistoryDetail() {
  const item = getSelectedHistoryItem();

  if (!item) {
    historyDetailPanel.innerHTML = "";
    return;
  }

  const date = new Date(item.createdAt).toLocaleString("id-ID", { dateStyle: "full", timeStyle: "short" });
  const dimensions = item.dimensions && item.dimensions.length
    ? item.dimensions.map((dimension) => `
        <div class="detail-metric">
          <span>${dimension.name}</span>
          <strong>${dimension.mean.toFixed(2)}</strong>
        </div>
      `).join("")
    : `<div class="detail-metric"><span>Rentang</span><strong>${item.range}</strong></div>`;
  const insights = getHistoryInsights(item);

  historyDetailPanel.innerHTML = `
    <div class="history-detail-heading">
      <div>
        <p class="eyebrow">Detail hasil</p>
        <h3>${item.participant.name}</h3>
        <p>${item.testTitle} | ${date}</p>
      </div>
      <div class="history-detail-score">
        <span>Skor</span>
        <strong>${item.total}/${item.maxScore}</strong>
      </div>
    </div>
    <div class="history-detail-grid">
      <div class="detail-metric"><span>Usia</span><strong>${item.participant.age} tahun</strong></div>
      <div class="detail-metric"><span>Hasil</span><strong>${item.label}</strong></div>
      ${dimensions}
    </div>
    <div class="history-insight-grid">
      <article class="history-insight-card">
        <h4>Kelebihan</h4>
        ${renderInsightList(insights.strengths)}
      </article>
      <article class="history-insight-card">
        <h4>Kelemahan / Risiko</h4>
        ${renderInsightList(insights.weaknesses)}
      </article>
      <article class="history-insight-card wide">
        <h4>Kesimpulan</h4>
        <p>${insights.conclusion}</p>
      </article>
      <article class="history-insight-card wide">
        <h4>Cara Mengatasinya</h4>
        ${renderInsightList(insights.recommendations)}
      </article>
    </div>
    <p class="history-detail-note">Gunakan tombol Print/PDF, WhatsApp, Email, atau Bluetooth/Lainnya di atas untuk membagikan detail hasil yang sedang dipilih ini.</p>
  `;
}

function openHistoryDetailModal() {
  historyDetailModal.hidden = false;
  document.body.classList.add("has-open-modal");
}

function closeHistoryDetailModal() {
  historyDetailModal.hidden = true;
  document.body.classList.remove("has-open-modal");
}

function selectHistoryItem(id, openModal = true) {
  selectedHistoryId = id;
  renderHistory();
  renderHistoryDetail();
  if (openModal) openHistoryDetailModal();
}

function formatHistoryText(forceAll = false) {
  const selected = getSelectedHistoryItem();
  if (selected && !forceAll) return formatHistoryItemText(selected);

  const history = readHistory();
  if (!history.length) return "Riwayat Test Aku Narsis? masih kosong.";

  const rows = history.map((item, index) => {
    const date = new Date(item.createdAt).toLocaleString("id-ID", { dateStyle: "medium", timeStyle: "short" });
    const dimensions = item.dimensions && item.dimensions.length
      ? `\n   Dimensi: ${item.dimensions.map((dimension) => `${dimension.name} ${dimension.mean.toFixed(2)}`).join(", ")}`
      : "";

    return `${index + 1}. ${item.participant.name} (${item.participant.age} th) - ${item.testTitle}
   Tanggal: ${date}
   Skor: ${item.total}/${item.maxScore}
   Hasil: ${item.label} (${item.range})${dimensions}`;
  });

  return `Riwayat Test Aku Narsis?\nTotal data: ${history.length}\n\n${rows.join("\n\n")}`;
}

function printHistory() {
  if (getSelectedHistoryItem()) {
    renderHistoryDetail();
  }
  document.body.classList.add("printing-history");
  document.body.classList.toggle("printing-history-detail", Boolean(getSelectedHistoryItem()));
  window.print();
}

function shareToWhatsApp() {
  const text = encodeURIComponent(formatHistoryText());
  window.open(`https://wa.me/?text=${text}`, "_blank", "noopener");
}

function shareToEmail() {
  const subject = encodeURIComponent("Riwayat Test Aku Narsis?");
  const body = encodeURIComponent(formatHistoryText());
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
}

async function shareToSystem() {
  const text = formatHistoryText();

  if (navigator.share) {
    await navigator.share({
      title: "Riwayat Test Aku Narsis?",
      text,
    });
    return;
  }

  if (navigator.clipboard) {
    await navigator.clipboard.writeText(text);
    alert("Riwayat disalin ke clipboard. Anda bisa tempel ke Bluetooth, chat, email, atau aplikasi lain.");
    return;
  }

  alert("Perangkat ini belum mendukung share otomatis. Gunakan tombol Print/PDF, WhatsApp, atau Email.");
}

function renderResults() {
  const answers = getAnswers();
  const missing = answers.findIndex((answer) => answer === null);

  if (!currentParticipant) {
    missingText.textContent = "Isi nama dan usia terlebih dahulu sebelum melihat hasil.";
    testView.classList.add("requires-participant");
    participantName.focus();
    return;
  }

  if (missing >= 0) {
    missingText.textContent = `Lengkapi nomor ${missing + 1} terlebih dahulu.`;
    form.querySelectorAll(".question-card")[missing].scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }

  const { total, scaleScores, scaleMax, dimensionScores, dimensionMax } = scoreAnswers(answers);
  const interpretation = getInterpretation(total, { scaleScores, scaleMax, dimensionScores, dimensionMax });
  scoreValue.textContent = total;
  scoreLabel.textContent = interpretation.label;
  scoreDescription.textContent = interpretation.desc;
  scoreLevelTag.textContent = interpretation.range;
  scoreMeter.style.width = `${(total / activeTest.maxScore) * 100}%`;
  scoreRange.textContent = `${interpretation.range}. Skor dihitung dari seluruh jawaban pada ${activeTest.questions.length} item.`;
  profileNarrative.textContent = interpretation.narrative;
  guidanceList.innerHTML = interpretation.guidance.map((item) => `<li>${item}</li>`).join("");
  renderSummary(total, scaleScores, scaleMax);
  renderDimensions(dimensionScores, dimensionMax);
  renderScales(scaleScores, scaleMax);
  renderBenchmarks();
  saveResultToHistory(total, interpretation, { scaleScores, scaleMax, dimensionScores, dimensionMax });
  resultPanel.hidden = false;
  resultPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function resetResultOnly() {
  form.reset();
  resultPanel.hidden = true;
  scaleGrid.innerHTML = "";
  resultSummaryGrid.innerHTML = "";
  guidanceList.innerHTML = "";
  dimensionGrid.innerHTML = "";
  dimensionSection.hidden = true;
  scoreMeter.style.width = "0";
  missingText.textContent = "";
}

function resetTest() {
  resetResultOnly();
  updateProgress();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("click", (event) => {
  const startButton = event.target.closest("[data-start-test]");
  if (startButton) startTest(startButton.dataset.startTest);
  const historyItem = event.target.closest("[data-history-id]");
  if (historyItem) selectHistoryItem(historyItem.dataset.historyId);
  if (event.target.closest("[data-close-history-detail]")) closeHistoryDetailModal();
  const settingsButton = event.target.closest("[data-open-settings]");
  if (settingsButton) showSettings("general");
  const settingsTab = event.target.closest("[data-settings-tab]");
  if (settingsTab) switchSettingsTab(settingsTab.dataset.settingsTab);
  const removeAccessButton = event.target.closest("[data-remove-access]");
  if (removeAccessButton) {
    const users = readAccessUsers().filter((user) => user.id !== removeAccessButton.dataset.removeAccess);
    writeAccessUsers(users);
    renderAccessUsers();
  }
  if (event.target.closest("[data-go-home]")) showHome();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !historyDetailModal.hidden) {
    closeHistoryDetailModal();
    return;
  }

  const historyItem = event.target.closest?.("[data-history-id]");
  if (!historyItem) return;
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    selectHistoryItem(historyItem.dataset.historyId);
  }
});

form.addEventListener("change", updateProgress);
participantForm.addEventListener("submit", beginParticipantSession);
settingLanguage.addEventListener("change", () => updateAppSettings((settings) => { settings.language = settingLanguage.value; }));
settingFont.addEventListener("change", () => updateAppSettings((settings) => { settings.font = settingFont.value; }));
settingFontSize.addEventListener("input", () => updateAppSettings((settings) => { settings.fontSize = Number(settingFontSize.value); }));
settingUserName.addEventListener("input", () => updateAppSettings((settings) => { settings.userName = settingUserName.value; }));
themeAccent.addEventListener("input", () => updateAppSettings((settings) => { settings.theme.accent = themeAccent.value; }));
themeRose.addEventListener("input", () => updateAppSettings((settings) => { settings.theme.rose = themeRose.value; }));
themeMint.addEventListener("input", () => updateAppSettings((settings) => { settings.theme.mint = themeMint.value; }));
themeBlue.addEventListener("input", () => updateAppSettings((settings) => { settings.theme.blue = themeBlue.value; }));
themeGold.addEventListener("input", () => updateAppSettings((settings) => { settings.theme.gold = themeGold.value; }));
resetThemeBtn.addEventListener("click", () => updateAppSettings((settings) => { settings.theme = { ...defaultAppSettings.theme }; }));
accessForm.addEventListener("submit", addAccessUser);
scoreBtn.addEventListener("click", renderResults);
resetBtn.addEventListener("click", resetTest);
clearHistoryBtn.addEventListener("click", clearHistory);
seedHistoryBtn.addEventListener("click", seedSampleHistory);
printHistoryBtn.addEventListener("click", printHistory);
whatsappHistoryBtn.addEventListener("click", shareToWhatsApp);
emailHistoryBtn.addEventListener("click", shareToEmail);
shareHistoryBtn.addEventListener("click", () => {
  shareToSystem().catch(() => {
    alert("Share dibatalkan atau tidak tersedia di perangkat ini.");
  });
});
modalPrintHistoryBtn.addEventListener("click", printHistory);
modalWhatsappHistoryBtn.addEventListener("click", shareToWhatsApp);
modalEmailHistoryBtn.addEventListener("click", shareToEmail);
modalShareHistoryBtn.addEventListener("click", () => {
  shareToSystem().catch(() => {
    alert("Share dibatalkan atau tidak tersedia di perangkat ini.");
  });
});
window.addEventListener("afterprint", () => {
  document.body.classList.remove("printing-history");
  document.body.classList.remove("printing-history-detail");
});
applyAppSettings();
showHome();
