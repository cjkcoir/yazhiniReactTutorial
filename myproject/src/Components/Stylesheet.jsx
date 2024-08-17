import "./mystyle.css"; // Import the CSS file

function Stylesheet(props) {
  let className = props.primary ? "primary" : "";
  return <div className={className}>Stylesheet</div>;
}

export default Stylesheet;
