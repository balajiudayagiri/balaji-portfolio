import PropTypes from 'prop-types';

const TabPanel = ({ value, activeTab, children }) => {
  return (
    <div key={value} className={`content ${activeTab === value ? 'active' : ''}`}>
      {children}
    </div>
  );
};

TabPanel.propTypes = {
  value: PropTypes.string.isRequired,
  activeTab: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default TabPanel;
