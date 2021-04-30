import React from 'react';
import ReactQuill from 'react-quill';
//import debounce from './helper.js';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { withStyles } from '@material-ui/core/styles';
import style from './style';

class EditorComponent extends React.Component{

    constructor(){
        super();

    }

    render(){
        return(<div>ediotor test</div>)
    }

}

export default withStyles(style)(EditorComponent);