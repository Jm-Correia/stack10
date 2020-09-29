import React, { InputHTMLAttributes, useEffect, useRef, useState, useCallback } from 'react';
import {IconBaseProps}  from 'react-icons'
import {FiAlertCircle} from 'react-icons/fi';

import {useField} from '@unform/core';

import Tooltip from '../Tooltip/index';

import {Container, Error} from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
    icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({name, icon:Icon, ...rest}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const {fieldName, defaultValue, error, registerField} = useField(name)
    const [isFocused, setIsFocused] = useState(false);
    const [isField, setIsField] = useState(false);
    
    const handleInputBlur = useCallback(()=>{
        setIsFocused(false);
       
        setIsField(!!(inputRef.current?.value));

    }, [])

    const handleInputFocus = useCallback(()=>{
      setIsFocused(true)
    },[])

    useEffect(()=>{
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        });
    }, [fieldName, registerField]);

    return (
        <Container isErr={!!error} isFocused={isFocused} isField={isField}>
            {Icon && <Icon size={20}/>}
            <input
             onFocus={()=> setIsFocused(true)}    
             onBlur={handleInputBlur}
             defaultValue={defaultValue}
             ref={inputRef}
             {...rest}
             />

             {error && 
                (
                <Error title={error}>
                   <FiAlertCircle size={20} color="#c53030"/>
                    
                </Error>
            )}
        </Container>
    )

};

export default Input;