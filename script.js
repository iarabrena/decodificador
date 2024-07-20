function criptografar() {
   let texto = document.getElementById('area_de_texto').value;
   let textoRecebido = texto.replace(/a/g, "ai")
                           .replace(/e/g, "enter") 
                           .replace(/i/,"imes") 
                           .replace(/o/,"ober") 
                           .replace(/u/,"ufat")
                           
   let resultado = document.querySelector('#resultado');
   resultado.innerHTML = textoRecebido;
}

function descriptografar(){
   let textoAside = document.getElementById('area_de_texto').value;
   let textoCriptografado = textoAside.replace(/ai/g, "a")
                            .replace(/enter/g, "e")
                            .replace(/imes/g, "i")
                            .replace(/ober/g, "o")
                            .replace(/ufat/g, "u")
   
   let resultado = document.querySelector('#resultado');
   resultado.innerHTML = textoCriptografado;
}