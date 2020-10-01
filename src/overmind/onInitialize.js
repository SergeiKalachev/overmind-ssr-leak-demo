import { rehydrate } from "overmind";

export const onInitialize = ({ state }) => {
  const mutations = window.__OVERMIND_MUTATIONS;

  rehydrate(state, mutations);
};
