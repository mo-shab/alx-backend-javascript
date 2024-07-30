export default function createInt8TypedArray(length, position, value) {
    // Create a new ArrayBuffer of the specified length
    const buffer = new ArrayBuffer(length);
    // Create a DataView to manipulate the buffer
    const view = new DataView(buffer);
  
    // Check if the position is valid
    if (position < 0 || position >= length) {
      throw new Error('Position outside range');
    }
  
    // Set the value at the specified position
    view.setInt8(position, value);
  
    // Return the DataView
    return view;
  }
