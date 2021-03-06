import React from 'react';
import a from './assets/a.png';
import b from './assets/b.png';
import c from './assets/c.png';
import d from './assets/d.png';
import e from './assets/e.png';
import f from './assets/f.png';
import g from './assets/g.png';
import h from './assets/h.png';
import i from './assets/i.png';
import j from './assets/j.png';
import k from './assets/k.png';
import l from './assets/l.png';
import m from './assets/m.png';
import n from './assets/n.png';
import o from './assets/o.png';
import p from './assets/p.png';
import q from './assets/q.png';
import r from './assets/r.png';
import s from './assets/s.png';
import t from './assets/t.png';
import u from './assets/u.png';
import v from './assets/v.png';
import w from './assets/w.png';
import x from './assets/x.png';
import y from './assets/y.png';
import z from './assets/z.png';
import exclamation from './assets/exclamation.png';
import pound from './assets/pound.png';
import at from './assets/at.png';
import question from './assets/question.png';

const alphabetWhiteMapping = {
    a: a,
    b: b,
    c: c,
    d: d,
    e: e,
    f: f,
    g: g,
    h: h,
    i: i,
    j: j,
    k: k,
    l: l,
    m: m,
    n: n,
    o: o,
    p: p,
    q: q,
    r: r,
    s: s,
    t: t,
    u: u,
    v: v,
    w: w,
    x: x,
    y: y,
    z: z,
    '!': exclamation,
    '#': pound,
    '@': at,
    '?': question,
};

function Preview({value}) {

    function getEmoji() {
        if (value === null) return <div/>;
        let inputArray = value.split('');

        function buildImg(c) {
            return <img src={alphabetWhiteMapping[c.toLowerCase()]} alt={c} width='25px'
                        height='25px'/>;
        }

        return inputArray.map(c => {
            if (alphabetWhiteMapping.hasOwnProperty(c.toLowerCase())) return buildImg(c);
            if (c === ' ') return <pre className='d-inline'>{c}</pre>
            return c;
        });
    }

    return (
        <div>
            {getEmoji()}
        </div>

    );
}

export default Preview;