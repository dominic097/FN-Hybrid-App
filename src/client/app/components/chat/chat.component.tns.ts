/**
 * Created by Dominic on 5/10/2017.
 */

import {Component, OnInit, AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ChatInterface} from '../../shared/core/interfaces/index';
import {ListView} from 'tns-core-modules/ui/view';
import {TextField} from 'tns-core-modules/ui/text-field';
import {ScrollView} from 'tns-core-modules/ui/scroll-view';

@Component({
  moduleId: module.id,
  selector: 'chat-window',
  templateUrl: 'chart.component.html',
  styleUrls: ['chat.component.css']
})
export class ChatComponent implements OnInit {

  @ViewChild("list") lv: ElementRef;
  @ViewChild("textfield") tf: ElementRef;
  @ViewChild("chatPage") cp: ElementRef;

  private chats: Array<ChatInterface> = [];
  private lstView: ListView;
  private txtField: TextField;


  ngOnInit() {
    console.log(this);

    this.chats = [
      {
        id: '246-ZSDR-458',
        message: 'B-HI',
        from: 'Bot',
        to: 'user',
        date: '10/5 - 4:23'
      },
      {
        id: '246-ZSDR-458',
        message: 'Hello',
        from: 'user',
        to: 'Bot',
        date: '10/5 - 4:25'
      },
      {
        id: '246-ZSDR-458',
        message: 'GM u there !!!',
        from: 'Bot',
        to: 'user',
        date: '10/5 - 4:26'
      },
      {
        id: '246-ZSDR-458',
        message: 'GM',
        from: 'user',
        to: 'Bot',
        date: '10/5 - 4:27'
      }
    ];
  }

  ngAfterViewInit() {
    this.lstView = this.lv.nativeElement;
    this.txtField = this.tf.nativeElement;
  }

  constructor() {
  }


  scroll(count: number) {
    console.log('scrolling to ', count)
    this.lstView.scrollToIndex(count - 1);
    this.lstView.refresh();
  }

  chat(message: string) {
    console.log(message);
    this.chats.push({
      id: '246-ZSDR-458',
      message: message,
      from: 'user',
      to: 'Bot',
      date: '10/5 - 4:23'
    })
    this.txtField.text = '';
  }

  filter(sender) {
    if (sender === "Bot") {
      return "me"
    }
    else {
      return "them"
    }
  }

  align(sender) {
    if (sender === 'Bot') {
      return 'right';
    }
    else {
      return 'left';
    }
  }

  showImage(sender) {
    if (sender === 'user') {
      return 'collapsed';
    }
    else {
      return 'visible';
    }
  }
}
