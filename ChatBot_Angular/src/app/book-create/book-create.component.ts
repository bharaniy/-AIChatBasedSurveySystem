import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../api.service';
import {FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {Injectable} from '@angular/core';
import * as RecordRTC from 'recordrtc';
import {DomSanitizer} from '@angular/platform-browser';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  customerForm: FormGroup;
  firstName: string = '';
  lastName = '';
  id: string = '';
  emailId: string = '';
  locatedCity: string = '';
  dOb: string = '';
  gender: string = '';
  phoneNumber: string = '';
  professorName = '';
  evaluationSet = '';
  title = 'untitled';
  question: string;
  questions: string[] = [
    'Hi!, Welcome to Review Bot, An AI based Chat survey system',
    'How does the Professor teach classes?',
    'What should the Professor start doing?',
    'What is the best thing about their teaching?',
    'What can you change about his teaching?',
    'Thank you',
  ];
  messageArray = [{user: 'Bot', value: ''}];
  answers: string[] = [];
  answer: string;
  response: string;
  index = 0;
  private record;
  private recording = false;
  private url;
  private error;
  audioFiles: any[] = [];
  constructor(private domSanitizer: DomSanitizer, private router: Router, private api: ApiService, private formBuilder: FormBuilder) {
  }
  sanitize(url: string) {
    return this.domSanitizer.bypassSecurityTrustUrl(url);
  }
  initiateRecording() {
    this.recording = true;
    const mediaConstraints = {
      video: false,
      audio: true
    };
    navigator.mediaDevices
      .getUserMedia(mediaConstraints)
      .then(this.successCallback.bind(this), this.errorCallback.bind(this));
  }
  successCallback(stream) {
    let options = {
      mimeType: 'audio/wav',
      numberOfAudioChannels: 1
    };
    let StereoAudioRecorder = RecordRTC.StereoAudioRecorder;
    this.record = new StereoAudioRecorder(stream, options);
    this.record.record();
  }
  stopRecording() {
    this.recording = false;
    this.record.stop(this.processRecording.bind(this));
    this.storeRecording(this);
  }
  storeRecording(blob) {
    console.log('store method');
    this.audioFiles.push(blob);
    console.log(blob);
  }
  processRecording(blob) {
    this.url = URL.createObjectURL(blob);
    console.log(this.url);
    console.log(blob);
  }
  errorCallback(error) {
    this.error = 'Can not play audio in your browser';
  }

  ngOnInit() {
    this.chatInit();
    this.customerForm = this.formBuilder.group({
      answer: [null, Validators.required],
    });
  }
  askQuestions(i) {
    console.log('askQuestion method');
    console.log(this.questions);
    console.log(this.questions[i]);
    setTimeout(() => {
      this.question = this.questions[i];
      this.messageArray.push({user: 'Bot', value: this.question});
      console.log(this.question);
    }, 2000);
    this.index++;
  }

  chatInit() {
    this.askQuestions(this.index);
  }

  sendMessage() {
    console.log('method entered');
    console.log(this.answer);
    this.response = this.answer;
    console.log(this.customerForm.value.answer + 'form');
    this.messageArray.push({user: 'You', value: this.customerForm.value.answer});
    this.answers[this.index] = this.answer;
    console.log(this.answers);
    this.askQuestions(this.index);
    this.answer = '';
  }

  onFormSubmit(form: NgForm) {
    console.log('onformsubmit');
    this.api.postBook(form)
      .subscribe(res => {
        const id = res['_id'];
       // this.router.navigate(['/book-details', id]);
      }, (err) => {
        console.log(err);
      });
  }
}
