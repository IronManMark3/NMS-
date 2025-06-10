import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  variant = 'default',
  padding = 'medium',
  shadow = 'medium',
  rounded = 'medium',
  ...props 
}) => {
  const baseClasses = 'bg-white border border-gray-200';
  
  const variants = {
    default: 'bg-white',
    gradient: 'bg-gradient-to-br from-[#c30015a0] to-[#0025aea0]',
    transparent: 'bg-transparent',
    gray: 'bg-gray-50',
  };
  
  const paddings = {
    none: 'p-0',
    small: 'p-3',
    medium: 'p-4',
    large: 'p-6',
    xl: 'p-8',
  };
  
  const shadows = {
    none: 'shadow-none',
    small: 'shadow-sm',
    medium: 'shadow-md',
    large: 'shadow-lg',
    xl: 'shadow-xl',
  };
  
  const roundings = {
    none: 'rounded-none',
    small: 'rounded-sm',
    medium: 'rounded-md',
    large: 'rounded-lg',
    xl: 'rounded-xl',
  };
  
  const cardClasses = `${baseClasses} ${variants[variant]} ${paddings[padding]} ${shadows[shadow]} ${roundings[rounded]} ${className}`;
  
  return (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  );
};

export default Card;