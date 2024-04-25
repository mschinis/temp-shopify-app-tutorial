import {authenticate} from "~/shopify.server";
import {getQRCodes} from "~/models/QRCode.server";
import {json} from "@remix-run/node";
import {EmptyState} from "@shopify/polaris";

export async function loader({ request }) {
  const { admin, session } = await authenticate.admin(request)
  const qrCodes = await getQRCodes(session.shop, admin.graphql)

  return json({
    qrCodes
  })
}

export default ({ onAction }) => (
  <EmptyState
    heading="Create unique QR codes for your product"
    action={{
      content: "Create QR code",
      onAction,
    }}
    image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
  >
    <p>Allow customers to scan codes and buy products using their phones.</p>
  </EmptyState>
);
