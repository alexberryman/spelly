import a from './assets/slack/a.png';
import b from './assets/slack/b.png';
import c from './assets/slack/c.png';
import d from './assets/slack/d.png';
import e from './assets/slack/e.png';
import f from './assets/slack/f.png';
import g from './assets/slack/g.png';
import h from './assets/slack/h.png';
import i from './assets/slack/i.png';
import j from './assets/slack/j.png';
import k from './assets/slack/k.png';
import l from './assets/slack/l.png';
import m from './assets/slack/m.png';
import n from './assets/slack/n.png';
import o from './assets/slack/o.png';
import p from './assets/slack/p.png';
import q from './assets/slack/q.png';
import r from './assets/slack/r.png';
import s from './assets/slack/s.png';
import t from './assets/slack/t.png';
import u from './assets/slack/u.png';
import v from './assets/slack/v.png';
import w from './assets/slack/w.png';
import x from './assets/slack/x.png';
import y from './assets/slack/y.png';
import z from './assets/slack/z.png';
import exclamation from './assets/slack/exclamation.png';
import pound from './assets/slack/pound.png';
import at from './assets/slack/at.png';
import question from './assets/slack/question.png';
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
    '@': at,
    '?': question,
};

export function getEmojiCodeSnippet(message) {
    if (message === null) return <div/>;
    let inputArray = message.split('');

    function buildCodeSnippet(c) {
        switch (c) {
            case '!':
                return `:alphabet-white-exclamation:`;
            case '#':
                return `:alphabet-white-hash:`;
            case '@':
                return `:alphabet-white-at:`;
            case '?':
                return `:alphabet-white-question:`;
            default:
                return `:alphabet-white-${c}:`;
        }

    }

    let codeString = '';
    return inputArray.map(c => {
        if (alphabetWhiteMapping.hasOwnProperty(c.toLowerCase())) return codeString + buildCodeSnippet(c.toLowerCase());
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