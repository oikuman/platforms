import React from "react";
import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

AnyReactComponent.propTypes = {
    text: PropTypes.string
}

const ContactMap = () => {
  const defaultProps = {
    center: {
      lat: 50.44550368440243,
      lng: 30.430528554548133,
    },
    zoom: 15,
  };
  return (
    <div style={{ height: "400px", width: "400px" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAjngK5fH3OfNBmCdY98Vr3njRnzg_aCKQ", language: 'uk',
        region: 'uk' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        // yesIWantToUseGoogleMapApiInternals
      >
        <AnyReactComponent lat={50.44550368440243} lng={30.430528554548133} text="Ми тут" />
      </GoogleMapReact>
    </div>
  );
};

export default ContactMap;
