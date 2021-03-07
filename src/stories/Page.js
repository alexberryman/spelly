import React from 'react';

import {Header} from './Header';
import './page.css';
import Textarea from './Textarea';
import Preview from './Preview';
import EmojiCodeSnippet from './EmojiCodeSnippet';

export class Page extends React.Component {
    state = {value: this.props.value ? this.props.value : ''}
    render() {
        const showThings = this.state.value.length;
        return (
            <div>
                <Header/>

                <div>
                    <div className="tip-wrapper">
                        <Textarea value={this.state.value} onChange={this.handleChange}/>
                        { showThings ? <Preview value={this.state.value}/> : null}
                        { showThings ? <EmojiCodeSnippet value={this.state.value}/> : null}
                    </div>
                </div>
            </div>
        );
    }

    handleChange = event => {
        this.setState({value: event.target.value})
    }
}

Page.propTypes = {};

Page.defaultProps = {};
