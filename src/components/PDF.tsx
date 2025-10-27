import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import { Table, TR, TH, TD } from "@ag-media/react-pdf-table";
import { defaultUserInfo } from "./data/defaultUserInfo";
import { formatPhoneNumber } from "./Settings/utils";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  header: {
    display: "flex",
    fontSize: "11px",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    textAlign: "center",
    gap: "20px",
    margin: "30px 60px 10px",
  },
  text: {
    fontSize: "9px",
    margin: "1px 0px",
  },
  image: {
    height: "100px",
    width: "100px",
  },
  bold: {
    fontWeight: "bold",
  },

  invoiceAndClientInfos: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    margin: "0 40px",
  },
  invoiceInfo: {},
  clientInfo: {
    fontWeight: "bold",
    fontSize: "9px",
    border: "1px solid black",
    padding: "10px",
  },
  tableStyle: { width: "250px" },
  tableHeader: { backgroundColor: "#96c2b5" },
  tableRow: { fontSize: "7px", padding: "5px" },
  tableLeftRow: {
    fontSize: "7px",
    padding: "5px",
    backgroundColor: "#96c2b5",
    fontWeight: "bold",
  },
  tableRightRow: {
    fontSize: "7px",
    padding: "5px",
    backgroundColor: "#ffffff",
    fontWeight: "bold",
  },
  productTableRow: { fontSize: "9px", padding: "5px" },
  clientInfoHeader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "10px",
  },
  productInfo: { margin: "50px 30px" },
  priceSection: {
    display: "flex",
    flexDirection: "row",
    gap: "10px",
    margin: "0 30px",
  },
  leftSide: {},
  middleTable: {},
});

// Create Document Component
interface InvoiceFormProps {
  invoiceData: Record<string, string | number>;
}
const userInfoString = localStorage.getItem("userInfo");
const userInfo = userInfoString ? JSON.parse(userInfoString) : defaultUserInfo;

