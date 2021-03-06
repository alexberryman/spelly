import React from 'react';

import {Header} from './Header';
import './page.css';
import Textarea from './Textarea';
import Preview from './Preview';
import EmojiCodeSnippet from './EmojiCodeSnippet';

export const Page = ({value}) => (
    <article>
        <Header/>

        <div>
            <div className="tip-wrapper">
                <Textarea value={value}/>
                <Preview value={value}/>
                <EmojiCodeSnippet value={value}/>
                <span className="tip">Tip</span> use <span className='code'>⌘+⇧+v</span> to paste into slack
            </div>
        </div>
    </article>
);
Page.propTypes = {};

Page.defaultProps = {};
