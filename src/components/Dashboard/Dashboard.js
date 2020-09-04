/**@jsx jsx */
import { jsx } from '@emotion/core'
import { Fragment } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

import Layout from '../Layout'
import Messages from './Messaging/Messages'
import Projects from '../Home/Projects/Projects'
import { spinner } from '../../Styles'

const Dashboard = ({ isSubmitting, auth, projectsData, messagesData }) => {
  return (
    <Fragment>
      {!auth.uid ? (
        <Redirect to='/signin' />
      ) : (
        <Layout>
          {!isSubmitting ? (
            <div css={spinner}></div>
          ) : (
            <Fragment>
              <Projects projectsData={projectsData} />
              <Messages messagesData={messagesData} />
            </Fragment>
          )}
        </Layout>
      )}
    </Fragment>
  )
}

const mapStateToProps = state => {
  return {
    projectsData: state.firestore.ordered.projects,
    isSubmitting: state.firebase.profile.isLoaded,
    messagesData: state.firestore.ordered.contactedMe,
    auth: state.firebase.auth,
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'contactedMe', orderBy: ['sentAt', 'desc'] }])
)(Dashboard)