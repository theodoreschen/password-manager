import { HashAlgorithm } from "./hash-algorithm.enum";

export interface PasswordEntry {
  sitename: string;
  weburl: string;
  hashalgo: HashAlgorithm;
  seed: string;
  pwlen: number;
  comments: string;
}
