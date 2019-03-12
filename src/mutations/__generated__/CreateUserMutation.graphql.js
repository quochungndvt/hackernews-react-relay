/**
 * @flow
 * @relayHash 911d3f1c39591ce2c65a3f18e0b7d807
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SignupUserInput = {|
  name: string,
  linksIds?: ?$ReadOnlyArray<string>,
  links?: ?$ReadOnlyArray<UserlinksLink>,
  votesIds?: ?$ReadOnlyArray<string>,
  votes?: ?$ReadOnlyArray<UservotesVote>,
  clientMutationId: string,
  authProvider: AuthProviderSignupData,
|};
export type UserlinksLink = {|
  description: string,
  url: string,
  votesIds?: ?$ReadOnlyArray<string>,
  votes?: ?$ReadOnlyArray<UserlinksLinkvotesVote>,
|};
export type UserlinksLinkvotesVote = {|
  userId?: ?string
|};
export type UservotesVote = {|
  linkId?: ?string,
  link?: ?UservotesVotelinkLink,
|};
export type UservotesVotelinkLink = {|
  description: string,
  url: string,
  postedById?: ?string,
  votesIds?: ?$ReadOnlyArray<string>,
  votes?: ?$ReadOnlyArray<UservotesVotelinkLinkvotesVote>,
|};
export type UservotesVotelinkLinkvotesVote = {|
  linkId?: ?string,
  userId?: ?string,
|};
export type AuthProviderSignupData = {|
  email?: ?AUTH_PROVIDER_EMAIL
|};
export type AUTH_PROVIDER_EMAIL = {|
  email: string,
  password: string,
|};
export type SigninUserInput = {|
  email?: ?AUTH_PROVIDER_EMAIL,
  clientMutationId: string,
|};
export type CreateUserMutationVariables = {|
  createUserInput: SignupUserInput,
  signinUserInput: SigninUserInput,
|};
export type CreateUserMutationResponse = {|
  +createUser: {|
    +user: ?{|
      +id: string
    |}
  |},
  +signinUser: {|
    +token: ?string,
    +user: ?{|
      +id: string
    |},
  |},
|};
export type CreateUserMutation = {|
  variables: CreateUserMutationVariables,
  response: CreateUserMutationResponse,
|};
*/


/*
mutation CreateUserMutation(
  $createUserInput: SignupUserInput!
  $signinUserInput: SigninUserInput!
) {
  createUser(input: $createUserInput) {
    user {
      id
    }
  }
  signinUser(input: $signinUserInput) {
    token
    user {
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "createUserInput",
    "type": "SignupUserInput!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "signinUserInput",
    "type": "SigninUserInput!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "user",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    }
  ]
},
v2 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createUser",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "createUserInput",
        "type": "SignupUserInput!"
      }
    ],
    "concreteType": "CreateUserPayload",
    "plural": false,
    "selections": [
      (v1/*: any*/)
    ]
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "signinUser",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "signinUserInput",
        "type": "SigninUserInput!"
      }
    ],
    "concreteType": "SigninPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "token",
        "args": null,
        "storageKey": null
      },
      (v1/*: any*/)
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CreateUserMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateUserMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "CreateUserMutation",
    "id": null,
    "text": "mutation CreateUserMutation(\n  $createUserInput: SignupUserInput!\n  $signinUserInput: SigninUserInput!\n) {\n  createUser(input: $createUserInput) {\n    user {\n      id\n    }\n  }\n  signinUser(input: $signinUserInput) {\n    token\n    user {\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e9902bf5a0ef770e82d370afc96eef75';
module.exports = node;
