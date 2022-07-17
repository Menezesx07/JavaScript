var resultado = "";
    for (i = 1; i <= 7; i++) {
        for (a = 1; a <= 39; a++) {
            if (i == 1 || i == 7)
                resultado += "-";
            else if (a == 1 || a == 39)
                resultado += "|";
            else 
                resultado += " ";
        }
        resultado += "\n";
    }
    console.log(resultado);
