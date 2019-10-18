import { INIT_MEMES, ADD_MEME, DEL_MEME } from './action-types';

const initialState = {
  misMemes: [],
}

function anyadir(state, meme) {
  const nuevosMemes = [...state.misMemes, meme]

  return {
    misMemes: nuevosMemes,
  };
}

function eliminar(state, id) {
  const nuevosMemes = state.misMemes.filter(m => m.id !== id);
  console.log(nuevosMemes);
  return {
    misMemes: nuevosMemes
  };
}

export default function memes(state = initialState, action) {
  switch(action.type) {
    case INIT_MEMES:
      return {misMemes: action.payload};
    case ADD_MEME:
      return anyadir(state, action.payload);
    case DEL_MEME:
      return eliminar(state, action.payload);
    default:
      return state;
  }
}