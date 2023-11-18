import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Tabs.css';

const Tabs = ({ children, defaultTab, onChange }) => {
  const [activeTab, setActiveTab] = useState(defaultTab || children[0].props.value);

  const changeTab = (tabId) => {
    setActiveTab(tabId);
    if (onChange) {
      onChange(tabId);
    }
  };

  return (
    <div className="tabs-container">
      <div className="tabs">
        {React.Children.map(children, (tab) => (
          React.cloneElement(tab, {
            activeTab: activeTab,
            changeTab: changeTab,
          })
        ))}
      </div>
      <div className="tab-content">
        {React.Children.map(children, (tab) =>
          tab.props.value === activeTab ? (
            <div key={tab.props.value} className="content">
              {tab.props.children}
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
  defaultTab: PropTypes.string,
  onChange: PropTypes.func,
};

export default Tabs;
