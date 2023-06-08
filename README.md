# react-tutorail-es6-webpack
DECLARE
  json_data CLOB := '{
  "OrderTransactions": {
    "Order": {
      "TransactionDateTime": "2021-12-02T21:08:01.7673608",
      "OrgCode": "ADP_ES",
      "SourceTransactionID": 2021120201,
      "SourceUser": "PPULA01",
      "SourceReferenceNumber": 2021120201,
      "OracleOrderType": "New Product Entity",
      "QuoteName": "5NewPEsTestQuote_202112021",
      "CustomerAccountNumber": 90646,
      "PrimarySalesPersonAssociateID": 883038,
      "BookPriceName": "400 MAJORS PRICELIST 072808",
      "AutoSubmitFlag": "Y",
      "AddressContact": [
        {
          "AddressUse": "BILL_TO",
          "AddressLine1": "1 ADP BLVD",
          "AddressLine2": "",
          "City": "ROSELAND",
          "State": "NJ",
          "County": "",
          "Zip": 7068,
          "Country": "US",
          "ContactLastName": "AVLN1",
          "ContactFirstName": "AVFN1",
          "ContactPhone": 9089089089,
          "ContactEmail": "silpa.putti@adp.com"
        },
        {
          "AddressUse": "BILL_TO",
          "AddressLine1": "1 ADP BLVD",
          "AddressLine2": "",
          "City": "ROSELAND",
          "State": "NJ",
          "County": "",
          "Zip": 7068,
          "Country": "US",
          "ContactLastName": "AVLN1",
          "ContactFirstName": "AVFN1",
          "ContactPhone": 9089089089,
          "ContactEmail": "silpa.putti@adp.com"
        }
      ],
      "OrderComment": "Order related t",
      "Entity": [
        {
          "RevenueRegion": 218,
          "ProductCode": 10,
          "CompanyCode": 120201,
          "OrderEntityType": "NEW",
          "InputMethod": "TELEDATA",
          "RevenueSortCode": "PX",
          "PriceType": "BL",
          "PEName": "Nice Product Entity",
          "ParentCompanyCode": "KY1",
          "PaymentMethod": "DIRECT_DEBIT",
          "BankAccountId": 1036295,
          "PaymentTerms": "NET 7 DAYS",
          "GroupInvoicingFlag": "Y",
          "InvoiceFrequency": "WKLY",
          "InvoiceDeliveryMethod": "EMAIL",
          "InvoiceDeliveryEmailAddress": "1234567890@gmail.com",
          "Feature": [
            {
              "ItemNumber": "10-F00033",
              "LineActionType": "ADD",
              "Volume": 2,
              "ProcessingFrequency": "EVERY",
              "ProcessingCycles": 12,
              "PriceStructureType": "S",
              "ListRate": 0,
              "MinPrice": 0,
              "BasePrice": 3500,
              "DiscountPercent": 0,
              "EstimatedStartDate": "2015-08-28",
              "ImplExcepCode": "ESTRTORD",
              "RollcallableFlag": "N",
              "SBNRFlag": "N",
              "DM": {
                "AssociateID": 883038,
                "PrimaryFlag": "Y"
              }
            }
          ]
        },
        {
          "RevenueRegion": 218,
          "ProductCode": 100,
          "CompanyCode": 120201,
          "OrderEntityType": "NEW",
          "InputMethod": "TELEDATA",
          "RevenueSortCode": "PX",
          "PriceType": "BL",
          "PEName": "Nice Product Entity",
          "ParentCompanyCode": "KY1",
          "PaymentMethod": "DIRECT_DEBIT",
          "BankAccountId": 1036295,
          "PaymentTerms": "NET 7 DAYS",
          "GroupInvoicingFlag": "Y",
          "InvoiceFrequency": "WKLY",
          "InvoiceDeliveryMethod": "EMAIL",
          "InvoiceDeliveryEmailAddress": "1234567890@gmail.com",
          "Feature": [
            {
              "ItemNumber": "10-F00033",
              "LineActionType": "SUB",
              "Volume": 2,
              "ProcessingFrequency": "EVERY",
              "ProcessingCycles": 12,
              "PriceStructureType": "S",
              "ListRate": 0,
              "MinPrice": 0,
              "BasePrice": 3500,
              "DiscountPercent": 0,
              "EstimatedStartDate": "2015-08-28",
              "ImplExcepCode": "ESTRTORD",
              "RollcallableFlag": "N",
              "SBNRFlag": "N",
              "DM": {
                "AssociateID": 883038,
                "PrimaryFlag": "Y"
              }
            }
          ]
        }
      ]
    }
  }
}';

  xml_data CLOB;
