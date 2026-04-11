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
  { q: "¿En qué año se publicó el Manifiesto Comunista?", answers: ["1867", "1848", "1871", "1835"], correct: 1, category: "Historia" },
  { q: "¿Cuántos huesos tiene la columna vertebral humana?", answers: ["24", "28", "33", "30"], correct: 2, category: "Ciencia" },
  { q: "¿Cuál es la capital de Argentina?", answers: ["Córdoba", "Mendoza", "Rosario", "Buenos Aires"], correct: 3, category: "Geografía" },
  { q: "¿Qué elemento tiene número atómico 1?", answers: ["Helio", "Hidrógeno", "Litio", "Boro"], correct: 1, category: "Ciencia" },
  { q: "¿En qué país está el Monte Fuji?", answers: ["China", "Corea del Sur", "Japón", "Vietnam"], correct: 2, category: "Geografía" },
  { q: "¿Cuánto es 25% de 400?", answers: ["80", "75", "100", "125"], correct: 2, category: "Mates" },
  { q: "¿Quién fue el fundador de Apple?", answers: ["Bill Gates", "Steve Wozniak y Steve Jobs", "Elon Musk", "Mark Zuckerberg"], correct: 1, category: "Tecnología" },
  { q: "¿Cuál es la capital de Sudáfrica?", answers: ["Johannesburgo", "Ciudad del Cabo", "Pretoria", "Durban"], correct: 2, category: "Geografía" },
  { q: "¿Qué gas exhalan las plantas en la fotosíntesis?", answers: ["CO2", "Nitrógeno", "Oxígeno", "Vapor de agua"], correct: 2, category: "Ciencia" },
  { q: "¿En qué año se inauguró la Torre Eiffel?", answers: ["1895", "1876", "1889", "1901"], correct: 2, category: "Historia" },
  { q: "¿Cuántos minutos tiene una hora?", answers: ["30", "120", "100", "60"], correct: 3, category: "General" },
  { q: "¿Cuál es el país más largo del mundo de norte a sur?", answers: ["Brasil", "China", "Rusia", "Chile"], correct: 3, category: "Geografía" },
  { q: "¿Quién pintó 'La noche estrellada'?", answers: ["Gauguin", "Monet", "Renoir", "Van Gogh"], correct: 3, category: "Arte" },
  { q: "¿Cuántos cromosomas tiene una célula humana normal?", answers: ["23", "48", "46", "36"], correct: 2, category: "Ciencia" },
  { q: "¿Cuál es la capital de Egipto?", answers: ["Alejandría", "Luxor", "Giza", "El Cairo"], correct: 3, category: "Geografía" },
  { q: "¿Qué distancia hay entre la Tierra y la Luna aproximadamente?", answers: ["184.000 km", "384.000 km", "584.000 km", "284.000 km"], correct: 1, category: "Ciencia" },
  { q: "¿En qué año nació Napoleón Bonaparte?", answers: ["1769", "1759", "1779", "1749"], correct: 0, category: "Historia" },
  { q: "¿Cuánto es 3 elevado a 4?", answers: ["64", "27", "81", "12"], correct: 2, category: "Mates" },
  { q: "¿Cuál es la capital de Turquía?", answers: ["Estambul", "Esmirna", "Ankara", "Bursa"], correct: 2, category: "Geografía" },
  { q: "¿Qué significa HTML?", answers: ["HyperText Markup Language", "High Transfer Media Language", "Hyperlink Text Mode Language", "Home Tool Markup Language"], correct: 0, category: "Tecnología" },
  { q: "¿Cuál es el río más largo de Europa?", answers: ["Rin", "Danubio", "Volga", "Támesis"], correct: 2, category: "Geografía" },
  { q: "¿Qué animal es el más grande del mundo?", answers: ["Tiburón ballena", "Elefante africano", "Ballena azul", "Cocodrilo marino"], correct: 2, category: "Ciencia" },
  { q: "¿En qué año se fundó Google?", answers: ["2000", "1995", "1996", "1998"], correct: 3, category: "Tecnología" },
  { q: "¿Cuántos gramos tiene una tonelada?", answers: ["10.000", "100.000", "1.000.000", "500.000"], correct: 2, category: "Mates" },
  { q: "¿Cuál es el punto de ebullición del agua a nivel del mar?", answers: ["90°C", "95°C", "105°C", "100°C"], correct: 3, category: "Ciencia" },
  { q: "¿Quién fue el primer secretario general de la ONU?", answers: ["Kofi Annan", "U Thant", "Trygve Lie", "Dag Hammarskjöld"], correct: 2, category: "Historia" },
  { q: "¿Cuántos estados tiene EE.UU.?", answers: ["48", "52", "50", "49"], correct: 2, category: "Geografía" },
  { q: "¿Qué instrumento mide la presión atmosférica?", answers: ["Termómetro", "Higrómetro", "Barómetro", "Pluviómetro"], correct: 2, category: "Ciencia" },
  { q: "¿Cuál es la capital de Grecia?", answers: ["Tesalónica", "Atenas", "Creta", "Esparta"], correct: 1, category: "Geografía" },
  { q: "¿En qué año se inventó el teléfono?", answers: ["1866", "1887", "1876", "1856"], correct: 2, category: "Historia" },
  { q: "¿Cuántos kilómetros tiene una milla náutica?", answers: ["1,609", "1,852", "2,000", "1,500"], correct: 1, category: "Mates" },
  { q: "¿Cuál es el hueso más largo del cuerpo humano?", answers: ["Tibia", "Radio", "Húmero", "Fémur"], correct: 3, category: "Ciencia" },
  { q: "¿En qué país está el Taj Mahal?", answers: ["Pakistán", "Bangladés", "Nepal", "India"], correct: 3, category: "Geografía" },
  { q: "¿Quién escribió 'Cien años de soledad'?", answers: ["Mario Vargas Llosa", "Pablo Neruda", "Gabriel García Márquez", "Jorge Luis Borges"], correct: 2, category: "Literatura" },
  { q: "¿Cuántas semanas tiene un año?", answers: ["48", "54", "50", "52"], correct: 3, category: "General" },
  { q: "¿Cuál es el país que tiene más idiomas oficiales?", answers: ["Suiza", "Bolivia", "India", "Sudáfrica"], correct: 3, category: "Cultura" },
  { q: "¿Qué velocidad alcanza la luz en el vacío?", answers: ["200.000 km/s", "400.000 km/s", "300.000 km/s", "250.000 km/s"], correct: 2, category: "Ciencia" },
  { q: "¿En qué continente está Nigeria?", answers: ["Asia", "Oceanía", "América", "África"], correct: 3, category: "Geografía" },
  { q: "¿Cuánto es 1000 dividido entre 8?", answers: ["115", "130", "125", "120"], correct: 2, category: "Mates" },
  { q: "¿Cuál es la capital de Polonia?", answers: ["Cracovia", "Lodz", "Varsovia", "Gdansk"], correct: 2, category: "Geografía" },
  { q: "¿Qué proteína da color a la piel?", answers: ["Queratina", "Colágeno", "Melanina", "Elastina"], correct: 2, category: "Ciencia" },
  { q: "¿En qué año fue la Revolución Francesa?", answers: ["1799", "1776", "1789", "1804"], correct: 2, category: "Historia" },
  { q: "¿Cuántos huevos pone normalmente una gallina al año?", answers: ["100-150", "300-350", "50-75", "250-300"], correct: 3, category: "Ciencia" },
  { q: "¿Cuál es la capital de Suecia?", answers: ["Gotemburgo", "Malmö", "Estocolmo", "Uppsala"], correct: 2, category: "Geografía" },
  { q: "¿Qué científico formuló las leyes de la gravedad?", answers: ["Galileo Galilei", "Albert Einstein", "Isaac Newton", "Nikola Tesla"], correct: 2, category: "Ciencia" },
  { q: "¿Cuántos litros de sangre tiene el cuerpo humano aproximadamente?", answers: ["3-4", "7-8", "10-12", "5-6"], correct: 3, category: "Ciencia" },
  { q: "¿En qué país está el Aconcagua?", answers: ["Chile", "Bolivia", "Perú", "Argentina"], correct: 3, category: "Geografía" },
  { q: "¿Cuánto es la mitad de 3/4?", answers: ["3/8", "1/4", "1/2", "3/16"], correct: 0, category: "Mates" },
  { q: "¿Cuál es el animal más longevo?", answers: ["Tortuga de Galápagos", "Almeja de Islandia", "Ballena boreal", "Esponja de vidrio"], correct: 3, category: "Ciencia" },
  { q: "¿En qué ciudad se celebró la Expo 2020?", answers: ["Shanghái", "Milán", "Dubai", "Osaka"], correct: 2, category: "Cultura" },
  { q: "¿Cuántos puntos vale la letra Z en el Scrabble español?", answers: ["8", "6", "10", "4"], correct: 2, category: "Cultura" },
  { q: "¿Cuál es el río más caudaloso del mundo?", answers: ["Nilo", "Ganges", "Yangtsé", "Amazonas"], correct: 3, category: "Geografía" },
  { q: "¿Qué vitamina se encuentra principalmente en los cítricos?", answers: ["Vitamina A", "Vitamina D", "Vitamina C", "Vitamina E"], correct: 2, category: "Ciencia" },
  { q: "¿En qué año se inventó internet?", answers: ["1989", "1983", "1991", "1975"], correct: 1, category: "Tecnología" },
  { q: "¿Cuál es la capital de Noruega?", answers: ["Bergen", "Trondheim", "Oslo", "Stavanger"], correct: 2, category: "Geografía" },
  { q: "¿Cuántas teclas tiene un piano estándar?", answers: ["76", "88", "72", "84"], correct: 1, category: "Arte" },
  { q: "¿Qué país ganó la Copa del Mundo de 2018?", answers: ["Croacia", "Bélgica", "Argentina", "Francia"], correct: 3, category: "Deporte" },
  { q: "¿Cuánto es 9 elevado a 2?", answers: ["18", "72", "81", "63"], correct: 2, category: "Mates" },
  { q: "¿Cuál es la capital de Portugal?", answers: ["Oporto", "Lisboa", "Braga", "Coímbra"], correct: 1, category: "Geografía" },
  { q: "¿Qué órgano produce la insulina?", answers: ["Hígado", "Riñón", "Páncreas", "Suprarrenal"], correct: 2, category: "Ciencia" },
  { q: "¿En qué año llegó Cristóbal Colón al Caribe?", answers: ["1494", "1490", "1498", "1492"], correct: 3, category: "Historia" },
  { q: "¿Cuál es el metal más abundante en la corteza terrestre?", answers: ["Hierro", "Aluminio", "Silicio", "Calcio"], correct: 1, category: "Ciencia" },
  { q: "¿En qué país está la ciudad de Estambul?", answers: ["Grecia", "Bulgaria", "Siria", "Turquía"], correct: 3, category: "Geografía" },
  { q: "¿Cuántos lados tiene un dodecágono?", answers: ["10", "14", "8", "12"], correct: 3, category: "Mates" },
  { q: "¿Cuál es la capital de Austria?", answers: ["Salzburgo", "Innsbruck", "Graz", "Viena"], correct: 3, category: "Geografía" },
  { q: "¿Qué animal es el emblema de Australia?", answers: ["Koala", "Cocodrilo", "Canguro", "Emú"], correct: 2, category: "Cultura" },
  { q: "¿En qué año se abolió la esclavitud en EE.UU.?", answers: ["1860", "1870", "1863", "1865"], correct: 3, category: "Historia" },
  { q: "¿Cuánto es 40% de 250?", answers: ["80", "120", "100", "90"], correct: 2, category: "Mates" },
  { q: "¿Cuál es el volcán activo más alto del mundo?", answers: ["Etna", "Vesubio", "Ojos del Salado", "Cotopaxi"], correct: 3, category: "Geografía" },
  { q: "¿Qué ciudad fue capital del Imperio Romano de Oriente?", answers: ["Alejandría", "Atenas", "Antioquía", "Constantinopla"], correct: 3, category: "Historia" },
  { q: "¿Cuántas espinas dorsales tiene un pez?", answers: ["Varía según la especie", "7", "12", "33"], correct: 0, category: "Ciencia" },
  { q: "¿Cuál es la capital de Corea del Sur?", answers: ["Busan", "Incheon", "Seúl", "Daegu"], correct: 2, category: "Geografía" },
  { q: "¿Quién escribió 'El señor de los anillos'?", answers: ["C.S. Lewis", "J.R.R. Tolkien", "George R.R. Martin", "Terry Pratchett"], correct: 1, category: "Literatura" },
  { q: "¿Cuántos millones de km² tiene África?", answers: ["20", "25", "15", "30"], correct: 3, category: "Geografía" },
  { q: "¿Qué elemento es el más abundante en el universo?", answers: ["Oxígeno", "Carbono", "Hidrógeno", "Helio"], correct: 2, category: "Ciencia" },
  { q: "¿En qué año fue asesinado John F. Kennedy?", answers: ["1961", "1965", "1963", "1967"], correct: 2, category: "Historia" },
  { q: "¿Cuánto es la raíz cúbica de 27?", answers: ["9", "4", "3", "6"], correct: 2, category: "Mates" },
  { q: "¿Cuál es la capital de los Países Bajos?", answers: ["Rotterdam", "La Haya", "Utrecht", "Ámsterdam"], correct: 3, category: "Geografía" },
  { q: "¿Qué planeta es el más alejado del Sol?", answers: ["Urano", "Saturno", "Neptuno", "Plutón"], correct: 2, category: "Ciencia" },
  { q: "¿Cuántos atletas corrieron la primera maratón olímpica moderna?", answers: ["17", "25", "12", "30"], correct: 0, category: "Deporte" },
  { q: "¿Cuál es el país de origen del tango?", answers: ["España", "Uruguay y Argentina", "Brasil", "Cuba"], correct: 1, category: "Cultura" },
  { q: "¿En qué año se creó la Unión Europea formalmente?", answers: ["1957", "1993", "1986", "2000"], correct: 1, category: "Historia" },
  { q: "¿Cuánto es 7 factorial (7!)?", answers: ["2520", "5040", "720", "40320"], correct: 1, category: "Mates" },
  { q: "¿Cuál es la capital de Suiza?", answers: ["Zúrich", "Ginebra", "Berna", "Basilea"], correct: 2, category: "Geografía" },
  { q: "¿Qué hueso protege el cerebro?", answers: ["Mandíbula", "Escápula", "Cráneo", "Clavícula"], correct: 2, category: "Ciencia" },
  { q: "¿En qué año nació Leonardo da Vinci?", answers: ["1452", "1475", "1430", "1460"], correct: 0, category: "Arte" },
  { q: "¿Cuántos kilómetros tiene la Gran Muralla China aproximadamente?", answers: ["5.000", "10.000", "21.000", "15.000"], correct: 2, category: "Historia" },
  { q: "¿Cuál es la capital de Nigeria?", answers: ["Lagos", "Ibadán", "Kano", "Abuya"], correct: 3, category: "Geografía" },
  { q: "¿Qué tipo de energía produce un panel solar?", answers: ["Térmica", "Eléctrica", "Mecánica", "Nuclear"], correct: 1, category: "Ciencia" },
  { q: "¿En qué año murió Freddie Mercury?", answers: ["1993", "1989", "1991", "1995"], correct: 2, category: "Cultura" },
  { q: "¿Cuánto es 5/8 en decimal?", answers: ["0,525", "0,625", "0,725", "0,425"], correct: 1, category: "Mates" },
  { q: "¿Cuál es el planeta más caliente del sistema solar?", answers: ["Mercurio", "Marte", "Júpiter", "Venus"], correct: 3, category: "Ciencia" },
  { q: "¿En qué país está Angkor Wat?", answers: ["Vietnam", "Tailandia", "Laos", "Camboya"], correct: 3, category: "Geografía" },
  { q: "¿Cuántos presidentes han tenido los EE.UU. hasta 2024?", answers: ["44", "46", "45", "47"], correct: 1, category: "Historia" },
  { q: "¿Cuál es la capital de Irak?", answers: ["Mosul", "Basora", "Bagdad", "Erbil"], correct: 2, category: "Geografía" },
  { q: "¿Qué tipo de sangre es el donante universal?", answers: ["A+", "AB+", "B-", "O-"], correct: 3, category: "Ciencia" },
  { q: "¿En qué año se publicó 'Harry Potter y la piedra filosofal'?", answers: ["1999", "1995", "2001", "1997"], correct: 3, category: "Literatura" },
  { q: "¿Cuánto es 33 × 33?", answers: ["999", "1.089", "1.099", "979"], correct: 1, category: "Mates" },
  { q: "¿Cuál es la capital de Irán?", answers: ["Isfahan", "Teherán", "Mashhad", "Shiraz"], correct: 1, category: "Geografía" },
  { q: "¿Cuántos satélites naturales tiene la Tierra?", answers: ["2", "0", "3", "1"], correct: 3, category: "Ciencia" },
  { q: "¿Qué país ganó el Mundial de 2022?", answers: ["Francia", "Brasil", "Croacia", "Argentina"], correct: 3, category: "Deporte" },
  { q: "¿En qué año se construyó la Estatua de la Libertad?", answers: ["1856", "1896", "1886", "1876"], correct: 2, category: "Historia" },
  { q: "¿Cuál es la capital de Sudán?", answers: ["Jartum", "Omdurman", "Port Sudán", "Juba"], correct: 0, category: "Geografía" },
  { q: "¿Cuánto es 0,1 + 0,2 matemáticamente?", answers: ["0,4", "0,3", "0,12", "0,02"], correct: 1, category: "Mates" },
  { q: "¿Qué arteria es la más grande del cuerpo humano?", answers: ["Femoral", "Carótida", "Aorta", "Pulmonar"], correct: 2, category: "Ciencia" },
  { q: "¿En qué país está el desierto del Sahara principalmente?", answers: ["Libia", "Argelia", "Varios países africanos", "Sudán"], correct: 2, category: "Geografía" },
  { q: "¿Cuál es el número pi (π) con 4 decimales?", answers: ["3,1416", "3,1415", "3,1417", "3,1414"], correct: 0, category: "Mates" },
  { q: "¿Qué idioma tiene más palabras en el diccionario?", answers: ["Chino", "Español", "Inglés", "Alemán"], correct: 2, category: "Cultura" },
  { q: "¿En qué año cayó el Imperio Romano de Occidente?", answers: ["410", "450", "476", "500"], correct: 2, category: "Historia" },
  { q: "¿Cuál es la capital de Arabia Saudí?", answers: ["Medina", "Riad", "La Meca", "Yeda"], correct: 1, category: "Geografía" },
  { q: "¿Cuántos músculos tiene el cuerpo humano aproximadamente?", answers: ["150", "300", "600", "200"], correct: 2, category: "Ciencia" },
  { q: "¿Quién dirigió la película 'Titanic' de 1997?", answers: ["Steven Spielberg", "Ridley Scott", "James Cameron", "Peter Jackson"], correct: 2, category: "Cultura" },
  { q: "¿Cuánto es 12 × 12?", answers: ["132", "124", "144", "156"], correct: 2, category: "Mates" },
  { q: "¿Cuál es la capital de Kenia?", answers: ["Mombasa", "Nairobi", "Kisumu", "Nakuru"], correct: 1, category: "Geografía" },
  { q: "¿Qué país tiene más fronteras terrestres?", answers: ["Rusia", "China", "Brasil", "EE.UU."], correct: 1, category: "Geografía" },
  { q: "¿En qué año se realizó la primera transmisión de televisión?", answers: ["1936", "1920", "1948", "1926"], correct: 0, category: "Historia" },
  { q: "¿Cuántos litros de aire respiramos por minuto en reposo?", answers: ["3-4", "8-10", "15-20", "5-6"], correct: 3, category: "Ciencia" },
  { q: "¿Cuál es la capital de Colombia?", answers: ["Medellín", "Cali", "Bogotá", "Barranquilla"], correct: 2, category: "Geografía" },
  { q: "¿Qué filósofo griego fue maestro de Platón?", answers: ["Aristóteles", "Tales de Mileto", "Sócrates", "Pitágoras"], correct: 2, category: "Historia" },
  { q: "¿Cuánto es 180 grados en radianes?", answers: ["2π", "π/2", "π", "3π/2"], correct: 2, category: "Mates" },
  { q: "¿Cuál es la capital de Filipinas?", answers: ["Cebú", "Davao", "Quezon City", "Manila"], correct: 3, category: "Geografía" },
  { q: "¿Qué gas produce el efecto invernadero principalmente?", answers: ["Nitrógeno", "Oxígeno", "Dióxido de carbono", "Argón"], correct: 2, category: "Ciencia" },
  { q: "¿En qué país está la ciudad de Petra?", answers: ["Siria", "Líbano", "Jordania", "Israel"], correct: 2, category: "Geografía" },
  { q: "¿Cuántos años vivió Frida Kahlo?", answers: ["52", "47", "44", "58"], correct: 1, category: "Arte" },
  { q: "¿Cuánto es 1 gigabyte en megabytes?", answers: ["100", "10.000", "100.000", "1.024"], correct: 3, category: "Tecnología" },
  { q: "¿Cuál es la capital de Etiopía?", answers: ["Dire Dawa", "Adís Abeba", "Gondär", "Mekele"], correct: 1, category: "Geografía" },
  { q: "¿Qué hueso protege el corazón?", answers: ["Costillas y esternón", "Húmero", "Clavícula", "Escápula"], correct: 0, category: "Ciencia" },
  { q: "¿Quién inventó el bombillo eléctrico?", answers: ["Nikola Tesla", "Alexander Graham Bell", "Thomas Edison", "Benjamin Franklin"], correct: 2, category: "Historia" },
  { q: "¿Cuánto es 3/5 × 5/3?", answers: ["1/2", "9/25", "2", "1"], correct: 3, category: "Mates" },
  { q: "¿Cuál es la capital de Vietnam?", answers: ["Ho Chi Minh", "Hue", "Da Nang", "Hanói"], correct: 3, category: "Geografía" },
  { q: "¿Cuántos atletas participaron en los primeros Juegos Olímpicos modernos?", answers: ["141", "241", "341", "441"], correct: 1, category: "Deporte" },
  { q: "¿En qué país se originó el flamenco?", answers: ["Portugal", "España", "Argentina", "México"], correct: 1, category: "Cultura" },
  { q: "¿Qué planeta tiene el día más largo?", answers: ["Júpiter", "Marte", "Mercurio", "Venus"], correct: 3, category: "Ciencia" },
  { q: "¿Cuánto es el perímetro de un círculo con radio 5?", answers: ["10π", "25π", "5π", "20π"], correct: 0, category: "Mates" },
  { q: "¿Cuál es la capital de Argelia?", answers: ["Orán", "Argel", "Constantine", "Annaba"], correct: 1, category: "Geografía" },
  { q: "¿Cuántos colores tiene la bandera de Italia?", answers: ["4", "2", "5", "3"], correct: 3, category: "Geografía" },
  { q: "¿En qué año terminó la Guerra de Corea?", answers: ["1950", "1955", "1953", "1951"], correct: 2, category: "Historia" },
  { q: "¿Cuántos millones de personas hablan español nativamente?", answers: ["300", "400", "600", "500"], correct: 3, category: "Cultura" },
  { q: "¿Cuál es la capital de Marruecos?", answers: ["Casablanca", "Marrakech", "Fez", "Rabat"], correct: 3, category: "Geografía" },
  { q: "¿Qué músculo es el más grande del cuerpo humano?", answers: ["Cuádriceps", "Glúteo mayor", "Pectoral", "Deltoides"], correct: 1, category: "Ciencia" },
  { q: "¿En qué año inventó Edison el fonógrafo?", answers: ["1870", "1887", "1877", "1895"], correct: 2, category: "Historia" },
  { q: "¿Cuánto es el área de un triángulo con base 10 y altura 6?", answers: ["60", "16", "30", "45"], correct: 2, category: "Mates" },
  { q: "¿Cuál es la capital de Venezuela?", answers: ["Maracaibo", "Valencia", "Caracas", "Barquisimeto"], correct: 2, category: "Geografía" },
  { q: "¿Qué tipo de onda es el sonido?", answers: ["Electromagnética", "Transversal", "Longitudinal", "De gravedad"], correct: 2, category: "Ciencia" },
  { q: "¿Cuántos continentes no tienen desiertos?", answers: ["1", "3", "0", "2"], correct: 0, category: "Geografía" },
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
  { q: "¿Cuántos pares de nervios craneales tiene el ser humano?", answers: ["10", "14", "12", "8"], correct: 2, category: "Ciencia" },
  { q: "¿En qué año nació Elvis Presley?", answers: ["1940", "1939", "1935", "1945"], correct: 2, category: "Cultura" },
  { q: "¿Cuántos ángulos internos tiene un polígono de 9 lados?", answers: ["9", "18", "7", "11"], correct: 0, category: "Mates" },
  { q: "¿Cuál es la capital de Hungría?", answers: ["Debrecen", "Pécs", "Miskolc", "Budapest"], correct: 3, category: "Geografía" },
  { q: "¿Qué planeta tiene la atmósfera más densa?", answers: ["Júpiter", "Marte", "Venus", "Saturno"], correct: 2, category: "Ciencia" },
  { q: "¿En qué país se inventó el papel?", answers: ["Japón", "China", "Egipto", "India"], correct: 1, category: "Historia" },
  { q: "¿Cuánto es el volumen de una esfera de radio 3?", answers: ["27π", "36π", "9π", "18π"], correct: 1, category: "Mates" },
  { q: "¿Cuál es la capital de Escocia?", answers: ["Glasgow", "Aberdeen", "Edimburgo", "Dundee"], correct: 2, category: "Geografía" },
  { q: "¿Cuántos dígitos tiene el número de Avogadro?", answers: ["22", "24", "26", "23"], correct: 1, category: "Ciencia" },
  { q: "¿Quién fue el último zar de Rusia?", answers: ["Alejandro III", "Nicolás II", "Pablo I", "Alejandro II"], correct: 1, category: "Historia" },
  { q: "¿Cuánto es 2/3 + 1/4?", answers: ["11/12", "3/7", "3/12", "8/12"], correct: 0, category: "Mates" },
  { q: "¿Cuál es la capital de Rumanía?", answers: ["Cluj-Napoca", "Timișoara", "Brasov", "Bucarest"], correct: 3, category: "Geografía" },
  { q: "¿Qué famoso científico nació el mismo día que murió Darwin?", answers: ["Marie Curie", "Max Planck", "Stephen Hawking", "Richard Feynman"], correct: 2, category: "Ciencia" },
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
  { q: "¿Cuántos alvéolos tiene un pulmón humano aproximadamente?", answers: ["150 millones", "300 millones", "50 millones", "600 millones"], correct: 1, category: "Ciencia" },
  { q: "¿Quién pintó 'Las Meninas'?", answers: ["Goya", "El Greco", "Murillo", "Velázquez"], correct: 3, category: "Arte" },
  { q: "¿En qué año se aprobó la Constitución Española actual?", answers: ["1975", "1982", "1978", "1980"], correct: 2, category: "Historia" },
  { q: "¿Cuánto es 3² + 4²?", answers: ["24", "30", "25", "49"], correct: 2, category: "Mates" },
  { q: "¿Cuál es la capital de Myanmar?", answers: ["Rangún", "Mandalay", "Bago", "Naipyidó"], correct: 3, category: "Geografía" },
  { q: "¿Qué tipo de sangre es el receptor universal?", answers: ["O+", "A+", "AB+", "B+"], correct: 2, category: "Ciencia" },
  { q: "¿En qué año se construyó el Partenón (inicio)?", answers: ["378 a.C.", "447 a.C.", "500 a.C.", "412 a.C."], correct: 1, category: "Historia" },
  { q: "¿Cuánto es la suma de los ángulos internos de un cuadrilátero?", answers: ["180°", "270°", "540°", "360°"], correct: 3, category: "Mates" },
  { q: "¿Cuál es la capital de Camerún?", answers: ["Douala", "Bamenda", "Bafoussam", "Yaundé"], correct: 3, category: "Geografía" },
  { q: "¿Cuántas capas tiene la atmósfera terrestre?", answers: ["3", "4", "6", "5"], correct: 3, category: "Ciencia" },
  { q: "¿En qué año nació Ada Lovelace, primera programadora?", answers: ["1835", "1852", "1815", "1825"], correct: 2, category: "Historia" },
{ q: "¿Qué número de huesos tiene un adulto humano si se excluyen los del oído medio?", answers: ["206", "203", "198", "200"], correct: 1, category: "Ciencia" },
  { q: "¿En qué año se firmó el Tratado de Maastricht?", answers: ["1989", "1991", "1992", "1993"], correct: 2, category: "Historia" },
  { q: "¿Qué país tiene la mayor costa continua sin cortes por ríos?", answers: ["Canadá", "Indonesia", "Rusia", "Australia"], correct: 0, category: "Geografía" },
  { q: "¿Cuál es la raíz cúbica de 343?", answers: ["6", "7", "8", "9"], correct: 1, category: "Mates" },
  { q: "¿Qué planeta tiene el día más largo (rotación) del sistema solar?", answers: ["Júpiter", "Venus", "Mercurio", "Urano"], correct: 1, category: "Ciencia" },
  { q: "¿Cuál es el único continente sin reptiles nativos?", answers: ["Antártida", "Europa", "Oceanía", "América del Sur"], correct: 0, category: "Geografía" },
  { q: "¿Qué elemento químico tiene el punto de fusión más alto?", answers: ["Tungsteno", "Carbono", "Osmio", "Renio"], correct: 0, category: "Ciencia" },
  { q: "¿Quién pintó 'La ronda de noche'?", answers: ["Vermeer", "Rembrandt", "Hals", "Rubens"], correct: 1, category: "Arte" },
  { q: "¿Qué río pasa por más capitales de país?", answers: ["Danubio", "Nilo", "Rin", "Amazonas"], correct: 0, category: "Geografía" },
  { q: "¿En qué año murió Napoleón Bonaparte?", answers: ["1815", "1821", "1824", "1830"], correct: 1, category: "Historia" },
  { q: "¿Qué mide un pirheliómetro?", answers: ["Humedad", "Radiación solar directa", "Presión del aire", "Velocidad del viento"], correct: 1, category: "Ciencia" },
  { q: "¿Cuál es la ciudad más poblada de África?", answers: ["El Cairo", "Lagos", "Kinshasa", "Johannesburgo"], correct: 1, category: "Geografía" },
  { q: "¿Qué batalla terminó con el Imperio Napoleónico en 1815?", answers: ["Austerlitz", "Waterloo", "Leipzig", "Borodino"], correct: 1, category: "Historia" },
  { q: "¿Quién escribió 'Ficciones'?", answers: ["Borges", "Cortázar", "Bioy Casares", "Sabato"], correct: 0, category: "Literatura" },
  { q: "¿Qué hueso del cráneo es el único móvil en adultos?", answers: ["Maxilar", "Mandíbula", "Temporal", "Occipital"], correct: 1, category: "Ciencia" },
  { q: "¿Qué país africano fue nunca colonizado por Europa?", answers: ["Etiopía", "Liberia", "Sudán", "Marruecos"], correct: 0, category: "Geografía" },
  { q: "¿Cuál es el resultado de 12^2 - 11^2?", answers: ["23", "24", "25", "26"], correct: 0, category: "Mates" },
  { q: "¿Qué gas compone la mayor parte de la atmósfera de Marte?", answers: ["Oxígeno", "Nitrógeno", "Dióxido de carbono", "Argón"], correct: 2, category: "Ciencia" },
  { q: "¿Cuántos países reconocen al Sahara Occidental como nación?", answers: ["0", "~30", "~80", "~120"], correct: 1, category: "Geografía" },
  { q: "¿Qué isla tiene el punto más alto de la Tierra fuera del Himalaya?", answers: ["Groenlandia", "Nueva Guinea", "Sumatra", "Isla de Baffin"], correct: 0, category: "Geografía" },
  { q: "¿En qué año se descubrió la penicilina?", answers: ["1921", "1928", "1931", "1945"], correct: 1, category: "Ciencia" },
  { q: "¿Qué emperador romano construyó el muro de Adriano?", answers: ["Trajano", "Adriano", "Antonino Pío", "Marco Aurelio"], correct: 1, category: "Historia" },
  { q: "¿Qué artista plástico dijo 'todo lo que puedo hacer es sonreír'?", answers: ["Dalí", "Picasso", "Munch", "Koons"], correct: 2, category: "Arte" },
  { q: "¿Cuál es la montaña más alta de los Alpes?", answers: ["Matterhorn", "Mont Blanc", "Monte Rosa", "Gran Paradiso"], correct: 1, category: "Geografía" },
  { q: "¿Qué rey francés se llamó 'el Rey Sol'?", answers: ["Luis XIV", "Luis XV", "Luis XVI", "Napoleón"], correct: 0, category: "Historia" },
  { q: "¿Qué premio Nobel no se entrega en Estocolmo sino en Oslo?", answers: ["Paz", "Literatura", "Medicina", "Física"], correct: 0, category: "Cultura" },
  { q: "¿Cuál es el país con más zonas horarias (sin contar territorios antárticos)?", answers: ["Rusia", "EE.UU.", "Francia", "Reino Unido"], correct: 2, category: "Geografía" },
  { q: "¿Quién escribió 'Los versos satánicos'?", answers: ["Rushdie", "Naipaul", "Ishiguro", "Murakami"], correct: 0, category: "Literatura" },
  { q: "¿Qué enfermedad erradicó la humanidad excepto muestras en laboratorios?", answers: ["Polio", "Sarampión", "Viruela", "Peste"], correct: 2, category: "Ciencia" },
  { q: "¿Qué país asiático tuvo un emperador hasta 1945?", answers: ["China", "Corea", "Japón", "Vietnam"], correct: 2, category: "Historia" },
  { q: "¿Qué metal tiene el símbolo químico 'Sn'?", answers: ["Plata", "Estaño", "Antimonio", "Silicio"], correct: 1, category: "Ciencia" },
  { q: "¿Qué país tiene la letra 'Q' al inicio?", answers: ["Qatar", "Quebec (no país)", "Quirguistán", "Kuwait"], correct: 2, category: "Geografía" },
  { q: "¿Cuál es el número más pequeño que no puede expresarse como suma de dos cuadrados?", answers: ["1", "2", "3", "4"], correct: 2, category: "Mates" },
  { q: "¿Qué hueso del oído se llama 'yunque'?", answers: ["Martillo", "Yunque", "Estribo", "Lenticular"], correct: 1, category: "Ciencia" },
  { q: "¿Qué guerra duró exactamente 100 años?", answers: ["Guerra de los Cien Años", "Guerra de los Treinta Años", "Guerra de los Siete Años", "Guerra de sucesión"], correct: 0, category: "Historia" },
  { q: "¿Qué país sudamericano tiene dos capitales?", answers: ["Argentina", "Bolivia", "Chile", "Perú"], correct: 1, category: "Geografía" },
  { q: "¿Quién desarrolló la teoría heliocéntrica antes de Galileo?", answers: ["Copérnico", "Kepler", "Ptolomeo", "Aristarco"], correct: 0, category: "Ciencia" },
  { q: "¿Qué color NO aparece en la bandera de Sudáfrica?", answers: ["Negro", "Verde", "Azul", "Rojo"], correct: 3, category: "Geografía" },
  { q: "¿Cuántos dientes tiene un adulto humano promedio?", answers: ["28", "30", "32", "34"], correct: 2, category: "Ciencia" },
  { q: "¿Qué lago tiene la mayor superficie de agua dulce del mundo?", answers: ["Titicaca", "Michigan", "Superior", "Victoria"], correct: 2, category: "Geografía" },
  { q: "¿Qué científico ganó dos Premios Nobel en dos ciencias distintas?", answers: ["Curie", "Pauling", "Bardeen", "Sanger"], correct: 0, category: "Ciencia" },
  { q: "¿Qué año nació la Unión Europea como tal?", answers: ["1957", "1973", "1986", "1993"], correct: 3, category: "Historia" },
  { q: "¿Qué país tiene la bandera más antigua del mundo aún en uso?", answers: ["Francia", "Dinamarca", "Países Bajos", "Reino Unido"], correct: 1, category: "Historia" },
  { q: "¿Qué filósofo dijo 'Dios ha muerto'?", answers: ["Kant", "Hegel", "Nietzsche", "Schopenhauer"], correct: 2, category: "Filosofía" },
  { q: "¿Qué isla caribeña se divide en dos países?", answers: ["Cuba", "La Española", "Puerto Rico", "Jamaica"], correct: 1, category: "Geografía" },
  { q: "¿Qué planeta NO tiene lunas?", answers: ["Marte", "Venus", "Mercurio", "Tierra"], correct: 2, category: "Ciencia" },
  { q: "¿En qué año explotó el reactor de Chernóbil?", answers: ["1984", "1985", "1986", "1987"], correct: 2, category: "Historia" },
  { q: "¿Qué animal tiene el corazón más grande proporcionalmente?", answers: ["Ballena azul", "Elefante", "Jirafa", "Pulpo"], correct: 2, category: "Ciencia" },
  { q: "¿Qué escritor ruso escribió 'Crimen y castigo'?", answers: ["Tolstoi", "Dostoievski", "Chéjov", "Gogol"], correct: 1, category: "Literatura" },
  { q: "¿Cuál es el único mamífero con cuatro rodillas?", answers: ["Elefante", "Rinoceronte", "Camello", "Hipopótamo"], correct: 0, category: "Ciencia" },
  { q: "¿Qué país europeo tiene más volcanes activos?", answers: ["Italia", "Islandia", "Grecia", "España"], correct: 1, category: "Geografía" },
  { q: "¿Cuánto suman los ángulos internos de un pentágono?", answers: ["360°", "540°", "720°", "900°"], correct: 1, category: "Mates" },
  { q: "¿Quién fue el primer humano en pisar la fosa de las Marianas?", answers: ["Piccard", "Cameron", "Walsh", "Cousteau"], correct: 0, category: "Ciencia" },
  { q: "¿Qué imperio construyó Machu Picchu?", answers: ["Azteca", "Inca", "Maya", "Olmeca"], correct: 1, category: "Historia" },
  { q: "¿Qué país africano tiene el PIB per cápita más alto?", answers: ["Nigeria", "Sudáfrica", "Seychelles", "Marruecos"], correct: 2, category: "Geografía" },
  { q: "¿Qué enfermedad mata más mosquitos al año?", answers: ["Malaria", "Dengue", "Fiebre amarilla", "Virus del Nilo"], correct: 0, category: "Ciencia" },
  { q: "¿Qué país tiene más de 7,000 islas?", answers: ["Filipinas", "Indonesia", "Japón", "Suecia"], correct: 1, category: "Geografía" },
  { q: "¿Qué matemático griego murió arrojado al mar?", answers: ["Pitágoras", "Arquímedes", "Euclides", "Tales"], correct: 1, category: "Historia" },
  { q: "¿Qué metal es líquido a temperatura ambiente?", answers: ["Mercurio", "Galio", "Cesio", "Bromo"], correct: 0, category: "Ciencia" },
  { q: "¿Qué país tiene la línea de costa más larga?", answers: ["Canadá", "Rusia", "EE.UU.", "Australia"], correct: 0, category: "Geografía" },
  { q: "¿Quién escribió 'El contrato social'?", answers: ["Voltaire", "Rousseau", "Montesquieu", "Diderot"], correct: 1, category: "Filosofía" },
  { q: "¿Qué año fue la primera vuelta al mundo de Elcano?", answers: ["1519", "1522", "1525", "1530"], correct: 1, category: "Historia" },
  { q: "¿Qué animal tiene la sangre azul?", answers: ["Pulpo", "Calamar", "Langosta", "Todos los anteriores"], correct: 3, category: "Ciencia" },
  { q: "¿Qué desierto es el más seco del mundo (excluyendo polos)?", answers: ["Sahara", "Atacama", "Gobi", "Namibia"], correct: 1, category: "Geografía" },
  { q: "¿Cuánto es el logaritmo natural de e^3?", answers: ["1", "e", "3", "ln3"], correct: 2, category: "Mates" },
  { q: "¿Qué estrella está más cerca del Sol?", answers: ["Sirio", "Próxima Centauri", "Alfa Centauri A", "Barnard"], correct: 1, category: "Ciencia" },
  { q: "¿Qué rey inglés fue decapitado en 1649?", answers: ["Carlos I", "Enrique VIII", "Ricardo III", "Jaime I"], correct: 0, category: "Historia" },
  { q: "¿Qué país europeo tiene como idioma oficial solo el romanche?", answers: ["Suiza", "Luxemburgo", "Liechtenstein", "Ninguno"], correct: 3, category: "Geografía" },
  { q: "¿Qué vitamina produce la piel con el sol?", answers: ["A", "B12", "C", "D"], correct: 3, category: "Ciencia" },
  { q: "¿Qué río separa Europa de Asia?", answers: ["Volga", "Ural", "Danubio", "Don"], correct: 1, category: "Geografía" },
  { q: "¿Qué inventó Gutenberg?", answers: ["Papel", "Imprenta de tipos móviles", "Tinta", "Prensa hidráulica"], correct: 1, category: "Historia" },
  { q: "¿Cuál es el número atómico del oro?", answers: ["78", "79", "80", "81"], correct: 1, category: "Ciencia" },
  { q: "¿Qué país tiene la forma de un peine?", answers: ["Chile", "Vietnam", "Italia", "Croacia"], correct: 3, category: "Geografía" },
  { q: "¿Qué batalla naval fue la más grande de la Primera Guerra Mundial?", answers: ["Jutlandia", "Verdún", "Somme", "Galípoli"], correct: 0, category: "Historia" },
  { q: "¿Qué poeta español escribió 'La casa de Bernarda Alba'?", answers: ["Lorca", "Alberti", "Cernuda", "Aleixandre"], correct: 0, category: "Literatura" },
  { q: "¿Qué glándula produce la insulina?", answers: ["Tiroides", "Hipófisis", "Páncreas", "Suprarrenal"], correct: 2, category: "Ciencia" },
  { q: "¿Qué país africano tiene la capital más cercana al ecuador?", answers: ["Kenia", "Uganda", "RDC", "Gabón"], correct: 2, category: "Geografía" },
  { q: "¿Cuántos ceros tiene un billón en español europeo?", answers: ["9", "12", "15", "18"], correct: 1, category: "Mates" },
  { q: "¿Qué planeta tiene la luna más grande (Ganímedes)?", answers: ["Júpiter", "Saturno", "Neptuno", "Urano"], correct: 0, category: "Ciencia" },
  { q: "¿Qué emperador bizantino reconstruyó Santa Sofía?", answers: ["Justiniano", "Teodosio", "Constantino", "Heraclio"], correct: 0, category: "Historia" },
  { q: "¿Qué ciudad tiene el metro más antiguo del mundo?", answers: ["París", "Nueva York", "Londres", "Moscú"], correct: 2, category: "Geografía" },
  { q: "¿Qué fuerza fundamental es la más débil?", answers: ["Gravedad", "Electromagnética", "Nuclear débil", "Nuclear fuerte"], correct: 0, category: "Ciencia" },
  { q: "¿Qué país centroamericano NO tiene costa en el Caribe?", answers: ["Guatemala", "Honduras", "El Salvador", "Nicaragua"], correct: 2, category: "Geografía" },
  { q: "¿Quién escribió 'Los Buddenbrook'?", answers: ["Hesse", "Mann", "Kafka", "Musil"], correct: 1, category: "Literatura" },
  { q: "¿Qué órgano humano puede regenerarse si se extirpa hasta 75%?", answers: ["Pulmón", "Hígado", "Riñón", "Corazón"], correct: 1, category: "Ciencia" },
  { q: "¿Qué desierto crece más rápido cada año?", answers: ["Sirio", "Sahara", "Kalahari", "Gobi"], correct: 0, category: "Geografía" },
  { q: "¿Cuál es el único número primo par?", answers: ["0", "1", "2", "4"], correct: 2, category: "Mates" },
  { q: "¿Qué año se fundó la ONU?", answers: ["1944", "1945", "1946", "1947"], correct: 1, category: "Historia" },
  { q: "¿Qué hueso protege el cerebro?", answers: ["Cráneo", "Columna", "Esternón", "Pelvis"], correct: 0, category: "Ciencia" },
  { q: "¿Qué país tiene más pirámides que Egipto?", answers: ["México", "Sudán", "China", "Perú"], correct: 1, category: "Geografía" },
  { q: "¿Qué premio no puede concederse póstumamente desde 1974?", answers: ["Literatura", "Paz", "Nobel", "Física"], correct: 2, category: "Cultura" },
  { q: "¿Qué insecto tiene el cerebro más grande en relación a su cuerpo?", answers: ["Abeja", "Hormiga", "Saltamontes", "Termita"], correct: 1, category: "Ciencia" },
  { q: "¿Qué país escandinavo NO usa el euro?", answers: ["Suecia", "Noruega", "Dinamarca", "Finlandia"], correct: 1, category: "Geografía" },
  { q: "¿Qué líder soviético murió en 1953?", answers: ["Lenin", "Stalin", "Kruschev", "Brézhnev"], correct: 1, category: "Historia" },
  { q: "¿Cuál es la unidad de medida de la fuerza?", answers: ["Joule", "Newton", "Pascal", "Vatio"], correct: 1, category: "Ciencia" },
  { q: "¿Qué país tiene la isla más grande del mundo (Groenlandia)?", answers: ["Canadá", "Noruega", "Dinamarca", "Rusia"], correct: 2, category: "Geografía" },
  { q: "¿Qué número es el factorial de 5 (5!)?", answers: ["60", "120", "125", "25"], correct: 1, category: "Mates" },
  { q: "¿Qué civilización creó el cero como concepto matemático?", answers: ["Griega", "Romana", "Maya", "India"], correct: 3, category: "Historia" },
  { q: "¿Qué metal es el mejor conductor de electricidad?", answers: ["Cobre", "Oro", "Plata", "Aluminio"], correct: 2, category: "Ciencia" },
  { q: "¿Qué país de Oceanía tiene como capital a Port Moresby?", answers: ["Australia", "Nueva Zelanda", "Papúa Nueva Guinea", "Fiyi"], correct: 2, category: "Geografía" },
  { q: "¿Qué rey de Francia fue guillotinado en 1793?", answers: ["Luis XV", "Luis XVI", "Carlos X", "Felipe V"], correct: 1, category: "Historia" },
  { q: "¿Qué componente del aire es más abundante?", answers: ["Oxígeno", "Nitrógeno", "Argón", "CO2"], correct: 1, category: "Ciencia" },
  { q: "¿Cuál es la montaña más alta de América del Sur?", answers: ["Tupungato", "Huascarán", "Chimborazo", "Aconcagua"], correct: 3, category: "Geografía" },
  { q: "¿Qué escritor checo escribió 'La metamorfosis'?", answers: ["Havel", "Kundera", "Kafka", "Čapek"], correct: 2, category: "Literatura" },
  { q: "¿Qué parte del ojo regula la cantidad de luz?", answers: ["Córnea", "Cristalino", "Iris", "Retina"], correct: 2, category: "Ciencia" },
  { q: "¿Qué país africano fue llamado 'Costa de Marfil'?", answers: ["Ghana", "Costa de Marfil (Côte d'Ivoire)", "Benín", "Togo"], correct: 1, category: "Geografía" },
  { q: "¿Cuánto es sen(90°)?", answers: ["0", "1", "-1", "∞"], correct: 1, category: "Mates" },
  { q: "¿Qué emperador romano dividió el imperio en dos?", answers: ["Constantino", "Diocleciano", "Teodosio", "Augusto"], correct: 2, category: "Historia" },
  { q: "¿Qué planeta tiene el sistema de anillos más visible?", answers: ["Júpiter", "Urano", "Saturno", "Neptuno"], correct: 2, category: "Ciencia" },
  { q: "¿Qué país tiene la población más joven del mundo (menor mediana de edad)?", answers: ["India", "Nigeria", "Uganda", "Níger"], correct: 3, category: "Geografía" },
  { q: "¿Qué inventó Tim Berners-Lee?", answers: ["Internet", "WWW", "Email", "HTML"], correct: 1, category: "Tecnología" },
  { q: "¿Qué filósofo fue condenado a muerte bebiendo cicuta?", answers: ["Platón", "Sócrates", "Aristóteles", "Epicuro"], correct: 1, category: "Filosofía" },
  { q: "¿Cuál es el animal más rápido del mundo?", answers: ["Guepardo", "Peregrino", "Marlín", "Colibrí"], correct: 1, category: "Ciencia" },
  { q: "¿Qué país tiene el mayor número de volcanes activos?", answers: ["Indonesia", "Japón", "EE.UU.", "Rusia"], correct: 0, category: "Geografía" },
  { q: "¿Qué año terminó la guerra de Vietnam?", answers: ["1973", "1975", "1972", "1976"], correct: 1, category: "Historia" },
  { q: "¿Qué hueso humano no está conectado a otro hueso?", answers: ["Hioides", "Estribo", "Rótula", "Omóplato"], correct: 0, category: "Ciencia" },
  { q: "¿Qué río es el más caudaloso del mundo?", answers: ["Ganges", "Congo", "Yangtsé", "Amazonas"], correct: 3, category: "Geografía" },
  { q: "¿Qué número es la constante de Avogadro?", answers: ["6.02e23", "3.14e23", "1.6e-19", "9.8e23"], correct: 0, category: "Ciencia" },
  { q: "¿Qué pintor español pintó 'El tres de mayo'?", answers: ["Velázquez", "Goya", "Picasso", "Dalí"], correct: 1, category: "Arte" },
  { q: "¿Qué país tiene la bandera completamente roja con una estrella amarilla?", answers: ["China", "Vietnam", "Corea del Norte", "URSS (extinta)"], correct: 1, category: "Geografía" },
  { q: "¿Qué poeta chileno ganó el Nobel?", answers: ["Neruda", "Mistral", "Huidobro", "De Rokha"], correct: 0, category: "Literatura" },
  { q: "¿Qué glándula se llama 'maestra'?", answers: ["Tiroides", "Hipófisis", "Pineal", "Hipotálamo"], correct: 1, category: "Ciencia" },
  { q: "¿Qué país tiene la cascada más alta del mundo (Salto Ángel)?", answers: ["Brasil", "Venezuela", "Argentina", "Canadá"], correct: 1, category: "Geografía" },
  { q: "¿Qué matemático escribió 'Elementos'?", answers: ["Arquímedes", "Euclides", "Pitágoras", "Herón"], correct: 1, category: "Mates" },
  { q: "¿Qué guerra duró exactamente 30 años?", answers: ["Guerra de los Treinta Años", "Guerra de los Siete Años", "Guerra de los Cien Años", "Guerra Civil"], correct: 0, category: "Historia" },
  { q: "¿Qué elemento químico tiene el símbolo 'W'?", answers: ["Wolframio", "Tungsteno (ambos ok)", "Wodio", "Washingtonio"], correct: 0, category: "Ciencia" },
  { q: "¿Qué país europeo tiene la mayor esperanza de vida?", answers: ["España", "Suiza", "Italia", "Japón (no es Europa)"], correct: 0, category: "Geografía" },
  { q: "¿Qué científico descubrió la radiactividad?", answers: ["Curie", "Becquerel", "Rutherford", "Schrödinger"], correct: 1, category: "Ciencia" },
  { q: "¿Qué año fue la Revolución Rusa?", answers: ["1917", "1918", "1916", "1919"], correct: 0, category: "Historia" },
  { q: "¿Qué músculo es el más potente del cuerpo humano?", answers: ["Masetero", "Glúteo", "Corazón", "Cuádriceps"], correct: 0, category: "Ciencia" },
  { q: "¿Qué país tiene la capital más alta del mundo?", answers: ["Bolivia (La Paz)", "Ecuador", "Perú", "Nepal"], correct: 0, category: "Geografía" },
  { q: "¿Qué número es la constante de Planck?", answers: ["6.626e-34", "3e8", "1.6e-19", "9.8"], correct: 0, category: "Ciencia" },
  { q: "¿Qué emperador inca fue el último?", answers: ["Atahualpa", "Huáscar", "Pachacútec", "Manco Cápac"], correct: 0, category: "Historia" },
  { q: "¿Qué país no existe más: Checoslovaquia se dividió en?", answers: ["Chequia y Eslovaquia", "Chequia y Hungría", "Rusia y Ucrania", "Austria y Hungría"], correct: 0, category: "Geografía" },
  { q: "¿Qué órgano humano pesa aprox 1.5 kg?", answers: ["Corazón", "Pulmón", "Hígado", "Cerebro"], correct: 3, category: "Ciencia" },
  { q: "¿Qué poeta inglés escribió 'La balada del viejo marinero'?", answers: ["Wordsworth", "Coleridge", "Byron", "Keats"], correct: 1, category: "Literatura" },
  { q: "¿Qué planeta fue descubierto con matemáticas antes que con telescopio?", answers: ["Urano", "Neptuno", "Plutón", "Marte"], correct: 1, category: "Ciencia" },
  { q: "¿Qué país de Oceanía es una monarquía constitucional?", answers: ["Australia", "Nueva Zelanda", "Papúa NG", "Tonga"], correct: 3, category: "Geografía" },
  { q: "¿Cuánto es 2 elevado a 10?", answers: ["512", "1024", "2048", "1000"], correct: 1, category: "Mates" },
  { q: "¿Qué batalla árabe-israelí ocurrió en 1973?", answers: ["Guerra de los 6 días", "Guerra de Yom Kipur", "Guerra del Sinaí", "Guerra de Suez"], correct: 1, category: "Historia" },
  { q: "¿Qué científico formuló la ley de la gravitación universal?", answers: ["Einstein", "Newton", "Galileo", "Kepler"], correct: 1, category: "Ciencia" },
  { q: "¿Qué país tiene la moneda más devaluada del mundo?", answers: ["Zimbabue", "Venezuela", "Irán", "Vietnam"], correct: 0, category: "Geografía" },
  { q: "¿Qué vitamina se obtiene principalmente de las frutas cítricas?", answers: ["A", "B", "C", "E"], correct: 2, category: "Ciencia" },
  { q: "¿Qué escritor francés escribió 'Los miserables'?", answers: ["Dumas", "Hugo", "Zola", "Balzac"], correct: 1, category: "Literatura" },
  { q: "¿Qué océano es el más pequeño?", answers: ["Índico", "Atlántico", "Pacífico", "Ártico"], correct: 3, category: "Geografía" },
  { q: "¿Qué número es la raíz cuadrada de 2?", answers: ["1.414", "1.732", "2.236", "1.618"], correct: 0, category: "Mates" },
  { q: "¿Qué rey español abdicó en 2014?", answers: ["Juan Carlos I", "Felipe VI", "Carlos III", "Alfonso XIII"], correct: 0, category: "Historia" },
  { q: "¿Qué componente de la sangre transporta oxígeno?", answers: ["Glóbulos rojos", "Blancos", "Plaquetas", "Plasma"], correct: 0, category: "Ciencia" },
  { q: "¿Qué país tiene la mayor cantidad de lagos naturales?", answers: ["Canadá", "Rusia", "EE.UU.", "Suecia"], correct: 0, category: "Geografía" },
  { q: "¿Qué filósofo escribió 'Así habló Zaratustra'?", answers: ["Kant", "Nietzsche", "Schopenhauer", "Heidegger"], correct: 1, category: "Filosofía" },
  { q: "¿Qué año cayó Constantinopla?", answers: ["1453", "1492", "1517", "1204"], correct: 0, category: "Historia" },
  { q: "¿Qué planeta tiene la temperatura superficial más alta?", answers: ["Mercurio", "Venus", "Marte", "Júpiter"], correct: 1, category: "Ciencia" },
  { q: "¿Qué país africano tiene forma de cuerno?", answers: ["Somalia", "Eritrea", "Yibuti", "Etiopía"], correct: 0, category: "Geografía" },
  { q: "¿Cuánto es el 20% de 250?", answers: ["25", "40", "50", "75"], correct: 2, category: "Mates" },
  { q: "¿Qué emperador romano legalizó el cristianismo?", answers: ["Constantino", "Teodosio", "Nerón", "Trajano"], correct: 0, category: "Historia" },
  { q: "¿Qué gas usan las plantas para la fotosíntesis?", answers: ["Oxígeno", "CO2", "Nitrógeno", "Hidrógeno"], correct: 1, category: "Ciencia" },
  { q: "¿Qué país tiene la ciudad de Petra?", answers: ["Israel", "Jordania", "Egipto", "Arabia Saudita"], correct: 1, category: "Geografía" },
{ q: "¿Qué hueso del cuerpo humano no se regenera si se fractura en adulto?", answers: ["Fémur", "Cráneo", "Dientes", "Esternón"], correct: 2, category: "Ciencia" },
  { q: "¿En qué año se firmó el Tratado de Versalles (fin I Guerra Mundial)?", answers: ["1917", "1918", "1919", "1920"], correct: 2, category: "Historia" },
  { q: "¿Qué país tiene el mayor número de fronteras terrestres con otros países?", answers: ["Rusia", "China", "Brasil", "Francia"], correct: 1, category: "Geografía" },
  { q: "¿Cuál es el número primo más pequeño de 3 cifras?", answers: ["101", "103", "107", "111"], correct: 0, category: "Mates" },
  { q: "¿Qué planeta tiene la mayor cantidad de lunas confirmadas?", answers: ["Júpiter", "Saturno", "Urano", "Neptuno"], correct: 1, category: "Ciencia" },
  { q: "¿Cuál es el único país sin ríos?", answers: ["Arabia Saudita", "Kuwait", "Omán", "Catar"], correct: 0, category: "Geografía" },
  { q: "¿Qué elemento químico tiene el punto de ebullición más bajo?", answers: ["Helio", "Hidrógeno", "Neón", "Nitrógeno"], correct: 0, category: "Ciencia" },
  { q: "¿Quién esculpió 'El pensador'?", answers: ["Miguel Ángel", "Rodin", "Bernini", "Donatello"], correct: 1, category: "Arte" },
  { q: "¿Qué río nace en Suiza y desemboca en el Mar Negro?", answers: ["Danubio", "Dniéper", "Don", "Volga"], correct: 0, category: "Geografía" },
  { q: "¿En qué año se produjo el accidente nuclear de Fukushima?", answers: ["2009", "2010", "2011", "2012"], correct: 2, category: "Historia" },
  { q: "¿Qué instrumento mide la velocidad del viento?", answers: ["Barómetro", "Anemómetro", "Hidrómetro", "Termómetro"], correct: 1, category: "Ciencia" },
  { q: "¿Cuál es la montaña más alta de América del Norte?", answers: ["Monte Logan", "Monte McKinley (Denali)", "Monte Whitney", "Monte Elbert"], correct: 1, category: "Geografía" },
  { q: "¿Qué batalla detuvo la expansión musulmana en Francia (732)?", answers: ["Tours", "Poitiers", "Covadonga", "Las Navas de Tolosa"], correct: 0, category: "Historia" },
  { q: "¿Quién escribió 'El extranjero'?", answers: ["Sartre", "Camus", "Kafka", "Beckett"], correct: 1, category: "Literatura" },
  { q: "¿Qué parte del ojo humano tiene más conos (visión de color)?", answers: ["Mácula", "Fóvea", "Retina periférica", "Córnea"], correct: 1, category: "Ciencia" },
  { q: "¿Qué país tiene la capital más fría del mundo?", answers: ["Islandia (Reikiavik)", "Kazajistán (Nur-Sultán)", "Mongolia (Ulán Bator)", "Rusia (Moscú)"], correct: 2, category: "Geografía" },
  { q: "¿Cuál es el resultado de 9! / 8! ?", answers: ["8", "9", "10", "72"], correct: 1, category: "Mates" },
  { q: "¿Qué gas se usa en los globos aerostáticos para ascender?", answers: ["Helio", "Hidrógeno", "Aire caliente", "Nitrógeno"], correct: 2, category: "Ciencia" },
  { q: "¿Cuántos países tienen costa en el Mar Caspio?", answers: ["3", "4", "5", "6"], correct: 2, category: "Geografía" },
  { q: "¿Qué deportista ganó 8 medallas de oro en una sola edición de los Juegos Olímpicos?", answers: ["Mark Spitz", "Usain Bolt", "Michael Phelps", "Carl Lewis"], correct: 2, category: "Deportes" },
  { q: "¿En qué año se jugó el primer Mundial de fútbol?", answers: ["1928", "1930", "1934", "1938"], correct: 1, category: "Deportes" },
  { q: "¿Qué actor interpretó al Joker en 'The Dark Knight'?", answers: ["Jack Nicholson", "Jared Leto", "Heath Ledger", "Joaquin Phoenix"], correct: 2, category: "Entretenimiento" },
  { q: "¿Qué banda lanzó el álbum 'The Dark Side of the Moon'?", answers: ["Led Zeppelin", "The Beatles", "Pink Floyd", "Queen"], correct: 2, category: "Entretenimiento" },
  { q: "¿Cuál es el videojuego más vendido de la historia (sin contar free-to-play)?", answers: ["Minecraft", "GTA V", "Tetris", "Wii Sports"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué equipo de la NBA tiene más anillos de campeonato?", answers: ["Lakers", "Celtics", "Bulls", "Warriors"], correct: 1, category: "Deportes" },
  { q: "¿Qué tenista femenina tiene más Grand Slams individuales?", answers: ["Serena Williams", "Steffi Graf", "Margaret Court", "Martina Navratilova"], correct: 2, category: "Deportes" },
  { q: "¿Qué actor ganó 3 Oscars como protagonista?", answers: ["Daniel Day-Lewis", "Tom Hanks", "Jack Nicholson", "Marlon Brando"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué serie de TV terminó con el episodio 'Felina'?", answers: ["The Sopranos", "Breaking Bad", "Game of Thrones", "Mad Men"], correct: 1, category: "Entretenimiento" },
  { q: "¿Qué país ganó el Mundial de fútbol de 1998?", answers: ["Brasil", "Italia", "Francia", "Alemania"], correct: 2, category: "Deportes" },
  { q: "¿Qué ciclista ganó 7 Tours de Francia (luego descalificado por dopaje)?", answers: ["Jan Ullrich", "Alberto Contador", "Lance Armstrong", "Miguel Indurain"], correct: 2, category: "Deportes" },
  { q: "¿Qué empresa creó la PlayStation?", answers: ["Nintendo", "Sega", "Sony", "Microsoft"], correct: 2, category: "Entretenimiento" },
  { q: "¿Qué cantante es conocido como 'El Rey del Pop'?", answers: ["Prince", "Michael Jackson", "Elvis Presley", "Freddie Mercury"], correct: 1, category: "Entretenimiento" },
  { q: "¿Qué luchador de la WWE tuvo un personaje llamado 'The Undertaker'?", answers: ["Mark Calaway", "Paul Levesque", "Glenn Jacobs", "Steve Borden"], correct: 0, category: "Deportes" },
  { q: "¿Qué película ganó el Oscar a Mejor Película en 2020?", answers: ["1917", "Joker", "Parásitos", "Once Upon a Time in Hollywood"], correct: 2, category: "Entretenimiento" },
  { q: "¿Qué futbolista argentino ganó el Balón de Oro en 2023?", answers: ["Benzema", "Haaland", "Mbappé", "Messi"], correct: 3, category: "Deportes" },
  { q: "¿Qué rapero lanzó el álbum 'To Pimp a Butterfly'?", answers: ["Kendrick Lamar", "J. Cole", "Drake", "Kanye West"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué país tiene la liga de fútbol llamada 'Premier League'?", answers: ["España", "Italia", "Inglaterra", "Alemania"], correct: 2, category: "Deportes" },
  { q: "¿Qué actor dijo 'You can't handle the truth!' en 'A Few Good Men'?", answers: ["Tom Cruise", "Jack Nicholson", "Demi Moore", "Kevin Bacon"], correct: 1, category: "Entretenimiento" },
  { q: "¿Qué equipo de la MLB tiene más Series Mundiales ganadas?", answers: ["Dodgers", "Cardinals", "Red Sox", "Yankees"], correct: 3, category: "Deportes" },
  { q: "¿Qué cantante femenina es conocida como 'La Reina del Soul'?", answers: ["Aretha Franklin", "Whitney Houston", "Tina Turner", "Etta James"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué videojuego tiene el protagonista llamado Kratos?", answers: ["God of War", "Halo", "Gears of War", "The Witcher"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué país ganó la Copa América 2024?", answers: ["Argentina", "Brasil", "Uruguay", "Colombia"], correct: 0, category: "Deportes" },
  { q: "¿Qué serie de animación incluye a Homero, Marge, Bart, Lisa y Maggie?", answers: ["Family Guy", "South Park", "Los Simpson", "Futurama"], correct: 2, category: "Entretenimiento" },
  { q: "¿Qué boxeador mordió la oreja de Evander Holyfield?", answers: ["Mike Tyson", "Lennox Lewis", "Evander Holyfield (no)", "Riddick Bowe"], correct: 0, category: "Deportes" },
  { q: "¿Qué película de Marvel recaudó más en taquilla (sin ajustar inflación)?", answers: ["Endgame", "Infinity War", "Avengers", "No Way Home"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué tenista masculino tiene más Grand Slams?", answers: ["Federer", "Nadal", "Djokovic", "Sampras"], correct: 2, category: "Deportes" },
  { q: "¿Qué personaje de 'The Office' (US) dijo 'That's what she said'?", answers: ["Jim", "Pam", "Michael", "Dwight"], correct: 2, category: "Entretenimiento" },
  { q: "¿Qué equipo de la NFL tiene más Super Bowls?", answers: ["Patriots", "Steelers", "49ers", "Cowboys"], correct: 0, category: "Deportes" },
  { q: "¿Qué cantante solista lanzó 'Lemonade' en 2016?", answers: ["Beyoncé", "Rihanna", "Taylor Swift", "Lady Gaga"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué piloto de F1 tiene más campeonatos mundiales?", answers: ["Schumacher", "Hamilton", "Fangio", "Prost"], correct: 1, category: "Deportes" },
  { q: "¿Qué director de cine dirigió 'Inception'?", answers: ["Spielberg", "Nolan", "Tarantino", "Fincher"], correct: 1, category: "Entretenimiento" },
  { q: "¿Qué selección de rugby ganó el Mundial 2019?", answers: ["Nueva Zelanda", "Inglaterra", "Sudáfrica", "Australia"], correct: 2, category: "Deportes" },
  { q: "¿Qué actor interpretó a Iron Man?", answers: ["Chris Evans", "Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"], correct: 1, category: "Entretenimiento" },
  { q: "¿Qué equipo de fútbol italiano tiene la 'Vecchia Signora' como apodo?", answers: ["Inter", "Milan", "Juventus", "Roma"], correct: 2, category: "Deportes" },
  { q: "¿Qué videojuego tiene a Mario como personaje principal?", answers: ["Sonic", "Super Mario", "Crash Bandicoot", "Donkey Kong"], correct: 1, category: "Entretenimiento" },
  { q: "¿Qué atleta olímpico ganó 4 oros en 1936?", answers: ["Jesse Owens", "Carl Lewis", "Usain Bolt", "Paavo Nurmi"], correct: 0, category: "Deportes" },
  { q: "¿Qué serie de TV presentó a Walter White?", answers: ["Better Call Saul", "Breaking Bad", "The Wire", "Ozark"], correct: 1, category: "Entretenimiento" },
  { q: "¿Qué futbolista francés ganó el Mundial 2018 como jugador y 2024? (como entrenador)?", answers: ["Zidane", "Deschamps", "Henry", "Mbappé"], correct: 1, category: "Deportes" },
  { q: "¿Qué cantante de rock es conocido como 'The Boss'?", answers: ["Bruce Springsteen", "Bob Dylan", "Neil Young", "Tom Petty"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué equipo de la NBA tiene a Stephen Curry?", answers: ["Lakers", "Warriors", "Celtics", "Bulls"], correct: 1, category: "Deportes" },
  { q: "¿Qué película animada de Pixar ganó el Oscar en 2004?", answers: ["Buscando a Nemo", "Los Increíbles", "Toy Story 3", "Ratatouille"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué nadador olímpico tiene más medallas de oro?", answers: ["Phelps", "Spitz", "Biondi", "Lochte"], correct: 0, category: "Deportes" },
  { q: "¿Qué actor interpretó a Jack Sparrow?", answers: ["Orlando Bloom", "Johnny Depp", "Geoffrey Rush", "Keira Knightley"], correct: 1, category: "Entretenimiento" },
  { q: "¿Qué equipo de fútbol inglés ganó la Champions 1999?", answers: ["Liverpool", "Arsenal", "Manchester United", "Chelsea"], correct: 2, category: "Deportes" },
  { q: "¿Qué videojuego tiene a un fontanero italiano llamado Luigi?", answers: ["Super Mario", "Sonic", "Crash", "Spyro"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué tenista femenina ganó el Golden Slam en 1988?", answers: ["Steffi Graf", "Serena Williams", "Martina Hingis", "Chris Evert"], correct: 0, category: "Deportes" },
  { q: "¿Qué serie de HBO mostró la boda roja?", answers: ["The Sopranos", "Game of Thrones", "Boardwalk Empire", "Rome"], correct: 1, category: "Entretenimiento" },
  { q: "¿Qué piloto de F1 murió en Imola 1994?", answers: ["Senna", "Ratzenberger", "Villeneuve", "Clark"], correct: 0, category: "Deportes" },
  { q: "¿Qué cantante pop tiene el álbum más vendido del siglo XXI ('21')?", answers: ["Beyoncé", "Adele", "Taylor Swift", "Lady Gaga"], correct: 1, category: "Entretenimiento" },
  { q: "¿Qué equipo de la MLB tiene a Babe Ruth como leyenda?", answers: ["Red Sox", "Yankees", "Cubs", "Dodgers"], correct: 1, category: "Deportes" },
  { q: "¿Qué actor protagonizó 'La La Land'?", answers: ["Ryan Gosling", "Emma Stone", "Brad Pitt", "Leonardo DiCaprio"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué selección de fútbol tiene 5 estrellas en su escudo (mundiales)?", answers: ["Brasil", "Alemania", "Italia", "Argentina"], correct: 0, category: "Deportes" },
  { q: "¿Qué consola de Nintendo fue la primera con pantalla táctil?", answers: ["DS", "3DS", "Wii U", "Switch"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué jugador de baloncesto tiene el récord de más puntos en un partido (100)?", answers: ["Wilt Chamberlain", "Kobe Bryant", "Michael Jordan", "LeBron James"], correct: 0, category: "Deportes" },
  { q: "¿Qué película de Studio Ghibli dirigió Hayao Miyazaki y ganó un Oscar?", answers: ["El viaje de Chihiro", "Mi vecino Totoro", "La princesa Mononoke", "El castillo ambulante"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué equipo de la NFL tiene a Tom Brady como exjugador?", answers: ["Patriots", "Buccaneers", "Packers", "Chiefs"], correct: 0, category: "Deportes" },
  { q: "¿Qué cantante falleció en 2009 y fue llamado 'Rey del Pop'?", answers: ["Prince", "Michael Jackson", "David Bowie", "Freddie Mercury"], correct: 1, category: "Entretenimiento" },
  { q: "¿Qué tenista ganó Roland Garros 2024?", answers: ["Nadal", "Djokovic", "Alcaraz", "Zverev"], correct: 2, category: "Deportes" },
  { q: "¿Qué actor de 'Matrix' es Keanu Reeves?", answers: ["Neo", "Morpheus", "Trinity", "Smith"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué equipo de fútbol alemán tiene la 'Allianz Arena'?", answers: ["Bayern", "Dortmund", "Schalke", "Leverkusen"], correct: 0, category: "Deportes" },
  { q: "¿Qué videojuego popular tiene a 'Steve' como personaje?", answers: ["Minecraft", "Fortnite", "Roblox", "Terraria"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué atleta jamaicano tiene el récord de 100 metros (9.58)?", answers: ["Yohan Blake", "Usain Bolt", "Asafa Powell", "Justin Gatlin"], correct: 1, category: "Deportes" },
  { q: "¿Qué serie de TV protagonizó Jennifer Aniston?", answers: ["Friends", "The Morning Show", "30 Rock", "Parks and Rec"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué equipo de la NBA tiene a LeBron James en 2024?", answers: ["Lakers", "Cavaliers", "Heat", "Warriors"], correct: 0, category: "Deportes" },
  { q: "¿Qué cantante de rock falleció en 1980 (John Lennon)?", answers: ["The Beatles", "Queen", "The Who", "Pink Floyd"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué nadador ganó 8 medallas de oro en 2008?", answers: ["Phelps", "Spitz", "Hackett", "Thorpe"], correct: 0, category: "Deportes" },
  { q: "¿Qué película de Disney de 1994 tiene a Simba?", answers: ["El rey león", "Aladdín", "La sirenita", "Blancanieves"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué futbolista español ganó el Mundial 2010?", answers: ["Iniesta", "Xavi", "Casillas", "Ramos"], correct: 0, category: "Deportes" },
  { q: "¿Qué consola de Sega fue la última lanzada?", answers: ["Dreamcast", "Saturn", "Genesis", "Master System"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué tenista masculino tiene el apodo 'La Máquina'?", answers: ["Federer", "Nadal", "Djokovic", "Murray"], correct: 0, category: "Deportes" },
  { q: "¿Qué actor interpretó a Wolverine?", answers: ["Hugh Jackman", "Ryan Reynolds", "Patrick Stewart", "Ian McKellen"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué equipo de la NFL ganó el Super Bowl 2024?", answers: ["Chiefs", "49ers", "Eagles", "Ravens"], correct: 0, category: "Deportes" },
  { q: "¿Qué cantante femenina lanzó 'Bad Guy'?", answers: ["Billie Eilish", "Ariana Grande", "Dua Lipa", "Olivia Rodrigo"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué jugador de la NBA tiene el apodo 'The Greek Freak'?", answers: ["Giannis Antetokounmpo", "Luka Doncic", "Nikola Jokic", "Joel Embiid"], correct: 0, category: "Deportes" },
  { q: "¿Qué serie de Netflix presentó a Joe Goldberg?", answers: ["You", "Stranger Things", "The Crown", "Ozark"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué equipo de fútbol argentino tiene la Bombonera?", answers: ["Boca Juniors", "River Plate", "Independiente", "Racing"], correct: 0, category: "Deportes" },
  { q: "¿Qué videojuego de Rockstar tiene a Arthur Morgan?", answers: ["Red Dead Redemption 2", "GTA V", "Bully", "Max Payne"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué boxeador peso pesado fue conocido como 'Iron Mike'?", answers: ["Mike Tyson", "Muhammad Ali", "Joe Frazier", "Lennox Lewis"], correct: 0, category: "Deportes" },
  { q: "¿Qué cantante de pop lanzó 'Shake It Off'?", answers: ["Taylor Swift", "Katy Perry", "Lady Gaga", "Miley Cyrus"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué equipo de la MLB tiene a los 'Medias Rojas'?", answers: ["Red Sox", "White Sox", "Cardinals", "Cubs"], correct: 0, category: "Deportes" },
  { q: "¿Qué película de Tarantino tiene a los 'bastardos sin gloria'?", answers: ["Inglourious Basterds", "Django Unchained", "Pulp Fiction", "Kill Bill"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué jugador de fútbol americano tiene más MVPs de la NFL?", answers: ["Peyton Manning", "Tom Brady", "Aaron Rodgers", "Jim Brown"], correct: 0, category: "Deportes" },
  { q: "¿Qué actor de 'Gladiador' es Russell Crowe?", answers: ["Máximo", "Cómodo", "Próximo", "Graco"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué equipo de la NHL tiene más Copas Stanley?", answers: ["Canadiens", "Maple Leafs", "Bruins", "Blackhawks"], correct: 0, category: "Deportes" },
  { q: "¿Qué cantante de hip hop lanzó 'The Marshall Mathers LP'?", answers: ["Eminem", "Dr. Dre", "Snoop Dogg", "50 Cent"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué tenista ganó el US Open 2024?", answers: ["Djokovic", "Alcaraz", "Medvedev", "Sinner"], correct: 1, category: "Deportes" },
  { q: "¿Qué actor de 'The Witcher' es Henry Cavill?", answers: ["Geralt", "Jaskier", "Vesemir", "Yennefer"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué equipo de fútbol portugués tiene a Cristiano Ronaldo (2024)?", answers: ["Al-Nassr (fuera de Europa)", "Manchester Utd", "Real Madrid", "Juventus"], correct: 0, category: "Deportes" },
  { q: "¿Qué película de Marvel tiene a Thanos como villano principal?", answers: ["Infinity War/Endgame", "Avengers", "Guardianes", "Thor"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué esquiador alpino tiene más medallas olímpicas?", answers: ["Mikaela Shiffrin", "Ingemar Stenmark", "Alberto Tomba", "Bode Miller"], correct: 0, category: "Deportes" },
  { q: "¿Qué cantante británico lideró Queen?", answers: ["Freddie Mercury", "Brian May", "Roger Taylor", "John Deacon"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué equipo de la NBA tiene el récord de 73-9 en temporada regular?", answers: ["Warriors", "Bulls", "Lakers", "Celtics"], correct: 0, category: "Deportes" },
  { q: "¿Qué serie animada de Adult Swim es 'Rick y Morty'?", answers: ["Rick y Morty", "Family Guy", "South Park", "Bojack"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué futbolista neerlandés ganó el Balón de Oro 1988?", answers: ["Van Basten", "Gullit", "Rijkaard", "Cruyff"], correct: 0, category: "Deportes" },
  { q: "¿Qué actor de 'El Señor de los Anillos' es Elijah Wood?", answers: ["Frodo", "Sam", "Merry", "Pippin"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué piloto de MotoGP tiene más títulos?", answers: ["Giacomo Agostini", "Valentino Rossi", "Marc Márquez", "Mick Doohan"], correct: 0, category: "Deportes" },
  { q: "¿Qué cantante pop lanzó 'Thriller'?", answers: ["Michael Jackson", "Prince", "Madonna", "Whitney Houston"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué equipo de fútbol español tiene 14 Champions?", answers: ["Real Madrid", "Barcelona", "Atlético", "Sevilla"], correct: 0, category: "Deportes" },
  { q: "¿Qué videojuego de FromSoftware es 'Elden Ring'?", answers: ["Elden Ring", "Dark Souls", "Bloodborne", "Sekiro"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué atleta jamaicano tiene el récord de 200m (19.19)?", answers: ["Usain Bolt", "Yohan Blake", "Michael Johnson", "Andre De Grasse"], correct: 0, category: "Deportes" },
  { q: "¿Qué serie de HBO mostró a Tony Soprano?", answers: ["The Sopranos", "The Wire", "Boardwalk Empire", "Oz"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué equipo de la NFL tiene a Patrick Mahomes?", answers: ["Chiefs", "Patriots", "Bills", "Ravens"], correct: 0, category: "Deportes" },
  { q: "¿Qué cantante de rock falleció en 1991 (Freddie Mercury)?", answers: ["Queen", "The Beatles", "Rolling Stones", "The Who"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué tenista ganó Wimbledon 2024?", answers: ["Alcaraz", "Djokovic", "Sinner", "Medvedev"], correct: 0, category: "Deportes" },
  { q: "¿Qué actor de 'Star Wars' es Mark Hamill?", answers: ["Luke", "Han", "Leia", "Vader"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué equipo de la NBA tiene a Nikola Jokic?", answers: ["Nuggets", "Bucks", "Mavericks", "76ers"], correct: 0, category: "Deportes" },
  { q: "¿Qué película de Disney de 1992 tiene a Aladdín?", answers: ["Aladdín", "La bella y la bestia", "El jorobado", "Hércules"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué futbolista brasileño es 'O Rei' (El Rey)?", answers: ["Pelé", "Maradona", "Ronaldo", "Ronaldinho"], correct: 0, category: "Deportes" },
  { q: "¿Qué consola de Nintendo es híbrida (portátil y sobremesa)?", answers: ["Switch", "Wii U", "3DS", "Wii"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué boxeador peso pesado fue 'The Greatest'?", answers: ["Muhammad Ali", "Joe Louis", "Rocky Marciano", "George Foreman"], correct: 0, category: "Deportes" },
  { q: "¿Qué actor de 'Indiana Jones' es Harrison Ford?", answers: ["Indiana", "Han Solo", "Rick Deckard", "Jack Ryan"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué equipo de la NFL tiene a Aaron Rodgers (2024)?", answers: ["Jets", "Packers", "Vikings", "Bears"], correct: 0, category: "Deportes" },
  { q: "¿Qué cantante pop lanzó 'Born This Way'?", answers: ["Lady Gaga", "Katy Perry", "Beyoncé", "Rihanna"], correct: 0, category: "Entretenimiento" }, { q: "¿Qué rapper NO pertenece a violadores del verso?", answers: ["Kase'O", "R de Rumba", "Natch", "Lirico"], correct: 2, category: "Entretenimiento" },
{ q: "¿Qué glándula endocrina se llama 'silla turca' por su ubicación ósea?", answers: ["Tiroides", "Hipófisis", "Pineal", "Hipotálamo"], correct: 1, category: "Ciencia" },
  { q: "¿En qué año se fundó la Liga Hanseática?", answers: ["1241", "1356", "1158", "1282"], correct: 0, category: "Historia" },
  { q: "¿Qué país africano tiene la forma de una lágrima invertida?", answers: ["Benín", "Togo", "Ghana", "Costa de Marfil"], correct: 2, category: "Geografía" },
  { q: "¿Cuál es el número de la constante de Euler (e) redondeado a 4 decimales?", answers: ["2.7182", "2.7183", "2.7181", "2.7180"], correct: 0, category: "Mates" },
  { q: "¿Qué planeta tiene el viento más rápido del sistema solar (hasta 2.100 km/h)?", answers: ["Júpiter", "Saturno", "Neptuno", "Urano"], correct: 2, category: "Ciencia" },
  { q: "¿Qué país tiene más de 1.000 islas habitadas en el Báltico?", answers: ["Suecia", "Finlandia", "Noruega", "Dinamarca"], correct: 1, category: "Geografía" },
  { q: "¿Qué elemento químico fue nombrado por el 'demonio del polvo' alemán?", answers: ["Cobalto", "Níquel", "Wolframio", "Cadmio"], correct: 0, category: "Ciencia" },
  { q: "¿Quién pintó el retablo 'El jardín de las delicias'?", answers: ["El Bosco", "Brueghel", "Memling", "Van Eyck"], correct: 0, category: "Arte" },
  { q: "¿Qué río australiano es el más largo pero no el más caudaloso?", answers: ["Murray", "Darling", "Murrumbidgee", "Lachlan"], correct: 0, category: "Geografía" },
  { q: "¿En qué año murió Gengis Kan?", answers: ["1227", "1206", "1241", "1215"], correct: 0, category: "Historia" },
  { q: "¿Qué instrumento mide la humedad relativa?", answers: ["Higrómetro", "Psicrómetro", "Termohigrógrafo", "Hidrógrafo"], correct: 1, category: "Ciencia" },
  { q: "¿Cuál es la montaña más alta de Oceanía (excluyendo el Himalaya asiático)?", answers: ["Puncak Jaya", "Monte Cook", "Monte Kosciuszko", "Monte Wilhelm"], correct: 0, category: "Geografía" },
  { q: "¿Qué batalla de la antigüedad enfrentó a romanos y cartagineses en 216 a.C.?", answers: ["Zama", "Cannas", "Trebia", "Lago Trasimeno"], correct: 1, category: "Historia" },
  { q: "¿Quién escribió 'Pedro Páramo'?", answers: ["Juan Rulfo", "Carlos Fuentes", "Octavio Paz", "Mario Vargas Llosa"], correct: 0, category: "Literatura" },
  { q: "¿Qué hueso de la muñeca es el más grande?", answers: ["Escafoides", "Semilunar", "Piramidal", "Gancho"], correct: 0, category: "Ciencia" },
  { q: "¿Qué país europeo tiene la ciudad de Rovaniemi (oficial de Papá Noel)?", answers: ["Suecia", "Noruega", "Finlandia", "Islandia"], correct: 2, category: "Geografía" },
  { q: "¿Cuál es el resultado de la integral de 0 a 1 de x^2 dx?", answers: ["1/3", "1/2", "2/3", "1/4"], correct: 0, category: "Mates" },
  { q: "¿Qué gas noble tiene el mayor punto de ebullición?", answers: ["Radón", "Xenón", "Kriptón", "Argón"], correct: 0, category: "Ciencia" },
  { q: "¿Qué país centroamericano tiene dos costas (Atlántico y Pacífico) pero la capital no está en ninguna?", answers: ["Guatemala", "Honduras", "Nicaragua", "Costa Rica"], correct: 3, category: "Geografía" },
  { q: "¿Qué deporte olímpico se practica sobre un campo de 91.44 m de largo?", answers: ["Hockey hierba", "Lacrosse", "Fútbol americano", "Rugby"], correct: 0, category: "Deportes" },
  { q: "¿En qué año se jugó la primera final de la Champions League como tal (UEFA)?", answers: ["1956", "1955", "1957", "1958"], correct: 0, category: "Deportes" },
  { q: "¿Qué actor interpretó a Anton Chigurh en 'No Country for Old Men'?", answers: ["Javier Bardem", "Tommy Lee Jones", "Josh Brolin", "Woody Harrelson"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué banda lanzó el álbum 'Nevermind' en 1991?", answers: ["Pearl Jam", "Soundgarden", "Nirvana", "Alice in Chains"], correct: 2, category: "Entretenimiento" },
  { q: "¿Cuál es el videojuego con mayor presupuesto de desarrollo (ajustado a inflación)?", answers: ["Cyberpunk 2077", "Red Dead Redemption 2", "GTA V", "Star Citizen"], correct: 3, category: "Entretenimiento" },
  { q: "¿Qué jugador de la NBA tiene el récord de más asistencias en un partido (30)?", answers: ["Stockton", "Magic", "Scott Skiles", "Isiah Thomas"], correct: 2, category: "Deportes" },
  { q: "¿Qué tenista femenina ganó el Roland Garros 2024?", answers: ["Swiatek", "Gauff", "Sabalenka", "Rybakina"], correct: 0, category: "Deportes" },
  { q: "¿Qué director de cine rodó 'Stalker' basado en los hermanos Strugatsky?", answers: ["Tarkovski", "Eisenstein", "Parajanov", "Mikhalkov"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué serie de TV terminó con la frase 'Not great, not terrible'?", answers: ["Chernobyl", "The Last of Us", "Succession", "The Crown"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué país ganó el Mundial de fútbol de 1966 en casa?", answers: ["Inglaterra", "Alemania", "Brasil", "Italia"], correct: 0, category: "Deportes" },
  { q: "¿Qué ciclista ganó el Giro de Italia 2023?", answers: ["Roglic", "Thomas", "Evenepoel", "Pogacar"], correct: 0, category: "Deportes" },
  { q: "¿Qué empresa creó la consola Dreamcast?", answers: ["Sega", "Nintendo", "Sony", "Microsoft"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué cantante es conocida por el álbum 'Back to Black' (2006)?", answers: ["Amy Winehouse", "Adele", "Duffy", "Lana Del Rey"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué luchador de la WWE tuvo el personaje 'Mankind'?", answers: ["Mick Foley", "The Rock", "Stone Cold", "Triple H"], correct: 0, category: "Deportes" },
  { q: "¿Qué película ganó el Oscar a Mejor Película Extranjera en 2018 ('Roma')?", answers: ["Roma", "Parásitos", "Cold War", "Shoplifters"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué futbolista uruguayo ganó el Balón de Oro 1960?", answers: ["Suárez (Luis Suárez Miramontes)", "Di Stéfano", "Puskás", "Kopa"], correct: 0, category: "Deportes" },
  { q: "¿Qué rapero lanzó el álbum 'The College Dropout'?", answers: ["Kanye West", "Jay-Z", "Eminem", "50 Cent"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué país tiene la liga de fútbol llamada 'Eredivisie'?", answers: ["Países Bajos", "Bélgica", "Dinamarca", "Suecia"], correct: 0, category: "Deportes" },
  { q: "¿Qué actor dijo 'I'll be back' en 'The Terminator'?", answers: ["Arnold Schwarzenegger", "Michael Biehn", "Linda Hamilton", "Edward Furlong"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué equipo de la MLB tiene el apodo 'Los Cardenales'?", answers: ["St. Louis Cardinals", "Arizona Cardinals (NFL)", "Cincinnati Reds", "Pittsburgh Pirates"], correct: 0, category: "Deportes" },
  { q: "¿Qué cantante femenina es la 'Reina del Tejano' asesinada en 1995?", answers: ["Selena Quintanilla", "Gloria Trevi", "Thalía", "Paulina Rubio"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué videojuego tiene como protagonista a una cazarrecompensas llamada Samus Aran?", answers: ["Metroid", "Castlevania", "Mega Man", "Contra"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué país ganó la Eurocopa 2004?", answers: ["Grecia", "Portugal", "República Checa", "Holanda"], correct: 0, category: "Deportes" },
  { q: "¿Qué serie de animación incluye a Stan, Kyle, Cartman y Kenny?", answers: ["South Park", "Family Guy", "Los Simpson", "Futurama"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué boxeador derrotó a Sonny Liston por KO en 1964?", answers: ["Muhammad Ali (Cassius Clay)", "Joe Frazier", "George Foreman", "Floyd Patterson"], correct: 0, category: "Deportes" },
  { q: "¿Qué película de DC recaudó más en taquilla (sin ajustar inflación)?", answers: ["Aquaman", "The Dark Knight", "Joker", "Batman v Superman"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué tenista masculino tiene el récord de más títulos ATP (109)?", answers: ["Jimmy Connors", "Roger Federer", "Novak Djokovic", "Ivan Lendl"], correct: 0, category: "Deportes" },
  { q: "¿Qué personaje de 'Friends' dijo 'How you doin'?'", answers: ["Joey", "Chandler", "Ross", "Monica"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué equipo de la NFL tiene a Joe Burrow como QB?", answers: ["Bengals", "Bills", "Chargers", "Dolphins"], correct: 0, category: "Deportes" },
  { q: "¿Qué cantante solista lanzó el álbum '1989'?", answers: ["Taylor Swift", "Katy Perry", "Lady Gaga", "Beyoncé"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué piloto de F1 tiene el récord de más poles (104)?", answers: ["Lewis Hamilton", "Michael Schumacher", "Ayrton Senna", "Sebastian Vettel"], correct: 0, category: "Deportes" },
  { q: "¿Qué director de cine dirigió 'Pulp Fiction'?", answers: ["Quentin Tarantino", "Robert Rodriguez", "Coen", "Fincher"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué selección de rugby ganó el Mundial 2023?", answers: ["Sudáfrica", "Nueva Zelanda", "Inglaterra", "Francia"], correct: 0, category: "Deportes" },
  { q: "¿Qué actor interpretó a Gandalf en 'El Señor de los Anillos'?", answers: ["Ian McKellen", "Christopher Lee", "Ian Holm", "John Rhys-Davies"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué equipo de fútbol alemán tiene el apodo 'Die Roten' (Los Rojos)?", answers: ["Bayern Múnich", "Borussia Dortmund", "Bayer Leverkusen", "Schalke 04"], correct: 0, category: "Deportes" },
  { q: "¿Qué videojuego de Valve es un shooter en equipo con bombas y rehenes?", answers: ["Counter-Strike", "Team Fortress 2", "Half-Life", "Left 4 Dead"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué atleta olímpico ganó 3 oros en natación en 2004 (Phelps)?", answers: ["Michael Phelps", "Ian Thorpe", "Pieter van den Hoogenband", "Grant Hackett"], correct: 0, category: "Deportes" },
  { q: "¿Qué serie de TV presentó a Sheldon Cooper?", answers: ["The Big Bang Theory", "Young Sheldon", "Two and a Half Men", "Friends"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué futbolista francés ganó el Balón de Oro 1991?", answers: ["Jean-Pierre Papin", "Zinedine Zidane", "Michel Platini", "Raymond Kopa"], correct: 0, category: "Deportes" },
  { q: "¿Qué cantante de rock es conocido como 'The Thin White Duke'?", answers: ["David Bowie", "Mick Jagger", "Jim Morrison", "Freddie Mercury"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué equipo de la NBA tiene a Luka Doncic (2024)?", answers: ["Mavericks", "Lakers", "Bulls", "Heat"], correct: 0, category: "Deportes" },
  { q: "¿Qué película animada de Disney de 1991 tiene a la Bestia?", answers: ["La bella y la bestia", "Aladdín", "La sirenita", "El rey león"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué nadador olímpico ganó 5 oros en 2016 (Phelps)?", answers: ["Michael Phelps", "Katie Ledecky", "Ryan Lochte", "Caeleb Dressel"], correct: 0, category: "Deportes" },
  { q: "¿Qué actor interpretó a James Bond en 'Casino Royale' (2006)?", answers: ["Daniel Craig", "Pierce Brosnan", "Sean Connery", "Roger Moore"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué equipo de fútbol español tiene la 'Masia' como academia?", answers: ["FC Barcelona", "Real Madrid", "Atlético de Madrid", "Athletic Bilbao"], correct: 0, category: "Deportes" },
  { q: "¿Qué videojuego tiene a un soldado llamado 'Master Chief'?", answers: ["Halo", "Gears of War", "Call of Duty", "Battlefield"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué tenista femenina ganó el US Open 2024?", answers: ["Gauff", "Swiatek", "Sabalenka", "Pegula"], correct: 0, category: "Deportes" },
  { q: "¿Qué serie de HBO mostró la casa de los Stark?", answers: ["Game of Thrones", "House of the Dragon", "The Witcher", "Vikings"], correct: 0, category: "Entretenimiento" },
  { q: "¿Qué piloto de F1 ganó el campeonato 2024?", answers: ["Verstappen", "Hamilton", "Norris", "Leclerc"], correct: 0, category: "Deportes" },

];

 
const DELAY_MS = 10;
const SCROLL_TIME_LIMIT_MS = 5 * 60 * 1000; // 5 minutos de scroll activo
 
const BLOCKED_SITES = ["instagram.com", "tiktok.com", "x.com", "twitter.com", "facebook.com", "youtube.com"];
const isBlockedSite = BLOCKED_SITES.some(site => location.hostname.includes(site));
 
// --- Scroll time tracker ---
let scrollTimeAccum = 0;
let lastScrollTime = null;
let scrollDecayTimer = null;
let scrollLocked = false;
 
function onScroll() {
  if (scrollLocked || document.getElementById("ff-overlay")) return;
 
  const now = Date.now();
  if (lastScrollTime !== null) {
    scrollTimeAccum += now - lastScrollTime;
  }
  lastScrollTime = now;
 
  clearTimeout(scrollDecayTimer);
  scrollDecayTimer = setTimeout(() => {
    lastScrollTime = null;
  }, 500);
 
  if (scrollTimeAccum >= SCROLL_TIME_LIMIT_MS) {
    scrollTimeAccum = 0;
    lastScrollTime = null;
    scrollLocked = true;
    showPopup();
  }
}
 
// 1. COMPROBACIÓN INICIAL AL CARGAR LA PÁGINA
const currentSite = location.hostname; // Detecta si es "tiktok.com", "instagram.com", etc.

chrome.storage.local.get([currentSite], (data) => {
  const now = Date.now();
  const siteLockTime = data[currentSite]; // Busca el bloqueo específico de este sitio

  if (siteLockTime && siteLockTime > now) {
    const secondsLeft = Math.ceil((siteLockTime - now) / 1000);
    showLockScreen(secondsLeft);
  } else if (isBlockedSite) {
    setTimeout(showPopup, DELAY_MS);
 
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") {
        chrome.storage.local.get(["lockedUntil"], (d) => {
          if (!d.lockedUntil || d.lockedUntil <= Date.now()) {
            setTimeout(showPopup, DELAY_MS);
          }
        });
      }
      if (document.visibilityState === "hidden") {
        lastScrollTime = null; // pausa el contador al cambiar de pestaña
      }
    });
 
    // Listeners de scroll
    window.addEventListener("scroll", onScroll, true);
    document.addEventListener("scroll", onScroll, true);
    document.addEventListener("wheel", onScroll, { passive: true });
  }
})  ;
 
 
// 2. PANTALLA DE BLOQUEO PURO
function showLockScreen(lockLeft) {
  let overlay = document.getElementById("ff-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "ff-overlay";
    document.body.appendChild(overlay);
  }
 
  overlay.innerHTML = `
    <div class="ff-card ff-lockout">
      <div class="ff-lock-icon">🔒</div>
      <p class="ff-lock-title">Acceso bloqueado</p>
      <p class="ff-lock-sub">Has fallado o recargado la página. Espera para continuar.</p>
      <div class="ff-lock-bar-wrap">
        <div class="ff-lock-bar" id="ff-lock-bar"></div>
      </div>
      <div class="ff-lock-countdown" id="ff-lock-countdown">${lockLeft}s</div>
    </div>`;
 
  const lockCountEl = document.getElementById("ff-lock-countdown");
  const lockBarEl = document.getElementById("ff-lock-bar");
  const initialLock = lockLeft;
 
  const lockInterval = setInterval(() => {
    lockLeft--;
    lockCountEl.textContent = lockLeft + "s";
    lockBarEl.style.width = ((initialLock - lockLeft) / initialLock * 100) + "%";
    if (lockLeft <= 0) {
      clearInterval(lockInterval);
      overlay.remove();
      scrollLocked = false;
    }
  }, 1000);
}
 
 
// 3. PREGUNTA TRIVIA
function showPopup() {
  if (document.getElementById("ff-overlay")) return;
  if (!chrome?.storage?.local) return;
 
  const q = questions[Math.floor(Math.random() * questions.length)];
  let timeLeft = 15;
  let answered = false;
 
  chrome.storage.local.get(["score", "streak", "leaderboard"], (data) => {
    const myScore = data.score || 0;
    const streak = data.streak || 0;
    const leaderboard = data.leaderboard || [
      { name: "Laura M.", score: 320 },
      { name: "Carlos R.", score: 280 },
      { name: "Manuel D.", score: 238 },
    ];
 
    const overlay = document.createElement("div");
    overlay.id = "ff-overlay";
 
    const allPlayers = [...leaderboard, { name: "Tú", score: myScore, isMe: true }]
      .sort((a, b) => b.score - a.score);
 
    const rankHTML = allPlayers.map((p, i) => {
      const medals = ["🥇", "🥈", "🥉"];
      return `<div class="ff-row ${p.isMe ? "ff-me" : ""}">
        <span class="ff-rank">${medals[i] || (i + 1)}</span>
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
        <div class="ff-warning">⚠️ Si fallas, <strong>-5 min</strong> de uso hoy y bajas en el podio</div>
        <div class="ff-podium">
          <p class="ff-podium-label">Clasificación semanal</p>
          ${rankHTML}
        </div>
      </div>`;
 
    document.body.appendChild(overlay);
 
    const timerEl = document.getElementById("ff-timer");
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
        const chosen = parseInt(btn.dataset.index);
        const allBtns = document.querySelectorAll(".ff-ans");
 
        if (chosen === q.correct) {
          // Acierto
          allBtns[chosen].classList.add("ff-correct");
          chrome.storage.local.set({ score: myScore + 10, streak: streak + 1 });
          
          // Esperamos medio segundo para que vea que el botón se ha puesto verde/azul...
          // ...y le plantamos la pantalla de celebración.
          setTimeout(() => {
            showSuccessScreen();
          }, 600); 
        } else {
          btn.classList.add("ff-wrong");
          allBtns[q.correct].classList.add("ff-correct");
          penalize();
        }
      });
    });
 
    function penalize() {
      const lockTimeSeconds = 30;
      const lockedUntil = Date.now() + (lockTimeSeconds * 1000);
      const currentSite = location.hostname; // "tiktok.com"

      sessionStorage.setItem("lockedUntil", lockedUntil.toString());
    
    // Si aún quieres guardar el score globalmente, deja el chrome.storage solo para eso:
    chrome.storage.local.set({ 
    [currentSite]: lockedUntil, // Esto crea una entrada tipo {"tiktok.com": 12345678}
    score: Math.max(0, (myScore || 0) - 15),
    streak: 0
  });
 
      showLockScreen(lockTimeSeconds);
    }
  });
}

// ==========================================
// 5. PANTALLA DE ÉXITO (REFUERZO POSITIVO)
// ==========================================
function showSuccessScreen() {
  let overlay = document.getElementById("ff-overlay");
  if (!overlay) return;

  // Reemplazamos el contenido de la tarjeta por una pantalla de celebración
  overlay.innerHTML = `
    <div class="ff-card" style="text-align: center; padding: 50px 32px;">
      <div style="font-size: 64px; margin-bottom: 16px; animation: bounce 1s infinite;">🎉</div>
      <p style="font-size: 24px; font-weight: 800; color: #185FA5; margin: 0 0 8px;">¡Respuesta Correcta!</p>
      <p style="font-size: 14px; color: #666; margin: 0 0 24px;">Has defendido tu racha con éxito.</p>
      
      <div style="display: inline-block; background: #E6F1FB; color: #185FA5; padding: 8px 16px; border-radius: 99px; font-weight: bold; font-size: 16px;">
        +10 Puntos 🔥
      </div>
    </div>`;

  // Desaparece sola a los 2.5 segundos dejándoles navegar en paz
  setTimeout(() => {
    if (document.getElementById("ff-overlay")) {
      document.getElementById("ff-overlay").remove();
    }
  }, 2500);
}
