import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { CdkTableModule } from '@angular/cdk/table';
import { AppComponent } from './app.component';
import { ProjectlistComponent } from './projectlist/projectlist.component';
import { ProjectService } from './services/project.service';
import { HttpClientModule } from '@angular/common/http';
import { ProjectaddComponent } from './projectadd/projectadd.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { ContactService } from 'src/app/services/contact.service';
import { ContactaddComponent } from './contactadd/contactadd.component';
import { AddcontacttoprojectComponent } from './addcontacttoproject/addcontacttoproject.component';

@NgModule({
  exports: [
    CdkTableModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
  ],
  declarations: []
})
export class DemoMaterialModule { }

@NgModule({
  imports: [BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    AppRoutingModule,
    ReactiveFormsModule ],
  declarations: [AppComponent,
    ProjectlistComponent,
    ProjectaddComponent,
    ContactlistComponent,
    ContactaddComponent,
    AddcontacttoprojectComponent],
  bootstrap: [AppComponent],
  providers: [ProjectService, ContactService],
  entryComponents: [ProjectaddComponent, ContactaddComponent, AddcontacttoprojectComponent]
})
export class AppModule { }
