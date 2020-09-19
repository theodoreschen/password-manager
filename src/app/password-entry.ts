import { HashAlgorithm } from "./hash-algorithm.enum";
import { PasswordEntryInterface } from "./password-entry-interface";

export class PasswordEntry implements PasswordEntryInterface {
  sitename: string;
  weburl: string;
  hashalgo: HashAlgorithm;
  seed: string;
  pwlen: number;
  comments: string;

  constructor(
    sitename?: string, weburl?: string, hashalgo?: HashAlgorithm,
    seed?: string, pwlen?: number, comments?: string
  ) {
    this.sitename = sitename? sitename : "";
    this.weburl = weburl? weburl : "";
    this.hashalgo = hashalgo? hashalgo : null;
    this.seed = seed? seed : "";
    this.pwlen = pwlen? pwlen : 0;
    this.comments = comments? comments : "";
  }

  serialize = function (): string {
    return `<${this.sitename}: ${this.hashalgo}(${this.seed})[${this.pwlen}]>`
  };

  clear = function (): void {
    this.sitename = "";
    this.weburl = "";
    this.hashalgo = "";
    this.seed = "";
    this.pwlen = 0;
    this.comments = "";
  }
}