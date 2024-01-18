export const CustomButton = ({ message, children }) => {
  return <button onClick={() => alert(message)}>{children}</button>;
};
