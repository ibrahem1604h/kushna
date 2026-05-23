const MENU_DATA = [
  {
    "category": "طبق الملكية",
    "name_ar": "ملكية شخص",
    "name_en": "Malkia – 1 Person",
    "desc_ar": "نصف كيلو سمك. 3 روبيان. 2 كالماري. 1 روبيان برتقال .رز",
    "desc_en": "½ kg fish · 3 shrimp · 2 calamari · 1 orange shrimp · rice",
    "price": "115"
  },
  {
    "category": "طبق الملكية",
    "name_ar": "ملكية شخصين",
    "name_en": "Malkia – 2 Persons",
    "desc_ar": "نصف كيلو سمك+ 8 روبيان + 1 روبيان برتقال + 1 قبقوب بالجبن+ جشيد  + 130 جرام سالمون + 6  كالماري + رز شخصين",
    "desc_en": "½ kg fish + 8 shrimp + 1 orange shrimp + 1 cheese crab + jasheed + 130g salmon + 6 calamari + rice for 2",
    "price": "225 درهم"
  },
  {
    "category": "طبق الملكية",
    "name_ar": "ملكية ٤ أشخاص",
    "name_en": "Malkia – 4 Persons",
    "desc_ar": "كيلو  سمك +16 روبيان + 2 روبيان برتقال + 1 قبقوب بالجبن+ جشيد  + 260 جرام سالمون  + 12 كالماري  + رز 4 أشخاص + محار+  2 سلطة",
    "desc_en": "1 kg fish + 16 shrimp + 2 orange shrimp + 1 cheese crab + jasheed + 260g salmon + 12 calamari + rice for 4 + mussels + 2 salads",
    "price": "460 درهم"
  },
  {
    "category": "طبق الملكية",
    "name_ar": "ملكية ٦ أشخاص",
    "name_en": "Malkia – 6 Persons",
    "desc_ar": "كيلو ونصف سمك + 30 روبيان  + 3 روبيان برتقال + 2 قبقوب جبن + جشيد + 400 سالمون  + 24 كالماري  + رز 6 أشخاص+ محار+ 3 سلطة حسب الاختيار",
    "desc_en": "1½ kg fish + 30 shrimp + 3 orange shrimp + 2 cheese crabs + jasheed + 400g salmon + 24 calamari + rice for 6 + mussels + 3 salads of your choice",
    "price": "570 درهم"
  },
  {
    "category": "طبق الملكية",
    "name_ar": "برج الملكية ١٠ أشخاص",
    "name_en": "Malkia Tower – 10 Persons",
    "desc_ar": "وليمة ملكية فاخرة لـ 10 أشخاص · تشكيلة بحرية مميزة",
    "desc_en": "Royal feast for 10 · Premium seafood selection",
    "price": "1150 درهم"
  },
  {
    "category": "الأسماك الطازجة",
    "name_ar": "هامور",
    "name_en": "Hamour",
    "desc_ar": "فيليه هامور طازج مع أرز أو بطاطس",
    "desc_en": "Fresh hamour fillet with rice or potatoes",
    "price": "مقلي: 58 | مشوي: 58 درهم"
  },
  {
    "category": "الأسماك الطازجة",
    "name_ar": "سالمون",
    "name_en": "Salmon",
    "desc_ar": "فيليه سالمون طازج مشوي بخلطة كشنة مع أرز أو بطاطس",
    "desc_en": "Fresh salmon fillet grilled with Kshna blend, rice or potatoes",
    "price": "75 درهم"
  },
  {
    "category": "الأسماك الطازجة",
    "name_ar": "سبريم",
    "name_en": "Sbaream (Sea Bream)",
    "desc_ar": "سمكة سبريم كاملة طازجة مع أرز أو بطاطس",
    "desc_en": "Whole fresh sea bream with rice or potatoes",
    "price": "مقلي: 56 | مشوي: 56 درهم"
  },
  {
    "category": "الأسماك الطازجة",
    "name_ar": "سيباس",
    "name_en": "Sea Bass",
    "desc_ar": "سمكة سيباس كاملة طازجة مع أرز أو بطاطس",
    "desc_en": "Whole fresh sea bass with rice or potatoes",
    "price": "مقلي: 65 | مشوي: 65 درهم"
  },
  {
    "category": "الأسماك الطازجة",
    "name_ar": "شعري",
    "name_en": "Shaari",
    "desc_ar": "سمكة شعري طازجة كاملة مع أرز أو بطاطس",
    "desc_en": "Whole fresh shaari fish with rice or potatoes",
    "price": "مقلي: 58 | مشوي: 58 درهم"
  },
  {
    "category": "الأسماك الطازجة",
    "name_ar": "نغر",
    "name_en": "Naghar",
    "desc_ar": "نغر طازج مشوي مع بطاطس مقلية أو أرز حسب الاختيار",
    "desc_en": "Fresh grilled nagar served with French fries or rice, as your choice.",
    "price": "43 درهم"
  },
  {
    "category": "الأسماك الطازجة",
    "name_ar": "طاجن كشنة البحري",
    "name_en": "Kshna Seafood Tagine",
    "desc_ar": "روبيان · نغر · هامور · قبقوب · محار · كالماري في صلصة كشنة الخاصة",
    "desc_en": "Shrimps · naghar · hamour · qabqab · mussels · calamari in Kshna sauce",
    "price": "76 درهم"
  },
  {
    "category": "اللوبستر",
    "name_ar": "لوبستر كشنة",
    "name_en": "Kshna Lobster",
    "desc_ar": "لوبستر طازج بخلطة كشنة الخاصة مع البطاطس المقلية",
    "desc_en": "Fresh lobster with Kshna's special blend & fried potatoes",
    "price": "145 درهم"
  },
  {
    "category": "اللوبستر",
    "name_ar": "لوبستر ثورميدور",
    "name_en": "Lobster Thermidor",
    "desc_ar": "لوبستر بصلصة الكريمة الفرنسية مع الروبيان والفطر وطبقة جبن مذابة",
    "desc_en": "Lobster in French cream sauce with shrimps, mushrooms & melted cheese",
    "price": "159 درهم"
  },
  {
    "category": "السطول البحرية",
    "name_ar": "سطل كشنة البحري — شخص",
    "name_en": "Kshna Seafood Bucket (1P)",
    "desc_ar": "روبيان · محار · قبقوب ، كالماري مع الذرة والارز — وصوص حسب الاختيار",
    "desc_en": "Shrimp, mussels , crab, calamari with corn and rice — and sauce of your choice",
    "price": "86 درهم"
  },
  {
    "category": "السطول البحرية",
    "name_ar": "سطل كشنة البحري — شخصين",
    "name_en": "Kshna Seafood Bucket (2P)",
    "desc_ar": "روبيان · محار · قبقوب ، كالماري مع الذرة والارز — وصوص حسب الاختيار",
    "desc_en": "Shrimp, mussels , crab, calamari with corn and rice — and sauce of your choice",
    "price": "162 درهم"
  },
  {
    "category": "السطول البحرية",
    "name_ar": "سطل روبيان — شخص",
    "name_en": "Shrimp Bucket (1P)",
    "desc_ar": "روبيان جامبو طازج مع أرز أو خبز — اختر صوصك",
    "desc_en": "Fresh jumbo shrimps with rice or bread — choose your sauce",
    "price": "79 درهم"
  },
  {
    "category": "السطول البحرية",
    "name_ar": "سطل روبيان — شخصين",
    "name_en": "Shrimp Bucket (2P)",
    "desc_ar": "روبيان جامبو طازج مع أرز أو خبز — اختر صوصك",
    "desc_en": "Fresh jumbo shrimps with rice or bread — choose your sauce",
    "price": "145 درهم"
  },
  {
    "category": "الروبيان",
    "name_ar": "كيلو روبيان كشنه",
    "name_en": "1 KG Kshna Shrimp",
    "desc_ar": "كيلو روبيان مشوي أو مقلي يقدم مع 3 صوصات و البطاطس المقرمشة",
    "desc_en": "One kilogram of grilled or fried shrimp served with three sauces and fries.",
    "price": "145 درهم"
  },
  {
    "category": "الروبيان",
    "name_ar": "روبيان كشنة المشوي",
    "name_en": "Kshna Grilled Shrimps",
    "desc_ar": "7 حبات روبيان جامبو مشوي على الفحم — بخلطة كشنة أو ملح وليمون مع البطاطس المقرمشة",
    "desc_en": "7 jumbo shrimp grilled on charcoal — with a sauce or salt and lemon & Fries",
    "price": "82 درهم"
  },
  {
    "category": "الروبيان",
    "name_ar": "روبيان كشنة المقلي",
    "name_en": "Kshna Fried Shrimps",
    "desc_ar": "7 حبات  روبيان جامبو مقلي مقرمش — يُقدم مع ٣ صوصات: تارتار · ثوم · حار مع البطاطس المقرمشة",
    "desc_en": "7 crispy fried jumbo shrimp — served with 3 sauces: tartar, garlic, and hot & fries",
    "price": "78"
  },
  {
    "category": "الروبيان",
    "name_ar": "روبيان باترفلاي",
    "name_en": "Butterfly Shrimps",
    "desc_ar": "7 حبات روبيان مقلي مع صلصة البترفلاي الخاصة مع البطاطس المقرمشة",
    "desc_en": "7 fried shrimp with special butterfly sauce & fries",
    "price": "75 درهم"
  },
  {
    "category": "الأطباق الشعبية الخليجية",
    "name_ar": "مرق لحم",
    "name_en": "Meat Maraq",
    "desc_ar": "مرق لحم خليجي أصيل بالبهارات العريقة مع الارز حسب الاختيار",
    "desc_en": "Traditional Gulf meat broth with authentic spices & Rice of your choice",
    "price": "64 درهم"
  },
  {
    "category": "الأطباق الشعبية الخليجية",
    "name_ar": "مرق دجاج",
    "name_en": "Chicken Maraq",
    "desc_ar": "مرق دجاج خليجي تقليدي مع  الارز حسب الاختيار",
    "desc_en": "Traditional Gulf chicken broth with Rice of your choice",
    "price": "53 درهم"
  },
  {
    "category": "الأطباق الشعبية الخليجية",
    "name_ar": "مرق كنعد",
    "name_en": "King Fish Maraq",
    "desc_ar": "مرق سمك الكنعد الشهي مع الارز حسب الاختيار",
    "desc_en": "Rich king fish broth  with Rice of your choice",
    "price": "78 درهم"
  },
  {
    "category": "الأطباق الشعبية الخليجية",
    "name_ar": "جشيد",
    "name_en": "Jesheed",
    "desc_ar": "سمك اليريور التقليدي مع الأرز والسمن الاصيل",
    "desc_en": "Traditional yerior fish with rice and authentic ghee",
    "price": "53 درهم"
  },
  {
    "category": "الأطباق الشعبية الخليجية",
    "name_ar": "مجبوس لحم",
    "name_en": "Meat Machbous",
    "desc_ar": "أرز مجبوس الاماراتي بالبهارات مع اللحم",
    "desc_en": "Emirati Machbous rice with spices and meat",
    "price": "65 درهم"
  },
  {
    "category": "الأطباق الشعبية الخليجية",
    "name_ar": "مجبوس دجاج",
    "name_en": "Chicken Machbous",
    "desc_ar": "أرز مجبوس الاماراتي بالبهارات مع الدجاج",
    "desc_en": "Emirati Machbous rice with spices and chicken",
    "price": "54 درهم"
  },
  {
    "category": "الأطباق الشعبية الخليجية",
    "name_ar": "مجبوس كنعد",
    "name_en": "King Fish Machbous",
    "desc_ar": "أرز مجبوس بالبهارات مع سمك الكنعد",
    "desc_en": "Spiced rice with king fish",
    "price": "78 درهم"
  },
  {
    "category": "الأطباق الشعبية الخليجية",
    "name_ar": "برياني دجاج",
    "name_en": "Chicken Biryani",
    "desc_ar": "أرز برياني مع دجاج بالزعفران والبهارات",
    "desc_en": "biryani rice with tender saffron chicken",
    "price": "53 درهم"
  },
  {
    "category": "الأطباق الشعبية الخليجية",
    "name_ar": "برياني لحم",
    "name_en": "Meat Biryani",
    "desc_ar": "أرز برياني مع اللحم بالزعفران",
    "desc_en": "biryani rice with tender saffron meat",
    "price": "64 درهم"
  },
  {
    "category": "الأطباق الشعبية الخليجية",
    "name_ar": "مموش روبيان",
    "name_en": "Momwash Shrimps",
    "desc_ar": "روبيان بالمموش الكويتي التقليدي مع الأرز",
    "desc_en": "Traditional Momwash Kuwaiti shrimp with rice",
    "price": "79 درهم"
  },
  {
    "category": "الأطباق الشعبية الخليجية",
    "name_ar": "مربين روبيان",
    "name_en": "Morabian Shrimps",
    "desc_ar": "روبيان بالمربين الكويتي الأصيل مع الأرز",
    "desc_en": "Traditional Morabian Kuwaiti shrimp with rice",
    "price": "79 درهم"
  },
  {
    "category": "الأطباق الشعبية الخليجية",
    "name_ar": "برياني روبيان",
    "name_en": "Shrimps Biryani",
    "desc_ar": "أرز برياني مع روبيان طازج بالزعفران",
    "desc_en": "biryani rice with fresh saffron shrimps",
    "price": "79 درهم"
  },
  {
    "category": "الأطباق الشعبية الخليجية",
    "name_ar": "مجبوس روبيان",
    "name_en": "Shrimps Machbous",
    "desc_ar": "أرز مجبوس بالبهارات مع الروبيان الطازج",
    "desc_en": "Spiced rice with fresh shrimps",
    "price": "79 درهم"
  },
  {
    "category": "الأطباق الشعبية الخليجية",
    "name_ar": "حمسة كشنة",
    "name_en": "Kshna Hamsa",
    "desc_ar": "حمسة بحرية من نغر وروبيان — وصفة كشنة الخاصة مع الأرز",
    "desc_en": "Seafood hamsa with naghar & shrimps — Kshna's recipe & rice",
    "price": "80 درهم"
  },
  {
    "category": "الأطباق الشعبية الخليجية",
    "name_ar": "حمسة روبيان",
    "name_en": "Shrimps Hamsa",
    "desc_ar": "حمسة روبيان تقليدية خليجية مع الأرز",
    "desc_en": "Traditional Gulf shrimp hamsa with rice",
    "price": "83 درهم"
  },
  {
    "category": "المشاوي",
    "name_ar": "مشاوي كشنة المشكلة",
    "name_en": "Kshna Mixed Grill",
    "desc_ar": "كباب لحم · تكا لحم ، تكا دجاج · ريش ، وعرايس مع بطاطس مقلية",
    "desc_en": "Meat kebab, meat tikka, chicken tikka, ribs, and arayes with French fries",
    "price": "62 درهم"
  },
  {
    "category": "المشاوي",
    "name_ar": "مشاوي كشنة — نصف كيلو",
    "name_en": "Kshna Grills – ½ kg",
    "desc_ar": "كباب لحم ·،تكا دجاج ·تكا لحم، ريش ، وعرايس مع بطاطس مقلية",
    "desc_en": "Lamb kebab, chicken tikka, lamb tikka, ribs, and arayes with French fries",
    "price": "85 درهم"
  },
  {
    "category": "المشاوي",
    "name_ar": "مشاوي كشنة — كيلو",
    "name_en": "Kshna Grills – 1 kg",
    "desc_ar": "كباب لحم ·تكا دجاج ·تكا لحم، ريش ، وعرايس مع بطاطس مقلية",
    "desc_en": "Lamb kebab, chicken tikka, lamb tikka, ribs, and arayes with French fries",
    "price": "158 درهم"
  },
  {
    "category": "المشاوي",
    "name_ar": "مشاوي مشكلة مع أرز",
    "name_en": "Mixed Grill with Rice",
    "desc_ar": "سيخ كباب لحم · تكا لحم · شيش طاووق مع أرز حسب الاختيار",
    "desc_en": "Lamb kebab, lamb tikka, shish tawook with rice of your choice",
    "price": "68 درهم"
  },
  {
    "category": "المشاوي",
    "name_ar": "كباب لحم",
    "name_en": "Meat Kabab",
    "desc_ar": "كباب لحم مشوي متبل بالبهارات الشرقية",
    "desc_en": "Grilled meat kebab marinated in oriental spices",
    "price": "45 درهم"
  },
  {
    "category": "المشاوي",
    "name_ar": "ريش لحم",
    "name_en": "Lamb Ribs",
    "desc_ar": "5 ضلوع لحم مشوية بالفحم",
    "desc_en": "5 grilled lamb ribs",
    "price": "59 درهم"
  },
  {
    "category": "المشاوي",
    "name_ar": "تكا لحم ساندويش",
    "name_en": "Meat Tikka Sandhwish",
    "desc_ar": "لحم متبلة مشوية على الفحم",
    "desc_en": "Marinated meat cubes grilled on charcoal",
    "price": "16 درهم"
  },
  {
    "category": "المشاوي",
    "name_ar": "شيش طاووق",
    "name_en": "Shish Taouk",
    "desc_ar": "دجاج مخلل مشوي على الفحم — طري ومعطر",
    "desc_en": "Marinated chicken grilled on charcoal",
    "price": "48 درهم"
  },
  {
    "category": "المشاوي",
    "name_ar": "دجاج مشوي كامل",
    "name_en": "Whole Grilled Chicken",
    "desc_ar": "دجاجة كاملة مشوية على الفحم مع بطاطس مقلية او رز حسب الاختيار",
    "desc_en": "Whole charcoal-grilled chicken with French fries or rice, of your choice",
    "price": "52 درهم"
  },
  {
    "category": "المشاوي",
    "name_ar": "نصف دجاجة مشوية",
    "name_en": "Half Grilled Chicken",
    "desc_ar": "نصف دجاجة مشوية على الفحم مع أرز حسب الاختيار",
    "desc_en": "Whole charcoal-grilled chicken with French fries or rice, as per your choice",
    "price": "36 درهم"
  },
  {
    "category": "المقبلات الساخنة والشوربات",
    "name_ar": "شوربة كشنة البحرية",
    "name_en": "Kshna Seafood Soup",
    "desc_ar": "شوربة غنية بالروبيان والكالماري والقبوب والكريمة",
    "desc_en": "Rich soup with shrimps, calamari & crab in cream",
    "price": "33 درهم"
  },
  {
    "category": "المقبلات الساخنة والشوربات",
    "name_ar": "ديناميت روبيان",
    "name_en": "Dynamite Shrimps",
    "desc_ar": "روبيان مقلي بصلصة الديناميت الحارة",
    "desc_en": "Fried shrimps in spicy dynamite sauce",
    "price": "45 درهم"
  },
  {
    "category": "المقبلات الساخنة والشوربات",
    "name_ar": "روبيان برتقال",
    "name_en": "Orange Shrimps",
    "desc_ar": "روبيان بصلصة البرتقال الحمضية والجبن — 4 حبات",
    "desc_en": "Shrimps in citrus orange sauce with cheese —4 pcs",
    "price": "53 درهم"
  },
  {
    "category": "المقبلات الساخنة والشوربات",
    "name_ar": "قبقوب بالجبن",
    "name_en": "Crab Cheese",
    "desc_ar": "قبقوب طازج محشو بالجبن الذائب وخلطة كشنة",
    "desc_en": "Fresh qabqab stuffed with melted cheese & Kshna blend",
    "price": "50 درهم"
  },
  {
    "category": "المقبلات الساخنة والشوربات",
    "name_ar": "كالماري",
    "name_en": "Calamari",
    "desc_ar": "كالماري مقلي مع صلصة الثوم والليمون",
    "desc_en": "Fried calamari with garlic & lemon sauce",
    "price": "43"
  },
  {
    "category": "المقبلات الساخنة والشوربات",
    "name_ar": "محار بالثوم والزبدة",
    "name_en": "Garlic Butter Mussels",
    "desc_ar": "محار بصلصة الزبدة والثوم المحمر",
    "desc_en": "mussels in garlic butter sauce",
    "price": "47 درهم"
  },
  {
    "category": "المقبلات الساخنة والشوربات",
    "name_ar": "محار مدراس بالكاري",
    "name_en": "Madras Curry Mussels",
    "desc_ar": "محار في صلصة الكاري الشهية المعطرة",
    "desc_en": "mussels in aromatic madras curry sauce",
    "price": "46 درهم"
  },
  {
    "category": "المقبلات الساخنة والشوربات",
    "name_ar": "شوربة عدس",
    "name_en": "Lentil Soup",
    "desc_ar": "شوربة عدس تقليدية بالكمون والليمون",
    "desc_en": "Traditional lentil soup with cumin & lemon",
    "price": "18 درهم"
  },
  {
    "category": "المقبلات الساخنة والشوربات",
    "name_ar": "ناجتس دجاج",
    "name_en": "Chicken Nuggets",
    "desc_ar": "ناجتس دجاج مقرمشة",
    "desc_en": "Crispy chicken nuggets",
    "price": "28 درهم"
  },
  {
    "category": "المقبلات الساخنة والشوربات",
    "name_ar": "بطاطس مقلية",
    "name_en": "French Fries",
    "desc_ar": "بطاطس مقلية ذهبية مقرمشة",
    "desc_en": "Golden crispy french fries",
    "price": "14 درهم"
  },
  {
    "category": "السلطات والمقبلات الباردة",
    "name_ar": "سلطة كشنة البحرية",
    "name_en": "Kshna Seafood Salad",
    "desc_ar": "سلطة بالروبيان والمحار والنغر مع الذرة الحلوة والجزر",
    "desc_en": "Unique salad featuring shrimp, mussels, and squid with sweetcorn and carrots.",
    "price": "39 درهم"
  },
  {
    "category": "السلطات والمقبلات الباردة",
    "name_ar": "سلطة الشيف",
    "name_en": "Chef Salad",
    "desc_ar": "خس, طماطم . زبيب.،سمسم ، جبن فيتا",
    "desc_en": "Lettuce, tomatoes, raisins, sesame seeds, feta cheese",
    "price": "31 درهم"
  },
  {
    "category": "السلطات والمقبلات الباردة",
    "name_ar": "سلطة فتوش",
    "name_en": "Fattoush",
    "desc_ar": "خضروات طازجة مع خبز محمص",
    "desc_en": "Fresh vegetables with toasted bread",
    "price": "25 درهم"
  },
  {
    "category": "السلطات والمقبلات الباردة",
    "name_ar": "سلطة تبولة",
    "name_en": "Tabbouleh",
    "desc_ar": "برغل بالبقدونس والطماطم والليمون",
    "desc_en": "Bulgur with parsley, tomatoes & lemon",
    "price": "21 درهم"
  },
  {
    "category": "السلطات والمقبلات الباردة",
    "name_ar": "سلطة شيرازية",
    "name_en": "Shirazi Salad",
    "desc_ar": "طماطم وخيار وبصل بالليمون والنعناع",
    "desc_en": "Tomatoes, cucumber & onion with lemon & mint",
    "price": "28 درهم"
  },
  {
    "category": "السلطات والمقبلات الباردة",
    "name_ar": "سلطة عربية",
    "name_en": "Arabic Salad",
    "desc_ar": "خضروات طازجة بتتبيلة الزيت والليمون",
    "desc_en": "Fresh vegetables with olive oil & lemon dressing",
    "price": "24 درهم"
  },
  {
    "category": "السلطات والمقبلات الباردة",
    "name_ar": "سلطة جرجير",
    "name_en": "Rocket Salad",
    "desc_ar": "جرجير طازج بالسماق والبصل وزيت الزيتون",
    "desc_en": "Fresh arugula with sumac, onions, and olive oil",
    "price": "25 درهم"
  },
  {
    "category": "السلطات والمقبلات الباردة",
    "name_ar": "حمص",
    "name_en": "Hummus",
    "desc_ar": "حمص ناعم بزيت الزيتون",
    "desc_en": "Smooth hummus with olive oil",
    "price": "16 درهم"
  },
  {
    "category": "السلطات والمقبلات الباردة",
    "name_ar": "حمص باللحم",
    "name_en": "Hummus with Meat",
    "desc_ar": "حمص مع لحم مفروم مطبوخ",
    "desc_en": "Hummus with cooked minced meat",
    "price": "28 درهم"
  },
  {
    "category": "السلطات والمقبلات الباردة",
    "name_ar": "حمص بالصنوبر",
    "name_en": "Hummus with Pine Nuts",
    "desc_ar": "حمص مع صنوبر محمص وزيت الزيتون",
    "desc_en": "Hummus with toasted pine nuts & olive oil",
    "price": "20 درهم"
  },
  {
    "category": "السلطات والمقبلات الباردة",
    "name_ar": "متبل",
    "name_en": "Mutabbal",
    "desc_ar": "متبل الباذنجان الشهي بالطحينة والليمون",
    "desc_en": "Smoky eggplant with tahini & lemon",
    "price": "16 درهم"
  },
  {
    "category": "السلطات والمقبلات الباردة",
    "name_ar": "بابا غنوج",
    "name_en": "Baba Ghanouj",
    "desc_ar": "باذنجان مشوي مع الطماطم والبقدونس",
    "desc_en": "Grilled eggplant with tomatoes & parsley",
    "price": "16 درهم"
  },
  {
    "category": "المعكرونة",
    "name_ar": "معكرونة ألفريدو",
    "name_en": "ِAlfredo Pasta",
    "desc_ar": "معكرونة بصلصة الكريمة والجبن الذائب وقطع الدجاج",
    "desc_en": "Pasta with cream sauce, melted cheese, and chicken pieces",
    "price": "35 درهم"
  },
  {
    "category": "المعكرونة",
    "name_ar": "معكرونة أربياتا",
    "name_en": "Arabiata Pasta",
    "desc_ar": "معكرونة بصلصة الطماطم وقطع الدجاج",
    "desc_en": "Pasta with tomato sauce and chicken pieces",
    "price": "32 درهم"
  },
  {
    "category": "الحلويات",
    "name_ar": "تيراميسو",
    "name_en": "Tiramisu",
    "desc_ar": "طبقات من البسكويت المنقوع والكريمة الإيطالية",
    "desc_en": "Classic Italian tiramisu with soaked biscuits & cream",
    "price": "37 درهم"
  },
  {
    "category": "الحلويات",
    "name_ar": "أم علي",
    "name_en": "Oum Ali",
    "desc_ar": "حلوى مصرية دافئة بالكريمة والمكسرات والقشطة",
    "desc_en": "Warm Egyptian dessert with cream, nuts & cream",
    "price": "21 درهم"
  },
  {
    "category": "الحلويات",
    "name_ar": "عصيدة",
    "name_en": "Aseedah",
    "desc_ar": "حلوى خليجية تقليدية من الدقيق والسمن والعسل",
    "desc_en": "Traditional Gulf dessert with flour, ghee & honey",
    "price": "25 درهم"
  },
  {
    "category": "المشروبات والعصائر",
    "name_ar": "دلة قهوة عربية",
    "name_en": "Arabic Coffee Dallah",
    "desc_ar": "قهوة عربية أصيلة بالهيل والزعفران  تقدم مع تمر الخلاص",
    "desc_en": "Authentic Arabic coffee with cardamom, saffron & dates",
    "price": "35"
  },
  {
    "category": "المشروبات والعصائر",
    "name_ar": "مشروب غازي",
    "name_en": "Soft Drink",
    "desc_ar": "بيبسي · ميرندا · سفن أب — ٣٣٠ml",
    "desc_en": "Pepsi · Mirinda · 7UP — 330ml",
    "price": "6 درهم"
  },
  {
    "category": "المشروبات والعصائر",
    "name_ar": "مياه معدنية",
    "name_en": "Water",
    "desc_ar": "مياه معدنية ٣٣٠ml",
    "desc_en": "Mineral water 330ml",
    "price": "4 درهم"
  },
  {
    "category": "المشروبات والعصائر",
    "name_ar": "فيمتو",
    "name_en": "Vimto",
    "desc_ar": "مشروب فيمتو بارد",
    "desc_en": "Cold Vimto drink",
    "price": "9 درهم"
  },
  {
    "category": "المشروبات والعصائر",
    "name_ar": "ليمون بالنعناع",
    "name_en": "Lemon Mint",
    "desc_ar": "عصير ليمون طازج بالنعناع",
    "desc_en": "Fresh lemon juice with mint",
    "price": "18 درهم"
  },
  {
    "category": "المشروبات والعصائر",
    "name_ar": "عصير برتقال",
    "name_en": "Orange Juice",
    "desc_ar": "عصير برتقال طازج",
    "desc_en": "Fresh squeezed orange juice",
    "price": "18 درهم"
  },
  {
    "category": "المشروبات والعصائر",
    "name_ar": "عصير مانجو",
    "name_en": "Mango Juice",
    "desc_ar": "عصير مانجو طازج",
    "desc_en": "Fresh mango juice",
    "price": "23 درهم"
  }
];
const CATEGORY_EN = {
  "طبق الملكية": "Malkia Platters",
  "الأسماك الطازجة": "Fresh Fish",
  "اللوبستر": "Lobster",
  "السطول البحرية": "Seafood Buckets",
  "الروبيان": "Shrimps",
  "الأطباق الشعبية الخليجية": "Gulf Traditional Dishes",
  "المشاوي": "Grills",
  "المقبلات الساخنة والشوربات": "Hot Appetizers & Soups",
  "السلطات والمقبلات الباردة": "Salads & Cold Appetizers",
  "المعكرونة": "Pasta",
  "الحلويات": "Desserts",
  "المشروبات والعصائر": "Drinks & Juices"
};
