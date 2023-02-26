import { sendMessageToContentScript } from '../helpers/extensionMessaging';
import { getNFT } from './getNFT';

jest.mock('../helpers/extensionMessaging', () => ({
  sendMessageToContentScript: jest.fn()
}));

describe('getNFT', () => {
  it('returns an array of NFTs when successfully retrieving data', async () => {
    // Mock the response from sendMessageToContentScript
    const mockResponse = {
      nfts: [
        { id: 1, name: 'NFT 1' },
        { id: 2, name: 'NFT 2' }
      ]
    };
    (sendMessageToContentScript as jest.Mock).mockResolvedValue(mockResponse);
    const result = await getNFT();
    expect(result).toEqual(mockResponse.nfts);
  });

  it('returns null when the user refuses to share their NFTs', async () => {
    // Mock the response from sendMessageToContentScript
    const mockResponse = { nfts: null };
    (sendMessageToContentScript as jest.Mock).mockResolvedValue(mockResponse);

    const result = await getNFT();
    expect(result).toBeNull();
  });

  it('throws an error when there is an exception', async () => {
    // Mock the sendMessageToContentScript function to throw an error
    (sendMessageToContentScript as jest.Mock).mockRejectedValue(
      new Error('Unable to retrieve NFTs')
    );

    await expect(getNFT()).rejects.toThrow('Unable to retrieve NFTs');
  });
});