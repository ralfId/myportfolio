import { projects } from '../data/projects';

export const getProjectById = (id) => {
    return projects.find(p => p.Id === parseInt(id));
}
