export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  category: string;
  author: string;
  authorRole: string;
  inspiredBy: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
  image: string;
  imageSource: string;
  personSource: string;
};

export const posts: BlogPost[] = [
  {
    id: 1,
    slug: "kompost-cesitleri",
    title: "Kompost Çeşitleri: Atıktan Yaşayan Toprağa",
    category: "Toprak",
    author: "Serender Editörleri",
    authorRole: "Ekolojik Yaşam İçerikleri",
    inspiredBy: "Sir Albert Howard / An Agricultural Testament (1940)",
    date: "2026-04-25",
    readTime: "5 dk",
    excerpt:
      "Kompost yalnızca atıkları değerlendirmek değil; toprağı yeniden canlı, besleyici ve dirençli kılan bir dönüşüm pratiğidir.",
    content:
      "Kompost, organik atıkların milyarlarca mikroorganizma tarafından parçalanarak koyu, mis kokulu, canlı bir toprağa dönüştüğü doğal bir süreçtir. Modern organik tarımın kurucusu kabul edilen İngiliz botanikçi Sir Albert Howard, 1905-1924 yılları arasında Hindistan'da görev yaparken yerel köylülerin geleneksel kompostlama tekniklerini gözlemledi ve bilime kazandırdı. 1940'ta yayımlanan An Agricultural Testament kitabı, sentetik gübrelerin yükselişe geçtiği bir dönemde organik tarımın bilimsel temellerini attı. Ona göre toprağın, bitkinin, hayvanın ve insanın sağlığı tek ve bölünmez bir bütündü.\n\nHoward'ın geliştirdiği Indore yöntemi, bitki ve hayvan atıklarını yaklaşık 30:1 karbon-azot oranıyla katmanlayarak yapılan klasik sıcak kompost tekniğinin temelini oluşturur. Sıcak kompost ayrışma sırasında 55-65°C'ye ulaşır, üç ile altı ay içinde olgunlaşır. Yüksek sıcaklık yabani ot tohumlarını ve patojenleri öldürdüğü için profesyonel üreticilerin tercihidir; düzenli havalandırma ve nem kontrolü gerektirir.\n\nSoğuk kompost ise sabırlı bahçıvanların yöntemidir. Müdahalesiz bırakılan bir yığın altı ay ile iki yıl arasında olgunlaşır. Karıştırma ve sıcaklık takibi gerekmez; atığı bir köşeye atıp beklemek yeterlidir.\n\nVermikompost, başta Eisenia fetida (kırmızı kaliforniya solucanı) olmak üzere toprak solucanlarının organik atığı sindirmesi ile elde edilir. Solucan dışkısı klasik komposttan beş ila on kat daha besleyicidir; bitki büyümesini hızlandıran enzimler, hormonlar ve faydalı bakteriler içerir. Apartman dairesinde bile kapalı kasalarla yapılabilir; kokmaz, mutfak atıklarını birkaç hafta içinde dönüştürür.\n\nBokashi, 1980'lerde Japon Profesör Teruo Higa'nın geliştirdiği Etkili Mikroorganizmalar (EM) tekniğine dayanır. Hava almayan kapalı bir kovada, kepek ile karıştırılmış faydalı mikrop kültürleri kullanılarak mutfak atıkları (et ve süt ürünleri dahil) iki hafta içinde fermente edilir. Toprağa gömüldüğünde birkaç haftada gerçek humusa dönüşür; şehir hayatı için en pratik çözümdür.\n\nYaprak çürüğü ise sonbahar yapraklarının bir veya iki yıl gevşek bir tel kafeste bırakılmasıyla oluşan, mantarların hâkim olduğu özel bir kompost türüdür. Besin değeri düşüktür ama su tutma kapasitesi olağanüstü yüksektir; tohum yatakları ve nemli toprak isteyen bitkiler için ideal malçtır.\n\nHangi yöntemi seçeceğiniz yaşam alanınıza, atık miktarınıza ve sabrınıza bağlıdır. Apartmanda bokashi ya da kapalı vermikompost; bahçeli evde sıcak kompost; köyde klasik Indore yöntemi en mantıklı tercihtir. Önemli olan başlamak — mutfaktan çıkan her organik atığın çöpe değil toprağa dönmesini sağlamaktır. Howard'ın seksen yıl önce gösterdiği gibi: organik madde toprağa girer, yaşam olarak geri döner.",
    image: "/blog/kompost.webp",
    imageSource: "https://unsplash.com/s/photos/compost",
    personSource: "https://en.wikipedia.org/wiki/Albert_Howard",
  },
  {
    id: 2,
    slug: "agrohomeopati-zehirsiz-tarim",
    title: "Agrohomeopati: Zehirsiz Tarım İçin Alternatif Bir Bakış",
    category: "Zehirsiz Tarım",
    author: "Serender Editörleri",
    authorRole: "Ekolojik Yaşam İçerikleri",
    inspiredBy: "Vaikunthanath Das Kaviraj / Homeopathy for Farm and Garden",
    date: "2026-04-25",
    readTime: "6 dk",
    excerpt:
      "Bir homeopat, hasta bir elma ağacına Belladonna verdi. Sonuç, bitkilerin görünmez ilacının doğuşu oldu.",
    content:
      "1986 yazında, Hollandalı homeopat Vaikunthanath Das Kaviraj İsviçre'de bir aileyi ziyaret ediyordu. Bahçedeki elma ağacının kabuğu kızıl renkli halkalarla kaplanmış, pas hastalığına yakalanmıştı. Kaviraj, ağacın belirtilerine bir insan hastasına bakar gibi baktı: kızarıklık, susuzluk. Klasik homeopatide bu semptomlara karşılık gelen ilaç Belladonna idi. Birkaç gün sonra hastalık geriledi; ertesi yıl elmalar her zamankinden lezzetliydi. Agrohomeopati doğmuştu.\n\nKaviraj'ın keşfettiği fikir tamamen yeni değildi. Homeopatinin kurucusu Samuel Hahnemann'ın damadı Baron von Boenninghausen, neredeyse iki yüz yıl önce saksılara döktüğü artık ilaçların bitkileri etkilediğini fark etmişti. Charles Darwin de potansiyalize edilmiş çözeltilerin bitki büyümesi üzerindeki etkilerini deneylerinde belgelemişti. Ancak Kaviraj bunu sistematik bir tedavi pratiğine dönüştüren ilk kişi oldu. Sonraki on iki yıl boyunca yaklaşık yetmiş farklı homeopatik ilacın bitki hastalıklarındaki etkisini test etti ve 2006'da Homeopathy for Farm and Garden adlı kitabını yayımladı.\n\nAgrohomeopati, klasik homeopatinin iki temel ilkesini bitkilere uygular: 'benzeri benzerle iyileştir' (similia similibus curantur) ilkesi ve aşırı seyreltme yoluyla potansiyalizasyon. Bir bitki belirtilerini, sanki bitki bir hasta gibiymiş gibi gözlemlersiniz — yaprakların rengi ve şekli, hastalığın ortaya çıkış zamanı, susama veya nem ihtiyacı. Sonra bu belirtilerle eşleşen homeopatik ilacı çok düşük dozda (genellikle 6CH veya 30CH potansiyellerinde) sulama suyuna katarsınız.\n\nKaviraj'ın belgelediği önemli keşifler arasında salyangoz ve sümüklü böceklerle mücadelede etkili olan Helix tosta, toprağın su ve besin tutma kapasitesini artıran Silicea, repolama hasarı için Calendula, kök çürüklüğü için Calcium phosphoricum yer alır.\n\nAgrohomeopati ana akım bilim dünyasında — homeopatinin kendisi gibi — tartışmalıdır. Aşırı seyreltilmiş çözeltilerin nasıl etki ettiği henüz net olarak açıklanmış değildir. Ancak Hindistan, Almanya, Brezilya ve İtalya'daki tarım üniversitelerinde son yıllarda yapılan kontrollü deneyler, belirli bitki-ilaç eşleşmelerinde anlamlı sonuçlar elde edildiğini raporluyor.\n\nKonvansiyonel tarımın bedeli ağırdır: yer altı sularına karışan azot-fosfor-potasyum bileşikleri, bal arılarını öldüren neonikotinoid pestisitler, toprağı çoraklaştıran herbisitler. Agrohomeopati ister tek başına bir alternatif, ister organik tarım sistemine ek bir araç olarak görülsün, ortak bir varsayıma dayanır: bitki hastalıkları semptomdur, sebep değil. Sebep dengesiz toprak ve zayıflamış bağışıklıktır. Hastayı zehirleyerek değil, dirençlendirerek iyileştirmek mümkündür.\n\nAvrupa Birliği'nin pestisit kullanımını 2030'a kadar yarıya indirme hedefi çerçevesinde agrohomeopati Türkiye'de de giderek daha fazla ilgi görmektedir. Zehirsiz tarımın araçlarını çoğaltmak, geleceğin tarımının temel taşlarından biri olabilir.",
    image: "/blog/agrohomeopati.webp",
    imageSource: "https://unsplash.com/s/photos/healthy-plants",
    personSource: "https://homeopathyplus.com/from-hippy-to-homeopath-the-story-of-vaikunthanath-das-kaviraj/",
  },
  {
    id: 3,
    slug: "okul-bahceleri-projeleri",
    title: "Okul Bahçeleri: Çocuklar İçin Yaşayan Öğrenme Alanları",
    category: "Eğitim",
    author: "Serender Editörleri",
    authorRole: "Ekolojik Yaşam İçerikleri",
    inspiredBy: "Alice Waters / The Edible Schoolyard Project (1995)",
    date: "2026-04-25",
    readTime: "5 dk",
    excerpt:
      "1995'te Berkeley'de bir terk edilmiş arsadan dünyaya yayılan bir hareket: çocukların yiyeceklerini kendi ekip biçtiği eğitim modeli.",
    content:
      "1994'te Berkeley'li ünlü şef Alice Waters, Chez Panisse restoranının yakınında bulunan Martin Luther King Jr. Ortaokulu'nun önünden geçerken okulun bakımsız halini fark etti. Bunu bir gazeteciye söyledi. Birkaç gün sonra okul müdürü Neil Smith aradı: 'Burada bir şeyler yapmak istiyorum, bana yardım edebilir misiniz?' İki yıl sonra terk edilmiş bir dönümlük arsa, Edible Schoolyard — Yenilebilir Okul Bahçesi — adıyla dünyanın ilk modeli haline gelmişti.\n\nWaters'ın vizyonu basit ama radikaldi: çocuklar yiyeceklerini kendi ekip biçer, hasat eder, pişirir ve birlikte sofrada paylaşırlarsa hem bedenleri hem de zihinleri beslenir. Üstelik bu süreç matematik, fen, tarih ve dil derslerinin somutlaşmasını sağlar. Geleneksel sınıf, doğal bir laboratuvara dönüşür. Waters bu yaklaşıma 'edible education' (yenilebilir eğitim) adını verdi: çocuklar bedenen ve zihnen beslenmeyi, onurlu davranılmayı ve değerli olduklarını görmeyi hak ederler.\n\nWaters'ın ilham kaynağı, Londra'daki Uluslararası Montessori Okulu'nda aldığı eğitimdi. Maria Montessori bir asır önce şöyle yazıyordu: çocuk, ektiği bitkilerin yaşamının kendi su verme özenine bağlı olduğunu anladığında dikkatli olur, sanki hayatta bir görevi olduğunu hissetmeye başlayan biri gibi. Bahçedeki gözlem ve sorumluluk, çocukta doğayla psikolojik bir bağ kurar.\n\n1997'de ilk hasadın alındığı Berkeley bahçesi, bir hareketin başlangıcı oldu. Edible Schoolyard Network bugün dünya çapında 6.200'den fazla okul bahçesi programını birbirine bağlıyor. Curriculum'ları (öğretim materyalleri) ücretsiz olarak çevrimiçi paylaşılıyor.\n\nBahçede çalışan çocuklar tohumun çimlenmesini izleyerek biyolojinin temel kavramlarını içselleştirirler. Tarladan mutfağa giden yolda ölçü birimleri, oranlar ve hesaplar matematiği elle tutulur kılar. Pesto, ekmek ya da turşu yaparken kimya yaşanır. Tarihçilerin yıllardır anlattığı tarım devrimleri, üç ay süren bir buğday yetiştirme projesinde gerçek olur.\n\nBahçe, sınıfta nadiren ortaya çıkan davranışları da besler: sabır, sorumluluk, ekip çalışması, beklemeyi öğrenme. Bir tohumun çimlenmesi haftalar sürer; sabır bilinçli bir disipline dönüşür. Ürün kötü çıktığında neden ararsınız — ekolojik düşünce gelişir. Hasadı paylaşırken topluluk hissi oluşur.\n\nTürkiye'de okul bahçesi geleneği yeni değildir; Cumhuriyet'in ilk yıllarındaki köy enstitülerinde tarım derslerin merkezindeydi. Bu mirasın yeniden hayata geçirilmesi için sistematik destek gerekir: öğretmen eğitimi, müfredata entegrasyon, sürdürülebilir altyapı. Bir okul bahçesi yalnızca bir parsel toprak değildir — bir kuşağın doğayla ilişkisini yeniden kuran, sınıfın duvarlarını aşan bir pedagojidir.",
    image: "/blog/okul-bahceleri.webp",
    imageSource: "https://unsplash.com/s/photos/school-garden",
    personSource: "https://edibleschoolyard.org/about-us",
  },
  {
    id: 4,
    slug: "tohum",
    title: "Tohum: Geleceğin Hafızası",
    category: "Biyoçeşitlilik",
    author: "Serender Editörleri",
    authorRole: "Ekolojik Yaşam İçerikleri",
    inspiredBy: "Vandana Shiva / Navdanya",
    date: "2026-04-25",
    readTime: "6 dk",
    excerpt:
      "Vandana Shiva'nın tohum hareketinden Anadolu'nun yerel buğday çeşitlerine — tohum koruma neden bir özgürlük meselesidir?",
    content:
      "Bir tohum, içinde bir orman taşır. Geçmiş binlerce yılın iklim değişimlerine, kuraklıklarına, hastalıklarına dair kayıtları içerir. Onu eken çiftçinin ne yetiştireceğini, soframızda ne olacağını, dolayısıyla bir kültürün ne yiyeceğini belirler. Tohum, biyolojinin yanı sıra siyasi bir nesnedir — çünkü tohumu kontrol eden, gıdayı kontrol eder.\n\nHindistanlı fizikçi ve aktivist Vandana Shiva bu gerçeği fark ettiğinde 1980'lerin sonuydu. 1991'de kurduğu Navdanya hareketi — Sanskritçe 'dokuz tohum' anlamına gelir — Hindistan'ın 22 eyaletinde 150'den fazla topluluk tohum bankası kurdu, iki milyondan fazla çiftçinin organik tarıma geçişine destek oldu. Shiva, çiftçilerin atalardan kalma yerel tohumları saklama, değiş tokuş etme ve yeniden ekme hakkını savunmak için 1993'te Right Livelihood Award'ı (Alternatif Nobel) aldı.\n\nYirminci yüzyılın ikinci yarısında ortaya çıkan F1 hibrit tohumlar ve genetiği değiştirilmiş organizmalar (GDO), tarımın endüstriyelleşmesinin temelini attı. Bu tohumlar genellikle yüksek verimli ama tek yıllıktır — ertesi yıl ektiğinizde ya verim alamazsınız ya da bambaşka, beklediğinizden farklı bir bitki çıkar. Bu, çiftçiyi her sezon tohum almaya, yani şirketlere bağımlı olmaya zorlar. Üstelik bu tohumların çoğu patentlidir; saklamak yasal olarak yasaklanmıştır.\n\nAtalık (heirloom) tohumlar ise açık tozlaşan, yıllarca seçilerek geliştirilmiş, yerel iklime ve toprağa adapte olmuş çeşitlerdir. Bu yıl ektiğinizden topladığınız tohumu gelecek yıl ektiğinizde aynı bitki büyür. Bir bölgedeki yüz yıllık atalık domates çeşidi, o bölgenin sıcaklığına, yağışına, hatta toprağındaki mikroorganizmalarına uyum sağlamıştır; sentetik gübreye ve pestiside daha az ihtiyaç duyar. FAO verilerine göre 20. yüzyıl boyunca dünyada kültürü yapılan bitki çeşitlerinin %75'i kaybedilmiştir.\n\nTürkiye, Anadolu'nun konumu nedeniyle dünyanın en zengin tohum genetik kaynaklarına sahip ülkelerden biridir. Buğday, mercimek, nohut ve birçok meyve türü için bir gen merkezidir. Karakılçık buğdayı, siyez, kavılca, çakal nohutu, alaca fasulyeleri — hepsi binlerce yılda Anadolu çiftçileri tarafından geliştirilmiş yerel hazinelerdir. Türkiye Tohum Gen Bankası ve gönüllü tohum takas şenlikleri bu mirası canlı tutmaya çalışıyor. Ama gerçek koruma müzelerde değil, çiftçinin tarlasında olur.\n\nTopluluk tohum bankası fikri basittir: her köyde, her mahallede, hatta her balkonda tohum biriktirilir, paylaşılır, denenir. Birisi domateslerini kayıt altına alır, başka biri kabaklarını. Yıllık takas şenliklerinde herkesin elinde bulduğu çoğaltılır. Bu, hem genetik çeşitliliği koruyan hem de toplulukları birbirine bağlayan canlı bir arşivdir.\n\nDomates, biber, fasulye, marul gibi bitkiler ev bahçecileri için en kolay başlangıçtır. Olgunlaşmış meyveden tohum alınır, temiz suyla yıkanır, kâğıt havlu üzerinde tamamen kurutulur ve kâğıt zarflarda — plastikte değil — serin, kuru, karanlık bir yerde saklanır. İyi saklanan domates tohumu beş ila altı yıl, fasulye tohumu üç yıl çimlenebilir. Her tohum, bir geleceğin saklı kayıtçısıdır.",
    image: "/blog/tohum.webp",
    imageSource: "https://unsplash.com/s/photos/seeds",
    personSource: "https://www.navdanya.org/",
  },
  {
    id: 5,
    slug: "topragin-surulmemesi",
    title: "Toprağı Sürmemek: Mikroorganizmaların Sessiz Şehri",
    category: "Toprak Sağlığı",
    author: "Serender Editörleri",
    authorRole: "Ekolojik Yaşam İçerikleri",
    inspiredBy: "Masanobu Fukuoka / The One-Straw Revolution (1975)",
    date: "2026-04-25",
    readTime: "7 dk",
    excerpt:
      "Masanobu Fukuoka'nın 'do-nothing' felsefesinden modern bilime — toprağı sürmek neden büyük bir yanlış olabilir?",
    content:
      "Bir avuç sağlıklı toprakta, dünyadaki insan nüfusundan daha fazla canlı vardır. Bakteriler, mantarlar, protozoalar, nematodlar, solucanlar, mantar miselyumları — her biri toprakta belirli bir görevi yerine getiren milyarlarca organizmadan oluşan görünmez bir şehir. Geleneksel tarımın en temel pratiği olan toprağı sürmek (tilling), bu şehri her ilkbaharda sistematik olarak yıkar.\n\nBu fikri en radikal şekilde dile getiren kişi Japon mikrobiyolog ve çiftçi Masanobu Fukuoka idi. 1937'de 25 yaşındayken yaşadığı bir aydınlanma anının ardından bilimsel kariyerini bırakıp ailesinin Shikoku adasındaki çiftliğine döndü. Otuz beş yıl boyunca dört temel ilkeye dayanan bir yöntem geliştirdi: toprağı sürmemek, kimyasal gübre ve hazır kompost kullanmamak, çapayla veya herbisitle ot ayıklamamak, kimyasal ilaca bağımlı olmamak. 1975'te yayımladığı The One-Straw Revolution (Bir Saman Devrimi) kitabı, doğal tarım hareketinin İncil'i kabul edilir.\n\nFukuoka'nın gözlemi netti: doğa kendi haline bırakılırsa verimlilik artar; bitki ve hayvan kalıntıları yüzeyde birikir, bakteri ve mantarlar tarafından ayrıştırılır. Sağlıklı bir toprak, bir bütün halinde dokunmuş bir organdır. Üst tabakada organik madde yavaşça humusa dönüşür. Daha derinde mantar miselyumları, kilometrelerce uzunluğa ulaşan ipliksi ağlarla bitki köklerini birbirine bağlar. Bu sembiyotik ortaklık — mikoriza — bitkilerin su ve fosfor emilimini katlar.\n\nPulluk veya çapa toprağı dönderdiğinde dört şey olur. Birincisi, mantar ağları fiziksel olarak kopar — bitki ile toprak arasındaki iletişim kesilir. İkincisi, üstte hapsolmuş karbon oksijenle temas edip CO2 olarak atmosfere salınır; bilim insanları endüstriyel tarımın küresel karbon emisyonlarına katkısının önemli bir kısmının buradan geldiğini hesaplıyor. Üçüncüsü, derinde gömülü yabani ot tohumları yüzeye çıkar ve filizlenir — yani sürmek otları azaltmaz, geri çağırır. Dördüncüsü, üst toprak rüzgâr ve yağmurla birlikte erozyona uğrar.\n\nFukuoka, çeltik tarlasının üzerine kışlık arpa, arpanın üzerine yazlık çeltik ekti — toprağı hiç sürmeden. Hasattan sonra sapları olduğu gibi tarlaya bıraktı; bu doğal malç hem yabani otları bastırdı hem de toprağa karbon kazandırdı. Yonca gibi azot bağlayıcı bitkileri 'yeşil gübre' olarak kullandı. Tohumlarını ise kil topakları içine yerleştirip serpti. Otuz yıl sonra Fukuoka'nın çiftliği bölgenin en verimli tarlasıydı; toprağı her geçen yıl daha zengindi.\n\nSon yirmi yılda toprak biyolojisi devasa bir bilim dalına dönüştü. Toprak mikrobiyomu üzerine yapılan çalışmalar, bir kaşık humuslu toprakta beş bin ile elli bin farklı bakteri ve mantar türünün yaşadığını gösteriyor. Cover crop (örtü bitkisi), no-till (sürmesiz tarım) ve rejeneratif tarım terimleri artık ana akım tarım dergilerinde yer alıyor. Kuzey Dakota'lı çiftçi Gabe Brown gibi modern uygulayıcılar, Fukuoka'nın ilkelerini büyük ölçekli tarıma uyarlayarak çorak topraklarını birkaç yıl içinde verimli hale getirdi.\n\nSebze bahçesinde sürmesiz tarımın temel adımları şudur: toprağı her zaman örtülü tutmak (mulch, malç), bir hasattan diğerine geçişte örtü bitkisi ekmek (yonca, fiğ, çavdar), tek yıllıkları rotasyonla yetiştirmek, yabani otları kökünden değil yüzeyden temizlemek, kompostu sermek ama karıştırmamak — bırakıp solucanların gömmesini beklemek. Bu yaklaşım ilk yıllarda biraz daha sabır ister; ama üçüncü yıldan itibaren toprağın kendini onardığını gözle görebilirsiniz.",
    image: "/blog/toprak.webp",
    imageSource: "https://unsplash.com/s/photos/healthy-soil",
    personSource: "https://en.wikipedia.org/wiki/Masanobu_Fukuoka",
  },
  {
    id: 6,
    slug: "yagmur-hasati",
    title: "Yağmur Hasadı: Suyu Kaybetmeden Yaşamak",
    category: "Su Yönetimi",
    author: "Serender Editörleri",
    authorRole: "Ekolojik Yaşam İçerikleri",
    inspiredBy: "Brad Lancaster / Rainwater Harvesting for Drylands",
    date: "2026-04-25",
    readTime: "5 dk",
    excerpt:
      "Tucson'da yıllık 280 mm yağışla yaşayan bir adam, çatısından akan her damlayı topluyor. Yağmur hasadının dünya çapındaki ustasından dersler.",
    content:
      "Brad Lancaster, Arizona'nın Tucson şehrinde 1/8 dönümlük bir arsada yaşıyor. Tucson'a yıllık ortalama 280 milimetre yağmur düşer — Türkiye'nin pek çok bölgesinden daha az. Ama Lancaster bu küçük arsadan yılda 380 ton yağmur suyu hasat ediyor. Çatılardan, kaldırımlardan, hatta sokaktan akan her damlayı toprağa yönlendirip ağaçlandırıyor. Eviyle birlikte komşu arsaları da bir vahaya çevirmiş durumda.\n\nLancaster'ın en önemli öğretmeni Zimbabveli bir köylüydü: Zephaniah Phiri Maseko. Apartheid sonrası Afrika'da kuraklıkla mücadele eden Maseko, basit toprak işleriyle — küçük çukurlar, taş bentler, eğim çizgileri — yağmuru tarlasında tutmayı öğrenmişti. Lancaster onu 'su çiftçisi' olarak adlandırdı ve bu prensipleri 2006'da yayımlanan iki ciltlik Rainwater Harvesting for Drylands and Beyond kitabında sistemleştirdi. Kitap, dünya çapında yağmur hasadı uygulayıcıları için temel başvuru kaynağı oldu.\n\nLancaster'ın merkezi öğretisi sekiz ilkeye dayanır. İlki ve en önemlisi: uzun süre, dikkatli gözlem. Önce arazinizi izleyin — yağmur nereden geliyor, nereye akıyor, nerede birikiyor, nereyi yıkıyor? Bu gözlem olmadan yapılan müdahale, çoğu zaman zarar verir.\n\nİkinci ilke su hasadına 'yukarıdan' başlamaktır. Yağmurun en temiz, en bol olduğu yer çatıdır. Bir 100 metrekarelik çatı, 10 milimetre yağmurda 1.000 litre temiz su toplar. Bu su yağmur oluğundan tanklara veya doğrudan bahçeye yönlendirilebilir.\n\nÜçüncü ilke küçük ve çok ölçekli düşünmektir. Bir büyük tank yerine birçok küçük çözüm — yağmur bahçeleri (rain gardens), sızdırma çukurları (infiltration basins), eğim çizgisi setleri (swales), geçirgen kaldırımlar — daha esnek ve dirençlidir. Lancaster'ın deyişiyle suyu 'toprağa ekiyoruz'.\n\nDördüncü ilke yavaşlatma, yayma, sızdırma. Hızla akan su erozyona neden olur. Yavaşlatılırsa toprağa girer. Yayılırsa daha geniş alanı besler. Sızdırılırsa yer altı suyu rezervine katkı sağlar. Sert yüzey ne kadar azsa, geçirgen alan ne kadar çoksa, su o kadar yerinde kalır.\n\nGeri kalan ilkeler artıyı sönüm olarak hesaplama (su deposu son çare olmalı, doğrudan toprağa daha iyi), birden fazla işleve hizmet eden tasarım (ağaç hem gölge verir hem suyu tutar hem meyve verir), sürekli yeniden değerlendirme ve fazlalığı bir kaynak olarak görme prensipleridir.\n\nTürkiye'nin pek çok bölgesi yıllık yağışın azaldığı, yer altı sularının çekildiği ve kuraklığın belirginleştiği bir dönemden geçiyor. Antalya, İzmir, Konya gibi bölgelerde su krizi ciddileşiyor. Geleneksel tarım çözümleri — daha derin kuyu, daha çok pompa — sorunu çözmüyor, derinleştiriyor. Yağmur hasadı, bu denklemin tersini öneriyor: kıt görünen kaynak aslında bol, sadece doğru yakalanmıyor.\n\nEv ölçeğinde başlangıç basittir. Çatı oluğuna bir yönlendirici takarak yağmur suyunu bahçeye veya bir tanka aktarabilirsiniz. Bahçede toprağı 30-50 cm derinliğinde bir çukur kazıp dolomit ve organik madde ile doldurarak yağmur bahçesi oluşturabilirsiniz. Eğimli arazide kontur çizgisi boyunca küçük setler (swale) suyu yamaçtan yavaşlatır. Lancaster'ın gösterdiği gibi: bir damla suyun nereden geldiğini ve nereye gittiğini bilmek, kuraklığı bolluğa çevirmenin başlangıcıdır.",
    image: "/blog/yagmur-hasati.webp",
    imageSource: "https://unsplash.com/s/photos/rainwater",
    personSource: "https://www.harvestingrainwater.com/",
  },
  {
    id: 7,
    slug: "permakultur",
    title: "Permakültür: Doğadan Öğrenen Tasarım",
    category: "Permakültür",
    author: "Serender Editörleri",
    authorRole: "Ekolojik Yaşam İçerikleri",
    inspiredBy: "Bill Mollison & David Holmgren / Permaculture One (1978)",
    date: "2026-04-25",
    readTime: "6 dk",
    excerpt:
      "1978'de Tasmanya'da iki adam bir kitap yayımladı. Yarım asır sonra permakültür dünya çapında bir tasarım dili haline gelmişti.",
    content:
      "1974 yılı, Tasmanya. Üniversite hocası Bill Mollison ve öğrencisi David Holmgren, modern tarımın çevreye verdiği zarara karşı yeni bir tasarım dili geliştirmeye karar verdiler. Dört yıllık çalışma sonunda 1978'de Permaculture One adlı kitabı yayımladılar. 'Permaculture' başlangıçta 'permanent agriculture' (kalıcı tarım) sözcüklerinin kısaltmasıydı; ancak Mollison hızlıca fark etti ki bu sadece tarım değil, 'permanent culture' — kalıcı bir kültür — meselesiydi. Verimli bir peyzaj, sağlıklı bir ekoloji ve döngüsel bir ekonomi olmadan hiçbir kültürün ayakta kalmayacağına inanıyordu.\n\nPermakültür üç etik temele dayanır: yer küreyi gözetmek (earth care), insanları gözetmek (people care) ve adil paylaşım / fazlayı geri vermek (fair share). Bu üç ilke, bütün tasarım kararlarının zeminini oluşturur.\n\nHolmgren, 2002'de yayımladığı Permaculture: Principles and Pathways Beyond Sustainability kitabında permakültürün on iki tasarım ilkesini sistemleştirdi: Gözlemle ve etkileş. Enerjiyi yakala ve depola. Verim al. Geri besleme uygula ve kendini düzenle. Yenilenebilir kaynak ve hizmetleri kullan ve değerlendir. Atık üretme. Desenden detaya tasarla. Ayırmaktansa entegre et. Küçük ve yavaş çözümleri kullan. Çeşitliliği kullan ve değerlendir. Sınırları ve marjinali değerlendir. Değişimi yaratıcı kullan ve karşılık ver.\n\nBu ilkeler soyut görünebilir ama uygulamada çok somuttur. 'Her unsur birden fazla işleve hizmet etmeli' ilkesini ele alalım. Bahçeye bir dut ağacı ektiğinizde sadece meyve değil, gölge, kuş yemi, yaprak gübresi ve rüzgâr kırıcı işlevi de elde edersiniz. 'Atık üretme' ilkesi mutfak atıklarınızın komposta, gri suyunuzun bahçeye, yün giysilerinizin malça dönüşmesi anlamına gelir. 'Sınırları değerlendir' ilkesi göl kenarı, orman kenarı gibi ekosistem geçiş bölgelerinin en verimli alanlar olduğunu hatırlatır.\n\nPermakültür tasarımı genellikle bölge (zone) sistemiyle organize edilir. Bölge 0 evdir; her gün ziyaret ettiğiniz baharat bahçesi Bölge 1, haftada bir gittiğiniz sebze bahçesi Bölge 2, meyve bahçesi ve tavuklar Bölge 3, otlak ve odunluk Bölge 4, doğal vahşi alan Bölge 5'tir. Sık ziyaret ettiğiniz unsurları yakına, az ziyaret ettiklerinizi uzağa yerleştirmek hem enerji tasarrufu sağlar hem de doğal kontrol mekanizmaları kurar.\n\nMollison Avustralya'da bir Permaculture Institute kurdu ve 72 saatlik Permaculture Design Course (PDC) sistemini geliştirdi. Bugüne kadar dünya çapında yüz binlerce kişi bu kursu aldı. Mollison 1981'de alternatif Nobel olarak bilinen Right Livelihood Award'ı kazandı. 2016'da hayatını kaybetti ama hareketin kurumsallaşması Holmgren ve binlerce uygulayıcı tarafından sürdürülüyor. Holmgren'in Hepburn Springs'teki Melliodora çiftliği, 1985'ten beri permakültürün canlı bir gösterim alanı.\n\nPermakültür bir reçete değil, bir düşünme yöntemidir. Bir balkon bahçesinden bir köy ekosistemine, bir okul yerleşkesinden bir şehir mahallesine kadar her ölçekte uygulanabilir. Türkiye'de son on yılda permakültür çiftlikleri çoğaldı; Marmaris'ten Karadeniz'e, Ege'den Doğu Anadolu'ya kadar yüzlerce uygulayıcı yetişti. Asıl iş, bu prensipleri yerel iklime, kültüre ve toprağa adapte etmektir. Mollison'un sıkça tekrar ettiği gibi: 'Bahçenin sorunu çözümün ta kendisidir' — yani sorun gibi görünen şey (çok yağmur, çok rüzgâr, çok eğim) doğru tasarımla bir kaynağa dönüşür.",
    image: "/blog/permakultur.webp",
    imageSource: "https://unsplash.com/s/photos/permaculture",
    personSource: "https://holmgren.com.au/",
  },
  {
    id: 8,
    slug: "faydali-bocekler",
    title: "Faydalı Böcekler: Dünyayı Çeviren Küçük Şeyler",
    category: "Biyoçeşitlilik",
    author: "Serender Editörleri",
    authorRole: "Ekolojik Yaşam İçerikleri",
    inspiredBy: "E. O. Wilson / The Little Things That Run the World (1987)",
    date: "2026-04-25",
    readTime: "5 dk",
    excerpt:
      "E. O. Wilson böceklere 'dünyayı çeviren küçük şeyler' dedi. Onlar olmasa, bahçemiz de mutfağımız da çökerdi.",
    content:
      "Mayıs 1987. Washington'daki Ulusal Hayvanat Bahçesi, omurgasızlar sergisinin açılışını yapıyor. Konuşmacı, Harvard Üniversitesi'nden dünyaca ünlü biyolog Edward O. Wilson. Konuşmasında bir cümle kuruyor ve bu cümle ekoloji literatürüne geçiyor: 'Şu küçük şeyler için bir söz söyleyeyim — onlar dünyayı çeviren küçük şeylerdir.' Wilson'a göre eğer tüm omurgalılar (memeliler, kuşlar, balıklar) aniden yok olsa, dünya bir süre kaotik olur ama nihayetinde ekosistemler kendini onarırdı. Ama eğer böcekler ve diğer omurgasızlar yok olsa, karasal ekosistemler birkaç ay içinde tamamen çökerdi.\n\nBu çarpıcı iddia abartılı değildir. Böcekler dünya hayvan türlerinin yaklaşık dörtte üçünü oluşturur. Tozlaşmadan ayrıştırmaya, zararlı kontrolünden besin zincirlerine kadar her ekosistem hizmetinde kritik rol oynarlar. Birleşmiş Milletler'in 2019 raporuna göre dünya gıdasının yaklaşık %75'i tozlaşma sayesinde üretilir. Tozlaşmanın en büyük kısmı bal arıları, yaban arıları, çiçek sinekleri ve kelebekler tarafından gerçekleştirilir.\n\nBahçedeki faydalı böcekleri üç ana gruba ayırabiliriz. Tozlayıcılar — bal arıları (Apis mellifera), bombus arıları, tek başına yaşayan yaban arıları (mason bee, leafcutter bee), kelebekler ve çiçek sinekleri (Syrphidae). Yırtıcılar — uğur böcekleri (Coccinellidae), dantel kanatlılar (Chrysopidae), yırtıcı tahta kurtları, böcek kapan örümcekler. Parazitoidler — parazitik yaban arıları (Trichogramma, Braconidae), kendi yumurtalarını zararlı tırtılların ya da yaprak bitlerinin içine bırakırlar; gelişen larva konak böceği içeriden tüketir. Bu doğal kontrol mekanizması, kimyasal pestisitlerden çok daha hassas ve sürdürülebilirdir.\n\nAma böcekler küresel ölçekte tehlikede. 2017'de Almanya'da yapılan ünlü bir çalışma, doğa rezervlerinde bile uçan böcek biyokütlesinin son 27 yılda %75 azaldığını gösterdi. Sebepler: pestisit kullanımı (özellikle neonikotinoidler), tek tip tarım (monokültür), habitat kaybı, ışık kirliliği, iklim değişikliği. Wilson'un öğrencilerinden entomolog Doug Tallamy, bahçecilerin bu krize doğrudan müdahale edebileceğini savunuyor: yerel bitkilerle dolu bir bahçe, bir biyoçeşitlilik adası olur.\n\nXerces Society, 1971'de kurulan ve adını soyu tükenmiş bir kelebek türünden alan Amerikan kuruluşudur. Tozlayıcı koruma alanında dünyanın önde gelen kurumlarından biri olan Xerces, çiftçilere 'beneficial insect strips' (faydalı böcek şeritleri) — tarla kenarına yerel çiçeklerle ekilmiş şeritler — kurmayı öneriyor. Bu şeritler hem tozlayıcı hem de yırtıcı böcek popülasyonlarını canlı tutar; mahsul verimini artırır ve pestisit ihtiyacını azaltır.\n\nEv bahçecisinin yapabilecekleri net ve etkilidir. Birincisi, geniş yapraklı yerel bitkiler ekmek — Türkiye'de papatya, kekik, lavanta, kişniş, fesleğen, civanperçemi gibi çiçekler hem mutfakta hem böcekler için. İkincisi, çiçeklenme dönemini uzun tutmak — ilkbahardan sonbahara kadar her ay çiçeklenen bitkiler bulundurmak. Üçüncüsü, hiçbir koşulda neonikotinoid pestisit kullanmamak; mecbur kalındığında akşam saatlerinde ve hedefe yönelik uygulamak. Dördüncüsü, çıplak toprak alanlar bırakmak — yer altında yuva yapan yaban arılarının %70'i yumuşak toprağa ihtiyaç duyar. Beşincisi, bir 'böcek oteli' kurmak — kuru saplar, delikli odun parçaları, taşlar bir köşede yığılmış bir yapı solitery arılara ve uğur böceklerine kışlık yer sağlar. Altıncısı, bahçenin bir köşesini 'vahşi' bırakmak — biçilmemiş, müdahale edilmemiş, biraz dağınık. En yüksek biyoçeşitlilik bu kontrolsüz alanlarda bulunur.\n\nWilson'un yıllar önce dediği gibi, dünyayı bizim için çeviren küçük şeylerin yarısını bilmediğimizi unutmamak gerek. Onları korumak, kendi geleceğimizi korumaktır.",
    image: "/blog/faydali-bocekler.webp",
    imageSource: "https://unsplash.com/s/photos/ladybug",
    personSource: "https://en.wikipedia.org/wiki/E._O._Wilson",
  },
];