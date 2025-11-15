// Cities data for each state
const citiesByState = {
    "Abia": ["Umuahia", "Aba", "Port Harcourt"],
    "Adamawa": ["Yola", "Mubi", "Jimeta"],
    "Akwa Ibom": ["Uyo", "Eket", "Ikot Ekpene"],
    "Anambra": ["Awka", "Onitsha", "Nnewi"],
    "Bauchi": ["Bauchi", "Azare", "Misau"],
    "Bayelsa": ["Yenagoa", "Brass", "Sagbama"],
    "Benue": ["Makurdi", "Gboko", "Otukpo"],
    "Borno": ["Maiduguri", "Bama", "Jere"],
    "Cross River": ["Calabar", "Ikom", "Ogoja"],
    "Delta": ["Asaba", "Warri", "Sapele"],
    "Ebonyi": ["Abakaliki", "Afikpo", "Onueke"],
    "Edo": ["Benin City", "Auchi", "Ekpoma"],
    "Ekiti": ["Ado-Ekiti", "Ikere-Ekiti", "Ijero-Ekiti"],
    "Enugu": ["Enugu", "Nsukka", "Awgu"],
    "Federal Capital Territory": ["Abuja", "Gwagwalada", "Kuje"],
    "Gombe": ["Gombe", "Kaltungo", "Billiri"],
    "Imo": ["Owerri", "Orlu", "Okigwe"],
    "Jigawa": ["Dutse", "Hadejia", "Kazaure"],
    "Kaduna": ["Kaduna", "Zaria", "Kafanchan"],
    "Kano": ["Kano", "Katsina", "Wudil"],
    "Katsina": ["Katsina", "Daura", "Funtua"],
    "Kebbi": ["Birnin Kebbi", "Argungu", "Yauri"],
    "Kogi": ["Lokoja", "Okene", "Idah"],
    "Kwara": ["Ilorin", "Offa", "Jebba"],
    "Lagos": ["Lagos", "Ikeja", "Badagry"],
    "Nasarawa": ["Lafia", "Keffi", "Akwanga"],
    "Niger": ["Minna", "Suleja", "Kontagora"],
    "Ogun": ["Abeokuta", "Ijebu-Ode", "Sagamu"],
    "Ondo": ["Akure", "Ondo", "Owo"],
    "Osun": ["Osogbo", "Ile-Ife", "Ilesa"],
    "Oyo": ["Ibadan", "Ogbomosho", "Iseyin"],
    "Plateau": ["Jos", "Bukuru", "Pankshin"],
    "Rivers": ["Port Harcourt", "Bonny", "Degema"],
    "Sokoto": ["Sokoto", "Gwadabawa", "Tambuwal"],
    "Taraba": ["Jalingo", "Wukari", "Bali"],
    "Yobe": ["Damaturu", "Potiskum", "Gashua"],
    "Zamfara": ["Gusau", "Kaura Namoda", "Talata Mafara"]
};

