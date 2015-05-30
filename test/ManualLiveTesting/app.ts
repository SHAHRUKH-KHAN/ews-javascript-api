
import AutodiscoverService = require("../../src/js/Autodiscover/AutodiscoverService");
import ExchangeVersion = require("../../src/js/Enumerations/ExchangeVersion");
import ExchangeCredentials = require("../../src/js/Credentials/ExchangeCredentials");
import UserSettingName = require("../../src/js/Enumerations/UserSettingName");
import DomainSettingName = require("../../src/js/Enumerations/DomainSettingName");
import ExchangeService = require("../../src/js/Core/ExchangeService");
import BasePropertySet = require("../../src/js/Enumerations/BasePropertySet");
import PropertySet = require("../../src/js/Core/PropertySet");

import {EnumHelper, base64Helper, DOMParser, StringHelper} from "../../src/js/ExtensionMethods";
import FolderId = require("../../src/js/ComplexProperties/FolderId");
import WellKnownFolderName = require("../../src/js/Enumerations/WellKnownFolderName");
import ext = require("../../src/js/ExtensionMethods");
import {EwsLogging} from "../../src/js/Core/EwsLogging";

import credentials = require("./credentials");

class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    div: HTMLElement
    timerToken: number;
    identity: <T>(arg: T[]) => T;
    loggingIdentity: <T extends string>(arg: T) => T


    start() {
        //EwsLogging.DebugLogEnabled = true;
        //var dd = new ext.DOMParser()
        //var domdata = dd.parseFromString('<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"> <soap:Body> <soap:Fault> <faultcode>soap:Client</faultcode> <faultstring>Invalid input</faultstring> <faultactor >http://sseely2/AYS17Sept2002/Service1.asmx</faultactor> <detail> <PersonErrorInfo xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> <ItemInError TextValue="FirstError"></ItemInError> <CorrectRegularExpression >^([A-Z])([a-z])+</CorrectRegularExpression> </PersonErrorInfo> <PersonErrorInfo xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> <ItemInError>LastName</ItemInError> <CorrectRegularExpression >^([A-Z])([a-z])+</CorrectRegularExpression> </PersonErrorInfo> <PersonErrorInfo xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> <ItemInError>EmailAddress</ItemInError> <CorrectRegularExpression >^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$</CorrectRegularExpression> </PersonErrorInfo> </detail> </soap:Fault> </soap:Body></soap:Envelope>', "text/xml");
        //var objdata = ext.Parsers.xml2js.parseXMLNode(domdata.documentElement, true);

        //var vv = objdata;
        //return;
        var colorName: string = Color[2];
        var cname = Object.prototype.toString.call(Color).slice(8, -1);;
        var exch = new ExchangeService(ExchangeVersion.Exchange2010);

        var rawXML = '<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"> <s:Header> <h:ServerVersionInfo MajorVersion="15" MinorVersion="1" MajorBuildNumber="154" MinorBuildNumber="18" Version="V2_42" xmlns:h="http://schemas.microsoft.com/exchange/services/2006/types" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"/> </s:Header> <s:Body> <m:GetFolderResponse xmlns:m="http://schemas.microsoft.com/exchange/services/2006/messages" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:t="http://schemas.microsoft.com/exchange/services/2006/types"> <m:ResponseMessages> <m:GetFolderResponseMessage ResponseClass="Success"> <m:ResponseCode>NoError</m:ResponseCode> <m:Folders> <t:CalendarFolder> <t:FolderId Id="AAMkADVmNzUzM2M2LTY1ODgtNGIwNS05NWUwLTE5MzJhNWRhNWIzZQAuAAAAAAAt9OU5vf4nTaa38x9WV1pGAQB0vGFf3HZOSb1IxPAYl2sPAAAAAAENAAA=" ChangeKey="AgAAABYAAAB0vGFf3HZOSb1IxPAYl2sPAAAAAAA3"/> <t:ParentFolderId Id="AAMkADVmNzUzM2M2LTY1ODgtNGIwNS05NWUwLTE5MzJhNWRhNWIzZQAuAAAAAAAt9OU5vf4nTaa38x9WV1pGAQB0vGFf3HZOSb1IxPAYl2sPAAAAAAEIAAA=" ChangeKey="AQAAAA=="/> <t:FolderClass>IPF.Appointment</t:FolderClass> <t:DisplayName>Calendar</t:DisplayName> <t:TotalCount>0</t:TotalCount> <t:ChildFolderCount>0</t:ChildFolderCount> <t:EffectiveRights> <t:CreateAssociated>true</t:CreateAssociated> <t:CreateContents>true</t:CreateContents> <t:CreateHierarchy>true</t:CreateHierarchy> <t:Delete>true</t:Delete> <t:Modify>true</t:Modify> <t:Read>true</t:Read> <t:ViewPrivateItems>true</t:ViewPrivateItems> </t:EffectiveRights> <t:PermissionSet> <t:CalendarPermissions> <t:CalendarPermission> <t:UserId> <t:DistinguishedUser>Default</t:DistinguishedUser> </t:UserId> <t:CanCreateItems>false</t:CanCreateItems> <t:CanCreateSubFolders>false</t:CanCreateSubFolders> <t:IsFolderOwner>false</t:IsFolderOwner> <t:IsFolderVisible>false</t:IsFolderVisible> <t:IsFolderContact>false</t:IsFolderContact> <t:EditItems>None</t:EditItems> <t:DeleteItems>None</t:DeleteItems> <t:ReadItems>TimeOnly</t:ReadItems> <t:CalendarPermissionLevel>FreeBusyTimeOnly</t:CalendarPermissionLevel> </t:CalendarPermission> <t:CalendarPermission> <t:UserId> <t:DistinguishedUser>Anonymous</t:DistinguishedUser> </t:UserId> <t:CanCreateItems>false</t:CanCreateItems> <t:CanCreateSubFolders>false</t:CanCreateSubFolders> <t:IsFolderOwner>false</t:IsFolderOwner> <t:IsFolderVisible>false</t:IsFolderVisible> <t:IsFolderContact>false</t:IsFolderContact> <t:EditItems>None</t:EditItems> <t:DeleteItems>None</t:DeleteItems> <t:ReadItems>None</t:ReadItems> <t:CalendarPermissionLevel>None</t:CalendarPermissionLevel> </t:CalendarPermission> </t:CalendarPermissions> </t:PermissionSet> </t:CalendarFolder> </m:Folders> </m:GetFolderResponseMessage> </m:ResponseMessages> </m:GetFolderResponse> </s:Body> </s:Envelope>';
        var parser = new ext.DOMParser();
        //var xmlDoc = parser.parseFromString(rawXML, "text/xml");
        //this.treeWalker = this.xmlDoc.createTreeWalker(this.xmlDoc, NodeFilter.SHOW_ELEMENT, null, false);
        //this.currentNode = this.treeWalker.root;

        //var objjt = ext.xml2JsObject.parseXMLNode(xmlDoc.documentElement, true);
        //EwsLogging.DebugLog(objjt, true);

        //return;
        //var autod = new Microsoft.Exchange.WebServices.Autodiscover.AutodiscoverService("https://autodiscover-s.coutlook.com/autodiscover/autodiscover.svc", "singhspro.onmicrosoft.com", Microsoft.Exchange.WebServices.Data.ExchangeVersion.Exchange2013);
        //var autod = new AutodiscoverService();//"https://pod51045.outlook.com/autodiscover/autodiscover.svc", "singhspro.onmicrosoft.com", ExchangeVersion.Exchange2013);
        //autod.RedirectionUrlValidationCallback = (val) => { return true };
        //var autod = new AutodiscoverService("https://pod51045.outlook.com/autodiscover/autodiscover.svc", "microsoft.com", ExchangeVersion.Exchange2013);
        //var x = new Microsoft.Exchange.WebServices.Data.ExchangeService(Microsoft.Exchange.WebServices.Data.ExchangeVersion.Exchange2010_SP2);
        //autod.Credentials = new ExchangeCredentials(credentials.userName, credentials.password);
        exch.Credentials = new ExchangeCredentials(credentials.userName, credentials.password);
        //EwsLogging.DebugLog(exch.Credentials, true);
        
        exch.Url = "https://outlook.office365.com/Ews/Exchange.asmx";
        var fid: FolderId = new FolderId(WellKnownFolderName.Root);
        exch.BindToFolder(fid, PropertySet.FirstClassProperties)
            .then((sr) => {
            console.log("------------");
            EwsLogging.Log(sr, true,true);
            console.log("------------");
        }, (e: any) => {
                EwsLogging.Log(e, true, true);
                console.log("------------");
            });



        return;
        //        var util = require('util');
        //        exch.AutodiscoverUrl("gs@singhspro.onmicrosoft.com",(url) => { return true; }).then((resp) => {
        //            console.log(util.inspect(exch.Url, { showHidden: false, depth: null, colors: true }));
        //            exch.BindToFolder
        //            console.log("------------");
        //        },(err) => {
        //                
        //                console.log(util.inspect(err, { showHidden: false, depth: null, colors: true }));
        //                console.log("------------");
        //
        //            });
        //
        //        return;

        var s: UserSettingName[] = [];
        s.push(UserSettingName.InternalEwsUrl);
        s.push(UserSettingName.ExternalEwsUrl);

        //        s.push(UserSettingName.UserDisplayName);
        //        s.push(UserSettingName.UserDN);
        //        s.push(UserSettingName.EwsPartnerUrl);
        //        s.push(UserSettingName.DocumentSharingLocations);
        //        s.push(UserSettingName.MailboxDN);
        //        s.push(UserSettingName.ActiveDirectoryServer);
        //        s.push(UserSettingName.CasVersion);
        //        s.push(UserSettingName.ExternalWebClientUrls);
        //        s.push(UserSettingName.ExternalImap4Connections );
        //        s.push(UserSettingName.AlternateMailboxes);
        //autod.GetUserSettings("gstest@singhspro.onmicrosoft.com", "Thament@Singhs.pro"], s).then((sr) => {
        //        autod.GetUserSettings("gstest@singhspro.onmicrosoft.com", UserSettingName.InternalEwsUrl, UserSettingName.ExternalEwsUrl, UserSettingName.AlternateMailboxes,
        //            UserSettingName.MailboxDN, UserSettingName.CasVersion, UserSettingName.DocumentSharingLocations, UserSettingName.ActiveDirectoryServer, UserSettingName.EwsPartnerUrl)
        //            .then((sr) => {
        //            var util = require('util');
        //            console.log(util.inspect(sr, { showHidden: false, depth: null, colors: true }));
        //            console.log(autod.Url);
        //            //console.log(sr);
        //            console.log("------------");
        //        }, (e: any) => {
        //                var util = require('util');
        //                console.log(util.inspect(e, { showHidden: false, depth: null, colors: true }));
        //                console.log("------------");
        //            });
        //return;
        ////var d: DomainSettingName[] = [];
        //////return;
        ////d.push(DomainSettingName.ExternalEwsUrl);
        ////d.push(DomainSettingName.ExternalEwsVersion);
        ////autod.GetDomainSettings("singhspro.onmicrosoft.com", d).then((dr) => {
        ////    var util = require('util');
        ////    console.log(util.inspect(dr, { showHidden: false, depth: null, colors: true }));
        ////    console.log("------------");
        ////},(e: any) => {
        ////        console.log(e);
        ////        console.log("------------");
        ////    });


        //this.span.innerHTML = "";
        //this.div.innerHTML = "";
        //this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString() + " " + colorName + " " + cname, 500);
    }

    stop() {
        clearTimeout(this.timerToken);

    }

}

