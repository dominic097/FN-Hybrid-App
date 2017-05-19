/**
 * Created by Dominic on 5/10/2017.
 */

import {Component, OnInit, AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import {ChatInterface} from '../../shared/core/interfaces/index';
import {ListView} from 'tns-core-modules/ui/view';
import {TextField} from 'tns-core-modules/ui/text-field';
import {BotService} from '../../shared/core/services/bot/bot.service';
import {ChatConfig} from './chat.component.config';
import {ActivatedRoute} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'chat-window',
  templateUrl: 'chart.component.html',
  styleUrls: ['chat.component.css'],
  providers: [BotService]
})
export class ChatComponent implements OnInit {

  @ViewChild("list") lv: ElementRef;
  @ViewChild("textfield") tf: ElementRef;
  @ViewChild("chatPage") cp: ElementRef;

  private _paramSubcription: any;
  private chats: Array<ChatInterface> = [];
  private lstView: ListView;
  private txtField: TextField;
  private context = {
    _timeStamp: Date.now(),
    isDirty: false,
    uid: '',
    contextObj: {},
    contextObjKey: false
  };
  private botRsp = {};


  ngOnInit() {
    let chatServiceProvider = Object.assign({}, ChatConfig.chatServiceProvider);
    this.chats = [];
  }

  ngAfterViewInit() {
    let routParams: Object;
    this.lstView = this.lv.nativeElement;
    this.txtField = this.tf.nativeElement;
    this._paramSubcription = this._activatedRoute.params.subscribe(params => {
      routParams = params;
      console.log(JSON.stringify(routParams))
      if (routParams.hasOwnProperty('message'))
        this.chat(routParams.message);
      else
        this.chat('hi', true);
    });
  }

  constructor(private service: BotService, private _activatedRoute: ActivatedRoute) {
  }

  resetContext() {
    this.context = {
      _timeStamp: Date.now(),
      isDirty: false,
      uid: '',
      contextObj: {},
      contextObjKey: false
    };

    this.botRsp = {};
  }

  scroll(count: number) {
    console.log('scrolling to ', count);
    this.lstView.scrollToIndex(count - 1);
    this.lstView.refresh();
  }

  pushChatMessage(mess, _from, _to) {
    this.chats.push({
      id: '246-ZSDR-458',
      message: mess,
      from: _from,
      to: _to,
      date: '10/5 - 4:23'
    });
    this.scroll(this.chats.length);
  }

  analyseReply(mess) {
    let rep = this.botRsp;

    // Set context
    if (rep.best && rep.best.intent && !this.context.isDirty) {
      this.context._timeStamp = Date.now();
      this.context.uid = rep.best.intent;
      this.context.isDirty = true;
    }

    if (this.context.isDirty && mess && this.context.contextObjKey) {
      this.context.contextObj[this.context.contextObjKey.toString()] = mess;
    }

    if (this.context.isDirty && rep.requiredValues.length === Object.keys(rep.best.values).length) {
      if (rep.best.hasOwnProperty('intent')) {
        this.pushChatMessage(rep.response || '', 'Bot', "user");
        this.analyseBotResponse(rep);
      }
      this.resetContext();
    }

    if (this.context.isDirty && rep.requiredValues.length > 0 && rep.requiredValues.length !== Object.keys(rep.best.values).length) {
      let len = 0,
        breakOp = false;
      while (len < rep.requiredValues.length && !breakOp) {
        if (!rep.best.values.hasOwnProperty(rep.requiredValues[len])) {
          this.pushChatMessage(rep.requiredValues[len] + " ?", 'Bot', "user");
          this.context.contextObj = rep.best.values;
          this.context.contextObjKey = rep.requiredValues[len];
          breakOp = true;
        }
        len++;
      }
    }
  }

  chat(message: string, hide?: boolean) {
    let chatServiceProvider = Object.assign({}, ChatConfig.chatServiceProvider);

    console.log(message);

    if (!hide)
      this.chats.push({
        id: '246-ZSDR-458',
        message: message,
        from: 'user',
        to: 'Bot',
        date: '10/5 - 4:23'
      });

    this.txtField.text = '';
    chatServiceProvider.url = chatServiceProvider.url.replace('$mess', this.context.isDirty ? this.botRsp.best.intent + message : message);
    this.service.getBotResponse(chatServiceProvider).subscribe(
      data => {
        console.log(data);
        if (data.best) {
          if (!this.context.isDirty) {
            this.botRsp = data;
          }
          else if (this.context.isDirty && data.best.intent === this.context.uid) {
            Object.assign(this.botRsp.best.values, data.best.values);
          }
          this.analyseReply(false);
        }
        else if (this.context.isDirty && !data.best) {
          this.analyseReply(message);
        }
      },
      err => {
        this.pushChatMessage("Sorry, i could't get that. could be elaborate :)", 'Bot', "user");
        console.log(err);
      }
    )
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

  analyseBotResponse(res) {
    if (res.best.intent === "create:zvol") {
      console.log("create:zol in progress");
    }
    else if (res.best.intent === "create:vol") {
      console.log("create:vol in progress");
    }
    else  if (res.best.intent === "create:Dataset") {
      console.log("create:Dataset in progress");
    }
  }
}