// Towns/Areas data for each city (bus stops)
const townsByCity = {
    "Umuahia": ["Central Bus Stop", "Market Square", "University Junction"],
    "Aba": ["Aba North", "Aba South", "Osisioma"],
    "Port Harcourt": ["Waterlines", "Choba", "GRA"],
    "Yola": ["Yola Central", "Jimeta", "Girei"],
    "Mubi": ["Mubi North", "Mubi South", "Michika"],
    "Jimeta": ["Jimeta Central", "Yola Bypass", "Modibbo Adama"],
    "Uyo": ["Uyo Central", "Ikot Ekpene Road", "Abak"],
    "Eket": ["Eket Central", "Ikot Abasi", "Onna"],
    "Ikot Ekpene": ["Ikot Ekpene Central", "Essien Udim", "Obot Akara"],
    "Awka": ["Awka Central", "Nnewi Road", "Onitsha Bypass"],
    "Onitsha": ["Onitsha Central", "Bridge Head", "Fegge"],
    "Nnewi": ["Nnewi Central", "Otolo", "Ukpor"],
    "Bauchi": ["Bauchi Central", "Yandoka", "Tafawa Balewa"],
    "Azare": ["Azare Central", "Gamawa", "Itas"],
    "Misau": ["Misau Central", "Dambam", "Tafawa Balewa"],
    "Yenagoa": ["Yenagoa Central", "Swali", "Sagbama"],
    "Brass": ["Brass Central", "Nembe", "Southern Ijaw"],
    "Sagbama": ["Sagbama Central", "Ekeremor", "Kolokuma"],
    "Makurdi": ["Makurdi Central", "Gboko Road", "Otukpo Junction"],
    "Gboko": ["Gboko Central", "Makurdi Bypass", "Ukum"],
    "Otukpo": ["Otukpo Central", "Adoka", "Ogbadibo"],
    "Maiduguri": ["Maiduguri Central", "Bama Road", "Jere"],
    "Bama": ["Bama Central", "Gwoza", "Kala Balge"],
    "Jere": ["Jere Central", "Konduga", "Mafa"],
    "Calabar": ["Calabar Central", "Ikom Road", "Ogoja Junction"],
    "Ikom": ["Ikom Central", "Etung", "Obubra"],
    "Ogoja": ["Ogoja Central", "Bekwarra", "Obudu"],
    "Asaba": ["Asaba Central", "Warri Road", "Sapele Bypass"],
    "Warri": ["Warri Central", "Sapele Road", "Effurun"],
    "Sapele": ["Sapele Central", "Warri Bypass", "Okpe"],
    "Abakaliki": ["Abakaliki Central", "Afikpo Road", "Onueke Junction"],
    "Afikpo": ["Afikpo Central", "Eddah", "Unwana"],
    "Onueke": ["Onueke Central", "Ezza", "Ikwo"],
    "Benin City": ["Benin Central", "Auchi Road", "Ekpoma Junction"],
    "Auchi": ["Auchi Central", "Ibne", "Jattu"],
    "Ekpoma": ["Ekpoma Central", "Irrua", "Uromi"],
    "Ado-Ekiti": ["Ado-Ekiti Central", "Ikere Road", "Ijero Junction"],
    "Ikere-Ekiti": ["Ikere Central", "Oye", "Ise-Ekiti"],
    "Ijero-Ekiti": ["Ijero Central", "Ekiti West", "Irepodun"],
    "Enugu": ["Enugu Central", "Nsukka Road", "Awgu Junction"],
    "Nsukka": ["Nsukka Central", "Enugu Bypass", "Uzo-Uwani"],
    "Awgu": ["Awgu Central", "Aninri", "Oji River"],
    "Abuja": ["Abuja Central", "Gwagwalada Road", "Kuje Junction"],
    "Gwagwalada": ["Gwagwalada Central", "Kuje", "Abaji"],
    "Kuje": ["Kuje Central", "Kwali", "Bwari"],
    "Gombe": ["Gombe Central", "Kaltungo Road", "Billiri Junction"],
    "Kaltungo": ["Kaltungo Central", "Akko", "Balanga"],
    "Billiri": ["Billiri Central", "Kaltungo Bypass", "Shongom"],
    "Owerri": ["Owerri Central", "Orlu Road", "Okigwe Junction"],
    "Orlu": ["Orlu Central", "Njaba", "Ideato"],
    "Okigwe": ["Okigwe Central", "Onuimo", "Ehime"],
    "Dutse": ["Dutse Central", "Hadejia Road", "Kazaure Junction"],
    "Hadejia": ["Hadejia Central", "Auyo", "Birniwa"],
    "Kazaure": ["Kazaure Central", "Roni", "Tarauni"],
    "Kaduna": ["Kaduna Central", "Zaria Road", "Kafanchan Junction"],
    "Zaria": ["Zaria Central", "Kafanchan Road", "Sabon Gari"],
    "Kafanchan": ["Kafanchan Central", "Jema'a", "Sanga"],
    "Kano": ["Kano Central", "Katsina Road", "Wudil Junction"],
    "Katsina": ["Katsina Central", "Daura Road", "Funtua Junction"],
    "Wudil": ["Wudil Central", "Garko", "Kabo"],
    "Katsina": ["Katsina Central", "Daura Road", "Funtua Junction"],
    "Daura": ["Daura Central", "Mani", "Bindawa"],
    "Funtua": ["Funtua Central", "Bakori", "Dandume"],
    "Birnin Kebbi": ["Birnin Kebbi Central", "Argungu Road", "Yauri Junction"],
    "Argungu": ["Argungu Central", "Augie", "Bagudo"],
    "Yauri": ["Yauri Central", "Shanga", "Sakaba"],
    "Lokoja": ["Lokoja Central", "Okene Road", "Idah Junction"],
    "Okene": ["Okene Central", "Ajaokuta", "Okehi"],
    "Idah": ["Idah Central", "Ibaji", "Dekina"],
    "Ilorin": ["Ilorin Central", "Offa Road", "Jebba Junction"],
    "Offa": ["Offa Central", "Oyun", "Ila Orangun"],
    "Jebba": ["Jebba Central", "Pategi", "Edati"],
    "Lagos": ["Lagos Central", "Ikeja Road", "Badagry Junction"],
    "Ikeja": ["Ikeja Central", "Agege", "Alimosho"],
    "Badagry": ["Badagry Central", "Ojo", "Lagos Island"],
    "Lafia": ["Lafia Central", "Keffi Road", "Akwanga Junction"],
    "Keffi": ["Keffi Central", "Nasarawa", "Kokona"],
    "Akwanga": ["Akwanga Central", "Wamba", "Doma"],
    "Minna": ["Minna Central", "Suleja Road", "Kontagora Junction"],
    "Suleja": ["Suleja Central", "Tafa", "Chanchaga"],
    "Kontagora": ["Kontagora Central", "Rijau", "Mariga"],
    "Abeokuta": ["Abeokuta Central", "Ijebu-Ode Road", "Sagamu Junction"],
    "Ijebu-Ode": ["Ijebu-Ode Central", "Ijebu East", "Ogun Waterside"],
    "Sagamu": ["Sagamu Central", "Ifo", "Ado-Odo"],
    "Akure": ["Akure Central", "Ondo Road", "Owo Junction"],
    "Ondo": ["Ondo Central", "Okitipupa", "Akoko"],
    "Owo": ["Owo Central", "Akure Bypass", "Ose"],
    "Osogbo": ["Osogbo Central", "Ile-Ife Road", "Ilesa Junction"],
    "Ile-Ife": ["Ile-Ife Central", "Ilesa Road", "Atakumosa"],
    "Ilesa": ["Ilesa Central", "Obokun", "Oriade"],
    "Ibadan": ["Ibadan Central", "Ogbomosho Road", "Iseyin Junction"],
    "Ogbomosho": ["Ogbomosho Central", "Saki", "Oriire"],
    "Iseyin": ["Iseyin Central", "Kajola", "Atisbo"],
    "Jos": ["Jos Central", "Bukuru Road", "Pankshin Junction"],
    "Bukuru": ["Bukuru Central", "Jos North", "Riyom"],
    "Pankshin": ["Pankshin Central", "Kanke", "Kanam"],
    "Port Harcourt": ["Port Harcourt Central", "Bonny Road", "Degema Junction"],
    "Bonny": ["Bonny Central", "Okrika", "Ogu"],
    "Degema": ["Degema Central", "Asari-Toru", "Akuku-Toru"],
    "Sokoto": ["Sokoto Central", "Gwadabawa Road", "Tambuwal Junction"],
    "Gwadabawa": ["Gwadabawa Central", "Illela", "Rabah"],
    "Tambuwal": ["Tambuwal Central", "Kebbe", "Shagari"],
    "Jalingo": ["Jalingo Central", "Wukari Road", "Bali Junction"],
    "Wukari": ["Wukari Central", "Takum", "Ussa"],
    "Bali": ["Bali Central", "Gassol", "Ibi"],
    "Damaturu": ["Damaturu Central", "Potiskum Road", "Gashua Junction"],
    "Potiskum": ["Potiskum Central", "Fika", "Fune"],
    "Gashua": ["Gashua Central", "Nangere", "Yusufari"],
    "Gusau": ["Gusau Central", "Kaura Namoda Road", "Talata Mafara Junction"],
    "Kaura Namoda": ["Kaura Namoda Central", "Shinkafi", "Zurmi"],
    "Talata Mafara": ["Talata Mafara Central", "Anka", "Maradun"]
};

