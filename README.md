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

   xml_data CLOB := EMPTY_CLOB();

BEGIN
   SELECT XMLAGG(XMLELEMENT("OrderTransactions",
                  XMLELEMENT("Order",
                      XMLELEMENT ("TransactionDateTime", b.TransactionDateTime),
                   XMLELEMENT ("OrgCode", b.OrgCode),
                   XMLELEMENT ("SourceTransactionID", b.SourceTransactionID),
                   XMLELEMENT ("SourceUser", b.SourceUser),
                   XMLELEMENT ("SourceReferenceNumber",
                               b.SourceReferenceNumber),
                   XMLELEMENT ("OracleOrderType", b.OracleOrderType),
                   XMLELEMENT ("QuoteName", b.QuoteName),
                   XMLELEMENT ("CustomerAccountNumber",
                               b.CustomerAccountNumber),
                   XMLELEMENT ("PrimarySalesPersonAssociateID",
                               b.PrimarySalesPersonAssociateID),
                   XMLELEMENT ("BookPriceName", b.BookPriceName),
                   XMLELEMENT ("AutoSubmitFlag", b.AutoSubmitFlag),
                     XMLAGG(
                        XMLELEMENT("AddressContact",
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
                     ),
                      xmlelement("OrderComment",b.OrderComment),
                     XMLAGG(
                        XMLELEMENT("Entity",
                           XMLELEMENT("RevenueRegion", en.RevenueRegion),
                           XMLELEMENT("ProductCode", en.ProductCode),
                           XMLELEMENT("CompanyCode", en.CompanyCode),
                           XMLELEMENT("OrderEntityType", en.OrderEntityType),
                           XMLELEMENT("InputMethod", en.InputMethod),
                           XMLELEMENT("RevenueSortCode", en.RevenueSortCode),
                           XMLELEMENT("PriceType", en.PriceType),
                           XMLELEMENT("PEName", en.PEName),
                           XMLELEMENT("ParentCompanyCode", en.ParentCompanyCode),
                           XMLELEMENT("PaymentMethod", en.PaymentMethod),
                           XMLELEMENT("BankAccountId", en.BankAccountId),
                           XMLELEMENT("PaymentTerms", en.PaymentTerms),
                           XMLELEMENT("GroupInvoicingFlag", en.GroupInvoicingFlag),
                           XMLELEMENT("InvoiceFrequency", en.InvoiceFrequency),
                           XMLELEMENT("InvoiceDeliveryMethod", en.InvoiceDeliveryMethod),
                           XMLELEMENT("InvoiceDeliveryEmailAddress", en.InvoiceDeliveryEmailAddress),
                           XMLAGG(
                              XMLELEMENT("Feature",
                                 XMLELEMENT("ItemNumber", ft.ItemNumber),
                                 XMLELEMENT("LineActionType", ft.LineActionType),
                                 XMLELEMENT("Volume", ft.Volume),
                                 XMLELEMENT("ProcessingFrequency", ft.ProcessingFrequency),
                                 XMLELEMENT("ProcessingCycles", ft.ProcessingCycles),
                                 XMLELEMENT("PriceStructureType", ft.PriceStructureType),
                                 XMLELEMENT("ListRate", ft.ListRate),
                                 XMLELEMENT("MinPrice", ft.MinPrice),
                                 XMLELEMENT("BasePrice", ft.BasePrice),
                                 XMLELEMENT("DiscountPercent", ft.DiscountPercent),
                                 XMLELEMENT("EstimatedStartDate", ft.EstimatedStartDate),
                                 XMLELEMENT("ImplExcepCode", ft.ImplExcepCode),
                                 XMLELEMENT("RollcallableFlag", ft.RollcallableFlag),
                                 XMLELEMENT("SBNRFlag", ft.SBNRFlag),
                                 XMLELEMENT("DM",
                                    XMLELEMENT("AssociateID", ft.DM.AssociateID),
                                    XMLELEMENT("PrimaryFlag", ft.DM.PrimaryFlag)
                                 )
                              )
                           )
                        )
                     )
                  )
               )
            ).getClobVal()
      
   INTO xml_data
   FROM  JSON_TABLE (
             json_data, '$.OrderTransactions.Order[*]'
             COLUMNS (TransactionDateTime VARCHAR2 (100)
                         PATH '$.TransactionDateTime',
                      OrgCode VARCHAR2 (100) PATH '$.OrgCode',
                      SourceTransactionID VARCHAR2 (100)
                         PATH '$.SourceTransactionID',
                      SourceUser VARCHAR2 (100) PATH '$.SourceUser',
                      SourceReferenceNumber VARCHAR2 (100)
                         PATH '$.SourceReferenceNumber',
                      OracleOrderType VARCHAR2 (100) PATH '$.OracleOrderType',
                      QuoteName VARCHAR2 (100) PATH '$.QuoteName',
                      CustomerAccountNumber VARCHAR2 (100)
                         PATH '$.CustomerAccountNumber',
                      PrimarySalesPersonAssociateID VARCHAR2 (100)
                         PATH '$.PrimarySalesPersonAssociateID',
                      BookPriceName VARCHAR2 (100) PATH '$.BookPriceName',
                      AutoSubmitFlag VARCHAR2 (100) PATH '$.AutoSubmitFlag',
                      AddressContact VARCHAR2 (4000)
                         FORMAT JSON
                         PATH '$.AddressContact',
                      OrderComment VARCHAR2 (100) PATH '$.OrderComment',
                      Entity VARCHAR2 (4000) FORMAT JSON PATH '$.Entity[*]',
                        RevenueRegion VARCHAR2 (100)
                         PATH '$.RevenueRegion'
                      )) b
       outer apply  JSON_TABLE(
         json_data,
         '$.OrderTransactions.Order.AddressContact[*]'
         COLUMNS (
            AddressUse VARCHAR2(100) PATH '$.AddressUse',
            AddressLine1 VARCHAR2(100) PATH '$.AddressLine1',
            AddressLine2 VARCHAR2(100) PATH '$.AddressLine2',
            City VARCHAR2(100) PATH '$.City',
            State VARCHAR2(100) PATH '$.State',
            County VARCHAR2(100) PATH '$.County',
            Zip NUMBER PATH '$.Zip',
            Country VARCHAR2(100) PATH '$.Country',
            ContactLastName VARCHAR2(100) PATH '$.ContactLastName',
            ContactFirstName VARCHAR2(100) PATH '$.ContactFirstName',
            ContactPhone NUMBER PATH '$.ContactPhone',
            ContactEmail VARCHAR2(100) PATH '$.ContactEmail'
         )
      ) ac
      outer apply JSON_TABLE(
         json_data,
         '$.OrderTransactions.Order.Entity[*]'
         COLUMNS (
            RevenueRegion NUMBER PATH '$.RevenueRegion',
            ProductCode NUMBER PATH '$.ProductCode',
            CompanyCode NUMBER PATH '$.CompanyCode',
            OrderEntityType VARCHAR2(100) PATH '$.OrderEntityType',
            InputMethod VARCHAR2(100) PATH '$.InputMethod',
            RevenueSortCode VARCHAR2(100) PATH '$.RevenueSortCode',
            PriceType VARCHAR2(100) PATH '$.PriceType',
            PEName VARCHAR2(100) PATH '$.PEName',
            ParentCompanyCode VARCHAR2(100) PATH '$.ParentCompanyCode',
            PaymentMethod VARCHAR2(100) PATH '$.PaymentMethod',
            BankAccountId NUMBER PATH '$.BankAccountId',
            PaymentTerms VARCHAR2(100) PATH '$.PaymentTerms',
            GroupInvoicingFlag VARCHAR2(100) PATH '$.GroupInvoicingFlag',
            InvoiceFrequency VARCHAR2(100) PATH '$.InvoiceFrequency',
            InvoiceDeliveryMethod VARCHAR2(100) PATH '$.InvoiceDeliveryMethod',
            InvoiceDeliveryEmailAddress VARCHAR2(100) PATH '$.InvoiceDeliveryEmailAddress'
         )
      ) en
      outer apply JSON_TABLE(
         json_data,
         '$.OrderTransactions.Order.Entity[*].Feature[*]'
         COLUMNS (
            ItemNumber VARCHAR2(100) PATH '$.ItemNumber',
            LineActionType VARCHAR2(100) PATH '$.LineActionType',
            Volume NUMBER PATH '$.Volume',
            ProcessingFrequency VARCHAR2(100) PATH '$.ProcessingFrequency',
            ProcessingCycles NUMBER PATH '$.ProcessingCycles',
            PriceStructureType VARCHAR2(100) PATH '$.PriceStructureType',
            ListRate NUMBER PATH '$.ListRate',
            MinPrice NUMBER PATH '$.MinPrice',
            BasePrice NUMBER PATH '$.BasePrice',
            DiscountPercent NUMBER PATH '$.DiscountPercent',
            EstimatedStartDate VARCHAR2(100) PATH '$.EstimatedStartDate',
            ImplExcepCode VARCHAR2(100) PATH '$.ImplExcepCode',
            RollcallableFlag VARCHAR2(100) PATH '$.RollcallableFlag',
            SBNRFlag VARCHAR2(100) PATH '$.SBNRFlag',
            DM VARCHAR2(4000) FORMAT JSON PATH '$.DM'
         )
      ) ft;

   -- Print the XML data
   DBMS_OUTPUT.PUT_LINE(xml_data);
END;
/

