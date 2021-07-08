import React from "react";
import PropTypes from "prop-types";

class Tab extends React.Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  };

  render() {
    const {
      onClick,
      props: { activeTab, label },
    } = this;

    let className =
      "tab-list-item inline-block py-3 px-8 border border-solid rounded-sm border-primary cursor-pointer";

    if (activeTab === label) {
      className +=
        " tab-list-active text-white bg-gradient-to-r from-green-400 to-primary";
    } else {
      className += " text-primary bg-transparent";
    }

    return (
      <li className={className} onClick={onClick}>
        {label}
      </li>
    );
  }
}

export default Tab;