// Delivery fees based on bus stop (in NGN)
const deliveryFees = {
    // Abia
    "Central Bus Stop": 500,
    "Market Square": 600,
    "University Junction": 700,
    "Aba North": 550,
    "Aba South": 650,
    "Osisioma": 750,
    "Waterlines": 800,
    "Choba": 900,
    "GRA": 1000,
    // Add more as needed, for brevity, I'll add a few more
    "Yola Central": 600,
    "Jimeta": 700,
    "Girei": 800,
    "Mubi North": 900,
    "Mubi South": 1000,
    "Michika": 1100,
    "Modibbo Adama": 1200,
    "Uyo Central": 500,
    "Ikot Ekpene Road": 600,
    "Abak": 700,
    "Eket Central": 800,
    "Ikot Abasi": 900,
    "Onna": 1000,
    "Ikot Ekpene Central": 600,
    "Essien Udim": 700,
    "Obot Akara": 800,
    "Awka Central": 500,
    "Nnewi Road": 600,
    "Onitsha Bypass": 700,
    "Onitsha Central": 600,
    "Bridge Head": 700,
    "Fegge": 800,
    "Nnewi Central": 700,
    "Otolo": 800,
    "Ukpor": 900,
    "Bauchi Central": 600,
    "Yandoka": 700,
    "Tafawa Balewa": 800,
    "Azare Central": 700,
    "Gamawa": 800,
    "Itas": 900,
    "Misau Central": 800,
    "Dambam": 900,
    "Yenagoa Central": 1000,
    "Swali": 1100,
    "Sagbama": 1200,
    "Brass Central": 1300,
    "Nembe": 1400,
    "Southern Ijaw": 1500,
    "Makurdi Central": 600,
    "Gboko Road": 700,
    "Otukpo Junction": 800,
    "Gboko Central": 700,
    "Makurdi Bypass": 800,
    "Ukum": 900,
    "Otukpo Central": 800,
    "Adoka": 900,
    "Ogbadibo": 1000,
    "Maiduguri Central": 800,
    "Bama Road": 900,
    "Jere": 1000,
    "Bama Central": 900,
    "Gwoza": 1000,
    "Kala Balge": 1100,
    "Jere Central": 1000,
    "Konduga": 1100,
    "Mafa": 1200,
    "Calabar Central": 600,
    "Ikom Road": 700,
    "Ogoja Junction": 800,
    "Ikom Central": 700,
    "Etung": 800,
    "Obubra": 900,
    "Ogoja Central": 800,
    "Bekwarra": 900,
    "Obudu": 1000,
    "Asaba Central": 500,
    "Warri Road": 600,
    "Sapele Bypass": 700,
    "Warri Central": 600,
    "Sapele Road": 700,
    "Effurun": 800,
    "Sapele Central": 700,
    "Warri Bypass": 800,
    "Okpe": 900,
    "Abakaliki Central": 600,
    "Afikpo Road": 700,
    "Onueke Junction": 800,
    "Afikpo Central": 700,
    "Eddah": 800,
    "Unwana": 900,
    "Onueke Central": 800,
    "Ezza": 900,
    "Ikwo": 1000,
    "Benin City Central": 500,
    "Auchi Road": 600,
    "Ekpoma Junction": 700,
    "Auchi Central": 600,
    "Ibne": 700,
    "Jattu": 800,
    "Ekpoma Central": 700,
    "Irrua": 800,
    "Uromi": 900,
    "Ado-Ekiti Central": 600,
    "Ikere Road": 700,
    "Ijero Junction": 800,
    "Ikere Central": 700,
    "Oye": 800,
    "Ise-Ekiti": 900,
    "Ijero Central": 800,
    "Ekiti West": 900,
    "Irepodun": 1000,
    "Enugu Central": 500,
    "Nsukka Road": 600,
    "Awgu Junction": 700,
    "Nsukka Central": 600,
    "Enugu Bypass": 700,
    "Uzo-Uwani": 800,
    "Awgu Central": 700,
    "Aninri": 800,
    "Oji River": 900,
    "Abuja Central": 400,
    "Gwagwalada Road": 500,
    "Kuje Junction": 600,
    "Gwagwalada Central": 500,
    "Kuje": 600,
    "Abaji": 700,
    "Kuje Central": 600,
    "Kwali": 700,
    "Bwari": 800,
    "Gombe Central": 700,
    "Kaltungo Road": 800,
    "Billiri Junction": 900,
    "Kaltungo Central": 800,
    "Akko": 900,
    "Balanga": 1000,
    "Billiri Central": 900,
    "Kaltungo Bypass": 1000,
    "Shongom": 1100,
    "Owerri Central": 600,
    "Orlu Road": 700,
    "Okigwe Junction": 800,
    "Orlu Central": 700,
    "Njaba": 800,
    "Ideato": 900,
    "Okigwe Central": 800,
    "Onuimo": 900,
    "Ehime": 1000,
    "Dutse Central": 700,
    "Hadejia Road": 800,
    "Kazaure Junction": 900,
    "Hadejia Central": 800,
    "Auyo": 900,
    "Birniwa": 1000,
    "Kazaure Central": 900,
    "Roni": 1000,
    "Tarauni": 1100,
    "Kaduna Central": 500,
    "Zaria Road": 600,
    "Kafanchan Junction": 700,
    "Zaria Central": 600,
    "Kafanchan Road": 700,
    "Sabon Gari": 800,
    "Kafanchan Central": 700,
    "Jema'a": 800,
    "Sanga": 900,
    "Kano Central": 600,
    "Katsina Road": 700,
    "Wudil Junction": 800,
    "Katsina Central": 700,
    "Daura Road": 800,
    "Funtua Junction": 900,
    "Wudil Central": 800,
    "Garko": 900,
    "Kabo": 1000,
    "Daura Central": 800,
    "Mani": 900,
    "Bindawa": 1000,
    "Funtua Central": 900,
    "Bakori": 1000,
    "Dandume": 1100,
    "Birnin Kebbi Central": 800,
    "Argungu Road": 900,
    "Yauri Junction": 1000,
    "Argungu Central": 900,
    "Augie": 1000,
    "Bagudo": 1100,
    "Yauri Central": 1000,
    "Shanga": 1100,
    "Sakaba": 1200,
    "Lokoja Central": 600,
    "Okene Road": 700,
    "Idah Junction": 800,
    "Okene Central": 700,
    "Ajaokuta": 800,
    "Okehi": 900,
    "Idah Central": 800,
    "Ibaji": 900,
    "Dekina": 1000,
    "Ilorin Central": 500,
    "Offa Road": 600,
    "Jebba Junction": 700,
    "Offa Central": 600,
    "Oyun": 700,
    "Ila Orangun": 800,
    "Jebba Central": 700,
    "Pategi": 800,
    "Edati": 900,
    "Lagos Central": 300,
    "Ikeja Road": 400,
    "Badagry Junction": 500,
    "Ikeja Central": 400,
    "Agege": 500,
    "Alimosho": 600,
    "Badagry Central": 500,
    "Ojo": 600,
    "Lagos Island": 700,
    "Lafia Central": 600,
    "Keffi Road": 700,
    "Akwanga Junction": 800,
    "Keffi Central": 700,
    "Nasarawa": 800,
    "Kokona": 900,
    "Akwanga Central": 800,
    "Wamba": 900,
    "Doma": 1000,
    "Minna Central": 600,
    "Suleja Road": 700,
    "Kontagora Junction": 800,
    "Suleja Central": 700,
    "Tafa": 800,
    "Chanchaga": 900,
    "Kontagora Central": 800,
    "Rijau": 900,
    "Mariga": 1000,
    "Abeokuta Central": 400,
    "Ijebu-Ode Road": 500,
    "Sagamu Junction": 600,
    "Ijebu-Ode Central": 500,
    "Ijebu East": 600,
    "Ogun Waterside": 700,
    "Sagamu Central": 600,
    "Ifo": 700,
    "Ado-Odo": 800,
    "Akure Central": 600,
    "Ondo Road": 700,
    "Owo Junction": 800,
    "Ondo Central": 700,
    "Okitipupa": 800,
    "Akoko": 900,
    "Owo Central": 800,
    "Akure Bypass": 900,
    "Ose": 1000,
    "Osogbo Central": 500,
    "Ile-Ife Road": 600,
    "Ilesa Junction": 700,
    "Ile-Ife Central": 600,
    "Ilesa Road": 700,
    "Atakumosa": 800,
    "Ilesa Central": 700,
    "Obokun": 800,
    "Oriade": 900,
    "Ibadan Central": 400,
    "Ogbomosho Road": 500,
    "Iseyin Junction": 600,
    "Ogbomosho Central": 500,
    "Saki": 600,
    "Oriire": 700,
    "Iseyin Central": 600,
    "Kajola": 700,
    "Atisbo": 800,
    "Jos Central": 600,
    "Bukuru Road": 700,
    "Pankshin Junction": 800,
    "Bukuru Central": 700,
    "Jos North": 800,
    "Riyom": 900,
    "Pankshin Central": 800,
    "Kanke": 900,
    "Kanam": 1000,
    "Port Harcourt Central": 800,
    "Bonny Road": 900,
    "Degema Junction": 1000,
    "Bonny Central": 900,
    "Okrika": 1000,
    "Ogu": 1100,
    "Degema Central": 1000,
    "Asari-Toru": 1100,
    "Akuku-Toru": 1200,
    "Sokoto Central": 900,
    "Gwadabawa Road": 1000,
    "Tambuwal Junction": 1100,
    "Gwadabawa Central": 1000,
    "Illela": 1100,
    "Rabah": 1200,
    "Tambuwal Central": 1100,
    "Kebbe": 1200,
    "Shagari": 1300,
    "Jalingo Central": 700,
    "Wukari Road": 800,
    "Bali Junction": 900,
    "Wukari Central": 800,
    "Takum": 900,
    "Ussa": 1000,
    "Bali Central": 900,
    "Gassol": 1000,
    "Ibi": 1100,
    "Damaturu Central": 800,
    "Potiskum Road": 900,
    "Gashua Junction": 1000,
    "Potiskum Central": 900,
    "Fika": 1000,
    "Fune": 1100,
    "Gashua Central": 1000,
    "Nangere": 1100,
    "Yusufari": 1200,
    "Gusau Central": 800,
    "Kaura Namoda Road": 900,
    "Talata Mafara Junction": 1000,
    "Kaura Namoda Central": 900,
    "Shinkafi": 1000,
    "Zurmi": 1100,
    "Talata Mafara Central": 1000,
    "Anka": 1100,
    "Maradun": 1200
};

