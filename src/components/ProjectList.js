import React from 'react';
import ProjectItem from './ProjectItem';

const ProjectList = ({ projects, onMoveProject, onProjectClick }) => {
  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <ProjectItem
          key={project.id}
          project={project}
          onMoveUp={() => onMoveProject(project.id, 'up')}
          onMoveDown={() => onMoveProject(project.id, 'down')}
          onProjectClick={() => onProjectClick(project)}
          canMoveUp={index > 0}
          canMoveDown={index < projects.length - 1}
        />
      ))}
    </div>
  );
};

export default ProjectList;