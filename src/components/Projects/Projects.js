/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx} from '@emotion/react'
import React from 'react'
import {ErrorBoundary} from 'react-error-boundary'

import {h1XL} from '../Styles'
import ProjectDetails from './ProjectDetails'
import Card from './Card'
import OnToggle from '../Utils/OnToggle'
import {ErrorMessage} from '../Utils/util'

// TODO: add "import {matchSorter} from 'match-sorter'" to sort projects by name, data, or....

const ProjectComponent = ({projectsData}) => {
  const [project, setProject] = React.useState(null)
  return (
    <React.Fragment>
      <h1 css={h1XL}>Projects</h1>
      {project ? (
        <OnToggle items={projectsData} state={project} setState={setProject}>
          <ProjectDetails project={project} />
        </OnToggle>
      ) : (
        <Card items={projectsData} state={project} setState={setProject} />
      )}
    </React.Fragment>
  )
}

function Projects({projectsData}) {
  return (
    <ErrorBoundary resetKeys={[projectsData]} fallback={<ErrorMessage />}>
      <ProjectComponent projectsData={projectsData} />
    </ErrorBoundary>
  )
}
export default Projects
