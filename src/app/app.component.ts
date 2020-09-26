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

  onButtonClick = () => {
    this.doEncoding();
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
        chunkedFirst =  chunkedFirst.substr(1);
        chunkedSecond = chunkedSecond.substr(1);
        console.log(chunkedFirst);
        console.log(chunkedSecond);
      }
      if (chunkedFirst !== '') {
        this.processedMessage = `${this.processedMessage}${chunkedFirst}`
      }
    }
  }

  chunkString(str, length): string {
    return str.match(new RegExp('.{1,' + length + '}', 'g'));
  }

  onChangedoEncoding(): void {
    this.doEncode = !this.doEncode;
  }

  onChangeMessage(value: any) {
    this.message = value;
  }
}