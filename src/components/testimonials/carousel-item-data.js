import React from "react";
import PropTypes from "prop-types";
import Image from "react-bootstrap/Image";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CarouselItemData = ({ imageSrc, linkedInSrc, name, title, quote }) => {
  return (
    <React.Fragment>
      <Image
        src={imageSrc}
        className="circle-border mb-3"
        roundedCircle
        fluid
      />
      <h3 className="font-weight-bold">
        <a
          href={linkedInSrc}
          target="_blank"
          rel="noopener noreferrer"
          className="testimonial-link"
        >
          {name}
        </a>
      </h3>
      <h5 className="font-weight-bold">{title}</h5>
      <p className="text-left">
        <FontAwesomeIcon icon={faQuoteLeft} /> {quote}
      </p>
    </React.Fragment>
  );
};

CarouselItemData.propTypes = {
  imageSrc: PropTypes.string,
  linkedInSrc: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  quote: PropTypes.string
};

export default CarouselItemData;
