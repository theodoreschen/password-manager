import { HashAlgorithm } from "./hash-algorithm.enum";

export interface PasswordEntry {
  sitename: string;
  weburl: string;
  hashalgo: HashAlgorithm;
  seed: string;
  pwlen: number;
  comments: string;
}

export function serializePasswordEntry(p: PasswordEntry): string {
  return `<${p.sitename}: ${p.hashalgo}(${p.seed})[${p.pwlen}]>`
}