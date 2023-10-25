import React from "react";
import './styles/TextBox.css';

function TextBox(props) {
    return <div className='col-lg-6 col-md-6 col-sm-6 text-container'>
        <div className="textbox">
            <h1 className="heading-text">{props.heading}</h1>
            <p className="content-text">Lorem ipsum dolor sit amet consectetur. Mauris quis suspendisse pellentesque ultricies cursus ullamcorper eu nibh posuere. Pellentesque adipiscing feugiat egestas risus. Adipiscing sed pellentesque eget.
                Lorem ipsum dolor sit amet consectetur. Mauris quis suspendisse pellentesque ultricies cursus ullamcorper eu nibh posuere. Pellentesque adipiscing feugiat egestas risus. Adipiscing sed pellentesque eget sed accumsan. Sit at in nulla ornare fusce sed mollis ante et.
                Lorem ipsum dolor sit amet consectetur. Mauris quis suspendisse pellentesque ultricies cursus ullamcorper eu nibh posuere. </p>
        </div>
    </div>
}

export default TextBox;