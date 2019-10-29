import {Injectable, OnInit} from '@angular/core';
import { Component } from '@angular/core';
import * as RecordRTC from 'recordrtc';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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

  constructor(private domSanitizer: DomSanitizer) {
  }
  sanitize(url: string) {
    return this.domSanitizer.bypassSecurityTrustUrl(url);
  }
  initiateRecording() {
    this.recording = true;
    let mediaConstraints = {
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
    this.messageArray.push({user: 'You', value: this.response});
    this.answers[this.index] = this.answer;
    console.log(this.answers);
    this.askQuestions(this.index);
    this.answer = '';
  }
}
