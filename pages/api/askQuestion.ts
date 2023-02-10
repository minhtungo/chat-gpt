import admin from 'firebase-admin';
import query from '@/lib/queryApi';
import type { NextApiRequest, NextApiResponse } from 'next';
import adminDb from '@/firebaseAdmin';

type Data = { answer: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { prompt, chatId, model, session } = req.body;

  if (!prompt || !chatId || !model || !session) {
    res.status(400).json({ answer: 'Missing parameters' });
    return;
  }

  const response = await query(prompt, chatId, model);

  const message: Message = {
    text: response || 'Unable to get completion',
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      _id: 'ChatGPT',
      name: 'ChatGPT',
      avatar: 'https://pbs.twimg.com/media/EMwMcjrUYAAIqnb.jpg',
    },
  };

  await adminDb
    .collection('users')
    .doc(session.user?.email)
    .collection('chats')
    .doc(chatId)
    .collection('messages')
    .add(message);

  res.status(200).json({ answer: message.text });
}
