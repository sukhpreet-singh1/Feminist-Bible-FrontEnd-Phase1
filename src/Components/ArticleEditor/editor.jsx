import React, { useState, useEffect, useRef } from 'react';

const MyEditor = () => {
  const editorRef = useRef({
    CKEditor: '',
    ClassicEditor: '',
    Markdown: ''
  });
  const [editorLoaded, setEditorLoaded] = useState(false);
  const { CKEditor } = editorRef.current.CKEditor;
  const ClassicEditor = editorRef.current.ClassicEditor;

  useEffect(() => {
    editorRef.current = {
      CKEditor: require('@ckeditor/ckeditor5-react'),
      ClassicEditor: require('@ckeditor/ckeditor5-build-classic')
    };
    setEditorLoaded(true);
  }, []);

  return editorLoaded ? (
    <div style={{ margin: '5rem 10rem', minHeight: '200px' }}>
      <CKEditor
        editor={ClassicEditor}
        data="<p>Hello from CKEditor 5!</p>"
        config={{
          toolbar: [
            'heading',
            '|',
            'bold',
            'italic',
            'link',
            'bulletedList',
            'numberedList',
            '|',
            'blockQuote',
            'insertTable',
            '|',
            'imageUpload',
            'undo',
            'redo'
          ],
          ckfinder: {
            uploadUrl: '/'
          }
        }}
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log('Editor is ready to use!');
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
        }}
      />
    </div>
  ) : (
    <div>Editor loading...</div>
  );
};

export default MyEditor;
