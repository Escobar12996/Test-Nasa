export class ApiNasaTestService {
  static dateStringSimple = '2022-03-29T00:00:00';

  static testSimpleApiUrl =
    'https://api.nasa.gov/planetary/apod?api_key=zdUP8ElJv1cehFM0rsZVSQN7uBVxlDnu4diHlLSb&date=2022-3-29';

  static testSimple = {
    copyright: 'Carlos Kiko Fairbairn',
    date: '2022-03-29',
    explanation:
      'When two planets pass on the night sky, they can usually be seen near each other for a week or more. In the case of this planetary conjunction, Venus and Mars passed within 4 degrees of each other earlier this month. The featured image was taken a few days prior, when Venus was slowing rising in the pre-dawn sky, night by night, while Mars was slowly setting. The image, a four-part mosaic, was captured in Brazil from the small town Teresópolis. Besides Venus and Mars, the morning sky now also includes the more distant planet Saturn.  Of course, these conjunctions are only angular -- Venus, Mars, and Saturn continue to orbit the Sun in very different parts of our Solar System.  Next week, the angle between Saturn and Mars will drop to below a quarter of a degree.',
    hdurl: 'https://apod.nasa.gov/apod/image/2203/VenusMars_Fairbairn_1433.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'Venus and Mars: Passing in the Night',
    url: 'https://apod.nasa.gov/apod/image/2203/VenusMars_Fairbairn_960.jpg',
  };

  static dateStringDoubleOne = '2022-03-29T00:00:00';
  static dateStringDoubleTwo = '2022-03-20T00:00:00';
  static testTwoApiUrl =
    'https://api.nasa.gov/planetary/apod?api_key=zdUP8ElJv1cehFM0rsZVSQN7uBVxlDnu4diHlLSb&start_date=2022-3-20&end_date=2022-3-29';

  static testTwo = [
    {
      copyright: 'Roland Christen',
      date: '2022-03-20',
      explanation:
        'What\'s that at the end of the road? The Sun. Many towns have roads that run east - west, and on two days each year, the Sun rises and sets right down the middle. Today is one of those days: an equinox. Not only is today a day of equal night ("aequus"-"nox") and day time, but also a day when the sun rises precisely to the east and sets due west. Featured here is a picturesque road in northwest Illinois, USA that runs approximately east -west. The image was taken during the March Equinox of 2015, and shows the Sun down the road at sunset. In many cultures, this March equinox is taken to be the first day of a season, typically spring in Earth\'s northern hemisphere, and autumn in the south. Does your favorite street run east - west? Tonight, at sunset, you can find out with a quick glance.',
      hdurl:
        'https://apod.nasa.gov/apod/image/2203/EquinoxSunset_Christen_1852.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'A Picturesque Equinox Sunset',
      url: 'https://apod.nasa.gov/apod/image/2203/EquinoxSunset_Christen_960.jpg',
    },
    {
      copyright: 'Cees BassaNetherlands Institute for Radio Astronomy',
      date: '2022-03-21',
      explanation:
        'What if you could see the entire sky -- all at once -- for an entire year? That, very nearly, is what is pictured here.  Every 15 minutes during 2021, an all-sky camera took an image of the sky over the Netherlands. Central columns from these images were then aligned and combined to create the featured keogram, with January at the top, December at the bottom, and the middle of the night running vertically just left of center. What do we see?  Most obviously, the daytime sky is mostly blue, while the nighttime sky is mostly black.  The twelve light bands crossing the night sky are caused by the glow of the Moon. The thinnest part of the black hourglass shape occurs during the summer solstice when days are the longest, while the thickest part occurs at the winter solstice. Yesterday was an equinox -- when night and day were equal -- and the northern-spring equinox from one year ago can actually be located in the keogram -- about three-quarters of the way up.    Follow APOD on Instagram in: English, Indonesian, Persian, Portuguese or Taiwanese',
      hdurl: 'https://apod.nasa.gov/apod/image/2203/YearOfSky_Bassa_960.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'The Sky in 2021',
      url: 'https://apod.nasa.gov/apod/image/2203/YearOfSky_Bassa_960.jpg',
    },
    {
      copyright: 'Göran Strand',
      date: '2022-03-22',
      explanation:
        "What's that in the sky? An aurora. A large coronal mass ejection occurred on our Sun earlier this month, throwing a cloud of fast-moving electrons, protons, and ions toward the Earth. Part of this cloud impacted our Earth's magnetosphere and, bolstered by a sudden gap, resulted in spectacular auroras being seen at some high northern latitudes. Featured here is a particularly photogenic auroral corona captured above a forest in Sweden from a scenic perch overlooking the city of Östersund. To some,  this shimmering green glow of recombining atmospheric oxygen might appear like a large whale, but feel free to share what it looks like to you.  The unusually quiet Sun of the past few years has now passed. As our Sun now approaches a solar maximum in its 11-year solar magnetic cycle, dramatic auroras like this are sure to continue.    Open Science: Browse 2,700+ codes in the Astrophysics Source Code Library",
      hdurl:
        'https://apod.nasa.gov/apod/image/2203/WhaleAurora_Strand_1500.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'A Whale of an Aurora over Swedish Forest',
      url: 'https://apod.nasa.gov/apod/image/2203/WhaleAurora_Strand_960.jpg',
    },
    {
      date: '2022-03-23',
      explanation:
        "Massive stars can blow bubbles.  The featured image shows perhaps the most famous of all star-bubbles, NGC 7635, also known simply as The Bubble Nebula. Although it looks delicate, the 7-light-year diameter bubble offers evidence of violent processes at work. Above and left of the Bubble's center is a hot, O-type star, several hundred thousand times more luminous and some 45-times more massive than the Sun. A fierce stellar wind and intense radiation from that star has blasted out the structure of glowing gas against denser material in a surrounding molecular cloud. The intriguing Bubble Nebula and associated cloud complex lie a mere 7,100 light-years away toward the boastful constellation Cassiopeia. This sharp, tantalizing view of the cosmic bubble is a reprocessed composite of previously acquired Hubble Space Telescope image data.   Birthday Surprise: What picture did APOD feature on your birthday? (post 1995)",
      hdurl:
        'https://apod.nasa.gov/apod/image/2203/Bubble_HubbleOzsarac_1952.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'The Bubble Nebula from Hubble',
      url: 'https://apod.nasa.gov/apod/image/2203/Bubble_HubbleOzsarac_960.jpg',
    },
    {
      date: '2022-03-24',
      explanation:
        "Peculiar spiral galaxy Arp 78 is found within the boundaries of the head strong constellation Aries. Some 100 million light-years beyond the stars and nebulae of our Milky Way galaxy, the island universe is over 100,000 light-years across. Also known as NGC 772, it sports a prominent, outer spiral arm in this detailed cosmic portrait from the large Gemini North telescope near the summit of Maunakea, Hawaii, planet Earth. Tracking along sweeping dust lanes and lined with young blue star clusters, Arp 78's spiral arm is likely pumped-up by galactic-scale gravitational tidal interactions The close companion galaxy responsible is NGC 770, located off the upper right of this frame. But more distant background galaxies are clearly visible in the cosmic field of view.",
      hdurl: 'https://apod.nasa.gov/apod/image/2203/noirlab2209a_ngc772.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'Arp 78: Peculiar Galaxy in Aries',
      url: 'https://apod.nasa.gov/apod/image/2203/noirlab2209a_ngc772_1024.jpg',
    },
    {
      copyright: 'Damien Cannane',
      date: '2022-03-25',
      explanation:
        "Braided and serpentine filaments of glowing gas suggest this nebula's popular name, The Medusa Nebula. Also known as Abell 21, this Medusa is an old planetary nebula some 1,500 light-years away in the constellation Gemini. Like its mythological namesake, the nebula is associated with a dramatic transformation. The planetary nebula phase represents a final stage in the evolution of low mass stars like the sun as they transform themselves from red giants to hot white dwarf stars and in the process shrug off their outer layers. Ultraviolet radiation from the hot star powers the nebular glow. The Medusa's transforming star is the faint one near the center of the overall bright crescent shape. In this deep telescopic view, fainter filaments clearly extend above and left of the bright crescent region. The Medusa Nebula is estimated to be over 4 light-years across.",
      hdurl:
        'https://apod.nasa.gov/apod/image/2203/Medusa_Nebula_141_x_180s.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'The Medusa Nebula',
      url: 'https://apod.nasa.gov/apod/image/2203/Medusa_Nebula_141_x_180s.jpg',
    },
    {
      date: '2022-03-26',
      explanation:
        "The night side of Pluto spans this shadowy scene. In the stunning spacebased perspective the Sun is 4.9 billion kilometers (almost 4.5 light-hours) behind the dim and distant world. It was captured by far flung New Horizons in July of 2015 when the spacecraft was at a range of some 21,000 kilometers from Pluto, about 19 minutes after its closest approach. A denizen of the Kuiper Belt in dramatic silhouette, the image also reveals Pluto's tenuous, surprisingly complex layers of hazy atmosphere. Near the top of the frame the crescent twilight landscape includes southern areas of nitrogen ice plains now formally known as Sputnik Planitia and rugged mountains of water-ice in the Norgay Montes.",
      hdurl: 'https://apod.nasa.gov/apod/image/2203/PIA20727PlutoNight.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'Pluto at Night',
      url: 'https://apod.nasa.gov/apod/image/2203/PIA20727PlutoNight1024c.jpg',
    },
    {
      date: '2022-03-27',
      explanation:
        "Why would the surface of Titan light up with a blinding flash? The reason: a sunglint from liquid seas.  Saturn's moon Titan has numerous smooth lakes of methane that, when the angle is right, reflect sunlight as if they were mirrors.  Pictured here in false-color, the robotic Cassini spacecraft that orbited Saturn from 2004 to 2017 imaged the cloud-covered Titan in 2014 in different bands of cloud-piercing infrared light.  This specular reflection was so bright it saturated one of Cassini's infrared cameras. Although the sunglint was annoying -- it was also useful.  The reflecting regions confirm that northern Titan houses a wide and complex array of seas with a geometry that indicates periods of significant evaporation.  During its numerous passes of our Solar System's most mysterious moon, Cassini has revealed Titan to be a world with active weather -- including times when it rains a liquefied version of natural gas.",
      hdurl:
        'https://apod.nasa.gov/apod/image/2203/TitanGlint_cassini_2002.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'Titan Seas Reflect Sunlight',
      url: 'https://apod.nasa.gov/apod/image/2203/TitanGlint_cassini_960.jpg',
    },
    {
      copyright: 'Petr HorálekESOPhoto AmbassadorInst. of Physics in Opava',
      date: '2022-03-28',
      explanation:
        'The southernmost part of the Milky Way contains not only the stars of the Southern Cross, but the closest star system to our Sun -- Alpha Centauri.  The Southern Cross itself is topped by the bright, yellowish star Gamma Crucis.  A line from Gamma Crucis through the blue star at the bottom of the cross, Acrux, points toward the south celestial pole, located just above the small island in the featured picture -- taken in early March.  That island is Madivaru of the Maldives in the Indian Ocean. Against faint Milky Way starlight, the dark Coal Sack Nebula lies just left of the cross, while farther left along the Milky Way are the bright stars Alpha Centauri (left) and Beta Centauri (Hadar).  Alpha Centauri A, a Sun-like star anchoring a three-star system with exoplanets, is a mere 4.3 light-years distant.  Seen from Alpha Centauri, our own Sun would be a bright yellowish star in the otherwise recognizable constellation Cassiopeia.   Almost Hyperspace: Random APOD Generator',
      hdurl:
        'https://apod.nasa.gov/apod/image/2203/SouthIsland_Horalek_1326.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'Gems of a Maldivean Night',
      url: 'https://apod.nasa.gov/apod/image/2203/SouthIsland_Horalek_960.jpg',
    },
    {
      copyright: 'Carlos Kiko Fairbairn',
      date: '2022-03-29',
      explanation:
        'When two planets pass on the night sky, they can usually be seen near each other for a week or more. In the case of this planetary conjunction, Venus and Mars passed within 4 degrees of each other earlier this month. The featured image was taken a few days prior, when Venus was slowing rising in the pre-dawn sky, night by night, while Mars was slowly setting. The image, a four-part mosaic, was captured in Brazil from the small town Teresópolis. Besides Venus and Mars, the morning sky now also includes the more distant planet Saturn.  Of course, these conjunctions are only angular -- Venus, Mars, and Saturn continue to orbit the Sun in very different parts of our Solar System.  Next week, the angle between Saturn and Mars will drop to below a quarter of a degree.',
      hdurl:
        'https://apod.nasa.gov/apod/image/2203/VenusMars_Fairbairn_1433.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'Venus and Mars: Passing in the Night',
      url: 'https://apod.nasa.gov/apod/image/2203/VenusMars_Fairbairn_960.jpg',
    },
  ];
}
