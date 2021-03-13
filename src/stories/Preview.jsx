import React from 'react';
import PropTypes from 'prop-types';
import {Box, Button, Stack, useColorModeValue} from '@chakra-ui/react';
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

export const Preview = ({message, ...props}) => {
    function getEmoji() {
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

    return (
        <Box
            shadow="base"
            rounded={[null, 'md']}
            overflow={{sm: 'hidden'}}
        >
            <Stack
                px={4}
                py={5}
                bg={useColorModeValue('white', 'gray.700')}
                spacing={6}
                p={{sm: 6}}
            >
                <Stack direction='horizontal'>{getEmoji()}</Stack>
            </Stack>
            <Box
                px={{base: 4, sm: 6}}
                py={3}
                bg={useColorModeValue('gray.50', 'gray.900')}
                textAlign="right"
            >
                <Button
                    bg='purple'
                    color='white'
                    _hover={{bg: 'blue', shadow: ''}}
                    fontWeight="md"
                >
                    Export Image
                </Button>
            </Box>
        </Box>
    );
};

Preview.propTypes = {
    message: PropTypes.string.isRequired,
};

Preview.defaultProps = {
    message: '',
};