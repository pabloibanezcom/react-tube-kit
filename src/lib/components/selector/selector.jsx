import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import useOutsideClick from '../../util/useOutsideClick';
import useWindowSize from '../../util/useWindowSize';
import Button from '../button/button';
import Icon from '../icon/icon';
import Input from '../input/input';

const Selector = ({
  className,
  minLengthSearch,
  nameProp,
  native,
  placeholder,
  options,
  search,
  valueProp,
  onChange
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [searchStr, setSearchStr] = useState('');
  const windowSize = useWindowSize();
  const menuRef = useRef();

  useOutsideClick(menuRef, () => {
    if (isOpen) {
      setIsOpen(false);
    }
  });

  const handleOptionSelected = option => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option);
  };

  const handleSearchChange = str => {
    setSearchStr(str);
  };

  const handleKeyPress = evt => {
    console.log(evt);
  };

  const filterOption = opt => {
    if (
      searchStr &&
      searchStr.length > minLengthSearch - 1 &&
      !opt[nameProp].includes(searchStr) &&
      !opt[valueProp].includes(searchStr)
    ) {
      return false;
    }
    return true;
  };

  const customSelect = (
    <>
      <Button
        className="d-flex align-items-center"
        color="transparent"
        uppercase={false}
        size="lg"
        onClick={() => setIsOpen(true)}
      >
        {!selectedOption ? placeholder : selectedOption[nameProp]}
        <Icon className="selector-icon" name="angle-down" size="sm" />
      </Button>
      <input type="hidden" value={(selectedOption && selectedOption[valueProp]) || ''} />
      <div
        className={`selector-menu ${isOpen ? 'show' : null}`}
        ref={menuRef}
        onKeyPress={handleKeyPress}
        tabIndex="0"
      >
        {search ? (
          <div className="selector-searchbox">
            <Input onChange={handleSearchChange} />
          </div>
        ) : null}
        <div role="listbox" aria-expanded={isOpen} tabIndex="-1">
          <ul>
            {options
              .filter(opt => filterOption(opt))
              .map(opt => (
                <li key={opt[valueProp]}>
                  <a
                    role="option"
                    aria-disabled="false"
                    aria-selected="false"
                    onClick={() => handleOptionSelected(opt)}
                  >
                    {opt[nameProp]}
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );

  const nativeSelect = (
    <div className="select-wrapper d-flex align-items-center">
      <select>
        <option>{placeholder}</option>
        {options.map(opt => (
          <option key={opt[valueProp]} value={opt[valueProp]}>
            {opt[nameProp]}
          </option>
        ))}
      </select>
      <Icon className="selector-icon" name="angle-down" size="sm" />
    </div>
  );

  return (
    <div className={`selector d-flex flex-column w-100 ${className}`}>
      {!native || (native === 'mobileOnly' && !(windowSize === 'xs' || windowSize === 'sm')) ? (
        <>{customSelect}</>
      ) : (
        <>{nativeSelect}</>
      )}
    </div>
  );
};

Selector.defaultProps = {
  className: '',
  minLengthSearch: 2,
  nameProp: 'name',
  native: 'mobileOnly',
  placeholder: 'Please select an option',
  search: false,
  valueProp: 'value',
  onChange: () => {}
};

Selector.propTypes = {
  className: PropTypes.string,
  minLengthSearch: PropTypes.number,
  nameProp: PropTypes.string,
  native: PropTypes.oneOf([true, false, 'mobileOnly']),
  placeholder: PropTypes.string,
  options: PropTypes.array.isRequired,
  search: PropTypes.bool,
  valueProp: PropTypes.string,
  onChange: PropTypes.func
};

export default Selector;
