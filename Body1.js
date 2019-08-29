import React from 'react';
import axios from 'axios';
import Select from 'react-select';
import flexible from './flexible.png';
import maac from './maac.png';
import simple from './simple.png';
import upload from './upload.png';
import { SOURCE_DB_VERSION, OS_PLATFORM, CDB, TARGET_DB_VERSION,  PLATFORM_FAMILY, NLS_CS_COMPATIBLE, DB_SIZE, NETWORK_BANDWIDTH, TARGET_DB, PERMISSIBLE_DT} from './data';
import 'bootstrap/dist/css/bootstrap.min.css';

class Body extends React.Component {

    constructor(){
        super();
        this.state={
            isDisabled: true,
            arrkey: [],
            seloptions: [],
            seloptions1: [],
            // seloptions2: [{ value: 'Linux x86-64', label: 'Linux x86-64' },{ value: 'Not Relavent', label: 'Not Relavent' },{ value: 'Other Platform', label: 'Other Platform' },],
            seloptions2: [],
            // seloptions3: [{ value: 'CDB', label: 'CDB' },{ value: 'NA', label: 'NA' },{ value: 'NonCDB', label: 'NonCDB' },],
            seloptions3: [],
            seloptions4: [],
            seloptions5: [],
            seloptions6: [],
            seloptions7: [],
            // seloptions8: [{ value: '11gR2', label: '11gR2' },{ value: '12cR1', label: '12cR1' },{ value: '12cR2', label: '12cR2' },],
            seloptions8: [],
            seloptions9: [],
            seloptions10: [],
            seloptions11: []
        }
    }
 
    componentDidMount() {
        var self = this;
        document.title = "Oracle Database Migration Advisor";
        document.getElementById("subbtn").disabled = true;
        self.setState({
            arrkey: 'SOURCE_DB_VERSION',
            seloptions: [{SOURCE_DB_VERSION}]
        }); 
    }	

    onChangeFunc(selectedvalue, e) {
        // var self = this;
        let value = selectedvalue.value;
        let bodyFormData;
        console.log(e, selectedvalue);
        console.log(e, value);
        switch (e) {
            case "1":
                if((value === "< 11.2.0.3" )||(value === "11.2.0.3" )||(value === "11.2.0.4" ))
                {
                    this.setState({
                        arrkey: 'CDB',
                        seloptions3: [{ value: 'NA', label: 'NA' },],
                        seloptions8: [{ value: '11gR2', label: '11gR2' },{ value: '12cR1', label: '12cR1' },{ value: '12cR2', label: '12cR2' },]
                    });
                }
                else if((value === "12cR1" )||(value === "12cR2" ))
                {
                    this.setState({
                        arrkey: 'CDB',
                        seloptions3: [{ value: 'CDB', label: 'CDB' },{ value: 'NON-CDB', label: 'NON-CDB' },],
                        seloptions8: [{ value: '12cR1', label: '12cR1' },{ value: '12cR2', label: '12cR2' },]
                    });
                }
                break;
            case "2":
                if(value === "Big Endian")
                {
                    this.setState({
                        arrkey: 'OS_PLATFORM',
                        seloptions2: [{ value: 'OS Platform', label: 'OS Platform' },{ value: 'Not Relevant', label: 'Not Relevant' },]
                    });
                }
                else if(value === "Little Endian")
                {
                    this.setState({
                        arrkey: 'OS_PLATFORM',
                        seloptions2: [{ value: 'OS Platform', label: 'OS Platform' },{ value: 'Linux x86-64', label: 'Linux x86-64' },{ value: 'Other Platform', label: 'Other Platform' },]
                    });
                }
                break;
            case "10":
                bodyFormData={
                    source_db_version : document.querySelectorAll(".css-1pcexqc-container .css-dvua67-singleValue")[0].innerText,
                    platform_family : document.querySelectorAll(".css-1pcexqc-container .css-dvua67-singleValue")[1].innerText,
                    os_platform: document.querySelectorAll(".css-1pcexqc-container .css-dvua67-singleValue")[2].innerText,
                    cdb : document.querySelectorAll(".css-1pcexqc-container .css-dvua67-singleValue")[3].innerText,
                    nls_cs_compatible: document.querySelectorAll(".css-1pcexqc-container .css-dvua67-singleValue")[4].innerText,
                    db_size: document.querySelectorAll(".css-1pcexqc-container .css-dvua67-singleValue")[5].innerText,
                    network_bandwidth: document.querySelectorAll(".css-1pcexqc-container .css-dvua67-singleValue")[6].innerText,
                    target_db: document.querySelectorAll(".css-1pcexqc-container .css-dvua67-singleValue")[7].innerText,
                    target_db_version: document.querySelectorAll(".css-1pcexqc-container .css-dvua67-singleValue")[8].innerText,
                    permissible_dt: value
                }
                console.log(bodyFormData);
                document.getElementById("subbtn").disabled = false;
                break;
            case "11":
                document.querySelector('textarea[name="result"]').value = value;
                break;
            default:
                bodyFormData={
                    selections: e,
                    source_db_version : value
                }
                break; 
        }
    }

