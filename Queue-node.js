//Reviewed. Status: Done.
//(Stretch: Tests Due) 

module.exports = class QueueNode {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
};
