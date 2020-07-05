import React, { Component } from 'react';
import { Button } from '@material-ui/core';

class GetWeather extends Component {

    render() {
        return (
            <Button
                type="submit"
                variant="contained"
                onSubmit = {this.props.getWeather}
            >
                Get weather
            </Button>

        )
    }
}

export default GetWeather;