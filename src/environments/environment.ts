// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  _BASE_URL: 'https://nodenet-server.herokuapp.com/api',
    POSTS_BASE_URL: 'https://nodenet-server.herokuapp.com/api/post',
    POSTS: {
        ADD_POST: 'add',
        GET_POST: 'view',
        UPDATE_POST: 'update',
        DELETE_POST: 'delete',
        LIKE_POST: 'like',
        TIMELINE_ALL: 'timeline',
        USER_POSTS: 'all'
    },
    USER_BASE_URL: 'https://nodenet-server.herokuapp.com/api/user',
    USERS: {
        GET_USER: 'get',
        GET_USER_WITH_POSTS: 'view',
        SEARCH_USER:'search',
        UPDATE_USER: 'update',
        DELETE_USER: 'delete',
        FOLLOW_USER: 'follow',
        UNFOLLOW_USER: 'unfollow',
        SUGGESTION: 'suggestion',
        GET_FOLLOWERS: 'followers',
        GET_FOLLOWINGS: 'followings'
    },
    AUTH_BASE_URL: 'https://nodenet-server.herokuapp.com/api/auth',
    AUTH: {
        REGISTER: 'register',
        LOGIN: 'login'
    },
    IMAGES_PATH: 'https://nodenet-server.herokuapp.com/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.