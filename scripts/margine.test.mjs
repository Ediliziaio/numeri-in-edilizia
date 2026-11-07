import {test} from 'node:test';import assert from 'node:assert/strict';
import {calculateMargin,marginCsv,parseAmount} from '../lib/margine.ts';
const base={ricavi:'120000',materiali:'45000',manodopera:'30000',mezzi:'8000',subappalti:'15000',altri:'3000',struttura:'15'};
test('calculates the worked example and overhead on direct costs',()=>{const r=calculateMargin(base);assert.equal(r.costiDiretti,101000);assert.equal(r.quotaStruttura,15150);assert.equal(r.margine,3850);assert.ok(Math.abs(r.pctMargine-3.2083333333333335)<1e-10)});
test('zero revenue preserves monetary losses without a fictitious zero percent',()=>{const r=calculateMargin({...base,ricavi:'0'});assert.equal(r.margine,-116150);assert.equal(r.pctMargine,null);assert.equal(r.pctPrimaStruttura,null)});
test('empty, negative, partial and overflowing numbers are invalid',()=>{for(const v of ['', '-1','12abc','Infinity'])assert.equal(calculateMargin({...base,ricavi:v}),null);assert.equal(calculateMargin({...base,materiali:'1e308',manodopera:'1e308'}),null);assert.equal(parseAmount('12,5'),12.5)});
test('CSV includes inputs, calculations and a clear zero revenue percentage',()=>{assert.ok(marginCsv(base).includes('"3850"'));assert.ok(marginCsv({...base,ricavi:'0'}).includes('Non calcolabile con ricavi zero'));assert.equal(marginCsv({...base,ricavi:''}),null)});
