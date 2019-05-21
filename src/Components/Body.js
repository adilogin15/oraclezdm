import React from 'react';
import axios from 'axios';
import Select from 'react-select';
// import reset from './reset.png';
import 'bootstrap/dist/css/bootstrap.min.css';

class Body extends React.Component {

    constructor(){
        super();
        this.state={
            arrkey: [],
            seloptions: [],
            selectedvalue:null,
            isDisabled: false
        }
    }

    componentDidMount() {
        var self = this;
        // console.log("The api is loaded");
        this.setState(state => ({ isDisabled2: !state.isDisabled }));
        this.setState(state => ({ isDisabled3: !state.isDisabled }));
        this.setState(state => ({ isDisabled4: !state.isDisabled }));
        this.setState(state => ({ isDisabled5: !state.isDisabled }));
        this.setState(state => ({ isDisabled6: !state.isDisabled }));
        this.setState(state => ({ isDisabled7: !state.isDisabled }));
        this.setState(state => ({ isDisabled8: !state.isDisabled }));
        this.setState(state => ({ isDisabled9: !state.isDisabled }));
        this.setState(state => ({ isDisabled10: !state.isDisabled }));
        this.setState(state => ({ isDisabled11: !state.isDisabled }));
        axios({
            method: 'post',
            url: 'http://solutionengineering-devops.us.oracle.com:8086/migration/getMigrationData',
            data: {selections: 0},
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        }).then(function (response) 
        {
            // console.log(response.data[1],"first response");
            var rd= response.data[1];
            var keys = Object.keys(rd);
            // console.log("keys1 ---"+keys+"---- keys1");
            self.setState({
                arrkey: keys,
                seloptions: response.data
            });         
        }).catch(function (response) {
            console.log(response);
        });
    }	

