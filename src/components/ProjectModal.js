import React from 'react';

const ProjectModal = ({ project, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{project.name}</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        
        <div className="modal-body">
          <img 
            src={project.thumbnail} 
            alt={project.name}
            className="project-image"
          />
          <div className="project-details">
            <h3>Description</h3>
            <p>{project.descriptionLong}</p>
            <div className="project-rank-info">
              <strong>Current Rank: {project.rank}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;