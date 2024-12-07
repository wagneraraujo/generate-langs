const fs = require('fs');

const languages = [
    { name: 'Africâner', cod: 'af' },
    { name: 'Albanês', cod: 'sq' },
    { name: 'Alemão', cod: 'de' },
    { name: 'Amárico', cod: 'am' },
    { name: 'Apinayé', cod: 'apinaye' },
    { name: 'Árabe', cod: 'ar' },
    { name: 'Armênio', cod: 'hy' },
    { name: 'Azerbaijano', cod: 'az' },
    { name: 'Basco', cod: 'eu' },
    { name: 'Bielorrusso', cod: 'be' },
    { name: 'Bengali', cod: 'bn' },
    { name: 'Bósnio', cod: 'bs' },
    { name: 'Búlgaro', cod: 'bg' },
    { name: 'Catalão', cod: 'ca' },
    { name: 'Cebuano', cod: 'ceb' },
    { name: 'Chinês (simplificado)', cod: 'zh-CN' },
    { name: 'Chinês (tradicional)', cod: 'zh-TW' },
    { name: 'Córsico', cod: 'co' },
    { name: 'Croata', cod: 'hr' },
    { name: 'Tcheco', cod: 'cs' },
    { name: 'Dinamarquês', cod: 'da' },
    { name: 'Holandês', cod: 'nl' },
    { name: 'Inglês', cod: 'en' },
    { name: 'Esperanto', cod: 'eo' },
    { name: 'Estoniano', cod: 'et' },
    { name: 'Finlandês', cod: 'fi' },
    { name: 'Francês', cod: 'fr' },
    { name: 'Frísio', cod: 'fy' },
    { name: 'Galego', cod: 'gl' },
    { name: 'Georgiano', cod: 'ka' },
    { name: 'Grego', cod: 'el' },
    { name: 'Guzerate', cod: 'gu' },
    { name: 'Crioulo haitiano', cod: 'ht' },
    { name: 'Hauçá', cod: 'ha' },
    { name: 'Havaiano', cod: 'haw' },
    { name: 'Hebraico', cod: 'he' },
    { name: 'Hindi', cod: 'hi' },
    { name: 'Hmong', cod: 'hmn' },
    { name: 'Húngaro', cod: 'hu' },
    { name: 'Islandês', cod: 'is' },
    { name: 'Igbo', cod: 'ig' },
    { name: 'Indonésio', cod: 'id' },
    { name: 'Irlandês', cod: 'ga' },
    { name: 'Italian', cod: 'it' },
    { name: 'Japonês', cod: 'ja' },
    { name: 'Javanês', cod: 'jv' },
    { name: 'Canará', cod: 'kn' },
    { name: 'Cazaque', cod: 'kk' },
    { name: 'Cmer', cod: 'km' },
    { name: 'Kinyarwanda', cod: 'rw' },
    { name: 'Coreano', cod: 'ko' },
    { name: 'Curdo', cod: 'ku' },
    { name: 'Quirguiz', cod: 'ky' },
    { name: 'Laosiano', cod: 'lo' },
    { name: 'Letão', cod: 'lv' },
    { name: 'Lituano', cod: 'lt' },
    { name: 'Luxemburguês', cod: 'lb' },
    { name: 'Macedônio', cod: 'mk' },
    { name: 'Malgaxe', cod: 'mg' },
    { name: 'Malaio', cod: 'ms' },
    { name: 'Malaiala', cod: 'ml' },
    { name: 'Maltês', cod: 'mt' },
    { name: 'Maori', cod: 'mi' },
    { name: 'Marata', cod: 'mr' },
    { name: 'Mongol', cod: 'mn' },
    { name: 'Myanmar (birmanês)', cod: 'my' },
    { name: 'Nepalês', cod: 'ne' },
    { name: 'Norueguês', cod: 'no' },
    { name: 'Nianja (Chichewa)', cod: 'ny' },
    { name: 'Oriá', cod: 'or' },
    { name: 'Pashto', cod: 'ps' },
    { name: 'Persa', cod: 'fa' },
    { name: 'Polonês', cod: 'pl' },
    { name: 'Português', cod: 'pt' },
    { name: 'Punjabi', cod: 'pa' },
    { name: 'Romeno', cod: 'ro' },
    { name: 'Russo', cod: 'ru' },
    { name: 'Samoano', cod: 'sm' },
    { name: 'Gaélico escocês', cod: 'gd' },
    { name: 'Sérvio', cod: 'sr' },
    { name: 'Sesoto', cod: 'st' },
    { name: 'Xona', cod: 'sn' },
    { name: 'Sindi', cod: 'sd' },
    { name: 'Sinhala (cingalês)', cod: 'si' },
    { name: 'Eslovaco', cod: 'sk' },
    { name: 'Esloveno', cod: 'sl' },
    { name: 'Somali', cod: 'so' },
    { name: 'Espanhol', cod: 'es' },
    { name: 'Sundanês', cod: 'su' },
    { name: 'Suaíli', cod: 'sw' },
    { name: 'Sueco', cod: 'sv' },
    { name: 'Tagalo (filipino)', cod: 'tl' },
    { name: 'Tajique', cod: 'tg' },
    { name: 'Tâmil', cod: 'ta' },
    { name: 'Tártaro', cod: 'tt' },
    { name: 'Telugu', cod: 'te' },
    { name: 'Tailandês', cod: 'th' },
    { name: 'Turco', cod: 'tr' },
    { name: 'Turcomano', cod: 'tk' },
    { name: 'Ucraniano', cod: 'uk' },
    { name: 'Urdu', cod: 'ur' },
    { name: 'Uyghur', cod: 'ug' },
    { name: 'Usbeque', cod: 'uz' },
    { name: 'Vietnamita', cod: 'vi' },
    { name: 'Galês', cod: 'cy' },
    { name: 'Xosa', cod: 'xh' },
    { name: 'Ídiche', cod: 'yi' },
    { name: 'Iorubá', cod: 'yo' },
    { name: 'Zulu', cod: 'zu' },
    { name: 'Umutína', cod: 'bororo' },
    { name: 'Boróro', cod: 'bororo' },
    { name: 'Guató', cod: 'guato' },
    { name: 'Kanela', cod: 'timbira' },
    { name: 'Kanela Apaniekra', cod: 'timbira' },
    { name: 'Kanela Rankocamekra', cod: 'timbira' },
    { name: 'Gavião Krikatêjê', cod: 'timbira' },
    { name: 'Gavião Parkatêjê', cod: 'timbira' },
    { name: 'Gavião Pukobiê', cod: 'timbira' },
    { name: 'Krahô', cod: 'timbira' },
    { name: 'Krahô-Kanela', cod: 'timbira' },
    { name: 'Krenyê', cod: 'timbira' },
    { name: 'Krikatí', cod: 'timbira' },
    { name: 'Kokuiregatêjê', cod: 'timbira' },
    { name: 'Timbira', cod: 'timbira' },
    { name: 'Kaingáng', cod: 'kaingang' },
    { name: 'Mebêngôkre', cod: 'Kayapó' },
    { name: 'Krenakarore', cod: 'panara' },
    { name: 'Kisêdjê', cod: 'kisedje-tapayuna' },
    { name: 'Tapayúna', cod: 'kisedje-tapayuna' },
    { name: 'Xacriabá', cod: 'xacriaba' },
    { name: 'Xavánte', cod: 'xavante' },
    { name: 'Xerénte', cod: 'xerente' },
    { name: 'Xokléng', cod: 'xokleng' },
    { name: 'Karajá', cod: 'karaja' },
    { name: 'Javaé', cod: 'karaja' },
    { name: 'Xambioá', cod: 'karaja' },
    { name: 'Krenák', cod: 'krenak' },
    { name: 'Maxakali', cod: 'maxakali' },
    { name: 'Pataxó', cod: 'pataxo' },
    { name: 'Pataxó Há-Há-Há', cod: 'pataxo' },
    { name: 'Ofayé', cod: 'ofaye' },
    { name: 'Canoeiros', cod: 'rikbaktsa' },
    { name: 'Fulni-ô', cod: 'yate' },
    { name: 'Karitiána', cod: 'karatiana' },
    { name: 'Awetí', cod: 'aweti' },
    { name: 'Jurúna', cod: 'yudja' },
    { name: 'Xipáya', cod: 'xipaya' },
    { name: 'Mawé', cod: 'mawe' },
    { name: 'Aruá', cod: 'cinta-larga' },
    { name: 'Arara do Aripuanã', cod: 'cinta-larga' },
    { name: 'Cinta Larga', cod: 'cinta-larga' },
    { name: 'Gavião de Rondônia', cod: 'cinta-larga' },
    { name: 'Zoró', cod: 'cinta-larga' },
    { name: 'Salamãy', cod: 'salamay' },
    { name: 'Suruí de Rondônia', cod: 'paiter' },
    { name: 'Mondé', cod: 'paiter' },
    { name: 'Tupí-Mondé', cod: 'paiter' },
    { name: 'Mundurukú', cod: 'munduruku' },
    { name: 'Kuruáya', cod: 'kuruaya' },
    { name: 'Puruborá', cod: 'purubora' },
    { name: 'Arara de Rondônia', cod: 'karo' },
    { name: 'Ramarama', cod: 'karo' },
    { name: 'Urucú', cod: 'karo' },
    { name: 'Ajuru', cod: 'ajuru' },
    { name: 'Akunts', cod: 'akuntsu' },
    { name: 'Makuráp', cod: 'makurap' },
    { name: 'Sakurabiat', cod: 'sakurabiat' },
    { name: 'Amanayé', cod: 'Amanayé' },
    { name: 'Anambé', cod: 'Anambé' },
    { name: 'Apiaká', cod: 'Apiaká' },
    { name: 'Araweté', cod: 'Araweté' },
    { name: 'Asurini do Tocantins', cod: 'asurini' },
    { name: 'Parakanã', cod: 'asurini' },
    { name: 'Suruí do Pará', cod: 'asurini' },
    { name: 'Asurini do Xingu', cod: 'asurini-xingu' },
    { name: 'Ava-Canoeiro', cod: 'Ava-Canoeiro' },
    { name: 'Guajá', cod: 'Guajá' },
    { name: 'Guaraní', cod: 'Guaraní' },
    { name: 'Guarani Kaiowá', cod: 'Guaraní' },
    { name: 'Guarani Mbya', cod: 'Guaraní' },
    { name: 'Guarani Nhandeva', cod: 'Guaraní' },
    { name: 'Ka’apor', cod: 'Ka’apor' },
    { name: 'Lingua de Sinais Ka’apor', cod: 'Ka’apor' },
    { name: 'Kamayrurá', cod: 'Kamayrurá' },
    { name: 'Amondáwa', cod: 'Kawahíb' },
    { name: 'Diahói', cod: 'Kawahíb' },
    { name: 'Juma', cod: 'Kawahíb' },
    { name: 'Karipuna', cod: 'Kawahíb' },
    { name: 'Kawahíb', cod: 'Kawahíb' },
    { name: 'Parintintim', cod: 'Kawahíb' },
    { name: 'Tenharim', cod: 'Kawahíb' },
    { name: 'Uru-Eu-Wau-Wau', cod: 'Kawahíb' },
    { name: 'Kaiabi', cod: 'Kaiabi' },
    { name: 'Kokama', cod: 'Kokama-Kambéba' },
    { name: 'Kambéba', cod: 'Kokama-Kambéba' },
    { name: 'Lingua Geral Amazônica', cod: 'Lingua Geral Amazônica' },
    { name: 'Tapirapé', cod: 'Tapirapé' },
    { name: 'Guajajára', cod: 'Tenetehara' },
    { name: 'Tembé', cod: 'Tenetehara' },
    { name: 'Turiwára', cod: 'Turiwára' },
    { name: 'Waiãpy', cod: 'Waiãpy' },
    { name: 'Xetá', cod: 'Xetá' },
    { name: 'Zo’é', cod: 'Zo’é' },
    { name: 'Apurinã', cod: 'Apurinã' },
    { name: 'Ashaninka', cod: 'Ashaninka' },
    { name: 'Baníwa', cod: 'Baníwa-kuripako' },
    { name: 'Kuripáko', cod: 'Baníwa-kuripako' },
    { name: 'Baré', cod: 'Baré' },
    { name: 'Enawenê-Nawê', cod: 'Enawenê-Nawê' },
    { name: 'Kinikinau', cod: 'Kinikinau' },
    { name: 'Machinéri', cod: 'Machinéri' },
    { name: 'Mawayána', cod: 'Mawayána' },
    { name: 'Mehináku', cod: 'Mehináku' },
    { name: 'Palikúr', cod: 'Palikúr' },
    { name: 'Paresí', cod: 'Paresí' },
    { name: 'Tariána', cod: 'Tariána' },
    { name: 'Teréna', cod: 'Teréna' },
    { name: 'Wapixána', cod: 'Wapixána' },
    { name: 'Warekána', cod: 'Warekána' },
    { name: 'Wauja', cod: 'Wauja' },
    { name: 'Yawalapití', cod: 'Yawalapití' },
    { name: 'Apalaí', cod: 'Apalaí' },
    { name: 'Arara do Pará', cod: 'Arara do Pará' },
    { name: 'Bakairí', cod: 'Bakairí' },
    { name: 'Galibí do Oiapoque', cod: 'Galibí do Oiapoque' },
    { name: 'Hixkaryána', cod: 'Hixkaryána' },
    { name: 'Ikpeng', cod: 'Ikpeng' },
    { name: 'Ingarikó', cod: 'Ingarikó' },
    { name: 'Kalapálo', cod: 'Kalapálo' },
    { name: 'Kuikúro', cod: 'Kalapálo' },
    { name: 'Matipú', cod: 'Kalapálo' },
    { name: 'Nahukwá', cod: 'Kalapálo' },
    { name: 'Naravute', cod: 'Kalapálo' },
    { name: 'Kaxuyána', cod: 'Kaxuyána' },
    { name: 'Xikuyána', cod: 'Kaxuyána' },
    { name: 'Makuxí', cod: 'Makuxí' },
    { name: 'Kapon Patamóna', cod: 'Patamóna' },
    { name: 'Taulipáng', cod: 'Taulipáng' },
    { name: 'Tiriyó', cod: 'Tiriyó' },
    { name: 'Wái Wái', cod: 'Wái Wái' },
    { name: 'Waimirí-Atroarí', cod: 'Waimirí-Atroarí' },
    { name: 'Wayána', cod: 'Wayána' },
    { name: 'Yekuána', cod: 'Yekuána' },
    { name: 'Arara do Acre', cod: 'Arara do Acre' },
    { name: 'Katukina do Acre', cod: 'Katukina do Acre' },
    { name: 'Kaxararí', cod: 'Kaxararí' },
    { name: 'Kaxinawá', cod: 'Kaxinawá' },
    { name: 'Korúbo', cod: 'Korúbo' },
    { name: 'Kulina Páno', cod: 'Kulina Páno' },
    { name: 'Marúbo', cod: 'Marúbo' },
    { name: 'Matís', cod: 'Matís' },
    { name: 'Matsés', cod: 'Matsés' },
    { name: 'Maya', cod: 'Maya' },
    { name: 'Nukiní', cod: 'Nukiní' },
    { name: 'Poyanáwa', cod: 'Poyanáwa' },
    { name: 'Shanenáwa', cod: 'Shanenáwa' },
    { name: 'Yamináwa', cod: 'Yamináwa' },
    { name: 'Yawanawá', cod: 'Yawanawá' },
    { name: 'Arapáso', cod: 'Arapáso' },
    { name: 'Barasána', cod: 'Barasána' },
    { name: 'Desána', cod: 'Desána' },
    { name: 'Karapanã', cod: 'Karapanã' },
    { name: 'Kotiria', cod: 'Kotiria' },
    { name: 'Kubeo', cod: 'Kubeo' },
    { name: 'Makúna', cod: 'Makúna' },
    { name: 'Siriáno', cod: 'Siriáno' },
    { name: 'Tukáno', cod: 'Tukáno' },
    { name: 'Tuyúca', cod: 'Tuyúca' },
    { name: 'Yurutí', cod: 'Yurutí' },
    { name: 'Piratapúya', cod: 'Waikana' },
    { name: 'Arawá', cod: 'Arawá' },
    { name: 'Banawá', cod: 'Banawá-Yafí' },
    { name: 'Dení', cod: 'Dení' },
    { name: 'Himarimã', cod: 'Himarimã' },
    { name: 'Jamamadí-Kanamanti', cod: 'Jamamadí-Kanamanti' },
    { name: 'Jarawára', cod: 'Jarawára' },
    { name: 'Kulina Madijá', cod: 'Kulina Madijá' },
    { name: 'Paumarí', cod: 'Paumarí' },
    { name: 'Zuruwahá', cod: 'Zuruwahá' },
    { name: 'Kanamarí', cod: 'Katukína - Kanamarí' },
    { name: 'Katukína', cod: 'Katukína - Kanamarí' },
    { name: 'Tsohom Djapa', cod: 'Katukína - Kanamarí' },
    { name: 'Katawixí', cod: 'Katawixí' },
    { name: 'Dâw', cod: 'Dâw' },
    { name: 'Hupda', cod: 'Hupda' },
    { name: 'Nadëb', cod: 'Nadëb' },
    { name: 'Yuhúp', cod: 'Yuhúp' },
    { name: 'Manduka', cod: 'Nambikwára do Sul' },
    { name: 'Halotesu', cod: 'Nambikwára do Sul' },
    { name: 'Kithaulu', cod: 'Nambikwára do Sul' },
    { name: 'Wakalitesu', cod: 'Nambikwára do Sul' },
    { name: 'Sawentesu', cod: 'Nambikwára do Sul' },
    { name: 'Alaketesu', cod: 'Nambikwára do Sul' },
    { name: 'Alantesu', cod: 'Nambikwára do Sul' },
    { name: 'Hahaintesu', cod: 'Nambikwára do Sul' },
    { name: 'Sarare', cod: 'Nambikwára do Sul' },
    { name: 'Waikisu', cod: 'Nambikwára do Sul' },
    { name: 'Wasusu', cod: 'Nambikwára do Sul' },
    { name: 'Lakondê', cod: 'Nambikwára do Norte' },
    { name: 'Latundê', cod: 'Nambikwára do Norte' },
    { name: 'Negarotê', cod: 'Nambikwára do Norte' },
    { name: 'Mamaindê', cod: 'Nambikwára do Norte' },
    { name: 'Tawandê', cod: 'Nambikwára do Norte' },
    { name: 'Sabanê', cod: 'Nambikwára do Norte' },
    { name: 'Kujubím', cod: 'Kujubím' },
    { name: 'Migueléno', cod: 'Migueléno' },
    { name: 'Oro Win', cod: 'Oro Win' },
    { name: 'Torá', cod: 'Torá' },
    { name: 'Pakaa Nova', cod: 'Wari’' },
    { name: 'Ninám', cod: 'Ninám' },
    { name: 'Sanumá', cod: 'Sanumá' },
    { name: 'Bóra', cod: 'Bóra' },
    { name: 'Miránha', cod: 'Miránha' },
    { name: 'Kadiwéu', cod: 'Kadiwéu' },
    { name: 'Guaikurú', cod: 'Kadiwéu' },
    { name: 'Múra', cod: 'Múra' },
    { name: 'Pirahã', cod: 'Pirahã' },
    { name: 'Chamakóko', cod: 'Chamakóko' },
    { name: 'Chiquitáno', cod: 'Chiquitáno' },
    { name: 'Arikapú', cod: 'Arikapú' },
    { name: 'Djeoromitxí - Jabotí', cod: 'Djeoromitxí' },
    { name: 'Witóto', cod: 'Witóto' },
    { name: 'Aikaná', cod: 'Aikaná' },
    { name: 'Irántxe', cod: 'Irántxe - Mynky' },
    { name: 'Mynky', cod: 'Irántxe - Mynky' },
    { name: 'Kwazá', cod: 'Kwazá' },
    { name: 'Kanoé', cod: 'Kanoé' },
    { name: 'Tikúna', cod: 'Tikúna' },
    { name: 'Trumái', cod: 'Trumái' },
    { name: 'Galibí Marwórno', cod: 'Galibí Marwórno' },
    { name: 'Karipúna do Amapá', cod: 'Karipúna do Amapá' },
    { name: 'Aconã', cod: 'Aconã' },
    { name: 'Aimore', cod: 'Aimore' },
    { name: 'Anacé', cod: 'Anacé' },
    { name: 'Apolima - Arara', cod: 'Apolima - Arara' },
    { name: 'Aranã', cod: 'Aranã' },
    { name: 'Arapiun', cod: 'Arapiun' },
    { name: 'Arikén', cod: 'Arikén' },
    { name: 'Arikosé', cod: 'Arikosé' },
    { name: 'Atikum', cod: 'Atikum' },
    { name: 'Baenã', cod: 'Baenã' },
    { name: 'Borari', cod: 'Borari' },
    { name: 'Botocudo', cod: 'Botocudo' },
    { name: 'Catokin', cod: 'Catokin' },
    { name: 'Charruá', cod: 'Charruá' },
    { name: 'Koiupanká', cod: 'Koiupanká' },
    { name: 'Issé', cod: 'Issé' },
    { name: 'Jaricuna', cod: 'Jaricuna' },
    { name: 'Jeripancó', cod: 'Jeripancó' },
    { name: 'Kaeté', cod: 'Kaeté' },
    { name: 'Kahyana', cod: 'Kahyana' },
    { name: 'Kaimbé', cod: 'Kaimbé' },
    { name: 'Kalabaça', cod: 'Kalabaça' },
    { name: 'Kalankó', cod: 'Kalankó' },
    { name: 'Kamba', cod: 'Kamba' },
    { name: 'Kambiwá', cod: 'Kambiwá' },
    { name: 'Kambiwá-Pipipã', cod: 'Kambiwá-Pipipã' },
    { name: 'Kanindé', cod: 'Kanindé' },
    { name: 'Kantaruré', cod: 'Kantaruré' },
    { name: 'Kapinawá', cod: 'Kapinawá' },
    { name: 'Karapotó', cod: 'Karapotó' },
    { name: 'Karijó', cod: 'Karijó' },
    { name: 'Kariri', cod: 'Kariri' },
    { name: 'Kariri - Xocó', cod: 'Kariri - Xocó' },
    { name: 'Kaxixó', cod: 'Kaxixó' },
    { name: 'Kayuisiana', cod: 'Kayuisiana' },
    { name: 'Kiriri', cod: 'Kiriri' },
    { name: 'Kontanawá', cod: 'Kontanawá' },
    { name: 'Laiana', cod: 'Laiana' },
    { name: 'Manao', cod: 'Manao' },
    { name: 'Maragua', cod: 'Maragua' },
    { name: 'Marimã', cod: 'Marimã' },
    { name: 'Maytapu', cod: 'Maytapu' },
    { name: 'Mucurim', cod: 'Mucurim' },
    { name: 'Nawa', cod: 'Nawa' },
    { name: 'Paiaku', cod: 'Paiaku' },
    { name: 'Pankará', cod: 'Pankará' },
    { name: 'Pankararé', cod: 'Pankararé' },
    { name: 'Pankararú', cod: 'Pankararú' },
    { name: 'Pankararú - Kalankó', cod: 'Pankararú - Kalankó' },
    { name: 'Pankararú - Karuazu', cod: 'Pankararú - Karuazu' },
    { name: 'Pankaru', cod: 'Pankaru' },
    { name: 'Paumelenho', cod: 'Paumelenho' },
    { name: 'Piri-Piri', cod: 'Piri-Piri' },
    { name: 'Pitaguari', cod: 'Pitaguari' },
    { name: 'Potiguara', cod: 'Potiguara' },
    { name: 'Puri', cod: 'Puri' },
    { name: 'Sapará', cod: 'Sapará' },
    { name: 'Tabajara', cod: 'Tabajara' },
    { name: 'Tapajós', cod: 'Tapajós' },
    { name: 'Tapeba', cod: 'Tapeba' },
    { name: 'Tapiuns', cod: 'Tapiuns' },
    { name: 'Tapuia', cod: 'Tapuia' },
    { name: 'Tingui-Botó', cod: 'Tingui-Botó' },
    { name: 'Tremembé', cod: 'Tremembé' },
    { name: 'Truká', cod: 'Truká' },
    { name: 'Tumbalalá', cod: 'Tumbalalá' },
    { name: 'Tupaiu', cod: 'Tupaiu' },
    { name: 'Tupinambá', cod: 'Tupinambá' },
    { name: 'Tupinambaraná', cod: 'Tupinambaraná' },
    { name: 'Tupiniquim', cod: 'Tupiniquim' },
    { name: 'Tuxá', cod: 'Tuxá' },
    { name: 'Wassú', cod: 'Wassú' },
    { name: 'Warao', cod: 'Warao' },
    { name: 'Xocó', cod: 'Xocó' },
    { name: 'Xucuru', cod: 'Xucuru' },
    { name: 'Xucuru - Kariri', cod: 'Xucuru - Kariri' },
    { name: 'Libras', cod: 'libras' },
];


const transformJsonToLanguage = (json) => {
    return json.map(lang => ({
        name: lang.name,
        cod: lang.cod.toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')  // Remove diacritics
            .replace(/['"]/g, '')              // Remove quotes
            .replace(/\s+/g, '-')              // Replace spaces with hyphens
            .replace(/[^a-z0-9-]/g, '')        // Remove special chars except hyphens
    }));
};

const transformedLanguages = transformJsonToLanguage(languages);

// Gerar arquivo JSON
fs.writeFileSync('languages.json', JSON.stringify(transformedLanguages, null, 2), 'utf8');

console.log('Arquivo languages.json foi gerado com sucesso.');

// If you want to export the transformed data
module.exports = {
    languages,
    transformJsonToLanguage
};