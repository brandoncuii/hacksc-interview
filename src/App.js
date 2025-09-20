import React, { useState, useEffect } from 'react';
import ProjectList from './components/ProjectList';
import ProjectModal from './components/ProjectModal';
import './App.css';

function App() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true);

  const openProjectModal = (project) => {
    setSelectedProject(project);
  };
  
  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    // TODO: Replace with actual API call
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
      try { 
          const mockProjects = [
            {
              id: "c2218d54-e09e-495b-b61d-9f2b50c62805",
              name: "Joey's amazing project",
              descriptionShort: "This is an amazing project",
              descriptionLong: "Lorem ipsum odor amet, consectetuer adipiscing elit. Malesuada sem iaculis ac lacus adipiscing. Vulputate habitant mauris libero volutpat elementum nulla primis vulputate. Penatibus dui etiam eros torquent curabitur senectus molestie. Enim ac ullamcorper cras amet dignissim porta ullamcorper ante. Convallis luctus interdum ultricies class donec eu efficitur. Per urna ipsum aliquet bibendum mattis habitasse alique",
              thumbnail: "https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4",
              rank: 1
            },
            {
              id: "a8ae4388-3eaf-41f7-8614-fa8bbef90398",
              name: "Minecraft 2",
              descriptionShort: "Hit game Minecraft reimagined",
              descriptionLong: "Magna condimentum cras facilisi hendrerit tellus ultrices efficitur placerat. Gravida facilisis nulla lorem nascetur fames vel. Quis netus sem platea elementum mauris semper dictumst. Feugiat odio turpis velit vulputate nostra; nascetur nulla hendrerit leo. Varius proin lacinia lacinia fringilla eu luctus volutpat. Cursus eros netus; per bibendum ut tristique. Rhoncus phasellus per augue interdum dapibus taciti eget sodales. Maximus venenatis diam risus primis posuere euismod. Tempus nunc ante adipiscing dignissim erat in pellentesque.",
              thumbnail: "https://fastly.picsum.photos/id/2/5000/3333.jpg?hmac=_KDkqQVttXw_nM-RyJfLImIbafFrqLsuGO5YuHqD-qQ",
              rank: 2
            },
            {
              id: "0c77ad6b-5cfb-425e-a827-1d695a003099",
              name: "My first project",
              descriptionShort: "Hello world!",
              descriptionLong: "Long description lorem ipsum...",
              thumbnail: "https://www.placebear.com/200/200.jpg",
              rank: 3
            },
          ];
          setProjects(mockProjects);
          setLoading(false);
      } 
      catch (error) {
        console.error('Error fetching projects:', error);
        setLoading(false);
      }
  };

  const moveProject = (projectId, direction) => {
      setProjects(prevProjects => {
          const projectIndex = prevProjects.findIndex(p => p.id === projectId);
          if (projectIndex === -1) return prevProjects;

          const newProjects = [...prevProjects];
          const currentProject = newProjects[projectIndex];
          
          if (direction === 'up' && projectIndex > 0) {
              // Swap with previous project
              const prevProject = newProjects[projectIndex - 1];
              [currentProject.rank, prevProject.rank] = [prevProject.rank, currentProject.rank];
              [newProjects[projectIndex], newProjects[projectIndex - 1]] = [newProjects[projectIndex - 1], newProjects[projectIndex]];
          } else if (direction === 'down' && projectIndex < newProjects.length - 1) {
              // Swap with next project
              const nextProject = newProjects[projectIndex + 1];
              [currentProject.rank, nextProject.rank] = [nextProject.rank, currentProject.rank];
              [newProjects[projectIndex], newProjects[projectIndex + 1]] = [newProjects[projectIndex + 1], newProjects[projectIndex]];
          }
          
          return newProjects;
      });
  }

  if (loading) {
    return <div className="loading">Loading projects...</div>;
  }

  return (
    <div className="App">
      <header className="app-header">
        <h1>Judging Portal</h1>
        <p>Rank your favorite projects</p>
      </header>
      
      <main className="main-content">
        <div className="projects-section">
          <h2>Projects</h2>
          <ProjectList 
            projects={projects}
            onMoveProject={moveProject}
            onProjectClick={openProjectModal}
          />
        </div>
      </main>
  
      {selectedProject && (
        <ProjectModal 
          project={selectedProject}
          onClose={closeProjectModal}
        />
      )}
    </div>
  );
}


export default App;
