import React from 'react';
import PropTypes from 'prop-types';

export default class validTestControl extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    forID: PropTypes.string,
    value: PropTypes.node,
    classNameWrapper: PropTypes.string.isRequired,
    setActiveStyle: PropTypes.func.isRequired,
    setInactiveStyle: PropTypes.func.isRequired,
  };

  static defaultProps = {
    value: '',
  };

  isValid = () => {
      const checkFile = this.props.value;
      const checkId = this.props.forID;
      console.log("Checking value prop:", checkFile);
      console.log("Checking id prop:", checkId);
      if (checkFile == "ruarai.sketch") {
          console.log("Validation Failed");
          return { error: { message: `Hey! This ain't no sketch file fool!` } };;
      }
    console.log("Validation Passed");
    return true;
  };

  render() {
    const {
      forID,
      value,
      onChange,
      classNameWrapper,
      setActiveStyle,
      setInactiveStyle,
    } = this.props;

    return (
      <input
        type="text"
        id={forID}
        className={classNameWrapper}
        value={value || ''}
        onChange={e => onChange(e.target.value)}
        onFocus={setActiveStyle}
        onBlur={setInactiveStyle}
      />
    );
  }
}