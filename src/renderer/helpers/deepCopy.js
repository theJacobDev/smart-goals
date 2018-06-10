// Spread operator creates only shallow copy so we have to "hack" with json operations to deep copy
// For now it's okay but change in case we use dates in this list to prevent it from losing its type

export default function (item) {
  return JSON.parse(JSON.stringify(item))
}
