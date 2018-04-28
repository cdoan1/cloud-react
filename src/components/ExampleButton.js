import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import ContentClear from 'material-ui/svg-icons/content/clear';

const style = {
  marginRight: 20,
};

/**
 * Default size and `mini` FABs, in primary (default), `secondary` and `disabled` colors.
 */
const ExampleButton = ( props ) => (
  <div>
    <FloatingActionButton style={style} secondary={true} mini={true} onClick={props.handler} >
      <ContentRemove />
    </FloatingActionButton>
  </div>
);

export default ExampleButton;