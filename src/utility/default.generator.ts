import { Injectable, Logger } from "@nestjs/common";

@Injectable()
export class DefaultGenerator {
  private logger = new Logger();

  private possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  private text = '';
  private date = new Date();
  private day = '';


  public generateAccountNumber(): any {
    this.day = (this.date.getDate() < 10 ? '0' : '') + this.date.getDate();
    const month =
      (this.date.getMonth() + 1 < 10 ? '0' : '') + (this.date.getMonth() + 1);
    const year = this.date.getFullYear().toString().substr(2, 2);
    const customDate = '' + month + this.day + year;
    for (let i = 0; i < 16; i++) {
      this.text += this.possible.charAt(
        Math.floor(Math.random() * this.possible.length),
      );
    }
    const transId = this.text + customDate;
    this.logger.log('generated accountNumber --- ' + transId);
    return transId;
  }
}
