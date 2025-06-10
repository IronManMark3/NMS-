import React from 'react';

const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  type = 'button',
  className = '',
  ...props
}) => {
  const baseClasses =
    'font-medium rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer inline-flex items-center justify-center';

  const variants = {
    primary:
      'bg-gradient-to-r from-[#c30015] to-[#0025ae] text-white hover:opacity-90 focus:ring-blue-500',
    secondary:
      'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500',
    outline:
      'border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500',

    // ✅ Updated Gradient Button Variant
    gradient:
  'bg-white text-transparent bg-clip-text bg-gradient-to-r from-[#c30015] to-[#0025ae] border border-[#c30015] transition-all duration-300 hover:text-white hover:bg-gradient-to-r hover:from-[#c30015] hover:to-[#0025ae] hover:bg-clip-padding hover:shadow-md hover:scale-[1.02]'
  };

  const sizes = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';

  const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${disabledClasses} ${className}`;

  return (
    <button
      type={type}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
