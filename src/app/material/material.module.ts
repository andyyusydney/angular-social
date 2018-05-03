import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material';

@NgModule({
    imports: [MatTableModule, MatFormFieldModule, MatInputModule, MatSortModule, MatButtonModule],
    exports: [MatTableModule, MatFormFieldModule, MatInputModule, MatSortModule, MatButtonModule]
})
export class MeterialModule {}