/* eslint-disable no-unneeded-ternary */
import PropTypes from 'prop-types';
import React, { Fragment, useRef, useState } from 'react';
import getFileIconName from '../../util/getFileIconName';
import Button from '../button/button';
import Icon from '../icon/icon';
import Input from '../input/input';

const FileUpload = ({ className, filesLimit, showPreview, onChange }) => {
  const inputFileEl = useRef(null);

  const [files, setFiles] = useState([]);
  const [error, setError] = useState(null);

  const getFilesArray = _files => {
    const result = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0, numFiles = _files.length; i < numFiles; i++) {
      result.push(_files[i]);
    }
    return result;
  };

  const handleFileInputOpen = () => {
    inputFileEl.current.click();
  };

  const handleFileSelected = () => {
    const newFiles =
      files.length < filesLimit
        ? [...files, ...getFilesArray(inputFileEl.current.files)]
        : getFilesArray(inputFileEl.current.files);
    if (newFiles.length > filesLimit) {
      setError('Too many files');
    } else {
      setFiles(newFiles);
      setError(null);
      onChange(newFiles);
    }
  };

  const handleRemoveFile = fileName => {
    setFiles(files.filter(file => file.name !== fileName));
  };

  const handleClearExistingValue = evt => {
    evt.target.value = '';
  };

  const renderFileName = file => {
    return (
      <div className="d-flex align-items-center justify-content-between mt-2 ml-1 mr-1">
        <div className="text-secondary font-weight-normal font-size-13">
          <Icon className="mr-1" size="sm" name={getFileIconName(file)} />
          {file.name}
        </div>
        <Button type="link" color="secondary" onClick={() => handleRemoveFile(file.name)}>
          <Icon name="close" size="sm" />
        </Button>
      </div>
    );
  };

  const renderFilePreview = file => {
    return (
      <div className="position-relative">
        <img
          className="w-100 mt-4 border rounded"
          src={URL.createObjectURL(file)}
          alt={file.name}
        />
        <Button
          className="position-absolute"
          type="link"
          color="secondary"
          onClick={() => handleRemoveFile(file.name)}
        >
          <Icon name="close" size="sm" />
        </Button>
      </div>
    );
  };

  const renderFile = file => {
    return !showPreview ? renderFileName(file) : renderFilePreview(file);
  };

  const renderFiles = () => {
    return files.map(file => <Fragment key={file.name}>{renderFile(file)}</Fragment>);
  };

  return (
    <div className={className}>
      <Input
        onClick={handleFileInputOpen}
        disabled={files.length >= filesLimit}
        bgColor={error ? 'danger' : 'primary'}
        placeholder={
          !(!files.length < filesLimit && files[0]) ? 'Click here to upload an image' : ''
        }
      />
      {error ? <div className="font-size-13 font-weight-normal text-danger">{error}</div> : null}
      <Input
        className="d-none"
        type="file"
        resetValue
        ref={inputFileEl}
        multiple={filesLimit > 1}
        onClick={handleClearExistingValue}
        onChange={handleFileSelected}
      />
      {files[0] ? renderFiles() : null}
    </div>
  );
};

FileUpload.defaultProps = {
  className: '',
  filesLimit: 1,
  showPreview: false,
  onChange: () => {}
};

FileUpload.propTypes = {
  className: PropTypes.string,
  filesLimit: PropTypes.number,
  showPreview: PropTypes.bool,
  onChange: PropTypes.func
};

export default FileUpload;
