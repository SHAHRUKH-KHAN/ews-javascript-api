import ServiceResponse = require("./ServiceResponse");
import JsonObject = require("../JsonObject");
import ExchangeService = require("../ExchangeService");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
class GetPasswordExpirationDateResponse extends ServiceResponse {
    PasswordExpirationDate: Date;
    private passwordExpirationDate: Date;
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
}
export = GetPasswordExpirationDateResponse;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
