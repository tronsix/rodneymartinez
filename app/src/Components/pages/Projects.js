import React from 'react';

export const Projects = ( { match } ) => {

    let projectTitle = match.params.projectTitle;

    return(
        <div>
            <h2>Project Name: { projectTitle } </h2> 
        </div>
    );
}