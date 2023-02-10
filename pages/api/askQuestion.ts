import query from '@/lib/queryApi';
import type { NextApiRequest, NextApiResponse } from 'next';

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
  };

  res.status(200).json({ answer: 'Hello World' });
}
