import { SetterOrUpdater, atom, selector } from "recoil";

import { Repositories } from "utils/types/github.type";

/**
 * Recoil container for manipulating with projects data
 */
export default class RepositoriesContainer {
  static current = atom<Repositories>({
    key: "repositories",
    default: [],
  });

  static currentQuery = selector<Repositories>({
    key: "repositoriesQuery",
    get: ({ get }) => get(this.current),
    set: ({ set }, data) => set(this.current, data),
  });

  /**
   * Change or update repositories data
   * @param {SetterOrUpdater<Repositories>} set pre-created RecoilState by useSetRecoilState() in component
   * @param {Repositories} data
   */
  static change = (
    set: SetterOrUpdater<Repositories>,
    repositories: Repositories
  ) => set(repositories);
}
