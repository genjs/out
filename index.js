module.exports = Out;

function Out(indent) {
  this.indent = indent || '';
  this.out = indent;
  this.append = function(str) {
    this.out += str;
  }
  this.appenl = function(str) {
    this.append(str);
    this.newline();
  }
  this.newline = function() {
    this.out += '\n'+indent;
  }
  this.end = function() {
    return this.out;
  }
}
