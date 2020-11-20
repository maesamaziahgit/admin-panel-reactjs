import React, { Component } from 'react'
import axios from 'axios'
import qs from 'querystring'
import { CContainer, CButton, CCard, CCardBody, CCardFooter,CCardHeader,CCol, CForm, CFormGroup, CFormText, CInput, CLabel, CAlert } from '@coreui/react'

const api = 'http://localhost:3001'

class ADEditUser extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             id: this.props.location.state.id,
             username: this.props.location.state.username,
             password: this.props.location.state.password,
             role: this.props.location.state.role,
             response: '',
             display: 'none'
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }
    
    editEmployee = (id) => {
        const data = qs.stringify({
            id: id,
            username: this.state.username, 
            password: this.state.password,
            role: this.state.role
        });

        axios.put(api + '/eidttUserAdmin', data)
        .then(json => {
            if (json.data.status === 200){
                this.setState({
                    response: json.data.values,
                    display: 'block'

                })
            } else {
                this.setState({
                    response: json.data.values,
                    display: 'block'
                })
            }
        })
    }

    render() {
        return (
            <CContainer>
            <CCard>
                <CCardHeader>
                    Edit User
              <small> Form</small>
                </CCardHeader>
                <CCardBody>
                    <CForm action="" method="post" className="form-horizontal">
                        <CAlert color="success" style={{display: this.state.display}}>
                            {this.state.response}
                        </CAlert>
                        <CFormGroup row>
                            <CCol md="3">
                                <CLabel>Username</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                                <CInput type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Enter Username" />
                                <CFormText className="help-block">Please enter your username</CFormText>
                            </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                            <CCol md="3">
                                <CLabel>Password</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                                <CInput type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Enter Password..."/>
                                <CFormText className="help-block">Please enter your password</CFormText>
                            </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                            <CCol md="3">
                                <CLabel>Role</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                                <CInput type="text" name="role" value={this.state.role} onChange={this.handleChange} placeholder="Enter Role" />
                                <CFormText className="help-block">Please enter your Role</CFormText>
                            </CCol>
                        </CFormGroup>
                    </CForm>
                </CCardBody>
                <CCardFooter>
                    <CButton type="button" onClick={()=>this.editEmployee(this.state.id)}> Update</CButton>
                </CCardFooter>
            </CCard>
        </CContainer>

            
        )
    }
}

export default ADEditUser