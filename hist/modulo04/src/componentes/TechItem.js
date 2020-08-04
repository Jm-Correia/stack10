import React from 'react';
import PropTypes from 'prop-types';

function TechItem(props){
    return (
        <li >
        {props.tech} 
        <button onClick={() => props.delete()} type="button">Remover</button>
        </li>
    );
}

TechItem.defaultProps ={
    tech: 'Oculto'
};

TechItem.propTypes = {
    tech: PropTypes.string,
    delete: PropTypes.func.isRequired,
};

export default TechItem;