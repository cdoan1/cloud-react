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
const ExampleButton = () => (
  <div>
    <FloatingActionButton style={style}>
      <ContentAdd />
    </FloatingActionButton>
    <FloatingActionButton style={style} secondary={true} mini={true}>
      <ContentRemove />
    </FloatingActionButton>
    <FloatingActionButton style={style}>
      <ContentClear />
    </FloatingActionButton>

    {/* <FloatingActionButton mini={true} style={style}>
      <ContentAdd />
    </FloatingActionButton>

    <FloatingActionButton secondary={true} style={style}>
      <ContentAdd />
    </FloatingActionButton> */}

    {/* <FloatingActionButton mini={true} secondary={true} style={style}>
      <ContentAdd />
    </FloatingActionButton>
    <FloatingActionButton disabled={true} style={style}>
      <ContentAdd />
    </FloatingActionButton>
    <FloatingActionButton mini={true} disabled={true} style={style}>
      <ContentAdd />
    </FloatingActionButton> */}
  </div>
);

export default ExampleButton;