import React from 'react';

import {Header} from './Header';
import './page.css';
import Textarea from './Textarea';
import Preview from './Preview';
import EmojiCodeSnippet from './EmojiCodeSnippet';

export class Page extends React.Component {
    render() {
        let {value} = this.props;
        const showThings = value !== null && value.length;
        return (
            <article>
                <Header/>

                <div>
                    <div className="tip-wrapper">
                        <Textarea value={value}/>
                        { showThings ? <Preview value={value}/> : null}
                        { showThings ? <EmojiCodeSnippet value={value}/> : null}
                    </div>
                </div>
            </article>
        );
    }
}

Page.propTypes = {};

Page.defaultProps = {};
