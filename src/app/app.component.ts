import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  message = '';
  processedMessage = '';
  doEncode = true;
  encodedMessage = '';
  otherEncodedMessage: string;

  onButtonClick = () => {
    this.doEncoding();
    this.doOtherEncoding();
    console.log(this.otherEncodedMessage);
  };

  doEncoding(): void {
    this.processedMessage = '';
    if (this.doEncode) {
      let oddArray: string[] = [];
      let evenArray: string[] = [];
      console.log(this.message);
      const translateThis = [...this.message];
      translateThis.forEach((c, i) => {
        if (i % 2 === 0) {
          oddArray.push(c);
        } else {
          evenArray.push(c);
        }
      });
      this.processedMessage = oddArray.join('');
      this.processedMessage = `${this.processedMessage}${evenArray.join('')}`;
    } else {
      const halfMessageLength = Math.round(this.message.length / 2);
      let chunked = this.chunkString(this.message, halfMessageLength);

      let chunkedFirst = chunked[0];
      let chunkedSecond = chunked[1];
      while (chunkedFirst !== '' && chunkedSecond !== '') {
        const firstChar = chunkedFirst.charAt(0);
        const secondChar = chunkedSecond.charAt(0);
        this.processedMessage = `${this.processedMessage}${firstChar}${secondChar}`;
        chunkedFirst = chunkedFirst.substr(1);
        chunkedSecond = chunkedSecond.substr(1);
        console.log(chunkedFirst);
        console.log(chunkedSecond);
      }
      if (chunkedFirst !== '') {
        this.processedMessage = `${this.processedMessage}${chunkedFirst}`;
      }
    }
  }

  chunkString(str, length): string[] {
    return str.match(new RegExp('.{1,' + length + '}', 'g'));
  }

  // 'ditiseentestberichtvoortoon'
  // 'debtoinevottronieio sscr etht '
  doOtherEncoding(): void {
    this.otherEncodedMessage = '';
    if (this.doEncode) {
      const chunked: string[] = this.chunkString(this.message, 6);
      const chunks = chunked.length;
      for (let i = 0; i < 6; i++) {
        chunked.forEach((word, index) => {
          let letter = word[i];
          if (letter === undefined || letter === null) {
            letter = ' ';
          }
          this.otherEncodedMessage = `${this.otherEncodedMessage}${letter}`;
        });
      }
    } else {
      let tempArray: any = [];
      let incommingMessage = this.message;
      const numArrays = Math.floor(this.message.length / 6) - 1;
      console.log(numArrays);
      let counter = -1;
      while (incommingMessage !== '') {
        counter++;
        let letter = incommingMessage.charAt(0);
        if (tempArray[counter] === null || tempArray[counter] === undefined) {
          tempArray[counter] = '';
        }
        if (letter === null || letter === undefined) {
          letter = ' ';
        }
        tempArray[counter] = `${tempArray[counter]}${letter}`;
        incommingMessage = incommingMessage.substr(1);
        if (counter > numArrays - 1) {
          counter = -1;
        }
      }
      this.otherEncodedMessage = tempArray.join('').trim();
    }
  }

  onChangedoEncoding(): void {
    this.doEncode = !this.doEncode;
  }

  onChangeMessage(value: any) {
    this.message = value;
  }
}
