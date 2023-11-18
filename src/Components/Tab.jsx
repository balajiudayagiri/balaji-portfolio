import PropTypes from 'prop-types';

const Tab = ({ label, value, activeTab, changeTab }) => {
  return (
    <div
      className={`tab ${activeTab === value ? 'active' : ''}`}
      onClick={() => changeTab(value)}
    >
      {label}
    </div>
  );
};

Tab.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  activeTab: PropTypes.string.isRequired,
  changeTab: PropTypes.func.isRequired,
};

export default Tab;
