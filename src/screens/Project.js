import React, { Suspense, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import projectData from '../assets/data/projects/projects.json'
import PageSubtitleComponent from '../components/PageSubtitleComponent';
import { colors } from '../assets/colors';

import './Project.css'

function Project() {
    const { id } = useParams(); // Get the project ID from the URL
    const [project, setProject] = useState(null)
    const [projectImage, setProjectImage] = useState(null);
    const [ProjectContent, setProjectContent] = useState(null);

    useEffect(() => {
        const foundProject = projectData.projects.find(proj => proj.id === parseInt(id));
        setProject(foundProject);

        if (foundProject) {
            import(`../${foundProject.imagePath}`).then(image => {
                setProjectImage(image.default);
            }).catch(err => console.error("Failed to load image:", err));

            // Dynamically import the project-specific component
            import(`../components/ProjectContents/Project${foundProject.id}Content.js`)
                .then(module => {
                    setProjectContent(() => module.default);
                })
                .catch(err => console.error("Failed to load project content:", err));
        }
    }, [id]);

    if (!project) {
        return <div className='container'>Oops - Yet to be done</div>;
    }

    return (
        <div className="container">
            <div style={{padding: '1rem 0 1rem 0'}}>
                <span style={{color: colors.text, fontSize:'12px'}}>{project.meta} - {project.year}</span>
                <PageSubtitleComponent title={project.name} />
            </div>
         
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alinItems: 'center', marginBottom: '2rem', gap: '1rem'}}>
                <div style={{minWidth: '200px'}}>
                    <p><strong>Expertise:</strong></p>
                    <span>{project.expertise}</span>
                </div>
                <div style={{minWidth: '200px'}}>
                    <p><strong>Platforms:</strong></p>
                    <span>{project.platforms.join(', ')}</span>
                </div>
                <div style={{minWidth: '200px'}}>
                    <p><strong>Deliverables:</strong></p>
                    <span>{project.deliverables.join(', ')}</span>
                </div>
        
                <div style={{minWidth: '200px'}}>
                    <p><strong>Website:</strong></p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" style={{color: colors.text}}>
                        {project.website ? project.website : "-"}
                    </a>
                </div>
            </div>


            <div className="subcontainer">
                {projectImage && <img src={projectImage} alt={project.name} style={{maxWidth: '100%', height: '100'}}/>}
            </div>

            <div className="subcontainer">
                <Suspense fallback={<div>Loading project content...</div>}>
                    {ProjectContent && <ProjectContent />}
                </Suspense>
            </div>

        </div>
    )
}

export default Project