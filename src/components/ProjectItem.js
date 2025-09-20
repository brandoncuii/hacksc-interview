import React from 'react';

const ProjectItem = ({ 
  project, 
  onMoveUp, 
  onMoveDown, 
  canMoveUp, 
  canMoveDown,
  onProjectClick 
}) => {
  return (
    <div className="project-item" onClick={onProjectClick}>
      <div className="project-content">
        <div className="project-rank">
          {project.rank}.
        </div>
        <div className="project-info">
          <h3 className="project-name">{project.name}</h3>
          <p className="project-description">{project.descriptionShort}</p>
        </div>
        <div className="project-controls" onClick={(e) => e.stopPropagation()}>
          <button 
            className="arrow-btn up" 
            onClick={onMoveUp}
            disabled={!canMoveUp}
          >
            ▲
          </button>
          <button 
            className="arrow-btn down" 
            onClick={onMoveDown}
            disabled={!canMoveDown}
          >
            ▼
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;