import React from 'react';
import './emojiCodeSnippet.css';
import a from './assets/alphabet-white/a.png';
import b from './assets/alphabet-white/b.png';
import c from './assets/alphabet-white/c.png';
import d from './assets/alphabet-white/d.png';
import e from './assets/alphabet-white/e.png';
import f from './assets/alphabet-white/f.png';
import g from './assets/alphabet-white/g.png';
import h from './assets/alphabet-white/h.png';
import i from './assets/alphabet-white/i.png';
import j from './assets/alphabet-white/j.png';
import k from './assets/alphabet-white/k.png';
import l from './assets/alphabet-white/l.png';
import m from './assets/alphabet-white/m.png';
import n from './assets/alphabet-white/n.png';
import o from './assets/alphabet-white/o.png';
import p from './assets/alphabet-white/p.png';
import q from './assets/alphabet-white/q.png';
import r from './assets/alphabet-white/r.png';
import s from './assets/alphabet-white/s.png';
import t from './assets/alphabet-white/t.png';
import u from './assets/alphabet-white/u.png';
import v from './assets/alphabet-white/v.png';
import w from './assets/alphabet-white/w.png';
import x from './assets/alphabet-white/x.png';
import y from './assets/alphabet-white/y.png';
import z from './assets/alphabet-white/z.png';
import exclamation from './assets/alphabet-white/exclamation.png';
import pound from './assets/alphabet-white/pound.png';
import at from './assets/alphabet-white/at.png';
import question from './assets/alphabet-white/question.png';

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

function EmojiCodeSnippet({value}) {

    function getEmojiCodeSnippet() {
        if (value === null) return <div/>;
        let inputArray = value.split('');

        function buildCodeSnippet(c) {
            switch (c){
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
            if (alphabetWhiteMapping.hasOwnProperty(c.toLowerCase())) return codeString + buildCodeSnippet(c);
            if (c === ' ') return codeString + `\u00A0\u00A0\u00A0`
            return codeString + c;
        });
    }

    let emojiCodeSnippet = getEmojiCodeSnippet();

    function handleClick() {
        return navigator.clipboard.writeText(emojiCodeSnippet.join(''));
    }

    return (
        <div>
            <div className='alert alert-dark'>
                <h4 className='alert-heading'>Code</h4>
                <hr/>
                <div>
                    {emojiCodeSnippet}
                    <div>
                        <button className='btn btn-primary' onClick={handleClick}>Copy</button>
                    </div>
                </div>

            </div>
            <span className="tip">Tip</span> use <span className='code'>⌘+⇧+v</span> to paste into slack
        </div>

    );
}

export default EmojiCodeSnippet;