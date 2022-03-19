var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    /* Required<T>hace requeridas todas las propiedades de T.Es sólo syntactic sugar */
    function Employee(metaData) {
        this.yearsWorked = metaData.yearsWorked;
    }
    Employee.prototype.getYearsWorked = function () {
        return this.yearsWorked; //siempre existirá,asinto,pues es required<T>al crear un objeto
    };
    return Employee;
}());
var Contractor = /** @class */ (function () {
    function Contractor(metadata) {
        this.hoursWorked = metadata.hoursWorked;
    }
    Contractor.prototype.getHoursWorked = function () {
        return this.hoursWorked;
    };
    return Contractor;
}());
var ContractorAdapter = /** @class */ (function (_super) {
    __extends(ContractorAdapter, _super);
    function ContractorAdapter(contractor) {
        return _super.call(this, { yearsWorked: contractor.getHoursWorked() / 2080 }) || this;
    }
    return ContractorAdapter;
}(Employee));
var employee1 = new Employee({ yearsWorked: 5 });
var employee2 = new Employee({ yearsWorked: 10 });
var contractor1 = new Contractor({ hoursWorked: 10 });
var employee3 = new ContractorAdapter(contractor1);
var employeeList = [
    employee1,
    employee2,
    employee3
];
employeeList.forEach(function (employee) {
    console.log(employee.getYearsWorked());
});
console.log(employee3 instanceof Employee);
