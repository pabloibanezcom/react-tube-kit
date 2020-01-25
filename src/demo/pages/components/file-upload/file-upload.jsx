import React from 'react';
import { DemoElement, DemoPropsTable, DemoSectionsMenu } from '../../../components';
import fileUploadAcceptType from './examples/file-upload-accept-type';
import fileUploadBasic from './examples/file-upload-basic';
import fileUploadImageCropper from './examples/file-upload-image-cropper';
import fileUploadMultiple from './examples/file-upload-multiple';
import fileUploadPreview from './examples/file-upload-preview';
import fileUploadPreviewMulti from './examples/file-upload-preview-multi';
import properties from './file-upload.properties.json';

const examples = [
  fileUploadBasic,
  fileUploadAcceptType,
  fileUploadMultiple,
  fileUploadPreview,
  fileUploadPreviewMulti,
  fileUploadImageCropper
];

const FileUpload = () => (
  <div className="row">
    <div className="col-lg-12">
      <h1 className="right-line mb-8">File Upload</h1>
      <div className="row justify-content-end">
        <div className="col-lg-9">
          {examples.map(example => (
            <DemoElement
              key={example.id}
              component="FileUpload"
              example={example}
              options={{ width: '300' }}
            />
          ))}
          <DemoPropsTable properties={properties} />
        </div>
        <div className="col-lg-3 .d-none .d-md-block">
          <DemoSectionsMenu examples={examples} apiSections={['Options']} />
        </div>
      </div>
    </div>
  </div>
);

export default FileUpload;
