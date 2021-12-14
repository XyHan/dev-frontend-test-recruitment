export interface MusicServiceInterface {
  listAllPaginated(page: number, size: number, search: string): any;
  search: any;
}
