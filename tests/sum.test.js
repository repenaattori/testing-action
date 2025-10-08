import {test, expect} from 'vitest'
import {sum} from '../arithmetics.js'

test('Perustesti', ()=>{
    expect(sum(1,2)).toBe(3);
})