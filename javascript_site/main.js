function neuron_pointed(x, i)
    {
        var fieldNameElement = document.getElementById('typed');
        var text=""
        switch (i) {
            case 0: text = ">> Wstęp"; break;
            case 1: text = ">> Czym Jest SI?"; break;
            case 2: text = "hfvs"; break;
            case 3: text = "bujs"; break;
            case 4: text = "vhhhs";  break;
            case 5: text = "djjj"; break;
            case 6: text = "jfjfj"; break;
            case 7: text = "hhghg"; break;
            case 8: text = "hhghg"; break;
            case 9: text = "akmsh";  break;
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
    