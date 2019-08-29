import React from 'react';
import Rselect from 'react-select';
// import 'bootstrap/dist/css/bootstrap.min.css';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
const Select = ( props ) => {
    console.log(props);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <Rselect className="basic-single" classNamePrefix="select" options={props.selectedvalue} value={props.selectedlabel}/>
                </div>
            </div>
        </div>
    )
}

export default Select;