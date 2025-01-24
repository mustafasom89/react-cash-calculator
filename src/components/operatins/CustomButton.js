// CustomButton.js
/*
  CustomButton Component

  The CustomButton component is a reusable button component that leverages the Button component from react-bootstrap.
  This component ensures consistent styling and behavior for buttons across the application.

  Props:
    - onClick: A callback function to be executed when the button is clicked.
    - children: The content to be displayed inside the button, typically text or icons.

  Usage:
    This component can be used wherever a button is needed within the application. By passing different onClick
    handlers and children, it can perform various actions while maintaining a consistent look and feel.

  Example:
    <CustomButton onClick={handleClick}>Click Me</CustomButton>

  Dependencies:
    - React: For creating the component.
    - react-bootstrap: For the Button component and its styling.

  Custom Styles:
    - The className "button prompt-button" can be used to apply additional custom styles defined in the CSS file.

  This component helps in promoting code reusability and consistency across the application.
*/

import React from "react";
import { Button } from "react-bootstrap";

const CustomButton = ({ onClick, children }) => {
  return (
    <Button className="button prompt-button" onClick={onClick}>
      {children}
    </Button>
  );
};

export default CustomButton;
