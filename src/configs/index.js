import instance from "./api"


export const endpoints = {
  SearchUser : (username) => instance.get(`/search/users?q=${username}` ),
  UserMore : (username) => instance.get(`/users/${username}` ),
  GetRepostOfUser : (username) => instance.get(`/users/${username}/repos`),
  GetUserRepoPerPage : (username, currentPage) => instance.get(`/users/${username}/repos?per_page=6&page=${currentPage}`),
  UserFollowers : (username) => instance.get(`/users/${username}/followers` ),
  FollowingOfUser : (username) => instance.get(`/users/${username}/following` ),
  StarsOfUser : (username) => instance.get(`/users/${username}/following` ),
} 
