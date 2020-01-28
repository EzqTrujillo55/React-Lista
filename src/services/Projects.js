const getProjects = async () => {
    const response = await fetch('https://sievo-react-assignment.azurewebsites.net/api/data');
    return response.json();
    
};

const Project = {
    getProjects
};

export default Project;