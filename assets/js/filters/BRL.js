/**
 * Created by ianldgs on 18/02/16.
 */
module.exports = BRL;

BRL.$inject = ['Money'];

function BRL(Money) {
    return input => !input ? null : Money.toBRL(input);
}