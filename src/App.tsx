import CGoogleLogin from './global/components/CGoogleLogin';
import CRichTextInput from './global/components/CRichTextInput';
import CTextInput from './global/components/CTextInput';

function App() {
  const onSuccessGoogleLogin = (res: any) => {
    console.log("[Login Success] currentUser:", res.profileObj);
  };

  const onFailureGoogleLogin = (res: any) => {
    console.log("[Login Failure] currentUser:", res.profileObj);
  };

  return (
    <div>
      <CGoogleLogin onSuccess={onSuccessGoogleLogin} onFailure={onFailureGoogleLogin} />
      <CTextInput label="button" type='number' />
      <CRichTextInput label='Rich Text Editor' />
    </div>
  );
}

export default App;