# Twitter Scraper

The Twitter API v2 supports this now using a [`conversation_id`](https://bit.ly/3VuqWIg) field. You can read more in the docs.

## HOW IT WORKS

First, request the conversation_id field of the tweet.

https://api.twitter.com/2/tweets?ids=1225917697675886593&tweet.fields=conversation_id
Second, then search tweets using the conversation_id as the query.

https://api.twitter.com/2/tweets/search/recent?query=conversation_id:1225912275971657728
This is a minimal example, so you should add other fields as you need to the URL.