// Menu items data
const menuItems = [
    { name: "Spicy Chicken Wings", price: 4500, image: "./Pictures/4t0fl03m.png" },
    { name: "Jollof Rice", price: 3000, image: "./Pictures/4t0fl03m.png" },
    { name: "Beef Stew", price: 4000, image: "./Pictures/4t0fl03m.png" },
    { name: "Pasta", price: 3500, image: "./Pictures/4t0fl03m.png" },
    { name: "Fish", price: 2500, image: "./Pictures/4t0fl03m.png" },
    { name: "Barbeque", price: 5500, image: "./Pictures/4t0fl03m.png" },
    { name: "Cocktail", price: 2000, image: "./Pictures/4t0fl03m.png" },
    { name: "Shawarma", price: 6000, image: "./Pictures/4t0fl03m.png" },
    { name: "Ice-cream", price: 4000, image: "./Pictures/4t0fl03m.png" }
];

// Cart management
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update cart display
function updateCartDisplay() {
    const cartItemsEl = document.getElementById('cart-items');
    const totalItemsEl = document.getElementById('total-items');
    const totalAmountEl = document.getElementById('total-amount');
    const lastItemEl = document.getElementById('last-item');
    const cartContainer = document.getElementById('cart-container');

    cartItemsEl.innerHTML = '';
    let totalItems = 0;
    let totalAmount = 0;
    let lastItem = 'None';

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${item.name} x${item.qty} - NGN ${item.price * item.qty} <button class="delete-btn" data-index="${index}">×</button>`;
        cartItemsEl.appendChild(li);
        totalItems += item.qty;
        totalAmount += item.price * item.qty;
        lastItem = item.name;
    });

    totalItemsEl.textContent = `Total Items: ${totalItems}`;
    totalAmountEl.textContent = `Total Amount: NGN ${totalAmount}`;
    lastItemEl.textContent = `Last Item: ${lastItem}`;

    // Show or hide cart based on items
    cartContainer.style.display = cart.length > 0 ? 'block' : 'none';

    localStorage.setItem('cart', JSON.stringify(cart));
}

// Add item to cart
function addToCart(itemName, price, qty) {
    const existingItem = cart.find(item => item.name === itemName);
    if (qty === 0) {
        // Remove item if quantity is 0
        cart = cart.filter(item => item.name !== itemName);
    } else if (existingItem) {
        existingItem.qty = qty; // Set to new qty instead of adding
    } else {
        cart.push({ name: itemName, price: parseInt(price), qty: qty });
    }
    updateCartDisplay();
}

// Remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartDisplay();
}

// Clear cart
function clearCart() {
    cart = [];
    updateCartDisplay();
}

document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu functionality
    const hamburgerBtn = document.getElementById('hamburger-btn-menu');
    const navMenu = document.getElementById('nav-menu-menu');

    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', function() {
            navMenu.classList.toggle('show');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!hamburgerBtn.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove('show');
            }
        });
    }

    // Category filtering functionality
    const categoryButtons = document.querySelectorAll('.category-btn');
    const menuItems = document.querySelectorAll('.menu-item');

    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');

            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            // Filter menu items
            menuItems.forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Modals
    const quantityModal = document.getElementById('quantity-modal');
    const checkoutModal = document.getElementById('checkout-modal');
    const customerModal = document.getElementById('customer-modal');
    const orderConfirmationModal = document.getElementById('order-confirmation-modal');

    // Close modals
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            quantityModal.style.display = 'none';
            checkoutModal.style.display = 'none';
            customerModal.style.display = 'none';
            orderConfirmationModal.style.display = 'none';
        });
    });

    // Order buttons
    let selectedItem = null;
    document.querySelectorAll('.order-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            selectedItem = {
                name: this.getAttribute('data-item'),
                price: this.getAttribute('data-price')
            };
            const qtySelect = document.getElementById('quantity-select');
            qtySelect.value = '0'; // Always reset to 0
            quantityModal.style.display = 'block';
        });
    });

    // Quantity modal
    document.getElementById('confirm-quantity').addEventListener('click', () => {
        const qty = parseInt(document.getElementById('quantity-select').value);
        addToCart(selectedItem.name, selectedItem.price, qty);
        quantityModal.style.display = 'none';
    });

    document.getElementById('cancel-quantity').addEventListener('click', () => {
        quantityModal.style.display = 'none';
    });

    // Delete item from cart
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            const index = parseInt(e.target.getAttribute('data-index'));
            removeFromCart(index);
        }
    });

    // Checkout button
    document.getElementById('checkout-btn').addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Cart is empty!');
            return;
        }
        const checkoutItems = document.getElementById('checkout-items');
        const checkoutTotal = document.getElementById('checkout-total');
        checkoutItems.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            const div = document.createElement('div');
            div.textContent = `${item.name} x${item.qty} - NGN ${item.price * item.qty}`;
            checkoutItems.appendChild(div);
            total += item.price * item.qty;
        });
        checkoutTotal.textContent = `Total: NGN ${total}`;
        checkoutModal.style.display = 'block';
    });

    // Checkout modal
    document.getElementById('confirm-order').addEventListener('click', () => {
        checkoutModal.style.display = 'none';
        customerModal.style.display = 'block';
    });

    document.getElementById('cancel-order').addEventListener('click', () => {
        checkoutModal.style.display = 'none';
    });

    // Customer modal
    document.getElementById('pickup').addEventListener('change', () => {
        document.getElementById('pickup-fields').style.display = 'block';
        document.getElementById('delivery-fields').style.display = 'none';
    });

    document.getElementById('delivery').addEventListener('change', () => {
        document.getElementById('pickup-fields').style.display = 'none';
        document.getElementById('delivery-fields').style.display = 'block';
    });

    // Populate cities based on state
    document.getElementById('customer-state').addEventListener('input', function() {
        const state = this.value;
        const cityList = document.getElementById('city-list');
        cityList.innerHTML = '';
        if (citiesByState[state]) {
            citiesByState[state].forEach(city => {
                const option = document.createElement('option');
                option.value = city;
                cityList.appendChild(option);
            });
        }
    });

    // Populate bus stops based on city
    document.getElementById('customer-city').addEventListener('input', function() {
        const city = this.value;
        const busStopList = document.getElementById('bus-stop-list');
        busStopList.innerHTML = '';
        if (townsByCity[city]) {
            townsByCity[city].forEach(busStop => {
                const option = document.createElement('option');
                option.value = busStop;
                busStopList.appendChild(option);
            });
        }
    });

    // Customer form submit
    document.getElementById('customer-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const orderType = document.querySelector('input[name="order-type"]:checked').value;
        const name = document.getElementById('customer-name').value;
        const phone = document.getElementById('customer-phone').value;
        let details = `Name: ${name}\nPhone: ${phone}\nOrder Type: ${orderType}\n`;

        let deliveryFee = 0;
        if (orderType === 'pickup') {
            const pickupTime = document.getElementById('pickup-time').value;
            details += `Pickup Time: ${pickupTime}\n`;
        } else {
            const state = document.getElementById('customer-state').value;
            const city = document.getElementById('customer-city').value;
            const busStop = document.getElementById('customer-bus-stop').value;
            const address = document.getElementById('customer-address').value;
            deliveryFee = deliveryFees[busStop] || 0;
            details += `State: ${state}\nCity: ${city}\nBus Stop: ${busStop}\nAddress: ${address}\nDelivery Fee: NGN ${deliveryFee}\n`;
        }

        const orderDetails = document.getElementById('order-details');
        orderDetails.innerHTML = `<pre>${details}</pre>`;
        orderDetails.innerHTML += '<h4>Items:</h4>';
        cart.forEach(item => {
            orderDetails.innerHTML += `<p>${item.name} x${item.qty} - NGN ${item.price * item.qty}</p>`;
        });
        const itemsTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
        const total = itemsTotal + deliveryFee;
        orderDetails.innerHTML += `<p>Items Total: NGN ${itemsTotal}</p>`;
        if (deliveryFee > 0) {
            orderDetails.innerHTML += `<p>Delivery Fee: NGN ${deliveryFee}</p>`;
        }
        orderDetails.innerHTML += `<p><strong>Total: NGN ${total}</strong></p>`;

        customerModal.style.display = 'none';
        orderConfirmationModal.style.display = 'block';
    });

    document.getElementById('cancel-details').addEventListener('click', () => {
        customerModal.style.display = 'none';
    });

    // Order confirmation modal
    document.getElementById('confirm-order-final').addEventListener('click', () => {
        alert('Order placed successfully!');
        clearCart();
        orderConfirmationModal.style.display = 'none';
    });

    document.getElementById('cancel-order-final').addEventListener('click', () => {
        orderConfirmationModal.style.display = 'none';
    });

    // Clear all button
    document.getElementById('clear-all-btn').addEventListener('click', () => {
        if (confirm('Are you sure you want to clear the cart?')) {
            clearCart();
        }
    });

    // Initialize cart display on load
    updateCartDisplay();
});


