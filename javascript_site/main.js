function neuron_pointed(x, i)
    {
        var fieldNameElement = document.getElementById('typed');
        var text=""
        switch (i) {
            case 0: text = ">> Wstęp"; break;
            case 1: text = ">> Czym Jest SI?"; break;
            case 2: text = ">> Ścieżki rozwoju SI: GAN"; break;
            case 3: text = ">> Ścieżki rozwoju SI: Transformator"; break;
            case 4: text = ">> Ścieżki rozwoju SI: Uczenie przez wzmacnianie";  break;
            case 5: text = ">> SI w naszym życiu: Systemy rekomendacji"; break;
            case 6: text = ">> SI w naszym życiu: SI w walce z Covid-19"; break;
            case 7: text = ">> SI w naszym życiu: Autonomiczne pojazdy na drogach"; break;
            case 8: text = ">> Zagrożenia SI"; break;
            case 9: text = ">> Zakończenie";  break;
        }
        fieldNameElement.innerHTML = text;
        fieldNameElement.animate([{width: "0%"},{width: "100%"}], {duration: 1000});
    }

    function neuron_unpointed(x)
    {
        var fieldNameElement = document.getElementById('typed');
        fieldNameElement.innerHTML = ">> Wybierz komórkę by odczytać treść"
        fieldNameElement.animate([{width: "0%"},{width: "100%"}], {duration: 1000});
        console.log("hello")
    }

    function link_pointed(id) {
        var fieldNameElement = document.getElementById(id);
        fieldNameElement.style.color = "black";
        fieldNameElement.style.backgroundColor = "green";
    }
    function link_unpointed(id) {
        var fieldNameElement = document.getElementById(id);
        fieldNameElement.style.color = "rgb(90, 209, 79)";
        fieldNameElement.style.backgroundColor = "black "
    }
    