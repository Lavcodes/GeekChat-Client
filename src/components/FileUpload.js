/*import React, {useCallback, useState, useEffect} from 'react';
import { Button, Icon} from 'semantic-ui-react';
import { useDropzone } from 'react-dropzone';
import { gql, useMutation } from '@apollo/client';

function FileUpload({channel_id}) {

  const createFileMessageMutation = gql`
  mutation($channel_id: Int!, $file: Upload) {
    createMessage(channel_id: $channel_id, file: $file)
  }
`;

const [createMessage]= useMutation(createFileMessageMutation);
   
   
const onDrop = useCallback( 
  (acceptedfiles) => {
    const file = acceptedfiles[0];
    console.log(file.type);
   createMessage({ variables: {
      channel_id,
      file } });
  },
  [createMessage]
);

  


  const {
    getRootProps,
    getInputProps,
    isDragActive
  } = useDropzone({
    onDrop
  });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) :
      <Button icon>
        <Icon name="plus" />
      </Button>}
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

export default graphql(createFileMessageMutation)(FileUpload);
*/