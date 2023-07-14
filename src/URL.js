const domain = "https://jsonplaceholder.typicode.com";

export const getUsersUrl = () => `${domain}/users`;

export const getUserUrl = (userId) => `${domain}/users/${userId}`;

export const getUserPostsUrl = (userId) => `${domain}/users/${userId}/posts`;

export const getUserAlbumsUrl = (userId) => `${domain}/users/${userId}/albums`;
