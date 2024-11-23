        /* Variavél
        um espaço de mémoria que você reserva e 
        pode guardar o que quiser lá dentro
              
        3 jeitos de criar variável
        - var / jeito antigo
        -let -> você pode alterar o valor depois


        -const --> costante

        Posição formuulario
        inicial
        top: 30%;
        left: -300px

        Final
          top: 30%;
        left: 50%;
        transform: translateX(-50%);
        
        
        */ 
const form = document.querySelector(".formulario-fale-conosco")
const mascara= document.querySelector(".mascara-formulario")
const fale=document.querySelector("fale-conoscobuttom")

        function mostrarform() {
       form.style.left = "50%"
       form.style.transform ="translateX(-50%)"
       mascara.style.visibility = "visible" 
        }
        function esconderform(){
                form.style.left = "-300px"
                form.style.transform ="translateX(0)"
                mascara.style.visibility = "hidden" 

        }
        function mostrarfale(){
                form.style.left = "50%"
                form.style.transform ="translateX(-50%)"
                mascara.style.visibility = "visible" 

        }
        function esconderfale(){
                form.style.left = "-300px"
                form.style.transform ="translateX(0)"
                mascara.style.visibility = "hidden" 

        }