const savedPic = localStorage.getItem("profilePic");
export const InvoicePDF = ({ invoiceData }: InvoiceFormProps) => (
  <Document>
    <Page size="A4">
      <View style={styles.header}>
        <View style={styles.image}>
          <Image src={savedPic} />
        </View>
        <View>
          <Text style={styles.text}>
            <Text style={styles.bold}>Adresse:</Text> {userInfo.address}
          </Text>
          <Text style={styles.text}>
            <Text style={styles.bold}>Tél:</Text> +216{" "}
            {formatPhoneNumber(userInfo.phoneNumber)}
          </Text>
          <Text style={styles.text}>
            <Text style={styles.bold}>Email:</Text> {userInfo.email}
          </Text>
          <Text style={styles.text}>
            <Text style={styles.bold}>Code TVA:</Text> {userInfo.mf}
          </Text>
          <Text style={styles.text}>
            <Text style={styles.bold}>
              RIB {userInfo.bankName}: {userInfo.rib}
            </Text>
          </Text>
        </View>
      </View>
      <Text
        style={{
          fontSize: "18px",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Facture
      </Text>
      <View style={styles.invoiceAndClientInfos}>
        <View style={styles.invoiceInfo}>
          <Table style={styles.tableStyle}>
            <TH style={styles.tableHeader}>
              <TD style={styles.tableRow}>N°</TD>
              <TD style={styles.tableRow}>Date</TD>
              <TD style={styles.tableRow}>Client</TD>
            </TH>
            <TR style={{ fontWeight: "bold" }}>
              <TD style={styles.tableRow}>00{invoiceData.invoiceNumber}</TD>
              <TD style={styles.tableRow}>{invoiceData.date}</TD>
              <TD style={styles.tableRow}>{invoiceData.clientName}</TD>
            </TR>
          </Table>
        </View>
        <View style={styles.clientInfo}>
          <View style={styles.clientInfoHeader}>
            <Text style={{ textAlign: "center" }}>
              {invoiceData.clientName}
            </Text>
            <Text>{invoiceData.clientDescription}</Text>
          </View>
          <View>
            <Text>Matricule fiscal : {invoiceData.MF}</Text>
            <Text>Adresse : {invoiceData.address}</Text>
            <Text>Tél : (+216) {invoiceData.phoneNumber}</Text>
          </View>
        </View>
      </View>
      <View style={styles.productInfo}>
        <Table>
          <TH style={styles.tableHeader}>
            <TD style={{ flexGrow: "1.5", fontSize: "9px", padding: "5px" }}>
              Désignation
            </TD>
            <TD style={styles.productTableRow}>Unité</TD>
            <TD style={styles.productTableRow}>Qté</TD>
            <TD style={styles.productTableRow}>P.U.H.T</TD>
            <TD style={styles.productTableRow}>TVA</TD>
            <TD style={{ flexGrow: "0.5", fontSize: "9px", padding: "5px" }}>
              P.T.H.T
            </TD>
          </TH>
          <TR>
            <TD
              style={
                (styles.productTableRow,
                { flexGrow: "1.5", fontSize: "9px", padding: "5px" })
              }
            >
              Product Description #120
            </TD>
            <TD style={styles.productTableRow}>{invoiceData.unity}</TD>
            <TD style={styles.productTableRow}>{invoiceData.quantity}</TD>
            <TD style={styles.productTableRow}>{invoiceData.puht}</TD>
            <TD style={styles.productTableRow}>{invoiceData.tva}</TD>
            <TD
              style={{
                flexGrow: "0.5",
                fontSize: "9px",
                padding: "5px",
                fontWeight: "bold",
              }}
            >
              {invoiceData.ptht}
            </TD>
          </TR>
          <TR>
            <TD style={{ flexGrow: "1.5", padding: "5px" }}></TD>
            <TD style={{ padding: "90px 5px" }}></TD>
            <TD style={{ padding: "90px 5px" }}></TD>
            <TD style={{ padding: "90px 5px" }}></TD>
            <TD style={{ padding: "90px 5px" }}></TD>
            <TD style={{ flexGrow: "0.5", padding: "5px" }}></TD>
          </TR>
          <TR style={{ justifyContent: "space-around" }}>
            <TD style={{ flexGrow: "2", fontSize: "9px", padding: "5px" }}>
              Nombre Total des articles: 1
            </TD>
            <TD
              style={{
                flexGrow: "1",
                fontSize: "9px",
                padding: "5px",
                fontWeight: "bold",
              }}
            >
              Total: {invoiceData.ptht}
            </TD>
          </TR>
        </Table>
      </View>
      <View style={styles.priceSection}>
        <Table>
          <TH style={styles.tableHeader}>
            <TD style={styles.tableRow}>Base</TD>
            <TD style={styles.tableRow}>Taux TVA</TD>
            <TD style={styles.tableRow}>Montant TVA</TD>
          </TH>
          <TR>
            <TD style={{ fontSize: "7px", padding: "5px", fontWeight: "bold" }}>
              {invoiceData.base}
            </TD>
            <TD style={styles.tableRow}>{invoiceData.tva}</TD>
            <TD style={styles.tableRow}>{invoiceData.tvaAmount}</TD>
          </TR>
        </Table>
        <Table>
          <TR style={styles.tableHeader}>
            <TD style={styles.tableLeftRow}>Total TVA</TD>
            <TD style={styles.tableRightRow}>{invoiceData.tvaAmount}</TD>
          </TR>
          <TR>
            <TD style={styles.tableLeftRow}>Total HT</TD>
            <TD style={styles.tableRightRow}>{invoiceData.base}</TD>
          </TR>
          <TR>
            <TD style={styles.tableLeftRow}>Timbre</TD>
            <TD style={styles.tableRightRow}>{invoiceData.timbre}</TD>
          </TR>
          <TR>
            <TD style={styles.tableLeftRow}>FODEC</TD>
            <TD style={styles.tableRightRow}>{invoiceData.fodec}</TD>
          </TR>
        </Table>
        <Table style={{ gap: "10px" }}>
          {invoiceData.discount ? (
            <TR>
              <TD style={styles.tableLeftRow}>Remise Excep.</TD>
              <TD
                style={{
                  fontSize: "9px",
                  padding: "5px",
                  backgroundColor: "white",
                  color: "blue",
                  fontWeight: "bold",
                }}
              >
                {invoiceData.discount}
              </TD>
            </TR>
          ) : null}
          <TH style={styles.tableHeader}>
            <TD style={styles.tableRow}>Net à payer</TD>
            <TD
              style={{
                fontSize: "9px",
                padding: "5px",
                backgroundColor: "white",
                color: "blue",
              }}
            >
              {invoiceData.total}
            </TD>
          </TH>
          <Text style={styles.text}>
            Arrêtée la présente à la somme de:{" "}
            <Text style={{ fontWeight: "bold" }}>
              {invoiceData.totalAsText}
            </Text>
          </Text>
        </Table>
      </View>
    </Page>
  </Document>
);
