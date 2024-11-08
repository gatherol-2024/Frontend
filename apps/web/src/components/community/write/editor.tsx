import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/i18n/ko-kr';
import { MutableRefObject } from 'react';
interface ToastEditorProps {
  editorRef: MutableRefObject<any>;
  content: string;
  setContent: (v: string) => void;
}
const ToastEditor = ({ editorRef, content, setContent }: ToastEditorProps) => {
  const toolbarItems = [
    ['heading', 'bold', 'italic', 'strike'],
    ['hr', 'ul', 'ol', 'quote'],
    ['table', 'link', 'image']
  ];
  const changeHandler = () => {
    const editorContent = editorRef.current!.getInstance().getHTML();
    setContent(editorContent);
  };

  return (
    <div className="flex-1">
      <Editor
        height="100%"
        usageStatistics={false}
        ref={editorRef}
        placeholder="..."
        initialValue={content}
        toolbarItems={toolbarItems}
        initialEditType="wysiwyg"
        hideModeSwitch={true}
        language="ko-KR"
        onChange={changeHandler}
      />
    </div>
  );
};

export default ToastEditor;
