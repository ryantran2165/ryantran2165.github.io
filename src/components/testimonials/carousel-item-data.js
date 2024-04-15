import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React from "react";
import Image from "react-bootstrap/Image";

const CarouselItemData = ({ imageSrc, linkedInSrc, name, title, quote }) => {
  return (
    <React.Fragment>
      <Image
        fluid
        roundedCircle
        className="circle-img"
        src={imageSrc}
        alt={name}
        data-aos="fade-in"
        data-aos-delay="200"
      />
      <h4 className="font-weight-bold mt-3" data-aos="fade-in" data-aos-delay="200">
        <a
          className="testimonial-link"
          href={linkedInSrc}
          target="_blank"
          rel="noopener noreferrer"
        >
          {name}
        </a>
      </h4>
      <h5 className="font-weight-bold" data-aos="fade-in" data-aos-delay="200">
        {title}
      </h5>
      <p className="text-left" data-aos="fade-in" data-aos-delay="200">
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
  quote: PropTypes.string,
};

export default CarouselItemData;
