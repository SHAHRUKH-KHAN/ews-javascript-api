import TypedPropertyDefinition = require("./TypedPropertyDefinition");
import JsonObject = require("../Core/JsonObject");
import PropertyBag = require("../Core/PropertyBag");
import ExchangeService = require("../Core/ExchangeService");

class GenericPropertyDefinition<TPropertyValue> extends TypedPropertyDefinition {
    Type: any;//System.Type;
    Parse(value: string): any {
        debugger;
        return value;
        //todo:fix converting generictype
        throw new Error("GenericPropertyDefinition.ts - Parse : Not implemented.");
    }
    WriteJsonValue(jsonObject: JsonObject, propertyBag: PropertyBag, service: ExchangeService, isUpdateOperation: boolean): any { throw new Error("GenericPropertyDefinition.ts - WriteJsonValue : Not implemented."); }
}

export = GenericPropertyDefinition;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
