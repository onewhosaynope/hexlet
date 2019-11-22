car

Get car (first element) from pair
Parameters

    pair Pair

Examples

const pair = cons(5, 'hello');
car(pair); // 5

Returns any
cdr

Get cdr (second element) from pair
Parameters

    pair Pair

Examples

const pair = cons(5, 'hello');
cdr(pair); // hello

Returns any
isPair

Check if something is pair
Parameters

    pair Pair?

Examples

const pair = cons(5, 'hello');
isPair(pair); // true
isPair(5); // false

Returns boolean
toString

Convert pair to string (recursively)
Parameters

    pair Pair

Examples

toString(cons('', 10)); // ('', 10)

Returns string
cons

Build pair
Parameters

    a any
    b any

Examples

const pair = cons(5, 'hello');

const pair = cons(cons(1, null), 'world');

Returns Pair