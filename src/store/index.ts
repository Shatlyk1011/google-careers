import { InjectionKey } from 'vue';
import { createStore, Store } from 'vuex';

import state from '@/store/state';
import mutations from '@/store/mutations';
import getters from '@/store/getters';
import actions from '@/store/actions';
import { GlobalState } from '@/store/types';

export const key: InjectionKey<Store<GlobalState>> = Symbol();

const store = createStore<GlobalState>({
  state,
  mutations,
  actions,
  getters,
  strict: true,
});

export default store;
