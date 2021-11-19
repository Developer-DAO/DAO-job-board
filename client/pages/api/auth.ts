import { NextApiRequest, NextApiResponse } from 'next';
import { utils } from 'ethers';
import { supabase } from '../../common/supabase';

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

  // This will be used within a session to verify whether the eth-signature is valid for this nonce.
  const user = await supabase
    .from('users')
    .select()
    .match({ wallet_address: walletAddress })
    .single();
  if (user.data) {
    res.status(200).json(user.data);
    return;
  } else {
    const result = await supabase.from('users').insert({
      wallet_address: walletAddress,
    });

    if (result.data) {
      res.status(200).json(result.data);
    } else {
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
