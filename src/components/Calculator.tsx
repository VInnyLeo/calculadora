
import useButton from "../hook/useButton";

export default function Calculator() {
//destructing para pasar los parametros 

  const {contador, teclaCero, teclaUno, teclaDos, teclaTres, teclaCuatro, teclaCinco, teclaSeis, teclaSiete, teclaOcho, teclaNueve, teclaMas, teclaMen, teclaMul, teclaDiv,
    teclaC, teclaIgual} = useButton();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => { event.preventDefault(); // Evita que el formulario se envíe
  };

  return (
    //llamar a un evento onClick
    <>
        <h3 className='text-2xl'>CALCULADORA <small className='font-bold'>{}</small> </h3>

        <div id="appCal">

          
          <form name="calculadora" onSubmit={handleSubmit}>

            <input type="text" name="ans" value={contador} autoComplete="off" readOnly/>
            <br/>
            
            <button onClick={teclaSiete} className='p-2 bg-blue-500 rounded-xl mx-2 text-white hover:bg-red-600'>7</button>
            <button onClick={teclaOcho} className='p-2 bg-blue-500 rounded-xl mx-2 text-white hover:bg-red-600'>8</button>
            <button onClick={teclaNueve} className='p-2 bg-blue-500 rounded-xl mx-2 text-white hover:bg-red-600'>9</button>
            <button onClick={teclaMas} className='p-2 bg-blue-500 rounded-xl mx-2 text-white hover:bg-red-600'>+</button>
            <br/>

            <button onClick={teclaCuatro} className='p-2 bg-blue-500 rounded-xl mx-2 text-white hover:bg-red-600'>4</button>
            <button onClick={teclaCinco} className='p-2 bg-blue-500 rounded-xl mx-2 text-white hover:bg-red-600'>5</button>
            <button onClick={teclaSeis} className='p-2 bg-blue-500 rounded-xl mx-2 text-white hover:bg-red-600'>6</button>      
            <button onClick={teclaMen} className='p-2 bg-blue-500 rounded-xl mx-2 text-white hover:bg-red-600'>-</button>
            <br/>

            <button onClick={teclaUno} className='p-2 bg-blue-500 rounded-xl mx-2 text-white hover:bg-red-600'>1</button>
            <button onClick={teclaDos} className='p-2 bg-blue-500 rounded-xl mx-2 text-white hover:bg-red-600'>2</button>
            <button onClick={teclaTres} className='p-2 bg-blue-500 rounded-xl mx-2 text-white hover:bg-red-600'>3</button>
            <button onClick={teclaMul} className='p-2 bg-blue-500 rounded-xl mx-2 text-white hover:bg-red-600'>*</button>
            <br/>

            <button onClick={teclaCero} className='p-2 bg-blue-500 rounded-xl mx-2 text-white hover:bg-red-600'>0</button>
            <button onClick={teclaC} className='p-2 bg-blue-500 rounded-xl mx-2 text-white hover:bg-red-600'>C</button>
            <button onClick={teclaDiv} className='p-2 bg-blue-500 rounded-xl mx-2 text-white hover:bg-red-600'>/</button>
            <button onClick={teclaIgual} className='p-2 bg-blue-500 rounded-xl mx-2 text-white hover:bg-red-600'>=</button>


            {/*<button onClick={() => handleClickLess()} className='p-2 bg-blue-500 rounded-xl mx-2 text-white hover:bg-red-600'>.</button>*/}
          </form>
        </div>
    </>
  )
}