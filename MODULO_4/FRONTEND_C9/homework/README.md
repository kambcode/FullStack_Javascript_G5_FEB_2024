# Tarea: Aplicar Contextos en la Aplicación de Rick and Morty

## Objetivo

En esta tarea, vamos a aplicar contextos en nuestra aplicación de Rick and Morty para manejar el estado de los filtros en la página de personajes. El objetivo es que los filtros se mantengan cuando el usuario navegue por la aplicación y vuelva a la página de personajes.

## Pasos a Seguir

### Paso 1: Crear el Contexto de Filtros

1. **Crear el contexto**: En la carpeta `src/contexts`, crea un archivo llamado `FilterContext.js`.

   ```javascript
   // src/contexts/FilterContext.js
   import React, { createContext, useState } from 'react';

   const FilterContext = createContext();

   export const FilterProvider = ({ children }) => {
     const [filters, setFilters] = useState({
       name: '',
       // // Los demas filtros dependen de si los implementaste o no en tareas anteriores
       // status: '',
       // species: '',
       // gender: '',
     });

     return (
       <FilterContext.Provider value={{ filters, setFilters }}>
         {children}
       </FilterContext.Provider>
     );
   };

   export default FilterContext;
   ```

2. **Proveer el contexto**: Envuelve tu aplicación con el proveedor del contexto en `App.js`.

   ```javascript
   // App.js
   import React from 'react';
   import { FilterProvider } from './contexts/FilterContext';
   import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

   const App = () => {
     return (
       <Router>
         <FilterProvider>
           <Routes>
            {/* Aca van las rutas de tu aplicación*/}
           </Routes>
         </FilterProvider>
       </Router>
     );
   };

   export default App;
   ```

### Paso 2: Consumir el Contexto en la Página de Listado de Personajes

1. **Modificar el componente de listado de personajes**: Usa el contexto para aplicar los filtros en la solicitud de personajes.

   ```javascript
   // CharacterPage.js
   import React, { useContext, useEffect, useState } from 'react';
   import FilterContext from './contexts/FilterContext';

   const CharacterPage = () => {
     const { filters, setFilters } = useContext(FilterContext);
     // Ahora podrás acceder a el estado global de la aplicación 
     // y el obtener los datos que el usuario filtró previamente 
     // a traves de la variable filters.

     /* Además, cuando el usuarios genere un nuevo filtro debes usar la función 
      setFilters, para actualziar el nuevo estado de los filtros, por ejemplo ejemplo:

      setFilters({
        name: 'Nuevo valor de el filtro por nombre',
        // Los demas filtros dependen de si los implementaste o no en tareas anteriores
        status: 'Nuevo valor de el filtro',
        species: 'Nuevo valor de el filtro',
        gender: 'Nuevo valor de el filtro',
      })
     */
    

     return (
      {/* Contenido de tu pagina */}
     );
   };

   export default CharacterPage;
   ```

### Paso 3: Probar la Aplicación

1. **Verificar funcionalidad**: Navega a la página de personajes, aplica algunos filtros, y asegúrate de que los filtros se mantengan cuando navegues a otras páginas y luego regreses a la página de personajes.

### Recursos Adicionales

- [Documentación Oficial de React - Context](https://es.reactjs.org/docs/context.html)
- [React Hooks](https://es.reactjs.org/docs/hooks-intro.html)
- [API de Rick and Morty](https://rickandmortyapi.com/)
