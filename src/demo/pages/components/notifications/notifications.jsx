import React from 'react';
import { error, info, warning } from 'util/notification';
import { DemoElement, DemoSectionsMenu } from '../../../components';
import notificationError from './examples/notification-error';
import notificationInfo from './examples/notification-info';
import notificationWarning from './examples/notification-warning';

const examples = [notificationInfo, notificationWarning, notificationError];

const runNotification = id => {
  if (id === 'info') {
    info('This is an info message');
  }
  if (id === 'warning') {
    warning('This is a warning message');
  }
  if (id === 'error') {
    error('This is an error message');
  }
};

const Modals = () => (
  <div className="row">
    <div className="col-lg-12">
      <h1 className="right-line mb-8">Notifications</h1>
      <div className="row justify-content-end">
        <div className="col-lg-9">
          {examples.map(example => (
            <DemoElement
              key={example.id}
              component="Modal"
              example={example}
              actions={[
                {
                  text: 'Show notification',
                  icon: 'play',
                  func: runNotification
                }
              ]}
            />
          ))}
        </div>
        <div className="col-lg-3 .d-none .d-md-block">
          <DemoSectionsMenu examples={examples} apiSections={['Options', 'Methods']} />
        </div>
      </div>
    </div>
  </div>
);

export default Modals;
