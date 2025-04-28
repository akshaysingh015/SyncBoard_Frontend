import React from 'react';
import styled from 'styled-components';

/**
 * Reusable FloatingLabelInput component with robust float logic (handles invalid)
 */
const FloatingLabelInput = ({
  id,
  name,
  type = 'text',
  value,
  onChange,
  label,
  required = false,
  className = ''
}) => {
  return (
    <StyledWrapper className={className}>
      <div className="container">
        {/* placeholder=" " allows :placeholder-shown detection */}
        <input
          id={id}
          name={name}
          type={type}
          className="input"
          value={value}
          onChange={onChange}
          required={required}
          autoComplete="on"
          placeholder=" "
        />
        <label htmlFor={id} className="label">
          {label}
        </label>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .container {
    // font-family: "Tagesschrift", system-ui;
    display: flex;
    flex-direction: column;
    gap: 7px;
    position: relative;
    color: white;
    margin-bottom: 30px;
  }

  .container .label {
    font-size: 15px;
    padding-left: 10px;
    position: absolute;
    top: 13px;
    transition: transform 0.2s, padding-left 0.2s;
    pointer-events: none;
    background: transparent;
  }

  .input {
    width: 270px;
    height: 45px;
    border: none;
    outline: none;
    padding: 0px 7px;
    border-radius: 6px;
    color: #fff;
    font-size: 15px;
    background-color: transparent;
    box-shadow: 3px 3px 10px rgba(0,0,0,1),
      -1px -1px 6px rgba(255, 255, 255, 0.4);
    transition: box-shadow 0.3s;
  }

  /* Float label when focused or when user has typed (placeholder hidden) */
  .input:focus ~ .label,
  .input:not(:placeholder-shown) ~ .label {
    padding-left: 2px;
    transform: translateY(-35px);
  }

  /* Enhanced focus/valid/invalid styling uniformly */
  .input:focus,
  .input:valid,
  .input:invalid {
    box-shadow: 3px 3px 10px rgba(0,0,0,1),
      -1px -1px 6px rgba(255, 255, 255, 0.4),
      inset 3px 3px 10px rgba(0,0,0,1),
      inset -1px -1px 6px rgba(255, 255, 255, 0.4);
  }

  /* override browser autofill background */
  .input:-webkit-autofill,
  .input:-webkit-autofill:focus,
  .input:-webkit-autofill:hover,
  .input:-internal-autofill-selected {
    -webkit-box-shadow: 0 0 0px 1000px transparent inset;
    box-shadow: 0 0 0px 1000px transparent inset;
    -webkit-text-fill-color: #fff;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

export default FloatingLabelInput;
