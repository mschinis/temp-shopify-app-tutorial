/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import * as AdminTypes from './admin.types.d.ts';

export type SupplementQrCodeQueryVariables = AdminTypes.Exact<{
  id: AdminTypes.Scalars['ID']['input'];
}>;


export type SupplementQrCodeQuery = { product?: AdminTypes.Maybe<(
    Pick<AdminTypes.Product, 'title'>
    & { images: { nodes: Array<Pick<AdminTypes.Image, 'altText' | 'url'>> } }
  )> };

export type GetDeliveryCustomizationQueryVariables = AdminTypes.Exact<{
  id: AdminTypes.Scalars['ID']['input'];
}>;


export type GetDeliveryCustomizationQuery = { deliveryCustomization?: AdminTypes.Maybe<(
    Pick<AdminTypes.DeliveryCustomization, 'id' | 'title' | 'enabled'>
    & { metafield?: AdminTypes.Maybe<Pick<AdminTypes.Metafield, 'id' | 'value'>> }
  )> };

export type UpdateDeliveryCustomizationMutationVariables = AdminTypes.Exact<{
  id: AdminTypes.Scalars['ID']['input'];
  input: AdminTypes.DeliveryCustomizationInput;
}>;


export type UpdateDeliveryCustomizationMutation = { deliveryCustomizationUpdate?: AdminTypes.Maybe<{ deliveryCustomization?: AdminTypes.Maybe<Pick<AdminTypes.DeliveryCustomization, 'id'>>, userErrors: Array<Pick<AdminTypes.DeliveryCustomizationError, 'message'>> }> };

export type CreateDeliveryCustomizationMutationVariables = AdminTypes.Exact<{
  input: AdminTypes.DeliveryCustomizationInput;
}>;


export type CreateDeliveryCustomizationMutation = { deliveryCustomizationCreate?: AdminTypes.Maybe<{ deliveryCustomization?: AdminTypes.Maybe<Pick<AdminTypes.DeliveryCustomization, 'id'>>, userErrors: Array<Pick<AdminTypes.DeliveryCustomizationError, 'message'>> }> };

interface GeneratedQueryTypes {
  "\n      query supplementQRCode($id: ID!) {\n        product(id: $id) {\n            title\n            images(first: 1) {\n              nodes {\n                altText\n                url\n              }\n            }\n        }\n      }\n    ": {return: SupplementQRCodeQuery, variables: SupplementQRCodeQueryVariables},
  "#graphql\n        query getDeliveryCustomization($id: ID!) {\n          deliveryCustomization(id: $id) {\n            id\n            title\n            enabled\n            metafield(namespace: \"$app:delivery-customization\", key: \"function-configuration\") {\n              id\n              value\n            }\n          }\n        }": {return: GetDeliveryCustomizationQuery, variables: GetDeliveryCustomizationQueryVariables},
}

interface GeneratedMutationTypes {
  "#graphql\n        mutation updateDeliveryCustomization($id: ID!, $input: DeliveryCustomizationInput!) {\n          deliveryCustomizationUpdate(id: $id, deliveryCustomization: $input) {\n            deliveryCustomization {\n              id\n            }\n            userErrors {\n              message\n            }\n          }\n        }": {return: UpdateDeliveryCustomizationMutation, variables: UpdateDeliveryCustomizationMutationVariables},
  "#graphql\n        mutation createDeliveryCustomization($input: DeliveryCustomizationInput!) {\n          deliveryCustomizationCreate(deliveryCustomization: $input) {\n            deliveryCustomization {\n              id\n            }\n            userErrors {\n              message\n            }\n          }\n        }": {return: CreateDeliveryCustomizationMutation, variables: CreateDeliveryCustomizationMutationVariables},
}
declare module '@shopify/admin-api-client' {
  type InputMaybe<T> = AdminTypes.InputMaybe<T>;
  interface AdminQueries extends GeneratedQueryTypes {}
  interface AdminMutations extends GeneratedMutationTypes {}
}
