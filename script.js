var ddd = '55'; // DDD País
var cel = '1010882767359';
var r = cel.indexOf(ddd);
var nove;
var listaEstado = ['11','12','13','14','15','16','17','18','19','21','22','23','24','27','28','31','32','33','34','35','37','38','41','42','43','44','45','46','47','48','49','51','53','54','55','61','62','63','64','65','66','67','68','69','71','73','74','75','77','79','81','82','83','84','85','86','87','88','89','91','92','93','94','95','96','97','98','99'];

function validaEstado(){
    for(var x=0; x< listaEstado.length; x++){
        if(cel.indexOf(listaEstado[x]) == '2'){
            return cel.indexOf(listaEstado[x])
        }
    }
}

//Valida se o telefone está digitado corretamente
    function validPhone() {
var regex = new RegExp('^55[1-9]{2}9[1-9]{1}[0-9]{7}$');
return regex.test(cel);
}
for(var i = 0; validPhone() == false; i++) {

    //Corrige DDD de País errado.
    if (r != 0 && cel.length>=13){
        cel = cel.replace(cel.substring(0,2), "55");
        console.log('telefone ddd de país corrigido: '+cel);  
    } 

    //Adiciona ao celular o 9 na frente faltante.
    nove = cel.indexOf('9');
    if(cel.indexOf('9') != 4){
        cel = cel.replace(cel.substring(4,5),"9");
        console.log('telefone sem "9" corrigido: '+cel);
    }

    //Corrige DDD de estado para 51 caso digitado errado.
    if(validaEstado() != 2){
        cel = cel.replace(cel.substring(2,4), "51");
        console.log('telefone estado errado corrigido: '+cel);
    } 

    break;
}  

if(validPhone() == true){
    console.log('telefone válido: ' +cel);
} else console.log('telefone incorreto: ' +cel);

