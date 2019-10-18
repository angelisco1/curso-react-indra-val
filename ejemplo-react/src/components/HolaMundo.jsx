import React from 'react';
import MiPrimerComponente from './introduccion/MiPrimerComponente';
import CicloDeVida from './ciclo-de-vida/CicloDeVida';
import OtrasCosas from './otras-cosas/OtrasCosas';

const HolaMundo = () => (
  <div>
    <h1>Hola mundo!</h1>
    {/* <MiPrimerComponente /> */}
    {/* <CicloDeVida /> */}
    <OtrasCosas />
  </div>
);

export default HolaMundo;


// const persona = {
//   nombre: 'Angel',
//   apellido: 'Villalba',
//   nombreCompleto: function() {
//     this.edad = 22;
//     self = this
//     const fn = () => {
//       console.log(self.edad);
//     }
//     fn();
//     return this.nombre + ' ' + this.apellido;
//   }
// }

// const HolaMundo1 = function() {
//   console.log(this.nombre)
//   return (
//     <h1>Hola mundo!</h1>
//   )
// }