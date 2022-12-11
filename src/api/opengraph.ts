import axios from "axios";

const SERVICE = process.env.REACT_APP_API_SERVICE as string;

export class OpenGraph {
  /**
   * Get OpenGraph image
   */
  static getImageURL(url: string) {
    return SERVICE + `/opengraph/image/get?url=${url}`;
  }

  /**
   * Get Status
   */
  static async getStatus(services: boolean = false): Promise<Status> {
    return new Promise((resolve, reject) =>
      axios
        .get(SERVICE + "/status", { params: { services } })
        .then((status) => resolve(status.data))
        .catch(() => reject())
    );
  }
}

type Status = {
  message: string;
  code: number;
  services?: {
    github: number;
    opengraph: number;
  };
};

export default OpenGraph;
