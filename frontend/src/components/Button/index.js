import React, { Fragment } from 'react';
import {Button} from '@material-ui/core';

export const KeyStroke= (props) => {
    return (
        <Fragment>
            <Button variant={'contained'} color={'secondary'}
            onClick={()=> props.submit()}
            size={'large'}
            style={{margin : "1em 0em", padding : "1em 0"}}
            >{props.button}</Button>
        </Fragment>
    )
}