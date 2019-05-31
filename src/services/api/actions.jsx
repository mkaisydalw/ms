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
            "title" : "About",
            "page" : [
                [
                    {
                        "place" : "left",
                        "title" : "",
                        "text" : ""
                    },
                    {
                        "place" : "middle",
                        "title" : "NEWS",
                        "text" : "<p> <a href="https://www.polskieradio.pl/10/482/Artykul/1682219,Disco-Cry-czyli-apetyt-na-wieczne-imprezy">NAZWA </a></p> </p>"
                    }
                ],
                [
                    {
                        "place" : "left",
                        "title" : "KONTAKT",
                        "text" : "<p>T +48 515 832 618<br /><a href=\"mailto:marianna.serocka@gmail.com\">marianna.serocka@gmail.com</a><br /"
                    },
                    {
                        "place" : "middle",
                        "text" : "<p>  Marianna Serocka, b.1988 in Starogarg Gdanski, Poland. Work and lives in Kraków.</p> Since my official comic book debut in 2016 I’ve been working for a wide range of clients including press, advertising, music and fashion industry.</p> <b>EDUCATION</b> </p>2009-2014 Academy of Fine Arts in Krakow, Poland. MA Degree in Painting </p>2012-2013 Aalto University in Helsinlki, Finland.</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>All images © Marianna Serocka 2019</p>"
                    }
                ],
                [
                  {
                      "place" : "left",
                      "title" : "",
                      "text" : ""
                  },
                  {
                      "place" : "middle",
                      "title" : "EXHIBITIONS",
                      "text" : "</p> 2019 </p> Głębokie słuchanie, BWA Katowice </p> 2018 </p> Versailles is over, Négyszoba Galéria, Budapest, Hungary </p> <a href=\"http://widna.pl/index.php/ozimina/\">Ozimina,Widna Gallery,Kraków </a></p> </p> 2017 </p> NO PROBLEM,Potencja Gallery,Kraków </p> 2016 </p> Zespół Pieśni i Tańca Henryk, Henryk Gallery, Kraków </p> Das ist Wiksa, Henryk gallery, Kraków </p> <b>AWARDS AND ACHIEVEMENTS</b> </p> 2018 </p> Stypendium Twórcze Miasta Krakowa </p> 2017 </p> Rezydencja Wyszechradzka w Budapeszie </p> Stypendium Twórcze Miasta Krakowa </p>"
                  }
                ]
            ]
        }
    })
);

export default getGallery;
