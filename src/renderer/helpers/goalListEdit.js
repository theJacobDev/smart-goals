import deepCopy from './deepCopy'
import uuid from 'uuid/v4'

function index (id, list) {
  return list.findIndex(item => item.id === id)
}

export function completeItem (id, list) {
  let newList = deepCopy(list)
  newList[index(id, list)].completed = !newList[index(id, list)].completed

  return newList
}

export function deleteItem (id, list) {
  let newList = deepCopy(list)
  newList.splice(index, 1)

  return newList
}

export function addItem (text, list) {
  return [{
    id: uuid(),
    completed: false,
    name: text
  },
  ...list]
}
