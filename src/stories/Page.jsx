import React from 'react';
import PropTypes from 'prop-types';
import {Box} from '@chakra-ui/react';
import {Header} from './Header';
import Content from './Content';

export class Page extends React.Component {
    state = {
        message: this.props.message ? this.props.message : '',
        chatClient: this.props.chatClient ? this.props.chatClient : 'slack',
    };

    handleMessageChange = event => {
        this.setState({message: event.target.value});
    };

    handleClientClick = event => {
        this.setState({chatClient: event.target.id});
    };


    render() {
        return (
            <Box>
                <Header/>
                <Content message={this.state.message} chatClient={this.state.chatClient}
                         onMessageChange={this.handleMessageChange} onClientClick={this.handleClientClick}/>
            </Box>
        );
    }
}

Page.propTypes = {
    message: PropTypes.string,
};

Page.defaultProps = {
    message: '',
};
