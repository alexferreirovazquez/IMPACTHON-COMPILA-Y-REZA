const questions = [
  { q: "¿Cuántos huesos tiene el cuerpo humano adulto?", answers: ["198", "206", "215", "189"], correct: 1, category: "Ciencia" },
  { q: "¿En qué año cayó el Muro de Berlín?", answers: ["1987", "1991", "1989", "1993"], correct: 2, category: "Historia" },
  { q: "¿Cuál es el país más grande del mundo?", answers: ["China", "Canadá", "EE.UU.", "Rusia"], correct: 3, category: "Geografía" },
  { q: "¿Cuánto es la raíz cuadrada de 144?", answers: ["11", "12", "13", "14"], correct: 1, category: "Mates" },
  { q: "¿Qué planeta es el más cercano al Sol?", answers: ["Venus", "Marte", "Mercurio", "Tierra"], correct: 2, category: "Ciencia" },
  { q: "¿Cuántos continentes hay en el mundo?", answers: ["5", "6", "7", "8"], correct: 2, category: "Geografía" },
  { q: "¿Cuál es el elemento químico con símbolo O?", answers: ["Oro", "Osmio", "Oxígeno", "Oganesón"], correct: 2, category: "Ciencia" },
  { q: "¿Quién pintó la Mona Lisa?", answers: ["Miguel Ángel", "Rafael", "Leonardo da Vinci", "Botticelli"], correct: 2, category: "Arte" },
  { q: "¿Cuál es la capital de Australia?", answers: ["Sídney", "Melbourne", "Brisbane", "Canberra"], correct: 3, category: "Geografía" },
  { q: "¿En qué año comenzó la Primera Guerra Mundial?", answers: ["1912", "1914", "1916", "1918"], correct: 1, category: "Historia" },
  { q: "¿Cuántos lados tiene un hexágono?", answers: ["5", "7", "6", "8"], correct: 2, category: "Mates" },
  { q: "¿Cuál es el océano más grande?", answers: ["Atlántico", "Índico", "Ártico", "Pacífico"], correct: 3, category: "Geografía" },
  { q: "¿Qué gas es el más abundante en la atmósfera terrestre?", answers: ["Oxígeno", "Nitrógeno", "CO2", "Argón"], correct: 1, category: "Ciencia" },
  { q: "¿Quién escribió 'Don Quijote de la Mancha'?", answers: ["Lope de Vega", "Quevedo", "Cervantes", "Góngora"], correct: 2, category: "Literatura" },
  { q: "¿Cuántos jugadores hay en un equipo de fútbol?", answers: ["10", "12", "11", "9"], correct: 2, category: "Deporte" },
  { q: "¿Cuál es el símbolo químico del oro?", answers: ["Go", "Or", "Ag", "Au"], correct: 3, category: "Ciencia" },
  { q: "¿En qué país se encuentra la Torre Eiffel?", answers: ["Italia", "Bélgica", "Francia", "España"], correct: 2, category: "Geografía" },
  { q: "¿Cuántos años dura un siglo?", answers: ["10", "50", "1000", "100"], correct: 3, category: "Historia" },
  { q: "¿Cuál es el planeta más grande del sistema solar?", answers: ["Saturno", "Neptuno", "Júpiter", "Urano"], correct: 2, category: "Ciencia" },
  { q: "¿Qué instrumento mide la temperatura?", answers: ["Barómetro", "Higrómetro", "Termómetro", "Anemómetro"], correct: 2, category: "Ciencia" },
  { q: "¿Cuántos días tiene un año bisiesto?", answers: ["363", "365", "367", "366"], correct: 3, category: "Ciencia" },
  { q: "¿Cuál es la montaña más alta del mundo?", answers: ["K2", "Kangchenjunga", "Everest", "Lhotse"], correct: 2, category: "Geografía" },
  { q: "¿En qué continente está Egipto?", answers: ["Asia", "Europa", "África", "Oceanía"], correct: 2, category: "Geografía" },
  { q: "¿Cuánto es 15% de 200?", answers: ["25", "35", "30", "20"], correct: 2, category: "Mates" },
  { q: "¿Quién fue el primer hombre en pisar la Luna?", answers: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "John Glenn"], correct: 2, category: "Historia" },
  { q: "¿Cuál es la capital de Japón?", answers: ["Osaka", "Kioto", "Hiroshima", "Tokio"], correct: 3, category: "Geografía" },
  { q: "¿Cuántos meses tiene un año?", answers: ["10", "11", "13", "12"], correct: 3, category: "General" },
  { q: "¿De qué material está hecha la seda?", answers: ["Algodón", "Lino", "Gusanos de seda", "Lana"], correct: 2, category: "Ciencia" },
  { q: "¿Cuál es el río más largo del mundo?", answers: ["Amazonas", "Nilo", "Yangtsé", "Misisipi"], correct: 1, category: "Geografía" },
  { q: "¿Qué planeta tiene los anillos más famosos?", answers: ["Júpiter", "Urano", "Neptuno", "Saturno"], correct: 3, category: "Ciencia" },
  { q: "¿En qué año se descubrió América?", answers: ["1389", "1492", "1512", "1476"], correct: 1, category: "Historia" },
  { q: "¿Cuántas patas tiene una araña?", answers: ["6", "10", "8", "12"], correct: 2, category: "Ciencia" },
  { q: "¿Cuál es la capital de Brasil?", answers: ["Río de Janeiro", "São Paulo", "Brasilia", "Salvador"], correct: 2, category: "Geografía" },
  { q: "¿Quién compuso la Quinta Sinfonía?", answers: ["Mozart", "Bach", "Beethoven", "Schubert"], correct: 2, category: "Arte" },
  { q: "¿Cuántos colores tiene el arcoíris?", answers: ["5", "6", "8", "7"], correct: 3, category: "Ciencia" },
  { q: "¿Cuál es el metal más ligero?", answers: ["Aluminio", "Litio", "Titanio", "Berilio"], correct: 1, category: "Ciencia" },
  { q: "¿En qué ciudad se celebraron los primeros Juegos Olímpicos modernos?", answers: ["París", "Londres", "Atenas", "Roma"], correct: 2, category: "Deporte" },
  { q: "¿Cuánto es 7 × 8?", answers: ["54", "56", "48", "63"], correct: 1, category: "Mates" },
  { q: "¿Cuál es la capital de Rusia?", answers: ["San Petersburgo", "Moscú", "Kiev", "Minsk"], correct: 1, category: "Geografía" },
  { q: "¿Qué órgano bombea la sangre en el cuerpo?", answers: ["Pulmón", "Hígado", "Corazón", "Riñón"], correct: 2, category: "Ciencia" },
  { q: "¿Quién escribió 'Romeo y Julieta'?", answers: ["Dickens", "Shakespeare", "Wilde", "Chaucer"], correct: 1, category: "Literatura" },
  { q: "¿Cuál es el país con más población del mundo?", answers: ["India", "EE.UU.", "China", "Indonesia"], correct: 0, category: "Geografía" },
  { q: "¿Cuántos planetas tiene el sistema solar?", answers: ["7", "9", "8", "10"], correct: 2, category: "Ciencia" },
  { q: "¿En qué año terminó la Segunda Guerra Mundial?", answers: ["1943", "1944", "1946", "1945"], correct: 3, category: "Historia" },
  { q: "¿Qué animal es el más rápido en tierra?", answers: ["León", "Guepardo", "Antílope", "Caballo"], correct: 1, category: "Ciencia" },
  { q: "¿Cuál es la capital de Alemania?", answers: ["Munich", "Hamburgo", "Berlín", "Frankfurt"], correct: 2, category: "Geografía" },
  { q: "¿Cuántos centímetros tiene un metro?", answers: ["10", "1000", "100", "10000"], correct: 2, category: "Mates" },
  { q: "¿Cuál es el lago más grande del mundo?", answers: ["Lago Superior", "Mar Caspio", "Lago Baikal", "Lago Victoria"], correct: 1, category: "Geografía" },
  { q: "¿Qué país tiene forma de bota?", answers: ["España", "Portugal", "Grecia", "Italia"], correct: 3, category: "Geografía" },
  { q: "¿Cuántos gramos tiene un kilogramo?", answers: ["100", "10000", "500", "1000"], correct: 3, category: "Mates" },
  { q: "¿Quién fue el primer presidente de EE.UU.?", answers: ["Abraham Lincoln", "Thomas Jefferson", "George Washington", "John Adams"], correct: 2, category: "Historia" },
  { q: "¿Cuál es el símbolo químico del agua?", answers: ["HO", "H2O2", "H2O", "HO2"], correct: 2, category: "Ciencia" },
  { q: "¿En qué país se originó el budismo?", answers: ["China", "Nepal/India", "Tíbet", "Tailandia"], correct: 1, category: "Historia" },
  { q: "¿Cuántos hemisferios tiene el cerebro humano?", answers: ["3", "4", "1", "2"], correct: 3, category: "Ciencia" },
  { q: "¿Cuál es la capital de España?", answers: ["Barcelona", "Madrid", "Sevilla", "Valencia"], correct: 1, category: "Geografía" },
  { q: "¿Qué instrumento musical tiene teclas blancas y negras?", answers: ["Violín", "Guitarra", "Piano", "Arpa"], correct: 2, category: "Arte" },
  { q: "¿Cuántos segundos tiene un minuto?", answers: ["100", "30", "60", "120"], correct: 2, category: "General" },
  { q: "¿Cuál es el metal más caro del mundo?", answers: ["Oro", "Platino", "Rodio", "Iridio"], correct: 2, category: "Ciencia" },
  { q: "¿En qué continente está Argentina?", answers: ["América del Norte", "Europa", "América del Sur", "Oceanía"], correct: 2, category: "Geografía" },
  { q: "¿Cuántos ángulos tiene un triángulo?", answers: ["4", "2", "3", "6"], correct: 2, category: "Mates" },
  { q: "¿Cuál es el animal terrestre más grande?", answers: ["Jirafa", "Hipopótamo", "Rinoceronte", "Elefante africano"], correct: 3, category: "Ciencia" },
  { q: "¿Qué país tiene la bandera con la estrella de David?", answers: ["Jordania", "Líbano", "Israel", "Arabia Saudí"], correct: 2, category: "Geografía" },
  { q: "¿En qué año llegó el hombre a la Luna?", answers: ["1967", "1971", "1965", "1969"], correct: 3, category: "Historia" },
  { q: "¿Cuántos jugadores hay en un equipo de baloncesto?", answers: ["6", "5", "7", "4"], correct: 1, category: "Deporte" },
  { q: "¿Cuál es la capital de China?", answers: ["Shanghái", "Hong Kong", "Pekín", "Guangzhou"], correct: 2, category: "Geografía" },
  { q: "¿Qué vitamina produce el cuerpo con el sol?", answers: ["Vitamina A", "Vitamina C", "Vitamina B12", "Vitamina D"], correct: 3, category: "Ciencia" },
  { q: "¿Cuánto es 2 elevado a 10?", answers: ["512", "256", "2048", "1024"], correct: 3, category: "Mates" },
  { q: "¿Cuál es el idioma más hablado del mundo?", answers: ["Inglés", "Español", "Mandarín", "Hindi"], correct: 2, category: "Cultura" },
  { q: "¿Quién pintó la Capilla Sixtina?", answers: ["Leonardo da Vinci", "Rafael", "Caravaggio", "Miguel Ángel"], correct: 3, category: "Arte" },
  { q: "¿En qué país está Machu Picchu?", answers: ["Bolivia", "Colombia", "Ecuador", "Perú"], correct: 3, category: "Geografía" },
  { q: "¿Cuántas horas tiene un día?", answers: ["12", "48", "36", "24"], correct: 3, category: "General" },
  { q: "¿Cuál es la estrella más cercana a la Tierra?", answers: ["Próxima Centauri", "Sirio", "El Sol", "Betelgeuse"], correct: 2, category: "Ciencia" },
  { q: "¿Qué país tiene más medallas olímpicas históricas?", answers: ["China", "Rusia", "Gran Bretaña", "EE.UU."], correct: 3, category: "Deporte" },
  { q: "¿Cuántos husos horarios tiene Rusia?", answers: ["9", "11", "13", "7"], correct: 1, category: "Geografía" },
  { q: "¿Cuál es el libro más vendido de la historia?", answers: ["El Quijote", "La Biblia", "El Principito", "Harry Potter"], correct: 1, category: "Literatura" },
  { q: "¿Qué significa CPU en informática?", answers: ["Control Power Unit", "Central Processing Unit", "Computer Program Unit", "Core Processing Unit"], correct: 1, category: "Tecnología" },
  { q: "¿En qué país se inventó la imprenta?", answers: ["China", "Corea", "Alemania", "Italia"], correct: 2, category: "Historia" },
  { q: "¿Cuántos lados tiene un cubo?", answers: ["4", "8", "5", "6"], correct: 3, category: "Mates" },
  { q: "¿Cuál es el país más pequeño del mundo?", answers: ["Mónaco", "San Marino", "Liechtenstein", "Ciudad del Vaticano"], correct: 3, category: "Geografía" },
  { q: "¿Qué órgano filtra la sangre en el cuerpo?", answers: ["Hígado", "Riñón", "Bazo", "Páncreas"], correct: 1, category: "Ciencia" },
  { q: "¿Cuántos jugadores hay en un equipo de béisbol?", answers: ["10", "11", "9", "8"], correct: 2, category: "Deporte" },
  { q: "¿Cuál es la capital de México?", answers: ["Guadalajara", "Ciudad de México", "Monterrey", "Tijuana"], correct: 1, category: "Geografía" },
  { q: "¿Quién desarrolló la teoría de la relatividad?", answers: ["Newton", "Bohr", "Einstein", "Planck"], correct: 2, category: "Ciencia" },
  { q: "¿En qué año se fundó la ONU?", answers: ["1948", "1939", "1950", "1945"], correct: 3, category: "Historia" },
  { q: "¿Cuántos metros tiene un kilómetro?", answers: ["100", "10000", "500", "1000"], correct: 3, category: "Mates" },
  { q: "¿Qué animal es el símbolo de la paz?", answers: ["Águila", "Paloma", "Cisne", "Cuervo"], correct: 1, category: "Cultura" },
  { q: "¿En qué país está el Coliseo Romano?", answers: ["Grecia", "Francia", "España", "Italia"], correct: 3, category: "Geografía" },
  { q: "¿Cuál es la capital de Canadá?", answers: ["Toronto", "Montreal", "Vancouver", "Ottawa"], correct: 3, category: "Geografía" },
  { q: "¿Cuántos mililitros tiene un litro?", answers: ["100", "10000", "500", "1000"], correct: 3, category: "Mates" },
  { q: "¿Qué planeta es conocido como el planeta rojo?", answers: ["Júpiter", "Venus", "Marte", "Mercurio"], correct: 2, category: "Ciencia" },
  { q: "¿Quién escribió '1984'?", answers: ["Aldous Huxley", "Ray Bradbury", "George Orwell", "Arthur Koestler"], correct: 2, category: "Literatura" },
  { q: "¿Cuántas notas musicales hay en la escala básica?", answers: ["5", "8", "7", "12"], correct: 2, category: "Arte" },
  { q: "¿En qué año se publicó el primer iPhone?", answers: ["2005", "2008", "2009", "2007"], correct: 3, category: "Tecnología" },
  { q: "¿Cuál es la capital de India?", answers: ["Mumbai", "Calcuta", "Nueva Delhi", "Chennai"], correct: 2, category: "Geografía" },
  { q: "¿Qué célula transporta el oxígeno en la sangre?", answers: ["Glóbulo blanco", "Plaqueta", "Neurona", "Glóbulo rojo"], correct: 3, category: "Ciencia" },
  { q: "¿Cuántos dientes tiene un adulto normalmente?", answers: ["28", "36", "24", "32"], correct: 3, category: "Ciencia" },
  { q: "¿Cuál es el deporte más popular del mundo?", answers: ["Baloncesto", "Tenis", "Fútbol", "Cricket"], correct: 2, category: "Deporte" },
  { q: "¿En qué continente está Turquía principalmente?", answers: ["Europa", "Asia", "África", "Medio Oriente"], correct: 1, category: "Geografía" },
  { q: "¿Cuánto es la raíz cuadrada de 256?", answers: ["14", "18", "16", "12"], correct: 2, category: "Mates" },
  { q: "¿Qué país tiene la mayor reserva de petróleo?", answers: ["Arabia Saudí", "Rusia", "Iraq", "Venezuela"], correct: 3, category: "Geografía" },
  { q: "¿Cuál es el animal más venenoso del mundo?", answers: ["Cobra real", "Medusa caja", "Escorpión deathstalker", "Pez piedra"], correct: 1, category: "Ciencia" },
  { q: "¿Quién pintó 'La noche estrellada'?", answers: ["Gauguin", "Monet", "Renoir", "Van Gogh"], correct: 3, category: "Arte" },
  { q: "¿Cuántos cromosomas tiene una célula humana normal?", answers: ["23", "48", "46", "36"], correct: 2, category: "Ciencia" },
  { q: "¿Qué significa HTML?", answers: ["HyperText Markup Language", "High Transfer Media Language", "Hyperlink Text Mode Language", "Home Tool Markup Language"], correct: 0, category: "Tecnología" },
  { q: "¿Cuál es el río más largo de Europa?", answers: ["Rin", "Danubio", "Volga", "Támesis"], correct: 2, category: "Geografía" },
  { q: "¿Qué animal es el más grande del mundo?", answers: ["Tiburón ballena", "Elefante africano", "Ballena azul", "Cocodrilo marino"], correct: 2, category: "Ciencia" },
  { q: "¿En qué año se fundó Google?", answers: ["2000", "1995", "1996", "1998"], correct: 3, category: "Tecnología" },
  { q: "¿Cuánto es el punto de ebullición del agua a nivel del mar?", answers: ["90°C", "95°C", "105°C", "100°C"], correct: 3, category: "Ciencia" },
  { q: "¿Cuántos estados tiene EE.UU.?", answers: ["48", "52", "50", "49"], correct: 2, category: "Geografía" },
  { q: "¿Cuál es la capital de Grecia?", answers: ["Tesalónica", "Atenas", "Creta", "Esparta"], correct: 1, category: "Geografía" },
  { q: "¿En qué año se inventó el teléfono?", answers: ["1866", "1887", "1876", "1856"], correct: 2, category: "Historia" },
  { q: "¿Cuál es el hueso más largo del cuerpo humano?", answers: ["Tibia", "Radio", "Húmero", "Fémur"], correct: 3, category: "Ciencia" },
  { q: "¿En qué país está el Taj Mahal?", answers: ["Pakistán", "Bangladés", "Nepal", "India"], correct: 3, category: "Geografía" },
  { q: "¿Quién escribió 'Cien años de soledad'?", answers: ["Mario Vargas Llosa", "Pablo Neruda", "Gabriel García Márquez", "Jorge Luis Borges"], correct: 2, category: "Literatura" },
  { q: "¿Cuántas semanas tiene un año?", answers: ["48", "54", "50", "52"], correct: 3, category: "General" },
  { q: "¿Qué velocidad alcanza la luz en el vacío?", answers: ["200.000 km/s", "400.000 km/s", "300.000 km/s", "250.000 km/s"], correct: 2, category: "Ciencia" },
  { q: "¿Cuánto es 1000 dividido entre 8?", answers: ["115", "130", "125", "120"], correct: 2, category: "Mates" },
  { q: "¿Cuál es la capital de Polonia?", answers: ["Cracovia", "Lodz", "Varsovia", "Gdansk"], correct: 2, category: "Geografía" },
  { q: "¿Qué proteína da color a la piel?", answers: ["Queratina", "Colágeno", "Melanina", "Elastina"], correct: 2, category: "Ciencia" },
  { q: "¿En qué año fue la Revolución Francesa?", answers: ["1799", "1776", "1789", "1804"], correct: 2, category: "Historia" },
  { q: "¿Cuál es la capital de Suecia?", answers: ["Gotemburgo", "Malmö", "Estocolmo", "Uppsala"], correct: 2, category: "Geografía" },
  { q: "¿Qué científico formuló las leyes de la gravedad?", answers: ["Galileo Galilei", "Albert Einstein", "Isaac Newton", "Nikola Tesla"], correct: 2, category: "Ciencia" },
  { q: "¿En qué país está el Aconcagua?", answers: ["Chile", "Bolivia", "Perú", "Argentina"], correct: 3, category: "Geografía" },
  { q: "¿Cuánto es la mitad de 3/4?", answers: ["3/8", "1/4", "1/2", "3/16"], correct: 0, category: "Mates" },
  { q: "¿Cuál es el río más caudaloso del mundo?", answers: ["Nilo", "Ganges", "Yangtsé", "Amazonas"], correct: 3, category: "Geografía" },
  { q: "¿Qué vitamina se encuentra principalmente en los cítricos?", answers: ["Vitamina A", "Vitamina D", "Vitamina C", "Vitamina E"], correct: 2, category: "Ciencia" },
  { q: "¿En qué año se inventó internet?", answers: ["1989", "1983", "1991", "1975"], correct: 1, category: "Tecnología" },
  { q: "¿Cuál es la capital de Noruega?", answers: ["Bergen", "Trondheim", "Oslo", "Stavanger"], correct: 2, category: "Geografía" },
  { q: "¿Cuántas teclas tiene un piano estándar?", answers: ["76", "88", "72", "84"], correct: 1, category: "Arte" },
  { q: "¿Qué país ganó la Copa del Mundo de 2018?", answers: ["Croacia", "Bélgica", "Argentina", "Francia"], correct: 3, category: "Deporte" },
  { q: "¿Cuánto es 9 elevado a 2?", answers: ["18", "72", "81", "63"], correct: 2, category: "Mates" },
  { q: "¿Cuál es la capital de Portugal?", answers: ["Oporto", "Lisboa", "Braga", "Coímbra"], correct: 1, category: "Geografía" },
  { q: "¿Qué órgano produce la insulina?", answers: ["Hígado", "Riñón", "Páncreas", "Suprarrenal"], correct: 2, category: "Ciencia" },
  { q: "¿Cuál es el metal más abundante en la corteza terrestre?", answers: ["Hierro", "Aluminio", "Silicio", "Calcio"], correct: 1, category: "Ciencia" },
  { q: "¿Cuántos lados tiene un dodecágono?", answers: ["10", "14", "8", "12"], correct: 3, category: "Mates" },
  { q: "¿Cuál es la capital de Austria?", answers: ["Salzburgo", "Innsbruck", "Graz", "Viena"], correct: 3, category: "Geografía" },
  { q: "¿En qué año se abolió la esclavitud en EE.UU.?", answers: ["1860", "1870", "1863", "1865"], correct: 3, category: "Historia" },
  { q: "¿Cuánto es 40% de 250?", answers: ["80", "120", "100", "90"], correct: 2, category: "Mates" },
  { q: "¿Cuál es la capital de Corea del Sur?", answers: ["Busan", "Incheon", "Seúl", "Daegu"], correct: 2, category: "Geografía" },
  { q: "¿Quién escribió 'El señor de los anillos'?", answers: ["C.S. Lewis", "J.R.R. Tolkien", "George R.R. Martin", "Terry Pratchett"], correct: 1, category: "Literatura" },
  { q: "¿Qué elemento es el más abundante en el universo?", answers: ["Oxígeno", "Carbono", "Hidrógeno", "Helio"], correct: 2, category: "Ciencia" },
  { q: "¿En qué año fue asesinado John F. Kennedy?", answers: ["1961", "1965", "1963", "1967"], correct: 2, category: "Historia" },
  { q: "¿Cuánto es la raíz cúbica de 27?", answers: ["9", "4", "3", "6"], correct: 2, category: "Mates" },
  { q: "¿Cuál es la capital de los Países Bajos?", answers: ["Rotterdam", "La Haya", "Utrecht", "Ámsterdam"], correct: 3, category: "Geografía" },
  { q: "¿Qué planeta es el más alejado del Sol?", answers: ["Urano", "Saturno", "Neptuno", "Plutón"], correct: 2, category: "Ciencia" },
  { q: "¿Cuál es el país de origen del tango?", answers: ["España", "Uruguay y Argentina", "Brasil", "Cuba"], correct: 1, category: "Cultura" },
  { q: "¿En qué año se creó la Unión Europea formalmente?", answers: ["1957", "1993", "1986", "2000"], correct: 1, category: "Historia" },
  { q: "¿Cuánto es 7 factorial (7!)?", answers: ["2520", "5040", "720", "40320"], correct: 1, category: "Mates" },
  { q: "¿Cuál es la capital de Suiza?", answers: ["Zúrich", "Ginebra", "Berna", "Basilea"], correct: 2, category: "Geografía" },
  { q: "¿Qué hueso protege el cerebro?", answers: ["Mandíbula", "Escápula", "Cráneo", "Clavícula"], correct: 2, category: "Ciencia" },
  { q: "¿Cuántos kilómetros tiene la Gran Muralla China aproximadamente?", answers: ["5.000", "10.000", "21.000", "15.000"], correct: 2, category: "Historia" },
  { q: "¿Cuál es la capital de Nigeria?", answers: ["Lagos", "Ibadán", "Kano", "Abuya"], correct: 3, category: "Geografía" },
  { q: "¿En qué año murió Freddie Mercury?", answers: ["1993", "1989", "1991", "1995"], correct: 2, category: "Cultura" },
  { q: "¿Cuánto es 5/8 en decimal?", answers: ["0,525", "0,625", "0,725", "0,425"], correct: 1, category: "Mates" },
  { q: "¿Cuál es el planeta más caliente del sistema solar?", answers: ["Mercurio", "Marte", "Júpiter", "Venus"], correct: 3, category: "Ciencia" },
  { q: "¿En qué país está Angkor Wat?", answers: ["Vietnam", "Tailandia", "Laos", "Camboya"], correct: 3, category: "Geografía" },
  { q: "¿Cuál es la capital de Irak?", answers: ["Mosul", "Basora", "Bagdad", "Erbil"], correct: 2, category: "Geografía" },
  { q: "¿Qué tipo de sangre es el donante universal?", answers: ["A+", "AB+", "B-", "O-"], correct: 3, category: "Ciencia" },
  { q: "¿En qué año se publicó 'Harry Potter y la piedra filosofal'?", answers: ["1999", "1995", "2001", "1997"], correct: 3, category: "Literatura" },
  { q: "¿Cuánto es 33 × 33?", answers: ["999", "1.089", "1.099", "979"], correct: 1, category: "Mates" },
  { q: "¿Cuál es la capital de Irán?", answers: ["Isfahan", "Teherán", "Mashhad", "Shiraz"], correct: 1, category: "Geografía" },
  { q: "¿Cuántos satélites naturales tiene la Tierra?", answers: ["2", "0", "3", "1"], correct: 3, category: "Ciencia" },
  { q: "¿Qué país ganó el Mundial de 2022?", answers: ["Francia", "Brasil", "Croacia", "Argentina"], correct: 3, category: "Deporte" },
  { q: "¿En qué año se construyó la Estatua de la Libertad?", answers: ["1856", "1896", "1886", "1876"], correct: 2, category: "Historia" },
  { q: "¿Cuánto es 0,1 + 0,2 matemáticamente?", answers: ["0,4", "0,3", "0,12", "0,02"], correct: 1, category: "Mates" },
  { q: "¿Qué arteria es la más grande del cuerpo humano?", answers: ["Femoral", "Carótida", "Aorta", "Pulmonar"], correct: 2, category: "Ciencia" },
  { q: "¿Cuál es el número pi (π) con 4 decimales?", answers: ["3,1416", "3,1415", "3,1417", "3,1414"], correct: 0, category: "Mates" },
  { q: "¿Qué idioma tiene más palabras en el diccionario?", answers: ["Chino", "Español", "Inglés", "Alemán"], correct: 2, category: "Cultura" },
  { q: "¿En qué año cayó el Imperio Romano de Occidente?", answers: ["410", "450", "476", "500"], correct: 2, category: "Historia" },
  { q: "¿Cuál es la capital de Arabia Saudí?", answers: ["Medina", "Riad", "La Meca", "Yeda"], correct: 1, category: "Geografía" },
  { q: "¿Cuántos músculos tiene el cuerpo humano aproximadamente?", answers: ["150", "300", "600", "200"], correct: 2, category: "Ciencia" },
  { q: "¿Quién dirigió la película 'Titanic' de 1997?", answers: ["Steven Spielberg", "Ridley Scott", "James Cameron", "Peter Jackson"], correct: 2, category: "Cultura" },
  { q: "¿Cuánto es 12 × 12?", answers: ["132", "124", "144", "156"], correct: 2, category: "Mates" },
  { q: "¿Cuál es la capital de Kenia?", answers: ["Mombasa", "Nairobi", "Kisumu", "Nakuru"], correct: 1, category: "Geografía" },
  { q: "¿Qué país tiene más fronteras terrestres?", answers: ["Rusia", "China", "Brasil", "EE.UU."], correct: 1, category: "Geografía" },
  { q: "¿Cuántos litros de sangre tiene el cuerpo humano aproximadamente?", answers: ["3-4", "7-8", "10-12", "5-6"], correct: 3, category: "Ciencia" },
  { q: "¿Cuál es la capital de Colombia?", answers: ["Medellín", "Cali", "Bogotá", "Barranquilla"], correct: 2, category: "Geografía" },
  { q: "¿Qué filósofo griego fue maestro de Platón?", answers: ["Aristóteles", "Tales de Mileto", "Sócrates", "Pitágoras"], correct: 2, category: "Historia" },
  { q: "¿Cuánto es 180 grados en radianes?", answers: ["2π", "π/2", "π", "3π/2"], correct: 2, category: "Mates" },
  { q: "¿Cuál es la capital de Filipinas?", answers: ["Cebú", "Davao", "Quezon City", "Manila"], correct: 3, category: "Geografía" },
  { q: "¿Qué gas produce el efecto invernadero principalmente?", answers: ["Nitrógeno", "Oxígeno", "Dióxido de carbono", "Argón"], correct: 2, category: "Ciencia" },
  { q: "¿En qué país está la ciudad de Petra?", answers: ["Siria", "Líbano", "Jordania", "Israel"], correct: 2, category: "Geografía" },
  { q: "¿Cuánto es 1 gigabyte en megabytes?", answers: ["100", "10.000", "100.000", "1.024"], correct: 3, category: "Tecnología" },
  { q: "¿Cuál es la capital de Etiopía?", answers: ["Dire Dawa", "Adís Abeba", "Gondär", "Mekele"], correct: 1, category: "Geografía" },
  { q: "¿Quién inventó el bombillo eléctrico?", answers: ["Nikola Tesla", "Alexander Graham Bell", "Thomas Edison", "Benjamin Franklin"], correct: 2, category: "Historia" },
  { q: "¿Cuánto es 3/5 × 5/3?", answers: ["1/2", "9/25", "2", "1"], correct: 3, category: "Mates" },
  { q: "¿Cuál es la capital de Vietnam?", answers: ["Ho Chi Minh", "Hue", "Da Nang", "Hanói"], correct: 3, category: "Geografía" },
  { q: "¿En qué país se originó el flamenco?", answers: ["Portugal", "España", "Argentina", "México"], correct: 1, category: "Cultura" },
  { q: "¿Qué planeta tiene el día más largo?", answers: ["Júpiter", "Marte", "Mercurio", "Venus"], correct: 3, category: "Ciencia" },
  { q: "¿Cuánto es el perímetro de un círculo con radio 5?", answers: ["10π", "25π", "5π", "20π"], correct: 0, category: "Mates" },
  { q: "¿Cuál es la capital de Argelia?", answers: ["Orán", "Argel", "Constantine", "Annaba"], correct: 1, category: "Geografía" },
  { q: "¿En qué año terminó la Guerra de Corea?", answers: ["1950", "1955", "1953", "1951"], correct: 2, category: "Historia" },
  { q: "¿Cuál es la capital de Marruecos?", answers: ["Casablanca", "Marrakech", "Fez", "Rabat"], correct: 3, category: "Geografía" },
  { q: "¿Qué músculo es el más grande del cuerpo humano?", answers: ["Cuádriceps", "Glúteo mayor", "Pectoral", "Deltoides"], correct: 1, category: "Ciencia" },
  { q: "¿Cuánto es el área de un triángulo con base 10 y altura 6?", answers: ["60", "16", "30", "45"], correct: 2, category: "Mates" },
  { q: "¿Cuál es la capital de Venezuela?", answers: ["Maracaibo", "Valencia", "Caracas", "Barquisimeto"], correct: 2, category: "Geografía" },
  { q: "¿Qué tipo de onda es el sonido?", answers: ["Electromagnética", "Transversal", "Longitudinal", "De gravedad"], correct: 2, category: "Ciencia" },
  { q: "¿En qué año se fundó la FIFA?", answers: ["1904", "1914", "1894", "1924"], correct: 0, category: "Deporte" },
  { q: "¿Cuánto es 250 × 4?", answers: ["900", "1100", "1000", "800"], correct: 2, category: "Mates" },
  { q: "¿Cuál es la capital de Chile?", answers: ["Valparaíso", "Concepción", "Antofagasta", "Santiago"], correct: 3, category: "Geografía" },
  { q: "¿Qué organismo produce el mayor volumen de oxígeno en la Tierra?", answers: ["Árboles tropicales", "Kelp marino", "Fitoplancton", "Algas de agua dulce"], correct: 2, category: "Ciencia" },
  { q: "¿En qué siglo vivió William Shakespeare?", answers: ["XIV", "XVII", "XVI", "XV"], correct: 2, category: "Literatura" },
  { q: "¿Cuántos colores tiene la bandera olímpica?", answers: ["4", "6", "7", "5"], correct: 3, category: "Deporte" },
  { q: "¿Cuál es la capital de Perú?", answers: ["Cusco", "Lima", "Arequipa", "Trujillo"], correct: 1, category: "Geografía" },
  { q: "¿Cuántos neutrones tiene el átomo de carbono-12?", answers: ["8", "6", "12", "4"], correct: 1, category: "Ciencia" },
  { q: "¿En qué año se celebró la primera Copa del Mundo de fútbol?", answers: ["1926", "1930", "1934", "1928"], correct: 1, category: "Deporte" },
  { q: "¿Cuánto es log₁₀(1000)?", answers: ["4", "2", "10", "3"], correct: 3, category: "Mates" },
  { q: "¿Cuál es la capital de Dinamarca?", answers: ["Aarhus", "Copenhague", "Odense", "Aalborg"], correct: 1, category: "Geografía" },
  { q: "¿Cuántos huesos tiene la mano humana?", answers: ["19", "27", "23", "31"], correct: 1, category: "Ciencia" },
  { q: "¿Quién fue el primer Papa?", answers: ["Pedro", "Pablo", "Mateo", "Juan"], correct: 0, category: "Historia" },
  { q: "¿Cuántos milímetros tiene un centímetro?", answers: ["100", "5", "10", "50"], correct: 2, category: "Mates" },
  { q: "¿Cuál es la capital de Finlandia?", answers: ["Tampere", "Turku", "Espoo", "Helsinki"], correct: 3, category: "Geografía" },
  { q: "¿Qué tipo de animal es una ballena?", answers: ["Pez", "Reptil", "Anfibio", "Mamífero"], correct: 3, category: "Ciencia" },
  { q: "¿En qué año se celebraron los Juegos Olímpicos de Barcelona?", answers: ["1990", "1988", "1994", "1992"], correct: 3, category: "Deporte" },
  { q: "¿Cuánto es 500 × 0,001?", answers: ["50", "5", "0,5", "0,05"], correct: 2, category: "Mates" },
  { q: "¿Cuál es la capital de Israel?", answers: ["Tel Aviv", "Haifa", "Beersheba", "Jerusalén"], correct: 3, category: "Geografía" },
  { q: "¿En qué año nació Elvis Presley?", answers: ["1940", "1939", "1935", "1945"], correct: 2, category: "Cultura" },
  { q: "¿Cuántos ángulos internos tiene un polígono de 9 lados?", answers: ["9", "18", "7", "11"], correct: 0, category: "Mates" },
  { q: "¿Cuál es la capital de Hungría?", answers: ["Debrecen", "Pécs", "Miskolc", "Budapest"], correct: 3, category: "Geografía" },
  { q: "¿Qué planeta tiene la atmósfera más densa?", answers: ["Júpiter", "Marte", "Venus", "Saturno"], correct: 2, category: "Ciencia" },
  { q: "¿En qué país se inventó el papel?", answers: ["Japón", "China", "Egipto", "India"], correct: 1, category: "Historia" },
  { q: "¿Cuánto es el volumen de una esfera de radio 3?", answers: ["27π", "36π", "9π", "18π"], correct: 1, category: "Mates" },
  { q: "¿Cuál es la capital de Escocia?", answers: ["Glasgow", "Aberdeen", "Edimburgo", "Dundee"], correct: 2, category: "Geografía" },
  { q: "¿Quién fue el último zar de Rusia?", answers: ["Alejandro III", "Nicolás II", "Pablo I", "Alejandro II"], correct: 1, category: "Historia" },
  { q: "¿Cuánto es 2/3 + 1/4?", answers: ["11/12", "3/7", "3/12", "8/12"], correct: 0, category: "Mates" },
  { q: "¿Cuál es la capital de Rumanía?", answers: ["Cluj-Napoca", "Timișoara", "Brasov", "Bucarest"], correct: 3, category: "Geografía" },
  { q: "¿En qué año se estrenó 'El Padrino'?", answers: ["1970", "1974", "1972", "1968"], correct: 2, category: "Cultura" },
  { q: "¿Cuántos jugadores hay en un equipo de voleibol?", answers: ["5", "7", "6", "8"], correct: 2, category: "Deporte" },
  { q: "¿Cuál es la capital de Eslovaquia?", answers: ["Košice", "Prešov", "Bratislava", "Žilina"], correct: 2, category: "Geografía" },
  { q: "¿Cuántos litros de agua hay en un metro cúbico?", answers: ["100", "10.000", "10", "1.000"], correct: 3, category: "Mates" },
  { q: "¿Qué elemento químico es el símbolo Pb?", answers: ["Paladio", "Platino", "Plomo", "Protactinio"], correct: 2, category: "Ciencia" },
  { q: "¿En qué país está el templo de Borobudur?", answers: ["Tailandia", "Camboya", "India", "Indonesia"], correct: 3, category: "Geografía" },
  { q: "¿Cuál es el número de Fibonacci después de 13?", answers: ["19", "21", "18", "24"], correct: 1, category: "Mates" },
  { q: "¿Cuál es la capital de Irlanda?", answers: ["Cork", "Belfast", "Galway", "Dublín"], correct: 3, category: "Geografía" },
  { q: "¿Cuántas costillas tiene el ser humano normalmente?", answers: ["20", "22", "18", "24"], correct: 3, category: "Ciencia" },
  { q: "¿En qué año se firmó la Declaración de Independencia de EE.UU.?", answers: ["1783", "1774", "1776", "1778"], correct: 2, category: "Historia" },
  { q: "¿Cuánto es 999 × 1001?", answers: ["999.999", "998.001", "999.001", "1.000.001"], correct: 0, category: "Mates" },
  { q: "¿Cuál es la capital de Ucrania?", answers: ["Odesa", "Lviv", "Járkov", "Kiev"], correct: 3, category: "Geografía" },
  { q: "¿Qué partícula subatómica tiene carga positiva?", answers: ["Neutrón", "Electrón", "Quark", "Protón"], correct: 3, category: "Ciencia" },
  { q: "¿En qué año se inauguró el Canal de Panamá?", answers: ["1904", "1919", "1914", "1924"], correct: 2, category: "Historia" },
  { q: "¿Cuántos grados tiene un ángulo llano?", answers: ["90", "270", "360", "180"], correct: 3, category: "Mates" },
  { q: "¿Cuál es la capital de Afganistán?", answers: ["Kandahar", "Kabul", "Mazar-i-Sharif", "Herat"], correct: 1, category: "Geografía" },
  { q: "¿Cuántas cuerdas tiene una guitarra estándar?", answers: ["4", "7", "5", "6"], correct: 3, category: "Arte" },
  { q: "¿Quién escribió 'La Odisea'?", answers: ["Sófocles", "Virgilio", "Esquilo", "Homero"], correct: 3, category: "Literatura" },
  { q: "¿Cuánto mide un año luz en kilómetros (aproximado)?", answers: ["9,46 × 10¹²", "9,46 × 10¹⁵", "9,46 × 10⁹", "9,46 × 10¹⁸"], correct: 0, category: "Ciencia" },
  { q: "¿Cuál es la capital de Bangladesh?", answers: ["Chittagong", "Sylhet", "Rajshahi", "Daca"], correct: 3, category: "Geografía" },
  { q: "¿En qué año se publicó 'El origen de las especies' de Darwin?", answers: ["1871", "1859", "1845", "1867"], correct: 1, category: "Ciencia" },
  { q: "¿Cuánto es el seno de 30°?", answers: ["√3/2", "0", "√2/2", "1/2"], correct: 3, category: "Mates" },
  { q: "¿Cuál es la capital de Bolivia?", answers: ["Cochabamba", "La Paz y Sucre", "Santa Cruz", "Potosí"], correct: 1, category: "Geografía" },
  { q: "¿Quién pintó 'Las Meninas'?", answers: ["Goya", "El Greco", "Murillo", "Velázquez"], correct: 3, category: "Arte" },
  { q: "¿En qué año se aprobó la Constitución Española actual?", answers: ["1975", "1982", "1978", "1980"], correct: 2, category: "Historia" },
  { q: "¿Cuánto es 3² + 4²?", answers: ["24", "30", "25", "49"], correct: 2, category: "Mates" },
  { q: "¿Cuál es la capital de Myanmar?", answers: ["Rangún", "Mandalay", "Bago", "Naipyidó"], correct: 3, category: "Geografía" },
  { q: "¿Qué tipo de sangre es el receptor universal?", answers: ["O+", "A+", "AB+", "B+"], correct: 2, category: "Ciencia" },
  { q: "¿Cuánto es la suma de los ángulos internos de un cuadrilátero?", answers: ["180°", "270°", "540°", "360°"], correct: 3, category: "Mates" },
  { q: "¿Cuál es la capital de Camerún?", answers: ["Douala", "Bamenda", "Bafoussam", "Yaundé"], correct: 3, category: "Geografía" },
  { q: "¿En qué año nació Ada Lovelace, primera programadora?", answers: ["1835", "1852", "1815", "1825"], correct: 2, category: "Historia" },
  { q: "¿Qué rapper NO pertenece a violadores del verso?", answers: ["Kase'O", "R de Rumba", "Natch", "Lirico"], correct: 2, category: "Entretenimiento" },
  { q: "¿Qué banda lanzó el álbum 'The Dark Side of the Moon'?", answers: ["Led Zeppelin", "The Beatles", "Pink Floyd", "Queen"], correct: 2, category: "Entretenimiento" },
  { q: "¿Cuál es el videojuego más vendido de la historia (sin contar free-to-play)?", answers: ["Minecraft", "GTA V", "Tetris", "Wii Sports"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué equipo de la NBA tiene más anillos de campeonato?", answers: ["Lakers", "Celtics", "Bulls", "Warriors"], correct: 1, category: "Deportes" },
  { q: "¿Qué tenista femenina tiene más Grand Slams individuales?", answers: ["Serena Williams", "Steffi Graf", "Margaret Court", "Martina Navratilova"], correct: 2, category: "Deportes" },
  { q: "¿Qué actor ganó 3 Oscars como protagonista?", answers: ["Daniel Day-Lewis", "Tom Hanks", "Jack Nicholson", "Marlon Brando"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué serie de TV terminó con el episodio 'Felina'?", answers: ["The Sopranos", "Breaking Bad", "Game of Thrones", "Mad Men"], correct: 1, category: "Entretenimiento" },
  { q: "¿Qué país ganó el Mundial de fútbol de 1998?", answers: ["Brasil", "Italia", "Francia", "Alemania"], correct: 2, category: "Deportes" },
  { q: "¿Qué empresa creó la PlayStation?", answers: ["Nintendo", "Sega", "Sony", "Microsoft"], correct: 2, category: "Entretenimiento" },
  { q: "¿Qué cantante es conocido como 'El Rey del Pop'?", answers: ["Prince", "Michael Jackson", "Elvis Presley", "Freddie Mercury"], correct: 1, category: "Entretenimiento" },
  { q: "¿Qué película ganó el Oscar a Mejor Película en 2020?", answers: ["1917", "Joker", "Parásitos", "Once Upon a Time in Hollywood"], correct: 2, category: "Entretenimiento" },
  { q: "¿Qué futbolista argentino ganó el Balón de Oro en 2023?", answers: ["Benzema", "Haaland", "Mbappé", "Messi"], correct: 3, category: "Deportes" },
  { q: "¿Qué rapero lanzó el álbum 'To Pimp a Butterfly'?", answers: ["Kendrick Lamar", "J. Cole", "Drake", "Kanye West"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué país tiene la liga de fútbol llamada 'Premier League'?", answers: ["España", "Italia", "Inglaterra", "Alemania"], correct: 2, category: "Deportes" },
  { q: "¿Qué equipo de la MLB tiene más Series Mundiales ganadas?", answers: ["Dodgers", "Cardinals", "Red Sox", "Yankees"], correct: 3, category: "Deportes" },
  { q: "¿Qué cantante femenina es conocida como 'La Reina del Soul'?", answers: ["Aretha Franklin", "Whitney Houston", "Tina Turner", "Etta James"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué videojuego tiene el protagonista llamado Kratos?", answers: ["God of War", "Halo", "Gears of War", "The Witcher"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué país ganó la Copa América 2024?", answers: ["Argentina", "Brasil", "Uruguay", "Colombia"], correct: 0, category: "Deportes" },
  { q: "¿Qué tenista masculino tiene más Grand Slams?", answers: ["Federer", "Nadal", "Djokovic", "Sampras"], correct: 2, category: "Deportes" },
  { q: "¿Qué piloto de F1 tiene más campeonatos mundiales?", answers: ["Schumacher", "Hamilton", "Fangio", "Prost"], correct: 1, category: "Deportes" },
  { q: "¿Qué selección de rugby ganó el Mundial 2019?", answers: ["Nueva Zelanda", "Inglaterra", "Sudáfrica", "Australia"], correct: 2, category: "Deportes" },
  { q: "¿Qué actor interpretó a Iron Man?", answers: ["Chris Evans", "Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"], correct: 1, category: "Entretenimiento" },
  { q: "¿Qué actor interpretó a Jack Sparrow?", answers: ["Orlando Bloom", "Johnny Depp", "Geoffrey Rush", "Keira Knightley"], correct: 1, category: "Entretenimiento" },
  { q: "¿Qué videojuego tiene a Mario como personaje principal?", answers: ["Sonic", "Super Mario", "Crash Bandicoot", "Donkey Kong"], correct: 1, category: "Entretenimiento" },
  { q: "¿Qué tenista femenina ganó el Golden Slam en 1988?", answers: ["Steffi Graf", "Serena Williams", "Martina Hingis", "Chris Evert"], correct: 0, category: "Deportes" },
  { q: "¿Qué serie de HBO mostró la boda roja?", answers: ["The Sopranos", "Game of Thrones", "Boardwalk Empire", "Rome"], correct: 1, category: "Entretenimiento" },
  { q: "¿Qué piloto de F1 murió en Imola 1994?", answers: ["Senna", "Ratzenberger", "Villeneuve", "Clark"], correct: 0, category: "Deportes" },
  { q: "¿Qué cantante pop tiene el álbum más vendido del siglo XXI ('21')?", answers: ["Beyoncé", "Adele", "Taylor Swift", "Lady Gaga"], correct: 1, category: "Entretenimiento" },
  { q: "¿Qué actor interpretó al Joker en 'The Dark Knight'?", answers: ["Jack Nicholson", "Jared Leto", "Heath Ledger", "Joaquin Phoenix"], correct: 2, category: "Entretenimiento" },
  { q: "¿Qué cantante solista lanzó el álbum '1989'?", answers: ["Taylor Swift", "Katy Perry", "Lady Gaga", "Beyoncé"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué actor de 'Star Wars' es Mark Hamill?", answers: ["Luke", "Han", "Leia", "Vader"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué equipo de fútbol brasileño tiene a Pelé como leyenda?", answers: ["Flamengo", "Santos", "Corinthians", "São Paulo"], correct: 1, category: "Deportes" },
  { q: "¿Qué consola de Nintendo es híbrida (portátil y sobremesa)?", answers: ["Switch", "Wii U", "3DS", "Wii"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué boxeador peso pesado fue conocido como 'Iron Mike'?", answers: ["Mike Tyson", "Muhammad Ali", "Joe Frazier", "Lennox Lewis"], correct: 0, category: "Deportes" },
  { q: "¿Qué cantante de pop lanzó 'Shake It Off'?", answers: ["Taylor Swift", "Katy Perry", "Lady Gaga", "Miley Cyrus"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué película de Marvel recaudó más en taquilla?", answers: ["Endgame", "Infinity War", "Avengers", "No Way Home"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué cantante femenina lanzó 'Bad Guy'?", answers: ["Billie Eilish", "Ariana Grande", "Dua Lipa", "Olivia Rodrigo"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué serie de Netflix presentó a Joe Goldberg?", answers: ["You", "Stranger Things", "The Crown", "Ozark"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué piloto de F1 ganó el campeonato 2024?", answers: ["Verstappen", "Hamilton", "Norris", "Leclerc"], correct: 0, category: "Deportes" },
  { q: "¿Qué tenista ganó Roland Garros 2024?", answers: ["Swiatek", "Gauff", "Sabalenka", "Rybakina"], correct: 0, category: "Deportes" },
  { q: "¿Qué tenista ganó Wimbledon 2024?", answers: ["Alcaraz", "Djokovic", "Sinner", "Medvedev"], correct: 0, category: "Deportes" },
  { q: "¿Qué equipo de la NFL ganó el Super Bowl 2024?", answers: ["Chiefs", "49ers", "Eagles", "Ravens"], correct: 0, category: "Deportes" },
  { q: "¿Qué filósofo dijo 'Dios ha muerto'?", answers: ["Kant", "Hegel", "Nietzsche", "Schopenhauer"], correct: 2, category: "Filosofía" },
  { q: "¿Quién escribió 'El contrato social'?", answers: ["Voltaire", "Rousseau", "Montesquieu", "Diderot"], correct: 1, category: "Filosofía" },
  { q: "¿Qué filósofo fue condenado a muerte bebiendo cicuta?", answers: ["Platón", "Sócrates", "Aristóteles", "Epicuro"], correct: 1, category: "Filosofía" },
];

// ── Config defaults ───────────────────────────────────────
const DEFAULT_PENALTY   = 30;
const DEFAULT_SITES     = ["instagram.com","tiktok.com","x.com","twitter.com","facebook.com","youtube.com"];

const DELAY_MS = 10;
const SCROLL_TIME_LIMIT_MS = 5 * 60 * 1000;

// ── State ─────────────────────────────────────────────────
let BLOCKED_SITES    = [...DEFAULT_SITES];
let PENALTY_SECONDS  = DEFAULT_PENALTY;
let ENABLED_CATS     = null; // null = todas

let scrollTimeAccum = 0;
let lastScrollTime  = null;
let scrollDecayTimer = null;
let scrollLocked    = false;

// ── Boot: load settings then start ───────────────────────
chrome.storage.local.get(["ff_penalty","ff_sites","ff_categories"], (d) => {
  if (d.ff_penalty)    PENALTY_SECONDS = d.ff_penalty;
  if (d.ff_sites)      BLOCKED_SITES   = d.ff_sites;
  if (d.ff_categories) ENABLED_CATS    = new Set(d.ff_categories);

  const currentSite   = location.hostname;
  const isBlockedSite = BLOCKED_SITES.some(site => currentSite.includes(site));

  chrome.storage.local.get([currentSite], (data) => {
    const now          = Date.now();
    const siteLockTime = data[currentSite];

    if (siteLockTime && siteLockTime > now) {
      const secondsLeft = Math.ceil((siteLockTime - now) / 1000);
      showLockScreen(secondsLeft);
    } else if (isBlockedSite) {
      setTimeout(showPopup, DELAY_MS);

      document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "visible") {
          chrome.storage.local.get(["lockedUntil"], (d2) => {
            if (!d2.lockedUntil || d2.lockedUntil <= Date.now()) setTimeout(showPopup, DELAY_MS);
          });
        }
        if (document.visibilityState === "hidden") lastScrollTime = null;
      });

      window.addEventListener("scroll", onScroll, true);
      document.addEventListener("scroll", onScroll, true);
      document.addEventListener("wheel", onScroll, { passive: true });
    }
  });
});

// ── Scroll tracker ────────────────────────────────────────
function onScroll() {
  if (scrollLocked || document.getElementById("ff-overlay")) return;

  const now = Date.now();
  if (lastScrollTime !== null) scrollTimeAccum += now - lastScrollTime;
  lastScrollTime = now;

  clearTimeout(scrollDecayTimer);
  scrollDecayTimer = setTimeout(() => { lastScrollTime = null; }, 500);

  if (scrollTimeAccum >= SCROLL_TIME_LIMIT_MS) {
    scrollTimeAccum = 0;
    lastScrollTime  = null;
    scrollLocked    = true;
    showPopup();
  }
}

// ── Lock screen ───────────────────────────────────────────
function showLockScreen(lockLeft) {
  let overlay = document.getElementById("ff-overlay");
  if (!overlay) { overlay = document.createElement("div"); overlay.id = "ff-overlay"; document.body.appendChild(overlay); }

  overlay.innerHTML = `
    <div class="ff-card ff-lockout">
      <div class="ff-lock-icon">🔒</div>
      <p class="ff-lock-title">Acceso bloqueado</p>
      <p class="ff-lock-sub">Has fallado o recargado la página. Espera para continuar.</p>
      <div class="ff-lock-bar-wrap"><div class="ff-lock-bar" id="ff-lock-bar"></div></div>
      <div class="ff-lock-countdown" id="ff-lock-countdown">${lockLeft}s</div>
    </div>`;

  const lockCountEl = document.getElementById("ff-lock-countdown");
  const lockBarEl   = document.getElementById("ff-lock-bar");
  const initialLock = lockLeft;

  const lockInterval = setInterval(() => {
    lockLeft--;
    lockCountEl.textContent = lockLeft + "s";
    lockBarEl.style.width   = ((initialLock - lockLeft) / initialLock * 100) + "%";
    if (lockLeft <= 0) { clearInterval(lockInterval); overlay.remove(); scrollLocked = false; }
  }, 1000);
}

// ── Trivia popup ──────────────────────────────────────────
function showPopup() {
  if (document.getElementById("ff-overlay")) return;
  if (!chrome?.storage?.local) return;

  // filter questions by enabled categories
  const pool = ENABLED_CATS
    ? questions.filter(q => ENABLED_CATS.has(q.category))
    : questions;
  const activePool = pool.length ? pool : questions; // fallback
  const q = activePool[Math.floor(Math.random() * activePool.length)];

  let timeLeft = 15;
  let answered = false;

  chrome.storage.local.get(["score","streak","leaderboard"], (data) => {
    const myScore    = data.score       || 0;
    const streak     = data.streak      || 0;
    const leaderboard = data.leaderboard || [
      { name: "Laura M.",  score: 320 },
      { name: "Carlos R.", score: 280 },
      { name: "Manuel D.", score: 238 },
    ];

    const overlay = document.createElement("div");
    overlay.id = "ff-overlay";

    const allPlayers = [...leaderboard, { name: "Tú", score: myScore, isMe: true }]
      .sort((a, b) => b.score - a.score);

    const rankHTML = allPlayers.map((p, i) => {
      const medals = ["🥇","🥈","🥉"];
      return `<div class="ff-row ${p.isMe ? "ff-me" : ""}">
        <span class="ff-rank">${medals[i] || (i+1)}</span>
        <span class="ff-name">${p.name}${p.isMe ? ' <span class="ff-tag">tú</span>' : ""}</span>
        <span class="ff-pts">${p.score} pts</span>
      </div>`;
    }).join("");

    overlay.innerHTML = `
      <div class="ff-card">
        <div class="ff-top">
          <div>
            <span class="ff-site">${location.hostname}</span>
            <span class="ff-streak">🔥 Racha: ${streak} días</span>
          </div>
          <div class="ff-timer" id="ff-timer">${timeLeft}</div>
        </div>
        <div class="ff-question-box">
          <span class="ff-cat">${q.category}</span>
          <p class="ff-q">${q.q}</p>
        </div>
        <div class="ff-answers">
          ${q.answers.map((a, idx) => `<button class="ff-ans" data-index="${idx}">${a}</button>`).join("")}
        </div>
        <div class="ff-warning">⚠️ Si fallas, <strong>${formatSeconds(PENALTY_SECONDS)}</strong> de bloqueo</div>
        <div class="ff-podium">
          <p class="ff-podium-label">Clasificación semanal</p>
          ${rankHTML}
        </div>
      </div>`;

    document.body.appendChild(overlay);

    const timerEl  = document.getElementById("ff-timer");
    const interval = setInterval(() => {
      timeLeft--;
      timerEl.textContent = timeLeft;
      if (timeLeft <= 5) timerEl.style.color = "#E24B4A";
      if (timeLeft <= 0) { clearInterval(interval); penalize(); }
    }, 1000);

    document.querySelectorAll(".ff-ans").forEach(btn => {
      btn.addEventListener("click", () => {
        if (answered) return;
        answered = true;
        clearInterval(interval);
        const chosen  = parseInt(btn.dataset.index);
        const allBtns = document.querySelectorAll(".ff-ans");

        if (chosen === q.correct) {
          allBtns[chosen].classList.add("ff-correct");
          chrome.storage.local.set({ score: myScore + 10, streak: streak + 1 });
          setTimeout(() => { overlay.remove(); scrollLocked = false; }, 1500);
        } else {
          btn.classList.add("ff-wrong");
          allBtns[q.correct].classList.add("ff-correct");
          penalize();
        }
      });
    });

    function penalize() {
      const lockedUntil   = Date.now() + (PENALTY_SECONDS * 1000);
      const currentSite   = location.hostname;
      sessionStorage.setItem("lockedUntil", lockedUntil.toString());
      chrome.storage.local.set({
        [currentSite]: lockedUntil,
        score:  Math.max(0, (myScore || 0) - 15),
        streak: 0
      });
      showLockScreen(PENALTY_SECONDS);
    }
  });
}

function formatSeconds(s) {
  if (s < 60) return s + "s";
  const m = Math.floor(s / 60), r = s % 60;
  return m + "m" + (r ? " " + r + "s" : "");
}
