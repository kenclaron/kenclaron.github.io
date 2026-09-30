import type { Repositories } from "utils/types/github.type";

const HASH = 1;

const SERVICE_URL = `https://opengraph.githubassets.com/${HASH}`

export class OpenGraph {
  /**
   * Get OpenGraph image
   */
  static getImageURL(full_name: Repositories[0]['full_name']) {
    return [SERVICE_URL, full_name].join('/');
  }
}

export default OpenGraph;
