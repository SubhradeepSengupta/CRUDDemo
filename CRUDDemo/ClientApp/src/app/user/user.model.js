"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hobby = exports.Gender = exports.UserModel = void 0;
var UserModel = /** @class */ (function () {
    function UserModel() {
        this.dateOfBirth = new Date();
        this.hobby = Hobby.Cricket;
        this.gender = Gender.Male;
    }
    return UserModel;
}());
exports.UserModel = UserModel;
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender = exports.Gender || (exports.Gender = {}));
var Hobby;
(function (Hobby) {
    Hobby[Hobby["Cricket"] = 0] = "Cricket";
    Hobby[Hobby["Football"] = 1] = "Football";
    Hobby[Hobby["Basketball"] = 2] = "Basketball";
})(Hobby = exports.Hobby || (exports.Hobby = {}));
//# sourceMappingURL=user.model.js.map