import ProgressBar from "progressbar.js/dist/progressbar";
import PropTypes from "prop-types";
import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import { Waypoint } from "react-waypoint";

const SkillCircle = ({ language }) => {
  const [animated, setAnimated] = useState(false);

  function animate() {
    if (animated) {
      return;
    }

    setAnimated(true);

    var circle = new ProgressBar.Circle(`#${language.id}`, {
      color: "#222",
      strokeWidth: 3,
      trailColor: "#eee",
      trailWidth: 1,
      easing: "easeInOut",
      duration: 2000,
      from: { color: "#7fffd4" },
      to: { color: "#7fffd4" },

      step: function (state, circle) {
        circle.path.setAttribute("stroke", state.color);

        var value = Math.round(circle.value() * 5);
        if (value === 0) {
          circle.setText("");
        } else {
          circle.setText(value + "<br>" + language.display);
        }
      },
    });

    circle.animate(language.rating / 5);
  }

  return (
    <Waypoint onEnter={animate}>
      <Col xs={4} className="mt-3" data-aos="fade-in" data-aos-delay="200">
        <div id={language.id} className="skillCircle text-center"></div>
      </Col>
    </Waypoint>
  );
};

SkillCircle.propTypes = {
  language: PropTypes.object,
};

export default SkillCircle;
