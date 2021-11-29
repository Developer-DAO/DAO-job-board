import { NextApiRequest, NextApiResponse } from 'next';
import { utils } from 'ethers';
import { supabase } from '@/common/supabase';
import { v4 } from 'uuid';

import { definitions } from '../../types/supabase';

function isAddress(address: string) {
  try {
    utils.getAddress(address);
  } catch (e) {
    console.log(e);
    return false;
  }

  return true;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { walletAddress } = JSON.parse(req.body);

  if (!isAddress(walletAddress)) {
    res.status(400).json({ message: 'Please provide a valid address.' });
    return;
  }

  const nonce = v4();

  // This will be used within a session to verify whether the eth-signature is valid for this nonce.
  const user = await supabase
    .from<definitions['users']>('users')
    .select('*')
    .match({ id: walletAddress })
    .single();

  if (user.data) {
    const result = await supabase
      .from<definitions['users']>('users')
      .update({ nonce })
      .eq('id', walletAddress)
      .single();
    if (result.data) {
      res.status(200).json(result.data);
    } else if (result.error) {
      res.status(result.status).json({ message: result.error.message });
    }
    return;
  } else {
    const result = await supabase
      .from<definitions['users']>('users')
      .insert({
        id: walletAddress,
        nonce,
      })
      .single();

    if (result.data) {
      res.status(200).json({ ...result.data, isNew: true });
    } else if (result.error) {
      res.status(result.status).json({ message: result.error.message });
    }
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
};
