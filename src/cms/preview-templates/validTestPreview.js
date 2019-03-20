
import React from 'react';
import PropTypes from 'prop-types';

const StringPreview = ({ value }) => <div css={{margin: 15}}>{value}</div>;

StringPreview.propTypes = {
  value: PropTypes.node,
};

export default StringPreview;