    onChangeFunc(selectedvalue, e) {
        // console.log("id : "+e)
        // console.log("this state is working");
        // console.log(selectedvalue);
        var self = this;
        // console.log("new response :"+ selectedvalue);
        const value = selectedvalue.value;
        const label = selectedvalue.label;
        console.log(value+"   "+label);
        let bodyFormData;

        switch (e) {
            case "1":
                bodyFormData={
                    selections: e,
                    source_db_version : value,
                }
                this.setState({ isDisabled2: false });
                break;
            case "2":
                bodyFormData={
                    selections: e,
                    platform_family : value,
                    source_db_version : document.querySelectorAll(".css-1pcexqc-container .css-dvua67-singleValue")[0].innerText
                }
                this.setState({ isDisabled3: false });
                break;
            case "3":
                bodyFormData={
                    selections: e,
                    source_db_version : document.querySelectorAll(".css-1pcexqc-container .css-dvua67-singleValue")[0].innerText,
                    platform_family : document.querySelectorAll(".css-1pcexqc-container .css-dvua67-singleValue")[1].innerText,
                    os_platform: value
                }
                this.setState({ isDisabled4: false });
                break;
            case "4":
                bodyFormData={
                    selections: e,
                    source_db_version : document.querySelectorAll(".css-1pcexqc-container .css-dvua67-singleValue")[0].innerText,
                    platform_family : document.querySelectorAll(".css-1pcexqc-container .css-dvua67-singleValue")[1].innerText,
                    os_platform: document.querySelectorAll(".css-1pcexqc-container .css-dvua67-singleValue")[2].innerText,
                    cdb : value
                }
                this.setState({ isDisabled5: false });
                break;
            case "5":
                bodyFormData={
                    selections: e,
                    source_db_version : document.querySelectorAll(".css-1pcexqc-container .css-dvua67-singleValue")[0].innerText,
                    platform_family : document.querySelectorAll(".css-1pcexqc-container .css-dvua67-singleValue")[1].innerText,
                    os_platform: document.querySelectorAll(".css-1pcexqc-container .css-dvua67-singleValue")[2].innerText,
                    cdb : document.querySelectorAll(".css-1pcexqc-container .css-dvua67-singleValue")[3].innerText,
                    nls_cs_compatible: value
                }
                this.setState({ isDisabled6: false });
                break;
            case "6":
                bodyFormData={
                    selections: e,
                    source_db_version : document.querySelectorAll(".css-1pcexqc-container .css-dvua67-singleValue")[0].innerText,
                    platform_family : document.querySelectorAll(".css-1pcexqc-container .css-dvua67-singleValue")[1].innerText,
                    os_platform: document.querySelectorAll(".css-1pcexqc-container .css-dvua67-singleValue")[2].innerText,
                    cdb : document.querySelectorAll(".css-1pcexqc-container .css-dvua67-singleValue")[3].innerText,
                    nls_cs_compatible: document.querySelectorAll(".css-1pcexqc-container .css-dvua67-singleValue")[4].innerText,
                    db_size: value
                }
                this.setState({ isDisabled7: false });
                break;
            case "7":
                bodyFormData={
                    selections: e,
                    source_db_version : document.querySelectorAll(".css-1pcexqc-container .css-dvua67-singleValue")[0].innerText,
                    platform_family : document.querySelectorAll(".css-1pcexqc-container .css-dvua67-singleValue")[1].innerText,
                    os_platform: document.querySelectorAll(".css-1pcexqc-container .css-dvua67-singleValue")[2].innerText,
                    cdb : document.querySelectorAll(".css-1pcexqc-container .css-dvua67-singleValue")[3].innerText,
                    nls_cs_compatible: document.querySelectorAll(".css-1pcexqc-container .css-dvua67-singleValue")[4].innerText,
                    db_size: document.querySelectorAll(".css-1pcexqc-container .css-dvua67-singleValue")[5].innerText,
                    network_bandwidth: value
                }
                this.setState({ isDisabled8: false });
                break;
            case "8":
                bodyFormData={
                    selections: e,
                    source_db_version : document.querySelectorAll(".css-1pcexqc-container .css-dvua67-singleValue")[0].innerText,
                    platform_family : document.querySelectorAll(".css-1pcexqc-container .css-dvua67-singleValue")[1].innerText,
                    os_platform: document.querySelectorAll(".css-1pcexqc-container .css-dvua67-singleValue")[2].innerText,
                    cdb : document.querySelectorAll(".css-1pcexqc-container .css-dvua67-singleValue")[3].innerText,
                    nls_cs_compatible: document.querySelectorAll(".css-1pcexqc-container .css-dvua67-singleValue")[4].innerText,
                    db_size: document.querySelectorAll(".css-1pcexqc-container .css-dvua67-singleValue")[5].innerText,
                    network_bandwidth: document.querySelectorAll(".css-1pcexqc-container .css-dvua67-singleValue")[6].innerText,
                    target_db: value
                }
                this.setState({ isDisabled9: false });
                break;
            case "9":
                bodyFormData={
                    selections: e,
                    source_db_version : document.querySelectorAll(".css-1pcexqc-container .css-dvua67-singleValue")[0].innerText,
                    platform_family : document.querySelectorAll(".css-1pcexqc-container .css-dvua67-singleValue")[1].innerText,
                    os_platform: document.querySelectorAll(".css-1pcexqc-container .css-dvua67-singleValue")[2].innerText,
                    cdb : document.querySelectorAll(".css-1pcexqc-container .css-dvua67-singleValue")[3].innerText,
                    nls_cs_compatible: document.querySelectorAll(".css-1pcexqc-container .css-dvua67-singleValue")[4].innerText,
                    db_size: document.querySelectorAll(".css-1pcexqc-container .css-dvua67-singleValue")[5].innerText,
                    network_bandwidth: document.querySelectorAll(".css-1pcexqc-container .css-dvua67-singleValue")[6].innerText,
                    target_db: document.querySelectorAll(".css-1pcexqc-container .css-dvua67-singleValue")[7].innerText,
                    target_db_version: value
                }
                this.setState({ isDisabled10: false });
                break;
            case "10":
                bodyFormData={
                    selections: e,
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
                this.setState({ isDisabled11: false });
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
        console.log(bodyFormData);
        axios({
            method: 'post',
            url: 'http://solutionengineering-devops.us.oracle.com:8086/migration/getMigrationData',
            data: bodyFormData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        }).then(function (response) 
        {
            // console.log("helloonChangeFunc", response.data);
            var rd= response.data[0];
            var keys = Object.keys(rd);
            // console.log("keys2 ---"+keys+"---- keys2");
            let newkeyArray = [];
            newkeyArray.push(response.data);
            // console.log(newkeyArray[0]);
            self.setState({
                arrkey: keys,
                seloptions: newkeyArray[0]
            });
        }).catch(function (response) {
            console.log(response);
        });
    }
    reset() {
        this.setState({             
            arrkey: [],
            seloptions: [],
            selectedvalue:null,
            isDisabled: false
        });
    }
	render() {
        // console.log("render options :"+options.value);
        // console.log("render key : "+this.state.arrkey);
        let options = this.state.seloptions.map(function (opt) {
            if(opt.SOURCE_DB_VERSION == null)
            {
                return { value: opt.SOURCE_DB_VERSION, label: opt.SOURCE_DB_VERSION , isDisabled : true};
            }
            else{
                return { value: opt.SOURCE_DB_VERSION, label: opt.SOURCE_DB_VERSION};
            }
        })
        let newoptions = this.state.seloptions.map(function (opt) {
            return { value: opt.PLATFORM_FAMILY, label: opt.PLATFORM_FAMILY };
        })
        let newoptions1 = this.state.seloptions.map(function (opt) {
            return { value: opt.OS_PLATFORM, label: opt.OS_PLATFORM };
        })
        let newoptions2 = this.state.seloptions.map(function (opt) {
            return { value: opt.CDB, label: opt.CDB };
        })
        let newoptions3 = this.state.seloptions.map(function (opt) {
            return { value: opt.NLS_CS_COMPATIBLE, label: opt.NLS_CS_COMPATIBLE };
        })
        let newoptions4 = this.state.seloptions.map(function (opt) {
            return { value: opt.DB_SIZE, label: opt.DB_SIZE };
        })
        let newoptions5 = this.state.seloptions.map(function (opt) {
            return { value: opt.NETWORK_BANDWIDTH, label: opt.NETWORK_BANDWIDTH };
        })
        let newoptions6 = this.state.seloptions.map(function (opt) {
            return { value: opt.TARGET_DB, label: opt.TARGET_DB };
        })
        let newoptions7 = this.state.seloptions.map(function (opt) {
            return { value: opt.TARGET_DB_VERSION, label: opt.TARGET_DB_VERSION };
        })
        let newoptions8 = this.state.seloptions.map(function (opt) {
            return { value: opt.PERMISSIBLE_DT, label: opt.PERMISSIBLE_DT };
        })
        let newoptions9 = this.state.seloptions.map(function (opt) {
            return { value: opt.MIGRATION_METHOD, label: opt.MIGRATION_METHOD };
        })
        const {isDisabled1,isDisabled2,isDisabled3,isDisabled4,isDisabled5,isDisabled6,isDisabled7,isDisabled8,isDisabled9,isDisabled10,isDisabled11} = this.state;
        return(
            <section className="cb110 cb110v0 cpad bkg-overlay bgvdarkgrey">
                <form className="cb110w1 cwidth" >
                    <Select options={options} onChange={(event) => this.onChangeFunc(event, "1")} isDisabled={isDisabled1} /><br/>
                    <Select options={newoptions} onChange={(event) => this.onChangeFunc(event, "2")} isDisabled={isDisabled2} /><br/>
                    <Select options={newoptions1} onChange={(event) => this.onChangeFunc(event, "3")} isDisabled={isDisabled3} /><br/>
                    <Select options={newoptions2} onChange={(event) => this.onChangeFunc(event, "4")} isDisabled={isDisabled4} /><br/>
                    <Select options={newoptions3} onChange={(event) => this.onChangeFunc(event, "5")} isDisabled={isDisabled5} /><br/>
                    <Select options={newoptions4} onChange={(event) => this.onChangeFunc(event, "6")} isDisabled={isDisabled6} /><br/>
                    <Select options={newoptions5} onChange={(event) => this.onChangeFunc(event, "7")} isDisabled={isDisabled7} /><br/>
                    <Select options={newoptions6} onChange={(event) => this.onChangeFunc(event, "8")} isDisabled={isDisabled8} /><br/>
                    <Select options={newoptions7} onChange={(event) => this.onChangeFunc(event, "9")} isDisabled={isDisabled9} /><br/>
                    <Select options={newoptions8} onChange={(event) => this.onChangeFunc(event, "10")} isDisabled={isDisabled10} /><br/>
                    <Select options={newoptions9} onChange={(event) => this.onChangeFunc(event, "11")} isDisabled={isDisabled11} /><br/><br/>
                    <span className="dropres">Result : </span><textarea id="dropresult" className="rwidth css-bg1rzq-control" name="result" title="Dropdown Result" /><br/>
                    <div className="rwidth"><button onChange={this.reset.bind(this)}>Reset</button></div>
                </form>
            </section>
		)
	}
}
export default Body;