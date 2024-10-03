        const adjectives = [
            {positive: 'bad', comparative: 'worse', superlative: 'worst'},
            {positive: 'beautiful', comparative: 'more beautiful', superlative: 'most beautiful'},
            {positive: 'big', comparative: 'bigger', superlative: 'biggest'},
            {positive: 'boring', comparative: 'more boring', superlative: 'most boring'},
            {positive: 'brave', comparative: 'braver', superlative: 'bravest'},
            {positive: 'cheap', comparative: 'cheaper', superlative: 'cheapest'},
            {positive: 'clever', comparative: 'cleverer', superlative: 'cleverest'},
            {positive: 'cold', comparative: 'colder', superlative: 'coldest'},
            {positive: 'cowardly', comparative: 'more cowardly', superlative: 'most cowardly'},
            {positive: 'cruel', comparative: 'crueler', superlative: 'cruelest'},
            {positive: 'difficult', comparative: 'more difficult', superlative: 'most difficult'},
            {positive: 'easy', comparative: 'easier', superlative: 'easiest'},
            {positive: 'expensive', comparative: 'more expensive', superlative: 'most expensive'},
            {positive: 'fast', comparative: 'faster', superlative: 'fastest'},
            {positive: 'foolish', comparative: 'more foolish', superlative: 'most foolish'},
            {positive: 'friendly', comparative: 'friendlier', superlative: 'friendliest'},
            {positive: 'funny', comparative: 'funnier', superlative: 'funniest'},
            {positive: 'good', comparative: 'better', superlative: 'best'},
            {positive: 'happy', comparative: 'happier', superlative: 'happiest'},
            {positive: 'hot', comparative: 'hotter', superlative: 'hottest'},
            {positive: 'intelligent', comparative: 'more intelligent', superlative: 'most intelligent'},
            {positive: 'interesting', comparative: 'more interesting', superlative: 'most interesting'},
            {positive: 'kind', comparative: 'kinder', superlative: 'kindest'},
            {positive: 'loud', comparative: 'louder', superlative: 'loudest'},
            {positive: 'old', comparative: 'older', superlative: 'oldest'},
            {positive: 'poor', comparative: 'poorer', superlative: 'poorest'},
            {positive: 'quiet', comparative: 'quieter', superlative: 'quietest'},
            {positive: 'rich', comparative: 'richer', superlative: 'richest'},
            {positive: 'sad', comparative: 'sadder', superlative: 'saddest'},
            {positive: 'short', comparative: 'shorter', superlative: 'shortest'},
            {positive: 'slow', comparative: 'slower', superlative: 'slowest'},
            {positive: 'small', comparative: 'smaller', superlative: 'smallest'},
            {positive: 'strong', comparative: 'stronger', superlative: 'strongest'},
            {positive: 'stupid', comparative: 'stupider', superlative: 'stupidest'},
            {positive: 'tall', comparative: 'taller', superlative: 'tallest'},
            {positive: 'ugly', comparative: 'uglier', superlative: 'ugliest'},
            {positive: 'unfriendly', comparative: 'unfriendlier', superlative: 'unfriendliest'},
            {positive: 'weak', comparative: 'weaker', superlative: 'weakest'},
            {positive: 'wise', comparative: 'wiser', superlative: 'wisest'},
            {positive: 'young', comparative: 'younger', superlative: 'youngest'}
        ];

        let currentAdjective;
        let currentForm;
        let currentLanguage = 'en';

        const translations = {
            en: {
                gameTitle: "English Adjective Game",
                explanationTitle: "Adjective Forms:",
                positiveExplanation: "• Positive: The base form of the adjective (e.g., \"happy\").",
                comparativeExplanation: "• Comparative: Used to compare two things. Add \"-er\" or use \"more\" (e.g., \"happier\" or \"more beautiful\").",
                superlativeExplanation: "• Superlative: Used to compare three or more things. Add \"-est\" or use \"most\" (e.g., \"happiest\" or \"most beautiful\").",
                startButton: "Start Game",
                instructionText: "Type the",
                formOf: "form of:",
                submitButton: "Submit",
                nextButton: "Next",
                correct: "Correct! Well done.",
                incorrect: "Incorrect. Try again. The correct answer is:"
            },
            es: {
                gameTitle: "Juego de Adjetivos en Inglés",
                explanationTitle: "Formas de los Adjetivos:",
                positiveExplanation: "• Positivo: La forma base del adjetivo (ej., \"feliz\").",
                comparativeExplanation: "• Comparativo: Se usa para comparar dos cosas. Añade \"-er\" o usa \"more\" (ej., \"happier\" o \"more beautiful\").",
                superlativeExplanation: "• Superlativo: Se usa para comparar tres o más cosas. Añade \"-est\" o usa \"most\" (ej., \"happiest\" o \"most beautiful\").",
                startButton: "Iniciar Juego",
                instructionText: "Escribe la forma",
                formOf: "de:",
                submitButton: "Enviar",
                nextButton: "Siguiente",
                correct: "¡Correcto! Bien hecho.",
                incorrect: "Incorrecto. Inténtalo de nuevo. La respuesta correcta es:"
            }
        };

        function startGame() {
            document.getElementById('startScreen').classList.add('hidden');
            document.getElementById('gameScreen').classList.remove('hidden');
            nextAdjective();
        }

        function nextAdjective() {
            currentAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
            currentForm = Math.random() < 0.5 ? 'comparative' : 'superlative';
            
            document.getElementById('adjective').textContent = currentAdjective.positive;
            document.getElementById('form-type').textContent = currentForm;
            document.getElementById('user-input').value = '';
            document.getElementById('message').textContent = '';
        }

        function checkAnswer() {
            const userInput = document.getElementById('user-input').value.trim().toLowerCase();
            const correctAnswer = currentAdjective[currentForm];

            if (userInput === correctAnswer) {
                document.getElementById('message').textContent = translations[currentLanguage].correct;
                document.getElementById('message').style.color = '#8cff00';
            } else {
                document.getElementById('message').textContent = `${translations[currentLanguage].incorrect} ${correctAnswer}`;
                document.getElementById('message').style.color = '#ff4d00';
            }
        }

        function toggleLanguage() {
            currentLanguage = currentLanguage === 'en' ? 'es' : 'en';
            updateLanguage();
        }

        function updateLanguage() {
            document.getElementById('gameTitle').textContent = translations[currentLanguage].gameTitle;
            document.getElementById('gameTitleInGame').textContent = translations[currentLanguage].gameTitle;
            document.getElementById('explanationTitle').textContent = translations[currentLanguage].explanationTitle;
            document.getElementById('positiveExplanation').textContent = translations[currentLanguage].positiveExplanation;
            document.getElementById('comparativeExplanation').textContent = translations[currentLanguage].comparativeExplanation;
            document.getElementById('superlativeExplanation').textContent = translations[currentLanguage].superlativeExplanation;
            document.getElementById('startButton').textContent = translations[currentLanguage].startButton;
            document.getElementById('instructionText').textContent = translations[currentLanguage].instructionText;
            document.getElementById('formOf').textContent = translations[currentLanguage].formOf;
            document.getElementById('submitButton').textContent = translations[currentLanguage].submitButton;
            document.getElementById('nextButton').textContent = translations[currentLanguage].nextButton;
        }

        // Initialize language
        updateLanguage();
