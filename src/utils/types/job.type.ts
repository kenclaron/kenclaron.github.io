export default interface JobType {
  company: { [key: string]: string };
  date: {
    started_at: string;
    ended_at: string;
  };
  description: { [key: string]: string };
  image: {
    name: string;
    color: string;
  };
  inn: number;
  location: { [key: string]: string };
  products: string[];
  profession: { [key: string]: string };
  url: string;
}
