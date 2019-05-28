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
                "id" : "for_evening",
                "name" : "Na wieczó",
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
                "id" : "disco_cry",
                "name" : "Disco Cry",
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
                        "title" : "SELECTED CLIENTS",
                        "text" : "<p>AnOther<br />Anthropologie<br />Centre for Sustainable Fashion<br />Christopher Raeburn<br />GreenPeace<br />i-D<br />Its Nice That<br />Maiyet<br />Nike<br />Preen<br />Selfridges<br />The Royal Opera House<br />Vogue&nbsp;UK<br />Vogue Russia<br />Vogue Turkey<br />Vogue Ukraine</p>"
                    },
                    {
                        "place" : "middle",
                        "title" : "EXHIBITIONS",
                        "text" : "<p>Stypendium Twórcze Miasta Krakowa<br />2018</p><p>Pop-up Hip Hip Library at Structura Gallery :<br />strūctūra</p><p>Laureaci Stypendiów Twórczych Miasta Krakowa<br />2017</p><p>Wywiad w Polskim Radiu Czwórka</p><p>Festival filmowy w Teheranie</p><p>Rezydencja Wyszechradzka w Budapeszie</p><p>Wystawa zbiorowa: Rysować naturalnie!<br />GSW Chłodna 20</p><p>Sztuka Komiksu Europy Środkowej CENTRALA<br />Polska institutet i Stockholm</p><p>Wystawa Zbiorowa: NO PROBLEM<br />Galeria Potencja</p><p>Morderstwo<br />Korporacja Ha!art</p><p>Fotograficzny Pamiętnik</p><p>Wystawa zbiorowa: Leszek Misiak i uczniowie<br />Przestrzeń dla Sztuki<br />OPEN EYES FESTIVAL 2017</p><p>Disco Cry | Centrala | Mądre Komiksy</p><p>Wystawa indywidualna: Galeria Henryk | Das ist Wiksa</p>"
                    }
                ],
                [
                    {
                        "place" : "left",
                        "title" : "KONTAKT",
                        "text" : "<p>T +48 515 832 618<br /><a href=\"mailto:marianna.serocka@gmail.com\">marianna.serocka@gmail.com</a><br />Facebook; <a href=\"https://www.facebook.com/otherthemes/\" target=\"_blank\">Other Themes</a></p>"
                    },
                    {
                        "place" : "middle",
                        "text" : "<p>Kerry’s&nbsp;vision was influenced by several years of travelling, finally settling on London as her home. She studied at London College of Printing, now part of University of the Arts, and began working in documentary and landscape photography.</p><p>Her initial body of work and first solo exhibition “The Emptiness of a Land with no Fences” was shown at the Muse Gallery London, showcasing a series of images taken in Mongolia. The work went on to be shown as part of a “Winter notes on Summer impressions” at the Six Degrees Gallery London, and then also shown at The Front View Gallery.</p><p>Since her first visit in 2005 Kerry has returned to Mongolia on several occasions, most recently to direct a short film documenting the&nbsp;‘Fair’ cashmere project, which supports the livelihoods of nomadic herding communities in remote regions of The Gobi desert.</p><p>Moving into exploring fashion, she became interested in bridging the gap between fashion and her exhibition work, which led her to work on a number of projects that highlight the need for greater social and environmental awareness in the fashion industry. i-Sustain, a year long project for i-D magazine was shot in a variety of British landscapes, exploring the evolving relationship between fashion and sustainability; Part of the work went on to be exhibited at Mother London.</p><p>Kerry’s work is often shot in the lonely isolation of remote locations, where both her subjects and her distinct use of colour, texture and light, oscilate between belonging and incongruity.</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>All images © Marianna Serocka 2019</p>"
                    }
                ]
            ]
        }
    })
);

export default getGallery;