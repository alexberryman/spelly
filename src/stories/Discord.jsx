import a from './assets/discord/a.svg';
import b from './assets/discord/b.svg';
import c from './assets/discord/c.svg';
import d from './assets/discord/d.svg';
import e from './assets/discord/e.svg';
import f from './assets/discord/f.svg';
import g from './assets/discord/g.svg';
import h from './assets/discord/h.svg';
import i from './assets/discord/i.svg';
import j from './assets/discord/j.svg';
import k from './assets/discord/k.svg';
import l from './assets/discord/l.svg';
import m from './assets/discord/m.svg';
import n from './assets/discord/n.svg';
import o from './assets/discord/o.svg';
import p from './assets/discord/p.svg';
import q from './assets/discord/q.svg';
import r from './assets/discord/r.svg';
import s from './assets/discord/s.svg';
import t from './assets/discord/t.svg';
import u from './assets/discord/u.svg';
import v from './assets/discord/v.svg';
import w from './assets/discord/w.svg';
import x from './assets/discord/x.svg';
import y from './assets/discord/y.svg';
import z from './assets/discord/z.svg';
import exclamation from './assets/discord/exclamation.svg';
import pound from './assets/discord/hash.svg';
import question from './assets/discord/question.svg';
import React from 'react';

export const alphabetWhiteMapping = {
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
    '?': question,
};

export function getEmojiCodeSnippet(message) {
    if (message === null) return <div/>;
    let inputArray = message.split('');
    console.log('discord');


    function buildCodeSnippet(c) {
        switch (c) {
            case '!':
                return `:exclamation:`;
            case '#':
                return `:hash:`;
            case '?':
                return `:question:`;
            default:
                return `:regional_indicator_${c}:`;
        }

    }

    let codeString = '';
    return inputArray.map(c => {
        if (alphabetWhiteMapping.hasOwnProperty(c.toLowerCase())) return codeString + buildCodeSnippet(c.toLowerCase()) + `\u00A0`;
        if (c === ' ') return codeString + `\u00A0\u00A0\u00A0`;
        return codeString + c;
    });
}

export function getEmoji(message) {
    let inputArray = message.split('');

    function buildImg(c) {
        return <img key={offset} src={alphabetWhiteMapping[c.toLowerCase()]} alt={c} width='25px'
                    height='25px'/>;
    }
    let offset = 0;
    return inputArray.map(c => {
        offset++;
        if (alphabetWhiteMapping.hasOwnProperty(c.toLowerCase())) return buildImg(c);
        if (c === ' ') return <span key={offset} className='d-inline'>{`\u00A0\u00A0\u00A0`}</span>;
        return <span key={offset} className='d-inline'>{c}</span>;
    });
}