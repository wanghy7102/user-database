const domain = "https://jsonplaceholder.typicode.com";

export const getUsersUrl = () => `${domain}/users`;

export const getUserPostsUrl = (userId) => `${domain}/users/${userId}/posts`;
