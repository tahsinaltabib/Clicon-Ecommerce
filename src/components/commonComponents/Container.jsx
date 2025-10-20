import PropTypes from 'prop-types';

const Container = ({ children }) => {
  return (
    <div className='max-w-[1320px] m-auto'>
      {children}
    </div>
  )
};

Container.PropTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;