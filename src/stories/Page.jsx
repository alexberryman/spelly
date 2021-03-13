import React from 'react';
import PropTypes from 'prop-types';
import {Box} from '@chakra-ui/react';
import {Header} from './Header';
import Content from './Content';

export class Page extends React.Component {
    state = {message: this.props.message ? this.props.message : ''};

    handleChange = event => {
        this.setState({message: event.target.value})
    }

    render() {
        return (
            <Box>
                <Header/>
                <Content message={this.state.message} onChange={this.handleChange}/>
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
