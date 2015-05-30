import FolderPermissionCollection = require("../ComplexProperties/FolderPermissionCollection");
import ComplexPropertyDefinitionBase = require("./ComplexPropertyDefinitionBase");
import PropertyDefinitionFlags = require("../Enumerations/PropertyDefinitionFlags");
import ExchangeVersion = require("../Enumerations/ExchangeVersion");
import ServiceObject = require("../Core/ServiceObjects/ServiceObject");
import ComplexProperty = require("../ComplexProperties/ComplexProperty");
import Folder = require("../Core/ServiceObjects/Folders/Folder");
import {EwsLogging} from "../Core/EwsLogging";
class PermissionSetPropertyDefinition extends ComplexPropertyDefinitionBase {
    get Type(): any {//} Type {
        return undefined;// new Type("FolderPermissionCollection");
    }
    constructor(propertyName: string, xmlElementName: string, version: ExchangeVersion, uri: string, flags: PropertyDefinitionFlags) {
        super(propertyName, xmlElementName, version, uri, flags);
    }
    CreatePropertyInstance(owner: ServiceObject): ComplexProperty {
        var folder: Folder = owner.IsFolderInstance() ? <Folder>owner : null;// ((owner instanceof Folder) ? <Folder>owner : null);
        EwsLogging.Assert(folder !== null, "PermissionCollectionPropertyDefinition.CreatePropertyInstance", "The owner parameter is not of type Folder or a derived class.");
        return new FolderPermissionCollection(folder);
    }
}
export = PermissionSetPropertyDefinition;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
