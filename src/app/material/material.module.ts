import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
    imports: [MatTableModule, MatFormFieldModule, MatInputModule, MatSortModule],
    exports: [MatTableModule, MatFormFieldModule, MatInputModule, MatSortModule]
})
export class MeterialModule {}