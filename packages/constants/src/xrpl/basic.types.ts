import {
  NFTokenMintFlagsInterface,
  PaymentFlagsInterface,
  TrustSetFlagsInterface,
  NFTokenCreateOfferFlagsInterface,
  AccountSetFlagsInterface
} from 'xrpl';

export interface Memo {
  memo: {
    memoType?: string;
    memoData?: string;
    memoFormat?: string;
  };
}

export interface Signer {
  signer: {
    account: string;
    txnSignature: string;
    signingPubKey: string;
  };
}

export type TrustSetFlags = TrustSetFlagsInterface | number;

export type PaymentFlags = PaymentFlagsInterface | number;

export type MintNFTFlags = NFTokenMintFlagsInterface | number;

export type CreateNFTOfferFlags = NFTokenCreateOfferFlagsInterface | number;

export type SetAccountFlags = AccountSetFlagsInterface | number;
