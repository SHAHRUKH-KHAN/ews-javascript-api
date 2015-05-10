import EwsServiceXmlWriter = require("../../../Core/EwsServiceXmlWriter");
import JsonObject = require("../../../Core/JsonObject");
import ExchangeService = require("../../../Core/ExchangeService");
import EwsServiceXmlReader = require("../../../Core/EwsServiceXmlReader");
			
import Recurrence = require("./Recurrence");						
 class IntervalPattern extends Recurrence {
	Interval: number;
	private interval: number;
	InternalWritePropertiesToXml(writer: EwsServiceXmlWriter): void{ throw new Error("Not implemented.");}
	LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): void{ throw new Error("Not implemented.");}
	PatternToJson(service: ExchangeService): JsonObject{ throw new Error("Not implemented.");}
	TryReadElementFromXmlJsObject(reader: EwsServiceXmlReader): boolean{ throw new Error("Not implemented.");}
}
export = IntervalPattern;


//------------modulename->Microsoft.Exchange.WebServices.Data.Recurrence------------


			
