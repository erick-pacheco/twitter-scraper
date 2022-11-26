/**
 * HOW IT WORKS:
 *  First, request the conversation_id field of the tweet.
 *  https://api.twitter.com/2/tweets?ids=1225917697675886593&tweet.fields=conversation_id
 *
 *
 *  Second, then search tweets using the conversation_id as the query.
 *  https://api.twitter.com/2/tweets/search/recent?query=conversation_id:1225912275971657728
 *
 * This is a minimal example, so you should add other fields as you need to the URL.
 */
import axios from './axios';

export async function scrapeMyTweet(tweetID: string) {
  /**
   * HOW IT WORKS:
   * First, request the conversation_id field of the tweet
   */
  const url = `https://api.twitter.com/2/tweets?ids=${tweetID}&tweet.fields=conversation_id`;
  const tweet = await (await (await axios.get(url)).data).data[0];

  /**
   * Second, then search tweets using the conversation_id as the query.
   */
  const urlConversation = `https://api.twitter.com/2/tweets/search/recent?query=conversation_id:${tweetID}`;
  const comments = await (await (await axios.get(urlConversation)).data).data;

  tweet.comments = comments;

  return tweet;
}
