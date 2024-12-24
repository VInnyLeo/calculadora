import { useState } from 'react';

export default function useButton() {
  
    const [contador, setContador] = useState('')

    const teclaCero = () => setContador(prevInput => prevInput + '0');
    const teclaUno = () => setContador(prevInput => prevInput + '1'); 
    const teclaDos = () => setContador(prevInput => prevInput + '2'); 
    const teclaTres = () => setContador(prevInput => prevInput + '3'); 
    const teclaCuatro = () => setContador(prevInput => prevInput + '4'); 
    const teclaCinco = () => setContador(prevInput => prevInput + '5'); 
    const teclaSeis = () => setContador(prevInput => prevInput + '6'); 
    const teclaSiete = () => setContador(prevInput => prevInput + '7'); 
    const teclaOcho = () => setContador(prevInput => prevInput + '8'); 
    const teclaNueve = () => setContador(prevInput => prevInput + '9');

    const teclaMas = () => setContador(prevInput => prevInput + '+'); 
    const teclaMen = () => setContador(prevInput => prevInput + '-'); 
    const teclaMul = () => setContador(prevInput => prevInput + '*');  
    const teclaDiv = () => setContador(prevInput => prevInput + '/'); 

    const teclaC = () => setContador(''); 
    const teclaIgual = () => { 
      try{
        setContador(eval(contador).toString()); //Evaluar la expresión 
      } catch { setContador('Error');
      }
    };
 
    /*const teclaCero = () => {
      setContador(0)
    };
    const teclaUno = () => {
      setContador(1)
    };
    const teclaDos = () => {
      setContador(2)
    };
    const teclaTres = () => {
      setContador(3)
    };
    const teclaCuatro = () => {
      setContador(4)
    };
    const teclaCinco = () => {
      setContador(5)
    };
    const teclaSeis = () => {
      setContador(6)
    };
    const teclaSiete = () => {
      setContador(7)
    };
    const teclaOcho = () => {
      setContador(8)
    };
    const teclaNueve = () => {
      setContador(9)
    };

    const teclaMas = () => {

    };
    const teclaMen = () => {

    };
    const teclaMul = () => {

    };
    const teclaDiv = () => {

    };

    const teclaC = () => {

    };
    const teclaIgual = () => {

    };
    */
    //const teclaPunto = () => {

    //}

    return {
      contador,
      teclaCero,
      teclaUno,
      teclaDos,
      teclaTres,
      teclaCuatro,
      teclaCinco,
      teclaSeis,
      teclaSiete,
      teclaOcho,
      teclaNueve,
      teclaMas,
      teclaMen,
      teclaMul,
      teclaDiv,
      teclaC,
      teclaIgual,
    };
}