BEGIN
  -- Convert JSON to XML using XMLAGG and XMLCAST
  SELECT XMLCAST(
           XMLAGG(
             XMLELEMENT("OrderTransactions",
               XMLELEMENT("Order",
                 XMLELEMENT("TransactionDateTime", o.TransactionDateTime),
                 XMLELEMENT("OrgCode", o.OrgCode),
                 XMLELEMENT("SourceTransactionID", o.SourceTransactionID),
                 XMLELEMENT("SourceUser", o.SourceUser),
                 XMLELEMENT("SourceReferenceNumber", o.SourceReferenceNumber),
                 XMLELEMENT("OracleOrderType", o.OracleOrderType),
                 XMLELEMENT("QuoteName", o.QuoteName),
                 XMLELEMENT("CustomerAccountNumber", o.CustomerAccountNumber),
                 XMLELEMENT("PrimarySalesPersonAssociateID", o.PrimarySalesPersonAssociateID),
                 XMLELEMENT("BookPriceName", o.BookPriceName),
                 XMLELEMENT("AutoSubmitFlag", o.AutoSubmitFlag),
                 XMLELEMENT("AddressContact",
                   XMLAGG(
                     XMLELEMENT("Address",
                       XMLELEMENT("AddressUse", ac.AddressUse),
                       XMLELEMENT("AddressLine1", ac.AddressLine1),
                       XMLELEMENT("AddressLine2", ac.AddressLine2),
                       XMLELEMENT("City", ac.City),
                       XMLELEMENT("State", ac.State),
                       XMLELEMENT("County", ac.County),
                       XMLELEMENT("Zip", ac.Zip),
                       XMLELEMENT("Country", ac.Country),
                       XMLELEMENT("ContactLastName", ac.ContactLastName),
                       XMLELEMENT("ContactFirstName", ac.ContactFirstName),
                       XMLELEMENT("ContactPhone", ac.ContactPhone),
                       XMLELEMENT("ContactEmail", ac.ContactEmail)
                     )
                   )
                 ),
                 XMLELEMENT("OrderComment", o.OrderComment),
                 XMLELEMENT("Entity",
                   XMLAGG(
                     XMLELEMENT("EntityData",
                       XMLELEMENT("RevenueRegion", e.RevenueRegion),
                       XMLELEMENT("ProductCode", e.ProductCode),
                       XMLELEMENT("CompanyCode", e.CompanyCode),
                       XMLELEMENT("OrderEntityType", e.OrderEntityType),
                       XMLELEMENT("InputMethod", e.InputMethod),
                       XMLELEMENT("RevenueSortCode", e.RevenueSortCode),
                       XMLELEMENT("PriceType", e.PriceType),
                       XMLELEMENT("PEName", e.PEName),
                       XMLELEMENT("ParentCompanyCode", e.ParentCompanyCode),
                       XMLELEMENT("PaymentMethod", e.PaymentMethod),
                       XMLELEMENT("BankAccountId", e.BankAccountId),
                       XMLELEMENT("PaymentTerms", e.PaymentTerms),
                       XMLELEMENT("GroupInvoicingFlag", e.GroupInvoicingFlag),
                       XMLELEMENT("InvoiceFrequency", e.InvoiceFrequency),
                       XMLELEMENT("InvoiceDeliveryMethod", e.InvoiceDeliveryMethod),
                       XMLELEMENT("InvoiceDeliveryEmailAddress", e.InvoiceDeliveryEmailAddress),
                       XMLELEMENT("Feature",
                         XMLAGG(
                           XMLELEMENT("FeatureData",
                             XMLELEMENT("ItemNumber", f.ItemNumber),
                             XMLELEMENT("LineActionType", f.LineActionType),
                             XMLELEMENT("Volume", f.Volume),
                             XMLELEMENT("ProcessingFrequency", f.ProcessingFrequency),
                             XMLELEMENT("ProcessingCycles", f.ProcessingCycles),
                             XMLELEMENT("PriceStructureType", f.PriceStructureType),
                             XMLELEMENT("ListRate", f.ListRate),
                             XMLELEMENT("MinPrice", f.MinPrice),
                             XMLELEMENT("BasePrice", f.BasePrice),
                             XMLELEMENT("DiscountPercent", f.DiscountPercent),
                             XMLELEMENT("EstimatedStartDate", f.EstimatedStartDate),
                             XMLELEMENT("ImplExcepCode", f.ImplExcepCode),
                             XMLELEMENT("RollcallableFlag", f.RollcallableFlag),
                             XMLELEMENT("SBNRFlag", f.SBNRFlag),
                             XMLELEMENT("DM",
                               XMLELEMENT("AssociateID", f.DM.AssociateID),
                               XMLELEMENT("PrimaryFlag", f.DM.PrimaryFlag)
                             )
                           )
                         )
                       )
                     )
                   )
                 )
               )
             )
           ) AS CLOB) INTO xml_data
  FROM JSON_TABLE(json_data, '$'
    COLUMNS (
      TransactionDateTime VARCHAR2(50) PATH '$.OrderTransactions.Order.TransactionDateTime',
      OrgCode VARCHAR2(50) PATH '$.OrderTransactions.Order.OrgCode',
      SourceTransactionID NUMBER PATH '$.OrderTransactions.Order.SourceTransactionID',
      SourceUser VARCHAR2(50) PATH '$.OrderTransactions.Order.SourceUser',
      SourceReferenceNumber NUMBER PATH '$.OrderTransactions.Order.SourceReferenceNumber',
      OracleOrderType VARCHAR2(50) PATH '$.OrderTransactions.Order.OracleOrderType',
      QuoteName VARCHAR2(50) PATH '$.OrderTransactions.Order.QuoteName',
      CustomerAccountNumber NUMBER PATH '$.OrderTransactions.Order.CustomerAccountNumber',
      PrimarySalesPersonAssociateID NUMBER PATH '$.OrderTransactions.Order.PrimarySalesPersonAssociateID',
      BookPriceName VARCHAR2(50) PATH '$.OrderTransactions.Order.BookPriceName',
      AutoSubmitFlag VARCHAR2(1) PATH '$.OrderTransactions.Order.AutoSubmitFlag',
      AddressContact JSON PATH '$.OrderTransactions.Order.AddressContact[*]',
      OrderComment VARCHAR2(50) PATH '$.OrderTransactions.Order.OrderComment',
      Entity JSON PATH '$.OrderTransactions.Order.Entity[*]'
    ),
    JSON_TABLE(
      AddressContact[*], '$'
      COLUMNS (
        AddressUse VARCHAR2(50) PATH '$.AddressUse',
        AddressLine1 VARCHAR2(50) PATH '$.AddressLine1',
        AddressLine2 VARCHAR2(50) PATH '$.AddressLine2',
        City VARCHAR2(50) PATH '$.City',
        State VARCHAR2(50) PATH '$.State',
        County VARCHAR2(50) PATH '$.County',
        Zip NUMBER PATH '$.Zip',
        Country VARCHAR2(50) PATH '$.Country',
        ContactLastName VARCHAR2(50) PATH '$.ContactLastName',
        ContactFirstName VARCHAR2(50) PATH '$.ContactFirstName',
        ContactPhone NUMBER PATH '$.ContactPhone',
        ContactEmail VARCHAR2(50) PATH '$.ContactEmail'
      )
    ) ac,
    JSON_TABLE(
      Entity[*], '$'
      COLUMNS (
        RevenueRegion NUMBER PATH '$.RevenueRegion',
        ProductCode NUMBER PATH '$.ProductCode',
        CompanyCode NUMBER PATH '$.CompanyCode',
        OrderEntityType VARCHAR2(50) PATH '$.OrderEntityType',
        InputMethod VARCHAR2(50) PATH '$.InputMethod',
        RevenueSortCode VARCHAR2(50) PATH '$.RevenueSortCode',
        PriceType VARCHAR2(50) PATH '$.PriceType',
        PEName VARCHAR2(50) PATH '$.PEName',
        ParentCompanyCode VARCHAR2(50) PATH '$.ParentCompanyCode',
        PaymentMethod VARCHAR2(50) PATH '$.PaymentMethod',
        BankAccountId NUMBER PATH '$.BankAccountId',
        PaymentTerms VARCHAR2(50) PATH '$.PaymentTerms',
        GroupInvoicingFlag VARCHAR2(1) PATH '$.GroupInvoicingFlag',
        InvoiceFrequency VARCHAR2(50) PATH '$.InvoiceFrequency',
        InvoiceDeliveryMethod VARCHAR2(50) PATH '$.InvoiceDeliveryMethod',
        InvoiceDeliveryEmailAddress VARCHAR2(50) PATH '$.InvoiceDeliveryEmailAddress',
        Feature JSON PATH '$.Feature[*]'
      )
    ) e,
    JSON_TABLE(
      Feature[*], '$'
      COLUMNS (
        ItemNumber VARCHAR2(50) PATH '$.ItemNumber',
        LineActionType VARCHAR2(50) PATH '$.LineActionType',
        Volume NUMBER PATH '$.Volume',
        ProcessingFrequency VARCHAR2(50) PATH '$.ProcessingFrequency',
        ProcessingCycles NUMBER PATH '$.ProcessingCycles',
        PriceStructureType VARCHAR2(50) PATH '$.PriceStructureType',
        ListRate NUMBER PATH '$.ListRate',
        MinPrice NUMBER PATH '$.MinPrice',
        BasePrice NUMBER PATH '$.BasePrice',
        DiscountPercent NUMBER PATH '$.DiscountPercent',
        EstimatedStartDate VARCHAR2(50) PATH '$.EstimatedStartDate',
        ImplExcepCode VARCHAR2(50) PATH '$.ImplExcepCode',
        RollcallableFlag VARCHAR2(1) PATH '$.RollcallableFlag',
        SBNRFlag VARCHAR2(1) PATH '$.SBNRFlag',
        DM JSON PATH '$.DM'
      )
    ) f,
    JSON_TABLE(
      DM, '$'
      COLUMNS (
        AssociateID NUMBER PATH '$.AssociateID',
        PrimaryFlag VARCHAR2(1) PATH '$.PrimaryFlag'
      )
    ) dm
  ) o;

  -- Print the XML data
  DBMS_OUTPUT.PUT_LINE(xml_data);
END;
/
