import { HashAlgorithm } from './hash-algorithm.enum';

export interface PasswordEntryInterface {
  sitename: string;
  weburl: string;
  hashalgo: HashAlgorithm;
  seed: string;
  pwlen: number;
  comments: string;
}
