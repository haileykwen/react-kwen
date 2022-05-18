import CGap from './global/components/CGap';
import CGoogleLogin from './global/components/CGoogleLogin';
import CGrid from './global/components/CGrid';
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
            <CGap height='20px' />
            <CTextInput label="Text Input" type='text' />
            <CGap height='20px' />
            <CRichTextInput label='Rich Text Editor' />
            <CGap height='20px' />
            <CGrid />
        </div>
    );
}

export default App;