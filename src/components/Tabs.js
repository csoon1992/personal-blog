import React, {
  useState,
  createContext,
  useContext,
  cloneElement,
} from "react";
import PropTypes from "prop-types";

const TabsContext = createContext({ active: null, setActive: () => {} });

function Tabs({ children }) {
  const [currentActive, setActive] = useState(0);
  const { buttons, panels } = children.reduce(
    (result, childNode) => {
      if (childNode.type === Button) {
        const count = result.buttons.length ?? 0;
        return {
          ...result,
          buttons: [
            ...result.buttons,
            cloneElement(childNode, { index: count, key: count }),
          ],
        };
      }

      const count = result.panels.length ?? 0;

      return {
        ...result,
        panels: [
          ...result.panels,
          cloneElement(childNode, { index: count, key: count }),
        ],
      };
    },
    { buttons: [], panels: [] }
  );

  return (
    <TabsContext.Provider value={{ active: currentActive, setActive }}>
      <div className="tabs">
        <ol className="tab-list space-x-6 text-center my-6 flex flex-row justify-center items-stretch">
          {buttons}
        </ol>
        {panels}
      </div>
    </TabsContext.Provider>
  );
}

Tabs.propTypes = {
  children: PropTypes.arrayOf(PropTypes.oneOfType([Button, Panel])).isRequired,
};

function Button({ children, index }) {
  const { active, setActive } = useContext(TabsContext);
  const isActive = active === index;

  let className =
    "tab-list-item inline-block py-3 px-3 md:px-8 border border-solid rounded-sm border-primary cursor-pointer";

  if (isActive) {
    className +=
      " tab-list-active text-white bg-gradient-to-r from-green-400 to-primary";
  } else {
    className += " text-primary bg-transparent";
  }

  return (
    <li>
      <button className={className} onClick={() => setActive(index)}>
        {children}
      </button>
    </li>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  index: PropTypes.number,
};

function Panel({ children, index }) {
  const { active } = useContext(TabsContext);
  const isActive = active === index;

  if (!isActive) {
    return null;
  }

  return (
    <div className="tab-content p-6 md:p-12 bg-dark lg:max-w-4xl mx-auto">
      {children}
    </div>
  );
}

Panel.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  index: PropTypes.number,
};

export default { Tabs, Button, Panel };
