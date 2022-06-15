import {DocumentStore} from 'ravendb';

const userStore = new DocumentStore('', '');
userStore.initialize();