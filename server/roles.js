const AccessControl = require("accesscontrol");
const ac = new AccessControl();
 
exports.roles = (function() {
ac.grant("basic")
 .readOwn("profile")
 .updateOwn("profile")
 .deleteAny("profile")
 
ac.grant("supervisor")
 .extend("basic")
 .readAny("profile")
 .deleteAny("profile")
 
ac.grant("admin")
 .extend("basic")
 .extend("supervisor")
 .updateAny("profile")
 .deleteAny("profile")
 
return ac;
})();