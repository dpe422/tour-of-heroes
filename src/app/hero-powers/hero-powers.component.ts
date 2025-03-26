import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { Superpower } from '../superpower';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero-powers',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './hero-powers.component.html',
  styleUrls: ['./hero-powers.component.css']
})
export class HeroPowersComponent implements OnInit, OnChanges {
  @Input() heroId: number = 0;
  @Input() superpowers: Superpower[] = [];
  @Output() superpowersChange = new EventEmitter<Superpower[]>();

 
  superpowersForm!:any; // Declara superpowrsForm sin inicializar = this.fb.group({
  
  constructor(private fb: FormBuilder) { }
 

  ngOnInit(): void {
    this.superpowersForm = this.fb.group({
      powerList: this.fb.array([])
    });
  
    this.setExistingPowers();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['superpowers'] && !changes['superpowers'].firstChange) {
      this.setExistingPowers();
    }
  }

  powerList(): FormArray {
    return this.superpowersForm.get("powerList") as FormArray
  }

  newPower(): FormControl {
    return this.fb.control('', Validators.required)
  }

  addPower() {
    this.powerList().push(this.newPower());
    this.emitChanges();
  }

  removePower(i: number) {
    this.powerList().removeAt(i);
    this.emitChanges();
  }

  setExistingPowers() {
    this.superpowersForm.setControl('powerList', this.fb.array([]));
    this.superpowers.forEach((power) => {
      this.powerList().push(this.fb.control(power.name, Validators.required));
    });
    console.log('Form updated with existing powers:', this.superpowers);
  }

  onSubmit() {
   
    console.log(this.superpowersForm.value);
    this.emitChanges();
  }

  emitChanges() {
    const updatedPowers: Superpower[] = [];
    this.powerList().controls.forEach((control, index) => {
      updatedPowers.push({ id: index + 1, name: control.value }); // Asigna un ID único
    });
    console.log('Superpowers changed:', updatedPowers);
    this.superpowersChange.emit(updatedPowers);
  }
}
