import React, { useState } from 'react';

function App() {
    // 1. Crear un nuevo estado llamado miTexto
    const [miTexto, setMiTexto] = useState('');

    // 2. Crear función handleText para manejar cambios en la entrada
    const handleText = (event) => {
        // 3. Tomar el valor de la caja de entrada con event.target.value
        setMiTexto(event.target.value); // 4. Actualizar el estado
    };

    return (
        <div>
          <div>Capture su texto</div>
          {/* 5. Pasar el estado a la entrada como value y agregar el event handler */}
          <input type="text" value={miTexto} onChange={handleText} />
          <h3>Su Texto</h3>
          <p>
            {/* Mostrar el texto de la caja de entrada aquí */}
            {miTexto}
          </p>
        </div>
    );
}

export default App;