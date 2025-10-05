interface Project {
  name: string;
  img: string;
  description1: string;
  description2: string;
  live: string;
  client: string;
  server?: string;
}

declare const projects: Project[];
export default projects;
