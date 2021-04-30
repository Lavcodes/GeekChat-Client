import React, { useCallback } from 'react';
import { Button, Icon} from 'semantic-ui-react';
import { useDropzone } from 'react-dropzone';

function FileUpload() {
  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles);
  }, []);

  const {
    getRootProps,
    getInputProps
  } = useDropzone({
    onDrop
  });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <Button icon>
        <Icon name="plus" />
      </Button>
    </div>
  )
}

export default FileUpload;


























//import { graphql } from 'react-apollo';
//import gql from 'graphql-tag';
/*
const FileUpload = ({
  children, disableClick, channelId, mutate, style = {},
}) => (
  <Dropzone
    style={style}
    className="ignore"
    onDrop={async ([file]) => {
      const response = await mutate({
        variables: {
          channelId,
          file,
        },
      });
      console.log(response);
    }}
    disableClick={disableClick}
  >
    {children}
  </Dropzone>
);

const createFileMessageMutation = gql`
  mutation($channelId: Int!, $file: File) {
    createMessage(channelId: $channelId, file: $file)
  }
`;

export default graphql(createFileMessageMutation)(FileUpload);*/
