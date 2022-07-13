import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeI } from '../../models/employee.interface';
import { PositionI } from '../../models/position.interface';
import { EmployeesService } from '../../services/employees.service';
import { PositionsService } from '../../services/positions.service';

@Component({
    selector: 'app-modify-employee',
    templateUrl: './modify-employee.component.html',
    styleUrls: ['./modify-employee.component.css']
})
export class ModifyEmployeeComponent {

    // constructor(private route: ActivatedRoute, private router: Router, private employeesService: EmployeesService, private positionsService: PositionsService) { }

    // ngOnInit(): void {

    //     this.employeeToModify = this.employeesService.getEmployeeById(this.route.snapshot.params['id']);

    //     this.newNames = this.employeeToModify.names;
    //     this.newSurnames = this.employeeToModify.surnames;        
    //     this.newDni = this.employeeToModify.dni;
    //     this.selectedPositionId = this.employeeToModify.position.id;

    //     this.positionsToSelect = this.positionsService.getPositions();

    //     this.action = this.route.snapshot.queryParams['action'];
    // }


    // employeeToModify!: EmployeeI;

    // positionsToSelect!: PositionI[];
    // selectedPositionId!: number;

    // action!: string;

    // newNames!: string;
    // newSurnames!: string;
    // newDni!: number;

    // showError: boolean = false;
    // errorMessage: string = "";

    // modifyEmployee() {        
    //     if (this.action === "delete") {
    //         const errorNumber = this.employeesService.deleteEmployee(this.employeeToModify.id);
    //         if (errorNumber === 0) {
    //             this.router.navigate([''])
    //         }
    //         this.showError = true;
    //         this.errorMessage = this.employeesService.getErrorMessage(errorNumber);
    //     }
    //     if (this.action === "edit") {
    //         const errorNumber = this.employeesService.editEmployee(this.employeeToModify.id, this.newNames, this.newSurnames, this.newDni, this.positionsService.getPositionById(this.selectedPositionId));            
    //         if (errorNumber === 0) {
    //             this.router.navigate([''])
    //         }
    //         this.showError = true;
    //         this.errorMessage = this.employeesService.getErrorMessage(errorNumber);
    //     }
    // }

}
