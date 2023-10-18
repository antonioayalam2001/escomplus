import './App.css'

function App () {
  return (
    <>
      <div className='h-screen w-screen  backgroundBlueGradient p-8'>
        {/* Componente de comentario */}
        <div className='px-6 py-4 bg-background-300 rounded-xl flex p-4 gap-6 w-fit border-[6px] border-l-4 border-white shadow-boxContainer text-white'>
          {/* UserIMG and tags */}
          <div className='flex flex-col'>
            {/* UserImg */}
            <div className='rounded-full bg-pink-200 h-12 w-12 '></div>
            {/* TAGS */}
            <div></div>
          </div>
          {/* Nombre, comentario rating */}
          <div className='flex flex-col'>
            <h3>Mora Ayala Jose Antonio</h3>
            <p>La profesora huele bien</p>
            <p>Rating: 5</p>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
