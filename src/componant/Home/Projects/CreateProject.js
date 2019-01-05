import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createProject, updateProject } from '../../../Store/Actions/ProjectsActions'
// import {recallLogos, uploadLogo} from '../../../Store/Actions/uploadLogoAction'
import {Redirect} from "react-router-dom";
import './Styles/CreateProject.scss'
import AuthNavlinks from '../../Navigation/AuthNavlinks'
import {BarLoader} from "react-spinners";
import Dropzone from "react-dropzone";
import axios from 'axios';
import { withFormik, Form, Field } from 'formik'
import {
  CLOUDINARY_API_KEY,
  CLOUDINARY_UPLOAD_PRESET,
  CLOUDINARY_UPLOAD_URL
} from "../../../Config/CloudInary";
import * as Yup from "yup";
import MyFooter from "../MyFooter/MyFooter";

// const initProps ={
//   project:[
//     {
//       id: this.props.project.id  && 1 || this.props.project.id || 1,
//       projectName: this.props.project.projectName || 'cong dong',
//       description: this.props.project.description || 'jasd asfddasf ',
//       projectLink: this.props.project.projectLink || ''},
//   ]
// };
class MyCreateProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imSrc: null,
      description: '',
      imageDropArray: [],
      projectLogos: [],
      isLoading : false
    };
    this.handleDrop= this.handleDrop.bind(this)
  }
  handleDrop=(acceptedFiles, rejectedFiles)=>{
    this.setState({
      isLoading : true
    });
    if(acceptedFiles && acceptedFiles.length >0){
      if(acceptedFiles[0].size < 8000000) {
        const uploaders = acceptedFiles.map(file => {
          // if (projectName === null) {
          //   console.log('project Name is empty', imageDropArray)
          // }else {
          //   this.props.uploadLogo((file) => {
          //     file.name = this.state.projectName
          //     return file
          //   })
          //   console.log('condition true')
          // }
          // this.props.uploadLogo(file)
          let myarrayx= [];
          let formData;
          // Initial FormData
          formData = new FormData();
          formData.append("file", file);
          formData.append("tags", `codeinfuse, small, gist`);
          formData.append(
            "upload_preset",
            CLOUDINARY_UPLOAD_PRESET
          );
          formData.append("api_key", CLOUDINARY_API_KEY); // Replace API key with your own Cloudinary key
          formData.append("timestamp", Date.now() / 1000 || 0); // Replace API key with your own Cloudinary key
          return axios
          .post(CLOUDINARY_UPLOAD_URL, formData, {
            headers: { "X-Requested-With": "XMLHttpRequest" }
          })
          .then(response => {
            const data = response.data;
            this.state.imageDropArray.push(data)
            this.state.imageDropArray.map((sup) => {
              myarrayx.push(sup.secure_url);
              this.props.setValues({
                ...this.props.values,
                projectLogos: myarrayx
              })
            })
          })
          .catch((err) => {console.log(err)});
        });
        axios
        .all(uploaders)
        .then(() => {
          this.setState({
            isLoading : false
          })
          this.props.setValues({
            ...this.props.values,
          });
        })
        .catch((err) => {console.log(err)});
      }
    }
    if(rejectedFiles && rejectedFiles.length >0){
      if(rejectedFiles[0].Size> 8000000) {
        alert('This File is too big')
      }
    }

  }

  render() {
    const {imageDropArray,isLoading,description} = this.state
    const {errors, touched, isSubmitting,auth, project,handleChange} = this.props
    let loader = isLoading || isSubmitting
    return (
      <div>
        {!auth.uid ? <Redirect to='/signin'/> :
          <div className="CreateProject">
            <AuthNavlinks/>
            <h1>Create New Project</h1>
            <div className="wrapper-container">
              {imageDropArray.length !== 0 ?
                <div className="maping">
                  {imageDropArray.map((link,ky) => {
                    return  <img alt ="" key={ky} src={link.url}/>
                  })}
                </div>
                :
                null
              }
              <Form id="createProject">
                <Dropzone onDrop={this.handleDrop}
                          accept="image/*"
                          multiple maxSize={8000000}
                >
                  {({ getRootProps, getInputProps }) => (
                    <div
                      {...getRootProps()}
                      className="drop-zone-styles"
                    >
                      <span>drop image(s)</span>
                      <input type="file" {...getInputProps()} />
                    </div>
                  )}
                </Dropzone>
                <div className="field-container">
                  <Field type="text"
                         placeholder={project ? project.projectName : "Project Name"}
                         name="projectName"
                  />
                </div>
                {errors.projectName && touched.projectName ? (
                  <p className="error-message">{errors.projectName}</p>
                ) : null}
                <div className="field-container">
                  <Field type="url"
                         placeholder={project ? project.projectLink : "Project Link"}
                         name="projectLink"
                  />
                </div>
                <textarea
                  placeholder={project ? project.description : "Project Description"}
                  name="description"
                  // value={description}
                  onChange={handleChange}
                  // required
                />
                <button type="submit" disabled={isSubmitting}>
                  {project ? 'Edit' : 'Create'} Project
                </button>
              </Form>
            </div>
            {loader ?
              <div className="my-spinner-container">
                <BarLoader
                  className="my-spinner"
                  sizeUnit={"px"}
                  size={150}
                  color={'#d4dff6'}
                  loading={loader}
                />
                Loading...
              </div>
              : null}
            <MyFooter/>
          </div>
        }
      </div>
    )
  }
}
const ContactMeSchema = withFormik({
  validationSchema: Yup.object().shape({
    projectName: Yup.string(),
    // .required('Required'),
    description: Yup.string()
  }),
  enableReinitialize: true,
  mapPropsToValues: (props) => ({
    ...props,
  }),
  mapValuesToPayload: x => x,
  handleSubmit: (values, bag) => {
    setTimeout(() => {
      values.project ? values.updateProject(values) : values.createProject(values)
      //firebase storage action
      // values.imageDropArray.map((item, i) => {
      //   this.props.uploadLogo((item) => {
      //     item.indexOf[i].name = `${values.projectName}-${i}`
      //     return (item , console.log('from formik: ', item, i))
      //   })
      // })
      document.getElementById("createProject").reset();
      bag.setSubmitting(false);
    }, 2000)
  },
  displayName: 'createProject',
});
const mapStateToProps = (state, ownProps) =>{
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id]: null;
  console.log(projects)
  return{
    auth:state.firebase.auth,
    project
  }
}
const mapDispatchToProps = (dispatch) =>{

  return{
    createProject: (project) => dispatch(createProject(project)),
    updateProject: (project) => dispatch(updateProject(project)),
    // uploadLogo: (file) => dispatch(uploadLogo(file)),
  }
};
const CreateProject = ContactMeSchema(MyCreateProject);
export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);