import { Project } from './types';

interface ProjectsData {
    [key: string]: Project[];
}

export const allProjects: ProjectsData = {



    JavaScript: [
        {   id: 1, 
            title: 'JavaScript Maze Solver', 
            description: [  'When I need to explore a graph systematically and visit all nodes level by level, I opt for the Breadth-First Search (BFS) algorithm in JavaScript. I start by selecting a source node and enqueue it into a queue. Then, I dequeue the front node, visit it, and mark it as visited. Next, I enqueue all unvisited adjacent nodes of the current node into the queue. This process continues until the queue becomes empty, ensuring that I cover all reachable nodes from the source in a well-organized manner. I find BFS particularly useful for finding the shortest path in unweighted graphs and for solving graph-related problems. ',
                            'Whenever I want to traverse a graph deeply, exploring as far as possible along each branch before backtracking, I turn to the Depth-First Search (DFS) algorithm in JavaScript. Starting from the source node, I mark it as visited and then explore one of its unvisited adjacent nodes (usually the first one encountered). I then recursively apply DFS to that node, delving deeper into the graph until I reach a leaf node or a node with no unvisited neighbors. If there are still unvisited nodes, I backtrack to the last node with unexplored neighbors and repeat the process. DFS is particularly handy for tasks like finding connected components, topological sorting, and solving puzzles like mazes. ',],
            images: ['JavaScript_Maze1'],
            year: 2019,
            githubURL: 'https://github.com/AustinGagnon/JavaScript_MazeSolver', },
        {
            id: 2,
            title: 'JavaScript Lava Lamp',
            description: ['The "Lava Lamp" Isosurface project in JavaScript has been an exhilarating experience. Implementing a real-time 3D environment with WebGL was both challenging and rewarding, as it allowed me to push the boundaries of creative visualization. Leveraging the Marching Cubes algorithm to generate isosurfaces from volumetric data was a fascinating aspect of the project, transforming scalar values into fluid-like shapes that appear to flow and move dynamically. Adding user interactivity, such as customizable parameters for density, color, and flow speed, provided an engaging touch, allowing users to immerse themselves in the captivating lava lamp effect. Optimizing performance was another critical aspect, ensuring that the mesmerizing animations run smoothly even on less powerful devices. Overall, crafting the "Lava Lamp" Isosurface project has been an exploration of the possibilities offered by WebGL and a testament to the power of creative coding in delivering visually stunning and interactive experiences.'],
            images: ['JavaScript_LavaLamp', 'JavaScript_LavaLamp2'],
            year: 2020,

        }
    ],

    Python: [
        {
            id: 1,
            description: ['When I first dipped my toes into Python, I was immediately struck by its simplicity and readability. '
                + 'Understanding data types, control flow, and functions laid the foundation for my journey.'
                + " As I became more comfortable with Python's core syntax, I started exploring object-oriented programming (OOP). Classes, "
                + 'objects, inheritance, and polymorphism '
                + "opened up a whole new world of possibilities. Creating modular and reusable code became second nature, and I began designing"
                + " more complex applications with ease."],
        },

        {
            id: 2,
            title: 'Multilayered Perceptron',
            description: ['This is a Python project.'],
            images: ['Python_MNIST']
        },
    ],

    Java: [
        {   id: 1, 
            title: 'Java', 
            description: ['This is a Java project.'] },

        {   id: 2, 
            title: 'Java', 
            description: ['This is a Java project.'] },
    ],

    'C#': [
        {   id: 1, 
            title: 'C#', 
            description: ['This is a C# project.'] },
    ],

    'Node.JS': [
        {   id: 1, 
            title: 'Node.JS', 
            description: ['This is a Node.JS project.'] },
        {   id: 2, 
            title: 'Node.JS', 
            description: ['This is a Node.JS project.'] },
        {   id: 3, 
            title: 'Node.JS', 
            description: ['This is a Node.JS project.'] },
        {   id: 4, 
            title: 'Node.JS', 
            description: ['This is a Node.JS project.'] },
    ],

    Firebase: [
        {   id: 1, 
            title: 'Firebase', 
            description: ['This is a Firebase project.'] },
    ],

    '.NET Framework': [
        {   id: 1, 
            title: '.NET Framework', 
            description: ['This is a .NET Framework project.'] },
    ],
    Projects: [
        {   id: 1, 
            title: 'My Journey into programming', 
            description: ['This is a .NET Framework project.'] },
    ],
};


export const getProjectsByLanguage = (language: string) => {
    return allProjects[`${language}`] || [];
};