import { StorefrontAccessToken } from '@shopify/shopify-api/dist/rest-resources/2022-07/index.js';

const test_session = await Shopify.Utils.loadCurrentSession(request, response);

const storefront_access_token = new StorefrontAccessToken({
  session: test_session,
});
storefront_access_token.title = 'Test';
await storefront_access_token.save({
  update: true,
});
