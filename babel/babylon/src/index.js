import * as babylon from "babylon";
import traverse from "babel-traverse";
import * as t from 'babel-types'
import generator from 'babel-generator'

const code = `function square(n) {
    return n * n
}`;

const ast = babylon.parse(code);


const a = generator(ast, {}, code)
console.log(a)



