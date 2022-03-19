interface IEmployee {
  getYearsWorked(): number;

}

interface IContractor {
  getHoursWorked(): number;
}

class Employee implements IEmployee {
  private yearsWorked: number;

  getYearsWorked(): number {
    return this.yearsWorked; //siempre existirá,asinto,pues es required<T>al crear un objeto
  }

  /* Required<T>hace requeridas todas las propiedades de T.Es sólo syntactic sugar */
  constructor(metaData: Required<{ yearsWorked: number }>) {
    this.yearsWorked = metaData.yearsWorked;
  }
}

class Contractor implements IContractor {
  private hoursWorked: number;

  getHoursWorked(): number {
    return this.hoursWorked;
  }

  constructor(metadata: Required<{ hoursWorked: number }>) {
    this.hoursWorked = metadata.hoursWorked;
  }
}


class ContractorAdapter extends Employee{
  constructor(contractor:Contractor){
    super({yearsWorked: contractor.getHoursWorked()/2080});
  }
}

const employee1 = new Employee({ yearsWorked: 5 });
const employee2 = new Employee({ yearsWorked: 10 });

const contractor1 = new Contractor({ hoursWorked: 10 });
const employee3 = new ContractorAdapter(contractor1);

const employeeList: Employee[] = [
  employee1,
  employee2,
  employee3
];

employeeList.forEach(employee =>{
  console.log(employee.getYearsWorked())
})

console.log(employee3 instanceof Employee);