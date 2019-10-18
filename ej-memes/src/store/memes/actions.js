import { ADD_MEME, DEL_MEME, INIT_MEMES } from "./action-types";

const URL = 'https://ejemplos-dc1c1.firebaseio.com/mis-memes';

function createActionForAddMeme(meme) {
  return {
    type: ADD_MEME,
    payload: meme
  }
}

function createActionForDelMeme(id) {
  return {
    type: DEL_MEME,
    payload: id
  }
}

function createActionForInitMemes(memes) {
  return {
    type: INIT_MEMES,
    payload: memes
  }
}

export function initMemes(meme) {
  return dispatch => {
    fetch(`${URL}.json`)
      .then(resp => resp.json())
      .then(data => {
        const memes = []
        for (let id in data) {
          memes.push({id: id, ...data[id]});
        }
        dispatch(createActionForInitMemes(memes))
      })
  }
}

export function addMeme(meme) {
  return dispatch => {
    return fetch(`${URL}.json`, {
      method: 'POST',
      body: JSON.stringify(meme)
    })
      .then(resp => resp.json())
      .then(data => {
        const memeGuardado = {...meme, id: data.name}
        dispatch(createActionForAddMeme(memeGuardado))
      })
  }
}

export function delMeme(id) {
  return dispatch => {
    fetch(`${URL}/${id}.json`, {
      method: 'DELETE'
    })
      .then(resp => resp.json())
      .then(data => {
        dispatch(createActionForDelMeme(id))
      })
  }
}