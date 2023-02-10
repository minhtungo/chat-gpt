import ChatInput from '@/components/ChatInput';
import Chat from '@/components/Chat';

type Props = {
  params: {
    id: string;
  };
};

const ChatPage = ({ params: { id } }: Props) => {
  return (
    <div className='flex flex-col h-screen overflow-hidden'>
      <Chat chatId={id} />
      <ChatInput chatId={id} />
    </div>
  );
};
export default ChatPage;
