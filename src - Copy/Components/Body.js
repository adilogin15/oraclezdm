import React from 'react';
import axios from 'axios';
import Select from 'react-select';
import flexible from './flexible.png';
import maac from './maac.png';
import simple from './simple.png';
import 'bootstrap/dist/css/bootstrap.min.css';

class Body extends React.Component {

    constructor(){
        super();
        this.state={
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
            isDisabled: false
        }
    }

    componentDidMount() {
        var self = this;
        document.title = "Oracle Database Migration Advisor";
        document.getElementById("subbtn").disabled = true;
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
            var rd= response.data[1];
            var keys = Object.keys(rd);
            self.setState({
                arrkey: keys,
                seloptions: response.data
            });         
        }).catch(function (response) {
            console.log(response);
        });
    }	

    onChangeFunc(selectedvalue, e) {
        var self = this;
        let value = selectedvalue.value;
        let bodyFormData;
        switch (e) {
            case "1":
                bodyFormData={
                    selections: e,
                    source_db_version : value,
                }
                this.setState({ isDisabled2: false});
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
                    data: bodyFormData,
                    config: { headers: {'Content-Type': 'multipart/form-data' }}
                }).then(function (response) 
                {
                    var rd= response.data[0];
                    var keys = Object.keys(rd);
                    let newkeyArray = [];
                    newkeyArray.push(response.data);
                    self.setState({
                        arrkey: keys,
                        seloptions1: newkeyArray[0]
                    });
                    document.querySelector('textarea[name="result"]').value = "";
                    self.resetresult(self);
                }).catch(function (response) {
                    console.log(response);
                });
                break;
            case "2":
                bodyFormData={
                    selections: e,
                    platform_family : value,
                    source_db_version : document.querySelectorAll(".css-1pcexqc-container .css-dvua67-singleValue")[0].innerText
                }
                this.setState({ isDisabled3: false });
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
                    data: bodyFormData,
                    config: { headers: {'Content-Type': 'multipart/form-data' }}
                }).then(function (response) 
                {
                    var rd= response.data[0];
                    var keys = Object.keys(rd);
                    let newkeyArray = [];
                    newkeyArray.push(response.data);
                    self.setState({
                        arrkey: keys,
                        seloptions2: newkeyArray[0]
                    });
                    document.querySelector('textarea[name="result"]').value = "";
                    self.resetresult(self);
                }).catch(function (response) {
                    console.log(response);
                });
                break;
            case "3":
                bodyFormData={
                    selections: e,
                    source_db_version : document.querySelectorAll(".css-1pcexqc-container .css-dvua67-singleValue")[0].innerText,
                    platform_family : document.querySelectorAll(".css-1pcexqc-container .css-dvua67-singleValue")[1].innerText,
                    os_platform: value
                }
                this.setState({ isDisabled4: false });
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
                    data: bodyFormData,
                    config: { headers: {'Content-Type': 'multipart/form-data' }}
                }).then(function (response) 
                {
                    var rd= response.data[0];
                    var keys = Object.keys(rd);
                    let newkeyArray = [];
                    newkeyArray.push(response.data);
                    self.setState({
                        arrkey: keys,
                        seloptions3: newkeyArray[0]
                    });
                    document.querySelector('textarea[name="result"]').value = "";
                    self.resetresult(self);
                }).catch(function (response) {
                    console.log(response);
                });
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
                this.setState(state => ({ isDisabled6: !state.isDisabled }));
                this.setState(state => ({ isDisabled7: !state.isDisabled }));
                this.setState(state => ({ isDisabled8: !state.isDisabled }));
                this.setState(state => ({ isDisabled9: !state.isDisabled }));
                this.setState(state => ({ isDisabled10: !state.isDisabled }));
                this.setState(state => ({ isDisabled11: !state.isDisabled }));
                axios({
                    method: 'post',
                    url: 'http://solutionengineering-devops.us.oracle.com:8086/migration/getMigrationData',
                    data: bodyFormData,
                    config: { headers: {'Content-Type': 'multipart/form-data' }}
                }).then(function (response) 
                {
                    var rd= response.data[0];
                    var keys = Object.keys(rd);
                    let newkeyArray = [];
                    newkeyArray.push(response.data);
                    self.setState({
                        arrkey: keys,
                        seloptions4: newkeyArray[0]
                    });
                    document.querySelector('textarea[name="result"]').value = "";
                    self.resetresult(self);
                }).catch(function (response) {
                    console.log(response);
                });
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
                this.setState(state => ({ isDisabled7: !state.isDisabled }));
                this.setState(state => ({ isDisabled8: !state.isDisabled }));
                this.setState(state => ({ isDisabled9: !state.isDisabled }));
                this.setState(state => ({ isDisabled10: !state.isDisabled }));
                this.setState(state => ({ isDisabled11: !state.isDisabled }));
                axios({
                    method: 'post',
                    url: 'http://solutionengineering-devops.us.oracle.com:8086/migration/getMigrationData',
                    data: bodyFormData,
                    config: { headers: {'Content-Type': 'multipart/form-data' }}
                }).then(function (response) 
                {
                    var rd= response.data[0];
                    var keys = Object.keys(rd);
                    let newkeyArray = [];
                    newkeyArray.push(response.data);
                    self.setState({
                        arrkey: keys,
                        seloptions5: newkeyArray[0]
                    });
                    document.querySelector('textarea[name="result"]').value = "";
                    self.resetresult(self);
                }).catch(function (response) {
                    console.log(response);
                });
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
                this.setState(state => ({ isDisabled8: !state.isDisabled }));
                this.setState(state => ({ isDisabled9: !state.isDisabled }));
                this.setState(state => ({ isDisabled10: !state.isDisabled }));
                this.setState(state => ({ isDisabled11: !state.isDisabled }));
                axios({
                    method: 'post',
                    url: 'http://solutionengineering-devops.us.oracle.com:8086/migration/getMigrationData',
                    data: bodyFormData,
                    config: { headers: {'Content-Type': 'multipart/form-data' }}
                }).then(function (response) 
                {
                    var rd= response.data[0];
                    var keys = Object.keys(rd);
                    let newkeyArray = [];
                    newkeyArray.push(response.data);
                    self.setState({
                        arrkey: keys,
                        seloptions6: newkeyArray[0]
                    });
                    document.querySelector('textarea[name="result"]').value = "";
                    self.resetresult(self);
                }).catch(function (response) {
                    console.log(response);
                });
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
                this.setState(state => ({ isDisabled9: !state.isDisabled }));
                this.setState(state => ({ isDisabled10: !state.isDisabled }));
                this.setState(state => ({ isDisabled11: !state.isDisabled }));
                axios({
                    method: 'post',
                    url: 'http://solutionengineering-devops.us.oracle.com:8086/migration/getMigrationData',
                    data: bodyFormData,
                    config: { headers: {'Content-Type': 'multipart/form-data' }}
                }).then(function (response) 
                {
                    var rd= response.data[0];
                    var keys = Object.keys(rd);
                    let newkeyArray = [];
                    newkeyArray.push(response.data);
                    self.setState({
                        arrkey: keys,
                        seloptions7: newkeyArray[0]
                    });
                    document.querySelector('textarea[name="result"]').value = "";
                    self.resetresult(self);
                }).catch(function (response) {
                    console.log(response);
                });
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
                this.setState(state => ({ isDisabled10: !state.isDisabled }));
                this.setState(state => ({ isDisabled11: !state.isDisabled }));
                axios({
                    method: 'post',
                    url: 'http://solutionengineering-devops.us.oracle.com:8086/migration/getMigrationData',
                    data: bodyFormData,
                    config: { headers: {'Content-Type': 'multipart/form-data' }}
                }).then(function (response) 
                {
                    var rd= response.data[0];
                    var keys = Object.keys(rd);
                    let newkeyArray = [];
                    newkeyArray.push(response.data);
                    self.setState({
                        arrkey: keys,
                        seloptions8: newkeyArray[0]
                    });
                    document.querySelector('textarea[name="result"]').value = "";
                    self.resetresult(self);
                }).catch(function (response) {
                    console.log(response);
                });
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
                this.setState(state => ({ isDisabled11: !state.isDisabled }));
                axios({
                    method: 'post',
                    url: 'http://solutionengineering-devops.us.oracle.com:8086/migration/getMigrationData',
                    data: bodyFormData,
                    config: { headers: {'Content-Type': 'multipart/form-data' }}
                }).then(function (response) 
                {
                    var rd= response.data[0];
                    var keys = Object.keys(rd);
                    let newkeyArray = [];
                    newkeyArray.push(response.data);
                    self.setState({
                        arrkey: keys,
                        seloptions9: newkeyArray[0]
                    });
                    document.querySelector('textarea[name="result"]').value = "";
                    self.resetresult(self);
                }).catch(function (response) {
                    console.log(response);
                });
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
                axios({
                    method: 'post',
                    url: 'http://solutionengineering-devops.us.oracle.com:8086/migration/getMigrationData',
                    data: bodyFormData,
                    config: { headers: {'Content-Type': 'multipart/form-data' }}
                }).then(function (response) 
                {
                    var rd= response.data[0];
                    var keys = Object.keys(rd);
                    let newkeyArray = [];
                    newkeyArray.push(response.data);
                    self.setState({
                        arrkey: keys,
                        seloptions10: newkeyArray[0]
                    });
                }).catch(function (response) {
                    console.log(response);
                });
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
            isDisabled: false
        });
    }
    resetresult() {
        this.setState({seloptions10: []});
    }
    handlesubmitClick() {
        return false;
    }
	render() {        
        let options = this.state.seloptions.map(function (opt) {
            if(opt.SOURCE_DB_VERSION == null){
                return { value: opt.SOURCE_DB_VERSION, label: opt.SOURCE_DB_VERSION, isDisabled : true};
            }
            else{
                return { value: opt.SOURCE_DB_VERSION, label: opt.SOURCE_DB_VERSION};
            }
        })
        let newoptions = this.state.seloptions1.map(function (opt) {
            return { value: opt.PLATFORM_FAMILY, label: opt.PLATFORM_FAMILY };
        })
        let newoptions1 = this.state.seloptions2.map(function (opt) {
            return { value: opt.OS_PLATFORM, label: opt.OS_PLATFORM };
        })
        let newoptions2 = this.state.seloptions3.map(function (opt) {
            return { value: opt.CDB, label: opt.CDB };
        })
        let newoptions3 = this.state.seloptions4.map(function (opt) {
            return { value: opt.NLS_CS_COMPATIBLE, label: opt.NLS_CS_COMPATIBLE };
        })
        let newoptions4 = this.state.seloptions5.map(function (opt) {
            return { value: opt.DB_SIZE, label: opt.DB_SIZE };
        })
        let newoptions5 = this.state.seloptions6.map(function (opt) {
            return { value: opt.NETWORK_BANDWIDTH, label: opt.NETWORK_BANDWIDTH };
        })
        let newoptions6 = this.state.seloptions7.map(function (opt) {
            return { value: opt.TARGET_DB, label: opt.TARGET_DB };
        })
        let newoptions7 = this.state.seloptions8.map(function (opt) {
            return { value: opt.TARGET_DB_VERSION, label: opt.TARGET_DB_VERSION };
        })
        let newoptions8 = this.state.seloptions9.map(function (opt) {
            return { value: opt.PERMISSIBLE_DT, label: opt.PERMISSIBLE_DT };
        })
        let newoptions9 = this.state.seloptions10.map(function (opt) {
            return opt.MIGRATION_METHOD;
        })
        const {isDisabled1,isDisabled2,isDisabled3,isDisabled4,isDisabled5,isDisabled6,isDisabled7,isDisabled8,isDisabled9,isDisabled10} = this.state;
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
                                    </div>
                                </div>
                                <div className="col-item">
                                    <div className="col-item-w1">
                                        <form className="cb110w1 cwidth" >
                                            <Select options={options} onChange={(event) => this.onChangeFunc(event, "1")} isDisabled={isDisabled1} placeholder="Source DB Version" /><br/>
                                            <Select options={newoptions} onChange={(event) => this.onChangeFunc(event, "2")} isDisabled={isDisabled2}  placeholder="Platform Family" /><br/>
                                            <Select options={newoptions1} onChange={(event) => this.onChangeFunc(event, "3")} isDisabled={isDisabled3}  placeholder="OS Platform" /><br/>
                                            <Select options={newoptions2} onChange={(event) => this.onChangeFunc(event, "4")} isDisabled={isDisabled4}  placeholder="CDB" /><br/>
                                            <Select options={newoptions3} onChange={(event) => this.onChangeFunc(event, "5")} isDisabled={isDisabled5}  placeholder="NLS CS Compatible" /><br/>
                                            <Select options={newoptions4} onChange={(event) => this.onChangeFunc(event, "6")} isDisabled={isDisabled6}  placeholder="DB Size" /><br/>
                                            <Select options={newoptions5} onChange={(event) => this.onChangeFunc(event, "7")} isDisabled={isDisabled7}  placeholder="Network Bandwidth" /><br/>
                                            <Select options={newoptions6} onChange={(event) => this.onChangeFunc(event, "8")} isDisabled={isDisabled8}  placeholder="Target DB IaaS / PaaS" /><br/>
                                            <Select options={newoptions7} onChange={(event) => this.onChangeFunc(event, "9")} isDisabled={isDisabled9}  placeholder="Target DB Version" /><br/>
                                            <Select options={newoptions8} onChange={(event) => this.onChangeFunc(event, "10")} isDisabled={isDisabled10}  placeholder="Permissible DT" /><br/>
                                            <span className="dropres">Result : </span><textarea id="dropresult" className="rwidth css-bg1rzq-control" name="result" title="Dropdown Result" value={newoptions9[0]} placeholder="Migration Method" /><br/>
                                            <div className="rwidth">                            
                                                <div className="bttn-darkburgundy obttn6">
                                                    <button onChange={this.reset.bind(this)}>Reset</button>
                                                </div>
                                            </div>
                                        </form>
                                        <div className="rwidth">                            
                                            <div className="bttn-darkburgundy obttn6">
                                                <button onChange={this.handlesubmitClick.bind(this)} id="subbtn">Submit</button>
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