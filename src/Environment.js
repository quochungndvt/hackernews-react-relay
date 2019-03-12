// 1
import { execute } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import { SubscriptionClient } from 'subscriptions-transport-ws'
import { GC_AUTH_TOKEN } from './constants'
const {
  Environment,
  Network,
  RecordSource,
  Store,
} = require('relay-runtime')

// 2
const store = new Store(new RecordSource())

//1
export const fetchQuery = (operation, variables) => {
  return fetch('https://api.graph.cool/relay/v1/cj5rmfz2wa7ls012262ef6an8', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem(GC_AUTH_TOKEN)}`
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json()
  })
}

// 2
/*const setupSubscription = (config, variables, cacheConfig, observer) => {
  const query = config.text

  const subscriptionClient = new SubscriptionClient('wss://subscriptions.ap-northeast-1.graph.cool/v1/cj5rmfz2wa7ls012262ef6an8', {reconnect: true})
  subscriptionClient.subscribe({query, variables}, (error, result) => {
    observer.onNext({data: result})
  })
}*/
const subscriptionClient = new SubscriptionClient('wss://subscriptions.ap-northeast-1.graph.cool/v1/cj5rmfz2wa7ls012262ef6an8', {reconnect: true})
const subscriptionLink = new WebSocketLink(subscriptionClient);

// Prepar network layer from apollo-link for graphql subscriptions
const networkSubscriptions = (operation, variables) =>
  execute(subscriptionLink, {
    query: operation.text,
    variables,
  });
// 3
const network = Network.create(fetchQuery, networkSubscriptions)
// 5
const environment = new Environment({
  network,
  store,
})

// 6
export default environment