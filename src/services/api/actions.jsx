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
                        "text" : "<p> </p> </p>"
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
                        "text" : "<p>  Marianna Serocka an artist currently based in Kraków/Poland.</p>Education:2009-2014 Academy of Fine Arts in Krakow, Poland. MA Degree in Painting </p> 2012-2013 Aalto University in Helsinlki, Poland. MA Degree in Painting> Since my official comic book debut in 2016 I’ve been working for a wide range of clients including press, advertising, music and fashion industry.</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>All images © Marianna Serocka 2019</p>"
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
                      "text" : "<p>Exhibitions: </p> 2018 Ozimina – W I D N A </p> WGW/ Potencja Galeria</p> 2017 Wystawa Zbiorowa: NO PROBLEM - Galeria Potencja </p> 2016 Wystawa Zbiorowa: Galeria Henryk | Zespół Pieśni i Tańca Henryk →Galeria Henryk | Das ist Wiksa </p> AWARDS AND ACHIEVEMENTS:</p> 2018 Stypendium Twórcze Miasta Krakowa </p> 2017 Rezydencja Wyszechradzka w Budapeszie Stypendium Twórcze Miasta Krakowa </p>"
                  }
                ]
            ]
        }
    })
);

export default getGallery;
