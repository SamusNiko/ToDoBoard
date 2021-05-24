import React from 'react';
import './style.css';

const DeletePopover = ({ visible, setPopoverVisible, text, callBack }) => {

    const onCancelClick = () => {
        setPopoverVisible(false);
    }

    return (
        <div style={visible ? { display: "block" } : { display: "none" }} className="delete-popover-background">
            <div className="delete-popover-container">
                <h3>{text}</h3>
                <div className="flex">
                    <button onClick={() => callBack()}>Yes</button>
                    <button onClick={() => onCancelClick()}>Cancel</button>
                </div>
            </div>

        </div>
    )

}
export default DeletePopover;