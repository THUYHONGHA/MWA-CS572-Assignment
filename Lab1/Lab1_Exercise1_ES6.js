String.prototype.filterWords= function([...args]) {
    var replacementString = this;
    [...args].forEach((word) => replacementString = replacementString.replace(word, '***'));
    return replacementString;
};

console.log('This house is nice!'.filterWords(['house', 'nice']));
