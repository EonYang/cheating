var showTranslation = (translations) => {
    translations = Array.isArray(translations) ? translations : [translations];
	let translateBody;
    console.log('Translations:');
    translations.forEach((translation, i) => {
        //console.log(`${text[i]} => (${target}) ${translation}`);
        translateBody = $('<h4></h4>').text(`${questionChar} means ${translation} `);
    });
    $('#bottom').prepend(translateBody);
};

var getTranslation = (char) => {
    let charEncoded = encodeURIComponent(char);
    let url = `./api/toEn?char=${charEncoded}`;
    console.log(url);
    $.ajax({
        url: url,
        success: (data) => {
            showTranslation(data);
        },
        error: () => {
            console.log('trans api error');
        }
    });
};
