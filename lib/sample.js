function Sample() {
    this.status = true;
}

Sample.prototype.say = function () {
    return 'Hello TDDBC!';
};

module.exports = Sample;
