const domain = "https://jsonplaceholder.typicode.com";

export const getUsersUrl = () => `${domain}/users`;

export const getUserUrl = (userId) => `${domain}/users/${userId}`;

export const getUserPostsUrl = (userId) => `${domain}/users/${userId}/posts`;

export const getUserAlbumsUrl = (userId) => `${domain}/users/${userId}/albums`;

export const getUserTodosUrl = (userId) => `${domain}/users/${userId}/todos`;

export const getAlbumUrl = (albumId) => `${domain}/albums/${albumId}`;

export const getAlbumPhotosUrl = (albumId) =>
  `${domain}/albums/${albumId}/photos`;

export const getPostUrl = (postId) => `${domain}/posts/${postId}`;

export const getPostCommentsUrl = (postId) =>
  `${domain}/posts/${postId}/comments`;
