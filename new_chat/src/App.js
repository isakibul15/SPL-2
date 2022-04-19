import LoginForm from './component/LoginForm';
import Button from './component/Button';
import {ChatEngine, ChatFeed } from 'react-chat-engine';



import './App.css';

const projectID = "0fb53de2-f236-4e7b-995d-ab9abe262b10";

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};



export default App;
