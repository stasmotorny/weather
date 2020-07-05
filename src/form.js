import React from 'react';
import GetWeather from "./getWeather";
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import './form.css';

const CityChoiseForm = (props) => {
    return (
        <form id="cityChoise" onSubmit={props.getWeather}>

            <Autocomplete
                id="City"
                options={props.city}
                getOptionLabel={option => option}
                autoSelect={true}
                onChange={props.handleMyCityChange}
                renderInput={params =>
                    <TextField
                        {...params}
                        required={true}
                        inputProps={
                            {
                                ...params.inputProps,
                                pattern: props.cityCheck.join("|")
                            }
                        }
                        label="City"
                        className="text-field-custom"
                        color="secondary"
                        variant="outlined"
                    />
                }
            />
            <GetWeather form="cityChoise"/>
        </form>
    )
}

export default CityChoiseForm