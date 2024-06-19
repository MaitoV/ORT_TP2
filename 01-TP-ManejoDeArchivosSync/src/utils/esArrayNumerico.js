function esArrayNumerico (array) {
    return array.every(elemento => typeof elemento == 'number');
}

module.exports = esArrayNumerico;