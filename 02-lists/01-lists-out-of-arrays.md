Arrays
- a very fundamental, low-level data structure
- contigious storage, consider an array just one strip of data
- fixed size, never changes!
- write to arrays with a[index] = value
- read from arrays with let x = a[index]
- any manipulations we want to do (like inserting a value in the middle)
  we must code manually

Lists
- A data-structure built out of an array
- Appears to have a "squishy" size where
  elements can be added and removed
- supports operations like
- let x = ll.get(index)
- ll.set(index, value)
- ll.removeFromIndex(index)
- ll.insertAtIndex(index, value)