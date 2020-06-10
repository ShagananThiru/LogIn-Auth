import React from "react";
import { Button } from "react-native-elements";

const FormButton = ({ title, buttonType, buttonColor, ...rest }) => (
  <Button
    {...rest}
    type={buttonType}
    title={title}
    color={buttonColor}
    buttonStyle={{ backgroundColor:buttonColor, borderRadius: 20 }}
    titleStyle={{ color: "#212330" }}
  />
);

export default FormButton;
