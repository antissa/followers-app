import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent {

  forma;

  constructor(fb: FormBuilder){
    this.forma = fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email: [],
        phone: []
      }),
      topics: fb.array([])
    })
  }

  addTopic(topic: HTMLInputElement){
    this.topics.push(new FormControl(topic.value))
    topic.value='';
  }

  removeTopic(topic: FormControl){
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  get topics(){
    return this.forma.get('topics') as FormArray
  }


}
