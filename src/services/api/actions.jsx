//@flow
const requestData = () => ({
    type: 'REQUEST_DATA',
});

const receiveData = (data: Object) => ({
    type: 'RECEIVE_DATA',
    data,
});

export const initAPI = () => (
    async (dispatch: Function) => {
        dispatch(requestData());
        const response = await dispatch(getGallery());
        dispatch(receiveData(response));
    }
);

const getGallery = () => (
    async () => ({
        "gallery": [
            {
                "id" : "disco_cry",
                "name" : "Disco Cry",
                "image" : "images/discocry.jpg",
                "className" : "link--black",
                "items" : [
                    {
                        "src" : "images/001.jpg",
                        "type" : "",
                        "name" : "001"
                    },
                     {
                        "src" : "images/Marianna Serocka_Strona_24.jpg",
                        "type" : "full",
                        "name" : "Marianna Serocka_Strona_24"
                    },
                    {
                        "src" : "images/Marianna Serocka_Strona_22.jpg",
                        "type" : "",
                        "name" : "Marianna Serocka_Strona_22"
                    },
                    {
                        "src" : "images/discocry.jpg",
                        "type" : "full",
                        "name" : "discocry"
                    }
                ]
            },
            {
                "id" : "na_wieczor",
                "name" : "Na wieczór",
                "image" : "images/Bez nazwy-2.jpg",
                "className" : "link--white",
                "items" : [
                    {
                        "src" : "images/20.jpg",
                        "type" : "large",
                        "name" : "20"
                    },
                    {
                        "src" : "images/Bez nazwy-2.jpg",
                        "type" : "full",
                        "name" : "Bez nazwy-2"
                    },
                    {
                        "src" : [
                            "images/5(2)-cotakabledziutkajesteś.jpg",
                            "images/102 (2).jpg"
                        ],
                        "type" : "double",
                        "name" : "5(2)-cotakabledziutkajesteś"
                    }
                ]
            }
        ],
        "about" : {
            "title" : "O",
            "page" : [
                [
                    {
                        "place" : "left",
                        "title" : "",
                        "text" : ""
                    },
                    {
                        "place" : "middle",
                        "title" : "EXHIBITIONS",
                        "text" : "<p>Pop-up Hip Hip Library at Structura Gallery :<br />strūctūra<//p><p>Festival filmowy w Teheranie</p><p>Rezydencja Wyszechradzka w Budapeszie</p><p>Wystawa zbiorowa: Rysować naturalnie!<br />GSW Chłodna 20</p><p>Sztuka Komiksu Europy Środkowej CENTRALA<br />Polska institutet i Stockholm</p><p>Wystawa Zbiorowa: NO PROBLEM<br />Galeria Potencja</p><p>Morderstwo<br />Korporacja Ha!art</p><p>Wystawa zbiorowa: Leszek Misiak i uczniowie<br />Przestrzeń dla Sztuki<br />OPEN EYES FESTIVAL 2017//p><p>Wystawa indywidualna: Galeria Henryk | Das ist Wiksa</p>"
                    }
                ],
                [
                    {
                        "place" : "left",
                        "title" : "KONTAKT",
                        "text" : "<p>T +48 515 832 618<br /><a href=\"mailto:marianna.serocka@gmail.com\">marianna.serocka@gmail.com</a><br /
                    },
                    {
                        "place" : "middle",
                        "text" : "<p> Marianna Serocka – Visual Artist Born n 1988 in Starogard Gdanski. In 2014 she graduated from Painting at Academy of Fine Arts in Cracow. Live and work in Cracow..</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>All images © Marianna Serocka 2019</p>"
                    }
                ]
            ]
        }
    })
);

export default getGallery;
