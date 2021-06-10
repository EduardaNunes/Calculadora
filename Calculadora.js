//aqui eu crio uma função chamada calcular que irá coletar o valor do botão que chamar essa função e mostra-lo no meu display
        function calcular(valor){
            document.getElementById("display").value+=valor;
        }
        
        function apagar(){
            document.getElementById("display").value="";
        }
        
        function total(){
            var x = document.getElementById("display").value;
            var y = eval(x);
            document.getElementById("display").value=y;
        }