    reset() {
        this.setState({             
            arrkey: [],
            seloptions: [],
            seloptions1: [],
            seloptions2: [],
            seloptions3: [],
            seloptions4: [],
            seloptions5: [],
            seloptions6: [],
            seloptions7: [],
            seloptions8: [],
            seloptions9: [],
            seloptions10: [],
            seloptions11: []
        });
    }

    resetResult() {
        this.setState({seloptions10: []});
    }
    handlesubmitClick() {
        let bodyFormData;
        bodyFormData={
            source_db_version : document.querySelectorAll(".css-1pcexqc-container .css-dvua67-singleValue")[0].innerText,
            platform_family : document.querySelectorAll(".css-1pcexqc-container .css-dvua67-singleValue")[1].innerText,
            os_platform: document.querySelectorAll(".css-1pcexqc-container .css-dvua67-singleValue")[2].innerText,
            cdb : document.querySelectorAll(".css-1pcexqc-container .css-dvua67-singleValue")[3].innerText,
            nls_cs_compatible: document.querySelectorAll(".css-1pcexqc-container .css-dvua67-singleValue")[4].innerText,
            db_size: document.querySelectorAll(".css-1pcexqc-container .css-dvua67-singleValue")[5].innerText,
            network_bandwidth: document.querySelectorAll(".css-1pcexqc-container .css-dvua67-singleValue")[6].innerText,
            target_db: document.querySelectorAll(".css-1pcexqc-container .css-dvua67-singleValue")[7].innerText,
            target_db_version: document.querySelectorAll(".css-1pcexqc-container .css-dvua67-singleValue")[8].innerText,
            permissible_dt: document.querySelectorAll(".css-1pcexqc-container .css-dvua67-singleValue")[9].innerText,
        }
        console.log(bodyFormData);
        if(bodyFormData.source_db_version || bodyFormData.platform_family || bodyFormData.os_platform || bodyFormData.cdb || bodyFormData.nls_cs_compatible || bodyFormData.db_size || bodyFormData.network_bandwidth || bodyFormData.target_db || bodyFormData.target_db_version || bodyFormData.permissible_dt !== "")
        {
            axios({
                async: true,
                crossDomain: true,
                method: 'POST',
                url: 'http://132.145.178.72:8084/migration/generateFile',
                data: bodyFormData,
                mimeType: "multipart/form-data",
            }).then(function (response) 
            {
                console.log(response);
                var str = response.data;
                document.querySelector('textarea[name="result"]').value = str.replace(/<[^>]*>/g, '');
            }).catch(function (response) {
                console.log("catch block"+response);
            });
        }
        else {
            alert("please enter all values");
        }
    }
    handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
      };
    submitForm=(e)=>{
		e.preventDefault();
		console.log(e.target.files)
		var data = new FormData()
		for(const file of e.target.files)
		{
    	data.append('file', file)
    	}
		fetch('http://132.145.178.72:8084/migration/clientFile',{
			method:'POST',
			body:data
		}).then(res=>res.json())
        .then(data=>{
            console.log(data);
            var str = data;
            document.querySelector('textarea[name="result"]').value = str.replace(/<[^>]*>/g, '');
        })
    }
	render() {    
        console.log(this.state);
        if((this.state.seloptions3 === []) || (this.state.seloptions8 === []))
        {
            document.getElementById("subbtn").disabled = true;
        }
        return(
            <div>
                <section className="cb83 cb83v2 cpad bgblue">
                    <div className="cb83w1 o-bgimg" id="zdmimg"></div>
                    <div className="cb83w7 cwidth">
                        <div className="cb83w5">
                            <div className="svgimg">
                                <img src="https://www.oracle.com/ocom/groups/public/@otn/documents/digitalasset/5303802.png" alt="ZDM" />
                            </div>
                        </div>
                        <div className="cb83w3">
                            <h2>Oracle Database Migration Advisor</h2>
                            <p>Simple, Automated, One button approach solution for moving your Oracle Databases into the Oracle Cloud</p>
                        </div>
                    </div>
                </section>
                <section className="ch13 ch13v3 txtlight pghero bgimg  cb110 cb110v0 cpad bkg-overlay bgvdarkgrey">
                    <div className="ch13bg">&nbsp;</div>
                    <div className="ch13w1 cwidth">
                        <div className="col-framework col2 col-justified col-gutters inview">
                            <div className="col-w1">
                                <div className="col-item">
                                    <div className="col-item-w1">
                                        <h2>Oracle Database Migration Advisor - Preview</h2>
                                        <div className="ch13w2">
                                            <div className="ch13w3">
                                                <div className="ch13w5">&nbsp;</div>
                                            </div>
                                        </div>
                                        <div className="container2">
                                            <h3>Upload File</h3>
                                            <div className="file-upload btn">
                                                <img aria-hidden title="Upload File" alt="Upload File" src={upload} />
                                                <input type="file" id="FileAttachment" className="upload" name="file" encType="multipart/form-data" onChange={this.submitForm} />
                                            </div><br/>
                                            <input className="outergalContainer" type="text" id="fileuploadurl" readOnly placeholder="Maximum file size is 1GB" />
                                        </div>   
                                    </div>
                                </div>
                                <div className="col-item">
                                    <div className="col-item-w1">
                                        <form className="cb110w1 cwidth" >
                                            <Select options={SOURCE_DB_VERSION} onChange={(event) => this.onChangeFunc(event, "1")} placeholder="Source DB Version"/><br/>
                                            <Select options={PLATFORM_FAMILY} onChange={(event) => this.onChangeFunc(event, "2")} placeholder="Platform Family"/><br/>
                                            <Select options={this.state.seloptions2} defaultValue={OS_PLATFORM[0]} onChange={(event) => this.onChangeFunc(event, "3")} /><br/>
                                            <Select options={this.state.seloptions3} defaultValue={CDB[0]} onChange={(event) => this.onChangeFunc(event, "4")} /><br/>
                                            <Select options={NLS_CS_COMPATIBLE} onChange={(event) => this.onChangeFunc(event, "5")} placeholder="NLS CS Compatible"/><br/>
                                            <Select options={DB_SIZE} onChange={(event) => this.onChangeFunc(event, "6")} placeholder="DB Size"/><br/>
                                            <Select options={NETWORK_BANDWIDTH} onChange={(event) => this.onChangeFunc(event, "7")} placeholder="Network Bandwidth"/><br/>
                                            <Select options={TARGET_DB} onChange={(event) => this.onChangeFunc(event, "8")} placeholder="Target DB IaaS / PaaS"/><br/>
                                            <Select options={this.state.seloptions8} defaultValue={TARGET_DB_VERSION[0]} onChange={(event) => this.onChangeFunc(event, "9")} /><br/>
                                            <Select options={PERMISSIBLE_DT} onChange={(event) => this.onChangeFunc(event, "10")} placeholder="Permissible DT"/><br/>
                                            <span className="dropres">Result : </span><textarea id="dropresult" className="rwidth css-bg1rzq-control" name="result" title="Dropdown Result" placeholder="Migration Method" readOnly/><br/>
                                            <div className="rwidth">                            
                                                <div className="bttn-darkburgundy obttn6">
                                                    <button onChange={this.reset.bind(this)}>Reset</button>
                                                </div>
                                            </div>
                                        </form>
                                        <div className="rwidth">                            
                                            <div className="bttn-darkburgundy obttn6">
                                                <button onClick={this.handlesubmitClick.bind(this)} id="subbtn">Submit</button>
                                            </div>
                                        </div>                                           
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="cb110 cb110v0 cpad bkg-overlay bgvdarkgreycs" data-ocomid="cb110" data-trackas="cb110">
                    <div className="cb110w1 cwidth">
                        <h2>Coming Soon</h2>
                        <div className="col-framework col3 col-gutters col-top inview">
                            <div className="col-w1">
                                <div className="col-item">
                                    <div className="cb110w2">
                                        <img src={flexible} alt="Flexible" className="icn-img icn-circle" />
                                    </div>
                                    <h4>Flexible</h4>
                                    <p>Multiple sources and targets</p>
                                </div>
                                <div className="col-item">
                                    <div className="cb110w2">
                                        <img src={maac} alt="MAA Compliant" className="icn-img icn-circle" />
                                    </div>
                                    <h4>MAA Compliant</h4>
                                    <p>Based on the precepts of Oracle's Maximum Availability Architecture</p>
                                </div>
                                <div className="col-item">
                                    <div className="cb110w2">
                                        <img src={simple} alt="Simple" className="icn-img icn-circle" />
                                    </div>
                                    <h4>Simple</h4>
                                    <p>One button approach Database Cloud Migration</p>
                                </div>
                            </div>
                        </div>
                        <div className="obttns obttn-center">&nbsp;</div>
                    </div>
                </section>
                <section className="cb27 cb27v5 bgburgundy">
                    <div className="cb27w1 cwidth">
                        <div className="cb27w2">Test Drive Oracle Database 19c in the Cloud</div>
                        <div className="cb27w3">
                            <div className="obttns">                            
                                <div className="bttn-darkburgundy obttn6">
                                    <a href="https://shop.oracle.com/apex/f?p=dstore:product:13428862221013::NO:RP,6:P6_LPI,P6_PPI:4509542241561805719959,">Free cloud trial &#8594;</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
		)
    }
}
export default Body;