enum Color { Red = 1, Green, Blue };
var greeter = new Greeter();
greeter.start();


//{ "Body" : 
//    { "FolderIds" : 
//        [ 
//        { "Id" : "inbox",
//            "__type" : "DistinguishedFolderId:#Exchange"
//          } 
//      ],
//      "FolderShape" : 
//        { "BaseShape" : "AllProperties" 
//        }
//    },
//  "Header" : 
//    { "RequestServerVersion" : "Exchange2013_SP1" 
//    }
//}
// -----------fault code
//{ __prefix: 's',
//  __xmlns:
//   { s: 'http://schemas.xmlsoap.org/soap/envelope/',
//     a: 'http://schemas.microsoft.com/exchange/services/2006/types',
//     e: 'http://schemas.microsoft.com/exchange/services/2006/errors',
//     t: 'http://schemas.microsoft.com/exchange/services/2006/types' },
//  Body:
//   { __prefix: 's',
//     Fault:
//      { __prefix: 's',
//        faultcode: 'a:ErrorSchemaValidation',
//        faultstring:
//         { 'xml:lang': 'en-US',
//           faultstring: 'The request failed schema validation: The required attribute \'Id\' is missing.' },
//        detail:
//         { ResponseCode: 'ErrorSchemaValidation',
//           Message: 'The request failed schema validation.',
//           MessageXml:
//            { __prefix: 't',
//              LineNumber: '1',
//              LinePosition: '472',
//              Violation: 'The required attribute \'Id\' is missing.' } } } } }