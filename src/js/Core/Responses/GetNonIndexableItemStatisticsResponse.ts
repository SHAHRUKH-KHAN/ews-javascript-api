import ServiceResponse = require("./ServiceResponse");
import NonIndexableItemStatistic = require("../../MailboxSearch/NonIndexableItemStatistic");
import JsonObject = require("../JsonObject");
import ExchangeService = require("../ExchangeService");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
class GetNonIndexableItemStatisticsResponse extends ServiceResponse {
    NonIndexableStatistics: NonIndexableItemStatistic[];//System.Collections.Generic.List<NonIndexableItemStatistic>;
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
}
export = GetNonIndexableItemStatisticsResponse;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
