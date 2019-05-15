import React from 'react';
import Radium from 'radium';
import Input from 'react-bootstrap/InputGroup';

class Body extends React.Component {


    selectchange = (event) =>
    {
        var el = event.target.value ;
        console.log(event.target.value);
        if(el === "ONLINE" ) 
        {
            var list = document.getElementById("status");
            // var list = document.getElementById("status");
            list.append("<option>SHIPPED</option>");
        }
        else if(el === "MANUAL" ) 
        {
            // var list = document.getElementById("status");
            // list.removeChild(list.lastChild) ; 
            var selectobject=document.getElementById("status");
            // for (var i=0; i<selectobject.length; i++){
               selectobject.remove(selectobject.length);
               selectobject.length = selectobject.length -1;
            // }
        }
    }
    createSelectItems() {
        let items = [];         
        for (let i = 0; i <= this.props.maxValue; i++) {             
             items.push(<option key={i} value={i}>{i}</option>);   
             //here I will be creating my options dynamically based on
             //what props are currently passed to the parent component
        }
        return items;
    }  
   
   onDropdownSelected(e) {
       console.log("THE VAL", e.target.value);
       //here you will see the current selected value of the select input
   }
	render() {
        const style = {
            backgroundColor: 'red',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
            ':hover': {
              backgroundColor: 'salmon',
              color: 'black'
            }
          };
          const style2 = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
            ':hover': {
              backgroundColor: 'lightgreen',
              color: 'black'
            }
          };
        return(
            <section className="cb110 cb110v0 cpad bkg-overlay bgvdarkgrey">
                <div className="cb110w1 cwidth" >
                    Source:
                    <select id="source" name="source" onClick={this.selectchange} style={style} key="key1">
                        <option>MANUAL</option>
                        <option>ONLINE</option>
                    </select>

                    Status:

                    <select id="status" name="status" style={style2} key="key2">
                        <option>OPEN</option>
                        <option>DELIVERED</option>
                    </select>

                    <Input type="select" onChange={this.onDropdownSelected} label="Multiple Select" multiple>
                        {this.createSelectItems()}
                    </Input>
                </div>
            </section>
		)
	}
}

export default Radium(Body);