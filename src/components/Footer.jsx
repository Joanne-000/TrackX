const styleDiv = {
  justifyContent: "center",
  backgroundColor: "rgb(78, 101, 124)",
  color: "white",
};

const styleFooter = {
  fontSize: "0.8rem",
  textAlign: "center",
  color: "white",
};

const Footer = () => {
  return (
    <footer style={styleDiv}>
      <p style={styleFooter}>Disclaimer:</p>
      <p style={styleFooter}>
        Please note that the information provided on our platform is strictly
        intended for informational purposes only and should not be construed as
        trading or investment advice.
      </p>
    </footer>
  );
};

export default Footer;
