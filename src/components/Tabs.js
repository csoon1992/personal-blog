import React from "react";
import PropTypes from "prop-types";
import Tab from "./Tab";

class Tabs extends React.Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label,
    };
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  };

  render() {
    const {
      onClickTabItem,
      props: { children },
      state: { activeTab },
    } = this;

    return (
      <div className="tabs">
        <ol className="tab-list space-x-6 text-center my-6">
          {children.map((child) => {
            const { label } = child.props;

            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            );
          })}
        </ol>
        <div className="tab-content p-12 bg-dark-low lg:max-w-4xl mx-auto">
          {children.map((child) => {
            if (child.props.label !== activeTab) {
              return undefined;
            }
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}

export default Tabs;
